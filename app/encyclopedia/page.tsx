import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import GridLayout from "@/components/grid-layout"
import EncyclopediaCard from "@/components/encyclopedia-card"
import Breadcrumb from "@/components/breadcrumb"
import { getEncyclopediaCategories } from "@/lib/data"

export const metadata: Metadata = {
  title: "Encyclopedia | Comprehensive Knowledge Base",
  description:
    "Explore our extensive encyclopedia covering various topics in technology, programming, databases, cloud computing, security, and DevOps.",
  keywords: [
    "encyclopedia",
    "knowledge base",
    "technology",
    "programming",
    "databases",
    "cloud computing",
    "security",
    "devops",
  ],
  openGraph: {
    title: "Encyclopedia | Comprehensive Knowledge Base",
    description:
      "Explore our extensive encyclopedia covering various topics in technology, programming, databases, cloud computing, security, and DevOps.",
    type: "website",
  },
}

export default async function EncyclopediaPage() {
  const categories = await getEncyclopediaCategories()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <PageHeader
          title="Knowledge Encyclopedia"
          description="Discover comprehensive information about technology, programming languages, frameworks, tools, and best practices in our extensive knowledge base."
        >
          <Breadcrumb items={[{ label: "Encyclopedia" }]} className="justify-center" />
        </PageHeader>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GridLayout columns={3} gap="lg">
              {categories.map((category) => (
                <EncyclopediaCard
                  key={category.id}
                  id={category.id}
                  title={category.title}
                  description={category.description}
                  image={category.image}
                  entryCount={category.entryCount}
                  lastUpdated={category.lastUpdated}
                />
              ))}
            </GridLayout>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Looking for Something Specific?</h2>
            <p className="text-lg text-muted-foreground text-pretty mb-8 leading-relaxed">
              Use our search feature to quickly find the information you need across all encyclopedia categories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="search"
                placeholder="Search encyclopedia..."
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
                Search
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
