const Button = ({
  as: Tag = 'button',
  size = 'sm',
  secondary = false,
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'btn-sm',
    lg: 'btn-lg',
  }
  return (
    <Tag
      className={`btn ${sizeClasses[size]} ${
        fullWidth ? 'w-full' : 'min-w-[10.75rem]'
      } ${secondary ? 'btn-secondary' : 'btn-primary'} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Button
