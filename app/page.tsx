import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <Hero />
      </main>
    </SmoothScroll>
  )
}
