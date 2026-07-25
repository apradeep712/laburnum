'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.35 } },
}

const item = {
  hidden: { y: 26, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#08131f]">
      {/* Full-bleed media */}
      <div className="absolute inset-0 z-0">
        {reduced ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/hero-poster.jpg" alt="" className="h-full w-full object-cover" />
        ) : (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-poster.jpg"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      {/* Legibility scrims (kept soft to preserve the airy feel) */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-black/45 to-transparent" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.p
            variants={item}
            className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-white/70"
          >
            // ISO 9001:2015 &nbsp;·&nbsp; Since the 1990s
          </motion.p>

          <motion.h1
            variants={item}
            className="text-[clamp(3rem,8.5vw,7rem)] font-semibold leading-[0.94] tracking-[-0.035em] text-white"
          >
            The Standard
            <br />
            for{' '}
            <span className="bg-gradient-to-r from-ice-200 to-ice-400 bg-clip-text text-transparent">
              Standards
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-md text-base leading-relaxed text-white/80"
          >
            Reference standards, chromatography &amp; custom synthesis — trusted by 90% of Indian
            pharma.
          </motion.p>

          <motion.div variants={item} className="mt-10">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-colors hover:bg-ice-100"
            >
              Browse Catalog
              <svg
                className="transition-transform group-hover:translate-x-0.5"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 right-6 z-20 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
        Scroll
        <span className="inline-block h-8 w-px bg-gradient-to-b from-white/70 to-transparent" />
      </div>
    </section>
  )
}
