import { Body1, H1 } from '../typography'
import { Button } from '../buttons'

const SomethingWentWrong = ({ onBack }) => {
  return (
    <div className="bg-primary-100 flex flex-col items-center h-screen justify-center p-2">
      <H1 size="lg" className="text-center">
        Oops! Something went wrong...
      </H1>
      <Body1 className="mt-4 text-[1.7rem]">
        We are working on resolving the problem. In the meantime, you can
        refresh or come back a little later!
      </Body1>
      <Button className="mt-5" size="md" onClick={onBack}>
        Go Back
      </Button>
    </div>
  )
}

export default SomethingWentWrong
