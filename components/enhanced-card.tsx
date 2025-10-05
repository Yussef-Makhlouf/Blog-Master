import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, Calendar, MapPin, Star, Building2 } from "lucide-react"
import Link from "next/link"

interface EnhancedCardProps {
  title: string
  description: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  badge?: {
    text: string
    variant?: "default" | "secondary" | "outline" | "destructive"
  }
  metrics?: Array<{
    icon: React.ComponentType<{ className?: string }>
    text: string
  }>
  features?: string[]
  footer?: {
    left?: string
    right?: string
  }
  variant?: "default" | "compact" | "featured"
  className?: string
}

const EnhancedCard = React.forwardRef<HTMLDivElement, EnhancedCardProps>(
  ({ 
    title, 
    description, 
    href, 
    icon: IconComponent, 
    badge, 
    metrics = [], 
    features = [], 
    footer,
    variant = "default",
    className,
    ...props 
  }, ref) => {
    const isCompact = variant === "compact"
    const isFeatured = variant === "featured"
    
    return (
      <Link href={href}>
        <div
          ref={ref}
          className={cn(
            "group relative overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer h-full flex flex-col",
            isFeatured && "ring-2 ring-primary/20",
            className
          )}
          {...props}
        >
          {/* Top accent line */}
          <div className={cn(
            "h-1 w-full",
            isFeatured ? "bg-primary" : "bg-muted-foreground/20"
          )} />
          
          {/* Card Content */}
          <div className="flex-1 flex flex-col p-6">
            {/* Header Section */}
            <div className="flex items-start justify-between mb-4">
              <div className={cn(
                "rounded-xl flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110",
                isCompact ? "w-12 h-12 bg-muted" : "w-16 h-16 bg-primary",
                isFeatured && "w-20 h-20 bg-primary shadow-lg"
              )}>
                <IconComponent className={cn(
                  isCompact ? "h-6 w-6 text-muted-foreground" : "h-8 w-8 text-primary-foreground",
                  isFeatured && "h-10 w-10"
                )} />
              </div>
              
              {badge && (
                <Badge 
                  variant={badge.variant || "secondary"} 
                  className="text-xs font-medium"
                >
                  {badge.text}
                </Badge>
              )}
            </div>

            {/* Title and Description */}
            <div className="flex-1 mb-4">
              <h3 className={cn(
                "font-bold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2",
                isCompact ? "text-lg" : "text-xl",
                isFeatured && "text-2xl"
              )}>
                {title}
              </h3>
              
              <p className={cn(
                "text-muted-foreground leading-relaxed",
                isCompact ? "text-sm line-clamp-2" : "text-base line-clamp-3"
              )}>
                {description}
              </p>
            </div>

            {/* Metrics Section */}
            {metrics.length > 0 && (
              <div className="flex flex-wrap gap-4 mb-4">
                {metrics.map((metric, index) => {
                  const MetricIcon = metric.icon
                  return (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <MetricIcon className="h-4 w-4 mr-2" />
                      <span>{metric.text}</span>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Features Section */}
            {features.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {features.slice(0, isCompact ? 2 : 3).map((feature, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
                {features.length > (isCompact ? 2 : 3) && (
                  <Badge variant="outline" className="text-xs">
                    +{features.length - (isCompact ? 2 : 3)} المزيد
                  </Badge>
                )}
              </div>
            )}

            {/* Footer Section */}
            {footer && (
              <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border mt-auto">
                {footer.left && (
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {footer.left}
                  </span>
                )}
                {footer.right && (
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {footer.right}
                  </span>
                )}
              </div>
            )}

            {/* Action Button */}
            <div className="mt-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                <ArrowRight className="ml-2 h-4 w-4" />
                {isCompact ? "عرض" : "اكتشف المزيد"}
              </Button>
            </div>
          </div>
        </div>
      </Link>
    )
  }
)

EnhancedCard.displayName = "EnhancedCard"

export { EnhancedCard, type EnhancedCardProps }
