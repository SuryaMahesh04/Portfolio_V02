'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Mounts heavy WebGL scenes only while they are near the viewport,
 * so the page never runs more than one or two shaders at a time.
 */
export default function LazyMount({
  children,
  className = 'absolute inset-0',
  margin = '25% 0px'
}: {
  children: ReactNode;
  className?: string;
  margin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: margin });
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);

  return (
    <div ref={ref} className={className} aria-hidden="true">
      {visible ? children : null}
    </div>
  );
}
