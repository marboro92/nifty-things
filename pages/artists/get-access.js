import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Button } from '../../components/buttons'
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
        Get Access to Nifty Tunes for Artists.
      </H1>
      <p className="font-bold text-neutral-700">First, tell us who you are.</p>
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
    <div className="flex flex-col items-center justify-center w-full h-screen p-1">
      <div className="absolute top-1 self-end">
        <p className="font-bold text-neutral-700">
          Already part of a team?{' '}
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
