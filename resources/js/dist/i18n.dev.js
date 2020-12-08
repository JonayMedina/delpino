"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueI18n = _interopRequireDefault(require("vue-i18n"));

var _en = _interopRequireDefault(require("vuetify/lib/locale/en"));

var _es = _interopRequireDefault(require("vuetify/lib/locale/es"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_vue["default"].use(_vueI18n["default"]);

var messages = {
  en: _objectSpread({}, require('./locales/en.json'), {
    $vuetify: _en["default"]
  }),
  es: _objectSpread({}, require('./locales/es.json'), {
    $vuetify: _es["default"]
  })
};

var _default = new _vueI18n["default"]({
  locale: process.env.MIX_VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.MIX_VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: messages
});

exports["default"] = _default;