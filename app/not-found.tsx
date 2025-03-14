import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import PageTitle from '@/components/PageTitle'

export default function NotFound() {
  return (
    <SectionContainer>
      <div className="flex h-full flex-col items-center justify-center px-4 pb-18 text-gray-900">
        <PageTitle>404</PageTitle>
        <p className="mb-4 text-lg leading-tight font-semibold break-words md:text-2xl">
          Oops! We couldn't find this page.
        </p>
        <p className="mb-8 text-base text-gray-600 md:text-lg">
          The page you’re looking for may have been moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-sky-500 px-6 py-3 text-base font-medium text-white shadow-md transition duration-200 hover:bg-sky-600 focus:ring-2 focus:ring-sky-400 focus:outline-none"
        >
          Back to Homepage
        </Link>
      </div>
    </SectionContainer>
  )
}
