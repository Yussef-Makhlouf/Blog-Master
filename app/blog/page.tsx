import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import GridLayout from "@/components/grid-layout"
import ContentCard from "@/components/content-card"
import Breadcrumb from "@/components/breadcrumb"
import Banner from "@/components/banner"
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

  // Group topics by category for the sub-hero navigation
  const topicCategories = [
    { id: "all", title: "جميع المواضيع", color: "primary" },
    { id: "technology", title: "التكنولوجيا", color: "secondary" },
    { id: "business", title: "الأعمال", color: "accent" },
    { id: "tutorials", title: "الدروس", color: "muted" },
  ]

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

        {/* Banner after header */}
        <div className="py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="مقالات جديدة كل أسبوع"
              description="لا تفوت أحدث المقالات والدروس. اشترك في نشرتنا البريدية لتستلم المحتوى مباشرة."
              image="/new-articles-banner.jpg"
              cta={{
                text: "اشترك الآن",
                href: "#newsletter",
                variant: "secondary"
              }}
              variant="default"
            />
          </div>
        </div>

        <section className="py-16 sm:py-20">
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

        {/* Banner before newsletter */}
        <div className="py-8 sm:py-10 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="هل لديك موضوع تود منا تغطيته؟"
              description="اقترح موضوعاً وتواصل مع خبرائنا لمناقشة أفكارك وآرائك."
              cta={{
                text: "اقترح موضوعاً",
                href: "/contact",
                variant: "outline"
              }}
              variant="compact"
            />
          </div>
        </div>

        {/* Newsletter Section */}
        <section id="newsletter" className="py-16 sm:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance mb-4 sm:mb-6">ابقَ على اطلاع</h2>
            <p className="text-base sm:text-lg text-muted-foreground text-pretty mb-6 sm:mb-8 leading-relaxed">
              اشترك في نشرتنا البريدية ولا تفوت أحدث الرؤى والدروس والتحديثات الصناعية.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-2.5 sm:px-5 sm:py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
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