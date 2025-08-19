# @umituz/atomic-next

A comprehensive atomic design system for Next.js applications with modern React patterns and TypeScript support.

## 🚀 Features

- 🎨 **Atomic Design System**: Built following atomic design principles (Atoms → Molecules → Organisms)
- ⚡ **Modern React**: React 18+ with TypeScript and modern patterns
- 🎯 **Next.js Optimized**: Built specifically for Next.js applications
- 🧩 **Radix UI Foundation**: Built on top of Radix UI primitives
- 🎨 **Tailwind CSS**: Styling with Tailwind CSS utilities
- 📱 **Responsive**: Mobile-first design with responsive utilities  
- 🌙 **Theme Support**: Light/dark mode ready
- ♿ **Accessible**: WCAG 2.1 AA compliant components
- 📦 **Tree Shakeable**: Import only what you need
- 🔧 **TypeScript**: Full TypeScript support with excellent DX

## 📦 Installation

```bash
npm install @umituz/atomic-next
# or
yarn add @umituz/atomic-next
# or
pnpm add @umituz/atomic-next
```

## 🎨 Design System Architecture

### Design Tokens
- **Colors**: Primary, semantic, and utility colors
- **Typography**: Font families, sizes, weights, and line heights
- **Spacing**: Consistent spacing scale
- **Shadows**: Box shadow utilities
- **Borders**: Border radius and border utilities
- **Animations**: Transition and animation presets

### Component Hierarchy

#### Atoms (Basic Components)
- `AtomicButton` - Button variants with loading states
- `AtomicInput` - Form inputs with validation
- `AtomicText` - Typography components
- `AtomicIcon` - Icon wrapper with size variants
- `AtomicAvatar` - User avatars with fallbacks
- `AtomicBadge` - Status and count badges
- `AtomicSpinner` - Loading spinners

#### Molecules (Combined Components)  
- `AtomicFormField` - Input with label and validation
- `AtomicDropdown` - Select and dropdown menus
- `AtomicNavigation` - Navigation components
- `AtomicCard` - Content cards with variants

#### Organisms (Complex Components)
- `AtomicForm` - Complete form layouts
- `AtomicHeader` - Application headers
- `AtomicLayout` - Page layout components

## 🚀 Quick Start

```tsx
import { 
  AtomicButton, 
  AtomicCard, 
  AtomicText,
  AtomicThemeProvider 
} from '@umituz/atomic-next'

function App() {
  return (
    <AtomicThemeProvider>
      <AtomicCard>
        <AtomicText variant="heading">
          Welcome to Atomic Next
        </AtomicText>
        <AtomicButton 
          variant="primary" 
          size="lg"
          onClick={() => console.log('Clicked!')}
        >
          Get Started
        </AtomicButton>
      </AtomicCard>
    </AtomicThemeProvider>
  )
}
```

## 📚 Documentation

Visit our [documentation site](https://atomic-next.umituz.com) for detailed guides and API references.

## 🤝 Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) first.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 👨‍💻 Author

**Ümit UZ** - [umituz.com](https://umituz.com)