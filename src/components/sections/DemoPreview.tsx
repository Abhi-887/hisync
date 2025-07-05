"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Settings, Database, Play, ExternalLink, TrendingUp, Users, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export default function DemoPreview() {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const demoTabs = [
    {
      title: "Dashboard Analytics",
      description: "Real-time business insights with advanced data visualization",
      color: "blue",
      icon: <BarChart3 className="w-5 h-5" />,
      features: ["Real-time data sync", "Custom KPI tracking", "Predictive analytics"],
      metrics: { users: "2.4K", growth: "+23%", revenue: "$45K" }
    },
    {
      title: "Process Automation",
      description: "Intelligent workflow automation that saves hours daily",
      color: "green",
      icon: <Settings className="w-5 h-5" />,
      features: ["Smart task routing", "Auto-approval flows", "Integration APIs"],
      metrics: { processes: "150+", efficiency: "+87%", timeSaved: "12hrs/day" }
    },
    {
      title: "Custom ERP Solutions",
      description: "Tailored enterprise solutions built for your business",
      color: "purple",
      icon: <Database className="w-5 h-5" />,
      features: ["Custom modules", "Scalable architecture", "24/7 support"],
      metrics: { modules: "50+", uptime: "99.9%", clients: "500+" }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && !isPlaying) {
        setActiveTab((prev) => (prev + 1) % demoTabs.length);
      }
    }, 5000); // Increased to 5 seconds for better readability
    return () => clearInterval(interval);
  }, [isHovered, isPlaying, demoTabs.length]);

  const handlePlayDemo = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 3000);
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'from-blue-100/80 to-cyan-100/80 border-blue-300/50';
      case 'green':
        return 'from-green-100/80 to-emerald-100/80 border-green-300/50';
      case 'purple':
        return 'from-purple-100/80 to-pink-100/80 border-purple-300/50';
      default:
        return 'from-gray-100/80 to-slate-100/80 border-gray-300/50';
    }
  };

  return (
    <div className="space-y-8">
     

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 rounded-3xl p-8 shadow-2xl overflow-hidden border border-gray-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/15 rounded-full"
            animate={{
              x: [0, 80 + i * 20, 0],
              y: [0, -40 - i * 10, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 6 + i * 0.5,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + i * 8}%`,
            }}
          />
        ))}
        
        {/* Demo Tabs */}
        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap gap-2 mb-6">
            {demoTabs.map((tab, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gray-900/10 text-gray-900 shadow-lg ring-2 ring-gray-300'
                    : 'bg-gray-900/5 text-gray-700 hover:bg-gray-900/10'
                }`}
              >
                <motion.div
                  animate={activeTab === index ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {tab.icon}
                </motion.div>
                <span className="font-medium">{tab.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Enhanced Demo Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.25, 0.46, 0.45, 0.94],
                layout: { duration: 0.6 }
              }}
              layout
              className={`bg-gradient-to-br ${getColorClasses(demoTabs[activeTab].color)} backdrop-blur-sm rounded-2xl p-6 border shadow-lg`}
            >
              <div className="space-y-6">
                {/* Header with Play Button */}
                <motion.div 
                  className="flex items-center justify-between"
                  layout
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.h4 
                      className="text-xl font-semibold text-gray-900 tracking-tight"
                      layout
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      {demoTabs[activeTab].title}
                    </motion.h4>
                    <motion.button
                      onClick={handlePlayDemo}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-gray-900/10 rounded-full hover:bg-gray-900/20 transition-colors"
                    >
                      <Play className="w-4 h-4 text-gray-700" />
                    </motion.button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="bg-gray-900/10 text-gray-700 border-gray-300">
                      Live Demo
                    </Badge>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="p-2 bg-gray-900/5 rounded-lg hover:bg-gray-900/10 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700" />
                    </motion.button>
                  </div>
                </motion.div>

                <motion.p 
                  className="text-gray-700 text-lg"
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {demoTabs[activeTab].description}
                </motion.p>

                {/* Features List */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  layout
                >
                  {demoTabs[activeTab].features.map((feature, idx) => (
                    <motion.div
                      key={`${activeTab}-${idx}`}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        delay: 0.3 + idx * 0.1, 
                        duration: 0.5, 
                        ease: [0.25, 0.46, 0.45, 0.94] 
                      }}
                      layout
                      className="flex items-center space-x-2 bg-gray-900/5 rounded-lg p-3 hover:bg-gray-900/10 transition-colors duration-300"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1, duration: 0.4 }}
                      >
                        <Zap className="w-4 h-4 text-amber-500" />
                      </motion.div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Metrics Display */}
                <motion.div 
                  className="grid grid-cols-3 gap-4"
                  layout
                >
                  {Object.entries(demoTabs[activeTab].metrics).map(([key, value], idx) => (
                    <motion.div
                      key={`${activeTab}-metric-${key}`}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ 
                        delay: 0.5 + idx * 0.1, 
                        duration: 0.6, 
                        ease: [0.34, 1.56, 0.64, 1] 
                      }}
                      layout
                      className="text-center bg-gray-900/5 rounded-xl p-4 hover:bg-gray-900/10 transition-all duration-300 hover:shadow-md"
                    >
                      <motion.div 
                        className="text-2xl font-bold text-gray-900 mb-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 + idx * 0.1, duration: 0.4, type: "spring", stiffness: 200 }}
                      >
                        {value}
                      </motion.div>
                      <motion.div 
                        className="text-gray-600 text-sm capitalize"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 + idx * 0.1, duration: 0.3 }}
                      >
                        {key.replace(/([A-Z])/g, ' $1')}
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Enhanced Mock Interface */}
                <motion.div 
                  className="bg-gray-900/5 rounded-xl p-4 space-y-3 border border-gray-200/50"
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <motion.div 
                    className="flex items-center justify-between mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.3 }}
                  >
                    <span className="text-gray-600 text-sm font-medium">Live Activity</span>
                    <div className="flex items-center space-x-1">
                      <motion.div 
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-green-600 text-xs font-medium">Online</span>
                    </div>
                  </motion.div>
                  {[1, 2, 3, 4].map((item) => (
                    <motion.div
                      key={`${activeTab}-activity-${item}`}
                      initial={{ opacity: 0, x: -20, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ 
                        delay: 1.0 + item * 0.1, 
                        duration: 0.4, 
                        ease: [0.25, 0.46, 0.45, 0.94] 
                      }}
                      layout
                      className="flex items-center space-x-3 group hover:bg-gray-900/8 rounded-lg p-2 transition-all duration-300 hover:shadow-sm"
                    >
                      <motion.div
                        animate={isPlaying ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                        transition={{ duration: 0.5, delay: item * 0.1 }}
                        className="w-2 h-2 bg-green-500 rounded-full"
                      />
                      <div className="flex-1 space-y-1">
                        <motion.div
                          className="h-2 bg-gray-300 rounded-full overflow-hidden"
                          initial={{ width: "60%" }}
                          animate={isPlaying ? { width: ["60%", "90%", "75%"] } : { width: "60%" }}
                          transition={{ duration: 1, delay: item * 0.1 }}
                        />
                        <div className="h-1 bg-gray-200 rounded-full w-3/4"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-3 h-3 text-green-500" />
                        <motion.div
                          className="w-8 h-2 bg-blue-400/70 rounded-full"
                          animate={isPlaying ? { opacity: [0.7, 1, 0.8] } : { opacity: 0.7 }}
                          transition={{ duration: 0.8, delay: item * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -2,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  layout
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <span className="relative z-10">Try {demoTabs[activeTab].title} Now</span>
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
