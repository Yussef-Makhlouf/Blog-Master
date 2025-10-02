import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import GridLayout from "@/components/grid-layout"
import CardShowcase from "@/components/card-showcase"
import Banner from "@/components/banner"
import { getServices, getBlogTopics, getEncyclopediaCategories, getCompanies } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "الموقع الرئيسي | منصة الخدمات الشاملة",
  description: "منصة شاملة لجميع احتياجاتك من خدمات النقل، التنظيف، الأمان، والتكييف في المملكة العربية السعودية",
  keywords: ["خدمات", "نقل العفش", "تنظيف", "أمان", "تكييف", "السعودية"],
}

export default async function HomePage() {
  const [services, topics, categories, companies] = await Promise.all([
    getServices(),
    getBlogTopics(),
    getEncyclopediaCategories(),
    getCompanies(),
  ])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection 
          title="منصة الخدمات الشاملة"
          subtitle="جميع احتياجاتك في مكان واحد"
          description="نقدم مجموعة شاملة من الخدمات لتلبية جميع احتياجاتك اليومية في المملكة العربية السعودية"
          primaryCta={{
            text: "تصفح الخدمات",
            href: "/services"
          }}
          secondaryCta={{
            text: "دليل الشركات",
            href: "/companies"
          }}
          features={[
            "نقل العفش الآمن",
            "تنظيف شامل",
            "أنظمة الأمان",
            "صيانة التكييف"
          ]}
          rating={4.9}
          ratingText="موثوق به من قبل 5000+ عميل"
          backgroundImage="/hero.png"
        />

        {/* Promotional Banner for Main Services */}
        <div className="py-8 sm:py-12 px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto lg:px-8">
            <Banner
              title="اكتشف أفضل الخدمات في المملكة"
              description="تواصل مع أفضل الشركات المقدمة للخدمات في السعودية واحجز الخدمة المناسبة لك الآن"
              image="/main-services-banner.jpg"
              cta={{
                text: "تصفح جميع الخدمات",
                href: "/services",
                variant: "default"
              }}
              variant="promotional"
              backgroundType="gradient"
              backgroundColor="blue"
              textColor="foreground"
              className="p-4"
            />
          </div>
        </div>

        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance mb-4">
                خدماتنا المميزة
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                نقدم مجموعة شاملة من الخدمات لتلبية جميع احتياجاتك اليومية
              </p>
            </div>

            <GridLayout columns={1} gap="lg">
              <CardShowcase
                cards={services.slice(0, 4).map(service => ({
                  id: service.id,
                  title: service.title,
                  description: service.description,
                  image: service.image,
                }))}
                cardType="service"
                columns={4}
              />
            </GridLayout>

            <div className="flex justify-center mt-10 sm:mt-12">
              <Button asChild size="lg">
                <Link href="/services">
                  عرض جميع الخدمات
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Promotional Banner for Encyclopedia */}
        <div className="py-8 sm:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="موسوعتنا المعرفية"
              description="استكشف قاعدة معرفتنا الشاملة حول التكنولوجيا والخدمات والإرشادات"
              cta={{
                text: "تصفح الموسوعة",
                href: "/encyclopedia",
                variant: "outline"
              }}
              variant="compact"
              backgroundType="gradient"
              backgroundColor="green"
              textColor="foreground"
            />
          </div>
        </div>

        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance mb-4">
                أحدث المواضيع
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                تابع أحدث المقالات والمعلومات في مختلف المجالات
              </p>
            </div>

            <GridLayout columns={1} gap="lg">
              <CardShowcase
                cards={topics.slice(0, 3).map(topic => ({
                  id: topic.id,
                  title: topic.title,
                  description: topic.description,
                  image: topic.image,
                }))}
                cardType="content"
                columns={3}
              />
            </GridLayout>

            <div className="flex justify-center mt-10 sm:mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/blog">
                  عرض جميع المواضيع
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Promotional Banner for Companies Directory */}
        <div className="py-8 sm:py-10 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="دليل الشركات المعتمدة"
              description="اكتشف أفضل الشركات في المملكة واحجز الخدمة المناسبة لك الآن"
              cta={{
                text: "تصفح الدليل",
                href: "/companies",
                variant: "secondary"
              }}
              variant="promotional"
              backgroundType="gradient"
              backgroundColor="purple"
              textColor="foreground"
              className="mt-8 p-5"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}