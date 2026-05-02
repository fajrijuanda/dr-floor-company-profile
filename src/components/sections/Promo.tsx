"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Promo() {
  return (
    <section id="promo" className="py-20 bg-gradient-to-r from-[#e6e2dd] via-[#f2f0ec] to-white">
      <div className="w-full px-4 lg:px-8 xl:px-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch h-auto lg:h-[500px]">
          
          {/* Left Card - Promo Content */}
          <motion.div 
            className="w-full lg:w-1/2 bg-[#DED9D2] rounded-[3.5rem] p-10 flex flex-col items-center justify-center relative overflow-hidden shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background Pattern Elements (CSS dots) */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 h-64 opacity-20" 
                 style={{ backgroundImage: 'radial-gradient(#8c867a 20%, transparent 20%)', backgroundSize: '16px 16px', transform: 'rotate(15deg)' }}></div>
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-64 h-64 opacity-20" 
                 style={{ backgroundImage: 'radial-gradient(#8c867a 20%, transparent 20%)', backgroundSize: '16px 16px', transform: 'rotate(15deg)' }}></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 opacity-20" 
                 style={{ backgroundImage: 'radial-gradient(#8c867a 20%, transparent 20%)', backgroundSize: '16px 16px', transform: 'rotate(-10deg)' }}></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className="text-5xl lg:text-6xl font-black text-slate-800 mb-4 tracking-tight">Flash Sale!</h2>
              <p className="text-xl text-slate-700 mb-10 font-medium">Get 25% - Limited Time Offer</p>
              
              {/* Timer */}
              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-8 text-slate-800 mb-12">
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-medium mb-1">5</span>
                  <span className="text-xs md:text-sm lg:text-base font-medium">days</span>
                </div>
                
                <div className="flex flex-col gap-1 -mt-4 md:-mt-6">
                  <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-slate-800"></span>
                  <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-slate-800"></span>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-medium mb-1">15</span>
                  <span className="text-xs md:text-sm lg:text-base font-medium">Hours</span>
                </div>

                <div className="flex flex-col gap-1 -mt-4 md:-mt-6">
                  <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-slate-800"></span>
                  <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-slate-800"></span>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-medium mb-1">38</span>
                  <span className="text-xs md:text-sm lg:text-base font-medium">Minutes</span>
                </div>

                <div className="flex flex-col gap-1 -mt-4 md:-mt-6">
                  <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-slate-800"></span>
                  <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-slate-800"></span>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-medium mb-1">14</span>
                  <span className="text-xs md:text-sm lg:text-base font-medium">Seconds</span>
                </div>
              </div>

              {/* Button */}
              <Link 
                href="#contact"
                className="bg-[#3A3F47] hover:bg-[#43913A] text-white px-8 py-3.5 rounded-full font-medium transition-colors flex items-center gap-2 text-lg shadow-lg"
              >
                Shop Now <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Right Images Container */}
          <div className="w-full lg:w-1/2 flex gap-4 lg:gap-6 h-[400px] lg:h-auto">
            
            {/* Image 1 */}
            <motion.div 
              className="w-1/2 relative rounded-[3rem] overflow-hidden group shadow-md"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop" 
                alt="Promo Image 1" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              {/* Inner White Border */}
              <div className="absolute inset-4 rounded-[2rem] border-[1.5px] border-white/80 pointer-events-none z-10"></div>
            </motion.div>

            {/* Image 2 */}
            <motion.div 
              className="w-1/2 relative rounded-[3rem] overflow-hidden group shadow-md"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=600&auto=format&fit=crop" 
                alt="Promo Image 2" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              {/* Inner White Border */}
              <div className="absolute inset-4 rounded-[2rem] border-[1.5px] border-white/80 pointer-events-none z-10"></div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
