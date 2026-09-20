"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { User, Key, ArrowLeft, Loader2, Sparkles, CheckCircle2 } from "lucide-react";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";

export default function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleLogin = () => {
    const googleAuthUrl = process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL;

    if (!googleAuthUrl) {
      setError("Google sign-in is not configured yet. Please use email and password.");
      return;
    }

    window.location.assign(googleAuthUrl);
  };

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
    <div className="min-h-screen bg-gradient-to-br from-beige-50 via-emerald-50/20 to-emerald-100/30 flex flex-col justify-center items-center py-12 px-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-800/5 rounded-full blur-3xl -z-10" />

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
          className="bg-white/90 backdrop-blur-md border border-emerald-100 rounded-3xl p-8 shadow-xl relative overflow-hidden"
        >
          {/* Top colored line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500" />

          <AnimatePresence mode="wait">
            {!success ? (
              <motion.div
                key="login-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                    <User className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-black text-emerald-950">User Login</h2>
                  <p className="text-xs text-gray-500 font-light">
                    Access your plants, orders, and eco-statistics
                  </p>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 bg-red-50 border border-red-100 text-xs font-medium text-red-600 rounded-xl text-center"
                  >
                    {error}
                  </motion.div>
                )}

                <div className="space-y-4">
                  <GoogleAuthButton onClick={handleGoogleLogin} />
                  <div className="flex items-center gap-3 text-[10px] text-gray-400 uppercase tracking-wider">
                    <div className="h-px flex-1 bg-emerald-100" />
                    <span>or sign in manually</span>
                    <div className="h-px flex-1 bg-emerald-100" />
                  </div>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block" htmlFor="email">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@example.com"
                        className="w-full pl-10 pr-4 py-3 bg-emerald-50/20 border border-emerald-100/60 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                      />
                      <User className="w-4 h-4 text-emerald-600/60 absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block" htmlFor="password">
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => alert("Password reset link (UI placeholder) has been simulated.")}
                        className="text-[10px] text-emerald-600 hover:text-emerald-500 font-semibold hover:underline"
                      >
                        Forgot Password?
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-3 bg-emerald-50/20 border border-emerald-100/60 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                      />
                      <Key className="w-4 h-4 text-emerald-600/60 absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all duration-300 text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Logging you in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>

                <div className="text-center pt-2">
                  <p className="text-xs text-gray-400 font-light">
                    New to Green Gift?{" "}
                    <Link to="/signup/user" className="text-emerald-600 hover:text-emerald-500 font-semibold hover:underline">
                      Create a User Account
                    </Link>
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="login-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 space-y-4 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-emerald-950 flex items-center gap-1.5 justify-center">
                    Login Successful <Sparkles className="w-5 h-5 text-amber-500" />
                  </h3>
                  <p className="text-xs text-gray-500 font-light">
                    Welcome back, plant lover! Redirecting to home...
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
