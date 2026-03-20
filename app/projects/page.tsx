'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/sections/Contact';
import { SpotlightCard } from '@/components/bits/SpotlightCard';
import { TextPressure } from '@/components/bits/TextPressure';
import { ShinyText } from '@/components/bits/ShinyText';
import { Magnet } from '@/components/bits/Magnet';
import Link from 'next/link';

const projects = [
  {
    id: 'P01',
    hash: 'a7b399f',
    title: 'CodeRefine: Autonomous AI Editor',
    category: 'AI / Full-Stack',
    description: 'Engineered a browser-based coding environment featuring an autonomous AI agent capable of multi-file planning, targeted code generation, and recursive self-correction. Built a real-time streaming UI to surface internal reasoning.',
    stack: ['Next.js', 'React', 'TypeScript', 'Gemini API', 'Monaco Editor', 'Node.js'],
    link: '#',
    repo: '#',
    featured: true,
  },
  {
    id: 'P02',
    hash: 'c24d81e',
    title: 'Gestura: Voice & Gesture System',
    category: 'Computer Vision',
    description: 'Built a system enabling hands-free computer interaction using voice commands and hand gestures. Integrated gesture recognition mapping to execute system-level actions.',
    stack: ['Computer Vision', 'Voice Processing', 'System Integration', 'Python'],
    link: '#',
    repo: '#',
    featured: false,
  },
  {
    id: 'P03',
    hash: 'f91a27b',
    title: 'Smart Wearable Safety System',
    category: 'IoT / Hardware',
    description: 'Developed a prototype wearable system designed to trigger emergency alerts using sensor-based input patterns. Integrated live location tracking (GPS) and wireless Bluetooth communication.',
    stack: ['IoT Sensors', 'Embedded Systems', 'Bluetooth', 'GPS'],
    link: '#',
    repo: '#',
    featured: false,
  },
  {
    id: 'P04',
    hash: 'e82c55d',
    title: 'AgriChain Supply Node',
    category: 'Blockchain',
    description: 'Developed a blockchain-enabled system to improve traceability in agricultural supply chains. Recorded crop data across farming, logistics, and distribution via an immutable ledger.',
    stack: ['Blockchain', 'Smart Contracts', 'Backend APIs', 'Solidity'],
    link: '#',
    repo: '#',
    featured: false,
  }
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const featured = filteredProjects.find(p => p.featured);
  const others = filteredProjects.filter(p => !p.featured || filter !== 'All');

  return (
    <main className="min-h-screen bg-black text-white relative flex flex-col pt-32 selection:bg-brand-green/30">
      <Navbar />
      
      <div className="flex-grow flex flex-col w-full max-w-7xl mx-auto px-6 md:px-12 pb-24">
        
        {/* Floating Dock Filter */}
        <div className="flex justify-center mb-16 relative z-20">
          <div className="flex items-center gap-2 p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-jetbrains text-xs sm:text-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <span className="text-zinc-500 px-3 hidden sm:inline">filter_by:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-brand-green text-black font-bold shadow-[0_0_15px_rgba(0,255,157,0.3)]' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project */}
        {featured && filter === 'All' && (
          <div className="mb-12 animate-fade-in-up">
            <SpotlightCard className="p-1 rounded-sm overflow-hidden group border border-white/10">
              <div className="relative bg-black/90 p-8 md:p-12 w-full h-full min-h-[400px] flex flex-col justify-end">
                {/* Background Code Snippet */}
                <div className="absolute top-8 right-8 text-xs font-jetbrains text-white/[0.03] select-none pointer-events-none text-right">
                  <pre>
                    <code>
{`async function selfCorrect(target) {
  const logs = await analyzeLogs(target);
  const patch = await generatePatch(logs);
  return apply(patch);
}`}
                    </code>
                  </pre>
                </div>

                <div className="font-jetbrains flex items-center gap-4 text-sm mb-6">
                  <span className="text-zinc-500">[{featured.id}]</span>
                  <span className="text-brand-violet px-2 py-0.5 bg-brand-violet/10 rounded">commit: {featured.hash}</span>
                  <span className="bg-white/10 px-2 py-0.5 rounded text-white hidden sm:block">{featured.category}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter w-full max-w-4xl text-white">
                  <TextPressure text={featured.title} flex={false} />
                </h2>
                
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
                  {featured.description}
                </p>
                
                <div className="flex flex-wrap gap-3 font-jetbrains text-sm mb-12">
                  {featured.stack.map((tech, idx) => (
                    <ShinyText 
                      key={idx} 
                      text={tech} 
                      className="text-zinc-300 border border-white/10 px-3 py-1 bg-white/5 rounded-sm"
                      speed={2 + (idx * 0.5)} 
                    />
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <Magnet padding={40}>
                    <Link href={featured.repo} className="font-jetbrains text-brand-green hover:underline flex items-center gap-2">
                      <span>&gt;</span> view_source()
                    </Link>
                  </Magnet>
                </div>
              </div>
            </SpotlightCard>
          </div>
        )}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {others.map((project, index) => (
            <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}>
              <SpotlightCard className="p-8 h-full flex flex-col rounded-sm border border-white/5">
                <div className="font-jetbrains flex items-center justify-between text-sm mb-6">
                  <span className="text-zinc-500">[{project.id}]</span>
                  <span className="text-brand-violet text-xs bg-brand-violet/10 px-2 py-1 rounded">{project.category}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-green transition-colors leading-tight">
                  <TextPressure text={project.title.split(':')[0]} flex={false} />
                </h3>
                
                <p className="text-zinc-400 leading-relaxed flex-grow text-sm md:text-base">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 font-jetbrains text-xs mt-8 mb-8">
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="text-zinc-500 border border-white/10 bg-white/[0.02] px-2 py-0.5 rounded-sm">
                      {tech}
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
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </main>
  );
}
