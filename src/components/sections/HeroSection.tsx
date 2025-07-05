"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Award, ArrowRight, Play, Eye, Users, TrendingUp, Shield, Rocket } from "lucide-react";
import PremiumButton from "@/components/PremiumButton";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

interface HeroSectionProps {
  showTooltip: string | null;
  setShowTooltip: (tooltip: string | null) => void;
}

export default function HeroSection({ showTooltip, setShowTooltip }: HeroSectionProps) {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 section-transition">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden smooth-animation">
        {/* Gradient Orbs */}
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
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge 
              variant="outline" 
              className="mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm text-blue-700 border-blue-200 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Award className="w-4 h-4 mr-2" />
              Trusted by Fortune 500 Companies
            </Badge>
          </motion.div>
          
          <motion.h1 
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight tracking-tight"
          >
            Transform Your Business
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Holistically
            </span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            We are your agile end-to-end partner: Ex-Big 4 consultants streamline 
            operations and elite engineers build custom ERP Solutions. 
            <span className="text-slate-900 font-medium">One Team</span> for any Business Size, 
            designed to scale with you.
          </motion.p>
          
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          >
            <PremiumButton 
              size="lg" 
              className="px-8 py-4 text-lg shadow-xl hover:shadow-2xl group"
              onClick={() => {
                // Add interactive click tracking
                console.log("Get Started clicked");
              }}
            >
              <span className="flex items-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </PremiumButton>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <PremiumButton 
                variant="outline" 
                size="lg"
                icon={<Play className="w-5 h-5" />}
                iconPosition="left"
                className="px-8 py-4 text-lg bg-white/80 backdrop-blur-sm border-2 border-blue-200 text-blue-600 hover:bg-white hover:text-blue-700 shadow-lg hover:shadow-xl"
                onClick={() => {
                  setShowTooltip('demo');
                  setTimeout(() => setShowTooltip(null), 3000);
                }}
              >
                Watch Demo
              </PremiumButton>
              
              {/* Interactive Tooltip */}
              <AnimatePresence>
                {showTooltip === 'demo' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-4 py-2 rounded-lg shadow-xl z-50"
                  >
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-medium">2-minute demo coming soon!</span>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
          
          {/* Interactive Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "500+", label: "Clients", icon: <Users className="w-5 h-5" /> },
              { value: "87%", label: "Success Rate", icon: <TrendingUp className="w-5 h-5" /> },
              { value: "24/7", label: "Support", icon: <Shield className="w-5 h-5" /> },
              { value: "3.2x", label: "ROI", icon: <Rocket className="w-5 h-5" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
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
                
                {/* Tooltip */}
                <AnimatePresence>
                  {showTooltip === `stat-${index}` && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-3 py-1 rounded-lg shadow-xl z-50"
                    >
                      <span className="text-xs font-medium">Click for details</span>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-slate-900"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
