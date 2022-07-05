import { forwardRef } from 'react'

const Tab = (
  { as: Tag = 'button', selected, children, className = '', ...props },
  ref
) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Tag className={`font-bold`} ref={ref} {...props}>
        {children}
      </Tag>
      <div
        className={`w-[20px] h-[5px] border-b-2 transition ${
          selected ? 'border-primary scale-100' : 'border-transparent scale-0'
        }`}
      ></div>
    </div>
  )
}

export default forwardRef(Tab)
