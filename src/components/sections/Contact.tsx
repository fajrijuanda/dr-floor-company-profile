"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      {/* Abstract Green Background Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#43913A]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Request for Quotation / Inquiry</h2>
          <div className="w-24 h-1 bg-[#43913A] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Need a quote? Don't be afraid to ask! Start a conversation with us.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            className="lg:w-5/12 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-xl shadow-sm mr-4 text-[#43913A]">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Office Address</h4>
                    <p className="text-slate-600 mt-1">Artha Graha Building, 26th Floor SCBD, Jl. Jend. Sudirman No. 52-53, South Jakarta, DKI Jakarta, Indonesia 12190</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-xl shadow-sm mr-4 text-[#43913A]">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Phone Number</h4>
                    <p className="text-slate-600 mt-1">+62 21 5099 6969 Ext. 1263</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-xl shadow-sm mr-4 text-[#43913A]">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Email</h4>
                    <p className="text-slate-600 mt-1">hkdrfloor@gmail.com<br/>marketing@drfloor-idn.co.id</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Glassmorphism Form */}
          <motion.div 
            className="lg:w-7/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="bg-white/70 backdrop-blur-md border border-white/40 p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Kirimkan Pesan Anda</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white/50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Alamat Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white/50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Layanan yang Dibutuhkan</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white/50 appearance-none"
                >
                  <option value="">Pilih Layanan</option>
                  <option value="polishing">Concrete Polishing</option>
                  <option value="epoxy">Epoxy Coating</option>
                  <option value="maintenance">Perawatan Lantai</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Pesan Detail</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white/50 resize-none"
                  placeholder="Ceritakan tentang proyek Anda..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#43913A] hover:bg-[#43913A]/90 text-white font-bold py-4 px-8 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center group"
              >
                Send
                <Send className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div 
          className="mt-16 rounded-[2rem] overflow-hidden shadow-2xl h-96 border border-slate-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.272186526189!2d106.80497551476906!3d-6.227806595491763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1437146522b%3A0xc3c940b541bb870c!2sArtha%20Graha%20Building!5e0!3m2!1sen!2sid!4v1683115456123!5m2!1sen!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
