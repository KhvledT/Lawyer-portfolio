import React from 'react';
import { motion } from 'framer-motion';
import aboutHeroImage from '../../../assets/imgs/whyChooseImage.jpeg';
import { getPageData } from '../../../data';
import { useLanguage } from '../../../contexts/LanguageContext';
import { getTextAlignmentClass, getRTLClasses } from '../../../utils/rtlHelpers';

const AboutHero = () => {
  const { language, direction } = useLanguage();
  
  // Get about hero data based on current language
  const heroData = getPageData('about', language).hero;
  
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" dir={direction}>
          <motion.div
            className="space-y-6"
            initial={{ x: language === 'AR' ? 50 : -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className={`text-5xl lg:text-6xl font-bold text-[var(--primary-navy)] ${getTextAlignmentClass(language, false)}`}>{heroData.title}</h1>
            <p className={`text-2xl font-semibold text-[var(--primary-gold)] ${getTextAlignmentClass(language, false)}`}>
              {heroData.subtitle}
            </p>
            <p className={`text-lg text-[var(--medium-gray)] leading-relaxed ${getTextAlignmentClass(language, false)}`}>
              {heroData.description}
            </p>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ x: language === 'AR' ? -50 : 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={aboutHeroImage}
              alt={heroData.imageAlt}
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;