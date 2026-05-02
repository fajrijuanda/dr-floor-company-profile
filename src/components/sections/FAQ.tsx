"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(2);
  const { lang } = useLanguage();
  const t = translations.faq;

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-r from-[#e6e2dd] via-[#f2f0ec] to-white">
      <div className="w-full px-4 lg:px-8 xl:px-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex items-center gap-3 text-slate-700 font-bold text-lg mb-2">
            <span className="w-6 h-[2px] bg-[#43913A]"></span> 
            {t.subtitle[lang]}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
            {t.title[lang]}
          </h2>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {t.items.map((faq, index) => {
            const id = index + 1;
            const isOpen = openId === id;

            return (
              <div 
                key={id} 
                className={`rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer ${
                  isOpen 
                    ? "bg-[#43913A] shadow-lg" 
                    : "bg-white/30 hover:bg-white/50 border border-white/60"
                }`}
                onClick={() => toggleFaq(id)}
              >
                <div className="px-6 py-5 flex justify-between items-center gap-4">
                  <h3 className={`text-lg md:text-xl font-medium transition-colors ${
                    isOpen ? "text-white" : "text-slate-800"
                  }`}>
                    {faq.question[lang]}
                  </h3>
                  <div className={`shrink-0 transition-transform duration-300 ${isOpen ? "text-white" : "text-slate-800"}`}>
                    {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-white/90 leading-relaxed font-medium">
                        {faq.answer[lang]}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
