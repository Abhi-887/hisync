"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Phone, ArrowRight, Shield, Zap, Users } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

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
    { name: "Assessment", href: "#assessment" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 z-50 w-full apple-ease ${
        isScrolled
          ? "glass-morphism backdrop-blur-enhanced border-b border-slate-200/60 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-xl flex items-center justify-center shadow-lg ring-2 ring-blue-500/20">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-80"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent tracking-tight">
                HISYNC
              </span>
              <span className="text-xs text-slate-500 font-medium -mt-1">Enterprise Solutions</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                <motion.button
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.2, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative px-4 py-2 rounded-lg text-slate-600 hover:text-blue-600 apple-ease font-medium group flex items-center space-x-1"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronRight className={`w-4 h-4 transition-transform duration-150 ${
                      activeDropdown === item.name ? 'rotate-90' : ''
                    }`} />
                  )}
                  <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 transition-transform duration-200 group-hover:scale-x-100 rounded-full"></span>
                </motion.button>
                
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-slate-200/50 backdrop-blur-xl overflow-hidden"
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
                          className="flex items-center space-x-3 px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 apple-ease group w-full text-left"
                        >
                          <div className="text-blue-600 group-hover:scale-110 transition-transform">
                            {dropdownItem.icon}
                          </div>
                          <div className="flex-1">
                            <span className="font-medium">{dropdownItem.name}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Button
                variant="ghost"
                className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 font-medium px-4 py-2 rounded-lg transition-all duration-200 group"
              >
                <Phone className="w-4 h-4 mr-2 group-hover:scale-105 transition-transform duration-150" />
                Schedule Call
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                <span className="relative flex items-center">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-600" />
            ) : (
              <Menu className="w-6 h-6 text-slate-600" />
            )}
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
            className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-slate-200/60 shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-8 space-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 + 0.1, duration: 0.2 }}
                >
                  <button
                    onClick={() => {
                      scrollToSection(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-between text-slate-700 hover:text-blue-600 font-semibold py-3 px-2 rounded-lg hover:bg-blue-50 apple-ease group w-full text-left"
                  >
                    <span className="text-lg">{item.name}</span>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 apple-ease" />
                  </button>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdownItems?.map((dropdownItem, idx) => (
                        <motion.button
                          key={dropdownItem.name}
                          onClick={() => {
                            scrollToSection(dropdownItem.href);
                            setIsMobileMenuOpen(false);
                          }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + idx * 0.05 + 0.2 }}
                          className="flex items-center space-x-3 py-2 px-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg apple-ease group w-full text-left"
                        >
                          <div className="text-blue-600 group-hover:scale-110 transition-transform">
                            {dropdownItem.icon}
                          </div>
                          <span className="font-medium">{dropdownItem.name}</span>
                        </motion.button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              
              <div className="pt-6 border-t border-slate-200 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-slate-600 hover:text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 rounded-lg group"
                  >
                    <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    Schedule Call
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group">
                    <span className="flex items-center justify-center">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
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
