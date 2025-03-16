import React from 'react'
import siteMetadata from '@/data/siteMetadata' // Import siteMetadata

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'StabRise',
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
  description:
    'At StabRise, we’re passionate about creating open-source tools that transform the way businesses process documents. Our projects, from Spark-powered PDF processing to AI-driven data de-identification, offer flexible and secure solutions that scale with your needs. Designed with privacy regulations like HIPAA and GDPR in mind, our open-source libraries enable organizations to handle sensitive data with confidence - boosting efficiency, security, and scalability along the way.',
  //image: siteMetadata.socialBanner,
}

export const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteMetadata.headerTitle,
  description: siteMetadata.description,
  url: siteMetadata.siteUrl,
  image: siteMetadata.siteLogo,
  publisher: {
    '@type': 'Organization',
    name: 'StabRise',
  },
  keywords: [
    'Document Processing',
    'Open Source',
    'PDF Data Processing',
    'Big Data',
    'Data Pipeline',
    'Distributed Processing',
    'Data Extraction',
  ],
  author: {
    '@type': 'Organization',
    name: 'StabRise',
  },
  mainEntityOfPage: siteMetadata.siteUrl,
  // TODO: Maybe we can add applications here?
  // softwareApplication: {
  //
  // },
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
