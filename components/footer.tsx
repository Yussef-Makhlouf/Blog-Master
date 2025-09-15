import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-foreground mb-4">الموقع الاحترافي</h3>
            <p className="text-sm leading-relaxed mb-4">
              منصة شاملة تضم خدمات احترافية ومحتوى مدونة ثري وموارد موسوعية واسعة لمساعدتك على النمو والتعلم.
            </p>
            <div className="flex space-x-reverse space-x-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  الخدمات
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  المدونة
                </Link>
              </li>
              <li>
                <Link href="/encyclopedia" className="hover:text-primary transition-colors">
                  الموسوعة
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">اتصل بنا</h4>
            <ul className="space-y-2 text-sm">
              <li>البريد الإلكتروني: info@example.com</li>
              <li>الهاتف: (555) 123-4567</li>
              <li>العنوان: شارع الأعمال 123</li>
              <li>المدينة، المنطقة 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} الموقع الاحترافي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
