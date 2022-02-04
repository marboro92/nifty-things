import Link from 'next/link'
import * as Icons from './icons'

const BROWSE_MUSIC_NAV_ITEMS = [
  {
    label: 'Explore',
    icon: <Icons.Explore />,
    href: '/',
  },
  {
    label: 'Hear this',
    icon: <Icons.HearThis />,
    href: '/',
    selected: true,
  },
  {
    label: 'Radio',
    icon: <Icons.Radio />,
    href: '/',
  },
]

const YOUR_LIBRARY_NAV_ITEMS = [
  {
    label: 'Recently Added',
    icon: <Icons.LastAdded />,
    href: '/',
  },
  {
    label: 'Favourites',
    icon: <Icons.Favorites />,
    href: '/',
  },
  {
    label: 'Artists',
    icon: <Icons.Artists />,
    href: '/',
  },
  {
    label: 'Songs',
    icon: <Icons.Songs />,
    href: '/',
  },
  {
    label: 'Genres',
    icon: <Icons.Genres />,
    href: '/',
  },
]

const MOCK_PLAYLIST_LIST = [
  'Nifty Beats',
  'Workout',
  'Nostalgic',
  'Anime Stuff',
  'My Top-100',
]

const playlistNavItems = MOCK_PLAYLIST_LIST.map((playlist) => ({
  label: playlist,
  icon: <Icons.Playlist />,
  href: '/',
}))

const NavSection = ({ itemsList, sectionTitle }) => (
  <section className="pt-1">
    <h5 className="uppercase text-sm font-semibold mb-2 tracking-wider">
      {sectionTitle}
    </h5>
    <ul>
      {itemsList.map((item) => (
        <li key={item.label}>
          <Link href={item.href}>
            <a
              className={`flex gap-1 my-half rounded-full text-neutral py-[8px] pl-2 font-light hover:bg-[#e5edf5] ${
                item.selected ? 'bg-primary-100' : ''
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
        <NavSection
          itemsList={BROWSE_MUSIC_NAV_ITEMS}
          sectionTitle="Browse Music"
        />
        <NavSection
          itemsList={YOUR_LIBRARY_NAV_ITEMS}
          sectionTitle="Your Library"
        />
        <NavSection itemsList={playlistNavItems} sectionTitle="playlists" />
      </nav>
    </aside>
  )
}

export default Sidebar
