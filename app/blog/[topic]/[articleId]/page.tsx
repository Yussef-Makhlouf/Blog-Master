import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"
import SectionHeader from "@/components/section-header"
import GridLayout from "@/components/grid-layout"
import ArticleCard from "@/components/article-card"
import ReadingProgress from "@/components/reading-progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getArticle, getBlogTopic, getTopicArticles } from "@/lib/data"
import { Calendar, Clock, User, Share2, BookOpen, Twitter, Linkedin, Facebook } from "lucide-react"

interface ArticlePageProps {
  params: {
    topic: string
    articleId: string
  }
}

export async function generateStaticParams() {
  const topics = ["furniture-moving", "cleaning-services", "security-systems", "ac-services"]
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
      
      {/* Reading Progress Bar - Fixed at top */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div className="h-full bg-primary w-0 reading-progress-bar"></div>
      </div>
      
      {/* Mobile Reading Controls - Fixed at bottom on small screens */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-background border-t border-border z-40 p-2 flex justify-around items-center">
        <button className="p-2 rounded-full hover:bg-muted transition-colors duration-200 flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          <span className="text-xs mt-1">القراءة</span>
        </button>
        <button className="p-2 rounded-full hover:bg-muted transition-colors duration-200 flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
          <span className="text-xs mt-1">حفظ</span>
        </button>
        <button className="p-2 rounded-full hover:bg-muted transition-colors duration-200 flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          <span className="text-xs mt-1">مشاركة</span>
        </button>
        <button className="p-2 rounded-full hover:bg-muted transition-colors duration-200 flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span className="text-xs mt-1">تعليق</span>
        </button>
      </div>

      <main className="pt-1 pb-20 md:pb-0">
        {/* Article Header */}
        <div className="bg-gradient-to-b from-muted/50 to-background py-8 md:py-12 animate-fade-in">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Blog", href: "/blog" },
                { label: topic?.title || "", href: `/blog/${params.topic}` },
                { label: article.title },
              ]}
              className="mb-6 md:mb-8"
            />

            <div className="space-y-5 md:space-y-6">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary" className="transition-all duration-200 hover:bg-primary/20 hover:scale-105 text-xs md:text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance bg-clip-text text-transparent bg-primary leading-tight">{article.title}</h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed border-r-2 md:border-r-4 border-primary/30 pr-3 md:pr-4">{article.excerpt}</p>

              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs sm:text-sm md:text-sm text-muted-foreground bg-muted/30 p-3 md:p-4 rounded-lg shadow-sm">
                <div className="flex items-center group">
                  <User className="h-3 w-3 md:h-4 md:w-4 mx-1 md:mx-2 group-hover:text-primary transition-colors duration-200" />
                  <span className="group-hover:text-primary transition-colors duration-200">{article.author}</span>
                </div>
                <div className="flex items-center group">
                  <Calendar className="h-3 w-3 md:h-4 md:w-4 mx-1 md:mx-2 group-hover:text-primary transition-colors duration-200" />
                  <span className="group-hover:text-primary transition-colors duration-200">
                    {new Date(article.publishedAt).toLocaleDateString("ar-SA", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center group">
                  <Clock className="h-3 w-3 md:h-4 md:w-4 mx-1 md:mx-2 group-hover:text-primary transition-colors duration-200" />
                  <span className="group-hover:text-primary transition-colors duration-200">{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-8 md:py-12 animate-fade-in">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="relative mb-6 md:mb-8 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.01]"
                    priority
                  />
                </div>

                <div className="prose prose-lg max-w-none">
                  {article.content.split("\n\n").map((paragraph: string, index: number) => (
                    <p key={index} className="mb-4 md:mb-6 text-foreground leading-relaxed first-letter:text-2xl md:first-letter:text-3xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-right">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Share Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 my-6 md:my-8 border-y border-border py-4">
                  <span className="text-sm font-medium">مشاركة المقال:</span>
                  <button className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors duration-200">
                    <Twitter className="h-4 w-4 md:h-5 md:w-5" />
                  </button>
                  <button className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors duration-200">
                    <Facebook className="h-4 w-4 md:h-5 md:w-5" />
                  </button>
                  <button className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors duration-200">
                    <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                  </button>
                  <button className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors duration-200">
                    <Share2 className="h-4 w-4 md:h-5 md:w-5" />
                  </button>
                </div>

                {/* Tags */}
                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-primary">الوسوم</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary" className="text-xs md:text-sm px-2 py-1 md:px-3 md:py-1 transition-all duration-200 hover:bg-primary hover:scale-105">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24 border-primary/20 hover:border-primary/50 transition-colors duration-300">
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="text-base md:text-lg text-primary">تفاصيل المقال</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 md:space-y-4 pt-3 md:pt-4">
                    <div className="flex items-center text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                      <User className="h-3 w-3 md:h-4 md:w-4 mx-1 md:mx-2 text-primary" />
                      {article.author}
                    </div>
                    <div className="flex items-center text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                      <Calendar className="h-3 w-3 md:h-4 md:w-4 mx-1 md:mx-2 text-primary" />
                      {new Date(article.publishedAt).toLocaleDateString("ar-SA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                      <Clock className="h-3 w-3 md:h-4 md:w-4 mx-1 md:mx-2 text-primary" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                      <BookOpen className="h-3 w-3 md:h-4 md:w-4 mx-1 md:mx-2 text-primary" />
                      {article.wordCount} كلمة
                    </div>
                  </CardContent>
                </Card>

                {/* Table of Contents */}
                <Card className="mt-4 md:mt-6 border-primary/20 hover:border-primary/50 transition-colors duration-300">
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="text-base md:text-lg text-primary">محتويات المقال</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-3 md:pt-4">
                    <ul className="space-y-2 text-xs md:text-sm">
                      <li className="hover:text-primary transition-colors duration-200 cursor-pointer">المقدمة</li>
                      <li className="hover:text-primary transition-colors duration-200 cursor-pointer">العناصر الرئيسية</li>
                      <li className="hover:text-primary transition-colors duration-200 cursor-pointer">التفاصيل والشرح</li>
                      <li className="hover:text-primary transition-colors duration-200 cursor-pointer">الخلاصة</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/30 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="مقالات ذات صلة"
              description="اكتشف مقالات أخرى قد تهمك في نفس المجال"
              centered={false}
            />

            <GridLayout columns={1} gap="md" className="mt-8 md:mt-12">
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
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/10 hover:border-primary/30"
                />
              ))}
            </GridLayout>
            
            <div className="flex justify-center mt-8 md:mt-12">
              <button className="px-4 py-2 md:px-6 md:py-3 bg-primary hover:bg-secondary text-primary-foreground rounded-md transition-colors duration-200 flex items-center group text-sm md:text-base">
                عرض المزيد من المقالات
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 transition-transform duration-200 group-hover:translate-x-1"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}