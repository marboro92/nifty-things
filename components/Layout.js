import Link from 'next/link'
import { useState } from 'react'
import { MenuButton, PillButton } from './buttons'
import Head from './Head'
import Sidebar from './sidebar/Sidebar'

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  const onClickMenu = () => {
    setOpen(!open)
  }
  return (
    <>
      <Head />
      <div className="flex h-screen divide-x divide-base-300">
        <Sidebar open={open} />
        <main className="divide-y divide-base-300">
          <div className="flex px-1 py-1 gap-1 flex-wrap">
            <MenuButton
              open={open}
              onClick={onClickMenu}
              className="md:hidden"
            />
            <div className="grow flex gap-1 items-center justify-end sm:grow-0 sm:order-last">
              <Link href="/profile">
                <PillButton as="a">Profile</PillButton>
              </Link>
              <PillButton secondary>Connect Wallet</PillButton>
            </div>
            <input
              type="text"
              placeholder="Search music, collections, accounts"
              className="input input-bordered flex-1 min-w-[200px]"
            />
          </div>
          <div className="h-full">{children}</div>
        </main>
      </div>
    </>
  )
}

export default Layout
