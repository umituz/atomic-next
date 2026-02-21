
import Link from 'next/link'
import { cn } from '../../utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const linkVariants = cva('transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', {
  variants: {
    variant: {
      default: 'text-foreground hover:text-foreground/80',
      primary: 'text-primary hover:text-primary/80',
      secondary: 'text-secondary-foreground hover:text-secondary-foreground/80',
      muted: 'text-muted-foreground hover:text-foreground',
      destructive: 'text-destructive hover:text-destructive/80',
      ghost: 'text-foreground hover:bg-accent hover:text-accent-foreground',
      underline: 'text-primary underline underline-offset-4 hover:text-primary/80',
      button: 'inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90',
    },
    size: {
      default: '',
      sm: 'text-sm',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    weight: 'normal',
  },
})

export interface AtomicLinkProps
  extends Omit<React.ComponentProps<typeof Link>, 'className'>,
    VariantProps<typeof linkVariants> {
  className?: string
  external?: boolean
  showExternalIcon?: boolean
  prefetch?: boolean
  externalIcon?: React.ReactNode
}

export const AtomicLink = React.forwardRef<
  React.ElementRef<typeof Link>,
  AtomicLinkProps
>(({
  className,
  variant,
  size,
  weight,
  external = false,
  showExternalIcon = false,
  prefetch = true,
  externalIcon,
  children,
  href,
  ...props
}, ref) => {
  
  const isExternalUrl = typeof href === 'string' && (href.startsWith('http') || href.startsWith('//'))
  const shouldBeExternal = external || isExternalUrl
  
  const linkProps = {
    className: cn(linkVariants({ variant, size, weight }), className),
    ref,
    ...props,
  }

  const content = (
    <>
      {children}
      {shouldBeExternal && showExternalIcon && (
        <span className="ml-1 inline-block">
          {externalIcon || (
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          )}
        </span>
      )}
    </>
  )

  if (shouldBeExternal) {
    return (
      <a
        href={href as string}
        target="_blank"
        rel="noopener noreferrer"
        {...linkProps}
      >
        {content}
      </a>
    )
  }

  return (
    <Link
      href={href}
      prefetch={prefetch}
      {...linkProps}
    >
      {content}
    </Link>
  )
})

AtomicLink.displayName = 'AtomicLink'

export { linkVariants }