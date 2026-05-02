"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const testimonials = [
  {
    id: 1,
    name: "Cameron Williamson",
    role: "Architecture",
    rating: 5.0,
    text: {
      id: "Dr. Floor memberikan layanan poles beton yang luar biasa untuk proyek gudang kami. Hasilnya sangat mengesankan dengan kilap yang sempurna dan daya tahan yang tinggi. Tim mereka sangat profesional dan tepat waktu.",
      en: "Dr. Floor provided an outstanding concrete polishing service for our warehouse project. The results were impressive with perfect shine and high durability. Their team was very professional and on time.",
    },
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Jane Cooper",
    role: "Interior Designer",
    rating: 5.0,
    text: {
      id: "Sebagai desainer interior, saya sangat merekomendasikan Dr. Floor untuk finishing lantai beton. Kualitas poles dan epoxy coating mereka luar biasa, dan mereka selalu mendengarkan kebutuhan desain klien.",
      en: "As an interior designer, I highly recommend Dr. Floor for concrete floor finishing. Their polishing and epoxy coating quality is outstanding, and they always listen to the client's design needs.",
    },
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Robert Fox",
    role: "Property Developer",
    rating: 5.0,
    text: {
      id: "Kami telah bekerja sama dengan Dr. Floor untuk beberapa proyek properti komersial. Konsistensi kualitas dan layanan mereka selalu terjaga. Solusi lantai yang mereka tawarkan sangat hemat biaya dan tahan lama.",
      en: "We have worked with Dr. Floor on several commercial property projects. Their quality and service consistency is always maintained. The flooring solutions they offer are very cost-effective and durable.",
    },
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Eleanor Pena",
    role: "Home Owner",
    rating: 5.0,
    text: {
      id: "Rumah kami terasa jauh lebih modern dan mewah setelah lantai beton dipoles oleh Dr. Floor. Prosesnya cepat, bersih, dan hasilnya melebihi ekspektasi kami. Sangat puas!",
      en: "Our home feels much more modern and luxurious after the concrete floor was polished by Dr. Floor. The process was fast, clean, and the results exceeded our expectations. Very satisfied!",
    },
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const { lang } = useLanguage();
  const t = translations.testimonials;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollTo = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: (scrollAmount * index) / 2, 
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.clientWidth / 2; 
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < testimonials.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-r from-[#e6e2dd] via-[#f2f0ec] to-white overflow-hidden w-full">
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

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 lg:px-10 pb-10 w-full hide-scrollbar   cursor-grab active:cursor-grabbing"
        >
          {testimonials.map((item, index) => (
            <motion.div 
              key={item.id}
              className="w-[85vw] sm:w-[500px] lg:w-[600px] shrink-0 snap-center bg-[#FAF9F6] rounded-[2.5rem] relative overflow-hidden shadow-sm border border-white/60"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              
              {/* Top Section with Avatar and Details */}
              <div className="relative p-8 pb-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                
                {/* Decorative Green Shape */}
                <div className="absolute top-0 left-0 w-[140px] h-[140px] bg-[#43913A] rounded-tl-[2.5rem] rounded-br-[3rem] z-0"></div>

                {/* Avatar */}
                <div className="relative z-10 w-24 h-24 shrink-0 rounded-full border-4 border-[#FAF9F6] overflow-hidden bg-white shadow-sm">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Info */}
                <div className="relative z-10 flex-grow pt-2">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{item.name}</h3>
                  <p className="text-slate-500 font-medium mb-2">{item.role}</p>
                  
                  <div className="flex items-center gap-1 text-slate-800 font-bold">
                    <div className="flex gap-1 text-[#FFB800] mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className="fill-[#FFB800]" />
                      ))}
                    </div>
                    {item.rating.toFixed(1)}
                  </div>
                </div>

                {/* Quote Icon */}
                <div className="absolute top-8 right-8 w-14 h-14 bg-slate-100 rounded-full hidden sm:flex items-center justify-center z-10">
                  <Quote size={24} className="text-[#43913A] fill-[#43913A] rotate-180" />
                </div>

              </div>

              {/* Bottom Section with Review Text */}
              <div className="px-8 pb-10 pt-4">
                <p className="text-slate-600 leading-relaxed font-medium">
                  &quot;{item.text[lang]}&quot;
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Carousel Indicators (Clickable) */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-10 bg-[#43913A]" : "w-6 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
