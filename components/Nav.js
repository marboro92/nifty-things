import Link from 'next/link'

const Nav = ({ children, homeHref, className = '' }) => (
  <div className="h-[80px] w-full">
    <div
      className={`flex z-nav h-[80px] items-center justify-between fixed bg-base-100 w-full ${className}`}
    >
      <nav className="md:flex w-full items-center justify-between mx-auto px-1 max-w-[1236px]">
        <Link href={homeHref}>
          <h1 className="font-bold text-[24px]">NiftyTunes</h1>
        </Link>
        <div className="flex items-center justify-center space-x-3">
          {children}
        </div>
      </nav>
    </div>
  </div>
)

export default Nav
