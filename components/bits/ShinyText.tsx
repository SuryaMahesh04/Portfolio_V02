'use client';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  shimmerWidth?: number;
}

export const ShinyText = ({
  text,
  disabled = false,
  speed = 3,
  className = '',
  shimmerWidth = 100,
}: ShinyTextProps) => {
  if (disabled) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span
      className={`inline-block ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
        backgroundSize: `${shimmerWidth}% 100%`,
        backgroundRepeat: 'no-repeat',
        animation: `shimmer ${speed}s infinite linear`,
        WebkitBackgroundClip: 'text',
        color: 'rgba(255, 255, 255, 0.5)',
      }}
    >
      {text}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { background-position: -${shimmerWidth}% 0; }
          100% { background-position: 200% 0; }
        }
      ` }} />
    </span>
  );
};
