interface CloudflareAssets {
  fetch(input: Request): Promise<Response>;
}

interface Env {
  ADMIN_PASSWORD_HASH: string;
  JWT_SECRET: string;
  GITHUB_TOKEN: string;
  GITHUB_OWNER: string;
  GITHUB_REPO: string;
  GITHUB_BRANCH: string;
  ASSETS: CloudflareAssets;
}

// ── Encoding helpers ─────────────────────────────────────────────

/** Encode a UTF-8 string to base64 (handles Norwegian chars safely). */
function utf8ToBase64(str: string): string {
  const bytes = new TextEncoder().encode(str);
  const binStr = Array.from(bytes, (b) => String.fromCharCode(b)).join("");
  return btoa(binStr);
}

/** Encode base64 to base64url (for JWT). */
function toBase64url(b64: string): string {
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

function b64url(str: string): string {
  return toBase64url(btoa(str));
}

// ── Crypto helpers ───────────────────────────────────────────────

async function sha256Hex(text: string): Promise<string> {
  const hash = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(text),
  );
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

// ── JWT ──────────────────────────────────────────────────────────

async function signJWT(
  payload: Record<string, unknown>,
  secret: string,
): Promise<string> {
  const header = b64url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const body = b64url(JSON.stringify(payload));
  const key = await hmacKey(secret);
  const sigBytes = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(`${header}.${body}`),
  );
  const sig = toBase64url(
    btoa(String.fromCharCode(...new Uint8Array(sigBytes))),
  );
  return `${header}.${body}.${sig}`;
}

async function verifyJWT(token: string, secret: string): Promise<boolean> {
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [header, body, sig] = parts;

  const key = await hmacKey(secret);
  const sigBytes = Uint8Array.from(
    atob(sig.replace(/-/g, "+").replace(/_/g, "/")),
    (c) => c.charCodeAt(0),
  );

  const valid = await crypto.subtle.verify(
    "HMAC",
    key,
    sigBytes,
    new TextEncoder().encode(`${header}.${body}`),
  );
  if (!valid) return false;

  const decoded = JSON.parse(
    atob(body.replace(/-/g, "+").replace(/_/g, "/")),
  ) as { exp?: number };
  if (decoded.exp && Date.now() / 1000 > decoded.exp) return false;

  return true;
}

// ── Response helpers ─────────────────────────────────────────────

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

// ── Auth middleware ──────────────────────────────────────────────

async function requireAuth(request: Request, env: Env): Promise<boolean> {
  const auth = request.headers.get("Authorization");
  if (!auth?.startsWith("Bearer ")) return false;
  return verifyJWT(auth.slice(7), env.JWT_SECRET);
}

// ── GitHub file update ───────────────────────────────────────────

async function updateGitHubFile(
  path: string,
  content: string,
  env: Env,
): Promise<Response> {
  const apiUrl = `https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${path}`;
  const headers = {
    Authorization: `token ${env.GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
    "Content-Type": "application/json",
    "User-Agent": "BPS-Admin",
  };

  const getRes = await fetch(apiUrl, { headers });
  if (!getRes.ok) return json({ error: "Failed to read file from GitHub" }, 502);
  const fileData = (await getRes.json()) as { sha: string };

  const putRes = await fetch(apiUrl, {
    method: "PUT",
    headers,
    body: JSON.stringify({
      message: `Update ${path} via admin panel`,
      content: utf8ToBase64(content),
      sha: fileData.sha,
      branch: env.GITHUB_BRANCH,
    }),
  });

  if (!putRes.ok) return json({ error: "Failed to update file on GitHub" }, 502);
  return json({ success: true });
}

// ── Route handlers ───────────────────────────────────────────────

async function handleLogin(request: Request, env: Env): Promise<Response> {
  let body: { password?: string };
  try {
    body = (await request.json()) as { password?: string };
  } catch {
    return json({ error: "Invalid request body" }, 400);
  }

  if (!body.password) return json({ error: "Missing password" }, 400);

  const hash = await sha256Hex(body.password);
  if (hash !== env.ADMIN_PASSWORD_HASH.toLowerCase()) {
    return json({ error: "Invalid password" }, 401);
  }

  const token = await signJWT(
    { role: "admin", exp: Math.floor(Date.now() / 1000) + 8 * 60 * 60 },
    env.JWT_SECRET,
  );
  return json({ token });
}

async function handleProjects(request: Request, env: Env): Promise<Response> {
  if (!(await requireAuth(request, env))) return json({ error: "Unauthorized" }, 401);

  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return json({ error: "Invalid request body" }, 400);
  }

  return updateGitHubFile(
    "src/data/projects.json",
    JSON.stringify(data, null, 2) + "\n",
    env,
  );
}

async function handleTeam(request: Request, env: Env): Promise<Response> {
  if (!(await requireAuth(request, env))) return json({ error: "Unauthorized" }, 401);

  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return json({ error: "Invalid request body" }, 400);
  }

  return updateGitHubFile(
    "src/data/team.json",
    JSON.stringify(data, null, 2) + "\n",
    env,
  );
}

// ── Entry point ──────────────────────────────────────────────────

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/login" && request.method === "POST")
      return handleLogin(request, env);

    if (pathname === "/api/admin/projects" && request.method === "PUT")
      return handleProjects(request, env);

    if (pathname === "/api/admin/team" && request.method === "PUT")
      return handleTeam(request, env);

    if (pathname.startsWith("/api/"))
      return json({ error: "Not found" }, 404);

    return env.ASSETS.fetch(request);
  },
};
