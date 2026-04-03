import { CheckCircle2, CreditCard, Banknote, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function PaymentPartners() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-display text-stone-900 mb-4">Cashless Convenience</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">Skip the ATM. We're finalizing digital integrations to provide you a seamless order-and-pay experience right from your table.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { tag: "Coming Soon", icon: <CreditCard className="w-12 h-12 text-rose-700" />, title: "Digital Priority Queue", desc: "Order and skip the line using Maya or GCash.", bg: "bg-rose-50" },
            { tag: "In Progress", icon: <Banknote className="w-12 h-12 text-sage-700" />, title: "Card Processing", desc: "Tap and go with Visa, Mastercard, and Amex.", bg: "bg-sage-50" },
            { tag: "Active", icon: <ShieldCheck className="w-12 h-12 text-stone-700" />, title: "Cash & Counter", desc: "Traditional payments perfectly integrated at our massive island counter.", bg: "bg-stone-50" }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -8 }}
              className={`p-8 rounded-3xl ${feature.bg} border-2 border-transparent hover:border-black/5 transition-all text-center relative overflow-hidden`}
            >
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-600 shadow-sm">{feature.tag}</div>
              <div className="mx-auto w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-stone-600 font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}