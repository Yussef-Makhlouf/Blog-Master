import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"

interface ArticleCardProps {
  title: string
  excerpt: string
  image: string
  href: string
  author: string
  publishedAt: string
  readTime: string
  tags: string[]
  className?: string
}

export default function ArticleCard({
  title,
  excerpt,
  image,
  href,
  author,
  publishedAt,
  readTime,
  tags,
  className,
}: ArticleCardProps) {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <CardHeader className="pb-3">
        <h3 className="text-lg font-semibold text-balance group-hover:text-primary transition-colors line-clamp-2">
          <Link href={href}>{title}</Link>
        </h3>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground text-pretty leading-relaxed mb-4 line-clamp-3">{excerpt}</p>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <User className="h-3 w-3 mr-1" />
              {author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {new Date(publishedAt).toLocaleDateString()}
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {readTime}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
