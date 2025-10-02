import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"
import ImageWithFallback from "@/components/image-with-fallback"

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
    <Card className={`overflow-hidden border border-border rounded-xl ${className}`}>
      {/* Image section - always on top */}
      <div className="relative w-full aspect-video">
        <ImageWithFallback
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content section - always below image */}
      <CardHeader className="pb-3 px-4 pt-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs px-2 py-1">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-lg font-semibold leading-tight mb-2">
          <Link href={href} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h3>
      </CardHeader>

      <CardContent className="pt-0 px-4 pb-4">
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-2">
          <div className="flex items-center">
            <User className="h-3 w-3 mr-1" />
            <span className="truncate max-w-[80px]">{author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{new Date(publishedAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}