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
                    <error-component
						v-if="payErrors"
						:errors="payErrors"
					></error-component>
                    <v-row class="mx-2" >
                        <v-col cols="12">
                            <v-card-text elevation-2>
                                Orden de Selecion: <span class="red--text text--darken-4">
                                <v-icon>mdi-information-variant</v-icon> Seleccione Moneda de Remesa,
                                <v-icon>mdi-information-variant</v-icon> Luego El Banco donde Deposito,
                                <v-icon>mdi-information-variant</v-icon> Inserte el monto de Remesa y
                                <v-icon>mdi-information-variant</v-icon> Luego agrege los datos del (Los) Beneficiario(s). </span>
                            </v-card-text>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-select
                            v-model="price"
                            :items="prices"
                            menu-props="auto"
                            label="Seleccione una Moneda"
                            hide-details
                            prepend-icon="mdi-map"
                            single-line
                            return-object
                            @change="setPrice(price)"
                            >
                                <template slot='selection' slot-scope='{ item }'>
                                    {{ item.amount_formated }} {{ item.iso }}
                                </template>
                                <template slot='item' slot-scope='{ item }'>
                                    {{ item.amount_formated }} {{ item.iso }}
                                </template>
                            </v-select>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-select
                            v-model="pay.bank_id"
                            :items="banks"
                            menu-props="auto"
                            label="Seleccione un Banco"
                            hide-details
                            item-value="id"
                            :disabled="bankDisabled"
                            prepend-icon="mdi-bank-check"
                            single-line
                            >
                                <template slot='selection' slot-scope='{ item }'>
                                    {{ item.bank_name }} {{ item.account_code }}
                                </template>
                                <template slot='item' slot-scope='{ item }'>
                                    {{ item.bank_name }} {{ item.account_code }}
                                </template>
                            </v-select>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                            label="Numero de Operacion"
                            type="text" required
                            outlined
                            clearable
                            dense
                            color="deep-purple"
                            v-model="pay.operation_code"
                            prepend-icon="mdi-numeric"
                            />
                        </v-col>
                        <v-col cols="12" md="6">
                            <money
                                color="deep-purple"
                                label="Insertar Monto"
                                :outlined="pmoney.outlined"
                                :clearable="true"
                                :dense="pmoney.outlined"
                                :placeholder="pmoney.placeholder"
                                :readonly="pmoney.readonly"
                                :disabled="disable_pay"
                                :valueWhenIsEmpty="pmoney.valueWhenIsEmpty"
                                :options.sync="pmoney.options"
                                :properties="pmoney.properties"
                                v-model="pay.pay"
                                prepend-outer-icon="mdi-bank-plus"
                                @input="setRemaining()"
                                />
                        </v-col>
                        <v-col cols="12" md="6">
                            <money
                                color="deep-purple"
                                label="Restante en Bs"
                                :outlined="vmoney.outlined"
                                :clearable="true"
                                :dense="vmoney.outlined"
                                :placeholder="remaining_text"
                                :readonly="true"
                                :disabled="true"
                                :valueWhenIsEmpty="vmoney.valueWhenIsEmpty"
                                :options.sync="vmoney.options"
                                :properties="vmoney.properties"
                                v-model="remaining"
                                prepend-outer-icon="mdi-cash-plus"
                                />
                        </v-col>
                        <v-banner>
                            Agrega Destinatario(s) en la lista
                                <v-btn
                                    elevation-5
                                    color="deep-purple accent-4"
                                    :disabled='!remaining'
                                    @click="openDialog()"
                                >
                                    Agregar Destinatario
                                </v-btn>
                                <money
                                color="deep-purple"
                                label="Total en Bs"
                                :outlined="vmoney.outlined"
                                :clearable="true"
                                :dense="vmoney.outlined"
                                :placeholder="'Total Calculado'"
                                :readonly="true"
                                :disabled="true"
                                :valueWhenIsEmpty="vmoney.valueWhenIsEmpty"
                                :options.sync="vmoney.options"
                                :properties="vmoney.properties"
                                v-model="total_pay"
                                prepend-outer-icon="mdi-cash-plus"
                                />

                        </v-banner>
                    </v-row>
                    <v-card-text v-show="receivers">
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
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="( r, index) in receivers"
                                    :key="r.name"
                                    >
                                    <td class="text-center">
                                        <v-icon size="40" @click="deleteReceiver(index, r)" color="red">mdi-delete-forever-outline</v-icon>
                                    </td>
                                    <td>{{ r.name }}</td>
                                    <td>{{ r.dni }}</td>
                                    <td>{{ r.bank_name }}</td>
                                    <td>{{ r.bank_account}}</td>
                                    <td>{{ moneyFormat(r.amount)}}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>


                    </v-card-text>
                    <v-card-actions v-show="receivers">

                        <router-link :to="{ name: 'payments'}">
                            <v-btn
                                medium
                                filled
                                elevation-4
                                color="blue-grey"
                            > Cancelar</v-btn>
                        </router-link>
                        <v-btn
                            medium
                            outlined
                            elevation-4
                            color="orange darken-4"
                            :loading="saving"
                            :disabled="registerDisabled"
                            right
                            @click="createPay()"
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
                            class="mb-2"
                        >
                            <v-btn
                            icon
                            @click="dialog = false"
                            >
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                            <v-toolbar-title>Agregar Pago</v-toolbar-title>
                            <v-spacer></v-spacer>
                            Disponible
                            <v-row>
                                <v-col class="mt-4">
                                    <money
                                    :dark="true"
                                    :background-color="'orange darken-4'"
                                    :whiteText="true"
                                    label="Restante en Bs"
                                    :outlined="vmoney.outlined"
                                    :clearable="true"
                                    :dense="vmoney.outlined"
                                    :placeholder="remaining_text"
                                    :readonly="true"
                                    :disabled="true"
                                    :valueWhenIsEmpty="vmoney.valueWhenIsEmpty"
                                    :options.sync="vmoney.options"
                                    :properties="vmoney.properties"
                                    v-model="remaining"
                                    prepend-outer-icon="mdi-cash-plus"
                                    />
                                </v-col>
                            </v-row>
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
                                    label="Insertar Cuenta Beneficiaria "
                                    outlined
                                    clearable
                                    dense
                                    min="20"
                                    max="20"
                                    counter="20"
                                    v-model="receiver.bank_account"
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
                                    <money
                                    color="deep-purple"
                                    label="Insertar Monto| Total Disponible Pre-Cargado"
                                    :outlined="vmoney.outlined"
                                    :clearable="true"
                                    :dense="vmoney.outlined"
                                    :placeholder="vmoney.placeholder"
                                    :readonly="vmoney.readonly"
                                    :disabled="vmoney.disabled"
                                    :valueWhenIsEmpty="vmoney.valueWhenIsEmpty"
                                    :options="vmoney.options"
                                    :properties="vmoney.properties"
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
export default {
        data() {
            return {
                pay : {},
                detail_pay:[],
                prices:[],
                dialog_title: 'Agregar datos de cuenta',
                banks: [],
                receivers: [],
                receiver: {},
                total_pay: 0.0,
                remaining: 0.0,
                remaining_text: 'Restante',
                step: 1,
                turn:0,
                saving: false,
                min: '',
                dialog: false,
                valid_modal: false,
                disable_pay: true,
                emodal : 0,
                emodalList: [],
                epay : 0,
                epayList: [],
                price: {},
                amount_paied: 0.0,
                modalRules:[],
                bankDisabled: true,
                registerDisabled: false,
                payErrors: {},
                pmoney: {
                    value: "",
                    placeholder: "Ingrese Monto depositado",
                    readonly: false,
                    disabled: false,
                    outlined: true,
                    clearable: true,
                    valueWhenIsEmpty: "",
                    options: {
                    locale: "en-US",
                    prefix: "",
                    currency: "USD",
                    suffix: "",
                    length: 20,
                    precision: 2
                    },
                    properties: {
                    hint: "Ingrese Monto"
                    // You can add other v-text-field properties, here.
                    },
                },
                vmoney :{
                    value: "0.00",
                    placeholder: " ",
                    readonly: false,
                    disabled: false,
                    outlined: true,
                    clearable: true,
                    valueWhenIsEmpty: "",
                    options: {
                    locale: "es-Ve",
                    prefix: "",
                    currency: "VES",
                    suffix: "",
                    length: 20,
                    precision: 2
                    },
                    properties: {
                    hint: "Ingrese Monto"
                    // You can add other v-text-field properties, here.
                    },
                }
            }
        },
        computed:{
            width: function() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return '100%'
                    case 'sm': return '90%'
                    case 'md': return '70%'
                    case 'lg': return '60%'
                    case 'xl': return '50%'
                }
            },
            register: function(){
                let me = this;
                if (me.pay.amount) {
                    if (me.receivers.length) {

                    }
                }
            }
        },
        methods: {
            getPrices(){
                let me = this;
                axios.get('/api/prices')
                    .then( res => {
                        me.prices = res.data.prices
                    })
                    .catch(err => {console.log(err)})
            },
            getBanks(data){
                let me = this;
                axios.get('/api/banks/by-currency/' + data)
                    .then(res => {
                        me.banks = res.data.banks;
                        me.bankDisabled = false
                    })
                    .catch((err) => { console.log(err) })
            },
            setPrice(data){
                let me = this;
                me.bankDisabled= true;
                me.pay.price_rate = data.amount;
                me.disable_pay = false;
                me.pay.pay_iso = data.iso;
                me.pay.currency_id = data.currency_id;
                me.pmoney.options.currency = data.iso;
                me.pmoney.options.locale = data.locale;
                me.getBanks(data.currency_id);
                if (me.total_pay) {
                    me.setRemaining()
                }
            },
            addReceiver(data){
                let me = this;
                if (me.validateReceiver()) { return; };

                if (me.find(data.bank_account)) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error...',
                        text: 'Cuenta ya agregada!.',
                        footer: 'Guardar pago o Seguir Agregando?.'
                    });
                }else {
                    me.receivers.push({
                        bank_account: data.bank_account,
                        bank_name: data.bank_name,
                        name: data.name,
                        dni: data.dni,
                        amount: data.amount,
                        description: '',
                    });
                    me.decreaseRemaining(data.amount)
                    me.closeDialog();
                }

            },
            createPay() {
                let me = this;

                me.pay.detail_pay = me.receivers;
                if (me.validatePay()) { return; }
                me.saving = true
                axios.post('/api/payments/store', me.pay)
                    .then(response => {

                        Swal.fire({
                            position:'top-end',
                            icon: 'success',
                            title: `${response.data.message}`,
                            timer: 3000
                        });
                        me.$router.push({name: 'payments'});
                    })
                    .catch((error) => {
						if (error.response.status == 422) {
							me.payErrors = error.response.data.errors;
						} else{
                            console.log(error)
                        }
					})
                    .finally(() => me.saving = false);

            },
            validatePay(){
                let me=this;
                me.epay=0;
                me.epayList =[];


                if (!me.pay.price_rate)me.epayList.push("Seleccione Moneda de Remesa.");

                if (!me.pay.bank_id)me.epayList.push("Seleccione un Banco");

                if (!me.pay.pay)me.epayList.push("Se necesita el Monto Depositado.");

                if (me.remaining > 0)me.epayList.push("Asigne el monto Calculado a algún Beneficiario.");

                if (me.pay.detail_pay.length == 0)me.epayList.push("Ingrese algún Beneficiario.");
                if (me.epayList.length) me.epay = 1;
                if (me.epayList.length >= 1) {
                    Sfire.validateF(me.epayList);
                };
                return me.epay;
            },
            validateReceiver() {
				let me = this;
				me.emodal = 0;
				me.emodalList = [];

				if (!me.receiver.amount) me.emodalList.push("Ingrese un Monto");
                if (me.receiver.amount > me.reminder) me.emodalList.push("Monto superior a su total disponible");
				if (!me.receiver.bank_account) me.emodalList.push("Ingrese Cuenta");
                if (me.receiver.bank_account) {
                    if (me.receiver.bank_account.length < 20 || me.receiver.bank_account.length >20 ) me.emodalList.push("Ingrese Cuenta Correctamente");
                }
                if (!me.receiver.name) me.emodalList.push("Ingrese Nombre de Beneficiario");
                if (!me.receiver.dni) me.emodalList.push("Ingrese C.i. del Beneficiario");

				if (me.emodalList.length) me.emodal = 1;
				if (me.emodalList.length >= 1) {
					Sfire.validateF(me.emodalList);
				}
				return me.emodal;
			},
            find(account){
                var src = 0;
                if (this.receivers) {
                    src = this.receivers.some( pay => pay.bank_account == account)

                }
                return src;
            },
            deleteReceiver(index, r){
                // let rec = this.receivers.find(cur => {
                //     return cur.bank_account == r.bank_account
                // });

                let rec = this.receivers.splice(index, 1);
                console.log(rec);
                this.increaseReaming(rec[0]['amount']);
            },
            openDialog(){
                let me = this;
                me.dialog = true;
                me.receiver.amount = me.remaining;
            },
            clearDialog(){
                let me = this;
                me.receiver = {};
            },
            closeDialog(){
                let me = this;
                me.receiver = {};
                me.dialog = false;
            },
            setRemaining(){
                this.total_pay = this.pay.pay * this.pay.price_rate;
                this.remaining = this.pay.pay * this.pay.price_rate;

            },
            decreaseRemaining(amount){
                this.remaining = this.remaining - amount;
            },
            increaseReaming(amount){
                this.remaining += parseFloat(amount);
            },
            moneyFormat(data){
                return Sfire.moneyFormatF(data);
            }
        },
        mounted(){
            // this.getBanks();
            this.getPrices();
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
