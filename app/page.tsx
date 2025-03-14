import Card from '@/components/Card'
import Image from '@/components/Image'
import SimpleCard from '@/components/SimpleCard'
import SectionContainer from '@/components/SectionContainer'

import projectsData from '@/data/projectsData'
import useCases from '@/data/useCases'
import whyChooseUs from '@/data/whyChooseUs'
import PageTitle from '@/components/PageTitle'
import H2 from '@/components/H2'

export default async function Page() {
  return (
    <SectionContainer>
      <section>
        <PageTitle>Scalable Document Processing Solutions</PageTitle>
        <p className="mx-auto mt-6 max-w-5xl px-6 pb-6 text-center text-lg text-gray-600">
          Effortlessly manage both structured and unstructured data with solutions that grow with
          your business. Stay compliant with HIPAA, GDPR, and other regulations while improving
          efficiency. Powered by Spark, we help you scale your document processing smoothly and
          securely.
        </p>
        <div>
          <Image
            src="/static/images/landing/banner.svg"
            alt="Banner image"
            width={1200}
            height={600}
            className="hidden w-full sm:block"
          />
        </div>
      </section>
      <hr />
      <section id="projects" className="bg-gray-50 px-6 pb-6 text-center">
        <H2>Our Projects</H2>
        <div className="grid gap-6 md:grid-cols-2">
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
      <hr className="" />
      <section className="py-6">
        <div className="mx-auto max-w-screen-xl px-6">
          <H2>Use Cases</H2>
          <div className="usage-cases-list">
            {useCases.map((item, index) => (
              <div key={index} className="usage-case-item mb-5">
                <div className="usage-case-header mb-2.5 flex items-center">
                  <div className="usage-case-icon text-primary mr-2.5">{item.icon}</div>
                  <p className="text-xl text-gray-800">{item.title}</p>
                </div>
                <p className="text-base text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr />
      <section className="bg-primary-100 pb-16">
        <div className="mx-auto max-w-screen-xl px-6">
          <H2>Why Choose StabRise?</H2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((card, index) => (
              <SimpleCard
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon} // Pass the icon prop to the Card component
              />
            ))}
          </div>
        </div>
      </section>
      <hr className="mb-6" />
    </SectionContainer>
  )
}
