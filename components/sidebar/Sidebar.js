import Link from 'next/link'
import HearThis from './icons/hear-this.svg'

const BROWSE_MUSIC_NAV_ITEMS = [
  {
    label: 'Explore',
    icon: 'expore',
    href: '/',
  },
  {
    label: 'Hear this',
    icon: 'hear-this',
    href: '/',
  },
  {
    label: 'Radio',
    icon: 'radio',
    href: '/',
  },
]

const YOUR_LIBRARY_NAV_ITEMS = [
  {
    label: 'Recently Added',
    icon: 'last-added',
    href: '/',
  },
  {
    label: 'Favourites',
    icon: 'favourites',
    href: '/',
  },
  {
    label: 'Artists',
    icon: 'artists',
    href: '/',
  },
  {
    label: 'Songs',
    icon: 'songs',
    href: '/',
  },
  {
    label: 'Genres',
    icon: 'genres',
    href: '/',
  },
]

const MOCK_PLAYLIST_NAV_ITEMS = [
  ' Nifty Beats',
  'Workout',
  'Nostalgic',
  'Anime Stuff',
  'My Top-100',
]

const Sidebar = ({ children }) => {
  return (
    <nav className="bg-base-200 mt-3 ml-2">
      <h1 className="font-bold text-[24px] mb-4">NiftyTunes</h1>
      <section>
        <h5 className="uppercase text-sm font-bold">Browse Music</h5>
        <ul className="ml-2">
          <li>
            <Link href="/">
              <a className="flex gap-1 my-1">
                <HearThis />
                Hear this
              </a>
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  )
}

export default Sidebar
