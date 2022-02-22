import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../buttons'
import { LabelDescription, Overline } from '../typography'

const Collection = ({
  title,
  type,
  date,
  trackList = [],
  minted = false,
  coverImgSrc,
  viewHref = '/',
  createHref = '/',
  className = '',
}) => {
  return (
    <div
      className={`card border flex flex-col max-w-[400px] h-[500px] p-1 ${className}`}
    >
      <div className="flex items-start py-1">
        <figure className="max-w-[96px]">
          <Image layout="fixed" width="96px" height="96px" src={coverImgSrc} />
        </figure>
        <div className="my-auto px-1">
          <Overline className="text-base-content">{date}</Overline>
          <LabelDescription size="md">{title}</LabelDescription>
          <p className="text-[14px]">{type}</p>
        </div>
      </div>
      <ol className="relative my-1 divide-y-2 border-t-2 border-b-2">
        {trackList.map(({ title }, index) => (
          <li className="p-1 text-[14px] font-bold" key={title + date}>
            {index + 1}.<span className="p-2">{title}</span>
          </li>
        ))}
      </ol>
      <div className="mx-auto mt-auto pb-3">
        <Link href={minted ? viewHref : createHref}>
          <Button variant={!minted ? 'primary-outline' : 'primary'}>
            {!minted ? 'Create NFT Collection' : 'View Created NFT'}
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Collection
