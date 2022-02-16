import { Button } from './buttons'
import { Link } from './links'
import Input from './inputs/Input'

const LoginForm = ({ onSubmit }) => {
  return (
    <div className="p-3 w-full max-w-[448px]">
      <form onSubmit={onSubmit}>
        <Input placeholder="Email" name="email" />
        <Input placeholder="Password" name="password" />
        <Button size="md" fullWidth type="submit" className="my-2">
          Sign in to account
        </Button>
        <Link className="mt-2 block text-center">Forgot password</Link>
      </form>
    </div>
  )
}

export default LoginForm
