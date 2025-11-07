# TricksFor Landing Page 🎮

Official landing page for [TricksFor.com](https://www.tricksfor.com) - A revolutionary blockchain-based gaming platform featuring provably fair games, NFT boosters, and affiliate rewards.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.21-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.18-38B2AC?logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-Private-red)

## 🌟 Overview

This is the official landing page showcasing the TricksFor gaming platform. The site features a modern, gradient-based design with comprehensive information about our games, affiliate program, transparency initiatives, and project roadmap.

### Key Features

- 🎲 **Game Showcases** - Detailed pages for Dice, Heads or Tails, and Rock Paper Scissors
- 💰 **Affiliate Program** - Information about our 1% and 10% reward structure
- 🔥 **Streak System** - Progressive rewards for consistent gameplay
- 🚀 **NFT Boosters** - Enhanced gaming experience with blockchain collectibles
- 📊 **Transparency** - Full visibility into our provably fair gaming system
- 🗺️ **Roadmap** - Interactive timeline of past achievements and future milestones
- ❓ **FAQ** - Comprehensive answers to common questions

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Tricksfor-Organization/Landing.git

# Navigate to project directory
cd Landing

# Install dependencies
npm install
```

### Development

```bash
# Start development server with hot reload
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 🏗️ Tech Stack

### Core Technologies

- **React 18.3.1** - Modern UI library with hooks and concurrent features
- **Vite 5.4.21** - Lightning-fast build tool and dev server
- **React Router DOM 6.30.1** - Client-side routing and navigation
- **Tailwind CSS 3.4.18** - Utility-first CSS framework

### UI Components & Icons

- **React Icons 5.5.0** - Comprehensive icon library
- **React Vertical Timeline** - Interactive timeline components
- **HTML React Parser** - Safe HTML rendering

### Development Tools

- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

## 📁 Project Structure

```
Landing/
├── public/                  # Static assets
│   └── css/
│       └── Poppins/        # Custom fonts
├── src/
│   ├── assets/             # Images and media files
│   │   ├── affiliate/
│   │   ├── footer/
│   │   ├── games/
│   │   ├── header/
│   │   └── home/
│   ├── components/         # Reusable React components
│   │   ├── affiliate/      # Affiliate program sections
│   │   ├── dice/           # Dice game sections
│   │   ├── faq/            # FAQ components
│   │   ├── headsOrTails/   # Heads or Tails sections
│   │   ├── home/           # Homepage sections
│   │   ├── rockPaperScissor/
│   │   └── transparency/   # Transparency sections
│   ├── constants/          # Static data and configurations
│   │   ├── faqData.js      # FAQ content
│   │   ├── roadmapData.js  # Roadmap milestones
│   │   └── routePaths.js   # Route definitions
│   ├── layout/             # Layout components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   └── Navbar.jsx
│   ├── pages/              # Page components
│   │   ├── Affiliate/
│   │   ├── Dice/
│   │   ├── FAQ/
│   │   ├── HeadsOrTails/
│   │   ├── Home/
│   │   ├── Roadmap/
│   │   ├── RockPaperScissor/
│   │   └── Transparency/
│   ├── App.jsx             # Main app component
│   ├── routes.jsx          # Route configuration
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md              # This file
```

## 🎨 Design System

### Color Palette

The landing page uses a modern gradient-based design system:

- **Primary Gradients**: Blue → Purple → Pink
- **Background**: Dark theme with `bg-primary-900` and `bg-primary-800`
- **Cards**: Semi-transparent with 80% opacity and backdrop blur
- **Accents**: Gradient text and buttons with smooth transitions

### Typography

- **Font Family**: Poppins (Light, Regular, Medium, SemiBold, Bold, ExtraBold)
- **Responsive Sizing**: 12px to 72px with mobile-first approach
- **Container Width**: Max 1152px centered layout

### Components

- **Gradient Buttons**: Interactive CTAs with icon integration
- **Info Cards**: Floating badges with drop shadows
- **Timeline**: Vertical roadmap with animated connectors
- **Accordion**: Expandable FAQ sections
- **Icon Grids**: 3-column responsive layouts

## 🌐 Pages

### Home (`/`)
Landing page with hero section, how it works, games overview, about project, and roadmap preview

### Games
- **Dice** (`/dice`) - Blockchain dice game information
- **Heads or Tails** (`/headsOrTails`) - Coin flip game details
- **Rock Paper Scissors** (`/rockPaperScissor`) - Classic game showcase

### Information
- **Affiliate** (`/affiliate`) - Partner program and rewards
- **Transparency** (`/transparency`) - Provably fair gaming explained
- **Roadmap** (`/roadmap`) - Complete development timeline
- **FAQ** (`/faq`) - Frequently asked questions

## 🔧 Configuration

### Tailwind Config

Custom colors and container settings are defined in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* custom palette */ }
    }
  }
}
```

### Vite Config

React plugin and build optimizations in `vite.config.js`

### Route Configuration

All routes are centralized in `src/routes.jsx` and `src/constants/routePaths.js`

## 📝 Data Management

### Centralized Data Files

- **`roadmapData.js`** - Single source of truth for roadmap milestones with icons and status
- **`faqData.js`** - FAQ questions and answers with categorization
- **`routePaths.js`** - Route path constants for consistent navigation

### Component Patterns

- Reusable section components (Intro, Boosters, Streaks, ProsAndCons)
- Consistent prop validation with PropTypes
- Unique keys using data properties (not array indices)

## 🚢 Deployment

The application builds to static files in the `dist/` directory:

```bash
npm run build
```

Deploy the `dist/` folder to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 🤝 Contributing

This is a private repository for the TricksFor organization. For contribution guidelines, please contact the development team.

## 📄 License

Private - All rights reserved by TricksFor Organization

## 🔗 Links

- **Live Site**: [https://www.tricksfor.com](https://www.tricksfor.com)
- **Organization**: [Tricksfor-Organization](https://github.com/Tricksfor-Organization)

## 📧 Contact

For questions or support, please reach out through our Discord community (link available on the website).

---

**Built with ❤️ by the TricksFor Team**
