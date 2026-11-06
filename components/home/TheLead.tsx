'use client';

import ProfileCard from '@/components/reactbits/ProfileCard';
import ScrollFloat from '@/components/reactbits/ScrollFloat';
import BlurText from '@/components/reactbits/BlurText';
import CountUp from '@/components/reactbits/CountUp';
import FadeContent from '@/components/reactbits/FadeContent';
import GradientText from '@/components/reactbits/GradientText';
import Chapter from './Chapter';
import { EMAIL, STATS } from './data';

export default function TheLead() {
  return (
    <section id="about" className="relative overflow-x-clip bg-black px-6 py-[16vh] md:px-10">
      {/* off-axis key light */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[70vmin] w-[70vmin] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.18),transparent_65%)] blur-3xl" />

      <Chapter index="II" title="The Lead" />

      <div className="relative mx-auto mt-12 grid max-w-6xl items-center gap-16 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-20">
        <FadeContent effect="develop" duration={1.6} className="flex justify-center lg:justify-start">
          <ProfileCard
            avatarUrl="/surya-card.jpg"
            name="Guduri Surya Mahesh"
            title="Full-Stack & Applied AI Engineer"
            handle="SuryaMahesh04"
            status="Open to work"
            statusColor="#4ade80"
            contactText="Contact"
            backdropColor="#2b2140"
            holo={0.9}
            glare={0.55}
            tiltStrength={14}
            onContactClick={() => {
              window.location.href = `mailto:${EMAIL}`;
            }}
          />
        </FadeContent>

        <div className="flex flex-col">
          <ScrollFloat
            effect="float"
            containerClassName="!my-0"
            textClassName="font-display !text-left !text-[clamp(3.25rem,8vw,7.5rem)] uppercase !leading-[0.9] tracking-[-0.01em] text-zinc-50"
            scrollStart="top bottom-=10%"
            scrollEnd="center center+=10%"
          >
            Cast as the engineer
          </ScrollFloat>

          <div className="mt-8 max-w-2xl text-xl font-light leading-relaxed text-zinc-200 md:text-2xl">
            <BlurText
              text="I build production web platforms end to end: architecture, data, backend, frontend, integrations, and deployment."
              animateBy="words"
              delay={60}
              direction="bottom"
            />
          </div>

          <FadeContent effect="mist" delay={0.3} className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-zinc-400 md:text-lg">
            <p>
              My work sits where applied AI meets real commercial systems:{' '}
              <GradientText colors={['#c4b5fd', '#fde68a', '#c4b5fd']} animationSpeed={6} className="font-medium">
                real-time voice agents
              </GradientText>
              , LLM orchestration and RAG, generative video, payment and payout infrastructure, and multi-role
              operational dashboards.
            </p>
            <p>
              At Morphius AI, every platform in the feature list shipped to real users, from schema and APIs to the
              interface and the infrastructure underneath.
            </p>
          </FadeContent>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:gap-8">
            {STATS.map(stat => (
              <div key={stat.label} className="flex flex-col gap-2">
                <dt className="order-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 sm:text-[11px]">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display text-5xl font-bold tabular-nums text-zinc-50 sm:text-6xl md:text-7xl">
                  <CountUp to={stat.to} suffix={stat.suffix} duration={2.4} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
