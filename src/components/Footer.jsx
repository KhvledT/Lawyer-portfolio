import React from 'react';
import { Scale, Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react';
import { getCommonData } from '../data';
import { useLanguage } from '../contexts/LanguageContext';
import { getRTLClasses, getTextAlignmentClass } from '../utils/rtlHelpers';

const Footer = () => {
  const { language, direction } = useLanguage();
  
  // Get footer data based on current language
  const footerData = getCommonData(language).footer;
  
  return (
    <footer className="bg-[var(--primary-navy)] text-white mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16" dir={direction}>
          <div className="space-y-6">
            <div className={getRTLClasses(language, "flex items-center gap-3")}>
              <Scale className="w-7 h-7 text-[var(--primary-gold)]" />
                <span className={`font-bold text-xl ${getTextAlignmentClass(language, false)}`}>{footerData.companyName}</span>
            </div>
            <p className={`text-gray-300 leading-relaxed ${getTextAlignmentClass(language, false)}`}>
              {footerData.description}
            </p>
            <div className={getRTLClasses(language, "flex gap-4")}>
              <a 
                href="#" 
                className={`w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center text-[var(--primary-gold)] hover:bg-[var(--primary-gold)] hover:text-[var(--primary-navy)] transition-all duration-300 ${getTextAlignmentClass(language, false)}`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className={`w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center text-[var(--primary-gold)] hover:bg-[var(--primary-gold)] hover:text-[var(--primary-navy)] transition-all duration-300 ${getTextAlignmentClass(language, false)}`}
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className={`text-[var(--primary-gold)] font-semibold text-lg ${getTextAlignmentClass(language, false)}`}>{footerData.contactInfo}</h4>
            <div className="space-y-4">
              <div className={getRTLClasses(language, "flex items-start gap-3")}>
                <Phone className="w-5 h-5 text-[var(--primary-gold)] mt-1 flex-shrink-0" />
                <span className={`text-gray-300 ${getTextAlignmentClass(language, false)}`}>{footerData.phone}</span>
              </div>
              <div className={getRTLClasses(language, "flex items-start gap-3")}>
                <Mail className="w-5 h-5 text-[var(--primary-gold)] mt-1 flex-shrink-0" />
                <span className={`text-gray-300 ${getTextAlignmentClass(language, false)}`}>{footerData.email}</span>
              </div>
              <div className={getRTLClasses(language, "flex items-start gap-3")}>
                <MapPin className="w-5 h-5 text-[var(--primary-gold)] mt-1 flex-shrink-0" />
                <span className={`text-gray-300 ${getTextAlignmentClass(language, false)}`} dangerouslySetInnerHTML={{ __html: footerData.address }} />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className={`text-[var(--primary-gold)] font-semibold text-lg ${getTextAlignmentClass(language, false)}`}>{footerData.practiceAreas}</h4>
            <ul className="space-y-3">
              {footerData.practiceAreasList.map((area, index) => (
                <li key={index} className={getTextAlignmentClass(language, false)}>
                  <a href="/services" className={`text-gray-300 hover:text-[var(--primary-gold)] transition-colors ${getTextAlignmentClass(language, false)}`}>
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className={`text-[var(--primary-gold)] font-semibold text-lg ${getTextAlignmentClass(language, false)}`}>{footerData.officeHours}</h4>
            <div className="space-y-3">
              <div className={getRTLClasses(language, "flex justify-between text-gray-300 text-sm", "", "")}>
                <span className={getTextAlignmentClass(language, false)}>{footerData.hours.weekdays}</span>
                <span className={getTextAlignmentClass(language, false)}>{footerData.hours.weekdaysTime}</span>
              </div>
              <div className={getRTLClasses(language, "flex justify-between text-gray-300 text-sm", "", "")}>
                <span className={getTextAlignmentClass(language, false)}>{footerData.hours.saturday}</span>
                <span className={getTextAlignmentClass(language, false)}>{footerData.hours.saturdayTime}</span>
              </div>
              <div className={getRTLClasses(language, "flex justify-between text-gray-300 text-sm", "", "")}>
                <span className={getTextAlignmentClass(language, false)}>{footerData.hours.sunday}</span>
                <span className={getTextAlignmentClass(language, false)}>{footerData.hours.sundayTime}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm" dangerouslySetInnerHTML={{ __html: footerData.copyright }} />
          <div className="flex gap-8">
            <a href="#" className="text-gray-300 hover:text-[var(--primary-gold)] transition-colors text-sm">{footerData.privacyPolicy}</a>
            <a href="#" className="text-gray-300 hover:text-[var(--primary-gold)] transition-colors text-sm">{footerData.termsOfService}</a>
            <a href="#" className="text-gray-300 hover:text-[var(--primary-gold)] transition-colors text-sm">{footerData.attorneyAdvertising}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;