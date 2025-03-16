import siteMetadata from '@/data/siteMetadata'

export const getCardUrl = (relativePath?: string): string => {
  if (relativePath) {
    const baseUrl = siteMetadata.siteUrl // Get the base URL from the site metadata
    const basePath = process.env.BASE_PATH || '' // Optional base path for static resources
    return `${baseUrl}${basePath}${relativePath}` // Return the full URL with the relative path
  } else {
    return siteMetadata.socialBanner // Return the default social banner if no relative path is provided
  }
}
