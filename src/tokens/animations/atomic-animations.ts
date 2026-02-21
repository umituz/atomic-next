
export const AtomicAnimations = {
  
  duration: {
    instant: '0ms',
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
    slowest: '700ms',
  },

  
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    
    
    smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    snappy: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    bounce: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
    elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    
    
    standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
    decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
    accelerate: 'cubic-bezier(0.4, 0, 1, 1)',
  },

  
  scale: {
    none: '1',
    xs: '1.025',
    sm: '1.05',
    md: '1.1',
    lg: '1.15',
    xl: '1.25',
  },

  
  rotate: {
    none: '0deg',
    quarter: '90deg',
    half: '180deg',
    threeQuarter: '270deg',
    full: '360deg',
  },
} as const

export const AnimationUtils = {
  
  transition: (config: {
    property?: string | string[]
    duration?: keyof typeof AtomicAnimations.duration
    easing?: keyof typeof AtomicAnimations.easing
    delay?: keyof typeof AtomicAnimations.duration
  }) => {
    const property = Array.isArray(config.property) 
      ? config.property.join(', ')
      : config.property || 'all'
    const duration = config.duration ? AtomicAnimations.duration[config.duration] : AtomicAnimations.duration.normal
    const easing = config.easing ? AtomicAnimations.easing[config.easing] : AtomicAnimations.easing.easeInOut
    const delay = config.delay ? AtomicAnimations.duration[config.delay] : '0ms'
    
    return {
      transition: `${property} ${duration} ${easing} ${delay}`
    }
  },

  
  transform: (config: {
    scale?: keyof typeof AtomicAnimations.scale
    rotate?: keyof typeof AtomicAnimations.rotate
    translateX?: string
    translateY?: string
    translateZ?: string
  }) => {
    const transforms: string[] = []
    
    if (config.scale) {
      transforms.push(`scale(${AtomicAnimations.scale[config.scale]})`)
    }
    
    if (config.rotate) {
      transforms.push(`rotate(${AtomicAnimations.rotate[config.rotate]})`)
    }
    
    if (config.translateX) {
      transforms.push(`translateX(${config.translateX})`)
    }
    
    if (config.translateY) {
      transforms.push(`translateY(${config.translateY})`)
    }
    
    if (config.translateZ) {
      transforms.push(`translateZ(${config.translateZ})`)
    }
    
    return {
      transform: transforms.join(' ') || 'none'
    }
  },

  
  duration: (name: keyof typeof AtomicAnimations.duration): string => {
    return AtomicAnimations.duration[name]
  },

  
  easing: (name: keyof typeof AtomicAnimations.easing): string => {
    return AtomicAnimations.easing[name]
  },

  
  keyframes: (name: string, frames: Record<string, React.CSSProperties>): string => {
    const keyframeString = Object.entries(frames)
      .map(([key, styles]) => {
        const styleString = Object.entries(styles)
          .map(([prop, value]) => `${prop}: ${value};`)
          .join(' ')
        return `${key} { ${styleString} }`
      })
      .join(' ')
    
    return `@keyframes ${name} { ${keyframeString} }`
  },
}

export const AtomicAnimationPresets = {
  
  fadeIn: AnimationUtils.transition({
    property: 'opacity',
    duration: 'normal',
    easing: 'easeOut'
  }),
  
  fadeOut: AnimationUtils.transition({
    property: 'opacity',
    duration: 'fast',
    easing: 'easeIn'
  }),

  
  scaleIn: {
    ...AnimationUtils.transition({
      property: 'transform',
      duration: 'normal',
      easing: 'smooth'
    }),
    transform: 'scale(1)'
  },
  
  scaleOut: {
    ...AnimationUtils.transition({
      property: 'transform',
      duration: 'fast',
      easing: 'easeIn'
    }),
    transform: 'scale(0.95)'
  },

  
  slideInUp: {
    ...AnimationUtils.transition({
      property: 'transform',
      duration: 'normal',
      easing: 'smooth'
    }),
    transform: 'translateY(0)'
  },
  
  slideInDown: {
    ...AnimationUtils.transition({
      property: 'transform',
      duration: 'normal',
      easing: 'smooth'
    }),
    transform: 'translateY(0)'
  },

  
  buttonHover: {
    ...AnimationUtils.transition({
      property: ['background-color', 'border-color', 'color', 'box-shadow', 'transform'],
      duration: 'fast',
      easing: 'easeOut'
    }),
    transform: 'translateY(-1px)'
  },
  
  buttonPress: {
    ...AnimationUtils.transition({
      property: 'transform',
      duration: 'fast',
      easing: 'easeIn'
    }),
    transform: 'translateY(0)'
  },

  
  spin: {
    animation: 'spin 1s linear infinite'
  },
  
  pulse: {
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
  },
  
  bounce: {
    animation: 'bounce 1s infinite'
  },
}

export const AtomicAnimationsCss = {
  
  '--atomic-duration-instant': AtomicAnimations.duration.instant,
  '--atomic-duration-fast': AtomicAnimations.duration.fast,
  '--atomic-duration-normal': AtomicAnimations.duration.normal,
  '--atomic-duration-slow': AtomicAnimations.duration.slow,
  '--atomic-duration-slower': AtomicAnimations.duration.slower,
  '--atomic-duration-slowest': AtomicAnimations.duration.slowest,
  
  
  '--atomic-ease-linear': AtomicAnimations.easing.linear,
  '--atomic-ease': AtomicAnimations.easing.ease,
  '--atomic-ease-in': AtomicAnimations.easing.easeIn,
  '--atomic-ease-out': AtomicAnimations.easing.easeOut,
  '--atomic-ease-in-out': AtomicAnimations.easing.easeInOut,
  '--atomic-ease-smooth': AtomicAnimations.easing.smooth,
  '--atomic-ease-snappy': AtomicAnimations.easing.snappy,
  '--atomic-ease-bounce': AtomicAnimations.easing.bounce,
  '--atomic-ease-elastic': AtomicAnimations.easing.elastic,
  '--atomic-ease-standard': AtomicAnimations.easing.standard,
  '--atomic-ease-decelerate': AtomicAnimations.easing.decelerate,
  '--atomic-ease-accelerate': AtomicAnimations.easing.accelerate,
  
  
  '--atomic-scale-none': AtomicAnimations.scale.none,
  '--atomic-scale-xs': AtomicAnimations.scale.xs,
  '--atomic-scale-sm': AtomicAnimations.scale.sm,
  '--atomic-scale-md': AtomicAnimations.scale.md,
  '--atomic-scale-lg': AtomicAnimations.scale.lg,
  '--atomic-scale-xl': AtomicAnimations.scale.xl,
} as const

export type AtomicAnimationDuration = keyof typeof AtomicAnimations.duration
export type AtomicAnimationEasing = keyof typeof AtomicAnimations.easing
export type AtomicAnimationScale = keyof typeof AtomicAnimations.scale
export type AtomicAnimationRotate = keyof typeof AtomicAnimations.rotate