"use client";

import { useEffect } from "react";

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Add performance optimizations for animations
    const optimizeAnimations = () => {
      // Reduce motion for users who prefer it
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) {
        document.documentElement.style.setProperty('--animation-duration', '0.01s');
        document.documentElement.style.setProperty('--transition-duration', '0.01s');
      }

      // Optimize scroll performance
      let ticking = false;
      const updateScrollState = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Update scroll-based animations here if needed
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', updateScrollState, { passive: true });

      return () => {
        window.removeEventListener('scroll', updateScrollState);
      };
    };

    const cleanup = optimizeAnimations();
    return cleanup;
  }, []);

  return null;
}
