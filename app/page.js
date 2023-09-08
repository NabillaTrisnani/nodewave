import Hero from './sections/hero'
import Product from './sections/product'
import Testimony from './sections/testimony'
import Works from './sections/works'
import How from './sections/how'
import Application from './sections/application'
import Pricing from './sections/pricing'
import Footer from './sections/footer'

export default function Home() {
  return (
    <main className="">
      {/* Section Hero */}
      <Hero />

      {/* Section Product */}
      <Product />

      {/* Section Testimoni */}
      <Testimony />

      {/* Section Works */}
      <Works />

      {/* Section How We Work */}
      <How />

      {/* Section Application */}
      <Application />

      {/* Section Pricing */}
      <Pricing />

      {/* Section Footer */}
      <Footer />
    </main>
  )
}
