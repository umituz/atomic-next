/**
 * AtomicText Component
 * A typography component following atomic design principles
 */

import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const textVariants = cva('', {
  variants: {
    variant: {
      // Display variants
      displayLarge: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      displayMedium: 'scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl',
      displaySmall: 'scroll-m-20 text-2xl font-semibold tracking-tight lg:text-3xl',
      
      // Headline variants
      headlineLarge: 'scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl',
      headlineMedium: 'scroll-m-20 text-lg font-semibold tracking-tight lg:text-xl',
      headlineSmall: 'scroll-m-20 text-base font-semibold tracking-tight lg:text-lg',
      
      // Title variants
      titleLarge: 'scroll-m-20 text-base font-medium tracking-tight',
      titleMedium: 'scroll-m-20 text-sm font-medium tracking-tight',
      titleSmall: 'scroll-m-20 text-xs font-medium tracking-tight',
      
      // Body variants
      bodyLarge: 'text-base leading-7',
      bodyMedium: 'text-sm leading-6',
      bodySmall: 'text-xs leading-5',
      
      // Label variants
      labelLarge: 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      labelMedium: 'text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      labelSmall: 'text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      
      // Utility variants
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground',
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
    variant: 'bodyMedium',
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

    // Auto-select semantic HTML element based on variant
    let semanticElement = as
    if (!asChild && as === 'p') {
      if (variant?.includes('display')) {
        semanticElement = 'h1'
      } else if (variant?.includes('headline')) {
        semanticElement = variant === 'headlineLarge' ? 'h2' : variant === 'headlineMedium' ? 'h3' : 'h4'
      } else if (variant?.includes('title')) {
        semanticElement = variant === 'titleLarge' ? 'h5' : 'h6'
      } else if (variant?.includes('label')) {
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