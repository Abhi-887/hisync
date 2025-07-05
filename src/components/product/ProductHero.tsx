"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Smartphone, Monitor, Sparkles, TrendingUp, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function ProductHero() {
  return (
    <section className="relative py-32 lg:py-40 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs with subtle animation */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-400/5 to-emerald-400/5 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="px-6 py-3 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border-blue-200/50 text-blue-700 backdrop-blur-sm shadow-lg text-sm font-medium hover:shadow-xl transition-all duration-300">
                <Sparkles className="w-4 h-4 mr-2" />
                Make Investment Decisions
              </Badge>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[0.9] tracking-tight">
              Introducing
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AssetX
              </span>
            </h1>
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                Powered by <span className="text-blue-600 font-semibold">20+ years</span> of consulting and IT innovation — now supercharged with AI.
              </p>
              
              {/* Key benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className="flex items-center space-x-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200/50 hover:bg-white/80 transition-all duration-200"
                  >
                    <div className="text-blue-600">{item.icon}</div>
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
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="px-8 py-4 border-2 border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-white/80 backdrop-blur-sm font-semibold rounded-2xl transition-all duration-300">
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative w-80 h-[600px] bg-black rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone screen content */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                        <BarChart3 className="w-10 h-10 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-white text-xl font-bold">HISYNC</h3>
                        <p className="text-blue-200 text-sm">Next-Gen Asset Control</p>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                          <div className="text-sm text-blue-200 mb-1">Powered by</div>
                          <div className="text-lg font-bold">20+ years of</div>
                          <div className="text-base text-blue-200">Consulting and IT</div>
                          <div className="text-base text-blue-200">innovation</div>
                          <div className="text-sm text-blue-300 mt-2">—</div>
                          <div className="text-lg font-bold text-yellow-400">now</div>
                          <div className="text-lg font-bold text-yellow-400">supercharge</div>
                          <div className="text-lg font-bold text-yellow-400">d with AI.</div>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors duration-200">
                          Let's Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
                </div>
              </div>

              {/* Floating elements around phone */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100"
              >
                <div className="text-2xl font-bold text-green-600">70%</div>
                <div className="text-xs text-slate-500">Time Saved</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100"
              >
                <div className="text-2xl font-bold text-blue-600">AI</div>
                <div className="text-xs text-slate-500">Powered</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
