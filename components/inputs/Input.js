import FormFieldDescription from './FormFieldDescription'
import FormFieldErrorHint from './FormFieldErrorHint'
import FormFieldLabel from './FormFieldLabel'
import FormField from './FormField'

const Input = ({
  className = '',
  description,
  disabled,
  error,
  errorMessage,
  icon,
  inputProps = {},
  label,
  name,
  onChange,
  placeholder,
  readonly,
  required,
  type = 'text',
  value,
}) => {
  return (
    <FormField className={className}>
      <FormFieldLabel required={required}>{label}</FormFieldLabel>
      {description && (
        <FormFieldDescription>{description}</FormFieldDescription>
      )}
      <div className="mt-1 w-full relative">
        {icon && (
          <div className="absolute translate-y-[-50%] top-1/2 translate-x-1/2 text-primary-600">
            {icon}
          </div>
        )}
        <input
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          readOnly={readonly}
          disabled={disabled}
          className={`input input-bordered w-full ${icon ? 'pl-4' : ''} ${
            error ? 'input-error' : ''
          } ${readonly ? 'input-disabled' : ''} ${
            disabled ? 'border-1 border-neutral' : ''
          } ${className}`}
          value={value}
          {...inputProps}
        />
      </div>
      {error && errorMessage && (
        <FormFieldErrorHint>{errorMessage}</FormFieldErrorHint>
      )}
    </FormField>
  )
}

export default Input
