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
  title: "خدمات نقل العفش، النظافة، الأمان، وتكييف الهواء | خدمات الخليج",
  description:
    "نقدم خدمات نقل العفش المتخصصة، وخدمات النظافة الشاملة، وتركيب وصيانة الكاميرات وأنظمة الأمان، وتوريد وصيانة المكيفات في جميع أنحاء المملكة العربية السعودية.",
  keywords: ["خدمات نقل العفش", "خدمات النظافة", "أنظمة الأمان", "تكييف الهواء", "السعودية"],
  openGraph: {
    title: "خدمات نقل العفش، النظافة، الأمان، وتكييف الهواء | خدمات الخليج",
    description:
      "نقدم خدمات نقل العفش المتخصصة، وخدمات النظافة الشاملة، وتركيب وصيانة الكاميرات وأنظمة الأمان، وتوريد وصيانة المكيفات في جميع أنحاء المملكة العربية السعودية.",
    type: "website",
  },
}

export default async function ServicesPage() {
  const services = await getServices()

  // Group services by category for the sub-hero navigation
  const serviceCategories: { id: string; title: string; color: "primary" | "secondary" | "accent" | "muted" }[] = [
    { id: "all", title: "جميع الخدمات", color: "primary" },
    { id: "furniture-moving", title: "نقل العفش", color: "secondary" },
    { id: "cleaning-services", title: "النظافة", color: "accent" },
    { id: "security-systems", title: "أنظمة الأمان", color: "muted" },
    { id: "ac-services", title: "تكييف الهواء", color: "primary" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <PageHeader
          title="الخدمات الاحترافية"
          description="كل تلك الخدمات في جميع أنحاء المملكة العربية السعودية. نقدم حلولاً شاملة مصممة لراحتكم وسلامتكم."
        >
          <Breadcrumb items={[{ label: "Services" }]} className="justify-center" />
        </PageHeader>

        {/* Promotional Banner for Special Offers */}
        <div className="py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="عروض حصرية هذا الأسبوع"
              description="احصل على خصومات تصل إلى 25% على خدمات نقل العفش وتكييف الهواء في جميع أنحاء المملكة هذا الأسبوع فقط."
              image="/weekly-offer-banner.jpg"
              cta={{
                text: "عرض العروض",
                href: "#featured",
                variant: "secondary"
              }}
              variant="promotional"
              backgroundType="gradient"
              backgroundColor="orange"
              textColor="foreground"
              className="mt-8 p-5"
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
                duration={services[0].duration}
                availability={services[0].availability}
                support={services[0].support}
                emergency={services[0].emergency}
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
                    duration={service.duration}
                    availability={service.availability}
                    support={service.support}
                    emergency={service.emergency}
                    variant="horizontal"
                  />
                ))}
              </div>
            </GridLayout>
          </div>
        </section>

        {/* Promotional Banner for Companies Directory */}
        <div className="py-8 sm:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="اكتشف أفضل مقدمي الخدمات"
              description="تواصل مع أفضل الشركات في المملكة التي تقدم هذه الخدمات الاحترافية"
              cta={{
                text: "تصفح دليل الشركات",
                href: "/companies",
                variant: "outline"
              }}
              variant="compact"
              backgroundType="gradient"
              backgroundColor="blue"
              textColor="foreground"
            />
          </div>
        </div>

        {/* Promotional Banner for Encyclopedia */}
        <div className="py-8 sm:py-10 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="هل تبحث عن معلومات إضافية؟"
              description="تعرف على نصائح ومعلومات مفيدة حول هذه الخدمات في موسوعتنا"
              cta={{
                text: "تصفح الموسوعة",
                href: "/encyclopedia",
                variant: "default"
              }}
              variant="promotional"
              backgroundType="gradient"
              backgroundColor="purple"
              textColor="foreground"
              className="mt-8 p-5"
            />
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance mb-4 sm:mb-6">خدمات تليق بمكانكم</h2>
            <p className="text-base sm:text-lg text-muted-foreground text-pretty mb-6 sm:mb-8 leading-relaxed">
              في خدمات الخليج، نقدم محتوى وخدمات تليق بهذا المستوى من التميز. 
              نحن متخصصون في تقديم خدمات نقل العفش، والنظافة، والكاميرات وأنظمة الأمان، وتكييف الهواء في جميع أنحاء المملكة العربية السعودية.
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