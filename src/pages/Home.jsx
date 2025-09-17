import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/PagesComponents/Home/HeroSection';
import AchievementsSection from '../components/PagesComponents/Home/AchievementsSection';
import PracticeAreasSection from '../components/PagesComponents/Home/PracticeAreasSection';
import WhyChooseSection from '../components/PagesComponents/Home/WhyChooseSection';
import TestimonialsSection from '../components/PagesComponents/Home/TestimonialsSection';
import CTASection from '../components/PagesComponents/Home/CTASection';

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <HeroSection />
      <AchievementsSection />
      <PracticeAreasSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
    </motion.main>
  );
};

export default Home;