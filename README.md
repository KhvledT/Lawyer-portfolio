# Lawyer Portfolio Website

A modern, responsive lawyer portfolio website built with React and Vite, featuring bilingual support (English/Arabic) and professional design elements.

## 🌟 Features

- **Bilingual Support**: Complete English and Arabic translations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Professional design with smooth animations
- **SEO Optimized**: Semantic HTML structure and meta tags
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🚀 Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.13
- **Animations**: Framer Motion 12.23.12
- **Routing**: React Router DOM 7.8.2
- **Icons**: Lucide React 0.544.0
- **Language**: JavaScript (ES6+)

## 📁 Project Structure

```
lawyer-portfolio/
├── public/                     # Static assets
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Header.jsx         # Navigation header with language toggle
│   │   ├── Footer.jsx         # Site footer with contact info
│   │   ├── LanguageToggle.jsx # Language switching component
│   │   ├── ScrollToTop.jsx    # Scroll to top functionality
│   │   └── PagesComponents/   # Page-specific components
│   │       ├── Home/          # Home page sections
│   │       ├── About/         # About page sections
│   │       └── Services/      # Services page sections
│   ├── contexts/              # React Context providers
│   │   └── LanguageContext.jsx # Language state management
│   ├── data/                  # Content management
│   │   ├── index.js           # Main data exports and helpers
│   │   ├── common.js          # Shared content (nav, footer)
│   │   ├── home.js            # Home page content
│   │   ├── about.js           # About page content
│   │   ├── services.js        # Services page content
│   │   └── README.md          # Data structure documentation
│   ├── pages/                 # Main page components
│   │   ├── Home.jsx           # Home page
│   │   ├── About.jsx          # About page
│   │   └── Services.jsx       # Services page
│   ├── assets/                # Images and static files
│   │   └── imgs/              # Website images
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # App entry point
│   ├── App.css                # Global styles
│   └── index.css              # Base styles
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── eslint.config.js           # ESLint configuration
└── README.md                  # This file
```

## 🎨 Design System

### Color Palette
- **Primary Navy**: `#1e3a8a` - Professional, trustworthy
- **Primary Gold**: `#f59e0b` - Elegant, premium feel
- **Accent Blue**: `#3b82f6` - Call-to-action elements
- **Neutral Grays**: Various shades for text and backgrounds

### Typography
- **Headings**: Bold, professional fonts
- **Body Text**: Clean, readable typography
- **Arabic Support**: RTL text direction support

### Components
- **Buttons**: Consistent styling with hover effects
- **Cards**: Clean, modern card layouts
- **Forms**: Professional form styling
- **Navigation**: Responsive header with mobile menu

## 🌐 Pages Overview

### Home Page (`/`)
- **Hero Section**: Professional introduction with CTA
- **Achievements**: Key statistics and accomplishments
- **Practice Areas**: Core legal services offered
- **Why Choose Us**: Unique value propositions
- **Testimonials**: Client feedback and reviews
- **Call-to-Action**: Contact encouragement

### Services Page (`/services`)
- **Services Hero**: Overview of legal services
- **Services Grid**: Detailed service descriptions
- **Process Steps**: 4-step client workflow
- **Specializations**: Industry-specific expertise
- **Services CTA**: Service-specific contact form

### About Page (`/about`)
- **About Hero**: Personal introduction
- **Credentials**: Education and qualifications
- **Timeline**: Professional journey
- **Achievements**: Recognition and awards
- **Contact Section**: Detailed contact form

## 🔧 Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd lawyer-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🌍 Internationalization (i18n)

The website supports both English and Arabic languages with:

### Language Context
- React Context for global language state
- Automatic language switching
- Persistent language preference

### Content Management
- Centralized content in `/src/data/` directory
- Helper functions for easy data access
- Consistent structure across all pages

### Usage Example
```javascript
import { getPageData } from './data';
import { useLanguage } from './contexts/LanguageContext';

const MyComponent = () => {
  const { language } = useLanguage();
  const data = getPageData('home', language);
  
  return <h1>{data.hero.title}</h1>;
};
```

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Tailwind CSS responsive utilities
- **Touch Friendly**: Large touch targets and gestures
- **Performance**: Optimized images and lazy loading

## 🎭 Animations

Powered by Framer Motion:
- **Page Transitions**: Smooth route changes
- **Scroll Animations**: Elements animate on scroll
- **Hover Effects**: Interactive button and card animations
- **Loading States**: Smooth loading transitions

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Recommended for React apps
- **Netlify**: Easy deployment with drag-and-drop
- **GitHub Pages**: Free hosting for static sites
- **Traditional Hosting**: Upload `dist` folder to web server

## 🔧 Customization

### Adding New Content
1. Update data files in `/src/data/`
2. Add both English and Arabic versions
3. Test language switching functionality

### Adding New Pages
1. Create page component in `/src/pages/`
2. Add route in `App.jsx`
3. Create page-specific components in `/src/components/PagesComponents/`
4. Add navigation items in `/src/data/common.js`

### Styling Changes
- Modify Tailwind classes in components
- Update color variables in CSS
- Add custom styles in `App.css`

## 📊 Performance Features

- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Unused code elimination
- **Image Optimization**: Optimized image formats
- **Lazy Loading**: Components load on demand
- **Caching**: Browser caching strategies

## 🧪 Testing

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Language switching works
- [ ] Responsive design on all devices
- [ ] Forms submit properly
- [ ] Links navigate correctly
- [ ] Images load properly

## 📝 Content Guidelines

### Writing Style
- **Professional**: Maintain professional tone
- **Clear**: Use clear, concise language
- **Consistent**: Maintain consistent terminology
- **Accessible**: Use accessible language

### Translation Guidelines
- **Accuracy**: Ensure accurate translations
- **Cultural Sensitivity**: Consider cultural context
- **Consistency**: Maintain consistent terminology
- **Professional**: Use professional legal terminology

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or support, please contact:
- Email: [your-email@example.com]
- Phone: [your-phone-number]
- Website: [your-website-url]

---

**Built with ❤️ for legal professionals**