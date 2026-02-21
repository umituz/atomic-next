'use client'

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const cardVariants = cva(
  'rounded-lg border text-card-foreground',
  {
    variants: {
      variant: {
        default: 'border-border bg-card shadow-sm',
        elevated: 'border-0 bg-card shadow-lg',
        outlined: 'border-2 border-border bg-card shadow-none',
        filled: 'border-0 bg-muted shadow-none',
      },
      size: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

const cardHeaderVariants = cva(
  'flex flex-col space-y-1.5',
  {
    variants: {
      size: {
        sm: 'pb-3',
        md: 'pb-4',
        lg: 'pb-6',
        xl: 'pb-8',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

const cardTitleVariants = cva(
  'font-semibold leading-none tracking-tight',
  {
    variants: {
      size: {
        sm: 'text-lg',
        md: 'text-xl',
        lg: 'text-2xl',
        xl: 'text-3xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

const cardDescriptionVariants = cva(
  'text-muted-foreground',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-sm',
        lg: 'text-base',
        xl: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

const cardContentVariants = cva('', {
  variants: {
    size: {
      sm: 'pt-0',
      md: 'pt-0',
      lg: 'pt-0',
      xl: 'pt-0',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

const cardFooterVariants = cva(
  'flex items-center',
  {
    variants: {
      size: {
        sm: 'pt-3',
        md: 'pt-4',
        lg: 'pt-6',
        xl: 'pt-8',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

export interface AtomicCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  /** Make card interactive with hover effects */
  interactive?: boolean
  /** Make card full width */
  fullWidth?: boolean
}

export interface AtomicCardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardHeaderVariants> {}

export interface AtomicCardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof cardTitleVariants> {
  /** Render as a different heading element */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export interface AtomicCardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof cardDescriptionVariants> {}

export interface AtomicCardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardContentVariants> {}

export interface AtomicCardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardFooterVariants> {}

const AtomicCard = React.forwardRef<HTMLDivElement, AtomicCardProps>(
  ({ className, variant, size, interactive = false, fullWidth = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({ variant, size }),
        interactive && 'cursor-pointer transition-shadow hover:shadow-md',
        fullWidth && 'w-full',
        className
      )}
      {...props}
    />
  )
)
AtomicCard.displayName = 'AtomicCard'

const AtomicCardHeader = React.forwardRef<HTMLDivElement, AtomicCardHeaderProps>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardHeaderVariants({ size }), className)}
      {...props}
    />
  )
)
AtomicCardHeader.displayName = 'AtomicCardHeader'

const AtomicCardTitle = React.forwardRef<HTMLHeadingElement, AtomicCardTitleProps>(
  ({ className, size, as: Component = 'h3', ...props }, ref) => (
    <Component
      ref={ref}
      className={cn(cardTitleVariants({ size }), className)}
      {...props}
    />
  )
)
AtomicCardTitle.displayName = 'AtomicCardTitle'

const AtomicCardDescription = React.forwardRef<HTMLParagraphElement, AtomicCardDescriptionProps>(
  ({ className, size, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(cardDescriptionVariants({ size }), className)}
      {...props}
    />
  )
)
AtomicCardDescription.displayName = 'AtomicCardDescription'

const AtomicCardContent = React.forwardRef<HTMLDivElement, AtomicCardContentProps>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardContentVariants({ size }), className)}
      {...props}
    />
  )
)
AtomicCardContent.displayName = 'AtomicCardContent'

const AtomicCardFooter = React.forwardRef<HTMLDivElement, AtomicCardFooterProps>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardFooterVariants({ size }), className)}
      {...props}
    />
  )
)
AtomicCardFooter.displayName = 'AtomicCardFooter'

export {
  AtomicCard,
  AtomicCardHeader,
  AtomicCardTitle,
  AtomicCardDescription,
  AtomicCardContent,
  AtomicCardFooter,
  cardVariants,
  cardHeaderVariants,
  cardTitleVariants,
  cardDescriptionVariants,
  cardContentVariants,
  cardFooterVariants,
}