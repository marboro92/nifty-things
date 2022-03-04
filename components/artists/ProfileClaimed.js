import { H1, Body1 } from '../typography'
import { Button } from '../buttons'
import OnboardingLayout from './OnboardingLayout'

const ProfileClaimed = ({ userType = 'artist', onNext }) => {
  const isArtist = userType === 'artist'
  return (
    <OnboardingLayout>
      <H1 size="lg" className="text-center">
        {isArtist
          ? 'Your artist profile has been claimed!'
          : 'Your label profile has been claimed!'}
      </H1>
      <Body1 className="mt-3 text-[1.8rem] text-center">
        You have passed our verification. Please click continue to gain access
        to your {isArtist ? "Artist's" : "Label's"} Profile.
      </Body1>
      <Button
        size="md"
        onClick={onNext}
        className="mt-auto max-w-[300px]"
        fullWidth
      >
        Continue
      </Button>
    </OnboardingLayout>
  )
}

export default ProfileClaimed
