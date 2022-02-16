import { Button } from './buttons'
import { Link, InlineLink } from './links'
import { FacebookBrand, GoogleBrand } from './icons'
import Input from './inputs/Input'
import { H2, Overline } from './typography'

const AgreementText = ({ children }) => (
  <p className="text-neutral-500 my-1 text-[14px]">{children}</p>
)

const SignUpForm = ({ onSubmit }) => {
  return (
    <div className="artboard-demo p-3 max-w-[448px]">
      <div className="flex w-full pb-1 justify-between">
        <H2>Sign Up</H2>
        <Link>I have an account</Link>
      </div>
      <form onSubmit={onSubmit}>
        <Input placeholder="Email" name="email" />
        <Input placeholder="Password" name="password" />
        <AgreementText>
          By signing up, you agree to the{' '}
          <InlineLink>Terms and Conditions</InlineLink> and{' '}
          <InlineLink>Privacy Policy</InlineLink>. California residents, see our{' '}
          <InlineLink>CA Privacy Notice</InlineLink>.
        </AgreementText>
        <Button size="md" fullWidth type="submit" className="my-2">
          Agree and Sign up
        </Button>
      </form>
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
        You also agree to receive product-related marketing emails from
        NiftyTunes, which you can unsubscribe from at any time.
      </AgreementText>
    </div>
  )
}

export default SignUpForm
