"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, Shield, Zap, Users, Menu, X } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  // Ensure component is mounted before handling state
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    if (mounted) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [mounted]);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    if (!mounted) return;
    
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mounted]);

  // Prevent rendering issues on SSR
  if (!mounted) {
    return null;
  }

  const services = [
    {
      title: "ERP Solutions",
      href: "#erp",
      description: "Complete enterprise resource planning solutions",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Process Automation",
      href: "#automation", 
      description: "Streamline your business operations",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Consulting",
      href: "#consulting",
      description: "Expert guidance for digital transformation",
      icon: <Users className="w-5 h-5" />
    }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-2xl border-b border-gray-200/20 shadow-2xl shadow-black/5"
          : "bg-transparent"
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[60px] lg:h-[72px]">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex items-center space-x-3 cursor-pointer z-10"
          >
            <div className="relative">
              <div className="w-8 h-8 lg:w-9 lg:h-9 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-xl flex items-center justify-center shadow-lg ring-1 ring-blue-500/20 transition-all duration-200">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-80 animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent tracking-tight">
                HISYNC
              </span>
              <span className="text-[10px] lg:text-xs text-gray-500 font-medium -mt-1 hidden sm:block">Enterprise Solutions</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center space-x-1">
                {/* Home */}
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-gray-100/60 text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 rounded-xl h-9 px-4 text-sm"
                      )}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Services with Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-transparent hover:bg-gray-100/60 text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 rounded-xl data-[state=open]:bg-gray-100/60 data-[state=open]:text-gray-900 h-9 px-4 text-sm"
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => scrollToSection("#services")}
                            className="flex h-full w-full select-none flex-col justify-end rounded-2xl bg-gradient-to-b from-blue-50 to-blue-100 p-6 no-underline outline-none focus:shadow-md group hover:from-blue-100 hover:to-blue-150 transition-all duration-300"
                          >
                            <div className="mb-2 mt-4 text-lg font-semibold text-blue-900">
                              Our Services
                            </div>
                            <p className="text-sm leading-tight text-blue-700 group-hover:text-blue-800">
                              Comprehensive enterprise solutions tailored to your business needs
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </div>
                      {services.map((service) => (
                        <NavigationMenuLink key={service.title} asChild>
                          <button
                            onClick={() => scrollToSection(service.href)}
                            className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-blue-600 focus:bg-accent focus:text-accent-foreground group text-left"
                          >
                            <div className="flex items-center space-x-2 mb-1">
                              <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                                {service.icon}
                              </div>
                              <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-blue-700">
                                {service.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600 group-hover:text-blue-600">
                              {service.description}
                            </p>
                          </button>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Product */}
                <NavigationMenuItem>
                  <Link href="/product" legacyBehavior passHref>
                    <NavigationMenuLink 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-gray-100/60 text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 rounded-xl h-9 px-4 text-sm"
                      )}
                    >
                      Our Product
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* About */}
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-gray-100/60 text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 rounded-xl h-9 px-4 text-sm"
                      )}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-gray-100/60 text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 rounded-xl h-9 px-4 text-sm"
                      )}
                    >
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100/60 font-medium px-4 py-2 rounded-xl transition-all duration-300 h-9"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden lg:inline">Schedule Call</span>
                <span className="lg:hidden">Call</span>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-9"
              >
                <span className="hidden lg:inline">Get Started</span>
                <span className="lg:hidden">Start</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100/60 transition-all duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-gray-200/30 shadow-xl overflow-hidden"
            style={{
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <div className="px-4 py-6 space-y-3 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <Link
                  href="/"
                  className="flex items-center justify-between text-gray-700 hover:text-blue-600 font-medium py-3 px-4 rounded-xl hover:bg-gray-50/80 transition-all duration-200 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Home</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className="border border-gray-200/50 rounded-xl p-3 bg-gray-50/30"
              >
                <button
                  onClick={() => {
                    scrollToSection("#services");
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between text-gray-800 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-white/60 transition-all duration-200 group w-full text-left mb-2"
                >
                  <span>Services</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                </button>
                
                <div className="space-y-1 pl-3">
                  {services.map((service, idx) => (
                    <motion.button
                      key={service.title}
                      onClick={() => {
                        scrollToSection(service.href);
                        setIsMobileMenuOpen(false);
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.05, duration: 0.3 }}
                      className="flex items-center space-x-3 py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-white/70 rounded-lg transition-all duration-200 group w-full text-left text-sm"
                    >
                      <div className="text-blue-600">
                        {service.icon}
                      </div>
                      <span className="font-medium">{service.title}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {[
                { name: "Our Product", href: "/product" },
                { name: "About", href: "/about" },
                { name: "Contact Us", href: "/contact" }
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between text-gray-700 hover:text-blue-600 font-medium py-3 px-4 rounded-xl hover:bg-gray-50/80 transition-all duration-200 group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </motion.div>
              ))}
              
              <div className="pt-4 border-t border-gray-200/50 space-y-3 mt-6">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 font-medium py-3 px-4 rounded-xl"
                  >
                    <Phone className="w-4 h-4 mr-3" />
                    Schedule Call
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.3 }}
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                    <span className="flex items-center justify-center">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
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
