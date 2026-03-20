'use client';

import { ScrollReveal } from '@/components/bits/ScrollReveal';
import { Marquee } from '@/components/bits/Marquee';
import { ShinyText } from '@/components/bits/ShinyText';

// Define the tech stack data structured like a package.json
const stack = {
  dependencies: [
    'React', 'Next.js', 'TypeScript', 'Node.js', 
    'Tailwind CSS', 'PostgreSQL', 'Framer Motion'
  ],
  devDependencies: [
    'ESLint', 'Prettier', 'Jest', 'Cypress', 
    'Husky', 'Storybook', 'Vite'
  ],
  infrastructure: [
    'Docker', 'AWS (EC2, S3)', 'Vercel', 'GitHub Actions', 
    'Nginx', 'Linux', 'Terraform'
  ]
};

// All skills flattened for the Marquee
const allSkills = [...stack.dependencies, ...stack.devDependencies, ...stack.infrastructure];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 overflow-hidden">
      <div className="flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="font-jetbrains text-brand-green/70 text-sm md:text-base">
          <span className="text-zinc-500 mr-2">//</span>
          skills.ts
        </div>

        {/* Marquee Strip */}
        <div className="w-full relative py-8 -mx-6 md:-mx-12 md:w-[calc(100%+6rem)] border-y border-white/5 bg-white/[0.02]">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          <Marquee 
            items={allSkills.map((skill, idx) => (
              <span key={idx} className="font-jetbrains text-xl font-bold text-zinc-600 uppercase tracking-widest">
                {skill}
              </span>
            ))}
            speed={2}
          />
        </div>

        {/* JSON Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 font-jetbrains text-sm md:text-base mt-8">
          
          {/* Column 1: Dependencies */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex flex-col gap-4">
              <ShinyText text='"dependencies": {' className="text-brand-violet" />
              <ul className="pl-4 border-l border-white/10 flex flex-col gap-2">
                {stack.dependencies.map((item, idx) => (
                  <li key={idx} className="text-zinc-400 group flex items-center gap-2">
                    <span className="text-brand-green opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                    <span className="group-hover:text-white transition-colors">"{item}"</span>,
                  </li>
                ))}
              </ul>
              <div className="text-brand-violet">{'}'}</div>
            </div>
          </ScrollReveal>

          {/* Column 2: DevDependencies */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-col gap-4">
              <ShinyText text='"devDependencies": {' className="text-brand-violet" />
              <ul className="pl-4 border-l border-white/10 flex flex-col gap-2">
                {stack.devDependencies.map((item, idx) => (
                  <li key={idx} className="text-zinc-400 group flex items-center gap-2">
                    <span className="text-brand-green opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                    <span className="group-hover:text-white transition-colors">"{item}"</span>,
                  </li>
                ))}
              </ul>
              <div className="text-brand-violet">{'}'}</div>
            </div>
          </ScrollReveal>

          {/* Column 3: Infrastructure */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex flex-col gap-4">
              <ShinyText text='"infrastructure": {' className="text-brand-violet" />
              <ul className="pl-4 border-l border-white/10 flex flex-col gap-2">
                {stack.infrastructure.map((item, idx) => (
                  <li key={idx} className="text-zinc-400 group flex items-center gap-2">
                    <span className="text-brand-green opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                    <span className="group-hover:text-white transition-colors">"{item}"</span>,
                  </li>
                ))}
              </ul>
              <div className="text-brand-violet">{'}'}</div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
