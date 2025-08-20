
import React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full',
  {
    variants: {
      size: {
        xs: 'h-6 w-6',
        sm: 'h-8 w-8',
        default: 'h-10 w-10',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',
        xxl: 'h-20 w-20',
        xxxl: 'h-24 w-24',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

const avatarImageVariants = cva('aspect-square h-full w-full object-cover')

const avatarFallbackVariants = cva(
  'flex h-full w-full items-center justify-center rounded-full bg-muted font-medium text-muted-foreground',
  {
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-xs',
        default: 'text-sm',
        lg: 'text-base',
        xl: 'text-lg',
        xxl: 'text-xl',
        xxxl: 'text-2xl',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

export interface AtomicAvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  fallback?: string
  fallbackElement?: React.ReactNode
  showStatus?: boolean
  isOnline?: boolean
  statusColor?: string
}

const AtomicAvatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AtomicAvatarProps
>(
  (
    {
      className,
      size,
      src,
      alt,
      fallback,
      fallbackElement,
      showStatus = false,
      isOnline = false,
      statusColor,
      ...props
    },
    ref
  ) => {
    const generateInitials = (name?: string) => {
      if (!name) return '?'
      
      return name
        .split(' ')
        .map(part => part.charAt(0))
        .join('')
        .slice(0, 2)
        .toUpperCase()
    }

    const initials = fallback || generateInitials(alt)
    
    
    const statusSize = {
      xs: 'h-1.5 w-1.5',
      sm: 'h-2 w-2',
      default: 'h-2.5 w-2.5',
      lg: 'h-3 w-3',
      xl: 'h-4 w-4',
      xxl: 'h-4 w-4',
      xxxl: 'h-5 w-5',
    }[size || 'default']

    return (
      <div className="relative">
        <AvatarPrimitive.Root
          ref={ref}
          className={cn(avatarVariants({ size }), className)}
          {...props}
        >
          <AvatarPrimitive.Image
            className={avatarImageVariants()}
            src={src}
            alt={alt}
          />
          <AvatarPrimitive.Fallback
            className={avatarFallbackVariants({ size })}
          >
            {fallbackElement || initials}
          </AvatarPrimitive.Fallback>
        </AvatarPrimitive.Root>
        
        {showStatus && (
          <div
            className={cn(
              'absolute bottom-0 right-0 rounded-full border-2 border-background',
              statusSize,
              statusColor ? '' : isOnline ? 'bg-green-500' : 'bg-gray-400'
            )}
            style={statusColor ? { backgroundColor: statusColor } : undefined}
          />
        )}
      </div>
    )
  }
)
AtomicAvatar.displayName = 'AtomicAvatar'

const AtomicAvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(avatarImageVariants(), className)}
    {...props}
  />
))
AtomicAvatarImage.displayName = 'AtomicAvatarImage'

const AtomicAvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> &
    VariantProps<typeof avatarFallbackVariants>
>(({ className, size, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(avatarFallbackVariants({ size }), className)}
    {...props}
  />
))
AtomicAvatarFallback.displayName = 'AtomicAvatarFallback'

export {
  AtomicAvatar,
  AtomicAvatarImage,
  AtomicAvatarFallback,
  avatarVariants,
  avatarImageVariants,
  avatarFallbackVariants,
}