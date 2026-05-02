"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "The Ultimate Guide to Concrete Polishing in 2025",
    excerpt: "Discover the latest techniques and diamond abrasive technologies that are revolutionizing the concrete polishing industry this year.",
    date: "18 December 2025",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Why Epoxy Coating is Essential for Industrial Facilities",
    excerpt: "Learn how high-performance epoxy coatings protect your concrete floors from chemical spills, heavy machinery traffic, and daily wear.",
    date: "12 November 2025",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Floor Maintenance Tips to Keep Your Concrete Shining",
    excerpt: "A comprehensive routine guide to maintaining the high-gloss finish of your polished concrete floors using the right cleaning agents.",
    date: "05 October 2025",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop"
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-gradient-to-r from-[#e6e2dd] via-[#f2f0ec] to-white">
      <div className="w-full px-4 lg:px-8 xl:px-10 w-full">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 text-slate-700 font-bold text-lg mb-3">
              <span className="w-8 h-[2px] bg-[#43913A]"></span> 
              News & Blogs
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Our Latest <br />
              <span className="text-[#43913A]">News & Blogs</span>
            </h2>
          </div>
          <Link 
            href="#all-blogs"
            className="bg-[#3A3F47] hover:bg-[#43913A] text-white px-8 py-3.5 rounded-full font-medium transition-colors whitespace-nowrap shadow-sm mb-2"
          >
            View All Blogs
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          
          {blogs.map((blog, index) => (
            <motion.div 
              key={blog.id}
              className="flex flex-col group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              
              {/* Image Container with Badge */}
              <div className="relative mb-10">
                <div className="w-full h-[280px] lg:h-[300px] rounded-[2.5rem] overflow-hidden shadow-sm">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                
                {/* Date Badge - Now outside the overflow-hidden div */}
                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-[#43913A] text-white px-6 py-2.5 rounded-full font-medium text-sm border-[6px] border-[#e6e2dd] whitespace-nowrap shadow-sm">
                    {blog.date}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="px-2 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-[#43913A] transition-colors">
                  {blog.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  {blog.excerpt}
                </p>
                <div className="mt-auto">
                  <Link 
                    href={`#blog-${blog.id}`}
                    className="text-slate-900 font-bold hover:text-[#43913A] transition-colors inline-block pb-1 border-b-2 border-slate-900 hover:border-[#43913A]"
                  >
                    Read More
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
