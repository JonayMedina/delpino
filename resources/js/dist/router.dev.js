"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  mode: 'history',
  routes: [{
    path: '/',
    meta: {
      requiredAuth: true
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./views/dashboard/Index'));
      });
    },
    children: [// Dashboard
    {
      name: 'Dashboard',
      path: '',
      text: 'Panel admin',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('./views/dashboard/Dashboard'));
        });
      }
    }, // Pages
    // {
    //   name: 'User Profile',
    //   path: 'pages/user',
    //   component: () => import('./views/dashboard/pages/UserProfile'),
    // },
    {
      name: 'customers',
      text: 'Lista de Clientes',
      path: 'clientes/listado',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('./views/dashboard/customers/Index'));
        });
      }
    }, {
      name: 'create-customer',
      text: 'Crear Cliente',
      path: 'clientes/registrar-nuevo',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('./views/dashboard/customers/Create'));
        });
      }
    }, {
      name: 'notifications',
      text: 'Notificaciones',
      path: 'components/notifications',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('./views/dashboard/component/Notifications'));
        });
      }
    }, {
      name: 'icons',
      text: 'Iconos',
      path: 'components/icons',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('./views/dashboard/component/Icons'));
        });
      }
    }, {
      name: 'Typography',
      text: 'Tipografia',
      path: 'components/typography',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('./views/dashboard/component/Typography'));
        });
      }
    }, // Tables
    {
      name: 'Regular-Tables',
      text: 'Tablas Sencillas',
      path: 'tables/regular-tables',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('./views/dashboard/tables/RegularTables'));
        });
      }
    }, // Maps
    {
      name: 'gmaps',
      text: 'Google maps',
      path: 'maps/google-maps',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('./views/dashboard/maps/GoogleMaps'));
        });
      }
    }, // Upgrade
    {
      name: 'Upgrade',
      path: 'upgrade',
      text: 'Actualizar',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('./views/dashboard/Upgrade'));
        });
      }
    }]
  }, {
    path: '/entrar',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./views/dashboard/AuthLayout'));
      });
    },
    children: [{
      name: 'login',
      path: '',
      text: 'Inicio de sesion',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('./views/dashboard/pages/Login'));
        });
      }
    }, {
      name: 'register',
      path: '/crear-cuenta',
      text: 'Inicio de sesion',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('./views/dashboard/pages/Register'));
        });
      }
    }]
  }]
});

exports["default"] = _default;