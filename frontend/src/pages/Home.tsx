"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  TreePine, 
  Flame, 
  Wind, 
  Gift, 
  ShieldCheck, 
  Leaf, 
  Truck, 
  HeartHandshake, 
  Star, 
  Quote 
} from "lucide-react";

// Slide Data
const slides = [
  {
    id: 1,
    image: "/plant1.jfif",
    title: "Curated Garden Inspirations 🌸",
    desc: "Design your personal sanctuary with our premium outdoor plants and customized gardening setups.",
    cta: "Explore Now",
    link: "/store",
  },
  {
    id: 2,
    image: "/plant2.jfif",
    title: "Save Trees Campaign 🌳",
    desc: "Every purchase supports tree plantation across rural India. Gift green, grow lives, and restore nature.",
    cta: "Our Mission",
    link: "/about",
  },
  {
    id: 3,
    image: "/plant3.jfif",
    title: "Gifting Handcrafted Flower Pots 🏺",
    desc: "Express your love with artisan, eco-friendly ceramic pots that add life to any room or office desk.",
    cta: "View Collection",
    link: "/store",
  },
  {
    id: 4,
    image: "/plant4.jfif",
    title: "NASA-Approved Indoor Plants 🌿",
    desc: "Purify your air and boost your mood with our handpicked selection of premium indoor foliage.",
    cta: "Shop Indoor",
    link: "/store",
  },
  {
    id: 5,
    image: "/plant1.jfif", // Fallback to plant1 if 5th doesn't exist
    title: "Embrace the Green Lifestyle 🌍",
    desc: "Zero-waste packaging, biodegradable seed balls, and organic pesticides for the conscious grower.",
    cta: "Go Organic",
    link: "/store",
  },
];

// Stats Data
const stats = [
  {
    id: 1,
    icon: <TreePine className="w-8 h-8 text-emerald-600" />,
    value: 12500,
    suffix: "",
    title: "Trees Supported",
    description: "Planted & sustained in partnerships",
  },
  {
    id: 2,
    icon: <Flame className="w-8 h-8 text-amber-500" />,
    value: 8.7,
    suffix: " Tons",
    isFloat: true,
    title: "CO₂ Reduced",
    description: "Offset from sustainable operations",
  },
  {
    id: 3,
    icon: <Wind className="w-8 h-8 text-teal-500" />,
    value: 18,
    suffix: "%",
    prefix: "+",
    title: "Oxygen Improvement",
    description: "Added in urban micro-environments",
  },
  {
    id: 4,
    icon: <Gift className="w-8 h-8 text-sky-500" />,
    value: 25000,
    suffix: "",
    title: "Eco Products Delivered",
    description: "Zero-plastic gifts sent with love",
  },
];

// Reusable Counter Component
interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  isFloat?: boolean;
  duration?: number;
}

const AnimatedCounter = ({ value, suffix = "", prefix = "", isFloat = false, duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [floatCount, setFloatCount] = useState(0.0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const steps = 60;
      const increment = (end - start) / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        if (isFloat) {
          setFloatCount((prev) => {
            const nextVal = prev + increment;
            return nextVal >= end ? end : parseFloat(nextVal.toFixed(1));
          });
        } else {
          setCount((prev) => {
            const nextVal = Math.floor(prev + increment);
            return nextVal >= end ? end : nextVal;
          });
        }

        if (currentStep >= steps) {
          if (isFloat) setFloatCount(end);
          else setCount(end);
          clearInterval(timer);
        }
      }, (duration * 1000) / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value, isFloat, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {isFloat ? floatCount.toFixed(1) : count.toLocaleString()}
      {suffix}
    </span>
  );
};

// Category Preview Data
const categories = [
  {
    title: "Flower Pots",
    desc: "Premium ceramic, terracotta, and biodegradable nursery pots.",
    image: "/plant3.jfif",
    link: "/store",
  },
  {
    title: "Seed Balls",
    desc: "Compact clay spheres packed with wildflower and tree seeds.",
    image: "/plant2.jfif",
    link: "/store",
  },
  {
    title: "Plants",
    desc: "Gorgeous succulents, fresh air-purifiers, and hardy outdoor shrubs.",
    image: "/plant4.jfif",
    link: "/store",
  },
  {
    title: "Organic Pesticides",
    desc: "100% natural fertilizers and herbal insect repellents.",
    image: "/plant1.jfif",
    link: "/store",
  },
];

// Why Choose Us Data
const features = [
  {
    icon: <Leaf className="w-6 h-6 text-emerald-600" />,
    title: "Eco-Friendly Products",
    desc: "100% organic, natural, and biodegradable gardening essentials.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    title: "Sustainable Packaging",
    desc: "Zero-plastic, completely recycled, and compostable packaging.",
  },
  {
    icon: <Truck className="w-6 h-6 text-emerald-600" />,
    title: "Fast Delivery",
    desc: "Secure eco-routing to deliver fresh, healthy plants directly to your door.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-emerald-600" />,
    title: "Support Nature",
    desc: "A portion of every sale goes directly towards funding native tree re-foresting.",
  },
];

