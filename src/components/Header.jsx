import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale } from 'lucide-react';
import { motion } from 'framer-motion';
import { getCommonData } from '../data';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();
  
  // Get navigation data based on current language
  const navData = getCommonData(language).navigation;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: navData.home },
    { path: '/services', label: navData.services },
    { path: '/about', label: navData.about },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-lg' 
          : 'bg-white/95 backdrop-blur-md'
      } border-b border-gray-100`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-[var(--primary-navy)] font-bold text-xl">
            <Scale className="w-8 h-8 text-[var(--primary-gold)]" />
            <span>{navData.companyName}</span>
          </Link>

          <nav className={`hidden md:flex items-center gap-8 ${isMenuOpen ? 'flex' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors relative ${
                  location.pathname === item.path 
                    ? 'text-[var(--primary-navy)]' 
                    : 'text-gray-600 hover:text-[var(--primary-navy)]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--primary-gold)]"></div>
                )}
              </Link>
            ))}
            <LanguageToggle />
            <Link 
              to="/about" 
              className="ml-4 btn btn-primary items-center"
            >
              {navData.contact}
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-[var(--primary-navy)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 font-medium transition-colors ${
                    location.pathname === item.path 
                      ? 'text-[var(--primary-navy)]' 
                      : 'text-gray-600 hover:text-[var(--primary-navy)]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 space-y-3">
                <LanguageToggle />
                <Link 
                  to="/about" 
                  className="block bg-[var(--primary-gold)] text-[var(--primary-navy)] px-6 py-3 rounded-lg font-semibold text-center hover:bg-[var(--accent-blue)] hover:text-white transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {navData.contact}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;