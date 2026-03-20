'use client';

import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export const GlitchText = ({ text, className = '', speed = 2000 }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200 + Math.random() * 200);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={isGlitching ? 'opacity-0' : 'opacity-100'}>{text}</span>
      {isGlitching && (
        <>
          <span className="absolute top-0 left-[2px] -translate-x-1 text-red-500 mix-blend-screen overflow-hidden clip-path-glitch-1 animate-glitch-anim-1">
            {text}
          </span>
          <span className="absolute top-0 left-[-2px] translate-x-1 text-blue-500 mix-blend-screen overflow-hidden clip-path-glitch-2 animate-glitch-anim-2">
            {text}
          </span>
          <span className="absolute top-0 left-0 text-white overflow-hidden clip-path-glitch-3 animate-glitch-anim-3">
            {text}
          </span>
        </>
      )}
      <style dangerouslySetInnerHTML={{ __html: `
        .clip-path-glitch-1 { clip-path: polygon(0 20%, 100% 20%, 100% 30%, 0 30%); }
        .clip-path-glitch-2 { clip-path: polygon(0 60%, 100% 60%, 100% 70%, 0 70%); }
        .clip-path-glitch-3 { clip-path: polygon(0 40%, 100% 40%, 100% 60%, 0 60%); }
        @keyframes glitch-anim-1 {
          0% { transform: translateX(-2px) skewX(2deg); }
          50% { transform: translateX(2px) skewX(-2deg); }
          100% { transform: translateX(0) skewX(0); }
        }
        @keyframes glitch-anim-2 {
          0% { transform: translateX(2px) skewX(-2deg); }
          50% { transform: translateX(-2px) skewX(2deg); }
          100% { transform: translateX(0) skewX(0); }
        }
        @keyframes glitch-anim-3 {
          0% { transform: translateX(1px); }
          100% { transform: translateX(-1px); }
        }
      `}} />
    </span>
  );
};
