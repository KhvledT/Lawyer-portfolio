import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../../../assets/imgs/heroImage.jpeg';
import { getPageData, getCommonData } from '../../../data';
import { useLanguage } from '../../../contexts/LanguageContext';

const HeroSection = () => {
  const { language } = useLanguage();
  
  // Get hero data based on current language
  const heroData = getPageData('home', language).hero;
  const buttonData = getCommonData(language).buttons;
  
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="absolute top-0  right-0 w-1/2 h-full bg-gradient-to-bl from-yellow-100/10 to-blue-100/10 z-10"></div>
      <div className="container w-full max-w-6xl mx-auto px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ gap: '4rem' }}>
          <motion.div
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-[var(--primary-navy)] leading-tight">
              {heroData.title}
              <span className="text-[var(--primary-gold)] block">{heroData.titleHighlight}</span>
            </h1>
            <p className="text-xl text-[var(--medium-gray)] leading-relaxed">
              {heroData.description}
            </p>
            <div className="flex gap-6 flex-wrap">
              <Link 
                to="/about" 
                className="inline-flex btn btn-primary items-center"
              >
                {buttonData.scheduleConsultation}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex btn btn-secondary items-center"
              >
                {buttonData.viewServices}
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={heroImage}
              alt="Professional lawyer in office"
              className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
            />
            <div className="absolute top-8 right-8 bg-white p-6 rounded-xl shadow-lg flex items-center gap-3">
              <Award className="w-6 h-6 text-[var(--primary-gold)]" />
              <div>
                <div className="font-semibold text-[var(--primary-navy)]">{heroData.topRated}</div>
                <div className="text-sm text-[var(--medium-gray)]">{heroData.legalCounsel}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;