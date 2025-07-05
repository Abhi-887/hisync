"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // Enhanced smooth scrolling for anchor links
    const smoothScrollToElement = (targetId: string) => {
      const element = document.getElementById(targetId);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    };

    // Handle anchor link clicks
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (link) {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        if (targetId) {
          smoothScrollToElement(targetId);
          // Update URL without causing page jump
          history.pushState(null, '', `#${targetId}`);
        }
      }
    };

    // Add event listeners
    document.addEventListener('click', handleAnchorClick);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null;
}
