import Head from "next/head"

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  keywords?: string[]
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  keywords = [],
  author,
  publishedTime,
  modifiedTime,
}: SEOProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
  const fullTitle = `${title} | Professional Website`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      {author && <meta name="author" content={author} />}

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={`${siteUrl}${canonical || ""}`} />
      <meta property="og:site_name" content="قمر الخليج الذهبي" />

      {/* Article specific */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Arabic" />
    </Head>
  )
}
