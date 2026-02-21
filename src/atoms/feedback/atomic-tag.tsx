import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils';

type TagVariant = 
  | 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
  | 'outline' | 'ghost' | 'solid';

type TagSize = 'xs' | 'sm' | 'md' | 'lg';

type Color = 
  | 'slate' | 'gray' | 'zinc' | 'red' | 'orange' | 'yellow' 
  | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';

type Spacing = 
  | '0' | 'px' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8';

type SpacingObject = {
  x?: Spacing;
  y?: Spacing;
  t?: Spacing;
  r?: Spacing;
  b?: Spacing;
  l?: Spacing;
};

export interface AtomicTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: TagVariant;
  size?: TagSize;
  color?: Color;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  p?: Spacing | SpacingObject;
  m?: Spacing | SpacingObject;
  clickable?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  disabled?: boolean;
  as?: 'span' | 'div' | 'button';
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

const getVariantClasses = (variant: TagVariant, color?: Color): string => {
  const baseColor = color || 'gray';
  
  switch (variant) {
    case 'primary':
      return `bg-blue-500 text-white border-blue-500`;
    case 'secondary':
      return `bg-gray-500 text-white border-gray-500`;
    case 'success':
      return `bg-green-500 text-white border-green-500`;
    case 'warning':
      return `bg-yellow-500 text-white border-yellow-500`;
    case 'danger':
      return `bg-red-500 text-white border-red-500`;
    case 'info':
      return `bg-blue-500 text-white border-blue-500`;
    case 'outline':
      return `bg-transparent text-${baseColor}-700 border-${baseColor}-300 border`;
    case 'ghost':
      return `bg-${baseColor}-100 text-${baseColor}-700 border-transparent`;
    case 'solid':
      return `bg-${baseColor}-500 text-white border-${baseColor}-500`;
    default:
      return `bg-gray-100 text-gray-800 border-gray-200 border`;
  }
};

const getSizeClasses = (size: TagSize): string => {
  switch (size) {
    case 'xs':
      return 'px-1.5 py-0.5 text-xs';
    case 'sm':
      return 'px-2 py-1 text-xs';
    case 'md':
      return 'px-2.5 py-1.5 text-sm';
    case 'lg':
      return 'px-3 py-2 text-base';
    default:
      return 'px-2.5 py-1.5 text-sm';
  }
};

const getIconSize = (size: TagSize): number => {
  switch (size) {
    case 'xs': return 10;
    case 'sm': return 12;
    case 'md': return 14;
    case 'lg': return 16;
    default: return 14;
  }
};

export const AtomicTag = React.forwardRef<HTMLElement, AtomicTagProps>(
  ({
    children,
    variant = 'default',
    size = 'md',
    color,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    p,
    m,
    clickable = false,
    removable = false,
    onRemove,
    disabled = false,
    as: Component = 'span',
    className,
    onClick,
    ...rest
  }, ref) => {
    const iconSize = getIconSize(size);
    
    const classes = cn(
      'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200',
      getVariantClasses(variant, color),
      getSizeClasses(size),
      getSpacingClass(p, 'p'),
      getSpacingClass(m, 'm'),
      clickable && !disabled && [
        'cursor-pointer',
        'hover:opacity-80',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
      ],
      
      removable && !disabled && 'pr-1',
      
      disabled && 'opacity-50 cursor-not-allowed',
      
      className
    );

    const content = (
      <>
        {LeftIcon && (
          <LeftIcon 
            size={iconSize} 
            className={cn(
              'flex-shrink-0',
              children ? 'mr-1.5' : ''
            )}
          />
        )}
        
        {children && <span className="truncate">{children}</span>}
        
        {RightIcon && (
          <RightIcon 
            size={iconSize} 
            className={cn(
              'flex-shrink-0',
              children ? 'ml-1.5' : ''
            )}
          />
        )}
        
        {removable && (
          <button
            type="button"
            className={cn(
              'flex-shrink-0 ml-1.5 rounded-full p-0.5',
              'hover:bg-black hover:bg-opacity-20',
              'focus:outline-none focus:bg-black focus:bg-opacity-20',
              disabled && 'cursor-not-allowed'
            )}
            onClick={(e) => {
              e.stopPropagation();
              if (!disabled) onRemove?.();
            }}
            disabled={disabled}
            aria-label="Remove"
          >
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </>
    );

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      if (!disabled) {
        onClick?.(e as any);
      }
    };

    return (
      <Component
        ref={ref as any}
        className={classes}
        onClick={clickable ? handleClick : undefined}
        {...rest}
      >
        {content}
      </Component>
    );
  }
);

AtomicTag.displayName = 'AtomicTag';