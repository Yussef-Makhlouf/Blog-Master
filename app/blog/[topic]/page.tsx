import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import GridLayout from "@/components/grid-layout"
import ArticleCard from "@/components/article-card"
import Breadcrumb from "@/components/breadcrumb"
import { getBlogTopic, getBlogTopics, getTopicArticles } from "@/lib/data"

interface TopicPageProps {
  params: {
    topic: string
  }
}

export async function generateStaticParams() {
  const topics = await getBlogTopics()
  return topics.map((topic) => ({
    topic: topic.id,
  }))
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const topic = await getBlogTopic(params.topic)

  if (!topic) {
    return {
      title: "Topic Not Found",
    }
  }

  return {
    title: `${topic.title} | Blog`,
    description: topic.description,
    keywords: [topic.title.toLowerCase(), "blog", "articles", "insights"],
    openGraph: {
      title: `${topic.title} | Blog`,
      description: topic.description,
      type: "website",
      images: [topic.image],
    },
  }
}

export default async function TopicPage({ params }: TopicPageProps) {
  const [topic, articles] = await Promise.all([getBlogTopic(params.topic), getTopicArticles(params.topic)])

  if (!topic) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <PageHeader title={topic.title} description={topic.description}>
          <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: topic.title }]} className="justify-center" />
        </PageHeader>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {articles.length > 0 ? (
              <GridLayout columns={2} gap="lg">
                {articles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    title={article.title}
                    excerpt={article.excerpt}
                    image={article.image}
                    href={`/blog/${params.topic}/${article.id}`}
                    author={article.author}
                    publishedAt={article.publishedAt}
                    readTime={article.readTime}
                    tags={article.tags}
                  />
                ))}
              </GridLayout>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold mb-4">No Articles Yet</h3>
                <p className="text-muted-foreground">
                  We're working on adding more content to this topic. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
