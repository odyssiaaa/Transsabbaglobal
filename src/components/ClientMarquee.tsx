"use client";

import { motion } from "framer-motion";
import { Building2, Globe, Shield, Award } from "lucide-react";

export default function ClientMarquee() {
  const countries = [
    { name: "Indonesia", code: "ID", hub: "Jakarta • Surabaya • Medan", flag: "🇮🇩" },
    { name: "Amerika (USA)", code: "US", hub: "Los Angeles • New York", flag: "🇺🇸" },
    { name: "German (Germany)", code: "DE", hub: "Hamburg • Frankfurt", flag: "🇩🇪" },
    { name: "Italy", code: "IT", hub: "Genoa • Milan", flag: "🇮🇹" },
    { name: "Singapore", code: "SG", hub: "Port of Singapore", flag: "🇸🇬" },
    { name: "China", code: "CN", hub: "Shanghai • Shenzhen", flag: "🇨🇳" },
    { name: "Japan", code: "JP", hub: "Tokyo • Yokohama", flag: "🇯🇵" },
    { name: "Netherlands", code: "NL", hub: "Rotterdam Hub", flag: "🇳🇱" },
  ];

  const clients = [
    { name: "VTP Logistik", subtitle: "Logistics Partner", tag: "Enterprise" },
    { name: "Kawan Lama Solution", subtitle: "Industrial & Retail", tag: "Commercial" },
    { name: "Sumber Aneka Karya Abadi", subtitle: "Distribution Supply", tag: "Contract" },
    { name: "Samudera Shipping Line", subtitle: "Maritime Carrier", tag: "Carrier" },
    { name: "Pelayaran Nasional Indonesia", subtitle: "Inter-Island Freight", tag: "Marine" },
    { name: "Trans Asian Lines", subtitle: "International Forwarding", tag: "Alliance" },
    { name: "Global Cargo Link", subtitle: "Air Cargo Handling", tag: "Aviation" },
  ];

  return (
    <section id="clients" className="py-20 relative overflow-hidden bg-tsg-dark/70 border-y border-white/10">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-tsg-dark via-transparent to-tsg-dark pointer-events-none z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
          <Globe className="w-3.5 h-3.5" /> Global Footprint & Trust
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
          Trusted <span className="text-gradient-amber">By Industry Leaders</span>
        </h2>
        <p className="text-xs sm:text-sm text-tsg-slate max-w-xl mx-auto mt-2">
          Connecting worldwide supply chains through international shipping corridors and established corporate partnerships.
        </p>
      </div>

      {/* TRACK 1: Countries & Global Hubs Marquee (Right to Left) */}
      <div className="relative w-full overflow-hidden mb-6">
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] gap-6 py-2">
          {[...countries, ...countries, ...countries].map((country, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl glass-panel border border-white/10 hover:border-tsg-accent/50 transition-all duration-300 shadow-md group cursor-pointer"
            >
              <span className="text-2xl select-none">{country.flag}</span>
              <div>
                <div className="text-sm font-bold text-white group-hover:text-tsg-accent transition-colors flex items-center gap-2">
                  <span>{country.name}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-slate-300">
                    {country.code}
                  </span>
                </div>
                <div className="text-[11px] text-tsg-slate font-medium">
                  {country.hub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TRACK 2: Enterprise Client Badges Marquee (Right to Left slightly offset) */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] gap-6 py-2" style={{ animationDuration: "35s" }}>
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 px-7 py-4 rounded-2xl bg-tsg-navy/80 border border-white/10 hover:border-tsg-accent/40 backdrop-blur-md transition-all duration-300 shadow-lg group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-tsg-accent group-hover:bg-tsg-accent group-hover:text-white transition-all">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-black text-white tracking-wide group-hover:text-tsg-accent transition-colors flex items-center gap-2">
                  <span>{client.name}</span>
                  <span className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-tsg-accent/20 text-tsg-accent border border-tsg-accent/30">
                    {client.tag}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">
                  {client.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
