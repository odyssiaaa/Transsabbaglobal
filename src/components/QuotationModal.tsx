"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Phone, MessageSquare, Ship, Check, ArrowRight, ShieldCheck } from "lucide-react";

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function QuotationModal({
  isOpen,
  onClose,
  defaultService = "Ocean Freight",
}: QuotationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    service: defaultService,
    origin: "",
    destination: "",
    weightOrVolume: "",
    notes: "",
    officer: "Irwan",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = formData.officer === "Irwan" ? "6285169626471" : "6281288835049";
    const text = `Halo Trans SabbaGlobal (${formData.officer}), saya ${formData.name || "[Nama]"} dari ${
      formData.company || "[Perusahaan]"
    }.

Saya ingin meminta penawaran harga (Request Quotation):
- Layanan: ${formData.service}
- Rute: ${formData.origin || "Jakarta"} -> ${formData.destination || "Tujuan"}
- Estimasi Muatan: ${formData.weightOrVolume || "General Cargo"}
- Catatan Khusus: ${formData.notes || "Mohon info tarif & estimasi jadwal keberangkatan."}

Mohon dapat dibantu penawaran harga resminya. Terima kasih!`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-2xl bg-tsg-dark/95 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-tsg-accent/15 rounded-full blur-[80px] pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6 pr-8">
            <span className="text-xs font-bold text-tsg-accent uppercase tracking-wider block mb-1">
              Direct Quotation Engine
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Get an Instant Freight Quote
            </h3>
            <p className="text-xs sm:text-sm text-tsg-slate mt-1">
              Connect directly with Trans SabbaGlobal forwarding specialists via WhatsApp.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Hendra Wijaya"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-tsg-navy/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tsg-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. PT Export Import Indo"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-tsg-navy/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tsg-accent transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Logistics Service *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-tsg-navy/80 border border-white/10 text-white text-sm focus:outline-none focus:border-tsg-accent transition-colors"
                >
                  <option value="Ocean Freight">Ocean Freight (FCL / LCL)</option>
                  <option value="Air Freight">Air Freight Cargo</option>
                  <option value="Domestic Logistics">Domestic Logistics (Inter-Island)</option>
                  <option value="Project Cargo">Project Cargo (Heavy Machinery)</option>
                  <option value="Charter Vessel">Charter Vessel (Tug &amp; Barge)</option>
                  <option value="Customs Clearance">Customs Clearance (PPJK)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Forwarding Officer *
                </label>
                <select
                  value={formData.officer}
                  onChange={(e) => setFormData({ ...formData, officer: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-tsg-navy/80 border border-white/10 text-white text-sm focus:outline-none focus:border-tsg-accent transition-colors"
                >
                  <option value="Irwan">Irwan (+62 851-6962-6471 - Operations)</option>
                  <option value="Chairin">Chairin (+62 812-8883-5049 - Commercial)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Origin (Port / City) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tanjung Priok, Jakarta / Shanghai"
                  value={formData.origin}
                  onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-tsg-navy/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tsg-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Destination (Port / City) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Hamburg, Germany / Surabaya"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-tsg-navy/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tsg-accent transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Cargo Weight, Volume or Container Type
              </label>
              <input
                type="text"
                placeholder="e.g. 1x20ft Container / 500 kg / 4 CBM"
                value={formData.weightOrVolume}
                onChange={(e) => setFormData({ ...formData, weightOrVolume: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-tsg-navy/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tsg-accent transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Additional Notes
              </label>
              <textarea
                rows={2}
                placeholder="Target departure date, special handling, hazardous materials, etc."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-tsg-navy/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tsg-accent transition-colors resize-none"
              />
            </div>

            {/* Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-tsg-accent hover:bg-tsg-accent-hover text-white font-bold text-sm uppercase tracking-wider transition-all shadow-xl shadow-tsg-accent/30 flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Send via WhatsApp to {formData.officer}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-tsg-slate pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Direct encrypted message to official corporate WhatsApp</span>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
