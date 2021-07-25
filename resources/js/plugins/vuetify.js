import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// import '@mdi/font/css/materialdesignicons.css'
import i18n from '../i18n'
import '../sass/overrides.sass'

Vue.use(Vuetify)

const theme = {
  primary: '#4CAF50',
  secondary: '#9C27b0',
  accent: '#9C27b0',
  info: '#00CAE3',
}

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
    lang: {
        t: (key, ...params) => i18n.t(key, params),
    },
    theme: {
        themes: {
        dark: theme,
        light: theme,
        },
    },
})
