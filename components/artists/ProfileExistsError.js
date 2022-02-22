import { H1, LabelDescription } from '../typography'
import { Button } from '../buttons'
import OnboardingLayout from './OnboardingLayout'
import { InlineLink } from '../links'
import { PlaceholderAvatar } from '../icons'

const ProfileExistsError = ({ userType = 'artist', name, onBack, onNext }) => {
  const isArtist = userType === 'artist'
  return (
    <OnboardingLayout
      footer={
        <>
          <Button size="md" onClick={onBack}>
            Go Back
          </Button>
          <Button size="md" onClick={onNext}>
            Learn more
          </Button>
        </>
      }
    >
      <PlaceholderAvatar className="w-[200px] h-[200px]" />
      <H1 size="lg" className="text-center">
        {name} is already on NiftyTunes for Artists.
      </H1>
      {isArtist && (
        <LabelDescription size="md" className="my-2 text-neutral">
          <InlineLink>Listen On NiftyTunes</InlineLink>
        </LabelDescription>
      )}
      <LabelDescription size="lg" className="my-2 text-neutral">
        {isArtist
          ? "This artist's profile has already been claimed. Ask your team to invite you to NiftyTunes for Artists."
          : 'To gain access ask an Admin on your team to invite you'}
      </LabelDescription>
      <LabelDescription size="md" className="my-3 text-neutral">
        <InlineLink>Can't reach your team?</InlineLink>
      </LabelDescription>
    </OnboardingLayout>
  )
}

export default ProfileExistsError
