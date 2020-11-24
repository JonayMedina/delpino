require('./bootstrap');

import Vue from 'vue';
window.Vue = require('vue');
import router from './routes/router';
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

const app = new Vue({
    el: '#app',
    router,
});
