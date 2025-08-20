import React from 'react';
import { LucideIcon, LucideProps } from 'lucide-react';
import { cn } from '../../utils';

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number | string;

type Color = 
  | 'current' | 'black' | 'white'
  | 'slate-50' | 'slate-100' | 'slate-200' | 'slate-300' | 'slate-400' | 'slate-500' | 'slate-600' | 'slate-700' | 'slate-800' | 'slate-900'
  | 'gray-50' | 'gray-100' | 'gray-200' | 'gray-300' | 'gray-400' | 'gray-500' | 'gray-600' | 'gray-700' | 'gray-800' | 'gray-900'
  | 'zinc-50' | 'zinc-100' | 'zinc-200' | 'zinc-300' | 'zinc-400' | 'zinc-500' | 'zinc-600' | 'zinc-700' | 'zinc-800' | 'zinc-900'
  | 'red-50' | 'red-100' | 'red-200' | 'red-300' | 'red-400' | 'red-500' | 'red-600' | 'red-700' | 'red-800' | 'red-900'
  | 'orange-50' | 'orange-100' | 'orange-200' | 'orange-300' | 'orange-400' | 'orange-500' | 'orange-600' | 'orange-700' | 'orange-800' | 'orange-900'
  | 'yellow-50' | 'yellow-100' | 'yellow-200' | 'yellow-300' | 'yellow-400' | 'yellow-500' | 'yellow-600' | 'yellow-700' | 'yellow-800' | 'yellow-900'
  | 'green-50' | 'green-100' | 'green-200' | 'green-300' | 'green-400' | 'green-500' | 'green-600' | 'green-700' | 'green-800' | 'green-900'
  | 'blue-50' | 'blue-100' | 'blue-200' | 'blue-300' | 'blue-400' | 'blue-500' | 'blue-600' | 'blue-700' | 'blue-800' | 'blue-900'
  | 'indigo-50' | 'indigo-100' | 'indigo-200' | 'indigo-300' | 'indigo-400' | 'indigo-500' | 'indigo-600' | 'indigo-700' | 'indigo-800' | 'indigo-900'
  | 'purple-50' | 'purple-100' | 'purple-200' | 'purple-300' | 'purple-400' | 'purple-500' | 'purple-600' | 'purple-700' | 'purple-800' | 'purple-900'
  | 'pink-50' | 'pink-100' | 'pink-200' | 'pink-300' | 'pink-400' | 'pink-500' | 'pink-600' | 'pink-700' | 'pink-800' | 'pink-900';

type Spacing = 
  | '0' | 'px' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8'
  | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48';

type SpacingObject = {
  x?: Spacing;
  y?: Spacing;
  t?: Spacing;
  r?: Spacing;
  b?: Spacing;
  l?: Spacing;
};

export interface AtomicIconProps extends Omit<LucideProps, 'size' | 'color'> {
  icon: LucideIcon;
  size?: IconSize;
  color?: Color;
  hoverColor?: Color;
  p?: Spacing | SpacingObject;
  m?: Spacing | SpacingObject;
  cursor?: 'auto' | 'default' | 'pointer' | 'wait' | 'help' | 'not-allowed';
  spin?: boolean;
  pulse?: boolean;
  bounce?: boolean;
  rotate?: '0' | '45' | '90' | '180' | '-45' | '-90' | '-180';
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

const getSpacingClass = (spacing: Spacing | SpacingObject | undefined, prefix: string): string => {
  if (!spacing) return '';
  
  if (typeof spacing === 'string') {
    return `${prefix}-${spacing}`;
  }
  
  const classes: string[] = [];
  if (spacing.x !== undefined) classes.push(`${prefix}x-${spacing.x}`);
  if (spacing.y !== undefined) classes.push(`${prefix}y-${spacing.y}`);
  if (spacing.t !== undefined) classes.push(`${prefix}t-${spacing.t}`);
  if (spacing.r !== undefined) classes.push(`${prefix}r-${spacing.r}`);
  if (spacing.b !== undefined) classes.push(`${prefix}b-${spacing.b}`);
  if (spacing.l !== undefined) classes.push(`${prefix}l-${spacing.l}`);
  
  return classes.join(' ');
};

const getSizeValue = (size: IconSize): number => {
  if (typeof size === 'number') return size;
  if (typeof size === 'string' && !isNaN(Number(size))) return Number(size);
  
  switch (size) {
    case 'xs': return 12;
    case 'sm': return 16;
    case 'md': return 20;
    case 'lg': return 24;
    case 'xl': return 28;
    case '2xl': return 32;
    default: return 20;
  }
};

export const AtomicIcon = React.forwardRef<SVGSVGElement, AtomicIconProps>(
  ({
    icon: Icon,
    size = 'md',
    color,
    hoverColor,
    p,
    m,
    cursor,
    spin = false,
    pulse = false,
    bounce = false,
    rotate,
    className,
    'aria-label': ariaLabel,
    'aria-hidden': ariaHidden = false,
    ...rest
  }, ref) => {
    const sizeValue = getSizeValue(size);
    
    const classes = cn(
      'inline-block flex-shrink-0',
      color && `text-${color}`,
      hoverColor && `hover:text-${hoverColor}`,
      getSpacingClass(p, 'p'),
      getSpacingClass(m, 'm'),
      cursor && `cursor-${cursor}`,
      spin && 'animate-spin',
      pulse && 'animate-pulse',
      bounce && 'animate-bounce',
      rotate && `rotate-${rotate}`,
      (hoverColor || cursor === 'pointer') && 'transition-colors duration-200',
      
      className
    );

    return (
      <Icon
        ref={ref}
        size={sizeValue}
        className={classes}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        {...rest}
      />
    );
  }
);

AtomicIcon.displayName = 'AtomicIcon';