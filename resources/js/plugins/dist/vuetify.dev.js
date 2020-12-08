"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _lib = _interopRequireDefault(require("vuetify/lib"));

require("@mdi/font/css/materialdesignicons.css");

var _i18n = _interopRequireDefault(require("../i18n"));

require("../sass/overrides.sass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_lib["default"]);

var theme = {
  primary: '#4CAF50',
  secondary: '#9C27b0',
  accent: '#9C27b0',
  info: '#00CAE3'
};

var _default = new _lib["default"]({
  icons: {
    iconfont: 'mdi' // default - only for display purposes

  },
  lang: {
    t: function t(key) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      return _i18n["default"].t(key, params);
    }
  },
  theme: {
    themes: {
      dark: theme,
      light: theme
    }
  }
});

exports["default"] = _default;