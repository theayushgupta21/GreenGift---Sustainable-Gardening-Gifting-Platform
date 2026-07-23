"use client"

import React from 'react'
import { useState } from "react";
import Link from "next/link";
import { GiLeafSwirl } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";


export default function Navbar() {
    const [language, setLanguage] = useState("en");
    const [active, setActive] = useState("login");
    return (
        <>
            <header className=" bg-green-900 py-3 px-6   flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <GiLeafSwirl className="text-black text-2xl transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    <h1 className="text-yellow-200 text-2xl font-bold  transition-transform duration-300 hover:scale-110 cursor-pointer">GreenGift</h1>
                </div>

                <div>
                    <nav>
                        <ul className="flex  gap-4  text-xl font-semibold text-white translate-x-65   ">
                            <a href="/" className='text-white hover:text-green-300 hover:underline-offset-2'>Home</a>
                            <a href="/" className='text-white hover:text-green-300 hover:underline-offset-2'>Store</a>
                            <a href="/" className='text-white hover:text-green-300 hover:underline-offset-2'>Contact</a>
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-4xl translate-x-60 ">
                    <input
                        type="search"
                        placeholder="Search plants..."
                        className="flex-1 bg-transparent outline-none text-gray-700 text-lg placeholder-gray-400"
                    />

                    <button
                        type="button"
                        className="ml-2 text-gray-500 transition-all duration-300 hover:text-green-600 hover:scale-110 active:scale-95"
                    >
                        <IoSearch className="w-5 h-5" />
                    </button>


                </div>



                <div className="flex items-center gap-2 translate-x-3">
                    <Link
                        href="/login"
                        onClick={() => setActive("login")}
                        className={`px-4 py-2 rounded-full transition-all duration-300 ${active === "login"
                            ? "text-green-400 font-semibold"
                            : "text-white hover:text-green-200"
                            }`}
                    >
                        Login
                    </Link>

                    <Link
                        href="/signup"
                        onClick={() => setActive("signup")}
                        className={`px-4 py-2 rounded-full transition-all duration-300 ${active === "signup"
                            ? "text-green-400 font-semibold"
                            : "text-white hover:text-green-200"
                            }`}
                    >
                        Sign Up
                    </Link>
                </div>


            </header>




        </>
    )
}
