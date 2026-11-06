'use client';

import LightPillar from '@/components/reactbits/LightPillar';
import CurvedLoop from '@/components/reactbits/CurvedLoop';
import TextPressure from '@/components/reactbits/TextPressure';
import StarBorder from '@/components/reactbits/StarBorder';
import FadeContent from '@/components/reactbits/FadeContent';
import LazyMount from './LazyMount';
import Chapter from './Chapter';
import { EMAIL, GITHUB, LINKEDIN } from './data';

const CREDITS = [
  { role: 'Directed by', name: 'Guduri Surya Mahesh' },
  { role: 'Written in', name: 'TypeScript' },
  { role: 'Visual effects', name: 'React Bits' },
  { role: 'Filmed on location', name: 'Hyderabad, India' }
];

export default function Finale() {
  return (
    <section id="contact" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-black pt-[14vh]">
      <LazyMount className="absolute inset-0 -z-10 opacity-80">
        <LightPillar
          topColor="#8b5cf6"
          bottomColor="#fde68a"
          intensity={0.9}
          rotationSpeed={0.2}
          glowAmount={0.0025}
          pillarWidth={3.2}
          pillarHeight={0.45}
          pillarRotation={18}
          noiseIntensity={0.35}
          quality="medium"
        />
      </LazyMount>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black to-transparent" />

      <div className="px-6 md:px-10">
        <Chapter index="VI" title="The Finale" align="center" />
      </div>

      <div className="mt-6 text-amber-100/90">
        <CurvedLoop
          marqueeText="Available for new projects ✦ Let's build something legendary ✦ "
          speed={1.2}
          curveAmount={180}
          fontSize={64}
          fontWeight={800}
          interactive
          className="font-display uppercase"
        />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-10 px-6 md:px-10">
        <div className="h-[clamp(7rem,20vw,16rem)] w-full">
          <TextPressure text="Say Hello" textColor="#fafafa" minFontSize={56} weight width italic={false} idle="wave" idleSpeed={0.8} />
        </div>

        <FadeContent effect="focus" className="flex flex-col items-center gap-6">
          <StarBorder
            as="a"
            href={`mailto:${EMAIL}`}
            radius={999}
            color="#fde68a"
            stars={3}
            glow={0.9}
            sparkle
            className="px-8 py-4 text-base sm:text-lg"
          >
            {EMAIL}
          </StarBorder>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: 'GitHub', href: GITHUB },
              { label: 'LinkedIn', href: LINKEDIN }
            ].map(link => (
              <StarBorder
                key={link.label}
                as="a"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                radius={999}
                color="#a78bfa"
                hover="brighten"
                className="font-mono text-[11px] uppercase tracking-[0.25em]"
              >
                {link.label}
              </StarBorder>
            ))}
          </div>
        </FadeContent>
      </div>

      {/* end credits */}
      <footer className="mt-20 border-t border-white/10 bg-black/60 px-6 py-12 backdrop-blur-md md:px-10">
        <FadeContent effect="mist" stagger={0.15} className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
          {CREDITS.map(credit => (
            <div key={credit.role} className="flex flex-col gap-1.5 text-center md:text-left">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">{credit.role}</span>
              <span className="font-display text-xl font-semibold uppercase tracking-[0.06em] text-zinc-100">{credit.name}</span>
            </div>
          ))}
        </FadeContent>
        <p className="mx-auto mt-10 max-w-6xl text-center font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400 md:text-left">
          © {new Date().getFullYear()} Guduri Surya Mahesh · No AI agents were harmed in the making of this site
        </p>
      </footer>
    </section>
  );
}
