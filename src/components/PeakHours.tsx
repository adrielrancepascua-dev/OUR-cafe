'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Download, Clock, Users } from 'lucide-react';
import menuData from '../../data/menu.json';

interface DigitalTicketProps {
  isVisible: boolean;
  orderNumber: string;
  waitTime: string;
}

function DigitalTicket({ isVisible, orderNumber, waitTime }: DigitalTicketProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-br from-white to-stone-50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border-2 border-amber-200 shadow-xl max-w-md mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 text-amber-900">
          Your Digital Ticket
        </p>
        <h3 className="text-3xl sm:text-4xl font-display font-bold text-stone-900">
          Order #{orderNumber}
        </h3>
      </div>

      {/* QR Code Visual */}
      <div className="bg-stone-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 flex flex-col items-center justify-center">
        <div className="text-5xl sm:text-6xl mb-4">📱</div>
        <p className="text-sm font-mono text-center text-stone-600">{orderNumber}</p>
      </div>

      {/* Ticket Info */}
      <div className="space-y-4 mb-6 sm:mb-8 border-t border-stone-200 pt-6 sm:pt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Clock size={20} className="text-amber-900" />
            <span className="font-medium text-stone-700">Est. Wait Time</span>
          </div>
          <span className="text-2xl sm:text-3xl font-bold text-amber-900">{waitTime}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Users size={20} className="text-amber-900" />
            <span className="font-medium text-stone-700">Queue Position</span>
          </div>
          <span className="text-2xl sm:text-3xl font-bold text-amber-900">#12</span>
        </div>
      </div>

      {/* Instructions */}
      <div className="rounded-lg sm:rounded-xl p-4 sm:p-5 mb-6 sm:mb-8 border border-amber-100 bg-amber-50">
        <p className="text-sm leading-relaxed text-amber-900">
          <strong>📱 How to use:</strong> Show this to our cashier. Your order will be ready soon!
        </p>
      </div>

      {/* CTA */}
      <button className="w-full py-3 sm:py-4 rounded-lg sm:rounded-xl bg-amber-900 hover:bg-amber-950 text-white font-semibold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95">
        <Download size={18} />
        Save Ticket
      </button>
    </motion.div>
  );
}
export function PeakHours() {
  const [showTicket, setShowTicket] = useState(false);
  const [orderNumber] = useState(Math.random().toString(36).substring(2, 8).toUpperCase());

  const peakHoursData = menuData.peakHours;

  // Find best time
  const bestTime = peakHoursData.reduce((prev, current) =>
    prev.density < current.density ? prev : current
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-stone-900">
            Crowd Management Made Simple
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-stone-700">
            Skip the guesswork. Know exactly when to visit OUR Cafe for the best experience.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20"
        >
          {/* Best Time Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-sage-50 to-sage-100 rounded-xl sm:rounded-2xl p-8 sm:p-10 lg:p-12 border-2 border-sage-200"
          >
            <div className="mb-6 sm:mb-8">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 text-sage-900">
                ✨ Best Time to Visit
              </p>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900">
                {bestTime.time}
              </h3>
            </div>

            <p className="mb-8 leading-relaxed text-stone-700">
              Early mornings are perfect for a peaceful coffee experience. Just {bestTime.density}% capacity. Enjoy our rooftop with uninterrupted views of San Fernando.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-sage-100 shadow-sm">
                <Clock size={20} className="text-amber-900 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-600 font-semibold">Estimated Wait</p>
                  <p className="text-lg font-bold text-stone-900">5 minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-sage-100 shadow-sm">
                <Users size={20} className="text-amber-900 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-600 font-semibold">Cafe Capacity</p>
                  <p className="text-lg font-bold text-stone-900">{bestTime.density}% Full</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chart */}
          <motion.div
            variants={itemVariants}
            className="rounded-xl sm:rounded-2xl p-8 sm:p-10 lg:p-12 border-2 border-stone-200 bg-white"
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest mb-6 sm:mb-8 text-amber-900">
              📊 Crowd Density by Hour
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={peakHoursData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="time" stroke="#78716c" />
                <YAxis stroke="#78716c" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#faf9f6',
                    border: '2px solid #6B6552',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: '#1A1917' }}
                />
                <Bar
                  dataKey="density"
                  fill="#6B6552"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>

        {/* Digital Ticket Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-xl sm:rounded-2xl p-8 sm:p-12 lg:p-16 border-2 border-amber-200 text-center mb-12 sm:mb-16 bg-gradient-to-r from-amber-50 to-stone-50"
        >
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-stone-900">
            Ready to Order?
          </h3>
          <p className="mb-8 sm:mb-10 max-w-2xl mx-auto text-stone-700 text-lg">
            Get your instant digital ticket. Show it to our cashier and your order will be ready in a flash.
          </p>
          <button
            onClick={() => setShowTicket(!showTicket)}
            className="px-8 sm:px-10 lg:px-12 py-4 rounded-full font-semibold text-white bg-amber-900 hover:bg-amber-950 transition-all duration-quick inline-flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95"
          >
            {showTicket ? '✓ Ticket Generated' : 'Generate Ticket'}
          </button>
        </motion.div>

        {/* Ticket Display */}
        {showTicket && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 sm:mt-16"
          >
            <DigitalTicket
              isVisible={showTicket}
              orderNumber={orderNumber}
              waitTime="8min"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
