"use client";

import { useEffect, useRef, useState } from 'react';

export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  animationType?: 'fade' | 'slide' | 'scale' | 'rotate' | 'bounce';
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const {
    threshold = 0.15,
    rootMargin = '0px 0px -30px 0px',
    triggerOnce = true,
    delay = 0,
    duration = 700,
    animationType = 'fade',
    direction = 'up'
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Add initial styles to prevent blinking
    element.style.transition = 'none';
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    
    // Force a reflow
    element.offsetHeight;
    
    // Enable transitions after a frame
    requestAnimationFrame(() => {
      element.style.transition = `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (triggerOnce && hasAnimated) return;
          
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, delay, hasAnimated, duration]);

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration} ease-out ultra-smooth`;
    
    if (!isVisible) {
      switch (animationType) {
        case 'fade':
          return `${baseClasses} opacity-0`;
        case 'slide':
          const slideMap = {
            up: 'translate-y-6 opacity-0',
            down: 'translate-y-[-1.5rem] opacity-0',
            left: 'translate-x-6 opacity-0',
            right: 'translate-x-[-1.5rem] opacity-0'
          };
          return `${baseClasses} ${slideMap[direction]}`;
        case 'scale':
          return `${baseClasses} scale-95 opacity-0`;
        case 'rotate':
          return `${baseClasses} rotate-1 opacity-0`;
        case 'bounce':
          return `${baseClasses} translate-y-4 opacity-0`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`;
  };

  return {
    ref: elementRef,
    isVisible,
    animationClasses: getAnimationClasses(),
  };
};

// Custom hook for staggered animations
export const useStaggeredAnimation = (
  itemsCount: number,
  options: ScrollAnimationOptions = {}
) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemsCount).fill(false)
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    staggerDelay = 150,
    duration = 700
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize all items as hidden
    const items = container.children;
    for (let i = 0; i < items.length; i++) {
      const item = items[i] as HTMLElement;
      if (item) {
        item.style.transition = 'none';
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        // Force a reflow
        item.offsetHeight;
        
        // Enable transitions after a frame
        requestAnimationFrame(() => {
          item.style.transition = `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
          item.style.transitionDelay = `${i * staggerDelay}ms`;
        });
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger animations with stagger delay
          visibleItems.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * staggerDelay);
          });
        } else if (!triggerOnce) {
          setVisibleItems(new Array(itemsCount).fill(false));
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [itemsCount, threshold, rootMargin, triggerOnce, staggerDelay, duration]);

  const getItemAnimationClasses = (index: number) => {
    const baseClasses = `transition-all duration-${duration} ease-out ultra-smooth`;
    
    if (!visibleItems[index]) {
      return `${baseClasses} opacity-0 translate-y-6`;
    }
    
    return `${baseClasses} opacity-100 translate-y-0`;
  };

  return {
    containerRef,
    visibleItems,
    getItemAnimationClasses,
  };
};
