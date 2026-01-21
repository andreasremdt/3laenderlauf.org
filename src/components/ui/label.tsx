import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'label'> & {
  optional?: boolean
}

export default function Label({ children, optional, className, ...props }: Props) {
  return (
    <label
      className={cn(
        'font-title uppercase text-neutral-900 font-medium text-sm tracking-wider block mb-2',
        className,
      )}
      {...props}
    >
      {children}

      {optional ? <span className="">optional</span> : null}
    </label>
  )
}
