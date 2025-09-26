import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPageData } from '../../../data';
import { useLanguage } from '../../../contexts/LanguageContext';

const CTASection = () => {
  const { language } = useLanguage();
  
  // Get CTA data based on current language
  const ctaData = getPageData('home', language).cta;
  
  return (
    <section className="py-20 bg-[var(--primary-navy)]" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container w-full max-w-6xl mx-auto px-8">
        <motion.div
          className="text-center text-white flex flex-col items-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">{ctaData.title}</h2>

          <p className="text-xl opacity-80 mb-10 max-w-2xl">
            {ctaData.description}
          </p>
          
          <Link 
            to="/about" 
            className="inline-flex btn btn-primary items-center"
          >
            {ctaData.buttonText}
            {language === `AR`
            ? 
              <>
              <ArrowLeft className="w-4 h-4 mr-2" />
              </>
            : 
              <>
              <ArrowRight className="w-5 h-5 ml-2" />
              </>
            }
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;