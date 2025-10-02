import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import SectionHeader from "@/components/section-header"
import GridLayout from "@/components/grid-layout"
import ContentCard from "@/components/content-card"
import ServiceCard from "@/components/service-card"
import EncyclopediaCard from "@/components/encyclopedia-card"
import SubHero from "@/components/sub-hero"
import Banner from "@/components/banner"
import { getServices, getBlogTopics, getEncyclopediaCategories } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Users, Award, Zap } from "lucide-react"

export default async function HomePage() {
  const [services, blogTopics, encyclopediaCategories] = await Promise.all([
    getServices(),
    getBlogTopics(),
    getEncyclopediaCategories(),
  ])

  const featuredServices = services.slice(0, 3)
  const featuredBlogTopics = blogTopics.slice(0, 3)
  const featuredEncyclopediaCategories = encyclopediaCategories.slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero Section */}
        <HeroSection
          title="حلول احترافية للشركات الحديثة"
          subtitle="الخدمات والمعرفة والرؤى"
          description="اكتشف خدمات شاملة، وابق محدثاً مع مدونتنا الخبيرة، واستكشف موسوعتنا الواسعة من المعرفة المهنية."
          primaryCta={{
            text: "استكشف الخدمات",
            href: "/services",
          }}
          secondaryCta={{
            text: "اقرأ المدونة",
            href: "/blog",
          }}
          features={["خدمات خبيرة", "أحدث الرؤى", "موارد شاملة", "دعم احترافي"]}
        />

        {/* Banner after Hero */}
        <div className="py-8 sm:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="عروض خاصة هذا الشهر"
              description="احصل على خصومات تصل إلى 20% على جميع خدماتنا هذا الشهر فقط. لا تفوت هذه الفرصة المحدودة!"
              image="/special-offer-banner.jpg"
              cta={{
                text: "اعرف المزيد",
                href: "/services",
                variant: "secondary"
              }}
              variant="default"
            />
          </div>
        </div>

        {/* Featured Services */}
        <section id="services" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle="خدماتنا"
              title="حلول احترافية مصممة خصيصاً لك"
              description="نقدم مجموعة شاملة من الخدمات المصممة لمساعدة عملك على النمو والنجاح في السوق التنافسي اليوم."
            />

            <GridLayout columns={1} gap="lg">
              <ServiceCard
                id={featuredServices[0].id}
                title={featuredServices[0].title}
                description={featuredServices[0].description}
                image={featuredServices[0].image}
                features={featuredServices[0].features}
                duration={featuredServices[0].duration}
                availability={featuredServices[0].availability}
                support={featuredServices[0].support}
                emergency={featuredServices[0].emergency}
                variant="featured"
                className="mb-8 sm:mb-12"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {featuredServices.slice(1).map((service) => (
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

            <div className="text-center mt-10 sm:mt-12">
              <Button asChild size="lg">
                <Link href="/services">
                  عرض جميع الخدمات
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Banner between sections */}
        <div className="py-8 sm:py-10 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="هل تحتاج إلى استشارة مجانية؟"
              description="احصل على استشارة مجانية لمدة 30 دقيقة مع خبرائنا لمناقشة احتياجاتك وتقديم حلول مخصصة."
              cta={{
                text: "احجز الآن",
                href: "/contact",
                variant: "outline"
              }}
              variant="compact"
            />
          </div>
        </div>

        {/* Featured Blog Topics */}
        <section id="blog" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle="مدونتنا"
              title="أحدث الرؤى والمعرفة الخبيرة"
              description="ابق محدثاً مع أحدث الاتجاهات وأفضل الممارسات والرؤى الخبيرة عبر مواضيع مختلفة في التكنولوجيا والأعمال."
            />

            <GridLayout columns={2} gap="lg">
              {featuredBlogTopics.map((topic, index) => (
                <ContentCard
                  key={topic.id}
                  title={topic.title}
                  description={topic.description}
                  image={topic.image}
                  href={`/blog/${topic.id}`}
                  badge={`${topic.articleCount} مقال`}
                  variant={index === 0 ? "overlay" : "default"}
                />
              ))}
            </GridLayout>

            <div className="text-center mt-10 sm:mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">
                  استكشف جميع المواضيع
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Encyclopedia Categories */}
        <section id="encyclopedia" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle="الموسوعة"
              title="قاعدة معرفة شاملة"
              description="استكشف موسوعتنا الواسعة التي تغطي مواضيع مختلفة في التكنولوجيا والبرمجة والابتكار الرقمي."
            />

            <GridLayout columns={1} gap="lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {featuredEncyclopediaCategories.slice(0, 2).map((category) => (
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
                {featuredEncyclopediaCategories.slice(2).map((category) => (
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

            <div className="text-center mt-10 sm:mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/encyclopedia">
                  تصفح الموسوعة
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance mb-4 sm:mb-6">هل أنت مستعد للبدء؟</h2>
            <p className="text-base sm:text-xl text-primary-foreground/90 text-pretty mb-6 sm:mb-8 max-w-2xl mx-auto">
              انضم إلى مئات العملاء الراضين الذين حولوا أعمالهم بخدماتنا المهنية.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/services">
                  ابدأ اليوم
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/blog">تعلم المزيد</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}