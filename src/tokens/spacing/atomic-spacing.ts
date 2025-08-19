/**
 * Atomic Design System Spacing Tokens
 * Based on 8-point grid system
 */

export const AtomicSpacing = {
  // ===== BASE UNIT =====
  unit: 8,

  // ===== SPACING SCALE =====
  xxs: 4,   // 0.5 * unit
  xs: 8,    // 1 * unit  
  sm: 12,   // 1.5 * unit
  md: 16,   // 2 * unit
  lg: 24,   // 3 * unit
  xl: 32,   // 4 * unit
  xxl: 40,  // 5 * unit
  xxxl: 48, // 6 * unit
  huge: 64, // 8 * unit

  // ===== COMPONENT SPACING =====
  buttonPaddingX: 16,
  buttonPaddingY: 12,
  
  cardPadding: 24,
  cardMargin: 16,
  
  listItemPadding: 16,
  listItemSpacing: 8,
  
  inputPaddingX: 16,
  inputPaddingY: 12,
  
  modalPadding: 24,
  sectionPadding: 32,
} as const

/**
 * Spacing utilities for CSS classes and inline styles
 */
export const SpacingUtils = {
  /**
   * Get spacing value by name
   */
  get: (name: keyof typeof AtomicSpacing): number => {
    return AtomicSpacing[name]
  },

  /**
   * Get spacing in rem units (assuming 16px base font size)
   */
  rem: (name: keyof typeof AtomicSpacing): string => {
    return `${AtomicSpacing[name] / 16}rem`
  },

  /**
   * Get spacing in px units
   */
  px: (name: keyof typeof AtomicSpacing): string => {
    return `${AtomicSpacing[name]}px`
  },

  /**
   * Create margin styles
   */
  margin: {
    all: (value: keyof typeof AtomicSpacing) => ({ margin: SpacingUtils.px(value) }),
    top: (value: keyof typeof AtomicSpacing) => ({ marginTop: SpacingUtils.px(value) }),
    right: (value: keyof typeof AtomicSpacing) => ({ marginRight: SpacingUtils.px(value) }),
    bottom: (value: keyof typeof AtomicSpacing) => ({ marginBottom: SpacingUtils.px(value) }),
    left: (value: keyof typeof AtomicSpacing) => ({ marginLeft: SpacingUtils.px(value) }),
    horizontal: (value: keyof typeof AtomicSpacing) => ({ 
      marginLeft: SpacingUtils.px(value),
      marginRight: SpacingUtils.px(value)
    }),
    vertical: (value: keyof typeof AtomicSpacing) => ({ 
      marginTop: SpacingUtils.px(value),
      marginBottom: SpacingUtils.px(value)
    }),
  },

  /**
   * Create padding styles
   */
  padding: {
    all: (value: keyof typeof AtomicSpacing) => ({ padding: SpacingUtils.px(value) }),
    top: (value: keyof typeof AtomicSpacing) => ({ paddingTop: SpacingUtils.px(value) }),
    right: (value: keyof typeof AtomicSpacing) => ({ paddingRight: SpacingUtils.px(value) }),
    bottom: (value: keyof typeof AtomicSpacing) => ({ paddingBottom: SpacingUtils.px(value) }),
    left: (value: keyof typeof AtomicSpacing) => ({ paddingLeft: SpacingUtils.px(value) }),
    horizontal: (value: keyof typeof AtomicSpacing) => ({ 
      paddingLeft: SpacingUtils.px(value),
      paddingRight: SpacingUtils.px(value)
    }),
    vertical: (value: keyof typeof AtomicSpacing) => ({ 
      paddingTop: SpacingUtils.px(value),
      paddingBottom: SpacingUtils.px(value)
    }),
  },

  /**
   * Create gap styles (for flexbox/grid)
   */
  gap: (value: keyof typeof AtomicSpacing) => ({ gap: SpacingUtils.px(value) }),
}

/**
 * CSS Custom Properties for spacing
 */
export const AtomicSpacingCss = {
  '--atomic-spacing-unit': `${AtomicSpacing.unit}px`,
  '--atomic-spacing-xxs': `${AtomicSpacing.xxs}px`,
  '--atomic-spacing-xs': `${AtomicSpacing.xs}px`,
  '--atomic-spacing-sm': `${AtomicSpacing.sm}px`,
  '--atomic-spacing-md': `${AtomicSpacing.md}px`,
  '--atomic-spacing-lg': `${AtomicSpacing.lg}px`,
  '--atomic-spacing-xl': `${AtomicSpacing.xl}px`,
  '--atomic-spacing-xxl': `${AtomicSpacing.xxl}px`,
  '--atomic-spacing-xxxl': `${AtomicSpacing.xxxl}px`,
  '--atomic-spacing-huge': `${AtomicSpacing.huge}px`,
  
  // Component spacing
  '--atomic-button-padding-x': `${AtomicSpacing.buttonPaddingX}px`,
  '--atomic-button-padding-y': `${AtomicSpacing.buttonPaddingY}px`,
  '--atomic-card-padding': `${AtomicSpacing.cardPadding}px`,
  '--atomic-card-margin': `${AtomicSpacing.cardMargin}px`,
  '--atomic-list-item-padding': `${AtomicSpacing.listItemPadding}px`,
  '--atomic-list-item-spacing': `${AtomicSpacing.listItemSpacing}px`,
  '--atomic-input-padding-x': `${AtomicSpacing.inputPaddingX}px`,
  '--atomic-input-padding-y': `${AtomicSpacing.inputPaddingY}px`,
  '--atomic-modal-padding': `${AtomicSpacing.modalPadding}px`,
  '--atomic-section-padding': `${AtomicSpacing.sectionPadding}px`,
} as const

// Type definitions
export type AtomicSpacingKey = keyof typeof AtomicSpacing
export type AtomicSpacingValue = typeof AtomicSpacing[AtomicSpacingKey]