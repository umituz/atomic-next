'use client'


import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Eye, EyeOff, X } from 'lucide-react'
import { cn } from '../../utils/cn'

const inputVariants = cva(
  'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '',
        filled: 'bg-secondary border-transparent',
        outline: 'bg-transparent border-2',
        underlined: 'rounded-none border-0 border-b-2 px-0',
      },
      size: {
        sm: 'h-8 px-2 text-xs',
        default: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
      state: {
        default: '',
        error: 'border-destructive focus-visible:ring-destructive',
        success: 'border-green-500 focus-visible:ring-green-500',
        warning: 'border-amber-500 focus-visible:ring-amber-500',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      state: 'default',
    },
  }
)

export interface AtomicInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  /** Left icon or element */
  leftIcon?: React.ReactNode
  /** Right icon or element */
  rightIcon?: React.ReactNode
  /** Input label */
  label?: string
  /** Helper text */
  helperText?: string
  /** Error message */
  error?: string
  /** Success message */
  success?: string
  /** Warning message */
  warning?: string
  /** Show clear button when input has value */
  clearable?: boolean
  /** Callback when clear button is clicked */
  onClear?: () => void
  /** Show password toggle for password inputs */
  showPasswordToggle?: boolean
  /** Container class name */
  containerClassName?: string
  /** Label class name */
  labelClassName?: string
  /** Helper text class name */
  helperClassName?: string
}

const AtomicInput = React.forwardRef<HTMLInputElement, AtomicInputProps>(
  (
    {
      className,
      variant,
      size,
      state,
      type = 'text',
      leftIcon,
      rightIcon,
      label,
      helperText,
      error,
      success,
      warning,
      clearable = false,
      onClear,
      showPasswordToggle = false,
      containerClassName,
      labelClassName,
      helperClassName,
      value,
      onChange,
      disabled,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [internalValue, setInternalValue] = React.useState(value || '')
    
    
    let currentState = state
    if (error) currentState = 'error'
    else if (success) currentState = 'success'
    else if (warning) currentState = 'warning'
    
    
    let inputType = type
    if (type === 'password' && showPasswordToggle) {
      inputType = showPassword ? 'text' : 'password'
    }
    
    const hasValue = (value || internalValue) && String(value || internalValue).length > 0
    const showClearButton = clearable && hasValue && !disabled
    const showPasswordToggleButton = showPasswordToggle && type === 'password' && !disabled
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInternalValue(e.target.value)
      onChange?.(e)
    }
    
    const handleClear = () => {
      setInternalValue('')
      onClear?.()
      
      const syntheticEvent = {
        target: { value: '' },
        currentTarget: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>
      onChange?.(syntheticEvent)
    }
    
    const messageText = error || success || warning || helperText
    const messageColor = error 
      ? 'text-destructive' 
      : success 
      ? 'text-green-600 dark:text-green-400'
      : warning
      ? 'text-amber-600 dark:text-amber-400'
      : 'text-muted-foreground'

    return (
      <div className={cn('space-y-2', containerClassName)}>
        {label && (
          <label className={cn(
            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
            disabled && 'opacity-50',
            labelClassName
          )}>
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className={cn(
              'absolute left-0 top-0 h-full flex items-center justify-center',
              size === 'sm' ? 'w-8 pl-2' : size === 'lg' ? 'w-12 pl-4' : 'w-10 pl-3',
              'text-muted-foreground pointer-events-none',
              '[&>*]:h-4 [&>*]:w-4'
            )}>
              {leftIcon}
            </div>
          )}
          
          <input
            type={inputType}
            className={cn(
              inputVariants({ variant, size, state: currentState }),
              leftIcon && (size === 'sm' ? 'pl-8' : size === 'lg' ? 'pl-12' : 'pl-10'),
              (rightIcon || showClearButton || showPasswordToggleButton) && 
                (size === 'sm' ? 'pr-8' : size === 'lg' ? 'pr-12' : 'pr-10'),
              className
            )}
            ref={ref}
            value={value !== undefined ? value : internalValue}
            onChange={handleChange}
            disabled={disabled}
            {...props}
          />
          
          {(rightIcon || showClearButton || showPasswordToggleButton) && (
            <div className={cn(
              'absolute right-0 top-0 h-full flex items-center justify-center gap-1',
              size === 'sm' ? 'w-8 pr-2' : size === 'lg' ? 'w-12 pr-4' : 'w-10 pr-3'
            )}>
              {rightIcon && !showClearButton && !showPasswordToggleButton && (
                <div className="text-muted-foreground [&>*]:h-4 [&>*]:w-4">
                  {rightIcon}
                </div>
              )}
              
              {showClearButton && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-muted-foreground hover:text-foreground transition-colors [&>*]:h-4 [&>*]:w-4"
                  tabIndex={-1}
                >
                  <X />
                </button>
              )}
              
              {showPasswordToggleButton && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-muted-foreground hover:text-foreground transition-colors [&>*]:h-4 [&>*]:w-4"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              )}
            </div>
          )}
        </div>
        
        {messageText && (
          <p className={cn(
            'text-xs',
            messageColor,
            helperClassName
          )}>
            {messageText}
          </p>
        )}
      </div>
    )
  }
)
AtomicInput.displayName = 'AtomicInput'

export { AtomicInput, inputVariants }