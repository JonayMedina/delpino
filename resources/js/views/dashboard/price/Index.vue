<template>
    <v-container
        id="prices"
        fluid
        tag="section"
      >
        <base-v-component
            heading="Lisado de Precios"
            link="precios/listado"
        />

        <base-material-card
            icon="mdi-clipboard-text"
            title="Tabla de Precios"
            class="px-3 py-2"
        >
            <alerts ref="Alerts"> </alerts>
            <div class="text-center">
                <v-row>
                    <v-col cols="2">
                        <v-btn
                        @click="showDialog(dialog_type = 1, price = {})"
                        elevation="5"
                        icon
                        large
                        >
                            <v-icon color="orange">mdi-cash-plus</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-text-field v-model="search"
                            outlined
                            clearable
                            color="orange"
                            append-icon="mdi-image-search"
                            label="Buscar Moneda"
                            single-line hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
            </div>

            <v-data-table
                :search="search"
                :headers="headers"
                :items="prices"
                class="elevation-2"
                loading="true"
                :items-per-page="20"
            >
                <template v-slot:item.currency="{ item }">
                    <div>{{ item.currency.iso}}</div>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-btn
                        @click="showDialog(dialog_type = 2, item)"
                        color="orange darken-4"
                        medium
						filled
						elevation-4
                        class="ma-1 white--text"
                    >
                        Editar
                        <v-icon right small dark>mdi-book-edit-outline</v-icon>
                    </v-btn>
                    <v-btn
                        v-if="item.active == 1 "
                        @click="desactivePrice(item.id)"
                        color=""
                        medium
						filled
						elevation-4
                        class="ma-1"
                    >
                        Colocar Inactivo
                        <v-icon medium right light>mdi-book-off</v-icon>
                    </v-btn>
                    <v-btn
                        v-if="item.active == 0"
                        @click="activePrice(item.id)"
                        color="blue darken-2"
                        medium
						filled
						elevation-4
                        class="ma-1 white--text"
                    >
                        Colocar Activo
                        <v-icon small right dark>mdi-check-circle-outline</v-icon>
                    </v-btn>
                    <v-btn
                        @click="deletePrice(item.id)"
                        color="deep-red"
                        medium
						filled
						elevation-4
                        class="ma-1 white--text"
                        :disabled="item.active == 3 || item.active == 1"
                    >
                        Eliminar
                        <v-icon small right dark> mdi-close-outline </v-icon>
                    </v-btn>
                    </template>
            </v-data-table>

        </base-material-card>
        <v-row class="mx-2">
            <v-dialog v-model="dialog" cols="6" width="60%" overlay-color="blue darken-5" transition="dialog-top-transition">
                <v-card>
                    <v-card-title class="orange white--text elevation-4">
                        <v-icon large left color="white">mdi-pencil</v-icon>
                        <span class="title font-weight-light text-right display-1">EDITAR MONEDA</span>
                    </v-card-title>
                    <v-container>
                        <v-row align="center" class="mr-0">
                            <v-col cols="12" md="6">
                                <div v-if="price.currency" v-text="price.currency.iso"></div>
                                <v-text-field
                                type="number"
                                color="deep-purple"
                                required
                                outlined
                                clearable
                                dense
                                label="Ingrese precio de Venta"
                                v-model="price.amount"
                                prepend-outer-icon="mdi-cash-check"
                                >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">

                                <v-select
                                :items="currencies"
                                label="Seleccione Moneda"
                                v-model="price.currency_id"
                                item-text="name"
                                item-value="id"
                                ></v-select>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field type="text" prepend-icon="mdi-account-card-details-outline" placeholder="informacion sobre el Precio" v-model="price.notes"/>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-card-actions>
                        <v-btn  text color="secondary"
                        @click="dialog = false" > Cerrar</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn :loading="saving" class="text-right" color="orange darken-4" v-if="dialog_type == 1" @click="createPrice(price)">Registrar</v-btn>
                        <v-btn :loading="saving" class="white--text" color="orange darken-4" v-if="dialog_type == 2" @click="updatePrice(price)" >Guardar Cambios</v-btn>
                        
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data(){
        return {
            prices: [],
            price: {},
            currencies: [],
            loading: false,
            search: '',
            dialog_title:'',
            dialog: false,
            dialog_type: 1,
            saving: false,
            errors: [],
            headers: [
                {
                    text:'Moneda',
                    align: 'right',
                    value: 'currency',
                },
                {
                    text:'Monto',
                    align: 'right',
                    value: 'amount',
                },
                {
                    text:'Descrip.',
                    align: 'right',
                    value: 'notes',
                },
                { text: 'Opciones', value: 'actions', sortable: false }
            ],
        }
    },
    methods: {
        getPrices(){
            let me = this;
            me.loading = true
            axios.get('/api/prices')
            .then( res => {
                me.prices = res.data.prices
            })
            .catch(err => {
                console.log(err.data);
            })
            .finally( me.loading = false);
        },
        getCurrency(){
            let me = this;
            axios.get('/api/currencies')
                .then(res => {
                    me.currencies = res.data.currencies;
                })
                .catch(err => { console.log(err) })
        },
        showDialog(type, price) {
            let me = this;
            if (!me.currencies.lenght) {
                me.getCurrency();
            }
            
            if (type == 1) {
                me.dialog_title = 'Guardar Monto';
                me.price={};
            } else {
                me.dialog_title = 'Actualizar Monto';
                me.price = price;
            }
            me.dialog = true;
        },
        createPrice(){
            let me = this;
            me.saving = true;
            axios
                .post('/api/prices/store', me.price)
                .then(resp => {
                    me.getPrices();
                    me.closeDialog();
                    me.alert(1, resp.data.message);
                })
                .catch(error => console.log(error))
                .finally(() => me.saving = false)
        },
        updatePrice(){
            let me = this;
            me.saving = true;
            me.price._method = 'put';
            axios.post('/api/prices/update/'+ me.price.id, me.price)
                .then(resp => {

                    me.getPrices();
                    me.closeDialog();
                    me.alert(1, resp.data.message);
                }).catch(e => {
                    e.response.data.error.map(element => {
                        me.alert(4, element);
                    });
                    
                    
                }).finally(() => me.saving = false, me.closeDialog());
        },
        closeDialog(){
            let me = this;
            me.dialog_title = 'Crear Nuevo Precio';
            me.price = {};
            me.dialog = false;
        },
		activePrice(id){
			let me = this;
			const data = {
				url: "/api/prices/activate/" + id,
				title: "Activar Precio?",
				active: 1

			};
			fire.activeS(data)
				.then(res => {
				me.getPrices();
				me.alert(1, res);
				})
				.catch(error => {
				me.alert(4, error);
				});
		},
		desactivePrice(id){
			let me = this;
			const data = {
				url: "/api/prices/activate/" + id,
				title: "Activar Precio?",
				active: 1

			};
			fire.activeS(data)
				.then(res => {
				me.getPrices();
				me.alert(1, res);
				})
				.catch(error => {
				me.alert(4, error);
				});
		},
		deletePrice(id){
			let me = this;
			const data = {
				url: "/api/prices/activate/" + id,
				title: "Activar Precio?",
				active: 1

			};
			fire.activeS(data)
				.then(res => {
				me.getPrices();
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
        this.getPrices();
    }

}
</script>