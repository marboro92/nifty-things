const FormFieldDescription = ({ children, className = '' }) => {
  return (
    <p className={`mt-half text-[12px] ml-half ${className}`}>{children}</p>
  )
}

export default FormFieldDescription
