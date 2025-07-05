"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Target, CheckCircle, ArrowRight, ArrowLeft, Search, BarChart3, Zap, Users, Award, TrendingUp, Settings, Database, Cpu, Play, Eye, Star, Clock, Shield, Lightbulb, MousePointer, Rocket, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import PremiumButton from "@/components/PremiumButton";
import { useState, useEffect } from "react";

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

// Interactive Counter Component
const InteractiveCounter = ({ end, label, icon, delay = 0 }: { end: number | string, label: string, icon: React.ReactNode, delay?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        if (typeof end === 'number') {
          const increment = end / 100;
          let current = 0;
          const counter = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(counter);
            } else {
              setCount(Math.floor(current));
            }
          }, 20);
          return () => clearInterval(counter);
        }
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, end, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setIsVisible(true)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="text-center group cursor-pointer"
    >
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 mb-4"
      >
        {icon}
      </motion.div>
      <div className="text-4xl md:text-5xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
        {typeof end === 'string' ? end : count}
        {typeof end === 'number' && end > 100 ? '+' : ''}
      </div>
      <div className="text-slate-600 font-medium group-hover:text-slate-700 transition-colors duration-300">
        {label}
      </div>
    </motion.div>
  );
};

// Interactive Assessment Component
const InteractiveAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "How often do manual processes slow down your team?",
      options: ["Daily", "Weekly", "Monthly", "Rarely"],
      type: "single"
    },
    {
      id: 2,
      question: "What's your biggest operational challenge?",
      options: ["Data silos", "Process inefficiency", "Lack of automation", "Poor visibility"],
      type: "single"
    },
    {
      id: 3,
      question: "How do you currently track performance?",
      options: ["Excel spreadsheets", "Basic dashboards", "Multiple tools", "Manual reports"],
      type: "single"
    },
    {
      id: 4,
      question: "What's your company size?",
      options: ["10-50 employees", "50-200 employees", "200-1000 employees", "1000+ employees"],
      type: "single"
    }
  ];

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    
    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setIsCompleted(true);
      }
    }, 500);
  };

  const startAssessment = () => {
    setIsStarted(true);
    setCurrentQuestion(0);
    setAnswers({});
    setIsCompleted(false);
  };

  const resetAssessment = () => {
    setIsStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200/50 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-8 h-8 text-white" />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Assessment Complete! 🎉
        </h3>
        <p className="text-slate-600 mb-6">
          Based on your answers, we've identified key areas where HiSync can help optimize your operations.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-100">
            <div className="text-blue-600 font-semibold">Efficiency Boost</div>
            <div className="text-2xl font-bold text-slate-900">Up to 87%</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-green-100">
            <div className="text-green-600 font-semibold">Time Savings</div>
            <div className="text-2xl font-bold text-slate-900">15+ hrs/week</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PremiumButton 
            size="lg"
            className="px-8 py-3 bg-green-600 hover:bg-green-700"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Get Detailed Report
          </PremiumButton>
          <PremiumButton 
            variant="outline"
            size="lg"
            className="px-8 py-3"
            onClick={resetAssessment}
          >
            Retake Assessment
          </PremiumButton>
        </div>
      </motion.div>
    );
  }

  if (!isStarted) {
    return (
      <div className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 p-6 rounded-2xl border border-blue-100/50 shadow-inner">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-blue-800 font-medium">
            No personal information required - just honest answers about your daily realities
          </p>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">3 min</span>
          </div>
        </div>
        
        {/* Preview Questions */}
        <div className="space-y-3 mb-6">
          {questions.slice(0, 3).map((question, index) => (
            <motion.div 
              key={question.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl p-4 border cursor-pointer transition-all duration-300 ${
                index === 0 
                  ? 'bg-white/80 backdrop-blur-sm border-blue-100/50 hover:bg-white hover:shadow-md' 
                  : `bg-white/${60 - index * 20} backdrop-blur-sm border-blue-100/${30 - index * 10} opacity-${70 - index * 20}`
              }`}
              onClick={() => index === 0 && startAssessment()}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                  index === 0 ? 'bg-blue-500' : 'bg-slate-300'
                }`}>
                  {index + 1}
                </div>
                <p className={`font-medium ${
                  index === 0 ? 'text-slate-700' : 'text-slate-500'
                }`}>
                  {question.question}
                </p>
              </div>
              {index === 0 && (
                <div className="mt-2 flex space-x-2">
                  {question.options.map((option, optIndex) => (
                    <motion.button
                      key={optIndex}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        startAssessment();
                      }}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <PremiumButton 
            size="lg"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            icon={<ArrowRight className="w-5 h-5" />}
            onClick={startAssessment}
          >
            Start Assessment
          </PremiumButton>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-8 border border-blue-100/50 shadow-lg"
    >
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-700">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-blue-600">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
          />
        </div>
      </div>

      {/* Question */}
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <h3 className="text-xl font-bold text-slate-900 mb-6">
          {currentQ.question}
        </h3>
        
        <div className="grid gap-3">
          {currentQ.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswer(currentQ.id, option)}
              className="text-left p-4 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-xl hover:bg-white hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 border-2 border-blue-300 rounded-full group-hover:border-blue-500 transition-colors">
                  <div className="w-full h-full bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity scale-0 group-hover:scale-75" />
                </div>
                <span className="font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                  {option}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Back Button */}
      {currentQuestion > 0 && (
        <div className="flex justify-start">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentQuestion(prev => prev - 1)}
            className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-all duration-200 font-medium group"
          >
            <motion.div
              whileHover={{ x: -2 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowLeft className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </motion.div>
            <span>Previous Question</span>
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};

// Interactive Demo Preview Component
const DemoPreview = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const demoTabs = [
    {
      title: "Dashboard Analytics",
      description: "Real-time business insights",
      color: "blue",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: "Process Automation",
      description: "Streamlined workflows",
      color: "green",
      icon: <Settings className="w-5 h-5" />
    },
    {
      title: "Custom ERP",
      description: "Tailored solutions",
      color: "purple",
      icon: <Database className="w-5 h-5" />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveTab((prev) => (prev + 1) % demoTabs.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 shadow-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
      
      {/* Demo Tabs */}
      <div className="relative z-10 space-y-6">
        <div className="flex space-x-2 mb-6">
          {demoTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                activeTab === index
                  ? 'bg-white/20 text-white shadow-lg'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {tab.icon}
              <span className="font-medium">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-semibold text-white">
                {demoTabs[activeTab].title}
              </h4>
              <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                Live Demo
              </Badge>
            </div>
            <p className="text-white/80 mb-4">
              {demoTabs[activeTab].description}
            </p>
            
            {/* Mock Interface */}
            <div className="bg-white/5 rounded-xl p-4 space-y-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="flex-1 h-2 bg-white/20 rounded-full"></div>
                  <div className="w-8 h-2 bg-blue-400/50 rounded-full"></div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 section-transition">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden smooth-animation">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400/15 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl rotate-12 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl rotate-45 animate-bounce delay-500"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-300"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-700"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400/15 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl rotate-12 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl rotate-45 animate-bounce delay-500"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-300"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-700"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge 
                variant="outline" 
                className="mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm text-blue-700 border-blue-200 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Award className="w-4 h-4 mr-2" />
                Trusted by Fortune 500 Companies
              </Badge>
            </motion.div>
            
            <motion.h1 
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight tracking-tight"
            >
              Transform Your Business
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                Holistically
              </span>
            </motion.h1>
            
            <motion.p 
              {...fadeInUp}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
            >
              We are your agile end-to-end partner: Ex-Big 4 consultants streamline 
              operations and elite engineers build custom ERP Solutions. 
              <span className="text-slate-900 font-medium">One Team</span> for any Business Size, 
              designed to scale with you.
            </motion.p>
            
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
            >
              <PremiumButton 
                size="lg" 
                className="px-8 py-4 text-lg shadow-xl hover:shadow-2xl group"
                onClick={() => {
                  // Add interactive click tracking
                  console.log("Get Started clicked");
                }}
              >
                <span className="flex items-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </PremiumButton>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <PremiumButton 
                  variant="outline" 
                  size="lg"
                  icon={<Play className="w-5 h-5" />}
                  iconPosition="left"
                  className="px-8 py-4 text-lg bg-white/80 backdrop-blur-sm border-2 border-blue-200 text-blue-600 hover:bg-white hover:text-blue-700 shadow-lg hover:shadow-xl"
                  onClick={() => {
                    setShowTooltip('demo');
                    setTimeout(() => setShowTooltip(null), 3000);
                  }}
                >
                  Watch Demo
                </PremiumButton>
                
                {/* Interactive Tooltip */}
                <AnimatePresence>
                  {showTooltip === 'demo' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-4 py-2 rounded-lg shadow-xl z-50"
                    >
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm font-medium">2-minute demo coming soon!</span>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
            
            {/* Interactive Stats Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { value: "500+", label: "Clients", icon: <Users className="w-5 h-5" /> },
                { value: "87%", label: "Success Rate", icon: <TrendingUp className="w-5 h-5" /> },
                { value: "24/7", label: "Support", icon: <Shield className="w-5 h-5" /> },
                { value: "3.2x", label: "ROI", icon: <Rocket className="w-5 h-5" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => {
                    setShowTooltip(`stat-${index}`);
                    setTimeout(() => setShowTooltip(null), 2000);
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                      {stat.icon}
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                    {stat.label}
                  </div>
                  
                  {/* Tooltip */}
                  <AnimatePresence>
                    {showTooltip === `stat-${index}` && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-3 py-1 rounded-lg shadow-xl z-50"
                      >
                        <span className="text-xs font-medium">Click for details</span>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-slate-900"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Section 2: Business Barriers Assessment */}
      <section id="assessment" className="relative py-24 px-4 bg-gradient-to-br from-slate-50 via-slate-100/50 to-gray-50 overflow-hidden section-transition">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute top-10 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-300/20 to-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-300/15 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-10 w-48 h-48 bg-gradient-to-br from-cyan-300/20 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-16 left-1/3 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-transparent rounded-xl rotate-45 animate-bounce delay-300"></div>
          <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-gradient-to-br from-indigo-400/10 to-transparent rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-1/3 left-10 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-transparent rounded-2xl rotate-12 animate-bounce delay-1000"></div>
          
          {/* Floating Dots */}
          <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-blue-400/60 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-1/4 right-1/2 w-1.5 h-1.5 bg-indigo-400/60 rounded-full animate-ping delay-1200"></div>
          <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-purple-400/60 rounded-full animate-ping delay-800"></div>
          
          {/* Subtle Grid */}
          <div className="absolute inset-0 opacity-[0.01]">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              We understand what's holding 
              <br className="hidden md:block" />
              your business back
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Every business faces hidden obstacles. We reveal them and build your path forward.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
              {/* Card Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 rounded-3xl"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-2xl group-hover:w-40 group-hover:h-40 transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-indigo-200/20 to-transparent rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-700"></div>
              
              <div className="relative z-10">
                <CardHeader className="text-center pb-8">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mx-auto mb-6 h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  >
                    <Target className="h-8 w-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    Pinpoint Your Growth Barriers in 3 Minutes
                  </CardTitle>
                  <CardDescription className="text-lg text-slate-600 font-light">
                    Take our quick, confidential assessment to:
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-start space-x-4 group/item"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover/item:shadow-md transition-all duration-300">
                          <span className="text-blue-600 text-lg">🎯</span>
                        </div>
                        <p className="text-slate-700 font-medium leading-relaxed group-hover/item:text-slate-900 transition-colors">
                          See exactly where processes, technology, data, or people hold you back
                        </p>
                      </motion.div>
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-start space-x-4 group/item"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover/item:shadow-md transition-all duration-300">
                          <span className="text-blue-600 text-lg">📊</span>
                        </div>
                        <p className="text-slate-700 font-medium leading-relaxed group-hover/item:text-slate-900 transition-colors">
                          Get instant visibility into your operational health
                        </p>
                      </motion.div>
                    </div>
                    <div className="space-y-6">
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-start space-x-4 group/item"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover/item:shadow-md transition-all duration-300">
                          <span className="text-blue-600 text-lg">🔍</span>
                        </div>
                        <p className="text-slate-700 font-medium leading-relaxed group-hover/item:text-slate-900 transition-colors">
                          Identify your single biggest constraint
                        </p>
                      </motion.div>
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-start space-x-4 group/item"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover/item:shadow-md transition-all duration-300">
                          <span className="text-blue-600 text-lg">🚀</span>
                        </div>
                        <p className="text-slate-700 font-medium leading-relaxed group-hover/item:text-slate-900 transition-colors">
                          Unlock tailored recommendations for your business
                        </p>
                      </motion.div>
                    </div>
                  </div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 p-6 rounded-2xl border border-blue-100/50 shadow-inner"
                  >
                    <p className="text-sm text-blue-800 font-medium text-center">
                      No personal information required - just honest answers about your daily realities
                    </p>
                  </motion.div>
                  
                  {/* Interactive Assessment Widget */}
                  <InteractiveAssessment />
                  
                  <div className="text-center pt-6">
                    <motion.div className="relative inline-block">
                      <PremiumButton 
                        size="lg" 
                        className="px-12 py-4 text-lg shadow-xl hover:shadow-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 group"
                        icon={<ArrowRight className="w-5 h-5" />}
                        onClick={() => {
                          setShowTooltip('assessment-start');
                          setTimeout(() => setShowTooltip(null), 3000);
                        }}
                      >
                        Start Your Assessment
                      </PremiumButton>
                      
                      {/* Floating indicators */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full opacity-75" />
                      
                      <AnimatePresence>
                        {showTooltip === 'assessment-start' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.8 }}
                            className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-4 py-2 rounded-lg shadow-xl z-50"
                          >
                            <div className="flex items-center space-x-2">
                              <Lightbulb className="w-4 h-4 text-yellow-300" />
                              <span className="text-sm font-medium">Get personalized insights!</span>
                            </div>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Integrated Transformation Partner - Ultra Modern Enterprise 2025 */}
      <section id="process" className="relative py-32 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 overflow-hidden">
        {/* Ultra Modern Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Gradient Mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 animate-pulse"></div>
          
          {/* 3D Floating Elements */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400/10 to-blue-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
          
          {/* Geometric Glass Morphism */}
          <div className="absolute top-32 right-1/4 w-64 h-64 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-3xl rounded-3xl rotate-12 border border-white/20 animate-float"></div>
          <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-3xl rounded-2xl rotate-45 border border-white/20 animate-float delay-500"></div>
          
          {/* Neural Network Style Grid */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
              `,
            }}></div>
          </div>
          
          {/* Floating Particles */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/60 rounded-full animate-ping delay-300"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-indigo-400/60 rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-1/3 left-2/3 w-2.5 h-2.5 bg-cyan-400/60 rounded-full animate-ping delay-1100"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            {/* Enterprise Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <Badge 
                  variant="outline" 
                  className="px-6 py-3 bg-white/80 backdrop-blur-xl text-blue-700 border border-blue-200/50 font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 text-sm tracking-wide"
                >
                  <Building2 className="w-4 h-4 mr-2" />
                  TRUSTED BY FORTUNE 500 COMPANIES
                </Badge>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-cyan-400/20 rounded-2xl blur-xl animate-pulse"></div>
              </div>
            </motion.div>
            
            {/* Main Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-tight"
            >
              Your Integrated Transformation
              <br className="hidden md:block" />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  Partner
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 rounded-full"
                />
              </span>
            </motion.h2>
            
            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-slate-600 max-w-5xl mx-auto font-light leading-relaxed"
            >
              We don't just identify problems — we redesign processes and build custom 
              technology solutions in one seamless engagement. 
              <span className="text-slate-900 font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                No handoffs. No misalignment. Just results.
              </span>
            </motion.p>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6 mt-12"
            >
              {[
                { icon: <Shield className="w-5 h-5" />, text: "SOC 2 Certified", color: "blue" },
                { icon: <Award className="w-5 h-5" />, text: "ISO 27001", color: "indigo" },
                { icon: <CheckCircle className="w-5 h-5" />, text: "GDPR Compliant", color: "cyan" },
                { icon: <Globe className="w-5 h-5" />, text: "24/7 Global Support", color: "purple" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-${item.color}-200/50 text-${item.color}-700 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Service Cards - Ultra Modern Glass Morphism */}
          <div className="mb-20">
            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid lg:grid-cols-3 gap-8 lg:gap-12"
            >
              {[
                {
                  icon: <Search className="h-10 w-10 text-white" />,
                  title: "Strategic Diagnosis",
                  description: "Ex-Big 4 consultants identify root causes and design optimal processes",
                  features: ["Process Analysis & Optimization", "Technology Gap Assessment", "Data Flow Mapping", "Organizational Readiness"],
                  gradient: "from-blue-500 via-blue-600 to-indigo-600",
                  shadowColor: "shadow-blue-500/25",
                  borderGradient: "from-blue-400/50 via-blue-500/50 to-indigo-500/50",
                  glowColor: "blue-400/20"
                },
                {
                  icon: <Cpu className="h-10 w-10 text-white" />,
                  title: "Custom Technology Build",
                  description: "Elite engineers create tailored ERP solutions that fit your exact needs",
                  features: ["Custom ERP Development", "API Integration & Automation", "Cloud-Native Architecture", "Real-time Analytics"],
                  gradient: "from-indigo-500 via-purple-600 to-cyan-600",
                  shadowColor: "shadow-indigo-500/25",
                  borderGradient: "from-indigo-400/50 via-purple-500/50 to-cyan-500/50",
                  glowColor: "indigo-400/20"
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-white" />,
                  title: "Seamless Implementation",
                  description: "One team ensures perfect alignment from strategy to execution",
                  features: ["Change Management", "Training & Support", "Performance Monitoring", "Continuous Optimization"],
                  gradient: "from-cyan-500 via-blue-600 to-indigo-600",
                  shadowColor: "shadow-cyan-500/25",
                  borderGradient: "from-cyan-400/50 via-blue-500/50 to-indigo-500/50",
                  glowColor: "cyan-400/20"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${item.borderGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700`}></div>
                  
                  {/* Main Card */}
                  <Card className={`relative border-0 ${item.shadowColor} hover:shadow-2xl transition-all duration-700 h-full group rounded-3xl overflow-hidden backdrop-blur-xl bg-white/40 hover:bg-white/60 transform hover:-translate-y-4 hover:scale-[1.02]`}>
                    {/* Glass Morphism Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/30 to-white/60 rounded-3xl backdrop-blur-xl"></div>
                    
                    {/* Dynamic Background Elements */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${item.glowColor} to-transparent rounded-full blur-2xl group-hover:w-48 group-hover:h-48 transition-all duration-700`}></div>
                    <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-${item.glowColor} to-transparent rounded-full blur-2xl group-hover:w-36 group-hover:h-36 transition-all duration-700`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-8 lg:p-10">
                      {/* Icon */}
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="mb-8"
                      >
                        <div className={`relative inline-block p-4 bg-gradient-to-br ${item.gradient} rounded-3xl ${item.shadowColor} group-hover:shadow-xl transition-all duration-500`}>
                          {item.icon}
                          <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        </div>
                      </motion.div>
                      
                      {/* Title */}
                      <CardTitle className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors tracking-tight">
                        {item.title}
                      </CardTitle>
                      
                      {/* Description */}
                      <CardDescription className="text-slate-600 font-medium leading-relaxed group-hover:text-slate-700 transition-colors mb-8 text-base">
                        {item.description}
                      </CardDescription>
                      
                      {/* Features List */}
                      <ul className="space-y-4">
                        {item.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex} 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * featureIndex }}
                            viewport={{ once: true }}
                            whileHover={{ x: 8, scale: 1.02 }}
                            className="flex items-center text-slate-700 group-hover:text-slate-800 transition-all duration-300 group/item cursor-pointer"
                          >
                            <motion.div
                              whileHover={{ scale: 1.3, rotate: 360 }}
                              transition={{ type: "spring", stiffness: 500, duration: 0.6 }}
                              className="flex-shrink-0 mr-4"
                            >
                              <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                                <CheckCircle className="h-3 w-3 text-white" />
                              </div>
                            </motion.div>
                            <span className="font-semibold text-sm lg:text-base">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      {/* Interactive CTA */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-8 pt-6 border-t border-slate-200/50"
                      >
                        <PremiumButton 
                          variant="ghost" 
                          className="group/btn w-full justify-center text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 transition-all duration-300 font-semibold"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </PremiumButton>
                      </motion.div>
                    </div>
                    
                    {/* Animated Border */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.borderGradient} p-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500`}>
                      <div className="w-full h-full bg-white/40 backdrop-blur-xl rounded-3xl"></div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Enterprise Results Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 lg:p-16 shadow-2xl overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-cyan-500/10 rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-3xl lg:text-4xl font-bold text-white mb-4"
                >
                  Enterprise Results That Matter
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-xl text-white/80 max-w-2xl mx-auto"
                >
                  Trusted by industry leaders to deliver measurable transformation
                </motion.p>
              </div>
              
              {/* Results Grid */}
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { value: "500+", label: "Enterprise Clients", icon: <Building2 className="w-6 h-6" /> },
                  { value: "87%", label: "Efficiency Increase", icon: <TrendingUp className="w-6 h-6" /> },
                  { value: "3.2x", label: "Average ROI", icon: <Target className="w-6 h-6" /> },
                  { value: "24/7", label: "Global Support", icon: <Shield className="w-6 h-6" /> }
                ].map((stat, index) => (
                  <InteractiveCounter 
                    key={index}
                    end={stat.value}
                    label={stat.label}
                    icon={stat.icon}
                    delay={index * 200}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
                      {
                        title: "Real-Time Analytics",
                        description: "Live dashboards that update automatically",
                        icon: <BarChart3 className="w-5 h-5 text-blue-600" />
                      },
                      {
                        title: "Drag & Drop Workflows",
                        description: "Build processes visually without coding",
                        icon: <MousePointer className="w-5 h-5 text-green-600" />
                      },
                      {
                        title: "One-Click Integrations",
                        description: "Connect with 500+ business tools instantly",
                        icon: <Globe className="w-5 h-5 text-purple-600" />
                      }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        whileHover={{ x: 5 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/50 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
                        onClick={() => {
                          setShowTooltip(`feature-${index}`);
                          setTimeout(() => setShowTooltip(null), 2000);
                        }}
                      >
                        <div className="flex-shrink-0 mt-1">
                          {feature.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-900 mb-1">
                            {feature.title}
                          </h5>
                          <p className="text-slate-600 text-sm">
                            {feature.description}
                          </p>
                        </div>
                        
                        {/* Interactive tooltip */}
                        <AnimatePresence>
                          {showTooltip === `feature-${index}` && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg shadow-xl z-50"
                            >
                              <div className="flex items-center space-x-2">
                                <Star className="w-4 h-4 text-yellow-300" />
                                <span className="text-sm font-medium">Try it now!</span>
                              </div>
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-slate-900"></div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="pt-6"
                >
                  <PremiumButton 
                    size="lg"
                    className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl"
                    icon={<Play className="w-5 h-5" />}
                    iconPosition="left"
                    onClick={() => {
                      setShowTooltip('full-demo');
                      setTimeout(() => setShowTooltip(null), 3000);
                    }}
                  >
                    Request Full Demo
                  </PremiumButton>
                  
                  <AnimatePresence>
                    {showTooltip === 'full-demo' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg"
                      >
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-700 font-medium">
                            We'll schedule a personalized demo within 24 hours!
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <Badge 
                    variant="outline" 
                    className="px-4 py-2 bg-white/80 backdrop-blur-sm text-slate-700 border-slate-200 font-medium shadow-sm"
                  >
                    <Award className="w-4 h-4 mr-2" />
                    Enterprise Impact
                  </Badge>
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                  Proven Results at Scale
                </h3>
                <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
                  Our integrated approach delivers measurable outcomes for enterprise clients
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                <InteractiveCounter 
                  end={500} 
                  label="Companies Transformed" 
                  icon={<Building2 className="w-8 h-8" />} 
                  delay={0}
                />
                <InteractiveCounter 
                  end={87} 
                  label="Efficiency Improvement" 
                  icon={<TrendingUp className="w-8 h-8" />} 
                  delay={200}
                />
                <InteractiveCounter 
                  end="3.2x" 
                  label="ROI Average" 
                  icon={<BarChart3 className="w-8 h-8" />} 
                  delay={400}
                />
                <InteractiveCounter 
                  end="24/7" 
                  label="Support & Monitoring" 
                  icon={<Settings className="w-8 h-8" />} 
                  delay={600}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-indigo-600/20"></div>
        
        {/* Elegant Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-400/8 to-transparent rounded-full blur-3xl"></div>
          
          {/* Minimal Grid */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px'
            }}></div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge 
                variant="outline" 
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border-white/20 font-medium shadow-lg"
              >
                <Zap className="w-4 h-4 mr-2" />
                Start Your Digital Journey
              </Badge>
            </motion.div>
            
            {/* Headline */}
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Ready to Transform
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Your Business?
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-xl text-blue-100 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
              Join leading companies like <span className="font-medium text-white">Airtel</span> and <span className="font-medium text-white">AXIS Bank</span> who trust us with their digital transformation journey.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <PremiumButton 
                size="lg"
                className="bg-white text-slate-900 hover:bg-blue-50 px-10 py-5 text-lg font-semibold shadow-2xl hover:shadow-white/20 border-0"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Your Transformation
              </PremiumButton>
              <PremiumButton 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-5 text-lg font-medium"
                icon={<Users className="w-5 h-5" />}
                iconPosition="left"
              >
                Schedule Free Consultation
              </PremiumButton>
            </div>
            
            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 pt-8 border-t border-white/10"
            >
              <div className="flex items-center space-x-3 text-blue-100">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="font-medium">Free 30-min consultation</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="font-medium">No upfront commitment</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="font-medium">ROI guarantee</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden section-transition">
        <div className="absolute inset-0 overflow-hidden smooth-animation">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 px-4 py-2 bg-white/10 text-white border-white/20">
              About HiSync
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Trusted
              <span className="text-blue-400"> Technology Partner</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Combining ex-Big 4 consulting expertise with elite engineering talent to deliver transformative business solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Why Choose HiSync?
              </h3>
              
              {[
                {
                  title: "Proven Expertise",
                  description: "Our team combines years of Big 4 consulting experience with cutting-edge technical skills",
                  icon: <Award className="w-6 h-6" />
                },
                {
                  title: "Holistic Approach",
                  description: "We don't just build software - we transform your entire business ecosystem",
                  icon: <Target className="w-6 h-6" />
                },
                {
                  title: "Scalable Solutions",
                  description: "Built to grow with your business, from startup to enterprise scale",
                  icon: <TrendingUp className="w-6 h-6" />
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white group-hover:scale-110 apple-ease">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-6">Our Mission</h4>
                <p className="text-white/80 leading-relaxed mb-6">
                  To democratize enterprise-grade technology solutions for businesses of all sizes, 
                  making advanced ERP systems and process automation accessible and affordable.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-400">500+</div>
                    <div className="text-white/60 text-sm">Clients Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400">87%</div>
                    <div className="text-white/60 text-sm">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400">24/7</div>
                    <div className="text-white/60 text-sm">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer - Stripe/Apple Style */}
      <footer className="bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-6 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <span className="text-2xl font-bold text-slate-900">HiSync</span>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-slate-600 leading-relaxed mb-8 max-w-sm"
              >
                Integrated transformation partner for enterprise success. Strategic consulting meets custom technology solutions.
              </motion.p>
              
              {/* Newsletter */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                  Stay Updated
                </h4>
                <div className="flex max-w-sm">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-l-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <button className="px-6 py-3 bg-slate-900 text-white rounded-r-xl hover:bg-slate-800 transition-colors text-sm font-medium">
                    Subscribe
                  </button>
                </div>
              </motion.div>
            </div>
            
            {/* Links Grid */}
            <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Services",
                  links: [
                    { name: "Business Consulting", href: "#" },
                    { name: "Custom ERP Solutions", href: "#" },
                    { name: "Process Optimization", href: "#" },
                    { name: "Digital Transformation", href: "#" },
                    { name: "Cloud Migration", href: "#" }
                  ]
                },
                {
                  title: "Company", 
                  links: [
                    { name: "About Us", href: "#" },
                    { name: "Our Team", href: "#" },
                    { name: "Case Studies", href: "#" },
                    { name: "Careers", href: "#" },
                    { name: "News", href: "#" }
                  ]
                },
                {
                  title: "Resources",
                  links: [
                    { name: "Documentation", href: "#" },
                    { name: "Help Center", href: "#" },
                    { name: "API Reference", href: "#" },
                    { name: "System Status", href: "#" },
                    { name: "Partners", href: "#" }
                  ]
                },
                {
                  title: "Support",
                  links: [
                    { name: "Contact Sales", href: "#" },
                    { name: "Get Support", href: "#" },
                    { name: "Schedule Demo", href: "#" },
                    { name: "Community", href: "#" },
                    { name: "Training", href: "#" }
                  ]
                }
              ].map((column, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                    {column.title}
                  </h4>
                  <ul className="space-y-3">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.href} 
                          className="text-slate-600 hover:text-slate-900 transition-colors text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-200 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
              
              {/* Left Side - Copyright & Social */}
              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <p className="text-slate-500 text-sm">
                  © 2025 HiSync, Inc. All rights reserved.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-6">
                  {[
                    { name: "LinkedIn", href: "#", icon: "linkedin" },
                    { name: "Twitter", href: "#", icon: "twitter" },
                    { name: "GitHub", href: "#", icon: "github" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="text-slate-400 hover:text-slate-600 transition-colors"
                      aria-label={social.name}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        {social.icon === "linkedin" && (
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        )}
                        {social.icon === "twitter" && (
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        )}
                        {social.icon === "github" && (
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Right Side - Legal Links */}
              <div className="flex flex-wrap gap-8">
                {[
                  { name: "Privacy Policy", href: "#" },
                  { name: "Terms of Service", href: "#" },
                  { name: "Cookie Policy", href: "#" },
                  { name: "Security", href: "#" }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-slate-500 hover:text-slate-700 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
