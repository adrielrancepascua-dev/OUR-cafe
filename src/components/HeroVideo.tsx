'use client';

import { motion } from 'framer-motion';
import { QueueCTA } from './QueueCTA';
import { ArrowRight } from 'lucide-react';

export function HeroVideo() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* High-quality video loop mock - using an Unsplash video source or solid gradient if unavailable. 
          For pitch: Replace with actual Vimeo/S3 link. */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="https://images.unsplash.com/photo-1559925393-8be0a519e0ce?q=80&w=1080&auto=format&fit=crop"
      >
        <source src="https://cdn.pixabay.com/video/2021/04/23/71911-540192327_large.mp4" type="video/mp4" />
      </video>

      {/* Atmosphere Gradients - Terracotta & Oak mix */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-oak/90 via-accent-oak/60 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-terracotta/20 blur-3xl z-10 mix-blend-overlay" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6 pt-12 lg:pt-0"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-bold uppercase tracking-widest shadow-xl">
             <span className="w-2 h-2 rounded-full bg-accent-terracotta animate-pulse" />
             Premium Craft
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] tracking-tight">
            The <span className="text-accent-terracotta">Atmosphere</span><br/> You Appreciate.
          </h1>
          
          <p className="text-lg sm:text-xl text-stone-200 font-medium leading-relaxed max-w-lg">
            Experience our massive industrial-minimalist sanctuary. Pre-order our specialized pastries and heavy meals right now to skip the rush.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
             <a
               href="#menu"
               className="px-8 py-4 bg-white text-accent-oak rounded-full font-bold shadow-xl hover:bg-stone-50 transition-colors flex items-center justify-center gap-2 group"
             >
               View Menu
               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </a>
             <a
               href="#menu"
               className="px-8 py-4 bg-accent-terracotta text-white rounded-full font-bold hover:bg-[#a53a0a] transition-colors flex items-center justify-center"
             >
               Reserve Table
             </a>
             <a
               href="#craft"
               className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-colors flex items-center justify-center"
             >
               Our Story
             </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="w-full flex justify-center lg:justify-end"
        >
           <QueueCTA />
        </motion.div>

      </div>
    </section>
  );
}