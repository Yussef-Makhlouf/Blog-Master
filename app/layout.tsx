import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_Arabic } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
})

export const metadata: Metadata = {
  title: "  قمر الخليج الذهبي | خدمات شاملة في المملكة العربية السعودية",
  description: "منصة شاملة لخدمات نقل العفش، النظافة، المكيفات، الأمن والسلامة، الكاميرات والشحن في جدة والرياض وجميع أنحاء المملكة.",
  generator: "v0.app",
  keywords: ["خدمات", "مدونة", "موسوعة", "احترافي", "موارد"],
  authors: [{ name: "مدونة خدمات الخليج" }],
  openGraph: {
    title: "مدونة خدمات الخليج | خدمات شاملة في المملكة العربية السعودية",
    description: "منصة شاملة لخدمات نقل العفش، النظافة، المكيفات، الأمن والسلامة، الكاميرات والشحن في جدة والرياض وجميع أنحاء المملكة.",
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "مدونة خدمات الخليج | خدمات شاملة في المملكة العربية السعودية",
    description: "منصة شاملة لخدمات نقل العفش، النظافة، المكيفات، الأمن والسلامة، الكاميرات والشحن في جدة والرياض وجميع أنحاء المملكة.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`font-arabic ${notoSansArabic.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
