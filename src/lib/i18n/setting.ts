import i18next from 'i18next';
import { ja } from './resources/ja';
import { en } from './resources/en';
import { initReactI18next } from 'react-i18next';

export const defaultNS = 'translation';
export const resources = {
  ja: {
    translation: ja,
  },
  en: {
    translation: en,
  },
} as const;

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
  defaultNS,
  resources,
});

export default i18next;
