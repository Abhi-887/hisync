"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Search, Cpu, TrendingUp, MousePointer } from "lucide-react";
import InteractiveCounter from "./InteractiveCounter";
import DemoPreview from "./DemoPreview";
import { BarChart3, Users, Award, Shield } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 px-4 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-br from-green-300/20 to-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-br from-purple-300/20 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-indigo-300/15 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-3xl rotate-12 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-green-400/10 to-transparent rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-transparent rounded-2xl rotate-45 animate-bounce delay-700"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-indigo-400/10 to-transparent rounded-xl rotate-12 animate-bounce delay-1200"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-blue-400/70 rounded-full animate-ping delay-200"></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-green-400/70 rounded-full animate-ping delay-800"></div>
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-purple-400/70 rounded-full animate-ping delay-1400"></div>
        <div className="absolute top-1/2 left-1/4 w-2.5 h-2.5 bg-indigo-400/60 rounded-full animate-ping delay-600"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Badge 
              variant="outline" 
              className="px-4 py-2 bg-white/80 backdrop-blur-sm text-blue-700 border-blue-200 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Building2 className="w-4 h-4 mr-2" />
              Enterprise-Grade Solutions
            </Badge>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Your Integrated Transformation
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent">
              Partner
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            We don't just identify problems - we redesign processes and build custom 
            technology solutions in one seamless engagement. 
            <span className="text-slate-900 font-medium">No handoffs. No misalignment. Just results.</span>
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12"
          >
            The Integrated Advantage
          </motion.h3>
          
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Search className="h-8 w-8 text-white" />,
                title: "Strategic Diagnosis",
                description: "Ex-Big 4 consultants identify root causes and design optimal processes",
                features: ["Process Analysis & Optimization", "Technology Gap Assessment", "Data Flow Mapping", "Organizational Readiness"],
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 via-white to-blue-50/50",
                borderColor: "border-blue-200/50"
              },
              {
                icon: <Cpu className="h-8 w-8 text-white" />,
                title: "Custom Technology Build",
                description: "Elite engineers create tailored ERP solutions that fit your exact needs",
                features: ["Custom ERP Development", "API Integration & Automation", "Cloud-Native Architecture", "Real-time Analytics"],
                gradient: "from-green-500 to-green-600",
                bgGradient: "from-green-50 via-white to-green-50/50",
                borderColor: "border-green-200/50"
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-white" />,
                title: "Seamless Implementation",
                description: "One team ensures perfect alignment from strategy to execution",
                features: ["Change Management", "Training & Support", "Performance Monitoring", "Continuous Optimization"],
                gradient: "from-purple-500 to-purple-600",
                bgGradient: "from-purple-50 via-white to-purple-50/50",
                borderColor: "border-purple-200/50"
              }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full group rounded-3xl overflow-hidden bg-gradient-to-br ${item.bgGradient} backdrop-blur-sm relative transform hover:-translate-y-2`}>
                  {/* Card Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/50 to-white/90 rounded-3xl"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-2xl group-hover:w-40 group-hover:h-40 transition-all duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-indigo-100/30 to-transparent rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-700"></div>
                  
                  <div className="relative z-10">
                    <CardHeader className="text-center pb-6 pt-8">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`mx-auto mb-6 h-16 w-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                      >
                        {item.icon}
                      </motion.div>
                      <CardTitle className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-slate-600 font-light leading-relaxed text-center">
                        {item.description}
                      </p>
                      
                      <div className="space-y-3">
                        {item.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                            <span className="text-slate-700 font-medium text-sm">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Interactive Demo Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-16 mb-16"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Badge 
                variant="outline" 
                className="px-4 py-2 bg-white/80 backdrop-blur-sm text-blue-700 border-blue-200 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MousePointer className="w-4 h-4 mr-2" />
                Interactive Demo
              </Badge>
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              See Our Platform in Action
            </h3>
            <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
              Experience how our solutions transform business operations in real-time
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <DemoPreview />
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold text-slate-900 mb-4">
                  Interactive Features
                </h4>
                <div className="space-y-4">
                  {[
                    { title: "Real-time Analytics", description: "Live data visualization and insights" },
                    { title: "Process Automation", description: "Streamlined workflow management" },
                    { title: "Custom ERP", description: "Tailored enterprise solutions" }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 transition-all duration-300"
                    >
                      <h5 className="font-semibold text-slate-900 mb-2">{feature.title}</h5>
                      <p className="text-slate-600 text-sm">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Premium Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-white rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30 rounded-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10 p-12 md:p-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                Proven Results
              </h3>
              <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
                See the impact of our integrated transformation approach
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <InteractiveCounter 
                end={500} 
                label="Happy Clients" 
                icon={<Users className="w-6 h-6" />}
                delay={0}
              />
              <InteractiveCounter 
                end={87} 
                label="Success Rate %" 
                icon={<Award className="w-6 h-6" />}
                delay={200}
              />
              <InteractiveCounter 
                end={250} 
                label="Projects Delivered" 
                icon={<BarChart3 className="w-6 h-6" />}
                delay={400}
              />
              <InteractiveCounter 
                end="24/7" 
                label="Support" 
                icon={<Shield className="w-6 h-6" />}
                delay={600}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
