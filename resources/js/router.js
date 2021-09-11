import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/panel_admin/',
      component: () => import('./views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          text: 'Panel admin',
          meta:{requiredAuth: [1]},
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
            meta:{requiredAuth: [1]},
            component: () => import('./views/dashboard/customers/Index'),
        },
        {
            name: 'create-customer',
            text: 'Crear Cliente',
            path: 'clientes/registrar-nuevo',
            meta:{requiredAuth: [1]},
            component: () => import('./views/dashboard/customers/Create'),
        },
        {
            name: 'edit-customer',
            text: 'Editar Cliente',
            path: 'clientes/actualizar/:id',
            meta:{requiredAuth: [1]},
            component: () => import('./views/dashboard/customers/Edit'),
        },
        {
            name: 'charges',
            text: 'Listado Pagos',
            path: 'cobros/listado',
            meta:{requiredAuth: [1]},
            component: () => import('./views/dashboard/charges/Index'),
        },
        {
            name: 'create-charge',
            text: 'Registrar Pago',
            path: 'cobros/registrar-nueva',
            meta:{requiredAuth: [1]},
            component: () => import('./views/dashboard/charges/Create'),
        },
        {
            name: 'edit-charge',
            text: 'Editar Pago',
            path: 'cobros/actualizar/:id',
            meta:{requiredAuth: [1]},
            component: () => import('./views/dashboard/charges/Edit'),
        },

        {
            name: 'prices',
            text: 'Precios por Remesa',
            path: 'precios/lista',
            meta:{requiredAuth: [1]},
            component: () => import('./views/dashboard/price/Index'),
        },
        {
            name: 'create-price',
            text: 'Registrar Precio',
            path: 'precios/registrar-nuevo',
            meta:{requiredAuth: [1]},
            component: () => import('./views/dashboard/price/Create'),
        },
        {
            name: 'edit-price',
            text: 'Editar Precio',
            path: 'precios/actualizar/:id',
            meta:{requiredAuth: [1]},
            component: () => import('./views/dashboard/price/Edit'),
        },
        {
            name: 'banks',
            text: 'Lista de Bancos',
            path: 'bancos/todos',
            meta:{requiredAuth: [1]},
            component: () => import('./views/dashboard/banks/Index'),
        },
        {
            name: 'currencies',
            text: 'Monedas',
            path: 'monedas',
            meta:{requiredAuth: [1]},
            component: () => import('./views/dashboard/price/Currencies'),
        },
        {
            name: 'admin-profile',
            text: 'Mi Perfil',
            path: 'perfil-admin',
            meta:{requiredAuth: [1]},
            component: () => import('./views/dashboard/pages/UserProfile'),
        },
        {
          name: 'notifications',
          text: 'Notificaciones',
          path: 'components/notifications',
          meta:{requiredAuth: [1]},
          component: () => import('./views/dashboard/component/Notifications'),
        },
        {
          name: 'icons',
          text: 'Iconos',
          path: 'components/icons',
          meta:{requiredAuth: [1]},
          component: () => import('./views/dashboard/component/Icons'),
        },
        {
          name: 'Typography',
          text: 'Tipografia',
          path: 'components/typography',
          meta:{requiredAuth: [1]},
          component: () => import('./views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Regular-Tables',
          text: 'Tablas Sencillas',
          path: 'tables/regular-tables',
          meta:{requiredAuth: [1]},
          component: () => import('./views/dashboard/tables/RegularTables'),
        },
        // Maps
        {
          name: 'gmaps',
          text: 'Google maps',
          path: 'maps/google-maps',
          meta:{requiredAuth: [1]},
          component: () => import('./views/dashboard/maps/GoogleMaps'),
        },
        // Upgrade
        {
          name: 'Upgrade',
          text: 'Actualizar',
          path: 'upgrade',
          meta:{requiredAuth: [1]},
          component: () => import('./views/dashboard/Upgrade'),
        },
      ],
    },
    {
        path:'/remesas/',
        component: () => import('./views/dashboard/Index'),
        children: [
            // Dashboard
            {
                name: 'customer-dashboard',
                path: '',
                text: 'Panel Principal',
                meta:{requiredAuth: [4]},
                component: () => import('./views/dashboard/CustomerDashboard'),
            },
            {
                name: 'payments',
                text: 'Listado Remesas',
                path: 'pagos/listado',
                meta:{requiredAuth: [4]},
                component: () => import('./views/dashboard/payments/Index'),
            },
            {
                name: 'create-payment',
                text: 'Registrar Remesa',
                path: 'pagos/registrar-nueva',
                meta:{requiredAuth: [4]},
                component: () => import('./views/dashboard/payments/Create'),
            },
            {
                name: 'edit-payment',
                text: 'Editar Remesa',
                path: 'pagos/actualizar/:id',
                meta:{requiredAuth: [4]},
                component: () => import('./views/dashboard/payments/Edit'),
            },
            {
                name: 'user-profile',
                text: 'Mi Perfil',
                path: 'perfil-usuario',
                meta:{requiredAuth: [4]},
                component: () => import('./views/dashboard/pages/UserProfile'),
            },
        ]
    },
    {
        path: '/auth/',
        component: () => import('./views/dashboard/AuthLayout'),
        meta:{guest: true},
        children:[
            {
                name: 'Login',
                text: 'Inicio de sesion',
                path: 'login',
                meta:{guest: true},
                component: () => import('./views/dashboard/pages/Login'),
            },
            {
                name: 'register',
                text: 'Registro de Datos',
                path: 'crear-cuenta',
                meta:{guest: true},
                component: () => import('./views/dashboard/pages/Register'),
            },
            {
                name: 'forgot-password',
                text: 'Olvido Contraseña',
                path: 'forgot-password',
                meta:{guest: true},
                component: () => import('./views/dashboard/pages/ForgotPassword'),
            },
            {
                name: 'reset-password',
                text: 'Verficar Codigo',
                path: 'reset-password/:email',
                meta:{guest: true},
                component: () => import('./views/dashboard/pages/ResetPassword'),
            },
        ]
    }
  ],
})
