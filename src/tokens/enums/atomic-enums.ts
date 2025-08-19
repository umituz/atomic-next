/**
 * Atomic Design System Enums
 * Common enumeration types used across the design system
 */

// ===== SIZE VARIANTS =====
export enum AtomicSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
}

// ===== COLOR VARIANTS =====
export enum AtomicColorVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
  GRAY = 'gray',
}

// ===== BUTTON VARIANTS =====
export enum AtomicButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
  GHOST = 'ghost',
  LINK = 'link',
  DESTRUCTIVE = 'destructive',
}

// ===== INPUT VARIANTS =====
export enum AtomicInputVariant {
  DEFAULT = 'default',
  FILLED = 'filled',
  OUTLINE = 'outline',
  UNDERLINED = 'underlined',
}

// ===== CARD VARIANTS =====
export enum AtomicCardVariant {
  DEFAULT = 'default',
  ELEVATED = 'elevated',
  OUTLINED = 'outlined',
  FILLED = 'filled',
}

// ===== LOADING STATES =====
export enum AtomicLoadingState {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

// ===== STATUS TYPES =====
export enum AtomicStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
  DISABLED = 'disabled',
  ARCHIVED = 'archived',
}

// ===== ALERT TYPES =====
export enum AtomicAlertType {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

// ===== MODAL SIZES =====
export enum AtomicModalSize {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  FULL = 'full',
}

// ===== TEXT VARIANTS =====
export enum AtomicTextVariant {
  DISPLAY_LARGE = 'displayLarge',
  DISPLAY_MEDIUM = 'displayMedium',
  DISPLAY_SMALL = 'displaySmall',
  HEADLINE_LARGE = 'headlineLarge',
  HEADLINE_MEDIUM = 'headlineMedium',
  HEADLINE_SMALL = 'headlineSmall',
  TITLE_LARGE = 'titleLarge',
  TITLE_MEDIUM = 'titleMedium',
  TITLE_SMALL = 'titleSmall',
  BODY_LARGE = 'bodyLarge',
  BODY_MEDIUM = 'bodyMedium',
  BODY_SMALL = 'bodySmall',
  LABEL_LARGE = 'labelLarge',
  LABEL_MEDIUM = 'labelMedium',
  LABEL_SMALL = 'labelSmall',
}

// ===== POSITION TYPES =====
export enum AtomicPosition {
  TOP = 'top',
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  BOTTOM = 'bottom',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

// ===== ALIGNMENT TYPES =====
export enum AtomicAlignment {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
  JUSTIFY = 'justify',
}

// ===== ORIENTATION TYPES =====
export enum AtomicOrientation {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

// ===== DIRECTION TYPES =====
export enum AtomicDirection {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

// ===== ANIMATION STATES =====
export enum AtomicAnimationState {
  ENTER = 'enter',
  EXIT = 'exit',
  IDLE = 'idle',
}

// ===== FORM FIELD STATES =====
export enum AtomicFormFieldState {
  DEFAULT = 'default',
  FOCUS = 'focus',
  ERROR = 'error',
  SUCCESS = 'success',
  DISABLED = 'disabled',
}

// ===== BREAKPOINTS =====
export enum AtomicBreakpoint {
  XS = 'xs',   // 0px
  SM = 'sm',   // 640px
  MD = 'md',   // 768px
  LG = 'lg',   // 1024px
  XL = 'xl',   // 1280px
  XXL = 'xxl', // 1536px
}

// ===== THEME MODES =====
export enum AtomicThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

// ===== UTILITY TYPES =====

// Union types for easier usage
export type AtomicSizeType = keyof typeof AtomicSize
export type AtomicColorVariantType = keyof typeof AtomicColorVariant
export type AtomicButtonVariantType = keyof typeof AtomicButtonVariant
export type AtomicInputVariantType = keyof typeof AtomicInputVariant
export type AtomicCardVariantType = keyof typeof AtomicCardVariant
export type AtomicLoadingStateType = keyof typeof AtomicLoadingState
export type AtomicStatusType = keyof typeof AtomicStatus
export type AtomicAlertTypeType = keyof typeof AtomicAlertType
export type AtomicModalSizeType = keyof typeof AtomicModalSize
export type AtomicTextVariantType = keyof typeof AtomicTextVariant
export type AtomicPositionType = keyof typeof AtomicPosition
export type AtomicAlignmentType = keyof typeof AtomicAlignment
export type AtomicOrientationType = keyof typeof AtomicOrientation
export type AtomicDirectionType = keyof typeof AtomicDirection
export type AtomicAnimationStateType = keyof typeof AtomicAnimationState
export type AtomicFormFieldStateType = keyof typeof AtomicFormFieldState
export type AtomicBreakpointType = keyof typeof AtomicBreakpoint
export type AtomicThemeModeType = keyof typeof AtomicThemeMode

// Utility functions for enum operations
export const AtomicEnumUtils = {
  /**
   * Get all values of an enum as an array
   */
  getValues: <T extends Record<string, string>>(enumObj: T): string[] => {
    return Object.values(enumObj)
  },

  /**
   * Get all keys of an enum as an array
   */
  getKeys: <T extends Record<string, string>>(enumObj: T): string[] => {
    return Object.keys(enumObj)
  },

  /**
   * Check if a value exists in an enum
   */
  hasValue: <T extends Record<string, string>>(enumObj: T, value: string): value is T[keyof T] => {
    return Object.values(enumObj).includes(value)
  },

  /**
   * Check if a key exists in an enum
   */
  hasKey: <T extends Record<string, string>>(enumObj: T, key: string): key is string => {
    return Object.keys(enumObj).includes(key)
  },

  /**
   * Get enum entries as [key, value] pairs
   */
  getEntries: <T extends Record<string, string>>(enumObj: T): [string, string][] => {
    return Object.entries(enumObj)
  },
}