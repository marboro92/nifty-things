import { Button } from './buttons'
import { Link, InlineLink } from './links'
import { FacebookBrand, GoogleBrand } from './icons'
import Input from './inputs/Input'
import { H2, Overline } from './typography'
import { useForm } from 'react-hook-form'
import NextLink from 'next/link'

const AgreementText = ({ children }) => (
  <p className="text-neutral-500 my-1 text-[14px]">{children}</p>
)

const SignUpForm = ({
  onSubmit,
  loginHref = '/',
  loading = false,
  errorMessage,
}) => {
  const { getValues, register } = useForm()
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = getValues('email')
    const password = getValues('password')
    onSubmit({ email, password })
  }
  return (
    <form className="artboard-demo p-3 max-w-[448px]" onSubmit={handleSubmit}>
      <div className="flex w-full pb-1 justify-between">
        <H2>Sign Up</H2>
        <NextLink href={loginHref} passHref>
          <Link>I have an account</Link>
        </NextLink>
      </div>

      <Input placeholder="Email" name="email" inputProps={register('email')} />
      <Input
        placeholder="Password"
        name="password"
        type="password"
        inputProps={register('password')}
      />
      {errorMessage && <p className="pt-1 text-error">{errorMessage}</p>}
      <AgreementText>
        By signing up, you agree to the{' '}
        <InlineLink>Terms and Conditions</InlineLink> and{' '}
        <InlineLink>Privacy Policy</InlineLink>. California residents, see our{' '}
        <InlineLink>CA Privacy Notice</InlineLink>.
      </AgreementText>
      <Button size="md" fullWidth className="my-2" submit loading={loading}>
        Agree and Sign up
      </Button>
      <Overline className="mb-1">Or sign up with</Overline>
      <div className="grid grid-cols-2 gap-1 w-full justify-between mb-2">
        <Button variant="outline" size="md">
          <FacebookBrand className="mr-half" />
          Facebook
        </Button>
        <Button variant="outline" size="md">
          <GoogleBrand className="mr-half" />
          Google
        </Button>
      </div>
      <AgreementText>
        This site is protected by reCAPTCHA and the Google{' '}
        <InlineLink>Privacy Policy</InlineLink> and{' '}
        <InlineLink>Terms of Service</InlineLink> apply.
      </AgreementText>
      <AgreementText>
        You also agree to receive product-related marketing emails from BRIDG3,
        which you can unsubscribe from at any time.
      </AgreementText>
    </form>
  )
}

export default SignUpForm
