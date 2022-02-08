import Image from 'next/image'
import { VerifiedArtist } from './icons'
import { Label } from './typography'

const Release = ({
  title,
  description,
  handle,
  verified,
  profileImgSrc,
  coverImgSrc,
  href = '/',
  className = '',
}) => {
  return (
    <a
      href={href}
      className={`card card-bordered card-compact lg:card-normal max-w-[300px] h-[320px] mx-2 mt-1 ${className}`}
    >
      <figure>
        <Image
          layout="responsive"
          width="100%"
          height="50%"
          src={coverImgSrc}
        />
      </figure>
      <div class="relative px-3 pb-1 text-center top-[-25px]">
        <div>
          <Image
            layout="fixed"
            height={50}
            width={50}
            src={profileImgSrc}
            className="rounded-full"
          />
        </div>
        <Label>
          {title} {verified && <VerifiedArtist className="mx-[2px] inline" />}
        </Label>
        <label className="block text-primary text-xs text-bold">
          @{handle}
        </label>
        <p className="mt-1 text-xs text-neutral">{description}</p>
      </div>
    </a>
  )
}

export default Release
