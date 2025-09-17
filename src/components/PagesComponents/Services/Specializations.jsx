import React from 'react';
import { motion } from 'framer-motion';
import specializationsImage from '../../../assets/imgs/specializationsImage.jpeg';
import { getPageData } from '../../../data';
import { useLanguage } from '../../../contexts/LanguageContext';

const Specializations = () => {
  const { language } = useLanguage();
  
  // Get specializations data based on current language
  const specializationsData = getPageData('services', language).specializations;
  
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[var(--primary-navy)]">{specializationsData.title}</h2>
            <p className="text-lg text-[var(--medium-gray)] leading-relaxed">
              {specializationsData.description}
            </p>
            
            <div className="space-y-8">
              {specializationsData.industries.map((industry, index) => (
                <div key={index}>
                  <h4 className="text-xl font-semibold text-[var(--primary-navy)] mb-4">{industry.title}</h4>
                  <div className="grid grid-cols-2">
                    {industry.sectors.map((sector, sectorIndex) => (
                      <div key={sectorIndex} className="flex items-center gap-2 text-[var(--medium-gray)]">
                        <span className="text-[var(--primary-gold)]">•</span>
                        <span>{sector}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={specializationsImage}
              alt={specializationsData.imageAlt}
              className="w-full h-[500px] object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Specializations;