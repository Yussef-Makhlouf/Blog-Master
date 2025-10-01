import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 text-muted-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-4">الموقع الاحترافي</h3>
            <p className="text-base leading-relaxed mb-6 max-w-md">
              منصة شاملة تضم خدمات احترافية ومحتوى مدونة ثري وموارد موسوعية واسعة لمساعدتك على النمو والتعلم.
            </p>
            <div className="flex space-x-reverse space-x-4">
              <Link href="#" className="hover:text-primary transition-colors px-2 bg-background p-2 rounded-full shadow-sm">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors px-2 bg-background p-2 rounded-full shadow-sm">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors bg-background p-2 rounded-full shadow-sm">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary px-2 transition-colors bg-background p-2 rounded-full shadow-sm">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">•</span> الخدمات
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">•</span> المدونة
                </Link>
              </li>
              <li>
                <Link href="/encyclopedia" className="hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">•</span> الموسوعة
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">•</span> من نحن
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">•</span> اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">اتصل بنا</h4>
            <ul className="space-y-3 text-base">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                <span className="px-2.5">info@example.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-primary " />
                <span className="px-2.5">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                <span className="px-2.5">شارع الأعمال 123، المدينة، المنطقة 12345</span>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="text-base font-semibold text-foreground mb-3 px-2.5">النشرة البريدية</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="بريدك الإلكتروني" 
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                />
                <button className="bg-primary text-primary-foreground p-2 rounded-r-lg hover:bg-primary/90 transition-colors">
                  <Send className="h-4 w-4 px-2.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm">
          <p>&copy; {currentYear} الموقع الاحترافي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}