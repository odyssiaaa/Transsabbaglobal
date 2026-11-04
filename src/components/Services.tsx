"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Ship, Plane, Truck, Boxes, Anchor, FileCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const services = [
    {
      id: "ocean",
      title: "Ocean Freight",
      category: "Sea Freight FCL / LCL",
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80",
      icon: Ship,
      highlights: ["FCL & LCL Consolidation", "Reefer & Dangerous Goods", "Global Major Port Direct"],
      description:
        "Full Container Load (FCL) and Less than Container Load (LCL) maritime transport worldwide with guaranteed vessel allocation and competitive sea freight rates.",
      color: "from-blue-600/40 via-blue-950/80 to-tsg-dark",
      glowColor: "rgba(59, 130, 246, 0.4)",
    },
    {
      id: "air",
      title: "Air Freight",
      category: "Express & Scheduled Air Cargo",
      image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=800&q=80",
      icon: Plane,
      highlights: ["Next-Flight-Out Service", "Temperature-Controlled Cargo", "Charter Air Cargo Flights"],
      description:
        "Time-critical international and domestic air forwarding delivering speed, security, and real-time flight tracking across international airline alliances.",
      color: "from-sky-600/40 via-slate-950/80 to-tsg-dark",
      glowColor: "rgba(56, 189, 248, 0.4)",
    },
    {
      id: "domestic",
      title: "Domestic Logistic",
      category: "Archipelago Network Indonesia",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
      icon: Truck,
      highlights: ["Inter-Island Sea Highway", "Dedicated Trucking Fleet", "Hub & Spoke Warehousing"],
      description:
        "Comprehensive domestic transportation connecting Java, Sumatra, Kalimantan, Sulawesi, Bali, Nusa Tenggara, Maluku, and Papua with multi-modal efficiency.",
      color: "from-emerald-600/40 via-emerald-950/80 to-tsg-dark",
      glowColor: "rgba(16, 185, 129, 0.4)",
    },
    {
      id: "project",
      title: "Project Cargo",
      category: "Heavy Lift & Out of Gauge (OOG)",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      icon: Boxes,
      highlights: ["Heavy Machinery & Mining", "Route Survey & Feasibility", "Turnkey Rigging & Loading"],
      description:
        "Specialized logistics engineering for mining, oil & gas, infrastructure, and renewable energy sectors requiring custom lashing and specialized vessels.",
      color: "from-amber-600/40 via-amber-950/80 to-tsg-dark",
      glowColor: "rgba(245, 158, 11, 0.4)",
    },
    {
      id: "charter",
      title: "Charter Vessel",
      category: "Tug, Barge & Bulk Vessel",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
      icon: Anchor,
      highlights: ["Tug & Barge Rental (230-330 ft)", "Dry Bulk & Liquid Cargo", "Flexible Voyage or Time Charter"],
      description:
        "Tailored ship broking and vessel chartering for bulk commodities, coal, sand, heavy structural steel, and project mobilization throughout Southeast Asia.",
      color: "from-cyan-600/40 via-slate-950/80 to-tsg-dark",
      glowColor: "rgba(6, 182, 212, 0.4)",
    },
    {
      id: "customs",
      title: "Customs Clearance",
      category: "PPJK Licensed Customs Brokerage",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      icon: FileCheck,
      highlights: ["EDI Green-Line Clearance", "HS Code Classification", "Import / Export Permits & Tax Advisory"],
      description:
        "Official customs brokerage service expediting port customs clearance, PIB / PEB electronic documents, duty optimization, and quarantine compliance.",
      color: "from-orange-600/40 via-red-950/80 to-tsg-dark",
      glowColor: "rgba(255, 101, 0, 0.4)",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-tsg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tsg-accent/10 border border-tsg-accent/30 text-tsg-accent text-xs font-bold uppercase tracking-wider mb-4"
          >
            End-To-End Freight Solutions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-5"
          >
            Our Core <span className="text-gradient-amber">Services</span>
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

        {/* 6 Services Grid with Rich Hover Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => onSelectService(service.title)}
                className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-tsg-accent/60 transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[420px]"
                style={{
                  boxShadow: isHovered ? `0 20px 40px -10px rgba(0,0,0,0.7), 0 0 30px 0 ${service.glowColor}` : "none",
                }}
              >
                {/* Background Image Container with Dynamic Zoom */}
                <div className="absolute inset-0 z-0">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.45] group-hover:brightness-[0.35]"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  {/* Dynamic Color Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-90 transition-opacity duration-500`} />
                </div>

                {/* Card Top: Icon & Category Badge */}
                <div className="relative z-10 p-6 sm:p-7 flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl group-hover:bg-tsg-accent group-hover:border-tsg-accent transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-7 h-7 transition-transform group-hover:rotate-6" />
                  </div>

                  {/* Interactive Arrow Button */}
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-tsg-accent group-hover:text-white group-hover:border-tsg-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="w-5 h-5 transition-transform" />
                  </div>
                </div>

                {/* Card Bottom: Titles, Description & Feature Highlights */}
                <div className="relative z-10 p-6 sm:p-7 pt-0">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-tsg-amber font-semibold block mb-1">
                    {service.category}
                  </span>

                  <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-tsg-amber transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Checkmarks */}
                  <div className="space-y-1.5 pt-4 border-t border-white/10">
                    {service.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-tsg-accent flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Prompt */}
                  <div className="mt-5 text-xs font-bold text-tsg-accent flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span>Click for Instant Quotation</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Bottom Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onSelectService("General Inquiries / All Services")}
            className="px-8 py-4 rounded-xl bg-tsg-navy hover:bg-tsg-navy-light text-white font-bold text-sm tracking-wide border border-white/20 hover:border-tsg-accent transition-all shadow-lg hover:shadow-tsg-accent/20 hover:-translate-y-0.5"
          >
            All Services & Custom Logistics
          </button>
          <a
            href="https://wa.me/6285169626471?text=Halo%20Trans%20SabbaGlobal,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20kargo..."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-tsg-accent hover:bg-tsg-accent-hover text-white font-bold text-sm tracking-wide shadow-xl shadow-tsg-accent/25 transition-all hover:-translate-y-0.5"
          >
            Speak to a Freight Specialist
          </a>
        </div>
      </div>
    </section>
  );
}
