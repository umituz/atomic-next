
// ⚠️  NOTICE: AtomicColors has been moved to React Native template system
// This file now only contains CSS variables for web/Next.js usage
// For React Native projects, use: generator/tech-stack/react-native/templates/atomics/tokens/AtomicDesignTokens.ts

// Basic color definitions for CSS variable generation
const colors = {
  primary: '#9333EA',
  primaryLight: '#A855F7',
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
}

// ⚠️  NOTICE: ColorUtils has been moved to React Native template system
// For React Native projects, use: AtomicColorUtils in AtomicDesignTokens.ts

/**
 * CSS Variables for Web/Next.js usage
 * These are the only color exports needed for atomic-next package
 */
export const AtomicColorsCss = {

  '--atomic-primary': colors.primary,
  '--atomic-primary-light': colors.primaryLight,
  '--atomic-primary-dark': colors.primaryDark,

  '--atomic-secondary': colors.secondary,
  '--atomic-secondary-light': colors.secondaryLight,
  '--atomic-secondary-dark': colors.secondaryDark,

  '--atomic-accent': colors.accent,
  '--atomic-accent-light': colors.accentLight,
  '--atomic-accent-dark': colors.accentDark,


  '--atomic-gray-50': colors.gray50,
  '--atomic-gray-100': colors.gray100,
  '--atomic-gray-200': colors.gray200,
  '--atomic-gray-300': colors.gray300,
  '--atomic-gray-400': colors.gray400,
  '--atomic-gray-500': colors.gray500,
  '--atomic-gray-600': colors.gray600,
  '--atomic-gray-700': colors.gray700,
  '--atomic-gray-800': colors.gray800,
  '--atomic-gray-900': colors.gray900,


  '--atomic-success': colors.success,
  '--atomic-success-light': colors.successLight,
  '--atomic-success-dark': colors.successDark,

  '--atomic-warning': colors.warning,
  '--atomic-warning-light': colors.warningLight,
  '--atomic-warning-dark': colors.warningDark,

  '--atomic-error': colors.error,
  '--atomic-error-light': colors.errorLight,
  '--atomic-error-dark': colors.errorDark,

  '--atomic-info': colors.info,
  '--atomic-info-light': colors.infoLight,
  '--atomic-info-dark': colors.infoDark,


  '--atomic-background': colors.background,
  '--atomic-background-secondary': colors.backgroundSecondary,
  '--atomic-surface': colors.surface,
  '--atomic-surface-secondary': colors.surfaceSecondary,


  '--atomic-text-primary': colors.textPrimary,
  '--atomic-text-secondary': colors.textSecondary,
  '--atomic-text-tertiary': colors.textTertiary,
  '--atomic-text-disabled': colors.textDisabled,
  '--atomic-text-inverse': colors.textInverse,
} as const

// ⚠️  NOTICE: Type definitions have been moved to React Native template system
// For React Native projects, use types from AtomicDesignTokens.ts