<template>
  <v-footer
    id="dashboard-core-footer"
    class="elevation-24 warning justify-center"
    inset
  >
    <v-col
        v-for="(link, i) in links"
        :key="i"
        class="text-center mb-sm-0"
        cols="auto"
    >
        <a
        :href="link.href"
        class="mr-0 white--text"
        rel="noopener"
        target="_blank"
        v-text="link.text"
        />
    </v-col>

    <v-spacer class="hidden-sm-and-down" />

    <v-col
        cols="auto"
        class="text-center mb-sm-0"
    >
        <div class="grey--text text--darken-4">
        &copy; 2020, made with
        <v-icon size="18">
            mdi-heart
        </v-icon>
        by <a href="mailto:lmteamla@gmail.com">LmTeamLa</a> Creating Web.
        </div>
    </v-col>
  </v-footer>
</template>

<script>
  export default {
    name: 'DashboardCoreFooter',

    data: () => ({
      links: [
        {
          href: process.env.MIX_IG_URL || 'https://www.instagram.com/venexpressdelpino/',
          text: 'Instagram',
        },
        {
          href: process.env.MIX_FB_URL || 'https://www.facebook.com/venexpressdelpino/',
          text: 'Facebook',
        },
        {
          href: 'mailto:contacto@venexpressdelpino.com',
          text: 'Para Consultas de Remesas contacto@venexpressdelpino.com',
        },
      ],
    }),
  }
</script>

<style lang="sass">
  #dashboard-core-footer
    a
      font-size: .825rem
      font-weight: 500
      text-decoration: none
      text-transform: uppercase
</style>
