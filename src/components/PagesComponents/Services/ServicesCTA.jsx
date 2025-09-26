import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPageData } from '../../../data';
import { useLanguage } from '../../../contexts/LanguageContext';

const ServicesCTA = () => {
  const { language } = useLanguage();
  
  // Get services CTA data based on current language
  const ctaData = getPageData('services', language).cta;
  
  return (
    <section className="py-20 bg-[var(--primary-navy)]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center text-white"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">{ctaData.title}</h2>
          <p className="text-xl opacity-80 mb-10 max-w-3xl mx-auto">
            {ctaData.description}
          </p>
          <Link 
            to="/about" 
            className="inline-flex items-center bg-[var(--primary-gold)] text-[var(--primary-navy)] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--accent-blue)] hover:text-white transition-all duration-300"
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

export default ServicesCTA;