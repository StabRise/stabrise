import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}/`,
      lastModified: post.lastmod || post.date,
      changeFrequency: 'weekly',
      priority: 0.7,
    }))

  const staticRoutes = siteMetadata.routes.map((route) => ({
    url: `${siteUrl}/${route.name}/`,
    lastModified: new Date(),
    changeFrequency: route.changeF || 'weekly',
    priority: route.priority,
  }))

  return [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...staticRoutes,
    ...blogRoutes,
  ]
}
