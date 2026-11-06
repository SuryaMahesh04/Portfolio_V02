'use client';

import { useCallback, useState } from 'react';
import ClickSpark from '@/components/reactbits/ClickSpark';
import Noise from '@/components/reactbits/Noise';
import GradualBlur from '@/components/reactbits/GradualBlur';
import StaggeredMenu from '@/components/reactbits/StaggeredMenu';
import OpeningTitles from './OpeningTitles';
import Hero from './Hero';
import Prologue from './Prologue';
import TheLead from './TheLead';
import Arsenal from './Arsenal';
import Features from './Features';
import NowFilming from './NowFilming';
import Finale from './Finale';
import { MENU_ITEMS, SOCIAL_ITEMS } from './data';

export default function HomeExperience() {
  const [live, setLive] = useState(false);
  const cue = useCallback(() => setLive(true), []);

  return (
    <ClickSpark sparkColor={['#ffffff', '#fde68a', '#c4b5fd']} sparkCount={10} sparkRadius={26} sparkSize={12} shape="star" glow={0.6}>
      <main className="relative w-full overflow-x-clip bg-black text-zinc-200 selection:bg-violet-500/40 selection:text-white">
        <OpeningTitles onCue={cue} />

        <StaggeredMenu
          isFixed
          position="right"
          items={MENU_ITEMS}
          socialItems={SOCIAL_ITEMS}
          displaySocials
          displayItemNumbering
          logoUrl="/gsm-mark.svg"
          menuButtonColor="#f4f4f5"
          openMenuButtonColor="#0a0a0a"
          changeMenuColorOnOpen
          colors={['#2e1065', '#8b5cf6']}
          accentColor="#7c3aed"
          className="font-display"
        />

        <Hero live={live} />
        <Prologue />
        <TheLead />
        <Arsenal />
        <Features />
        <NowFilming />
        <Finale />
      </main>

      {/* top letterbox scrim keeps the logo and menu legible over any scene */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[35] h-28 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />

      {/* film stock: grain, dust, and the odd scratch */}
      <Noise fixed opacity={0.07} blendMode="overlay" fps={18} dust={0.25} scratches={0.12} flicker={0.04} zIndex={70} />
      <GradualBlur target="page" position="bottom" height="4.5rem" strength={1.4} layers={6} curve="bezier" zIndex={30} />
    </ClickSpark>
  );
}
