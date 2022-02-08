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
      class={`card card-bordered card-compact lg:card-normal max-w-[300px] h-[300px] mx-2 mt-1 ${className}`}
    >
      <figure>
        <img src={coverImgSrc} />
      </figure>
      <div class="relative px-3 pb-1 text-center top-[-25px]">
        <img
          src={profileImgSrc}
          className="relative rounded-full translate-x-[-50%] left-1/2"
        />
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
