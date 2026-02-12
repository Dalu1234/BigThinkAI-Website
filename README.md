# BigThinkAI Club Website

A modern, minimalist website for BigThinkAI—a student-run club at the University of Maryland focused on applied machine learning, research, and community learning.

## 🎨 Design Philosophy

The website follows **Alabaster Minimalism**, an aesthetic inspired by high-quality print design that emphasizes:
- Extreme clarity and generous whitespace
- Tactile textures (film grain effects)
- High contrast readable hierarchy
- Physical, paper-like digital experience

## ✨ Features

### Core Components
- **Navigation** — Glassmorphic pill-shaped navbar with scroll scaling effects
- **Carousel** — Fully accessible image/content carousel with auto-play, touch support, and keyboard navigation
- **Responsive Design** — Mobile-first approach with Tailwind CSS
- **Accessibility** — WCAG 2.1 compliant with ARIA labels, semantic HTML, and keyboard navigation

### Key Sections
- **Hero** — Compelling headline showcasing BigThinkAI's mission
- **Featured Initiatives** — Carousel highlighting:
  - **EDGE Projects** — Multi-quarter team-led ML projects
  - **Pyoneer Workshops** — Hands-on Python and ML curriculum
  - **Bitcamp Hackathon** — Weekend innovation sprints
  - **Research Spotlight** — Peer-reviewed research groups
- **Call-to-Action** — Community engagement and membership information

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with SSR and static generation |
| **React 18** | UI library with hooks and functional components |
| **TypeScript** | Static type safety and better DX |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **Jest** | Unit and integration testing framework |
| **React Testing Library** | Component testing utilities |
| **ESLint** | Code quality and consistency |

## 📁 Project Structure

```
BigThinkAI-Website/
├── components/               # Reusable React components
│   ├── Navigation.tsx       # Top navigation bar with glassmorphism
│   ├── Carousel.tsx         # Accessible carousel component
│   ├── BentoCard.tsx        # Bento-style card layout
│   └── __tests__/           # Component test files
├── pages/                   # Next.js page routes
│   ├── index.tsx            # Homepage
│   ├── carousel.tsx         # Carousel demo page
│   ├── bento.tsx            # Bento grid demo
│   └── _app.tsx             # App wrapper
├── src/
│   ├── fonts.ts             # Font configuration
│   ├── styles/
│   │   └── globals.css      # Global styles and design tokens
│   └── typography/          # Typography documentation
├── design/                  # Design documentation
│   ├── DESIGN.md            # Complete design system spec
│   ├── TOKENS.md            # Design token reference
│   ├── TYPOGRAPHY.md        # Typography guidelines
│   ├── AGENT-1-README.md    # Design system implementation
│   ├── AGENT-3-README.md    # Navigation component docs
│   ├── AGENT-5-README.md    # Carousel component docs
│   └── AGENT-4-README.md    # Additional features
├── public/                  # Static assets
├── jest.config.cjs          # Jest configuration
├── jest.setup.ts            # Jest setup and mocks
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Project dependencies
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ and **npm** 9+ (or **yarn**, **pnpm**)
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SakshamKapoor2911/BigThinkAI-Website.git
   cd BigThinkAI-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start local development server with hot reload |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |
| `npm test` | Run Jest test suite |

## 🎯 Component Documentation

### Navigation Component
**File:** `components/Navigation.tsx`

A glassmorphic navigation bar that scales based on scroll position.

**Features:**
- Pill-shaped design with `backdrop-filter: blur(40px)`
- Scroll-based scaling (0.96 at 100-400px, 0.94 at 400px+)
- Mobile hamburger menu with full accessibility
- ARIA roles: `navigation`, `menubar`, `menuitem`
- Escape-to-close and click-outside-close
- Smooth anchor scrolling to page sections

**Usage:**
```tsx
import Navigation from '@/components/Navigation'

export default function Page() {
  return (
    <>
      <Navigation />
      {/* page content */}
    </>
  )
}
```

### Carousel Component
**File:** `components/Carousel.tsx`

A production-ready carousel with advanced accessibility and user interactions.

**Features:**
- Auto-play with configurable interval
- Pause on hover, resume on mouse leave
- Previous/Next navigation buttons
- Clickable indicator dots
- Keyboard navigation (Arrow Left/Right)
- Touch/swipe support for mobile
- Smooth CSS transitions
- Respects `prefers-reduced-motion`
- Full ARIA support and semantic HTML

**Props:**
```typescript
interface CarouselProps {
  children: ReactNode[]           // Slide components
  autoPlay?: boolean              // Enable auto-play (default: true)
  autoPlayInterval?: number       // Milliseconds between slides (default: 5000)
  showIndicators?: boolean        // Show dot indicators (default: true)
  showControls?: boolean          // Show prev/next buttons (default: true)
  onSlideChange?: (index: number) => void  // Callback when slide changes
}
```

**Usage:**
```tsx
import Carousel from '@/components/Carousel'

