'use client';

import { BlurText } from '@/components/bits/BlurText';
import { ScrollReveal } from '@/components/bits/ScrollReveal';
import { CountUp } from '@/components/bits/CountUp';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-8 items-start">
        
        {/* Left Column: Text */}
        <div className="flex flex-col gap-6">
          <div className="font-jetbrains text-brand-green/70 text-sm md:text-base mb-4">
            <span className="text-zinc-500 mr-2">//</span>
            about.tsx
          </div>

          <div className="text-2xl md:text-3xl font-light text-white leading-relaxed">
            <BlurText 
              text="I engineer robust, scalable systems that solve real problems, optimizing for both developer experience and end-user performance."
              delay={100}
            />
          </div>

          <div className="flex flex-col gap-6 text-zinc-400 mt-6 text-base md:text-lg leading-relaxed">
            <ScrollReveal direction="up" delay={0.1}>
              <p>
                My journey started with a deep curiosity for how things work under the hood. 
                I don't just write code; I design architectures. I believe that good software 
                is invisible—it simply works, seamlessly blending reliability with speed.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p>
                Currently, I specialize in the modern TypeScript ecosystem (Node.js, React, Next.js) 
                but I'm also comfortable dropping into Go or Python when the backend demands it. 
                From designing complex relational databases to orchestrating CI/CD pipelines, 
                I own the entire lifecycle of the features I ship.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Right Column: Stats (Key-Values) */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-sm font-jetbrains flex flex-col gap-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-violet/10 blur-3xl rounded-full translate-x-16 -translate-y-16 group-hover:bg-brand-violet/20 transition-colors duration-500" />
          
          <ScrollReveal direction="left" delay={0.1}>
            <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
              <span className="text-zinc-500">const</span>
              <span className="text-white">years_active</span>
              <span className="text-brand-violet">=</span>
              <span className="text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">
                <CountUp to={4} delay={0.5} duration={2} />
              </span>
              <span className="text-zinc-500">;</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2}>
            <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
              <span className="text-zinc-500">const</span>
              <span className="text-white">projects_shipped</span>
              <span className="text-brand-violet">=</span>
              <span className="text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">
                <CountUp to={25} delay={0.7} duration={2.5} />
              </span>
              <span className="text-zinc-500">;</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.3}>
            <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
              <span className="text-zinc-500">const</span>
              <span className="text-white">client_satisfaction</span>
              <span className="text-brand-violet">=</span>
              <span className="text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">
                '<CountUp to={100} delay={0.9} duration={3} />%'
              </span>
              <span className="text-zinc-500">;</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.4}>
            <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
              <span className="text-zinc-500">const</span>
              <span className="text-white">cups_of_coffee</span>
              <span className="text-brand-violet">=</span>
              <span className="text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">
                <CountUp to={1240} delay={1.1} duration={4} />
              </span>
              <span className="text-zinc-500">;</span>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
