'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
}

export const TypewriterText = ({
  text,
  speed = 30,
  delay = 0,
  className = '',
  cursor = true,
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!hasStarted) {
      timeout = setTimeout(() => {
        setHasStarted(true);
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(timeout);
    }

    if (displayedText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
    } else {
      setIsTyping(false);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, text, speed, delay, hasStarted]);

  return (
    <span className={`inline-block ${className}`}>
      {displayedText}
      {cursor && (
        <span className={`inline-block w-[0.5em] h-[1em] bg-brand-green ml-[2px] align-middle ${isTyping ? '' : 'animate-pulse'}`} />
      )}
    </span>
  );
};
