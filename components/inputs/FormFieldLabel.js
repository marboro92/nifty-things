import { Label } from '../typography'

const FormFieldLabel = ({ children, className = '', required }) => {
  return (
    <Label className={`text-[16px] ml-half ${className}`}>
      {children}
      {required && <span className="ml-half text-error">*</span>}
    </Label>
  )
}

export default FormFieldLabel
