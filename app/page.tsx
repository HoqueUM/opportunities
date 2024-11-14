import Hero from "@/components/sections/hero"
import Features from "@/components/sections/features"
import Stats from "@/components/sections/stats"
import CTA from "@/components/sections/cta"

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-20 lg:pt-24">
      <Hero />
      <Features />
      <Stats />
      <CTA />
    </section>
  )
}