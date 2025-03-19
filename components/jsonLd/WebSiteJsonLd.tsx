import React from 'react'
import siteMetadata from '@/data/siteMetadata' // Import siteMetadata

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteMetadata.headerTitle,
  url: siteMetadata.siteUrl,
  logo: siteMetadata.siteLogo,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: siteMetadata.phone,
    areaServed: 'Worldwide',
    availableLanguage: 'English, Polish, Ukrainian, Russian',
  },
  sameAs: [
    siteMetadata.github,
    siteMetadata.linkedin,
    // Add other social links here if needed
  ],
  email: siteMetadata.email,
  // 'address': {
  //   '@type': 'PostalAddress',
  //   'addressLocality': 'Global', // Replace with your real address if needed
  //   'addressCountry': 'Worldwide', // Replace with your real country
  // },
  description: siteMetadata.longDescription,
  //image: siteMetadata.socialBanner,
}

export const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteMetadata.title,
  description: siteMetadata.longDescription,
  url: siteMetadata.siteUrl,
  image: siteMetadata.siteLogo,
  publisher: {
    '@type': 'Organization',
    name: siteMetadata.headerTitle,
  },
  keywords: siteMetadata.keywords,
  author: {
    '@type': 'Organization',
    name: siteMetadata.headerTitle,
  },
  mainEntityOfPage: siteMetadata.siteUrl,
}

const combinedJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [organizationJsonLd, webSiteJsonLd],
}

const WebSiteJsonLd: React.FC = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(combinedJsonLd),
      }}
    />
  )
}

export default WebSiteJsonLd
