import { Label, LabelDescription } from '../typography'

const Input = ({
  label,
  description,
  name,
  error,
  errorMessage,
  placeholder,
  onChange,
  inputProps = {},
  type,
  className = '',
}) => {
  return (
    <div className={`form-control w-full ${className}`}>
      <Label>{label}</Label>
      {description && (
        <LabelDescription className="mt-half text-neutral">
          {description}
        </LabelDescription>
      )}
      <input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        className={`mt-1 input input-bordered w-full ${
          error ? 'input-error' : ''
        }`}
        {...inputProps}
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
