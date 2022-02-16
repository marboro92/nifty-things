import { useState } from 'react'
import { useRouter } from 'next/router'
import ForArtistsHeader from '../../components/artists/ForArtistsHeader'
import ConfirmSignUpForm from '../../components/ConfirmSignUpForm'
import SignUpForm from '../../components/SignUpForm'
import { confirmSignUp, signUp } from '../../utils/cognito'

const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState()
  const [signUpEmail, setSignUpEmail] = useState()
  const router = useRouter()
  const handleSignUp = async ({ email, password }) => {
    try {
      await signUp({ email, password })
      setSignUpEmail(email)
      setErrorMessage()
    } catch (e) {
      setErrorMessage(e.message)
    }
  }

  const handleConfirmation = async ({ code }) => {
    try {
      await confirmSignUp({ email: signUpEmail, code })
      setErrorMessage()
      router.push({ pathname: '/artists' })
    } catch (e) {
      setErrorMessage(e.message)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-1 bg-base-200">
      <ForArtistsHeader className="mb-3" />
      {!signUpEmail ? (
        <SignUpForm
          loginHref={'/artists/login'}
          onSubmit={handleSignUp}
          errorMessage={errorMessage}
        />
      ) : (
        <ConfirmSignUpForm
          email={signUpEmail}
          onSubmit={handleConfirmation}
          errorMessage={errorMessage}
        />
      )}
    </div>
  )
}

export default SignUpPage
