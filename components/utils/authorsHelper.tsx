import { Authors, allAuthors } from 'contentlayer/generated'

// const getAuthorData = (slug: string): Author | null => {
//   const author = allAuthors.find((author) => author.slug === slug);
//   return author || null;
// };

export const getAuthorData = (
  slug: string
): { name: string; avatar: string; occupation: string } | null => {
  const author = allAuthors.find((author) => author.slug === slug)
  if (author) {
    return {
      name: author.name,
      avatar: author.avatar,
      occupation: author.occupation,
      linkedin: author.linkedin,
      github: author.github,
    }
  }
  return null
}

// Function to fetch multiple authors for a post, given an array of author slugs
export const getAuthorsByPost = (authorSlugs: string[]): Author[] => {
  return authorSlugs
    .map((slug) => getAuthorData(slug)) // Fetch each author by slug
    .filter(Boolean) as Authors[] // Remove any null values in case an author is not found
}
