import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import SectionHeader from "@/components/section-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Users, Target, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <PageHeader title="من نحن" description="تعرف على قصتنا ورؤيتنا والفريق الذي يقف وراء نجاحنا" />

        {/* Our Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  subtitle="قصتنا"
                  title="رحلة من الشغف إلى التميز"
                  description="بدأنا برؤية بسيطة: تقديم حلول تقنية عالية الجودة تساعد الشركات على النمو والازدهار في العصر الرقمي."
                />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  منذ تأسيسنا، التزمنا بتقديم خدمات استثنائية تجمع بين الابتكار والخبرة العملية. نؤمن بأن التكنولوجيا
                  يجب أن تكون في خدمة الإنسان، وليس العكس.
                </p>
                <Button asChild>
                  <Link href="/contact">
                    تواصل معنا
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img src="/collaborative-teamwork.png" alt="فريق العمل" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle="قيمنا"
              title="المبادئ التي توجه عملنا"
              description="نؤمن بقيم أساسية تشكل أساس كل ما نقوم به"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">العمل الجماعي</h3>
                <p className="text-muted-foreground text-sm">نؤمن بقوة التعاون والعمل كفريق واحد لتحقيق أفضل النتائج</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">التركيز على الهدف</h3>
                <p className="text-muted-foreground text-sm">نركز على تحقيق أهداف عملائنا بدقة وفعالية</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">التميز</h3>
                <p className="text-muted-foreground text-sm">نسعى للتميز في كل مشروع ونلتزم بأعلى معايير الجودة</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Heart className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">الشغف</h3>
                <p className="text-muted-foreground text-sm">نحب ما نقوم به ونضع شغفنا في كل تفصيل من تفاصيل عملنا</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">هل تريد العمل معنا؟</h2>
            <p className="text-xl text-primary-foreground/90 text-pretty mb-8 max-w-2xl mx-auto">
              نحن دائماً نبحث عن فرص جديدة للتعاون مع عملاء يشاركوننا نفس الرؤية والطموح.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  ابدأ مشروعك
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/services">تصفح خدماتنا</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
