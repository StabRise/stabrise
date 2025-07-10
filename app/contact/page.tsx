import ContactForm from './ContactForm'
import WebPageJsonLd from '@/components/jsonLd/WebPageJsonLd'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'

const title = 'Contact Us'
const keywords = [
  'contact',
  'support',
  'reach out',
  'get in touch',
  'customer service',
  'technical support',
  'business inquiries',
  'feedback',
  'communication',
]

export const metadata = {
  title,
  description:
    'Get in touch to learn how our scalable, AI-powered document processing solutions help you stay compliant while improving efficiency.',
  keywords,
}

export default async function ContactPage() {
  return (
    <>
      <WebPageJsonLd
        pageUrl="/contact/"
        title={title}
        description="Get in touch to learn how our scalable, AI-powered document processing solutions help you stay compliant while improving efficiency."
        keywords={keywords}
      />
      <SectionContainer>
        <PageTitle>Contact Us</PageTitle>
        <div className="mx-auto max-w-xl p-6">
          <ContactForm />
        </div>
      </SectionContainer>
    </>
  )
}
