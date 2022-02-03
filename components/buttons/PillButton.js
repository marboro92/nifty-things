const PillButton = ({
  as: Tag = 'button',
  size = 'sm',
  secondary = false,
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
      className={`btn ${sizeClasses[size]} rounded-full ${
        secondary ? 'btn-outline btn-secondary' : 'btn-primary'
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default PillButton
