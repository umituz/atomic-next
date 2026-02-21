
export const AtomicBorders = {
  
  radius: {
    none: '0px',
    xs: '2px',
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    xxl: '16px',
    xxxl: '24px',
    full: '9999px',
  },

  
  width: {
    none: '0px',
    thin: '1px',
    medium: '2px',
    thick: '4px',
    thicker: '8px',
  },

  
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
    double: 'double',
    none: 'none',
  },
} as const

export const BorderUtils = {
  
  radius: (name: keyof typeof AtomicBorders.radius): string => {
    return AtomicBorders.radius[name]
  },

  
  width: (name: keyof typeof AtomicBorders.width): string => {
    return AtomicBorders.width[name]
  },

  
  style: (name: keyof typeof AtomicBorders.style): string => {
    return AtomicBorders.style[name]
  },

  
  border: (config: {
    width?: keyof typeof AtomicBorders.width
    style?: keyof typeof AtomicBorders.style
    color?: string
  }) => {
    const width = config.width ? AtomicBorders.width[config.width] : AtomicBorders.width.thin
    const style = config.style ? AtomicBorders.style[config.style] : AtomicBorders.style.solid
    const color = config.color || 'currentColor'
    
    return `${width} ${style} ${color}`
  },

  
  radiusCorners: {
    all: (radius: keyof typeof AtomicBorders.radius) => ({
      borderRadius: AtomicBorders.radius[radius]
    }),
    top: (radius: keyof typeof AtomicBorders.radius) => ({
      borderTopLeftRadius: AtomicBorders.radius[radius],
      borderTopRightRadius: AtomicBorders.radius[radius]
    }),
    right: (radius: keyof typeof AtomicBorders.radius) => ({
      borderTopRightRadius: AtomicBorders.radius[radius],
      borderBottomRightRadius: AtomicBorders.radius[radius]
    }),
    bottom: (radius: keyof typeof AtomicBorders.radius) => ({
      borderBottomLeftRadius: AtomicBorders.radius[radius],
      borderBottomRightRadius: AtomicBorders.radius[radius]
    }),
    left: (radius: keyof typeof AtomicBorders.radius) => ({
      borderTopLeftRadius: AtomicBorders.radius[radius],
      borderBottomLeftRadius: AtomicBorders.radius[radius]
    }),
    topLeft: (radius: keyof typeof AtomicBorders.radius) => ({
      borderTopLeftRadius: AtomicBorders.radius[radius]
    }),
    topRight: (radius: keyof typeof AtomicBorders.radius) => ({
      borderTopRightRadius: AtomicBorders.radius[radius]
    }),
    bottomRight: (radius: keyof typeof AtomicBorders.radius) => ({
      borderBottomRightRadius: AtomicBorders.radius[radius]
    }),
    bottomLeft: (radius: keyof typeof AtomicBorders.radius) => ({
      borderBottomLeftRadius: AtomicBorders.radius[radius]
    }),
  },

  
  borderSides: {
    all: (config: {
      width?: keyof typeof AtomicBorders.width
      style?: keyof typeof AtomicBorders.style
      color?: string
    }) => ({
      border: BorderUtils.border(config)
    }),
    top: (config: {
      width?: keyof typeof AtomicBorders.width
      style?: keyof typeof AtomicBorders.style
      color?: string
    }) => ({
      borderTop: BorderUtils.border(config)
    }),
    right: (config: {
      width?: keyof typeof AtomicBorders.width
      style?: keyof typeof AtomicBorders.style
      color?: string
    }) => ({
      borderRight: BorderUtils.border(config)
    }),
    bottom: (config: {
      width?: keyof typeof AtomicBorders.width
      style?: keyof typeof AtomicBorders.style
      color?: string
    }) => ({
      borderBottom: BorderUtils.border(config)
    }),
    left: (config: {
      width?: keyof typeof AtomicBorders.width
      style?: keyof typeof AtomicBorders.style
      color?: string
    }) => ({
      borderLeft: BorderUtils.border(config)
    }),
  },
}

export const AtomicBordersCss = {
  
  '--atomic-radius-none': AtomicBorders.radius.none,
  '--atomic-radius-xs': AtomicBorders.radius.xs,
  '--atomic-radius-sm': AtomicBorders.radius.sm,
  '--atomic-radius-md': AtomicBorders.radius.md,
  '--atomic-radius-lg': AtomicBorders.radius.lg,
  '--atomic-radius-xl': AtomicBorders.radius.xl,
  '--atomic-radius-xxl': AtomicBorders.radius.xxl,
  '--atomic-radius-xxxl': AtomicBorders.radius.xxxl,
  '--atomic-radius-full': AtomicBorders.radius.full,
  
  
  '--atomic-border-none': AtomicBorders.width.none,
  '--atomic-border-thin': AtomicBorders.width.thin,
  '--atomic-border-medium': AtomicBorders.width.medium,
  '--atomic-border-thick': AtomicBorders.width.thick,
  '--atomic-border-thicker': AtomicBorders.width.thicker,
} as const

export type AtomicBorderRadius = keyof typeof AtomicBorders.radius
export type AtomicBorderWidth = keyof typeof AtomicBorders.width
export type AtomicBorderStyle = keyof typeof AtomicBorders.style