export default function Page() {
  return (
    <Carousel autoPlayInterval={5000} showIndicators>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
    </Carousel>
  )
}
```

### BentoCard Component
**File:** `components/BentoCard.tsx`

A flexible bento-style card component for showcasing content.

**Features:**
- Grid-based layout support
- Customizable sizing and spans
- Gradient background overlays
- Icon and text content support
- Responsive design

## 🎨 Design System

### Color Palette
```
Background:    #FBFBFB (Alabaster)
Foreground:    #1A1A1A (Near Black)
Primary:       #2563EB (Vibrant Blue)
Card:          #FFFFFF (Pure White)
Muted:         #F5F5F5 (Secondary)
Border:        #E6E6E6 (Subtle Lines)
```

### Typography
```
Sans-serif:    Geist Sans (UI, body text, buttons)
Monospace:     Geist Mono (Meta tags, dates, code)
Serif:         Newsreader (Headings, quotes, editorial)
```

### Effects
- **Film Grain** — Subtle texture overlay (3.5% opacity)
- **Dot Grid** — Background pattern (10px spacing)
- **Blur** — Glassmorphism effect (40px backdrop blur)
- **Smooth Scroll** — Enhanced anchor navigation

All design tokens are defined in [src/styles/globals.css](src/styles/globals.css) and [design/DESIGN.md](design/DESIGN.md).

## 🧪 Testing

### Run Tests
```bash
npm test
```

### Test Files
- `components/__tests__/Navigation.test.tsx` — Navigation component unit tests

### Test Coverage
The Navigation component includes tests for:
- Rendering and accessibility (roles, aria-labels)
- Mobile menu toggle behavior
- Keyboard interactions (Escape key)
- Scroll-based styling updates

Tests use Jest and React Testing Library with JSDOM environment configured in `jest.setup.ts`.

## 📱 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with Navigation and featured initiatives carousel |
| `/carousel` | Dedicated carousel demo page |
| `/bento` | Bento grid layout demonstration |
| `/fonts` | Font showcase and typography |
| `/typography` | Typography scale and styles |

## ♿ Accessibility

This website follows **WCAG 2.1 Level AA** standards:

- ✅ Semantic HTML elements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Color contrast ratios (4.5:1 minimum)
- ✅ Focus indicators visible
- ✅ Alternative text for images
- ✅ Mobile-friendly touch targets (48px minimum)
- ✅ Respects `prefers-reduced-motion`
- ✅ Live regions for dynamic content updates

## 🔧 Configuration Files

### Next.js Configuration
**File:** `next.config.js`
- Default configuration for framework behavior
- CSS and JavaScript bundling optimization

### TypeScript Configuration
**File:** `tsconfig.json`
- Strict mode enabled
- Path aliases configured (`@/*` → `./`)
- React JSX transform

### Tailwind CSS Configuration
**File:** `tailwind.config.ts`
- Custom color palette mapped to design system
- Extended breakpoints for responsive design
- Custom theme configuration

### Jest Configuration
**File:** `jest.config.cjs`
- Configured for Next.js projects
- TypeScript support via ts-jest
- JSX transform enabled
- JSDOM test environment for DOM testing

## 🚢 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Setup
No environment variables required for basic setup.

### Recommended Hosting
- **Vercel** (Optimal for Next.js with zero-config deployment)
- **AWS Amplify**
- **Netlify**
- **Self-hosted Node.js server**

### Performance Optimizations
- Automatic code splitting via Next.js
- Image optimization
- CSS-in-JS tree shaking with Tailwind
- Static page generation where possible

## 📚 Documentation Reference

For detailed information, see:
- [Design System Specification](design/DESIGN.md)
- [Design Tokens](design/TOKENS.md)
- [Typography Guidelines](design/TYPOGRAPHY.md)
- [Navigation Component Docs](design/AGENT-3-README.md)
- [Carousel Component Docs](design/AGENT-5-README.md)

## 👥 Contributing

### Development Workflow
1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes and commit with conventional commits:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation
   - `test:` for test updates
   - `refactor:` for code improvements
3. Push to GitHub: `git push origin feature/your-feature`
4. Create a Pull Request with detailed description

### Code Standards
- Follow ESLint rules: `npm run lint`
- Write tests for new components
- Use TypeScript for type safety
- Follow the design system specifications
- Document complex logic with comments

## 📝 License

This project is private and maintained by the BigThinkAI club at the University of Maryland.

## 📧 Contact & Socials

- **Email:** contact@bigthinkai.org
- **Twitter/X:** [@bigthinkai](https://twitter.com/bigthinkai)
- **Instagram:** [@bigthinkai](https://instagram.com/bigthinkai)
- **LinkedIn:** [BigThinkAI Club](https://linkedin.com/company/bigthinkai)
- **GitHub:** [github.com/bigthinkai](https://github.com/bigthinkai)

## 🙏 Acknowledgments

This website was developed for BigThinkAI to showcase our:
- Applied ML research and projects
- Hands-on workshop programs
- Hackathon events and competitions
- Student-led research initiatives

The design philosophy combines modern web standards with print design principles to create a unique, memorable digital presence.

---

**Last Updated:** February 2026
**Version:** 1.0.0
