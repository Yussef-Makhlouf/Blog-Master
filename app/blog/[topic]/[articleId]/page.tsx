import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getArticle, getBlogTopic, getTopicArticles } from "@/lib/data"
import { Calendar, Clock, User, Share2, BookOpen } from "lucide-react"

interface ArticlePageProps {
  params: {
    topic: string
    articleId: string
  }
}

export async function generateStaticParams() {
  const topics = ["web-development", "design", "mobile-development", "technology", "business", "tutorials"]
  const params = []

  for (const topic of topics) {
    const articles = await getTopicArticles(topic)
    for (const article of articles) {
      params.push({
        topic: topic,
        articleId: article.id,
      })
    }
  }

  return params
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await getArticle(params.topic, params.articleId)

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: `${article.title} | Blog`,
    description: article.excerpt,
    keywords: article.tags,
    authors: [{ name: article.author }],
    openGraph: {
      title: `${article.title} | Blog`,
      description: article.excerpt,
      type: "article",
      images: [article.image],
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Blog`,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const [article, topic] = await Promise.all([getArticle(params.topic, params.articleId), getBlogTopic(params.topic)])

  if (!article || !topic) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Article Header */}
        <div className="bg-muted/30 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Blog", href: "/blog" },
                { label: topic.title, href: `/blog/${params.topic}` },
                { label: article.title },
              ]}
              className="mb-8"
            />

            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-balance">{article.title}</h1>

              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{article.excerpt}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {article.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(article.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {article.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="relative mb-8">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>

                <div className="prose prose-lg max-w-none">
                  {article.content.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-6 text-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Article Footer */}
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-muted-foreground">Share this article:</span>
                      <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <BookOpen className="h-5 w-5 mr-2" />
                        Article Info
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Author</span>
                        <span className="font-medium">{article.author}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Published</span>
                        <span className="font-medium">{new Date(article.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Read Time</span>
                        <span className="font-medium">{article.readTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Category</span>
                        <span className="font-medium">{topic.title}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
