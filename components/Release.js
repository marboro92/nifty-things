import Image from 'next/image'
import { useState } from 'react'
import { Button } from './buttons'
import { VerifiedCreator } from './icons'
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
      className={`block card card-bordered card-compact rounded-lg lg:card-normal max-w-sm bg-white border-neutral-100 min-w-[320px] md:min-w-sm h-[340px] m-1 lg:mx-2 md:my-2 ${className}`}
    >
      <figure className="h-[180px] overflow-hidden w-full">
        <img width="100%" height="auto" src={coverImgSrc} />
      </figure>
      <div className="px-3 py-1 text-center overflow-hidden">
        <Label>
          {title}{' '}
          {verified && <VerifiedCreator className="h-1 w-1 mx-[2px] inline" />}
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
