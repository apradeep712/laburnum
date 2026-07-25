'use client'

import { motion } from 'framer-motion'

const NAV = ['Reference Standards', 'Chromatography', 'Custom Synthesis', 'Services']

export default function Header() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="glass flex items-center justify-between rounded-full px-5 py-3">
          <a href="#" className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-ice-500 shadow-[0_0_12px_2px_rgba(46,147,218,0.5)]" />
            <span className="text-sm font-semibold tracking-tight text-ink">
              CHROMACHEMIE
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-muted lg:flex">
            {NAV.map((n) => (
              <a key={n} href="#" className="transition-colors hover:text-ink">
                {n}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Search products"
              className="grid h-9 w-9 place-items-center rounded-full glass-hairline text-ink transition-colors hover:text-ice-600"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
            <a
              href="#"
              className="hidden items-center rounded-full bg-ice-500 px-4 py-2 text-sm font-medium text-white shadow-[0_6px_20px_rgba(46,147,218,0.35)] transition-colors hover:bg-ice-600 sm:inline-flex"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
