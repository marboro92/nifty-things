import { H1, LabelDescription } from '../typography'
import { Button } from '../buttons'
import OnboardingLayout from '../artists/OnboardingLayout'
import { SearchInput } from '../inputs'
import { InlineLink } from '../links'

const FindProfile = ({
  userType = 'artist',
  onBack,
  onNext,
  onChangeSearch,
  searchResults,
  onSelectProfile,
  searchValue,
}) => {
  const isArtist = userType === 'artist'
  return (
    <OnboardingLayout
      footer={
        <>
          <Button size="md" disabled={!onBack} onClick={onBack}>
            Go Back
          </Button>
          <Button size="md" disabled={!onNext} onClick={onNext}>
            Continue
          </Button>
        </>
      }
    >
      <H1 size="lg" className="text-center">
        {isArtist
          ? 'What profile are you claiming?'
          : 'What Label are you joining?'}
      </H1>
      <LabelDescription size="lg" className="text-[1.25rem] mb-5 text-neutral">
        {isArtist
          ? 'Only claim 1 profile at a time and wait until you get access before claiming another.'
          : 'Use the same label or licensor as when you submitted your music.'}
      </LabelDescription>
      <SearchInput
        placeholder={isArtist ? 'Search artists' : 'Search labels'}
        onChange={onChangeSearch}
        value={searchValue}
        dropdownItems={searchResults}
        onSelectItem={onSelectProfile}
      />
      {isArtist && (
        <div className="mt-5 space-y-1 text-center">
          <LabelDescription size="md" className="text-neutral">
            <InlineLink>Music not yet live on BRIDG3?</InlineLink>
          </LabelDescription>
          <LabelDescription size="md" className="text-neutral">
            <InlineLink>Are you part of a label team?</InlineLink>
          </LabelDescription>
        </div>
      )}
    </OnboardingLayout>
  )
}

export default FindProfile
