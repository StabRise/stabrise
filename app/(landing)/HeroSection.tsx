'use client'

import { motion, Variants } from 'framer-motion'
import Image from '@/components/Image'
import PageTitle from '@/components/PageTitle'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 20,
    },
  },
}

export default function HeroSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className="bg-gradient-to-tr dark:from-gray-950 dark:to-gray-800 dark:pb-10"
    >
      <motion.div variants={fadeInUp}>
        <PageTitle>Scalable AI-Powered Document Processing Solutions</PageTitle>
      </motion.div>

      <motion.p
        variants={fadeInUp}
        className="mx-auto max-w-5xl px-6 pb-6 text-center text-lg text-gray-600 dark:text-gray-200"
      >
        Effortlessly manage both structured and unstructured data with solutions that grow with your
        business. Stay compliant with <strong>HIPAA</strong>, <strong>GDPR</strong>, and other
        regulations while improving efficiency. Powered by <strong>Spark</strong> and{' '}
        <strong>AI</strong>, we make it easy to scale your document processing securely and
        smoothly, so you can focus on what matters most.
      </motion.p>

      <motion.div variants={fadeInUp}>
        <Image
          src="/static/images/landing/banner.svg"
          alt="AI Document Processing Illustration"
          width={1200}
          height={600}
          className="hidden w-full sm:block"
          priority
        />
      </motion.div>
    </motion.section>
  )
}
