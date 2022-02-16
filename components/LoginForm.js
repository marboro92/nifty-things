import { Button } from './buttons'
import { Link } from './links'
import Input from './inputs/Input'
import { useForm } from 'react-hook-form'

const LoginForm = ({ onSubmit, errorMessage }) => {
  const { getValues, register } = useForm()
  const handleSubmit = () => {
    const email = getValues('email')
    const password = getValues('password')
    onSubmit({ email, password })
  }
  return (
    <div className="p-3 w-full max-w-[448px]">
      <Input placeholder="Email" name="email" inputProps={register('email')} />
      <Input
        placeholder="Password"
        name="password"
        type="password"
        inputProps={register('password')}
      />
      {errorMessage && <p className="pt-1 text-error">{errorMessage}</p>}
      <Button size="md" fullWidth onClick={handleSubmit} className="my-2">
        Sign in to account
      </Button>
      <Link className="mt-2 block text-center">Forgot password</Link>
    </div>
  )
}

export default LoginForm
