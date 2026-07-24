"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Phone, Lock, ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";

export default function UserRegister() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !phone || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    // Simulate signup API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        navigate("/login/user");
      }, 2000);
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
        onClick={() => navigate("/signup")}
        className="absolute top-8 left-6 md:left-12 flex items-center gap-2 text-xs font-semibold text-emerald-800 hover:text-emerald-600 transition-colors bg-transparent border-none outline-none cursor-pointer"
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
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-700" />

          {/* Visual Badge for Frontend Role Identification */}
          <div className="absolute top-6 right-6 bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-full border border-emerald-200">
            ID: USER
          </div>

          <AnimatePresence mode="wait">
            {!success ? (
              <motion.div
                key="register-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <h2 className="text-2xl font-black text-emerald-950">User Registration</h2>
                  <p className="text-xs text-gray-500 font-light">
                    Create an account to start gardening & gifting
                  </p>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-50 border border-red-100 text-xs font-medium text-red-600 rounded-xl text-center"
                  >
                    {error}
                  </motion.div>
                )}

                <form onSubmit={handleRegister} className="space-y-4">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block" htmlFor="name">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ayush Gupta"
                        className="w-full pl-10 pr-4 py-2.5 bg-emerald-50/20 border border-emerald-100/60 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                      />
                      <User className="w-4 h-4 text-emerald-600/60 absolute left-3.5 top-3" />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block" htmlFor="email">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ayush@example.com"
                        className="w-full pl-10 pr-4 py-2.5 bg-emerald-50/20 border border-emerald-100/60 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                      />
                      <Mail className="w-4 h-4 text-emerald-600/60 absolute left-3.5 top-3" />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block" htmlFor="phone">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 9876543210"
                        className="w-full pl-10 pr-4 py-2.5 bg-emerald-50/20 border border-emerald-100/60 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                      />
                      <Phone className="w-4 h-4 text-emerald-600/60 absolute left-3.5 top-3" />
                    </div>
                  </div>

                  {/* Password field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block" htmlFor="password">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-2.5 bg-emerald-50/20 border border-emerald-100/60 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                      />
                      <Lock className="w-4 h-4 text-emerald-600/60 absolute left-3.5 top-3" />
                    </div>
                  </div>

                  {/* Confirm Password field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-2.5 bg-emerald-50/20 border border-emerald-100/60 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                      />
                      <Lock className="w-4 h-4 text-emerald-600/60 absolute left-3.5 top-3" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all duration-300 text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      "Register Account"
                    )}
                  </button>
                </form>

                <div className="text-center pt-2">
                  <p className="text-xs text-gray-400 font-light">
                    Already have a user account?{" "}
                    <Link to="/login/user" className="text-emerald-600 hover:text-emerald-500 font-semibold hover:underline">
                      Log in here
                    </Link>
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="register-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 space-y-4 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-emerald-950">Registration Complete</h3>
                  <p className="text-xs text-gray-500 font-light">
                    Welcome to Green Gift! Redirecting to user login...
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
