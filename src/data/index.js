// Main data export file
import { commonData } from './common.js';
import { homeData } from './home.js';
import { aboutData } from './about.js';
import { servicesData } from './services.js';

// Export all data
export {
  commonData,
  homeData,
  aboutData,
  servicesData
};

// Export combined data object
export const websiteData = {
  common: commonData,
  home: homeData,
  about: aboutData,
  services: servicesData
};

// Helper function to get data by page and language
export const getPageData = (page, language = 'EN') => {
  const pageData = websiteData[page];
  if (!pageData) {
    console.warn(`Page data not found for: ${page}`);
    return null;
  }

  const result = {};
  for (const [section, content] of Object.entries(pageData)) {
    if (content[language]) {
      result[section] = content[language];
    }
  }
  return result;
};

// Helper function to get common data by language
export const getCommonData = (language = 'EN') => {
  return commonData.navigation[language] ? {
    navigation: commonData.navigation[language],
    footer: commonData.footer[language],
    buttons: commonData.buttons[language],
    images: commonData.images
  } : null;
};
