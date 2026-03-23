import { useState, useMemo, type ReactNode } from "react";
import { AuthContext } from "./authContext";

function isTokenValid(token: string): boolean {
  try {
    const payload = JSON.parse(
      atob(token.split(".")[1].replaceAll("-", "+").replaceAll("_", "/")),
    ) as { exp?: number };
    return !payload.exp || Date.now() / 1000 < payload.exp;
  } catch {
    return false;
  }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => {
    const stored = sessionStorage.getItem("admin_token");
    return stored && isTokenValid(stored) ? stored : null;
  });

  const login = (newToken: string) => {
    sessionStorage.setItem("admin_token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    sessionStorage.removeItem("admin_token");
    setToken(null);
  };

  const value = useMemo(
    () => ({ token, isAdmin: token !== null, login, logout }),
    [token],
  );

  return <AuthContext value={value}>{children}</AuthContext>;
};
