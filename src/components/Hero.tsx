"use client";

import { motion } from "framer-motion";
import { Ship, Plane, ShieldCheck, ArrowRight, Award, Users, Globe2, Truck } from "lucide-react";
import CountUp from "./CountUp";
import WorldMapGraphic from "./WorldMapGraphic";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  const statCards = [
    {
      number: 25,
      suffix: "+",
      label: "Years",
      sublabel: "Experience",
      icon: Award,
      badge: "Industry Veteran",
      gradient: "from-amber-500/20 to-orange-500/5",
      border: "hover:border-amber-500/50",
    },
    {
      number: 100,
      suffix: "+",
      label: "Business",
      sublabel: "Partners",
      icon: Users,
      badge: "Global Network",
      gradient: "from-blue-500/20 to-cyan-500/5",
      border: "hover:border-blue-500/50",
    },
    {
      title: "International",
      subtitle: "Ocean & Air Freight",
      description: "Direct FCL/LCL, chartered air cargo & port-to-port solutions",
      icon: Globe2,
      badge: "Worldwide Reach",
      gradient: "from-sky-500/20 to-indigo-500/5",
      border: "hover:border-sky-500/50",
    },
    {
      title: "Indonesia",
      subtitle: "Domestic Logistics",
      description: "Complete inter-island sea freight, trucking & customs clearance",
      icon: Truck,
      badge: "Archipelago Coverage",
      gradient: "from-emerald-500/20 to-teal-500/5",
      border: "hover:border-emerald-500/50",
    },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Graphic Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-radial from-blue-600/15 via-transparent to-transparent pointer-events-none blur-2xl" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-tsg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs sm:text-sm text-slate-300">
            <span className="w-2 h-2 rounded-full bg-tsg-accent animate-ping" />
            <span className="font-semibold text-white">Trans SabbaGlobal</span>
            <span className="text-white/30">|</span>
            <span className="text-tsg-slate">Delivering Excellence Since Inception</span>
          </div>
        </motion.div>

        {/* Main Title: Freight Is Our Business */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.08] mb-6">
            Freight Is <br className="hidden sm:inline" />
            <span className="text-gradient-amber">Our Business</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            Your Trusted International Freight Forwarder & Logistics Partner Delivering Reliable,
            Fast, and Efficient Supply Chain Solutions Worldwide.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-4 rounded-xl bg-tsg-accent hover:bg-tsg-accent-hover text-white font-bold text-base tracking-wide transition-all shadow-xl shadow-tsg-accent/25 hover:shadow-tsg-accent/40 hover:-translate-y-1 active:translate-y-0 flex items-center gap-3 group"
            >
              <span>Request Quotation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#services"
              className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-base border border-white/15 hover:border-white/30 backdrop-blur-md transition-all hover:-translate-y-0.5"
            >
              Explore Services
            </a>
          </div>
        </motion.div>

        {/* 4 Interactive Statistics Cards with Hover-Lift & Count-Up */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {statCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className={`relative group p-6 rounded-2xl glass-panel bg-gradient-to-br ${card.gradient} border border-white/10 ${card.border} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/60 cursor-pointer overflow-hidden`}
              >
                {/* Subtle light streak on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-tsg-accent group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-tsg-accent" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-slate-300">
                    {card.badge}
                  </span>
                </div>

                {card.number !== undefined ? (
                  <div>
                    <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-1 flex items-baseline">
                      <CountUp target={card.number} suffix={card.suffix} duration={2.2} />
                    </div>
                    <div className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                      {card.label}
                    </div>
                    <div className="text-xs text-tsg-slate font-medium">
                      {card.sublabel}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-0.5">
                      {card.title}
                    </div>
                    <div className="text-sm font-semibold text-tsg-accent mb-2">
                      {card.subtitle}
                    </div>
                    <p className="text-xs text-tsg-slate leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Interactive World Map Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <WorldMapGraphic />
        </motion.div>
      </div>
    </section>
  );
}
