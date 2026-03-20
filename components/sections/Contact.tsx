'use client';

import { SpotlightCard } from '@/components/bits/SpotlightCard';
import { ShinyText } from '@/components/bits/ShinyText';
import { Magnet } from '@/components/bits/Magnet';
import { Marquee } from '@/components/bits/Marquee';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 pb-0">
      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="font-jetbrains text-brand-green/70 text-sm md:text-base text-center">
          <span className="text-zinc-500 mr-2">//</span>
          contact.md
        </div>

        <SpotlightCard className="p-8 md:p-16 rounded-sm w-full mx-auto flex flex-col items-center justify-center text-center gap-8">
          <ShinyText 
            text="// let's build something" 
            className="text-2xl md:text-4xl font-jetbrains font-bold text-white mb-2"
            speed={4}
          />
          
          <a href="mailto:hello@example.com" className="font-jetbrains text-xl md:text-2xl text-zinc-300 hover:text-brand-violet transition-colors">
            hello@example.com
          </a>

          <form className="w-full max-w-md flex flex-col gap-6 mt-8 text-left font-jetbrains">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-zinc-500 text-sm">Name __</label>
              <input 
                type="text" 
                id="name" 
                className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-brand-green transition-colors"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-zinc-500 text-sm">Email __</label>
              <input 
                type="email" 
                id="email" 
                className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-brand-green transition-colors"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-zinc-500 text-sm">Message __________</label>
              <textarea 
                id="message" 
                rows={4}
                className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-brand-green transition-colors resize-none"
              />
            </div>

            <div className="flex justify-center mt-6">
              <Magnet padding={40}>
                <button 
                  type="button" 
                  className="bg-brand-green text-black px-8 py-3 rounded-sm font-bold flex items-center gap-2 hover:bg-brand-green/90 transition-colors"
                >
                  <span className="text-black/60 font-normal">&gt;</span> send_message()
                </button>
              </Magnet>
            </div>
          </form>
        </SpotlightCard>

      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-800 bg-[#050505] pt-12 pb-8 mt-auto z-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-white font-jetbrains font-bold tracking-tight">
            <span className="text-zinc-500">~/</span> Guduri_Surya_Mahesh
          </div>
          <p className="text-zinc-500 font-sans text-sm">
            &copy; {new Date().getFullYear()} All systems nominal. Handcrafted with Next.js.
          </p>
        </div>

        <div className="flex items-center gap-6 font-jetbrains text-sm">
          <Magnet padding={20}>
            <a href="https://github.com/SuryaMahesh04" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              GitHub
            </a>
          </Magnet>
          <Magnet padding={20}>
            <a href="https://linkedin.com/in/suryamahesh004" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              LinkedIn
            </a>
          </Magnet>
          <Magnet padding={20}>
            <a href="mailto:suryamaheshguduri@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
              Email
            </a>
          </Magnet>
        </div>

      </div>
    </footer>
  );
};
