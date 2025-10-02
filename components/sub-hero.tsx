import { ReactNode } from "react"

interface SubHeroProps {
  title: string
  sections?: {
    id: string
    title: string
    color: "primary" | "secondary" | "accent" | "muted"
  }[]
  children?: ReactNode
}

export default function SubHero({ title, sections = [], children }: SubHeroProps) {
  // Color mapping for section buttons
  const colorClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90",
    muted: "bg-muted text-muted-foreground hover:bg-muted/90",
  }

  return (
    <section className="py-20 bg-muted/30 border-b border-border relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-secondary/5 blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{title}</h1>
          {children && (
            <div className="max-w-3xl mx-auto">
              <div className="text-lg text-muted-foreground leading-relaxed">
                {children}
              </div>
            </div>
          )}
        </div>

        {sections.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-1 ${colorClasses[section.color]} shadow-sm hover:shadow-lg min-w-[180px] text-center`}
              >
                {section.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}