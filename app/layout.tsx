import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chromachemie — The Standard for Standards',
  description:
    'India’s largest distributor of USP pharmacopeial reference standards — plus EP, BP, IP & JP, ATCC, CIL, Puritas™ chromatography columns and custom synthesis. ISO 9001:2015. Trusted by 90% of Indian pharma.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
