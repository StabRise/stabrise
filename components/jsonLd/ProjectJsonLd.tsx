import React from 'react'
import type { Projects } from 'contentlayer/generated'

interface PostJsonLdProps {
  project: Projects
}

const ProjectJsonLd: React.FC<PostJsonLdProps> = ({ project }) => {
  const jsonLd = project.structuredData

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}

export default ProjectJsonLd
