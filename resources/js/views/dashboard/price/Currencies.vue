<template>
    <v-container
        id="currencies"
        fluid
        tag="section"
      >
        <base-v-component
            heading="Lisado de Monedas"
            link="Monedas/listado"
        />

        <base-material-card
            icon="mdi-clipboard-text"
            title="Tabla de Monedas"
            class="px-3 py-2"
        >
            <alerts ref="Alerts"> </alerts>
            <div class="text-center">
                <v-row>
                    <v-col cols="2">
                        <v-btn
                        @click="showDialog(dialog_type = 1, currency = {})"
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
                :items="currencies"
                class="elevation-2"
                loading="true"
                :items-per-page="20"
            >

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
                        @click="desactiveCurrency(item.id)"
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
                        @click="activeCurrency(item.id)"
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
                        @click="deleteCurrency(item.id)"
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
            <v-dialog v-model="dialog" cols="10">
                <v-card>
                    <v-card-title class="grey darken-2" v-text="'Editar Moneda'">
                    </v-card-title>
                    <v-container>
                        <v-row class="mx-2">
                            <v-col class="align-center justify-space-between" cols="12">
                                <v-row align="center" class="mr-0">
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                        type="text"
                                        color="deep-purple"
                                        required
                                        outlined
                                        clearable
                                        dense
                                        label="Ingrese Nombre de Moneda"
                                        v-model="currency.name"
                                        prepend-outer-icon="mdi-cash-check"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                        type="text"
                                        color="deep-purple"
                                        required
                                        outlined
                                        clearable
                                        dense
                                        label="ingrese Codigo ISO ejemp: 'USD'"
                                        v-model="currency.name"
                                        prepend-outer-icon="mdi-cash-check"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-text-field type="text"
                                        color="deep-purple"
                                        required
                                        outlined
                                        clearable
                                        dense
                                        prepend-icon="mdi-account-card-details-outline" placeholder="Ingrese simbolo ejemp: '$' " v-model="currency.notes"/>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-card-actions>
                        <v-btn  text color="primary"
                        @click="dialog = false" > Cancelar</v-btn>
                        <v-btn text v-if="dialog_type == 1" @click="createCurrency(currency)" >Guardar</v-btn>
                        <v-btn text v-if="dialog_type == 2" @click="updateCurrency(list)" >Actualizar</v-btn>
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
            currencies: [],
            currency: {},
            loading: false,
            search: '',
            dialog_title:'',
            dialog: false,
            dialog_type: 1,
            saving: '',
            headers: [
                {
                    text:'Nombre de Moneda',
                    align: 'right',
                    value: 'name',
                },
                {
                    text:'Codigo Iso',
                    align: 'right',
                    value: 'iso',
                },
                {
                    text:'Simbolo',
                    align: 'right',
                    value: 'symbol',
                },
                { text: 'Opciones', value: 'actions', sortable: false }
            ],
        }
    },
    methods: {
        getCurrencies(){
            let me = this;
            axios.get('/api/currencies')
                .then(res => {
                    me.currencies = res.data.currencies;
                })
                .catch(err => { console.log(err) })
        },
        showDialog(type, currency) {
            let me = this;
            if (type == 1) {
                me.dialog_title = 'Guardar Monto';
                me.currency={};
            } else {
                me.dialog_title = 'Actualizar Monto';
                me.currency = currency;
            }
            me.dialog = true;
        },
        createCurrency(){
            let me = this;

            if (me.validateCurrency()) {
                return;
            }
            me.saving = true;
            axios.post('/api/currencies/store', me.currency)
                .then(resp => {
                    me.getCurrencies();
                    me.closeDialog();
                    me.alert(1, resp.data.message);
                })
                .catch(error => console.log(error))
                .finally(() => me.saving = false)
        },
        updateCurrency(){
            let me = this;

            if (me.validateCurrency()) {
                return;
            }
            me.saving = true;
            axios.post('/api/currencies/update/'+ me.currency.id, me.currency)
                .then(resp => {
                    me.getCurrencies();
                    me.closeDialog();
                    me.alert(1, resp.data.message);
                })
                .catch(error => console.log(error))
                .finally(() => me.saving = false)

            bank._method = 'put';
        },
        closeDialog(){
            let me = this;
            me.dialog_title = 'Registrar Moneda';
            me.currency = {};
            me.dialog = false;
        },
		activeCurrency(id){
			let me = this;
			const data = {
				url: "/api/currencies/activate/" + id,
				title: "Activar Moneda?",
				active: 1

			};
			Sfire.activeF(data)
				.then(res => {
				me.getCurrencies();
				me.alert(1, res);
				})
				.catch(error => {
				me.alert(4, error);
				});
		},
		desactiveCurrency(id){
			let me = this;
			const data = {
				url: "/api/currencies/desactive/" + id,
				title: "Desactivar Moneda?",
				active: 0

			};
			Sfire.desactiveF(data)
				.then(res => {
				me.getCurrencies();
				me.alert(1, res);
				})
				.catch(error => {
				me.alert(4, error);
				});
		},
		deleteCurrency(id){
			let me = this;
			const data = {
				url: "/api/currencies/activate/" + id,
				title: "BORRAR Moneda?",
				active: 1

			};
			Sfire.activeS(data)
				.then(res => {
				me.getCurrencies();
				me.alert(1, res);
				})
				.catch(error => {
				me.alert(4, error);
				});
        },
        validateCurrency(){
            let me=this;
            me.errorSmsS=0;
            me.errorSmsListS =[];

            if (!me.currency.name) me.errorSmsListS.push("Por favor Ingrese el nombre de la moneda");
            if (!me.currency.iso)me.errorSmsListS.push("Por favor Inserte Codigo ISO ejemplo 'USD, EUR, COP'");
            if (!me.currency.symbol)me.errPayL.push("Por favor Ingrese simbolo de la moneda ejemplo: ' €, $' ");
            if (me.errorSmsListS.length) me.errorSmsS = 1;
            if (me.errorSmsListS.length >= 1) {
                Swal.fire({
                    title:'Hey!! Nos falta(n) Datos',
                    icon: 'info',
                    confirmButtonText: 'Aceptar!',
                    confirmButtonColor: '#3085d6',
                    html: `${me.errorSmsListS.map( er =>`<br><span style="color:red;" class="mb-3"><i class="mdi mdi-minus-circle-outline mdi-spin mr-3"></i> ${er}</span>`)}`,
                    showCancelButton: false
                });
            };
            return me.errorSmsS;
        },
        alert: function (display,res){
            this.$refs.Alerts.showAlert(display, res);
		},
    },
    mounted() {
        this.getCurrencies();
    }

}
</script>
