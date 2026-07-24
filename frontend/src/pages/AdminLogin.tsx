"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Shield, Key, ArrowLeft, Loader2, Lock, CheckCircle2 } from "lucide-react";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    // Simulate login API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950/20 via-emerald-900/10 to-amber-500/5 flex flex-col justify-center items-center py-12 px-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -z-10" />

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate("/login")}
        className="absolute top-8 left-6 md:left-12 flex items-center gap-2 text-xs font-semibold text-emerald-800 hover:text-emerald-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Selection
      </motion.button>

      <div className="max-w-md w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-emerald-950 border border-emerald-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-white"
        >
          {/* Top colored line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 to-emerald-500" />

          <AnimatePresence mode="wait">
            {!success ? (
              <motion.div
                key="admin-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mx-auto">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-black text-white tracking-tight">Admin Portal</h2>
                  <p className="text-xs text-emerald-300/60 font-light">
                    Protected administration & management log
                  </p>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 bg-amber-500/10 border border-amber-500/20 text-xs font-medium text-amber-400 rounded-xl text-center"
                  >
                    {error}
                  </motion.div>
                )}

                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block" htmlFor="email">
                      Admin Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="admin@greengift.in"
                        className="w-full pl-10 pr-4 py-3 bg-emerald-900/40 border border-emerald-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-white placeholder-emerald-700/60"
                      />
                      <Shield className="w-4 h-4 text-emerald-500/60 absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block" htmlFor="password">
                        Security Password
                      </label>
                      <button
                        type="button"
                        onClick={() => alert("Admin password recovery workflow (UI placeholder) simulated.")}
                        className="text-[10px] text-amber-400 hover:text-amber-300 font-semibold hover:underline bg-transparent border-none outline-none"
                      >
                        Reset Password
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-3 bg-emerald-900/40 border border-emerald-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-white placeholder-emerald-700/60"
                      />
                      <Key className="w-4 h-4 text-emerald-500/60 absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold rounded-2xl transition-all duration-300 text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Verifying Admin...
                      </>
                    ) : (
                      "Authorize & Enter"
                    )}
                  </button>
                </form>

                <div className="flex items-center justify-center gap-2 text-[10px] text-emerald-400/50 font-light border-t border-emerald-900 pt-4">
                  <Lock className="w-3.5 h-3.5" /> Secure SSL 256-Bit Encrypted Connection
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="admin-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 space-y-4 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-white flex items-center gap-1.5 justify-center">
                    Verification Succeeded
                  </h3>
                  <p className="text-xs text-emerald-300/60 font-light">
                    Welcome to the central administrator console. Redirecting...
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
