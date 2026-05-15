"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/careers/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/careers/admin");
      } else {
        setError("Incorrect password. Try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-background min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm"
      >
        {/* Branding */}
        <div className="text-center mb-8">
          <div className="flex items-baseline justify-center gap-1.5 mb-2">
            <span className="font-display text-[15px] font-semibold tracking-[-0.5px] text-foreground">
              PROJECT LYRA
            </span>
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span className="text-[10px] text-primary font-medium tracking-wide uppercase">
              VeLYRA Healthcare
            </span>
          </div>
          <p className="text-muted-foreground text-sm">Careers Admin</p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
          <h1 className="font-display text-2xl font-semibold text-foreground mb-6">
            Sign in
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-background border border-border rounded-lg h-12 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                placeholder="Enter admin password"
                autoFocus
              />
            </div>

            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-sm font-semibold shadow-[0_0_20px_rgba(255,92,0,0.3)]"
            >
              {loading ? "Signing in..." : "Sign In →"}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
