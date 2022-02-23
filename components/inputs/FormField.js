const FormField = ({ children, className = '' }) => {
  return (
    <div className={`form-control w-full mt-1 ${className}`}>{children}</div>
  )
}

export default FormField
