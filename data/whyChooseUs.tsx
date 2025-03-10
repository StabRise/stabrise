import { FaFileInvoice, FaLock, FaClipboardList, FaCloud, FaFilePdf, FaCheckCircle } from 'react-icons/fa';

const whyChooseUs = [
  {
    title: "Expertise",
    description: "Our team comprises experienced professionals in compliance regulations, augmented by skilled Data Scientists and ML engineers. Leveraging advanced document processing techniques, we ensure precise and dependable results, backed by years of industry expertise.",
    icon: <FaFileInvoice size={24} className="text-secondary-300" />
  },
  {
    title: "Security",
    description: "We prioritize the utmost security and confidentiality of your data. Employing robust encryption methods and stringent data protection protocols, we safeguard sensitive information throughout the document processing. Rest assured, your data is in safe hands.",
    icon: <FaLock size={24} className="text-primary-300" />
  },
  {
    title: "Compliance",
    description: "Our document processing solutions strictly adhere to industry standards and regulations, including HIPAA, GDPR, and other pertinent privacy laws. With our comprehensive compliance measures, you can trust in full regulatory adherence and enjoy peace of mind.",
    icon: <FaClipboardList size={24} className="text-red-300" />
  },
  {
    title: "Scalability",
    description: "Our solution offers unparalleled scalability, capable of running seamlessly on a Spark cluster or as a REST API service. Whether deployed on your isolated infrastructure or on cloud platforms like AWS, Azure, or Databricks, our solution adapts to your evolving needs with ease.",
    icon: <FaCloud size={24} className="text-green-300" />
  },
  {
    title: "Handling Large Files",
    description: "We specialize in managing large files, including DICOM and PDF formats. Our solution effortlessly handles files up to 3GB in DICOM format and up to 10,000 pages in PDF format, ensuring efficient processing of extensive datasets.",
    icon: <FaFilePdf size={24} className="text-purple-300" />
  },
  {
    title: "Quality Control",
    description: "Utilizing human oversight and Generative AI, we ensure the quality of results for each document or page. Our rigorous quality control measures guarantee accurate and reliable outcomes, meeting the highest standards of excellence.",
    icon: <FaCheckCircle size={24} className="text-orange-300" />
  }
];

export default whyChooseUs;
