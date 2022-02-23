import Link from 'next/link'
import { useState } from 'react'
import { MenuButton, PillButton } from '.'
import Head from '../Head'
import Sidebar from '../sidebar/Sidebar'
import Player from '../player/Player'

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
        className={`w-[20px] h-[5px] border-b-2 ${
          selected ? 'border-primary' : 'border-transparent'
        }`}
      ></div>
    </div>
  )
}

export default forwardRef(Tab)
