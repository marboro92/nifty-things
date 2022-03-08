import Image from 'next/image'
import { VerifiedArtist } from './icons'
import { Label } from './typography'

const Release = ({
  title,
  description,
  handle,
  verified,
  coverImgSrc,
  href = '/',
  className = '',
}) => {
  return (
    <a
      href={href}
      className={`block card card-bordered card-compact bg-base-200 rounded-lg lg:card-normal max-w-[340px] h-[300px] mx-2 my-2 ${className}`}
    >
      <figure>
        <Image
          layout="responsive"
          width="100%"
          height="50%"
          src={coverImgSrc}
        />
      </figure>
      <div className="px-3 py-1 text-center overflow-hidden">
        <Label>
          {title}{' '}
          {verified && <VerifiedArtist className="h-1 w-1 mx-[2px] inline" />}
        </Label>
        <label className="block text-xs text-bold text-neutral">
          by <span className="text-primary">@{handle}</span>
        </label>
        <p className="mt-1 text-xs text-neutral max-h-[40px] overflow-hidden">
          {description}
        </p>
      </div>
    </a>
  )
}

export default Release
