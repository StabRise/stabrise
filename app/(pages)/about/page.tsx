import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from '../../seo'
import WebPageJsonLd from '@/components/jsonLd/WebPageJsonLd'

const title = 'About'

const description = `
    At StabRise, we’re reshaping how businesses manage and process their documents. We specialize in handling structured and unstructured data with a focus on security and compliance. Our flexible, scalable solutions help businesses meet the highest standards in document processing, including HIPAA, GDPR, and custom privacy requirements.
  `
const keywords = [
  'document processing',
  'data security',
  'HIPAA compliance',
  'GDPR compliance',
  'open source',
  'data de-identification',
  'AWS',
  'GCP',
  'document management',
  'structured data',
  'unstructured data',
  'document automation',
]

export const metadata = genPageMetadata({ title: title })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <WebPageJsonLd
        pageUrl="/about/"
        title={title}
        description={description}
        keywords={keywords}
      />
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
