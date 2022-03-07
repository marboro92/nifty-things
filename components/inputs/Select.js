import FormFieldDescription from './FormFieldDescription'
import FormFieldErrorHint from './FormFieldErrorHint'
import FormFieldLabel from './FormFieldLabel'
import FormField from './FormField'

const Select = ({
  className = '',
  children,
  description,
  disabled,
  error,
  errorMessage,
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
        <select
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          readOnly={readonly}
          disabled={disabled}
          className={`select select-bordered w-full ${
            error ? 'input-error' : ''
          } ${readonly ? 'input-disabled' : ''} ${
            disabled ? 'border-1 border-neutral' : ''
          } ${className}`}
          value={value}
          {...inputProps}
        >
          {children}
        </select>
      </div>

      {error && errorMessage && (
        <FormFieldErrorHint>{errorMessage}</FormFieldErrorHint>
      )}
    </FormField>
  )
}

export default Select
