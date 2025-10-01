import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  features?: string[]
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  features,
}: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32 relative overflow-hidden animate-fade-in">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-70 animate-pulse-slow"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="mr-2 text-sm text-muted-foreground">موثوق به من قبل المحترفين</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {title}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8">{subtitle}</p>

          <p className="text-lg text-muted-foreground text-pretty mb-10 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
              <Link href={primaryCta.href}>
                {primaryCta.text}
                <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            {secondaryCta && (
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent rounded-xl border-2 hover:shadow-lg transition-shadow hover:bg-primary/5">
                <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
              </Button>
            )}
          </div>

          {features && (
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center bg-background/50 px-4 py-2 rounded-full backdrop-blur-sm border border-border">
                  <div className="w-2 h-2 bg-primary rounded-full ml-2" />
                  {feature}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}