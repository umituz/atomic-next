
// ⚠️  NOTICE: AtomicTypography has been moved to React Native template system
// This file now only contains CSS variables for web/Next.js usage
// For React Native projects, use: generator/tech-stack/react-native/templates/atomics/tokens/AtomicDesignTokens.ts

// Basic typography definitions for CSS variable generation
const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    serif: ['Charter', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
    mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
  },
  fontWeight: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  fontSize: {
    displayLarge: 57,
    displayMedium: 45,
    displaySmall: 36,
    headlineLarge: 32,
    headlineMedium: 28,
    headlineSmall: 24,
    titleLarge: 22,
    titleMedium: 16,
    titleSmall: 14,
    bodyLarge: 16,
    bodyMedium: 14,
    bodySmall: 12,
    labelLarge: 14,
    labelMedium: 12,
    labelSmall: 11,
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
}

// ⚠️  NOTICE: TypographyUtils has been moved to React Native template system
// For React Native projects, use: AtomicTypographyUtils in AtomicDesignTokens.ts

// ⚠️  NOTICE: AtomicTextStyles has been moved to React Native template system
// For React Native projects, use: AtomicTextStyles in AtomicDesignTokens.ts

/**
 * CSS Variables for Web/Next.js usage
 * These are the only typography exports needed for atomic-next package
 */
export const AtomicTypographyCss = {

  '--atomic-font-sans': typography.fontFamily.sans.join(', '),
  '--atomic-font-serif': typography.fontFamily.serif.join(', '),
  '--atomic-font-mono': typography.fontFamily.mono.join(', '),


  '--atomic-font-thin': typography.fontWeight.thin.toString(),
  '--atomic-font-light': typography.fontWeight.light.toString(),
  '--atomic-font-regular': typography.fontWeight.regular.toString(),
  '--atomic-font-medium': typography.fontWeight.medium.toString(),
  '--atomic-font-semibold': typography.fontWeight.semibold.toString(),
  '--atomic-font-bold': typography.fontWeight.bold.toString(),
  '--atomic-font-extrabold': typography.fontWeight.extrabold.toString(),
  '--atomic-font-black': typography.fontWeight.black.toString(),


  '--atomic-text-display-large': `${typography.fontSize.displayLarge}px`,
  '--atomic-text-display-medium': `${typography.fontSize.displayMedium}px`,
  '--atomic-text-display-small': `${typography.fontSize.displaySmall}px`,
  '--atomic-text-headline-large': `${typography.fontSize.headlineLarge}px`,
  '--atomic-text-headline-medium': `${typography.fontSize.headlineMedium}px`,
  '--atomic-text-headline-small': `${typography.fontSize.headlineSmall}px`,
  '--atomic-text-title-large': `${typography.fontSize.titleLarge}px`,
  '--atomic-text-title-medium': `${typography.fontSize.titleMedium}px`,
  '--atomic-text-title-small': `${typography.fontSize.titleSmall}px`,
  '--atomic-text-body-large': `${typography.fontSize.bodyLarge}px`,
  '--atomic-text-body-medium': `${typography.fontSize.bodyMedium}px`,
  '--atomic-text-body-small': `${typography.fontSize.bodySmall}px`,
  '--atomic-text-label-large': `${typography.fontSize.labelLarge}px`,
  '--atomic-text-label-medium': `${typography.fontSize.labelMedium}px`,
  '--atomic-text-label-small': `${typography.fontSize.labelSmall}px`,


  '--atomic-leading-none': typography.lineHeight.none.toString(),
  '--atomic-leading-tight': typography.lineHeight.tight.toString(),
  '--atomic-leading-snug': typography.lineHeight.snug.toString(),
  '--atomic-leading-normal': typography.lineHeight.normal.toString(),
  '--atomic-leading-relaxed': typography.lineHeight.relaxed.toString(),
  '--atomic-leading-loose': typography.lineHeight.loose.toString(),


  '--atomic-tracking-tighter': typography.letterSpacing.tighter,
  '--atomic-tracking-tight': typography.letterSpacing.tight,
  '--atomic-tracking-normal': typography.letterSpacing.normal,
  '--atomic-tracking-wide': typography.letterSpacing.wide,
  '--atomic-tracking-wider': typography.letterSpacing.wider,
  '--atomic-tracking-widest': typography.letterSpacing.widest,
} as const

// ⚠️  NOTICE: Type definitions have been moved to React Native template system
// For React Native projects, use types from AtomicDesignTokens.ts