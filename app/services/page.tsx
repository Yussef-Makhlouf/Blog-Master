import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import GridLayout from "@/components/grid-layout"
import ServiceCard from "@/components/service-card"
import Breadcrumb from "@/components/breadcrumb"
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <PageHeader
          title="Professional Services"
          description="We offer comprehensive solutions tailored to help your business grow and succeed in today's competitive digital landscape."
        >
          <Breadcrumb items={[{ label: "Services" }]} className="justify-center" />
        </PageHeader>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GridLayout columns={3} gap="lg">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  features={service.features}
                  price={service.price}
                  duration={service.duration}
                />
              ))}
            </GridLayout>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Need a Custom Solution?</h2>
            <p className="text-lg text-muted-foreground text-pretty mb-8 leading-relaxed">
              Don't see exactly what you're looking for? We specialize in creating custom solutions tailored to your
              specific business needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@example.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Us Today
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
