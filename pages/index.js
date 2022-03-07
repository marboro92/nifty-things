import { useRouter } from 'next/router'
import { Button } from '../components/buttons'
import Head from '../components/Head'
import { H1, Body1 } from '../components/typography'
import { ROUTES } from '../constants/artists-routes'
import content from '../content/landing.json'

const GeneralLandingPage = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-200">
      <Head title="BRIDG3" />
      <div className="flex flex-col items-center justify-center p-5 space-y-2 artboard-demo">
        <H1 size="md">{content.title}</H1>
        <Body1 className="text-[1.3rem] pt-1 pb-2">{content.body}</Body1>
        <div className="grid grid-cols-2 w-full gap-2">
          <Button size="md" fullWidth onClick={() => router.push(ROUTES.HOME)}>
            {content.artistsButton}
          </Button>
          <Button size="md" fullWidth onClick={() => router.push('/user')}>
            {content.fansButton}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default GeneralLandingPage
