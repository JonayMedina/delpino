<template>
    <v-layout row wrap>
        <v-container
            id="regular-tables"
            fluid
            tag="section"
        >
            <base-material-card
                icon="mdi-file-plus-outline"
                title="Nuevo Pago"
                class="px-5 py-3"
            >
                <v-card height="100%">
                    <v-row class="mx-2" >
                        <v-col cols="6">
                            <v-select
                            v-model="pay.price_rate"
                            :items="prices"
                            menu-props="auto"
                            label="Select"
                            hide-details
                            prepend-icon="map"
                            single-line
                            >
                                <template slot='selection' slot-scope='{ item }'>
                                    {{ item.calc_format }} {{ item.iso }}
                                </template>
                                <template slot='item' slot-scope='{ item }'>
                                    {{ item.calc_format }} {{ item.iso }}
                                </template>
                            </v-select>--
                        </v-col>
                        <v-banner
                            >
                            Carga tus pagos en la lista y guardalos
                                <v-btn
                                    elevation-5
                                    color="deep-purple accent-4"
                                    @click="openDialog()"
                                >
                                    Agregar Remesa
                                </v-btn>
                        </v-banner>
                    </v-row>
                    <v-card-text v-show="recipients">
                        <v-simple-table
                            fixed-header
                        >
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-center">Eliminar</th>
                                        <th class="text-left">
                                            Nombre
                                        </th>
                                        <th class="text-left">
                                            C.I/D.N.I.
                                        </th>
                                        <th class="text-left">
                                            Banco
                                        </th>
                                        <th class="text-left">
                                            Cuenta
                                        </th>
                                        <th class="text-center">
                                            Monto
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="( r, index) in receivers"
                                    :key="r.name"
                                    >
                                    <td class="text-center">
                                        <v-icon size="40" @click="deleteReceiver(index)" color="red">mdi-delete-forever-outline</v-icon>
                                    </td>
                                    <td>{{ r.name }}</td>
                                    <td>{{ r.dni }}</td>
                                    <td>{{ r.bank_name }}</td>
                                    <td>{{ r.bank_account}}</td>
                                    <td></td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>


                    </v-card-text>
                    <v-card-actions v-show="recipients">

                        <router-link :to="{ name: 'payments'}">
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

            </base-material-card>
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
                                    @click="addReceiver(receiver)"
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
                                @click="addReceiver(receiver)"
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
                pay : {},
                detail_pay:[],
                customers: [],
                prices:[],
                dialog_title: 'Agregar datos de cuenta',
                banks: [],
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
            getCurrencies(){
                let me = this;
                axios.get('/api/prices')
                    .then( res => {
                        me.prices = res.data.prices
                    })
                    .catch(err => {console.log(err)})
            },
            getBanks(){
                let me = this;
                axios.get('/api/banks/active')
                    .then(res => {
                        me.banks = res.data.banks;
                    })
                    .catch(err => { console.log(err) })
            },
            addReceiver(data = []){
                let me = this;

                if (me.find(data['account'])) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error...',
                        text: 'Cuenta ya agregada!.',
                        footer: 'Guardar pago o Seguir Agregando?.'
                    });
                }else {
                    me.receivers.push({
                        bank_account: data['account'],
                        bank_name: data['bank_name'],
                        name: data['name'],
                        dni: data['dni'],
                        description: '',
                    });
                }

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
                    .catch(error =>{
                        if (error.response.status == 422) {
                            let data = '';
                            let errors = error.response.data.errors
                            for (let field of Object.keys(errors)) {
                                data = data + '. ' + errors[field].flat();
                            }
                            me.alert(4,data);
                        }
                    })
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
            find(account){
                var src = 0;
                if (this.receivers) {
                    src = this.receivers.some( pay => pay.bank_account == account)

                }
                return src;
            },
            deleteReceiver(index){
                this.receivers.splice(index, 1);
            },
            openDialog(){
                let me = this;
                me.dialog = true;
            },
            clearDialog(){
                let me = this;
                me.receiver = [];
            },
            closeDialog(){
                let me = this;
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
