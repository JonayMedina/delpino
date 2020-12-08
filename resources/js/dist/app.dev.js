"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _vuetify = _interopRequireDefault(require("vuetify"));

var _router = _interopRequireDefault(require("./router"));

var _vuex = _interopRequireDefault(require("vuex"));

var _store = _interopRequireDefault(require("./store"));

var _vueAxios = _interopRequireDefault(require("vue-axios"));

var _sweetalert = _interopRequireDefault(require("sweetalert2"));

var _axios = _interopRequireDefault(require("axios"));

require("./plugins/base");

require("./plugins/chartist");

require("./plugins/vee-validate");

var _vuetify2 = _interopRequireDefault(require("./plugins/vuetify"));

var _i18n = _interopRequireDefault(require("./i18n"));

var _swalfire = _interopRequireDefault(require("./helpers/swalfire"));

var _Alerts = _interopRequireDefault(require("./views/dashboard/component/Alerts"));

var _vform = require("vform");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

require('./bootstrap');

window.Vue = require('vue');
window.Form = _vform.Form;
window.Sfire = _swalfire["default"];
window.Swal = _sweetalert["default"];

_vue["default"].component(_vform.HasError.name, _vform.HasError);

_vue["default"].component(_vform.AlertError.name, _vform.AlertError);

_vue["default"].component('alerts', _Alerts["default"]);

_vue["default"].use(_vueAxios["default"], _axios["default"]);

_vue["default"].use(_vuetify["default"]);

_vue["default"].use(_vuex["default"]);

var app = new _vue["default"](_defineProperty({
  el: '#app',
  router: _router["default"],
  store: _store["default"],
  vuetify: _vuetify2["default"],
  i18n: _i18n["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}, "vuetify", new _vuetify["default"]()));