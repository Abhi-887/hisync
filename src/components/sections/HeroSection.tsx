"use client";

import { Badge } from "@/components/ui/badge";
import { Award, ArrowRight, Play, Eye, Users, TrendingUp, Shield, Rocket } from "lucide-react";
import PremiumButton from "@/components/PremiumButton";
import { motion } from "framer-motion";

interface HeroSectionProps {
  showTooltip: string | null;
  setShowTooltip: (tooltip: string | null) => void;
}

export default function HeroSection({ showTooltip, setShowTooltip }: HeroSectionProps) {
  return (
    <section id="home" className="relative pt-16 lg:pt-20 pb-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-3xl"
        />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/10 rounded-full blur-3xl"
        />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400/15 to-blue-500/10 rounded-full blur-3xl"
        />

        {/* Floating Geometric Shapes */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [12, 18, 12]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl"
        />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full"
        />
        
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            rotate: [45, 52, 45]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-32 right-1/3 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl"
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
              className={`absolute w-2 h-2 rounded-full ${
                i % 3 === 0 ? 'bg-blue-400' : 
                i % 3 === 1 ? 'bg-indigo-400' : 'bg-purple-400'
              }`}
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 2) * 40}%`
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge 
              variant="outline" 
              className="mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm text-blue-700 border-blue-200 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Award className="w-4 h-4 mr-2" />
              Trusted by Fortune 500 Companies
            </Badge>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight tracking-tight"
          >
            Transform Your Business
            <br />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent"
            >
              Holistically
            </motion.span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            We are your agile end-to-end partner: Ex-Big 4 consultants streamline 
            operations and elite engineers build custom ERP Solutions. 
            <span className="text-slate-900 font-medium">One Team</span> for any Business Size, 
            designed to scale with you.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          >
            <PremiumButton 
              size="lg" 
              className="px-8 py-4 text-lg shadow-xl hover:shadow-2xl group transition-all duration-300"
              onClick={() => {
                console.log("Get Started clicked");
              }}
            >
              <span className="flex items-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </PremiumButton>
            
            <div className="relative group">
              <PremiumButton
                variant="outline"
                size="lg"
                icon={<Play className="w-5 h-5" />}
                iconPosition="left"
                className="px-8 py-4 text-lg bg-white/80 backdrop-blur-sm border-2 border-blue-200 text-blue-600 hover:bg-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                onClick={() => {
                  setShowTooltip('demo');
                  setTimeout(() => setShowTooltip(null), 3000);
                }}
              >
                Watch Demo
              </PremiumButton>
              
              {/* Tooltip */}
              {showTooltip === 'demo' && (
                <div 
                  className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-4 py-2 rounded-lg shadow-xl z-50 whitespace-nowrap text-sm font-medium"
                >
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>2-minute demo coming soon!</span>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800" />
                </div>
              )}
            </div>
          </motion.div>
          
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "500+", label: "Clients", icon: <Users className="w-5 h-5" /> },
              { value: "87%", label: "Success Rate", icon: <TrendingUp className="w-5 h-5" /> },
              { value: "24/7", label: "Support", icon: <Shield className="w-5 h-5" /> },
              { value: "3.2x", label: "ROI", icon: <Rocket className="w-5 h-5" /> }
            ].map((stat, index) => (
              <div
                key={index}
                className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                onClick={() => {
                  setShowTooltip(`stat-${index}`);
                  setTimeout(() => setShowTooltip(null), 2000);
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
                <div className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                  {stat.label}
                </div>
                
                {/* Stat Tooltip */}
                {showTooltip === `stat-${index}` && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded-md shadow-xl z-50 whitespace-nowrap text-xs font-medium">
                    Click for details
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-slate-800" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}