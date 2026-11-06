'use client';

import Image from 'next/image';
import Galaxy from '@/components/reactbits/Galaxy';
import LightRays from '@/components/reactbits/LightRays';
import SplitText from '@/components/reactbits/SplitText';
import ShinyText from '@/components/reactbits/ShinyText';
import RotatingText from '@/components/reactbits/RotatingText';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import FadeContent from '@/components/reactbits/FadeContent';
import StarBorder from '@/components/reactbits/StarBorder';
import LazyMount from './LazyMount';
import { ROLES } from './data';

export default function Hero({ live }: { live: boolean }) {
  const portrait = (
    <Image
      src="/image2.png"
      alt="Portrait of Guduri Surya Mahesh looking up into the light"
      width={500}
      height={500}
      preload
      unoptimized
      className="block h-auto w-full select-none [filter:contrast(1.08)_saturate(0.85)_brightness(0.96)_drop-shadow(0_0_40px_rgba(255,220,180,0.18))] [mask-image:linear-gradient(to_bottom,#000_62%,transparent_96%)]"
      draggable={false}
    />
  );

  return (
    <section id="top" className="relative isolate h-[100svh] min-h-[640px] w-full overflow-hidden bg-black">
      {/* deep space */}
      <LazyMount className="absolute inset-0 opacity-90">
        <Galaxy
          density={1.1}
          starSpeed={0.25}
          speed={0.6}
          rotationSpeed={0.04}
          glowIntensity={0.35}
          twinkleIntensity={0.45}
          saturation={0.15}
          hueShift={250}
          repulsionStrength={1.6}
          transparent={false}
          backgroundColor="#000000"
        />
      </LazyMount>

      {/* key light from above */}
      <LazyMount className="absolute inset-0 mix-blend-screen">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffe2b8"
          raysSpeed={0.7}
          lightSpread={0.85}
          rayLength={2.4}
          intensity={1.15}
          glow={0.75}
          haze={0.35}
          mouseInfluence={0.08}
          cursorShadow={false}
        />
      </LazyMount>

      {/* warm halo behind the head */}
      <div className="pointer-events-none absolute left-1/2 top-[30%] h-[70vmin] w-[70vmin] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,214,170,0.16),rgba(139,92,246,0.08)_45%,transparent_70%)] blur-2xl" />

      <h1 className="sr-only">Guduri Surya Mahesh — Full-Stack Engineer</h1>

      {/* poster title, sits behind the portrait */}
      <div className="pointer-events-none absolute inset-x-0 top-[15svh] z-10 flex flex-col items-center px-3 sm:top-[14svh]">
        {live && (
          <FadeContent trigger="mount" effect="focus" duration={1.6} delay={0.2}>
            <p className="mb-3 pl-[0.8em] font-mono text-sm uppercase tracking-[0.8em] text-amber-50 sm:text-base">
              <ShinyText text="Guduri" color="#eadbc2" shineColor="#ffffff" speed={3} />
            </p>
          </FadeContent>
        )}
        <div aria-hidden="true" className="min-h-[1em] font-display text-[clamp(4.25rem,15.5vw,17rem)] font-black uppercase leading-[0.82] tracking-[-0.01em] text-[#f6efe4] [text-shadow:0_0_80px_rgba(255,214,170,0.25)]">
          {live && (
            <SplitText
              text="Surya Mahesh"
              tag="span"
              trigger="load"
              effect="blur"
              splitType="chars"
              staggerFrom="center"
              delay={70}
              duration={1.6}
            />
          )}
        </div>
      </div>

      {/* the lead */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 w-[min(150vw,72svh,680px)] -translate-x-1/2 sm:w-[min(92vw,74svh,700px)]">
        {live ? (
          <AnimatedContent trigger="mount" distance={140} duration={2.2} delay={0.5} blur={14} scale={0.96} ease="power4.out">
            {portrait}
          </AnimatedContent>
        ) : (
          <div className="opacity-0">{portrait}</div>
        )}
      </div>

      {/* floor fade into the next scene */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[34svh] bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* billing block */}
      {live && (
        <div className="absolute inset-x-0 bottom-0 z-30 mx-auto flex w-full max-w-[90rem] flex-col items-center gap-6 px-6 pb-[max(2.5rem,5svh)] md:flex-row md:items-end md:justify-between md:px-10">
          <FadeContent trigger="mount" effect="mist" delay={1.4} duration={1.4} className="flex flex-col items-center gap-2 md:items-start">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500">Starring as</span>
            <RotatingText
              texts={ROLES}
              rotationInterval={2800}
              effect="blur"
              staggerFrom="first"
              staggerDuration={0.02}
              mainClassName="font-display text-2xl font-semibold uppercase tracking-[0.06em] text-zinc-100 sm:text-3xl"
            />
          </FadeContent>

          <FadeContent trigger="mount" effect="mist" delay={1.7} duration={1.4} className="flex flex-wrap items-center justify-center gap-3">
            <StarBorder as="a" href="#work" radius={999} color="#fde68a" stars={2} glow={0.8} className="font-mono text-xs uppercase tracking-[0.25em]">
              Watch the work
            </StarBorder>
          </FadeContent>
        </div>
      )}

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-zinc-500">Scroll</span>
        <span className="block h-10 w-px bg-gradient-to-b from-amber-100/80 to-transparent animate-scroll-cue" />
      </div>
    </section>
  );
}
