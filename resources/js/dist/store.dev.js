"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _auth = require("./helpers/auth");

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var user = (0, _auth.getLocalUser)();

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    currentUser: user,
    auth_error: null,
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: '/img/logo-final.png',
    drawer: null,
    emailDev: 'jonaymedinadev@gmail.com',
    instagram: process.env.MIX_IG_URL || 'https://www.instagram.com/venexpressdelpino/',
    facebook: process.env.MIX_FB_URL || 'https://www.facebook.com/venexpressdelpino/'
  },
  getters: {
    currentUser: function currentUser(state) {
      return state.currentUser;
    }
  },
  mutations: {
    login: function login(state) {
      state.auth_error = null;
    },
    loginSuccess: function loginSuccess(state, payload) {
      state.currentUser = Object.assign({}, payload.user, {
        token: payload.access_token
      });
      localStorage.setItem('user', JSON.stringify(state.currentUser));
    },
    loginFailed: function loginFailed(state, payload) {
      state.auth_error = payload.error;
    },
    logout: function logout(state) {
      localStorage.removeItem('user');
      state.currentUser = null;
    },
    SET_BAR_IMAGE: function SET_BAR_IMAGE(state, payload) {
      console.log(state);
      console.log(payload);
      state.barImage = payload;
    },
    SET_DRAWER: function SET_DRAWER(state, payload) {
      state.drawer = payload;
    }
  },
  actions: {
    login: function login(context) {
      context.commit('login');
    }
  }
});

exports["default"] = _default;