import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles, Image as ImageIcon, Share2, Megaphone, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Megaphone,
    title: "AI Ads Creation",
    description: "High-converting advertisement visuals that capture attention and drive results. From social media ads to display banners.",
    features: ["Custom ad creative", "A/B testing variants", "Platform-optimized sizes", "Fast turnaround"],
  },
  {
    icon: ImageIcon,
    title: "Product Visuals",
    description: "Stunning product photography and 3D renders powered by AI. Perfect for e-commerce, catalogs, and marketing materials.",
    features: ["AI-enhanced photos", "360° product views", "Lifestyle compositions", "Transparent backgrounds"],
  },
  {
    icon: Share2,
    title: "Social Media Content",
    description: "Engaging visual content designed for maximum impact across all social platforms. Consistent brand aesthetics at scale.",
    features: ["Platform-specific sizing", "Content calendars", "Story & reel assets", "Branded templates"],
  },
  {
    icon: Sparkles,
    title: "Brand Campaigns",
    description: "Complete visual campaign packages that tell your brand story through AI-generated imagery and video content.",
    features: ["Campaign strategy", "Multi-channel assets", "Video production", "Brand guidelines"],
  },
]

const pricingTiers = [
  {
    name: "Starter",
    price: "₹3,999",
    period: "per project",
    description: "Perfect for small projects and testing the waters with AI visuals.",
    features: [
      "2 AI-generated images",
      "2 AI-generated videos (15s)",
      "Standard resolution",
      "2-day delivery",
      "Basic support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "₹6,999",
    period: "per project",
    description: "Ideal for growing brands needing consistent, high-quality visual content.",
    features: [
      "4 AI-generated images",
      "4 AI-generated videos (30s)",
      "2 revision rounds",
      "4K resolution",
      "3-day delivery",
      "Priority support",
      "Source files included",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "₹9,999",
    period: "monthly retainer",
    description: "Full-service partnership for brands requiring ongoing AI visual production.",
    features: [
      "6 AI-generated images",
      "6 AI-generated videos (30s)",
      "Dedicated account manager",
      "Negotiable delivery timelines",
      "4 revision rounds",
      "Source files included",
      "Dedicated support",
    ],
    highlighted: false,
  },
  {
    name: "Custom",
    price: "Custom",
    period: "contact us",
    description: "Tailored solutions for unique projects and specific visual needs. Let’s discuss your requirements.",
    features: [
      "Fully customized deliverables",
      "Flexible timelines",
      "Dedicated creative team",
      "On-demand revisions",
      "Direct collaboration with AI specialists",
    ],
    highlighted: false,
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in opacity-0">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in opacity-0 animation-delay-100">
            Transform your brand with cutting-edge AI visual production. From concept to delivery, we bring your vision to life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="bg-card border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <CardHeader className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose the plan that fits your needs. All plans include our signature AI-powered quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => (
              <Card
                key={tier.name}
                className={cn(
                  "relative rounded-2xl overflow-hidden transition-all duration-300 animate-fade-in-up opacity-0",
                  tier.highlighted
                    ? "bg-card border-primary border-2 scale-105 shadow-lg shadow-primary/10"
                    : "bg-card border-border hover:border-primary/50"
                )}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center text-sm py-2 font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className={cn("p-8", tier.highlighted && "pt-14")}>
                  <CardTitle className="text-lg font-medium text-muted-foreground mb-2">
                    {tier.name}
                  </CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-sm text-muted-foreground">/{tier.period}</span>
                  </div>
                  <CardDescription className="text-muted-foreground mt-3">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={cn(
                      "w-full rounded-full",
                      tier.highlighted
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                    )}
                  >
                    <Link href="/contact">
                      {tier.name === "Enterprise" ? "Contact Us" : "Get Started"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Visuals?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and see how AI can elevate your brand&apos;s visual identity.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-medium group"
          >
            <Link href="/contact">
              Book a Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
