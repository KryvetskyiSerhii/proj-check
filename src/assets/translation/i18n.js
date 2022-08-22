import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'
import en from 'assets/translation/en/en.json'
import de from 'assets/translation/de/de.json'

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
}

i18n.init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
