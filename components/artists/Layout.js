import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { ROUTES } from '../../constants/artists-routes'
import { Button, Tab } from '../buttons'
import Head from '../Head'
import { Link } from '../links'

const Layout = ({ children, user, showNav }) => {
  const router = useRouter()
  return (
    <>
      <Head title="NiftyTunes for Artists" />
      <div className="flex flex-col items-center">
        {showNav && (
          <div className="flex z-nav h-[88px] items-center justify-between fixed bg-base-100 w-full">
            <nav className="md:flex w-full items-center justify-between mx-auto px-1 max-w-[1236px]">
              <h5 className="sm:text-[24px]">
                <NextLink href={ROUTES.HOME} passHref>
                  <a>
                    <span className="font-bold">NiftyTunes</span> for Artists
                  </a>
                </NextLink>
              </h5>
              <div className="flex items-center justify-center space-x-3">
                {user ? (
                  <>
                    <NextLink href={ROUTES.LANDING} passHref>
                      <Tab as="a" selected={ROUTES.LANDING === router.pathname}>
                        Profile
                      </Tab>
                    </NextLink>
                    <NextLink href={ROUTES.NFT_COLLECTIONS} passHref>
                      <Tab
                        selected={ROUTES.NFT_COLLECTIONS === router.pathname}
                      >
                        NFT Collections
                      </Tab>
                    </NextLink>
                    <NextLink href={ROUTES.SETTINGS} passHref>
                      <Tab selected={ROUTES.SETTINGS === router.pathname}>
                        Settings
                      </Tab>
                    </NextLink>
                  </>
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
