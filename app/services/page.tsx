import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import GridLayout from "@/components/grid-layout"
import ServiceCard from "@/components/service-card"
import Breadcrumb from "@/components/breadcrumb"
import SubHero from "@/components/sub-hero"
import Banner from "@/components/banner"
import { getServices } from "@/lib/data"

export const metadata: Metadata = {
  title: "Professional Services | Expert Solutions for Your Business",
  description:
    "Discover our comprehensive range of professional services including web development, mobile apps, UI/UX design, digital marketing, and technology consulting.",
  keywords: ["services", "web development", "mobile development", "UI/UX design", "digital marketing", "consulting"],
  openGraph: {
    title: "Professional Services | Expert Solutions for Your Business",
    description:
      "Discover our comprehensive range of professional services including web development, mobile apps, UI/UX design, digital marketing, and technology consulting.",
    type: "website",
  },
}

export default async function ServicesPage() {
  const services = await getServices()

  // Group services by category for the sub-hero navigation
  const serviceCategories: { id: string; title: string; color: "primary" | "secondary" | "accent" | "muted" }[] = [
    { id: "all", title: "جميع الخدمات", color: "primary" },
    { id: "development", title: "التطوير", color: "secondary" },
    { id: "design", title: "التصميم", color: "accent" },
    { id: "consulting", title: "الاستشارات", color: "muted" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <PageHeader
          title="الخدمات الاحترافية"
          description="نقدم حلولاً شاملة مصممة لمساعدة عملك على النمو والنجاح في المشهد الرقمي التنافسي اليوم."
        >
          <Breadcrumb items={[{ label: "Services" }]} className="justify-center" />
        </PageHeader>

        {/* Banner after header */}
        <div className="py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="عروض حصرية هذا الأسبوع"
              description="احصل على خصومات تصل إلى 15% على خدمات التطوير والتصميم هذا الأسبوع فقط."
              image="/weekly-offer-banner.jpg"
              cta={{
                text: "عرض العروض",
                href: "#featured",
                variant: "secondary"
              }}
              variant="default"
            />
          </div>
        </div>

        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GridLayout columns={1} gap="lg">
              <ServiceCard
                id={services[0].id}
                title={services[0].title}
                description={services[0].description}
                image={services[0].image}
                features={services[0].features}
                price={services[0].price}
                duration={services[0].duration}
                variant="featured"
                className="mb-8 sm:mb-12"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {services.slice(1).map((service) => (
                  <ServiceCard
                    key={service.id}
                    id={service.id}
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    features={service.features}
                    price={service.price}
                    duration={service.duration}
                    variant="horizontal"
                  />
                ))}
              </div>
            </GridLayout>
          </div>
        </section>

        {/* Banner before CTA */}
        <div className="py-8 sm:py-10 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="هل تحتاج إلى خدمة مخصصة؟"
              description="نقدم حلولاً مخصصة حسب احتياجات عملك. تواصل معنا لمناقشة متطلباتك."
              cta={{
                text: "تواصل معنا",
                href: "/contact",
                variant: "outline"
              }}
              variant="compact"
            />
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance mb-4 sm:mb-6">هل تحتاج إلى حل مخصص؟</h2>
            <p className="text-base sm:text-lg text-muted-foreground text-pretty mb-6 sm:mb-8 leading-relaxed">
              هل تبحث عن شيء لم تجده؟ نحن متخصصون في إنشاء حلول مخصصة تتناسب مع
              احتياجات ومتطلبات عملك الخاصة.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="mailto:info@example.com"
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                اتصل بنا اليوم
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
              >
                اتصل (555) 123-4567
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}