import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getCompany, getService } from "@/lib/data"
import { 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Calendar, 
  Users, 
  CheckCircle, 
  ArrowLeft
} from "lucide-react"
import Link from "next/link"

interface CompanyPageProps {
  params: {
    companyId: string
  }
}

export async function generateStaticParams() {
  // This would typically come from your companies data
  const companyIds = ["al-muhaidib", "al-ahliyah", "safeguard", "cool-tech", "al-saqr", "sparkle-clean"]
  return companyIds.map((companyId) => ({
    companyId,
  }))
}

export async function generateMetadata({ params }: CompanyPageProps): Promise<Metadata> {
  const company = await getCompany(params.companyId)

  if (!company) {
    return {
      title: "الشركة غير موجودة",
    }
  }

  return {
    title: `${company.name} | تفاصيل الشركة`,
    description: company.fullDescription,
    keywords: [company.name, "شركة", ...company.services],
    openGraph: {
      title: `${company.name} | تفاصيل الشركة`,
      description: company.fullDescription,
      type: "article",
      images: [company.image],
    },
  }
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const company = await getCompany(params.companyId)

  if (!company) {
    notFound()
  }

  // Get service names for display
  const services = await Promise.all(
    company.services.map(async (serviceId) => {
      const service = await getService(serviceId)
      return service ? { id: serviceId, name: service.title } : null
    })
  )

  const validServices = services.filter((service) => service !== null)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Header */}
        <div className="bg-muted/30 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb 
              items={[
                { label: "الشركات", href: "/companies" }, 
                { label: company.name }
              ]} 
              className="mb-6" 
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-balance">{company.name}</h1>
                  <div className="flex items-center gap-1 bg-background px-3 py-1 rounded-full shadow-sm">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold">{company.rating}</span>
                    <span className="text-muted-foreground">({company.reviews} تقييم)</span>
                  </div>
                </div>
                
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-6">
                  {company.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">تأسست {company.established}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">{company.employees} موظف</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={company.image || "/placeholder.svg"}
                    alt={company.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Details */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none mb-12">
                  <h2 className="text-3xl font-bold mb-6">عن الشركة</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {company.fullDescription}
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6">الخدمات المقدمة</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {validServices.map((service) => (
                      <Link 
                        key={service.id} 
                        href={`/services/${service.id}`}
                        className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <span className="font-medium">{service.name}</span>
                        <ArrowLeft className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">الميزات والخدمات</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {company.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>معلومات التواصل</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <a href={`tel:${company.contact.phone}`} className="text-primary hover:underline">
                        {company.contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <a href={`mailto:${company.contact.email}`} className="text-primary hover:underline">
                        {company.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <a href={`https://${company.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {company.contact.website}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-foreground">المواقع:</span>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {company.locations.map((location, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {location}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>معلومات إضافية</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">سنة التأسيس</span>
                      <span className="font-semibold">{company.established}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">عدد الموظفين</span>
                      <span className="font-semibold">{company.employees}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">عدد التقييمات</span>
                      <span className="font-semibold">{company.reviews}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">المتوسط</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold">{company.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>هل تحتاج إلى الخدمة؟</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      تواصل مع الشركة مباشرة للحصول على عرض سعر وحجز الخدمة.
                    </p>
                    <div className="space-y-2">
                      <Button className="w-full" asChild>
                        <a href={`tel:${company.contact.phone}`}>
                          <Phone className="h-4 w-4 ml-2" />
                          اتصل الآن
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <a href={`mailto:${company.contact.email}`}>
                          <Mail className="h-4 w-4 ml-2" />
                          أرسل بريد إلكتروني
                        </a>
                      </Button>
                    </div>
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