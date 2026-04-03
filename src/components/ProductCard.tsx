'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Heart } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  product: {
    id: number;
    category: string;
    categoryIcon: string;
    name: string;
    description: string;
    price: string;
    image: string;
    vibe: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgb(0,0,0,0.06)] hover:shadow-2xl border border-stone-100 flex flex-col transition-all cursor-pointer h-full"
    >
      {/* Premium Badge */}
      <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 text-white text-xs font-bold uppercase tracking-widest rounded-full flex items-center gap-1.5 shadow-lg">
         {product.categoryIcon} {product.category}
      </div>

      <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-lg text-stone-400 hover:text-red-500 hover:bg-red-50 transition-colors">
         <Heart size={18} />
      </div>

      {/* High-Fidelity Image Container */}
      <div className="relative w-full aspect-[4/3] sm:aspect-square overflow-hidden bg-stone-100">
        <Image 
          src={product.image}
          alt={product.name}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-grow bg-gradient-to-t from-stone-50 via-white to-white">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-2xl font-bold text-accent-oak leading-tight line-clamp-2 pr-2">
            {product.name}
          </h3>
          <span className="font-sans text-xl font-black text-accent-terracotta whitespace-nowrap">
            {product.price}
          </span>
        </div>
        
        <p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {product.description}
        </p>

        <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
          <span className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-semibold rounded-lg uppercase tracking-wide">
             Vibe: {product.vibe}
          </span>
          <button className="flex items-center gap-2 bg-stone-900 text-white px-5 py-2.5 rounded-xl font-bold shadow-md hover:bg-accent-terracotta hover:shadow-terracotta/20 transition-all active:scale-95">
            <ShoppingBag size={16} /> 
            Add 
          </button>
        </div>
      </div>
    </motion.div>
  );
}