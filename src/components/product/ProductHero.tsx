"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowLeft, Smartphone, Monitor, Sparkles, TrendingUp, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(useGSAP);

export default function ProductHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const masterTl = gsap.timeline();

    // Set initial states for dramatic reveals
    gsap.set([leftContentRef.current, rightContentRef.current], { 
      opacity: 0, 
      scale: 0.9,
      filter: "blur(10px)"
    });
    
    gsap.set(badgeRef.current, { 
      opacity: 0, 
      scale: 0.3, 
      rotationX: -90,
      transformOrigin: "center bottom"
    });
    
    gsap.set(titleRef.current?.children || [], { 
      opacity: 0, 
      y: 100, 
      rotationX: 90,
      transformOrigin: "center bottom"
    });

    // Dramatic entrance sequence
    masterTl
      // Left content dramatic reveal
      .to(leftContentRef.current, {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out"
      })
      
      // Badge 3D flip entrance
      .to(badgeRef.current, {
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 0.8,
        ease: "back.out(2)",
        transformOrigin: "center bottom"
      }, "-=0.8")
      
      // Title letters reveal with 3D effect
      .to(titleRef.current?.children || [], {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        transformOrigin: "center bottom"
      }, "-=0.4")
      
      // Description with typewriter effect
      .fromTo(descriptionRef.current, {
        opacity: 0,
        clipPath: "inset(0 100% 0 0)"
      }, {
        opacity: 1,
        clipPath: "inset(0 0% 0 0)",
        duration: 1.5,
        ease: "power2.inOut"
      }, "-=0.2")
      
      // Benefits cards with elastic bounce
      .fromTo(benefitsRef.current?.children || [], {
        opacity: 0,
        y: 50,
        rotationX: -45,
        scale: 0.8
      }, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.15,
        transformOrigin: "center bottom"
      }, "-=0.5")
      
      // CTA buttons with magnetic effect
      .fromTo(ctaRef.current?.children || [], {
        opacity: 0,
        y: 30,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1
      }, "-=0.3")
      
      // Phone entrance with dramatic 3D rotation
      .fromTo(rightContentRef.current, {
        opacity: 0,
        scale: 0.7,
        rotationY: 45,
        rotationX: 15,
        filter: "blur(10px)"
      }, {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        rotationX: 0,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power3.out"
      }, "-=1");

    // Continuous premium animations
    
    // Enterprise badge subtle glow
    gsap.to(badgeRef.current, {
      boxShadow: "0 0 30px rgba(59, 130, 246, 0.15)",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Premium metrics cards breathing
    gsap.to(benefitsRef.current?.children || [], {
      scale: 1.01,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.8
    });

    // Phone premium glow effect
    const phoneScreen = phoneRef.current?.querySelector(".phone-screen");
    if (phoneScreen) {
      gsap.to(phoneScreen, {
        boxShadow: "inset 0 2px 20px rgba(59, 130, 246, 0.1)",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    // Enterprise app content animations
    const appIcon = phoneRef.current?.querySelector(".app-icon");
    const miniChart = phoneRef.current?.querySelectorAll(".feature-card div div div");
    const ctaButton = phoneRef.current?.querySelector(".cta-button");

    if (appIcon) {
      gsap.to(appIcon, {
        scale: 1.05,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    if (ctaButton) {
      gsap.to(ctaButton, {
        boxShadow: "0 8px 35px rgba(59, 130, 246, 0.25)",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    // Premium floating animations
    floatingElementsRef.current.forEach((element, index) => {
      if (element) {
        // Subtle enterprise-grade floating motion
        gsap.to(element, {
          y: index % 2 === 0 ? -8 : 8,
          x: index % 2 === 0 ? 3 : -3,
          duration: 4 + index,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.8
        });

        // Premium glow effect
        gsap.to(element, {
          boxShadow: `0 15px 40px rgba(${index % 2 === 0 ? '16, 185, 129' : '59, 130, 246'}, 0.15)`,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 1.2
        });
      }
    });

    // Background ambient motion with enterprise subtlety
    gsap.to(".bg-geometric-1", {
      rotation: 360,
      scale: 1.1,
      x: 30,
      y: -20,
      duration: 30,
      repeat: -1,
      ease: "none"
    });

    gsap.to(".bg-geometric-2", {
      rotation: -360,
      scale: 0.9,
      x: -20,
      y: 30,
      duration: 35,
      repeat: -1,
      ease: "none"
    });

    // Enterprise parallax mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      // Phone subtle parallax with premium constraints
      gsap.to(phoneRef.current, {
        rotationY: xPercent * 2,
        rotationX: -yPercent * 2,
        duration: 0.8,
        ease: "power1.out"
      });

      // Floating elements refined parallax
      floatingElementsRef.current.forEach((element, index) => {
        if (element) {
          const multiplier = (index + 1) * 0.3;
          gsap.to(element, {
            x: xPercent * 5 * multiplier,
            y: yPercent * 5 * multiplier,
            duration: 1,
            ease: "power1.out"
          });
        }
      });

      // Background ambient parallax
      gsap.to(".bg-geometric-1", {
        x: 30 + xPercent * 10,
        y: -20 + yPercent * 10,
        duration: 1,
        ease: "power1.out"
      });

      gsap.to(".bg-geometric-2", {
        x: -20 + xPercent * -8,
        y: 30 + yPercent * -8,
        duration: 1,
        ease: "power1.out"
      });
    };

    // Add premium mouse interaction
    window.addEventListener("mousemove", handleMouseMove);

    // Enterprise CTA button interactions
    const ctaButtons = ctaRef.current?.querySelectorAll("button");
    ctaButtons?.forEach((button, index) => {
      gsap.set(button, { transformOrigin: "center center" });
      
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.02,
          y: -2,
          boxShadow: index === 0 
            ? "0 20px 50px rgba(59, 130, 246, 0.25)" 
            : "0 20px 50px rgba(0,0,0,0.15)",
          duration: 0.4,
          ease: "power2.out"
        });
      });
      
      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          y: 0,
          boxShadow: index === 0 
            ? "0 8px 30px rgba(59, 130, 246, 0.15)" 
            : "0 4px 20px rgba(0,0,0,0.08)",
          duration: 0.4,
          ease: "power2.out"
        });
      });
    });

    // Premium text reveal for enterprise description
    const descriptionText = descriptionRef.current?.querySelector("p");
    if (descriptionText) {
      const words = descriptionText.textContent?.split(" ") || [];
      descriptionText.innerHTML = words.map(word => 
        `<span class="word-reveal" style="display:inline-block;">${word}&nbsp;</span>`
      ).join("");

      const wordSpans = descriptionText.querySelectorAll(".word-reveal");
      gsap.fromTo(wordSpans, {
        opacity: 0,
        y: 10,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: "power1.out",
        delay: 2
      });
    }

    // Cleanup function for enterprise-grade performance
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center px-6 lg:px-8 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30 overflow-hidden">
      {/* Enterprise-grade background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Premium ambient lighting */}
        <div className="bg-geometric-1 absolute top-40 right-1/3 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/20 via-indigo-50/30 to-slate-100/20 rounded-full blur-[100px]"></div>
        <div className="bg-geometric-2 absolute bottom-40 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-slate-100/25 via-blue-50/20 to-indigo-100/15 rounded-full blur-[120px]"></div>
        
        {/* Enterprise accent shapes */}
        <div className="absolute top-1/4 left-20 w-40 h-40 bg-gradient-to-r from-blue-50/10 to-indigo-50/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-20 w-32 h-32 bg-gradient-to-r from-slate-50/20 to-blue-50/10 rounded-2xl blur-2xl rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center min-h-[85vh]">
          {/* Left Content - Enterprise Typography */}
          <div
            ref={leftContentRef}
            className="space-y-10 text-center lg:text-left relative"
          >
            {/* Professional glass container */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white/20 -m-8 p-8"></div>
            
            <div className="relative z-10 space-y-10">
              {/* Premium badge */}
              <div
                ref={badgeRef}
                className="flex justify-center lg:justify-start"
              >
                <div className="px-8 py-4 bg-white/70 backdrop-blur-xl text-slate-700 shadow-[0_4px_20px_rgba(0,0,0,0.08)] text-base font-medium hover:bg-white/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 rounded-2xl border border-white/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-pulse"></div>
                    <span className="text-slate-600 font-semibold">Enterprise Asset Intelligence</span>
                  </div>
                </div>
              </div>
              
              {/* Hero title with Apple-style typography */}
              <h1 ref={titleRef} className="text-6xl md:text-7xl lg:text-8xl text-slate-900 leading-[0.85] tracking-[-0.02em]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}>
                <span className="inline-block font-extralight">Introducing</span>
                <br />
                <span className="bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-800 bg-clip-text text-transparent inline-block font-semibold">
                  AssetX
                </span>
              </h1>
              
              {/* Enterprise description */}
              <div ref={descriptionRef} className="space-y-8 max-w-2xl mx-auto lg:mx-0">
                <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed font-light tracking-[-0.01em]">
                  Powered by <span className="text-slate-800 font-medium">20+ years</span> of enterprise consulting and IT innovation — now <span className="text-blue-700 font-medium">supercharged with AI</span>.
                </p>
                
                {/* Professional metrics grid */}
                <div ref={benefitsRef} className="grid grid-cols-2 gap-6 max-w-xl mx-auto lg:mx-0">
                  {[
                    { 
                      icon: <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>, 
                      number: "70%", 
                      text: "Time Reduction" 
                    },
                    { 
                      icon: <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>, 
                      number: "99.9%", 
                      text: "Accuracy Rate" 
                    },
                    { 
                      icon: <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Smartphone className="w-4 h-4 text-white" />
                      </div>, 
                      number: "24/7", 
                      text: "Availability" 
                    },
                    { 
                      icon: <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                        <Monitor className="w-4 h-4 text-white" />
                      </div>, 
                      number: "Real-time", 
                      text: "Updates" 
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white/30 hover:bg-white/70 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 group"
                    >
                      <div className="flex flex-col space-y-3">
                        <div className="flex items-center justify-between">
                          {item.icon}
                          <div className="text-right">
                            <div className="text-2xl font-semibold text-slate-800 tracking-tight">{item.number}</div>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-slate-600">{item.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enterprise CTA buttons */}
              <div
                ref={ctaRef}
                className="flex flex-col sm:flex-row gap-6 pt-8 justify-center lg:justify-start"
              >
                <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-2xl shadow-[0_8px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)] transition-all duration-500 transform hover:scale-[1.02] flex items-center justify-center space-x-4 text-lg">
                  <span>Start Enterprise Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="px-10 py-5 bg-white/70 backdrop-blur-xl text-slate-700 hover:text-slate-800 hover:bg-white/80 font-semibold rounded-2xl transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/30 text-lg">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Premium Device Showcase */}
          <div
            ref={rightContentRef}
            className="relative flex justify-center lg:justify-end"
          >
            <div ref={phoneRef} className="relative">
              {/* Premium ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-slate-200/30 rounded-[4rem] blur-3xl scale-110"></div>
              
              {/* iPhone Pro Max mockup */}
              <div className="phone-container relative w-[340px] h-[680px] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-[3.5rem] p-2 shadow-[0_25px_60px_rgba(0,0,0,0.15)]">
                <div className="phone-screen w-full h-full bg-gradient-to-br from-white via-slate-50/80 to-blue-50/60 rounded-[3rem] overflow-hidden relative backdrop-blur-sm shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)]">
                  
                  {/* Status bar */}
                  <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-8 text-slate-800 text-sm font-medium z-20">
                    <div className="flex items-center space-x-1">
                      <div className="text-xs">9:41</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-slate-800 rounded-sm"></div>
                      <div className="w-6 h-3 border border-slate-800 rounded-sm">
                        <div className="w-4 h-1.5 bg-slate-800 rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* App interface */}
                  <div className="screen-content absolute inset-0 flex items-center justify-center p-8 pt-16">
                    <div className="w-full max-w-sm space-y-8">
                      
                      {/* App header */}
                      <div className="text-center space-y-4">
                        <div className="app-icon w-24 h-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl flex items-center justify-center mx-auto shadow-[0_8px_30px_rgba(59,130,246,0.3)] border-4 border-white/50">
                          <BarChart3 className="w-12 h-12 text-white" />
                        </div>
                        <div className="app-info space-y-2">
                          <h3 className="text-slate-900 text-2xl font-semibold tracking-tight">HISYNC</h3>
                          <p className="text-blue-600 text-base font-medium">Enterprise Asset Intelligence</p>
                        </div>
                      </div>
                      
                      {/* Dashboard preview */}
                      <div className="feature-card space-y-6">
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/40">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium text-slate-600">Portfolio Value</div>
                              <div className="text-xs text-emerald-600 font-semibold">+12.5%</div>
                            </div>
                            <div className="text-3xl font-bold text-slate-900 tracking-tight">$2.4M</div>
                            
                            {/* Mini chart representation */}
                            <div className="flex items-end space-x-1 h-12">
                              {[20, 35, 25, 45, 40, 55, 50, 65, 60, 70].map((height, i) => (
                                <div key={i} className={`w-2 bg-gradient-to-t from-blue-500 to-blue-600 rounded-sm`} style={{height: `${height}%`}}></div>
                              ))}
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 pt-2">
                              <div className="text-center">
                                <div className="text-lg font-bold text-slate-800">156</div>
                                <div className="text-xs text-slate-500">Assets Tracked</div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-bold text-slate-800">99.9%</div>
                                <div className="text-xs text-slate-500">Accuracy</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <button className="cta-button w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 rounded-2xl transition-all duration-300 shadow-[0_6px_25px_rgba(59,130,246,0.3)] text-lg">
                          View Full Dashboard
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Dynamic Island */}
                  <div className="phone-notch absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-8 bg-slate-900 rounded-b-3xl shadow-lg"></div>
                </div>
              </div>

              {/* Premium floating indicators */}
              <div
                ref={(el) => {
                  if (el) floatingElementsRef.current[0] = el;
                }}
                className="floating-circle-1 absolute -top-12 -left-12 bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-white/30"
              >
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-emerald-600">70%</div>
                  <div className="text-sm font-medium text-slate-600">Efficiency Gain</div>
                </div>
              </div>

              <div
                ref={(el) => {
                  if (el) floatingElementsRef.current[1] = el;
                }}
                className="floating-circle-2 absolute -bottom-12 -right-12 bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-white/30"
              >
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-blue-600">AI</div>
                  <div className="text-sm font-medium text-slate-600">Powered</div>
                </div>
              </div>
              
              {/* Subtle accent elements */}
              <div className="absolute top-1/3 -right-20 w-16 h-16 bg-gradient-to-r from-blue-100/40 to-indigo-100/50 rounded-2xl backdrop-blur-sm opacity-60 rotate-12"></div>
              <div className="absolute bottom-1/3 -left-20 w-12 h-12 bg-gradient-to-r from-slate-100/50 to-blue-100/40 rounded-xl backdrop-blur-sm opacity-60 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
