'use client';

import { useState, useRef, useEffect } from 'react';

interface TextPressureProps {
  text: string;
  className?: string;
  flex?: boolean;
}

export const TextPressure = ({ text, className = '', flex = true }: TextPressureProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };
    
    // Only track if we have a container to optimize performance
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', () => setMousePos({ x: -1000, y: -1000 }));
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        container.removeEventListener('mouseleave', () => setMousePos({ x: -1000, y: -1000 }));
      }
    };
  }, []);

  const letters = text.split('');

  return (
    <div 
      ref={containerRef} 
      className={`relative inline-flex items-center justify-between ${flex ? 'w-full' : ''} ${className}`}
    >
      {letters.map((letter, i) => {
        // Calculate distance from mouse to letter center roughly
        // We assume equal distribution for simplicity in this standard font adaptation
        const letterX = containerRef.current 
          ? (containerRef.current.offsetWidth / letters.length) * i 
          : 0;
        
        const distance = Math.abs(mousePos.x - letterX);
        const maxDist = 150;
        
        // Influence goes from 1 (closest) to 0 (far)
        const influence = mousePos.x === -1000 ? 0 : Math.max(0, 1 - distance / maxDist);
        
        // Scale and space based on influence
        const scale = 1 + influence * 0.4;
        const spacing = influence * 4;

        return (
          <span 
            key={i}
            className="transition-all duration-100 ease-out inline-block origin-bottom"
            style={{ 
              transform: `scaleY(${scale})`, 
              margin: `0 ${spacing}px`,
              color: influence > 0.5 ? '#00ff9d' : 'inherit',
              textShadow: influence > 0.2 ? `0 0 ${influence * 10}px rgba(0,255,157,${influence})` : 'none'
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        );
      })}
    </div>
  );
};
