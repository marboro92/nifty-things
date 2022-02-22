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

const SignUpFlow = () => {
  const [errorMessage, setErrorMessage] = useState()
  const [signUpEmail, setSignUpEmail] = useState()
  const [{ type }, dispatch] = useArtistUser()
  const router = useRouter()

  useEffect(() => {
    if (!type) router.push(ROUTES.GET_ACCESS)
  }, [type])

  const onCompleteSignUp = () => {
    router.push(ROUTES.ONBOARDING)
  }

  const handleSignUp = async ({ email, password }) => {
    try {
      const cognitoUser = await signUp({ email, password })
      setSignUpEmail(email)
      dispatch({ type: ARTIST_USER_ACTIONS.LOG_IN, payload: cognitoUser })
      setErrorMessage(null)
      if (process.env.NEXT_PUBLIC_MOCK_COGNITO) {
        onCompleteSignUp()
      }
    } catch (e) {
      setErrorMessage(e.message)
    }
  }

  const handleConfirmation = async ({ code }) => {
    try {
      await confirmSignUp({ email: signUpEmail, code })
      setErrorMessage(null)
    } catch (e) {
      setErrorMessage(e.message)
    }
  }
  return !signUpEmail ? (
    <SignUpForm
      loginHref={ROUTES.LOGIN}
      onSubmit={handleSignUp}
      errorMessage={errorMessage}
    />
  ) : (
    <ConfirmSignUpForm
      email={signUpEmail}
      onSubmit={handleConfirmation}
      errorMessage={errorMessage}
    />
  )
}

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-1 bg-base-100">
      <ForArtistsHeader className="mb-3" />
      <SignUpFlow />
    </div>
  )
}

export default SignUpPage
