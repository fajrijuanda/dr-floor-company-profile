"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const InstagramIcon = ({ size = 24, className = "", strokeWidth = 2 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const instagramPosts = [
  { id: 1, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600&auto=format&fit=crop", link: "#" },
  { id: 2, image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=600&auto=format&fit=crop", link: "#" },
  { id: 3, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop", link: "#" },
  { id: 4, image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=600&auto=format&fit=crop", link: "#" },
  { id: 5, image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=600&auto=format&fit=crop", link: "#" }
];

export function Instagram() {
  const { lang } = useLanguage();
  const t = translations.instagram;

  return (
    <section id="instagram" className="py-24 bg-gradient-to-r from-[#e6e2dd] via-[#f2f0ec] to-white overflow-hidden">
      <div className="w-full">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16 px-4">
          <div className="flex items-center gap-3 text-slate-700 font-bold text-lg mb-2">
            <span className="w-6 h-[2px] bg-[#43913A]"></span> 
            {t.subtitle[lang]}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
            {t.title[lang]}
          </h2>
        </div>

        {/* Instagram Grid / Row */}
        <div className="flex gap-4 lg:gap-6 overflow-x-auto snap-x px-4 lg:px-8 xl:px-10 pb-8 hide-scrollbar  ">
          
          {instagramPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              className="relative w-[70vw] sm:w-[300px] lg:w-[calc(20%-1.2rem)] aspect-square rounded-[2.5rem] overflow-hidden shrink-0 snap-center group shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={post.link} className="block w-full h-full">
                
                {/* Background Image */}
                <img 
                  src={post.image} 
                  alt="Instagram Post" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/30 transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <InstagramIcon size={32} className="text-white" strokeWidth={1.5} />
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
