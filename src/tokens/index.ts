/**
 * Design Tokens Export
 * All design tokens for the Atomic Next design system
 */

// Colors
export {
  AtomicColors,
  ColorUtils,
  AtomicColorsCss,
  type AtomicColor,
  type AtomicColorValue,
} from './colors/atomic-colors'

// Spacing
export {
  AtomicSpacing,
  SpacingUtils,
  AtomicSpacingCss,
  type AtomicSpacingKey,
  type AtomicSpacingValue,
} from './spacing/atomic-spacing'

// Typography
export {
  AtomicTypography,
  TypographyUtils,
  AtomicTextStyles,
  AtomicTypographyCss,
  type AtomicFontSize,
  type AtomicFontWeight,
  type AtomicLineHeight,
  type AtomicLetterSpacing,
  type AtomicFontFamily,
  type AtomicTextStyle,
} from './typography/atomic-typography'

// Shadows
export {
  AtomicShadows,
  ShadowUtils,
  AtomicShadowsCss,
  type AtomicShadowKey,
  type AtomicShadowValue,
} from './shadows/atomic-shadows'

// Borders
export {
  AtomicBorders,
  BorderUtils,
  AtomicBordersCss,
  type AtomicBorderRadius,
  type AtomicBorderWidth,
  type AtomicBorderStyle,
} from './borders/atomic-borders'

// Animations
export {
  AtomicAnimations,
  AnimationUtils,
  AtomicAnimationPresets,
  AtomicAnimationsCss,
  type AtomicAnimationDuration,
  type AtomicAnimationEasing,
  type AtomicAnimationScale,
  type AtomicAnimationRotate,
} from './animations/atomic-animations'

// Enums
export {
  AtomicSize,
  AtomicColorVariant,
  AtomicButtonVariant,
  AtomicInputVariant,
  AtomicCardVariant,
  AtomicLoadingState,
  AtomicStatus,
  AtomicAlertType,
  AtomicModalSize,
  AtomicTextVariant,
  AtomicPosition,
  AtomicAlignment,
  AtomicOrientation,
  AtomicDirection,
  AtomicAnimationState,
  AtomicFormFieldState,
  AtomicBreakpoint,
  AtomicThemeMode,
  AtomicEnumUtils,
  type AtomicSizeType,
  type AtomicColorVariantType,
  type AtomicButtonVariantType,
  type AtomicInputVariantType,
  type AtomicCardVariantType,
  type AtomicLoadingStateType,
  type AtomicStatusType,
  type AtomicAlertTypeType,
  type AtomicModalSizeType,
  type AtomicTextVariantType,
  type AtomicPositionType,
  type AtomicAlignmentType,
  type AtomicOrientationType,
  type AtomicDirectionType,
  type AtomicAnimationStateType,
  type AtomicFormFieldStateType,
  type AtomicBreakpointType,
  type AtomicThemeModeType,
} from './enums/atomic-enums'

/**
 * Combined CSS Custom Properties
 * All design tokens as CSS custom properties for use in CSS
 */
import { AtomicColorsCss } from './colors/atomic-colors'
import { AtomicSpacingCss } from './spacing/atomic-spacing' 
import { AtomicTypographyCss } from './typography/atomic-typography'
import { AtomicShadowsCss } from './shadows/atomic-shadows'
import { AtomicBordersCss } from './borders/atomic-borders'
import { AtomicAnimationsCss } from './animations/atomic-animations'

export const AtomicDesignTokensCss = {
  ...AtomicColorsCss,
  ...AtomicSpacingCss,
  ...AtomicTypographyCss,
  ...AtomicShadowsCss,
  ...AtomicBordersCss,
  ...AtomicAnimationsCss,
} as const