"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, ArrowRight, Lightbulb } from "lucide-react";
import PremiumButton from "@/components/PremiumButton";
import InteractiveAssessment from "./InteractiveAssessment";

interface AssessmentSectionProps {
  showTooltip: string | null;
  setShowTooltip: (tooltip: string | null) => void;
}

export default function AssessmentSection({ showTooltip, setShowTooltip }: AssessmentSectionProps) {
  return (
    <section id="assessment" className="relative py-24 px-4 bg-gradient-to-br from-slate-50 via-slate-100/50 to-gray-50 overflow-hidden section-transition">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-300/20 to-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-300/15 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-48 h-48 bg-gradient-to-br from-cyan-300/20 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-16 left-1/3 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-transparent rounded-xl rotate-45 animate-bounce delay-300"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-gradient-to-br from-indigo-400/10 to-transparent rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/3 left-10 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-transparent rounded-2xl rotate-12 animate-bounce delay-1000"></div>
        
        {/* Floating Dots */}
        <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-blue-400/60 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 right-1/2 w-1.5 h-1.5 bg-indigo-400/60 rounded-full animate-ping delay-1200"></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-purple-400/60 rounded-full animate-ping delay-800"></div>
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.01]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            We understand what's holding 
            <br className="hidden md:block" />
            your business back
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Every business faces hidden obstacles. We reveal them and build your path forward.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
            {/* Card Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-2xl group-hover:w-40 group-hover:h-40 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-indigo-200/20 to-transparent rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-700"></div>
            
            <div className="relative z-10">
              <CardHeader className="text-center pb-8">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mx-auto mb-6 h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300"
                >
                  <Target className="h-8 w-8 text-white" />
                </motion.div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                  Pinpoint Your Growth Barriers in 3 Minutes
                </CardTitle>
                <CardDescription className="text-lg text-slate-600 font-light">
                  Take our quick, confidential assessment to:
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-4 group/item"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover/item:shadow-md transition-all duration-300">
                        <span className="text-blue-600 text-lg">🎯</span>
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed group-hover/item:text-slate-900 transition-colors">
                        See exactly where processes, technology, data, or people hold you back
                      </p>
                    </motion.div>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-4 group/item"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover/item:shadow-md transition-all duration-300">
                        <span className="text-blue-600 text-lg">📊</span>
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed group-hover/item:text-slate-900 transition-colors">
                        Get instant visibility into your operational health
                      </p>
                    </motion.div>
                  </div>
                  <div className="space-y-6">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-4 group/item"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover/item:shadow-md transition-all duration-300">
                        <span className="text-blue-600 text-lg">🔍</span>
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed group-hover/item:text-slate-900 transition-colors">
                        Identify your single biggest constraint
                      </p>
                    </motion.div>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-4 group/item"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover/item:shadow-md transition-all duration-300">
                        <span className="text-blue-600 text-lg">🚀</span>
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed group-hover/item:text-slate-900 transition-colors">
                        Unlock tailored recommendations for your business
                      </p>
                    </motion.div>
                  </div>
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 p-6 rounded-2xl border border-blue-100/50 shadow-inner"
                >
                  <p className="text-sm text-blue-800 font-medium text-center">
                    No personal information required - just honest answers about your daily realities
                  </p>
                </motion.div>
                
                {/* Interactive Assessment Widget */}
                <InteractiveAssessment />
                
                <div className="text-center pt-6">
                  <motion.div className="relative inline-block">
                    <PremiumButton 
                      size="lg" 
                      className="px-12 py-4 text-lg shadow-xl hover:shadow-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 group"
                      icon={<ArrowRight className="w-5 h-5" />}
                      onClick={() => {
                        setShowTooltip('assessment-start');
                        setTimeout(() => setShowTooltip(null), 3000);
                      }}
                    >
                      Start Your Assessment
                    </PremiumButton>
                    
                    {/* Floating indicators */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full opacity-75" />
                    
                    <AnimatePresence>
                      {showTooltip === 'assessment-start' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.8 }}
                          className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-4 py-2 rounded-lg shadow-xl z-50"
                        >
                          <div className="flex items-center space-x-2">
                            <Lightbulb className="w-4 h-4 text-yellow-300" />
                            <span className="text-sm font-medium">Assessment starting...</span>
                          </div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
