# Beacon AI Government Contracting Platform

**Project**: Government contracting company website specializing in AI solutions and digital transformation for federal and state agencies. Professional landing page showcasing Beacon's AI consulting services, partnerships, and career opportunities.

**Stack**: Vite + React 18 + TypeScript, Tailwind CSS, Magic UI, Framer Motion, React Router DOM

## Project Overview

### Core Features
- **Dynamic Hero**: Animated typing effect with AI descriptors and impact metrics
- **Services Showcase**: AI Strategy, Secure Implementation (FedRAMP/FISMA), Data Intelligence, Team Building
- **Government Partners**: Infinite scroll carousel with 12+ agency logos (DOD, VA, USDS, DHS, etc.)
- **Contact Forms**: Formspree integration for lead generation
- **Careers Portal**: Job applications with file upload and benefits showcase
- **Mobile-Optimized**: Responsive design throughout

### Architecture
```
src/
├── components/          # Reusable UI components
│   ├── icons/          # Custom SVG icons (Brain, Shield, Database, Zap)
│   ├── magicui/        # Advanced animations (typing, ripple, grid)
│   └── ui/             # Basic building blocks
├── pages/              # Route components (/careers)
├── lib/                # Utilities (cn() for conditional classes)
└── main.tsx           # Entry point
```

### Tech Stack Details
- **Build**: Vite with TypeScript, path aliases (`@/` → `src/`)
- **Styling**: Tailwind CSS with custom government color palette
- **Animation**: Framer Motion with scroll-triggered animations
- **Forms**: Formspree integration (ID: `xjkrnjnr`)
- **Icons**: Lucide React + custom SVG components
- **Routing**: React Router DOM (/ and /careers)

### Task Execution

0. For large architectural changes, think deeply
1. Explain high-level changes and approach  
2. Make focused, minimal code changes
3. Run Playwright after major UI updates and take a screenshot to verify end results

### Coding Guidelines

- **Simplicity**: Keep code simple, focus on business logic. Code will undergo lots of changes
- **Minimal Changes**: Edit as little code as possible
- **Type Safety**: Fix TypeScript errors when encountered
- **Patterns**: Follow existing code patterns and conventions
- **Testing**: Run tests after implementation
- **Mobile Optimized**: Ensure mobile responsiveness

### Error Handling

- Fix TypeScript errors when found
- If unable to fix after reasonable attempts, stop and ask for guidance
- Don't write overly defensive code

## Common Patterns

- **Components**: Functional components with TypeScript interfaces
- **Animation**: Framer Motion with `whileInView` triggers and staggered delays
- **Styling**: Custom Tailwind colors, backdrop blur, gradient effects
- **State**: React hooks, Formspree `useForm` for forms, no global state
- **File Structure**: Components grouped by type (ui/, magicui/, icons/)
