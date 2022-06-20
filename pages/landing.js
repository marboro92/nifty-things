import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Button } from '../components/buttons'
import Head from '../components/Head'
import Nav from '../components/Nav'
import SocialMediaBar from '../components/SocialMediaBar'
import { H1, Body1 } from '../components/typography'
import { ROUTES } from '../constants/creator-routes'
import content from '../content/landing.json'

const GeneralLandingPage = () => {
  const router = useRouter()

  return (
    <>
      <Head title="NiftyTunes" nifty />
      <div className="flex flex-col min-h-screen">
        <Nav homeHref="/" />
        <div className="flex flex-col items-center justify-center h-[60vh] min-h-[400px] md:min-h-[500px] bg-primary-400">
          <h1 className="text-base-100 font-bold text-center text-[2.5rem] md:text-[4rem]">
            {content.title}
          </h1>
          <h2 className="text-[1.3rem] text-base-100 my-1">{content.body}</h2>
          <button
            className="btn btn-primary btn-sm rounded-full bg-primary-500 text-base-100 tracking-widest font-normal hover:bg-primary-600 mt-3 px-2"
            onClick={() => router.push('/discover')}
          >
            {content.fansButton}
          </button>
        </div>
        <section className="flex flex-col items-center w-full px-1 max-w-[1236px] mx-auto">
          <div className="flex flex-col pt-6 pb-2 max-w-[1236px] w-full items-center divide-y divide-base-300">
            <div className="md:flex w-full justify-between">
              <div className="md:w-[50%]">
                <p className="uppercase text-primary font-bold text-[14px]">
                  {content.contactJustifier}
                </p>
                <H1>{content.contactTitle}</H1>
                <Body1>{content.contactBody}</Body1>
              </div>
              <div className="mt-3">
                <NextLink href={ROUTES.HOME} passHref>
                  <Button>{content.creatorButton}</Button>
                </NextLink>
              </div>
            </div>
            <div className="flex flex-col mt-6 sm:flex-row w-full justify-between pt-2">
              <SocialMediaBar
                discordLink={content.discordLink}
                facebookLink={content.facebookLink}
                instagramLink={content.instagramLink}
                twitterLink={content.twitterLink}
              />
              <p className="text-neutral-400 mt-2 sm:mt-1">
                &copy;{new Date().getFullYear()} NiftyTunes Inc. All rights
                reserved.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default GeneralLandingPage
