"use client";

import { useState, useEffect } from "react";
import { Menu, X, Ship, Phone, ChevronRight } from "lucide-react";

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#why-us" },
    { name: "Our Story", href: "#our-story" },
    { name: "Services", href: "#services" },
    { name: "Our Clients", href: "#clients" },
    { name: "Organization", href: "#organization" },
    { name: "Marketing Plan", href: "#marketing" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-tsg-dark/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-tsg-blue to-tsg-navy border border-tsg-accent/40 flex items-center justify-center text-white shadow-md shadow-tsg-accent/10 group-hover:border-tsg-accent transition-all">
              <span className="font-extrabold text-sm sm:text-base tracking-tighter text-white flex items-center">
                T<span className="text-tsg-accent">S</span>G
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-white group-hover:text-tsg-accent transition-colors">
                TRANS SABBAGLOBAL
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-widest text-tsg-slate uppercase">
                Freight Forwarding & Logistics
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-slate-300 hover:text-tsg-accent transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-tsg-accent hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-4 py-2 text-xs lg:text-sm font-semibold rounded-lg bg-tsg-accent hover:bg-tsg-accent-hover text-white transition-all shadow-md shadow-tsg-accent/20 hover:shadow-tsg-accent/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>Request Quotation</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="#contact"
              className="px-3.5 py-2 text-xs lg:text-sm font-medium rounded-lg border border-white/20 hover:border-tsg-accent text-slate-200 hover:text-white transition-all bg-white/5 hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-tsg-accent" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[68px] bg-tsg-dark/95 backdrop-blur-xl border-b border-white/10 px-4 py-6 shadow-2xl transition-all animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-tsg-navy/70 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 text-center text-sm font-semibold rounded-lg bg-tsg-accent text-white shadow-lg shadow-tsg-accent/25 hover:bg-tsg-accent-hover transition-colors"
              >
                Request Quotation
              </button>
              <a
                href="https://wa.me/6285169626471?text=Halo%20Trans%20SabbaGlobal,%20saya%20ingin%20meminta%20penawaran%20harga%20(Request%20Quotation)..."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-semibold rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600/30 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" /> Direct WhatsApp Irwan (+62 851-6962-6471)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
