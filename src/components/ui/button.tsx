import { cn } from '@/lib/utils'
import Link from 'next/link'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type BaseProps = {
  variant?: 'primary' | 'secondary'
  children: ReactNode
  className?: string
}

type ButtonProps = BaseProps &
  ComponentPropsWithoutRef<'button'> & {
    href?: never
  }

type LinkProps = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, 'href'> & {
    href: string
    type?: never
  }

type Props = ButtonProps | LinkProps

export default function Button({
  children,
  className,
  type = 'button',
  variant = 'primary',
  href,
  ...props
}: Props) {
  const baseClasses = cn(
    'font-title uppercase font-bold px-4 py-2 cursor-pointer',
    {
      'bg-amber-300 text-neutral-800 hover:bg-amber-400 focus-visible:bg-amber-400':
        variant === 'primary',
      'bg-white text-neutral-900 hover:bg-neutral-100 focus-visible:bg-neutral-100':
        variant === 'secondary',
    },
    className,
  )

  if (href) {
    return (
      <Link
        prefetch={href ? href.startsWith('/') : undefined}
        href={href}
        className={baseClasses}
        {...(props as Omit<ComponentPropsWithoutRef<typeof Link>, 'href'>)}
      >
        {children}
      </Link>
    )
  }

  return (
    <button className={baseClasses} type={type} {...(props as ComponentPropsWithoutRef<'button'>)}>
      {children}
    </button>
  )
}
