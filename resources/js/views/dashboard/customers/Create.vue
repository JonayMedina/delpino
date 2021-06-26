<template>
	<v-layout row wrap>
		<v-container>
			<v-flex xs6>
				<v-subheader class="display-1">Registrar Cliente</v-subheader>
			</v-flex>
			<v-card>
				<alerts ref="Alerts"> </alerts>
				<v-card-text>
					<v-row class="mx-2">
						<v-col cols="12" md="4" class="pt-5 pt-xs-0 pl-0">
							<v-text-field
								label="Introduzca Nombre Completo"
								type="text"
								required
								outlined
								clearable
								dense
								color="deep-purple"
								v-model="customer.name"
								cols="12"
								md="6"
								prepend-outer-icon="mdi-account"
							/>
						</v-col>
						<v-col cols="12" md="4" class="pt-5 pt-xs-0 pl-0">
							<span style="color: red" v-show="email"
								>Ya en Uso, Inserte Otro</span
							>
							<!-- <span style="color:blue;" v-show="!email">Ingrese Mail valido.</span> -->
							<v-text-field
								type="text"
								color="deep-purple"
								label="Insertar Mail"
								outlined
								clearable
								dense
								v-model="customer.email"
								.
								@change="vEmail(customer.email)"
								prepend-outer-icon="mdi-email-lock"
							/>
						</v-col>
						<v-col cols="12" md="4" class="pt-5 pt-xs-0 pl-0">
							<v-autocomplete
								clearable
								color="deep-purple"
								outlined
								dense
								v-model="customer.country"
								:items="countries"
								item-text="name"
								item-value="name"
								label="Pais donde Se ubica"
								prepend-outer-icon="mdi-book-marker-outline"
							></v-autocomplete>
						</v-col>
						<v-col cols="12" md="4" class="pt-0 pl-0">
							<span style="color: red" v-show="phone"
								>Inserte otro, Este se Encuentra en uso!</span
							>
							<!-- <span style="color:blue;" v-show="!phone">Inserte Telefono Unico.</span> -->
							<v-text-field
								type="text"
								label="Numero de Telefono Valido"
								color="deep-purple"
								v-model="customer.phone"
								outlined
								dense
								clearable
								@change="vPhone(customer.phone)"
								prepend-outer-icon="mdi-card-account-phone-outline"
							/>
						</v-col>
						<v-col cols="12" md="4" class="pt-0 pl-0">
							<v-menu
								ref="menu"
								v-model="menu"
								:close-on-content-click="false"
								transition="scale-transition"
								offset-y
								min-width="290px"
							>
								<template v-slot:activator="{ on, attrs }">
									<v-text-field
										v-model="computedDate"
										label="Fecha de Nacimiento"
										prepend-outer-icon="mdi-cake-variant"
										readonly
										outlined
										dense
										clearable
										v-bind="attrs"
										v-on="on"
									></v-text-field>
								</template>
								<v-date-picker
									ref="picker"
									v-model="customer.birthdate"
									:max="max_date"
									min="1950-01-01"
									@change="save"
								></v-date-picker>
							</v-menu>
						</v-col>
						<v-col cols="12" md="6" class="pt-0 pl-0">
							<v-textarea
								v-model="customer.notes"
								rows="1"
								auto-grow
								color="deep-purple"
								label="Acerca del Cliente"
								outlined
								dense
								clearable
								prepend-outer-icon="mdi-book-information-variant"
							></v-textarea>
						</v-col>
						<v-col cols="12">
							<v-row align="center" class="mr-0">
								<v-col cols="6">
									<span style="color: red" v-show="min < 6"
										>Ingrese Constraseña minimo 6 Caracteres</span
									>
									<v-text-field
										type="password"
										v-model="customer.password"
										@input="valpass()"
										placeholder="Contraseña"
										label="CONTRASEÑA"
										color="deep-purple"
										outlined
										dense
										clearable
										prepend-outer-icon="mdi-lock-open-check-outline"
									/>
								</v-col>
								<v-col cols="6">
									<span
										style="color: red"
										v-show="customer.password != customer.password_confirmation"
										>No Coinciden</span
									>
									<v-text-field
										type="password"
										v-model="customer.password_confirmation"
										placeholder="Instroduzcala de nuevo"
										label="Repita su Contraseña"
										color="deep-purple"
										outlined
										dense
										clearable
										prepend-outer-icon="mdi-lock-open-check-outline"
									/>
								</v-col>
							</v-row>
						</v-col>
					</v-row>
				</v-card-text>
				<v-card-actions>
					<router-link :to="{ name: 'customers' }">
						<v-btn> Cancelar</v-btn>
					</router-link>
					<v-btn
						text
						color="primary"
						:loading="saving"
						right
						@click="createCustomer(customer)"
						>Registrar</v-btn
					>
				</v-card-actions>
			</v-card>
		</v-container>
	</v-layout>
