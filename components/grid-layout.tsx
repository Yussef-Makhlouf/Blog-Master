import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GridLayoutProps {
  children: ReactNode
  columns?: 1 | 2 | 3 | 4
  gap?: "sm" | "md" | "lg"
  className?: string
  variant?: "default" | "masonry" | "alternating" | "featured" | "staggered" | "mixed"
}

export default function GridLayout({ 
  children, 
  columns = 3, 
  gap = "md", 
  className,
  variant = "default"
}: GridLayoutProps) {
  // Enhanced responsive grid configuration
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 xs:grid-cols-2 sm:grid-cols-2",
    3: "grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  }

  const gridGap = {
    sm: "gap-3 xs:gap-4",
    md: "gap-4 xs:gap-5 sm:gap-6",
    lg: "gap-5 xs:gap-6 sm:gap-7 md:gap-8",
  }

  // Enhanced responsive behavior for different variants
  const getVariantClasses = () => {
    switch (variant) {
      case "masonry":
        return "grid-rows-masonry";
      case "alternating":
        return "grid-alternating";
      case "featured":
        return "grid-featured";
      case "staggered":
        return "grid-staggered";
      case "mixed":
        return "grid-mixed";
      default:
        return "";
    }
  };

  return (
    <div className={cn(
      "grid",
      gridCols[columns],
      gridGap[gap],
      getVariantClasses(),
      "animate-fade-in transition-all duration-500",
      className
    )}>
      {children}
    </div>
  )
}