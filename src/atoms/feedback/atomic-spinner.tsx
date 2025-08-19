'use client'

/**
 * AtomicSpinner Component
 * A loading spinner component for Next.js applications
 * Uses CSS animations and requires client-side rendering
 */

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '../../utils/cn'

const spinnerVariants = cva('animate-spin', {
  variants: {
    size: {
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      default: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-8 w-8',
      xxl: 'h-12 w-12',
    },
    color: {
      default: 'text-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary-foreground',
      muted: 'text-muted-foreground',
      white: 'text-white',
      success: 'text-green-600',
      warning: 'text-amber-600',
      error: 'text-red-600',
    },
  },
  defaultVariants: {
    size: 'default',
    color: 'default',
  },
})

export interface AtomicSpinnerProps
  extends Omit<React.SVGProps<SVGSVGElement>, 'color'>,
    VariantProps<typeof spinnerVariants> {
  /** Loading text to display alongside spinner */
  label?: string
  /** Show spinner inline with text */
  inline?: boolean
  /** Custom spinner icon */
  icon?: React.ComponentType<any>
}

const AtomicSpinner = React.forwardRef<SVGSVGElement, AtomicSpinnerProps>(
  (
    {
      className,
      size,
      color,
      label,
      inline = false,
      icon: Icon = Loader2,
      ...props
    },
    ref
  ) => {
    const spinner = (
      <Icon
        ref={ref}
        className={cn(spinnerVariants({ size, color }), className)}
        {...props}
      />
    )

    if (!label) {
      return spinner
    }

    return (
      <div className={cn(
        'flex items-center gap-2',
        inline ? 'inline-flex' : 'flex'
      )}>
        {spinner}
        <span className={cn(
          'text-sm',
          color === 'muted' ? 'text-muted-foreground' : 
          color === 'white' ? 'text-white' :
          color === 'primary' ? 'text-primary' :
          'text-foreground'
        )}>
          {label}
        </span>
      </div>
    )
  }
)
AtomicSpinner.displayName = 'AtomicSpinner'

// Preset spinner components for common use cases
export const AtomicButtonSpinner = React.forwardRef<
  SVGSVGElement,
  Omit<AtomicSpinnerProps, 'size' | 'color'>
>(({ className, ...props }, ref) => (
  <AtomicSpinner
    ref={ref}
    size="sm"
    color="white"
    className={cn('mr-2', className)}
    {...props}
  />
))
AtomicButtonSpinner.displayName = 'AtomicButtonSpinner'

export const AtomicPageSpinner = React.forwardRef<
  SVGSVGElement,
  Omit<AtomicSpinnerProps, 'size'>
>(({ className, ...props }, ref) => (
  <div className="flex items-center justify-center p-8">
    <AtomicSpinner
      ref={ref}
      size="lg"
      className={className}
      {...props}
    />
  </div>
))
AtomicPageSpinner.displayName = 'AtomicPageSpinner'

export const AtomicInlineSpinner = React.forwardRef<
  SVGSVGElement,
  Omit<AtomicSpinnerProps, 'inline'>
>(({ className, ...props }, ref) => (
  <AtomicSpinner
    ref={ref}
    inline
    size="sm"
    color="muted"
    className={className}
    {...props}
  />
))
AtomicInlineSpinner.displayName = 'AtomicInlineSpinner'

export { AtomicSpinner, spinnerVariants }