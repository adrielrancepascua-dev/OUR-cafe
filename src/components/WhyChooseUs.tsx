'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative z-20 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 to-stone-50"
    >
      <motion.h2
        variants={itemVariants}
        className="text-4xl sm:text-5xl font-bold text-center mb-16 text-stone-900"
      >
        Why OUR Cafe
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          { icon: '⏱️', title: '15-Minute Premium Service', desc: 'Your order, ready in our signature time' },
          { icon: '✨', title: 'Sustainability First', desc: 'Ethical sourcing, zero-waste ambitions' },
          { icon: '👥', title: 'Community Hub', desc: 'Meet, create, and inspire together' },
          { icon: '🏆', title: 'Award-Winning Roast', desc: 'Recognized excellence in every cup' },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="flex gap-4 items-start"
          >
            <p className="text-4xl flex-shrink-0">{item.icon}</p>
            <div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">{item.title}</h3>
              <p className="text-stone-600 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
