"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, ShieldCheck, Clock, Zap } from "lucide-react";

interface CtaBannerProps {
  onOpenQuoteModal: () => void;
}

export default function CtaBanner({ onOpenQuoteModal }: CtaBannerProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-white/15 p-8 sm:p-14 lg:p-20 shadow-2xl">
          {/* Background Logistics Image */}
          <div
            className="absolute inset-0 bg-cover bg-center filter brightness-[0.25]"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80')`,
            }}
          />

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-tsg-dark via-tsg-navy/90 to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-tsg-accent/20 rounded-full blur-[120px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tsg-accent/20 border border-tsg-accent/40 text-tsg-amber text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Zap className="w-3.5 h-3.5" /> Fast Response Freight Forwarding
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.1] mb-6"
            >
              Let&apos;s Move Your Cargo <br />
              <span className="text-gradient-amber">With Confidence.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl"
            >
              Contact our logistics advisory team today for customized ocean, air, or domestic
              multimodal freight rates tailored to your business schedule and specifications.
            </motion.p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-4 rounded-xl bg-tsg-accent hover:bg-tsg-accent-hover text-white font-bold text-base tracking-wide transition-all shadow-xl shadow-tsg-accent/30 hover:shadow-tsg-accent/50 hover:scale-105 active:scale-100 flex items-center gap-3 group"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/6285169626471?text=Halo%20Trans%20SabbaGlobal,%20saya%20ingin%20meminta%20penawaran%20harga%20(Request%20Quotation)..."
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 backdrop-blur-md transition-all flex items-center gap-2 hover:border-tsg-accent"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Instant WhatsApp</span>
              </a>
            </div>

            {/* Assurance badges */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Cargo Insurance Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>&lt; 30 Mins Quote Turnaround</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
