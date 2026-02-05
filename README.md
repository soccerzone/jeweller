# Icekettle Jeweller - React TypeScript Website

A modern, responsive Jeweller e-commerce website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🖼️ Hero slider with auto-play
- 📧 Contact form with validation
- 🎯 Smooth scrolling navigation
- ⚡ Fast and optimized with TypeScript
- 🔧 Component-based architecture

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Font Awesome** - Icons
- **Cloudinary** - Image hosting

## Project Structure

```
icekettle-Jeweller/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── CategorySection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd icekettle-Jeweller
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm run eject` - Ejects from Create React App (irreversible)

## Components

### Header
- Sticky navigation bar
- Mobile menu with sidebar
- Shopping cart icon
- Smooth scroll to sections

### HeroSection
- Auto-sliding image carousel (3 seconds)
- Navigation dots
- Overlay text

### AboutSection
- Half-screen background image
- Company information
- Call-to-action button

### CategorySection
- Product category cards
- Hover effects
- Responsive grid layout

### ContactSection
- Contact information display
- Contact form with validation
- Social media links
- Success/error message handling

### Footer
- Copyright information
- Powered by credit

## Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#000000',
      secondary: '#333333',
    }
  }
}
```

### Images
Replace image URLs in components with your own Cloudinary or CDN links.

### Content
Update text content directly in the component files.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment

The build folder can be deployed to:
- Vercel
- Netlify
- AWS S3
- GitHub Pages
- Any static hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Contact

For questions or support, contact: ceo@icekettlejwelry.com
