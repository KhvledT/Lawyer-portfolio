import React from 'react';
import { motion } from 'framer-motion';
import ServicesHero from '../components/PagesComponents/Services/ServicesHero';
import ServicesGrid from '../components/PagesComponents/Services/ServicesGrid';
import ProcessSteps from '../components/PagesComponents/Services/ProcessSteps';
import Specializations from '../components/PagesComponents/Services/Specializations';
import ServicesCTA from '../components/PagesComponents/Services/ServicesCTA';

const Services = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ServicesHero />
      <ServicesGrid />
      <ProcessSteps />
      <Specializations />
      <ServicesCTA />
    </motion.main>
  );
};

export default Services;