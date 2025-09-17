# Website Data Structure

This directory contains all the website content organized by pages and sections, with both English (EN) and Arabic (AR) translations.

## File Structure

```
src/data/
├── index.js          # Main export file with helper functions
├── common.js         # Shared data across all pages (navigation, footer, buttons)
├── home.js          # Home page content
├── about.js         # About page content
├── services.js      # Services page content
└── README.md        # This documentation file
```

## Usage

### Import all data
```javascript
import { websiteData } from './data';
```

### Import specific page data
```javascript
import { homeData, aboutData, servicesData } from './data';
```

### Import common data
```javascript
import { commonData } from './data';
```

### Use helper functions
```javascript
import { getPageData, getCommonData } from './data';

// Get home page data in English
const homeEN = getPageData('home', 'EN');

// Get home page data in Arabic
const homeAR = getPageData('home', 'AR');

// Get common navigation data
const navEN = getCommonData('EN').navigation;
const navAR = getCommonData('AR').navigation;
```

## Data Structure

Each page data file follows this structure:

```javascript
export const pageData = {
  sectionName: {
    EN: {
      // English content
    },
    AR: {
      // Arabic content
    }
  }
};
```

## Content Sections by Page

### Common Data (`common.js`)
- Navigation menu items
- Footer content
- Button text
- Image metadata
- Social links
- Contact information

### Home Page (`home.js`)
- Hero section
- Achievements/Stats
- Practice areas
- Why choose us
- Testimonials
- Call-to-action

### About Page (`about.js`)
- About hero
- Credentials & qualifications
- Professional timeline
- Recognition & achievements
- Contact section with form

### Services Page (`services.js`)
- Services hero
- Services grid with detailed features
- Process steps
- Industry specializations
- Services CTA

## Images

All image paths and alt text are documented in the `common.js` file under the `images` object. Current images include:

- `heroImage.jpeg` - Professional lawyer in office
- `whyChooseImage.jpeg` - Legal consultation
- `specializationsImage.jpeg` - Legal consultation meeting

## Language Support

Each text element has both English (EN) and Arabic (AR) versions. This structure allows for easy language switching functionality.

### Example Usage in Components

```javascript
import { getPageData } from '../data';

const MyComponent = ({ language = 'EN' }) => {
  const data = getPageData('home', language);
  
  return (
    <div>
      <h1>{data.hero.title}</h1>
      <p>{data.hero.description}</p>
    </div>
  );
};
```

## Future Enhancements

This data structure makes it easy to:

1. Add new languages by adding new language codes (e.g., 'FR' for French)
2. Add new pages by creating new data files
3. Modify content without touching component code
4. Implement dynamic language switching
5. Add content management system integration

## Content Management

When updating content:

1. Edit the appropriate data file
2. Update both EN and AR versions
3. Test language switching functionality
4. Update this documentation if adding new sections

## Best Practices

1. Keep text content separate from component logic
2. Use descriptive keys for easy maintenance
3. Maintain consistency between EN and AR versions
4. Use semantic HTML structure in translations when needed
5. Test all languages thoroughly
