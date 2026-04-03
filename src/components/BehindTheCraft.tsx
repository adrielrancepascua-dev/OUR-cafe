import { motion } from "framer-motion";
import { Camera, MapPin, Navigation } from "lucide-react";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapComponent"), { 
    ssr: false, 
    loading: () => <div className="w-full h-full bg-stone-200 animate-pulse rounded-2xl flex items-center justify-center text-stone-400 font-bold">Loading Map...</div>
});

export function BehindTheCraft() {
  return (
    <section className="bg-stone-50 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-900 text-sm font-bold uppercase tracking-wider">
              <Camera size={16} /> Community
            </div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-stone-900 leading-tight">
              More than a coffee shop. A canvas for memories.
            </h2>
            <p className="text-lg sm:text-xl text-stone-600 font-medium leading-relaxed">
              We built OUR Cafe as a massive, industrial-minimalist sanctuary. Whether you're capturing the morning sun hitting the concrete, or enjoying our heavy pastry menu, the vibe is unmistakably ours.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80" alt="Cafe aesthetic" className="w-full rounded-3xl object-cover shadow-xl aspect-[3/4]" />
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1559925393-8be0a519e0ce?w=800&q=80" alt="Pastry close up" className="w-full rounded-3xl object-cover shadow-xl aspect-[4/5]" />
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-[3rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-stone-100">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4" />
          
          <div className="flex flex-col lg:flex-row gap-12 relative z-10">
            <div className="lg:w-1/3 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-xs font-bold uppercase tracking-widest mb-6">
                <MapPin size={14} /> Location
              </div>
              <h3 className="text-3xl font-bold font-display text-stone-900 mb-4">Find Your Sanctuary</h3>
              <p className="text-stone-600 font-medium mb-8">Located strategically in San Fernando, boasting the largest cafe floor plan in Pampanga with ample parking designed for effortless access.</p>
              
              <button className="flex items-center justify-center gap-3 w-full bg-stone-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-stone-800 transition-colors">
                <Navigation size={18} /> Open in Maps
              </button>
            </div>
            
            <div className="lg:w-2/3 h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-inner relative group bg-stone-200">
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}