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
                            single-line
                            :sticky="sticky"
                            >
                            Carga tus pagos en la lista y guardalos
                            <template v-slot:actions>
                                <v-btn
                                text
                                color="deep-purple accent-4"
                                @click="openDialog()"
                                >
                                Agregar Remesa
                                </v-btn>
                            </template>
                        </v-banner>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <router-link :to="{ name: 'customers'}">
                        <v-btn> Cancelar</v-btn>
                    </router-link>
                    <v-btn text color="primary" :loading="saving" right @click="createPay(customer)" >Registrar</v-btn>
                </v-card-actions>
                
            </v-card>
        </v-container>
        <div>
            <v-row>
                <v-dialog
                    v-model="dialog"
                    width="70%"
                    hide-overlay
                    transition="dialog-bottom-transition"
                    scrollable
                >
                    <v-card tile>
                    <v-toolbar
                        flat
                        dark
                        color="primary"
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
                            dark
                            text
                            @click="dialog = false"
                        >
                            Save
                        </v-btn>
                        </v-toolbar-items>
                        <v-menu
                        bottom
                        right
                        offset-y
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            dark
                            icon
                            v-bind="attrs"
                            v-on="on"
                            >
                            <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                            @click="() => {}"
                            >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                        </v-menu>
                    </v-toolbar>
                    <v-card-text>
                        <v-btn
                        color="primary"
                        dark
                        class="ma-2"
                        @click="dialog2 = !dialog2"
                        >
                        Open Dialog 2
                        </v-btn>
                        <v-tooltip right>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            class="ma-2"
                            v-bind="attrs"
                            v-on="on"
                            >
                            Tool Tip Activator
                            </v-btn>
                        </template>
                        Tool Tip
                        </v-tooltip>
                        <v-list
                        three-line
                        subheader
                        >
                        <v-subheader>User Controls</v-subheader>
                        <v-list-item>
                            <v-list-item-content>
                            <v-list-item-title>Content filtering</v-list-item-title>
                            <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                            <v-list-item-title>Password</v-list-item-title>
                            <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        </v-list>
                        <v-divider></v-divider>
                        <v-list
                        three-line
                        subheader
                        >
                        <v-subheader>General</v-subheader>
                        <v-list-item>
                            <v-list-item-action>
                            <v-checkbox v-model="notifications"></v-checkbox>
                            </v-list-item-action>
                            <v-list-item-content>
                            <v-list-item-title>Notifications</v-list-item-title>
                            <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-action>
                            <v-checkbox v-model="sound"></v-checkbox>
                            </v-list-item-action>
                            <v-list-item-content>
                            <v-list-item-title>Sound</v-list-item-title>
                            <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-action>
                            <v-checkbox v-model="widgets"></v-checkbox>
                            </v-list-item-action>
                            <v-list-item-content>
                            <v-list-item-title>Auto-add widgets</v-list-item-title>
                            <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        </v-list>
                    </v-card-text>

                    <div style="flex: 1 1 auto;"></div>
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
                step: 1,
                turn:0,
                saving: false,
                min: '',

            }
        },
        computed: {
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
        },
        mounted(){
            this.getBanks();
        }
    }
</script>
<style>
    .v-col {
        padding-top: 0;
    }
    .v-stepper--vertical .v-stepper__content {
        padding-top: 0px;
    }
</style>
