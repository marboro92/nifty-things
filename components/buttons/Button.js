import { forwardRef } from 'react'

const Button = forwardRef(
  (
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
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      outline: 'btn-outline border-base-300 text-neutral bg-base-100',
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
)

export default Button
