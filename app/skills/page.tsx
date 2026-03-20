'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/sections/Contact';
import { FlowingMenu } from '@/components/bits/FlowingMenu';
import { SpotlightCard } from '@/components/bits/SpotlightCard';
import { Marquee } from '@/components/bits/Marquee';
import { ShinyText } from '@/components/bits/ShinyText';

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend UI/UX',
    description: 'React.js, Next.js, React Native, Tailwind',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'React Native', level: 80 },
    ]
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    description: 'Node.js, Express, PostgreSQL, Firebase',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Firebase', level: 85 },
      { name: 'REST APIs', level: 95 },
    ]
  },
  {
    id: 'ai',
    label: 'AI Integrations',
    description: 'ElevenLabs, Gemini API, Agents',
    skills: [
      { name: 'Google Gemini API', level: 90 },
      { name: 'ElevenLabs API', level: 85 },
      { name: 'Function Calling', level: 85 },
      { name: 'Agent Architecture', level: 80 },
    ]
  },
  {
    id: 'languages',
    label: 'Core Languages',
    description: 'JS/TS, Python, Java, Kotlin, SQL',
    skills: [
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Java / Kotlin', level: 75 },
      { name: 'SQL', level: 85 },
    ]
  }
];

const allSkillsFlat = skillCategories.flatMap(c => c.skills.map(s => s.name));

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const displayedSkills = activeCategory 
    ? skillCategories.find(c => c.id === activeCategory)?.skills || []
    : [];

  return (
    <main className="min-h-screen bg-black text-white relative flex flex-col pt-32 selection:bg-brand-green/30">
      <Navbar />
      
      <div className="flex-grow flex flex-col">
        
        {/* Header & Marquee */}
        <div className="w-full flex flex-col items-center mb-16">
          <div className="font-jetbrains text-brand-green/70 text-sm mb-6 flex items-center justify-center w-full max-w-7xl px-6 md:px-12">
            <span className="text-zinc-500 mr-2 border-b border-brand-green/50 pb-1">module.exports = credentials;</span>
          </div>

          <div className="w-full border-y border-white/5 bg-white/[0.02] py-4 relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            <Marquee 
              items={allSkillsFlat.map((skill, idx) => (
                <span key={idx} className="font-jetbrains text-xl font-bold text-zinc-600 uppercase tracking-widest px-8">
                  {skill}
                </span>
              ))}
              speed={1.5}
            />
          </div>
        </div>

        {/* Interactive Flowing Menu & Skill Bars */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 pb-24">
          
          {/* Left: Interactive Menu */}
          <div className="flex flex-col relative z-20">
            <h2 className="text-zinc-500 font-jetbrains text-sm mb-4">Hover to inspect module details //</h2>
            <FlowingMenu 
              items={skillCategories} 
              onHover={(id) => setActiveCategory(id)} 
            />
          </div>

          {/* Right: Active Skill Details */}
          <div className="flex flex-col justify-center min-h-[400px]">
            {activeCategory ? (
              <SpotlightCard className="p-8 rounded-sm animate-fade-in-up shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-white/5" spotlightColor="rgba(0, 255, 157, 0.1)">
                <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-4">
                  <span className="text-zinc-500 font-jetbrains">export const</span>
                  <ShinyText text={activeCategory} className="text-brand-violet font-jetbrains font-bold text-lg" />
                  <span className="text-zinc-500 font-jetbrains">= {'{'}</span>
                </div>
                
                <div className="flex flex-col gap-6">
                  {displayedSkills.map((skill, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <div className="flex justify-between font-jetbrains text-sm">
                        <span className="text-white">"{skill.name}"</span>
                        <span className="text-zinc-500">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-brand-green relative shadow-[0_0_10px_#00ff9d]"
                          style={{ 
                            width: `${skill.level}%`,
                            transition: 'width 1s cubic-bezier(0.22, 1, 0.36, 1)' 
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/50 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-zinc-500 font-jetbrains mt-8">{'}'};</div>
              </SpotlightCard>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-zinc-600 font-jetbrains border border-dashed border-white/10 rounded-sm p-12 bg-white/[0.01]">
                <span className="text-4xl mb-4 animate-pulse">◬</span>
                <span>Awaiting module selection...</span>
              </div>
            )}
          </div>

        </section>
      </div>

      <Footer />
    </main>
  );
}
