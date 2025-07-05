"use client";

import { motion } from "framer-motion";
import { Smartphone, Monitor, Settings, Database, BarChart3, FileText, MapPin, Wifi, Layers, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function FeaturesSection() {
  const leftFeatures = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Real Time Verification and Data Synchronization",
      description: "Instant updates across all devices and platforms"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Offline Mode for remote areas",
      description: "Continue working even without internet connectivity"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "GPS tagging with location accuracy",
      description: "Precise asset location tracking and mapping"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Auto Verification using RFID Guns",
      description: "Automated scanning and verification processes"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Establish Parent and Child Relationship between assets",
      description: "Hierarchical asset organization and management"
    }
  ];

  const rightFeatures = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Dashboard with real time updates",
      description: "Live analytics and performance monitoring"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Custom Workflows and Forms",
      description: "Tailored processes for your organization"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Audit Logs",
      description: "Complete tracking of all system activities"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Auto Reconciliation of Assets",
      description: "Automated matching and verification"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Custom Reports for MIS reporting",
      description: "Customizable reports for management insights"
    }
  ];

  return (
    <section className="py-32 px-4 bg-gradient-to-br from-slate-50 to-indigo-50/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge 
            variant="outline" 
            className="mb-8 px-6 py-3 bg-gradient-to-r from-slate-50 to-blue-50 text-slate-700 border-slate-200/50 font-medium shadow-sm hover:shadow-md transition-all duration-300"
          >
            <Layers className="w-4 h-4 mr-3" />
            Key Features
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Available In
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Mobile & Web
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {leftFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/50 hover:bg-white/80 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-200">
                  {feature.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light group-hover:text-slate-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center - Device Mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Laptop mockup */}
              <div className="relative w-80 h-56 bg-gray-800 rounded-2xl p-3 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 rounded-xl overflow-hidden relative">
                  {/* Laptop screen content */}
                  <div className="absolute inset-0 p-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 h-full">
                      <div className="text-white space-y-3">
                        <div className="flex items-center space-x-2 mb-4">
                          <BarChart3 className="w-6 h-6 text-blue-400" />
                          <span className="text-lg font-bold">Asset Management</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-blue-500/30 h-8 rounded"></div>
                          <div className="bg-green-500/30 h-8 rounded"></div>
                          <div className="bg-purple-500/30 h-8 rounded"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-white/20 h-3 rounded w-full"></div>
                          <div className="bg-white/20 h-3 rounded w-3/4"></div>
                          <div className="bg-white/20 h-3 rounded w-1/2"></div>
                        </div>
                        <div className="flex justify-between text-xs text-blue-200">
                          <span>Real-time</span>
                          <span>HISYNC</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone mockup overlapping */}
              <div className="absolute -bottom-8 -right-8 w-48 h-80 bg-black rounded-[2rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 rounded-[1.5rem] overflow-hidden relative">
                  <div className="absolute inset-0 p-4 flex flex-col items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-white">
                        <div className="text-sm font-bold mb-2">HISYNC</div>
                        <div className="text-xs text-blue-200">Asset Control</div>
                      </div>
                      <div className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 px-4 rounded-lg">
                        Let's Get Started
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-b-xl"></div>
                </div>
              </div>

              {/* Floating feature badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-blue-500 text-white p-3 rounded-xl shadow-lg"
              >
                <Monitor className="w-5 h-5" />
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-8 -right-12 bg-green-500 text-white p-3 rounded-xl shadow-lg"
              >
                <Smartphone className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {rightFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/50 hover:bg-white/80 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-200">
                  {feature.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light group-hover:text-slate-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
