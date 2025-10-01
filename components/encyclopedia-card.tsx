import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Calendar } from "lucide-react"

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
  // Unified styling constants
  const cardBaseClasses = "group transition-all duration-300 rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md"
  const imageClasses = "object-cover transition-transform duration-300"
  const titleClasses = "font-semibold text-balance transition-colors"
  const descriptionClasses = "text-sm text-pretty leading-relaxed"
  const badgeClasses = "bg-primary text-primary-foreground"
  const linkClasses = "inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
  const textMutedClasses = "text-xs text-muted-foreground"

  if (variant === "list") {
    return (
      <Card className={`${cardBaseClasses} ${className}`}>
        <div className="flex items-center p-4">
          <div className="relative flex-shrink-0 mr-4">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={80}
              height={80}
              className={`${imageClasses} rounded-lg w-20 h-20`}
            />
          </div>
          <div className="flex-grow">
            <CardHeader className="p-0">
              <div className="flex justify-between items-start mb-2">
                <CardTitle className={`${titleClasses} text-lg group-hover:text-primary`}>
                  {title}
                </CardTitle>
                <Badge className={`${badgeClasses} text-xs`}>
                  {entryCount} مدخل
                </Badge>
              </div>
              <CardDescription className={`${descriptionClasses} line-clamp-2 mb-3`}>
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span className={textMutedClasses}>تم التحديث {new Date(lastUpdated).toLocaleDateString()}</span>
                </div>
                <Link
                  href={`/encyclopedia/${id}`}
                  className={linkClasses}
                >
                  استكشف
                  <ArrowRight className="mr-1 h-3 w-3 group-hover:translate-x-1" />
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
      <Card className={`${cardBaseClasses} text-center p-4 ${className}`}>
        <div className="relative flex justify-center mb-3">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={60}
            height={60}
            className={`${imageClasses} rounded-full w-16 h-16`}
          />
          <Badge className={`${badgeClasses} absolute -bottom-1 right-1/4 text-xs`}>
            {entryCount}
          </Badge>
        </div>
        <CardHeader className="p-0 mb-2">
          <CardTitle className={`${titleClasses} text-base group-hover:text-primary`}>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex items-center justify-center mb-3">
            <Calendar className="h-3 w-3 mr-1" />
            <span className={textMutedClasses}>{new Date(lastUpdated).toLocaleDateString()}</span>
          </div>
          <Link
            href={`/encyclopedia/${id}`}
            className={linkClasses}
          >
            استكشف
            <ArrowRight className="mr-1 h-3 w-3 group-hover:translate-x-1" />
          </Link>
        </CardContent>
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
          width={350}
          height={250}
          className={`${imageClasses} w-full h-48 group-hover:scale-105`}
        />
        <Badge className={`${badgeClasses} absolute top-3 left-3`}>{entryCount} مدخل</Badge>
      </div>

      <CardHeader>
        <CardTitle className={`${titleClasses} text-lg group-hover:text-primary`}>
          {title}
        </CardTitle>
        <CardDescription className={descriptionClasses}>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <BookOpen className="h-3 w-3 mr-1" />
            <span className={textMutedClasses}>{entryCount} مدخل</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span className={textMutedClasses}>تم التحديث {new Date(lastUpdated).toLocaleDateString()}</span>
          </div>
        </div>

        <Link
          href={`/encyclopedia/${id}`}
          className={linkClasses}
        >
          استكشف الفئة
          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  )
}