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
    { name: "الشركات", href: "/companies" },
    { name: "المدونة", href: "/blog" },
    { name: "الموسوعة", href: "/encyclopedia" },
    { name: "اتصل بنا", href: "/contact" },
  ]

  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center transition-transform hover:scale-105 duration-200">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-10 w-auto mx-3"
              />
              <span className="text-xl font-semibold text-foreground">قمر الخليج الذهبي</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              الرئيسية
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors font-medium">
              الخدمات
            </Link>
            <Link href="/companies" className="text-foreground hover:text-primary transition-colors font-medium">
              الشركات
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
              المدونة
            </Link>
            <Link href="/encyclopedia" className="text-foreground hover:text-primary transition-colors font-medium">
              الموسوعة
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              من نحن
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:bg-accent hover:text-accent-foreground"
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
                  className="block px-3 py-2 text-sm font-medium rounded-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
         
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
