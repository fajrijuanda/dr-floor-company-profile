"use client";

import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { Promo } from "@/components/sections/Promo";
import { Deals } from "@/components/sections/Deals";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { Instagram } from "@/components/sections/Instagram";
import { FAQ } from "@/components/sections/FAQ";
import { Newsletter } from "@/components/sections/Newsletter";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Products />
      <Promo />
      <Deals />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Instagram />
      <FAQ />
      <Contact />
      <Newsletter />
    </main>
  );
}
