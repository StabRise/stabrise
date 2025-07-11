'use client'

import Card from '@/components/Card'
import Image from '@/components/Image'
import SimpleCard from '@/components/SimpleCard'
import SectionContainer from '@/components/SectionContainer'
import WebPageJsonLd from '@/components/jsonLd/WebPageJsonLd'
import PageTitle from '@/components/PageTitle'
import H2 from '@/components/H2'

import projectsData from '@/data/projectsData'
import useCases from '@/data/useCases'
import whyChooseUs from '@/data/whyChooseUs'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export default async function Page() {
  return (
    <>
      <WebPageJsonLd
        pageUrl="/"
        title="StabRise: Document Processing & Data De-Identification Solutions"
      />
      <SectionContainer>
        <div className="bg-gradient-to-tr dark:from-gray-950 dark:to-gray-800 dark:pb-10">
          <PageTitle>Scalable AI-Powered Document Processing Solutions</PageTitle>
          <p className="mx-auto max-w-5xl px-6 pb-6 text-center text-lg text-gray-600 dark:text-gray-200">
            Effortlessly manage both structured and unstructured data with solutions that grow with
            your business. Stay compliant with <strong>HIPAA</strong>, <strong>GDPR</strong>, and
            other regulations while improving efficiency. Powered by <strong>Spark</strong> and{' '}
            <strong>AI</strong>, we make it easy to scale your document processing securely and
            smoothly, so you can focus on what matters most.
          </p>
          <Image
            src="/static/images/landing/banner.svg"
            alt="Banner image"
            width={1200}
            height={600}
            className="hidden w-full sm:block"
          />
        </div>
        <hr className="border-gray-200 dark:border-gray-600" />
        <section
          id="projects"
          className="bg-gray-50 px-6 py-8 text-center sm:py-12 dark:bg-gray-800"
        >
          <H2>Our Projects</H2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                features={d.features}
              />
            ))}
          </div>
        </section>

        <hr className="border-gray-300 dark:border-gray-700" />

        <section className="mx-auto max-w-screen-xl px-6 pt-6 sm:px-12 sm:pt-12">
          <H2 className="dark:text-gray-100">Use Cases</H2>
          <div className="usage-cases-list mt-6 mb-12">
            {useCases.map((item, index) => (
              <div key={index} className="usage-case-item mb-8">
                <div className="usage-case-header mb-2.5 flex items-center">
                  <div className="usage-case-icon text-primary mr-2.5">{item.icon}</div>
                  <p className="text-xl text-gray-800 dark:text-gray-200">{item.title}</p>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-300 dark:border-gray-700" />

        <section className="from-primary-100 to-primary-200 mx-auto max-w-screen-xl bg-gradient-to-tr px-6 pt-6 pb-16 sm:pt-12 dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-800">
          <H2 className="dark:text-gray-100">Why Choose StabRise?</H2>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((card, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex h-full flex-col"
              >
                <SimpleCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </SectionContainer>
    </>
  )
}
