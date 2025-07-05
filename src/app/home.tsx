"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AssessmentSection from "@/components/sections/AssessmentSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import AboutSection from "@/components/sections/AboutSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <HeroSection showTooltip={showTooltip} setShowTooltip={setShowTooltip} />
      
      <ServicesSection />
      
      <AssessmentSection showTooltip={showTooltip} setShowTooltip={setShowTooltip} />
      
      <ProcessSection />
      
      <CTASection />
      
      <AboutSection />
      
      <FooterSection />
    </div>
  );
}
