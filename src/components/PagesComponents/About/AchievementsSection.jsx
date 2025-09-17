import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import  achievementsImage from '../../../assets/imgs/specializationsImage.jpeg';
import { getPageData } from '../../../data';
import { useLanguage } from '../../../contexts/LanguageContext';

const AchievementsSection = () => {
  const { language } = useLanguage();
  
  // Get achievements data based on current language
  const achievementsData = getPageData('about', language).achievements;
  const achievements = achievementsData.achievements;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[var(--primary-navy)]">{achievementsData.title}</h2>
            <p className="text-lg text-[var(--medium-gray)] leading-relaxed">
              {achievementsData.description}
            </p>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-[var(--primary-gold)] mt-1 flex-shrink-0" />
                  <span className="text-[var(--medium-gray)]">{achievement}</span>
                </motion.div>
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
              src={achievementsImage}
              alt={achievementsData.imageAlt}
              className="w-full h-[500px] object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;