import { forwardRef } from 'react'

const Button = (
  {
    as: Tag = 'button',
    size = 'sm',
    variant = 'primary', // secondary, outline
    fullWidth = false,
    children,
    className = '',
    ...props
  },
  ref
) => {
  const sizeClasses = {
    sm: 'btn-sm',
    md: 'btn-md text-[1.125rem]',
    lg: 'btn-lg',
    xl: 'btn-lg text-[2rem]',
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
      className={`btn rounded font-semibold normal-case ${
        fullWidth ? 'w-full' : 'min-w-[10.75rem]'
      } ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default forwardRef(Button)
