'use client';

import { HeroSection } from '@/components/HeroSection';
import { MenuPreview } from '@/components/MenuPreview';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { PeakHours } from '@/components/PeakHours';
import OrderSummary from '@/components/OrderSummary';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Digital Menu Section */}
      <section id="menu">
        <MenuPreview />
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      {/* Order Summary Section */}
      <section id="orders">
        <OrderSummary />
      </section>

      {/* Crowd Management Section */}
      <section id="crowds">
        <PeakHours />
      </section>

      {/* Supabase Integration Section */}
      <section className="bg-gradient-to-r from-cafe-700 to-cafe-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">🚀 Next Step: Go Live with Supabase</h2>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <p className="text-lg mb-6 leading-relaxed">
                This demo is production-ready and can be connected to Supabase in minutes to enable:
              </p>
              <ul className="text-left max-w-2xl mx-auto space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <strong>Real-Time Vibe Check:</strong> Replace mock data with live cafe capacity from your POS system via Supabase Realtime.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <strong>Digital Orders Queue:</strong> Store orders in Supabase PostgreSQL and push notifications via Supabase Functions.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <strong>Live Analytics:</strong> Track visit patterns and crowd density using Supabase RLS + edge functions.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🔐</span>
                  <div>
                    <strong>User Authentication:</strong> Optional user registration for loyalty program integration.
                  </div>
                </li>
              </ul>
              
              <div className="bg-accent-warm bg-opacity-20 rounded-xl p-6 border border-accent-warm border-opacity-30 text-left">
                <h3 className="font-bold text-lg mb-3">💡 Integration Checklist:</h3>
                <code className="text-sm bg-charcoal-900 bg-opacity-30 p-4 rounded-lg block font-mono leading-relaxed">
                  {`// 1. Create Supabase project at supabase.com\n// 2. Set NEXT_PUBLIC_SUPABASE_URL & NEXT_PUBLIC_SUPABASE_ANON_KEY\n// 3. Create tables: menu_items, orders, cafe_status, peak_hours\n// 4. Enable RLS and Realtime on tables\n// 5. Replace import from /data/menu.json with Supabase query:\n\nimport { createClient } from '@supabase/supabase-js';\nconst supabase = createClient(url, key);\nconst { data: menuItems } = await supabase.from('menu_items').select('*');`}
                </code>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
