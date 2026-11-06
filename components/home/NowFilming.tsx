'use client';

import { useRef, type ReactNode } from 'react';
import LaserFlow from '@/components/reactbits/LaserFlow';
import DecryptedText from '@/components/reactbits/DecryptedText';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import FadeContent from '@/components/reactbits/FadeContent';
import TiltedPoster from './TiltedPoster';
import LazyMount from './LazyMount';
import Chapter from './Chapter';
import { EXPERIENCE, FEATURES } from './data';

/** Classic clapper stripes, toned down: warm off-white on graphite. */
const STRIPES = 'repeating-linear-gradient(-58deg, #e7e2d9 0 16px, #141318 16px 32px)';

function Field({ label, children, className = '' }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-2 border-white/[0.08] px-5 py-5 sm:px-7 ${className}`}>
      <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-500">{label}</span>
      <div className="font-display text-2xl font-semibold uppercase leading-tight tracking-[0.03em] text-zinc-100 sm:text-[1.7rem]">
        {children}
      </div>
    </div>
  );
}

function ClapperBar({ hinge = false }: { hinge?: boolean }) {
  return (
    <div className="relative h-8 overflow-hidden rounded-[10px] ring-1 ring-black/60 sm:h-9" aria-hidden="true">
      <div className="absolute inset-0" style={{ background: STRIPES }} />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18),transparent_40%,rgba(0,0,0,0.35))]" />
      {hinge && (
        <span className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-zinc-300 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.6)] ring-2 ring-zinc-900" />
      )}
    </div>
  );
}

export default function NowFilming() {
  const slateRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" className="relative isolate overflow-hidden bg-black pb-[14vh] pt-[14vh]">
      {/* a single, precise beam that finds the set */}
      <LazyMount className="absolute inset-0 -z-10">
        <LaserFlow
          surfaceRef={slateRef}
          beamPosition={0.5}
          color="#b9a6ff"
          intensity={0.95}
          beamWidth={0.8}
          flare={0.7}
          spread={0.6}
          spill={0.25}
          fog={0.08}
          dust={0.5}
          streaks={0.6}
          pulse={0.8}
          speed={0.7}
        />
      </LazyMount>
      {/* keep the room dark around the set */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_45%,transparent_35%,rgba(0,0,0,0.85)_100%)]" />

      <div className="px-6 md:px-10">
        <Chapter index="V" title="Currently Filming" />
      </div>

      <div className="mx-auto mt-[22vh] max-w-5xl px-4 sm:px-6">
        <div ref={slateRef} className="relative rounded-[18px]">
          {/* clapper: the top stick snaps shut onto the fixed bottom stick */}
          <div className="relative mb-1.5">
            <AnimatedContent
              distance={0}
              rotate={-16}
              duration={0.8}
              ease="back.out(2.4)"
              threshold={0.5}
              className="relative z-10 origin-bottom-left"
            >
              <ClapperBar hinge />
            </AnimatedContent>
          </div>
          <ClapperBar />

          <div className="relative mt-1.5 overflow-hidden rounded-[18px] border border-white/[0.09] bg-[linear-gradient(180deg,#121019_0%,#0a090e_100%)] shadow-[0_50px_120px_-50px_rgba(139,92,246,0.45),inset_0_1px_0_rgba(255,255,255,0.06)]">
            {/* chalk texture */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(255,255,255,0.9)_0.6px,transparent_0.6px)] [background-size:5px_5px]" />

            <div className="relative grid grid-cols-2 sm:grid-cols-4">
              <Field label="Production" className="col-span-2 border-b sm:col-span-4">
                <span className="flex flex-wrap items-end justify-between gap-4">
                  <span className="text-[clamp(3rem,9vw,6.5rem)] font-black leading-[0.86] tracking-[-0.01em] text-zinc-50">
                    <DecryptedText
                      text={EXPERIENCE.company}
                      animateOn="view"
                      sequential
                      speed={55}
                      encryptedClassName="text-violet-300/60"
                    />
                  </span>
                  <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-red-400/25 bg-red-500/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.3em] text-red-200">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-70 motion-reduce:animate-none" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                    </span>
                    REC
                  </span>
                </span>
              </Field>
              <Field label="Role" className="col-span-2 border-b sm:border-r">
                {EXPERIENCE.role}
              </Field>
              <Field label="Date" className="col-span-2 border-b">
                {EXPERIENCE.period}
              </Field>
              <Field label="Scene" className="col-span-2 border-b border-r">
                Five production platforms
              </Field>
              <Field label="Roll" className="border-b border-r">
                01
              </Field>
              <Field label="Take" className="border-b">
                ∞
              </Field>
            </div>

            {/* filmography shot at Morphius AI */}
            <div className="relative border-b border-white/[0.08] px-5 py-7 sm:px-7">
              <div className="flex items-end justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-500">Filmed on this set</span>
                <a
                  href="#work"
                  className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400 transition-colors hover:text-white"
                >
                  Watch the reel ↑
                </a>
              </div>
              <FadeContent effect="develop" stagger={0.1} className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-5 sm:gap-4">
                {FEATURES.map(feature => (
                  <TiltedPoster key={feature.id} feature={feature} />
                ))}
              </FadeContent>
            </div>

            {/* shot list */}
            <div className="relative px-5 py-7 sm:px-7">
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-500">Shot list</span>
              <p className="mt-3 max-w-3xl text-lg leading-relaxed text-zinc-200 md:text-xl">{EXPERIENCE.summary}</p>
              <ol className="mt-6 flex flex-col divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {EXPERIENCE.bullets.map((bullet, i) => (
                  <li key={bullet} className="grid grid-cols-[4.5rem_1fr] items-baseline gap-4 py-4 sm:grid-cols-[6rem_1fr]">
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-violet-300/90">
                      Shot {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base leading-relaxed text-zinc-300">{bullet}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

