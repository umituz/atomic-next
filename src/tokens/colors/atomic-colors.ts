
export const AtomicColors = {
  
  primary: '#8B5CF6',
  primaryLight: '#A78BFA',
  primaryDark: '#7C3AED',
  
  secondary: '#EC4899',
  secondaryLight: '#F472B6',
  secondaryDark: '#DB2777',
  
  accent: '#F59E0B',
  accentLight: '#FBBF24',
  accentDark: '#D97706',

  
  gray50: '#FAFAFA',
  gray100: '#F4F4F5',
  gray200: '#E4E4E7',
  gray300: '#D4D4D8',
  gray400: '#A1A1AA',
  gray500: '#71717A',
  gray600: '#52525B',
  gray700: '#3F3F46',
  gray800: '#27272A',
  gray900: '#18181B',

  
  success: '#10B981',
  successLight: '#34D399',
  successDark: '#059669',
  
  warning: '#F59E0B',
  warningLight: '#FBBF24',
  warningDark: '#D97706',
  
  error: '#EF4444',
  errorLight: '#F87171',
  errorDark: '#DC2626',
  
  info: '#3B82F6',
  infoLight: '#60A5FA',
  infoDark: '#2563EB',

  
  background: '#FFFFFF',
  backgroundSecondary: '#F9FAFB',
  surface: '#FFFFFF',
  surfaceSecondary: '#F3F4F6',
  
  
  textPrimary: '#18181B',
  textSecondary: '#52525B',
  textTertiary: '#A1A1AA',
  textDisabled: '#D4D4D8',
  textInverse: '#FFFFFF',

  
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000000',
  white: '#FFFFFF',
} as const

export const ColorUtils = {
  
  withAlpha: (color: string, alpha: number): string => {
    if (!color.startsWith('#') || (color.length !== 7 && color.length !== 4)) {
      throw new Error('Color must be a valid hex color')
    }
    
    if (alpha < 0 || alpha > 1) {
      throw new Error('Alpha must be between 0 and 1')
    }

    const alphaHex = Math.round(alpha * 255).toString(16).padStart(2, '0')
    return color + alphaHex
  },

  
  hexToRgb: (hex: string): { r: number; g: number; b: number } | null => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } : null
  },

  
  hexToHsl: (hex: string): { h: number; s: number; l: number } | null => {
    const rgb = ColorUtils.hexToRgb(hex)
    if (!rgb) return null

    const r = rgb.r / 255
    const g = rgb.g / 255
    const b = rgb.b / 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h = 0
    let s = 0
    const l = (max + min) / 2

    if (max === min) {
      h = s = 0
    } else {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break
        case g: h = (b - r) / d + 2; break
        case b: h = (r - g) / d + 4; break
      }
      h /= 6
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    }
  },
}

export const AtomicColorsCss = {
  
  '--atomic-primary': AtomicColors.primary,
  '--atomic-primary-light': AtomicColors.primaryLight,
  '--atomic-primary-dark': AtomicColors.primaryDark,
  
  '--atomic-secondary': AtomicColors.secondary,
  '--atomic-secondary-light': AtomicColors.secondaryLight,
  '--atomic-secondary-dark': AtomicColors.secondaryDark,
  
  '--atomic-accent': AtomicColors.accent,
  '--atomic-accent-light': AtomicColors.accentLight,
  '--atomic-accent-dark': AtomicColors.accentDark,

  
  '--atomic-gray-50': AtomicColors.gray50,
  '--atomic-gray-100': AtomicColors.gray100,
  '--atomic-gray-200': AtomicColors.gray200,
  '--atomic-gray-300': AtomicColors.gray300,
  '--atomic-gray-400': AtomicColors.gray400,
  '--atomic-gray-500': AtomicColors.gray500,
  '--atomic-gray-600': AtomicColors.gray600,
  '--atomic-gray-700': AtomicColors.gray700,
  '--atomic-gray-800': AtomicColors.gray800,
  '--atomic-gray-900': AtomicColors.gray900,

  
  '--atomic-success': AtomicColors.success,
  '--atomic-success-light': AtomicColors.successLight,
  '--atomic-success-dark': AtomicColors.successDark,
  
  '--atomic-warning': AtomicColors.warning,
  '--atomic-warning-light': AtomicColors.warningLight,
  '--atomic-warning-dark': AtomicColors.warningDark,
  
  '--atomic-error': AtomicColors.error,
  '--atomic-error-light': AtomicColors.errorLight,
  '--atomic-error-dark': AtomicColors.errorDark,
  
  '--atomic-info': AtomicColors.info,
  '--atomic-info-light': AtomicColors.infoLight,
  '--atomic-info-dark': AtomicColors.infoDark,

  
  '--atomic-background': AtomicColors.background,
  '--atomic-background-secondary': AtomicColors.backgroundSecondary,
  '--atomic-surface': AtomicColors.surface,
  '--atomic-surface-secondary': AtomicColors.surfaceSecondary,
  
  
  '--atomic-text-primary': AtomicColors.textPrimary,
  '--atomic-text-secondary': AtomicColors.textSecondary,
  '--atomic-text-tertiary': AtomicColors.textTertiary,
  '--atomic-text-disabled': AtomicColors.textDisabled,
  '--atomic-text-inverse': AtomicColors.textInverse,
} as const

export type AtomicColor = keyof typeof AtomicColors
export type AtomicColorValue = typeof AtomicColors[AtomicColor]