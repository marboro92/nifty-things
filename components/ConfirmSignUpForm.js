import { Button } from './buttons'
import Input from './inputs/Input'
import { H2 } from './typography'
import { useForm } from 'react-hook-form'

const AgreementText = ({ children }) => (
  <p className="text-neutral-500 my-1 text-[14px]">{children}</p>
)

const ConfirmSignUpForm = ({ onSubmit, email, errorMessage }) => {
  const { getValues, register } = useForm()
  const handleSubmit = () => {
    const code = getValues('code')
    onSubmit({ code })
  }
  return (
    <div className="artboard-demo p-3 max-w-[448px]">
      <div className="flex w-full pb-1">
        <H2>Confirm your Account</H2>
      </div>
      <p>A confirmation code was sent to your email ({email}).</p>
      <Input
        placeholder="Confirmation code"
        name="code"
        inputProps={register('code')}
      />
      {errorMessage && <p className="pt-1 text-error">{errorMessage}</p>}
      <Button size="md" fullWidth onClick={handleSubmit} className="my-2">
        Confirm
      </Button>
    </div>
  )
}

export default ConfirmSignUpForm
