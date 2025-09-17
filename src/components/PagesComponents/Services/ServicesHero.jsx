import React from 'react';
import { motion } from 'framer-motion';
import { getPageData } from '../../../data';
import { useLanguage } from '../../../contexts/LanguageContext';

const ServicesHero = () => {
  const { language } = useLanguage();
  
  // Get services hero data based on current language
  const heroData = getPageData('services', language).hero;
  
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary-navy)] to-[var(--accent-blue)] text-white text-center">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">{heroData.title}</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            {heroData.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;