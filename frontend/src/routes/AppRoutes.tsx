"use client";

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Store from "@/pages/Store";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/Login";
import AdminLogin from "@/pages/AdminLogin";
import UserLogin from "@/pages/UserLogin";
import SignUp from "@/pages/SignUp";
import UserRegister from "@/pages/UserRegister";
import SellerRegister from "@/pages/SellerRegister";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import PlantChatbot from "@/components/shared/PlantChatbot";

export default function AppRoutes() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-emerald-50/50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-emerald-50/20 text-gray-800">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/login/admin" element={<AdminLogin />} />
          <Route path="/login/user" element={<UserLogin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/user" element={<UserRegister />} />
          <Route path="/signup/seller" element={<SellerRegister />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <PlantChatbot />
    </div>
  );
}
