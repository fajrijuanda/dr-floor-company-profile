"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, Heart, ShoppingCart, User, Phone, Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Portofolio", href: "#portfolio" },
    { name: "Hubungi Kami", href: "#contact" },
  ];

  return (
    <header className={`w-full z-50 fixed top-0 transition-transform duration-300 ${isScrolled ? '-translate-y-10' : 'translate-y-0'}`}>
      {/* Top Bar - Darker */}
      <div className="w-full h-10 bg-slate-900 text-slate-300 px-4 lg:px-8 xl:px-10 text-xs lg:text-sm font-medium flex items-center">
        <div className="w-full flex justify-between items-center">
          <div className="hidden md:block">
            Call Us : (+62) 21 5099 6969
          </div>
          <div className="text-center w-full md:w-auto">
            Dapatkan Penawaran Spesial untuk Proyek Anda. <Link href="#contact" className="text-[#43913A] hover:text-white transition-colors ml-1">Hubungi Sekarang</Link>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link href="#" className="hover:text-white transition-colors"><Phone size={16} /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Mail size={16} /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Globe size={16} /></Link>
          </div>
        </div>
      </div>

      {/* Main Navbar - Dark */}
      <motion.div
        className={`w-full bg-slate-800 text-white border-b border-white/5 transition-all duration-300 ${
          isScrolled ? "py-4 shadow-lg" : "py-5 mt-0"
        }`}
      >
        <div className="w-full px-4 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="#home" className="flex items-center bg-white p-1.5 rounded-lg">
                <Image 
                  src="/logo.png" 
                  alt="Dr. Floor Logo" 
                  width={120} 
                  height={40} 
                  className="h-8 w-auto object-contain"
                  priority
                />
              </Link>
            </div>
            
            {/* Desktop Links */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-slate-200 transition-colors hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center gap-6">
              <button className="text-slate-300 hover:text-white transition-colors"><Search size={20} /></button>
              <button className="text-slate-300 hover:text-white transition-colors"><Heart size={20} /></button>
              <button className="text-slate-300 hover:text-white transition-colors"><ShoppingCart size={20} /></button>
              <button className="text-slate-300 hover:text-white transition-colors"><User size={20} /></button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-white"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-white/10 absolute w-full left-0 top-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-6 px-3 py-4 border-t border-white/10 mt-4">
                <button className="text-slate-300 hover:text-white"><Search size={20} /></button>
                <button className="text-slate-300 hover:text-white"><Heart size={20} /></button>
                <button className="text-slate-300 hover:text-white"><ShoppingCart size={20} /></button>
                <button className="text-slate-300 hover:text-white"><User size={20} /></button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </header>
  );
}
