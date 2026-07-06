"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="bg-yellow-100 text-yellow-900 px-4 py-2 rounded-full text-sm font-medium">
                        Fresh Plants Delivered
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-6">
                        From Seed <br />
                        to Bloom 🌱
                    </h1>

                    <p className="text-lg text-gray-600 mt-6 max-w-lg">
                        Healthy plants, quality seeds, durable pots and gardening tools
                        delivered to your doorstep.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <Button className="bg-green-700 hover:bg-green-800 text-lg px-8 py-6 rounded-xl">
                            Shop Now
                        </Button>

                        <Button variant="outline" className="text-lg px-8 py-6 rounded-xl">
                            Call to Order
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative"
                >
                    <Image
                        src="/hero/hero-plants.jpg"
                        alt="Green nursery plants"
                        width={700}
                        height={700}
                        priority
                        className="rounded-3xl object-cover shadow-2xl"
                    />
                </motion.div>
            </div>
        </section>
    );
}
