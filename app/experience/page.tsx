'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/sections/Contact';
import { TypewriterText } from '@/components/bits/TypewriterText';
import { Magnet } from '@/components/bits/Magnet';

const experienceData = [
  {
    role: 'Full Stack Developer',
    company: 'Morphius AI',
    period: 'May 2025 — Present',
    hash: 'fc92a1b',
    description: 'B2B Aggregation Platform: Developed a platform supporting enterprise use cases with complex financial workflows.',
    bullets: [
      'Integrated Razorpay subscription payments and designed a credit-based internal payment system.',
      'Built role-based dashboards with interactive charts and geospatial views to track revenue and performance.',
      'Optimized image upload/storage workflows using backend compression strategies.',
    ],
    projects: [
      { name: 'AI Hotel Kiosk Assistant', desc: 'Integrated conversational ElevenLabs AI into a self-service booking kiosk.' },
      { name: 'LMS Backend', desc: 'Designed modular backend architecture to manage multi-tenant courses and assessments.' }
    ]
  }
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black text-white relative flex flex-col pt-32 selection:bg-brand-green/30">
      <Navbar />
      
      <div className="flex-grow flex flex-col w-full max-w-4xl mx-auto px-6 md:px-12 pb-24">
        
        {/* Header */}
        <div className="mb-16">
          <div className="font-jetbrains text-brand-green/70 text-sm mb-2 flex items-center gap-2">
            <span className="text-zinc-500">$</span>
            <span>git log --oneline --graph --all</span>
            <span className="w-2 h-2 bg-brand-green animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white mt-4">
            EXPERIENCE_LOG
          </h1>
        </div>

        {/* Git Timeline Node */}
        <div className="relative pl-8 md:pl-12 font-jetbrains">
          {/* Main timeline branch line */}
          <div className="absolute left-[11px] md:left-[23px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-brand-violet via-white/20 to-transparent z-0" />
          
          {experienceData.map((exp, expIdx) => (
            <div key={expIdx} className="relative z-10 mb-20">
              
              {/* Commit Node Indicator */}
              <div className="absolute -left-[32px] md:-left-[44px] top-1.5 w-[14px] h-[14px] rounded-full border-2 border-brand-violet bg-black flex items-center justify-center group-hover:bg-brand-violet transition-colors">
                <div className="w-[4px] h-[4px] bg-brand-violet rounded-full"></div>
              </div>

              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-6 mb-6">
                <div className="text-brand-violet text-sm">commit {exp.hash}</div>
                <div className="text-zinc-500 text-xs sm:text-sm">Merge branch 'production' into main</div>
                <div className="text-white text-xs sm:text-sm px-2 py-1 bg-white/10 rounded-sm ml-auto mr-auto sm:mr-0 mt-3 sm:mt-0 w-fit">{exp.period}</div>
              </div>

              {/* Title Block */}
              <div className="group border border-white/5 bg-white/[0.01] p-6 hover:bg-white/[0.03] transition-colors rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <h2 className="text-2xl font-bold text-white group-hover:text-brand-green transition-colors mb-1">
                  {exp.role}
                </h2>
                <h3 className="text-lg text-zinc-400 mb-6 font-sans">
                  @ {exp.company}
                </h3>

                <p className="text-zinc-300 font-sans leading-relaxed mb-6 font-light">
                  <TypewriterText text={exp.description} speed={10} delay={500} cursor={false} />
                </p>

                {/* Bullets List */}
                <ul className="flex flex-col gap-4 mb-8">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-400 font-sans leading-relaxed">
                      <span className="text-brand-green mt-1">✓</span>
                      <TypewriterText text={bullet} speed={15} delay={1500 + (idx * 500)} cursor={false} />
                    </li>
                  ))}
                </ul>

                {/* Sub-projects branching */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="text-xs text-brand-violet mb-4 uppercase tracking-widest">// Sub-Modules Developed</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.projects.map((proj, idx) => (
                      <div key={idx} className="border border-white/5 bg-black p-4 rounded-sm hover:-translate-y-1 transition-transform cursor-crosshair">
                        <div className="text-white text-sm font-bold mb-2">{proj.name}</div>
                        <div className="text-zinc-500 text-xs font-sans">{proj.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}

          {/* Root Initialization Node */}
          <div className="relative z-10 pt-16">
            <div className="absolute -left-[29px] md:-left-[41px] top-[74px] w-[8px] h-[8px] rounded-full border-2 border-zinc-600 bg-black"></div>
            <div className="text-zinc-600 text-sm">
              [Initial Commit] User initiated development journey...
            </div>
          </div>

        </div>

        {/* Action button at bottom */}
        <div className="mt-24 flex justify-center">
          <Magnet padding={40}>
            <a 
              href="/Guduri%20Surya%20Mahesh%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Guduri_Surya_Mahesh_Resume.pdf"
              className="font-jetbrains flex items-center gap-2 border border-brand-green/30 text-brand-green px-6 py-3 rounded-sm hover:bg-brand-green/10 transition-colors shadow-[0_0_20px_rgba(0,255,157,0.1)]"
            >
              <span className="text-brand-green/50">&gt;</span> ./download_full_resume.pdf
            </a>
          </Magnet>
        </div>

      </div>

      <Footer />
    </main>
  );
}
