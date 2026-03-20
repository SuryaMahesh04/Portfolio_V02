import { Navbar } from '@/components/layout/Navbar';
import { DecryptedText } from '@/components/bits/DecryptedText';
import { RotatingText } from '@/components/bits/RotatingText';
import { Magnet } from '@/components/bits/Magnet';
import Link from 'next/link';

export default function Home() {
  const roles = [
    "Full Stack Engineer",
    "Systems Architect",
    "AI Integration Specialist",
    "IoT Systems Developer"
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-zinc-200 relative flex flex-col selection:bg-zinc-800 overflow-hidden">
      <Navbar />
      
      {/* Ultra-subtle static grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <section className="relative flex-grow flex flex-col justify-center px-6 md:px-16 lg:px-24 z-10 w-full max-w-7xl mx-auto mt-20 pb-20">
        
        <div className="flex flex-col items-start gap-8 max-w-3xl">
          
          {/* Status line */}
          <div className="font-jetbrains text-xs text-zinc-500 animate-fade-in flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse" />
            <span className="tracking-wider uppercase">Connection Established</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.1] text-white">
            <DecryptedText 
              text="Guduri Surya Mahesh" 
              className="text-white relative z-10"
              speed={20}
              maxIterations={10}
            />
          </h1>

          {/* Roles */}
          <div className="flex items-center gap-4 font-jetbrains text-sm md:text-base text-zinc-400">
            <span className="text-zinc-600">~</span>
            <div className="h-6 flex items-center overflow-hidden">
              <RotatingText 
                texts={roles}
                interval={4000}
                className="text-white"
              />
            </div>
            <span className="w-[8px] h-[16px] bg-zinc-600 animate-[pulse_1s_step-end_infinite] ml-1" />
          </div>

          {/* Description */}
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mt-4">
            Building highly reliable software systems from backend infrastructure to front-end experiences. Focused on clean code, scalability, and seamless user interaction.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8">
            <Magnet padding={20}>
              <Link 
                href="/projects" 
                className="group flex items-center gap-3 bg-white text-black px-8 py-3.5 rounded-full font-medium hover:bg-zinc-200 transition-colors text-sm"
              >
                View Projects 
                <span className="text-black/50 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </Magnet>
            
            <Magnet padding={20}>
              <Link 
                href="/about" 
                className="group flex items-center gap-3 border border-zinc-800 bg-transparent text-white px-8 py-3.5 rounded-full font-medium hover:bg-zinc-900 transition-colors text-sm"
              >
                About Me
              </Link>
            </Magnet>
          </div>

        </div>

      </section>
    </main>
  );
}
