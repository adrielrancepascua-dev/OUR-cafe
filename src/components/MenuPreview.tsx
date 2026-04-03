'use client';

import React from 'react';
import { motion } from 'framer-motion';
import menuData from '../../data/menu.json';
import { ProductCard } from './ProductCard';

export function MenuPreview() {
  const categories = Array.from(new Set(menuData.menuItems.map(item => item.category)));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-stone-50">       
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center justify-center flex flex-col items-center justify-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-accent-oak/10 text-accent-oak text-sm font-bold uppercase tracking-widest shadow-sm mb-4">
             Premium Craft
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-stone-900 tracking-tight">
            Curated Essentials
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-stone-600 font-medium text-center">   
            Artisanal creations designed for high-hype expectations.
          </p>
        </motion.div>

        {categories.map(category => (
          <div key={category} className="mb-20 sm:mb-28">
            <div className="mb-8 sm:mb-10 flex items-center gap-3 sm:gap-4 border-b-2 border-stone-200 pb-4">    
              <span className="text-3xl sm:text-4xl bg-stone-100 p-3 rounded-2xl shadow-sm">
                {menuData.menuItems.find(item => item.category === category)?.categoryIcon}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-stone-900 tracking-tight">
                {category}
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {menuData.menuItems
                .filter(item => item.category === category)
                .map((item) => (
                  <div key={item.id} className="h-full">
                    <ProductCard product={item} />
                  </div>
                ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
