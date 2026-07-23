"use client"

import React from 'react'
import { GiLeafSwirl } from "react-icons/gi";
import { RiSearchAiLine } from "react-icons/ri";

export default function Navbar() {
    return (
        <>
            <header className=" bg-green-400 py-4 px-4 rounded-3xl m-1 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <GiLeafSwirl className="text-black text-2xl" />
                    <h1 className="text-green-850 text-2xl font-bold">GreenGift</h1>
                </div>

                <div>
                    <nav>
                        <ul className="flex  gap-4  text-xl">
                            <a href="#">Home</a>
                            <a href="#">Store</a>
                            <a href="#">Contact</a>
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
                    <input
                        type="search"
                        placeholder="Search plants..."
                        className="outline-none bg-transparent" />


                </div>


            </header>




        </>
    )
}
