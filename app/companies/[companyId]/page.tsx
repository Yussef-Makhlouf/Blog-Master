import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import Breadcrumb from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Phone, Globe, Calendar, Users } from "lucide-react"
import Banner from "@/components/banner"
import { getCompany, getCompanyPromotionalData } from "@/lib/data"
import ImageWithFallback from "@/components/image-with-fallback"

interface CompanyPageProps {
  params: {
    companyId: string
  }
}

export async function generateMetadata({ params }: CompanyPageProps): Promise<Metadata> {
  const company = await getCompany(params.companyId)
  
  if (!company) {
    return {
      title: "الشركة غير موجودة",
      description: "لم نتمكن من العثور على الشركة المطلوبة",
    }
  }

  return {
    title: `${company.name} | دليل الشركات`,
    description: company.description,
    keywords: [company.name, "شركة", "خدمات", ...company.services],
    openGraph: {
      title: `${company.name} | دليل الشركات`,
      description: company.description,
      type: "website",
    },
  }
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const company = await getCompany(params.companyId)
  
  if (!company) {
    notFound()
  }

  // Get promotional data for banner
  const promotionalData = await getCompanyPromotionalData(params.companyId)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <PageHeader
          title={company.name}
          description={company.description}
        >
          <Breadcrumb 
            items={[
              { label: "Companies", href: "/companies" }, 
              { label: company.name }
            ]} 
            className="justify-center" 
          />
        </PageHeader>

        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <Card className="border border-border rounded-xl overflow-hidden">
                  <div className="relative w-full aspect-video">
                    <ImageWithFallback
                      src={company.image || "/placeholder.svg"}
                      alt={company.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div>
                        <CardTitle className="text-2xl sm:text-3xl font-bold">
                          {company.name}
                        </CardTitle>
                        <CardDescription className="text-base mt-2">
                          {company.fullDescription}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-1 bg-muted px-3 py-1.5 rounded-full">
                        <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold">{company.rating}</span>
                        <span className="text-muted-foreground">({company.reviews} تقييم)</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">معلومات التواصل</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-muted-foreground" />
                            <span>{company.contact.phone}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Globe className="h-5 w-5 text-muted-foreground" />
                            <span>{company.contact.website}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">معلومات إضافية</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Calendar className="h-5 w-5 text-muted-foreground" />
                            <span>تأسست عام {company.established}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Users className="h-5 w-5 text-muted-foreground" />
                            <span>{company.employees} موظف</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-3">المواقع</h3>
                      <div className="flex flex-wrap gap-2">
                        {company.locations.map((location) => (
                          <Badge key={location} variant="secondary" className="py-1 px-3">
                            <MapPin className="h-3 w-3 mr-1" />
                            {location}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-3">الخدمات المقدمة</h3>
                      <div className="flex flex-wrap gap-2">
                        {company.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="py-1 px-3">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar with promotional banner */}
              <div className="space-y-6">
                {/* Promotional Banner */}
                {promotionalData && (
                  <Banner
                    title={promotionalData.title}
                    description={promotionalData.description}
                    image={company.image}
                    cta={{
                      text: promotionalData.ctaText,
                      href: `/contact?company=${company.id}`,
                      variant: "default"
                    }}
                    variant="promotional"
                    backgroundType="gradient"
                    backgroundColor="blue"
                    textColor="foreground"
                  />
                )}

                {/* Encyclopedia Link Banner */}
                {promotionalData && (
                  <Banner
                    title="هل تبحث عن معلومات إضافية؟"
                    description="تعرف على معلومات مفيدة حول هذه الخدمة في موسوعتنا"
                    cta={{
                      text: promotionalData.encyclopediaText,
                      href: `/encyclopedia/${promotionalData.encyclopediaLink}`,
                      variant: "outline"
                    }}
                    variant="compact"
                    backgroundType="gradient"
                    backgroundColor="green"
                    textColor="foreground"
                  />
                )}

                <Card className="border border-border rounded-xl">
                  <CardHeader>
                    <CardTitle>طلب الخدمة</CardTitle>
                    <CardDescription>
                      اتصل بنا مباشرة لطلب هذه الخدمة أو للاستعلام عن الأسعار
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button asChild className="w-full" size="lg">
                      <a href={`tel:${company.contact.phone}`}>
                        اتصل الآن
                      </a>
                    </Button>
                    <Button asChild className="w-full" variant="outline" size="lg">
                      <a href={`mailto:${company.contact.email}`}>
                        إرسال بريد إلكتروني
                      </a>
                    </Button>
                    <Button asChild className="w-full" variant="secondary" size="lg">
                      <a href="/contact">
                        إرسال استفسار
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}