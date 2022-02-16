import ForArtistsHeader from '../../components/artists/ForArtistsHeader'
import SignUpForm from '../../components/SignUpForm'
import { signUp } from '../../utils/cognito'

const SignUpPage = () => {
  const handleSignUp = ({ email, password }) => {
    signUp({ email, password })
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-1 bg-base-200">
      <ForArtistsHeader className="mb-3" />
      <SignUpForm loginHref={'/artists/login'} onSubmit={handleSignUp} />
    </div>
  )
}

export default SignUpPage
