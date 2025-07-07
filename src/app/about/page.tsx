"use client";

import { ArrowLeft, Shield, Award, Users, CheckCircle, Linkedin, Globe, Target, TrendingUp, Star, Sparkles, Brain, Zap, Rocket, Building2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Rohit Gaur",
      role: "Founder",
      description: "Rohit is a seasoned technology leader with a strong background in app development, web technologies, research, and digital product launches. Rohit has over 13 years of experience spanning several multinational corporations, including those connected to Silicon Valley. For over five years, he served as Product Head at The Infinite Reality, a multi billion-dollar organization.",
      achievements: "His expertise lies in bridging technical innovation with business outcomes, making him a valuable asset in today's fast-evolving digital landscape.",
      linkedin: "https://www.linkedin.com/in/gaurrohit660/",
      image: "/images/our_team/rohit.webp"
    },
    {
      name: "Avinash K Tripathi",
      role: "Founder",
      description: "Avinash is an accomplished product leader with over 14 years of experience in the technology industry, specializing in SaaS products and digital innovation. Holding a Bachelor of Engineering degree, he served as the Director of Product Management at RektGlobal Inc. His deep understanding of product lifecycle management and forward-thinking approach make him a key force behind successful, user-centric SaaS platforms.",
      achievements: "His visionary leadership in product strategy has transformed multiple enterprises across global markets.",
      linkedin: "https://www.linkedin.com/in/mynamavinash/",
      image: "/images/our_team/avinash.webp"
    },
    {
      name: "Amit S. Chauhan",
      role: "Co-Founder",
      description: "Amit has endeavoured through his 20+ years of professional adventure in world's leading consulting firms playing a pivotal role in the pursuits team along with gaining himself the position as the Director in Protiviti. He has led several large scale asset management transformational projects in 15+ countries.",
      achievements: "Amit has completed his PGDBM (India) and holds professional certification from Institute of Risk Management (South Africa).",
      linkedin: "https://www.linkedin.com/in/amit-singh-chauhan-79a5328/",
      image: "/images/our_team/amit.webp"
    },
    {
      name: "Ujjwal Agrawal",
      role: "Co-Founder",
      description: "Ujjwal has over 14 years of professional experience and worked with two of the world's leading consulting firms for over a decade in Risk and Business Advisory domain. Ujjwal, in his last role served as an Associate Director with KPMG where he led Enterprise Asset Management solution. Ujjwal have led projects in 10+ countries and have worked with various multi billion dollar organizations across Asia, Africa and Middle east markets.",
      achievements: "Ujjwal is a Chartered Accountant from India qualified at young age of 22.",
      linkedin: "https://www.linkedin.com/in/ujjwalagrawal1/",
      image: "/images/our_team/ujjwal.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 px-4 bg-gradient-to-br from-gray-50/30 via-blue-50/20 to-indigo-50/30 overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Sophisticated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/[0.02] via-slate-900/[0.01] to-indigo-900/[0.03]"></div>
          
          {/* Enterprise grid pattern */}
          <div className="absolute inset-0 opacity-[0.2]">
            <div className="h-full w-full" style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.15) 1px, transparent 1px),
                radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px, 60px 60px, 30px 30px'
            }}></div>
          </div>
          
          {/* Floating premium orbs */}
          <div className="absolute top-16 left-1/6 w-96 h-96 bg-gradient-to-r from-blue-400/[0.04] via-indigo-400/[0.03] to-purple-400/[0.02] rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-16 right-1/6 w-80 h-80 bg-gradient-to-r from-violet-400/[0.03] via-purple-400/[0.04] to-fuchsia-400/[0.02] rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/[0.025] via-blue-400/[0.035] to-indigo-400/[0.03] rounded-full blur-3xl animate-pulse"></div>
          
          {/* Premium mesh gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/10 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/5 to-blue-50/10"></div>
          
          {/* Subtle geometric patterns */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200/[0.04] to-indigo-200/[0.03] rounded-3xl rotate-12 blur-sm"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-br from-purple-200/[0.03] to-violet-200/[0.04] rounded-2xl -rotate-12 blur-sm"></div>
          <div className="absolute top-1/2 left-16 w-16 h-16 bg-gradient-to-br from-cyan-200/[0.05] to-blue-200/[0.04] rounded-xl rotate-45 blur-sm"></div>
          
          {/* Enterprise-grade scanlines effect */}
          <div className="absolute inset-0 opacity-[0.015]">
            <div className="h-full w-full" style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(59, 130, 246, 0.08) 2px,
                rgba(59, 130, 246, 0.08) 4px
              )`
            }}></div>
          </div>
          {/* Additional modern grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_40%_at_50%_50%,#000_50%,transparent_90%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="text-center animate-fade-in-up">
            {/* Premium badge */}
            <div className="mb-8 animate-fade-in-scale">
              <Badge className="px-6 py-3 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border-blue-200/50 text-blue-700 backdrop-blur-sm shadow-lg text-sm font-medium hover:shadow-xl transition-all duration-300">
                <Sparkles className="w-4 h-4 mr-2" />
                Enterprise Innovation Leaders
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-[0.9] tracking-tight">
              About
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                HISYNC
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-light mb-12">
              Where strategic innovation meets <span className="text-blue-600 font-medium">cutting-edge technology</span> to transform enterprise landscapes worldwide
            </p>

            {/* Stats preview */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 animate-fade-in-delay-300">
              {[
                { number: "20+", label: "Years Experience" },
                { number: "500+", label: "Enterprise Clients" },
                { number: "20+", label: "Global Markets" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 px-4 bg-white relative">
        {/* Very subtle background elements - minimal & clean */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/20 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <Badge 
                variant="outline" 
                className="px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200/50 font-medium shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Target className="w-4 h-4 mr-3" />
                Our Journey
              </Badge>
              
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                Redefining
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Digital Innovation
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                <p className="text-xl text-slate-700 font-medium">
                  At <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">HISYNC</span>, we don't just build technology — we architect digital transformation.
                </p>
                <p>
                  Our foundation rests on two decades of combined expertise from veteran IT architects and elite business transformation consultants who've shaped enterprise landscapes across 20+ global markets.
                </p>
                <p>
                  From healthcare revolutionizing patient care to fintech reshaping financial services, we engineer intelligent solutions that merge cutting-edge technologies like AI automation, blockchain security, and cloud-native architectures with deep industry insights.
                </p>
              </div>

              {/* Key highlights */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                {[
                  { icon: <Brain className="w-6 h-6" />, text: "AI-Driven Solutions" },
                  { icon: <Shield className="w-6 h-6" />, text: "Enterprise Security" },
                  { icon: <Zap className="w-6 h-6" />, text: "Rapid Innovation" },
                  { icon: <Globe className="w-6 h-6" />, text: "Global Reach" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors duration-200">
                    <div className="text-blue-600">{item.icon}</div>
                    <span className="text-slate-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              {/* Enhanced image container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=500&fit=crop&auto=format"
                    alt="Modern office collaboration"
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                  
                  {/* Floating stats cards */}
                  <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-xs text-slate-500">Projects Delivered</div>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
                    <div className="text-2xl font-bold text-purple-600">99.9%</div>
                    <div className="text-xs text-slate-500">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Unique Advantage */}
      <section className="py-32 px-4 bg-gradient-to-br from-slate-50/30 via-blue-50/15 to-indigo-50/20 relative overflow-hidden">
        {/* Enhanced premium background - this one gets the spotlight */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/[0.02] via-blue-900/[0.01] to-indigo-900/[0.03]"></div>
          
          {/* Beautiful floating elements */}
          <div className="absolute top-16 left-1/6 w-96 h-96 bg-gradient-to-r from-blue-400/[0.04] via-indigo-400/[0.03] to-purple-400/[0.02] rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-16 right-1/6 w-80 h-80 bg-gradient-to-r from-violet-400/[0.03] via-purple-400/[0.04] to-fuchsia-400/[0.02] rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/[0.025] via-blue-400/[0.035] to-indigo-400/[0.03] rounded-full blur-3xl animate-pulse"></div>
          
          {/* Premium grid pattern */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="h-full w-full" style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 2px, transparent 2px)
              `,
              backgroundSize: '50px 50px, 50px 50px, 25px 25px'
            }}></div>
          </div>
          
          {/* Subtle geometric patterns */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200/[0.03] to-indigo-200/[0.04] rounded-3xl rotate-12 blur-sm"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-br from-purple-200/[0.04] to-violet-200/[0.03] rounded-2xl -rotate-12 blur-sm"></div>
          
          {/* Enterprise grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_40%,transparent_100%)]"></div>
          
          {/* Premium scanlines */}
          <div className="absolute inset-0 opacity-[0.015]">
            <div className="h-full w-full" style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 3px,
                rgba(59, 130, 246, 0.04) 3px,
                rgba(59, 130, 246, 0.04) 6px
              )`
            }}></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge 
              variant="outline" 
              className="mb-8 px-6 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border-indigo-200/50 font-medium shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Award className="w-4 h-4 mr-3" />
              Competitive Edge
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              What Sets Us
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Apart
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              We seamlessly blend strategic consulting with breakthrough technology, delivering end-to-end solutions that transform how enterprises operate and compete.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Strategic Innovation",
                description: "We architect transformation strategies that don't just solve today's challenges but anticipate tomorrow's opportunities.",
                gradient: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50/50"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Enterprise Security",
                description: "Bank-grade security protocols and compliance frameworks ensure your data and operations remain fortress-protected.",
                gradient: "from-emerald-500 to-emerald-600",
                bgColor: "bg-emerald-50/50"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Expertise",
                description: "Two decades of cross-cultural technology implementations across 20+ international markets gives us unmatched perspective.",
                gradient: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50/50"
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Industry Specialization",
                description: "From healthcare to fintech, our solutions are precisely calibrated to industry-specific demands and regulatory requirements.",
                gradient: "from-orange-500 to-orange-600",
                bgColor: "bg-orange-50/50"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "End-to-End Excellence",
                description: "Complete digital transformation journey from strategic planning and design to development, deployment, and ongoing optimization.",
                gradient: "from-cyan-500 to-cyan-600",
                bgColor: "bg-cyan-50/50"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Future-Ready Tech",
                description: "AI, machine learning, blockchain, and cloud-native architectures — we harness tomorrow's technology today.",
                gradient: "from-pink-500 to-pink-600",
                bgColor: "bg-pink-50/50"
              }
            ].map((advantage, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden ${advantage.bgColor} rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 border border-white/30 hover:border-white/50 backdrop-blur-sm animate-fade-in-stagger hover:scale-105 hover:-translate-y-2`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Enhanced background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-blue-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] duration-1000"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${advantage.gradient} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-light group-hover:text-slate-700 transition-colors">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-32 px-4 bg-white relative">
        {/* Clean and minimal background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/30"></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge 
              variant="outline" 
              className="mb-8 px-6 py-3 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border-purple-200/50 font-medium shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Users className="w-4 h-4 mr-3" />
              Leadership Excellence
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Meet Our
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Visionary Leaders
              </span>
            </h2>
            
            <div className="text-center mb-12">
              <p className="text-xl text-slate-600 font-light mb-6 max-w-4xl mx-auto">
                Our leadership team combines Silicon Valley innovation with Big 4 strategic excellence
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 text-lg font-medium">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">20+</span>
                  <span className="text-slate-600">Years Experience</span>
                </div>
                <div className="w-2 h-2 bg-slate-300 rounded-full hidden sm:block"></div>
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">20+</span>
                  <span className="text-slate-600">Global Markets</span>
                </div>
                <div className="w-2 h-2 bg-slate-300 rounded-full hidden sm:block"></div>
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">500+</span>
                  <span className="text-slate-600">Projects Delivered</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-white to-slate-50/30 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100/50 hover:border-slate-200/50 overflow-hidden animate-fade-in-stagger hover:scale-105 hover:-translate-y-2`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Subtle background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 p-0.5">
                        <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        </div>
                      </div>
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:from-blue-700 hover:to-indigo-700"
                      >
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                        {member.name}
                      </h3>
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium shadow-sm">
                        {member.role}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-slate-600 leading-relaxed font-light group-hover:text-slate-700 transition-colors">
                      {member.description}
                    </p>
                    {member.achievements && (
                      <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100/50">
                        <p className="text-slate-700 font-medium italic text-sm leading-relaxed">
                          {member.achievements}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-amber-50/20 via-orange-50/15 to-yellow-50/25 relative overflow-hidden">
        {/* Jute bag inspired background - earthy and textured */}
        <div className="absolute inset-0">
          {/* Base earthy gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/[0.06] via-orange-900/[0.04] to-yellow-900/[0.05]"></div>
          
          {/* Jute texture simulation - crosshatch pattern */}
          <div className="absolute inset-0 opacity-[0.08]">
            <div className="h-full w-full" style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(139, 69, 19, 0.15) 1px, transparent 1px),
                linear-gradient(-45deg, rgba(139, 69, 19, 0.15) 1px, transparent 1px),
                linear-gradient(rgba(160, 82, 45, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(160, 82, 45, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '12px 12px, 12px 12px, 4px 4px, 4px 4px'
            }}></div>
          </div>
          
          {/* Woven fabric texture */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div className="h-full w-full" style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                rgba(139, 69, 19, 0.2),
                rgba(139, 69, 19, 0.2) 2px,
                transparent 2px,
                transparent 6px
              ), repeating-linear-gradient(
                90deg,
                rgba(160, 82, 45, 0.15),
                rgba(160, 82, 45, 0.15) 2px,
                transparent 2px,
                transparent 6px
              )`
            }}></div>
          </div>
          
          {/* Organic floating elements - like natural fibers */}
          <div className="absolute top-20 left-1/4 w-80 h-80 bg-gradient-to-r from-amber-400/[0.03] via-orange-400/[0.04] to-yellow-400/[0.02] rounded-full blur-3xl animate-float transform rotate-12"></div>
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-r from-orange-400/[0.04] via-amber-400/[0.03] to-red-400/[0.02] rounded-full blur-3xl animate-float-delayed transform -rotate-12"></div>
          <div className="absolute top-1/2 left-1/6 w-48 h-48 bg-gradient-to-r from-yellow-400/[0.025] via-amber-400/[0.035] to-orange-400/[0.025] rounded-full blur-3xl animate-pulse"></div>
          
          {/* Subtle hemp-like fiber patterns */}
          <div className="absolute top-32 right-1/5 w-20 h-20 bg-gradient-to-br from-amber-200/[0.06] to-orange-200/[0.08] rounded-2xl rotate-45 blur-sm"></div>
          <div className="absolute bottom-40 left-1/5 w-16 h-16 bg-gradient-to-br from-orange-200/[0.05] to-yellow-200/[0.06] rounded-xl -rotate-45 blur-sm"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-yellow-200/[0.08] to-amber-200/[0.10] rounded-lg rotate-12 blur-sm"></div>
          
          {/* Natural fabric mesh overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,19,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,19,0.06)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_50%,transparent_100%)]"></div>
          
          {/* Burlap-style texture overlay */}
          <div className="absolute inset-0 opacity-[0.08]">
            <div className="h-full w-full" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.4) 1px, transparent 1px),
                               radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.3) 1px, transparent 1px)`,
              backgroundSize: '8px 8px, 8px 8px',
              backgroundPosition: '0 0, 4px 4px'
            }}></div>
          </div>
          
          {/* Organic edge highlight */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-300/40 to-transparent"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="space-y-10 animate-fade-in-up">
            <Badge className="px-6 py-3 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border-blue-200/50 text-blue-700 backdrop-blur-sm shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Transform?
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
              Let's Build Your
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Partner with industry leaders who've transformed 500+ enterprises worldwide. Your digital transformation journey starts with a single conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link 
                href="/#contact"
                className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
              >
                <span>Start Your Journey</span>
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link 
                href="/#services"
                className="group px-10 py-5 border-2 border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-white/80 backdrop-blur-sm font-semibold rounded-2xl transition-all duration-300 flex items-center space-x-3"
              >
                <span>Explore Services</span>
                <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="pt-12 border-t border-slate-200/50">
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                {[
                  { icon: <Shield className="w-6 h-6" />, text: "SOC 2 Compliant" },
                  { icon: <CheckCircle className="w-6 h-6" />, text: "99.9% Uptime" },
                  { icon: <Award className="w-6 h-6" />, text: "24/7 Support" }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2 text-slate-600">
                    <div className="text-blue-600">{item.icon}</div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
