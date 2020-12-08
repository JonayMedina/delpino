<template>
    <v-container
      id="login"
      fluid
      tag="section"
    >
      <v-layout
        align-center
        justify-center>
        <v-flex
          xs12
          sm8
          md4>
          <v-card
            class="elevation-12">
            <v-toolbar
              color="general">
              <v-toolbar-title>Acceso al Sitema </v-toolbar-title>
              <v-spacer/>
            </v-toolbar>
            <v-card-text>
              <v-form >
                <v-text-field
                  ref="email"
                  v-model="email"
                  :rules="[() => !!email || 'This field is required']"
                  prepend-icon="mdi-account"
                  label="Login"
                  placeholder="TotallyNotThanos"
                  required
                />
                <v-text-field
                  ref="password"
                  v-model="password"
                  :rules="[() => !!password || 'This field is required']"
                  :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="showPassword ? 'text' : 'password'"
                  prepend-icon="mdi-lock"
                  label="Password"
                  placeholder="*********"
                  counter
                  required
                  @keydown.enter="login"
                  @click:append="showPassword = !showPassword"
                />
              </v-form>
            </v-card-text>
            <v-divider class="mt-5"/>
            <v-card-actions>
              <v-spacer/>
              <v-btn
                align-center
                justify-center
                color="general"
                @click="login">Login
              </v-btn>
            </v-card-actions>
            <v-snackbar
              v-model="snackbar"
              :color="color"
              :top="true"
            >
              {{ errorMessages }}
              <v-btn
                dark
                @click="snackbar = false"
              >
                Close
              </v-btn>
            </v-snackbar>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      email: '',
      password: '',
      errorMessages: 'Incorrect login info',
      snackbar: false,
      color: 'general',
      showPassword: false
    }
  },
    computed:{
        currentUser() {
            return this.$store.getters.currentUser;
        },
    },
  methods: {
    login: function () {
      let email = this.email
      let password = this.password
      this.$store.dispatch('login', { email, password })
        .then((res) =>{
            this.$store.commit('loginSuccess',res )
        })
        .catch(err => {
          console.log(err)
          this.snackbar = true
        }
        )
    }
  },
  metaInfo () {
    return {
      title: 'Super Secret | Login'
    }
  }
}
</script>
