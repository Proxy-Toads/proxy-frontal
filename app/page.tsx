import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Benefits } from "@/components/benefits"
import { Security } from "@/components/security"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { InteractiveGridBackground } from "@/components/interactive-grid-background"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <InteractiveGridBackground />
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Security />
      <CTA />
      <Footer />
    </main>
  )
}
