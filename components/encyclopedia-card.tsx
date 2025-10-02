import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Calendar } from "lucide-react"
import ImageWithFallback from "@/components/image-with-fallback"

interface EncyclopediaCardProps {
  id: string
  title: string
  description: string
  image: string
  entryCount: number
  lastUpdated: string
  className?: string
  variant?: "default" | "list" | "compact"
}

export default function EncyclopediaCard({
  id,
  title,
  description,
  image,
  entryCount,
  lastUpdated,
  className,
  variant = "default",
}: EncyclopediaCardProps) {
  if (variant === "list") {
    return (
      <Card className={`overflow-hidden border border-border rounded-xl transition-all duration-300 hover:shadow-md ${className}`}>
        <div className="flex flex-col sm:flex-row items-center p-5 gap-5">
          {/* Image section - top on mobile, left on desktop */}
          <div className="relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
            <ImageWithFallback
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          {/* Content section - below image on mobile, right on desktop */}
          <div className="flex-grow w-full">
            <CardHeader className="p-0 pb-3">
              <div className="flex flex-wrap justify-between items-start gap-3">
                <CardTitle className="text-xl font-bold leading-tight">
                  {title}
                </CardTitle>
                <Badge className="text-xs whitespace-nowrap px-3 py-1 rounded-full">
                  {entryCount} مدخل
                </Badge>
              </div>
              <CardDescription className="text-sm line-clamp-2 mt-2">
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  <span>تم التحديث {new Date(lastUpdated).toLocaleDateString("ar-EG")}</span>
                </div>
                <Link
                  href={`/encyclopedia/${id}`}
                  className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
                >
                  استكشف
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    )
  }

  if (variant === "compact") {
    return (
      <Card className={`text-center overflow-hidden border border-border rounded-xl p-5 transition-all duration-300 hover:shadow-md ${className}`}>
        {/* Image section - always on top */}
        <div className="relative flex justify-center mb-4 w-20 h-20 mx-auto rounded-full overflow-hidden">
          <ImageWithFallback
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <Badge className="absolute -bottom-2 right-1/4 text-xs px-2 py-1 rounded-full">
            {entryCount}
          </Badge>
        </div>
        
        {/* Content section - always below image */}
        <CardHeader className="p-0 pb-3">
          <CardTitle className="text-lg font-bold leading-tight">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex items-center justify-center mb-4 text-xs text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1.5" />
            <span>{new Date(lastUpdated).toLocaleDateString("ar-EG")}</span>
          </div>
          <Link
            href={`/encyclopedia/${id}`}
            className="text-primary text-sm font-medium hover:underline flex items-center justify-center gap-1"
          >
            استكشف
            <ArrowRight className="h-4 w-4" />
          </Link>
        </CardContent>
      </Card>
    )
  }

  // Default variant
  return (
    <Card className={`overflow-hidden border border-border rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${className}`}>
      {/* Image section - always on top */}
      <div className="relative w-full aspect-video overflow-hidden rounded-t-xl">
        <ImageWithFallback
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        <Badge className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm">
          {entryCount} مدخل
        </Badge>
      </div>

      {/* Content section - always below image */}
      <CardHeader className="pb-4 px-5 pt-5">
        <CardTitle className="text-xl font-bold leading-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-sm line-clamp-2 mt-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 px-5 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex items-center text-xs text-muted-foreground">
            <BookOpen className="h-4 w-4 mr-1.5" />
            <span>{entryCount} مدخل</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1.5" />
            <span>تم التحديث {new Date(lastUpdated).toLocaleDateString("ar-EG")}</span>
          </div>
        </div>

        <Link
          href={`/encyclopedia/${id}`}
          className="text-primary text-sm font-medium hover:underline flex items-center gap-1 w-fit"
        >
          استكشف الفئة
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}