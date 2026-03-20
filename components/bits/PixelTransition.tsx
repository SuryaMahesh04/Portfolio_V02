'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const PixelTransition = ({
  firstContent,
  secondContent,
  gridSize = 12,
  pixelColor = '#050505',
  animationStepDuration = 0.3,
  className = '',
}: {
  firstContent: React.ReactNode;
  secondContent: React.ReactNode;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const pixels = Array.from({ length: gridSize * gridSize });
  const [delays, setDelays] = useState<number[]>([]);

  useEffect(() => {
    // Generate static random delays on mount
    setDelays(pixels.map(() => Math.random() * animationStepDuration * 2.5));
  }, [gridSize, animationStepDuration]);

  return (
    <div 
      className={`relative w-full h-full overflow-hidden cursor-crosshair ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Revealed Image/Content */}
      <div className="absolute inset-0 w-full h-full z-0">
        {secondContent}
      </div>

      {/* Initial Content (fades out slightly later) */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-30 pointer-events-none flex items-center justify-center"
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {firstContent}
      </motion.div>

      {/* Grid of Pixels (Masking effect) */}
      <div 
        className="absolute inset-0 z-20 grid pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {pixels.map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ 
              duration: 0.25, 
              delay: delays[i] || 0,
              ease: "circInOut"
            }}
            style={{ backgroundColor: pixelColor }}
            className="w-[102%] h-[102%] -ml-[1%] -mt-[1%]" // Overlap slightly to prevent gaps
          />
        ))}
      </div>
    </div>
  );
};
