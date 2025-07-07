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
  const elementRef = useRef<HTMLElement>(null);

  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    delay = 0,
    duration = 600,
    animationType = 'fade',
    direction = 'up'
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

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
  }, [threshold, rootMargin, triggerOnce, delay, hasAnimated]);

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration} ease-out`;
    
    if (!isVisible) {
      switch (animationType) {
        case 'fade':
          return `${baseClasses} opacity-0`;
        case 'slide':
          const slideMap = {
            up: 'translate-y-8 opacity-0',
            down: 'translate-y-[-2rem] opacity-0',
            left: 'translate-x-8 opacity-0',
            right: 'translate-x-[-2rem] opacity-0'
          };
          return `${baseClasses} ${slideMap[direction]}`;
        case 'scale':
          return `${baseClasses} scale-95 opacity-0`;
        case 'rotate':
          return `${baseClasses} rotate-3 opacity-0`;
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
  const containerRef = useRef<HTMLElement>(null);

  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    staggerDelay = 100,
    duration = 600
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

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
  }, [itemsCount, threshold, rootMargin, triggerOnce, staggerDelay]);

  const getItemAnimationClasses = (index: number) => {
    const baseClasses = `transition-all duration-${duration} ease-out`;
    
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
