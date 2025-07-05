"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Phone, ArrowRight, Shield, Zap, Users } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", isExternal: true },
    { 
      name: "Services", 
      href: "#services",
      hasDropdown: true,
      dropdownItems: [
        { name: "ERP Solutions", href: "#erp", icon: <Shield className="w-4 h-4" /> },
        { name: "Process Automation", href: "#automation", icon: <Zap className="w-4 h-4" /> },
        { name: "Consulting", href: "#consulting", icon: <Users className="w-4 h-4" /> },
      ]
    },
    { name: "Our Product", href: "/product", isExternal: true },
    { name: "About", href: "/about", isExternal: true },
    { name: "Contact Us", href: "/contact", isExternal: true },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-2xl border-b border-slate-200/80 shadow-xl shadow-slate-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
          >
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg ring-2 ring-blue-500/20 transition-all duration-200">
                <span className="text-white font-bold text-sm sm:text-lg">H</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-80 animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent tracking-tight">
                HISYNC
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium -mt-0.5 sm:-mt-1 hidden sm:block">Enterprise Solutions</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.isExternal ? (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.2, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <Link
                      href={item.href}
                      className="relative px-4 py-2 rounded-xl text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium group flex items-center space-x-1 hover:bg-blue-50/50"
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-full"></span>
                      </span>
                    </Link>
                  </motion.div>
                ) : (
                  <motion.button
                    onClick={() => {
                      scrollToSection(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.2, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative px-4 py-2 rounded-xl text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium group flex items-center space-x-1 hover:bg-blue-50/50"
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-full"></span>
                    </span>
                    {item.hasDropdown && (
                      <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                        activeDropdown === item.name ? 'rotate-90 text-blue-600' : 'text-slate-400'
                      }`} />
                    )}
                    <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 transition-transform duration-200 group-hover:scale-x-100 rounded-full"></span>
                  </motion.button>
                )}
                
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 w-72 bg-white/98 backdrop-blur-2xl rounded-2xl shadow-2xl border border-slate-200/60 overflow-hidden ring-1 ring-slate-900/5"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdownItems?.map((dropdownItem, idx) => (
                        <motion.button
                          key={dropdownItem.name}
                          onClick={() => {
                            scrollToSection(dropdownItem.href);
                            setActiveDropdown(null);
                          }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center space-x-4 px-5 py-4 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all duration-300 group w-full text-left border-b border-slate-100/50 last:border-b-0"
                        >
                          <div className="text-blue-600 group-hover:scale-110 group-hover:text-blue-700 transition-all duration-300">
                            {dropdownItem.icon}
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold text-sm">{dropdownItem.name}</span>
                            <div className="text-xs text-slate-500 mt-0.5">Professional solutions</div>
                          </div>
                          <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="ghost"
                className="text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 font-medium px-3 lg:px-4 py-2 rounded-xl transition-all duration-300 group text-sm lg:text-base"
              >
                <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="hidden lg:inline">Schedule Call</span>
                <span className="lg:hidden">Call</span>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-4 lg:px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden text-sm lg:text-base">
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  <span className="hidden lg:inline">Get Started</span>
                  <span className="lg:hidden">Start</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2.5 rounded-xl hover:bg-slate-100/80 transition-all duration-300 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-1 left-0 w-6 h-0.5 bg-slate-600 rounded-full origin-center"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute top-3 left-0 w-6 h-0.5 bg-slate-600 rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-5 left-0 w-6 h-0.5 bg-slate-600 rounded-full origin-center"
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-2xl border-b border-slate-200/80 shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.1, duration: 0.3 }}
                  className="border-b border-slate-100/50 last:border-b-0 pb-2 last:pb-0"
                >
                  {item.isExternal ? (
                    <Link
                      href={item.href}
                      className="flex items-center justify-between text-slate-700 hover:text-blue-600 font-semibold py-4 px-4 rounded-xl hover:bg-blue-50/80 transition-all duration-300 group w-full text-left touch-manipulation"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-lg">{item.name}</span>
                      <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        scrollToSection(item.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-between text-slate-700 hover:text-blue-600 font-semibold py-4 px-4 rounded-xl hover:bg-blue-50/80 transition-all duration-300 group w-full text-left touch-manipulation"
                    >
                      <span className="text-lg">{item.name}</span>
                      <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </button>
                  )}
                  {item.hasDropdown && (
                    <div className="ml-4 mt-3 space-y-1 pl-4 border-l-2 border-blue-100">
                      {item.dropdownItems?.map((dropdownItem, idx) => (
                        <motion.button
                          key={dropdownItem.name}
                          onClick={() => {
                            scrollToSection(dropdownItem.href);
                            setIsMobileMenuOpen(false);
                          }}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + idx * 0.05 + 0.2, duration: 0.3 }}
                          className="flex items-center space-x-3 py-3 px-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50/60 rounded-lg transition-all duration-300 group w-full text-left touch-manipulation"
                        >
                          <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                            {dropdownItem.icon}
                          </div>
                          <div className="flex-1">
                            <span className="font-medium text-sm">{dropdownItem.name}</span>
                            <div className="text-xs text-slate-500">Enterprise solution</div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              
              <div className="pt-6 border-t border-slate-200/60 space-y-3 mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 font-medium py-4 px-4 rounded-xl group touch-manipulation"
                  >
                    <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    Schedule Call
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group touch-manipulation">
                    <span className="flex items-center justify-center">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
