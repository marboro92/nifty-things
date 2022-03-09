import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Button } from '../components/buttons'
import Head from '../components/Head'
import Nav from '../components/Nav'
import SocialMediaBar from '../components/SocialMediaBar'
import { H1, Body1 } from '../components/typography'
import { ROUTES } from '../constants/artists-routes'
import content from '../content/landing.json'

const GeneralLandingPage = () => {
  const router = useRouter()

  return (
    <>
      <Head title="NiftyTunes" nifty />
      <Nav homeHref="/" />
      <div className="flex flex-col items-center justify-center h-[600px] bg-primary-400">
        <h1 className="text-base-100 font-bold text-[4rem]">{content.title}</h1>
        <h2 className="text-[1.3rem] text-base-100 my-1">{content.body}</h2>
        <button
          className="btn btn-primary btn-sm rounded-full bg-primary-500 text-base-100 tracking-widest font-normal hover:bg-primary-600 mt-3 px-2"
          onClick={() => router.push('/discover')}
        >
          {content.fansButton}
        </button>
      </div>
      <section className="flex flex-col items-center w-full px-1 max-w-[1236px] mx-auto">
        <div className="flex flex-col py-6 max-w-[1236px] w-full items-center divide-y divide-base-300">
          <div className="md:flex w-full justify-between">
            <div className="md:w-[50%]">
              <p className="uppercase text-primary font-bold text-[14px]">
                {content.contactJustifier}
              </p>
              <H1>{content.contactTitle}</H1>
              <Body1>{content.contactBody}</Body1>
            </div>
            <div className="space-x-1 space-y-1">
              <NextLink href={ROUTES.HOME} passHref>
                <Button>{content.artistsButton}</Button>
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
              &copy;{new Date().getFullYear()} NiftyTunes Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default GeneralLandingPage
