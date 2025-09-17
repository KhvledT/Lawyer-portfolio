import React from 'react';
import { motion } from 'framer-motion';
import { getPageData } from '../../../data';
import { useLanguage } from '../../../contexts/LanguageContext';

const AchievementsSection = () => {
  const { language } = useLanguage();
  
  // Get achievements data based on current language
  const achievementsData = getPageData('home', language).achievements;
  const achievements = achievementsData.stats;

  return (
    <section className="py-12 bg-[var(--primary-navy)]" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="container w-full max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8" style={{ gap: '2rem' }}>
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center text-white"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-[var(--primary-gold)] mb-2">{achievement.number}</div>
              <div className="text-lg opacity-90">{achievement.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;