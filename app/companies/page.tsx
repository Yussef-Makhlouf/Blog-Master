import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import GridLayout from "@/components/grid-layout"
import CompanyCard from "@/components/company-card"
import Breadcrumb from "@/components/breadcrumb"
import Banner from "@/components/banner"
import { getCompanies } from "@/lib/data"
import { Grid3X3, List } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "دليل الشركات | أفضل مقدمي الخدمات في السعودية",
  description: "اكتشف أفضل الشركات في المملكة العربية السعودية التي تقدم خدمات نقل العفش، النظافة، الأمان، وتكييف الهواء.",
  keywords: ["شركات", "مقدمي الخدمات", "السعودية", "نقل العفش", "النظافة", "الأمان", "تكييف الهواء"],
  openGraph: {
    title: "دليل الشركات | أفضل مقدمي الخدمات في السعودية",
    description: "اكتشف أفضل الشركات في المملكة العربية السعودية التي تقدم خدمات نقل العفش، النظافة، الأمان، وتكييف الهواء.",
    type: "website",
  },
}

export default async function CompaniesPage() {
  const companies = await getCompanies()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <PageHeader
          title="دليل الشركات"
          description="اكتشف أفضل الشركات في المملكة العربية السعودية التي تقدم خدمات متنوعة"
        >
          <Breadcrumb items={[{ label: "Companies" }]} className="justify-center" />
        </PageHeader>

        {/* Promotional Banner for Blog/Website Services */}
        <div className="py-6 sm:py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="هل تبحث عن أفضل مقدمي الخدمات؟"
              description="استعرض دليلنا الشامل لأفضل الشركات في المملكة واحجز الخدمة المناسبة لك الآن"
              image="/company-directory-banner.jpg"
              cta={{
                text: "تصفح جميع الشركات",
                href: "#companies",
                variant: "default"
              }}
              variant="promotional"
              backgroundType="gradient"
              backgroundColor="blue"
              textColor="foreground"
            />
          </div>
        </div>

        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold">جميع الشركات</h2>
                <p className="text-muted-foreground">
                  تم العثور على {companies.length} شركة
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Grid3X3 className="h-4 w-4" />
                  شبكة
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <List className="h-4 w-4" />
                  قائمة
                </Button>
              </div>
            </div>

            <GridLayout columns={1} gap="lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {companies.map((company) => (
                  <CompanyCard
                    key={company.id}
                    id={company.id}
                    name={company.name}
                    description={company.description}
                    image={company.image}
                    rating={company.rating}
                    reviews={company.reviews}
                    locations={company.locations}
                    variant="default"
                  />
                ))}
              </div>
            </GridLayout>
          </div>
        </section>

        {/* Promotional Banner for Encyclopedia */}
        <div className="py-8 sm:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="هل تبحث عن معلومات إضافية؟"
              description="تعرف على معلومات مفيدة حول الخدمات المختلفة في موسوعتنا الشاملة"
              cta={{
                text: "تصفح الموسوعة",
                href: "/encyclopedia",
                variant: "outline"
              }}
              variant="compact"
              backgroundType="gradient"
              backgroundColor="purple"
              textColor="foreground"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}