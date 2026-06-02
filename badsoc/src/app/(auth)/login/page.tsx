// src/app/(auth)/login/page.tsx
"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { loginWithEmail, loginWithGoogle } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      router.push("/home");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Login failed");
    }
  }

  async function handleGoogle() {
    try {
      await loginWithGoogle();
      router.push("/home");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Google login failed");
    }
  }

  return (
    <div className="w-full max-w-sm px-6">
      {/* Logo */}
      <div className="text-center mb-8">
        <div className="w-12 h-12 rounded-xl bg-[#1B6B35] flex items-center justify-center mx-auto mb-3">
          <span className="text-white text-xl">🏸</span>
        </div>
        <h1 className="text-white text-2xl font-semibold">BadSoc</h1>
        <p className="text-white/40 text-sm mt-1">De La Salle University</p>
      </div>

      {/* Form */}
      <form onSubmit={handleLogin} className="space-y-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#1B6B35]"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#1B6B35]"
        />

        {error && <p className="text-red-400 text-xs">{error}</p>}

        <button
          type="submit"
          className="w-full bg-[#1B6B35] text-white rounded-xl py-3 text-sm font-medium hover:bg-[#134f27] transition-colors"
        >
          Sign In
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3 my-4">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-white/30 text-xs">or</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Google */}
      <button
        onClick={handleGoogle}
        className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 text-sm font-medium hover:bg-white/10 transition-colors"
      >
        Continue with Google
      </button>

      <p className="text-center text-white/30 text-xs mt-6">
        No account?{" "}
        <a href="/register" className="text-[#2d9e52] hover:underline">
          Register
        </a>
      </p>
    </div>
  );
}