const Label = ({ children, className = '' }) => {
  return <label className={`text-xs font-bold ${className}`}>{children}</label>
}

export default Label
