/// <reference types="@cloudflare/workers-types" />

interface Env {
  ASSETS: Fetcher; // Cloudflare binding — serves the built React app
  ADMIN_PASSWORD_HASH: string; // SHA-256 hex of the admin password (from .dev.vars)
  JWT_SECRET: string; // Secret used to sign tokens (from .dev.vars)
}

// Encodes bytes to a base64url string (URL-safe base64 without padding).
// Used for building JWT segments.
function base64url(bytes: Uint8Array): string {
  let str = "";
  for (const byte of bytes) str += String.fromCodePoint(byte);
  return btoa(str).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}

// Hashes a plain-text string to a lowercase hex SHA-256 string.
// e.g. "mypassword" → "89e01536ac207..."
async function sha256Hex(text: string): Promise<string> {
  const buffer = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(text),
  );
  console.log("sha func");
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Signs and returns a JWT (HS256) with the given payload and secret.
async function signJwt(payload: object, secret: string): Promise<string> {
  console.log("signjwt func");

  const enc = new TextEncoder();
  const header = base64url(
    enc.encode(JSON.stringify({ alg: "HS256", typ: "JWT" })),
  );
  const body = base64url(enc.encode(JSON.stringify(payload)));
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    enc.encode(`${header}.${body}`),
  );
  return `${header}.${body}.${base64url(new Uint8Array(sig))}`;
}

// Handles POST /api/login.
// Reads the password from the request body, hashes it, compares it to the
// stored hash, and returns a signed JWT if they match.
async function handleLogin(request: Request, env: Env): Promise<Response> {
  console.log("handlelog func");

  const body: { password: string } = await request.json();
  const { password } = body;

  if (!password) {
    return Response.json({ error: "Password required" }, { status: 400 });
  }

  const hash = await sha256Hex(password);

  if (hash !== env.ADMIN_PASSWORD_HASH) {
    return Response.json({ error: "Invalid password" }, { status: 401 });
  }

  const token = await signJwt(
    { isAdmin: true, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 8 },
    env.JWT_SECRET,
  );

  return Response.json({ token });
}

// The Worker entry point — every request starts here.
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/login" && request.method === "POST") {
      try {
        console.log("default func");

        return await handleLogin(request, env);
      } catch (e) {
        const message = e instanceof Error ? e.message : String(e);
        return Response.json({ error: message }, { status: 500 });
      }
    }

    // For everything else, serve the static React app
    return env.ASSETS.fetch(request);
  },
};
