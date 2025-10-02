import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import GridLayout from "@/components/grid-layout"
import EncyclopediaCard from "@/components/encyclopedia-card"
import Breadcrumb from "@/components/breadcrumb"
import SubHero from "@/components/sub-hero"
import Banner from "@/components/banner"
import { getEncyclopediaCategories } from "@/lib/data"

export const metadata: Metadata = {
  title: "الموسوعة | قاعدة معرفة شاملة",
  description:
    "استكشف موسوعتنا الواسعة التي تغطي مواضيع مختلفة في التكنولوجيا والبرمجة وقواعد البيانات والحوسبة السحابية والأمن وDevOps.",
  keywords: [
    "موسوعة",
    "قاعدة معرفة",
    "تكنولوجيا",
    "برمجة",
    "قواعد بيانات",
    "حوسبة سحابية",
    "أمن",
    "ديفوبس",
  ],
  openGraph: {
    title: "الموسوعة | قاعدة معرفة شاملة",
    description:
      "استكشف موسوعتنا الواسعة التي تغطي مواضيع مختلفة في التكنولوجيا والبرمجة وقواعد البيانات والحوسبة السحابية والأمن وDevOps.",
    type: "website",
  },
}

export default async function EncyclopediaPage() {
  const categories = await getEncyclopediaCategories()

  // Group categories by type for the sub-hero navigation
  const categoryTypes: { id: string; title: string; color: "primary" | "secondary" | "accent" | "muted" }[] = [
    { id: "all", title: "جميع الفئات", color: "primary" },
    { id: "programming", title: "البرمجة", color: "secondary" },
    { id: "technology", title: "التكنولوجيا", color: "accent" },
    { id: "security", title: "الأمن", color: "muted" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <PageHeader
          title="موسوعة المعرفة"
          description="اكتشف معلومات شاملة حول التكنولوجيا ولغات البرمجة والأطر وال أدوات وأفضل الممارسات في قاعدة معرفتنا الواسعة."
        >
          <Breadcrumb items={[{ label: "Encyclopedia" }]} className="justify-center" />
        </PageHeader>

        {/* Promotional Banner for Blog/Website Services */}
        <div className="py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="موسوعتنا تنمو يومياً!"
              description="نقوم بإضافة مقالات جديدة أسبوعياً لتزويدك بأحدث المعلومات والنصائح في مختلف المجالات"
              image="/encyclopedia-promo.jpg"
              cta={{
                text: "تصفح المقالات الجديدة",
                href: "#new",
                variant: "secondary"
              }}
              variant="promotional"
              backgroundType="gradient"
              backgroundColor="green"
              textColor="foreground"
            />
          </div>
        </div>

        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GridLayout columns={1} gap="lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {categories.slice(0, 2).map((category) => (
                  <EncyclopediaCard
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    description={category.description}
                    image={category.image}
                    entryCount={category.entryCount}
                    lastUpdated={category.lastUpdated}
                    variant="list"
                  />
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.slice(2).map((category) => (
                  <EncyclopediaCard
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    description={category.description}
                    image={category.image}
                    entryCount={category.entryCount}
                    lastUpdated={category.lastUpdated}
                    variant="compact"
                  />
                ))}
              </div>
            </GridLayout>
          </div>
        </section>

        {/* Promotional Banner for Company Services */}
        <div className="py-8 sm:py-10 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="هل تحتاج إلى خدمة محددة؟"
              description="تواصل مع أفضل الشركات في المملكة التي تقدم خدمات متنوعة"
              cta={{
                text: "تصفح دليل الشركات",
                href: "/companies",
                variant: "outline"
              }}
              variant="compact"
              backgroundType="gradient"
              backgroundColor="orange"
              textColor="foreground"
            />
          </div>
        </div>

        {/* Search Section */}
        <section id="search" className="py-16 sm:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance mb-4 sm:mb-6">تبحث عن شيء محدد؟</h2>
            <p className="text-base sm:text-lg text-muted-foreground text-pretty mb-6 sm:mb-8 leading-relaxed">
              استخدم ميزة البحث لدينا للعثور بسرعة على المعلومات التي تحتاجها في جميع فئات الموسوعة.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <input
                type="search"
                placeholder="ابحث في الموسوعة..."
                className="flex-1 px-4 py-2.5 sm:px-5 sm:py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
                بحث
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}