import NextLink from 'next/link'
import ForArtistsHeader from '../../components/artists/ForArtistsHeader'
import { Button } from '../../components/buttons'
import { ArrowRight } from '../../components/icons'
import LoginForm from '../../components/LoginForm'

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-1 bg-base-200">
      <ForArtistsHeader />
      <LoginForm />
      <div className="flex items-center p-2 space-x-3">
        <p className="text-neutral-700">Dont have an account?</p>
        <NextLink href="/artists/sign-up" passHref>
          <Button variant="outline" as="a">
            Get Access <ArrowRight className="ml-half" />
          </Button>
        </NextLink>
      </div>
    </div>
  )
}

export default LoginPage
