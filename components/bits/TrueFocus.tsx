'use client';

import { useEffect, useRef, useState } from 'react';

interface TrueFocusProps {
  sentence?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

export const TrueFocus = ({
  sentence = 'True Focus',
  manualMode = false,
  blurAmount = 5,
  borderColor = '#00ff9d',
  glowColor = 'rgba(0, 255, 157, 0.6)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}: TrueFocusProps) => {
  const words = sentence.split(' ');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (manualMode) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, (animationDuration + pauseBetweenAnimations) * 1000);
    
    return () => clearInterval(interval);
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  return (
    <div className="relative flex flex-wrap gap-3 font-jetbrains">
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            className={`
              relative px-1 transition-all duration-[500ms]
              ${isActive ? 'text-white blur-none scale-110 z-10' : 'text-zinc-500 scale-100 z-0'}
            `}
            style={{
              filter: isActive ? 'blur(0px)' : `blur(${blurAmount}px)`,
            }}
          >
            {word}
            {isActive && (
              <span 
                className="absolute inset-x-0 -bottom-1 h-0.5" 
                style={{ 
                  backgroundColor: borderColor,
                  boxShadow: `0 0 8px ${glowColor}`
                }} 
              />
            )}
          </span>
        );
      })}
    </div>
  );
};
