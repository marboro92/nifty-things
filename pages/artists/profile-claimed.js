import { useRouter } from 'next/router'
import ProfileClaimed from '../../components/artists/ProfileClaimed'
import { ROUTES } from '../../constants/artists-routes'
import { useArtistUser } from '../../contexts/ArtistUserContext'

const ClaimedProfilePage = () => {
  const [{ type }] = useArtistUser()
  const router = useRouter()
  const onNext = () => {
    router.push(ROUTES.LANDING)
  }

  return <ProfileClaimed userType={type} onNext={onNext} />
}

export default ClaimedProfilePage
