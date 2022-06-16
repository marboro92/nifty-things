import Image from 'next/image'
import { useState } from 'react'
import { Button } from './buttons'
import { VerifiedArtist } from './icons'
import { Label } from './typography'

const Release = ({
  title,
  description,
  verified,
  coverImgSrc,
  onClaim,
  className = '',
  claimed = false,
}) => {
  const [loading, setLoading] = useState(false)
  const handleClaim = async () => {
    setLoading(true)
    await onClaim()
    setLoading(false)
  }
  return (
    <div
      className={`block card card-bordered card-compact bg-base-200 rounded-lg lg:card-normal max-w-sm border-neutral-100 h-[340px] m-1 lg:mx-2 md:my-2 ${className}`}
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
        <p className="mt-1 mb-2 text-xs text-neutral max-h-[60px] overflow-hidden">
          {description}
        </p>
        {claimed ? (
          <Label>Claimed</Label>
        ) : (
          <Button onClick={handleClaim} loading={loading}>
            Claim
          </Button>
        )}
      </div>
    </div>
  )
}

export default Release
