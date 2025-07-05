"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 lg:py-32 px-4 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-indigo-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-50/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-full text-sm font-medium text-gray-700 shadow-sm">
            <Users className="w-4 h-4 text-blue-600" />
            About HiSync
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
            Built by Experts,
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> For Enterprise</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            We combine the strategic expertise of Big 4 consulting with the technical excellence of elite engineering to deliver enterprise-grade solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              title: "Ex-Big 4 Consultants",
              description: "Strategic minds who understand complex business challenges and enterprise transformation at scale",
              icon: <Award className="w-6 h-6" />,
              gradient: "from-blue-500 to-blue-600",
              accent: "blue"
            },
            {
              title: "Elite Engineers",
              description: "Technical experts building scalable, enterprise-grade solutions with proven reliability and performance",
              icon: <Users className="w-6 h-6" />,
              gradient: "from-emerald-500 to-emerald-600",
              accent: "emerald"
            },
            {
              title: "Global Reach",
              description: "Serving Fortune 500 companies worldwide with local expertise and international quality standards",
              icon: <Globe className="w-6 h-6" />,
              gradient: "from-violet-500 to-violet-600",
              accent: "violet"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-8 lg:p-10 h-full bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-500 group-hover:bg-white group-hover:border-gray-300/60 group-hover:-translate-y-1">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-50/0 to-gray-100/0 group-hover:from-gray-50/50 group-hover:to-gray-100/30 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-all duration-300 shadow-lg shadow-${item.accent}-500/20`}>
                    {item.icon}
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
