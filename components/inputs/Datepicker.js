import ReactDatePicker from 'react-datepicker'
import FormFieldDescription from './FormFieldDescription'
import FormFieldErrorHint from './FormFieldErrorHint'
import FormFieldLabel from './FormFieldLabel'
import FormField from './FormField'
import { useState, forwardRef } from 'react'
import 'react-datepicker/dist/react-datepicker.css'

const Datepicker = ({
  className = '',
  description,
  error,
  errorMessage,
  label,
  required,
  minDate = new Date(),
  onChange,
  value,
}) => {
  return (
    <FormField className={`nifty-datepicker ${className}`}>
      <FormFieldLabel required={required}>{label}</FormFieldLabel>
      {description && (
        <FormFieldDescription>{description}</FormFieldDescription>
      )}
      <ReactDatePicker
        minDate={minDate}
        customInput={
          <input className="input input-bordered mt-1 w-full max-w-full" />
        }
        dateFormat="MMMM do, yyyy"
        onChange={onChange}
        selected={value}
      />
      {error && errorMessage && (
        <FormFieldErrorHint>{errorMessage}</FormFieldErrorHint>
      )}
    </FormField>
  )
}

export default forwardRef(Datepicker)
