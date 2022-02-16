import NextLink from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import ForArtistsHeader from '../../components/artists/ForArtistsHeader'
import { Button } from '../../components/buttons'
import { ArrowRight } from '../../components/icons'
import LoginForm from '../../components/LoginForm'
import { logIn } from '../../utils/cognito'
import { ROUTES } from '../../constants/artists-routes'

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState()
  const router = useRouter()
  const handleLogin = async ({ email, password }) => {
    try {
      await logIn({ email, password })
      router.push({ pathname: ROUTES.LANDING })
    } catch (e) {
      setErrorMessage(e.message)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-1 bg-base-200">
      <ForArtistsHeader />
      <LoginForm onSubmit={handleLogin} errorMessage={errorMessage} />
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
