"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, ArrowLeft, ShieldCheck, Truck, HeadphonesIcon, Award } from "lucide-react";
import { useState, useRef } from "react";

const heroCards = [
  {
    id: 1,
    title: "Polished Concrete",
    tag: "Industrial",
    projects: "1,200+ Projects",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Epoxy Coating",
    tag: "Commercial",
    projects: "800+ Projects",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Floor Maintenance",
    tag: "Service",
    projects: "450+ Projects",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Decorative Concrete",
    tag: "Residential",
    projects: "300+ Projects",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop"
  }
];

export function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -450, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 450, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="relative w-full pt-32 lg:pt-40 pb-20 overflow-hidden bg-gradient-to-r from-[#e6e2dd] via-[#f2f0ec] to-white">
        {/* Background Image/Texture */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
            alt="Concrete Texture" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>

        <div className="w-full pl-4 lg:pl-12 xl:pl-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            
            {/* Left Content */}
            <motion.div 
              className="w-full lg:w-5/12 flex flex-col items-start pr-4 lg:pr-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Badge */}
              <div className="bg-white rounded-full px-5 py-2.5 flex items-center gap-3 mb-6 shadow-sm border border-slate-100">
                <div className="text-[#43913A]"><Award size={18} /></div>
                <span className="text-slate-800 font-bold text-sm tracking-wide">No.1 Concrete Polishing Service</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl lg:text-6xl xl:text-[4.5rem] font-black text-slate-900 leading-[1.05] tracking-tight mb-6">
                Total Solution <br /> Partner for <br /> Concrete Polishing
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-slate-700 mb-10 max-w-lg leading-relaxed font-medium">
                Dr. Floor is a No.1 Leading Eco-Friendly Concrete Polishing Company in Indonesia with High-tech & Innovative Products.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <Link 
                  href="#contact"
                  className="bg-[#43913A] hover:bg-green-700 text-white px-8 py-3.5 rounded-full font-bold transition-colors flex items-center gap-2 shadow-lg shadow-primary/30"
                >
                  Contact Us <ArrowRight size={18} />
                </Link>
                <Link 
                  href="#about"
                  className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3.5 rounded-full font-bold transition-colors shadow-lg shadow-slate-800/20"
                >
                  Meet the Team
                </Link>
              </div>

              {/* Trust/Rating */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="User" className="w-12 h-12 rounded-full border-2 border-[#e6e2dd] object-cover" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="User" className="w-12 h-12 rounded-full border-2 border-[#e6e2dd] object-cover" />
                  <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=100&auto=format&fit=crop" alt="User" className="w-12 h-12 rounded-full border-2 border-[#e6e2dd] object-cover" />
                  <div className="w-12 h-12 rounded-full border-2 border-[#e6e2dd] bg-[#43913A] flex items-center justify-center text-white font-bold text-lg">+</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-slate-900 font-bold text-lg">
                    4.9 Ratings+ 
                  </div>
                  <div className="text-slate-600 text-sm font-medium">Trusted by 500+ Clients</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content (Carousel Cards) */}
            <motion.div 
              className="w-full lg:w-7/12 relative mt-10 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {/* Carousel container with hidden scrollbar and full right bleed */}
              <div 
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="flex gap-6 overflow-x-auto pb-10 pt-4 snap-x hide-scrollbar   pr-4 lg:pr-[10vw] cursor-grab active:cursor-grabbing"
              >
                {heroCards.map((card) => (
                  <div key={card.id} className="w-[85vw] sm:w-[400px] lg:w-[450px] bg-[#f8f6f3] rounded-[2.5rem] p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] shrink-0 snap-center border-4 border-white pointer-events-none">
                    <div className="relative w-full h-64 md:h-[320px] rounded-[1.8rem] overflow-hidden mb-6">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-bold">
                        {card.tag}
                      </div>
                    </div>
                    <div className="px-3 flex justify-between items-center pb-3 pointer-events-auto">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">{card.title}</h3>
                        <p className="text-slate-500 font-medium">{card.projects}</p>
                      </div>
                      <button className="w-14 h-14 rounded-full bg-[#006080] text-white flex items-center justify-center hover:bg-[#43913A] transition-colors shadow-lg shrink-0">
                        <ArrowRight size={24} className="-rotate-45" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows positioned like 01.jpeg */}
              <div className="hidden lg:flex absolute -bottom-4 left-0 gap-3 z-20">
                <button 
                  onClick={scrollLeft}
                  className="w-14 h-14 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-[#43913A] transition-colors shadow-lg border-4 border-[#e6e2dd]"
                >
                  <ArrowLeft size={24} />
                </button>
                <button 
                  onClick={scrollRight}
                  className="w-14 h-14 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-[#43913A] transition-colors shadow-lg border-4 border-[#e6e2dd]"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Strip (Bottom of Hero) */}
      <div className="w-full bg-slate-800 py-8 lg:py-12 border-t border-slate-700">
        <div className="w-full px-4 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-700">
            
            <div className="flex items-center gap-5 md:justify-center pt-4 md:pt-0">
              <div className="text-[#43913A]"><ShieldCheck size={48} strokeWidth={1.5} /></div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Eco-Friendly</h4>
                <p className="text-slate-400 text-sm font-medium">Safe & sustainable materials</p>
              </div>
            </div>

            <div className="flex items-center gap-5 md:justify-center pt-6 md:pt-0">
              <div className="text-[#43913A]"><Award size={48} strokeWidth={1.5} /></div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">High-Tech Standard</h4>
                <p className="text-slate-400 text-sm font-medium">Advanced finishing products</p>
              </div>
            </div>

            <div className="flex items-center gap-5 md:justify-center pt-6 md:pt-0">
              <div className="text-[#43913A]"><HeadphonesIcon size={48} strokeWidth={1.5} /></div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Free Consultation</h4>
                <p className="text-slate-400 text-sm font-medium">Support for your projects</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
