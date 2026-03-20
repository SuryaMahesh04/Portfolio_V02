'use client';

export const AuroraBackground = ({
  className = '',
  colorStops = ['#00ff9d', '#7c3aed', '#00ff9d'],
  speed = 10,
}: {
  className?: string;
  colorStops?: string[];
  speed?: number;
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* 
        We use multiple rotating CSS gradients to simulate the Aurora effect.
        The noise texture adds a grainy, premium feel.
      */}
      <div 
        className="absolute -inset-[100%] opacity-[0.15] mix-blend-screen"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, ${colorStops[0]} 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${colorStops[1]} 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, ${colorStops[2]} 0%, transparent 50%)
          `,
          filter: 'blur(60px)',
          animation: `aurora-spin ${speed}s linear infinite`,
        }}
      />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      />
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes aurora-spin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.2); }
          100% { transform: rotate(360deg) scale(1); }
        }
      `}} />
    </div>
  );
};
