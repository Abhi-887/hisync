'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AssessmentSection from '@/components/sections/AssessmentSection';
import TransformationSection from '@/components/sections/TransformationSection';
import CTASection from '@/components/sections/CTASection';
import AboutSection from '@/components/sections/AboutSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AssessmentSection />
      <TransformationSection />
      <CTASection />
      <AboutSection />
      <Footer />
    </div>
  );
}
