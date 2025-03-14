import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'

export default function NotFound() {
  return (
    <SectionContainer>
      <div className="flex min-h-screen flex-col items-center justify-center px-4 text-gray-900">
        <div className="pt-6 pb-8">
          <h1 className="text-5xl font-bold text-sky-600 md:text-6xl">404</h1>
        </div>
        <div className="max-w-lg text-center">
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
      </div>
    </SectionContainer>
  )
}
