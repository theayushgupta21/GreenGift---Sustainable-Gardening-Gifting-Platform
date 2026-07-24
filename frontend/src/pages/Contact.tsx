"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, HelpCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div className="bg-emerald-50/20 min-h-screen pb-20">
      {/* Banner / Header */}
      <section className="bg-gradient-to-b from-emerald-950 to-emerald-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-800/15 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/20 text-emerald-300 text-sm font-semibold mb-2">
            <MessageSquare className="w-4 h-4" />
            24/7 Plant Support
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
            Get in Touch
          </h1>
          <p className="text-base md:text-lg text-emerald-100/80 max-w-2xl mx-auto font-light leading-relaxed">
            Have questions about plant care, corporate eco-gifting orders, or shipping times? Drop us a line!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Contact Details */}
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-4">
              <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs">
                Contact Information
              </span>
              <h2 className="text-3xl font-extrabold text-emerald-950">
                Reach Out to Us
              </h2>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Whether you need advice on a dying snake plant or want to purchase 1,000 corporate customized seed ball packets, our team is happy to assist.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950 text-sm">Call / WhatsApp</h4>
                  <p className="text-xs text-gray-500 font-light mt-0.5">+91 98765 43210</p>
                  <p className="text-[10px] text-emerald-600 font-semibold mt-1">Available 9 AM - 6 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950 text-sm">Email Support</h4>
                  <p className="text-xs text-gray-500 font-light mt-0.5">hello@greengift.in</p>
                  <p className="text-xs text-gray-500 font-light">support@greengift.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950 text-sm">Main Office</h4>
                  <p className="text-xs text-gray-500 font-light mt-0.5 leading-relaxed">
                    GreenGift Eco Hub, Sector 62,<br />
                    Noida, Uttar Pradesh, 201301,<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 bg-white border border-emerald-100 rounded-3xl p-8 shadow-sm">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4"
              >
                <CheckCircle className="w-16 h-16 text-emerald-600" />
                <h3 className="text-2xl font-black text-emerald-950">Thank You!</h3>
                <p className="text-gray-500 font-light max-w-sm">
                  Your message has been sent successfully. One of our green specialists will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-extrabold text-emerald-950">Send a Message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-600 uppercase" htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-emerald-50/50 border border-emerald-100/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                      placeholder="Ayush Gupta"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-600 uppercase" htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-emerald-50/50 border border-emerald-100/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                      placeholder="ayush@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-600 uppercase" htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-emerald-50/50 border border-emerald-100/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                    placeholder="Plant Advice / Corporate Order"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-600 uppercase" htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-emerald-50/50 border border-emerald-100/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                    placeholder="Tell us what you'd like to ask..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all duration-300 text-sm shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
