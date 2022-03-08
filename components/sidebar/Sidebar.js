import Link from 'next/link'
import * as Icons from './icons'

const BROWSE_MUSIC_NAV_ITEMS = [
  {
    label: 'Home',
    href: '',
  },
  {
    label: 'Discover',
    href: '',
    selected: true,
  },
  {
    label: 'Your Collection',
    href: '',
  },
]

const NavSection = ({ itemsList }) => (
  <section className="pt-1">
    <ul>
      {itemsList.map((item) => (
        <li key={item.label}>
          <Link href={item.href}>
            <a
              className={`flex gap-1 my-half rounded-full text-neutral py-[8px] pl-1 font-light hover:bg-[#e5edf5] ${
                item.selected ? 'text-primary' : ''
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
  return (
    <aside
      className={`min-w-[257px] bg-base-200 ${
        open ? 'block' : 'hidden'
      } md:block`}
    >
      <nav
        className={`py-3 px-2 h-[calc(100%-80px)] w-full fixed overflow-auto min-w-[257px] max-w-[257px]`}
      >
        <h1 className="font-bold text-[24px] mb-4">NiftyTunes</h1>
        <NavSection itemsList={BROWSE_MUSIC_NAV_ITEMS} />
      </nav>
    </aside>
  )
}

export default Sidebar
