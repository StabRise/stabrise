'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'
import { FaCalendar } from 'react-icons/fa'
import AuthorCard from '@/components/AuthorCard'
import { getAuthorsByPost } from '@/components/utils/authorsHelper'
import H2 from '@/components/H2'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const segments = pathname.split('/')
  const lastSegment = segments[segments.length - 1]
  const basePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+$/, '') // Remove any trailing /page
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <SectionContainer>
      <div className="">
        <div className="flex sm:space-x-0 md:space-x-3">
          {/* Left Panel (No rounded corners) */}
          <div className="hidden flex-wrap overflow-auto border-r border-gray-200 pt-5 pl-1 sm:flex sm:w-1/4 md:pl-6 xl:pl-12">
            <div className="py-4">
              <div className="text-center">
                {pathname.startsWith('/blog') ? (
                  <h4 className="text-primary-500 mb-4 font-semibold">All Posts</h4>
                ) : (
                  <Link
                    href={`/blog`}
                    className="hover:text-primary-500 font-semibold text-gray-700"
                  >
                    All Posts
                  </Link>
                )}
              </div>

              <ul className="mt-4 space-y-3">
                {sortedTags.map((t) => {
                  const isSelected = decodeURI(pathname.split('/tags/')[1]) === slug(t)
                  return (
                    <li key={t}>
                      <Link
                        href={`/tags/${slug(t)}`}
                        className={`rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${isSelected ? 'bg-primary-500 text-white' : 'hover:bg-primary-100 dark:hover:bg-primary-500 hover:text-primary-500 text-gray-500 dark:text-gray-300'}`}
                        aria-label={`View posts tagged ${t}`}
                      >
                        {`${t} (${tagCounts[t]})`}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* Right Content Panel */}
          <div className="mt-12 flex-1">
            <ul>
              {displayPosts.map((post) => {
                const { path, date, title, summary, tags, authors } = post
                const authorDetails = getAuthorsByPost(post.authors || ['default'])
                return (
                  <li key={path} className="border-b border-gray-200 pb-8">
                    <article className="flex flex-col space-y-4 px-8 md:flex-row md:space-y-0 md:space-x-6">
                      {/* Content Section */}
                      <div className="mb-3 flex-1">
                        <H2>
                          <Link href={`/${path}`} className="hover:text-primary-500">
                            {title}
                          </Link>
                        </H2>

                        {/* Tags */}
                        <div className="text-primary-500 mt-2 flex flex-wrap space-x-2 text-sm">
                          {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                        </div>

                        {/* Summary/Description */}
                        <div className="mt-3 text-justify text-gray-500 dark:text-gray-400">
                          <p>{summary}</p>
                        </div>

                        <div className="mt-4 flex flex-col justify-between space-y-4 text-xs sm:mt-6 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
                          {/* Author Info */}
                          <div className="flex space-x-4 sm:items-center">
                            {authorDetails.map((author) => (
                              <AuthorCard
                                key={author.name}
                                name={author.name}
                                avatar={author.avatar}
                                occupation={author.occupation}
                                profileLink={author.linkedin || author.github}
                              />
                            ))}
                          </div>
                          <div className="flex space-x-1 text-xs text-gray-500 sm:items-center">
                            <span className="material-icons">
                              <FaCalendar />
                            </span>
                            <span>
                              <time dateTime={date} suppressHydrationWarning>
                                {formatDate(date, siteMetadata.locale)}
                              </time>
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
            {pagination && pagination.totalPages > 1 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
