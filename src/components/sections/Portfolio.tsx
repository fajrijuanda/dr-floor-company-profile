"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Pabrik Manufaktur Otomotif",
    category: "Epoxy Coating",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
  },
  {
    title: "Gudang Logistik Nasional",
    category: "Concrete Polishing",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Pusat Perbelanjaan Modern",
    category: "Perawatan Lantai",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Fasilitas Kesehatan Terpadu",
    category: "Epoxy Coating",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
  },
  {
    title: "Showroom Mobil Premium",
    category: "Concrete Polishing",
    image: "https://images.unsplash.com/photo-1562144546-24b423985b1a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Laboratorium Farmasi",
    category: "Epoxy Coating",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">Galeri Portofolio</h2>
          <div className="w-24 h-1.5 bg-[#43913A] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Jelajahi berbagai proyek sukses yang telah kami kerjakan untuk klien dari berbagai sektor industri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="relative rounded-[2rem] overflow-hidden group cursor-pointer aspect-[4/3] shadow-md hover:shadow-2xl transition-shadow duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-[#43913A] font-medium text-sm mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.category}
                </p>
                <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
