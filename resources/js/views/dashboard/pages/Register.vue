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
          md8>
          <v-card
            class="elevation-12">
            <v-toolbar
              color="#fb8c00" class="white--text">
              <v-toolbar-title>Registrarse en DELPINOEXPRESS </v-toolbar-title>
              <v-spacer/>
            </v-toolbar>
            <v-card-text>
              <v-form >
                <v-row class="mx-2" >
                    <v-col cols="12" md="4" class="pt-5 pl-0">
                        <v-text-field
                        label="Introduzca Nombre Completo"
                        type="text" required
                        color="deep-purple"
                        v-model="customer.name"
                        cols="12" md="6"
                        />
                    </v-col>
                    <v-col cols="12" md="4" class="pt-0 pl-0">
                        <span style="color:red;" v-show="email">Ya en Uso, Inserte Otro</span>
                        <span style="color:#fb8c00;" v-show="!email">Ingrese Mail valido.</span>
                        <v-text-field type="text"
                        color="deep-purple"
                        label="Insertar Mail"
                        v-model="customer.email"
                        @change="vEmail(customer.email)"
                        />
                    </v-col>
                    <v-col class="align-center justify-space-between" cols="12" md="4">
                        <v-autocomplete clearable
                        color="deep-purple"
                        v-model="customer.country" :items="countries"
                        item-text="name" item-value="name"
                        label="De Donde Eres"
                        ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="4" class="pt-0 pl-0">
                        <span style="color:red;" v-show="phone">Inserte otro, Este se Encuentra en uso!</span>
                        <span style="color:#fb8c00;" v-show="!phone">Inserte Telefono Unico.</span>
                        <v-text-field type="text" label="Numero de Telefono Valido"
                        color="deep-purple"
                        v-model="customer.phone"
                        @change="vPhone(customer.phone)"
                        />
                    </v-col>
                    <v-col cols="12" md="4" class="pt-0 pl-0">
                        <span v-show="!customer.birthdate">Fecha de nacimiento del Cliente.</span>
                        <v-text-field type="date"
                        color="deep-purple"
                        Label="Ingrese una fecha de nacimiento" v-model="customer.birthdate"
                        />
                    </v-col>
                    <v-col cols="12">
                        <v-row align="center" class="mr-0">
                            <v-col cols="6">
                                <span style="color:red;" v-show="min < 6">Ingrese Constraseña minimo 6 Caracteres</span>
                                <v-text-field type="password"
                                v-model="customer.password"
                                @input="valpass()"
                                placeholder="Contraseña" label="CONTRASEÑA"
                                color="deep-purple"
                                :rules="[() => !!password || 'Campo Obligatorio']"
                                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                :type="showPassword ? 'text' : 'password'"
                                prepend-icon="mdi-lock"
                                @click:append="showPassword = !showPassword"
                                />
                            </v-col>
                            <v-col cols="6">
                                <span style="color:red;" v-show="customer.password != customer.confirm_pass">Deben Coincidir</span>
                                <v-text-field type="password"
                                v-model="customer.confirm_pass"
                                placeholder="Confirme Su Contraña"
                                label="Repita su Contraseña"
                                color="deep-purple"
                                :rules="[() => !!confirm_pass || 'TCampo Obligatorio']"
                                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                :type="showPassword ? 'text' : 'password'"
                                prepend-icon="mdi-lock"
                                @click:append="showPassword = !showPassword"
                                />
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-divider class="mt-5"/>
            <v-card-actions>
              <v-spacer/>
                <a href="/"><v-btn> Cancelar</v-btn></a>
                <v-btn text color="primary" :loading="saving" right @click="createCustomer(customer)" >Registrar</v-btn>
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
        dni:'',
        email:'',
        phone:'',
        customer: {},
        dialog_title:'',
        countries: [],
        step: 1,
        turn:0,
        saving: false,
        min: '',
      errorMessages: 'Credenciales Incorrectas',
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
      title: 'Para Enviar Remesas | Registrarse'
    }
  }
}
</script>
