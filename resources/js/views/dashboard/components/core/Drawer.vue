<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-breakpoint="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img
        :gradient="`to bottom, ${barColor}`"
        v-bind="props"
      />
    </template>

    <v-divider class="mb-1" />

    <v-list
      dense
      nav
    >
      <v-list-item>
        <v-list-item-avatar
          class="align-self-center"
          color="white"
          contain
        >
          <v-img
            :src="barImage"
            max-height="30"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title
            class="display-1 title-app"
            v-text="profile.title"
          />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list
      expand
      nav
    >
      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />

      <template v-for="(item, i) in computedItems">
        <base-item-group
          v-if="item.children"
          :key="`group-${i}`"
          :item="item"
        >
          <!--  -->
        </base-item-group>

        <base-item
          v-else
          :key="`item-${i}`"
          :item="item"
        />
      </template>

      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />
    </v-list>

    <template v-slot:append>
      <base-item
        :item="{
          title: $t('version') + '1.0.1',
          icon: 'mdi-certificate-outline',
        }"
      />
    </template>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'DashboardCoreDrawer',

    props: {
      expandOnHover: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      admin: [
        {
          icon: 'mdi-view-dashboard',
          title: 'dashboard',
          to: 'Dashboard',
        },
        {
          title: 'customers',
          icon: 'mdi-account',
          to: 'customers',
        },
        {
          title: 'payments',
          icon: 'mdi-scale-balance',
          to: 'charges',
        },
        {
          title: 'prices',
          icon: 'mdi-format-font',
          to: 'prices',
        },
        {
          title: 'list-currency',
          icon: 'mdi-currency-usd-circle',
          to: 'currencies',
        },
        {
          title: 'bank-list',
          icon: 'mdi-bank-check',
          to: 'banks',
        },
        {
          title: 'admin-profile',
          icon: 'mdi-account-circle-outline',
          to: 'admin-profile',
        },
      ],
      customer: [
        {
          icon: 'mdi-view-dashboard',
          title: 'dashboard',
          to: 'customer-dashboard',
        },
        {
          title: 'payments',
          icon: 'mdi-scale-balance',
          to: 'payments',
        },
        {
          title: 'my-profile',
          icon: 'mdi-account-circle-outline',
          to: 'user-profile',
        },
      ],
      user: {},
      items:[]
    }),

    computed: {
      ...mapState(['barColor','barImage', 'emailDev']),
      currentUser() {
        return this.$store.getters.currentUser;
      },
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.commit('SET_DRAWER', val)
        },
      },
      computedItems () {
        return this.items.map(this.mapItem)
      },
      profile () {
        return {
          avatar: true,
          title: this.$t('avatar'),
        }
      },

    },

    methods: {
      mapItem (item) {
        return {
          ...item,
          children: item.children ? item.children.map(this.mapItem) : undefined,
          title: this.$t(item.title),
        }
      },
      setItem(){
        this.user = this.currentUser;
        if (this.user.role == 1) {
            this.items = this.admin;
        } else {
            this.items = this.customer;
        }
      }
    },
    mounted() {
        this.setItem();
    },
  }
</script>

<style lang="sass">
  @import '~vuetify/src/styles/tools/_rtl.sass'

  #core-navigation-drawer
    .v-list-group__header.v-list-item--active:before
      opacity: .24

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
          margin-right: 24px
          margin-left: 12px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .title-app
          line-height: 2rem

    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px

        +rtl()
          padding-right: 8px

      .v-list-group__header
        +ltr()
          padding-right: 0

        +rtl()
          padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
            margin-right: 8px

          +rtl()
            margin-left: 8px
</style>
