"use client";

import React from "react";
import { Link } from "react-router-dom";
import { GiLeafSwirl } from "react-icons/gi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { 
  Mail, 
  Phone, 
  MapPin, 
  TreePine 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white border-t border-emerald-900 pt-16 pb-8 px-6">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand / About */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <GiLeafSwirl className="text-emerald-400 text-2xl" />
            <span className="text-yellow-200 text-xl font-bold tracking-wide">GreenGift</span>
          </div>
          <p className="text-sm text-emerald-200/60 font-light leading-relaxed">
            Propagating love for nature through sustainable gifting. We deliver eco-friendly plants, biodegradable seed balls, and chemical-free products.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-emerald-200/50 hover:text-emerald-400 transition-colors">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-emerald-200/50 hover:text-emerald-400 transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-emerald-200/50 hover:text-emerald-400 transition-colors">
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400">Quick Links</h4>
          <ul className="space-y-2 text-sm font-light text-emerald-200/70">
            <li>
              <Link to="/" className="hover:text-emerald-300 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/store" className="hover:text-emerald-300 transition-colors">Store</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-emerald-300 transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-emerald-300 transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400">Shop Categories</h4>
          <ul className="space-y-2 text-sm font-light text-emerald-200/70">
            <li>
              <Link to="/store" className="hover:text-emerald-300 transition-colors">Flower Pots</Link>
            </li>
            <li>
              <Link to="/store" className="hover:text-emerald-300 transition-colors">Seed Balls</Link>
            </li>
            <li>
              <Link to="/store" className="hover:text-emerald-300 transition-colors">Live Plants</Link>
            </li>
            <li>
              <Link to="/store" className="hover:text-emerald-300 transition-colors">Organic Pesticides</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400">Contact Us</h4>
          <ul className="space-y-3 text-sm font-light text-emerald-200/70">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Noida, Uttar Pradesh, 201301</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>hello@greengift.in</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="container mx-auto max-w-6xl mt-12 pt-8 border-t border-emerald-900/60 flex flex-col md:flex-row items-center justify-between text-xs text-emerald-200/40 font-light gap-4">
        <p>© {new Date().getFullYear()} GreenGift. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Made with <TreePine className="w-3.5 h-3.5 text-emerald-400" /> in India
        </p>
      </div>
    </footer>
  );
}
