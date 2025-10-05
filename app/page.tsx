import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import Banner from "@/components/banner"
import { getServices, getBlogTopics, getEncyclopediaCategories, getCompanies } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, Building2, Briefcase, Clock, TrendingUp, Users, Star, Home, Truck, Shield, Wrench, Sparkles, MapPin, Phone, ArrowRight, Calendar, Eye, Zap, Award, Target, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EnhancedCard } from "@/components/enhanced-card"
import { EnhancedGrid } from "@/components/enhanced-grid"
import { StatsSection } from "@/components/stats-section"
import { FloatingContact } from "@/components/floating-contact"

export const metadata: Metadata = {
  title: "الموقع الرئيسي | موسوعة معرفية + خدمات + دليل شركات - المملكة العربية السعودية",
  description: "منصة شاملة تجمع بين الموسوعة المعرفية والخدمات المتنوعة ودليل الشركات المعتمدة في المملكة العربية السعودية. اكتشف المعرفة، احجز الخدمات، وتواصل مع أفضل الشركات.",
  keywords: [
    "موسوعة معرفية", "خدمات السعودية", "دليل شركات", "معرفة", "تكنولوجيا", "اقتصاد", "تاريخ", "علوم", 
    "عقارات", "نقل عفش", "كاميرات أمان", "أنظمة مراقبة", "لوجستيات", "خدمات نظافة", "تكييف", "صيانة",
    "الرياض", "جدة", "الدمام", "مكة", "المدينة", "السعودية", "خدمات موثوقة", "شركات معتمدة"
  ],
  authors: [{ name: "فريق الموقع" }],
  creator: "منصة الخدمات الشاملة",
  publisher: "منصة الخدمات الشاملة",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "موسوعة معرفية + خدمات + دليل شركات",
    description: "منصتك الشاملة للمعرفة والخدمات في المملكة العربية السعودية",
    url: "/",
    siteName: "منصة الخدمات الشاملة",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "موسوعة معرفية + خدمات + دليل شركات",
    description: "منصتك الشاملة للمعرفة والخدمات في المملكة العربية السعودية",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        {/* Hero Section */}
        <HeroSection 
          title="موسوعة معرفية + خدمات + دليل شركات"
          subtitle="منصتك الشاملة للمعرفة والخدمات"
          description="اكتشف المعرفة، احجز الخدمات، وتواصل مع أفضل الشركات في المملكة العربية السعودية"
          primaryCta={{
            text: "ابدأ التصفح",
            href: "/encyclopedia"
          }}
          secondaryCta={{
            text: "سجل شركتك",
            href: "/register-company"
          }}
          features={[
            "موسوعة معرفية شاملة",
            "خدمات متنوعة",
            "دليل شركات معتمد",
            "منصة موثوقة"
          ]}
          rating={4.9}
          ratingText="موثوق به من قبل 10,000+ مستخدم"
          backgroundImage="/hero.png"
        />

        {/* Main Search Bar Section - Clean Design */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6 shadow-lg">
                <Search className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                ابحث في كل شيء
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                اكتشف المعرفة، ابحث عن الخدمات، أو تواصل مع الشركات في مكان واحد
              </p>
            </div>
            
            <div className="relative max-w-3xl mx-auto">
              <div className="relative">
                <div className="flex items-center bg-card rounded-2xl shadow-xl border border-border p-3">
                  <Search className="h-6 w-6 text-muted-foreground mx-4" />
                  <Input 
                    placeholder="ابحث في الموسوعة، الخدمات، أو الشركات..."
                    className="flex-1 border-0 focus-visible:ring-0 text-lg bg-transparent"
                  />
                  <Button size="lg" className="ml-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 shadow-lg">
                    بحث
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {[
                  { name: "الموسوعة", icon: BookOpen },
                  { name: "الخدمات", icon: Briefcase },
                  { name: "الشركات", icon: Building2 }
                ].map((category, index) => {
                  const IconComponent = category.icon
                  return (
                    <div key={index} className="group cursor-pointer">
                      <div className="flex items-center space-x-2 space-x-reverse bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300">
                        <IconComponent className="h-4 w-4" />
                        <span className="font-medium">{category.name}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <StatsSection
          title="منصة موثوقة بأرقام مؤكدة"
          subtitle="إحصائيات تعكس جودة خدماتنا وثقة عملائنا"
          stats={[
            {
              icon: Users,
              value: "10,000+",
              label: "مستخدم نشط",
              description: "يثقون بخدماتنا يومياً",
              trend: { value: "+15%", isPositive: true }
            },
            {
              icon: Building2,
              value: `${companies.length}+`,
              label: "شركة معتمدة",
              description: "تقدم خدمات عالية الجودة",
              trend: { value: "+8%", isPositive: true }
            },
            {
              icon: BookOpen,
              value: `${categories.reduce((sum, cat) => sum + cat.entryCount, 0)}+`,
              label: "مقال معرفي",
              description: "في موسوعتنا الشاملة",
              trend: { value: "+25%", isPositive: true }
            },
            {
              icon: Star,
              value: "4.9/5",
              label: "تقييم العملاء",
              description: "متوسط رضا المستخدمين",
              trend: { value: "+0.2", isPositive: true }
            }
          ]}
          variant="detailed"
        />

        {/* Banner - Platform Features */}
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="منصة شاملة لجميع احتياجاتك"
              description="موسوعة معرفية + دليل خدمات + دليل شركات - كل ما تحتاجه في مكان واحد"
              cta={{
                text: "اكتشف المزيد",
                href: "/about",
                variant: "outline"
              }}
              variant="compact"
              backgroundType="solid"
              backgroundColor="#da5f0a"
              textColor="white"
              showContactButtons={true}
              whatsappNumber="+966592425757"
              phoneNumber="+966592425757"
            />
          </div>
        </div>

        {/* Encyclopedia Section - Clean Design */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-3xl mb-6 shadow-xl">
                <BookOpen className="h-10 w-10 text-primary-foreground" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                الموسوعة المعرفية
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                استكشف قاعدة معرفتنا الشاملة والمتطورة في مختلف المجالات التخصصية
              </p>
            </div>

            <EnhancedGrid variant="default" columns={{ sm: 1, md: 2, lg: 4 }} gap="lg">
              {categories.map((category, index) => {
                const icons = [Briefcase, Shield, Truck, Wrench]
                const IconComponent = icons[index % icons.length]
                
                return (
                  <EnhancedCard
                    key={category.id}
                    title={category.title}
                    description={category.description}
                    href={`/encyclopedia/${category.id}`}
                    icon={IconComponent}
                    badge={{
                      text: `${category.entryCount} مقال`,
                      variant: "secondary"
                    }}
                    metrics={[
                      { icon: Eye, text: `${category.entryCount} مقال` },
                      { icon: Calendar, text: new Date(category.lastUpdated).toLocaleDateString('ar-SA') }
                    ]}
                    variant="featured"
                  />
                )
              })}
            </EnhancedGrid>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl shadow-lg">
                <Link href="/encyclopedia">
                  <BookOpen className="ml-2 h-5 w-5" />
                  تصفح كل المقالات
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Banner - Quality Assurance */}
        <div className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="جودة وموثوقية في كل خدمة"
              description="جميع مقدمي الخدمات معتمدون ومراجعون من قبل فريقنا لضمان أعلى مستوى من الجودة والاحترافية"
              cta={{
                text: "تصفح الخدمات",
                href: "/services",
                variant: "default"
              }}
              variant="default"
              backgroundType="solid"
              backgroundColor="#187e89"
              textColor="white"
              showContactButtons={true}
              whatsappNumber="+966592425757"
              phoneNumber="+966592425757"
            />
          </div>
        </div>

        {/* Services Section - Clean Cards */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary rounded-3xl mb-6 shadow-xl">
                <Briefcase className="h-10 w-10 text-secondary-foreground" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                الخدمات المتاحة
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                اكتشف مجموعة واسعة من الخدمات المتخصصة والموثوقة
              </p>
            </div>

            <EnhancedGrid variant="default" columns={{ sm: 1, md: 2, lg: 4 }} gap="lg">
              {services.map((service, index) => {
                const getServiceIcon = (serviceId: string) => {
                  switch(serviceId) {
                    case 'furniture-moving': return Truck
                    case 'cleaning-services': return Sparkles
                    case 'security-systems': return Shield
                    case 'ac-services': return Wrench
                    default: return Briefcase
                  }
                }
                
                const ServiceIcon = getServiceIcon(service.id)
                const companyCount = companies.filter(c => c.services.includes(service.id)).length
                
                return (
                  <EnhancedCard
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    href={`/services/${service.id}`}
                    icon={ServiceIcon}
                    badge={{
                      text: `${companyCount} شركة متاحة`,
                      variant: "outline"
                    }}
                    metrics={[
                      { icon: Building2, text: `${companyCount} شركة` },
                      { icon: Clock, text: service.availability || "متوفر دائماً" }
                    ]}
                    features={service.features || []}
                    variant="default"
                  />
                )
              })}
            </EnhancedGrid>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-xl shadow-lg">
                <Link href="/services">
                  <Briefcase className="ml-2 h-5 w-5" />
                  اكتشف جميع الخدمات
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Banner - Trusted Partners */}
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="شركاء موثوقون في جميع أنحاء المملكة"
              description="نتعاون مع أفضل الشركات المعتمدة والمرخصة لضمان حصولك على أعلى مستوى من الخدمة والجودة"
              cta={{
                text: "اكتشف الشركات",
                href: "/companies",
                variant: "default"
              }}
              variant="default"
              backgroundType="solid"
              backgroundColor="#da5f0a"
              textColor="white"
              showContactButtons={true}
              whatsappNumber="+966592425757"
              phoneNumber="+966592425757"
        
            />
          </div>
        </div>

        {/* Companies Section - Clean Design */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-3xl mb-6 shadow-xl">
                <Building2 className="h-10 w-10 text-accent-foreground" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                الشركات المميزة
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                تواصل مع أفضل الشركات المعتمدة والموثوقة في المملكة
              </p>
            </div>

            <EnhancedGrid variant="default" columns={{ sm: 1, md: 2, lg: 3 }} gap="lg">
              {companies.slice(0, 6).map((company, index) => {
                const getServiceIcon = (serviceId: string) => {
                  switch(serviceId) {
                    case 'furniture-moving': return Truck
                    case 'cleaning-services': return Sparkles
                    case 'security-systems': return Shield
                    case 'ac-services': return Wrench
                    default: return Building2
                  }
                }
                
                const ServiceIcon = getServiceIcon(company.services[0])
                const serviceNameMap = {
                  'furniture-moving': 'نقل عفش',
                  'cleaning-services': 'خدمات نظافة', 
                  'security-systems': 'أنظمة أمان',
                  'ac-services': 'تكييف'
                }
                
                return (
                  <EnhancedCard
                    key={company.id}
                    title={company.name}
                    description={company.description}
                    href={`/companies/${company.id}`}
                    icon={ServiceIcon}
                    badge={{
                      text: `⭐ ${company.rating} (${company.reviews} تقييم)`,
                      variant: "secondary"
                    }}
                    metrics={[
                      { icon: Star, text: `${company.rating}/5.0` },
                      { icon: Eye, text: `${company.reviews} تقييم` }
                    ]}
                    features={[
                      serviceNameMap[company.services[0] as keyof typeof serviceNameMap] || company.services[0],
                      ...company.features.slice(0, 2)
                    ]}
                    footer={{
                      left: company.locations[0],
                      right: `منذ ${company.established}`
                    }}
                    variant="default"
                  />
                )
              })}
            </EnhancedGrid>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl shadow-lg">
                <Link href="/companies">
                  <Building2 className="ml-2 h-5 w-5" />
                  تصفح دليل الشركات
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Banner - Knowledge Hub */}
        <div className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="   يمكنك ان تعلن هنا على منصتنا"
              description="من خلال منصة قمر الخليج الذهبي يمكنك ان تنشر خدماتك او شركتك او مقالاتك"
              cta={{
                text: "تواصل للإعلان ",
                href: "/blog",
                variant: "default"
              }}
              variant="promotional"
              backgroundType="solid"
              backgroundColor="#187e89"
              textColor="white"
              className="p-8"
              showContactButtons={true}
              whatsappNumber="+966592425757"
              phoneNumber="+966592425757"
            />
          </div>
        </div>

        {/* Articles Section - Clean Design */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-muted rounded-3xl mb-6 shadow-xl">
                <Eye className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                أحدث المقالات
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                اطلع على أحدث المقالات والمعلومات من موسوعتنا المعرفية المتطورة
              </p>
            </div>

            <EnhancedGrid variant="default" columns={{ sm: 1, md: 2, lg: 3 }} gap="lg">
              {topics.slice(0, 3).map((topic, index) => {
                const getTopicIcon = (topicId: string) => {
                  switch(topicId) {
                    case 'furniture-moving': return Truck
                    case 'cleaning-services': return Sparkles
                    case 'security-systems': return Shield
                    case 'ac-services': return Wrench
                    default: return BookOpen
                  }
                }
                
                const TopicIcon = getTopicIcon(topic.id)
                const topicCategoryMap = {
                  'furniture-moving': 'نقل وشحن',
                  'cleaning-services': 'نظافة',
                  'security-systems': 'أمان',
                  'ac-services': 'تكييف'
                }
                
                return (
                  <EnhancedCard
                    key={topic.id}
                    title={topic.title}
                    description={topic.description}
                    href={`/blog/${topic.id}`}
                    icon={TopicIcon}
                    badge={{
                      text: "جديد",
                      variant: "default"
                    }}
                    metrics={[
                      { icon: Eye, text: `${topic.articleCount} مقال` },
                      { icon: Clock, text: "5 دقائق قراءة" }
                    ]}
                    features={[
                      topicCategoryMap[topic.id as keyof typeof topicCategoryMap] || topic.id,
                      "محتوى حصري",
                      "محدث باستمرار"
                    ]}
                    footer={{
                      right: new Date(topic.lastUpdated).toLocaleDateString('ar-SA')
                    }}
                    variant="default"
                  />
                )
              })}
            </EnhancedGrid>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-muted hover:bg-muted/90 text-muted-foreground px-8 py-4 rounded-xl shadow-lg">
                <Link href="/blog">
                  <BookOpen className="ml-2 h-5 w-5" />
                  عرض جميع المقالات
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final Call-to-Action Banner */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="انضم إلى منصتنا الشاملة اليوم"
              description="استفد من موسوعتنا المعرفية، احجز خدماتك المفضلة، وتواصل مع أفضل الشركات في المملكة - كل ذلك في مكان واحد"
              cta={{
                text: "ابدأ الآن",
                href: "/encyclopedia",
                variant: "default"
              }}
              variant="promotional"
              backgroundType="solid"
              backgroundColor="#da5f0a"
              textColor="white"
              className="p-8"
              showContactButtons={true}
              whatsappNumber="+966592425757"
              phoneNumber="+966592425757"
            />
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Floating Contact Button */}
      <FloatingContact 
        whatsappNumber="+966592425757"
        phoneNumber="+966592425757"
      />
    </div>
  )
}