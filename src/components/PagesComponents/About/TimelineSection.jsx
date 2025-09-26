import React from 'react';
import { motion } from 'framer-motion';
import { getPageData } from '../../../data';
import { useLanguage } from '../../../contexts/LanguageContext';

const TimelineSection = () => {
  const { language } = useLanguage();
  
  // Get timeline data based on current language
  const timelineData = getPageData('about', language).timeline;
  const timeline = timelineData.timeline;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[var(--primary-navy)] mb-4">{timelineData.title}</h2>
          <p className="text-xl text-[var(--medium-gray)] max-w-3xl mx-auto">
            {timelineData.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className={`absolute ${language === 'AR' ? 'right-8' : 'left-8'} top-0 bottom-0 w-0.5 bg-[var(--primary-gold)]`}></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-8 relative"
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-[var(--primary-gold)] text-[var(--primary-navy)] w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 relative z-10">
                    {item.year}
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg flex-1">
                    <h3 className="text-2xl font-bold text-[var(--primary-navy)] mb-3">{item.title}</h3>
                    <p className="text-[var(--medium-gray)] leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;