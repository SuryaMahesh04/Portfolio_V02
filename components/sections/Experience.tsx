'use client';

import { ScrollReveal } from '@/components/bits/ScrollReveal';
import { ShinyText } from '@/components/bits/ShinyText';

const experience = [
  {
    id: 'v2.0.0',
    role: 'Senior Full-Stack Engineer',
    company: 'Tech Innovators Inc.',
    period: '2022 — Present',
    achievements: [
      'Architected and deployed a highly scalable microservices infrastructure serving 2M+ daily active users.',
      'Reduced database query latency by 45% through aggressive caching and indexing strategies.',
      'Mentored a team of 4 junior developers and established CI/CD best practices.'
    ]
  },
  {
    id: 'v1.5.0',
    role: 'Software Engineer',
    company: 'Startup Foundry',
    period: '2020 — 2022',
    achievements: [
      'Built end-to-end full-stack features using React, Node.js, and MongoDB.',
      'Integrated third-party payment gateways (Stripe) and handled webhook synchronization reliably.',
      'Refactored legacy monolithic codebase into modular, testable components.'
    ]
  },
  {
    id: 'v1.0.0',
    role: 'Frontend Developer',
    company: 'Creative Agency',
    period: '2019 — 2020',
    achievements: [
      'Developed responsive, pixel-perfect user interfaces from Figma designs.',
      'Optimized web performance, achieving 98+ Lighthouse scores across all client projects.'
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col gap-12 max-w-4xl">
        
        {/* Section Header */}
        <div className="font-jetbrains text-brand-green/70 text-sm md:text-base">
          <span className="text-zinc-500 mr-2">//</span>
          changelog.md
        </div>

        <div className="flex flex-col relative border-l border-white/10 ml-4 md:ml-8 pb-12">
          {experience.map((exp, index) => (
            <ScrollReveal key={exp.id} direction="up" delay={0.1}>
              <div className="relative pl-8 md:pl-12 pb-16 last:pb-0 group">
                {/* Timeline node */}
                <div className="absolute left-0 top-1 -translate-x-[5px] w-[9px] h-[9px] rounded-full bg-zinc-800 border border-zinc-600 group-hover:bg-brand-green group-hover:border-brand-green transition-colors" />
                
                {/* Content */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 font-jetbrains text-sm">
                    <span className="text-zinc-500">[{exp.id}]</span>
                    <ShinyText 
                      text={`${exp.company} · ${exp.period}`} 
                      className="text-zinc-400"
                      speed={4}
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white">
                    {exp.role}
                  </h3>
                  
                  <div className="flex flex-col gap-3 mt-2">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 text-zinc-400 leading-relaxed">
                        <span className="text-zinc-700 font-jetbrains mt-1">▸</span>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
