"use client";

import { motion } from "framer-motion";
import { Heart, Maximize2, ShoppingBag, Star } from "lucide-react";
import { useState, useRef } from "react";

const products = [
  {
    id: 1,
    name: "Epoxy Resin Coating",
    category: "Chemicals",
    price: "$80.00",
    originalPrice: "$160.00",
    rating: 4.9,
    discount: "50% off",
    image: "https://images.unsplash.com/photo-1585565804112-f201f68c48b4?q=80&w=800&auto=format&fit=crop",
    hasTimer: true,
  },
  {
    id: 2,
    name: "Diamond Polishing Pad",
    category: "Tools",
    price: "$50.00",
    originalPrice: "$60.00",
    rating: 4.9,
    discount: "10% off",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=800&auto=format&fit=crop",
    hasTimer: false,
  },
  {
    id: 3,
    name: "Industrial Floor Grinder",
    category: "Machinery",
    price: "$195.00",
    originalPrice: "$390.00",
    rating: 4.9,
    discount: "50% off",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop",
    hasTimer: false,
  },
  {
    id: 4,
    name: "Concrete Sealer Pro",
    category: "Chemicals",
    price: "$40.00",
    originalPrice: "$80.00",
    rating: 4.9,
    discount: "50% off",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=800&auto=format&fit=crop",
    hasTimer: false,
  },
  {
    id: 5,
    name: "Floor Wax Polish",
    category: "Chemicals",
    price: "$25.00",
    originalPrice: "$35.00",
    rating: 4.8,
    discount: "20% off",
    image: "https://images.unsplash.com/photo-1584820927498-cafe6c1527ce?q=80&w=800&auto=format&fit=crop",
    hasTimer: false,
  }
];

export function Products() {
  const [activeTab, setActiveTab] = useState("Latest Products");
  const tabs = ["All Products", "Latest Products", "Best Seller", "Featured Products"];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <section id="products" className="py-24 bg-gradient-to-r from-[#e6e2dd] via-[#f2f0ec] to-white overflow-hidden">
      
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 mb-10">
        <div className="flex items-center gap-3 text-[#43913A] font-bold text-lg mb-2">
          <span className="w-8 h-[2px] bg-[#43913A]"></span> 
          Our Products
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
          Our Products Collections
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              activeTab === tab 
                ? "bg-[#43913A] text-white shadow-lg shadow-[#43913A]/30 border-transparent" 
                : "bg-transparent border border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products Carousel */}
      <div className="w-full relative">
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-6 overflow-x-auto pb-12 pt-4 snap-x hide-scrollbar   px-4 lg:px-8 xl:px-10 cursor-grab active:cursor-grabbing"
        >
          
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className="w-[85vw] sm:w-[320px] bg-[#FAF9F6] p-4 rounded-[2rem] shrink-0 snap-center shadow-lg border border-white group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              
              {/* Product Image Area */}
              <div className="w-full h-[320px] bg-[#E8E4DD] rounded-[1.5rem] relative overflow-hidden mb-5">
                
                {/* Discount Tag */}
                <div className="absolute top-4 left-4 bg-[#43913A] text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
                  {product.discount}
                </div>

                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                  <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-[#43913A] hover:scale-110 transition-all shadow-sm">
                    <Heart size={16} strokeWidth={2.5} />
                  </button>
                  <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-[#43913A] hover:scale-110 transition-all shadow-sm">
                    <Maximize2 size={16} strokeWidth={2.5} />
                  </button>
                  <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-[#43913A] hover:scale-110 transition-all shadow-sm">
                    <ShoppingBag size={16} strokeWidth={2.5} />
                  </button>
                </div>

                {/* Image */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                />

                {/* Optional Timer (Only for the first item as in the design) */}
                {product.hasTimer && (
                  <div className="absolute bottom-4 left-4 right-4 bg-[#43913A] rounded-xl flex divide-x divide-white/30 text-white py-2 shadow-lg z-10">
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <span className="font-bold text-sm">5</span>
                      <span className="text-[10px] uppercase font-medium">day</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <span className="font-bold text-sm">23</span>
                      <span className="text-[10px] uppercase font-medium">Hour</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <span className="font-bold text-sm">36</span>
                      <span className="text-[10px] uppercase font-medium">min</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <span className="font-bold text-sm">55</span>
                      <span className="text-[10px] uppercase font-medium">sec</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="px-2 pb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-500 text-sm font-medium">{product.category}</span>
                  <div className="flex items-center gap-1 text-slate-800 font-bold text-sm">
                    <Star size={14} className="text-[#FFB800] fill-[#FFB800]" />
                    {product.rating}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 truncate">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-3">
                  <span className="text-slate-900 font-bold text-lg">{product.price}</span>
                  <span className="text-slate-400 line-through text-sm font-medium">{product.originalPrice}</span>
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>

    </section>
  );
}
