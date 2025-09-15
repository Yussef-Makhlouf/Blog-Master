import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import GridLayout from "@/components/grid-layout"
import Breadcrumb from "@/components/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getEncyclopediaCategory, getEncyclopediaCategories, getCategoryEntries } from "@/lib/data"
import { Calendar, Tag, TrendingUp, Users } from "lucide-react"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export async function generateStaticParams() {
  const categories = await getEncyclopediaCategories()
  return categories.map((category) => ({
    category: category.id,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = await getEncyclopediaCategory(params.category)

  if (!category) {
    return {
      title: "Category Not Found",
    }
  }

  return {
    title: `${category.title} | Encyclopedia`,
    description: category.description,
    keywords: [category.title.toLowerCase(), "encyclopedia", "knowledge", "reference"],
    openGraph: {
      title: `${category.title} | Encyclopedia`,
      description: category.description,
      type: "website",
      images: [category.image],
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const [category, entries] = await Promise.all([
    getEncyclopediaCategory(params.category),
    getCategoryEntries(params.category),
  ])

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <PageHeader title={category.title} description={category.description}>
          <Breadcrumb
            items={[{ label: "Encyclopedia", href: "/encyclopedia" }, { label: category.title }]}
            className="justify-center"
          />
        </PageHeader>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {entries.length > 0 ? (
              <GridLayout columns={2} gap="lg">
                {entries.map((entry) => (
                  <Card
                    key={entry.id}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl font-semibold text-balance group-hover:text-primary transition-colors">
                          {entry.title}
                        </CardTitle>
                        <Badge variant="secondary" className="ml-2 flex-shrink-0">
                          {entry.category}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm text-pretty leading-relaxed">
                        {entry.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="prose prose-sm max-w-none">
                        <p className="text-muted-foreground leading-relaxed line-clamp-3">{entry.content}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {entry.paradigms?.slice(0, 3).map((paradigm) => (
                          <Badge key={paradigm} variant="outline" className="text-xs">
                            {paradigm}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground pt-4 border-t">
                        {entry.difficulty && (
                          <div className="flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            {entry.difficulty}
                          </div>
                        )}
                        {entry.popularity && (
                          <div className="flex items-center">
                            <Users className="h-3 w-3 mr-1" />
                            {entry.popularity}
                          </div>
                        )}
                        {entry.firstAppeared && (
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            Since {entry.firstAppeared}
                          </div>
                        )}
                        {entry.type && (
                          <div className="flex items-center">
                            <Tag className="h-3 w-3 mr-1" />
                            {entry.type}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </GridLayout>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold mb-4">No Entries Yet</h3>
                <p className="text-muted-foreground">
                  We're working on adding more content to this category. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Category Stats */}
        {entries.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">{entries.length}</div>
                  <div className="text-muted-foreground">Total Entries</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">
                    {new Set(entries.flatMap((entry) => entry.paradigms || [])).size}
                  </div>
                  <div className="text-muted-foreground">Paradigms Covered</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">
                    {new Date(category.lastUpdated).toLocaleDateString()}
                  </div>
                  <div className="text-muted-foreground">Last Updated</div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
