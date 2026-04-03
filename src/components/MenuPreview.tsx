'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, ShoppingCart } from 'lucide-react';
import menuData from '../../data/menu.json';

interface MenuItem {
  id: number;
  category: string;
  categoryIcon: string;
  name: string;
  description: string;
  price: string;
  image: string;
  vibe: string;
}

interface MenuItemDetailProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
}

function MenuItemDetail({ item, isOpen, onClose }: MenuItemDetailProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 500, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-full w-full md:w-[450px] z-50 shadow-2xl overflow-y-auto bg-white"
          >
            <div className="p-6 sm:p-8">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-stone-100 transition-colors text-stone-500"
              >
                <X size={24} />
              </button>

              {/* Item Image */}
              <div className="mb-6 rounded-xl sm:rounded-2xl overflow-hidden h-64 sm:h-72">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-standard"
                />
              </div>

              {/* Category Badge */}
              <div className="inline-block px-4 py-2 rounded-full mb-4 bg-amber-50">
                <span className="text-sm font-semibold text-amber-900">
                  {item.categoryIcon} {item.category}
                </span>
              </div>

              {/* Item Name */}
              <h2 className="text-3xl font-display font-bold mb-3 text-stone-900">{item.name}</h2>

              {/* Description */}
              <p className="text-base leading-relaxed mb-6 text-stone-700">
                {item.description}
              </p>

              {/* Vibe Tag */}
              <div className="mb-6">
                <p className="text-xs mb-2 uppercase tracking-wider font-semibold text-stone-600">Perfect For</p>
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium capitalize bg-sage-50 text-sage-900">
                  {item.vibe}
                </span>
              </div>

              {/* Price */}
              <div className="border-t border-stone-200 pt-6 mb-6">
                <p className="text-sm mb-2 uppercase tracking-wider font-semibold text-stone-600">Price</p>
                <p className="text-4xl font-bold font-display mb-6 text-amber-900">{item.price}</p>

                {/* Add to Queue Button */}
                <button className="w-full bg-amber-900 hover:bg-amber-950 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 group shadow-md hover:shadow-lg transition-all duration-quick active:scale-95">
                  <ShoppingCart size={20} />
                  Add to Queue
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </button>
              </div>

              {/* Pro Tip */}
              <div className="rounded-xl p-4 border border-amber-100 bg-amber-50">
                <p className="text-xs font-semibold mb-1 text-amber-900">💡 PRO TIP</p>
                <p className="text-sm leading-relaxed text-amber-800">
                  This item pairs beautifully with our cold brew. Ask our barista for a pairing recommendation!
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
export function MenuPreview() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const categories = Array.from(new Set(menuData.menuItems.map(item => item.category)));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-stone-900">
            Visual-First Digital Menu
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-stone-700">
            Explore our carefully curated selection. Tap any item to discover details and add to your queue.
          </p>
        </motion.div>

        {/* Categories */}
        {categories.map(category => (
          <motion.div
            key={category}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-20 sm:mb-28"
          >
            {/* Category Header */}
            <div className="mb-8 sm:mb-10 flex items-center gap-3 sm:gap-4">
              <span className="text-3xl sm:text-4xl">
                {menuData.menuItems.find(item => item.category === category)?.categoryIcon}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-stone-900">
                {category}
              </h3>
            </div>

            {/* Category Items Grid */}
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
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedItem(item)}
                    className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
                  >
                    {/* Image Container */}
                    <div className="relative h-48 sm:h-56 overflow-hidden bg-stone-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <h4 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2 text-stone-900">
                        {item.name}
                      </h4>
                      <p className="text-sm text-stone-600 mb-4 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Price and Vibe */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xl sm:text-2xl font-bold text-amber-900">{item.price}</span>
                        <span className="text-xs sm:text-sm font-medium capitalize text-stone-600">{item.vibe}</span>
                      </div>

                      {/* Learn More Button */}
                      <button className="w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 bg-amber-100 hover:bg-amber-200 text-amber-900 active:scale-95">
                        <Plus size={18} />
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Menu Item Detail Drawer */}
      {selectedItem && (
        <MenuItemDetail
          item={selectedItem}
          isOpen={selectedItem !== null}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
}
