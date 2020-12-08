import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      meta:{requiredAuth: true},
      component: () => import('./views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          text: 'Panel admin',
          component: () => import('./views/dashboard/Dashboard'),
        },
        // Pages
        // {
        //   name: 'User Profile',
        //   path: 'pages/user',
        //   component: () => import('./views/dashboard/pages/UserProfile'),
        // },
        {
            name: 'customers',
            text: 'Lista de Clientes',
            path: 'clientes/listado',
            component: () => import('./views/dashboard/customers/Index'),
        },
        {
            name: 'create-customer',
            text: 'Crear Cliente',
            path: 'clientes/registrar-nuevo',
            component: () => import('./views/dashboard/customers/Create'),
        },
        {
          name: 'notifications',
          text: 'Notificaciones',
          path: 'components/notifications',
          component: () => import('./views/dashboard/component/Notifications'),
        },
        {
          name: 'icons',
          text: 'Iconos',
          path: 'components/icons',
          component: () => import('./views/dashboard/component/Icons'),
        },
        {
          name: 'Typography',
          text: 'Tipografia',
          path: 'components/typography',
          component: () => import('./views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Regular-Tables',
          text: 'Tablas Sencillas',
          path: 'tables/regular-tables',
          component: () => import('./views/dashboard/tables/RegularTables'),
        },
        // Maps
        {
          name: 'gmaps',
          text: 'Google maps',
          path: 'maps/google-maps',
          component: () => import('./views/dashboard/maps/GoogleMaps'),
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: 'upgrade',
          text: 'Actualizar',
          component: () => import('./views/dashboard/Upgrade'),
        },
      ],
    },
    {
        path:'/access',
        component: () => import('./views/dashboard/AuthLayout'),
        children:[
            {
                name: 'login',
                path: '',
                text: 'Inicio de sesion',
                component: () => import('./views/dashboard/pages/Login'),
            },
        ]
    }
  ],
})
