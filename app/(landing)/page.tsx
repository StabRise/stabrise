import WebPageJsonLd from '@/components/jsonLd/WebPageJsonLd'
import HeroSection from './HeroSection'
import ProjectsSection from './ProjectsSection'
import UseCasesSection from './UseCasesSection'
import WhyChooseUsSection from './WhyChooseUsSection'
import ContactSection from './ContactSection'

export default function HomePage() {
  return (
    <>
      <WebPageJsonLd
        pageUrl="/"
        title="StabRise: Document Processing & Data De-Identification Solutions"
      />
      <HeroSection />
      <ProjectsSection />
      <UseCasesSection />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  )
}
