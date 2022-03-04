import { useRouter } from 'next/router'
import ForArtistsHeader from '../../components/artists/ForArtistsHeader'
import { Button } from '../../components/buttons'
import Head from '../../components/Head'
import { H1 } from '../../components/typography'
import { ROUTES } from '../../constants/artists-routes'
import {
  ARTIST_USER_ACTIONS,
  useArtistUser,
} from '../../contexts/ArtistUserContext'

const HelpLink = ({ children, href = '/' }) => (
  <a className="block underline text-neutral text-center" href={href}>
    {children}
  </a>
)

const UserTypeForm = () => {
  const [, dispatch] = useArtistUser()
  const router = useRouter()
  return (
    <>
      <H1 className="text-[3rem] text-center">
        Get Access to BRIDG3 for Artists.
      </H1>
      <p className="text-[1.5rem] font-bold text-neutral-700">
        First, tell us who you are.
      </p>
      <div className="space-y-2 py-6">
        <Button
          fullWidth
          size="xl"
          onClick={() => {
            dispatch({
              type: ARTIST_USER_ACTIONS.UPDATE_TYPE,
              payload: 'artist',
            })
            router.push(ROUTES.SIGN_UP)
          }}
        >
          Artist or Manager
        </Button>
        <Button
          fullWidth
          size="xl"
          onClick={() => {
            dispatch({
              type: ARTIST_USER_ACTIONS.UPDATE_TYPE,
              payload: 'label',
            })
            router.push(ROUTES.SIGN_UP)
          }}
        >
          Label Team Member
        </Button>
      </div>
    </>
  )
}

const GetAccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen px-1 pb-1">
      <Head title="BRIDG3 for Artists" />
      <div className="absolute top-[0] w-full flex items-center justify-between px-1">
        <ForArtistsHeader />
        <p className="font-bold text-neutral-700">
          <span className="xs:hidden">Already part of a team? </span>
          <a href={ROUTES.LOGIN} className="font-bold text-primary">
            Login
          </a>
        </p>
      </div>
      <UserTypeForm />
      <HelpLink>If your team already exists, ask an admin for access.</HelpLink>
      <HelpLink>Not sure which to choose?</HelpLink>
    </div>
  )
}

export default GetAccessPage
