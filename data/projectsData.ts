interface Project {
  title: string;
  description: string;
  href?: string;
  imgSrc?: string;
}

// TODO: a hero image (16 x 9)
const projectsData: Project[] = [
  {
    title: "PDF Datasource",
    description: `A powerful, open-source data source for processing and handling PDF files in Apache Spark. Designed to efficiently manage large PDF files with minimal memory usage and scalable performance.`,
    imgSrc: '/static/images/projects/sparkpdf.webp',
    img2Src: '/static/images/projects/spark-pdf800x600.png',
    href: "/projects/spark-pdf/",
    features: ["Open-source", "Supports large files", "Optimized for performance"]
  },
  {
    title: "Scale DP",
    description: `An Open-Source Library for Processing Documents using AI/ML in Apache Spark.`,
    imgSrc: '/static/images/projects/scaledp.webp',
    img2Src: '/static/images/projects/scale-dp-800x600.png',
    href: "/projects/scale-dp/",
    features: ["Open-source", "Highly scalable"]
  },
  {
    title: "De-identify",
    description: `
    Our Data De-Identification Tools are designed to anonymize sensitive data with over 98% accuracy, ensuring that both structured and unstructured data remain secure. Built on the powerful Apache Spark framework, these tools are scalable and fully automated, making it easy to comply with regulations such as HIPAA, GDPR, and more.
    `,
    imgSrc: '/static/images/projects/deidentify.webp',
    href: "https://deidentify.online/",
    features: ["Data De‑identification Tools\n" +
    "Scalable",
      "Structured and unstructured data support",
      "HIPAA, GDPR compliance"]
  },
  {
    title: "PDF Redaction",
    description: "At PDF Redaction, we help you protect sensitive information with our fast, AI-powered, easy-to-use, and 100% free online PDF redaction tool. Whether you're redacting names, dates, addresses, or confidential data, our AI ensures your documents stay secure and compliant with privacy regulations like GDPR, HIPAA, and CCPA.",
    imgSrc: '/static/images/projects/pdf-redaction.webp',
    href: "https://pdf-redaction.com/",
    features: ["AI Powered", "Free Web-Based Tool", "API", "Scalable"]
  }
];

export default projectsData;
