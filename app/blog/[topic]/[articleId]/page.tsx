import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"
import SectionHeader from "@/components/section-header"
import GridLayout from "@/components/grid-layout"
import ArticleCard from "@/components/article-card"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getArticle, getBlogTopic, getTopicArticles } from "@/lib/data"
import { Calendar, Clock, User, Share2, BookOpen, Twitter, Linkedin, Facebook } from "lucide-react"

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
      title: "المقال غير موجود",
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
  const [article, topic] = await Promise.all([
    getArticle(params.topic, params.articleId),
    getBlogTopic(params.topic),
  ])

  if (!article) {
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
                { label: topic?.title || "", href: `/blog/${params.topic}` },
                { label: article.title },
              ]}
              className="mb-8"
            />

            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag: string) => (
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
                  {new Date(article.publishedAt).toLocaleDateString("ar-SA", {
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
                  {article.content.split("\n\n").map((paragraph: string, index: number) => (
                    <p key={index} className="mb-6 text-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="text-xl font-semibold mb-4">الوسوم</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-lg">تفاصيل المقال</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-2" />
                      {article.author}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(article.publishedAt).toLocaleDateString("ar-SA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4 mr-2" />
                      {article.wordCount} كلمة
                    </div>
                  </CardContent>
                </Card>

 
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="مقالات ذات صلة"
              description="اكتشف مقالات أخرى قد تهمك في نفس المجال"
              centered={false}
            />

            <GridLayout columns={3} gap="md" className="mt-12">
              {article.relatedArticles?.slice(0, 3).map((relatedArticle: any) => (
                <ArticleCard
                  key={relatedArticle.id}
                  title={relatedArticle.title}
                  excerpt={relatedArticle.description}
                  image={relatedArticle.image}
                  href={`/blog/${relatedArticle.topic}/${relatedArticle.id}`}
                  author={relatedArticle.author}
                  publishedAt={relatedArticle.publishedAt}
                  readTime={relatedArticle.readTime}
                  tags={relatedArticle.tags || []}
                />
              ))}
            </GridLayout>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
