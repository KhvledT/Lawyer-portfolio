import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Lightbulb, Users, FileText, Gavel, Shield, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPageData, getCommonData } from '../../../data';
import { useLanguage } from '../../../contexts/LanguageContext';

const ServicesGrid = () => {
  const { language } = useLanguage();
  
  // Get services data based on current language
  const servicesData = getPageData('services', language).servicesGrid;
  const services = servicesData.services.map((service, index) => ({
    icon: [Building2, Lightbulb, Users, FileText, Gavel, Shield][index],
    title: service.title,
    description: service.description,
    features: service.features
  }));

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white flex flex-col justify-between rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-6 mb-8">
                <service.icon className="w-12 h-12 text-[var(--primary-gold)] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-[var(--primary-navy)] mb-3">{service.title}</h3>
                  <p className="text-[var(--medium-gray)]">{service.description}</p>
                </div>
              </div>
              
              <div className="mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3 mb-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-[var(--primary-gold)] flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-[var(--primary-gold)] font-semibold hover:text-[var(--accent-blue)] hover:translate-x-1 transition-all duration-300"
                >
                  {servicesData.getStarted}
                  {language === `AR` 
                  ?
                  <>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  </>
                  :
                  <>
                  <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                  }
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;