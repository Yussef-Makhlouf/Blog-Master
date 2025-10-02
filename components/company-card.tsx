import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Phone } from "lucide-react"
import ImageWithFallback from "@/components/image-with-fallback"

interface CompanyCardProps {
  id: string
  name: string
  description: string
  image: string
  rating: number
  reviews: number
  locations: string[]
  className?: string
  variant?: "default" | "horizontal" | "featured"
}

export default function CompanyCard({
  id,
  name,
  description,
  image,
  rating,
  reviews,
  locations,
  className,
  variant = "default",
}: CompanyCardProps) {
  if (variant === "horizontal") {
    return (
      <Card className={`overflow-hidden border border-border rounded-xl ${className}`}>
        <div className="flex flex-col md:flex-row">
          {/* Image section - top on mobile, left on desktop */}
          <div className="md:w-2/5 relative w-full aspect-video md:aspect-auto">
            <ImageWithFallback
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Content section - below image on mobile, right on desktop */}
          <div className="md:w-3/5 flex flex-col p-4">
            <CardHeader className="p-0 mb-3">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <CardTitle className="text-xl font-semibold">
                  {name}
                </CardTitle>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium">{rating}</span>
                  <span className="text-xs text-muted-foreground">({reviews})</span>
                </div>
              </div>
              <CardDescription className="text-sm line-clamp-2">
                {description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-0 flex-grow">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{locations[0]}{locations.length > 1 ? ` +${locations.length - 1}` : ''}</span>
              </div>
              
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Button asChild size="sm" variant="default">
                  <Link href={`/services/${id}`} className="flex items-center">
                    تعرف على المزيد
                  </Link>
                </Button>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    )
  }

  if (variant === "featured") {
    return (
      <Card className={`overflow-hidden border border-border rounded-xl ${className}`}>
        {/* Image section - always on top */}
        <div className="relative w-full aspect-video">
          <ImageWithFallback
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        {/* Content section - always below image */}
        <CardHeader className="pb-3 px-4 pt-4">
          <CardTitle className="text-2xl font-semibold">
            {name}
          </CardTitle>
          <CardDescription className="text-base mt-1">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-0 px-4 pb-4">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{locations.join(", ")}</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-border">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium">{rating}</span>
              <span className="text-xs text-muted-foreground">({reviews} تقييم)</span>
            </div>
            <Button asChild size="default" variant="default">
              <Link href={`/companies/${id}`} className="flex items-center">
                تعرف على المزيد
              </Link>
            </Button>
          </div>
        </CardContent>
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
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-1.5 py-1 rounded-full">
          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-medium">{rating}</span>
        </div>
      </div>

      {/* Content section - always below image */}
      <CardHeader className="pb-3 px-4 pt-4">
        <CardTitle className="text-xl font-semibold">
          {name}
        </CardTitle>
        <CardDescription className="text-sm line-clamp-2 mt-1">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 px-4 pb-4">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{locations[0]}{locations.length > 1 ? ` +${locations.length - 1}` : ''}</span>
        </div>

        <Button asChild className="w-full" variant="default">
          <Link href={`/companies/${id}`} className="flex items-center justify-center">
            تعرف على المزيد
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}