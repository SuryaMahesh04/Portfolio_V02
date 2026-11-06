'use client';

import TiltedCard from '@/components/reactbits/TiltedCard';
import type { Feature } from './data';

/** A one-sheet thumbnail that tilts and catches the light on hover. */
export default function TiltedPoster({ feature }: { feature: Feature }) {
  return (
    <figure className="flex flex-col gap-2">
      <div className="aspect-[2/3] w-full">
        <TiltedCard
          imageSrc={`/posters/feature-${feature.id}.jpg`}
          altText={`${feature.title} poster`}
          captionText={feature.title}
          containerWidth="100%"
          containerHeight="100%"
          imageWidth="100%"
          imageHeight="100%"
          radius={10}
          rotateAmplitude={14}
          scaleOnHover={1.06}
          glare={0.45}
          showTooltip
        />
      </div>
      <figcaption className="truncate font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 sm:text-[10px]">
        <span style={{ color: feature.hue }}>{feature.id}</span> · {feature.genre}
      </figcaption>
    </figure>
  );
}
