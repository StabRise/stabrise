import { FaFileInvoice, FaStethoscope, FaShieldAlt, FaRegFileAlt, FaCogs } from 'react-icons/fa'; // Example icons from Font Awesome

const usageCases = [
  {
    title: "Invoice Processing",
    description: "Automate and streamline invoice data extraction to improve accuracy and speed in financial processing.",
    icon: <FaFileInvoice size={24} className="text-secondary-300" />
  },
  {
    title: "Extract Data from Clinical Trials / Medical Records",
    description: "Extract critical data from clinical trials and medical records to enhance research and healthcare workflows.",
    icon: <FaStethoscope size={24} className="text-primary-300" />
  },
  {
    title: "Data Anonymization for Data Science",
    description: "Ensure data privacy by anonymizing sensitive data for use in data science projects and machine learning models.",
    icon: <FaShieldAlt size={24} className="text-grey-300" />
  },
  {
    title: "Data Sharing",
    description: "Safely share data while maintaining privacy through de-identification and anonymization techniques.",
    icon: <FaShieldAlt size={24} className="text-orange-300" />
  },
  {
    title: "RAG for PDF Documents",
    description: "Build Retrieval-Augmented Generation (RAG) systems for processing large volumes of PDF documents effectively.",
    icon: <FaRegFileAlt size={24} className="text-primary-300" />
  },
  {
    title: "Synthetic PII Generation",
    description: "Generate synthetic Personally Identifiable Information (PII) to replace removed or anonymized data.",
    icon: <FaCogs size={24} className="text-red-300" />
  }
];

export default usageCases;
