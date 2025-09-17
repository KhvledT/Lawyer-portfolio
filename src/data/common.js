// Common data shared across the website
export const commonData = {
  // Header Navigation
  navigation: {
    EN: {
      home: 'Home',
      services: 'Services', 
      about: 'About',
      contact: 'Contact',
      companyName: 'Alexandra Sterling'
    },
    AR: {
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'من نحن', 
      contact: 'اتصل بنا',
      companyName: 'ألكسندر ستيرلينغ'
    }
  },

  // Footer Content
  footer: {
    EN: {
      companyName: 'Alexandra Sterling',
      description: 'Providing exceptional legal counsel with integrity, expertise, and dedication to achieving the best outcomes for our clients.',
      contactInfo: 'Contact Information',
      practiceAreas: 'Practice Areas',
      officeHours: 'Office Hours',
      copyright: '© 2025 Alexandra Sterling Law. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      attorneyAdvertising: 'Attorney Advertising',
      phone: '(555) 123-4567',
      email: 'alexandra@sterlinglaw.com',
      address: '123 Legal Plaza, Suite 500<br />New York, NY 10001',
      hours: {
        weekdays: 'Monday - Friday',
        weekdaysTime: '9:00 AM - 6:00 PM',
        saturday: 'Saturday',
        saturdayTime: '10:00 AM - 2:00 PM',
        sunday: 'Sunday',
        sundayTime: 'By Appointment'
      },
      practiceAreasList: [
        'Corporate Law',
        'Intellectual Property',
        'Employment Law',
        'Contract Negotiation',
        'Litigation'
      ]
    },
    AR: {
      companyName: 'ألكسندرا ستيرلينغ',
      description: 'نقدم استشارة قانونية استثنائية مع النزاهة والخبرة والتفاني لتحقيق أفضل النتائج لعملائنا.',
      contactInfo: 'معلومات الاتصال',
      practiceAreas: 'مجالات الممارسة',
      officeHours: 'ساعات العمل',
      copyright: '© 2025 ألكسندرا ستيرلينغ للقانون. جميع الحقوق محفوظة.',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'شروط الخدمة',
      attorneyAdvertising: 'إعلان المحاماة',
      phone: '(555) 123-4567',
      email: 'alexandra@sterlinglaw.com',
      address: '123 Legal Plaza, Suite 500<br />New York, NY 10001',
      hours: {
        weekdays: 'الاثنين - الجمعة',
        weekdaysTime: '9:00 ص - 6:00 م',
        saturday: 'السبت',
        saturdayTime: '10:00 ص - 2:00 م',
        sunday: 'الأحد',
        sundayTime: 'بموعد مسبق'
      },
      practiceAreasList: [
        'القانون التجاري',
        'الملكية الفكرية',
        'قانون العمل',
        'تفاوض العقود',
        'التقاضي'
      ]
    }
  },

  // Common Buttons and CTAs
  buttons: {
    EN: {
      scheduleConsultation: 'Schedule Consultation',
      viewServices: 'View Services',
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      scheduleFreeConsultation: 'Schedule Free Consultation',
      contactUs: 'Contact Us',
      readMore: 'Read More'
    },
    AR: {
      scheduleConsultation: 'حجز استشارة',
      viewServices: 'عرض الخدمات',
      learnMore: 'اعرف المزيد',
      getStarted: 'ابدأ الآن',
      scheduleFreeConsultation: 'حجز استشارة مجانية',
      contactUs: 'اتصل بنا',
      readMore: 'اقرأ المزيد'
    }
  },

  // Images metadata
  images: {
    heroImage: {
      path: '/src/assets/imgs/heroImage.jpeg',
      alt: {
        EN: 'Professional lawyer in office',
        AR: 'محامية محترفة في المكتب'
      }
    },
    whyChooseImage: {
      path: '/src/assets/imgs/whyChooseImage.jpeg', 
      alt: {
        EN: 'Legal consultation',
        AR: 'استشارة قانونية'
      }
    },
    specializationsImage: {
      path: '/src/assets/imgs/specializationsImage.jpeg',
      alt: {
        EN: 'Legal consultation meeting',
        AR: 'اجتماع استشارة قانونية'
      }
    }
  }
};
