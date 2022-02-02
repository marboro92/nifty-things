const LabelDescription = ({ children, className = '' }) => {
  return <p className={`text-tiny font-semibold ${className}`}>{children}</p>
}

export default LabelDescription
