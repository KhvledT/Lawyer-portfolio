import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPageData, getCommonData } from '../../../data';
import { useLanguage } from '../../../contexts/LanguageContext';

const PracticeAreasSection = () => {
  const { language } = useLanguage();
  
  // Get practice areas data based on current language
  const practiceAreasData = getPageData('home', language).practiceAreas;
  const practiceAreas = practiceAreasData.areas;

  return (
    <section className="py-16" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container w-full max-w-6xl mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[var(--primary-navy)] mb-4">{practiceAreasData.title}</h2>
          <p className="text-xl text-[var(--medium-gray)]">{practiceAreasData.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ gap: '2rem' }}>
          {practiceAreas.map((area, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 text-center relative hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-6">{area.icon}</div>
              <h3 className="text-2xl font-bold text-[var(--primary-navy)] mb-4">{area.title}</h3>
              <p className="text-[var(--medium-gray)] mb-6">{area.description}</p>
              <Link 
                to="/services" 
                className="inline-flex items-center text-[var(--primary-gold)] font-semibold hover:text-[var(--accent-blue)] hover:translate-x-1 transition-all duration-300 mt-4"
              >
                {practiceAreasData.learnMore} <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;