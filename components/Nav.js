import Link from 'next/link'

const Nav = ({ children, homeHref, className = '' }) => (
  <div className="h-[80px] w-full">
    <div
      className={`flex z-nav h-[80px] items-center justify-between fixed bg-base-100 w-full ${className}`}
    >
      <nav className="flex w-full items-center justify-between mx-auto px-1 max-w-[1380px]">
        <Link href={homeHref} passHref>
          <a className="font-bold text-[24px]">NiFTy</a>
        </Link>
        <div className="flex items-center justify-end space-x-3">
          {children}
        </div>
      </nav>
    </div>
  </div>
)

export default Nav
