"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const t = translations.about;

  return (
    <section id="about" className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Top Content: Vision & Mission alongside Bento Grid */}
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          
          {/* Left: Text Content (Vision & Mission) */}
          <motion.div 
            className="w-full lg:w-5/12 flex flex-col justify-start pt-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              {t.headline[lang].split('\n').map((line, i) => (
                <span key={i}>{line}{i < 1 && <br />}</span>
              ))}
            </h2>
            
            <p className="text-sm md:text-base text-slate-500 mb-10 leading-relaxed max-w-md">
              {t.description[lang]}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="bg-[#43913A]/5 p-4 rounded-2xl text-[#43913A] transition-colors group-hover:bg-[#43913A] group-hover:text-white">
                  <Gem size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{t.visionTitle[lang]}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t.visionText[lang]}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="bg-secondary/5 p-4 rounded-2xl text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{t.missionTitle[lang]}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t.missionText[lang]}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Bento Box / Masonry Image Grid */}
          <div className="w-full lg:w-7/12 relative min-h-[500px]">
            {/* Top Wide Image */}
            <motion.div 
              className="absolute top-0 right-0 w-full md:w-[90%] h-[55%] rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop" alt="Workspace" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* Bottom Left Small Image */}
            <motion.div 
              className="absolute bottom-0 left-0 w-[45%] md:w-[40%] h-[40%] rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop" alt="Equipment" className="w-full h-full object-cover" />
            </motion.div>

            {/* Bottom Right Dark Stat Card */}
            <motion.div 
              className="absolute bottom-0 right-0 w-[50%] md:w-[45%] h-[40%] bg-[#3A2D23] p-6 rounded-2xl shadow-xl flex flex-col justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex -space-x-2 mb-3">
                <img className="w-8 h-8 rounded-full border-2 border-[#3A2D23] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-[#3A2D23] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-[#3A2D23] object-cover" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=100&auto=format&fit=crop" alt="User" />
                <div className="w-8 h-8 rounded-full border-2 border-[#3A2D23] bg-white/20 flex items-center justify-center text-xs text-white font-bold">+</div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                {isInView ? <CountUp end={50} duration={2.5} /> : "0"}K+
              </div>
              <div className="text-xs text-white/70">
                {lang === "id" ? "Klien puas yang telah mempercayakan proyek lantai mereka kepada kami." : "Satisfied clients who have trusted us with their flooring projects."}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Organizational Structure - Modern Clean Version */}
        <div className="mt-32 pt-20 border-t border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{t.orgTitle[lang]}</h2>
              <p className="text-slate-500 mt-2 text-lg">{t.orgSubtitle[lang]}</p>
            </motion.div>
            <motion.button 
              className="mt-6 md:mt-0 flex items-center gap-2 text-[#43913A] font-semibold hover:gap-4 transition-all"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.downloadPdf[lang]} <ArrowRight size={20} />
            </motion.button>
          </div>
          
          <motion.div 
            className="w-full bg-slate-50 rounded-[2.5rem] p-8 md:p-16 border border-slate-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Elegant placeholder for the org chart */}
            <div className="aspect-[21/9] w-full bg-white rounded-3xl shadow-sm border border-slate-200/60 flex items-center justify-center relative overflow-hidden group">
              <div className="text-slate-400 flex flex-col items-center transition-transform duration-500 group-hover:scale-110">
                <div className="w-20 h-20 mb-6 rounded-2xl bg-slate-50 flex items-center justify-center shadow-inner">
                  <svg className="w-10 h-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-lg font-medium text-slate-500">{t.orgPlaceholder[lang]}</p>
                <p className="text-sm text-slate-400 mt-2">{t.orgPlaceholderDesc[lang]}</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
