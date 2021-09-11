<template>
    <v-container
      id="forgot"
      fluid
      tag="section"
    >
      <v-layout
        align-center
        justify-center>
        <alerts ref="Alerts"> </alerts>
        <v-row>
            <v-col
            class="mx-auto"
            cols="12">
                <v-card
                    class="mx-lg-auto"
                    color="white"
                    width="100%"
                >
                    <v-card-text class="text-h6">
                    Para continuar por favor Ingrese el Codigo que recibió!!
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col
            v-if="checked == false"
            offset-md="4"
            cols="12"
            md="4">
                <v-card
                    class="elevation-6">
                    <v-toolbar
                    color="general">
                    <v-toolbar-title>Ingrese codigo de 4 digitos</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form >
                            <v-text-field
                            ref="code"
                            v-model="code"
                            :rules="[() => !!code || 'This field is required']"
                            prepend-icon="mdi-account"
                            label="Codigo de Verificacion"
                            placeholder="Codigo de 4 digitos"
                            required
                            />

                        </v-form>
                    </v-card-text>
                    <v-divider class="mt-5"/>
                    <v-card-actions>
                        <v-spacer/>
                        <v-btn
                            :loading="loading"
                            filled
                            outlined
                            align-center
                            justify-center
                            color="general"
                            @click="checkToken()">Verificar Codigo
                        </v-btn>
                    </v-card-actions>
                    <!-- <v-snackbar
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
                    </v-snackbar> -->
                </v-card>
            </v-col>
            <v-col
            offset-md="3"
            cols="12"
            md="6"
            v-else>
                <v-card class="elevation-6">
                    <error-component
                        v-if="resetErrors"
                        :errors="resetErrors"
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
                            placeholder="Igual o mayor a 6 caracteres"
                            :type="showPassword1 ? 'text' : 'password'"
                            required
                            @click:prepend="showPassword1 = !showPassword1"
                            />
                            <v-text-field
                            ref="password_confirmation"
                            v-model="password_confirmation"
                            :rules="[rules.required, rules.counter]"
                            :prepend-icon="showPassword2 ? 'mdi-eye-off' : 'mdi-eye'"
                            label="Confirmación de Contraseña"
                            placeholder="Igual o mayor a 6 caracteres"
                            :type="showPassword2 ? 'text' : 'password'"
                            required
                            @click:prepend="showPassword2 = !showPassword2"
                            />

                        </v-form>
                        <div v-if="errorsList.length">
                            <p v-for="err in errorsList" :key="err">
                                <span class="mb-3 red--text text--lighten-1" ><v-icon color="red" x-small>mdi mdi-information-outline</v-icon>  {{err}}</span>
                            </p>
                        </div>
                    </v-card-text>
                    <v-divider class="mt-5"/>
                    <v-card-actions>
                        <v-spacer/>
                        <v-btn
                            :loading="loading"
                            filled
                            outlined
                            align-center
                            justify-center
                            color="general"
                            :disabled="!password || !password_confirmation || password != password_confirmation || password <= 5"
                            @click="updatePassword()">Actualizar Contraseña
                        </v-btn>
                    </v-card-actions>

                </v-card>
            </v-col>
        </v-row>
        <v-snackbar
        v-model="snackbar"
        :color="color"
        :top="true"
        :multi-line="multiline"
        >
            {{ errorMessages }}
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
      </v-layout>

    </v-container>
</template>

<script>

export default {
    data: function () {
        return {
            email: '',
            loading: false,
            errorMessages: 'Informacion Incorrecta',
            snackbar: false,
            multiline: true,
            color: 'general',
            code: '',
            checked: false,
            password: '',
            password_confirmation: '',
            showPassword1: false,
            showPassword2: false,
            errorsList: [],
            resetErrors: [],
            rules: {
                required: value => !!value || 'Requerido',
                counter: value => value.length < 6 || 'Mínimo 6 caracteres'
            },
        }
    },
    methods: {
        checkToken: function () {
            let me = this;
            if(me.valcode()) return;

            me.loading = true;
            axios.get('/api/auth/check-token/'+me.email+'/'+me.code)
            .then(res => {
                me.checked = true;
            })
            .catch((error) =>{ if (error.response.status == 404) {
                    me.errorMessages = error.response.data.error;
                    me.snackbar = true;
                } else{
                    me.errorMessages = 'Algo ha ocurrido, intente de Nuevo';
                    me.snackbar = true;
                    console.log(error);
                }
            })
            .finally(() => me.loading = false);
        },
        updatePassword() {
            let me = this;
            if (me.valpass()) {
                return;
            }
            me.saving = true;
            axios.put('/api/auth/update-password/', {
                'email' : me.email,
                'code' : me.code,
                'password': me.password,
                'password_confirmation': me.password_confirmation
            })
            .then(res => {
                me.$router.push({name: 'Login'})
            })
            .catch((error) =>{
                if (error.response.status == 422) {
                    me.resetErrors = error.response.data.error;
                } else if (error.response.status == 404) {
                    me.errorMessages = error.response.data.error;
                    me.snackbar = true;
                } else{
                    me.errorMessages = 'Algo ha ocurrido, intente de Nuevo';
                    me.snackbar = true;
                    console.log(error);
                }
            })
            .finally(() => me.loading = false);
        },
        valcode(){
            let me = this;
            var status = 0;
            if (me.code.length != 4) {
                me.errorMessages = 'Codigo de 4 Numeros';
                me.color = "red"
                me.snackbar = true;
                status = 1
            } else if (isNaN(me.code)) {
                me.errorMessages = 'Debe ser Numerico';
                me.color = "red"
                me.snackbar = true;
                status = 1
            }
            return status;
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
        metaInfo () {
            this.email = this.$route.params.email;
            console.log(this.email)
            return {
            title: 'Restore password'
            }
        },
        alert: function (display, res) {
            this.$refs.Alerts.showAlert(display, res);
        }
    },
    mounted() {
        this.metaInfo()
    },
}
</script>
