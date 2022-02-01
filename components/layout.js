import Link from 'next/link'
import Head from './Head'

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <div className="grid grid-cols-6 h-screen divide-x divide-base-300">
        <nav className="bg-base-200 mt-3 ml-2">
          <h1 className="font-bold text-[24px] mb-4">NiftyTunes</h1>
          <section>
            <h5 className="uppercase text-sm font-bold">Browse Music</h5>
            <ul className="ml-2">
              <li>Hear this</li>
            </ul>
          </section>
        </nav>
        <main className="col-span-5 divide-y">
          <div className="flex mx-2 my-1 gap-1">
            <input
              type="text"
              placeholder="Search music, collections, accounts"
              className="input input-bordered flex-1"
            />
            <div className="flex gap-1 items-center">
              <Link href="/profile">
                <a className="btn btn-sm btn-primary rounded-full">Profile</a>
              </Link>
              <button className="btn btn-sm btn-outline btn-secondary rounded-full">
                Connect Wallet
              </button>
            </div>
          </div>
          <div className="h-full">{children}</div>
        </main>
      </div>
    </>
  )
}

export default Layout
