"use client";

import { motion } from "framer-motion";
import { Users, Settings, Shield, BarChart3, CheckCircle, ClipboardList, Smartphone, Monitor, User, Eye, ThumbsUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function WorkflowSection() {
  const workflowSteps = [
    {
      step: "1.",
      title: "Assign Job/Jobs",
      description: "Administrators can assign jobs individually or in bulk (via upload) to users",
      icon: <Users className="w-8 h-8" />,
      color: "blue",
      mockup: "laptop",
      features: [
        "Individual job assignment",
        "Bulk upload capability", 
        "User management",
        "Role-based access"
      ]
    },
    {
      step: "2.",
      title: "Customize the template and workflow",
      description: "Using \"Drag and drop\" features, admin can create custom asset attribute fields and approval workflow",
      icon: <Settings className="w-8 h-8" />,
      color: "indigo",
      mockup: "laptop",
      features: [
        "Drag and drop interface",
        "Custom attribute fields",
        "Approval workflow setup",
        "Template customization"
      ]
    },
    {
      step: "3.",
      title: "User Login",
      description: "Secure login credentials enable seamless, simultaneous access for unlimited users",
      icon: <User className="w-8 h-8" />,
      color: "purple",
      mockup: "mobile",
      features: [
        "Secure authentication",
        "Seamless access",
        "Unlimited users",
        "Multi-device support"
      ]
    },
    {
      step: "4.",
      title: "View Dashboard",
      description: "Users will log into an interactive dashboard to track assigned vs. completed jobs and select specific ones for further action.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "cyan",
      mockup: "mobile",
      features: [
        "Interactive dashboard",
        "Job tracking",
        "Progress monitoring",
        "Task selection"
      ]
    },
    {
      step: "5.",
      title: "View and Complete Job",
      description: "Users can efficiently complete job with minimal manual input via intuitive buttons and streamlined dropdown menus",
      icon: <Eye className="w-8 h-8" />,
      color: "emerald",
      mockup: "mobile",
      features: [
        "Minimal manual input",
        "Intuitive interface",
        "Streamlined workflows",
        "Efficient completion"
      ]
    },
    {
      step: "6.",
      title: "Review and Approve Job",
      description: "The PV Supervisor assesses captured data, then approves, rejects, or requests re-verification based on compliance and accuracy standards",
      icon: <ThumbsUp className="w-8 h-8" />,
      color: "orange",
      mockup: "laptop",
      features: [
        "Data assessment",
        "Approval workflow",
        "Quality standards",
        "Re-verification options"
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

    return (
      <div className="relative w-24 h-40 bg-black rounded-2xl p-1 shadow-xl">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 p-2 flex flex-col justify-center items-center text-white">
            <div className={`w-6 h-6 bg-gradient-to-r ${step.color === 'purple' ? 'from-purple-500 to-purple-600' : step.color === 'cyan' ? 'from-cyan-500 to-cyan-600' : 'from-emerald-500 to-emerald-600'} rounded-lg flex items-center justify-center mb-2`}>
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
    <section className="py-32 px-4 bg-gradient-to-br from-white to-slate-50/50">
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
            <ClipboardList className="w-4 h-4 mr-3" />
            Step-by-Step Process
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Tool Workflow-
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              First Time Verification
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
                With AssetX, you can reduce verification time by 70% with 100% accuracy,
              </h3>
              <p className="text-xl text-blue-100 mb-8">
                real-time tracking, and seamless audit compliance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-slate-900 font-bold py-4 px-8 rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-lg"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/30 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  Watch Demo
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
