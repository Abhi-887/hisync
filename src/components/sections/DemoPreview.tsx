"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Settings, Database } from "lucide-react";
import { useState, useEffect } from "react";

export default function DemoPreview() {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const demoTabs = [
    {
      title: "Dashboard Analytics",
      description: "Real-time business insights",
      color: "blue",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: "Process Automation",
      description: "Streamlined workflows",
      color: "green",
      icon: <Settings className="w-5 h-5" />
    },
    {
      title: "Custom ERP",
      description: "Tailored solutions",
      color: "purple",
      icon: <Database className="w-5 h-5" />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveTab((prev) => (prev + 1) % demoTabs.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 shadow-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
      
      {/* Demo Tabs */}
      <div className="relative z-10 space-y-6">
        <div className="flex space-x-2 mb-6">
          {demoTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                activeTab === index
                  ? 'bg-white/20 text-white shadow-lg'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {tab.icon}
              <span className="font-medium">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-semibold text-white">
                {demoTabs[activeTab].title}
              </h4>
              <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                Live Demo
              </Badge>
            </div>
            <p className="text-white/80 mb-4">
              {demoTabs[activeTab].description}
            </p>
            
            {/* Mock Interface */}
            <div className="bg-white/5 rounded-xl p-4 space-y-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="flex-1 h-2 bg-white/20 rounded-full"></div>
                  <div className="w-8 h-2 bg-blue-400/50 rounded-full"></div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
