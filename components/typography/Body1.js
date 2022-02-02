const Body1 = ({ children, className = '' }) => {
  return (
    <p className={`text-base text-neutral my-1 ${className}`}>{children}</p>
  )
}

export default Body1
