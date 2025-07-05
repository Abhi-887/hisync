"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface InteractiveCounterProps {
  end: number | string;
  label: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function InteractiveCounter({ end, label, icon, delay = 0 }: InteractiveCounterProps) {
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
}
