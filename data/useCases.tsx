import {
  FaFileInvoice,
  FaStethoscope,
  FaUserSecret,
  FaShareAlt,
  FaRegFileAlt,
  FaCogs,
} from 'react-icons/fa'

const usageCases = [
  {
    title: 'Invoice processing',
    description:
      'Automate and streamline invoice data extraction to improve accuracy and speed in financial processing.',
    icon: FaFileInvoice,
  },
  {
    title: 'Clinical trials and medical records',
    description:
      'Extract critical data from clinical trials and medical records to enhance research and healthcare workflows.',
    icon: FaStethoscope,
  },
  {
    title: 'Anonymization for data science',
    description:
      'Ensure data privacy by anonymizing sensitive data for use in data science projects and machine learning models.',
    icon: FaUserSecret,
  },
  {
    title: 'Data sharing',
    description:
      'Safely share data while maintaining privacy through de-identification and anonymization techniques.',
    icon: FaShareAlt,
  },
  {
    title: 'RAG for PDF documents',
    description:
      'Build Retrieval-Augmented Generation (RAG) systems for processing large volumes of PDF documents effectively.',
    icon: FaRegFileAlt,
  },
  {
    title: 'Synthetic PII generation',
    description:
      'Generate synthetic Personally Identifiable Information (PII) to replace removed or anonymized data.',
    icon: FaCogs,
  },
]

export default usageCases
