import Link from 'next/link'
import { useState } from 'react'
import { Button, MenuButton, PillButton } from './buttons'
import Head from './Head'
import Nav from './Nav'
import Sidebar from './sidebar/Sidebar'
import { H2 } from './typography'

const Layout = ({ children, banner }) => {
  const [open, setOpen] = useState(false)
  const onClickMenu = () => {
    setOpen(!open)
  }
  return (
    <>
      <Head title="NiftyTunes | Marketplace" nifty />
      <div className="h-screen flex flex-col">
        <div className="flex h-full w-full divide-x divide-base-300">
          {/* <Sidebar open={open} /> */}
          <main className="h-full w-full overflow-auto">
            <Nav homeHref="/" className="border-b">
              <Button>Connect Wallet</Button>
            </Nav>
            {banner}
            <div className="w-full max-w-[1236px] mx-auto">{children}</div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout
