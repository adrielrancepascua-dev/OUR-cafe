'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, CheckCircle } from 'lucide-react';
import menuData from '../../data/menu.json';

interface OrderItem {
  id: number;
  itemId: number;
  quantity: number;
  timestamp: string;
}

function OrderSummary() {
  // Mock recent orders for demo
  const recentOrders: OrderItem[] = [
    { id: 1, itemId: 1, quantity: 2, timestamp: '2 mins ago' },
    { id: 2, itemId: 5, quantity: 1, timestamp: '5 mins ago' },
    { id: 3, itemId: 7, quantity: 3, timestamp: '8 mins ago' },
    { id: 4, itemId: 3, quantity: 1, timestamp: '12 mins ago' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sage-50 to-stone-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <ShoppingBag className="text-amber-900" size={32} />
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900">
              Live Order Feed
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-stone-700">
            See what our customers are ordering right now
          </p>
        </motion.div>

        {/* Orders Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20"
        >
          {recentOrders.map((order) => {
            const menuItem = menuData.menuItems.find(item => item.id === order.itemId);
            if (!menuItem) return null;

            return (
              <motion.div
                key={order.id}
                variants={itemVariants}
                className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
              >
                {/* Product Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden bg-stone-200">
                  <img
                    src={menuItem.image}
                    alt={menuItem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-amber-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-md">
                    ×{order.quantity}
                  </div>
                </div>

                {/* Order Details */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-sm sm:text-base line-clamp-2 text-stone-900">
                      {menuItem.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm mb-3 text-stone-600">
                    {menuItem.categoryIcon} {menuItem.category}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg sm:text-xl font-bold text-amber-900">{menuItem.price}</span>
                    <span className="text-xs px-2 py-1 rounded-md bg-stone-100 text-stone-600 font-medium">
                      {order.timestamp}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="rounded-lg sm:rounded-xl p-6 sm:p-8 border-2 border-sage-200 inline-block bg-sage-50">
            <p className="font-medium text-stone-700">
              💡 This is a live feed demo. Connect to Supabase to see real orders from your cafe.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OrderSummary;
