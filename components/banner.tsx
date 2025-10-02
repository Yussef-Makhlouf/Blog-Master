import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import ImageWithFallback from "@/components/image-with-fallback"

interface BannerProps {
  title: string
  description: string
  image?: string
  cta?: {
    text: string
    href: string
    variant?: "default" | "secondary" | "outline"
  }
  className?: string
  variant?: "default" | "compact" | "full-width" | "promotional"
  // Added new props for enhanced visuals
  backgroundType?: "gradient" | "solid" | "image" // New prop for background type
  backgroundColor?: string // New prop for custom background color
  textColor?: string // New prop for custom text color
}

export default function Banner({
  title,
  description,
  image,
  cta,
  className,
  variant = "default",
  backgroundType = "gradient", // Default to gradient
  backgroundColor = "primary", // Default background color
  textColor = "foreground", // Default text color
}: BannerProps) {
  const baseClasses = "relative overflow-hidden rounded-xl border border-border shadow-sm"
  const variantClasses = {
    default: "p-6 sm:p-8 md:p-10",
    compact: "p-4 sm:p-6",
    "full-width": "p-6 sm:p-8 md:p-12 rounded-none border-x-0 border-t-0",
    promotional: "p-6 sm:p-8 md:p-10",
  }

  // Background color classes mapping
  const bgColorClasses: Record<string, string> = {
    primary: "bg-gradient-to-l from-primary/10 to-secondary/10 border-primary/20",
    secondary: "bg-gradient-to-l from-secondary/10 to-accent/10 border-secondary/20",
    accent: "bg-gradient-to-l from-accent/10 to-primary/10 border-accent/20",
    muted: "bg-gradient-to-l from-muted/20 to-muted/10 border-muted/30",
    blue: "bg-gradient-to-l from-blue-500/10 to-indigo-500/10 border-blue-500/20",
    green: "bg-gradient-to-l from-green-500/10 to-emerald-500/10 border-green-500/20",
    purple: "bg-gradient-to-l from-purple-500/10 to-pink-500/10 border-purple-500/20",
    orange: "bg-gradient-to-l from-orange-500/10 to-amber-500/10 border-orange-500/20",
  }

  // Text color classes mapping
  const textColorClasses: Record<string, string> = {
    foreground: "text-foreground",
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    white: "text-white",
    black: "text-black",
  }

  // Special promotional variant for service advertising
  if (variant === "promotional") {
    return (
      <div 
        className={cn(
          baseClasses, 
          backgroundType === "gradient" ? bgColorClasses[backgroundColor] || bgColorClasses.primary : 
          backgroundType === "solid" ? `bg-${backgroundColor}` : "",
          className
        )}
      >
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
          {image && (
            <div className="relative w-full md:w-1/3 h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <ImageWithFallback
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className={image ? "md:w-2/3" : "w-full"}>
            <div className="inline-block px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full mb-3">
              إعلان
            </div>
            <h2 className={cn("text-xl sm:text-2xl md:text-3xl font-bold text-balance mb-2 sm:mb-3", textColorClasses[textColor])}>
              {title}
            </h2>
            <p className={cn("text-sm sm:text-base text-pretty mb-4 sm:mb-5", textColorClasses[textColor])}>
              {description}
            </p>
            <div className="flex flex-wrap gap-3">
              {cta && (
                <Button asChild size="default" variant={cta.variant || "default"}>
                  <Link href={cta.href}>
                    {cta.text}
                  </Link>
                </Button>
              )}
              <Button asChild size="default" variant="outline">
                <Link href="/encyclopedia">
                  معرفة المزيد
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === "full-width") {
    return (
      <div 
        className={cn(
          baseClasses, 
          "border-x-0 border-t-0 rounded-none",
          backgroundType === "image" && image ? "" : 
          backgroundType === "gradient" ? bgColorClasses[backgroundColor] || bgColorClasses.primary : 
          backgroundType === "solid" ? `bg-${backgroundColor}` : "",
          className
        )}
      >
        <div className="relative">
          {backgroundType === "image" && image && (
            <div className="absolute inset-0">
              <div className="relative w-full h-full">
                <ImageWithFallback
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70 dark:from-background/80 dark:to-background/60" />
            </div>
          )}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
            <div className="max-w-3xl">
              <h2 className={cn("text-2xl sm:text-3xl md:text-4xl font-bold text-balance mb-3 sm:mb-4", textColorClasses[textColor])}>
                {title}
              </h2>
              <p className={cn("text-base sm:text-lg text-pretty mb-5 sm:mb-6 max-w-2xl", textColorClasses[textColor])}>
                {description}
              </p>
              {cta && (
                <Button asChild size="lg" variant={cta.variant || "default"}>
                  <Link href={cta.href}>
                    {cta.text}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div 
      className={cn(
        baseClasses, 
        variantClasses[variant],
        backgroundType === "gradient" ? bgColorClasses[backgroundColor] || bgColorClasses.primary : 
        backgroundType === "solid" ? `bg-${backgroundColor}` : "",
        className
      )}
    >
      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
        {image && (
          <div className="relative w-full md:w-1/3 h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
            <ImageWithFallback
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className={image ? "md:w-2/3" : "w-full"}>
          <h2 className={cn("text-xl sm:text-2xl md:text-3xl font-bold text-balance mb-2 sm:mb-3", textColorClasses[textColor])}>
            {title}
          </h2>
          <p className={cn("text-sm sm:text-base text-pretty mb-4 sm:mb-5", textColorClasses[textColor])}>
            {description}
          </p>
          {cta && (
            <Button asChild size={variant === "compact" ? "sm" : "default"} variant={cta.variant || "default"}>
              <Link href={cta.href}>
                {cta.text}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}