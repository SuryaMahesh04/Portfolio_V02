'use client';

interface StarBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  speed?: string;
}

export const StarBorder = ({
  children,
  className = '',
  color = '#00ff9d',
  speed = '3s',
}: StarBorderProps) => {
  return (
    <div className={`relative inline-block overflow-hidden rounded-sm p-[1px] ${className}`}>
      {/* Animated gradient border */}
      <div 
        className="absolute inset-0 z-0 animate-star-border"
        style={{
          background: `conic-gradient(from 0deg, transparent 60%, ${color} 80%, transparent 100%)`,
          animationDuration: speed,
        }}
      />
      {/* Container for content blocking the center of the gradient */}
      <div className="relative z-10 w-full h-full bg-black/60 backdrop-blur-md rounded-sm">
        {children}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes star-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-star-border {
          animation: star-border linear infinite;
        }
      `}} />
    </div>
  );
};
