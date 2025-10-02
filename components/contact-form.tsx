"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">تم إرسال رسالتك بنجاح!</h3>
          <p className="text-muted-foreground mb-6">شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.</p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            إرسال رسالة أخرى
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">الاسم الأول *</Label>
              <Input id="firstName" name="firstName" required placeholder="أدخل اسمك الأول" className="text-right" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">اسم العائلة *</Label>
              <Input id="lastName" name="lastName" required placeholder="أدخل اسم العائلة" className="text-right" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">البريد الإلكتروني *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="أدخل بريدك الإلكتروني"
              className="text-right"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">رقم الهاتف</Label>
            <Input id="phone" name="phone" type="tel" placeholder="أدخل رقم هاتفك" className="text-right" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">اسم الشركة</Label>
            <Input id="company" name="company" placeholder="أدخل اسم شركتك" className="text-right" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">الخدمة المطلوبة</Label>
            <select
              id="service"
              className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              required
            >
              <option value="">اختر الخدمة</option>
              <option value="furniture-moving">خدمات نقل العفش</option>
              <option value="cleaning-services">خدمات النظافة</option>
              <option value="security-systems">الكاميرات وأنظمة الأمان</option>
              <option value="ac-services">المكيفات: تركيب، صيانة، وتوريد</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">الرسالة *</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="أخبرنا عن مشروعك أو استفسارك..."
              rows={5}
              className="text-right"
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
            {isLoading ? (
              "جاري الإرسال..."
            ) : (
              <>
                إرسال الرسالة
                <Send className="mr-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
