const FormFieldErrorHint = ({ children, className = '' }) => {
  return (
    <label className="label ml-half">
      <span className={`label-text-alt text-xs text-error ${className}`}>
        {children}
      </span>
    </label>
  )
}

export default FormFieldErrorHint
