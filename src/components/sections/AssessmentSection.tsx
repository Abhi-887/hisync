'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Zap, Target, BarChart3 } from 'lucide-react';

export default function AssessmentSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What's your current digital transformation stage?",
      options: [
        "Just getting started",
        "Have some digital processes",
        "Well-established digital presence",
        "Leading digital innovator"
      ]
    },
    {
      question: "What's your biggest challenge in digital transformation?",
      options: [
        "Lack of technical expertise",
        "Budget constraints",
        "Resistance to change",
        "Integration complexity"
      ]
    },
    {
      question: "What's your primary business goal?",
      options: [
        "Improve operational efficiency",
        "Enhance customer experience",
        "Increase revenue growth",
        "Reduce operational costs"
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const getRecommendation = () => {
    // Simple logic based on answers
    if (answers.includes("Just getting started")) {
      return {
        title: "Foundation Builder",
        description: "Start with core digital infrastructure and basic automation",
        priority: "High",
        timeframe: "3-6 months",
        investment: "Moderate",
        icon: <Target className="w-6 h-6" />
      };
    } else if (answers.includes("Well-established digital presence")) {
      return {
        title: "Advanced Optimizer",
        description: "Focus on AI integration and advanced analytics",
        priority: "Medium",
        timeframe: "6-12 months",
        investment: "High",
        icon: <BarChart3 className="w-6 h-6" />
      };
    } else {
      return {
        title: "Strategic Accelerator",
        description: "Implement comprehensive digital transformation strategy",
        priority: "High",
        timeframe: "6-18 months",
        investment: "Significant",
        icon: <Zap className="w-6 h-6" />
      };
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Free Assessment
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-indigo-600 bg-clip-text text-transparent">
            Discover Your Digital Potential
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take our interactive assessment to get personalized recommendations for your digital transformation journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0">
            {!showResults ? (
              <CardContent className="p-8">
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Question {currentQuestion + 1} of {questions.length}
                    </h3>
                    <div className="flex space-x-2">
                      {questions.map((_, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 rounded-full ${
                            index <= currentQuestion ? 'bg-blue-500' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">
                    {questions[currentQuestion].question}
                  </h4>
                  <div className="space-y-4">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        className="w-full p-4 text-left bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-gray-800 font-medium">{option}</span>
                          <ArrowRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            ) : (
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Assessment Complete!
                  </h3>
                  <p className="text-gray-600">
                    Here's your personalized digital transformation roadmap
                  </p>
                </div>

                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                  <CardHeader className="text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white">
                        {getRecommendation().icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-blue-900">
                      {getRecommendation().title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 text-center">
                      {getRecommendation().description}
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">Priority</div>
                        <Badge className="bg-red-100 text-red-800">
                          {getRecommendation().priority}
                        </Badge>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">Timeframe</div>
                        <Badge className="bg-blue-100 text-blue-800">
                          {getRecommendation().timeframe}
                        </Badge>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">Investment</div>
                        <Badge className="bg-green-100 text-green-800">
                          {getRecommendation().investment}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex justify-center space-x-4 mt-6">
                      <Button 
                        onClick={resetAssessment}
                        variant="outline"
                        className="border-blue-500 text-blue-600 hover:bg-blue-50"
                      >
                        Retake Assessment
                      </Button>
                      <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                        Get Detailed Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
