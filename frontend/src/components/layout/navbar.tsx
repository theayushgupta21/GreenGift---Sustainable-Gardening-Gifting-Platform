"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu } from "lucide-react";


export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-[#f8f5ef]/95 backdrop-blur border-b">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white font-bold">
                        G
                    </div>

                    <div>
                        <h1 className="font-bold text-lg">Green Nursery</h1>
                        <p className="text-xs text-gray-500">From Seed to Bloom</p>
                    </div>
                </Link>

                <div className="hidden md:flex flex-1 max-w-md items-center bg-white rounded-xl border px-3 py-2">
                    <Search className="w-5 h-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search plants, pots..."
                        className="w-full outline-none px-2 bg-transparent"
                    />
                </div>

                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/">Home</Link>
                    <Link href="/shop">Shop</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </nav>

                <div className="flex items-center gap-2">
                    <button className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-green-700">
                        English / हिंदी
                    </button>

                    <button className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-2 py-2 px-4 rounded-lg">
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Cart (2)
                    </button>

                    <button className="md:hidden">
                        <Menu />
                    </button>
                </div>
            </div>
        </header>
    );
}