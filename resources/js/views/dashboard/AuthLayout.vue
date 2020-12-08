<template>
  <v-app>

    <page-bar />
    <v-navigation-drawer></v-navigation-drawer>
    <dashboard-core-view />
  </v-app>
</template>

<script>
  export default {
    name: 'AuthLayout',

    components: {
      PageBar: () => import('./components/core/PageBar'),
      DashboardCoreView: () => import('./components/core/View'),
    },
  }
</script>
<style lang="sass">
</style>
