//const siteUrl = 'https://stabrise.github.io'
const siteUrl = 'https://stabrise.com'

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'StabRise: Scalable AI-Powered Document Processing Solutions.',
  author: 'Mykola Melnik, Olga Druchek, Svitoslav Melnyk',
  headerTitle: 'StabRise',
  description:
    'Powered by AI, scaled with Apache Spark, and StabRise offering open-source products for scalable and secure processing. Team members with 15y+ of expertise.',
  longDescription:
    'StabRise is an innovative software company specializing in open-source, AI-powered solutions for document processing, scaled by Apache Spark. Our core projects, Spark-PDF and ScaleDP, efficiently handle a wide range of document types, including PDFs and image files, while ScaleDP leverages LLM (Large Language Models) to extract structured data from unstructured documents. Powered by Apache Spark, ScaleDP maintains scalability while utilizing advanced LLM techniques for high-performance data processing. These scalable, high-performance solutions enable businesses to automate and optimize their document processing workflows. StabRise provides secure, efficient tools that ensure compliance with GDPR, HIPAA, and other data protection regulations, empowering organizations to process sensitive information safely and effectively.',
  language: 'en-us',
  routes: [
    // { name: 'page', priority: 1, changeF: 'yearly' },
    { name: 'blog', priority: 0.8 },
    { name: 'projects', priority: 0.8 },
    { name: 'spark-pdf', priority: 0.7 },
    { name: 'scaledp', priority: 0.7 },
    { name: 'privacy', priority: 0.6 },
    { name: 'terms-of-use', priority: 0.6 },
    { name: 'about', priority: 0.7 },
  ],
  theme: 'light', // system, dark or light
  siteUrl: siteUrl,
  siteRepo: 'https://github.com/StabRise/stabrise',
  siteLogo: `${siteUrl}${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${siteUrl}${process.env.BASE_PATH || ''}/static/images/card.png`,
  // mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'info@stabrise.com',
  phone: '+48-790-844-156',
  github: 'https://github.com/StabRise',
  // x: 'https://twitter.com/x',
  // twitter: 'https://twitter.com/Twitter',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/company/stabrise/',
  // threads: 'https://www.threads.net',
  // instagram: 'https://www.instagram.com',
  // medium: 'https://medium.com',
  // bluesky: 'https://bsky.app/',
  locale: 'en-US',
  keywords: [
    'spark-pdf',
    'ScaleDP',
    'Document Processing',
    'Open Source',
    'PDF Data Processing',
    'Big Data',
    'Data Pipeline',
    'Distributed Processing',
    'Data Extraction',
    'AI-powered document processing',
    'Open-source document processing',
    'Data de-identification tools',
    'Apache Spark document processing',
    'AI document processing solutions',
    'Large Language Models (LLM) for data extraction',
    'Automated document workflows',
    'PDF processing AI tools',
    'Scalable data processing',
    'Structured data extraction from documents',
    'Apache Spark document processing',
    'Machine learning document processing',
    'Natural Language Processing (NLP)',
    'AI-driven data extraction',
    'LLM for unstructured data',
    'PDF to structured data conversion',
    'Data automation solutions',
    'GDPR compliant document processing',
    'HIPAA compliance tools',
    'Data protection solutions',
    'Secure data processing tools',
    'Scalable document solutions',
    'Document processing optimization',
    'Open-source PDF processing',
    'AI for document data extraction',
    'Advanced document processing with LLM',
    'High-performance document processing',
    'Secure AI document solutions',
    'Efficient document processing tools',
    'Secure, scalable data processing',
  ],
  // set to true if you want a navbar fixed to the top
  stickyNav: true,
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      // You may also need to overwrite the script if you're storing data in the US - ex:
      // src: 'https://us.umami.is/script.js'
      // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // If you are hosting your own Plausible.
    //   src: '', // e.g. https://plausible.my-domain.com/js/script.js
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
