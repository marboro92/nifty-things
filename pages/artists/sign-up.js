import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ForArtistsHeader from '../../components/artists/ForArtistsHeader'
import ConfirmSignUpForm from '../../components/ConfirmSignUpForm'
import SignUpForm from '../../components/SignUpForm'
import { confirmSignUp, signUp } from '../../utils/cognito'
import { ROUTES } from '../../constants/artists-routes'
import {
  ARTIST_USER_ACTIONS,
  useArtistUser,
} from '../../contexts/ArtistUserContext'
import Head from '../../components/Head'

const SignUpFlow = () => {
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState()
  const [{ type }, dispatch] = useArtistUser()
  const router = useRouter()

  useEffect(() => {
    if (!type) router.push(ROUTES.GET_ACCESS)
  }, [type])

  const onCompleteSignUp = async () => {
    await router.push(ROUTES.ONBOARDING)
  }

  const handleSignUp = async ({ email, password }) => {
    try {
      setLoading(true)
      const cognitoUser = await signUp({ email, password })
      dispatch({ type: ARTIST_USER_ACTIONS.LOG_IN, payload: cognitoUser })
      setErrorMessage(null)
      await onCompleteSignUp()
    } catch (e) {
      setErrorMessage(e.message)
    }
    setLoading(false)
  }

  return (
    <SignUpForm
      loginHref={ROUTES.LOGIN}
      onSubmit={handleSignUp}
      errorMessage={errorMessage}
      loading={loading}
    />
  )
}

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-1 bg-base-200">
      <Head title="BRIDG3 for Artists" />
      <ForArtistsHeader className="mb-3" />
      <SignUpFlow />
    </div>
  )
}

export default SignUpPage
