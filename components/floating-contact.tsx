"use client"

import * as React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, X, Headphones } from "lucide-react"

interface FloatingContactProps {
  whatsappNumber?: string
  phoneNumber?: string
  className?: string
}

const FloatingContact = React.forwardRef<HTMLDivElement, FloatingContactProps>(
  ({ 
    whatsappNumber = "+966592425757",
    phoneNumber = "+966592425757",
    className,
    ...props 
  }, ref) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleWhatsApp = () => {
      window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`, '_blank')
    }

    const handleCall = () => {
      window.open(`tel:${phoneNumber}`, '_self')
    }

    return (
      <div
        ref={ref}
        className={cn(
          "fixed bottom-6 left-6 z-50 flex flex-col items-center space-y-3",
          className
        )}
        {...props}
      >
        {/* Contact Options */}
        <div className={cn(
          "flex flex-col space-y-3 transition-all duration-300 transform",
          isExpanded 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        )}>
          {/* WhatsApp Button */}
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="تواصل عبر واتساب"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>

          {/* Phone Button */}
          <Button
            onClick={handleCall}
            size="lg"
            variant="outline"
            className="w-14 h-14 rounded-full bg-white hover:bg-gray-50 border-2 border-primary text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="اتصل بنا"
          >
            <Phone className="h-6 w-6" />
          </Button>
        </div>

        {/* Main Toggle Button */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          size="lg"
          className={cn(
            "w-16 h-16 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110",
            isExpanded && "rotate-45"
          )}
          aria-label={isExpanded ? "إغلاق خيارات التواصل" : "فتح خيارات التواصل"}
        >
          {isExpanded ? (
            <X className="h-6 w-6" />
          ) : (
            <Headphones className="h-6 w-6" />
          )}
        </Button>

        {/* Contact Label */}
        {!isExpanded && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            تواصل معنا
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        )}
      </div>
    )
  }
)

FloatingContact.displayName = "FloatingContact"

export { FloatingContact, type FloatingContactProps }
