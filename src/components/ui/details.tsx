'use client'

import { useState, type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
import Icon from './icon'

type Props = ComponentPropsWithoutRef<'details'> & {
  title: string
}

export default function Details({ children, title, className, ...props }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <details
      className={cn('bg-neutral-50 border-b border-neutral-200 group last:border-b-0', className)}
      open={open}
      onToggle={() => setOpen(!open)}
      {...props}
    >
      <summary className="text-2xl font-bold font-title uppercase text-neutral-900 px-8 py-6 cursor-pointer list-none flex justify-between items-center group-open:bg-amber-300">
        {title} <Icon name={open ? 'minus' : 'plus'} className="size-6" />
      </summary>
      <div className="p-4">{children}</div>
    </details>
  )
}
