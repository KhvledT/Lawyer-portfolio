import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the Language Context
const LanguageContext = createContext();

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  // Initialize language from localStorage or default to English
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'EN');

  // Function to toggle between languages
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'EN' ? 'AR' : 'EN');
  };

  // Function to set specific language
  const setLanguageTo = (lang) => {
    setLanguage(lang);
  };

  // Apply RTL/LTR styling and save language to localStorage whenever it changes
  useEffect(() => {
    const body = document.body;

    if (language === 'AR') {
      body.classList.add('rtl');
      body.classList.remove('ltr');
      body.setAttribute('dir', 'rtl');
    } else {
      body.classList.add('ltr');
      body.classList.remove('rtl');
      body.setAttribute('dir', 'ltr');
    }

    // Save the current language in localStorage
    localStorage.setItem('language', language);
  }, [language]);

  // Value object to be provided to consumers
  const value = {
    language,
    toggleLanguage,
    setLanguageTo,
    isEnglish: language === 'EN',
    isArabic: language === 'AR',
    direction: language === 'AR' ? 'rtl' : 'ltr'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};

export default LanguageContext;
