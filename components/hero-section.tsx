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
  rating?: number
  ratingText?: string
  backgroundImage?: string // Added background image prop
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  features,
  rating = 5,
  ratingText = "موثوق به من قبل المحترفين",
  backgroundImage = "/hero.png" // Default background image
}: HeroSectionProps) {
  return (
    <section 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden " 
      aria-labelledby="hero-title"
      style={{ height: '100vh' }}
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      />
      
      {/* Overlay layer above image */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/30 dark:from-primary/70 dark:to-secondary/50" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto py-8">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-1 text-secondary" role="img" aria-label={`${rating} out of 5 stars`}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < rating ? 'fill-current' : 'fill-none'}`} aria-hidden="true" />
              ))}
            </div>
            <span className="mr-2 text-sm text-primary-foreground">{ratingText}</span>
          </div>

          <h1 id="hero-title" className="text-4xl md:text-5xl font-bold text-balance mb-6 text-primary-foreground">
            {title}
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground text-balance mb-8">{subtitle}</p>

          <p className="text-lg text-primary-foreground text-pretty mb-10 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-lg bg-primary text-primary-foreground hover:bg-primary-hover">
              <Link href={primaryCta.href} aria-label={`Primary action: ${primaryCta.text}`}>
                {primaryCta.text}
                <ArrowRight className="mr-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>

            {secondaryCta && (
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                <Link href={secondaryCta.href} aria-label={`Secondary action: ${secondaryCta.text}`}>{secondaryCta.text}</Link>
              </Button>
            )}
          </div>

          {features && (
            <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center bg-background px-4 py-2 rounded-full border border-border shadow-sm">
                  <div className="w-2 h-2 bg-primary rounded-full ml-2" aria-hidden="true" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}