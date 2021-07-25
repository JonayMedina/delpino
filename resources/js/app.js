require('./bootstrap');

import Vue from 'vue';
window.Vue = require('vue');
import App from './App.vue';
import Vuetify from 'vuetify';
import router from './router';
import Vuex from 'vuex';
import store from './store';
import VueAxios from 'vue-axios';
import Swal from 'sweetalert2';
import axios from 'axios';
import './plugins/base';
import './plugins/chartist';
import './plugins/vee-validate';
import vuetify from './plugins/vuetify';
import i18n from './i18n';
import Sfire from './helpers/swalfire';
import Alerts from './views/dashboard/component/Alerts';
import Money from './views/dashboard/component/Money';
import Errors from './views/dashboard/component/Errors';
import 'vuetify/dist/vuetify.min.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

import { Form, HasError, AlertError } from 'vform';
window.Form = Form;
window.Sfire = Sfire;
window.Swal = Swal;

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component('alerts', Alerts)
Vue.component('money', Money)
Vue.component('error-component', Errors)
Vue.use(VueAxios, axios);
Vue.use(Vuetify);
Vue.use(Vuex);

const app = new Vue({
    el: '#app',
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App),
    vuetify: new Vuetify(),
});
