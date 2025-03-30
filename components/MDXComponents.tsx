import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import PageTitle from '@/components/PageTitle'
import H2 from '@/components/H2'
import H3 from '@/components/H3'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  // h1: ({ children }) => <PageTitle>{children}</PageTitle>,
  // h2: ({ children }) => <H2>{children}</H2>,
  // h3: ({ children }) => <H3>{children}</H3>,
  li: ({ children }) => <li className="mb-3">{children}</li>,
}

export const componentsPages: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  h1: ({ children }) => <PageTitle>{children}</PageTitle>,
  h2: ({ children }) => <H2>{children}</H2>,
  h3: ({ children }) => <H3>{children}</H3>,
  p: ({ children }) => <p className="mb-3">{children}</p>,
  li: ({ children }) => <li className="mb-3">{children}</li>,
}
