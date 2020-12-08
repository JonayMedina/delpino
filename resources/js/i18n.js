import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from 'vuetify/lib/locale/en'
import es from 'vuetify/lib/locale/es'

Vue.use(VueI18n)

const messages = {
  en: {
    ...require('./locales/en.json'),
    $vuetify: en,
  },
  es: {
    ...require('./locales/es.json'),
    $vuetify: es,
  },
}

export default new VueI18n({
  locale: process.env.MIX_VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.MIX_VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages,
})
