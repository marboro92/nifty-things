import { Button } from './buttons'
import { Link } from './links'
import Input from './inputs/Input'
import { useForm } from 'react-hook-form'

const LoginForm = ({ onSubmit }) => {
  const { getValues, register } = useForm()
  const handleSubmit = () => {
    const email = getValues('email')
    const password = getValues('password')
    onSubmit({ email, password })
  }
  return (
    <div className="p-3 w-full max-w-[448px]">
      <form onSubmit={onSubmit}>
        <Input placeholder="Email" name="email" />
        <Input placeholder="Password" name="password" type="password" />
        <Button size="md" fullWidth onClick={handleSubmit} className="my-2">
          Sign in to account
        </Button>
        <Link className="mt-2 block text-center">Forgot password</Link>
      </form>
    </div>
  )
}

export default LoginForm
