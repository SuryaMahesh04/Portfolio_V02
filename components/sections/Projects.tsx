'use client';

import { ScrollReveal } from '@/components/bits/ScrollReveal';
import { SpotlightCard } from '@/components/bits/SpotlightCard';
import { Magnet } from '@/components/bits/Magnet';
import { ShinyText } from '@/components/bits/ShinyText';
import Link from 'next/link';

// Placeholder project data structured like git commits
const projects = [
  {
    id: '001',
    hash: 'a1b2c3d',
    title: 'Enterprise Analytics Dashboard',
    description: 'A high-performance data visualization platform handling millions of events daily. Built with real-time WebSockets and optimized rendering.',
    stack: ['Next.js', 'PostgreSQL', 'Redis', 'Tailwind'],
    link: '#',
    repo: '#',
    featured: true,
  },
  {
    id: '002',
    hash: 'f4e5d6c',
    title: 'Distributed Job Queue',
    description: 'A resilient, fault-tolerant background job processing system designed for microservices architectures.',
    stack: ['Go', 'Docker', 'RabbitMQ'],
    link: '#',
    repo: '#',
    featured: false,
  },
  {
    id: '003',
    hash: 'x7y8z9w',
    title: 'AI Code Reviewer',
    description: 'CLI tool that analyzes pull requests and suggests architectural improvements using LLMs.',
    stack: ['TypeScript', 'Node.js', 'OpenAI API'],
    link: '#',
    repo: '#',
    featured: false,
  }
];

export const Projects = () => {
  const featured = projects.find(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="font-jetbrains text-brand-green/70 text-sm md:text-base">
          <span className="text-zinc-500 mr-2">//</span>
          projects.ts
        </div>

        {/* Featured Project */}
        {featured && (
          <ScrollReveal direction="up" delay={0.1}>
            <SpotlightCard className="p-8 md:p-12 rounded-sm group cursor-default">
              <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
                <div className="flex flex-col gap-6 max-w-2xl">
                  <div className="font-jetbrains flex items-center gap-4 text-sm">
                    <span className="text-zinc-500">[{featured.id}]</span>
                    <span className="text-brand-violet px-2 py-0.5 bg-brand-violet/10 rounded">commit: {featured.hash}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-brand-green transition-colors">
                    {featured.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {featured.description}
                  </p>
                  
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-3 font-jetbrains text-sm">
                    {featured.stack.map((tech, idx) => (
                      <ShinyText 
                        key={idx} 
                        text={tech} 
                        className="text-zinc-300 border border-white/10 px-3 py-1 bg-white/5 rounded-sm"
                        speed={2 + (idx * 0.5)} 
                      />
                    ))}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 mt-4">
                    <Magnet padding={30}>
                      <Link href={featured.link} className="font-jetbrains text-brand-green hover:underline flex items-center gap-2">
                        <span>&gt;</span> live_demo()
                      </Link>
                    </Magnet>
                    <Magnet padding={30}>
                      <Link href={featured.repo} className="font-jetbrains text-zinc-400 hover:text-white hover:underline flex items-center gap-2 transition-colors">
                        <span>&gt;</span> view_source()
                      </Link>
                    </Magnet>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        )}

        {/* Grid for other projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {others.map((project, index) => (
            <ScrollReveal key={project.id} direction="up" delay={0.2 + (index * 0.1)}>
              <SpotlightCard className="p-8 h-full flex flex-col rounded-sm group cursor-default">
                <div className="font-jetbrains flex items-center gap-3 text-sm mb-6">
                  <span className="text-zinc-500">[{project.id}]</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-green transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 font-jetbrains text-xs mt-6 mb-8">
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="text-zinc-500">
                      {tech}{idx < project.stack.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <Magnet padding={30}>
                    <Link href={project.repo} className="font-jetbrains text-sm text-zinc-400 hover:text-white hover:underline flex items-center gap-2 transition-colors">
                      <span>&gt;</span> source()
                    </Link>
                  </Magnet>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
