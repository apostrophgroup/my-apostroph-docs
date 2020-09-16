import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'


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
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
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
