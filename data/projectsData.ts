interface Project {
  title: string
  description: string
  href: string
  imgSrc?: string
  img2Src?: string
  features?: string[]
  // Used on the landing page to group projects
  category?: 'open-source' | 'web-tool'
}

const projectsData: Project[] = [
  {
    title: 'Spark PDF',
    description: `A powerful, open-source data source for processing and handling PDF files in Apache Spark. Designed to efficiently manage large PDF files with minimal memory usage and scalable performance.`,
    imgSrc: '/static/images/projects/sparkpdf.webp',
    img2Src: '/static/images/projects/spark-pdf-800x600.png',
    href: '/spark-pdf/',
    features: ['Open-source', 'Supports large files', 'Optimized for performance'],
    category: 'open-source',
  },
  {
    title: 'ScaleDP',
    description: `An Open-Source Library for Processing Documents using AI/ML in Apache Spark.`,
    imgSrc: '/static/images/projects/scaledp.webp',
    img2Src: '/static/images/projects/scale-dp-800x600.png',
    href: '/scaledp/',
    features: ['Open-source', 'Highly scalable'],
    category: 'open-source',
  },
  {
    title: 'PDF Redaction',
    description:
      "At PDF Redaction, we help you protect sensitive information with our fast, AI-powered, easy-to-use, and 100% free online PDF redaction tool. Whether you're redacting names, dates, addresses, or confidential data, our AI ensures your documents stay secure and compliant with privacy regulations like GDPR, HIPAA, and CCPA.",
    imgSrc: '/static/images/projects/pdf-redaction.webp',
    img2Src: '/static/images/projects/pdf-redaction-800x600.png',
    href: 'https://pdf-redaction.com/',
    features: ['AI Powered', 'Free Web-Based Tool', 'API', 'Scalable'],
    category: 'web-tool',
  },
]

export default projectsData
