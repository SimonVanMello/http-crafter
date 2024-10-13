import { I18nManager, Platform, Settings } from 'react-native';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import fr from './fr.json';

const getLocale = () => {
  let currentLocale = 'en';

  if (Platform.OS === 'ios') {
    const settings = Settings.get('AppleLocale');

    const locale = settings || settings?.[0];

    if (locale) {
      currentLocale = locale;
    }
  } else {
    const locale = I18nManager.getConstants().localeIdentifier;

    if (locale) {
      currentLocale = locale;
    }
  }

  return currentLocale;
};

const deviceLanguage = getLocale();

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: deviceLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
  returnNull: false,
});

export default i18n;
