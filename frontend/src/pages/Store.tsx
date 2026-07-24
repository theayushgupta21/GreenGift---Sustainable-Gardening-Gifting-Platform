"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, Sparkles, Sprout, ShoppingBag, Leaf, HelpCircle } from "lucide-react";

// Categories Data
const storeCategories = [
  {
    id: "pots",
    name: "🌸 Flower Pots",
    tagline: "Decorative & Sustainable",
    image: "/plant3.jfif",
    desc: "Premium handcrafted ceramic, terracotta, self-watering, and biodegradable nursery pots to elevate your plant styling.",
    subcategories: [
      "Artisan Ceramic Pots",
      "Terracotta Classic Pots",
      "Self-Watering Smart Pots",
      "Biodegradable Coco Coir Pots"
    ],
    accentColor: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-100 hover:border-pink-300",
    badgeColor: "bg-pink-100 text-pink-700",
  },
  {
    id: "seeds",
    name: "🌱 Seed Balls",
    tagline: "Afforestation in Your Hands",
    image: "/plant2.jfif",
    desc: "Eco-friendly clay seed balls packed with organic nutrients, native tree seeds, and wildflower seeds for easy direct-sowing.",
    subcategories: [
      "Native Tree Seed Balls",
      "Wildflower Mix Seed Balls",
      "Fruit Tree Seed Balls",
      "Afforestation Combo Packs"
    ],
    accentColor: "from-amber-500/20 to-yellow-500/20",
    borderColor: "border-amber-100 hover:border-amber-300",
    badgeColor: "bg-amber-100 text-amber-700",
  },
  {
    id: "plants",
    name: "🌿 Live Plants",
    tagline: "Nature's Air Purifiers",
    image: "/plant4.jfif",
    desc: "A wide selection of healthy, nursery-grown indoor foliage, air-purifiers, outdoor ornamentals, and medicinal herbs.",
    subcategories: [
      "NASA Air-Purifying Plants",
      "Hardy Low-Light Indoor Plants",
      "Balcony & Outdoor Flowers",
      "Traditional Medicinal Herbs"
    ],
    accentColor: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-100 hover:border-emerald-300",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "pesticides",
    name: "🍃 Organic Pesticides & Nutrition",
    tagline: "100% Chemical-Free care",
    image: "/plant1.jfif",
    desc: "Bio-fertilizers, organic pest control sprays, and premium soil mixes to keep your garden lush, vibrant, and chemical-free.",
    subcategories: [
      "Neem Oil Pest Sprays",
      "Cold-Pressed Seaweed Liquid Fertilizer",
      "Organic Vermicompost Soil",
      "Rooting Hormones & Plant Vitalizers"
    ],
    accentColor: "from-teal-500/20 to-cyan-500/20",
    borderColor: "border-teal-100 hover:border-teal-300",
    badgeColor: "bg-teal-100 text-teal-700",
  },
];

export default function Store() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = storeCategories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.subcategories.some((sub) => sub.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-emerald-50/20 min-h-screen pb-20">
      {/* Banner / Header */}
      <section className="bg-gradient-to-b from-emerald-950 to-emerald-900 text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-800/15 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/20 text-emerald-300 text-sm font-semibold mb-2">
            <Sparkles className="w-4 h-4" />
            Discover Sustainable Gardening
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
            Our Sustainable Store
          </h1>
          <p className="text-base md:text-lg text-emerald-100/80 max-w-2xl mx-auto font-light leading-relaxed">
            Gift green and propagate nature with our carefully curated gardening supplies, handcrafted pots, native seed balls, and chemical-free nutrients.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto pt-4 relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Search categories or products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 border-none shadow-lg text-sm font-medium transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="container mx-auto px-6 py-16">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-20 space-y-4">
            <HelpCircle className="w-16 h-16 text-emerald-800/25 mx-auto" />
            <h3 className="text-xl font-bold text-emerald-950">No categories found</h3>
            <p className="text-gray-500 font-light">We couldn't find anything matching "{searchQuery}". Try searching for plants, pots, or seeds.</p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-6 py-2 bg-emerald-600 text-white rounded-full text-sm font-semibold hover:bg-emerald-500 transition-colors shadow-md"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCategories.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-3xl border ${cat.borderColor} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row h-full group`}
              >
                {/* Image section */}
                <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${cat.image})` }}
                  />
                  <div className="absolute inset-0 bg-emerald-950/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Details section */}
                <div className="p-8 md:w-3/5 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${cat.badgeColor}`}>
                        {cat.tagline}
                      </span>
                      <h2 className="text-2xl font-black text-emerald-950 group-hover:text-emerald-700 transition-colors duration-300">
                        {cat.name}
                      </h2>
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                      {cat.desc}
                    </p>

                    {/* Subcategories list */}
                    <div className="space-y-2 pt-2 border-t border-emerald-50">
                      <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Includes:</h4>
                      <ul className="grid grid-cols-1 gap-1">
                        {cat.subcategories.map((sub, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-gray-600 font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    className="inline-flex items-center justify-between w-full px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all duration-300 text-sm shadow-md group/btn"
                  >
                    Explore Collection
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      {/* AI Chatbot Suggestion banner */}
      <section className="container mx-auto px-6 max-w-4xl">
        <div className="bg-gradient-to-r from-emerald-950 to-emerald-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-emerald-800/30 shadow-xl">
          <div className="space-y-4 text-center md:text-left max-w-lg">
            <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs flex items-center gap-2 justify-center md:justify-start">
              <Sparkles className="w-4 h-4" /> Personalized AI Recommendations
            </span>
            <h3 className="text-2xl font-extrabold">Find the Perfect Plant for Your Space</h3>
            <p className="text-emerald-200/70 font-light text-sm leading-relaxed">
              Answer 3 simple questions about your local weather, placement area location, and care preferences. Get tailored plant matches instantly!
            </p>
          </div>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-plant-chatbot"))}
            className="px-8 py-4 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(52,211,153,0.2)] hover:shadow-[0_0_25px_rgba(52,211,153,0.4)] transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
          >
            🌿 Try Plant Advisor
          </button>
        </div>
      </section>
    </div>
  );
}
