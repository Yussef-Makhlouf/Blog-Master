import * as React from "react"
import { cn } from "@/lib/utils"

interface EnhancedGridProps {
  children: React.ReactNode
  variant?: "default" | "masonry" | "staggered" | "mixed" | "featured"
  columns?: {
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  gap?: "sm" | "md" | "lg" | "xl"
  className?: string
}

const EnhancedGrid = React.forwardRef<HTMLDivElement, EnhancedGridProps>(
  ({ 
    children, 
    variant = "default", 
    columns = { sm: 1, md: 2, lg: 3, xl: 4 },
    gap = "lg",
    className,
    ...props 
  }, ref) => {
    const getGridClasses = () => {
      const baseClasses = "enhanced-grid w-full"
      
      // Gap classes
      const gapClasses = {
        sm: "gap-4",
        md: "gap-6", 
        lg: "gap-8",
        xl: "gap-12"
      }
      
      // Column classes
      const columnClasses = [
        `grid-cols-${columns.sm || 1}`,
        columns.md && `md:grid-cols-${columns.md}`,
        columns.lg && `lg:grid-cols-${columns.lg}`,
        columns.xl && `xl:grid-cols-${columns.xl}`
      ].filter(Boolean).join(" ")
      
      // Variant-specific classes
      const variantClasses = {
        default: "",
        masonry: "grid-masonry",
        staggered: "grid-staggered",
        mixed: "grid-mixed",
        featured: "grid-featured"
      }
      
      return cn(
        baseClasses,
        gapClasses[gap],
        columnClasses,
        variantClasses[variant],
        className
      )
    }

    return (
      <div
        ref={ref}
        className={getGridClasses()}
        {...props}
      >
        {children}
      </div>
    )
  }
)

EnhancedGrid.displayName = "EnhancedGrid"

export { EnhancedGrid, type EnhancedGridProps }
