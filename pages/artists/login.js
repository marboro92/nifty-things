import NextLink from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import ForArtistsHeader from '../../components/artists/ForArtistsHeader'
import { Button } from '../../components/buttons'
import { ArrowRight } from '../../components/icons'
import LoginForm from '../../components/LoginForm'
import { logIn } from '../../utils/cognito'
import { ROUTES } from '../../constants/artists-routes'
import {
  ARTIST_USER_ACTIONS,
  useArtistUser,
} from '../../contexts/ArtistUserContext'
import Head from '../../components/Head'

const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState()
  const router = useRouter()
  const [, dispatch] = useArtistUser()
  const handleLogin = async ({ email, password }) => {
    try {
      setLoading(true)
      setErrorMessage()
      const cognitoUser = await logIn({ email, password })
      dispatch({ type: ARTIST_USER_ACTIONS.LOG_IN, payload: cognitoUser })
      await router.push({ pathname: ROUTES.LANDING })
    } catch (e) {
      setErrorMessage(e.message)
    }
    setLoading(false)
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-1 bg-base-200">
      <Head title="BRIDG3 for Artists" />
      <ForArtistsHeader />
      <LoginForm
        onSubmit={handleLogin}
        errorMessage={errorMessage}
        loading={loading}
      />
      <div className="flex items-center p-2 space-x-3">
        <p className="text-neutral-700">Dont have an account?</p>
        <NextLink href={ROUTES.GET_ACCESS} passHref>
          <Button variant="outline" as="a">
            Get Access <ArrowRight className="ml-half" />
          </Button>
        </NextLink>
      </div>
    </div>
  )
}

export default LoginPage
