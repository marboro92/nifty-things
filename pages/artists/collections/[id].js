import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from '../../../components/artists/Layout'
import { useArtistCollections } from '../../../contexts/ArtistCollectionsContext'
import {
  Fraction,
  Heart,
  Lock,
  Multiuser,
  PlayButton,
  Solana,
  User,
} from '../../../components/icons'
import { H1, H2 } from '../../../components/typography'
import { SOCIAL_ICON_MAP } from '../../../components/icons/social-icon-map.const'
import { ROUTES } from '../../../constants/artists-routes'
import CollectionGrid from '../../../components/artists/CollectionsGrid'

const TableCard = ({ children, header, className }) => (
  <div
    className={`border border-neutral-400 rounded-lg overflow-auto ${className}`}
  >
    <div
      className={`bg-neutral-100 ${
        children ? 'border-b' : ''
      } border-neutral-400 border-b-1 p-1 flex items-center`}
    >
      {header}
    </div>
    {children && <div className="p-2 text-neutral">{children}</div>}
  </div>
)

const IconSummary = ({ icon, label }) => (
  <div className="flex items-end space-x-1">
    {icon}
    <label className="relative text-neutral top-[2px]"> {label}</label>
  </div>
)

const CollectionPage = () => {
  const router = useRouter()
  const [{ collections }] = useArtistCollections()
  const { id: currentId } = router.query
  const collection = collections.find(({ id }) => id == currentId)
  const otherCollections = collections.filter(
    ({ id, minted, isPublic }) => id != currentId && minted && isPublic
  )
  const otherUpcomingCollections = collections.filter(
    ({ id, minted, isPublic }) => id != currentId && minted && !isPublic
  )
  return (
    <Layout showNav user={{ email: 'placeholder@email.com' }}>
      <Image
        layout="fixed"
        height="176px"
        width="1236px"
        src="/artists/banner-1.jpg"
        priority
      />
      {collection && (
        <div className="flex w-full gap-3 my-5">
          <div>
            <Image
              layout="fixed"
              height="512px"
              width="512px"
              src={collection.coverImgSrc}
              className="rounded-lg"
              priority
            />
            <div className="space-y-1 mt-2 max-w-[512px]">
              {collection.trackList.map((item, index) => (
                <div
                  className="flex bg-neutral-100 border border-neutral-400 rounded-lg py-1 px-2"
                  key={index}
                >
                  <PlayButton className="mr-2 self-center" />
                  <Image
                    layout="fixed"
                    height="64px"
                    width="64px"
                    src={item.coverImgSrc}
                  />
                  <div className="ml-1">
                    <p className="font-bold">
                      {index + 1}. {item.title}
                    </p>
                    <p className="text-primary text-[14px]">@A-SHO</p>
                  </div>
                  <p className="ml-auto text-[14px]">{item.duration}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-primary">@A-SHO</p>
            <H1 className="my-1">{collection.title}</H1>
            <div className="flex space-x-1">
              <IconSummary icon={<Multiuser />} label="0 owners" />
              <IconSummary
                icon={<User />}
                label={`${collection?.supply} total supply`}
              />
              <IconSummary icon={<Heart />} label="0 liked" />
            </div>
            <div className="mt-3 space-y-1">
              {!collection.isPublic && (
                <TableCard
                  header={
                    <>
                      <Lock />
                      <p className="font-bold ml-half">
                        This release is not yet released to the public.
                      </p>
                    </>
                  }
                />
              )}
              <TableCard
                header={
                  <>
                    <Fraction />
                    <label className="font-bold ml-half">
                      <span className="text-primary">
                        {collection.royalty}%
                      </span>{' '}
                      Streaming Royalties have been allocated to into this NFT
                      Collection.
                    </label>
                  </>
                }
              >
                <div className="flex">
                  <Solana />
                  <div className="ml-1">
                    <p className="font-[10px] mb-half text-neutral-500">
                      Starting price
                    </p>
                    <p className="text-base-content font-bold text-[1.5rem]">
                      {collection?.price} SOL{' '}
                      <span className="font-normal text-[14px] text-neutral-500">
                        ($100.52)
                      </span>
                    </p>
                  </div>
                </div>
              </TableCard>
              {collection?.description && (
                <TableCard
                  header={
                    <>
                      <Fraction />
                      <label className="font-bold text-primary ml-half">
                        Description
                      </label>
                    </>
                  }
                >
                  {collection?.description}
                </TableCard>
              )}
              {collection?.social && (
                <TableCard
                  header={
                    <>
                      <Fraction />
                      <label className="font-bold text-primary ml-half">
                        Social Media
                      </label>
                    </>
                  }
                >
                  <ul className="space-y-2">
                    {Object.keys(collection?.social).map(
                      (platform) =>
                        collection?.social[platform] && (
                          <li className="flex">
                            <div className="scale-90 origin-top-left">
                              {SOCIAL_ICON_MAP[platform]}
                            </div>
                            <a
                              className="ml-1 hover:underline"
                              href={collection?.social[platform]}
                            >
                              {collection?.social[platform]}
                            </a>
                          </li>
                        )
                    )}
                  </ul>
                </TableCard>
              )}
              {collection?.otherUtilitiesDescription && (
                <TableCard
                  header={
                    <>
                      <Fraction />
                      <label className="font-bold text-primary ml-half">
                        Other Utilities
                      </label>
                    </>
                  }
                >
                  {collection?.otherUtilitiesDescription}
                </TableCard>
              )}
            </div>
          </div>
        </div>
      )}
      <H2 as="h6" className="my-2">
        Other Upcoming Drops
      </H2>
      {otherUpcomingCollections && otherUpcomingCollections.length > 0 && (
        <CollectionGrid
          collections={otherUpcomingCollections}
          expandable={false}
        />
      )}
      <H2 as="h6" className="mb-2">
        Other NFT Collections
      </H2>
      {otherCollections && otherCollections.length > 0 && (
        <CollectionGrid collections={otherCollections} expandable={false} />
      )}
    </Layout>
  )
}

export default CollectionPage
