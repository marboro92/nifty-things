const PillButton = ({
  as: Tag = 'button',
  size = 'sm',
  secondary = false,
  children,
  className = '',
  ...props
}) => {
  return (
    <Tag
      className={`btn btn-${size} rounded-full ${
        secondary ? 'btn-outline btn-secondary' : 'btn-primary'
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default PillButton