// Testimonials Data
const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Home Gardener",
    text: "The seed balls were a massive hit as party favors! My guests loved the idea of growing their own wildflowers, and the packaging was absolutely beautiful and plastic-free.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Office Manager",
    text: "Ordered 25 indoor plants for our office workspace. They arrived super fresh and are thrive in their ceramic pots. GreenGift's customer service was incredibly helpful too!",
    rating: 5,
  },
  {
    name: "Rohan Das",
    role: "Eco Activist",
    text: "It is rare to find a store that actually stands by zero-waste claims. GreenGift's organic fertilizers revived my balcony garden without toxic chemicals. Highly recommend!",
    rating: 5,
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Carousel Section */}
      <section className="relative h-[85vh] min-h-[500px] w-full bg-neutral-900 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 scale-105"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />
            {/* Dark Green Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/60 to-transparent" />
            
            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2">
                <div className="max-w-xl text-white space-y-6">
                  <motion.span
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-semibold text-sm backdrop-blur-sm"
                  >
                    🌿 Eco-Friendly Gifting & Gardening
                  </motion.span>
                  
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
                  >
                    {slides[currentSlide].title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg text-emerald-100/90 leading-relaxed font-light"
                  >
                    {slides[currentSlide].desc}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="pt-4"
                  >
                    <Link
                      to={slides[currentSlide].link}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transform hover:-translate-y-0.5 group"
                    >
                      {slides[currentSlide].cta}
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/20 text-white transition-all backdrop-blur-sm cursor-pointer z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/20 text-white transition-all backdrop-blur-sm cursor-pointer z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "bg-emerald-400 w-8" 
                  : "bg-emerald-900/50 hover:bg-emerald-600/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-20 bg-emerald-950 text-white relative overflow-hidden">
        {/* Subtle background graphics */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-800/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-emerald-400 font-bold uppercase tracking-wider text-sm">
              Our Collective Footprint
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Growing a Greener Tomorrow, Together
            </h2>
            <p className="text-emerald-200/70 font-light">
              Every plant gifted, seed sowed, and product delivered contributes to measurable ecological restoration. Here is the impact we have built together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: stat.id * 0.1 }}
                className="bg-emerald-900/40 border border-emerald-800/30 rounded-2xl p-8 text-center backdrop-blur-sm flex flex-col items-center justify-between shadow-xl transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_4px_25px_rgba(16,185,129,0.1)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                  {stat.icon}
                </div>
                <div className="space-y-2">
                  <div className="text-4xl lg:text-5xl font-black text-emerald-300">
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix} 
                      prefix={stat.prefix} 
                      isFloat={stat.isFloat}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white pt-2">{stat.title}</h3>
                  <p className="text-sm text-emerald-200/60 font-light leading-relaxed">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview Section */}
      <section className="py-24 bg-emerald-50/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm">
                Explore Our Range
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950">
                Nature's Best, Categorized
              </h2>
              <p className="text-gray-600 max-w-xl font-light">
                Discover our curated products designed to help you start, nurture, and grow your gardening dreams or send the perfect plant-based gift.
              </p>
            </div>
            <Link
              to="/store"
              className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-500 font-bold group transition-colors duration-300"
            >
              Explore Full Store
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-emerald-100 overflow-hidden shadow-md flex flex-col h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Category Image */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${cat.image})` }}
                  />
                  <div className="absolute inset-0 bg-emerald-950/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                {/* Category Details */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-emerald-950 group-hover:text-emerald-600 transition-colors duration-300">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                      {cat.desc}
                    </p>
                  </div>
                  <Link
                    to="/store"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white font-semibold rounded-xl transition-all duration-300 text-sm border border-emerald-100 hover:border-emerald-600 shadow-sm"
                  >
                    Explore {cat.title}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Green Gift Section */}
      <section className="py-24 bg-white border-t border-b border-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm">
              The GreenGift Promise
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950">
              Why Choose Green Gift?
            </h2>
            <p className="text-gray-600 font-light">
              We align our services with nature. Every product is sourced sustainably, packaged with care, and shipped to optimize eco-footprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-emerald-50/10 hover:bg-emerald-50/30 border border-emerald-50 hover:border-emerald-100 rounded-2xl p-8 transition-all duration-300 text-center flex flex-col items-center space-y-4 shadow-sm hover:shadow-md"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-sm">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-emerald-950">{feat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-emerald-50/10 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm">
              Customer Love
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950">
              What Our Community Says
            </h2>
            <p className="text-gray-600 font-light">
              We help plant enthusiasts and eco-conscious gifters spread greenery. Read their honest feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-emerald-100/50 p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between"
              >
                <Quote className="absolute top-6 right-8 w-10 h-10 text-emerald-100 transform rotate-180" />
                <div className="space-y-4 relative z-10">
                  <div className="flex gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed font-light text-sm italic">
                    "{test.text}"
                  </p>
                </div>
                <div className="pt-6 border-t border-emerald-50 mt-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-emerald-950 text-base">{test.name}</h4>
                    <p className="text-xs text-emerald-600/80 font-semibold">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
