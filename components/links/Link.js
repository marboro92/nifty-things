import { forwardRef } from 'react'

const Link = forwardRef(
  ({ as: Tag = 'a', children, className = '', ...props }, ref) => {
    return (
      <Tag
        className={`text-primary rounded hover:underline ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </Tag>
    )
  }
)

export default Link
