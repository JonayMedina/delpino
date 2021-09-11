<template>
    <v-container
        id="regular-tables"
        fluid
        tag="section"
      >
        <base-material-card
            icon="mdi-file-document"
            title="Tabla de Remesas"
            class="px-5 py-3"
        >
            <alerts ref="Alerts"> </alerts>
            <div class="text-center">
                <v-row>
                    <v-col cols="9" md="3">
                        <v-card color="teal" class="my-0" outlined rounded >
                            <v-list class="my-0">
                                <v-list-item :to="{name: 'create-payment'}" link>
                                    <v-list-item-avatar>
                                        <v-icon large color="teal">mdi-file-plus-outline</v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title color="teal" v-text="'Remesa Nueva +'"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="9">
                        <v-text-field v-model="search"
                            outlined
                            clearable
                            color="orange" filled
                            append-icon="mdi-file-find-outline"
                            label="Buscar Remesa"
                            single-line hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
            </div>

            <v-data-table
                :search="search"
                :headers="paymentHeader"
                :items="payments"
                class="elevation-2"
                :options.sync="pagination"
                loading="true"
                :items-per-page="20"
                item-key="id"
                hide-default-footer
            >
                <template v-slot:item.id="{ item }">
                    <v-btn rounded outlined color="teal" @click="openDialog(item)" ><div>{{ item.id }} </div> <v-icon class="pl-2">mdi-eye</v-icon></v-btn>
                </template>
                <template v-slot:item.pay="{ item }">
                    <div>{{ item.pay_formated }} {{ item.pay_iso }}</div>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-btn outlined rounded @click="deleteCustomer(item.id)"
                        color="deep-orange" x-small
                        class="ma-1 white--text"
                    > Eliminar
                        <v-icon small right dark> mdi-close-outline </v-icon>
                    </v-btn>
                </template>
            </v-data-table>
            <div class="text-center">
                <v-container>
                    <v-row justify="center">
                        <v-col cols="8">
                        <v-container class="max-width">
                            <v-pagination
                                class="mx-4"
                                v-model="pagination.current"
                                :length="pagination.total"
                                @input="onPageChange"
                            ></v-pagination>
                        </v-container>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
            <div>
                <v-dialog v-model="dialogDetail">
                    <v-card height="100%">

                        <v-row class="mx-2" >
                            <v-col cols="4" md="3">
                                <v-card-title>
                                    Oper. Num.
                                    <v-card-text>
                                        {{pay.id}}
                                    </v-card-text>
                                </v-card-title>

                            </v-col>
                            <v-col cols="8" md="3">
                                <v-card-title>
                                    Cliente
                                    <v-card-text>
                                        {{pay.customer_name}}
                                    </v-card-text>
                                </v-card-title>
                            </v-col>
                            <v-col cols="6" md="3">
                                <v-card-title>
                                    Referencia Bancaria
                                    <v-card-text>
                                        {{pay.operation_code}}
                                    </v-card-text>
                                </v-card-title>
                            </v-col>
                            <v-col cols="6" md="3" v-if="pay.bank">
                                <v-card-title>
                                    Fecha Registro
                                    <v-card-text>
                                        {{pay.created_at}}
                                    </v-card-text>
                                </v-card-title>
                            </v-col>
                            <v-col cols="6" md="3" v-if="pay.bank">
                                <v-card-title>
                                    Banco Receptor
                                <v-card-text>
                                    {{pay.bank.bank_name}}
                                </v-card-text>
                                </v-card-title>
                            </v-col>
                            <v-col cols="6" md="3">
                                <v-card-title>
                                    Monto entrante
                                <v-card-text>
                                    {{pay.pay + ' ' +  pay.pay_iso}}
                                </v-card-text>
                                </v-card-title>
                            </v-col>
                            <v-col cols="6" md="3">
                                <v-card-title>
                                    Total en Bs.
                                <v-card-text>
                                    {{pay.price_formated}}
                                </v-card-text>
                                </v-card-title>
                            </v-col>
                        </v-row>
                        <v-card-text>
                            <v-simple-table
                                fixed-header
                            >
                                <template v-slot:default>
                                    <thead>
                                        <tr>
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
                                            <th class="text-left">
                                                Monto
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                        v-for="( r) in pay.detail_payments"
                                        :key="r.name"
                                        >
                                        <td>{{ r.name }}</td>
                                        <td>{{ r.dni }}</td>
                                        <td>{{ r.bank_name }}</td>
                                        <td>{{ r.bank_account}}</td>
                                        <td>{{ r.amount_formated}}</td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>


                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                @click="closeDialog()"
                                medium
                                filled
                                elevation-4
                                color="blue-grey"
                            > Cerrar</v-btn>
                            <!-- <v-btn
                                medium
                                outlined
                                elevation-4
                                color="orange darken-4"
                                :loading="saving"
                                :disabled="registerDisabled"
                                right
                                @click="createPay()"
                                >Registrar
                            </v-btn> -->
                        </v-card-actions>

                    </v-card>
                </v-dialog>
            </div>
        </base-material-card>
    </v-container>
</template>
<script>
export default {
    data(){
        return {
            payments: [],
            pay: {
                bank: {
                    bank_name: ''
                },
                detail_payments: [],
            },
            expanded: [],
            search: '',
            pagination: {
                current: 1,
                total: 0
            },
            search: '',
            dialogDetail: false,
            loading: false,
            searching: false,
            paymentHeader: [
                {
                    text:'Pago Nro.',
                    align: 'right',
                    value: 'id',
                },
                {
                    text:'Cliente ',
                    align: 'right',
                    value: 'customer_name',
                },
                {
                    text:'Monto',
                    align: 'right',
                    value: 'pay',
                },
                {
                    text:'Banco',
                    align: 'right',
                    value: 'bank.bank_name',
                },
                {
                    text:'Fecha de Registro',
                    align: 'right',
                    value: 'created_at',
                },
                { text: 'Opciones', value: 'actions', sortable: false }
            ],
        }
    },
    methods: {
        getPayments(){
            let me = this;
            me.loading = true
            axios.get('/api/payments/my-payments?page=' + this.pagination.current + '&search=' + this.search)
            .then( res => {
                var res = res.data.payments;
                me.payments = res.data;
                me.pagination.current = res.current_page;
                me.pagination.total = res.last_page;
            })
            .catch(err => {
                console.log(err.data);
            })
            .finally( me.loading = false);
        },
        searchSale(){
            this.getPayments();
        },
        openDialog(item){
            let me = this;
            me.pay = item;
            me.dialogDetail = true;

        },
        closeDialog(){
            let me = this;
            me.pay = {};
            me.dialogDetail = false;
        },
        onPageChange(){
            this.getPayments()
        },
        alert: function (display,res){
            this.$refs.Alerts.showAlert(display, res);
        },
        moneyFormat(data){
            return Sfire.moneyFormatF(data);
        }
    },
    mounted() {
        this.getPayments();
    }

}
</script>
