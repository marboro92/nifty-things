import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ROUTES } from '../../constants/artists-routes'
import { Expand } from '../icons'

const CollectionGridLink = ({ id, coverImgSrc, title, href }) => (
  <Link key={id} href={href} passHref>
    <a className="group relative rounded-lg overflow-auto w-[280px] h-[280px]">
      <Image
        layout="responsive"
        height="280px"
        width="280px"
        src={coverImgSrc}
        priority
      />
      <div className="absolute flex items-center justify-between bottom-[-100%px] bg-black text-base-300 text-[14px] w-[280px] h-4 px-1 transition-all group-hover:translate-y-[-100%]">
        <div>2022 - {title}</div>
        <div>View Live</div>
      </div>
    </a>
  </Link>
)

const CollectionGrid = ({ collections, expandable = true }) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className="mb-5">
      <div
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 transition-[max-height] overflow-hidden  max-h-[300px] ${
          showMore ? 'max-h-[2000px]' : ''
        }`}
      >
        {collections.map(({ id, coverImgSrc, title }) => (
          <CollectionGridLink
            key={id}
            id={id}
            coverImgSrc={coverImgSrc}
            title={title}
            href={ROUTES.COLLECTION_DETAILS + id}
          />
        ))}
      </div>
      {collections.length > 4 && expandable && (
        <div className="flex justify-end pr-2">
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center py-1 px-2 rounded bg-primary-100 text-primary self-end"
          >
            {showMore ? 'Show less' : 'Show more'}
            <Expand className="ml-half" />
          </button>
        </div>
      )}
    </div>
  )
}

export default CollectionGrid
