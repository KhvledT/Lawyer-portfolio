// RTL utility functions to handle directional layouts
export const getRTLClasses = (language, baseClasses = '', additionalRTL = '', additionalLTR = '') => {
  if (language === 'AR') {
    return `${baseClasses} ${additionalRTL}`.trim();
  }
  return `${baseClasses} ${additionalLTR}`.trim();
};

export const getTextAlignmentClass = (language, center = false) => {
  if (center) return 'center-text';
  if (language === 'AR') return 'rtl-text';
  return 'ltr-text';
};

export const getButtonLayoutClass = (language) => {
  return 'btn-content';
};

export const getFlexLayoutClass = (language) => {
  return language === 'AR' ? 'flex-reverse' : 'flex-content';
};

export const getIconAlignment = (language, iconPosition = 'end') => {
  return iconPosition === 'end' ? 'icon-right' : 'icon-left';
};
