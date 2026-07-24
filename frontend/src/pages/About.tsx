"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Award, Heart, Sparkles, Sprout, ShieldCheck, TreePine } from "lucide-react";

export default function About() {
  return (
    <div className="bg-emerald-50/20 min-h-screen pb-20">
      {/* Banner / Header */}
      <section className="bg-gradient-to-b from-emerald-950 to-emerald-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-800/15 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/20 text-emerald-300 text-sm font-semibold mb-2">
            <Sprout className="w-4 h-4" />
            Our Ecological Journey
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
            About Green Gift
          </h1>
          <p className="text-base md:text-lg text-emerald-100/80 max-w-2xl mx-auto font-light leading-relaxed">
            Re-wilding urban spaces, planting native forests, and replacing plastic gifting with living, breathing greenery.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 max-w-5xl space-y-24">
        {/* Core Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs">
              Our Ultimate Goal
            </span>
            <h2 className="text-3xl font-extrabold text-emerald-950 leading-tight">
              "Gift Green, Grow India" 🇮🇳
            </h2>
            <p className="text-gray-600 leading-relaxed font-light">
              Founded in 2024, GreenGift was born with a simple yet ambitious vision: to replace temporary plastic products and cut flowers with sustainable, living plant gifts. Traditional gifts end up in landfills, but a plant continues to grow, purify the air, and support local ecosystems.
            </p>
            <p className="text-gray-600 leading-relaxed font-light">
              Through our seed ball initiative, we are empowering local rural farming groups to produce nutrient-packed wildflower spheres, creating sustainable employment while combating deforestation across arid regions in India.
            </p>
          </div>
          <div className="relative h-96 rounded-3xl overflow-hidden border border-emerald-100 shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/plant1.jfif')` }}
            />
            <div className="absolute inset-0 bg-emerald-950/20" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/85 backdrop-blur-md rounded-2xl border border-white/20">
              <h4 className="font-extrabold text-emerald-950 mb-1">Over 12,500+ Trees Sown</h4>
              <p className="text-xs text-gray-500 font-light">Our community is actively re-greening degraded soils.</p>
            </div>
          </div>
        </section>

        {/* Pillars / Values */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs">
              Sustainability Pillars
            </span>
            <h2 className="text-3xl font-extrabold text-emerald-950">
              The Values That Drive Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-emerald-100 rounded-3xl p-8 shadow-sm space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-emerald-950">Zero-Waste Standard</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                From organic coco-coir seedling pots to biodegradable hemp twines and recycled-paper boxes, we guarantee zero plastic waste in our shipping.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-emerald-100 rounded-3xl p-8 shadow-sm space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-emerald-950">Rural Empowerment</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                We partner with self-help rural cooperatives to manufacture our seed balls and source raw terracotta pots, creating supplementary income for women.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-emerald-100 rounded-3xl p-8 shadow-sm space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <TreePine className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-emerald-950">Biodiversity Sourcing</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                We focus on native species, medicinal herbs, and air-purifying plant varieties that thrive in Indian climates without massive resource inputs.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
