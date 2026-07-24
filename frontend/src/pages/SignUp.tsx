"use client";

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { User, Store, ArrowRight, Sprout } from "lucide-react";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-100 via-emerald-50/30 to-emerald-100/40 flex flex-col justify-center items-center py-12 px-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-800/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl w-full text-center space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-3"
        >
          <div className="w-16 h-16 rounded-3xl bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center text-emerald-700 shadow-sm mb-2">
            <Sprout className="w-8 h-8" />
          </div>
          <span className="text-emerald-700 font-bold uppercase tracking-wider text-xs bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Join Green Gift
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-emerald-950 tracking-tight">
            Create Your Account
          </h1>
          <p className="text-gray-500 font-light max-w-md mx-auto text-sm md:text-base leading-relaxed">
            Select the type of account you want to create to start your journey.
          </p>
        </motion.div>

        {/* Portal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto pt-6">
          {/* User Registration Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}
            onClick={() => navigate("/signup/user")}
            className="bg-white/80 backdrop-blur-md border border-emerald-100/80 hover:border-emerald-300 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between text-left group relative overflow-hidden"
          >
            {/* Visual badge indicator */}
            <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
              ID: USER
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                User Registration
              </h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Join as a customer or eco-enthusiast. Buy plants, send carbon-neutral gifts, earn carbon reduction metrics, and plant trees.
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-emerald-50 flex items-center justify-between text-emerald-700 font-bold text-sm">
              <span>Register as User</span>
              <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </div>
          </motion.div>

          {/* Seller Registration Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
            onClick={() => navigate("/signup/seller")}
            className="bg-white/80 backdrop-blur-md border border-amber-100/80 hover:border-amber-300 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between text-left group relative overflow-hidden"
          >
            {/* Visual badge indicator */}
            <div className="absolute top-4 right-4 bg-amber-100 text-amber-800 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
              ID: SELLER
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-emerald-950 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                Become a Green Seller
              </h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Designed for commercial nurseries, local artisans, pot makers, and rural agricultural cooperatives wanting to sell products online.
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-emerald-50 flex items-center justify-between text-amber-700 font-bold text-sm">
              <span>Register as Seller</span>
              <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs text-gray-400 font-light pt-4"
        >
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-emerald-600 hover:text-emerald-500 font-semibold hover:underline"
          >
            Log in here
          </button>
        </motion.div>
      </div>
    </div>
  );
}
