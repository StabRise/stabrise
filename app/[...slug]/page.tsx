import 'css/prism.css'
import 'katex/dist/katex.css'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'
import { getCardUrl } from '@/data/utils'

import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, allCoreContent, coreContent } from 'pliny/utils/contentlayer'
import { allProjects, Projects, allBlogs } from 'contentlayer/generated'
import ProjectLayout from '@/layouts/ProjectLayout'
import ProjectJsonLd from '@/components/jsonLd/ProjectJsonLd'
import WebPageJsonLd from '@/components/jsonLd/WebPageJsonLd'

const defaultLayout = 'ProjectLayout'
const layouts = {
  ProjectLayout,
}

export const generateStaticParams = async () => {
  return allProjects.map((p) => ({ slug: p.slug.split('/').map((name) => decodeURI(name)) }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata | undefined> {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  const project = allProjects.find((p) => p.slug === slug)
  if (!project) {
    return
  }

  let imageList = [getCardUrl(project.banner)]
  if (project.images) {
    imageList = typeof project.images === 'string' ? [project.images] : project.images
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      url: './',
      images: ogImages,
      authors: [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: imageList,
    },
  }
}

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  const project = allProjects.find((p) => p.slug === slug) as Projects
  if (!project) {
    notFound()
  }

  const Layout = layouts[project.layout || defaultLayout]

  // Recent projects posts
  const filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.project && post.project === project.slug))
  )
  const mainContent = coreContent(project)

  return (
    <>
      <WebPageJsonLd
        pageUrl={`/${project.slug}/`}
        title={`${project.title}`}
        description={project.description}
        keywords={project.keywords}
        image={getCardUrl(project.banner)}
      />
      <ProjectJsonLd project={project} />
      <Layout content={mainContent} recentPosts={filteredPosts}>
        <MDXLayoutRenderer code={project.body.code} components={components} />
      </Layout>
    </>
  )
}
