"use client";

import { Ship, Mail, Phone, MapPin, ArrowUp, Globe, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    platform: [
      "Visibility Tracking",
      "Ocean Freight Corridors",
      "Air Freight Alliances",
      "Domestic Rail & Trucking",
      "Ports & Terminals EDI",
      "Emissions & Green Logistics",
      "Tariff Analytics",
      "Yard & Port Management",
    ],
    solutions: [
      "Enterprise Shippers",
      "Logistics Service Providers (LSPs)",
      "Automotive & Spare Parts",
      "Chemical & Hazardous Goods",
      "Food, Cold Chain & Beverage",
      "Heavy Manufacturing & Machinery",
      "Life Sciences & Pharma",
      "Retail & FMCG E-commerce",
    ],
    carriers: [
      "Carrier Partner Network",
      "Vessel Space Allocation",
      "Support Portal",
      "EDI & API Integration",
      "Tug & Barge Registry",
      "Customs Green-Channel Hub",
    ],
    resources: [
      "Customer Case Studies",
      "Industry Insights & Whitepapers",
      "Global Shipping Index",
      "Customs Duty Calculator",
      "Container Specifications Guide",
      "Incoterms 2020 Cheat Sheet",
    ],
    company: [
      "About Trans SabbaGlobal",
      "Leadership & Management",
      "Careers & Port Operations",
      "Privacy Policy",
      "Terms of Carriage",
      "Security & Compliance",
    ],
  };

  return (
    <footer className="bg-tsg-dark border-t border-white/10 pt-16 pb-12 relative overflow-hidden text-xs text-tsg-slate">
      {/* Background radial accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-blue-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Corporate Summary & WhatsApp CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-tsg-blue border border-tsg-accent/40 flex items-center justify-center text-white">
                <span className="font-extrabold text-sm tracking-tighter">
                  T<span className="text-tsg-accent">S</span>G
                </span>
              </div>
              <div>
                <div className="text-lg font-black tracking-tight text-white">
                  TRANS SABBAGLOBAL
                </div>
                <div className="text-[10px] text-tsg-slate uppercase tracking-wider font-semibold">
                  International Freight Forwarder &amp; Supply Chain Logistics
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Your Trusted International Freight Forwarder &amp; Logistics Partner Delivering Reliable,
              Fast, and Efficient Supply Chain Solutions Worldwide.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-tsg-accent flex-shrink-0" />
              <span>Headquartered in Indonesia, Jakarta • Operating Globally</span>
            </div>
          </div>

          {/* Quick Contact Points */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl glass-panel border border-white/10 space-y-2">
              <div className="text-[11px] font-bold uppercase text-tsg-amber">
                Operations &amp; Freight Advisory
              </div>
              <div className="text-sm font-black text-white">Irwan</div>
              <div className="text-xs font-mono text-slate-300">+62 851-6962-6471</div>
              <a
                href="https://wa.me/6285169626471?text=Halo%20Trans%20SabbaGlobal,%20saya%20ingin%20meminta%20penawaran%20harga%20(Request%20Quotation)..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-bold text-emerald-400 hover:text-emerald-300 underline"
              >
                Chat WhatsApp Irwan &rarr;
              </a>
            </div>

            <div className="p-4 rounded-xl glass-panel border border-white/10 space-y-2">
              <div className="text-[11px] font-bold uppercase text-tsg-amber">
                Commercial &amp; Domestic Logistics
              </div>
              <div className="text-sm font-black text-white">Chairin</div>
              <div className="text-xs font-mono text-slate-300">+62 812-8883-5049</div>
              <a
                href="https://wa.me/6281288835049?text=Halo%20Trans%20SabbaGlobal,%20saya%20ingin%20meminta%20penawaran%20harga%20(Request%20Quotation)..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-bold text-emerald-400 hover:text-emerald-300 underline"
              >
                Chat WhatsApp Chairin &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Mega Footer Columns Matching Reference Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 py-12 border-b border-white/10">
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((item, idx) => (
                <li key={idx}>
                  <a href="#services" className="hover:text-tsg-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((item, idx) => (
                <li key={idx}>
                  <a href="#services" className="hover:text-tsg-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Carriers &amp; Ports</h4>
            <ul className="space-y-2">
              {footerLinks.carriers.map((item, idx) => (
                <li key={idx}>
                  <a href="#why-us" className="hover:text-tsg-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((item, idx) => (
                <li key={idx}>
                  <a href="#our-story" className="hover:text-tsg-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((item, idx) => (
                <li key={idx}>
                  <a href="#why-us" className="hover:text-tsg-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} PT Trans SabbaGlobal. All rights reserved. Registered
            International Freight Forwarder Indonesia.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Globe className="w-3.5 h-3.5 text-blue-400" /> Global Port Operations
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-200 hover:text-tsg-accent transition-colors p-1.5 rounded-lg bg-white/5 hover:bg-white/10"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
