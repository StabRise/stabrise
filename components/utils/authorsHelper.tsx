import { Authors, allAuthors } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import { coreContent, CoreContent } from 'pliny/utils/contentlayer'

// const getAuthorData = (slug: string): Author | null => {
//   const author = allAuthors.find((author) => author.slug === slug);
//   return author || null;
// };

export const getAuthorData = (
  slug: string
): {
  name: string
  avatar: string
  occupation: string
  linkedin?: string
  github?: string
} | null => {
  const author = allAuthors.find((author) => author.slug === slug)
  if (author) {
    return {
      name: author.name || siteMetadata.author,
      avatar: author.avatar || siteMetadata.logo,
      occupation: siteMetadata.title,
      linkedin: author.linkedin,
      github: author.github,
    }
  }
  return null
}

// Function to fetch multiple authors for a post, given an array of author slugs
export const getAuthorsByPost = (authorList: string[]): CoreContent<Authors>[] => {
  const authorDetails = authorList
    .map((authorSlug) => {
      const authorResults = allAuthors.find((author) => author.slug === authorSlug)

      if (authorResults) {
        return coreContent(authorResults as Authors)
      }
      return null // In case there's no match
    })
    .filter((author) => author !== null) // Filter out any null values

  return authorDetails || []
}
