import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import whyChooseImage from '../../../assets/imgs/whyChooseImage.jpeg';
import { getPageData } from '../../../data';
import { useLanguage } from '../../../contexts/LanguageContext';

const WhyChooseSection = () => {
  const { language } = useLanguage();
  
  // Get why choose data based on current language
  const whyChooseData = getPageData('home', language).whyChoose;
  
  return (
    <section className="py-16 bg-gray-50" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container w-full max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ gap: '4rem' }}>
          <motion.div
            className="space-y-6"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[var(--primary-navy)]">{whyChooseData.title}</h2>
            <p className="text-lg text-[var(--medium-gray)] leading-relaxed">
              {whyChooseData.description}
            </p>
            
            <div className="space-y-6">
              {whyChooseData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[var(--primary-gold)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[var(--primary-navy)] mb-2">{feature.title}</h4>
                    <p className="text-[var(--medium-gray)]">{feature.description}</p>
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
              src={whyChooseImage}
              alt="Legal consultation"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;