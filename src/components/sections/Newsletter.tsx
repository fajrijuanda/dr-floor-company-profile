"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="pt-24 pb-32 bg-gradient-to-r from-[#e6e2dd] via-[#f2f0ec] to-white relative overflow-hidden">
      
      {/* Decorative Dots Pattern */}
      <div className="absolute bottom-0 left-20 w-48 h-48 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#8c867a 20%, transparent 20%)', backgroundSize: '16px 16px', transform: 'rotate(-15deg)' }}></div>

      <div className="w-full px-4 w-full text-center relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center gap-3 text-slate-700 font-bold text-lg mb-4">
            <span className="w-6 h-[2px] bg-[#43913A]"></span> 
            Our Newsletter
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight mb-2">
            Subscribe to Our Newsletter to Get
          </h2>
          <h2 className="text-4xl md:text-5xl font-black text-[#43913A] tracking-tight leading-tight mb-6">
            Updates to Our Latest Collection
          </h2>
          <p className="text-slate-600 font-medium text-lg">
            Get 20% off on your first order just by subscribing to our newsletter
          </p>
        </div>

        {/* Form */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full sm:w-[400px]">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="text-slate-400" size={20} />
            </div>
            <input 
              type="email" 
              placeholder="Enter Email Address" 
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-slate-800 border-none focus:ring-2 focus:ring-[#43913A] outline-none shadow-sm placeholder:text-slate-400 font-medium"
            />
          </div>
          <button className="w-full sm:w-auto bg-[#43913A] hover:bg-[#316b2b] text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-sm whitespace-nowrap">
            Subscribe
          </button>
        </motion.div>

      </div>
    </section>
  );
}
