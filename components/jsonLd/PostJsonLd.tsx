import React from 'react'
import type { Authors, Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'

interface PostJsonLdProps {
  post: Blog
  authorDetails: CoreContent<Authors>[]
}

const PostJsonLd: React.FC<PostJsonLdProps> = ({ post, authorDetails }) => {
  const jsonLd = post.structuredData
  jsonLd['author'] = authorDetails.map((author) => author.structuredData)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}

export default PostJsonLd
