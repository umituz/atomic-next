import React from 'react';
import { cn } from '../../utils';

// Size types
type SwitchSize = 'sm' | 'md' | 'lg';

// Color types
type Color = 
  | 'slate' | 'gray' | 'zinc' | 'red' | 'orange' | 'yellow' 
  | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';

// Spacing types
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

export interface AtomicSwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'color' | 'onChange'> {
  // State
  checked?: boolean;
  disabled?: boolean;
  
  // Appearance
  size?: SwitchSize;
  color?: Color;
  
  // Spacing
  p?: Spacing | SpacingObject;
  m?: Spacing | SpacingObject;
  
  // Label
  label?: string;
  description?: string;
  labelPosition?: 'left' | 'right';
  
  // Loading state
  loading?: boolean;
  
  // Events
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;
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

const getSizeClasses = (size: SwitchSize): { 
  track: string; 
  thumb: string; 
  thumbTranslate: string;
  container: string;
} => {
  switch (size) {
    case 'sm':
      return {
        track: 'w-9 h-5',
        thumb: 'w-4 h-4',
        thumbTranslate: 'translate-x-4',
        container: 'text-sm'
      };
    case 'md':
      return {
        track: 'w-11 h-6',
        thumb: 'w-5 h-5',
        thumbTranslate: 'translate-x-5',
        container: 'text-base'
      };
    case 'lg':
      return {
        track: 'w-14 h-7',
        thumb: 'w-6 h-6',
        thumbTranslate: 'translate-x-7',
        container: 'text-lg'
      };
    default:
      return {
        track: 'w-11 h-6',
        thumb: 'w-5 h-5',
        thumbTranslate: 'translate-x-5',
        container: 'text-base'
      };
  }
};

const getColorClasses = (color: Color, checked: boolean): string => {
  if (!checked) {
    return 'bg-gray-200';
  }
  
  const colorMap = {
    slate: 'bg-slate-500',
    gray: 'bg-gray-500',
    zinc: 'bg-zinc-500',
    red: 'bg-red-500',
    orange: 'bg-orange-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    indigo: 'bg-indigo-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500'
  };
  
  return colorMap[color] || colorMap.blue;
};

export const AtomicSwitch = React.forwardRef<HTMLInputElement, AtomicSwitchProps>(
  ({
    checked = false,
    disabled = false,
    size = 'md',
    color = 'blue',
    p,
    m,
    label,
    description,
    labelPosition = 'right',
    loading = false,
    className,
    onChange,
    id,
    ...rest
  }, ref) => {
    const switchId = id || `switch-${React.useId()}`;
    const sizeClasses = getSizeClasses(size);
    const colorClasses = getColorClasses(color, checked);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled && !loading) {
        onChange?.(event.target.checked, event);
      }
    };

    const containerClasses = cn(
      // Base styles
      'relative flex items-center',
      
      // Size
      sizeClasses.container,
      
      // Spacing
      getSpacingClass(p, 'p'),
      getSpacingClass(m, 'm'),
      
      // Disabled
      disabled && 'opacity-50 cursor-not-allowed',
      
      className
    );

    const trackClasses = cn(
      // Base styles
      'relative inline-flex flex-shrink-0 rounded-full border-2 border-transparent transition-colors ease-in-out duration-200',
      
      // Size
      sizeClasses.track,
      
      // Colors
      colorClasses,
      
      // Focus styles
      'focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2',
      `focus-within:ring-${color}-500`,
      
      // Interactive
      disabled || loading ? 'cursor-not-allowed' : 'cursor-pointer'
    );

    const thumbClasses = cn(
      // Base styles
      'pointer-events-none inline-block rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
      
      // Size
      sizeClasses.thumb,
      
      // Position
      checked ? sizeClasses.thumbTranslate : 'translate-x-0'
    );

    const switchElement = (
      <div className={trackClasses}>
        <input
          ref={ref}
          type="checkbox"
          id={switchId}
          checked={checked}
          disabled={disabled || loading}
          onChange={handleChange}
          className="sr-only"
          {...rest}
        />
        
        <span className={thumbClasses}>
          {loading && (
            <svg
              className="animate-spin -ml-1 -mt-1 h-3 w-3 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
        </span>
      </div>
    );

    const labelElement = (label || description) && (
      <div className={cn(
        'flex-1',
        labelPosition === 'left' ? 'mr-3' : 'ml-3'
      )}>
        {label && (
          <label 
            htmlFor={switchId}
            className={cn(
              'block font-medium leading-5 text-gray-700',
              disabled || loading ? 'cursor-not-allowed' : 'cursor-pointer'
            )}
          >
            {label}
          </label>
        )}
        
        {description && (
          <p className="text-sm leading-5 text-gray-500">
            {description}
          </p>
        )}
      </div>
    );

    return (
      <div className={containerClasses}>
        {labelPosition === 'left' && labelElement}
        {switchElement}
        {labelPosition === 'right' && labelElement}
      </div>
    );
  }
);

AtomicSwitch.displayName = 'AtomicSwitch';