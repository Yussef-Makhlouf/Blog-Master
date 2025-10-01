import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

interface ContentCardProps {
  title: string
  description: string
  image: string
  href: string
  badge?: string
  className?: string
  variant?: "default" | "minimal" | "overlay"
}

export default function ContentCard({ 
  title, 
  description, 
  image, 
  href, 
  badge, 
  className,
  variant = "default"
}: ContentCardProps) {
  // Unified styling constants
  const cardBaseClasses = "group transition-all duration-300 rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md"
  const imageClasses = "object-cover transition-transform duration-300"
  const titleClasses = "font-semibold text-balance transition-colors"
  const descriptionClasses = "text-sm text-pretty leading-relaxed"
  const badgeClasses = "bg-primary text-primary-foreground"
  const linkClasses = "inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"

  if (variant === "minimal") {
    return (
      <Card className={`${cardBaseClasses} hover:-translate-y-1 border-0 shadow-md ${className}`}>
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={250}
            className={`${imageClasses} w-full h-40 group-hover:scale-105`}
          />
          {badge && (
            <Badge className={`${badgeClasses} absolute top-3 left-3 text-xs`}>
              {badge}
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <CardTitle className={`${titleClasses} text-lg group-hover:text-primary mb-2`}>
            {title}
          </CardTitle>
          <CardDescription className={`${descriptionClasses} line-clamp-2`}>
            {description}
          </CardDescription>
          <Link
            href={href}
            className={`${linkClasses} mt-3`}
          >
            تعرف على المزيد
            <ArrowRight className="mr-1 h-4 w-4 group-hover:translate-x-1" />
          </Link>
        </CardContent>
      </Card>
    )
  }

  if (variant === "overlay") {
    return (
      <Card className={`${cardBaseClasses} relative rounded-xl shadow-lg ${className}`}>
        <div className="relative h-64">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={`${imageClasses} group-hover:scale-105`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <CardTitle className={`${titleClasses} text-xl text-foreground mb-2`}>
              {title}
            </CardTitle>
            {badge && (
              <Badge className={badgeClasses}>
                {badge}
              </Badge>
            )}
          </div>
        </div>
        <Link
          href={href}
          className="absolute inset-0"
          aria-label={`اقرأ المزيد عن ${title}`}
        />
      </Card>
    )
  }

  // Default variant
  return (
    <Card className={`${cardBaseClasses} hover:shadow-lg hover:-translate-y-1 ${className}`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={250}
          className={`${imageClasses} w-full h-48 group-hover:scale-105`}
        />
        {badge && <Badge className={`${badgeClasses} absolute top-3 left-3`}>{badge}</Badge>}
      </div>
      <CardHeader>
        <CardTitle className={`${titleClasses} text-lg group-hover:text-primary`}>
          {title}
        </CardTitle>
        <CardDescription className={descriptionClasses}>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href={href}
          className={linkClasses}
        >
          تعرف على المزيد
          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  )
}