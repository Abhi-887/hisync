"use client";

import { motion } from "framer-motion";
import { CheckCircle, Settings, FileText, Users, Database, Shield, Zap, Layers, ArrowRight, Calendar, Target, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function RoadmapSection() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Planning and Mobilization",
      status: "completed",
      color: "emerald",
      icon: <Calendar className="w-5 h-5" />,
      description: "Strategic planning and resource allocation"
    },
    {
      phase: "Phase 2", 
      title: "As-Is Assessment (Deep Dive) + FAR Cleansing",
      status: "completed",
      color: "emerald",
      icon: <Database className="w-5 h-5" />,
      description: "Current state analysis and data cleansing"
    },
    {
      phase: "Phase 3",
      title: "Initiation of PV Framework", 
      status: "completed",
      color: "emerald",
      icon: <Settings className="w-5 h-5" />,
      description: "Framework setup and configuration"
    },
    {
      phase: "Phase 4",
      title: "Draft PV Framework",
      status: "active",
      color: "blue",
      icon: <FileText className="w-5 h-5" />,
      description: "Implementation Plan, Training Methodology, Change Management, Reconciliation Guideline, Quality Assurance etc."
    },
    {
      phase: "Phase 5",
      title: "Pilot Verification (1-5 Sites)",
      status: "upcoming",
      color: "slate",
      icon: <Target className="w-5 h-5" />,
      description: "Testing and validation on select sites"
    },
    {
      phase: "Phase 6",
      title: "Update Framework",
      status: "upcoming",
      color: "slate", 
      icon: <Workflow className="w-5 h-5" />,
      description: "Refinement based on pilot results"
    },
    {
      phase: "Phase 7",
      title: "Customize PV Application",
      status: "upcoming",
      color: "slate",
      icon: <Settings className="w-5 h-5" />,
      description: "Application customization and optimization"
    },
    {
      phase: "Phase 8",
      title: "Final PV Framework + Custom Solution Ready for Deployment",
      status: "upcoming",
      color: "indigo",
      icon: <Shield className="w-5 h-5" />,
      description: "Complete solution ready for rollout"
    }
  ];

  const bottomPhases = [
    {
      title: "Completion of PV and Tagging",
      description: "Site N",
      status: "completed",
      color: "red"
    },
    {
      title: "Re-verification and Tagging - Exceptions", 
      description: "Exception handling and corrections",
      status: "completed",
      color: "red"
    },
    {
      title: "Cross Functional Stakeholders Alignment",
      description: "Stakeholder coordination and approval",
      status: "completed", 
      color: "red"
    },
    {
      title: "FAR Enrichment and Initial FAR Reconciliation",
      description: "Site 4, Site 3, Site 2, Site 1",
      status: "completed",
      color: "red"
    },
    {
      title: "Initiate PV and Tagging of Assets",
      description: "Asset identification and tagging process",
      status: "completed",
      color: "red"
    }
  ];

  const finalPhases = [
    {
      title: "Completion of Reconciliation",
      status: "upcoming",
      color: "slate"
    },
    {
      title: "Exception Management", 
      status: "upcoming",
      color: "slate"
    },
    {
      title: "Stakeholder Buy-in",
      status: "upcoming", 
      color: "slate"
    },
    {
      title: "Books Adjustment and Final Reporting",
      status: "upcoming",
      color: "slate"
    }
  ];

  const getStatusColor = (status: string, color: string) => {
    if (status === "completed") return "bg-emerald-500";
    if (status === "active") return "bg-blue-500";
    return "bg-slate-400";
  };

  const getStatusBg = (status: string, color: string) => {
    if (status === "completed") return "bg-emerald-100 border-emerald-200";
    if (status === "active") return "bg-blue-100 border-blue-200";
    return "bg-slate-100 border-slate-200";
  };

  return (
    <section className="py-32 px-4 bg-gradient-to-br from-slate-50 to-blue-50/30">
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
            <Workflow className="w-4 h-4 mr-3" />
            Implementation Process
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Asset Verification
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Roadmap
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From strategic planning to real-time monitoring, we deliver a phased, audit-ready verification approach tailored to your organization needs
          </p>
        </motion.div>

        {/* Main Timeline */}
        <div className="relative">
          {/* Top Phase Flow */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-16">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`p-4 rounded-2xl border-2 ${getStatusBg(phase.status, phase.color)} hover:shadow-lg transition-all duration-300`}>
                  <div className="text-center">
                    <div className={`w-12 h-12 ${getStatusColor(phase.status, phase.color)} rounded-xl flex items-center justify-center text-white mx-auto mb-3 shadow-lg`}>
                      {phase.icon}
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 mb-2 leading-tight">
                      {phase.title}
                    </h3>
                    {phase.description && (
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {phase.description}
                      </p>
                    )}
                  </div>
                </div>
                
                {/* Arrow for desktop */}
                {index < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom Phases */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {bottomPhases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-2xl bg-red-50 border-2 border-red-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 mb-2 leading-tight">
                      {phase.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final Implementation Phase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">
                  Implementation of Tracking Tool + Continuous Monitoring and Asset Tracking
                </h3>
                <p className="text-center text-green-100 text-lg">
                  Complete deployment with real-time monitoring capabilities
                </p>
              </div>
            </div>
          </motion.div>

          {/* Final Phases Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {finalPhases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="w-10 h-10 bg-slate-400 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 leading-tight">
                      {phase.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
