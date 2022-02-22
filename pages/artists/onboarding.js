import { useRouter } from 'next/router'
import { ROUTES } from '../../constants/artists-routes'
import { useArtistUser } from '../../contexts/ArtistUserContext'
import { useEffect, useState } from 'react'
import FindProfile from '../../components/artists/FindProfile'
import { PlaceholderAvatar } from '../../components/icons'
import ProfileExistsError from '../../components/artists/ProfileExistsError'

const SearchResult = ({ children }) => (
  <span className="flex items-center text-neutral">
    <PlaceholderAvatar className="mr-2 h-[4rem] w-[4rem]" />
    {children}
  </span>
)
const PROFILES_MOCK = [
  {
    name: 'A-SHO',
    id: 1,
  },
  {
    name: 'marboro',
    id: 2,
  },
  {
    name: 'abcd',
    id: 3,
  },
]

const LABELS_MOCK = [
  {
    name: 'Nifty Tunes Records',
    id: 1,
  },
  {
    name: 'Sadboy Records',
    id: 2,
  },
]
const OnboardingPage = () => {
  const [{ type, cognitoUser }] = useArtistUser()
  const [search, setSearch] = useState()
  const [profile, setProfile] = useState()
  const [showProfileClaimedError, setShowProfileClaimedError] = useState(false)
  const router = useRouter()
  const userList = type === 'label' ? LABELS_MOCK : PROFILES_MOCK
  const searchResults =
    search && search.length > 0 && !profile
      ? userList.map((item) => ({
          ...item,
          content: <SearchResult>{item.name}</SearchResult>,
        }))
      : []

  // useEffect(() => {
  //   if (!cognitoUser) router.push(ROUTES.GET_ACCESS)
  // })

  const onSelectProfile = (item) => {
    setProfile(item)
    setSearch(item.name)
  }

  const claimProfile = () => {
    setShowProfileClaimedError(true)
  }

  return !showProfileClaimedError ? (
    <FindProfile
      userType={type}
      onBack={() => router.push(ROUTES.GET_ACCESS)}
      onNext={profile ? claimProfile : undefined}
      onChangeSearch={(e) => {
        setProfile(null)
        setSearch(e.target.value)
      }}
      searchValue={search}
      searchResults={searchResults}
      onSelectProfile={onSelectProfile}
    />
  ) : (
    <ProfileExistsError
      name={profile.name}
      userType={type}
      onBack={() => setShowProfileClaimedError(false)}
    />
  )
}

export default OnboardingPage
