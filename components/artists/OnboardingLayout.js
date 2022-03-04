import Head from '../Head'
import ForArtistsHeader from './ForArtistsHeader'

const OnboardingLayout = ({ children, footer }) => {
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <Head title="BRID3 for Artists" />
      <div className="self-start">
        <ForArtistsHeader />
      </div>
      <div className="flex flex-col self-center my-auto items-center justify-center md:w-[880px] min-h-[700px]  p-1">
        {children}
        <div className="grid grid-cols-2 gap-3 md:gap-[20%] mt-auto w-full justify-between self-end">
          {footer}
        </div>
      </div>
    </div>
  )
}

export default OnboardingLayout
