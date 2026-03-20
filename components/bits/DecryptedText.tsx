'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  className?: string;
  characters?: string;
}

export const DecryptedText = ({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  className = '',
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=',
}: DecryptedTextProps) => {
  const [displayText, setDisplayText] = useState(text.replace(/./g, ' '));

  useEffect(() => {
    let currentIteration = 0;
    let interval: NodeJS.Timeout;

    const startDecoding = () => {
      interval = setInterval(() => {
        setDisplayText((prev) => {
          const newText = prev.split('');
          let allRevealed = true;

          for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ') {
              newText[i] = ' ';
              continue;
            }

            const isRevealed = sequential
              ? currentIteration >= i * (maxIterations / text.length)
              : currentIteration >= maxIterations;

            if (isRevealed) {
              newText[i] = text[i];
            } else {
              allRevealed = false;
              if (Math.random() < 0.5) {
                newText[i] = characters[Math.floor(Math.random() * characters.length)];
              }
            }
          }

          if (allRevealed) clearInterval(interval);
          return newText.join('');
        });

        currentIteration++;
      }, speed);
    };

    // Small delay before starting
    const timeout = setTimeout(startDecoding, 200);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, maxIterations, sequential, characters]);

  return (
    <span className={`inline-block whitespace-nowrap ${className}`}>
      {displayText}
    </span>
  );
};
