<template v-slot="{ hover }">
  <v-app-bar
    id="page-bar"
    absolute
    app
    color="transparent"
    flat
    height="75"
    :elevation="hover ? 12 : 4"
  >
    <v-list
      dense
      nav
    >
        <a href="/">
            <v-list-item>
                <v-list-item-avatar
                    class="align-self-center"
                    color="white"
                    contain
                >
                    <v-img
                    :src="barImage"
                    max-height="40"
                    />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title
                    class="title title-app"
                    v-text="$t('app-name')"
                    />
                </v-list-item-content>
            </v-list-item>
        </a>
    </v-list>

    <v-spacer />

    <div class="mx-3" />

    <v-btn
      class="ml-2"
      min-width="0"
      text
      to="/"
    >
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>
    <v-btn color="orange darken-4" v-show="urlCheck !='register'" :to="{name:'register'}" >
        Registrarse
        <v-icon>mdi-account-plus-outline</v-icon>
    </v-btn>
    <v-btn color="orange darken-4" v-show="urlCheck !='Login'" :to="{name:'Login'}" >
        Login
        <v-icon>mdi-account-arrow-right-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  // Components
  import { VHover, VListItem } from 'vuetify/lib'

  // Utilities
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'PageBar',
    data: () => ({
        hover : VHover
    }),
    computed: {
        ...mapState(['barImage']),
        urlCheck(){
            return this.$route.name
        }
    }

  }
</script>
<style lang="sass">
    .title-app
          line-height: 2rem !important

    .v-list
        a
            text-decoration: none
</style>
