import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number; // milliseconds
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number; // milliseconds
}

/**
 * Lightweight, performant Scroll Reveal component.
 * Uses native IntersectionObserver with translate3d and opacity for 60fps animations.
 * Unobserves immediately after revealing to conserve system resources.
 * Automatically respects prefers-reduced-motion.
 */
export const Reveal: React.FC<Props> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 480,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion preference immediately
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    // Fallback if IntersectionObserver is not available
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -25px 0px',
      }
    );

    const currentEl = ref.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'up':
        return 'translate3d(0, 20px, 0)';
      case 'down':
        return 'translate3d(0, -20px, 0)';
      case 'left':
        return 'translate3d(20px, 0, 0)';
      case 'right':
        return 'translate3d(-20px, 0, 0)';
      case 'none':
        return 'translate3d(0, 0, 0)';
      default:
        return 'translate3d(0, 20px, 0)';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: isVisible ? 'auto' : 'transform, opacity',
      }}
      className={className}
    >
      {children}
    </div>
  );
};
