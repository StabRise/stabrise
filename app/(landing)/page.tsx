'use client'

import WebPageJsonLd from '@/components/jsonLd/WebPageJsonLd'
import SectionContainer from '@/components/SectionContainer'
import Divider from '@/components/Divider'
import HeroSection from './HeroSection'
import ProjectsSection from './ProjectsSection'
import UseCasesSection from './UseCasesSection'
import WhyChooseUsSection from './WhyChooseUsSection'

export default function HomePage() {
  return (
    <>
      <WebPageJsonLd
        pageUrl="/"
        title="StabRise: Document Processing & Data De-Identification Solutions"
      />
      <SectionContainer>
        <HeroSection />
        <Divider />

        <ProjectsSection />
        <Divider />

        <UseCasesSection />
        <Divider />

        <WhyChooseUsSection />
      </SectionContainer>
    </>
  )
}
