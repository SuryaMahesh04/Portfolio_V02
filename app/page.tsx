import { Navbar } from '@/components/layout/Navbar';
import { DecryptedText } from '@/components/bits/DecryptedText';
import { RotatingText } from '@/components/bits/RotatingText';
import { Magnet } from '@/components/bits/Magnet';
import { PixelTransition } from '@/components/bits/PixelTransition';
import Link from 'next/link';

export default function Home() {
  const roles = [
    "Full Stack Engineer",
    "Systems Architect",
    "AI Integration Specialist",
    "IoT Systems Developer"
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-zinc-200 relative flex flex-col selection:bg-zinc-800 overflow-hidden w-full">
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

      <section className="relative flex-grow flex items-center px-6 md:px-12 lg:px-20 z-10 w-full max-w-[90rem] mx-auto mt-20 pb-20">
        
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-16 lg:gap-8">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start gap-8 w-full lg:w-[50%] xl:w-[55%] order-2 lg:order-1 flex-shrink">
            
            {/* Status line */}
            <div className="font-jetbrains text-xs text-zinc-500 animate-fade-in flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse" />
              <span className="tracking-wider uppercase">Connection Established</span>
            </div>

            {/* Name */}
            <h1 className="text-[clamp(3rem,5vw,5.5rem)] font-medium tracking-tight leading-[1.1] text-white w-full">
              <div className="block">
                <DecryptedText 
                  text="Guduri Surya" 
                  className="text-white relative z-10"
                  speed={20}
                  maxIterations={10}
                />
              </div>
              <div className="block mt-1">
                <DecryptedText 
                  text="Mahesh" 
                  className="text-white relative z-10"
                  speed={20}
                  maxIterations={10}
                />
              </div>
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

          {/* Right Column: Profile Image */}
          <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[45%] max-w-[700px] aspect-square overflow-hidden shrink-0 order-1 lg:order-2 relative mt-4 lg:mt-0">
            <PixelTransition 
              firstContent={
                <div className="w-full h-full flex flex-col items-center justify-center font-jetbrains text-sm text-zinc-500 bg-transparent w-full">
                  <span className="animate-pulse mb-3 text-xl">[ _ ]</span>
                  hover over me
                </div>
              }
              secondContent={
                <img 
                  src="/Image.png"
                  alt="Guduri Surya Mahesh"
                  className="w-full h-full object-cover filter contrast-125 brightness-90 grayscale origin-center scale-[1.15] hover:scale-[1.25] transition-transform duration-[2000ms]"
                />
              }
              gridSize={12}
              pixelColor="#050505"
              animationStepDuration={0.4}
            />
          </div>

        </div>

      </section>
    </main>
  );
}
