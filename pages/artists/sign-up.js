import { useState } from 'react'
import ForArtistsHeader from '../../components/artists/ForArtistsHeader'
import SignUpForm from '../../components/SignUpForm'
import { signUp } from '../../utils/cognito'

const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState()
  const handleSignUp = async ({ email, password }) => {
    try {
      await signUp({ email, password })
    } catch (e) {
      setErrorMessage(e.message)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-1 bg-base-200">
      <ForArtistsHeader className="mb-3" />
      <SignUpForm
        loginHref={'/artists/login'}
        onSubmit={handleSignUp}
        errorMessage={errorMessage}
      />
    </div>
  )
}

export default SignUpPage
