"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden section-transition">
      <div className="absolute inset-0 overflow-hidden smooth-animation">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2 bg-white/10 text-white border-white/20">
            <Users className="w-4 h-4 mr-2" />
            About HiSync
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built by Experts,
            <span className="text-blue-300"> For Business</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We combine the strategic expertise of Big 4 consulting with the technical excellence of elite engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Ex-Big 4 Consultants",
              description: "Strategic minds who understand complex business challenges",
              icon: <Award className="w-8 h-8" />,
              color: "blue"
            },
            {
              title: "Elite Engineers",
              description: "Technical experts building scalable, robust solutions",
              icon: <Users className="w-8 h-8" />,
              color: "green"
            },
            {
              title: "Global Reach",
              description: "Serving businesses worldwide with local expertise",
              icon: <Globe className="w-8 h-8" />,
              color: "purple"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-8 h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-white/10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
