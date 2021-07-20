<template>
	<v-container id="prices" fluid tag="section">
		<base-v-component heading="Precios" link="precios/listado" />

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
							@click="showDialog((dialog_type = 1), (price = {}))"
							elevation="5"
							icon
							large
						>
							<v-icon color="orange">mdi-cash-plus</v-icon>
						</v-btn>
					</v-col>
					<v-col>
						<v-text-field
							v-model="search"
							outlined
							clearable
							color="orange"
							append-icon="mdi-image-search"
							label="Buscar Moneda"
							single-line
							hide-details
						></v-text-field>
					</v-col>
				</v-row>
			</div>

			<v-data-table
				:search="search"
				:headers="headers"
				:items="prices"
				class="elevation-2"
				:loading="loading"
				:items-per-page="20"
			>
				<template v-slot:item.currency="{ item }">
					<div>{{ item.currency.iso }} {{ item.currency.name }}</div>
				</template>
				<template v-slot:item.actions="{ item }">
					<v-btn
						@click="showDialog((dialog_type = 2), item)"
						color="orange darken-4"
						small
						filled
						elevation-4
						class="ma-1 white--text"
					>
						<v-icon rigth small dark>mdi-circle-edit-outline</v-icon>
					</v-btn>
					<v-btn
						v-if="item.active == 1"
						@click="desactivePrice(item.id)"
						color=""
						x-small
						filled
						elevation-4
						class="ma-1"
					>
						Inhabilitar
						<v-icon small rigth light>mdi-book-off</v-icon>
					</v-btn>
					<v-btn
						v-if="item.active == 0"
						@click="activePrice(item.id)"
						color="blue darken-2"
						x-small
						filled
						elevation-4
						class="ma-1 white--text"
					>
						Habilitar
						<v-icon small rigth dark>mdi-check-circle-outline</v-icon>
					</v-btn>
					<v-btn
						@click="deletePrice(item.id)"
						color="red darken-3"
						small
						filled
						elevation-4
						class="ma-1 white--text"
						:disabled="item.active == 3 || item.active == 1"
					>
						<v-icon small rigth dark> mdi-close-outline </v-icon>
					</v-btn>
				</template>
			</v-data-table>
		</base-material-card>
		<v-row class="mx-2">
			<v-dialog
				v-model="dialog"
				cols="6"
				width="60%"
				overlay-color="blue darken-5"
				transition="dialog-top-transition"
			>
				<v-card>
					<error-component
						v-if="allErrors"
						:errors="allErrors"
					></error-component>
					<v-card-title class="orange white--text elevation-4">
						<v-icon large left color="white">mdi-pencil</v-icon>
						<span class="title font-weight-light text-right display-1">{{
							dialog_title
						}}</span>
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
									label="Ingrese Tasa de Cambio"
									@input="calcformated(price.amount)"
									v-model="price.amount"
									prepend-outer-icon="mdi-cash-check"
								>
								</v-text-field>
							</v-col>
							<v-col cols="12" md="6">
								<div display-3 color="grey darken-4">{{ price.amount_formated }}</div>
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
								<v-text-field
									type="text"
									prepend-icon="mdi-account-card-details-outline"
									placeholder="informacion sobre el Precio"
									v-model="price.notes"
								/>
							</v-col>
						</v-row>
					</v-container>
					<v-card-actions>
						<v-btn text color="secondary" @click="dialog = false">
							Cerrar</v-btn
						>
						<v-spacer></v-spacer>
						<v-btn
							:loading="saving"
							class="text-right"
							color="orange darken-4"
							v-if="dialog_type == 1"
							@click="createPrice(price)"
							>Registrar</v-btn
						>
						<v-btn
							:loading="saving"
							class="white--text"
							color="orange darken-4"
							v-if="dialog_type == 2"
							@click="updatePrice(price)"
							>Guardar Cambios</v-btn
						>
					</v-card-actions>
				</v-card>
			</v-dialog> </v-row
		>.
	</v-container>
