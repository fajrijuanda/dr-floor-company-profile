"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const FacebookIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const YoutubeIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

export function Footer() {
  const { lang, setLang } = useLanguage();
  const t = translations.footer;

  return (
    <footer className="bg-slate-800 text-white pt-20">
      <div className="w-full px-4 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 pr-0 lg:pr-10">
            <Link href="#home" className="inline-block mb-6 bg-white p-3 rounded-2xl">
              <Image 
                src="/logo.png" 
                alt="Dr. Floor Logo" 
                width={160} 
                height={50} 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-white/80 mb-8 leading-relaxed font-medium text-sm">
              {t.description[lang]}
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#43913A] hover:text-white text-slate-800 transition-colors">
                <FacebookIcon size={18} className="fill-current" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#43913A] hover:text-white text-slate-800 transition-colors">
                <TwitterIcon size={18} className="fill-current" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#43913A] hover:text-white text-slate-800 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 7.6 23.15c-.09-1.25-.17-3.16.03-4.52.19-.94 1.2-5.07 1.2-5.07s-.3-.61-.3-1.5c0-1.4.82-2.45 1.83-2.45.86 0 1.27.65 1.27 1.43 0 .86-.55 2.15-.83 3.34-.23 1 .5 1.81 1.48 1.81 1.78 0 3.14-1.88 3.14-4.58 0-2.4-1.73-4.08-4.18-4.08-2.84 0-4.5 2.13-4.5 4.31 0 .86.33 1.78.75 2.28.08.1.09.18.07.29-.06.27-.2.83-.23.95-.04.16-.14.2-.31.12-1.15-.54-1.87-2.22-1.87-3.58 0-2.9 2.1-5.57 6.08-5.57 3.2 0 5.68 2.28 5.68 5.34 0 3.18-2 5.75-4.78 5.75-1 0-1.85-.48-2.16-1.08l-.58 2.22c-.2.8-.75 1.79-1.12 2.4A12 12 0 1 0 12 0z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#43913A] hover:text-white text-slate-800 transition-colors">
                <InstagramIcon size={18} className="stroke-current" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#43913A] hover:text-white text-slate-800 transition-colors">
                <YoutubeIcon size={18} className="stroke-current" />
              </a>
            </div>
          </div>

          {/* Company Col */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold mb-6">{t.company[lang]}</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-white/80 hover:text-white transition-colors text-sm font-medium">{t.aboutUs[lang]}</Link></li>
              <li><Link href="#blog" className="text-white/80 hover:text-white transition-colors text-sm font-medium">{t.blog[lang]}</Link></li>
              <li><Link href="#contact" className="text-white/80 hover:text-white transition-colors text-sm font-medium">{t.contactUs[lang]}</Link></li>
              <li><Link href="#career" className="text-white/80 hover:text-white transition-colors text-sm font-medium">{t.career[lang]}</Link></li>
            </ul>
          </div>

          {/* Customer Services Col */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold mb-6">{t.customerService[lang]}</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">{t.myAccount[lang]}</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">{t.trackOrder[lang]}</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">{t.returnLabel[lang]}</Link></li>
              <li><Link href="#faq" className="text-white/80 hover:text-white transition-colors text-sm font-medium">{t.faqLabel[lang]}</Link></li>
            </ul>
          </div>

          {/* Contact Info Col */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold mb-6">{t.contactInfoTitle[lang]}</h4>
            <ul className="space-y-4 text-white/80 text-sm font-medium mb-6">
              <li>+62 21 5099 6969 Ext. 1263</li>
              <li>hkdrfloor@gmail.com</li>
              <li className="leading-relaxed">Artha Graha Building, 26th Floor SCBD, Jl. Jend. Sudirman No. 52-53, South Jakarta</li>
            </ul>
          </div>

          {/* Map Col */}
          <div className="lg:col-span-2">
             <div className="w-full h-40 md:h-full min-h-[160px] rounded-2xl overflow-hidden border border-white/10 opacity-90 hover:opacity-100 transition-opacity shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.272186526189!2d106.80497551476906!3d-6.227806595491763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1437146522b%3A0xc3c940b541bb870c!2sArtha%20Graha%20Building!5e0!3m2!1sen!2sid!4v1683115456123!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-slate-900 border-t border-white/5 py-6">
        <div className="w-full px-4 lg:px-8 xl:px-10 flex flex-col md:flex-row justify-between items-center text-white/80 font-medium text-sm">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {t.copyright[lang]}
          </p>
          <div className="flex items-center space-x-4">
            <div className="relative flex items-center hover:text-white transition-colors">
              <select
                className="bg-transparent appearance-none pr-4 cursor-pointer outline-none"
                value={lang}
                onChange={(e) => setLang(e.target.value as "id" | "en")}
              >
                <option value="id" className="text-slate-900">Indonesia</option>
                <option value="en" className="text-slate-900">English</option>
              </select>
              <svg className="absolute right-0 pointer-events-none" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
            <span className="text-white/30">|</span>
            <div className="relative flex items-center hover:text-white transition-colors">
              <select className="bg-transparent appearance-none pr-4 cursor-pointer outline-none" defaultValue="IDR">
                <option value="IDR" className="text-slate-900">IDR</option>
                <option value="USD" className="text-slate-900">USD</option>
              </select>
              <svg className="absolute right-0 pointer-events-none" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
