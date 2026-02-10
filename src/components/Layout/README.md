# Layout Components Organization

This directory contains all layout-related components organized into logical subdirectories for better maintainability and structure.

## 📁 Directory Structure

### 🧭 **Navigation/**
Components related to navigation and routing
- `Navbar.jsx` - Main navigation bar with mobile responsiveness
- `Footer.jsx` - Footer with links, contact info, and newsletter

### 🎨 **Background/** 
Visual effects and background elements
- `Particles3D.jsx` - 3D particle effects and animations
- `GeometricShapes.jsx` - Geometric background shapes
- `CustomCursor.jsx` - Custom cursor effects

### 🔧 **Utilities/**
Utility components for functionality and UX
- `PageTransition.jsx` - Page transition animations
- `ScrollToTop.jsx` - Scroll to top button
- `ThemeSwitcher.jsx` - Theme switching functionality (currently disabled)
- `Preloader.jsx` - Main application preloader
- `IntroOverlay.jsx` - Intro overlay animation

### 📄 **Viewers/**
Document and PDF viewing components
- `PDFViewer.jsx` - Primary PDF viewer with react-pdf
- `AlternatePDFViewer.jsx` - Alternative PDF viewer with fallbacks

### 📱 **Mobile/**
Mobile-specific components and optimizations
- `MobilePreloader.jsx` - Mobile-optimized preloader
- `MobileParticles.jsx` - Mobile-optimized particle effects
- `MobileSafeSection.jsx` - Mobile safe area handling

## 📋 **Usage**

### Import from Index File (Recommended)
```javascript
import { 
  Navbar, 
  Footer, 
  Particles3D, 
  ScrollToTop, 
  PDFViewer 
} from '../Layout'
```

### Direct Import (Alternative)
```javascript
import Navbar from '../Layout/Navigation/Navbar'
import Footer from '../Layout/Navigation/Footer'
import Particles3D from '../Layout/Background/Particles3D'
```

## 🔄 **Migration Notes**

### Updated Import Paths
- `./components/Layout/Navbar` → `./components/Layout/Navigation/Navbar`
- `./components/Layout/Footer` → `./components/Layout/Navigation/Footer`  
- `./components/Layout/ScrollToTop` → `./components/Layout/Utilities/ScrollToTop`
- `./components/Layout/Preloader` → `./components/Layout/Utilities/Preloader`
- `./components/Layout/PDFViewer` → `./components/Layout/Viewers/PDFViewer`
- And so on...

### Files Already Updated
- ✅ `App.jsx` - Updated all Layout component imports
- ✅ `Navigation/Navbar.jsx` - Updated ThemeSwitcher import path
- ✅ `index.js` - Created centralized export file

## 📊 **Benefits**

1. **Logical Organization** - Components grouped by functionality
2. **Easier Maintenance** - Related components are together
3. **Better Scalability** - Easy to add new components in appropriate categories
4. **Cleaner Imports** - Centralized index file for easier importing
5. **Team Collaboration** - Clear structure for developers to understand

## 🎯 **Component Categories**

| Category | Purpose | Components |
|----------|---------|------------|
| Navigation | User navigation | Navbar, Footer |
| Background | Visual effects | Particles3D, GeometricShapes, CustomCursor |
| Utilities | Core functionality | PageTransition, ScrollToTop, Preloader |
| Viewers | Document display | PDFViewer, AlternatePDFViewer |
| Mobile | Mobile optimization | MobilePreloader, MobileParticles, MobileSafeSection |
