import Image from 'next/image'
import { H1 } from '../../components/typography'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { CURRENCY_LOGO } from '../../components/icons/currency-icon-map'
import { useEffect, useState } from 'react'
import TableCard from '../../components/TableCard'
import { Fraction } from '../../components/icons'
import { Button } from '../../components/buttons'
import { getPublicCollection } from '../../utils/api'
import content from '../../content/marketplace/confirm.json'

const ConfirmSection = ({ collection, loading, onConfirm }) => (
  <>
    <H1 className="mt-5">{content.title}</H1>
    <h3 className="font-bold text-[1.2rem] pt-3">{content.subtitle}</h3>
    <div className="flex mt-4">
      <div>
        <Image
          layout="fixed"
          height="512px"
          width="512px"
          src={collection.coverImgSrc}
          className="mt-2 rounded-lg"
          priority
        />
      </div>
      <div className="space-y-2 p-2 w-full">
        <TableCard
          header={
            <>
              <Fraction />
              <label className="font-bold text-primary ml-half">
                {content.descriptionTitle}
              </label>
            </>
          }
        >
          {collection?.description}
        </TableCard>
        <TableCard
          header={
            <>
              <Fraction />
              <span className="font-bold text-primary ml-half">
                {content.priceTitle}
              </span>
            </>
          }
        >
          <div className="flex">
            <div className="w-3 h-3">{CURRENCY_LOGO[collection?.currency]}</div>
            <div className="ml-1">
              <p className="font-[10px] mb-half text-neutral-500">
                {content.priceDescription}
              </p>
              <p className="text-base-content font-bold text-[1.5rem]">
                {collection?.price} {collection?.currency}{' '}
                <span className="font-normal text-[14px] text-neutral-500">
                  ($100.52)
                </span>
              </p>
            </div>
          </div>
        </TableCard>
      </div>
    </div>
    <div className="flex w-full justify-end px-3 py-2">
      <Button loading={loading} onClick={onConfirm}>
        {content.confirmButton}
      </Button>
    </div>
  </>
)

const Minted = ({ collection, onContinue }) => (
  <div className="flex flex-col items-center space-y-2">
    <H1 size="md">{content.successTitle}</H1>
    <h3 className="font-bold text-[1.5rem] px-2 pt-1 pb-2">
      {content.successSubtitle}
    </h3>
    <div>
      <Image
        layout="fixed"
        height="512px"
        width="512px"
        src={collection.coverImgSrc}
        className="mt-2 rounded-lg"
        priority
      />
    </div>
    <Button size="md" onClick={onContinue}>
      {content.successButton}
    </Button>
  </div>
)

const ConfirmPage = () => {
  const router = useRouter()
  const { id: currentId } = router.query
  const [loading, setLoading] = useState(false)
  const [minted, setMinted] = useState(false)
  const [collection, setCollection] = useState(null)

  useEffect(async () => {
    try {
      const data = await getPublicCollection(currentId)
      setCollection(data)
    } catch (e) {
      console.error(e)
    }
  }, [currentId])

  const onConfirm = async () => {
    try {
      setLoading(true)
      setMinted(true)
      //TODO: replace with SC call buy
    } catch (e) {
      console.error(e)
    }
    setLoading(false)
  }
  return (
    <Layout>
      <div className="h-full md:my-3 pl-4 pr-1 max-w-[1236px] mx-auto">
        {collection && !minted && (
          <ConfirmSection
            collection={collection}
            onConfirm={onConfirm}
            loading={loading}
          />
        )}
        {collection && minted && (
          <Minted
            collection={collection}
            onContinue={() => router.push('/discover')}
          />
        )}
      </div>
    </Layout>
  )
}

export default ConfirmPage
