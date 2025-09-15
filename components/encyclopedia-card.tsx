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
}

export default function EncyclopediaCard({
  id,
  title,
  description,
  image,
  entryCount,
  lastUpdated,
  className,
}: EncyclopediaCardProps) {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={350}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">{entryCount} entries</Badge>
      </div>

      <CardHeader>
        <CardTitle className="text-lg font-semibold text-balance group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-pretty leading-relaxed">{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center">
            <BookOpen className="h-3 w-3 mr-1" />
            {entryCount} entries
          </div>
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            Updated {new Date(lastUpdated).toLocaleDateString()}
          </div>
        </div>

        <Link
          href={`/encyclopedia/${id}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Explore Category
          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </CardContent>
    </Card>
  )
}
