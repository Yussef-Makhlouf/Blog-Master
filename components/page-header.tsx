import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  description?: string
  children?: ReactNode
}

export default function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="bg-muted/30 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">{title}</h1>

          {description && <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{description}</p>}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </div>
  )
}
