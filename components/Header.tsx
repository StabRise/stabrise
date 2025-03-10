import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass =
    'flex items-center w-full bg-primary-100 justify-between px-5 mb-3 border-b-4 border-gray-300 shadow-lg'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between mr-6">
          <div className="">
            <Logo className="h-12 w-32" />
          </div>
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6 w-full justify-between">
        <div className="flex items-center space-x-4 flex-grow">
          <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
          </div>
        </div>

        {/* Schedule Demo Button */}
        <div className="flex items-center">
          <button className="bg-primary-500 text-white px-6 py-2 hover:bg-primary-600 mb-3 mr-4">
            Schedule Demo
          </button>
        </div>
      </div>
      <MobileNav />
    </header>
  )
}

export default Header
