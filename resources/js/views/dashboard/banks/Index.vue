<template>
    <v-container
    id="regular-tables"
    fluid
    tag="section"
    >
        <base-material-card
            icon="mdi-clipboard-text"
            title="Lista Bancos"
            class="px-5 py-3"
        >
            <alerts ref="Alerts"> </alerts>
            <div class="text-center">
                <v-row>
                    <v-col cols="2">
                        <v-btn
                        @click="showDialog(type = 1, bank = {})"
                        elevation="5"
                        icon
                        large
                        >
                            <v-icon color="orange">mdi-cash-plus</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-text-field v-model="search"
                            color="orange" filled
                            append-icon="mdi-book-search-outline"
                            label="Ubicar Cuenta Bancaria"
                            single-line hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
            </div>

            <v-data-table
                :search="search"
                :headers="bankHeaders"
                :items="banks"
                class="elevation-2"
                :loading="loading"
                :items-per-page="20"
                no-results-text="No hay Coincidencias"
                no-data-text="No hay Bancos Guardados"
            >
                <template v-slot:item.currency_id="{ item }">
                    <div v-if="item.currency"> {{ item.currency.name}}</div>
                </template>
                <template v-slot:item.actions="{ item}">
                    <v-btn
                        @click="showDialog(dialog_type = 2, item)"
                        color="orange darken-4"
                        x-small
						filled
						elevation-4
                        class="ma-1 white--text"
                    >
                        Modificar
                        <v-icon right small dark>mdi-book-edit-outline</v-icon>
                    </v-btn>
                    <v-btn
                        v-if="item.active == 1 "
                        @click="desactiveBank(item.id)"
                        color=""
                        x-small
						filled
						elevation-4
                        class="ma-1"
                    >
                        Inhabilitar
                        <v-icon small right light>mdi-book-off</v-icon>
                    </v-btn>
                    <v-btn
                        v-if="item.active == 0"
                        @click="activeBank(item.id)"
                        color="blue darken-2"
                        x-small
						filled
						elevation-4
                        class="ma-1 white--text"
                    >
                        Habilitar
                        <v-icon small right dark>mdi-check-circle-outline</v-icon>
                    </v-btn>
                    <v-btn
                        @click="deleteBank(item.id)"
                        color="red darken-3"
                        x-small
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
        <v-row class="mx-2" justify-center>
            <v-dialog v-model="dialog"
            cols="8" width="65%"
            transition="dialog-bottom-transition">
                <v-card>
                    <v-card-title class="orange white--text display-2 darken-4">
                        <v-icon>{{dialog_icon}}</v-icon>
                        {{ dialog_title }}
                    </v-card-title>
                    <v-container>
                        <v-row class="mx-2">
                            <v-col cols="12" md="4" class="pt-0 pl-0">
                                <v-text-field
                                label="Introduzca Nombre Del Banco"
                                type="text" required
                                outlined
                                clearable
                                dense
                                color="deep-purple"
                                v-model="bank.bank_name"
                                cols="12" md="6"
                                prepend-outer-icon="mdi-bank-plus"
                                />
                            </v-col>
                            <v-col cols="12" md="4" class="pt-0 pl-0">
                                <v-text-field type="text"
                                color="deep-purple"
                                placeholder="**** **** **** **** ***"
                                label="ingrese Numero de cuenta"
                                outlined
                                clearable
                                dense
                                v-model="bank.account_code"
                                prepend-outer-icon="mdi-account-box-multiple-outline"
                                />
                                <span class="primary" v-show="!account_code">Inserte numero de Cuenta!</span>
                            </v-col>
                            <v-col cols="12" md="4" class="pt-0 pl-0">
                                <v-text-field type="text"
                                color="deep-purple"
                                label="Insertar Nombre del titular de la Cuenta"
                                outlined
                                clearable
                                dense
                                v-model="bank.account_holder"
                                prepend-outer-icon="mdi-account-box-multiple-outline"
                                />
                            </v-col>
                            <v-col class="align-center justify-space-between" cols="12" md="4">
                                <v-autocomplete clearable
                                color="deep-purple"
                                outlined
                                dense
                                v-model="bank.currency_id" :items="currencies"
                                item-text="name" item-value="id"
                                label="Pais de la Cuenta"
                                prepend-outer-icon="mdi-book-marker-outline"
                                ></v-autocomplete>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-card-actions>
                        <v-btn @click="closeDialog()"> Cancelar</v-btn>

                        <v-btn v-if="type == 1" text color="orange darken-4"
                        :loading="saving" right @click="createBank(bank)"
                        >Guardar Cuenta <v-icon>mdi-content-save</v-icon></v-btn>

                        <v-btn v-if="type == 2" text color="orange darken-4" :loading="saving" right @click="updateBank(bank)" >Actualizar Datos <v-icon color="white">mdi-update</v-icon></v-btn>
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
            banks: [],
            bank: {
                account_code: '',
            },
            dialog_title: 'Almacenar Cuenta Bancaria',
            dialog_icon: 'mdi-content-save',
            currencies: [],
            loading: false,
            searching: false,
            dialog: false,
            saving: false,
            search: '',
            type: 1,
            bankHeaders: [
                {
                    text:'id',
                    align: 'right',
                    value: 'id',
                },
                {
                    text:'Nombre del Banco',
                    align: 'right',
                    value: 'bank_name',
                },
                {
                    text:'Titular de la cuenta',
                    align: 'right',
                    value: 'account_holder',
                },
                {
                    text:'Moneda de Uso',
                    align: 'right',
                    value: 'currency_id',
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
    computed: {
        account_code(){
            if (!this.bank.account_code) {
                return false
            } else{
                return true;
            }
        }
    },
    methods: {
        getBanks(){
            let me = this;
            me.loading = true
            axios.get('/api/banks')
            .then( res => {
                me.banks = res.data.banks;
            })
            .catch(err => {
                console.log(err.data);
            })
            .finally( me.loading = false);
        },
        getCurrencies(){
            let me = this;
            axios.get('/api/currencies')
            .then( res => {
                me.currencies = res.data.currencies;
            })
            .catch(err => {
                console.log(err.data);
            })
        },
        showDialog(type, bank) {
            let me = this;
            if (type == 1) {
                me.bank={};
                me.dialog_icon = 'mdi-content-save';
            } else {
                me.dialog_title = 'Modificar Cuenta Bancaria';
                me.bank = bank;
                me.dialog_icon = 'mdi-update';
            }
            me.type = type;
            me.dialog = true;
        },
        closeDialog(){
            let me = this;
            me.dialog_title = 'Almacenar Cuenta Bancaria';
            me.bank = {};
            me.dialog = false;
            me.type = 1;
            me.dialog_icon = 'mdi-content-save';
        },
        createBank(){
            let me = this;
            if (me.validateBank()) {
                return;
            }
            me.saving = true;
            axios
                .post('/api/banks/store', me.bank)
                .then(resp => {
                    me.getBanks();
                    me.closeDialog();
                    me.alert(1, resp.data.message);
                })
                .catch(error => {
                    if (error.response.status == 422) {
                            let data = '';
                            let errors = error.response.data.errors
                            for (let field of Object.keys(errors)) {
                                data = data + '. ' + errors[field].flat();
                            }
                            me.alert(4,data);
                        }
                })
                .finally(() => me.saving = false)
        },
        updateBank(bank){
            let me = this;
            if (me.validateBank()) {
                return;
            }
            me.saving = true;
            bank._method = 'put';
            axios.post('/api/banks/update/'+bank.id, bank)
                .then(resp => {
                    me.getBanks();
                    me.closeDialog();
                    me.alert(1, resp.data.message);
                })
                .catch(error => {
                    if (error.response.status == 422) {
                            let data = '';
                            let errors = error.response.data.errors
                            for (let field of Object.keys(errors)) {
                                data = data + '. ' + errors[field].flat();
                            }
                            me.alert(4,data);
                        }
                })
                .finally(() => me.saving = false)
        },
		activeBank(id){
			let me = this;
			const data = {
				url: "/api/banks/activate/" + id,
				title: "Habilitar Banco?",
				active: 1

			};
			Sfire.activeF(data)
				.then(res => {
				me.getBanks();
				me.alert(1, res);
				})
				.catch(error => {
				me.alert(4, error);
				});
		},
		desactiveBank(id){
			let me = this;
			const data = {
				url: "/api/banks/desactive/" + id,
				title: "Inhabilitar Banco?",
				active: 0

			};
			Sfire.desactiveF(data)
				.then(res => {
				me.getBanks();
				me.alert(1, res);
				})
				.catch(error => {
				me.alert(4, error);
				});
		},
		deleteBank(id){
			let me = this;
			const data = {
				url: "/api/banks/destroy/" + id,
				title: "Suprimir Banco?",
				active: 1

			};
			Sfire.deleteF(data)
				.then(res => {
				me.getBanks();
				me.alert(1, res);
				})
				.catch(error => {
				me.alert(4, error);
				});
        },
        validateBank(){
            let me=this;
            me.errorSmsS=0;
            me.errorSmsListS =[];

            if (!me.bank.bank_name) me.errorSmsListS.push("El nombre del Banco es Requerido");
            if (!me.bank.account_holder) me.errorSmsListS.push("Nos Falta el Titular de la cuenta.");
            if (!me.bank.account_code)me.errorSmsListS.push("Necesitamos el codigo de la cuenta.");
            if (!me.bank.currency_id)me.errorSmsListS.push("Seleccione el Pais del Banco.");
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
        this.getBanks();
        this.getCurrencies();
    }

}
</script>
