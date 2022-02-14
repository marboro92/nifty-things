const Button = ({
  as: Tag = 'button',
  size = 'sm',
  variant = 'primary', // secondary, outline
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'btn-sm',
    lg: 'btn-lg',
  }
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline border-base-300 text-neutral',
  }
  return (
    <Tag
      className={`btn ${sizeClasses[size]} rounded font-semibold normal-case ${
        fullWidth ? 'w-full' : 'min-w-[10.75rem]'
      } ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Button
