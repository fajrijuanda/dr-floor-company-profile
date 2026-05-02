"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Maximize2, ShoppingBag, Star } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const dailyDealsData = [
  {
    id: 1,
    price: "$80.00",
    originalPrice: "$100.00",
    rating: 4.9,
    discount: "30% off",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=800&auto=format&fit=crop",
    imgBg: "bg-[#D5CDBD]"
  },
  {
    id: 2,
    price: "$120.00",
    originalPrice: "$150.00",
    rating: 4.8,
    discount: "20% off",
    image: "https://images.unsplash.com/photo-1585565804112-f201f68c48b4?q=80&w=800&auto=format&fit=crop",
    imgBg: "bg-[#B5BAA8]"
  },
  {
    id: 3,
    price: "$45.00",
    originalPrice: "$50.00",
    rating: 4.9,
    discount: "10% off",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=800&auto=format&fit=crop",
    imgBg: "bg-[#C4CCD3]"
  }
];

export function Deals() {
  const { lang } = useLanguage();
  const t = translations.deals;

  return (
    <section id="deals" className="py-24 bg-gradient-to-r from-[#e6e2dd] via-[#f2f0ec] to-white overflow-hidden">
      <div className="w-full px-4 lg:px-8 xl:px-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-3 text-slate-700 font-bold text-lg mb-2">
              <span className="w-8 h-[2px] bg-[#43913A]"></span> 
              {t.subtitle[lang]}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
              <span className="text-[#43913A]">{t.titleHighlight[lang]}</span> {t.title[lang]}
            </h2>
          </div>
          <div className="w-full md:w-5/12">
            <p className="text-slate-600 font-medium leading-relaxed">
              {t.description[lang]}
            </p>
          </div>
        </div>

        {/* Middle Grid (Daily Deals Cards) */}
        <div className="w-full relative mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            
            {dailyDealsData.map((deal, index) => (
              <motion.div 
                key={deal.id}
                className="w-full bg-[#FAF9F6] p-4 rounded-[2.5rem] flex flex-col gap-5 shadow-lg border border-white group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Top Image Area */}
                <div className={`w-full h-[240px] sm:h-[280px] ${deal.imgBg} rounded-[2rem] relative overflow-hidden shrink-0`}>
                  {/* Discount Tag */}
                  <div className="absolute top-4 left-4 bg-[#43913A] text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
                    {deal.discount}
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                    <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:text-[#43913A] hover:scale-110 transition-all shadow-sm">
                      <Heart size={14} strokeWidth={2.5} />
                    </button>
                    <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:text-[#43913A] hover:scale-110 transition-all shadow-sm">
                      <Maximize2 size={14} strokeWidth={2.5} />
                    </button>
                    <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:text-[#43913A] hover:scale-110 transition-all shadow-sm">
                      <ShoppingBag size={14} strokeWidth={2.5} />
                    </button>
                  </div>

                  <img 
                    src={deal.image} 
                    alt={t.items[index].name[lang]} 
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500 p-2" 
                  />
                </div>

                {/* Bottom Text Area */}
                <div className="w-full py-2 px-2 flex flex-col h-full">
                  <span className="text-slate-500 text-sm font-medium mb-1">{t.items[index].category[lang]}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 truncate">
                    {t.items[index].name[lang]}
                  </h3>
                  
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-slate-900 font-bold text-xl">{deal.price}</span>
                    <span className="text-slate-400 line-through text-sm font-medium">{deal.originalPrice}</span>
                  </div>

                  <div className="flex items-center gap-1 text-slate-800 font-bold text-sm mb-4">
                    <Star size={16} className="text-[#FFB800] fill-[#FFB800]" />
                    {deal.rating}
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                    {t.items[index].description[lang]}
                  </p>

                  <div className="mt-auto flex justify-end">
                    <Link href="#shop" className="text-slate-800 hover:text-[#43913A] font-bold flex items-center gap-2 transition-colors">
                      {t.shopNow[lang]} <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* Bottom Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Banner 1 */}
          <motion.div 
            className="bg-[#D5D2CC] rounded-[3rem] p-10 lg:p-12 relative overflow-hidden shadow-sm group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10 w-full md:w-3/5">
              <div className="text-slate-500 font-medium text-lg mb-2">{t.banner1.discount[lang]}</div>
              <h3 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">{t.banner1.title[lang]}</h3>
              <p className="text-slate-600 font-medium mb-8 max-w-sm md:max-w-none">
                {t.banner1.desc[lang]}
              </p>
              <Link 
                href="#shop"
                className="inline-flex bg-[#3A3F47] hover:bg-[#43913A] text-white px-6 py-3 rounded-full font-medium transition-colors items-center gap-2"
              >
                {t.shopNow[lang]} <ArrowRight size={16} />
              </Link>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 md:w-1/2 h-[100%] md:h-[120%] translate-y-10 group-hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=600&auto=format&fit=crop" 
                alt="Machines" 
                className="w-full h-full object-cover mix-blend-multiply rounded-tl-[3rem]"
              />
            </div>
          </motion.div>

          {/* Banner 2 */}
          <motion.div 
            className="bg-[#43913A] rounded-[3rem] p-10 lg:p-12 relative overflow-hidden shadow-sm group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative z-10 w-full md:w-3/5">
              <div className="text-white/80 font-medium text-lg mb-2">{t.banner2.discount[lang]}</div>
              <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">{t.banner2.title[lang]}</h3>
              <p className="text-white/90 font-medium mb-8 max-w-sm md:max-w-none">
                {t.banner2.desc[lang]}
              </p>
              <Link 
                href="#shop"
                className="inline-flex bg-[#3A3F47] hover:bg-slate-900 text-white px-6 py-3 rounded-full font-medium transition-colors items-center gap-2"
              >
                {t.shopNow[lang]} <ArrowRight size={16} />
              </Link>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 md:w-1/2 h-[100%] md:h-[120%] translate-y-10 group-hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop" 
                alt="Sealer" 
                className="w-full h-full object-cover mix-blend-overlay rounded-tl-[3rem]"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
