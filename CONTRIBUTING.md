# Contributing to TricksFor Landing Page

Thank you for your interest in contributing to the TricksFor landing page! This document provides guidelines and instructions for contributing to this project.

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm package manager
- Git

### Setting Up Development Environment

1. **Fork the repository** (if external contributor)

2. **Clone the repository**
   ```bash
   git clone https://github.com/Tricksfor-Organization/Landing.git
   cd Landing
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Verify the setup**
   - Open http://localhost:5173 in your browser
   - Ensure the landing page loads correctly

## 📋 Code Style Guidelines

### General Rules

1. **Follow the existing code style** - Consistency is key
2. **Use functional components** - No class components
3. **Always add PropTypes** - Validate all component props
4. **Use Tailwind CSS only** - No custom CSS or inline styles
5. **Mobile-first design** - Start with mobile styles, then add responsive breakpoints
6. **No array index keys** - Use unique data properties for keys

### Component Structure

```javascript
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaIcon } from 'react-icons/fa';

const ComponentName = ({ prop1, prop2 }) => {
  const [state, setState] = useState(initialValue);
  
  return (
    <div className="tailwind-classes">
      {/* Component JSX */}
    </div>
  );
};

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

export default ComponentName;
```

### Import Order

```javascript
// 1. React and third-party libraries
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 2. Icons
import { FaIcon } from 'react-icons/fa';

// 3. Local components
import ComponentName from './ComponentName';

// 4. Constants and utilities
import { ROUTES } from '../constants/routePaths';

// 5. Assets
import image from '../assets/folder/image.png';
```

### Design System

#### Colors
- Background: `bg-primary-900`, `bg-primary-800`
- Gradients: `from-blue-400 via-purple-400 to-pink-400`
- Cards: `bg-primary-800/80` with `backdrop-blur-sm`

#### Typography
- Headings: `text-[32px] md:text-[48px] lg:text-[72px]`
- Body: `text-[14px] md:text-[16px]`
- Responsive font sizes with mobile-first approach

#### Layout
- Container: `max-w-[1152px] mx-auto px-4`
- Section padding: `py-12 md:py-16 lg:py-24`
- Card padding: `p-6 md:p-8`

## 🔧 Development Workflow

### Creating a New Feature

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow code style guidelines
   - Add PropTypes validation
   - Use unique keys for list items
   - Follow mobile-first responsive design

3. **Test your changes**
   ```bash
   # Run linter
   npm run lint
   
   # Build the project
   npm run build
   
   # Test in development
   npm run dev
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```
   
   Use conventional commit messages:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting)
   - `refactor:` - Code refactoring
   - `perf:` - Performance improvements
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Use the PR template
   - Fill out all required sections
   - Link related issues

### Fixing a Bug

1. **Create a bug fix branch**
   ```bash
   git checkout -b fix/bug-description
   ```

2. **Fix the issue**
   - Identify the root cause
   - Make minimal necessary changes
   - Add comments if the fix is complex

3. **Test the fix**
   - Verify the bug is fixed
   - Check for side effects
   - Test in multiple browsers

4. **Follow steps 4-6 from "Creating a New Feature"**

## ✅ Pull Request Checklist

Before submitting a PR, ensure:

- [ ] Code follows the project's style guidelines
- [ ] All components have PropTypes validation
- [ ] No array indices used as keys
- [ ] Only Tailwind CSS classes used (no inline styles)
- [ ] Mobile-first responsive design implemented
- [ ] Correct gradient colors used
- [ ] Changes tested on mobile and desktop
- [ ] `npm run lint` passes with no warnings
- [ ] `npm run build` succeeds
- [ ] No console.log statements in code
- [ ] Constants files updated if needed
- [ ] Route constants from `routePaths.js` used
- [ ] Documentation updated if needed

## 🧪 Testing

### Manual Testing

1. **Test in multiple browsers**
   - Chrome
   - Firefox
   - Safari
   - Edge

2. **Test responsive design**
   - Mobile (< 768px)
   - Tablet (768px - 1024px)
   - Desktop (> 1024px)

3. **Test navigation**
   - All links work correctly
   - Routes load properly
   - Back/forward buttons work

### Build Testing

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

## 📝 Documentation

### When to Update Documentation

- Adding new components
- Changing component APIs
- Adding new pages or routes
- Modifying build process
- Changing configuration

### Documentation Locations

- **README.md** - Project overview and setup
- **Copilot Instructions** - `.github/copilot-instructions.md`
- **Component Comments** - JSDoc for complex functions
- **Constants Files** - Comments for data structures

## 🐛 Reporting Bugs

Use the bug report template in GitHub Issues:

1. Go to Issues → New Issue
2. Select "Bug Report"
3. Fill out all required fields
4. Include screenshots if applicable
5. Describe steps to reproduce

## 💡 Suggesting Features

Use the feature request template in GitHub Issues:

1. Go to Issues → New Issue
2. Select "Feature Request"
3. Describe the problem and solution
4. Add design mockups if available
5. Specify priority level

## 🔍 Code Review Process

### For Contributors

- Be responsive to feedback
- Make requested changes promptly
- Ask questions if unclear
- Keep discussions professional

### For Reviewers

- Be constructive and respectful
- Focus on code quality and consistency
- Check for adherence to guidelines
- Test changes locally when needed

## 📦 Project Structure

```
Landing/
├── src/
│   ├── components/       # Reusable components by feature
│   ├── pages/           # Page components
│   ├── layout/          # Layout components (Header, Footer)
│   ├── constants/       # Static data and configurations
│   ├── assets/          # Images and media
│   └── routes.jsx       # Route configuration
├── .github/             # GitHub workflows and templates
├── public/              # Static files
└── README.md           # Project documentation
```

## 🚫 Common Mistakes to Avoid

1. ❌ Using array indices as keys
2. ❌ Missing PropTypes validation
3. ❌ Hardcoding colors instead of using Tailwind
4. ❌ Using inline styles
5. ❌ Leaving console.log statements
6. ❌ Not testing responsive design
7. ❌ Forgetting to run lint before committing
8. ❌ Not using route constants from `routePaths.js`

## 📞 Getting Help

- **GitHub Issues** - For bugs and feature requests
- **Pull Request Comments** - For code-specific questions
- **Discord** - Community support (link on website)

## 📜 License

This project is private and all rights are reserved by TricksFor Organization.

---

Thank you for contributing to TricksFor Landing Page! 🎮✨
