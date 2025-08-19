/**
 * Atomic Design System Shadow Tokens
 * Creating depth and elevation with consistent shadows
 */

export const AtomicShadows = {
  // ===== BASE SHADOWS =====
  none: 'none',
  
  // Subtle shadows for slight elevation
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  xxl: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  
  // Inner shadows
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  
  // Colored shadows for focus states
  focusPrimary: '0 0 0 3px rgb(139 92 246 / 0.2)',
  focusSecondary: '0 0 0 3px rgb(236 72 153 / 0.2)',
  focusSuccess: '0 0 0 3px rgb(16 185 129 / 0.2)',
  focusWarning: '0 0 0 3px rgb(245 158 11 / 0.2)',
  focusError: '0 0 0 3px rgb(239 68 68 / 0.2)',
  focusInfo: '0 0 0 3px rgb(59 130 246 / 0.2)',
  
  // Glow effects
  glowPrimary: '0 0 20px rgb(139 92 246 / 0.3)',
  glowSecondary: '0 0 20px rgb(236 72 153 / 0.3)',
  glowSuccess: '0 0 20px rgb(16 185 129 / 0.3)',
  glowWarning: '0 0 20px rgb(245 158 11 / 0.3)',
  glowError: '0 0 20px rgb(239 68 68 / 0.3)',
  
  // Component-specific shadows
  card: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  cardHover: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  button: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  buttonHover: '0 2px 4px 0 rgb(0 0 0 / 0.1)',
  modal: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  dropdown: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  tooltip: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
} as const

/**
 * Shadow utility functions
 */
export const ShadowUtils = {
  /**
   * Get shadow value by name
   */
  get: (name: keyof typeof AtomicShadows): string => {
    return AtomicShadows[name]
  },

  /**
   * Create custom shadow with RGB values and opacity
   */
  custom: (
    x: number,
    y: number, 
    blur: number,
    spread: number = 0,
    color: string = '0 0 0',
    opacity: number = 0.1
  ): string => {
    return `${x}px ${y}px ${blur}px ${spread}px rgb(${color} / ${opacity})`
  },

  /**
   * Combine multiple shadows
   */
  combine: (...shadows: (keyof typeof AtomicShadows)[]): string => {
    return shadows.map(shadow => AtomicShadows[shadow]).join(', ')
  },

  /**
   * Create focus ring shadow
   */
  focus: (color: string = '139 92 246', opacity: number = 0.2): string => {
    return `0 0 0 3px rgb(${color} / ${opacity})`
  },

  /**
   * Create glow effect
   */
  glow: (size: number = 20, color: string = '139 92 246', opacity: number = 0.3): string => {
    return `0 0 ${size}px rgb(${color} / ${opacity})`
  },
}

/**
 * CSS Custom Properties for shadows
 */
export const AtomicShadowsCss = {
  '--atomic-shadow-none': AtomicShadows.none,
  '--atomic-shadow-xs': AtomicShadows.xs,
  '--atomic-shadow-sm': AtomicShadows.sm,
  '--atomic-shadow-md': AtomicShadows.md,
  '--atomic-shadow-lg': AtomicShadows.lg,
  '--atomic-shadow-xl': AtomicShadows.xl,
  '--atomic-shadow-xxl': AtomicShadows.xxl,
  '--atomic-shadow-inner': AtomicShadows.inner,
  
  // Focus shadows
  '--atomic-shadow-focus-primary': AtomicShadows.focusPrimary,
  '--atomic-shadow-focus-secondary': AtomicShadows.focusSecondary,
  '--atomic-shadow-focus-success': AtomicShadows.focusSuccess,
  '--atomic-shadow-focus-warning': AtomicShadows.focusWarning,
  '--atomic-shadow-focus-error': AtomicShadows.focusError,
  '--atomic-shadow-focus-info': AtomicShadows.focusInfo,
  
  // Glow effects
  '--atomic-shadow-glow-primary': AtomicShadows.glowPrimary,
  '--atomic-shadow-glow-secondary': AtomicShadows.glowSecondary,
  '--atomic-shadow-glow-success': AtomicShadows.glowSuccess,
  '--atomic-shadow-glow-warning': AtomicShadows.glowWarning,
  '--atomic-shadow-glow-error': AtomicShadows.glowError,
  
  // Component shadows
  '--atomic-shadow-card': AtomicShadows.card,
  '--atomic-shadow-card-hover': AtomicShadows.cardHover,
  '--atomic-shadow-button': AtomicShadows.button,
  '--atomic-shadow-button-hover': AtomicShadows.buttonHover,
  '--atomic-shadow-modal': AtomicShadows.modal,
  '--atomic-shadow-dropdown': AtomicShadows.dropdown,
  '--atomic-shadow-tooltip': AtomicShadows.tooltip,
} as const

// Type definitions
export type AtomicShadowKey = keyof typeof AtomicShadows
export type AtomicShadowValue = typeof AtomicShadows[AtomicShadowKey]