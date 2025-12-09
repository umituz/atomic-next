# @umituz/atomic-next

> **📱 React Native Users**: The React Native atomic design components have been moved to a dedicated template system. For React Native projects, please use the templates in the [app_factory](https://github.com/umituz/app_factory) repository under `generator/tech-stack/react-native/templates/atomics/`.

A comprehensive atomic design system specifically built for **Web/Next.js** applications with Server/Client Component separation, modern React patterns, and complete TypeScript support.

## 🚀 Features

- 🎨 **Atomic Design System**: Built following atomic design principles with true component hierarchy
- ⚡ **Next.js Optimized**: Server/Client Component patterns with built-in optimizations
- 🧩 **Radix UI Foundation**: Built on top of industry-standard accessible primitives
- 🎯 **Modern React**: React 18+ with forwardRef, Slot patterns, and advanced composition
- 🔧 **TypeScript First**: Complete type safety with excellent developer experience
- 🎨 **Sophisticated Variants**: Class Variance Authority for powerful component variants
- 📱 **Responsive Design**: Mobile-first approach with responsive utilities
- 🌙 **Theme System**: Light/dark mode with CSS custom properties
- ♿ **Accessibility**: WCAG 2.1 AA compliant components out of the box
- 📦 **Tree Shakeable**: Import only what you need with optimized bundles
- 🚀 **Performance**: Optimized for production with minimal runtime overhead
- 🎪 **Polymorphic**: Components that can render as different elements seamlessly
- 🌐 **Web Focus**: Optimized specifically for web/browser environments

## 📦 Installation

```bash
npm install @umituz/atomic-next
# or
yarn add @umituz/atomic-next
# or
pnpm add @umituz/atomic-next
```

### Peer Dependencies

```json
{
  "react": ">=18.0.0",
  "react-dom": ">=18.0.0",
  "next": ">=13.0.0"
}
```

## 🎨 Design System Architecture

### Design Tokens

Complete design token system with semantic naming and consistent values:

#### Colors
- **Brand Colors**: Primary (#9333EA), Secondary (#EC4899), Accent (#F59E0B)
- **Semantic Colors**: Success, Warning, Error, Info with light/dark variants
- **Gray Scale**: 50-900 scale for neutral colors
- **Utility Functions**: Color manipulation utilities (alpha, hex to RGB/HSL)

#### Typography
- **Semantic Variants**: h1-h6, body, large, small, xs, lead, muted, caption, label
- **Font Weights**: Complete range from thin to black
- **Text Alignment**: Left, center, right, justify
- **Color Variants**: Primary, secondary, semantic colors

#### Design Tokens
- **Spacing**: Consistent spacing scale
- **Shadows**: Professional shadow system
- **Borders**: Border radius and border utilities
- **Animations**: Smooth transitions and animations

### Component Architecture

#### Atoms (Foundation Components)

**Layout & Structure**
- `AtomicDiv` - Semantic div wrapper with design system integration
- `AtomicCard` - Content cards with header, title, description, content, footer
- `AtomicText` - Complete typography system with semantic HTML

**Interactive Elements**
- `AtomicButton` - Comprehensive button system with variants and states
- `AtomicInput` - Form inputs with validation states
- `AtomicCheckbox` - Accessible checkbox component
- `AtomicSwitch` - Toggle switch component
- `AtomicLink` - Navigation links with Next.js optimization

**Display Components**
- `AtomicAvatar` - User avatars with image and fallback support
- `AtomicImage` - Optimized image component with variants
- `AtomicIcon` - Icon wrapper with consistent sizing
- `AtomicBadge` - Status and count badges with variants
- `AtomicTag` - Content tags and labels

**Feedback Components**
- `AtomicSpinner` - Loading spinners (Button, Page, Inline variants)

**System Components**
- `AtomicThemeProvider` - Theme context and CSS custom properties

## 🚀 Quick Start

### Basic Setup

```tsx
import { 
  AtomicButton, 
  AtomicCard, 
  AtomicText,
  AtomicThemeProvider 
} from '@umituz/atomic-next'

export default function App() {
  return (
    <AtomicThemeProvider>
      <AtomicCard>
        <AtomicText variant="h2">
          Welcome to Atomic Next
        </AtomicText>
        <AtomicText variant="body" color="muted">
          A comprehensive design system for Next.js applications.
        </AtomicText>
        <AtomicButton 
          variant="primary" 
          size="lg"
          onClick={() => console.log('Getting started!')}
        >
          Get Started
        </AtomicButton>
      </AtomicCard>
    </AtomicThemeProvider>
  )
}
```

### Advanced Component Examples

#### Button Variants and States

```tsx
import { AtomicButton } from '@umituz/atomic-next'
import { Download, ArrowRight } from 'lucide-react'

export function ButtonExamples() {
  return (
    <div className="space-y-4">
      {/* Variants */}
      <AtomicButton variant="primary">Primary</AtomicButton>
      <AtomicButton variant="secondary">Secondary</AtomicButton>
      <AtomicButton variant="brand">Brand Gradient</AtomicButton>
      <AtomicButton variant="outline">Outline</AtomicButton>
      <AtomicButton variant="ghost">Ghost</AtomicButton>
      
      {/* With Icons */}
      <AtomicButton leftIcon={<Download />}>
        Download
      </AtomicButton>
      <AtomicButton rightIcon={<ArrowRight />}>
        Continue
      </AtomicButton>
      
      {/* Loading State */}
      <AtomicButton loading variant="primary">
        Processing...
      </AtomicButton>
      
      {/* Sizes */}
      <AtomicButton size="sm">Small</AtomicButton>
      <AtomicButton size="lg">Large</AtomicButton>
      <AtomicButton fullWidth>Full Width</AtomicButton>
    </div>
  )
}
```

#### Typography System

```tsx
import { AtomicText } from '@umituz/atomic-next'

export function TypographyExamples() {
  return (
    <div className="space-y-4">
      {/* Headings - Automatically render as semantic HTML */}
      <AtomicText variant="h1">Main Heading</AtomicText>
      <AtomicText variant="h2">Section Heading</AtomicText>
      <AtomicText variant="h3">Subsection</AtomicText>
      
      {/* Body Text */}
      <AtomicText variant="lead">
        This is lead text for introductions
      </AtomicText>
      <AtomicText variant="body">
        Regular body text with proper line height
      </AtomicText>
      <AtomicText variant="small" color="muted">
        Small muted text for captions
      </AtomicText>
      
      {/* Colors */}
      <AtomicText color="primary">Primary color text</AtomicText>
      <AtomicText color="success">Success message</AtomicText>
      <AtomicText color="error">Error message</AtomicText>
      
      {/* Utilities */}
      <AtomicText truncate weight="semibold" align="center">
        Centered, bold, truncated text
      </AtomicText>
    </div>
  )
}
```

#### Card Composition

```tsx
import { 
  AtomicCard, 
  AtomicCardHeader, 
  AtomicCardTitle,
  AtomicCardDescription,
  AtomicCardContent,
  AtomicCardFooter,
  AtomicButton,
  AtomicText
} from '@umituz/atomic-next'

export function CardExample() {
  return (
    <AtomicCard className="w-96">
      <AtomicCardHeader>
        <AtomicCardTitle>Project Card</AtomicCardTitle>
        <AtomicCardDescription>
          A comprehensive project management solution
        </AtomicCardDescription>
      </AtomicCardHeader>
      
      <AtomicCardContent>
        <AtomicText variant="body">
          This card demonstrates the composition pattern with 
          multiple atomic components working together.
        </AtomicText>
      </AtomicCardContent>
      
      <AtomicCardFooter className="flex justify-between">
        <AtomicButton variant="outline">Cancel</AtomicButton>
        <AtomicButton variant="primary">Save</AtomicButton>
      </AtomicCardFooter>
    </AtomicCard>
  )
}
```

## 🎯 Component API

### AtomicButton

```tsx
interface AtomicButtonProps {
  variant?: 'default' | 'primary' | 'brand' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}
```

### AtomicText

```tsx
interface AtomicTextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'large' | 'small' | 'xs' | 'lead' | 'muted' | 'caption' | 'label'
  color?: 'default' | 'primary' | 'secondary' | 'muted' | 'success' | 'warning' | 'error' | 'info'
  align?: 'left' | 'center' | 'right' | 'justify'
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label'
  asChild?: boolean
  truncate?: boolean
  selectable?: boolean
}
```

### AtomicCard

```tsx
interface AtomicCardProps {
  variant?: 'default' | 'outlined' | 'elevated'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

// Subcomponents: AtomicCardHeader, AtomicCardTitle, AtomicCardDescription, 
// AtomicCardContent, AtomicCardFooter
```

## 🎨 Customization

### CSS Custom Properties

The design system uses CSS custom properties for theming:

```css
:root {
  --atomic-primary: #9333EA;
  --atomic-primary-dark: #7C3AED;
  --atomic-secondary: #EC4899;
  --atomic-accent: #F59E0B;
  
  /* Complete color system available */
}
```

### Theme Provider

```tsx
import { AtomicThemeProvider } from '@umituz/atomic-next'

export default function App() {
  return (
    <AtomicThemeProvider 
      theme="dark" // or "light"
      customColors={{
        primary: '#your-color',
        secondary: '#your-color'
      }}
    >
      {/* Your app */}
    </AtomicThemeProvider>
  )
}
```

### Extending Components

```tsx
import { AtomicButton, buttonVariants } from '@umituz/atomic-next'
import { cn } from '@umituz/atomic-next'

// Create custom variants
const customButtonVariants = {
  ...buttonVariants,
  variant: {
    ...buttonVariants.variants.variant,
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-500'
  }
}

// Or extend existing components
const CustomButton = ({ className, ...props }) => (
  <AtomicButton 
    className={cn('custom-styles', className)}
    {...props}
  />
)
```

## 📱 Responsive Design

All components include responsive variants and mobile-first design:

```tsx
<AtomicText 
  variant="h1" 
  className="text-2xl md:text-4xl lg:text-6xl"
>
  Responsive Heading
</AtomicText>

<AtomicButton 
  size="sm"
  className="md:size-default lg:size-lg"
>
  Responsive Button
</AtomicButton>
```

## ♿ Accessibility

- **WCAG 2.1 AA Compliant**: All components meet accessibility standards
- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Screen Reader Support**: Semantic HTML and ARIA attributes
- **Color Contrast**: Tested color combinations meet contrast requirements
- **Focus Management**: Visible focus indicators and logical tab order

## 🛠️ Development

### Building from Source

```bash
# Clone the repository
git clone https://github.com/umituz/atomic-next.git
cd atomic-next

# Install dependencies
npm install

# Start development mode
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
npm run lint:fix

# Format code
npm run format
npm run format:check

# Type checking
npm run type-check
```

### Project Structure

```
src/
├── atoms/           # Atomic components
│   ├── buttons/     # Button components
│   ├── display/     # Display components
│   ├── inputs/      # Input components
│   ├── feedback/    # Feedback components
│   ├── layout/      # Layout components
│   ├── navigation/  # Navigation components
│   └── providers/   # Context providers
├── tokens/          # Design tokens
│   ├── colors/      # Color system
│   ├── typography/  # Typography tokens
│   ├── spacing/     # Spacing scale
│   ├── shadows/     # Shadow system
│   ├── borders/     # Border utilities
│   └── animations/  # Animation presets
└── utils/           # Utility functions
```

### Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 📚 Documentation

Visit our [documentation site](https://umituz.com/opensource/atomic-next) for:

- **Interactive Component Playground**
- **Complete API Documentation**
- **Design Guidelines**
- **Migration Guides**
- **Advanced Patterns**
- **Customization Examples**

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Run the test suite: `npm test`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ümit UZ**
- Website: [umituz.com](https://umituz.com)
- Email: [umit@umituz.com](mailto:umit@umituz.com)
- GitHub: [@umituz](https://github.com/umituz)
- LinkedIn: [ümit-uz](https://linkedin.com/in/ümit-uz)

## 🙏 Acknowledgments

- Built with [Radix UI](https://radix-ui.com) primitives
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Component variants powered by [Class Variance Authority](https://cva.style)
- Icons by [Lucide React](https://lucide.dev)

---

<div align="center">
  <p>Made with ❤️ for the Next.js community</p>
  <p>
    <a href="https://github.com/umituz/atomic-next">⭐ Star on GitHub</a> •
    <a href="https://github.com/umituz/atomic-next/issues">🐛 Report Bug</a> •
    <a href="https://github.com/umituz/atomic-next/discussions">💬 Discussions</a>
  </p>
</div>