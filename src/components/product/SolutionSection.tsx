"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Clock, TrendingUp, Users, Smartphone, Monitor, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SolutionSection() {
  const solutions = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Savings",
      subtitle: "Reduce Verification/Audit Time by 70%",
      description: "Automated verification processes eliminate manual bottlenecks",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50/50"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Error Reduction",
      subtitle: "Automated Checks Minimize Human Errors",
      description: "AI-powered validation ensures accuracy and consistency",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50/50"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Cost Efficiency",
      subtitle: "Less Labor and Resource Costs",
      description: "Streamlined processes reduce operational overhead",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50/50"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "User Friendly Interface",
      subtitle: "Intuitive Interface and can be used on any Android and iOS Mobile Device",
      description: "Modern, responsive design works seamlessly across all devices",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50/50"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Robust Security",
      subtitle: "Role Based Access and Data Security",
      description: "Enterprise-grade security with granular access controls",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50/50"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Mobility",
      subtitle: "Mobility to Use the Application Anywhere and Anytime",
      description: "Cloud-based platform accessible from anywhere, anytime",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50/50"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Scalability",
      subtitle: "Can be Scaled up to Unlimited Users",
      description: "Grows with your organization without performance impact",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50/50"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Seamless Integration",
      subtitle: "Integrates effortlessly with your existing systems including SAP, Oracle",
      description: "Connect with your current enterprise tools and workflows",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50/50"
    }
  ];

  return (
    <section className="py-32 px-4 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20">
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
            className="mb-8 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200/50 font-medium shadow-sm hover:shadow-md transition-all duration-300"
          >
            <Zap className="w-4 h-4 mr-3" />
            Make Investment Decisions
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Introducing
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AssetX
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Phone mockup in center */}
              <div className="flex justify-center mb-12">
                <div className="relative w-64 h-[500px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-[2rem] overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto">
                          <Zap className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-white space-y-2">
                          <div className="text-lg font-bold">Powered by</div>
                          <div className="text-sm text-blue-200">20+ years of</div>
                          <div className="text-sm text-blue-200">Consulting</div>
                          <div className="text-sm text-blue-200">and IT</div>
                          <div className="text-sm text-blue-200">innovation</div>
                          <div className="text-xs text-blue-300">—</div>
                          <div className="text-lg font-bold text-yellow-400">now</div>
                          <div className="text-lg font-bold text-yellow-400">supercharged</div>
                          <div className="text-lg font-bold text-yellow-400">with AI.</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Phone notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-b-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden ${solution.bgColor} rounded-3xl p-6 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 border border-white/50 hover:border-white/80`}
            >
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm font-medium text-blue-700 mb-3 leading-snug">
                  {solution.subtitle}
                </p>
                <p className="text-slate-600 leading-relaxed font-light group-hover:text-slate-700 transition-colors text-sm">
                  {solution.description}
                </p>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-slate-600 mb-8 font-light">
            Transform your asset management with intelligent automation
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            Experience AssetX Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
