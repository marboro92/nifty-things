import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from '../../../components/artists/Layout'
import {
  findIdInCollection,
  useArtistCollections,
} from '../../../contexts/ArtistCollectionsContext'
import {
  Ethereum,
  Fraction,
  Heart,
  Lock,
  Matic,
  Multiuser,
  PlayButton,
  Solana,
  User,
  Www,
} from '../../../components/icons'
import { H1, H2 } from '../../../components/typography'
import { SOCIAL_ICON_MAP } from '../../../components/icons/social-icon-map.const'
import CollectionGrid from '../../../components/artists/CollectionsGrid'
import ProfileBanner from '../../../components/artists/ProfileBanner'
import { Button } from '../../../components/buttons'
import { MARKETPLACE_INFO } from '../../../constants/marketplaces'
import TableCard from '../../../components/TableCard'

const IconSummary = ({ icon, label }) => (
  <div className="flex items-end space-x-1">
    {icon}
    <label className="relative text-neutral top-[2px]"> {label}</label>
  </div>
)

const CURRENCY_LOGO = {
  SOL: <Solana />,
  ETH: <Ethereum />,
  MATIC: <Matic />,
}

const CollectionPage = () => {
  const router = useRouter()
  const [{ collections }] = useArtistCollections()
  const { id: currentId } = router.query
  const collection =
    findIdInCollection(collections.private, currentId) ||
    findIdInCollection(collections.public, currentId)
  const otherCollections = collections?.public?.filter(
    ({ id, minted }) => id != currentId && minted
  )
  const otherUpcomingCollections = collections?.private?.filter(
    ({ id, minted }) => id != currentId && minted
  )
  return (
    <Layout showNav user={{ email: 'placeholder@email.com' }}>
      <ProfileBanner
        artistName="Adam Shomer"
        bannerSrc="/artists/banner-1.jpg"
        verified
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
                    <p className="text-primary text-[14px]">
                      @{collection?.username}
                    </p>
                  </div>
                  <p className="ml-auto text-[14px]">{item.duration}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="text-primary">@{collection?.username}</p>
            </div>
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
              {!collection.status === 'public' && (
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
                  <div className="w-3 h-3">
                    {CURRENCY_LOGO[collection?.currency]}
                  </div>
                  <div className="ml-1">
                    <p className="font-[10px] mb-half text-neutral-500">
                      Starting price
                    </p>
                    <p className="text-base-content font-bold text-[1.5rem]">
                      {collection?.price} {collection?.currency}{' '}
                      <span className="font-normal text-[14px] text-neutral-500">
                        ($100.52)
                      </span>
                    </p>
                    <Button
                      as="a"
                      className="mt-2"
                      href={
                        collection?.marketplace === 'nifty'
                          ? `/collections/${currentId}`
                          : null
                      }
                    >
                      <>
                        <Www className="mr-half" /> View on{' '}
                        {MARKETPLACE_INFO[collection?.marketplace].name}
                      </>
                    </Button>
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
                              target="_blank"
                              rel="noreferrer"
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
      {otherUpcomingCollections && otherUpcomingCollections.length > 0 && (
        <>
          <H2 as="h6" className="my-2">
            Other Upcoming Drops
          </H2>
          <CollectionGrid
            collections={otherUpcomingCollections}
            expandable={false}
          />
        </>
      )}
      {otherCollections && otherCollections.length > 0 && (
        <>
          <H2 as="h6" className="mb-2">
            Other NFT Collections
          </H2>
          <CollectionGrid collections={otherCollections} expandable={false} />
        </>
      )}
    </Layout>
  )
}

export default CollectionPage
