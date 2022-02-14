const Link = ({ as: Tag = 'button', children, className = '', ...props }) => {
  return (
    <Tag
      className={`text-primary rounded hover:bg-base-200 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Link
