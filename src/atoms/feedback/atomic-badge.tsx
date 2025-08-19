/**
 * AtomicBadge Component
 * A badge component for status indicators and labels
 */

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground border-current',
        success: 'border-transparent bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
        warning: 'border-transparent bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400',
        info: 'border-transparent bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
        gray: 'border-transparent bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        default: 'px-2.5 py-0.5 text-xs',
        lg: 'px-3 py-1 text-sm',
      },
      shape: {
        default: 'rounded-full',
        rounded: 'rounded-md',
        square: 'rounded-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      shape: 'default',
    },
  }
)

export interface AtomicBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /** Icon to display on the left */
  leftIcon?: React.ReactNode
  /** Icon to display on the right */
  rightIcon?: React.ReactNode
  /** Show a dot indicator */
  dot?: boolean
  /** Dot color (overrides variant color) */
  dotColor?: string
  /** Make badge removable */
  removable?: boolean
  /** Callback when remove button is clicked */
  onRemove?: () => void
  /** Custom remove icon */
  removeIcon?: React.ReactNode
}

const AtomicBadge = React.forwardRef<HTMLDivElement, AtomicBadgeProps>(
  (
    {
      className,
      variant,
      size,
      shape,
      leftIcon,
      rightIcon,
      dot = false,
      dotColor,
      removable = false,
      onRemove,
      removeIcon,
      children,
      ...props
    },
    ref
  ) => {
    const iconSize = size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-4 w-4' : 'h-3.5 w-3.5'
    const dotSize = size === 'sm' ? 'h-1.5 w-1.5' : size === 'lg' ? 'h-2.5 w-2.5' : 'h-2 w-2'

    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size, shape }), className)}
        {...props}
      >
        {dot && (
          <span
            className={cn(
              'mr-1.5 rounded-full',
              dotSize,
              !dotColor && (
                variant === 'success' ? 'bg-green-600' :
                variant === 'warning' ? 'bg-amber-600' :
                variant === 'info' ? 'bg-blue-600' :
                variant === 'destructive' ? 'bg-red-600' :
                variant === 'gray' ? 'bg-gray-600' :
                'bg-current'
              )
            )}
            style={dotColor ? { backgroundColor: dotColor } : undefined}
          />
        )}
        
        {leftIcon && (
          <span className={cn('mr-1 flex items-center', `[&>*]:${iconSize}`)}>
            {leftIcon}
          </span>
        )}
        
        {children}
        
        {rightIcon && !removable && (
          <span className={cn('ml-1 flex items-center', `[&>*]:${iconSize}`)}>
            {rightIcon}
          </span>
        )}
        
        {removable && (
          <button
            type="button"
            onClick={onRemove}
            className={cn(
              'ml-1 flex items-center rounded-full hover:bg-black/10 dark:hover:bg-white/10',
              'transition-colors focus:outline-none focus:ring-1 focus:ring-current',
              size === 'sm' ? 'p-0.5' : 'p-1'
            )}
          >
            {removeIcon ? (
              <span className={cn('flex items-center', `[&>*]:${iconSize}`)}>
                {removeIcon}
              </span>
            ) : (
              <svg
                className={iconSize}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            )}
          </button>
        )}
      </div>
    )
  }
)
AtomicBadge.displayName = 'AtomicBadge'

// Preset badge components for common use cases
export const AtomicStatusBadge = React.forwardRef<
  HTMLDivElement,
  Omit<AtomicBadgeProps, 'dot'> & { status: 'online' | 'offline' | 'busy' | 'away' }
>(({ status, variant, ...props }, ref) => {
  const statusConfig = {
    online: { variant: 'success' as const, dot: true, children: 'Online' },
    offline: { variant: 'gray' as const, dot: true, children: 'Offline' },
    busy: { variant: 'destructive' as const, dot: true, children: 'Busy' },
    away: { variant: 'warning' as const, dot: true, children: 'Away' },
  }

  const config = statusConfig[status]

  return (
    <AtomicBadge
      ref={ref}
      variant={variant || config.variant}
      dot={config.dot}
      {...props}
    >
      {props.children || config.children}
    </AtomicBadge>
  )
})
AtomicStatusBadge.displayName = 'AtomicStatusBadge'

export const AtomicCountBadge = React.forwardRef<
  HTMLDivElement,
  Omit<AtomicBadgeProps, 'children'> & { count: number; max?: number }
>(({ count, max = 99, ...props }, ref) => {
  const displayCount = count > max ? `${max}+` : count.toString()
  
  if (count <= 0) return null

  return (
    <AtomicBadge
      ref={ref}
      variant="destructive"
      size="sm"
      {...props}
    >
      {displayCount}
    </AtomicBadge>
  )
})
AtomicCountBadge.displayName = 'AtomicCountBadge'

export { AtomicBadge, badgeVariants }