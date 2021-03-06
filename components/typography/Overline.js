const Overline = ({ children, className = '' }) => {
  return (
    <h6
      className={`uppercase text-neutral font-bold text-[14px] tracking-wide ${className}`}
    >
      {children}
    </h6>
  )
}

export default Overline
