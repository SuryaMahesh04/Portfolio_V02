'use client';

import { useEffect, useRef, useState } from 'react';

interface MarqueeProps {
  items: React.ReactNode[];
  speed?: number; // pixels per frame roughly
  pauseOnHover?: boolean;
  className?: string;
}

export const Marquee = ({
  items,
  speed = 1,
  pauseOnHover = true,
  className = '',
}: MarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap flex w-full ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div 
        className="flex w-max animate-marquee"
        style={{ 
          animationPlayState: isPaused ? 'paused' : 'running',
          // Adjusted animation duration based on speed prop. Lower speed = higher duration.
          animationDuration: `${50 / speed}s` 
        }}
      >
        {/* Render items twice for seamless loop */}
        {items.map((item, index) => (
          <div key={`first-${index}`} className="flex-shrink-0 px-8">
            {item}
          </div>
        ))}
        {items.map((item, index) => (
          <div key={`second-${index}`} className="flex-shrink-0 px-8">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
