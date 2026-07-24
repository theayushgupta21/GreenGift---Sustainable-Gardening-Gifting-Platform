"use client"

import React from 'react'
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiLeafSwirl } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";

export default function Navbar() {
    const [language, setLanguage] = useState("en");
    const [active, setActive] = useState("login");
    const location = useLocation();

    const isLinkActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <header className="bg-emerald-950/95 backdrop-blur-md sticky top-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center border-b border-emerald-900 shadow-md">
            <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2">
                    <GiLeafSwirl className="text-emerald-400 text-2xl transition-transform duration-300 hover:rotate-45 cursor-pointer" />
                    <h1 className="text-yellow-200 text-xl font-bold transition-transform duration-300 hover:scale-105 cursor-pointer">GreenGift</h1>
                </Link>
            </div>

            <nav className="hidden md:block">
                <ul className="flex gap-8 text-sm font-semibold text-white/90">
                    <li>
                        <Link 
                            to="/" 
                            className={`hover:text-emerald-300 transition-colors duration-200 ${
                                isLinkActive("/") ? "text-emerald-400 font-bold" : "text-white"
                            }`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/store" 
                            className={`hover:text-emerald-300 transition-colors duration-200 ${
                                isLinkActive("/store") ? "text-emerald-400 font-bold" : "text-white"
                            }`}
                        >
                            Store
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            className={`hover:text-emerald-300 transition-colors duration-200 ${
                                isLinkActive("/about") ? "text-emerald-400 font-bold" : "text-white"
                            }`}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contact" 
                            className={`hover:text-emerald-300 transition-colors duration-200 ${
                                isLinkActive("/contact") ? "text-emerald-400 font-bold" : "text-white"
                            }`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-2 bg-emerald-900/60 border border-emerald-800/60 px-3.5 py-1.5 rounded-full">
                    <input
                        type="search"
                        placeholder="Search plants..."
                        className="bg-transparent border-none outline-none text-white text-xs placeholder-emerald-200/50 w-32 focus:w-44 transition-all duration-300"
                    />
                    <button
                        type="button"
                        className="text-emerald-200 transition-all duration-300 hover:text-emerald-400 hover:scale-110 active:scale-95"
                    >
                        <IoSearch className="w-4 h-4" />
                    </button>
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <Link
                        to="/contact"
                        onClick={() => setActive("login")}
                        className={`px-3 py-1.5 rounded-full transition-all duration-200 border border-transparent ${
                            active === "login"
                                ? "text-emerald-300 bg-emerald-900/40 font-semibold"
                                : "text-white hover:text-emerald-200"
                        }`}
                    >
                        Login
                    </Link>

                    <Link
                        to="/contact"
                        onClick={() => setActive("signup")}
                        className={`px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold transition-all duration-200`}
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    )
}

