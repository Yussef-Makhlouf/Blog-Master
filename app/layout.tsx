import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import localFont from "next/font/local"

const lamaSans = localFont({
  src: [
    {
      path: "./fonts/LamaSans-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/LamaSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/LamaSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/LamaSans-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-lama-sans",
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
      <body className={`${lamaSans.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}