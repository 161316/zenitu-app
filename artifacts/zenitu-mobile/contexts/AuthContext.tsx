import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiFetch } from "@/lib/api";
import { syncPushTokenToServer } from "@/lib/notifications";

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ error?: string }>;
  register: (name: string, email: string, password: string) => Promise<{ error?: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  loading: true,
  login: async () => ({}),
  register: async () => ({}),
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    apiFetch("/auth/me")
      .then((r) => (r.ok ? r.json() : null))
      .then((data: AuthUser | null) => {
        if (!cancelled) {
          setUser(data ?? null);
          setLoading(false);
          if (data) {
            AsyncStorage.getItem("zenitu-notifications").then((val) => {
              syncPushTokenToServer(val === "true").catch(() => {});
            }).catch(() => {});
          }
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const res = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) return { error: data.error ?? "Erro ao entrar" };
      setUser(data as AuthUser);
      AsyncStorage.getItem("zenitu-notifications").then((val) => {
        syncPushTokenToServer(val === "true").catch(() => {});
      }).catch(() => {});
      return {};
    } catch {
      return { error: "Erro de conexão" };
    }
  }, []);

  const register = useCallback(async (name: string, email: string, password: string) => {
    try {
      const res = await apiFetch("/auth/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) return { error: data.error ?? "Erro ao criar conta" };
      setUser(data as AuthUser);
      AsyncStorage.getItem("zenitu-notifications").then((val) => {
        syncPushTokenToServer(val === "true").catch(() => {});
      }).catch(() => {});
      return {};
    } catch {
      return { error: "Erro de conexão" };
    }
  }, []);

  const logout = useCallback(async () => {
    await apiFetch("/auth/logout", { method: "POST" }).catch(() => {});
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
