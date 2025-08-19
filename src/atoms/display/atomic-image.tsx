/**
 * AtomicImage Component
 * A Next.js optimized image component following atomic design principles
 * Server-side safe wrapper around Next.js Image component
 */

import Image from 'next/image'
import { cn } from '../../utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const imageVariants = cva('transition-all duration-200', {
  variants: {
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full',
    },
    aspectRatio: {
      square: 'aspect-square',
      video: 'aspect-video',
      portrait: 'aspect-[3/4]',
      landscape: 'aspect-[4/3]',
      auto: '',
    },
    objectFit: {
      cover: 'object-cover',
      contain: 'object-contain',
      fill: 'object-fill',
      'scale-down': 'object-scale-down',
      none: 'object-none',
    },
    objectPosition: {
      center: 'object-center',
      top: 'object-top',
      bottom: 'object-bottom',
      left: 'object-left',
      right: 'object-right',
      'top-left': 'object-left-top',
      'top-right': 'object-right-top',
      'bottom-left': 'object-left-bottom',
      'bottom-right': 'object-right-bottom',
    },
  },
  defaultVariants: {
    rounded: 'none',
    aspectRatio: 'auto',
    objectFit: 'cover',
    objectPosition: 'center',
  },
})

export interface AtomicImageProps
  extends Omit<React.ComponentProps<typeof Image>, 'className' | 'objectFit' | 'objectPosition' | 'placeholder'>,
    VariantProps<typeof imageVariants> {
  className?: string
  containerClassName?: string
  /** Enable blur placeholder while loading */
  enableBlur?: boolean
  /** Custom placeholder image source */
  placeholderSrc?: string
}

/**
 * AtomicImage - Next.js optimized image component
 * 
 * A wrapper around Next.js Image component with atomic design variants.
 * Provides consistent styling and automatic optimization for web performance.
 * Can be used in both Server and Client Components.
 * 
 * @example
 * <AtomicImage 
 *   src="/hero.jpg" 
 *   alt="Hero image" 
 *   width={800} 
 *   height={600}
 *   rounded="lg"
 *   aspectRatio="video"
 *   priority
 * />
 */
export const AtomicImage = React.forwardRef<
  React.ElementRef<typeof Image>,
  AtomicImageProps
>(({
  className,
  containerClassName,
  rounded,
  aspectRatio,
  objectFit,
  objectPosition,
  enableBlur = false,
  placeholderSrc,
  ...props
}, ref) => {
  return (
    <div className={cn(
      'relative overflow-hidden',
      aspectRatio && imageVariants({ aspectRatio }),
      containerClassName
    )}>
      <Image
        ref={ref}
        className={cn(
          imageVariants({ 
            rounded, 
            objectFit, 
            objectPosition,
            aspectRatio: undefined // Don't apply aspect ratio to image itself
          }), 
          className
        )}
        placeholder={enableBlur || placeholderSrc ? 'blur' : 'empty'}
        blurDataURL={placeholderSrc}
        {...props}
      />
    </div>
  )
})

AtomicImage.displayName = 'AtomicImage'

export { imageVariants }