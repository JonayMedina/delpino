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
                >
                    <v-card-text class="text-h6">
                    Por favor ingrese su e-mail. Usted es recibira un correo con un enlace de Recuperacion
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col
            offset-md="4"
            cols="12"
            md="4">
                <error-component
                    v-if="emailErrors"
                    :errors="emailErrors"
                ></error-component>
                <v-card
                    class="elevation-6">
                    <v-toolbar
                    color="general">
                    <v-toolbar-title>Recuperar Contraseña</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                    <v-form >
                        <v-text-field
                        ref="email"
                        v-model="email"
                        :rules="emailRules"
                        prepend-icon="mdi-account"
                        label="Recuperar Contraseña"
                        placeholder="TotallyNotThanos"
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
                        :disabled="!email"
                        @click="recover">Enviar Recuperacion
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
            </v-col>
        </v-row>
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
            color: 'general',
            emailErrors: {},
            emailRules: [],
        }
    },
    computed:{
        currentUser() {
            return this.$store.getters.currentUser;
        },
    },
    watch: {
        email: function (mail) { // e_Mail is the exact name used in v-model
            if (mail !== '') {
                this.emailRules = [ v => (v.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) || 'Email Invalido']
            } else if (mail === '') {
                this.emailRules = []
            }
        }
    },
    methods: {
        recover: function () {
            let me = this;
            me.loading = true
            axios.post('/api/auth/forgot-password', {"email":me.email})
            .then(response => {
                Swal.fire({
                    position:'top-end',
                    icon: 'success',
                    title: `${response.data.message}`,
                    timer: 3000
                });
                me.$router.push({name: 'reset-password', params:{email: me.email}});
            })
            .catch((error) =>{
                if (error.response.status == 422) {
                    console.log(error.response)
                    me.emailErrors = error.response.data.error;
                }else if (error.response.status == 404) {
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
        validateEmail(){
            let me = this
            if (!me.email) {
                me.errorMessages = 'Introduzca Email por favor';
                me.snackbar = true;
                return true;
            }
            return false
        },
        metaInfo () {
            return {
            title: 'Super Secret | Login'
            }
        },
        alert: function (display, res) {
            this.$refs.Alerts.showAlert(display, res);
        }
    }
}
</script>
