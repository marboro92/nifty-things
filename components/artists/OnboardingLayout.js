const OnboardingLayout = ({ children, footer }) => {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen">
      <div className="flex flex-col items-center justify-center md:w-[880px] min-h-[700px]">
        {children}
        <div className="grid grid-cols-2 gap-3 md:gap-[20%] mt-auto w-full justify-between self-end">
          {footer}
        </div>
      </div>
    </div>
  )
}

export default OnboardingLayout
