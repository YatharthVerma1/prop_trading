import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export type User = {
  id: number;
  name: string;
  email: string;
  country: string;
  status: string;
};

const API_BASE = "/api";

async function apiFetch(path: string, options: RequestInit = {}) {
  const token = localStorage.getItem("proptrader_token");
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers as Record<string, string> || {}),
  };
  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || "Something went wrong.");
  }
  return res.json();
}

export function useUser() {
  return useQuery<User | null>({
    queryKey: ["auth_user"],
    queryFn: async () => {
      const token = localStorage.getItem("proptrader_token");
      if (!token) return null;
      try {
        return await apiFetch("/auth/me");
      } catch {
        localStorage.removeItem("proptrader_token");
        return null;
      }
    },
    staleTime: 5 * 60 * 1000,
    retry: false,
  });
}

export function useLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      const data = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
      });
      localStorage.setItem("proptrader_token", data.token);
      return data.user as User;
    },
    onSuccess: (user) => {
      queryClient.setQueryData(["auth_user"], user);
      window.location.href = "/dashboard";
    },
  });
}

export function useRegister() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (details: { name: string; email: string; password: string; country: string }) => {
      const data = await apiFetch("/auth/register", {
        method: "POST",
        body: JSON.stringify(details),
      });
      localStorage.setItem("proptrader_token", data.token);
      return data.user as User;
    },
    onSuccess: (user) => {
      queryClient.setQueryData(["auth_user"], user);
      window.location.href = "/dashboard";
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      localStorage.removeItem("proptrader_token");
    },
    onSuccess: () => {
      queryClient.setQueryData(["auth_user"], null);
      window.location.href = "/";
    },
  });
}
