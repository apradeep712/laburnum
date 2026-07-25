'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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

      {/* Soft vignette so the wordmark reads, without killing the airy feel */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            'radial-gradient(58% 55% at 50% 50%, rgba(4,12,20,0.45), rgba(4,12,20,0.15) 60%, transparent 82%)',
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-black/35 to-transparent" />

      {/* Centered brand */}
      <div className="absolute inset-0 z-20 grid place-items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h1 className="font-semibold leading-none tracking-[0.14em] text-white text-[clamp(2rem,7vw,5.5rem)]">
            CHROMACHEMIE
          </h1>
          <div className="mx-auto mt-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-white/40" />
            <span className="text-[11px] uppercase tracking-[0.42em] text-white/75">
              Laboratory Pvt. Ltd.
            </span>
            <span className="h-px w-10 bg-white/40" />
          </div>
        </motion.div>
      </div>

      {/* Vertical brand on the side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute left-6 top-1/2 z-20 -translate-y-1/2"
      >
        <span className="block rotate-180 text-[11px] uppercase tracking-[0.3em] text-white/50 [writing-mode:vertical-rl]">
          Chromachemie&nbsp;·&nbsp;Bengaluru
        </span>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/60">
        Scroll
        <span className="h-8 w-px bg-gradient-to-b from-white/70 to-transparent" />
      </div>
    </section>
  )
}
