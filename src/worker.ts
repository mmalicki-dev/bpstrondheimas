import { SignJWT } from "jose";

interface Env {
  ASSETS: Fetcher; // Cloudflare binding — serves the built React app
  ADMIN_PASSWORD_HASH: string; // SHA-256 hex of the admin password (from .dev.vars)
  JWT_SECRET: string; // Secret used to sign tokens (from .dev.vars)
}

// Hashes a plain-text string to a lowercase hex SHA-256 string.
// e.g. "mypassword" → "89e01536ac207..."
async function sha256Hex(text: string): Promise<string> {
  const buffer = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(text), // convert string → bytes
  );
  // Convert the raw bytes to a hex string
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Handles POST /api/login.
// Reads the password from the request body, hashes it, compares it to the
// stored hash, and returns a signed JWT if they match.
async function handleLogin(request: Request, env: Env): Promise<Response> {
  const { password } = (await request.json()) as { password: string };

  if (!password) {
    return Response.json({ error: "Password required" }, { status: 400 });
  }

  const hash = await sha256Hex(password);

  // Constant-time-ish comparison — avoids returning different errors for
  // "wrong password" vs "no password" to prevent user enumeration
  if (hash !== env.ADMIN_PASSWORD_HASH) {
    return Response.json({ error: "Invalid password" }, { status: 401 });
  }

  // Sign a JWT valid for 8 hours using the JWT_SECRET
  const secret = new TextEncoder().encode(env.JWT_SECRET);
  const token = await new SignJWT({ isAdmin: true })
    .setProtectedHeader({ alg: "HS256" }) // signing algorithm
    .setExpirationTime("8h")
    .sign(secret);

  return Response.json({ token });
}

// The Worker entry point — every request starts here.
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/login" && request.method === "POST") {
      try {
        return await handleLogin(request, env);
      } catch (e) {
        // Return the real error message so we can debug if something goes wrong
        const message = e instanceof Error ? e.message : String(e);
        return Response.json(
          { errorMessage: message, error: e },
          { status: 500 },
        );
      }
    }

    // For everything else, serve the static React app
    return env.ASSETS.fetch(request);
  },
};
