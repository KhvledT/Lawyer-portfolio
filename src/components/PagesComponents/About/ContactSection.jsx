import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Calendar, Clock } from 'lucide-react';
import { getPageData } from '../../../data';
import { useLanguage } from '../../../contexts/LanguageContext';

const ContactSection = () => {
  const { language } = useLanguage();
  
  // Get contact data based on current language
  const contactData = getPageData('about', language).contact;
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[var(--primary-navy)] mb-4">{contactData.title}</h2>
          <p className="text-xl text-[var(--medium-gray)]">{contactData.subtitle}</p>
        </motion.div>

        {/* Schedule a Consultation - Full Width */}
        <motion.div
          className="mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[var(--primary-navy)] mb-4">{contactData.consultationForm.title}</h3>
            <p className="text-[var(--medium-gray)] mb-8">
              {contactData.consultationForm.description}
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block font-semibold text-[var(--primary-navy)] mb-2">{contactData.consultationForm.formFields.firstName}</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-gold)] focus:outline-none transition-colors"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block font-semibold text-[var(--primary-navy)] mb-2">{contactData.consultationForm.formFields.lastName}</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-gold)] focus:outline-none transition-colors"
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block font-semibold text-[var(--primary-navy)] mb-2">{contactData.consultationForm.formFields.email}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-gold)] focus:outline-none transition-colors"
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block font-semibold text-[var(--primary-navy)] mb-2">{contactData.consultationForm.formFields.phone}</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-gold)] focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="legalMatter" className="block font-semibold text-[var(--primary-navy)] mb-2">{contactData.consultationForm.formFields.legalMatter}</label>
                <select 
                  id="legalMatter" 
                  name="legalMatter" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-gold)] focus:outline-none transition-colors"
                  required
                >
                  {contactData.consultationForm.legalMatterOptions.map((option, index) => (
                    <option key={index} value={option.value}>{option.text}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block font-semibold text-[var(--primary-navy)] mb-2">{contactData.consultationForm.formFields.message}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  placeholder={contactData.consultationForm.formFields.messagePlaceholder}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-gold)] focus:outline-none transition-colors resize-vertical"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[var(--primary-gold)] text-[var(--primary-navy)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--accent-blue)] hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {contactData.consultationForm.formFields.submitButton}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Contact Information and Office Hours - Stacked Vertically */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[var(--primary-navy)] mb-6">{contactData.officeHours.title}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-[var(--primary-gold)] mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <div className="text-[var(--medium-gray)]">{contactData.officeHours.mondayFriday}</div>
                  <div className="text-[var(--medium-gray)]">{contactData.officeHours.saturday}</div>
                  <div className="text-[var(--medium-gray)]">{contactData.officeHours.sunday}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[var(--primary-navy)] mb-6">{contactData.contactInfo.title}</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[var(--primary-gold)] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-[var(--primary-navy)]">{contactData.contactInfo.phone.label}</div>
                  <div className="text-[var(--medium-gray)]">{contactData.contactInfo.phone.value}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[var(--primary-gold)] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-[var(--primary-navy)]">{contactData.contactInfo.email.label}</div>
                  <div className="text-[var(--medium-gray)]">{contactData.contactInfo.email.value}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[var(--primary-gold)] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-[var(--primary-navy)]">{contactData.contactInfo.address.label}</div>
                  <div className="text-[var(--medium-gray)]" dangerouslySetInnerHTML={{ __html: contactData.contactInfo.address.value }} />
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;