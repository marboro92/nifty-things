import Image from 'next/image'
import NextLink from 'next/link'
import Head from '../../components/Head'
import { H1, Body1, Label } from '../../components/typography'
import { Button } from '../../components/buttons'
import { HeartWithCircleBg } from '../../components/icons'
import Link from '../../components/links/Link'
import { ROUTES } from '../../constants/artists-routes'
import ForArtistsHeader from '../../components/artists/ForArtistsHeader'
import content from '../../content/artists/home.json'
import SocialMediaBar from '../../components/SocialMediaBar'

const ReasonCard = ({ title, description }) => (
  <div className="artboard artboard-demo items-start gap-2 p-2 rounded">
    <HeartWithCircleBg />
    <h6 className="font-bold text-left">{title}</h6>
    <p className="text-neutral">{description}</p>
  </div>
)

const ArtistPage = () => {
  return (
    <>
      <Head title="BRIDG3 for Artists" />
      <div className="flex flex-col items-center">
        <div className="flex z-nav h-[88px] items-center justify-between fixed bg-base-100 w-full">
          <nav className="md:flex w-full items-center justify-between mx-auto px-1 max-w-[1236px]">
            <NextLink href={ROUTES.HOME} passHref>
              <a>
                <ForArtistsHeader />
              </a>
            </NextLink>
            <div className="flex items-center justify-center space-x-3">
              <Link href={ROUTES.LOGIN}>Login</Link>
              <NextLink href={ROUTES.GET_ACCESS} passHref>
                <Button as="a">Get Access</Button>
              </NextLink>
            </div>
          </nav>
        </div>
        <section className="flex w-full flex-col items-center pt-[88px] px-1">
          <div className="md:flex w-full max-w-[1236px] items-center justify-between">
            <div className="block w-full md:max-w-[50%] md:order-last">
              <Image
                layout="responsive"
                height="600px"
                width="600px"
                src="/artists/artist-intro-1.jpg"
                priority
              />
            </div>
            <div className="md:max-w-[50%] py-3 pr-1">
              <p className="uppercase text-neutral font-bold text-[14px]">
                {content.justifier}
              </p>
              <H1>{content.title}</H1>
              <Body1 className="text-neutral-700">{content.body}</Body1>
              <NextLink href={ROUTES.GET_ACCESS}>
                <Button as="a">{content.signUpCta}</Button>
              </NextLink>
            </div>
          </div>
        </section>
        <section className="flex bg-base-200 flex-col items-center w-full px-1">
          <div className="flex py-6 flex-col max-w-[1236px] items-center">
            <Label className="text-primary">{content.justifier2}</Label>
            <H1 className="max-w-[600px] text-center mt-2 mb-3">
              {content.title2}
            </H1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 px-1">
              {content.reasonsList.map(({ title, description }) => (
                <ReasonCard
                  key={title}
                  title={title}
                  description={description}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center w-full px-1">
          <div className="flex flex-col py-6 max-w-[1236px] w-full items-center divide-y divide-base-300">
            <div className="md:flex w-full justify-between">
              <div className="md:w-[50%]">
                <p className="uppercase text-neutral font-bold text-[14px]">
                  {content.contactJustifier}
                </p>
                <H1>{content.contactTitle}</H1>
                <Body1>{content.contactBody}</Body1>
              </div>
              <div className="space-x-1 space-y-1">
                <Button variant="outline">{content.privacyPolicyButton}</Button>
                <NextLink href={ROUTES.GET_ACCESS} passHref>
                  <Button>{content.signUpCta}</Button>
                </NextLink>
              </div>
            </div>
            <div className="flex w-full justify-between mt-6 pt-2">
              <SocialMediaBar
                discordLink={content.discordLink}
                facebookLink={content.facebookLink}
                instagramLink={content.instagramLink}
                twitterLink={content.twitterLink}
              />
              <p className="text-neutral-400">
                &copy;{new Date().getFullYear()} BRIDG3 Inc. All rights
                reserved.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ArtistPage
