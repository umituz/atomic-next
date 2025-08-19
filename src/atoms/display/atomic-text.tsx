/**
 * AtomicText Component
 * A server-side typography component for Next.js applications
 * Follows atomic design principles with semantic HTML optimization
 * Can be used in Server Components for better SEO and performance
 */

import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const textVariants = cva('', {
  variants: {
    variant: {
      // Headings - semantic HTML optimized
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
      h6: 'scroll-m-20 text-base font-semibold tracking-tight',
      
      // Body text
      body: 'text-base leading-7',
      large: 'text-lg leading-7',
      small: 'text-sm leading-6',
      xs: 'text-xs leading-5',
      
      // Special variants
      lead: 'text-xl leading-7 text-muted-foreground',
      muted: 'text-sm text-muted-foreground',
      caption: 'text-xs text-muted-foreground',
      label: 'text-sm font-medium leading-none',
    },
    color: {
      default: 'text-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary-foreground',
      muted: 'text-muted-foreground',
      success: 'text-green-600 dark:text-green-400',
      warning: 'text-amber-600 dark:text-amber-400',
      error: 'text-red-600 dark:text-red-400',
      info: 'text-blue-600 dark:text-blue-400',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
    weight: {
      thin: 'font-thin',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    },
  },
  defaultVariants: {
    variant: 'body',
    color: 'default',
    align: 'left',
  },
})

export interface AtomicTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof textVariants> {
  /** Render as a different element */
  asChild?: boolean
  /** HTML element to render */
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label'
  /** Truncate text with ellipsis */
  truncate?: boolean
  /** Allow text selection */
  selectable?: boolean
}

const AtomicText = React.forwardRef<HTMLElement, AtomicTextProps>(
  (
    {
      className,
      variant,
      color,
      align,
      weight,
      as = 'p',
      asChild = false,
      truncate = false,
      selectable = true,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : as

    // Auto-select semantic HTML element based on variant for better SEO
    let semanticElement = as
    if (!asChild && as === 'p') {
      if (variant === 'h1' || variant === 'h2' || variant === 'h3' || variant === 'h4' || variant === 'h5' || variant === 'h6') {
        semanticElement = variant
      } else if (variant === 'label') {
        semanticElement = 'label'
      }
    }

    const FinalComp = asChild ? Comp : semanticElement

    return (
      <FinalComp
        className={cn(
          textVariants({ variant, color: color || 'default', align, weight }),
          truncate && 'truncate',
          !selectable && 'select-none',
          className
        )}
        ref={ref as any}
        {...props}
      />
    )
  }
)
AtomicText.displayName = 'AtomicText'

export { AtomicText, textVariants }