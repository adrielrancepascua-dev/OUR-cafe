'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone } from 'lucide-react';

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const vibes = [
    { status: 'Lively & Social', wait: '15m', emoji: '🎉' },
    { status: 'Relaxed & Cozy', wait: '8m', emoji: '☕' },
  ];

  const currentVibe = vibes[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center py-16 sm:py-20 bg-stone-50 w-full">
      {/* ===== CAFE BACKGROUND IMAGE ===== */}
      
      {/* Full-screen background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=2000&q=80"
          alt="Cozy cafe background"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/30 to-amber-900/40" />
        {/* Subtle dark gradient overlay to improve white text legibility across viewports */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/30 pointer-events-none" />
      </div>

      {/* Premium Gradient Accent - More Sophisticated */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-transparent via-50% to-sage-700" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Premium Headline with Gradient Text */}
        <motion.div variants={itemVariants} className="mb-4 w-full flex flex-col items-center gap-3">
          <motion.div 
            className="w-full max-w-[19rem] px-4 py-2 rounded-full bg-amber-50/70 backdrop-blur-md border border-amber-200/60 shadow-lg text-center"
            animate={{ 
              boxShadow: [
                '0 0 0 0 rgba(217, 119, 6, 0.7)',
                '0 0 0 12px rgba(217, 119, 6, 0)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-900">
              ✨ San Fernando's Oasis ✨
            </p>
          </motion.div>

          {/* Mobile compact live badge (replaces large card on small screens) */}
          <div className="sm:hidden flex items-center justify-center mb-3">
            <div className="inline-flex items-center gap-2 bg-white/95 text-amber-900 px-3 py-1.5 rounded-full shadow-md text-sm border border-white/80">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="font-semibold">Lively & Social • 15m</span>
              <motion.span
                className="text-base leading-none"
                animate={{ rotate: [0, 12, -12, 0] }}
                transition={{ duration: 2.6, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </div>
          </div>

          {/* Premium Glass Morphism Card - Elevated Design */}
          <motion.h1
            variants={itemVariants}
            className="hidden sm:block text-center mb-6 text-stone-900"
          >
            Welcome to <br />
            <span className="inline-block text-8xl sm:text-9xl lg:text-[6rem] leading-none bg-gradient-to-r from-amber-950 via-amber-900 to-amber-800 bg-clip-text text-transparent drop-shadow-xl">
              OUR Cafe
            </span>
          </motion.h1>
        </motion.div>

        {/* Mobile hero title emphasis */}
        <motion.h1
          variants={itemVariants}
          className="sm:hidden mb-5 text-center"
        >
          <span className="block text-xs uppercase tracking-[0.2em] text-amber-100/90 mb-1">Welcome to</span>
          <span className="block text-5xl leading-[0.9] font-bold bg-gradient-to-r from-amber-100 via-amber-50 to-white bg-clip-text text-transparent drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]">
            OUR Cafe
          </span>
        </motion.h1>

        {/* Elegant Subheadline - Enhanced Visibility */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-16 max-w-3xl mx-auto font-light leading-relaxed text-white drop-shadow-lg px-2 sm:px-0"
          style={{
            textShadow: '0 2px 8px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)'
          }}
        >
          <motion.span
            className="inline-block font-semibold bg-gradient-to-r from-amber-100 to-amber-50 bg-clip-text text-transparent"
            animate={{ opacity: [0.8, 1, 0.9] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Where craft meets warmth
          </motion.span>
          . Designed for the curious. Crafted for everyone.
        </motion.p>

        {/* Premium Glass Morphism Card - Elevated Design */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(107, 101, 82, 0.15)' }}
          transition={{ duration: 0.3 }}
          className="hidden sm:block bg-white/75 backdrop-blur-2xl rounded-3xl p-5 sm:p-10 lg:p-12 mb-8 sm:mb-16 shadow-2xl border border-white/50 relative overflow-hidden"
        >
          {/* Subtle Gradient Border Animation */}
          <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-amber-200/50 via-transparent to-sage-300/50 pointer-events-none" />
          
          <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <motion.div
              className="w-2 sm:w-3 h-2 sm:h-3 bg-emerald-500 rounded-full flex-shrink-0"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p className="text-[11px] sm:text-sm font-medium tracking-widest uppercase text-amber-900 whitespace-nowrap">
              Live Check • Real Time
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10">
            {/* Current Status - Enhanced */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="py-4 sm:py-8 px-3 sm:px-4 rounded-xl bg-gradient-to-br from-amber-50/50 to-amber-50/20 border border-amber-100/50 backdrop-blur-sm sm:border-r border-amber-200/50"
            >
              <motion.p
                className="text-4xl sm:text-7xl font-bold mb-2 sm:mb-4 leading-none"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {currentVibe.emoji}
              </motion.p>
              <p className="text-base sm:text-2xl font-semibold mb-1 sm:mb-2 text-stone-900">
                {currentVibe.status}
              </p>
              <p className="text-[10px] sm:text-sm text-stone-600 font-medium">Current Atmosphere</p>
            </motion.div>

            {/* Est. Wait Time - Premium Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col justify-center py-4 sm:py-8 px-3 sm:px-4 rounded-xl bg-gradient-to-br from-sage-50/50 to-sage-50/20 border border-sage-100/50 backdrop-blur-sm"
            >
              <p className="text-4xl sm:text-7xl font-black mb-2 sm:mb-3 text-amber-900 font-mono">
                {currentVibe.wait}
              </p>
              <p className="text-[10px] sm:text-sm text-stone-600 mb-2 sm:mb-4 font-medium">Estimated Peak Time</p>
              <motion.p
                className="text-xs text-emerald-600 font-semibold uppercase tracking-widest"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ⚡ Fast Service Available
              </motion.p>
            </motion.div>
          </div>
          </div>
        </motion.div>

        {/* Premium CTA Buttons - Mobile-optimized and grouped */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-12"
        >
          <div className="grid grid-cols-2 gap-3 w-full max-w-lg mx-auto sm:flex sm:flex-row sm:gap-6 sm:justify-center">
            <motion.a
              href="#menu"
              whileHover={{ y: -4 }}
              className="w-full inline-flex items-center justify-center px-4 py-2 text-sm sm:text-base rounded-full bg-amber-900 text-white font-semibold shadow text-center"
            >
              View Menu
            </motion.a>

            <motion.a
              href="#collection"
              whileHover={{ y: -2 }}
              className="w-full inline-flex items-center justify-center px-4 py-2 text-sm sm:text-base rounded-full border border-white/30 bg-transparent text-white font-semibold text-center"
            >
              See Collection
            </motion.a>
          </div>

          {/* Reserve remains prominent on desktop; mobile gets a fixed footer */}
          <div className="hidden sm:flex sm:justify-center sm:mt-4">
            <motion.button
              whileHover={{ y: -6, boxShadow: '0 12px 24px rgba(107, 101, 82, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-amber-900 bg-white/70 hover:bg-white backdrop-blur-sm text-amber-900 px-6 lg:px-14 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-standard shadow-lg hover:border-amber-800 hover:shadow-2xl text-sm sm:text-base"
            >
              <Smartphone size={18} />
              <span className="relative">Reserve</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile fixed Reserve CTA */}
        <div className="sm:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-2rem)]">
          <motion.a
            href="#reserve"
            whileHover={{ y: -2 }}
            className="w-full inline-flex items-center justify-center px-4 py-3 rounded-full bg-amber-900 text-white font-bold shadow-xl text-base text-center"
          >
            Reserve
          </motion.a>
        </div>

        {/* Signature Tagline - Subtle Animation */}
        <motion.p
          variants={itemVariants}
          className="mt-8 sm:mt-20 text-xs tracking-[0.12em] sm:tracking-[0.15em] uppercase font-medium text-white drop-shadow-lg flex items-center justify-center gap-2 sm:gap-3 px-2"
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            ☕
          </motion.span>
          Craft • Culture • Connection
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          >
            ☕
          </motion.span>
        </motion.p>
      </motion.div>

      {/* ===== FEATURED SPECIALTIES SECTION ===== */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="hidden sm:block relative z-20 mt-16 sm:mt-24 py-12 sm:py-20 px-3 sm:px-6 lg:px-8"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-5xl font-bold text-center mb-3 sm:mb-4 text-stone-900"
        >
          Our Signature Collection
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-center text-stone-600 mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base"
        >
          Handpicked blends and artisanal creations, crafted daily
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 max-w-6xl mx-auto">
          {[
            { icon: '☕', name: 'Signature Blend', desc: 'Smooth, balanced, unforgettable' },
            { icon: '🎨', name: 'Latte Art Master', desc: 'Visual presentation meets taste' },
            { icon: '🌿', name: 'Cold Brew Classics', desc: 'Smooth, refreshing, legendary' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 sm:p-10 text-center shadow-lg border border-amber-100/50 hover:shadow-2xl transition-all"
            >
              <p className="text-4xl sm:text-5xl mb-3 sm:mb-4">{item.icon}</p>
              <h3 className="text-lg sm:text-xl font-semibold text-stone-900 mb-2">{item.name}</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
