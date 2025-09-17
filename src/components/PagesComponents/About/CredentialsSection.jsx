import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users } from 'lucide-react';
import { getPageData } from '../../../data';
import { useLanguage } from '../../../contexts/LanguageContext';

const CredentialsSection = () => {
  const { language } = useLanguage();
  
  // Get credentials data based on current language
  const credentialsData = getPageData('about', language).credentials;
  const credentials = credentialsData.sections.map((section, index) => ({
    icon: [BookOpen, Award, Users][index],
    title: section.title,
    items: section.items
  }));

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
          <h2 className="text-4xl font-bold text-[var(--primary-navy)] mb-4">{credentialsData.title}</h2>
          <p className="text-xl text-[var(--medium-gray)] max-w-3xl mx-auto">
            {credentialsData.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {credentials.map((credential, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <credential.icon className="w-12 h-12 text-[var(--primary-gold)] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-[var(--primary-navy)] mb-6">{credential.title}</h3>
              <ul className="space-y-3 text-left">
                {credential.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-[var(--medium-gray)]">
                    <span className="text-[var(--primary-gold)] font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;