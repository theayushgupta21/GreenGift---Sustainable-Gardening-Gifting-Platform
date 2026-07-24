"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Public from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";

const images = [
    "/plant1.jfif",
    "/plant2.jfif",
    "/plant3.jfif",
    "/plant4.jfif",
];

export default function HeroSlider() {
    return (
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation
            loop
            className="h-150 w-full bg-transparent mx-20 relative"
        >
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <div className="relative w-full h-150 ">
                        <Image
                            src={img}
                            alt={`Hero ${index}`}
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                            <h1 className="text-5xl font-bold">
                                Bring Nature Home 🌿
                            </h1>

                            <p className="mt-4 text-xl">
                                Fresh Plants • Fast Delivery
                            </p>

                            <button className="mt-6 px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}