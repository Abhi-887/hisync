"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Zap, Users, Menu, X } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
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
      setIsScrolled(window.scrollY > 100);
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
    return (
      <nav className="absolute top-0 w-full h-[60px] lg:h-[72px] bg-transparent z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[60px] lg:h-[72px]">
            <div className="w-[130px] h-[32px] bg-white/20 animate-pulse rounded"></div>
            <div className="hidden lg:flex space-x-4">
              {[1,2,3,4,5].map(i => <div key={i} className="w-16 h-8 bg-white/20 animate-pulse rounded"></div>)}
            </div>
            <div className="w-[100px] h-[36px] bg-white/20 animate-pulse rounded"></div>
          </div>
        </div>
      </nav>
    );
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
    <nav
      className={`${isScrolled ? 'fixed top-0 z-[9999] w-full' : 'absolute top-0 w-full z-50'} transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[60px] lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer z-10" aria-label="Home">
            <div className="relative">
              <Image
                src="/images/logo/hisync_logo_black_one.webp"
                alt="HISYNC Logo"
                width={130}
                height={100}
                priority
                className="transition-transform duration-200 hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center space-x-1">
                {/* Home */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isScrolled 
                          ? "bg-transparent hover:bg-gray-100/60 text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 rounded-xl h-9 px-4 text-sm"
                          : "bg-transparent hover:bg-white/20 text-gray-900 hover:text-gray-700 font-medium transition-all duration-300 rounded-xl h-9 px-4 text-sm"
                      )}
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Services */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <button
                      onClick={() => scrollToSection("#services")}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isScrolled 
                          ? "bg-transparent hover:bg-gray-100/60 text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 rounded-xl h-9 px-4 text-sm"
                          : "bg-transparent hover:bg-white/20 text-gray-900 hover:text-gray-700 font-medium transition-all duration-300 rounded-xl h-9 px-4 text-sm"
                      )}
                    >
                      Services
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Product */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/product"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isScrolled 
                          ? "bg-transparent hover:bg-gray-100/60 text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 rounded-xl h-9 px-4 text-sm"
                          : "bg-transparent hover:bg-white/20 text-gray-900 hover:text-gray-700 font-medium transition-all duration-300 rounded-xl h-9 px-4 text-sm"
                      )}
                    >
                      Our Product
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* About */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/about"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isScrolled 
                          ? "bg-transparent hover:bg-gray-100/60 text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 rounded-xl h-9 px-4 text-sm"
                          : "bg-transparent hover:bg-white/20 text-gray-900 hover:text-gray-700 font-medium transition-all duration-300 rounded-xl h-9 px-4 text-sm"
                      )}
                    >
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/contact"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isScrolled 
                          ? "bg-transparent hover:bg-gray-100/60 text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 rounded-xl h-9 px-4 text-sm"
                          : "bg-transparent hover:bg-white/20 text-gray-900 hover:text-gray-700 font-medium transition-all duration-300 rounded-xl h-9 px-4 text-sm"
                      )}
                    >
                      Contact Us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "font-medium px-4 py-2 rounded-xl transition-all duration-200 h-9",
                isScrolled 
                  ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100/60"
                  : "text-gray-900 hover:text-gray-700 hover:bg-white/20"
              )}
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden lg:inline">Schedule Call</span>
              <span className="lg:hidden">Call</span>
            </Button>
            
            <Button 
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 h-9"
            >
              <span className="hidden lg:inline">Get Started</span>
              <span className="lg:hidden">Start</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-xl transition-all duration-200",
              isScrolled 
                ? "hover:bg-gray-100/60" 
                : "hover:bg-white/20"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isScrolled ? 'bg-gray-600' : 'bg-gray-900'
              } ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isScrolled ? 'bg-gray-600' : 'bg-gray-900'
              } ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isScrolled ? 'bg-gray-600' : 'bg-gray-900'
              } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/30 shadow-lg overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 space-y-3 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div>
            <Link
              href="/"
              className="flex items-center justify-between text-gray-700 hover:text-blue-600 font-medium py-3 px-4 rounded-xl hover:bg-gray-50/80 transition-all duration-200 group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
            </Link>
          </div>

          <div className="border border-gray-200/50 rounded-xl p-3 bg-gray-50/30">
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
              {services.map((service) => (
                <button
                  key={service.title}
                  onClick={() => {
                    scrollToSection(service.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center space-x-3 py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-white/70 rounded-lg transition-all duration-200 group w-full text-left text-sm"
                >
                  <div className="text-blue-600">
                    {service.icon}
                  </div>
                  <span className="font-medium">{service.title}</span>
                </button>
              ))}
            </div>
          </div>

          {[
            { name: "Our Product", href: "/product" },
            { name: "About", href: "/about" },
            { name: "Contact Us", href: "/contact" }
          ].map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className="flex items-center justify-between text-gray-700 hover:text-blue-600 font-medium py-3 px-4 rounded-xl hover:bg-gray-50/80 transition-all duration-200 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{item.name}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            </div>
          ))}
          
          <div className="pt-4 border-t border-gray-200/50 space-y-3 mt-6">
            <div>
              <Button
                variant="ghost"
                className="w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 font-medium py-3 px-4 rounded-xl"
              >
                <Phone className="w-4 h-4 mr-3" />
                Schedule Call
              </Button>
            </div>
            
            <div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                <span className="flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
