'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Search, 
  Code, 
  Rocket, 
  Shield, 
  Award, 
  CheckCircle2,
  Sparkles,
  Target,
  Zap
} from 'lucide-react';

export default function TransformationSection() {
  const [activeCard, setActiveCard] = useState(0);

  const transformationSteps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Strategic Diagnosis",
      subtitle: "Deep-dive analysis of your current digital landscape",
      description: "Our AI-powered assessment tools analyze your existing systems, processes, and data flows to identify optimization opportunities and strategic gaps.",
      features: [
        "360° Digital Audit",
        "Competitive Analysis",
        "ROI Forecasting",
        "Risk Assessment"
      ],
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      glowColor: "shadow-blue-500/25"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Technology Build",
      subtitle: "Engineered solutions tailored to your enterprise",
      description: "We architect and develop bespoke technology solutions using cutting-edge frameworks, ensuring scalability, security, and seamless integration.",
      features: [
        "Enterprise Architecture",
        "Custom Development",
        "API Integration",
        "Cloud-Native Solutions"
      ],
      gradient: "from-green-500 via-teal-500 to-cyan-500",
      glowColor: "shadow-green-500/25"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Seamless Implementation",
      subtitle: "Zero-downtime deployment with 24/7 support",
      description: "Our proven deployment methodology ensures smooth transitions with minimal business disruption, backed by comprehensive training and ongoing support.",
      features: [
        "Phased Rollout",
        "Staff Training",
        "Performance Monitoring",
        "Continuous Optimization"
      ],
      gradient: "from-orange-500 via-red-500 to-pink-500",
      glowColor: "shadow-orange-500/25"
    }
  ];

  const trustSignals = [
    { icon: <Shield className="w-5 h-5" />, label: "SOC 2 Type II", desc: "Security Certified" },
    { icon: <Award className="w-5 h-5" />, label: "ISO 27001", desc: "Information Security" },
    { icon: <CheckCircle2 className="w-5 h-5" />, label: "GDPR", desc: "Privacy Compliant" },
    { icon: <Sparkles className="w-5 h-5" />, label: "99.9% Uptime", desc: "Reliability Guaranteed" }
  ];

  const stats = [
    { value: "500+", label: "Enterprise Clients", icon: <Target className="w-6 h-6" /> },
    { value: "98%", label: "Success Rate", icon: <CheckCircle2 className="w-6 h-6" /> },
    { value: "24/7", label: "Support Available", icon: <Zap className="w-6 h-6" /> },
    { value: "50+", label: "Countries Served", icon: <Sparkles className="w-6 h-6" /> }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-green-400 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 px-6 py-2 text-sm font-semibold">
            Enterprise Transformation
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
            Your Integrated
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transformation Partner
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We don't just build technology – we architect the future of your business. 
            Our comprehensive approach combines strategic insight, cutting-edge development, 
            and seamless implementation to deliver transformative results.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {trustSignals.map((signal, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                  {signal.icon}
                </div>
              </div>
              <h4 className="text-white font-semibold text-sm mb-1">{signal.label}</h4>
              <p className="text-gray-400 text-xs">{signal.desc}</p>
            </div>
          ))}
        </div>

        {/* Main Transformation Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {transformationSteps.map((step, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden bg-white/5 backdrop-blur-sm border-0 hover:bg-white/10 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:${step.glowColor} hover:shadow-2xl`}
              onMouseEnter={() => setActiveCard(index)}
            >
              {/* Card Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              {/* Floating Icon */}
              <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:scale-110`}>
                {step.icon}
              </div>

              <CardHeader className="pb-4 relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-2">
                  {step.title}
                </CardTitle>
                <p className="text-gray-300 text-sm font-medium">
                  {step.subtitle}
                </p>
              </CardHeader>

              <CardContent className="pt-0 relative z-10">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {step.description}
                </p>

                <div className="space-y-3 mb-6">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.gradient} mr-3 opacity-80`} />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                  <span className="mr-2">Explore Process</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
            Start Your Transformation Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
