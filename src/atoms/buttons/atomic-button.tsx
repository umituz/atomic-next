'use client'

/**
 * AtomicButton Component
 * A versatile interactive button component for Next.js applications
 * Follows atomic design principles with full client-side interactivity
 */

import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '../../utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100',
        primary: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
        destructive: 'bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600',
        outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
        ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
        link: 'bg-transparent text-blue-600 underline-offset-4 hover:underline dark:text-blue-400',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface AtomicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as a different element */
  asChild?: boolean
  /** Show loading spinner */
  loading?: boolean
  /** Icon to display on the left */
  leftIcon?: React.ReactNode
  /** Icon to display on the right */
  rightIcon?: React.ReactNode
  /** Make button full width */
  fullWidth?: boolean
}

const AtomicButton = React.forwardRef<HTMLButtonElement, AtomicButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    const isDisabled = disabled || loading

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          fullWidth && 'w-full',
          className
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <Loader2 
            className={cn(
              'animate-spin',
              size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4',
              (leftIcon || children) && 'mr-2'
            )} 
          />
        )}
        {!loading && leftIcon && (
          <span className={cn(
            'inline-flex items-center',
            size === 'sm' ? 'mr-1' : 'mr-2',
            size === 'sm' ? '[&>*]:h-3 [&>*]:w-3' : size === 'lg' ? '[&>*]:h-5 [&>*]:w-5' : '[&>*]:h-4 [&>*]:w-4'
          )}>
            {leftIcon}
          </span>
        )}
        {children}
        {!loading && rightIcon && (
          <span className={cn(
            'inline-flex items-center',
            size === 'sm' ? 'ml-1' : 'ml-2',
            size === 'sm' ? '[&>*]:h-3 [&>*]:w-3' : size === 'lg' ? '[&>*]:h-5 [&>*]:w-5' : '[&>*]:h-4 [&>*]:w-4'
          )}>
            {rightIcon}
          </span>
        )}
      </Comp>
    )
  }
)
AtomicButton.displayName = 'AtomicButton'

export { AtomicButton, buttonVariants }