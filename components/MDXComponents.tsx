import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  h1: ({ children }) => <h1 className="my-6 text-center">{children}</h1>,
  h2: ({ children }) => <h2 className="my-6 text-center">{children}</h2>,
  h3: ({ children }) => <h3 className="my-6 text-center">{children}</h3>,
}
