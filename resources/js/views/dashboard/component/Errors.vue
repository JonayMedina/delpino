<template>
    <v-alert :value="status"
      text type="error"
      outlined
      color="red darken-4"
      dismissible
      icon="mdi-fire"
      class="fixed v-alert-zindex"

    >
        <v-row>
            <div  v-for="(errs, field) in errors">
                <ul>
                    <li v-for="error in errs">
                        {{ error }}
                    </li>
                </ul>
            </div>
        </v-row>
      <h3></h3>
    </v-alert>
</template>
<script>
export default {
    data: () => ({
        status: false,
        datalength : 0
    }),
      props: ['errors'],
      watch: {
          errors: function(data){
              if (Object.keys(data).length) {
                  this.datalength = Object.keys(data).length;
                  console.log([this.datalength, Object.keys(data).length]);
                  this.status = true;
                  setTimeout(() => this.status = false, this.datalength * 3000);
              }
          }
      },
      methods:{

      }
}
</script>

<style lang="scss">
.v-alert-index{
    z-index: 250;
}
</style>
