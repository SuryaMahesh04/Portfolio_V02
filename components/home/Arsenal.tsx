'use client';

import {
  SiArduino,
  SiDocker,
  SiGithubactions,
  SiGsap,
  SiMongodb,
  SiPrisma,
  SiRedis,
  SiSocketdotio,
  SiTensorflow,
  SiThreedotjs,
  SiVercel,
  SiElevenlabs,
  SiExpress,
  SiFirebase,
  SiGooglegemini,
  SiJavascript,
  SiKotlin,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiRazorpay,
  SiReact,
  SiSolidity,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si';
import MagicBento, { type MagicBentoItem } from '@/components/reactbits/MagicBento';
import LogoLoop, { type LogoItem } from '@/components/reactbits/LogoLoop';
import GradientText from '@/components/reactbits/GradientText';
import SplitText from '@/components/reactbits/SplitText';
import Chapter from './Chapter';

const BENTO: MagicBentoItem[] = [
  {
    label: 'Frontend',
    icon: <SiReact />,
    title: 'Interfaces that feel alive',
    description: 'Next.js 14–16, React 19, Tailwind 4, GSAP, Three.js, full RTL Arabic.',
    visual: 'dashboard'
  },
  {
    label: 'Payments',
    icon: <SiRazorpay />,
    title: 'Money that moves safely',
    description: 'Razorpay and RazorpayX: subscriptions, split payouts, webhooks, live revenue dashboards.',
    visual: 'analytics'
  },
  {
    label: 'AI Integration',
    icon: <SiGooglegemini />,
    title: 'Agents that plan, act, and self-correct',
    description: 'Gemini Live voice agents, OpenAI, ElevenLabs, fal.ai video, RAG on Pinecone, and MCP servers: AI that ships work, not just answers.',
    visual: 'automation',
    colSpan: 2,
    rowSpan: 2
  },
  {
    label: 'Backend',
    icon: <SiNodedotjs />,
    title: 'APIs built to hold the line',
    description: 'Node.js, Express, MongoDB, PostgreSQL + Prisma, Redis, Socket.IO, and edge JWT auth for multi-tenant, role-based systems.',
    visual: 'integration',
    colSpan: 2,
    rowSpan: 2
  },
  {
    label: 'Cloud & DevOps',
    icon: <SiDocker />,
    title: 'Shipped, not just built',
    description: 'AWS S3 and IVS, Docker, GitHub Actions, Vercel.',
    visual: 'security'
  },
  {
    label: 'Languages',
    icon: <SiTypescript />,
    title: 'Fluent in the stack',
    description: 'TypeScript, JavaScript, Python, SQL, GLSL.',
    visual: 'collaboration'
  }
];

const LOGOS: LogoItem[] = [
  { node: <SiReact />, title: 'React', hoverColor: '#61dafb' },
  { node: <SiNextdotjs />, title: 'Next.js', hoverColor: '#ffffff' },
  { node: <SiTypescript />, title: 'TypeScript', hoverColor: '#3178c6' },
  { node: <SiJavascript />, title: 'JavaScript', hoverColor: '#f7df1e' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', hoverColor: '#38bdf8' },
  { node: <SiNodedotjs />, title: 'Node.js', hoverColor: '#5fa04e' },
  { node: <SiExpress />, title: 'Express', hoverColor: '#ffffff' },
  { node: <SiMongodb />, title: 'MongoDB', hoverColor: '#47a248' },
  { node: <SiRedis />, title: 'Redis', hoverColor: '#ff4438' },
  { node: <SiPrisma />, title: 'Prisma', hoverColor: '#ffffff' },
  { node: <SiSocketdotio />, title: 'Socket.IO', hoverColor: '#ffffff' },
  { node: <SiPostgresql />, title: 'PostgreSQL', hoverColor: '#4169e1' },
  { node: <SiFirebase />, title: 'Firebase', hoverColor: '#ffca28' },
  { node: <SiGooglegemini />, title: 'Gemini API', hoverColor: '#8e75ff' },
  { node: <SiElevenlabs />, title: 'ElevenLabs', hoverColor: '#ffffff' },
  { node: <SiRazorpay />, title: 'Razorpay', hoverColor: '#3395ff' },
  { node: <SiTensorflow />, title: 'TensorFlow.js', hoverColor: '#ff6f00' },
  { node: <SiThreedotjs />, title: 'Three.js', hoverColor: '#ffffff' },
  { node: <SiGsap />, title: 'GSAP', hoverColor: '#0ae448' },
  { node: <SiDocker />, title: 'Docker', hoverColor: '#2496ed' },
  { node: <SiGithubactions />, title: 'GitHub Actions', hoverColor: '#2088ff' },
  { node: <SiVercel />, title: 'Vercel', hoverColor: '#ffffff' },
  { node: <SiPython />, title: 'Python', hoverColor: '#ffd43b' },
  { node: <SiOpenjdk />, title: 'Java', hoverColor: '#f89820' },
  { node: <SiKotlin />, title: 'Kotlin', hoverColor: '#a97bff' },
  { node: <SiSolidity />, title: 'Solidity', hoverColor: '#ffffff' },
  { node: <SiArduino />, title: 'Embedded / IoT', hoverColor: '#00979d' }
];

export default function Arsenal() {
  return (
    <section id="arsenal" className="relative overflow-x-clip bg-black py-[14vh]">
      <div className="pointer-events-none absolute right-[-20%] top-0 h-[80vmin] w-[80vmin] rounded-full bg-[radial-gradient(circle,rgba(253,230,138,0.08),transparent_65%)] blur-3xl" />

      <div className="px-6 md:px-10">
        <Chapter index="III" title="The Arsenal" />
        <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-[clamp(3rem,8vw,7.5rem)] font-black uppercase leading-[0.88] tracking-[-0.01em]">
            <SplitText text="Tools of" tag="span" effect="rise" splitType="chars" delay={35} textAlign="left" className="text-zinc-50" />
            <br />
            <GradientText
              colors={['#c4b5fd', '#fde68a', '#7dd3fc', '#c4b5fd']}
              animationSpeed={7}
              variant="flow"
              className="!m-0"
            >
              the trade
            </GradientText>
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-zinc-400 md:pb-3">
            Every scene needs the right gear. These are the tools I reach for when a system has to work the first time
            and keep working.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-6xl">
          <MagicBento
            items={BENTO}
            columns={4}
            rowHeight={200}
            gap={12}
            radius={22}
            glowColor="#a78bfa"
            enableStars
            particleCount={10}
            enableSpotlight
            spotlightRadius={320}
            enableBorderGlow
            enableTilt={false}
            enableMagnetism
            clickEffect
          />
        </div>
      </div>

      <div className="mt-20 text-zinc-500">
        <LogoLoop
          logos={LOGOS}
          speed={55}
          logoHeight={40}
          gap={64}
          fadeOut
          fadeOutColor="#000000"
          scaleOnHover
          labels="hover"
          pauseOnHover
          ariaLabel="Technologies I work with"
        />
      </div>
    </section>
  );
}
