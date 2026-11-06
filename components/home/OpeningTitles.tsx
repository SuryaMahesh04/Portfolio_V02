'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import ShinyText from '@/components/reactbits/ShinyText';
import BlurText from '@/components/reactbits/BlurText';

/**
 * Timeline (ms from mount):
 *   0    – 1500  name and "presents" resolve in
 *   1500 – 3700  both lines hold, fully readable (~2.2 s)
 *   3700 – 4800  curtain fades and the letterbox opens
 */
const REVEAL_MS = 1500;
const HOLD_MS = 2200;
const FADE_S = 1.1;

/** A studio-card cold open on every visit; click or any key skips it. */
export default function OpeningTitles({ onCue }: { onCue: () => void }) {
  const [show, setShow] = useState(true);
  const [instant, setInstant] = useState(false);
  const cued = useRef(false);

  const finish = useCallback(() => {
    if (cued.current) return;
    cued.current = true;
    setShow(false);
    onCue();
  }, [onCue]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const frame = requestAnimationFrame(() => {
        setInstant(true);
        finish();
      });
      return () => cancelAnimationFrame(frame);
    }
    const timer = window.setTimeout(finish, REVEAL_MS + HOLD_MS);
    window.addEventListener('keydown', finish, { once: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', finish);
    };
  }, [finish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="opening-titles"
          className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-black"
          onClick={finish}
          exit={{ opacity: 0 }}
          transition={{ duration: instant ? 0 : FADE_S, ease: [0.65, 0, 0.35, 1] }}
          role="presentation"
        >
          {/* letterbox bars */}
          <motion.div
            className="absolute inset-x-0 top-0 h-[12vh] border-b border-white/5 bg-black"
            initial={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            style={{ transformOrigin: 'top' }}
            transition={{ duration: FADE_S, ease: [0.65, 0, 0.35, 1] }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-[12vh] border-t border-white/5 bg-black"
            initial={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            style={{ transformOrigin: 'bottom' }}
            transition={{ duration: FADE_S, ease: [0.65, 0, 0.35, 1] }}
          />

          <div className="relative flex flex-col items-center gap-5 px-6 text-center">
            <motion.div
              initial={{ opacity: 0, letterSpacing: '0.3em' }}
              animate={{ opacity: 1, letterSpacing: '0.55em' }}
              transition={{
                opacity: { duration: 0.7, delay: 0.15, ease: 'easeOut' },
                letterSpacing: { duration: 3.4, ease: [0.22, 1, 0.36, 1] }
              }}
              className="pl-[0.55em] font-mono text-xs uppercase text-zinc-300 sm:text-sm"
            >
              <ShinyText text="Guduri Surya Mahesh" color="#a1a1aa" shineColor="#fde68a" speed={2.2} />
            </motion.div>
            <div className="font-display text-5xl font-light uppercase tracking-[0.18em] text-zinc-100 sm:text-7xl">
              <BlurText text="presents" trigger="load" delay={70} animateBy="letters" direction="bottom" stepDuration={0.3} />
            </div>
          </div>

          <span className="absolute bottom-[4vh] right-6 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            Click to skip
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