</template>

<script>
	// import apis from '../../helpers/customer.js'
	export default {
		data() {
			return {
				dni: "",
				email: "",
				phone: "",
				menu: false,
				date: "",
				max_date: "",
				customer: {
					password: "",
					birthdate: null,
				},
				dialog_title: "",
				countries: [],
				step: 1,
				turn: 0,
				saving: false,
				min: "",
			};
		},
		watch: {
			menu(val) {
				val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
			},
		},
		computed: {
			computedDate() {
				return this.formatDate(this.customer.birthdate);
			},
		},
		methods: {
			setDate() {
				let me = this;

				var max = new Date();
				max = max.setFullYear(max.getFullYear() - 16);
				me.max_date = new Date(max).toISOString().substr(0, 10);
			},
			formatDate(date) {
				if (!date) return null;

				const [year, month, day] = date.split("-");
				return `${day}/${month}/${year}`;
			},
			parseDate(date) {
				if (!date) return null;

				const [month, day, year] = date.split("/");
				return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
			},
			save(date) {
				this.$refs.menu.save(date);
			},
			getCountries() {
				let me = this;
				axios
					.get("/api/countries")
					.then((res) => {
						me.countries = res.data.countries;
					})
					.catch((err) => {
						console.log(err);
					});
			},
			createCustomer() {
				let me = this;
				if (me.validateCustomer()) {
					return;
				}
				me.saving = true;
				axios
					.post("/api/customers/store", me.customer)
					.then((response) => {
						Swal.fire({
							position: "top-end",
							icon: "success",
							title: `${response.data.message}`,
							timer: 3000,
						});
						me.$router.push({ name: "customers" });
					})
					.catch((error) => {
						if (error.response.status == 422) {
							let data = "";
							let errors = error.response.data.errors;
							for (let field of Object.keys(errors)) {
								data = data + ". " + errors[field].flat();
							}
							me.alert(4, data);
						}
					})
					.finally(() => (me.saving = false));
			},
			validateCustomer() {
				let me = this;
				me.eCustomer = 0;
				me.errListC = [];

				if (!me.customer.name)
					me.errListC.push("Por favor ingrese nombre completo");
				// if (!me.customer.dni)me.errListC.push("Por favor ingrese una identificacion Valida!.");
				// if (!me.customer.phone)me.errListC.push("Ingrese un numero telefonico valido");
				if (!me.customer.email) me.errListC.push("Ingrese un email valido");
				if (!me.customer.birthdate)
					me.errListC.push("Ingrese fecha de Nacimiento");

				if (me.email)
					me.errListC.push("E-mail Registrado, por favor introduzca otro");

				if (!me.customer.phone) me.errListC.push("Ingrese numero de Telefono");

				if (!me.customer.password) me.errListC.push("Ingrese Contraseña");

				if (!me.customer.password_confirmation)
					me.errListC.push("Ingrese Contraseña de confirmación ");

				if (me.customer.password != me.customer.password_confirmation)
					me.errListC.push("Las Contraseñas no Coinciden");

				if (me.dni)
					me.errListC.push(
						"Documento registrado, verifique si el customere esta registrado Cuando realize un Pago."
					);
				if (me.errListC.length) me.eCustomer = 1;
				if (me.errListC.length >= 1) {
					Swal.fire({
						title: "Falta(n) Datos",
						icon: "error",
						confirmButtonText: "Aceptar!",
						confirmButtonColor: "#3085d6",
						html: `${me.errListC.map(
							(er) =>
								`<br><span class="mb-3"><i class="mdi-close-circle-outline mr-3"></i> ${er}</span>`
						)}`,
						showCancelButton: false,
					});
				}
				return me.eCustomer;
			},
			vEmail(email) {
				let me = this;
				axios
					.get("/api/customers/email-verify/" + email)
					.then((response) => {
						me.email = response.data.email;
					})
					.catch((error) => console.log(error));
			},
			vDni(dni) {
				let me = this;
				axios
					.get("/api/customers/dni-verify/" + dni)
					.then((response) => {
						me.dni = response.data.dni;
					})
					.catch((error) => console.log(error));
			},
			vPhone(phone) {
				let me = this;
				axios
					.get("/api/customers/phone-verify/" + phone)
					.then((response) => {
						me.phone = response.data.phone;
					})
					.catch((error) => console.log(error));
			},
			valpass() {
				this.min = this.customer.password.length;
			},
			alert: function (display, res) {
				this.$refs.Alerts.showAlert(display, res);
			},
		},
		mounted() {
			this.getCountries();
			this.setDate();
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
