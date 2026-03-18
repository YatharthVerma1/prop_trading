import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Simulated user data
export type User = {
  id: string;
  name: string;
  email: string;
  status: "active" | "evaluating" | "funded";
  balance: number;
};

const MOCK_USER: User = {
  id: "USR-8829",
  name: "Alex Trader",
  email: "alex@example.com",
  status: "evaluating",
  balance: 100000,
};

// Simulate Auth Hooks without real API
export function useUser() {
  return useQuery({
    queryKey: ["auth_user"],
    queryFn: async () => {
      const stored = localStorage.getItem("proptrader_auth");
      if (!stored) return null;
      await new Promise(r => setTimeout(r, 500)); // Sim network
      return MOCK_USER;
    },
  });
}

export function useLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (credentials: Record<string, string>) => {
      await new Promise(r => setTimeout(r, 1000));
      if (credentials.email === "fail@example.com") throw new Error("Invalid credentials");
      localStorage.setItem("proptrader_auth", "true");
      return MOCK_USER;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth_user"] });
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await new Promise(r => setTimeout(r, 400));
      localStorage.removeItem("proptrader_auth");
    },
    onSuccess: () => {
      queryClient.setQueryData(["auth_user"], null);
      window.location.href = "/";
    },
  });
}
