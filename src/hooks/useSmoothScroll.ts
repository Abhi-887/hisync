"use client";

import { useCallback } from "react";

export function useSmoothScroll() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      
      // Simple and fast smooth scroll
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, []);
  
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  
  return { scrollToSection, scrollToTop };
}
