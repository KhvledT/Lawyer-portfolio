import React from 'react';
import { motion } from 'framer-motion';
import AboutHero from '../components/PagesComponents/About/AboutHero';
import CredentialsSection from '../components/PagesComponents/About/CredentialsSection';
import TimelineSection from '../components/PagesComponents/About/TimelineSection';
import AchievementsSection from '../components/PagesComponents/About/AchievementsSection';
import ContactSection from '../components/PagesComponents/About/ContactSection';

const About = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <AboutHero />
      <CredentialsSection />
      <TimelineSection />
      <AchievementsSection />
      <ContactSection />
    </motion.main>
  );
};

export default About;
