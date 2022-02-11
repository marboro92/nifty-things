import { Label, LabelDescription } from '../typography'

const Input = ({
  label,
  description,
  name,
  error,
  errorMessage,
  placeholder,
  className = '',
}) => {
  return (
    <div className={`form-control ${className}`}>
      <Label>{label}</Label>
      {description && (
        <LabelDescription className="mt-half text-neutral">
          {description}
        </LabelDescription>
      )}
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className={`mt-1 input input-bordered ${error ? 'input-error' : ''}`}
      />
      {error && errorMessage && (
        <label className="label">
          <span className="label-text-alt text-xs text-error">
            {errorMessage}
          </span>
        </label>
      )}
    </div>
  )
}

export default Input
