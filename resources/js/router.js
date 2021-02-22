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
            name: 'edit-customer',
            text: 'Editar Cliente',
            path: 'clientes/actualizar/:id',
            component: () => import('./views/dashboard/customers/Edit'),
        },
        {
            name: 'payments',
            text: 'Listado Pagos',
            path: 'remesas/listado',
            component: () => import('./views/dashboard/payments/Index'),
        },
        {
            name: 'create-payment',
            text: 'Registrar Remesa',
            path: 'remesas/registrar-nueva',
            component: () => import('./views/dashboard/payments/Create'),
        },
        {
            name: 'edit-payment',
            text: 'Editar Remesa',
            path: 'remesas/actualizar/:id',
            component: () => import('./views/dashboard/payments/Edit'),
        },

        {
            name: 'prices',
            text: 'Precios por Remesa',
            path: 'precios/lista',
            component: () => import('./views/dashboard/price/Index'),
        },
        {
            name: 'create-price',
            text: 'Registrar Precio',
            path: 'precios/registrar-nuevo',
            component: () => import('./views/dashboard/price/Create'),
        },
        {
            name: 'edit-price',
            text: 'Editar Precio',
            path: 'precios/actualizar/:id',
            component: () => import('./views/dashboard/price/Edit'),
        },
        {
            name: 'banks',
            text: 'Lista de Bancos',
            path: 'bancos/todos',
            component: () => import('./views/dashboard/banks/Index'),
        },
        {
            name: 'currencies',
            text: 'Monedas',
            path: 'monedas',
            component: () => import('./views/dashboard/price/Currencies'),
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
        path:'/entrar',
        component: () => import('./views/dashboard/AuthLayout'),
        children:[
            {
                name: 'login',
                path: '',
                text: 'Inicio de sesion',
                component: () => import('./views/dashboard/pages/Login'),
            },
            {
                name: 'register',
                path: '/crear-cuenta',
                text: 'Inicio de sesion',
                component: () => import('./views/dashboard/pages/Register'),
            },
        ]
    }
  ],
})
