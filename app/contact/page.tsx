'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/sections/Contact';
import { SpotlightCard } from '@/components/bits/SpotlightCard';
import { GradientText } from '@/components/bits/GradientText';
import { Magnet } from '@/components/bits/Magnet';

export default function ContactPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleNext = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (step === 0 && formData.name) setStep(1);
      else if (step === 1 && formData.email) setStep(2);
      else if (step === 2 && formData.message) setStep(3); // Submit
    }
  };

  return (
    <main className="min-h-screen bg-black text-white relative flex flex-col pt-32 selection:bg-brand-green/30">
      <Navbar />
      
      <div className="flex-grow flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-6 md:px-12 pb-24">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
            INITIATE_CONNECTION
          </h1>
          <p className="text-zinc-400 font-sans text-lg">
            Reach out via <GradientText text="suryamaheshguduri@gmail.com" /> or use the terminal.
          </p>
        </div>

        <SpotlightCard className="w-full max-w-2xl p-1 rounded-sm border border-white/10 shadow-[0_0_40px_rgba(124,58,237,0.15)] bg-white/[0.01]">
          <div className="bg-black/80 w-full h-full p-6 md:p-10 font-jetbrains text-sm md:text-base">
            
            {/* Terminal Top Bar */}
            <div className="flex gap-2 mb-8 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-brand-green/80"></div>
              <span className="text-zinc-500 text-xs ml-4">guest@portfolio: ~/contact</span>
            </div>

            <div className="flex flex-col gap-6">
              {/* Step 0: Name */}
              <div className="flex flex-col gap-2">
                <div className="text-zinc-400">
                  <span className="text-brand-green mr-2">➜</span>
                  <span className="text-brand-violet mr-2">~</span> 
                  Enter your name:
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-600 block w-4 text-center">{step === 0 ? '❯' : '✓'}</span>
                  {step > 0 ? (
                    <span className="text-white bg-white/5 px-2 py-1 rounded">{formData.name}</span>
                  ) : (
                    <input 
                      type="text" 
                      autoFocus
                      className="bg-transparent border-none outline-none text-brand-green w-full focus:ring-0 placeholder:text-zinc-700"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onKeyDown={handleNext}
                    />
                  )}
                </div>
              </div>

              {/* Step 1: Email */}
              {step >= 1 && (
                <div className="flex flex-col gap-2 animate-fade-in">
                  <div className="text-zinc-400">
                    <span className="text-brand-green mr-2">➜</span>
                    <span className="text-brand-violet mr-2">~</span> 
                    Enter your email:
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-600 block w-4 text-center">{step === 1 ? '❯' : '✓'}</span>
                    {step > 1 ? (
                      <span className="text-white bg-white/5 px-2 py-1 rounded">{formData.email}</span>
                    ) : (
                      <input 
                        type="email" 
                        autoFocus
                        className="bg-transparent border-none outline-none text-brand-green w-full focus:ring-0 placeholder:text-zinc-700"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onKeyDown={handleNext}
                      />
                    )}
                  </div>
                </div>
              )}

              {/* Step 2: Message */}
              {step >= 2 && (
                <div className="flex flex-col gap-2 animate-fade-in">
                  <div className="text-zinc-400">
                    <span className="text-brand-green mr-2">➜</span>
                    <span className="text-brand-violet mr-2">~</span> 
                    Enter your message (Shift+Enter for newline, Enter to send):
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-600 block w-4 text-center mt-1">{step === 2 ? '❯' : '✓'}</span>
                    {step > 2 ? (
                      <div className="text-white bg-white/5 p-3 rounded w-full whitespace-pre-wrap">{formData.message}</div>
                    ) : (
                      <textarea 
                        autoFocus
                        className="bg-zinc-900 border border-white/10 rounded-sm p-3 outline-none text-brand-green w-full min-h-[100px] focus:border-brand-green/50 focus:ring-1 focus:ring-brand-green/50 resize-y"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onKeyDown={handleNext}
                      />
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Success */}
              {step >= 3 && (
                <div className="animate-fade-in-up mt-8 border border-brand-green/30 bg-brand-green/5 p-4 rounded-sm flex flex-col gap-2">
                  <span className="text-brand-green font-bold">Transmitting payload... [OK]</span>
                  <span className="text-white">Message successfully delivered to Surya Mahesh.</span>
                  <span className="text-zinc-500 text-xs mt-2">I'll get back to you shortly.</span>
                </div>
              )}
            </div>
          </div>
        </SpotlightCard>

        {/* Social Links */}
        <div className="flex gap-6 mt-16 font-jetbrains">
          <Magnet padding={30}>
            <a href="https://github.com/SuryaMahesh04" target="_blank" className="text-zinc-500 hover:text-white transition-colors">
              ./github
            </a>
          </Magnet>
          <Magnet padding={30}>
            <a href="https://linkedin.com/in/suryamahesh004" target="_blank" className="text-zinc-500 hover:text-white transition-colors">
              ./linkedin
            </a>
          </Magnet>
          <Magnet padding={30}>
            <a href="mailto:suryamaheshguduri@gmail.com" className="text-zinc-500 hover:text-white transition-colors">
              ./email
            </a>
          </Magnet>
        </div>

      </div>

      <Footer />
    </main>
  );
}
