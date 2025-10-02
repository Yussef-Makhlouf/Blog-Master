# تعزيزات بصرية للبانرات (Banner Visual Enhancements)

## نظرة عامة

تم تحديث مكون [Banner](file:///E:/Al-Fashne/Blog-Master/components/banner.tsx#L13-L13) ليشمل خيارات بصرية محسّنة تسمح بـ:
1. عرض الصور في البنرات
2. تخصيص ألوان الخلفيات بشكل متناسق
3. تحسين التباين والأناقة البصرية

## خيارات الخلفية الجديدة

### 1. الخلفيات المتدرجة (Gradient Backgrounds)
- `backgroundType: "gradient"`
- ألوان محددة مسبقًا: primary, secondary, accent, muted, blue, green, purple, orange
- تدرجات متناسقة تضمن قابلية القراءة

### 2. الخلفيات الصلبة (Solid Backgrounds)
- `backgroundType: "solid"`
- يمكن تحديد لون مخصص باستخدام `backgroundColor`

### 3. الخلفيات بالصورة (Image Backgrounds)
- `backgroundType: "image"`
- متوفرة فقط للبنرات بعرض كامل
- تتضمن طبقة تدرج للحفاظ على قابلية القراءة

## كيفية استخدام الخيارات البصرية

### مثال 1: بنر ترويجي بألوان زرقاء
```jsx
<Banner
  title="اكتشف أفضل الخدمات"
  description="تواصل مع أفضل الشركات في المملكة"
  image="/services-banner.jpg"
  cta={{ text: "تصفح الخدمات", href: "/services" }}
  variant="promotional"
  backgroundType="gradient"
  backgroundColor="blue"
  textColor="foreground"
/>
```

### مثال 2: بنر مدمج بألوان خضراء
```jsx
<Banner
  title="هل تبحث عن معلومات إضافية؟"
  description="تعرف على معلومات مفيدة في موسوعتنا"
  cta={{ text: "تصفح الموسوعة", href: "/encyclopedia" }}
  variant="compact"
  backgroundType="gradient"
  backgroundColor="green"
  textColor="foreground"
/>
```

### مثال 3: بنر بعرض كامل مع صورة
```jsx
<Banner
  title="عروض حصرية هذا الأسبوع"
  description="خصومات تصل إلى 25% على خدمات مختارة"
  image="/weekly-offer-banner.jpg"
  cta={{ text: "عرض العروض", href: "#offers" }}
  variant="full-width"
  backgroundType="image"
  textColor="white"
/>
```

## ألوان الخلفيات المحددة مسبقًا

| اسم اللون | الوصف | الاستخدام المقترح |
|-----------|--------|-------------------|
| `primary` | تدرج أزرق رئيسي | البنرات العامة والخدمات |
| `secondary` | تدرج رمادي ثانوي | البنرات التكميلية |
| `accent` | تدرج ملون بارز | البنرات المهمة |
| `muted` | تدرج رمادي خافت | البنرات الخلفية |
| `blue` | تدرج أزرق | خدمات النقل والأمان |
| `green` | تدرج أخضر | خدمات التنظيف والبيئة |
| `purple` | تدرج بنفسجي | خدمات الموسوعة والتكنولوجيا |
| `orange` | تدرج برتقالي | عروض وتخفيضات |

## أفضل الممارسات للتصميم البصري

### 1. التباين والقابلية للقراءة
- استخدم `textColor` المناسب لضمان وضوح النص
- تجنب مزج ألوان متشابهة جدًا
- استخدم طبقة تدرج عند وضع النص على صور

### 2. التناسق في التصميم
- استخدم نفس نظام الألوان عبر الموقع
- حافظ على تدرجات متناسقة في نفس القسم
- ربط ألوان البنر بمحتوى الصفحة

### 3. استخدام الصور
- استخدم صورًا عالية الجودة وذات صلة بالمحتوى
- تأكد من أن الصور لا تطغى على النص
- استخدم طبقة تدرج لتحسين قابلية القراءة

### 4. التدرجات اللونية
- استخدم تدرجات ثنائية اللون لمظهر أنيق
- تأكد من أن التدرج لا يُضعف وضوح النص
- استخدم ألوانًا مكملة ل Harmony بصري

## أمثلة عملية حسب نوع الخدمة

### خدمات النقل والعفش
```jsx
<Banner
  backgroundType="gradient"
  backgroundColor="blue"
  // ... باقي الخصائص
/>
```

### خدمات التنظيف
```jsx
<Banner
  backgroundType="gradient"
  backgroundColor="green"
  // ... باقي الخصائص
/>
```

### خدمات الأمان
```jsx
<Banner
  backgroundType="gradient"
  backgroundColor="purple"
  // ... باقي الخصائص
/>
```

### خدمات التكييف
```jsx
<Banner
  backgroundType="gradient"
  backgroundColor="orange"
  // ... باقي الخصائص
/>
```

## صيانة المحتوى البصري

### تحديث الألوان
لتحديث نظام ألوان البنرات:
1. عدل خريطة الألوان في مكون [Banner](file:///E:/Al-Fashne/Blog-Master/components/banner.tsx#L13-L13)
2. حدث القيم في `bgColorClasses`
3. تأكد من التباين مع ألوان النص

### إضافة ألوان جديدة
لإضافة لون جديد:
1. أضف مفتاحًا جديدًا إلى `bgColorClasses`
2. حدد التدرج اللوني المناسب
3. تأكد من التباين مع ألوان النص

## استكشاف الأخطاء وإصلاحها

### المشكلة: النص غير واضح على الخلفية
- حل: استخدم `textColor` المناسب
- حل: غيّر `backgroundColor` لتحسين التباين

### المشكلة: الصورة تطغى على النص
- حل: استخدم طبقة تدرج أكبر
- حل: غيّر `textColor` إلى أبيض أو أسود حسب الحاجة

### المشكلة: الألوان لا تتناسب مع موضوع الموقع
- حل: عدل قيم `bgColorClasses` لتتناسب مع لوحة ألوان الموقع
- حل: استخدم `backgroundColor` بقيم مخصصة