'use client';

/*
 * ZoomParallax — SAVED FOR FUTURE USE (not wired into any page yet).
 * Requested ref: 21st.dev @sshahaider/zoom-parallax
 *   (registry needs auth to fetch, so this is a clean, license-free in-house equivalent
 *    of the classic scroll-zoom parallax pattern — built in our aesthetic.)
 *
 * Effect: a tall (300vh) section with a pinned viewport; a grid of tiles scales up as you
 * scroll, creating a "zoom through the images" parallax. Great for a facility / lab /
 * product / certificate gallery reveal.
 *
 * Notes:
 *  - Already `prefers-reduced-motion` safe (scale disabled).
 *  - Works with Lenis (uses framer-motion useScroll, not a scroll-jack).
 *  - Default renders on-brand ice-blue glass placeholders (no external assets, no slop).
 *    Pass `images` (local /public paths) to show real photos. Add next.config
 *    images.remotePatterns only if you use remote URLs.
 *  - Re-skin/tune before production: run `/impeccable polish`.
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface ZoomParallaxProps {
  images?: { src: string; alt?: string }[];
}

// Classic 7-tile zoom-parallax layout (center + 6 offset tiles).
const POSITIONS = [
  'w-[25vw] h-[25vh]',
  'w-[35vw] h-[30vh] left-[5vw] -top-[30vh]',
  'w-[20vw] h-[45vh] -left-[25vw] -top-[10vh]',
  'w-[25vw] h-[25vh] left-[27.5vw]',
  'w-[20vw] h-[25vh] left-[5vw] top-[27.5vh]',
  'w-[30vw] h-[25vh] -left-[22.5vw] top-[27.5vh]',
  'w-[15vw] h-[15vh] left-[25vw] top-[22.5vh]',
];

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {POSITIONS.map((pos, i) => (
          <motion.div
            key={i}
            style={{ scale: reduced ? 1 : scales[i] }}
            className="absolute top-0 flex h-full w-full items-center justify-center"
          >
            <div className={`relative ${pos}`}>
              {images?.[i] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={images[i].src}
                  alt={images[i].alt ?? ''}
                  className="h-full w-full rounded-xl object-cover shadow-[0_1rem_2.5rem_-1rem_rgba(20,50,80,0.35)]"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-ice-100 to-ice-300 ring-1 ring-white/50">
                  <span className="font-mono text-xs text-ice-700/70">0{i + 1}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
