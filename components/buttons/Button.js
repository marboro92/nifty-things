import { forwardRef } from 'react'
import { Loading } from '../icons'

const Button = (
  {
    as: Tag = 'button',
    size = 'sm',
    variant = 'primary', // secondary, outline
    fullWidth = false,
    children,
    className = '',
    loading = false,
    disabled = false,
    submit = false,
    ...props
  },
  ref
) => {
  const sizeClasses = {
    sm: 'btn-sm',
    md: 'btn-md text-[1.125rem]',
    lg: 'btn-lg',
    xl: 'btn-lg text-[1.5rem] sm:text-[2rem]',
  }
  const variantClasses = {
    primary:
      'btn-primary disabled:bg-primary-200 disabled:border-primary-200 disabled:text-base-100',
    secondary: 'btn-secondary',
    outline: 'btn-outline border-base-300 text-neutral bg-base-100',
    'primary-outline': 'btn-primary btn-outline',
  }
  return (
    <Tag
      className={`relative btn rounded font-semibold normal-case ${
        fullWidth ? 'w-full' : 'min-w-[10.75rem]'
      } ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      ref={ref}
      disabled={disabled}
      {...(Tag === 'button' && { type: submit ? 'submit' : 'button' })}
      {...props}
    >
      <span className={`flex items-center ${loading ? 'hidden' : 'visible'}`}>
        {children}
      </span>
      {loading && (
        <Loading className="absolute ml-1 h-[15px] w-[15px] inline" />
      )}
    </Tag>
  )
}

export default forwardRef(Button)
