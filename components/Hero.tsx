'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const Molecule = dynamic(() => import('./Molecule'), {
  ssr: false,
  loading: () => null,
})

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const item = {
  hidden: { y: 24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const PILLARS = ['Reference Standards', 'Chromatography', 'Custom Synthesis', 'Services']

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden grid-bg">
      {/* Full-bleed 3D glass molecule */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <Molecule />
      </div>

      {/* Legibility overlays */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-white/75 via-white/25 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[#eef4fb] to-transparent" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-ice-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ice-500" />
            ISO 9001:2015 · Bengaluru, India · Since the 1990s
          </motion.div>

          <motion.h1
            variants={item}
            className="text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-ink"
          >
            The Standard
            <br />
            for{' '}
            <span className="bg-gradient-to-r from-ice-500 to-ice-300 bg-clip-text text-transparent">
              Standards
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            India’s largest distributor of USP pharmacopeial reference standards — plus EP, BP,
            IP &amp; JP, ATCC biologicals, stable isotopes, Puritas™ columns, and custom synthesis.
            Trusted by 90% of Indian pharma for 30+ years.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-ice-500 px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(46,147,218,0.4)] transition-colors hover:bg-ice-600"
            >
              Browse Catalog
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-full glass px-6 py-3 text-sm font-medium text-ink transition-colors hover:text-ice-600"
            >
              Talk to a scientist
            </a>
          </motion.div>
        </motion.div>

        {/* Pillar tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex flex-wrap gap-3"
        >
          {PILLARS.map((p, i) => (
            <div
              key={p}
              className="glass glass-hairline rounded-full px-4 py-2 text-xs font-medium text-ink/80"
            >
              <span className="mr-2 font-mono text-ice-500">0{i + 1}</span>
              {p}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footnote caption */}
      <div className="absolute bottom-6 left-6 z-20 max-w-[220px] text-[11px] leading-snug text-muted/80">
        *3,500+ USP reference standards · authorised distributor for USP, ATCC, CIL &amp; COSMOSIL.
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-muted/70">
        Scroll
        <span className="inline-block h-8 w-[1px] bg-gradient-to-b from-ice-400 to-transparent" />
      </div>
    </section>
  )
}
