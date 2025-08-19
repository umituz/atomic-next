import React from 'react';
import { Check, Minus } from 'lucide-react';
import { cn } from '../../utils';

// Size types
type CheckboxSize = 'sm' | 'md' | 'lg';

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

export interface AtomicCheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'color' | 'onChange'> {
  // State
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  
  // Appearance
  size?: CheckboxSize;
  color?: Color;
  
  // Spacing
  p?: Spacing | SpacingObject;
  m?: Spacing | SpacingObject;
  
  // Label
  label?: string;
  description?: string;
  
  // Error state
  error?: boolean;
  errorMessage?: string;
  
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

const getSizeClasses = (size: CheckboxSize): { container: string; checkbox: string; icon: number } => {
  switch (size) {
    case 'sm':
      return {
        container: 'text-sm',
        checkbox: 'w-4 h-4',
        icon: 12
      };
    case 'md':
      return {
        container: 'text-base',
        checkbox: 'w-5 h-5',
        icon: 14
      };
    case 'lg':
      return {
        container: 'text-lg',
        checkbox: 'w-6 h-6',
        icon: 16
      };
    default:
      return {
        container: 'text-base',
        checkbox: 'w-5 h-5',
        icon: 14
      };
  }
};

const getColorClasses = (color: Color, error: boolean): string => {
  if (error) {
    return 'border-red-300 text-red-600 focus:border-red-500 focus:ring-red-500';
  }
  
  const colorMap = {
    slate: 'border-slate-300 text-slate-600 focus:border-slate-500 focus:ring-slate-500',
    gray: 'border-gray-300 text-gray-600 focus:border-gray-500 focus:ring-gray-500',
    zinc: 'border-zinc-300 text-zinc-600 focus:border-zinc-500 focus:ring-zinc-500',
    red: 'border-red-300 text-red-600 focus:border-red-500 focus:ring-red-500',
    orange: 'border-orange-300 text-orange-600 focus:border-orange-500 focus:ring-orange-500',
    yellow: 'border-yellow-300 text-yellow-600 focus:border-yellow-500 focus:ring-yellow-500',
    green: 'border-green-300 text-green-600 focus:border-green-500 focus:ring-green-500',
    blue: 'border-blue-300 text-blue-600 focus:border-blue-500 focus:ring-blue-500',
    indigo: 'border-indigo-300 text-indigo-600 focus:border-indigo-500 focus:ring-indigo-500',
    purple: 'border-purple-300 text-purple-600 focus:border-purple-500 focus:ring-purple-500',
    pink: 'border-pink-300 text-pink-600 focus:border-pink-500 focus:ring-pink-500'
  };
  
  return colorMap[color] || colorMap.blue;
};

export const AtomicCheckbox = React.forwardRef<HTMLInputElement, AtomicCheckboxProps>(
  ({
    checked = false,
    indeterminate = false,
    disabled = false,
    size = 'md',
    color = 'blue',
    p,
    m,
    label,
    description,
    error = false,
    errorMessage,
    className,
    onChange,
    id,
    ...rest
  }, ref) => {
    const checkboxId = id || `checkbox-${React.useId()}`;
    const sizeClasses = getSizeClasses(size);
    const colorClasses = getColorClasses(color, error);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        onChange?.(event.target.checked, event);
      }
    };

    const containerClasses = cn(
      // Base styles
      'relative flex items-start',
      
      // Size
      sizeClasses.container,
      
      // Spacing
      getSpacingClass(p, 'p'),
      getSpacingClass(m, 'm'),
      
      // Disabled
      disabled && 'opacity-50 cursor-not-allowed',
      
      className
    );

    const checkboxClasses = cn(
      // Base styles
      'flex-shrink-0 rounded border-2 bg-white transition-colors duration-200',
      
      // Size
      sizeClasses.checkbox,
      
      // Colors and states
      colorClasses,
      
      // Focus styles
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      
      // Disabled styles
      disabled ? 'cursor-not-allowed' : 'cursor-pointer',
      
      // Checked state
      (checked || indeterminate) && !disabled && `bg-${color}-600 border-${color}-600`,
    );

    return (
      <div className={containerClasses}>
        <div className="flex items-center h-5">
          <div className="relative">
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              checked={checked}
              disabled={disabled}
              onChange={handleChange}
              className="sr-only"
              {...rest}
            />
            
            <div 
              className={checkboxClasses}
              onClick={() => {
                if (!disabled && ref && 'current' in ref && ref.current) {
                  ref.current.click();
                }
              }}
            >
              {checked && !indeterminate && (
                <Check 
                  size={sizeClasses.icon} 
                  className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              )}
              
              {indeterminate && (
                <Minus 
                  size={sizeClasses.icon} 
                  className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              )}
            </div>
          </div>
        </div>
        
        {(label || description) && (
          <div className="ml-3 flex-1">
            {label && (
              <label 
                htmlFor={checkboxId}
                className={cn(
                  'block font-medium leading-5',
                  error ? 'text-red-700' : 'text-gray-700',
                  disabled ? 'cursor-not-allowed' : 'cursor-pointer'
                )}
              >
                {label}
              </label>
            )}
            
            {description && (
              <p className={cn(
                'text-sm leading-5',
                error ? 'text-red-600' : 'text-gray-500'
              )}>
                {description}
              </p>
            )}
            
            {error && errorMessage && (
              <p className="mt-1 text-sm text-red-600">
                {errorMessage}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

AtomicCheckbox.displayName = 'AtomicCheckbox';