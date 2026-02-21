
// ⚠️  NOTICE: Core design system components have been moved to React Native template system
// This package now only exports CSS variables for web/Next.js usage
// For React Native projects, use: generator/tech-stack/react-native/templates/atomics/tokens/AtomicDesignTokens.ts

export {
  AtomicColorsCss,
} from './colors/atomic-colors'

export {
  AtomicSpacingCss,
} from './spacing/atomic-spacing'

export {
  AtomicTypographyCss,
} from './typography/atomic-typography'

export {
  AtomicShadows,
  ShadowUtils,
  AtomicShadowsCss,
  type AtomicShadowKey,
  type AtomicShadowValue,
} from './shadows/atomic-shadows'

export {
  AtomicBorders,
  BorderUtils,
  AtomicBordersCss,
  type AtomicBorderRadius,
  type AtomicBorderWidth,
  type AtomicBorderStyle,
} from './borders/atomic-borders'

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