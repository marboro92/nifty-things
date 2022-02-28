import { H1, LabelDescription } from '../typography'
import { Button } from '../buttons'
import OnboardingLayout from '../artists/OnboardingLayout'
import { SearchInput } from '../inputs'
import { InlineLink } from '../links'
import { VerifiedArtist } from '../icons'
import Image from 'next/image'

const ProfileBanner = ({ verified, bannerSrc, artistName }) => {
  return (
    <div className="relative h-[176px] w-[1236px]">
      <Image layout="fill" src={bannerSrc} priority />

      <div className="absolute p-2 top-1/2 translate-y-[-50%]">
        {verified && (
          <div className="flex items-center">
            <VerifiedArtist className="h-[1.2rem] w-[1.2rem]" />
            <label className="pl-half text-base-100 tracking-wider">
              Verified Artist
            </label>
          </div>
        )}
        <h1 className="text-[3.3rem] text-base-100 font-bold leading-1 mt-0">
          {artistName}
        </h1>
      </div>
    </div>
  )
}

export default ProfileBanner
