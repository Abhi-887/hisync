"use client";

import { motion } from "framer-motion";
import { Users, Shield, BarChart3, Zap, CheckCircle, ClipboardList, Smartphone, Monitor, User, Eye, ThumbsUp, Scan, Radio } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ReVerificationSection() {
  const workflowSteps = [
    {
      step: "1.",
      title: "Assign Job/Jobs",
      description: "Administrators can assign jobs individually or in bulk (via upload) to users",
      icon: <Users className="w-8 h-8" />,
      color: "blue",
      mockup: "laptop",
      features: [
        "Individual assignment",
        "Bulk upload capability", 
        "User management",
        "Role-based access"
      ]
    },
    {
      step: "2.",
      title: "User Login",
      description: "Secure login credentials enable seamless, simultaneous access for unlimited users",
      icon: <User className="w-8 h-8" />,
      color: "indigo",
      mockup: "mobile",
      features: [
        "Secure authentication",
        "Seamless access",
        "Unlimited users",
        "Multi-device support"
      ]
    },
    {
      step: "3.",
      title: "View Dashboard",
      description: "Users will log into an interactive dashboard to track assigned vs. completed jobs and select specific ones for further action.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "purple",
      mockup: "mobile",
      features: [
        "Interactive dashboard",
        "Job tracking",
        "Progress monitoring",
        "Task selection"
      ]
    },
    {
      step: "4.",
      title: "Discover Assets using RFID Guns",
      description: "The tool can be deployed in RFID guns allowing user to discover all RFID tagged assets in less than a minute",
      icon: <Scan className="w-8 h-8" />,
      color: "cyan",
      mockup: "rfid",
      features: [
        "RFID gun deployment",
        "Instant asset discovery",
        "Sub-minute scanning",
        "Tagged asset detection"
      ]
    },
    {
      step: "5.",
      title: "View and Complete Job",
      description: "Post discovery, user only need to update the status/condition of the asset and complete the job",
      icon: <Eye className="w-8 h-8" />,
      color: "emerald",
      mockup: "rfid",
      features: [
        "Quick status updates",
        "Condition assessment",
        "Streamlined completion",
        "Minimal manual input"
      ]
    },
    {
      step: "6.",
      title: "Review and Approve Job",
      description: "Real-time data synchronization empowers reviewers to instantly resolve exceptions and finalize the job",
      icon: <ThumbsUp className="w-8 h-8" />,
      color: "orange",
      mockup: "laptop",
      features: [
        "Real-time sync",
        "Instant resolution",
        "Exception handling",
        "Final approval"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-50 border-blue-100 text-blue-700",
      indigo: "from-indigo-500 to-indigo-600 bg-indigo-50 border-indigo-100 text-indigo-700", 
      purple: "from-purple-500 to-purple-600 bg-purple-50 border-purple-100 text-purple-700",
      cyan: "from-cyan-500 to-cyan-600 bg-cyan-50 border-cyan-100 text-cyan-700",
      emerald: "from-emerald-500 to-emerald-600 bg-emerald-50 border-emerald-100 text-emerald-700",
      orange: "from-orange-500 to-orange-600 bg-orange-50 border-orange-100 text-orange-700"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const DeviceMockup = ({ type, step }: { type: string, step: any }) => {
    if (type === "laptop") {
      return (
        <div className="relative w-40 h-28 bg-gray-800 rounded-lg p-2 shadow-xl">
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-md overflow-hidden relative">
            <div className="absolute inset-0 p-3 flex flex-col justify-center items-center text-white">
              <div className={`w-8 h-8 bg-gradient-to-r ${step.color === 'blue' ? 'from-blue-500 to-blue-600' : step.color === 'orange' ? 'from-orange-500 to-orange-600' : 'from-indigo-500 to-indigo-600'} rounded-lg flex items-center justify-center mb-2`}>
                {step.icon}
              </div>
              <div className="text-xs font-semibold text-center">HISYNC</div>
              <div className="text-[8px] text-blue-200 text-center mt-1">{step.title}</div>
            </div>
          </div>
        </div>
      );
    }

    if (type === "rfid") {
      return (
        <div className="relative w-32 h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-2 shadow-xl">
          {/* RFID Gun Body */}
          <div className="w-full h-full bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-xl relative overflow-hidden">
            {/* Screen */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-lg p-1">
              <div className="w-full h-full bg-slate-900 rounded flex flex-col items-center justify-center text-white">
                <div className={`w-4 h-4 bg-gradient-to-r ${step.color === 'cyan' ? 'from-cyan-500 to-cyan-600' : 'from-emerald-500 to-emerald-600'} rounded mb-1`}>
                  <Radio className="w-3 h-3 text-white p-0.5" />
                </div>
                <div className="text-[6px] font-bold">RFID SCAN</div>
                <div className="text-[5px] text-blue-200">ACTIVE</div>
              </div>
            </div>
            
            {/* Trigger */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-red-500 rounded-md shadow-inner"></div>
            
            {/* Handle */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-slate-600 rounded-md"></div>
            
            {/* Antenna indicator */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      );
    }

    return (
      <div className="relative w-24 h-40 bg-black rounded-2xl p-1 shadow-xl">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 p-2 flex flex-col justify-center items-center text-white">
            <div className={`w-6 h-6 bg-gradient-to-r ${step.color === 'indigo' ? 'from-indigo-500 to-indigo-600' : 'from-purple-500 to-purple-600'} rounded-lg flex items-center justify-center mb-2`}>
              {step.icon}
            </div>
            <div className="text-[8px] font-semibold text-center">HISYNC</div>
            <div className="text-[6px] text-blue-200 text-center mt-1 leading-tight">{step.title}</div>
          </div>
          
          {/* Phone notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black rounded-b-lg"></div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-32 px-4 bg-gradient-to-br from-slate-50 to-white">
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
            <Scan className="w-4 h-4 mr-3" />
            Advanced RFID Workflow
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Tool Workflow-
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Re-Verification
            </span>
          </h2>
        </motion.div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`relative p-8 rounded-3xl border-2 ${getColorClasses(step.color).split(' ').slice(2).join(' ')} hover:shadow-xl transition-all duration-500 group-hover:scale-105 overflow-hidden`}>
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(step.color).split(' ').slice(0, 2).join(' ')} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Step number badge */}
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${getColorClasses(step.color).split(' ').slice(0, 2).join(' ')} text-white rounded-2xl font-bold text-lg mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {step.step}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                    {step.title}
                  </h3>

                  {/* Device Mockup */}
                  <div className="flex justify-center mb-6">
                    <DeviceMockup type={step.mockup} step={step} />
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
                    {step.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className={`w-4 h-4 ${getColorClasses(step.color).split(' ')[4]}`} />
                        <span className="text-sm text-slate-600 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                RFID scanners merge accuracy with workflow agility—
              </h3>
              <p className="text-xl text-blue-100 mb-8">
                <span className="text-orange-300 font-semibold">instantly scans assets within seconds</span> and update assets without errors
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-slate-900 font-bold py-4 px-8 rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-lg"
                >
                  Explore RFID Solutions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/30 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  Request Demo
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
