const Button = ({
  as: Tag = 'button',
  size = 'sm',
  secondary = false,
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  return (
    <Tag
      className={`btn btn-${size} ${
        fullWidth ? 'w-full' : 'min-w-[10.75rem]'
      } ${secondary ? 'btn-secondary' : 'btn-primary'} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Button
