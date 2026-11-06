'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import DepthCarousel from '@/components/reactbits/DepthCarousel';
import DecryptedText from '@/components/reactbits/DecryptedText';
import SplitText from '@/components/reactbits/SplitText';
import ShinyText from '@/components/reactbits/ShinyText';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import FadeContent from '@/components/reactbits/FadeContent';
import Chapter from './Chapter';
import { FEATURES, SHORTS } from './data';

const posterOf = (id: string) => `/posters/feature-${id}.jpg`;
const POSTERS = FEATURES.map(f => ({ image: posterOf(f.id), alt: `${f.title} poster` }));

function usePosterSize() {
  const [size, setSize] = useState({ w: 300, h: 450 });
  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const w = Math.round(Math.min(vw < 640 ? 265 : vw < 1024 ? 290 : 330, (vh * 0.56) / 1.5));
      setSize({ w, h: Math.round(w * 1.5) });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return size;
}

export default function Features() {
  const [active, setActive] = useState(0);
  const { w, h } = usePosterSize();
  const f = FEATURES[active];

  return (
    <section id="work" className="relative isolate overflow-hidden bg-black pt-[14vh]">
      {/* projector spill: the active poster lights the whole room */}
      <AnimatePresence>
        <motion.div
          key={f.id}
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[18%] -z-10 h-[70%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- decorative blurred light, not content */}
          <img src={posterOf(f.id)} alt="" className="h-full w-full scale-125 object-cover blur-[100px] saturate-150" />
        </motion.div>
      </AnimatePresence>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_70%_at_50%_55%,transparent_30%,#000_78%)]" />

      <div className="px-6 md:px-10">
        <Chapter index="IV" title="Now Showing" />
        <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-[clamp(3rem,9vw,8.5rem)] font-black uppercase leading-[0.86] tracking-[-0.01em] text-zinc-50">
            <SplitText text="Feature" tag="span" effect="rise" splitType="chars" delay={40} textAlign="left" />
            <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(253,230,138,0.85)]">
              <SplitText text="Presentations" tag="span" effect="rise" splitType="chars" delay={30} textAlign="left" />
            </span>
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-zinc-400 md:pb-3">
            Five production platforms built at Morphius AI across fintech, voice AI, edtech, commerce, and the
            non-profit world, 500K+ lines of code. Drag, swipe, or use the arrows to change the reel.
          </p>
        </div>
      </div>

      {/* the hall */}
      <div className="mx-auto mt-10 grid max-w-7xl items-center gap-6 px-6 md:px-10 lg:mt-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10">
        <div className="order-2 lg:order-1" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.article
              key={f.id}
              initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -16, filter: 'blur(8px)' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em]">
                <span style={{ color: f.hue }}>Feature {f.id}</span>
                <span className="text-zinc-600">/ {String(FEATURES.length).padStart(2, '0')}</span>
                <span className="h-px w-8 bg-white/20" />
                <span className="text-zinc-300">{f.genre}</span>
              </div>

              <h3 className="mt-5 font-display text-[clamp(3rem,6.5vw,6rem)] font-black uppercase leading-[0.86] tracking-[-0.01em] text-zinc-50">
                <DecryptedText
                  text={f.title}
                  animateOn="view"
                  sequential
                  speed={28}
                  revealDirection="start"
                  encryptedClassName="opacity-60"
                />
              </h3>

              <p className="mt-4 font-mono text-xs uppercase tracking-[0.22em]">
                <ShinyText text={f.tagline} color={f.hue} shineColor="#ffffff" speed={3.5} />
              </p>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg">{f.logline}</p>

              <div className="mt-7 flex flex-col gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">Starring</span>
                <ul className="flex flex-wrap gap-2">
                  {f.cast.map(tech => (
                    <li
                      key={tech}
                      className="rounded-full border px-3 py-1 font-mono text-[11px] text-zinc-200 backdrop-blur-sm"
                      style={{ borderColor: `${f.hue}55`, background: `${f.hue}14` }}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <span className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">{f.scale}</span>
              </div>
            </motion.article>
          </AnimatePresence>

          {/* reel progress */}
          <div className="mt-10 flex items-center gap-2" aria-hidden="true">
            {FEATURES.map((feature, i) => (
              <span
                key={feature.id}
                className="h-[3px] flex-1 rounded-full transition-all duration-500"
                style={{ background: i === active ? feature.hue : 'rgba(255,255,255,0.12)', maxWidth: i === active ? 64 : 28 }}
              />
            ))}
          </div>
        </div>

        <div className="order-1 h-[calc(var(--poster-h)+130px)] lg:order-2" style={{ ['--poster-h' as string]: `${h}px` }}>
          <DepthCarousel
            items={POSTERS}
            cardWidth={w}
            cardHeight={h}
            radius={14}
            tint="#000000"
            depth={240}
            spread={Math.round(w * 0.36)}
            tilt={24}
            visibleCards={3}
            falloff={0.28}
            blur={4}
            duration={850}
            autoplay
            autoplayDelay={5200}
            onChange={index => setActive(index)}
          />
        </div>
      </div>

      {/* the shorts programme: earlier work */}
      <div className="px-6 pb-[8vh] pt-[12vh] md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h3 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-black uppercase leading-[0.9] text-zinc-50">
              Also screening <span className="text-zinc-500">— the shorts</span>
            </h3>
          </div>

          <FadeContent effect="mist" stagger={0.12} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SHORTS.map(short => (
              <SpotlightCard key={short.title} spotlightColor="rgba(253, 230, 138, 0.18)" className="flex h-full flex-col !p-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-amber-200/80">{short.genre}</span>
                <h4 className="mt-3 font-display text-3xl font-bold uppercase leading-none text-zinc-50">{short.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{short.logline}</p>
                <p className="mt-auto pt-6 font-mono text-[11px] text-zinc-500">{short.cast.join(' · ')}</p>
              </SpotlightCard>
            ))}
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
