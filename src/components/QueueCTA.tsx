'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CreditCard, LayoutList, PackageCheck, UserCircle2 } from 'lucide-react';
import { useCafeOperations } from '../hooks/useCafeOperations';

export function QueueCTA() {
  const { queueData, loading, inLine, queuePosition, requestQueueSpot } = useCafeOperations();
  const [toastVisible, setToastVisible] = useState(false);

  const handleGetInLine = () => {
    // Show 'Simulated Payment' GCash/Maya toast
    setToastVisible(true);
    // After 2.5s update queue position
    setTimeout(() => {
      setToastVisible(false);
      requestQueueSpot();
    }, 2500);
  };

  return (
    <div className="w-full relative">
      <AnimatePresence>
        {toastVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed bottom-10 inset-x-0 mx-auto w-[90%] max-w-sm bg-green-50 border border-green-200 shadow-2xl rounded-2xl p-4 z-50 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 text-green-700 rounded-full">
                <CreditCard size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-green-900 text-sm">Simulated Payment</span>
                <span className="text-xs text-green-700">Maya / GCash Auth...</span>
              </div>
            </div>
            <motion.div 
               animate={{ rotate: 360 }} 
               transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            >
              <LayoutList size={20} className="text-green-500" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-md mx-auto relative overflow-hidden transition-all hover:bg-white/90">
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent-terracotta/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent-oak/5 rounded-full blur-xl pointer-events-none"></div>
        
        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="h-6 w-1/3 bg-stone-200 rounded-lg"></div>
            <div className="h-10 w-full bg-stone-300 rounded-xl"></div>
          </div>
        ) : inLine ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center space-y-3 relative z-10"
          >
            <div className="p-3 bg-accent-terracotta/10 text-accent-terracotta rounded-full">
              <PackageCheck size={28} />
            </div>
            <div>
              <h3 className="text-accent-oak font-display text-lg sm:text-xl font-bold">You are in line</h3>
              <p className="text-stone-600 text-sm mt-1">Est. Time: {queueData?.currentWaitTime}</p>
            </div>
            <div className="bg-stone-50 border border-stone-100 rounded-2xl w-full py-4 mt-2">
              <span className="block text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">Queue Position</span>
              <span className="text-4xl font-display font-bold text-accent-terracotta">#{queuePosition}</span>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-5 relative z-10">
            <div className="flex justify-between items-end mb-2">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest font-bold text-accent-terracotta/80 flex items-center gap-1.5"><Clock size={12}/> Live Status</span>
                <span className="text-accent-oak text-xl sm:text-2xl font-display font-bold mt-1 tracking-tight">Active Wait: {queueData?.currentWaitTime}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-700 text-xs font-bold rounded-full border border-red-100 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                {queueData?.status}
              </div>
            </div>
            
            <p className="text-stone-500 text-sm font-medium pr-4 leading-relaxed">Prioritize your arrival. Secure your spot & pre-order in line digitally.</p>
            
            <button 
              onClick={handleGetInLine}
              className="w-full bg-accent-oak hover:bg-[#341202] text-white py-4 rounded-2xl font-semibold shadow-[0_8px_20px_rgb(69,26,3,0.3)] transition-all transform hover:scale-[1.02] active:scale-95 flex justify-center items-center gap-2 group"
            >
              <UserCircle2 size={20} className="text-accent-terracotta/80 group-hover:text-accent-terracotta transition-colors" />
              <span>Get in Line Now</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
