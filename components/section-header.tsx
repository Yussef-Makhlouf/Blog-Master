import type { ReactNode } from "react"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  children?: ReactNode
  centered?: boolean
}

export default function SectionHeader({ title, subtitle, description, children, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {subtitle && <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">{subtitle}</p>}

      <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">{title}</h2>

      {description && (
        <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">{description}</p>
      )}

      {children && <div className="mt-6">{children}</div>}
    </div>
  )
}
