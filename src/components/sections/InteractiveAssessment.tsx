"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, ArrowLeft, Clock } from "lucide-react";
import PremiumButton from "@/components/PremiumButton";
import { useState } from "react";

export default function InteractiveAssessment() {
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
}
