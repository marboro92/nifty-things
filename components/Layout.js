import { useState } from 'react'
import Head from './Head'
import Nav from './Nav'
import Sidebar from './sidebar/Sidebar'
import { ConnectButton } from './wallet/ConnectButton'

const Layout = ({ children, banner }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Head title="NiFTy | Marketplace" />
      <div className="h-screen flex flex-col">
        <div className="flex h-full w-full divide-x divide-base-300">
          <main className="h-full w-full overflow-auto">
            <Nav homeHref="/" className="border-b">
              <ConnectButton />
            </Nav>
            {banner}
            <div className="w-full max-w-[1236px] mx-auto flex h-full">
              <Sidebar open={open} />
              <div>{children}</div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout
