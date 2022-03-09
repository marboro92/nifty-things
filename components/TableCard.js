const TableCard = ({ children, header, className }) => (
  <div
    className={`border border-neutral-400 rounded-lg overflow-auto ${className}`}
  >
    <div
      className={`bg-neutral-100 ${
        children ? 'border-b' : ''
      } border-neutral-400 border-b-1 p-1 flex items-center`}
    >
      {header}
    </div>
    {children && (
      <div className="p-2 text-neutral bg-primary-100">{children}</div>
    )}
  </div>
)

export default TableCard
