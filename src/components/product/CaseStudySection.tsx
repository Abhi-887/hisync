"use client";

import { motion } from "framer-motion";
import { Target, AlertTriangle, Lightbulb, Trophy, BarChart3, MapPin, Users, Clock, CheckCircle, TrendingUp, Shield, Zap, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function CaseStudySection() {
  const projectStats = [
    { number: "630", label: "Outlets Visited", color: "blue" },
    { number: "20", label: "Cities", color: "indigo" },
    { number: "15000+", label: "Verified Assets", color: "purple" },
    { number: "4", label: "Months", color: "cyan", prefix: "In less than " },
    { number: "+40", label: "Manpower", color: "emerald", prefix: "with " }
  ];

  const clientObjectives = [
    "100% tracking of fixed assets via automated RFID",
    "Mirror image between books and floor assets",
    "Enhanced asset information in fixed asset register",
    "Ensure compliance with Regulatory and Accounting Standards",
    "Establish governance (policy, processes and procedures) around Asset Management"
  ];

  const clientChallenges = [
    "Non availability of tags (~30%)/ low quality existing tags (~20%)",
    "Frequent asset movement leading to tracking gaps",
    "Incomplete asset data, manual entry errors in FAR leading to non compliance with accounting standards",
    "Inability of existing tool/systems to track fixed assets",
    "Non-availability/Outdated policies and processes"
  ];

  const ourApproach = [
    "Preparation of Physical Verification Framework",
    "Used RFID/barcodes for real-time tracking and assigned fixed locations for movable items.",
    "Auto Reconciliation and Exception Reporting through RFID Solution",
    "Deployment of RFID Tool for future asset tracking",
    "Preparation of Business Process Framework for future asset governance"
  ];

  const keyResults = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Deployment of RFID Asset Tracking Tool",
      color: "red"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "100% tagging (barcode + RFID)",
      color: "green"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "98% asset data completeness post PV and reconciliation",
      color: "blue"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "70% faster asset tracking via custom mobile application deployment",
      color: "purple"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% alignment with Accounting and Regulatory Standards",
      color: "emerald"
    }
  ];

  const getStatColor = (color: string) => {
    const colors = {
      blue: "bg-blue-600 border-blue-200",
      indigo: "bg-indigo-600 border-indigo-200",
      purple: "bg-purple-600 border-purple-200", 
      cyan: "bg-cyan-600 border-cyan-200",
      emerald: "bg-emerald-600 border-emerald-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getSectionColor = (type: string) => {
    const colors = {
      objective: "bg-blue-50 border-blue-200 text-blue-700",
      challenge: "bg-red-50 border-red-200 text-red-700", 
      approach: "bg-green-50 border-green-200 text-green-700",
      result: "bg-slate-50 border-slate-200 text-slate-700"
    };
    return colors[type as keyof typeof colors] || colors.objective;
  };

  const getResultColor = (color: string) => {
    const colors = {
      red: "bg-red-500 text-white",
      green: "bg-green-500 text-white",
      blue: "bg-blue-500 text-white",
      purple: "bg-purple-500 text-white",
      emerald: "bg-emerald-500 text-white"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-32 px-4 bg-gradient-to-br from-white to-blue-50/30">
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
            <Award className="w-4 h-4 mr-3" />
            Success Story
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Enhancing Fixed Asset Governance & Accuracy in
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              India's QSR Sector
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 font-medium italic">
            Case Study: How 60-Second Scans Eliminated Efforts in Asset Audit
          </p>
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Project Statistics</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {projectStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`p-8 rounded-3xl ${getStatColor(stat.color)} text-white text-center shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105`}>
                  <div className="text-4xl font-bold mb-2">
                    {stat.prefix && <span className="text-lg font-normal">{stat.prefix}</span>}
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium opacity-90">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Four Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Client Objective */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`p-8 rounded-3xl border-2 ${getSectionColor('objective')} hover:shadow-lg transition-all duration-300`}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white mr-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Client Objective</h3>
            </div>
            
            <div className="space-y-4">
              {clientObjectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 leading-relaxed">{objective}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Client Challenges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`p-8 rounded-3xl border-2 ${getSectionColor('challenge')} hover:shadow-lg transition-all duration-300`}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center text-white mr-4">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Client Challenges</h3>
            </div>
            
            <div className="space-y-4">
              {clientChallenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 leading-relaxed">{challenge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Approach */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`p-8 rounded-3xl border-2 ${getSectionColor('approach')} hover:shadow-lg transition-all duration-300`}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white mr-4">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Approach</h3>
            </div>
            
            <div className="space-y-4">
              {ourApproach.map((approach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <Zap className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 leading-relaxed">{approach}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`p-8 rounded-3xl border-2 ${getSectionColor('result')} hover:shadow-lg transition-all duration-300`}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-slate-600 rounded-2xl flex items-center justify-center text-white mr-4">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Key Results</h3>
            </div>
            
            <div className="space-y-4">
              {keyResults.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className={`w-8 h-8 ${getResultColor(result.color)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {result.icon}
                  </div>
                  <span className="text-slate-700 leading-relaxed font-medium">{result.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
            <div className="relative z-10 max-w-5xl mx-auto">
              <TrendingUp className="w-16 h-16 mx-auto mb-6 text-blue-300" />
              <p className="text-xl md:text-2xl leading-relaxed font-light">
                By combining rigorous physical verification, RFID technology, and robust governance, the client achieved 
                <span className="font-bold text-blue-300"> end-to-end asset transparency and financial integrity</span>. 
                This initiative will position them for sustainable growth in India's competitive QSR market.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
