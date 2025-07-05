'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Users, Shield, TrendingUp, Globe, Cog } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Automation",
      description: "Transform your business processes with cutting-edge artificial intelligence and machine learning solutions.",
      features: ["Process Automation", "Predictive Analytics", "Smart Workflows"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Enterprise Integration",
      description: "Seamlessly connect your existing systems and create a unified digital ecosystem.",
      features: ["API Development", "System Integration", "Data Migration"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Ensure your digital transformation meets the highest security and regulatory standards.",
      features: ["Security Audits", "Compliance Management", "Risk Assessment"],
      color: "from-red-500 to-pink-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Maximize efficiency and ROI through data-driven performance improvements.",
      features: ["Performance Monitoring", "Optimization Strategies", "Analytics Dashboard"],
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Build scalable, reliable cloud solutions that grow with your business.",
      features: ["Cloud Migration", "Infrastructure as Code", "DevOps Implementation"],
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Custom Development",
      description: "Tailor-made solutions designed specifically for your unique business requirements.",
      features: ["Custom Applications", "API Development", "System Integration"],
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to implementation, we provide end-to-end digital transformation services 
            that drive innovation and accelerate your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-4 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors cursor-pointer">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
