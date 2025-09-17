import React from 'react';
import { motion } from 'framer-motion';
import { getPageData } from '../../../data';
import { useLanguage } from '../../../contexts/LanguageContext';

const ProcessSteps = () => {
  const { language } = useLanguage();
  
  // Get process steps data based on current language
  const processData = getPageData('services', language).processSteps;
  const processSteps = processData.steps;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[var(--primary-navy)] mb-4">{processData.title}</h2>
          <p className="text-xl text-[var(--medium-gray)] max-w-2xl mx-auto">
            {processData.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-8"
              initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-[var(--primary-gold)] text-[var(--primary-navy)] w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                {step.step}
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg flex-1">
                <h3 className="text-2xl font-bold text-[var(--primary-navy)] mb-3">{step.title}</h3>
                <p className="text-[var(--medium-gray)] leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;