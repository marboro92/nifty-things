import NextLink from 'next/link'
import { ROUTES } from '../../constants/artists-routes'
import { Button } from '../buttons'
import Head from '../Head'
import { Link } from '../links'

const Layout = ({ children, user, showNav }) => {
  return (
    <>
      <Head title="NiftyTunes for Artists" />
      <div className="flex flex-col items-center">
        {showNav && (
          <div className="flex z-nav h-[88px] items-center justify-between fixed bg-base-100 w-full">
            <nav className="md:flex w-full items-center justify-between mx-auto px-1 max-w-[1236px]">
              <h5 className="sm:text-[24px]">
                <span className="font-bold">NiftyTunes</span> for Artists
              </h5>
              <div className="flex items-center justify-center space-x-3">
                {user ? (
                  <div />
                ) : (
                  <>
                    <Link href={ROUTES.LOGIN}>Login</Link>
                    <NextLink href={ROUTES.GET_ACCESS} passHref>
                      <Button as="a">Get Access</Button>
                    </NextLink>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
        <main
          className={`flex w-full flex-col px-1 max-w-[1236px] ${
            showNav ? 'pt-[88px]' : ''
          }`}
        >
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
