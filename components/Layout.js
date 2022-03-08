import Link from 'next/link'
import { useState } from 'react'
import { Button, MenuButton, PillButton } from './buttons'
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
      <div className="h-screen flex flex-col">
        <div className="flex h-full divide-x divide-base-300">
          <Sidebar open={open} />
          <main className="h-full w-full divide-y divide-base-300 overflow-auto">
            <div className="flex px-1 py-1 gap-1 flex-wrap">
              <MenuButton
                open={open}
                onClick={onClickMenu}
                className="md:hidden"
              />
              <div className="grow flex gap-1 items-center justify-end sm:grow-0 sm:order-last">
                <Button>Connect Wallet</Button>
              </div>
              <input
                type="text"
                placeholder="Search music, collections, accounts"
                className="input input-bordered flex-1 min-w-[200px]"
              />
            </div>
            <div className="w-full">{children}</div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout
