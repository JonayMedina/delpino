<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <base-material-card>
            <error-component
                v-if="profileErrors"
                :errors="profileErrors"
            ></error-component>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Editar su Perfil
            </div>

            <div class="subtitle-1 font-weight-light">
              Complete los Campos
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    class="purple-input"
                    label="Nombre Completo"
                    v-model="user.name"
                    type="text"
					required
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="Email"
                    class="purple-input"
                    v-model="user.email"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                  v-show="currentUser.role ==4"
                >
                  <v-text-field
                    class="purple-input"
                    label="Telefono"
                    type="number"
                    v-model="user.phone"
                  />
                </v-col>
                <v-col
                cols="12"
                md="4"
                v-show="currentUser.role ==4"
                >
                    <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="user.birthdate"
                            label="Fecha de Nacimiento"
                            prepend-icon="mdi-calendar-account"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker
                        ref="picker"
                        v-model="user.birthdate"
                        :max="new Date().toISOString().substr(0, 10)"
                        min="1950-01-01"
                        @change="save"
                        ></v-date-picker>
                    </v-menu>
                </v-col>

                <v-col
                  cols="12"
                  class="text-right"
                >
                    <v-row>
                    <v-col
                    class="px-0 d-flex justify-start">
                        <v-btn
                            text
                            class="mr-0"
                            @click="dialog = true"
                        >
                            Cambiar Contraseña
                        </v-btn>
                    </v-col>
                    <v-col
                    class="d-flex justify-end">
                        <v-btn
                            color="success"
                            class="mr-0"
                            :loading="saving"
                            @click="updateProfile()"
                        >
                            Actualizar Perfil
                        </v-btn>
                    </v-col>
                </v-row>


                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>

      <!-- <v-col
        cols="12"
        md="4"
      >
        <base-material-card
          class="v-card-profile"
          :avatar="barImage"
        >
          <v-card-text class="text-center">
            <h6 class="display-1 mb-1 grey--text">
              Update
            </h6>

            <h4 class="display-2 font-weight-light mb-3 black--text">
              Alec Thompson
            </h4>

            <p class="font-weight-light grey--text">
              Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
            </p>

            <v-btn
              color="success"
              rounded
              class="mr-0"
            >
              Follow
            </v-btn>
          </v-card-text>
        </base-material-card>
      </v-col> -->
    </v-row>

      <v-row class="mx-2">
        <v-container grid-list-xs>
            <v-dialog v-model="dialog" persistent max-width="600px">
                <v-card class="elevation-6">
                    <error-component
                        v-if="passErrors"
                        :errors="passErrors"
                    ></error-component>
                    <v-toolbar
                    color="general">
                    <v-toolbar-title>Ingrese Su nueva Contraseña</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form >
                            <v-text-field
                            ref="password"
                            v-model="password"
                            :rules="[rules.required, rules.counter]"
                            :prepend-icon="showPassword1 ? 'mdi-eye-off' : 'mdi-eye'"
                            label="Nueva Contraseña"
                            placeholder="Igual o mayor a 8 caracteres"
                            :type="showPassword1 ? 'text' : 'password'"
                            @click:prepend="showPassword1 = !showPassword1"
                            loading
                            >
                                <template v-slot:progress>
                                    <v-progress-linear
                                    :value="progress"
                                    :color="colorp"
                                    absolute
                                    height="7"
                                    ></v-progress-linear>
                                </template>
                            </v-text-field>
                            <v-text-field
                            ref="password_confirmation"
                            v-model="password_confirmation"
                            :rules="[rules.required, rules.counter, passwordConfirmationRule]"
                            :prepend-icon="showPassword1 ? 'mdi-eye-off' : 'mdi-eye'"
                            label="Confirmación de Contraseña"
                            placeholder="Igual o mayor a 8 caracteres"
                            :type="showPassword1 ? 'text' : 'password'"
                            @click:prepend="showPassword1 = !showPassword1"
                            loading
                            >
                                <template v-slot:progress>
                                    <v-progress-linear
                                    :value="progress2"
                                    :color="colorpc"
                                    absolute
                                    height="7"
                                    ></v-progress-linear>
                                </template>
                            </v-text-field>

                        </v-form>
                        <div v-if="errorsList.length">
                            <p v-for="err in errorsList" :key="err">
                                <span class="mb-3 red--text text--lighten-1" ><v-icon color="red" x-small>mdi mdi-information-outline</v-icon>  {{err}}</span>
                            </p>
                        </div>
                    </v-card-text>
                    <v-divider class="mt-5"/>
                    <v-card-actions>
                        <v-btn
                            text
                            class="mr-0"
                            @click="dialog = false"
                        >
                            cerrar
                        </v-btn>
                        <v-spacer/>
                        <v-btn
                            :loading="savingModal"
                            filled
                            outlined
                            align-center
                            justify-center
                            color="general"
                            :disabled="!password || !password_confirmation || password != password_confirmation || password <= 5"
                            @click="updatePassword()">Crear nueva contraseña
                        </v-btn>
                    </v-card-actions>

                </v-card>
            </v-dialog>
        </v-container>

      </v-row>

      <v-snackbar
        v-model="snackbar"
        :color="color"
        :top="true"
        :multi-line="multiline"
      >
            {{ messages }}
            <template v-slot:action="{ attrs }">
                <v-btn
                color="black"
                text
                v-bind="attrs"
                @click="snackbar = false"
                >
                Cerrar
                </v-btn>
            </template>
      </v-snackbar>
  </v-container>
</template>

<script>
  import { mapState} from 'vuex';
  export default {
    data: function (){
        return {
            user: {
                date: null
            },
            eCustomer: 0,
            errListC: [],
            messages: '',
            snackbar: false,
            multiline: true,
            color: 'general',
            code: 'white',
            checked: false,
            password: '',
            password_confirmation: '',
            showPassword1: false,
            profileErrors: {},
            saving: false,
            savingModal: false,
            menu: false,
            passErrors: [],
            errorsList: [],
            dialog: false,
            rules: {
                required: value => !!value || 'Requerido',
                counter: value => value.length >= 8 || 'Mínimo 8 caracteres'
            },
        }
    },
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    computed: {
      ...mapState(['barImage']),
      passwordConfirmationRule() {
        return (this.password === this.password_confirmation) || 'Las Contraseñas deben Coincidir'
      },
      currentUser() {
        return this.$store.getters.currentUser;
      },
        progress () {
        return Math.min(100, this.password.length * 12.5)
        },
        colorp () {
        return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
        },
        progress2 () {
        return Math.min(100, this.password_confirmation.length * 12.5)
        },
        colorpc () {
        return ['error', 'warning', 'success'][Math.floor(this.progress2 / 40)]
        },
    },
    methods: {
        save (date) {
            this.$refs.menu.save(date)
        },
        me(){
            axios.post('/api/auth/me')
            .then((response) =>{
                this.user = response.data.user;
            }).catch((error) => {
                console.log(error);
            })
        },
        updateProfile(){
            let me = this;
            if (me.validateCustomer()) {
                return;
            }
            me.saving = true;
            axios.put('/api/user/update-own-data', me.user)
                .then(response => {
                    me.messages = response.data.message;
                    me.snackbar = true;
                    me.me();
                })
                .catch((error) => {
                    if (error.response.status == 422) {
                        me.profileErrors = error.response.data.errors;
                    } else{
                        me.messages = error.response.error;
                        me.snackbar = true;
                    }
                })
                .finally(() => me.saving = false);
        },
        validateCustomer() {
            let me = this;

            me.eCustomer = 0;
            me.errListC = [];

            if (!me.user.name)
                me.errListC.push("Por favor ingrese nombre completo");
            // if (!me.user.dni)me.errListC.push("Por favor ingrese una identificacion Valida!.");
            // if (!me.user.phone)me.errListC.push("Ingrese un numero telefonico valido");
            if (!me.user.email) me.errListC.push("Ingrese un email valido");

            if (me.email)
                me.errListC.push("E-mail Registrado, por favor introduzca otro");

            if (me.currentUser == 4 && !me.user.phone) me.errListC.push("Ingrese numero de Telefono");

            if (me.errListC.length) me.eCustomer = 1;
            if (me.errListC.length >= 1) {
                    Sfire.validateF(me.errListC);
                };
            return me.eCustomer;
        },
        updatePassword() {
            let me = this;
            if (me.valpass()) {
                return;
            }
            me.savingModal = true;
            axios.put('/api/user/change-password', {
                'password': me.password,
                'password_confirmation': me.password_confirmation
            })
            .then(res => {
                me.password = '';
                me.password_confirmation = '';
                me.dialog = false;
                me.messages = 'Contraseña Cambiada ';
                me.snackbar = true;
            })
            .catch((error) =>{
                if (error.response.status == 422) {
                    me.resetErrors = error.response.data.error;
                } else{
                    me.messages = 'Algo ha ocurrido, intente de Nuevo';
                    me.snackbar = true;
                    console.log(error);
                }
            })
            .finally(() => me.savingModal = false);
        },
        valpass(){
            let me = this;
            var status = 0;
            me.errorsList = [];
            if (!me.password || me.password.length <6 ) {
                me.errorsList.push("Ingrese Contraseña igual o mayor a 6 Caracteres");
                status +=1;
            }
            if (!me.password_confirmation || me.password_confirmation.length <6 )
            {
                me.errorsList.push("Ingrese Confirmación de Contraseña igual o mayor a 6 Caracteres");
                status +=1;
            }
            if (me.password != me.password_confirmation) {
                me.errorsList.push("Su Contraseña y Confirmación de Contraseña deben ser Iguales iguales");
                status +=1;
            }
            return status;
        },
    },
    mounted() {
        this.me();
    },
  }
</script>
