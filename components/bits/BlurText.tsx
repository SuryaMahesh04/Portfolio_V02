'use client';

import { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'word' | 'character';
}

export const BlurText = ({
  text,
  delay = 200,
  className = '',
  animateBy = 'word',
}: BlurTextProps) => {
  const elements = animateBy === 'word' ? text.split(' ') : text.split('');

  return (
    <p className={`inline-flex flex-wrap gap-[0.2em] ${className}`}>
      {elements.map((element, index) => (
        <span
          key={index}
          className="inline-block opacity-0 blur-[10px] animate-fade-in-blur"
          style={{
            animationDelay: `${index * 100 + delay}ms`,
            animationFillMode: 'forwards',
          }}
        >
          {element === ' ' ? '\u00A0' : element}
        </span>
      ))}
    </p>
  );
};
