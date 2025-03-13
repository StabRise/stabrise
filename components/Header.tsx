import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'

const Header = () => {
const headerClass = siteMetadata.stickyNav
  ? 'flex items-center w-full bg-primary-100 justify-between py-2 sticky top-0 z-50 shadow-md'
  : 'flex items-center w-full bg-primary-100 justify-between py-2 shadow-md'

  return (
    <header className={headerClass}>
      {/* Logo and Header Title */}
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center">
          <Logo className="mx-3 h-8 w-auto" />
          {typeof siteMetadata.headerTitle === 'string' ? (
            <h1 className="hidden  text-gray-700 mt-1 font-semibold">{siteMetadata.headerTitle}</h1>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>

      {/* Right-side items: Navigation, Search, and Button */}
      <div className="flex items-center space-x-4">
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-x-6 overflow-x-auto">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-primary-500 dark:hover:text-primary-400 font-medium text-gray-900 dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
        </div>

        {/* Search Button */}
        <SearchButton />

        {/* Call-to-action Button */}
        <button className="hidden sm:block bg-secondary-400 text-white px-6 py-2 rounded-md hover:bg-secondary-600 transition-colors">
          Contact Us
        </button>

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
