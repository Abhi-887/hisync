"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { ReactNode } from "react";

interface PremiumButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function PremiumButton({
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  iconPosition = "right",
  children,
  className = "",
  onClick,
}: PremiumButtonProps) {
  const baseClasses = "font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden group will-change-transform";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl focus:ring-blue-500 border-0",
    secondary: "bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 text-slate-900 shadow-md hover:shadow-lg focus:ring-slate-500 border border-slate-200",
   outline: "border-2 border-blue-600 text-blue-600 shadow-md hover:shadow-lg focus:ring-blue-500 bg-white hover:border-blue-700",
    ghost: "text-slate-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 focus:ring-blue-500 border-0",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm h-9",
    md: "px-6 py-3 text-base h-11",
    lg: "px-8 py-4 text-lg h-14",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={loading}
      onClick={onClick}
    >
      {/* Subtle shine effect for primary variant */}
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      )}
      
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!loading && icon && iconPosition === "left" && (
        <div className="group-hover:scale-105 transition-transform duration-150">
          {icon}
        </div>
      )}
      
      <span className="relative z-10">{children}</span>
      
      {!loading && icon && iconPosition === "right" && (
        <div className="group-hover:scale-105 group-hover:translate-x-0.5 transition-transform duration-150">
          {icon}
        </div>
      )}
    </motion.button>
  );
}
