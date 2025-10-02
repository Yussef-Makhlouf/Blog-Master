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
    <div className={`mb-16 ${centered ? "text-center" : ""} animate-fade-in-up`}>
      {subtitle && (
        <p className="inline-flex items-center px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wide bg-primary/10 rounded-full mb-4">
          <span className="w-2 h-2 bg-primary rounded-full ml-2"></span>
          {subtitle}
        </p>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6">{title}</h2>

      {description && (
        <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      )}

      {children && <div className="mt-8">{children}</div>}
    </div>
  )
}