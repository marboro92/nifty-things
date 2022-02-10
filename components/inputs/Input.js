import { Label, LabelDescription } from '../typography'

const Input = ({
  label,
  description,
  name,
  error,
  placeholder,
  className = '',
}) => {
  return (
    <div class={`form-control ${className}`}>
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
        class={`mt-1 input input-bordered ${error ? 'input-error' : ''}`}
      />
      {error && errorMessage && (
        <label class="label">
          <span class="label-text-alt">{errorMessage}</span>
        </label>
      )}
    </div>
  )
}

export default Input
