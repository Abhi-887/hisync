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
  const baseClasses = "font-medium transition-all duration-200 inline-flex items-center justify-center gap-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg focus:ring-blue-500",
    secondary: "bg-slate-100 hover:bg-slate-200 text-slate-900 shadow-sm hover:shadow-md focus:ring-slate-500",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-sm hover:shadow-md focus:ring-blue-500",
    ghost: "text-slate-600 hover:text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm h-9",
    md: "px-6 py-3 text-base h-11",
    lg: "px-8 py-4 text-lg h-13",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={loading}
      onClick={onClick}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!loading && icon && iconPosition === "left" && icon}
      {children}
      {!loading && icon && iconPosition === "right" && icon}
    </motion.button>
  );
}
