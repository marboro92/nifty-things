import Image from 'next/image'
import { Button } from './buttons'
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
  minted = false,
}) => {
  return (
    <a
      href={href}
      className={`block card card-bordered card-compact bg-base-200 rounded-lg lg:card-normal max-w-sm h-[340px] m-1 lg:mx-2 md:my-2 ${className}`}
    >
      <figure className="h-[180px] overflow-hidden w-full">
        <Image
          layout="responsive"
          width="100%"
          height="100%"
          className=""
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
        <p className="mt-1 text-xs text-neutral max-h-[60px] overflow-hidden">
          {description}
        </p>
        {minted ? <Label>You own it!</Label> : <Button>Mint</Button>}
      </div>
    </a>
  )
}

export default Release
