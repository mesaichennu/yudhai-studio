import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
//import { BrandMarquee } from "@/components/brand-marquee"
import { MasonryGrid } from "@/components/masonry-grid"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      {/* <BrandMarquee /> */}
      <MasonryGrid />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
