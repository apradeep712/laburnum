import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0d1620',
        muted: '#5c6b78',
        ice: {
          50: '#f2f8ff',
          100: '#e2f0ff',
          200: '#c2e0fb',
          300: '#94c8f2',
          400: '#5aa8e4',
          500: '#2e93da',
          600: '#1f79ba',
          700: '#195f92',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
