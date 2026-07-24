"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Compass, Trees } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-emerald-50/30 flex items-center justify-center px-6 py-20">
      <div className="max-w-md w-full text-center space-y-8 bg-white border border-emerald-100 rounded-3xl p-10 shadow-lg">
        {/* Animated Icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="w-24 h-24 rounded-3xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mx-auto"
        >
          <Trees className="w-12 h-12" />
        </motion.div>

        {/* Text */}
        <div className="space-y-3">
          <span className="text-emerald-600 font-extrabold text-sm uppercase tracking-widest">
            Error 404
          </span>
          <h1 className="text-3xl font-black text-emerald-950">
            Lost in the Woods? 🌲
          </h1>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            The path you are looking for has been pruned or doesn't exist. Let's get you back to familiar soil.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Link
            to="/"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all duration-300 text-sm shadow-md"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            to="/store"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-50 border border-emerald-100 hover:bg-emerald-100 text-emerald-700 font-bold rounded-2xl transition-all duration-300 text-sm"
          >
            <Compass className="w-4 h-4" />
            Browse Store
          </Link>
        </div>
      </div>
    </div>
  );
}
