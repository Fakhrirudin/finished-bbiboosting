export const metadata = {
  title: 'BBI Boosting',
  description: 'Page description',
}

import Hero from '@/src/components/hero'
import Features from '@/src/components/features'
import Testimonials from '@/src/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <br />
      <br />
      <Features />
      <Testimonials />
    </>
  )
}
