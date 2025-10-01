import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

interface ServiceCardProps {
  id: string
  title: string
  description: string
  image: string
  features: string[]
  price: string
  duration: string
  className?: string
  variant?: "default" | "horizontal" | "featured"
}

export default function ServiceCard({
  id,
  title,
  description,
  image,
  features,
  price,
  duration,
  className,
  variant = "default",
}: ServiceCardProps) {
  // Unified styling constants
  const cardBaseClasses = "group transition-all duration-300 rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md"
  const imageClasses = "object-cover transition-transform duration-300"
  const titleClasses = "font-semibold text-balance transition-colors"
  const descriptionClasses = "text-sm text-pretty leading-relaxed"
  const badgeClasses = "bg-primary text-primary-foreground"
  const buttonClasses = "group/btn transition-all duration-200"

  if (variant === "horizontal") {
    return (
      <Card className={`${cardBaseClasses} flex flex-col md:flex-row ${className}`}>
        <div className="md:w-1/3 relative overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-t-none">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={300}
            className={`${imageClasses} w-full h-48 md:h-full group-hover:scale-105`}
          />
        </div>
        <div className="md:w-2/3 flex flex-col">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className={`${titleClasses} text-xl group-hover:text-primary`}>
                {title}
              </CardTitle>
              <Badge className={badgeClasses}>{price}</Badge>
            </div>
            <CardDescription className={descriptionClasses}>{description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="space-y-2 mb-4">
              {features.slice(0, 2).map((feature, index) => (
                <div key={index} className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>المدة: {duration}</span>
              <Button asChild size="sm" className={buttonClasses}>
                <Link href={`/services/${id}`}>
                  تعرف على المزيد
                  <ArrowRight className="mr-2 h-4 w-4 group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    )
  }

  if (variant === "featured") {
    return (
      <Card className={`${cardBaseClasses} hover:shadow-xl hover:-translate-y-1 ${className}`}>
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={300}
            className={`${imageClasses} w-full h-56 group-hover:scale-105`}
          />
          <Badge className={`${badgeClasses} absolute top-4 right-4 text-lg py-2 px-3`}>
            {price}
          </Badge>
        </div>
        <CardHeader>
          <CardTitle className={`${titleClasses} text-2xl group-hover:text-primary`}>
            {title}
          </CardTitle>
          <CardDescription className={`${descriptionClasses} text-base`}>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center text-base">
                <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-base text-muted-foreground pt-4 border-t border-border">
            <span className="font-medium">المدة: {duration}</span>
            <Button asChild size="lg" className={buttonClasses}>
              <Link href={`/services/${id}`}>
                تعرف على المزيد
                <ArrowRight className="mr-2 h-5 w-5 group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>
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
          width={400}
          height={300}
          className={`${imageClasses} w-full h-48 group-hover:scale-105`}
        />
        <Badge className={`${badgeClasses} absolute top-3 right-3`}>{price}</Badge>
      </div>

      <CardHeader>
        <CardTitle className={`${titleClasses} text-xl group-hover:text-primary`}>
          {title}
        </CardTitle>
        <CardDescription className={descriptionClasses}>{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center text-sm">
              <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t border-border">
          <span>المدة: {duration}</span>
        </div>

        <Button asChild className={`w-full ${buttonClasses}`}>
          <Link href={`/services/${id}`}>
            تعرف على المزيد
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}