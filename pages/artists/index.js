import Image from 'next/image'
import Head from '../../components/Head'
import { H1, H2, Body1, Label } from '../../components/typography'
import { Button } from '../../components/buttons'
import { HeartWithCircleBg } from '../../components/icons'

const REASON_CONTENT = [
  {
    title: 'Build your audience at any stage',
    description: `A guide to the three key pathways for getting discovered on
    NiftyTunes — plus a few steps you can take now to grow your
    audience and what makes us different.`,
  },
  {
    title: 'Inspire fans with your creativity',
    description: `With our profile tools, you can change your bio and photos whenever inspiration strikes. Let fans know the real you through music.`,
  },
  {
    title: 'Learn from your fans',
    description: `Find out how your songs are performing, how you’re being discovered, and where your audience is through our Artists Dashboard.`,
  },
  {
    title: 'Artist Friendly. User. Friendly.',
    description: `A Familiar DSP Interface With Revolutionizing Web 3.0 Technology. Show Your Potential Now.`,
  },
  {
    title: 'End 2 End Artist Suite.',
    description: `Upload and sell their music as NFTs. Our artist suite allows users to launch their collections, songs, playlists, you name it.`,
  },
  {
    title: 'Multi-Wallet Compatibility',
    description: `Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.`,
  },
]

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
      <Head title="NiftyTunes for Artists" />
      <div className="flex flex-col items-center">
        <div className="flex z-nav h-[88px] items-center justify-between fixed bg-base-100 w-full">
          <nav className="flex w-full items-center justify-between mx-auto max-w-[1236px]">
            <h5 className="text-[24px]">
              <span className="font-bold">NiftyTunes</span> for Artists
            </h5>
            <div className="space-x-1">
              <Button className="btn-outline">Login</Button>
              <Button>Get Access</Button>
            </div>
          </nav>
        </div>
        <section className="flex flex-col items-center pt-[88px] px-1">
          <div className="flex max-w-[1236px] items-center gap-2">
            <div className="w-[60%]">
              <p className="uppercase text-neutral font-bold text-[14px]">
                Made to be found
              </p>
              <H1>Learn how Music Fans Discover your Music.</H1>
              <Body1>
                A guide to the three key pathways for getting discovered on
                NiftyTunes — plus a few steps you can take now to grow your
                audience and what makes us different.
              </Body1>
              <Button>Get Started</Button>
            </div>
            <div className="w-[600px]">
              <Image
                layout="responsive"
                height="600px"
                width="600px"
                src="https://picsum.photos/id/452/600/600"
              />
            </div>
          </div>
        </section>
        <section className="flex bg-base-200 flex-col items-center w-full px-1">
          <div className="flex py-6 flex-col max-w-[1236px] items-center">
            <Label className="text-primary">Why NiftyTunes?</Label>
            <H1 className="max-w-[600px] text-center mt-2 mb-3">
              It changes the way of what true ownership means.
            </H1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 px-1">
              {REASON_CONTENT.map(({ title, description }) => (
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
            <div className="flex w-full justify-between">
              <div className="">
                <p className="uppercase text-neutral font-bold text-[14px]">
                  Have any questions?
                </p>
                <H1>We're Happy to Help!</H1>
                <Body1>
                  Please feel free to contact us at any time using one of our
                  social media links below
                </Body1>
              </div>
              <div>
                <Button>Privacy Policy</Button>
                <Button>Get Access</Button>
              </div>
            </div>
            <div className="flex w-full justify-between mt-6 pt-2">
              <p>[Social Media Links]</p>
              <p className="text-neutral">
                &copy;{new Date().getFullYear()} Nifty Tunes Inc. All rights
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