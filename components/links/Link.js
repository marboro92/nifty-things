const Link = ({ as: Tag = 'a', children, className = '', ...props }) => {
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
