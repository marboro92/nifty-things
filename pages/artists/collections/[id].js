import Image from 'next/image'
import { useRouter } from 'next/router'
import H2 from '../../../components/typography/H2'
import Layout from '../../../components/artists/Layout'
import { MOCK_COLLECTIONS } from '../../../mock-data/mock-collections'
import { useArtistCollections } from '../../../contexts/ArtistCollectionsContext'
import {
  Fraction,
  Heart,
  LinkedIn,
  Lock,
  Multiuser,
  PlayButton,
  Solana,
  User,
} from '../../../components/icons'
import { H1 } from '../../../components/typography'

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
  return (
    <Layout showNav user={{ email: 'placeholder@email.com' }}>
      <Image
        layout="fixed"
        height="176px"
        width="1236px"
        src="/artists/banner-1.jpg"
      />
      {collection && (
        <div className="flex w-full gap-3 mt-5">
          <div>
            <Image
              layout="fixed"
              height="512px"
              width="512px"
              src={collection.coverImgSrc}
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
                icon={<Multiuser />}
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
              {/* TODO: ADD SOCIAL */}
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
    </Layout>
  )
}

export default CollectionPage
