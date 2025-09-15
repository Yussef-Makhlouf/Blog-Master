import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <PageHeader title="اتصل بنا" description="نحن هنا لمساعدتك. تواصل معنا وسنرد عليك في أقرب وقت ممكن" />

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">معلومات الاتصال</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    نحن متاحون لمساعدتك في أي استفسار أو مشروع. لا تتردد في التواصل معنا عبر أي من الطرق التالية.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-reverse space-x-4">
                        <div className="flex-shrink-0">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">البريد الإلكتروني</h3>
                          <p className="text-muted-foreground">info@example.com</p>
                          <p className="text-muted-foreground">support@example.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-reverse space-x-4">
                        <div className="flex-shrink-0">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">الهاتف</h3>
                          <p className="text-muted-foreground">+966 11 123 4567</p>
                          <p className="text-muted-foreground">+966 50 123 4567</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-reverse space-x-4">
                        <div className="flex-shrink-0">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">العنوان</h3>
                          <p className="text-muted-foreground">شارع الملك فهد، حي العليا</p>
                          <p className="text-muted-foreground">الرياض 12345، المملكة العربية السعودية</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-reverse space-x-4">
                        <div className="flex-shrink-0">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">ساعات العمل</h3>
                          <p className="text-muted-foreground">الأحد - الخميس: 9:00 ص - 6:00 م</p>
                          <p className="text-muted-foreground">الجمعة - السبت: مغلق</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">أرسل لنا رسالة</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
