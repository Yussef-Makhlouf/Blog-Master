"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "الرئيسية", href: "/" },
    { name: "الخدمات", href: "/services" },
    { name: "المدونة", href: "/blog" },
    { name: "الموسوعة", href: "/encyclopedia" },
    { name: "اتصل بنا", href: "/contact" },
  ]

  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105 duration-200">
              <span className="text-xl font-semibold">الموقع الاحترافي</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-muted-foreground hover:border-border hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-hover">
              تسجيل الدخول
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:bg-secondary hover:text-foreground"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="px-2 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 px-3">
                <Button className="w-full">تسجيل الدخول</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}