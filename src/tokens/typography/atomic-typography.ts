/**
 * Atomic Design System Typography Tokens
 * Following modern typography principles and accessibility guidelines
 */

export const AtomicTypography = {
  // ===== FONT FAMILIES =====
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    serif: ['Charter', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
    mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
  },

  // ===== FONT WEIGHTS =====
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

  // ===== FONT SIZES =====
  fontSize: {
    // Display sizes
    displayLarge: 57,
    displayMedium: 45,
    displaySmall: 36,
    
    // Headline sizes
    headlineLarge: 32,
    headlineMedium: 28,
    headlineSmall: 24,
    
    // Title sizes
    titleLarge: 22,
    titleMedium: 16,
    titleSmall: 14,
    
    // Body sizes
    bodyLarge: 16,
    bodyMedium: 14,
    bodySmall: 12,
    
    // Label sizes
    labelLarge: 14,
    labelMedium: 12,
    labelSmall: 11,
  },

  // ===== LINE HEIGHTS =====
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  // ===== LETTER SPACING =====
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const

/**
 * Typography utility functions
 */
export const TypographyUtils = {
  /**
   * Create text style object
   */
  style: (config: {
    fontSize?: keyof typeof AtomicTypography.fontSize
    fontWeight?: keyof typeof AtomicTypography.fontWeight
    lineHeight?: keyof typeof AtomicTypography.lineHeight
    letterSpacing?: keyof typeof AtomicTypography.letterSpacing
    fontFamily?: keyof typeof AtomicTypography.fontFamily
    color?: string
  }) => ({
    fontSize: config.fontSize ? `${AtomicTypography.fontSize[config.fontSize]}px` : undefined,
    fontWeight: config.fontWeight ? AtomicTypography.fontWeight[config.fontWeight] : undefined,
    lineHeight: config.lineHeight ? AtomicTypography.lineHeight[config.lineHeight] : undefined,
    letterSpacing: config.letterSpacing ? AtomicTypography.letterSpacing[config.letterSpacing] : undefined,
    fontFamily: config.fontFamily ? AtomicTypography.fontFamily[config.fontFamily].join(', ') : undefined,
    color: config.color,
  }),

  /**
   * Get font size in rem units (assuming 16px base)
   */
  rem: (size: keyof typeof AtomicTypography.fontSize): string => {
    return `${AtomicTypography.fontSize[size] / 16}rem`
  },

  /**
   * Get font size in px units
   */
  px: (size: keyof typeof AtomicTypography.fontSize): string => {
    return `${AtomicTypography.fontSize[size]}px`
  },
}

/**
 * Predefined text styles following design system patterns
 */
export const AtomicTextStyles = {
  // Display styles
  displayLarge: TypographyUtils.style({
    fontSize: 'displayLarge',
    fontWeight: 'regular',
    lineHeight: 'tight',
    letterSpacing: 'tighter',
  }),
  
  displayMedium: TypographyUtils.style({
    fontSize: 'displayMedium',
    fontWeight: 'regular',
    lineHeight: 'tight',
    letterSpacing: 'normal',
  }),
  
  displaySmall: TypographyUtils.style({
    fontSize: 'displaySmall',
    fontWeight: 'regular',
    lineHeight: 'tight',
    letterSpacing: 'normal',
  }),

  // Headline styles
  headlineLarge: TypographyUtils.style({
    fontSize: 'headlineLarge',
    fontWeight: 'regular',
    lineHeight: 'snug',
    letterSpacing: 'normal',
  }),
  
  headlineMedium: TypographyUtils.style({
    fontSize: 'headlineMedium',
    fontWeight: 'regular',
    lineHeight: 'snug',
    letterSpacing: 'normal',
  }),
  
  headlineSmall: TypographyUtils.style({
    fontSize: 'headlineSmall',
    fontWeight: 'regular',
    lineHeight: 'snug',
    letterSpacing: 'normal',
  }),

  // Title styles
  titleLarge: TypographyUtils.style({
    fontSize: 'titleLarge',
    fontWeight: 'medium',
    lineHeight: 'snug',
    letterSpacing: 'normal',
  }),
  
  titleMedium: TypographyUtils.style({
    fontSize: 'titleMedium',
    fontWeight: 'medium',
    lineHeight: 'normal',
    letterSpacing: 'wide',
  }),
  
  titleSmall: TypographyUtils.style({
    fontSize: 'titleSmall',
    fontWeight: 'medium',
    lineHeight: 'normal',
    letterSpacing: 'wide',
  }),

  // Body styles
  bodyLarge: TypographyUtils.style({
    fontSize: 'bodyLarge',
    fontWeight: 'regular',
    lineHeight: 'normal',
    letterSpacing: 'wide',
  }),
  
  bodyMedium: TypographyUtils.style({
    fontSize: 'bodyMedium',
    fontWeight: 'regular',
    lineHeight: 'normal',
    letterSpacing: 'wide',
  }),
  
  bodySmall: TypographyUtils.style({
    fontSize: 'bodySmall',
    fontWeight: 'regular',
    lineHeight: 'snug',
    letterSpacing: 'wider',
  }),

  // Label styles
  labelLarge: TypographyUtils.style({
    fontSize: 'labelLarge',
    fontWeight: 'medium',
    lineHeight: 'normal',
    letterSpacing: 'wide',
  }),
  
  labelMedium: TypographyUtils.style({
    fontSize: 'labelMedium',
    fontWeight: 'medium',
    lineHeight: 'snug',
    letterSpacing: 'wider',
  }),
  
  labelSmall: TypographyUtils.style({
    fontSize: 'labelSmall',
    fontWeight: 'medium',
    lineHeight: 'normal',
    letterSpacing: 'wider',
  }),
} as const

/**
 * CSS Custom Properties for typography
 */
export const AtomicTypographyCss = {
  // Font families
  '--atomic-font-sans': AtomicTypography.fontFamily.sans.join(', '),
  '--atomic-font-serif': AtomicTypography.fontFamily.serif.join(', '),
  '--atomic-font-mono': AtomicTypography.fontFamily.mono.join(', '),
  
  // Font weights
  '--atomic-font-thin': AtomicTypography.fontWeight.thin.toString(),
  '--atomic-font-light': AtomicTypography.fontWeight.light.toString(),
  '--atomic-font-regular': AtomicTypography.fontWeight.regular.toString(),
  '--atomic-font-medium': AtomicTypography.fontWeight.medium.toString(),
  '--atomic-font-semibold': AtomicTypography.fontWeight.semibold.toString(),
  '--atomic-font-bold': AtomicTypography.fontWeight.bold.toString(),
  '--atomic-font-extrabold': AtomicTypography.fontWeight.extrabold.toString(),
  '--atomic-font-black': AtomicTypography.fontWeight.black.toString(),
  
  // Font sizes
  '--atomic-text-display-large': `${AtomicTypography.fontSize.displayLarge}px`,
  '--atomic-text-display-medium': `${AtomicTypography.fontSize.displayMedium}px`,
  '--atomic-text-display-small': `${AtomicTypography.fontSize.displaySmall}px`,
  '--atomic-text-headline-large': `${AtomicTypography.fontSize.headlineLarge}px`,
  '--atomic-text-headline-medium': `${AtomicTypography.fontSize.headlineMedium}px`,
  '--atomic-text-headline-small': `${AtomicTypography.fontSize.headlineSmall}px`,
  '--atomic-text-title-large': `${AtomicTypography.fontSize.titleLarge}px`,
  '--atomic-text-title-medium': `${AtomicTypography.fontSize.titleMedium}px`,
  '--atomic-text-title-small': `${AtomicTypography.fontSize.titleSmall}px`,
  '--atomic-text-body-large': `${AtomicTypography.fontSize.bodyLarge}px`,
  '--atomic-text-body-medium': `${AtomicTypography.fontSize.bodyMedium}px`,
  '--atomic-text-body-small': `${AtomicTypography.fontSize.bodySmall}px`,
  '--atomic-text-label-large': `${AtomicTypography.fontSize.labelLarge}px`,
  '--atomic-text-label-medium': `${AtomicTypography.fontSize.labelMedium}px`,
  '--atomic-text-label-small': `${AtomicTypography.fontSize.labelSmall}px`,
  
  // Line heights
  '--atomic-leading-none': AtomicTypography.lineHeight.none.toString(),
  '--atomic-leading-tight': AtomicTypography.lineHeight.tight.toString(),
  '--atomic-leading-snug': AtomicTypography.lineHeight.snug.toString(),
  '--atomic-leading-normal': AtomicTypography.lineHeight.normal.toString(),
  '--atomic-leading-relaxed': AtomicTypography.lineHeight.relaxed.toString(),
  '--atomic-leading-loose': AtomicTypography.lineHeight.loose.toString(),
  
  // Letter spacing
  '--atomic-tracking-tighter': AtomicTypography.letterSpacing.tighter,
  '--atomic-tracking-tight': AtomicTypography.letterSpacing.tight,
  '--atomic-tracking-normal': AtomicTypography.letterSpacing.normal,
  '--atomic-tracking-wide': AtomicTypography.letterSpacing.wide,
  '--atomic-tracking-wider': AtomicTypography.letterSpacing.wider,
  '--atomic-tracking-widest': AtomicTypography.letterSpacing.widest,
} as const

// Type definitions
export type AtomicFontSize = keyof typeof AtomicTypography.fontSize
export type AtomicFontWeight = keyof typeof AtomicTypography.fontWeight
export type AtomicLineHeight = keyof typeof AtomicTypography.lineHeight
export type AtomicLetterSpacing = keyof typeof AtomicTypography.letterSpacing
export type AtomicFontFamily = keyof typeof AtomicTypography.fontFamily
export type AtomicTextStyle = keyof typeof AtomicTextStyles