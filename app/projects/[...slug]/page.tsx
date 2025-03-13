import 'css/prism.css'
import 'katex/dist/katex.css'

import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { allProjects, Projects } from "contentlayer/generated";
import type { Project } from 'contentlayer/generated'

import ProjectLayout from '@/layouts/ProjectLayout'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'
import AuthorLayout from "@/layouts/AuthorLayout";
import { genPageMetadata } from "../../seo";
import { sortPosts, allCoreContent } from "pliny/utils/contentlayer";
import { allBlogs } from "contentlayer/generated";
import SectionContainer from "@/components/SectionContainer";
import { slug } from "github-slugger";

const defaultLayout = 'ProjectLayout'
const layouts = {
  ProjectLayout
}

// TODO:
export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata | undefined> {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  const project = allProjects.find((p) => p.slug === slug)
  if (!project) {
    return
  }

  let imageList = [siteMetadata.socialBanner]
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
      authors: project.length > 0 ? project : [siteMetadata.author],
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
  const Layout = layouts[project.layout || defaultLayout]

  // Recent projects posts
  const filteredPosts = allCoreContent(
    sortPosts(
      allBlogs.filter((post) => post.project && post.project === project.slug)
    )
  );

  project.recentPosts = filteredPosts;

  const mainContent = coreContent(project)




  return (
    <>
      <Layout content={mainContent}>
        <MDXLayoutRenderer code={project.body.code} components={components} />
      </Layout>
    </>
  )
}
