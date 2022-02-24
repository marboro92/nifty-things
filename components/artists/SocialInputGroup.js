import FormFieldDescription from '../inputs/FormFieldDescription'
import FormFieldErrorHint from '../inputs/FormFieldErrorHint'
import FormFieldLabel from '../inputs/FormFieldLabel'
import FormField from '../inputs/FormField'
import { SOCIAL_ICON_MAP } from '../icons/social-icon-map.const'

const SocialInputGroup = ({
  children,
  className = '',
  description,
  error,
  errorMessage,
  label,
  required,
}) => {
  return (
    <FormField className={className}>
      <FormFieldLabel required={required}>{label}</FormFieldLabel>
      {description && (
        <FormFieldDescription>{description}</FormFieldDescription>
      )}
      <div className="input input-bordered h-auto divide-y space-y-[4px] pt-[2px] mt-2 p-[0]">
        {children}
      </div>
      {error && errorMessage && (
        <FormFieldErrorHint>{errorMessage}</FormFieldErrorHint>
      )}
    </FormField>
  )
}

const socialPlaceholderMap = {
  web: 'yoursite.com',
  discord: 'https://www.discord.gg/Username#1234',
  instagram: 'https://www.instagram.com/YourInstagramHandle',
  twitter: 'https://www.twitter.com/YourTwitterHandle',
  tiktok: 'https://www.tiktok.com/YourTikTokHandle',
}

const SocialInputGroupInput = ({
  name,
  platform = 'web',
  placeholder,
  onChange,
  className,
  inputProps,
}) => (
  <div className="w-full relative">
    <div className="absolute translate-y-[-50%] top-1/2 translate-x-1/2 text-neutral">
      {SOCIAL_ICON_MAP[platform]}
    </div>
    <input
      name={name}
      placeholder={placeholder || socialPlaceholderMap[platform]}
      onChange={onChange}
      type="text"
      className={`input focused:z-10 w-full pl-[2.9rem] ${className}`}
      {...inputProps}
    />
  </div>
)

SocialInputGroup.Input = SocialInputGroupInput

export default SocialInputGroup
