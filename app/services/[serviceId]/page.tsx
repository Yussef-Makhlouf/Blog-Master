import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getService, getServices } from "@/lib/data"
import { CheckCircle, Clock, DollarSign, Mail, Phone } from "lucide-react"

interface ServicePageProps {
  params: {
    serviceId: string
  }
}

export async function generateStaticParams() {
  const services = await getServices()
  return services.map((service) => ({
    serviceId: service.id,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = await getService(params.serviceId)

  if (!service) {
    return {
      title: "الخدمة غير موجودة",
    }
  }

  return {
    title: `${service.title} | Professional Services`,
    description: service.fullDescription,
    keywords: [service.title.toLowerCase(), "service", "professional", "business"],
    openGraph: {
      title: `${service.title} | Professional Services`,
      description: service.fullDescription,
      type: "article",
      images: [service.image],
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = await getService(params.serviceId)

  if (!service) {
    notFound()
  }

  // Determine which additional info to show based on service
  const additionalInfo = service.availability || service.support || service.emergency || service.duration;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Header */}
        <div className="bg-muted/30 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: service.title }]} className="mb-6" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">{service.title}</h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">{service.description}</p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {service.duration && (
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </Badge>
                  )}
                  {service.availability && (
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      {service.availability}
                    </Badge>
                  )}
                  {service.support && (
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      {service.support}
                    </Badge>
                  )}
                  {service.emergency && (
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      {service.emergency}
                    </Badge>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg">
                    <Mail className="h-5 w-5 mr-2" />
                    اتصل بنا
                  </Button>
                  <Button variant="outline" size="lg">
                    <Phone className="h-5 w-5 mr-2" />
                    ارسل رسالة
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold mb-6">تفاصيل الخدمة</h2>
                  <p className="text-muted-foreground leading-relaxed">{service.fullDescription}</p>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6">ما يتضمنه الخدمة</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
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
                    <CardTitle>تفاصيل الخدمة</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {service.duration && (
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">المدة الزمنية</span>
                        <span className="font-semibold">{service.duration}</span>
                      </div>
                    )}
                    {additionalInfo && (
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">معلومات إضافية</span>
                        <span className="font-semibold">{additionalInfo}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">الميزات</span>
                      <span className="font-semibold">{service.features.length} ميزات</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>هل أنت مستعد للبدء؟</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      تواصل معنا اليوم لمناقشة متطلباتك والحصول على خدمة مخصصة تناسب احتياجاتك.
                    </p>
                    <div className="space-y-2">
                      <Button className="w-full">
                        <Mail className="h-4 w-4 mr-2" />
                        أرسل رسالة
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        <Phone className="h-4 w-4 mr-2" />
                        اتصل بنا
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
