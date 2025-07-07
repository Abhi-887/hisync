"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Shield, Zap, Users } from "lucide-react";

import { fadeInUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 px-4 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 overflow-hidden section-transition">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden smooth-animation">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2 bg-blue-50 text-blue-700 border-blue-200">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Holistic Business
            <span className="text-blue-600"> Transformation</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            End-to-end solutions combining strategic consulting with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "ERP Solutions",
              description: "Custom-built enterprise resource planning systems tailored to your business needs",
              icon: <Shield className="w-8 h-8" />,
              color: "blue"
            },
            {
              title: "Process Automation",
              description: "Streamline operations with intelligent automation and workflow optimization",
              icon: <Zap className="w-8 h-8" />,
              color: "green"
            },
            {
              title: "Strategic Consulting",
              description: "Expert guidance from ex-Big 4 consultants to transform your business",
              icon: <Users className="w-8 h-8" />,
              color: "purple"
            }
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="p-8 h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl apple-ease group-hover:scale-105 smooth-hover">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 apple-ease`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
