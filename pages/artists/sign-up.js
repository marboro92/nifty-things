import SignUpForm from '../../components/SignUpForm'

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-1 bg-base-200">
      <h5 className="sm:text-[24px] mb-3">
        <span className="font-bold">NiftyTunes</span> for Artists.
      </h5>
      <SignUpForm />
    </div>
  )
}

export default SignUpPage
