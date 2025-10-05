import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Star, Award, Eye, Building2, BookOpen, Briefcase } from "lucide-react"

interface StatItem {
  icon: React.ComponentType<{ className?: string }>
  value: string
  label: string
  description?: string
  trend?: {
    value: string
    isPositive: boolean
  }
}

interface StatsSectionProps {
  title?: string
  subtitle?: string
  stats: StatItem[]
  variant?: "default" | "compact" | "detailed"
  className?: string
}

const StatsSection = React.forwardRef<HTMLDivElement, StatsSectionProps>(
  ({ 
    title = "إحصائيات المنصة",
    subtitle = "أرقام تعكس ثقة المستخدمين وجودة الخدمات",
    stats, 
    variant = "default",
    className,
    ...props 
  }, ref) => {
    const isCompact = variant === "compact"
    const isDetailed = variant === "detailed"
    
    return (
      <section 
        ref={ref}
        className={cn("py-16 bg-muted/30", className)}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          {!isCompact && (
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            </div>
          )}

          {/* Stats Grid */}
          <div className={cn(
            "grid gap-6",
            isCompact 
              ? "grid-cols-2 md:grid-cols-4" 
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          )}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500" />
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>

                    {/* Value */}
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {stat.value}
                      </span>
                      {stat.trend && (
                        <Badge 
                          variant={stat.trend.isPositive ? "default" : "secondary"}
                          className="mr-2 text-xs"
                        >
                          <TrendingUp className={cn(
                            "h-3 w-3 mr-1",
                            !stat.trend.isPositive && "rotate-180"
                          )} />
                          {stat.trend.value}
                        </Badge>
                      )}
                    </div>

                    {/* Label */}
                    <h3 className="font-semibold text-foreground mb-1">
                      {stat.label}
                    </h3>

                    {/* Description */}
                    {isDetailed && stat.description && (
                      <p className="text-sm text-muted-foreground">
                        {stat.description}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
)

StatsSection.displayName = "StatsSection"

export { StatsSection, type StatsSectionProps, type StatItem }
