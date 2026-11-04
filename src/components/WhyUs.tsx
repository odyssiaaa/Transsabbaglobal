"use client";

import { motion } from "framer-motion";
import { Users2, ShieldCheck, DollarSign, Globe2, Zap, FileCheck2, ArrowRight } from "lucide-react";

interface WhyUsProps {
  onOpenQuoteModal: () => void;
}

export default function WhyUs({ onOpenQuoteModal }: WhyUsProps) {
  const pillars = [
    {
      title: "Experienced Team",
      description: "Dedicated logistics engineers, port specialists, and certified forwarding managers handling your cargo.",
      icon: Users2,
      accent: "from-blue-600/30 to-blue-900/10",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Reliable Services",
      description: "Consistent vessel schedules, 24/7 shipment tracking, and reliable door-to-door delivery commitment.",
      icon: ShieldCheck,
      accent: "from-amber-600/30 to-amber-900/10",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Competitive Pricing",
      description: "Direct carrier volume contracts with tier-1 shipping lines and airlines ensuring cost-effective freight rates.",
      icon: DollarSign,
      accent: "from-emerald-600/30 to-emerald-900/10",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Global Network",
      description: "Seamless international routing spanning North America, Europe (Germany, Italy), East Asia, and ASEAN.",
      icon: Globe2,
      accent: "from-sky-600/30 to-sky-900/10",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Fast Delivery",
      description: "Optimized transit times through direct maritime routes, express air cargo, and green-channel port handling.",
      icon: Zap,
      accent: "from-purple-600/30 to-purple-900/10",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Customs Expert",
      description: "Certified in-house PPJK customs brokerage, HS Code precision, import/export permits, and duty compliance.",
      icon: FileCheck2,
      accent: "from-orange-600/30 to-orange-900/10",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-tsg-dark/50 to-transparent">
      {/* Background visual elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tsg-accent/10 border border-tsg-accent/30 text-tsg-accent text-xs font-bold uppercase tracking-wider mb-4"
          >
            Core Competencies
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-5"
          >
            Why <span className="text-gradient-amber">Trans SabbaGlobal?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            We provide fast, secure, and efficient logistics solutions, backed by a global
            network and extensive experience in the freight forwarding industry.
          </motion.p>
        </div>

        {/* 6 Pillars Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-tsg-accent/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70 flex flex-col justify-between"
              >
                {/* Background Image with Gradient Overlay */}
                <div className="relative h-44 w-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tsg-dark via-tsg-dark/70 to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-tsg-navy/90 border border-white/20 backdrop-blur-md flex items-center justify-center text-tsg-accent shadow-lg group-hover:scale-110 group-hover:border-tsg-accent transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-black/40 text-slate-300 backdrop-blur-sm border border-white/10">
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tsg-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-tsg-slate leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-tsg-accent transition-colors">
                    <span>Verified Standard</span>
                    <ArrowRight className="w-4 h-4 -translate-x-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm tracking-wide border border-white/20 hover:border-tsg-accent transition-all hover:scale-105 active:scale-100"
          >
            <span>Learn More About Our Capabilities</span>
            <ArrowRight className="w-4 h-4 text-tsg-accent" />
          </button>
        </div>
      </div>
    </section>
  );
}
