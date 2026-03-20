'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuItem {
  id: string;
  label: string;
  description: string;
}

interface FlowingMenuProps {
  items: MenuItem[];
  onHover?: (id: string | null) => void;
}

export const FlowingMenu = ({ items, onHover }: FlowingMenuProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseEnter = (id: string) => {
    setHoveredId(id);
    if (onHover) onHover(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    if (onHover) onHover(null);
  };

  return (
    <div ref={containerRef} className="relative flex flex-col w-full group pointer-events-auto">
      {/* Floating Glow Follower */}
      <AnimatePresence>
        {hoveredId && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute z-0 pointer-events-none w-64 h-64 bg-brand-green/10 blur-[60px] rounded-full"
            style={{
              left: cursorPos.x - 128,
              top: cursorPos.y - 128,
            }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col w-full border-t border-white/10">
        {items.map((item) => {
          const isHovered = hoveredId === item.id;
          const isFaded = hoveredId !== null && hoveredId !== item.id;

          return (
            <div
              key={item.id}
              className={`relative flex flex-col md:flex-row md:items-center py-6 px-4 md:px-8 border-b border-white/10 cursor-pointer transition-all duration-500 overflow-hidden ${
                isFaded ? 'opacity-30' : 'opacity-100'
              }`}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <h3 
                className={`font-jetbrains text-3xl md:text-5xl font-black uppercase tracking-tighter transition-all duration-300 flex-shrink-0 z-10 ${
                  isHovered ? 'text-brand-green translate-x-1 md:translate-x-4' : 'text-white'
                }`}
              >
                {item.label}
              </h3>

              {/* Decorative line visible on hover */}
              <div 
                className={`absolute left-0 bottom-0 h-[2px] bg-brand-green transition-all duration-500 ${
                  isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
