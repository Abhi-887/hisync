"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Award, Users, CheckCircle, Badge } from "lucide-react";
import PremiumButton from "@/components/PremiumButton";

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Enhanced Multi-layer Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-transparent to-purple-100/50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-transparent"></div>
      
      {/* Modern Light Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-96 md:w-[600px] h-96 md:h-[600px] bg-gradient-to-br from-blue-300/20 via-indigo-300/15 to-purple-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-80 md:w-[500px] h-80 md:h-[500px] bg-gradient-to-br from-purple-300/20 via-pink-300/15 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-gradient-to-br from-cyan-300/15 via-teal-300/10 to-emerald-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/20 rounded-3xl rotate-45 blur-xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-gradient-to-br from-purple-200/25 to-pink-200/20 rounded-full blur-xl animate-bounce delay-1000" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-20 h-20 bg-gradient-to-br from-emerald-200/30 to-cyan-200/20 rounded-2xl rotate-12 blur-lg animate-bounce delay-2000" style={{ animationDuration: '5s' }}></div>
        
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 2px, transparent 2px),
              linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 80px 80px, 40px 40px, 40px 40px'
          }}></div>
        </div>
        
        {/* Animated Floating Enterprise Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Shield className="absolute top-20 left-10 w-6 h-6 text-blue-300/50 animate-pulse hover:scale-110 transition-transform" />
          <Award className="absolute top-32 right-20 w-5 h-5 text-indigo-300/50 animate-pulse delay-1000 hover:scale-110 transition-transform" />
          <Star className="absolute bottom-40 left-20 w-4 h-4 text-purple-300/50 animate-pulse delay-2000 hover:scale-110 transition-transform" />
          <CheckCircle className="absolute top-60 right-1/4 w-5 h-5 text-emerald-300/40 animate-pulse delay-3000" />
          <Users className="absolute bottom-60 left-1/3 w-6 h-6 text-cyan-300/40 animate-pulse delay-4000" />
        </div>
        
        {/* Subtle Light Rays */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-200/20 to-transparent"></div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-200/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8"
        >
          {/* Enterprise Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg hover:shadow-xl transition-all duration-300">
              <Shield className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base font-medium">Enterprise-Grade Solution</span>
              <Award className="w-4 h-4 md:w-5 md:h-5" />
            </div>

             
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight tracking-tight"
          >
            Ready to Scale Your
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Business Success?
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4"
          >
            Join industry leaders who've accelerated their growth with our proven enterprise solutions. 
            <span className="text-slate-800 font-semibold">Transform your operations today.</span>
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-6 md:pt-8 px-4"
          >
            <PremiumButton 
              size="lg" 
              className="w-full sm:w-auto px-8 md:px-12 py-3 md:py-4 text-base md:text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl font-semibold tracking-wide group transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                Start Free Enterprise Trial
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </PremiumButton>
            
            <a 
              href="/about"
              className="w-full sm:w-auto px-8 md:px-12 py-3 md:py-4 text-base md:text-lg border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 font-semibold tracking-wide transition-all duration-300 rounded-lg flex items-center justify-center group"
            >
              <Users className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 group-hover:scale-110 transition-transform duration-200" />
              Explore About Us
            </a>
          </motion.div>
          
          {/* Social Proof with Real User Images */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-6 md:pt-8"
          >
            <div className="flex items-center space-x-4 text-slate-600">
              <div className="flex -space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format" 
                  alt="CEO" 
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b5b1?w=40&h=40&fit=crop&crop=face&auto=format" 
                  alt="CTO" 
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format" 
                  alt="Manager" 
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop&crop=face&auto=format" 
                  alt="Director" 
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover"
                />
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">
                  500+
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-slate-800">4.9/5</span>
                </div>
                <div className="text-sm text-slate-600">From 500+ Enterprise Clients</div>
              </div>
            </div>
          </motion.div>
          
          {/* Enterprise Features & Timeline */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="pt-8 md:pt-12 mt-8 md:mt-12 border-t border-slate-200"
          >
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
              <div className="text-center space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-slate-800">99.9%</div>
                <div className="text-sm md:text-base text-slate-600">Uptime SLA</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-slate-800">24/7</div>
                <div className="text-sm md:text-base text-slate-600">Support</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-slate-800">SOC 2</div>
                <div className="text-sm md:text-base text-slate-600">Compliant</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-slate-800">500+</div>
                <div className="text-sm md:text-base text-slate-600">Enterprise Clients</div>
              </div>
            </div>
            
            {/* Implementation Timeline */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200/50">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-6 md:mb-8">Your Path to Success</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-slate-800">15 min</div>
                  <div className="text-slate-600 font-medium">Discovery Call</div>
                  <div className="text-sm text-slate-500">Quick assessment of your needs</div>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-slate-800">24-48 hrs</div>
                  <div className="text-slate-600 font-medium">Custom Proposal</div>
                  <div className="text-sm text-slate-500">Tailored solution design</div>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-slate-800">2-4 weeks</div>
                  <div className="text-slate-600 font-medium">First Results</div>
                  <div className="text-sm text-slate-500">Measurable improvements</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
