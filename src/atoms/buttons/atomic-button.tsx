/**
 * AtomicButton Component
 * A versatile button component following atomic design principles
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
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
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