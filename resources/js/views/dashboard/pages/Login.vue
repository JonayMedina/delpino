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
            <v-toolbar>
              <v-toolbar-title>Area De Acceso</v-toolbar-title>
              <v-spacer/>
            </v-toolbar>
            <v-card-text>
              <v-form v-model="isValid">
                <v-text-field
                  autocomplete="current-email"
                  v-model="email"
                  :rules="emailRules"
                  prepend-icon="mdi-account"
                  label="Login"
                  placeholder="TotallyNotThanos"
                  required
                />
                <v-text-field
                  autocomplete="current-password"
                  v-model="password"
                  :rules="passwordRules"
                  :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="showPassword ? 'text' : 'password'"
                  prepend-icon="mdi-lock"
                  label="Password"
                  placeholder="*********"
                  counter
                  @keydown.enter="authLogin"
                  @click:append="showPassword = !showPassword"
                />
              </v-form>
            </v-card-text>
            <v-divider class="mt-5"/>
            <v-card-actions>
                <v-row>
                    <v-col
                    class="px-0 d-flex justify-start">
                        <v-btn
                        :to="{name: 'forgot-password'}"
                            text >Olvido Password?
                        </v-btn>
                    </v-col>
                    <v-col
                    class="d-flex justify-end">
                        <v-btn
                            :loading="loading"
                            align-center
                            justify-center
                            color="deep-orange"
                            :disabled="!isValid"
                            @click="authLogin">Login
                        </v-btn>
                    </v-col>
                </v-row>
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
import {login} from '../../../helpers/auth.js';
export default {
  data: function () {
    return {
      email: '',
      password: '',
      isValid: true,
      loading: false,
      errorMessages: 'Informacion Incorrecta',
      errorPass: '',
      snackbar: false,
      validSnack: false,
      color: 'general',
      showPassword: false,
      passwordRules: [
        v => !!v || 'Contraseña Requerida',
        v => (v && v.length >= 6) || 'Debe tener minimo 8 Carateres',
      ],
      emailRules: [
        v => !!v || 'Email es Requerido',
        v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail debe ser valido',
      ],
    }
  },
  computed:{
    currentUser() {
        return this.$store.getters.currentUser;
    },
  },
  methods: {
    authLogin: function () {
      if (this.validateLogin()) {
        return;
      }
      this.loading = true;
      this.$store.dispatch('login');
      login({'email':this.email, 'password': this.password})
        .then((res) =>{
            this.$store.commit('loginSuccess',res )
            const role = this.currentUser.role;
            if (role==1) {
                this.$router.push({name: 'Dashboard'})
            } else if (role==4) {
                this.$router.push({name: 'customer-dashboard'})
            }
        })
        .catch(err => {
          if (err.error) {
            this.errorMessages = err.error;
          } else {
            this.errorMessages = 'Intente de nuevo, sino comuniquese con nosotros por favor!!'
            console.log(err);
          }
          this.snackbar = true
        })
        .finally(e => this.loading = false)
    },
    validateLogin(){
        let errLogin = false;
        this.errorMessages ='';
        if (!this.email) {
           this.errorMessages = 'El Email es Requerido';
           errLogin = true;
        }
        if (!this.password) {
            if (errLogin == true) {
                this.errorMessages += ', ';
            }
            this.errorMessages += 'El Password es Requerido';
            errLogin = true;
        }
        if (errLogin == true) {
            this.snackbar = true;
            return true;
        } else {
            return false;
        }
    }
  },
  metaInfo () {
    return {
      title: 'Super Secret | Login'
    }
  }
}
</script>
<style>
</style>
