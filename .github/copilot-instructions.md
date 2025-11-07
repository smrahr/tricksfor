# GitHub Copilot Instructions for TricksFor Landing Page

## Project Overview

This is the official landing page for [TricksFor.com](https://www.tricksfor.com), a blockchain-based gaming platform. The project is built with React 18, Vite 5, and Tailwind CSS 3, featuring a modern gradient-based design system.

## Code Style & Conventions

### General Guidelines

- **Language**: JavaScript (ES6+) with JSX
- **Framework**: React 18.3.1 with functional components and hooks
- **Styling**: Tailwind CSS utility classes only (no custom CSS unless absolutely necessary)
- **File Naming**: PascalCase for components (`HeroSection.jsx`), camelCase for utilities (`routePaths.js`)
- **Component Structure**: One component per file, export default at the end

### React Patterns

```javascript
// Prefer functional components with hooks
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ComponentName = ({ prop1, prop2 }) => {
  const [state, setState] = useState(initialValue);
  
  useEffect(() => {
    // Side effects here
  }, [dependencies]);
  
  return (
    <div className="tailwind-classes">
      {/* Component JSX */}
    </div>
  );
};

// Always add PropTypes validation
ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.shape({
    key: PropTypes.string,
  }),
};

export default ComponentName;
```

### Key Principles

1. **No Array Index Keys**: Always use unique data properties for keys
   ```javascript
   // ❌ Bad
   {items.map((item, idx) => <div key={idx}>...</div>)}
   
   // ✅ Good
   {items.map((item) => <div key={item.id}>...</div>)}
   ```

2. **PropTypes Validation**: All components receiving props must have PropTypes
   ```javascript
   import PropTypes from 'prop-types';
   
   ComponentName.propTypes = {
     title: PropTypes.string.isRequired,
     items: PropTypes.arrayOf(PropTypes.shape({
       id: PropTypes.number.isRequired,
       name: PropTypes.string.isRequired,
     })),
   };
   ```

3. **Centralized Data**: Store static data in `src/constants/`
   - `roadmapData.js` - Roadmap milestones
   - `faqData.js` - FAQ content
   - `routePaths.js` - Route paths

4. **Route Management**: Use constants from `routePaths.js`
   ```javascript
   import { ROUTES } from '../constants/routePaths';
   <Link to={ROUTES.HOME}>Home</Link>
   ```

## Design System

### Color Palette

```javascript
// Use these Tailwind classes for consistency:
- Background: bg-primary-900, bg-primary-800
- Cards: bg-primary-800/80 (80% opacity with backdrop blur)
- Gradients: from-blue-400 via-purple-400 to-pink-400
- Text gradients: bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent
```

### Typography

```javascript
// Font sizes (mobile → desktop responsive)
- Headings: text-[32px] md:text-[48px] lg:text-[72px]
- Subheadings: text-[24px] md:text-[32px]
- Body: text-[14px] md:text-[16px]
- Small: text-[12px] md:text-[14px]

// Font weights
- Light: font-[300]
- Regular: font-[400]
- Medium: font-[500]
- SemiBold: font-[600]
- Bold: font-[700]
- ExtraBold: font-[800]
```

### Layout & Spacing

```javascript
// Container: Always use max-w-[1152px] mx-auto px-4
// Section padding: py-12 md:py-16 lg:py-24
// Card padding: p-6 md:p-8
// Gaps: gap-4 md:gap-6 lg:gap-8
```

### Common Component Patterns

#### Gradient Button
```jsx
<button className="px-6 py-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-[600] rounded-full hover:scale-105 transition-transform duration-300 flex items-center gap-2">
  <FaIcon />
  Button Text
</button>
```

#### Info Card
```jsx
<div className="bg-primary-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary-700/50">
  <h3 className="text-[24px] md:text-[32px] font-[700] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
    Title
  </h3>
  <p className="text-[14px] md:text-[16px] text-gray-300">
    Description
  </p>
</div>
```

#### Section Header
```jsx
<div className="text-center mb-12">
  <h2 className="text-[32px] md:text-[48px] font-[700] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
    Section Title
  </h2>
  <p className="text-[14px] md:text-[16px] text-gray-400 max-w-2xl mx-auto">
    Section description
  </p>
</div>
```

## Component Structure

### Page Components (`src/pages/`)

Each page should:
- Be in its own folder with `index.jsx`
- Import and compose section components
- Not contain business logic (use section components)

```javascript
import SectionOne from '../../components/pageName/SectionOne';
import SectionTwo from '../../components/pageName/SectionTwo';

const PageName = () => {
  return (
    <div className="min-h-screen bg-primary-900">
      <SectionOne />
      <SectionTwo />
    </div>
  );
};

export default PageName;
```

### Section Components (`src/components/`)

- Group by page/feature in subdirectories
- Each section is self-contained and reusable
- Common sections: Intro, Boosters, Streaks, ProsAndCons

### Layout Components (`src/layout/`)

- Header.jsx - Top navigation
- Footer.jsx - Bottom footer
- Navbar.jsx - Menu items
- Layout.jsx - Page wrapper

## React Router Setup

```javascript
// In routes.jsx
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './constants/routePaths';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: ROUTES.DICE, element: <Dice /> },
      // ... more routes
    ],
  },
]);
```

## Icons

Use `react-icons` library:

```javascript
import { 
  FaDice, 
  FaCoins, 
  FaFire, 
  FaRocket, 
  FaWallet,
  FaChartLine,
  FaTrophy,
  FaDiscord,
} from 'react-icons/fa';
```

Common icons:
- Games: `FaDice`, `FaCoins`, `FaHandRock`
- Features: `FaFire`, `FaRocket`, `FaTrophy`
- UI: `FaInfoCircle`, `FaArrowRight`, `FaChevronDown`
- Social: `FaDiscord`, `FaTwitter`, `FaTelegram`

## Data Management

### Static Arrays

When creating data arrays, always include unique identifiers:

```javascript
const items = [
  {
    id: 1, // or use unique name/title
    title: "Item Title",
    description: "Description",
    icon: FaIcon,
  },
];
```

### Roadmap Data

Always update `src/constants/roadmapData.js`:

```javascript
export const roadmapData = [
  {
    id: 1,
    quarter: "Q1 2024",
    title: "Milestone Title",
    description: "Milestone description",
    status: STATUS.COMPLETED, // or IN_PROGRESS, UPCOMING
    icon: FaIcon,
  },
];
```

## Testing & Quality

### Before Committing

1. Run ESLint: `npm run lint`
2. Build check: `npm run build`
3. Verify no console errors in dev: `npm run dev`

### Common Issues to Avoid

- ❌ Using array indices as keys
- ❌ Missing PropTypes validation
- ❌ Hardcoded colors instead of Tailwind classes
- ❌ Inline styles (use Tailwind utilities)
- ❌ Unused imports
- ❌ Console.log statements in production code

## File Imports

### Import Order

```javascript
// 1. React and third-party libraries
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// 2. Icons
import { FaIcon } from 'react-icons/fa';

// 3. Local components
import ComponentName from './ComponentName';

// 4. Constants and utilities
import { ROUTES } from '../constants/routePaths';

// 5. Assets
import imageName from '../assets/folder/image.png';
```

### Path Conventions

- Use relative paths for nearby files
- Keep import paths short and readable
- Group related imports together

## Responsive Design

### Mobile-First Approach

Always write mobile styles first, then add breakpoints:

```javascript
className="
  text-[14px] md:text-[16px] lg:text-[18px]
  px-4 md:px-6 lg:px-8
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  gap-4 md:gap-6 lg:gap-8
"
```

### Breakpoints

- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

## Animation & Transitions

Use Tailwind's built-in transitions:

```javascript
// Hover effects
className="hover:scale-105 transition-transform duration-300"

// Smooth color transitions
className="transition-colors duration-300 hover:bg-primary-700"

// Opacity transitions
className="transition-opacity duration-500 opacity-0 hover:opacity-100"
```

## Performance Optimization

1. **Lazy Loading**: Use React.lazy for route-based code splitting
2. **Image Optimization**: Use appropriate formats (WebP when possible)
3. **Memoization**: Use `useMemo` and `useCallback` for expensive computations
4. **Conditional Rendering**: Avoid unnecessary re-renders

## Comments & Documentation

```javascript
// Use JSDoc for complex functions
/**
 * Filters roadmap items by status
 * @param {Array} items - Array of roadmap items
 * @param {string} status - Status to filter by
 * @returns {Array} Filtered items
 */
const filterByStatus = (items, status) => {
  return items.filter(item => item.status === status);
};
```

## Environment & Build

- **Dev Server**: `npm run dev` (port 5173)
- **Production Build**: `npm run build` (outputs to `dist/`)
- **Preview Build**: `npm run preview`
- **Lint**: `npm run lint`

## Deployment Notes

- Build outputs static files to `dist/`
- All routes use client-side routing
- Requires server configuration for SPA routing
- Ensure all assets are properly referenced

## Questions & Support

When uncertain about design patterns:
1. Check existing similar components
2. Follow the patterns in this document
3. Maintain consistency with the current codebase
4. Prioritize readability and maintainability

---

**Remember**: This is a landing page focused on visual appeal and user experience. Prioritize smooth animations, responsive design, and consistent styling across all components.
