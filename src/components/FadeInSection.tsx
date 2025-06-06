import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const getTransformClass = () => {
    if (isIntersecting) return 'translate-x-0 translate-y-0 opacity-100';
    
    switch (direction) {
      case 'up':
        return 'translate-y-8 opacity-0';
      case 'down':
        return '-translate-y-8 opacity-0';
      case 'left':
        return 'translate-x-8 opacity-0';
      case 'right':
        return '-translate-x-8 opacity-0';
      case 'fade':
      default:
        return 'opacity-0';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${getTransformClass()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;