import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"
import CompanyCard from "@/components/company-card"
import { getService, getCompaniesByService } from "@/lib/data"
import { Grid3X3, List } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServicePageProps {
  params: {
    serviceId: string
  }
}

export async function generateStaticParams() {
  // This would typically come from your services data
  const serviceIds = ["furniture-moving", "cleaning-services", "security-systems", "ac-services"]
  return serviceIds.map((serviceId) => ({
    serviceId,
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
    title: `شركات ${service.title} | دليل الشركات`,
    description: `اكتشف أفضل الشركات التي تقدم خدمات ${service.title} في جميع أنحاء المملكة العربية السعودية.`,
    keywords: [service.title, "شركات", "مقدمي الخدمات", "السعودية"],
    openGraph: {
      title: `شركات ${service.title} | دليل الشركات`,
      description: `اكتشف أفضل الشركات التي تقدم خدمات ${service.title} في جميع أنحاء المملكة العربية السعودية.`,
      type: "website",
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = await getService(params.serviceId)
  const companies = await getCompaniesByService(params.serviceId)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Header */}
        <div className="bg-muted/30 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: service.title }]} className="mb-6" />

            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">شركات {service.title}</h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
                اكتشف أفضل الشركات التي تقدم خدمات {service.title} في جميع أنحاء المملكة العربية السعودية
              </p>
            </div>
          </div>
        </div>

        {/* Companies List */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold">جميع الشركات</h2>
                <p className="text-muted-foreground">
                  تم العثور على {companies.length} شركة تقدم هذه الخدمة
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

            {companies.length > 0 ? (
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
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">لا توجد شركات حالياً</h3>
                <p className="text-muted-foreground">
                  نعتذر، لا توجد شركات مسجلة حالياً تقدم هذه الخدمة. يرجى مراجعة لاحقاً.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}