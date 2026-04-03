'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl border-b border-amber-100/40 shadow-lg'
          : 'bg-amber-900/5 backdrop-blur-lg border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          className="font-display text-2xl sm:text-3xl font-bold text-amber-900 hover:text-amber-800 transition-colors"
        >
          ☕ OUR Cafe
        </motion.a>
        
        <div className="hidden md:flex gap-8 lg:gap-12 items-center">
          <motion.a
            href="#menu"
            whileHover={{ y: -2 }}
            className="transition-colors font-semibold text-amber-900 hover:text-amber-700 duration-quick relative group"
          >
            Menu
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-900 to-amber-700"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <motion.a
            href="#why-choose-us"
            whileHover={{ y: -2 }}
            className="transition-colors font-semibold text-amber-900 hover:text-amber-700 duration-quick relative group"
          >
            Why Us
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-900 to-amber-700"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <motion.a
            href="#crowds"
            whileHover={{ y: -2 }}
            className="transition-colors font-semibold text-amber-900 hover:text-amber-700 duration-quick relative group"
          >
            Visit
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-900 to-amber-700"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          
          <motion.button
            whileHover={{ y: -2, boxShadow: '0 8px 20px rgba(107, 101, 82, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 lg:px-8 py-2.5 rounded-full font-bold text-white bg-gradient-to-r from-amber-900 to-amber-950 hover:from-amber-800 hover:to-amber-900 transition-all duration-quick shadow-lg"
          >
            Reserve
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
