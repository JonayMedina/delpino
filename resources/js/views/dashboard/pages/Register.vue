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
            <error-component
                v-if="registerErrors"
                :errors="registerErrors"
            ></error-component>
            <v-toolbar
              color="#fb8c00" class="white--text">
              <v-toolbar-title>Registrarse en VeneXpressDelPino</v-toolbar-title>
              <v-spacer/>
            </v-toolbar>
            <v-card-text>
              <v-form v-model="isValid">
                <v-row class="mx-2" >
                    <v-col cols="12" md="6" class="pt-0 pl-0">
                        <v-text-field
                        outlined
                        clearable
                        dense
                        label="Introduzca Nombre Completo"
                        placeholder="Jon Doe"
                        type="text"
                        :rules="[n => !!n || 'Nombre Completo es Requerido']"
                        color="deep-purple"
                        v-model="customer.name"
                        />
                    </v-col>

                    <v-col cols="12" md="6" class="pt-0 pl-0">
                        <v-text-field
                        outlined
                        dense
                        type="email"
                        :rules="[emailRules.required, emailRules.valid, emailAvailable]"
                        placeholder="Ingrese Mail valido"
                        color="deep-purple"
                        label="Insertar Mail"
                        v-model="customer.email"
                        @change="vEmail(customer.email)"
                        :loading="checkInEmail"
                        :disabled="checkInEmail"
                        />
                    </v-col>
                    <v-col cols="12" md="6" class="pt-0 pl-0">
                        <v-text-field
                        outlined
                        dense
                        type="number"
                        label="Numero de Telefono Valido"
                        color="deep-purple"
                        v-model="customer.phone"
                        @change="vPhone(customer.phone)"
                        />
                        <span style="color:red;" v-show="phone">Telefono en uso, por favor ingrese otro!</span>
                    </v-col>
                    <v-col cols="12" md="6" class="pt-0 pl-0">
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
                                    v-model="computedDate"
                                    label="Fecha de Nacimiento"
                                    prepend-outer-icon="mdi-cake-variant"
                                    readonly
                                    outlined
                                    dense
                                    clearable
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                elevation="10"
                                color="orange darken-4"
                                ref="picker"
                                v-model="customer.birthdate"
                                :max="max_date"
                                min="1950-01-01"
                                @change="save"
                            ></v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="12" class="py-0">
                        <v-row align="center" class="mr-0">
                            <v-col cols="12" md="6" class="py-0">

                                <v-text-field
                                outlined
                                dense
                                v-model="customer.password"
                                placeholder="Contraseña" label="CONTRASEÑA"
                                color="deep-purple"
                                :rules="[passwordRules.required, passwordRules.min]"
                                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                :type="showPassword ? 'text' : 'password'"
                                prepend-icon="mdi-lock"
                                @click:append="showPassword = !showPassword"
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
                            </v-col>
                            <v-col cols="12" md="6" class="py-0">

                                <v-text-field
                                outlined
                                dense
                                v-model="customer.password_confirmation"
                                placeholder="Confirme Su Contraña"
                                label="Repita su Contraseña"
                                color="deep-purple"
                                :rules="[passwordRules.required, passwordRules.min, passwordConfirmationRule]"
                                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                :type="showPassword ? 'text' : 'password'"
                                prepend-icon="mdi-lock"
                                @click:append="showPassword = !showPassword"
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
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-divider class="mt-5"/>
            <v-card-actions>
              <v-spacer/>
                <v-btn :to="'/'" text> Cancelar</v-btn>
                <v-btn
                    :disabled="!isValid"
                    color="primary"
                    :loading="saving"
                    right
                    @click="createCustomer(customer)"
                    >Registrar
                </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
</template>

