<template>
  <v-layout row wrap mx-3>
      <v-container
        id="regular-tables"
        fluid
        tag="section"
      >
        <alerts ref="Alerts"> </alerts>
        <div class="text-center">
            <v-row>
                <v-col cols="2">
                    <router-link :to="{name: 'create-customer'}">
                        <v-btn
                        elevation="5"
                        icon
                        large
                        >
                            <v-icon color="orange">mdi-account-plus-outline</v-icon>
                        </v-btn>
                    </router-link>
                </v-col>
                <v-col>
                    <v-text-field v-model="search"
                        color="orange" filled
                        append-icon="mdi-magnify"
                        label="Buscar Cliente"
                        single-line hide-details
                    ></v-text-field>
                    <v-btn color="blue-grey darken-4" x-small
                        class="ma-1 white--text"
                        :loading="loading"
                        >
                            <v-icon right small dark>mdi-magnify </v-icon>
                        </v-btn>
                </v-col>
            </v-row>
        </div>

        <v-data-table
            dark
            :headers="headers"
            :items="customers"
            class="elevation-2"
            :options.sync="pagination"
            loading="true"
            :items-per-page="20"
        >
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


    </v-container>
  </v-layout>
</template>
<script>
export default {
    data(){
        return {
            customers: [],
            search: '',
            pagination: {
                current: 1,
                total: 0
            },
            loading: false,
            searching: false,
            headers: [
                {
                    text:'id',
                    align: 'right',
                    value: 'id',
                },
                {
                    text:'Nombre',
                    align: 'right',
                    value: 'name',
                },
                {
                    text:'DNI',
                    align: 'right',
                    value: 'dni',
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
        getCustomers(){
            let me = this;
            me.loading = true
            axios.get('/api/customers?page=' + this.pagination.current + '&search=' + this.search)
            .then( res => {
                var res = res.data.customers;
                me.customers = res.data;
                me.pagination.current = res.current_page;
                me.pagination.total = res.last_page;
            })
            .catch(err => {
                console.log(err.data);
            })
            .finally( me.loading = false);
        },
        searchCustomer(){
            this.getCustomers();
        },
        onPageChange(){
            this.getCustomers()
        },
        alert: function (display,res){
            this.$refs.Alerts.showAlert(display, res);
        },
    },
    mounted() {
        this.getCustomers();
    }

}
</script>
