"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Anchor, Radio } from "lucide-react";

export default function WorldMapGraphic() {
  return (
    <div className="relative w-full max-w-5xl mx-auto my-8 p-4 sm:p-8 rounded-3xl glass-panel border border-white/10 overflow-hidden shadow-2xl">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-2/3 w-64 h-64 bg-tsg-accent/15 rounded-full blur-[80px] pointer-events-none" />

      {/* Header Info Bar on Map */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10 text-xs sm:text-sm text-tsg-slate">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-white tracking-wide uppercase">Global Route Network</span>
          <span className="text-white/30">•</span>
          <span className="hidden sm:inline">Active Marine & Air Corridors</span>
        </div>
        <div className="flex items-center gap-4 font-mono text-[11px] sm:text-xs">
          <span className="px-2.5 py-1 rounded-full bg-tsg-navy/80 border border-white/10 text-white/90">
            HUB: 06°12′S 106°49′E
          </span>
          <span className="text-emerald-400 flex items-center gap-1">
            <Radio className="w-3.5 h-3.5 animate-pulse" /> 24/7 Monitored
          </span>
        </div>
      </div>

      {/* SVG Map Canvas */}
      <div className="relative aspect-[2/1] w-full min-h-[260px] sm:min-h-[380px] flex items-center justify-center">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full text-slate-700/40 select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Grid Lines */}
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
            </pattern>
            <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#FF6500" stopOpacity="1" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FF6500" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          <rect width="1000" height="500" fill="url(#grid-pattern)" />

          {/* Equator & Lat Long references */}
          <line x1="0" y1="260" x2="1000" y2="260" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 6" strokeWidth="1" />
          <line x1="720" y1="0" x2="720" y2="500" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 6" strokeWidth="1" />

          {/* Continents Simplified Stylized Paths */}
          {/* North America */}
          <path
            d="M120,80 Q180,60 260,80 Q320,110 300,180 Q250,220 200,240 Q180,210 140,160 Z"
            fill="currentColor"
            opacity="0.6"
          />
          <path
            d="M260,190 Q300,190 280,240 Q240,230 250,200 Z"
            fill="currentColor"
            opacity="0.6"
          />
          {/* South America */}
          <path
            d="M240,260 Q320,260 350,330 Q330,420 280,470 Q240,430 230,340 Z"
            fill="currentColor"
            opacity="0.55"
          />
          {/* Europe */}
          <path
            d="M480,80 Q560,70 580,120 Q560,160 500,160 Q460,130 480,80 Z"
            fill="currentColor"
            opacity="0.65"
          />
          {/* Africa */}
          <path
            d="M480,180 Q560,170 570,240 Q550,360 500,390 Q440,320 460,220 Z"
            fill="currentColor"
            opacity="0.55"
          />
          {/* Asia */}
          <path
            d="M590,70 Q750,50 860,100 Q880,190 780,240 Q710,210 650,220 Q590,160 590,70 Z"
            fill="currentColor"
            opacity="0.7"
          />
          {/* Australia */}
          <path
            d="M780,330 Q880,320 890,390 Q850,440 790,430 Q760,380 780,330 Z"
            fill="currentColor"
            opacity="0.6"
          />
          {/* Indonesia Archipelago (Detailed & highlighted) */}
          <g className="text-amber-400">
            {/* Sumatra */}
            <path d="M680,260 L710,290 L695,305 L670,270 Z" fill="#38BDF8" opacity="0.9" />
            {/* Java */}
            <path d="M710,305 Q740,312 770,315 Q765,325 720,320 Z" fill="#FF6500" opacity="1" />
            {/* Kalimantan / Borneo */}
            <path d="M725,260 Q760,255 765,285 Q735,295 725,260 Z" fill="#38BDF8" opacity="0.9" />
            {/* Sulawesi */}
            <path d="M780,265 Q800,270 795,295 Q785,285 780,265 Z" fill="#38BDF8" opacity="0.9" />
            {/* Papua */}
            <path d="M825,275 Q880,270 875,305 Q835,310 825,275 Z" fill="#38BDF8" opacity="0.9" />
          </g>

          {/* Shipping / Flight Route Arcs Connecting to Jakarta (approx x: 728, y: 310) */}
          {/* USA (Los Angeles / New York) to Jakarta */}
          <path
            d="M220,140 Q440,80 728,310"
            stroke="url(#arc-gradient)"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
            className="opacity-75"
          >
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="8s" repeatCount="indefinite" />
          </path>

          {/* Germany / Europe to Jakarta */}
          <path
            d="M510,120 Q600,160 728,310"
            stroke="url(#arc-gradient)"
            strokeWidth="2"
            strokeDasharray="5 5"
            fill="none"
            className="opacity-80"
          >
            <animate attributeName="stroke-dashoffset" from="80" to="0" dur="6s" repeatCount="indefinite" />
          </path>

          {/* Italy / Mediterranean to Jakarta */}
          <path
            d="M525,150 Q610,220 728,310"
            stroke="url(#arc-gradient)"
            strokeWidth="1.75"
            strokeDasharray="4 6"
            fill="none"
            className="opacity-70"
          >
            <animate attributeName="stroke-dashoffset" from="60" to="0" dur="7s" repeatCount="indefinite" />
          </path>

          {/* East Asia (China / Japan) to Jakarta */}
          <path
            d="M790,130 Q780,220 728,310"
            stroke="url(#arc-gradient)"
            strokeWidth="2.2"
            strokeDasharray="5 5"
            fill="none"
            className="opacity-85"
          >
            <animate attributeName="stroke-dashoffset" from="70" to="0" dur="5s" repeatCount="indefinite" />
          </path>

          {/* Middle East to Jakarta */}
          <path
            d="M590,190 Q650,260 728,310"
            stroke="url(#arc-gradient)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
            className="opacity-60"
          />

          {/* Partner Nodes */}
          {/* USA */}
          <circle cx="220" cy="140" r="4.5" fill="#38BDF8" />
          <text x="230" y="145" fill="#94A3B8" fontSize="12" fontFamily="monospace">USA</text>

          {/* Germany */}
          <circle cx="510" cy="120" r="4.5" fill="#38BDF8" />
          <text x="518" y="115" fill="#94A3B8" fontSize="12" fontFamily="monospace">Germany</text>

          {/* Italy */}
          <circle cx="525" cy="150" r="4" fill="#38BDF8" />
          <text x="535" y="155" fill="#94A3B8" fontSize="12" fontFamily="monospace">Italy</text>

          {/* East Asia */}
          <circle cx="790" cy="130" r="4.5" fill="#38BDF8" />
          <text x="800" y="135" fill="#94A3B8" fontSize="12" fontFamily="monospace">East Asia</text>

          {/* Central Pulsating Beacon on Jakarta (x: 728, y: 310) */}
          <g transform="translate(728, 310)">
            {/* Outer radar ripple */}
            <circle cx="0" cy="0" r="18" fill="none" stroke="#FF6500" strokeWidth="1.5" className="animate-radar-pulse" />
            <circle cx="0" cy="0" r="10" fill="rgba(255, 101, 0, 0.35)" />
            <circle cx="0" cy="0" r="4.5" fill="#FF6500" stroke="#FFFFFF" strokeWidth="1.5" />
          </g>
        </svg>

        {/* Floating Callout Card for Indonesia, Jakarta */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-2.5 rounded-full bg-tsg-navy/95 border border-tsg-accent/50 shadow-xl backdrop-blur-md group hover:border-tsg-accent transition-all cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-tsg-accent/20 flex items-center justify-center text-tsg-accent">
            <MapPin className="w-4 h-4 animate-bounce" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold tracking-wider text-tsg-amber uppercase">Global HQ & Port Hub</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            </div>
            <div className="text-sm sm:text-base font-bold text-white tracking-wide">
              Indonesia, Jakarta
            </div>
          </div>
        </motion.div>
      </div>

      {/* Legend footer inside card */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/5 text-[11px] sm:text-xs text-tsg-slate text-center">
        <div className="flex items-center justify-center gap-2">
          <Anchor className="w-3.5 h-3.5 text-blue-400" />
          <span>Tanjung Priok Port</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Navigation className="w-3.5 h-3.5 text-amber-400" />
          <span>Soekarno-Hatta Cargo</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-tsg-accent"></span>
          <span>100+ Partner Ports</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Customs Clearance EDI</span>
        </div>
      </div>
    </div>
  );
}
