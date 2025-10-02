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
  variant?: "default" | "compact" | "full-width"
}

export default function Banner({
  title,
  description,
  image,
  cta,
  className,
  variant = "default",
}: BannerProps) {
  const baseClasses = "relative overflow-hidden rounded-xl border border-border shadow-sm"
  const variantClasses = {
    default: "p-6 sm:p-8 md:p-10",
    compact: "p-4 sm:p-6",
    "full-width": "p-6 sm:p-8 md:p-12 rounded-none border-x-0 border-t-0",
  }

  if (variant === "full-width") {
    return (
      <div className={cn(baseClasses, "border-x-0 border-t-0 rounded-none", className)}>
        <div className="relative">
          {image && (
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance mb-3 sm:mb-4">
                {title}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground text-pretty mb-5 sm:mb-6 max-w-2xl">
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
    <div className={cn(baseClasses, variantClasses[variant], className)}>
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
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-balance mb-2 sm:mb-3">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground text-pretty mb-4 sm:mb-5">
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