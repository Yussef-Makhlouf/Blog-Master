import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Clock } from "lucide-react"
import ImageWithFallback from "@/components/image-with-fallback"

interface ServiceCardProps {
  id: string
  title: string
  description: string
  image: string
  features: string[]
  duration: string
  availability?: string
  support?: string
  emergency?: string
  className?: string
  variant?: "default" | "horizontal" | "featured"
}

export default function ServiceCard({
  id,
  title,
  description,
  image,
  features,
  duration,
  availability,
  support,
  emergency,
  className,
  variant = "default",
}: ServiceCardProps) {
  // Determine which additional info to show
  const additionalInfo = availability || support || emergency || "متوفر حسب الطلب";
  
  // Ensure features is an array before using slice
  const safeFeatures = Array.isArray(features) ? features : [];

  if (variant === "horizontal") {
    return (
      <Card className={`overflow-hidden border border-border rounded-xl ${className}`}>
        <div className="flex flex-col md:flex-row">
          {/* Image section - top on mobile, left on desktop */}
          <div className="md:w-2/5 relative w-full aspect-video md:aspect-auto">
            <ImageWithFallback
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Content section - below image on mobile, right on desktop */}
          <div className="md:w-3/5 flex flex-col p-4">
            <CardHeader className="p-0 mb-3">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <CardTitle className="text-xl font-semibold">
                  {title}
                </CardTitle>
                <Badge className="text-base px-2 py-1">
                  <Clock className="h-4 w-4 ml-1" />
                  {additionalInfo}
                </Badge>
              </div>
              <CardDescription className="text-sm line-clamp-2">
                {description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-0 flex-grow">
              <ul className="space-y-2 mb-4">
                {safeFeatures.slice(0, 2).map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap items-center justify-between text-sm text-muted-foreground gap-2">
                <span className="font-medium">المدة: {duration}</span>
                <Button asChild size="sm" variant="default">
                  <Link href={`/services/${id}`} className="flex items-center">
                    تعرف على المزيد
                    <ArrowRight className="mr-1 h-3 w-3" />
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
            alt={title}
            fill
            className="object-cover"
          />
          <Badge className="absolute top-3 right-3 text-lg px-3 py-1.5">
            <Clock className="h-4 w-4 ml-1" />
            {additionalInfo}
          </Badge>
        </div>
        
        {/* Content section - always below image */}
        <CardHeader className="pb-3 px-4 pt-4">
          <CardTitle className="text-2xl font-semibold">
            {title}
          </CardTitle>
          <CardDescription className="text-base mt-1">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-0 px-4 pb-4">
          <ul className="space-y-2 mb-5">
            {safeFeatures.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-start text-base">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap items-center justify-between text-base text-muted-foreground gap-2 pt-3 border-t border-border">
            <span className="font-bold">المدة: {duration}</span>
            <Button asChild size="default" variant="default">
              <Link href={`/services/${id}`} className="flex items-center">
                تعرف على المزيد
                <ArrowRight className="mr-2 h-4 w-4" />
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
          alt={title}
          fill
          className="object-cover"
        />
        <Badge className="absolute top-2 right-2 text-sm px-2 py-1">
          <Clock className="h-3 w-3 ml-1" />
          {additionalInfo}
        </Badge>
      </div>

      {/* Content section - always below image */}
      <CardHeader className="pb-3 px-4 pt-4">
        <CardTitle className="text-xl font-semibold">
          {title}
        </CardTitle>
        <CardDescription className="text-sm line-clamp-2 mt-1">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 px-4 pb-4">
        <ul className="space-y-2 mb-4">
          {safeFeatures.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start text-sm">
              <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-between text-sm text-muted-foreground gap-2 pt-3 border-t border-border">
          <span className="font-medium">المدة: {duration}</span>
        </div>

        <Button asChild className="w-full mt-4" variant="default">
          <Link href={`/services/${id}`} className="flex items-center justify-center">
            تعرف على المزيد
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}