import Link from 'next/link'
import { useRouter } from 'next/router'
import * as Icons from './icons'

const NAV_ITEMS = [
  {
    label: 'Discover',
    href: '/',
    selected: true,
  },
  {
    label: 'Library',
    href: '/library',
  },
]

const NavSection = ({ itemsList, currentRoute }) => (
  <section className="pt-1">
    <ul>
      {itemsList.map((item) => (
        <li key={item.label}>
          <Link href={item.href}>
            <a
              className={`flex gap-1 my-half rounded-full py-1 pl-2 font-light hover:bg-[#e5edf5] ${
                currentRoute === item.href ? 'text-primary' : 'text-neutral'
              }`}
            >
              {item.icon}
              {item.label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </section>
)

const Sidebar = ({ open = true }) => {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <aside className={`min-w-[257px] ${open ? 'block' : 'hidden'} md:block`}>
      <nav
        className={`py-3 px-2 h-[calc(100%-80px)] w-full fixed overflow-auto min-w-[257px] max-w-[257px]`}
      >
        <NavSection itemsList={NAV_ITEMS} currentRoute={currentRoute} />
      </nav>
    </aside>
  )
}

export default Sidebar
