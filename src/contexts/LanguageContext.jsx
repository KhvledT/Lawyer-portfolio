import React, { createContext, useContext, useState } from 'react';

// Create the Language Context
const LanguageContext = createContext();

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN'); // Default to English

  // Function to toggle between languages
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'EN' ? 'AR' : 'EN');
  };

  // Function to set specific language
  const setLanguageTo = (lang) => {
    setLanguage(lang);
  };

  // Value object to be provided to consumers
  const value = {
    language,
    toggleLanguage,
    setLanguageTo,
    isEnglish: language === 'EN',
    isArabic: language === 'AR'
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
