"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What areas do you serve for concrete polishing?",
    answer: "We primarily serve major cities across Indonesia, including Jakarta, Surabaya, Bandung, and Bali. For large-scale industrial or commercial projects, we are also available to travel nationwide."
  },
  {
    id: 2,
    question: "How long does the concrete polishing process take?",
    answer: "The duration depends entirely on the size of the area, the condition of the existing floor, and the desired level of gloss. A standard commercial space can typically be completed within 3 to 5 days."
  },
  {
    id: 3,
    question: "Can you polish old or damaged concrete floors?",
    answer: "Yes, absolutely! Our heavy-duty grinding machines can remove old coatings, stains, and minor surface damages. We then patch cracks and holes before polishing the concrete to a brand-new finish."
  },
  {
    id: 4,
    question: "What is the difference between epoxy coating and concrete polishing?",
    answer: "Polished concrete is the actual concrete slab ground and polished to a shine, which is highly durable and low-maintenance. Epoxy is a topical chemical coating applied over the concrete, ideal for environments requiring strict chemical resistance."
  },
  {
    id: 5,
    question: "How do I maintain my polished concrete floor?",
    answer: "Maintenance is incredibly simple. Regular sweeping and damp mopping with a pH-neutral cleaner is usually all that's required. Avoid using harsh acidic or alkaline cleaners which can dull the shine over time."
  },
  {
    id: 6,
    question: "Do you offer any warranties on your services?",
    answer: "Yes, we provide comprehensive warranties for both our concrete polishing and epoxy coating services. The specific terms depend on the type of service and the floor's environmental conditions."
  }
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(2);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-r from-[#e6e2dd] via-[#f2f0ec] to-white">
      <div className="w-full px-4 lg:px-8 xl:px-10 w-full">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex items-center gap-3 text-slate-700 font-bold text-lg mb-2">
            <span className="w-6 h-[2px] bg-[#43913A]"></span> 
            Faqs
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
            Question? Look here.
          </h2>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div 
                key={faq.id} 
                className={`rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer ${
                  isOpen 
                    ? "bg-[#43913A] shadow-lg" 
                    : "bg-white/30 hover:bg-white/50 border border-white/60"
                }`}
                onClick={() => toggleFaq(faq.id)}
              >
                <div className="px-6 py-5 flex justify-between items-center gap-4">
                  <h3 className={`text-lg md:text-xl font-medium transition-colors ${
                    isOpen ? "text-white" : "text-slate-800"
                  }`}>
                    {faq.question}
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
                        {faq.answer}
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
