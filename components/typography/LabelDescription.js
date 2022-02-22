const LabelDescription = ({ children, size = 'sm', className = '' }) => {
  const sizeClasses = {
    sm: 'text-tiny',
    lg: 'text-[1.25rem]',
  }
  return (
    <p className={`${sizeClasses[size]} font-semibold ${className}`}>
      {children}
    </p>
  )
}

export default LabelDescription
