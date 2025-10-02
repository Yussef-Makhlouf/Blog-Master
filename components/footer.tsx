import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">قمر الخليج الذهبي</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              منصة شاملة تضم خدمات احترافية ومحتوى مدونة ثري وموارد موسوعية واسعة لمساعدتك على النمو والتعلم.
            </p>
            <div className="flex space-x-reverse space-x-4">
              <Link href="#" className="text-foreground hover:text-primary transition-colors p-3 rounded-full bg-muted hover:bg-primary/10 shadow-sm">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors p-3 rounded-full bg-muted hover:bg-primary/10 shadow-sm">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors p-3 rounded-full bg-muted hover:bg-primary/10 shadow-sm">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors p-3 rounded-full bg-muted hover:bg-primary/10 shadow-sm">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">روابط سريعة</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="mr-2 text-primary">→</span> الخدمات
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="mr-2 text-primary">→</span> المدونة
                </Link>
              </li>
              <li>
                <Link href="/encyclopedia" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="mr-2 text-primary">→</span> الموسوعة
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="mr-2 text-primary">→</span> من نحن
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="mr-2 text-primary">→</span> اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">الخدمات</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services/web-development" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="mr-2 text-primary">→</span> تطوير المواقع
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="mr-2 text-primary">→</span> تطبيقات الجوال
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="mr-2 text-primary">→</span> تصميم UI/UX
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="mr-2 text-primary">→</span> التسويق الرقمي
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="mr-2 text-primary">→</span> الاستشارات
                </Link>
              </li>
            </ul>
          </div>


        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} قمر الخليج الذهبي. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-reverse space-x-6">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}