<script>
export default {
  data: function () {
    return {
        isValid: true,
        menu: false,
        max_date: "",
        dni:'',
        email:'',
        phone:'',
        customer: {
            password : '',
            password_confirmation: ''
        },
        dialog_title:'',
        checkInEmail: false,
        countries: [],
        step: 1,
        turn:0,
        saving: false,
        min: '',
        errG: 0,
        errRegister: [],
        snackbar: false,
        color: 'general',
        showPassword: false,
        registerErrors: {},
        passwordRules : {
            required: value => !!value || 'Campo Requerido.',
            min: v => v.length >= 8 || 'Min 8 caracteres entre letras y numeros',
        },
        emailRules: {
            required: v => !!v || 'Email es Requerido',
            valid: v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail debe ser valido',
        },
    }
  },
  watch: {
    menu(val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
  computed:{
    computedDate() {
        return this.formatDate(this.customer.birthdate);
    },
    currentUser() {
        return this.$store.getters.currentUser;
    },
    passwordConfirmationRule() {
        return (this.customer.password === this.customer.password_confirmation) || 'Las Contraseñas deben Coincidir'
    },
    emailAvailable(){
        return (this.email == false) || 'Email en uso, Ingrese otro!!.'
    },
    progress () {
      return Math.min(100, this.customer.password.length * 12.5)
    },
    colorp () {
      return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
    },
    progress2 () {
      return Math.min(100, this.customer.password_confirmation.length * 12.5)
    },
    colorpc () {
      return ['error', 'warning', 'success'][Math.floor(this.progress2 / 40)]
    },
  },
  methods: {
    setDate() {
        let me = this;

        var max = new Date();
        max = max.setFullYear(max.getFullYear() - 18);
        me.max_date = new Date(max).toISOString().substr(0, 10);
    },
    formatDate(date) {
        if (!date) return null;

        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    },
    parseDate(date) {
        if (!date) return null;

        const [month, day, year] = date.split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    save(date) {
        this.$refs.menu.save(date);
    },
    createCustomer() {
        let me = this;
        if (me.validateCustomer()) {
            return;
        }
        me.saving = true;
        axios.post("/api/auth/register", me.customer)
            .then((response) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${response.data.message}`,
                    timer: 3000,
                });
                me.$router.push({ name: "Login" });
            })
            .catch((error) => {
                if (error.response.status == 422) {
                    me.registerErrors = error.response.data.errors;
                } else{
                    console.log(error)
                }
            })
            .finally(() => (me.saving = false));
    },
    validateCustomer(){
        let me=this;
        me.errG=0;
        me.errRegister =[];

        if (!me.customer.name)me.errRegister.push("Por favor ingrese nombre completo");
        if (!me.customer.phone)me.errRegister.push("Ingrese un numero telefonico valido");
        if (!me.customer.email)me.errRegister.push("Ingrese un email valido");
        if (!me.customer.password)me.errRegister.push("Por favor ingrese una contraseña");
        if (!me.customer.password_confirmation)me.errRegister.push("Por favor ingrese una contraseña para verificacion");
        if (me.email)me.errRegister.push("Email Registrado, por favor introduzca otro");
        if (me.errRegister.length) me.errG = 1;
        if (me.errRegister.length >= 1) {
            Swal.fire({
                title:'Falta(n) Datos',
                icon: 'error',
                confirmButtonText: 'Aceptar!',
                confirmButtonColor: '#3085d6',
                html: `${me.errRegister.map( er =>`<br><span style="color:red;" class="mb-3"><i class="mdi mdi-minus-circle-outline mdi-spin mr-3"></i> ${er}</span>`)}`,
                showCancelButton: false
            });
        };
        return me.err;
    },
    vEmail(email){
        let me = this;
        me.checkInEmail = true;
        axios.get('/api/auth/email-verify/'+email)
        .then(response => {
            me.email =response.data.email;
        })
        .catch(error => console.log(error))
        .finally(() => me.checkInEmail = false);

    },
    vPhone(phone){
        let me = this;
        axios.get('/api/auth/phone-verify/'+phone)
        .then(response => {
            me.phone =response.data.user;
        })
        .catch(error => console.log(error))
        .finally(() => this.loading = false);
    }
  },
  mounted() {
      this.setDate()
  },
  metaInfo () {
    return {
      title: 'Para Enviar Remesas | Registrarse'
    }
  }
}
</script>
