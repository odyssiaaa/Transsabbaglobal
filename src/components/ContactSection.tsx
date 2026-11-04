"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, UserCheck, Shield } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    service: "Ocean Freight",
    origin: "",
    destination: "",
    cargoDetails: "",
    contactPerson: "Irwan",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWhatsAppUrl = (officer: "Irwan" | "Chairin") => {
    const phone = officer === "Irwan" ? "6285169626471" : "6281288835049";
    const text = `Halo Trans SabbaGlobal, saya ${formData.name || "[Nama]"} dari ${
      formData.company || "[Perusahaan]"
    }. Saya ingin meminta penawaran harga (Request Quotation) untuk:
- Layanan: ${formData.service}
- Rute: ${formData.origin || "[Origin]"} -> ${formData.destination || "[Destination]"}
- Detail Kargo: ${formData.cargoDetails || "Mohon info tarif & jadwal pelayaran/penerbangan terbaru."}

Mohon informasikan estimasi tarif dan waktu tempuh (transit time). Terima kasih!`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-tsg-dark/80">
      {/* Glow elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-tsg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" /> Direct Communication
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            Contact <span className="text-gradient-amber">Trans SabbaGlobal</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Connect directly with our dedicated freight forwarding officers for instant quotation,
            carrier scheduling, and customs compliance inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Direct Officers WhatsApp Cards & Corporate Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Officer 1: Irwan */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/50 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-md">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      Irwan
                    </h3>
                    <p className="text-xs text-tsg-slate font-medium">
                      Operational &amp; Freight Forwarding Specialist
                    </p>
                  </div>
                </div>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>

              <div className="space-y-2 mb-5 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>+62 851-6962-6471</span>
                </div>
              </div>

              <a
                href="https://wa.me/6285169626471?text=Halo%20Trans%20SabbaGlobal,%20saya%20ingin%20meminta%20penawaran%20harga%20(Request%20Quotation)..."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 group-hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat WhatsApp Irwan</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </motion.div>

            {/* Officer 2: Chairin */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/50 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-md">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      Chairin
                    </h3>
                    <p className="text-xs text-tsg-slate font-medium">
                      Commercial &amp; Customer Relations Manager
                    </p>
                  </div>
                </div>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>

              <div className="space-y-2 mb-5 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>+62 812-8883-5049</span>
                </div>
              </div>

              <a
                href="https://wa.me/6281288835049?text=Halo%20Trans%20SabbaGlobal,%20saya%20ingin%20meminta%20penawaran%20harga%20(Request%20Quotation)..."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 group-hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat WhatsApp Chairin</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </motion.div>

            {/* Email & Office Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-tsg-accent/20 flex items-center justify-center text-tsg-accent">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-tsg-slate font-medium">Official Corporate Email</div>
                  <a
                    href="mailto:transsabbaglobal@gmail.com"
                    className="font-bold text-white hover:text-tsg-accent transition-colors"
                  >
                    transsabbaglobal@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <div className="w-9 h-9 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-tsg-slate font-medium">Head Office Location</div>
                  <div className="font-bold text-white">Indonesia, Jakarta</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Interactive Instant Quotation Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-6 sm:p-10 rounded-3xl glass-panel border border-white/15 shadow-2xl relative"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Request a Formal Quotation
                </h3>
                <p className="text-xs text-tsg-slate">
                  Fill in your shipment details to connect via WhatsApp or email.
                </p>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-tsg-accent/20 text-tsg-accent text-[11px] font-bold">
                Instant Quote
              </span>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(generateWhatsAppUrl(formData.contactPerson as "Irwan" | "Chairin"), "_blank");
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Budi Santoso"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-tsg-dark/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tsg-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="PT. Maju Logistik"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-tsg-dark/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tsg-accent transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-tsg-dark/80 border border-white/10 text-white text-sm focus:outline-none focus:border-tsg-accent transition-colors"
                  >
                    <option value="Ocean Freight (FCL/LCL)">Ocean Freight (FCL / LCL)</option>
                    <option value="Air Freight Express">Air Freight Express</option>
                    <option value="Domestic Logistics (Inter-Island)">Domestic Logistics (Inter-Island)</option>
                    <option value="Project Cargo (Heavy Lift)">Project Cargo (Heavy Lift)</option>
                    <option value="Charter Vessel">Charter Vessel</option>
                    <option value="Customs Clearance (PPJK)">Customs Clearance (PPJK)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Consult with Officer
                  </label>
                  <select
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-tsg-dark/80 border border-white/10 text-white text-sm focus:outline-none focus:border-tsg-accent transition-colors"
                  >
                    <option value="Irwan">Irwan (+62 851-6962-6471 - Ops)</option>
                    <option value="Chairin">Chairin (+62 812-8883-5049 - Commercial)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Port / City of Origin *
                  </label>
                  <input
                    type="text"
                    name="origin"
                    required
                    placeholder="e.g. Tanjung Priok, Jakarta / Shanghai"
                    value={formData.origin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-tsg-dark/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tsg-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Port / City of Destination *
                  </label>
                  <input
                    type="text"
                    name="destination"
                    required
                    placeholder="e.g. Hamburg, Germany / Surabaya"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-tsg-dark/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tsg-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Cargo Description &amp; Volume
                </label>
                <textarea
                  name="cargoDetails"
                  rows={3}
                  placeholder="e.g. 2 x 40ft High Cube Container, general cargo, gross weight 24 tons, target departure next week."
                  value={formData.cargoDetails}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-tsg-dark/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tsg-accent transition-colors resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-tsg-accent hover:bg-tsg-accent-hover text-white font-bold text-sm tracking-wide shadow-xl shadow-tsg-accent/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Quotation to WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`mailto:transsabbaglobal@gmail.com?subject=Quotation%20Request%20-%20${encodeURIComponent(
                    formData.service
                  )}&body=${encodeURIComponent(
                    `Nama: ${formData.name}\nPerusahaan: ${formData.company}\nLayanan: ${formData.service}\nOrigin: ${formData.origin}\nDestination: ${formData.destination}\nDetail: ${formData.cargoDetails}`
                  )}`}
                  className="w-full sm:w-auto py-4 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email</span>
                </a>
              </div>

              <p className="text-[11px] text-slate-400 text-center pt-2">
                Fast response guarantee • We protect your cargo specifications and privacy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
