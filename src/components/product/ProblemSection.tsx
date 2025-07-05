"use client";

import { motion } from "framer-motion";
import { Clock, AlertTriangle, Database, FileText, Users, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProblemSection() {
  const problems = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time-consuming Verification and Re-verification Process",
      description: "Manual asset verification takes weeks, causing delays in decision-making"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "High Error Rates in Data Entry",
      description: "Human errors in asset data entry lead to inaccurate records and compliance issues"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Lack of Real-time Tracking",
      description: "No visibility into asset locations and status in real-time"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Poor Communication Between Stakeholders",
      description: "Disconnected teams lead to miscommunication and project delays"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Inconsistent Verification Standards",
      description: "Different verification methods across departments create confusion"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Limited Audit Trails",
      description: "Difficulty in tracking changes and maintaining compliance records"
    }
  ];

  return (
    <section className="py-32 px-4 bg-gradient-to-br from-red-50/30 via-white to-orange-50/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Badge 
              variant="outline" 
              className="px-6 py-3 bg-gradient-to-r from-red-50 to-orange-50 text-red-700 border-red-200/50 font-medium shadow-sm hover:shadow-md transition-all duration-300"
            >
              <AlertTriangle className="w-4 h-4 mr-3" />
              Verifying Assets Can Be Overwhelming
            </Badge>
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                Why Traditional Asset
                <br />
                <span className="text-slate-600">Verification Fails</span>
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Traditional paper-based verification processes are slow, error-prone, and fail to meet modern enterprise demands.
              </p>
            </div>

            {/* Problem List */}
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/50 hover:bg-white/80 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-200">
                    {problem.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-light group-hover:text-slate-700 transition-colors">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 lg:p-12">
              {/* Paper-based verification illustration */}
              <div className="relative">
                <div className="text-center space-y-6">
                  <div className="text-6xl mb-4">📄</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">PAPER-BASED VERIFICATION</h3>
                  
                  {/* Stressed person illustration */}
                  <div className="relative inline-block">
                    <div className="text-8xl">😰</div>
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
                    <div className="absolute -top-1 -right-3 w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
                    <div className="absolute -top-3 right-0 w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl p-6 shadow-lg">
                    <p className="text-lg font-medium">
                      "Slow, manual processes invite delays and costly verification"
                    </p>
                  </div>
                  
                  {/* Stack of papers */}
                  <div className="flex justify-center space-x-4 mt-6">
                    <div className="w-16 h-20 bg-white rounded-lg shadow-md border-2 border-slate-200 flex items-center justify-center transform -rotate-12">
                      <FileText className="w-8 h-8 text-slate-400" />
                    </div>
                    <div className="w-16 h-20 bg-white rounded-lg shadow-md border-2 border-slate-200 flex items-center justify-center">
                      <FileText className="w-8 h-8 text-slate-400" />
                    </div>
                    <div className="w-16 h-20 bg-white rounded-lg shadow-md border-2 border-slate-200 flex items-center justify-center transform rotate-12">
                      <FileText className="w-8 h-8 text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating problem indicators */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -left-4 bg-red-500 text-white p-3 rounded-xl shadow-lg"
            >
              <Clock className="w-6 h-6" />
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-3 rounded-xl shadow-lg"
            >
              <AlertTriangle className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
