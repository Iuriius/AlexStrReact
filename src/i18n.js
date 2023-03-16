import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import common_uk from './locales/uk/translation.json';
import common_en from './locales/en/translation.json';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'uk',
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        common: common_en,
      },
      uk: {
        common: common_uk,
      },
    },
  });

export default i18n;
