<template>
    <v-container
        id="regular-tables"
        fluid
        tag="section"
      >
        <base-v-component
            heading="Panel Pagos"
            link="pagos/listado"
        />

        <base-material-card
            icon="mdi-file-document"
            title="Tabla de Pagos"
            class="px-5 py-3"
        >
            <alerts ref="Alerts"> </alerts>
            <div class="text-center">
                <v-row>
                    <v-col cols="2">
                        <router-link :to="{name: 'create-payment'}">
                            <v-btn
                            elevation="5"
                            icon
                            large
                            >
                                <v-icon color="orange">mdi-file-plus-outline</v-icon>
                            </v-btn>
                        </router-link>
                    </v-col>
                    <v-col>
                        <v-text-field v-model="search"
                            outlined
                            clearable
                            color="orange" filled
                            append-icon="mdi-file-find-outline"
                            label="Buscar Cliente"
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
                :expanded.sync="expanded"
                item-key="name"
                show-expand
            >
                <template v-slot:expanded-item="{ headers, item }">
                    <td colspan="2">
                        {{ item.name }}
                    </td>
                    <td colspan="1">
                        {{ item.email }}
                    </td>
                    <td colspan="1">
                        Telefono: {{ item.phone }}
                    </td>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-btn @click="deleteCustomer(item.id)"
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
        </base-material-card>
    </v-container>
</template>
<script>
export default {
    data(){
        return {
            payments: [],
            search: '',
            pagination: {
                current: 1,
                total: 0
            },
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
                    value: 'amount',
                },
                {
                    text:'Banco',
                    align: 'right',
                    value: 'bank',
                },
                {
                    text:'Fecha del Pago',
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
            axios.get('/api/payments?page=' + this.pagination.current + '&search=' + this.search)
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
        onPageChange(){
            this.getPayments()
        },
        alert: function (display,res){
            this.$refs.Alerts.showAlert(display, res);
        },
    },
    mounted() {
        this.getPayments();
    }

}
</script>
