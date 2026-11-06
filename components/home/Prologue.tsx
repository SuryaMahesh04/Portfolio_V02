'use client';

import ScrollReveal from '@/components/reactbits/ScrollReveal';
import ScrollVelocity from '@/components/reactbits/ScrollVelocity';
import Chapter from './Chapter';

export default function Prologue() {
  return (
    <>
      <section className="relative bg-black px-6 pb-[16vh] pt-[18vh] md:px-10">
        <Chapter index="I" title="Prologue" />
        <div className="mx-auto mt-10 max-w-6xl">
          <ScrollReveal
            enableBlur
            baseOpacity={0.06}
            baseRotation={3}
            blurStrength={8}
            textClassName="font-display !text-[clamp(2.4rem,6.2vw,5.6rem)] !font-bold uppercase !leading-[0.98] tracking-[-0.005em] text-zinc-100"
          >
            I build software like it&apos;s headed for the big screen. Architected for scale. Engineered never to drop a
            frame. Crafted until every detail feels inevitable.
          </ScrollReveal>
          <p className="mt-10 max-w-xl font-mono text-xs uppercase leading-relaxed tracking-[0.25em] text-zinc-500">
            Full-stack engineer · B.Tech CSE (IoT) · Hyderabad, India
          </p>
        </div>
      </section>

      <section aria-label="Disciplines" className="relative overflow-hidden border-y border-white/5 bg-black py-10">
        <ScrollVelocity
          texts={['Full-Stack Engineering ✦ AI Agents ✦ ', 'Systems Architecture ✦ IoT ✦ Payments ✦ ']}
          velocity={55}
          numCopies={6}
          outlineAlternate
          fadeEdges
          skewWithVelocity={6}
          className="font-display font-black uppercase tracking-[-0.01em] text-zinc-100"
          fontSize="clamp(3.5rem, 9vw, 8.5rem)"
        />
      </section>
    </>
  );
}
