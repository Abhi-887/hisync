"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import PremiumButton from '@/components/PremiumButton';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 section-transition">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden smooth-animation">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400/15 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl rotate-12 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl rotate-45 animate-bounce delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-700"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center space-y-8"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight tracking-tight"
          >
            Transform Your Business
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Beyond Limits
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            We are your agile end-to-end partner: Ex-Big 4 consultants streamline 
            operations and elite engineers build custom ERP Solutions. 
            Enterprise-grade technology for any Business Size, 
            designed to scale with you.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          >
            <PremiumButton 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 text-lg shadow-xl hover:shadow-2xl"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Transformation
            </PremiumButton>
            <PremiumButton 
              variant="outline" 
              size="lg"
              className="border-2 border-slate-200 hover:bg-slate-50 px-8 py-4 text-lg"
              icon={<Play className="w-5 h-5" />}
              iconPosition="left"
            >
              Watch Demo
            </PremiumButton>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "500+", label: "Companies Transformed" },
              { value: "87%", label: "Efficiency Increase" },
              { value: "3.2x", label: "Average ROI" },
              { value: "24/7", label: "Support Coverage" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
