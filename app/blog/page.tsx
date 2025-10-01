import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import GridLayout from "@/components/grid-layout"
import ContentCard from "@/components/content-card"
import Breadcrumb from "@/components/breadcrumb"
import { getBlogTopics } from "@/lib/data"

export const metadata: Metadata = {
  title: "المدونة | أحدث الرؤى والمعرفة الخبيرة",
  description:
    "ابقَ على اطلاع بأحدث الاتجاهات وأفضل الممارسات والرؤى الخبيرة عبر مواضيع مختلفة في التكنولوجيا والأعمال والابتكار الرقمي.",
  keywords: ["مدونة", "رؤى", "تكنولوجيا", "تطوير المواقع", "أعمال", "دروس"],
  openGraph: {
    title: "المدونة | أحدث الرؤى والمعرفة الخبيرة",
    description:
      "ابقَ على اطلاع بأحدث الاتجاهات وأفضل الممارسات والرؤى الخبيرة عبر مواضيع مختلفة في التكنولوجيا والأعمال والابتكار الرقمي.",
    type: "website",
  },
}

export default async function BlogPage() {
  const blogTopics = await getBlogTopics()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <PageHeader
          title="المدونة والرؤى"
          description="استكشف مجموعة مقالاتنا ودروسنا والرؤى التي تغطي أحدث الاتجاهات في التكنولوجيا والأعمال والابتكار الرقمي."
        >
          <Breadcrumb items={[{ label: "Blog" }]} className="justify-center" />
        </PageHeader>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GridLayout columns={2} gap="lg">
              {blogTopics.map((topic, index) => (
                <ContentCard
                  key={topic.id}
                  title={topic.title}
                  description={topic.description}
                  image={topic.image}
                  href={`/blog/${topic.id}`}
                  badge={`${topic.articleCount} مقال`}
                  variant={index % 3 === 0 ? "overlay" : index % 3 === 1 ? "minimal" : "default"}
                />
              ))}
            </GridLayout>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">ابقَ على اطلاع</h2>
            <p className="text-lg text-muted-foreground text-pretty mb-8 leading-relaxed">
              اشترك في نشرتنا البريدية ولا تفوت أحدث الرؤى والدروس والتحديثات الصناعية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
                اشترك
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
