
// ⚠️  NOTICE: AtomicSpacing has been moved to React Native template system
// This file now only contains CSS variables for web/Next.js usage
// For React Native projects, use: generator/tech-stack/react-native/templates/atomics/tokens/AtomicDesignTokens.ts

// Basic spacing definitions for CSS variable generation
const spacing = {
  unit: 8,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  xxxl: 48,
  huge: 64,
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
}

// ⚠️  NOTICE: SpacingUtils has been moved to React Native template system
// For React Native projects, use: AtomicSpacingUtils in AtomicDesignTokens.ts

/**
 * CSS Variables for Web/Next.js usage
 * These are the only spacing exports needed for atomic-next package
 */
export const AtomicSpacingCss = {
  '--atomic-spacing-unit': `${spacing.unit}px`,
  '--atomic-spacing-xxs': `${spacing.xxs}px`,
  '--atomic-spacing-xs': `${spacing.xs}px`,
  '--atomic-spacing-sm': `${spacing.sm}px`,
  '--atomic-spacing-md': `${spacing.md}px`,
  '--atomic-spacing-lg': `${spacing.lg}px`,
  '--atomic-spacing-xl': `${spacing.xl}px`,
  '--atomic-spacing-xxl': `${spacing.xxl}px`,
  '--atomic-spacing-xxxl': `${spacing.xxxl}px`,
  '--atomic-spacing-huge': `${spacing.huge}px`,


  '--atomic-button-padding-x': `${spacing.buttonPaddingX}px`,
  '--atomic-button-padding-y': `${spacing.buttonPaddingY}px`,
  '--atomic-card-padding': `${spacing.cardPadding}px`,
  '--atomic-card-margin': `${spacing.cardMargin}px`,
  '--atomic-list-item-padding': `${spacing.listItemPadding}px`,
  '--atomic-list-item-spacing': `${spacing.listItemSpacing}px`,
  '--atomic-input-padding-x': `${spacing.inputPaddingX}px`,
  '--atomic-input-padding-y': `${spacing.inputPaddingY}px`,
  '--atomic-modal-padding': `${spacing.modalPadding}px`,
  '--atomic-section-padding': `${spacing.sectionPadding}px`,
} as const

// ⚠️  NOTICE: Type definitions have been moved to React Native template system
// For React Native projects, use types from AtomicDesignTokens.ts