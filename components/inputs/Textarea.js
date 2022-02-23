import { Label } from '../typography'
import FormFieldDescription from './FormFieldDescription'
import FormFieldErrorHint from './FormFieldErrorHint'
import FormFieldLabel from './FormFieldLabel'
import FormField from './FormField'

const Input = ({
  className = '',
  description,
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
}) => {
  return (
    <FormField className={className}>
      <FormFieldLabel required={required}>{label}</FormFieldLabel>
      {description && (
        <FormFieldDescription>{description}</FormFieldDescription>
      )}
      <textarea
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        className={`mt-1 textarea textarea-bordered resize-none h-[116px] w-full ${
          error ? 'input-error' : ''
        }`}
        readOnly={readonly}
        {...inputProps}
      />
      {error && errorMessage && (
        <FormFieldErrorHint>{errorMessage}</FormFieldErrorHint>
      )}
    </FormField>
  )
}

export default Input
