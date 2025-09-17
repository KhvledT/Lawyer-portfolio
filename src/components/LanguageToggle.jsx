import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-sm font-medium text-gray-700 hover:text-gray-900"
      aria-label={`Switch to ${language === 'EN' ? 'Arabic' : 'English'}`}
    >
      <Globe className="w-4 h-4" />
      <span>{language === 'EN' ? 'العربية' : 'English'}</span>
    </button>
  );
};

export default LanguageToggle;
