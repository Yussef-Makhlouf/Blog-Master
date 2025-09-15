import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GridLayoutProps {
  children: ReactNode
  columns?: 1 | 2 | 3 | 4
  gap?: "sm" | "md" | "lg"
  className?: string
}

export default function GridLayout({ children, columns = 3, gap = "md", className }: GridLayoutProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  const gridGap = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
  }

  return <div className={cn("grid", gridCols[columns], gridGap[gap], className)}>{children}</div>
}
