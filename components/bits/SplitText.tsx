'use client';

import { useSpring, animated, SpringValue } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
}

export const SplitText = ({
  text = '',
  className = '',
  delay = 100,
}: SplitTextProps) => {
  const [letters, setLetters] = useState<
    { char: string; spring: SpringValue<number> }[]
  >([]);

  useEffect(() => {
    // Basic implementation for letter by letter animation
    const words = text.split(' ');
    
    // Using a simpler client-only animation for stability
  }, [text, delay]);

  return (
    <div className={`inline-flex flex-wrap ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block opacity-0 animate-fade-in-up"
          style={{
            animationDelay: `${index * 50 + delay}ms`,
            animationFillMode: 'forwards',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};
