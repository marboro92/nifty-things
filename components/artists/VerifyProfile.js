import { Body1, H1, LabelDescription } from '../typography'
import { Button } from '../buttons'
import OnboardingLayout from './OnboardingLayout'
import { useState } from 'react'
import { Input } from '../inputs'
import ReactInputVerificationCode from 'react-input-verification-code'

const VerifyProfile = ({ userType = 'artist', onSubmit, loading = false }) => {
  const isArtist = userType === 'artist'
  const [code, setCode] = useState()
  return (
    <OnboardingLayout>
      <H1 size="lg" className="text-center">
        Please verify email code below.
      </H1>
      <Body1 className="text-[1.8rem] text-center">
        We have sent a confirmation to this {isArtist ? "artist's" : "label's"}{' '}
        email with a generated verification code.
      </Body1>
      <Body1 className="text-[1.8rem] text-center">
        Please enter the verification code below.
      </Body1>
      <div className="mt-3 w-full md:max-w-[400px] custom-verification-code-input">
        <ReactInputVerificationCode
          placeholder=""
          onChange={(code) => setCode(code)}
        />
      </div>
      <Button
        size="md"
        onClick={(code) => onSubmit(code)}
        disabled={!code?.length || code.length < 4}
        className="mt-auto max-w-[300px]"
        fullWidth
        loading={loading}
      >
        Verify
      </Button>
    </OnboardingLayout>
  )
}

export default VerifyProfile
