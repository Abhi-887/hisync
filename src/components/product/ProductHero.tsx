"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Smartphone, Monitor, Sparkles, TrendingUp, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function ProductHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[60px] lg:pt-[72px] px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-slate-100 overflow-hidden">
      {/* Enhanced enterprise background with life */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="h-full w-full animate-pulse" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Floating animated orbs */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-slate-200/50 to-blue-200/50 rounded-full blur-3xl"
        ></motion.div>
        
        {/* Animated geometric accents */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-16 right-16 w-24 h-24 border border-blue-300/60 rounded-full"
        ></motion.div>
        
        <motion.div
          animate={{ 
            rotate: [45, 135, 45],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 left-16 w-20 h-20 border-2 border-indigo-300/50 rounded-lg rotate-45"
        ></motion.div>
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 2) * 40}%`
            }}
          />
        ))}
        
        {/* Enhanced pattern overlay with movement */}
        <motion.div 
          animate={{ opacity: [0.01, 0.03, 0.01] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.15) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-8 lg:py-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left relative"
          >
            <div className="relative z-10 space-y-8">
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <Badge className="px-6 py-3 bg-white/40 backdrop-blur-sm border-0 text-slate-700 shadow-md text-sm font-medium hover:shadow-lg transition-all duration-300">
                <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
                Make Investment Decisions
              </Badge>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-[0.9] tracking-tight">
              Introducing
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-700 bg-clip-text text-transparent">
                AssetX
              </span>
            </h1>
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                Powered by <span className="text-blue-700 font-semibold">20+ years</span> of consulting and IT innovation — now supercharged with AI.
              </p>
              
              {/* Key benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
                {[
                  { icon: <TrendingUp className="w-5 h-5" />, text: "70% Time Reduction" },
                  { icon: <BarChart3 className="w-5 h-5" />, text: "Automated Verification" },
                  { icon: <Smartphone className="w-5 h-5" />, text: "Mobile & Web Ready" },
                  { icon: <Monitor className="w-5 h-5" />, text: "Real-time Updates" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-3 p-4 rounded-lg bg-white/30 backdrop-blur-sm border-0 hover:bg-white/40 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="text-blue-600 group-hover:text-blue-700 transition-colors">{item.icon}</div>
                    <span className="text-slate-700 font-medium text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="px-8 py-4 border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-800 hover:bg-slate-50 backdrop-blur-sm font-semibold rounded-2xl transition-all duration-300">
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Subtle glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-slate-300/20 rounded-[3rem] blur-2xl scale-105"></div>
              
              {/* Phone mockup */}
              <div className="relative w-80 h-[600px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] p-3 shadow-2xl border border-slate-300/20">
                <div className="w-full h-full bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50 rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone screen content */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                        <BarChart3 className="w-10 h-10 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-slate-800 text-xl font-bold">HISYNC</h3>
                        <p className="text-blue-600 text-sm">Next-Gen Asset Control</p>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-slate-700 border border-slate-200/50 shadow-lg">
                          <div className="text-sm text-blue-600 mb-1">Powered by</div>
                          <div className="text-lg font-bold text-slate-800">20+ years of</div>
                          <div className="text-base text-slate-600">Consulting and IT</div>
                          <div className="text-base text-slate-600">innovation</div>
                          <div className="text-sm text-blue-600 mt-2">—</div>
                          <div className="text-lg font-bold text-blue-700">now</div>
                          <div className="text-lg font-bold text-blue-700">supercharge</div>
                          <div className="text-lg font-bold text-blue-700">d with AI.</div>
                        </div>
                        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg">
                          Let's Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl"></div>
                </div>
              </div>

              {/* Enhanced floating elements around phone */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -left-8 bg-gradient-to-br from-emerald-100/80 to-teal-100/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-emerald-200/50"
              >
                <div className="text-2xl font-bold text-emerald-600">70%</div>
                <div className="text-xs text-emerald-500">Time Saved</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-br from-blue-100/80 to-cyan-100/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-blue-200/50"
              >
                <div className="text-2xl font-bold text-blue-600">AI</div>
                <div className="text-xs text-blue-500">Powered</div>
              </motion.div>
              
              {/* Additional floating elements */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 -right-16 w-12 h-12 border-2 border-blue-300/40 rounded-full"
              ></motion.div>
              
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-1/4 -left-16 w-8 h-8 bg-gradient-to-r from-purple-200/60 to-indigo-200/60 rounded-lg rotate-45"
              ></motion.div>

              {/* Additional bouncing elements */}
              <motion.div
                animate={{ 
                  x: [0, 15, 0],
                  y: [0, -15, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 -left-20 w-6 h-6 bg-gradient-to-r from-pink-200/60 to-rose-200/60 rounded-full shadow-lg"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/3 -right-20 w-4 h-16 bg-gradient-to-b from-cyan-200/50 to-blue-200/50 rounded-full shadow-lg"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}