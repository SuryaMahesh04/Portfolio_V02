'use client';

import DecryptedText from '@/components/reactbits/DecryptedText';

export default function Chapter({ index, title, align = 'left' }: { index: string; title: string; align?: 'left' | 'center' }) {
  return (
    <div
      className={`mx-auto flex w-full max-w-6xl items-center gap-4 font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-500 ${
        align === 'center' ? 'justify-center' : ''
      }`}
    >
      <span className="text-amber-200/80">Ch. {index}</span>
      <span className="h-px w-12 bg-gradient-to-r from-amber-200/50 to-transparent" />
      <DecryptedText
        text={title}
        animateOn="view"
        sequential
        revealDirection="start"
        speed={45}
        className="text-zinc-300"
        encryptedClassName="text-violet-300/70"
      />
    </div>
  );
}
