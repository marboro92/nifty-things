import { useState } from 'react'
import { Input } from '.'
import { Copy } from '../icons'

const CopyTextInput = ({ onClick, value, ...props }) => {
  const [copySuccess, setCopySuccess] = useState()
  const handleClick = async (e) => {
    if (onClick) onClick(e)
    try {
      await navigator.clipboard.writeText(value)
      setCopySuccess('Copied!')
      setTimeout(() => setCopySuccess(null), 3000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }
  return (
    <div className="relative">
      <Input
        {...props}
        value={value}
        inputProps={{ onClick: handleClick }}
        icon={<Copy />}
        readonly
      />
      <span
        className={`transition-opacity ${
          copySuccess ? 'opacity-100' : 'opacity-0'
        } absolute rounded-lg p-half text-[14px] text-primary bg-primary-100 bottom-1 right-1 pointer-events-none`}
      >
        {copySuccess}
      </span>
    </div>
  )
}

export default CopyTextInput
