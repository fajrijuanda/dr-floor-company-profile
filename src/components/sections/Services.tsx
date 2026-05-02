"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function Services() {
  const { lang } = useLanguage();
  const t = translations.services;

  return (
    <section id="services" className="py-24 bg-gradient-to-r from-[#e6e2dd] via-[#f2f0ec] to-white">
      <div className="w-full px-4 lg:px-8 xl:px-10">
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 h-auto lg:h-[750px]">
          
          {/* Left Card */}
          <motion.div 
            className="w-full lg:w-5/12 bg-[#3A3F47] rounded-[3.5rem] p-10 lg:p-14 relative overflow-hidden flex flex-col justify-between group shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-20 w-full lg:w-3/4">
              <div className="text-[#43913A] font-bold text-xl mb-2">500+ {lang === "id" ? "Proyek" : "Projects"}</div>
              <h3 className="text-[#e6e2dd] text-5xl xl:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
                {t.concretePolishing[lang].split('\n').map((line, i) => (
                  <span key={i}>{line}{i < 1 && <br/>}</span>
                ))}
              </h3>
              <p className="text-slate-300 text-sm mb-10 leading-relaxed font-medium">
                {t.concretePolishingDesc[lang]}
              </p>
              
              <ul className="flex flex-col gap-3">
                {t.concretePolishingItems[lang].map(item => (
                  <li key={item}>
                    <Link href="#" className="text-slate-300 hover:text-white transition-colors text-base font-medium flex items-center gap-2">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Image for left card */}
            <div className="absolute -bottom-20 -right-20 w-[120%] h-[120%] lg:w-[150%] lg:h-[150%] z-0 pointer-events-none opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105">
               <img 
                 src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop" 
                 alt="Concrete Texture" 
                 className="w-full h-full object-cover" 
               />
            </div>
            {/* Dark gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#3A3F47]/80 via-[#3A3F47]/40 to-transparent z-10 pointer-events-none"></div>
          </motion.div>

          {/* Right Column */}
          <div className="w-full lg:w-7/12 flex flex-col gap-6 lg:gap-8">
            
            {/* Top Right Card */}
            <motion.div 
              className="flex-1 bg-[#C8C8C8] rounded-[3.5rem] p-10 lg:p-14 relative overflow-hidden flex items-center group shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative z-20 w-1/2">
                <div className="text-[#43913A] font-bold text-xl mb-1">200+ {lang === "id" ? "Proyek" : "Projects"}</div>
                <h3 className="text-slate-800 text-5xl xl:text-6xl font-black mb-8 tracking-tight">
                  {t.epoxyCoating[lang].split('\n').map((line, i) => (
                    <span key={i}>{line}{i < 1 && <br/>}</span>
                  ))}
                </h3>
                
                <ul className="flex flex-col gap-2">
                  {t.epoxyItems[lang].map(item => (
                    <li key={item}>
                      <Link href="#" className="text-slate-600 hover:text-slate-900 transition-colors text-base font-medium">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="absolute right-0 top-0 w-1/2 h-full z-10">
                <div className="w-full h-full p-6 lg:p-8 pl-0">
                  <img 
                    src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop" 
                    alt="Epoxy Floor" 
                    className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              </div>
            </motion.div>

            {/* Bottom Right Card */}
            <motion.div 
              className="flex-1 bg-[#9CB3C9] rounded-[3.5rem] p-10 lg:p-14 relative overflow-hidden flex items-center justify-end group shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              
              <div className="absolute left-0 top-0 w-1/2 h-full z-10">
                <div className="w-full h-full p-6 lg:p-8 pr-0">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop" 
                    alt="Floor Maintenance" 
                    className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              </div>

              <div className="relative z-20 w-1/2 flex flex-col items-end text-right">
                <div className="text-[#43913A] font-bold text-xl mb-1">300+ {lang === "id" ? "Proyek" : "Projects"}</div>
                <h3 className="text-slate-800 text-5xl xl:text-6xl font-black mb-8 tracking-tight">
                  {t.floorCare[lang].split('\n').map((line, i) => (
                    <span key={i}>{line}{i < 1 && <br/>}</span>
                  ))}
                </h3>
                
                <ul className="flex flex-col gap-2 items-end">
                  {t.floorCareItems[lang].map(item => (
                    <li key={item}>
                      <Link href="#" className="text-slate-700 hover:text-slate-900 transition-colors text-base font-medium">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
