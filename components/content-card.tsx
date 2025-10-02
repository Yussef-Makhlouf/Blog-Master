import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import ImageWithFallback from "@/components/image-with-fallback"

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
  if (variant === "minimal") {
    return (
      <Card className={`overflow-hidden border border-border rounded-xl ${className}`}>
        {/* Image section - always on top */}
        <div className="relative w-full aspect-video">
          <ImageWithFallback
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
          {badge && (
            <Badge className="absolute top-2 left-2 text-xs px-2 py-1">
              {badge}
            </Badge>
          )}
        </div>
        
        {/* Content section - always below image */}
        <CardContent className="p-4">
          <CardTitle className="text-lg font-semibold mb-2">
            {title}
          </CardTitle>
          <CardDescription className="text-sm line-clamp-2 mb-3">
            {description}
          </CardDescription>
          <Link
            href={href}
            className="text-primary text-sm font-medium hover:underline flex items-center"
          >
            تعرف على المزيد
            <ArrowRight className="mr-1 h-3 w-3" />
          </Link>
        </CardContent>
      </Card>
    )
  }

  if (variant === "overlay") {
    return (
      <Card className={`relative overflow-hidden rounded-xl ${className}`}>
        {/* Image section - always on top */}
        <div className="relative w-full aspect-video">
          <ImageWithFallback
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Content section - overlaid on image */}
        <div className="absolute bottom-0 left-0 right-0 bg-background p-4">
          <CardTitle className="text-xl font-semibold mb-2">
            {title}
          </CardTitle>
          {badge && (
            <Badge className="text-sm px-2 py-1">
              {badge}
            </Badge>
          )}
        </div>
        
        {/* Invisible link overlay */}
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
    <Card className={`overflow-hidden border border-border rounded-xl ${className}`}>
      {/* Image section - always on top */}
      <div className="relative w-full aspect-video">
        <ImageWithFallback
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
        {badge && (
          <Badge className="absolute top-2 left-2 text-sm px-2 py-1">
            {badge}
          </Badge>
        )}
      </div>
      
      {/* Content section - always below image */}
      <CardHeader className="pb-3 px-4 pt-4">
        <CardTitle className="text-lg font-semibold">
          {title}
        </CardTitle>
        <CardDescription className="text-sm line-clamp-2 mt-1">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0 px-4 pb-4">
        <Link
          href={href}
          className="text-primary text-sm font-medium hover:underline flex items-center"
        >
          تعرف على المزيد
          <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </CardContent>
    </Card>
  )
}