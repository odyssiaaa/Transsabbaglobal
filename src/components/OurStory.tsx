"use client";

import { motion } from "framer-motion";
import { History, Target, Compass, Award, Shield, CheckCircle } from "lucide-react";

export default function OurStory() {
  const milestones = [
    {
      year: "Establishment",
      title: "Foundations in Tanjung Priok",
      description: "Started operations as a specialized port clearance and domestic sea cargo agent in Jakarta.",
    },
    {
      year: "Expansion",
      title: "Global Marine & Air Corridors",
      description: "Partnered with premier shipping lines and airlines across Asia, Europe, and the Americas.",
    },
    {
      year: "Innovation",
      title: "Full-Scale Forwarding & Project Cargo",
      description: "Expanded into heavy lift project cargo, vessel chartering, and integrated end-to-end supply chain management.",
    },
  ];

  return (
    <section id="our-story" className="py-20 relative overflow-hidden bg-gradient-to-b from-tsg-dark/80 via-tsg-navy/40 to-tsg-dark/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" /> Our Heritage &amp; Vision
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              Delivering Trust Across <br />
              <span className="text-gradient-amber">Oceans and Skies</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Founded on the principles of speed, integrity, and operational resilience,{" "}
              <strong className="text-white">Trans SabbaGlobal</strong> has evolved into a premier
              international freight forwarder. We connect Indonesian manufacturers, exporters, and
              importers with major world markets.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl glass-panel border border-white/10">
                <Target className="w-5 h-5 text-tsg-accent mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Our Mission</h4>
                <p className="text-xs text-tsg-slate leading-relaxed">
                  To empower global businesses through dependable, cost-transparent, and punctual cargo delivery.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/10">
                <Award className="w-5 h-5 text-tsg-accent mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Our Standard</h4>
                <p className="text-xs text-tsg-slate leading-relaxed">
                  PPJK compliant, carrier-direct relationships, and dedicated customer success management.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Milestones Journey */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2 pb-4 border-b border-white/10">
                <History className="w-5 h-5 text-tsg-accent" />
                <span>Operational Milestones</span>
              </h3>

              <div className="space-y-6">
                {milestones.map((m, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-tsg-accent/20 border border-tsg-accent/40 flex items-center justify-center text-tsg-accent font-mono text-xs font-bold flex-shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <div className="text-xs font-mono text-tsg-amber font-semibold uppercase tracking-wider">
                        {m.year}
                      </div>
                      <div className="text-sm font-bold text-white mb-1">
                        {m.title}
                      </div>
                      <p className="text-xs text-tsg-slate leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-400" /> Fully Certified Forwarder
                </span>
                <span className="font-mono text-tsg-accent font-bold">25+ Years Proven Track Record</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
