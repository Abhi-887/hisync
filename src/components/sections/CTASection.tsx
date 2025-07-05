"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import PremiumButton from "@/components/PremiumButton";

export default function CTASection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-indigo-600/20"></div>
      
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-400/8 to-transparent rounded-full blur-3xl"></div>
        
        {/* Minimal Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white/90 font-medium shadow-lg">
              <Globe className="w-5 h-5" />
              <span>Ready to Transform Your Business?</span>
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
          >
            Let's Build Your
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent">
              Success Story
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Join hundreds of companies who've transformed their operations with our integrated approach. 
            <span className="text-white font-medium">Your transformation starts with a conversation.</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <PremiumButton 
              size="lg" 
              className="px-10 py-4 text-lg bg-white text-slate-900 hover:bg-white/90 shadow-xl hover:shadow-2xl font-semibold tracking-wide group"
            >
              <span className="flex items-center">
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </PremiumButton>
            
            <motion.div className="flex items-center space-x-4 text-white/70">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white/20"></div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-white">Join 500+ Companies</div>
                <div className="text-xs text-white/60">Already Transformed</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-12 border-t border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">15 min</div>
                <div className="text-white/60">Discovery Call</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">24-48 hrs</div>
                <div className="text-white/60">Custom Proposal</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">2-4 weeks</div>
                <div className="text-white/60">First Results</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
