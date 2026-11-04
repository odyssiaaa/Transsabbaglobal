"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import OurStory from "@/components/OurStory";
import Services from "@/components/Services";
import ClientMarquee from "@/components/ClientMarquee";
import CtaBanner from "@/components/CtaBanner";
import ContactSection from "@/components/ContactSection";
import QuotationModal from "@/components/QuotationModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Ocean Freight");

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-tsg-dark text-slate-100 selection:bg-tsg-accent selection:text-white">
      {/* Fixed Navigation */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Hero Section with Count-Up & Interactive World Map */}
      <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Why Trans SabbaGlobal (6 Core Pillars) */}
      <WhyUs onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Our Heritage & Story */}
      <OurStory />

      {/* Interactive Core Services Grid */}
      <Services onSelectService={(service) => handleOpenQuoteModal(service)} />

      {/* Infinitely Scrolling Country & Client Marquee */}
      <ClientMarquee />

      {/* High-Impact CTA Banner */}
      <CtaBanner onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Direct Contact & WhatsApp Officers (Irwan & Chairin) */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Quick Quote Modal */}
      <QuotationModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        defaultService={selectedService}
      />
    </main>
  );
}
