import Link from 'next/link'
import { PillButton } from './buttons'
import Head from './Head'
import Sidebar from './sidebar/Sidebar'

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <div className="grid grid-cols-6 h-screen divide-x divide-base-300">
        <Sidebar />
        <main className="col-span-5 divide-y">
          <div className="flex mx-2 my-1 gap-1">
            <input
              type="text"
              placeholder="Search music, collections, accounts"
              className="input input-bordered flex-1"
            />
            <div className="flex gap-1 items-center">
              <Link href="/profile">
                <PillButton as="a">Profile</PillButton>
              </Link>
              <PillButton secondary>Connect Wallet</PillButton>
            </div>
          </div>
          <div className="h-full">{children}</div>
        </main>
      </div>
    </>
  )
}

export default Layout
