import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { getPageData } from '../../../data';
import { useLanguage } from '../../../contexts/LanguageContext';

const TestimonialsSection = () => {
  const { language } = useLanguage();
  
  // Get testimonials data based on current language
  const testimonialsData = getPageData('home', language).testimonials;
  const testimonials = testimonialsData.testimonials;

  return (
    <section className="py-16" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container w-full max-w-6xl mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[var(--primary-navy)] mb-4">{testimonialsData.title}</h2>
          <p className="text-xl text-[var(--medium-gray)]">{testimonialsData.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ gap: '2rem' }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 relative hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Quote className="w-8 h-8 text-[var(--primary-gold)] mb-4" />
              <p className="italic mb-6 leading-relaxed">{testimonial.content}</p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold text-[var(--primary-navy)]">{testimonial.name}</div>
                  <div className="text-sm text-[var(--medium-gray)]">{testimonial.position}</div>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[var(--primary-gold)] fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
