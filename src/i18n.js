import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';

//https://github.com/i18next/react-i18next/issues/1082
import translationEN from './assets/i18n/en.json';
import translationFR from './assets/i18n/fr.json';
import translationDE from './assets/i18n/de.json';
import translationIT from './assets/i18n/it.json';

const resources = {
   en: {
     translation: translationEN,
   },
   fr: {
     translation: translationFR,
   },
   de: {
     translation: translationDE,
   },
   it: {
     translation: translationIT,
   },
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: {
      wait: true
    }
  })

export default i18n
