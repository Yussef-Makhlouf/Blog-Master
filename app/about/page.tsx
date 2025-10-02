import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import SectionHeader from "@/components/section-header"

import Banner from "@/components/banner"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Users, Target, Award, Heart } from "lucide-react"

export default function AboutPage() {
  // Sections for the sub-hero navigation
  const aboutSections: { id: string; title: string; color: "primary" | "secondary" | "accent" | "muted" }[] = [
    { id: "story", title: "قصتنا", color: "primary" },
    { id: "values", title: "قيمنا", color: "secondary" },
    { id: "team", title: "الفريق", color: "accent" },
    { id: "contact", title: "اتصل بنا", color: "muted" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <PageHeader title="من نحن" description="تعرف على قصتنا ورؤيتنا والفريق الذي يقف وراء نجاحنا" />

        {/* Banner after header */}
        <div className="py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="انضم إلى فريقنا"
              description="نحن نبحث دائماً عن المواهب الجديدة للانضمام إلى فريقنا المتميز."
              image="/join-our-team-banner.jpg"
              cta={{
                text: "عرض الوظائف",
                href: "/contact",
                variant: "secondary"
              }}
              variant="default"
            />
          </div>
        </div>


        {/* Our Story */}
        <section id="story" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <SectionHeader
                  subtitle="قصتنا"
                  title="رحلة من الشغف إلى التميز"
                  description="بدأنا برؤية بسيطة: تقديم حلول تقنية عالية الجودة تساعد الشركات على النمو والازدهار في العصر الرقمي."
                />
                <p className="text-muted-foreground leading-relaxed mb-5 sm:mb-6">
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
                <img src="/logo-white.png" alt="فريق العمل" className="rounded-lg shadow-lg w-full h-full p-4" />
              </div>
            </div>
          </div>
        </section>

        {/* Banner between sections */}
        <div className="py-8 sm:py-10 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner
              title="هل تبحث عن شريك إعلاني ؟"
              description="انشر شركتك معنا أو اكتب مقالاً تعريفيًا لتوصيل رسالتك إلى جمهور أوسع."
              cta={{
                text: "سجل شركتك الآن",
                href: "/contact",
                variant: "outline"
              }}
              variant="compact"
            />
          </div>
        </div>

        {/* Our Values - Repurposed for Advertising/Marketing */}
        <section id="values" className="py-16 sm:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle="خدماتنا الإعلانية"
              title="مساحة إعلانية متميزة لشركتك"
              description="انشر شركتك معنا ووصّل رسالتك إلى جمهور واسع في منطقة الخليج"
            />

            {/* Modified grid to show 2 cards on mobile, 2 on tablet, 4 on desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-12">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">وصول واسع</h3>
                <p className="text-muted-foreground text-sm sm:text-base">تواصل مع جمهور كبير من سكان الخليج من خلال منصتنا</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Target className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">استهداف دقيق</h3>
                <p className="text-muted-foreground text-sm sm:text-base">استفد من استهداف دقيق لضمان وصول إعلانك إلى الجمهور المناسب</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Award className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">محتوى متميز</h3>
                <p className="text-muted-foreground text-sm sm:text-base">نوفر مساحة إعلانية متميزة مع محتوى عالي الجودة يخدم المجتمع</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Heart className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">معلومات قيمة</h3>
                <p className="text-muted-foreground text-sm sm:text-base">ساهم في نشر مقالات ومعلومات مهمة تخدم حياة سكان الخليج</p>
              </div>
            </div>
            
            <div className="text-center mt-10 sm:mt-12">
              <Button asChild size="lg" variant="default">
                <Link href="/contact">
                  سجل شركتك الآن
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 sm:py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance mb-4 sm:mb-6">هل تريد العمل معنا؟</h2>
            <p className="text-base sm:text-xl text-primary-foreground/90 text-pretty mb-6 sm:mb-8 max-w-2xl mx-auto">
              نحن دائماً نبحث عن فرص جديدة للتعاون مع عملاء يشاركوننا نفس الرؤية والطموح.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
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