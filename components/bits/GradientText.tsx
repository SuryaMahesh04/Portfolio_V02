'use client';

interface GradientTextProps {
  text: string;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}

export const GradientText = ({
  text,
  className = '',
  colors = ['#00ff9d', '#7c3aed', '#00ff9d'],
  animationSpeed = 5,
}: GradientTextProps) => {
  const gradientStyle = {
    background: `linear-gradient(to right, ${colors.join(', ')})`,
    backgroundSize: '200% auto',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    animation: `shine ${animationSpeed}s linear infinite`,
  };

  return (
    <>
      <span className={`inline-block font-bold ${className}`} style={gradientStyle}>
        {text}
      </span>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
      `}} />
    </>
  );
};
