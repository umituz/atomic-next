import React from 'react';
import { cn } from '../../utils';

type Display = 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'hidden';
type AlignItems = 'stretch' | 'start' | 'center' | 'end' | 'baseline';
type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
type FlexDirection = 'row' | 'row-reverse' | 'col' | 'col-reverse';
type FlexWrap = 'wrap' | 'wrap-reverse' | 'nowrap';

type Spacing = 
  | '0' | 'px' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8'
  | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48'
  | '52' | '56' | '60' | '64' | '72' | '80' | '96';

type SpacingObject = {
  x?: Spacing;
  y?: Spacing;
  t?: Spacing;
  r?: Spacing;
  b?: Spacing;
  l?: Spacing;
};

type Size = Spacing | 'auto' | 'full' | 'screen' | 'min' | 'max' | 'fit';

type Color = 
  | 'transparent' | 'current' | 'black' | 'white'
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

type BorderRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
type Shadow = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner';
type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

export interface AtomicDivProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  d?: Display;
  align?: AlignItems;
  justify?: JustifyContent;
  flexDir?: FlexDirection;
  flexWrap?: FlexWrap;
  flexGrow?: number;
  flexShrink?: number;
  order?: number;
  p?: Spacing | SpacingObject;
  m?: Spacing | SpacingObject;
  w?: Size;
  h?: Size;
  minW?: Size;
  minH?: Size;
  maxW?: Size;
  maxH?: Size;
  bg?: Color;
  bgGradient?: string;
  border?: boolean | string;
  borderColor?: Color;
  rounded?: BorderRadius;
  shadow?: Shadow;
  position?: Position;
  top?: Spacing;
  right?: Spacing;
  bottom?: Spacing;
  left?: Spacing;
  cursor?: 'auto' | 'default' | 'pointer' | 'wait' | 'text' | 'move' | 'help' | 'not-allowed';
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
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

export const AtomicDiv = React.forwardRef<HTMLDivElement, AtomicDivProps>(
  ({
    d,
    align,
    justify,
    flexDir,
    flexWrap,
    flexGrow,
    flexShrink,
    order,
    p,
    m,
    w,
    h,
    minW,
    minH,
    maxW,
    maxH,
    bg,
    bgGradient,
    border,
    borderColor,
    rounded,
    shadow,
    position,
    top,
    right,
    bottom,
    left,
    cursor,
    as: Component = 'div',
    className,
    children,
    ...rest
  }, ref) => {
    const classes = cn(
      d && `${d === 'flex' ? 'flex' : d === 'inline-flex' ? 'inline-flex' : d === 'grid' ? 'grid' : d === 'hidden' ? 'hidden' : d === 'inline' ? 'inline' : d === 'inline-block' ? 'inline-block' : 'block'}`,
      align && `items-${align === 'start' ? 'start' : align === 'end' ? 'end' : align === 'center' ? 'center' : align === 'baseline' ? 'baseline' : 'stretch'}`,
      justify && `justify-${justify === 'start' ? 'start' : justify === 'end' ? 'end' : justify === 'center' ? 'center' : justify === 'between' ? 'between' : justify === 'around' ? 'around' : 'evenly'}`,
      flexDir && `flex-${flexDir === 'col' ? 'col' : flexDir === 'col-reverse' ? 'col-reverse' : flexDir === 'row-reverse' ? 'row-reverse' : 'row'}`,
      flexWrap && `flex-${flexWrap}`,
      flexGrow !== undefined && `flex-grow-${flexGrow}`,
      flexShrink !== undefined && `flex-shrink-${flexShrink}`,
      order !== undefined && `order-${order}`,
      getSpacingClass(p, 'p'),
      getSpacingClass(m, 'm'),
      w && `w-${w}`,
      h && `h-${h}`,
      minW && `min-w-${minW}`,
      minH && `min-h-${minH}`,
      maxW && `max-w-${maxW}`,
      maxH && `max-h-${maxH}`,
      bg && `bg-${bg}`,
      bgGradient,
      border === true && 'border',
      typeof border === 'string' && border,
      borderColor && `border-${borderColor}`,
      rounded && `rounded${rounded === 'none' ? '-none' : rounded === 'full' ? '-full' : rounded === 'sm' ? '-sm' : rounded === 'md' ? '' : `-${rounded}`}`,
      shadow && `shadow${shadow === 'none' ? '-none' : shadow === 'sm' ? '-sm' : shadow === 'md' ? '' : shadow === 'inner' ? '-inner' : `-${shadow}`}`,
      position && `${position}`,
      top !== undefined && `top-${top}`,
      right !== undefined && `right-${right}`,
      bottom !== undefined && `bottom-${bottom}`,
      left !== undefined && `left-${left}`,
      cursor && `cursor-${cursor}`,
      
      className
    );

    return React.createElement(
      Component,
      {
        ref,
        className: classes,
        ...rest
      },
      children
    );
  }
);

AtomicDiv.displayName = 'AtomicDiv';