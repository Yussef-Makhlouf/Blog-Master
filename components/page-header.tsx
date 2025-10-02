import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  description?: string
  children?: ReactNode
  backgroundImage?: string
}

export default function PageHeader({ title, description, children, backgroundImage = "/hero.png" }: PageHeaderProps) {
  return (
    <div className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      />
      
      {/* Layered overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/30 dark:from-primary/70 dark:to-secondary/50" aria-hidden="true" />
      
      {/* Additional layer for depth */}
      <div className="absolute inset-0 bg-background/20 dark:bg-background/40" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-white drop-shadow-lg">
            {title}
          </h1>

          {description && (
            <p className="text-xl text-white/90 text-pretty leading-relaxed drop-shadow-md">
              {description}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </div>
  )
}