</template>
<script>
	export default {
		data() {
			return {
				prices: [],
				price: {
					amount_formated: "",
					amount: 0.0,
				},
				formated: 0.0,
				currencies: [],
				loading: false,
				search: "",
				dialog_title: "",
				dialog: false,
				dialog_type: 1,
				saving: false,
				allErrors: {},
				ePrice: 0,
				errListP: [],
				headers: [
					{
						text: "Moneda",
						align: "right",
						value: "currency",
					},
					{
						text: "Monto",
						align: "right",
						value: "amount_formated",
					},
					{
						text: "Descrip.",
						align: "right",
						value: "notes",
					},
					{ text: "Opciones", value: "actions", sortable: false },
				],
			};
		},
		computed: {},
		methods: {
			getPrices() {
				let me = this;
				me.loading = true;
				axios
					.get("/api/prices")
					.then((res) => {
						me.prices = res.data.prices;
					})
					.catch((err) => {
						console.log(err.data);
					})
					.finally((me.loading = false));
			},
			getCurrency() {
				let me = this;
				axios
					.get("/api/currencies")
					.then((res) => {
						me.currencies = res.data.currencies;
					})
					.catch((err) => {
						console.log(err);
					});
			},
			showDialog(type, price) {
				let me = this;
				if (!me.currencies.lenght) {
					me.getCurrency();
				}

				if (type == 1) {
					me.dialog_title = "Guardar Monto";
					me.price = {};
				} else {
					me.dialog_title = "Actualizar Monto";
					me.price = price;
				}
				me.dialog_type = type;
				me.dialog = true;
			},
			async createPrice() {
				let me = this;
				if (me.validatePrice()) {
					return;
				}
				me.allErrors = [];
				me.saving = true;
				axios
					.post("/api/prices/store", me.price)
					.then((resp) => {
						me.getPrices();
						me.closeDialog();
						me.alert(1, resp.data.message);
					})
					.catch((error) => {
						if (error.response.status == 422) {
							me.allErrors = error.response.data.errors;
						}
					})
					.finally(() => (me.saving = false));
			},
			async updatePrice() {
				let me = this;
				if (me.validatePrice()) {
					return;
				}
				me.allErrors = [];
				me.saving = true;
				me.price._method = "put";
				axios
					.post("/api/prices/update/" + me.price.id, me.price)
					.then((resp) => {
						me.getPrices();
						me.closeDialog();
						me.alert(1, resp.data.message);
					})
					.catch((e) => {
						if (e.response.status == 422) {
							me.allErrors = e.response.data.errors;
						}
					})
					.finally(() => (me.saving = false), me.closeDialog());
			},
			validatePrice() {
				let me = this;
				me.ePrice = 0;
				me.errListP = [];

				if (!me.price.amount) me.errListP.push("Ingrese un Monto");
				if (!me.price.currency_id) me.errListP.push("Ingrese un Monto");

				if (me.errListP.length) me.ePrice = 1;
				if (me.errListP.length >= 1) {
					Sfire.validateF(me.errListP);
				}
				return me.ePrice;
			},
			closeDialog() {
				let me = this;
				me.dialog_title = "Crear Nuevo Precio";
				me.price = {};
				me.dialog = false;
			},
			activePrice(id) {
				let me = this;
				const data = {
					url: "/api/prices/activate/" + id,
					title: "Habilitar Precio?",
					active: 1,
				};
				Sfire.activeF(data)
					.then((res) => {
						me.getPrices();
						me.alert(1, res);
					})
					.catch((error) => {
						me.alert(4, error);
					});
			},
			desactivePrice(id) {
				let me = this;
				const data = {
					url: "/api/prices/desactive/" + id,
					title: "Inhabilitar Precio?",
					active: 1,
				};
				Sfire.desactiveF(data)
					.then((res) => {
						me.getPrices();
						me.alert(1, res);
					})
					.catch((error) => {
						me.alert(4, error);
					});
			},
			deletePrice(id) {
				let me = this;
				const data = {
					url: "/api/prices/destroy/" + id,
					title: "Borrar Precio?",
					active: 1,
				};
				Sfire.deleteF(data)
					.then((res) => {
						me.getPrices();
						me.alert(1, res);
					})
					.catch((error) => {
						me.alert(4, error);
					});
			},
			calcformated(newFormated) {
				this.price.amount_formated = Sfire.moneyFormatF(newFormated);
			},
			alert: function (display, res) {
				this.$refs.Alerts.showAlert(display, res);
			},
		},
		mounted() {
			this.getPrices();
		},
	};
</script>
