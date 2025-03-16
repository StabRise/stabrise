import React from 'react'
import siteMetadata from '@/data/siteMetadata'
import { webSiteJsonLd } from './WebSiteJsonLd'

const generateWebPageJsonLd = (
  pageUrl: string,
  title: string | undefined,
  description: string | undefined,
  keywords: string[],
  image?: string // New optional image parameter
) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: `${siteMetadata.siteUrl}${pageUrl}`,
  name: `${title} | ${siteMetadata.headerTitle}`,
  description: description || siteMetadata.description, // Fallback to site description if description is not provided
  publisher: {
    '@type': 'Organization',
    name: 'StabRise',
  },
  mainEntityOfPage: pageUrl,
  image: image || siteMetadata.socialBanner, // Use provided image or fallback to default
  keywords: keywords.length > 0 ? keywords : webSiteJsonLd.keywords, // Use default keywords if not provided
})

interface WebPageJsonLdProps {
  pageUrl: string
  title?: string
  description?: string
  extraJsonLd?: object
  keywords?: string[]
  image?: string
}

const WebPageJsonLd: React.FC<WebPageJsonLdProps> = ({
  pageUrl,
  title,
  description,
  extraJsonLd,
  keywords = [],
  image, // Accept image as a prop
}) => {
  const jsonLd = generateWebPageJsonLd(pageUrl, title, description, keywords, image)

  const combinedJsonLd = extraJsonLd ? { ...jsonLd, ...extraJsonLd } : jsonLd

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(combinedJsonLd),
      }}
    />
  )
}

export default WebPageJsonLd
