<template>
    <v-container
    id="regular-tables"
    fluid
    tag="section"
    >
        <base-material-card
            icon="mdi-account-box-outline"
            title="Tabla de Clientes"
            class="px-5 py-3"
        >
            <alerts ref="Alerts"> </alerts>
            <div class="text-center">
                <v-row>
                    <v-col cols="9" md="3">
                        <v-card color="teal" class="my-0" outlined rounded >
                            <v-list class="my-0">
                                <v-list-item :to="{name: 'create-customer'}" link>
                                    <v-list-item-avatar>
                                        <v-icon large color="teal">mdi-account-plus-outline</v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title color="teal" v-text="'Cliente Nuevo +'"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-text-field v-model="search"
                            outlined
                            clearable
                            color="orange" filled
                            append-icon="mdi-account-search"
                            label="Buscar Cliente"
                            single-line hide-details
                            :disabled="loading"

                        ></v-text-field>
                    </v-col>
                </v-row>
            </div>

            <v-data-table
                :search="search"
                :headers="customerHeaders"
                :items="customers"
                class="elevation-2"
                loading="true"
                loading-text="Espere por Favor. Cargando..."
                :items-per-page="pagination.rowsPerPage"
                :footer-props="footerProps"
                :expanded.sync="expanded"
                item-key="name"
                show-expand
            >
                <template v-slot:expanded-item-icon="{ item }">
                    <td :col-index="5">
                        <v-icon :color="item.isValid ? 'success' : 'error'">check</v-icon>
                    </td>
                </template>
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
                    <v-btn
                        v-if="item.active == 1 "
                        @click="desactiveCustomer(item.id)"
                        color="grey"
                        x-small
                        outlined rounded
						filled
						elevation-4
                        class="ma-1"
                    >
                        Inhabilitar
                        <v-icon small right light>mdi-book-off</v-icon>
                    </v-btn>
                    <v-btn
                        v-if="item.active == 0"
                        @click="activeCustomer(item.id)"
                        color="blue darken-2"
                        x-small
                        outlined rounded
						filled
						elevation-4
                        class="ma-1 white--text"
                    >
                        Habilitar
                        <v-icon small right light>mdi-check-circle-outline</v-icon>
                    </v-btn>
                    <v-btn @click="deleteCustomer(item.id)"
                        color="deep-orange" x-small outlined rounded filled
                        class="ma-1 white--text"
                    > Eliminar
                        <v-icon small right light> mdi-close-outline </v-icon>
                    </v-btn>
                </template>
            </v-data-table>
            <!-- <v-data-table
                :search="search"
                :headers="customerHeaders"
                :items="customers"
                class="elevation-2"
                :options.sync="pagination"
                loading="true"
                :items-per-page="20"
                :expanded.sync="expanded"
                item-key="name"
                show-expand
            >
                <template v-slot:expanded-item-icon="{ item }">
                    <td :col-index="5">
                        <v-icon :color="item.isValid ? 'success' : 'error'">check</v-icon>
                    </td>
                </template>
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
            </div> -->
        </base-material-card>
    </v-container>
</template>
<script>
export default {
    data(){
        return {
            customers: [],
            expanded: [],
            search: '',
            pagination: {
                rowsPerPage:20
            },
            footerProps: {
                itemsPerPageOptions: [10, 20, 50, 100],
                showFirstLastPage: true,
                firstIcon: 'mdi-arrow-collapse-left',
                lastIcon: 'mdi-arrow-collapse-right',
                prevIcon: 'mdi-minus',
                nextIcon: 'mdi-plus'
            },
            loading: false,
            searching: false,
            customerHeaders: [
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
            me.loading = true;
            let url1= '/api/customers?page=' + this.pagination.current + '&search=' + this.search;
            let url2 = '/api/customers/all';
            axios.get(url2)
            .then( res => {
                var res = res.data.customers;
                me.customers = res;
                // me.pagination.current = res.current_page;
                // me.pagination.total = res.last_page;
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
        activeCustomer(id){
			let me = this;
			const data = {
				url: "/api/customers/activate/" + id,
				title: "Activar Usuario?",
				active: 1

			};
			Sfire.activeF(data)
				.then(res => {
				me.getCustomers();
				me.alert(1, res);
				})
				.catch(error => {
				me.alert(4, error);
				});
		},
		desactiveCustomer(id){
			let me = this;
			const data = {
				url: "/api/customers/desactive/" + id,
				title: "Inactivar Futuras remesas a Cliente?",
				active: 0

			};
			Sfire.desactiveF(data)
				.then(res => {
				me.getCustomers();
				me.alert(1, res);
				})
				.catch(error => {
				me.alert(4, error);
				});
		},
		deleteCustomer(id){
			let me = this;
			const data = {
				url: "/api/customers/destroy/" + id,
				title: "Eliminar cuenta Cliente?",
				active: 1

			};
			Sfire.deleteF(data)
				.then(res => {
				me.getCustomers();
				me.alert(1, res);
				})
				.catch(error => {
				me.alert(4, error);
				});
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

