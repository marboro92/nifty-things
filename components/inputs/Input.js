import { useForm } from 'react-hook-form'
import { Label, LabelDescription } from '../typography'

const Input = ({
  label,
  description,
  name,
  error,
  errorMessage,
  placeholder,
  onChange,
  validationRules = {},
  type,
  className = '',
}) => {
  const { register } = useForm()
  return (
    <div className={`form-control w-full ${className}`}>
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
        onChange={onChange}
        type={type}
        {...register(name, validationRules)}
        className={`mt-1 input input-bordered w-full ${
          error ? 'input-error' : ''
        }`}
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
