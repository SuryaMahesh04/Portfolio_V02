import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/sections/Contact';
import { GlitchText } from '@/components/bits/GlitchText';
import { Particles } from '@/components/bits/Particles';
import { BlurText } from '@/components/bits/BlurText';
import { CountUp } from '@/components/bits/CountUp';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white relative flex flex-col selection:bg-brand-green/30">
      <Navbar />
      
      {/* Interactive Canvas Background */}
      <Particles density={80} speed={0.8} color="#7c3aed" />

      <div className="flex-grow flex flex-col justify-center pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto z-10 w-full">
        
        {/* Page Header */}
        <div className="mb-12 md:mb-20">
          <div className="font-jetbrains text-brand-green/70 text-sm mb-2 flex items-center gap-2">
            <span className="text-zinc-500">//</span>
            <span>whoami</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            <GlitchText text="ABOUT_SYS" speed={3000} />
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bio */}
          <div className="flex flex-col gap-8 text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
            <div className="text-2xl md:text-3xl font-medium text-white mb-4">
              <BlurText 
                text="A dedicated 4th-year Computer Science engineering student specializing in Full-Stack Web Development and Autonomous AI Integration."
                delay={200}
              />
            </div>
            
            <p className="animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
              Bridging the gap between conceptual architecture and deployed reality. I build highly scalable platforms, seamlessly integrate payment gateways, and architect robust backend APIs. My current focus is pushing the boundaries of what browser-based AI agents can autonomously solve within development environments.
            </p>

            <p className="animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
              Whether I'm developing a centralized B2B aggregation platform at <span className="text-brand-green">Morphius AI</span> or a gesture-controlled desktop system, my philosophy remains constant: engineer systems that are fault-tolerant, maintainable, and remarkably fast.
            </p>
          </div>

          {/* Right Column: Terminal Monitor */}
          <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-sm font-jetbrains p-6 shadow-[0_0_30px_rgba(124,58,237,0.15)] animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span className="text-brand-violet text-sm">htop - user@sys</span>
              <span className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/50"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-green/50"></span>
              </span>
            </div>

            <div className="flex flex-col gap-5 text-sm">
              <div className="flex justify-between items-center group">
                <span className="text-zinc-500 group-hover:text-white transition-colors">CPU_THREADS (Years)</span>
                <span className="text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">
                  <CountUp to={4} duration={2} />
                </span>
              </div>
              
              <div className="flex justify-between items-center group">
                <span className="text-zinc-500 group-hover:text-white transition-colors">MEM_ALLOC (Projects)</span>
                <span className="text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">
                  <CountUp to={12} duration={2.5} />
                </span>
              </div>

              <div className="flex justify-between items-center group">
                <span className="text-zinc-500 group-hover:text-white transition-colors">UPTIME (CGPA)</span>
                <span className="text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">
                  <CountUp to={8} duration={3} />.<CountUp to={3} duration={3} delay={0.5} />
                </span>
              </div>

              <div className="flex justify-between items-center group mt-4 pt-4 border-t border-white/5">
                <span className="text-zinc-500 group-hover:text-white transition-colors">SYS_LOCATION</span>
                <span className="text-white text-right">Hyderabad,<br/>IN</span>
              </div>

              <div className="flex justify-between items-center group">
                <span className="text-zinc-500 group-hover:text-white transition-colors">ACTIVE_PROCESS</span>
                <span className="text-white text-right">B.Tech CSE<br/>(IoT)</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
