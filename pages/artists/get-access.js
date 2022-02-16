import NextLink from 'next/link'
import { Button } from '../../components/buttons'
import { H1 } from '../../components/typography'

const HelpLink = ({ children, href = '/' }) => (
  <a className="block underline text-neutral text-center" href={href}>
    {children}
  </a>
)

const GetAccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-1">
      <div className="absolute top-1 self-end">
        <p className="font-bold text-neutral-700">
          Already part of a team?{' '}
          <a href="/login" className="font-bold text-primary">
            Login
          </a>
        </p>
      </div>
      <H1 className="text-[3rem] text-center">
        Get Access to Nifty Tunes for Artists.
      </H1>
      <p className="font-bold text-neutral-700">First, tell us who you are.</p>
      <div className="space-y-2 py-6">
        <NextLink href="/artists/signup">
          <Button fullWidth size="xl">
            Artist or Manager
          </Button>
        </NextLink>
        <NextLink href="/artists/signup">
          <Button fullWidth size="xl">
            Label Team Member
          </Button>
        </NextLink>
      </div>
      <HelpLink>If your team already exists, ask an admin for access.</HelpLink>
      <HelpLink>Not sure which to choose?</HelpLink>
    </div>
  )
}

export default GetAccessPage
