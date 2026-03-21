import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export const RevealSection: React.FC<RevealSectionProps> = ({ children, className = '', delay = 0, id }) => {
  const { ref, isVisible } = useIntersectionObserver(0.05);

  return (
    <div
      ref={ref}
      id={id}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
