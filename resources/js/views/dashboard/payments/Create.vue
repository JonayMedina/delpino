<template>
    <v-layout row wrap>
        <v-container>
            <v-flex xs6>
                <v-subheader class="display-1">Nuevo Pago</v-subheader>
            </v-flex>
            <v-card>
                <v-card-text>
                    <v-row class="mx-2" >
                        <v-banner
                            >
                            Carga tus pagos en la lista y guardalos
                                <v-btn
                                text
                                color="deep-purple accent-4"
                                @click="openDialog()"
                                >
                                Agregar Remesa
                                </v-btn>\
                        </v-banner>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <router-link :to="{ name: 'customers'}">
                        <v-btn
                            medium
                            filled
                            elevation-4
                        > Cancelar</v-btn>
                    </router-link>
                    <v-btn
                        medium
                        outlined
                        elevation-4
                        color="orange darken-4"
                        :loading="saving"
                        right
                        @click="createPay(customer)"
                        >Registrar
                    </v-btn>
                </v-card-actions>

            </v-card>
        </v-container>
        <div>
            <v-row>
                <v-dialog
                    v-model="dialog"
                    :width="width"
                    hide-overlay
                    transition="dialog-bottom-transition"
                    scrollable
                >
                    <v-card tile>
                        <v-toolbar
                            flat
                            dark
                            color="orange darken-4"
                        >
                            <v-btn
                            icon
                            dark
                            @click="dialog = false"
                            >
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                            <v-toolbar-title>Agregar Pago</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-items>
                                <v-btn
                                    text
                                    outlined
                                    elevation-4
                                    @click="addReceiver()"
                                >
                                    Agregar Cuenta
                                </v-btn>
                            </v-toolbar-items>
                        </v-toolbar>
                        <v-card-text>
                            <v-row class="mx-2" >
                                <v-col cols="12" class="pt-0 pl-0">
                                    <v-text-field
                                    label="Introduzca Nombre Completo de Quien recibe"
                                    type="text" required
                                    outlined
                                    clearable
                                    dense
                                    color="deep-purple"
                                    v-model="receiver.name"
                                    prepend-outer-icon="mdi-account"
                                    />
                                </v-col>
                                <v-col cols="12" class="pt-0 pl-0">
                                    <v-text-field
                                    label="Introduzca Cedula"
                                    type="text" required
                                    outlined
                                    clearable
                                    dense
                                    color="deep-purple"
                                    v-model="receiver.dni"
                                    prepend-outer-icon="mdi-account"
                                    />
                                </v-col>
                                <v-col cols="12" class="pt-0 pl-0">
                                    <v-text-field type="text"
                                    color="deep-purple"
                                    label="Insertar Cuenta de quien Recibe"
                                    outlined
                                    clearable
                                    dense
                                    v-model="receiver.account"
                                    prepend-outer-icon="mdi-bank-plus"
                                    />
                                </v-col>
                                <v-col cols="12" class="pt-0 pl-0">
                                    <v-text-field type="text"
                                    color="deep-purple"
                                    label="Insertar Nombre del Banco"
                                    outlined
                                    clearable
                                    dense
                                    v-model="receiver.bank_name"
                                    prepend-outer-icon="mdi-bank-plus"
                                    />

                                </v-col>
                                <v-col cols="12" class="pt-0 pl-0">
                                    <v-text-field type="text"
                                    color="deep-purple"
                                    label="Insertar Monto"
                                    outlined
                                    clearable
                                    dense
                                    v-model="receiver.amount"
                                    prepend-outer-icon="mdi-bank-plus"
                                    />

                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                        </v-card-text>

                        <div style="flex: 1 1 auto;"></div>
                        <v-card-actions>
                            <v-btn
                                outlined
                                color="orange darken-4"
                                elevation-4
                                @click="addReceiver()"
                            >
                                Agregar Cuenta
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </div>
    </v-layout>
</template>

<script>
// import apis from '../../helpers/customer.js'
export default {
        data() {
            return {
                dni:'',
                email:'',
                phone:'',
                customer: {
                    password: '',
                },
                dialog_title:'',
                banks: [],
                receiver: [],
                step: 1,
                turn:0,
                saving: false,
                min: '',
                dialog: false,
            }
        },
        computed:{
            width: function() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return '100%'
                    case 'sm': return '70%'
                    case 'md': return '30%'
                    case 'lg': return '30%'
                    case 'xl': return '30%'
                }
            }
        },
        methods: {
            getBanks(){
                let me = this;
                axios.get('/api/banks/active')
                    .then(res => {
                        me.banks = res.data.banks;
                    })
                    .catch(err => { console.log(err) })
            },
            createPay() {
                let me = this;
                if (me.validateCustomer()) { return; }
                me.saving = true
                axios.post('/api/customers/store', me.customer)
                    .then(response => {

                        Swal.fire({
                            position:'top-end',
                            icon: 'success',
                            title: `${response.data.message}`,
                            timer: 3000
                        });
                        me.$router.push({name: 'customers'});
                    })
                    .catch(error => console.log(error))
                    .finally(() => me.saving = false);

            },
            validateCustomer(){
                let me=this;
                me.eCustomer=0;
                me.errListC =[];

                // if (!me.customer.name)me.errListC.push("Por favor ingrese nombre completo");
                // // if (!me.customer.dni)me.errListC.push("Por favor ingrese una identificacion Valida!.");
                // // if (!me.customer.phone)me.errListC.push("Ingrese un numero telefonico valido");
                // if (!me.customer.email)me.errListC.push("Ingrese un email valido");
                // if (!me.customer.birthdate)me.errListC.push("Ingrese fecha de Nacimiento");

                // if (me.email)me.errListC.push("E-mail Registrado, por favor introduzca otro");

                // if (!me.customer.phone)me.errListC.push("Ingrese numero de Telefono");

                // if (!me.customer.password)me.errListC.push("Ingrese Contraseña");

                // if (!me.customer.confirm_pass)me.errListC.push("Ingrese Contraseña de confirmación ");

                // if (me.customer.password != me.customer.confirm_pass)me.errListC.push("Las Contraseñas no Coinciden");

                // if (me.dni)me.errListC.push("Documento registrado, verifique si el customere esta registrado Cuando realize un Pago.");
                if (me.errListC.length) me.eCustomer = 1;
                if (me.errListC.length >= 1) {
                    Swal.fire({
                        title:'Falta(n) Datos',
                        icon: 'error',
                        confirmButtonText: 'Aceptar!',
                        confirmButtonColor: '#3085d6',
                        html: `${me.errListC.map( er =>`<br><span class="mb-3"><i class="mdi-close-circle-outline mr-3"></i> ${er}</span>`)}`,
                        showCancelButton: false
                    });
                };
                return me.eCustomer;
            },
            openDialog(){
                let me = this;

                me.dialog_title = 'Agregar datos de cuenta';
                me.dialog = true;
            },
            closeDialog(){
                let me = this;

                me.dialog_title = 'Agregar datos de cuenta';
                me.dialog = false;
            },
        },
        mounted(){
            this.getBanks();
        },
    };
</script>
<style>
    .v-col {
        padding-top: 0;
    }
    .v-stepper--vertical .v-stepper__content {
        padding-top: 0px;
    }
</style>
