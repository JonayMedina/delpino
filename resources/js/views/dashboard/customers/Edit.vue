<template>
    <v-layout row wrap>
        <v-container>
            <v-flex xs6>
                <v-subheader class="display-1">Editar Cliente</v-subheader>
            </v-flex>
            <v-card>
                <v-card-text>
                    <v-row class="mx-2" >
                        <v-col cols="12" md="4" class="pt-5 pt-xs-0 pl-0">
                            <v-text-field
                            label="Introduzca Nombre Completo"
                            type="text" required
                            outlined
                            clearable
                            dense
                            color="deep-purple"
                            v-model="customer.name"
                            cols="12" md="6"
                            />
                        </v-col>
                        <v-col cols="12" md="4" class="pt-5 pt-xs-0 pl-0">
                            <span style="color:red;" v-show="email">Ya en Uso, Inserte Otro</span>
                            <!-- <span style="color:blue;" v-show="!email">Ingrese E-mail valido.</span> -->
                            <v-text-field type="email"
                            outlined
                            clearable
                            dense
                            color="deep-purple"
                            label="Insertar E-mail Valido"
                            v-model="customer.email"
                            @change="vEmail(customer.email)"
                            />
                        </v-col>
                        <v-col class="align-center justify-space-between" cols="12" md="4">
                            <v-autocomplete
                            color="deep-purple"
                            outlined
                            clearable
                            dense
                            v-model="customer.country" :items="countries"
                            item-text="name" item-value="name"
                            label="De Donde Eres"
                            ></v-autocomplete>
                        </v-col>
                        <v-col cols="12" md="4" class="pt-5 pt-xs-0 pl-0">
                            <span style="color:red;" v-show="phone">Inserte otro, Este se Encuentra en uso!</span>
                            <!-- <span style="color:blue;" v-show="!phone">Inserte Telefono.</span> -->
                            <v-text-field type="phone" label="Numero de Telefono Valido"
                            color="deep-purple"
                            outlined
                            clearable
                            dense
                            v-model="customer.phone"
                            @change="vPhone(customer.phone)"
                            />
                        </v-col>
                        <v-col cols="12" md="4" class="pt-0 pl-0">
                            <span v-show="!customer.birthdate">Fecha de nacimiento del Cliente.</span>
                            <v-text-field type="date"
                            outlined
                            clearable
                            dense
                            color="deep-purple"
                            Label="Ingrese una fecha de nacimiento" v-model="customer.birthdate"
                            />
                        </v-col>
                        <v-col cols="12" md="6" class="pt-0 pl-0">
                            <v-textarea v-model="customer.notes" rows="1"
                            auto-grow filled
                            outlined
                            clearable
                            dense
                            color="deep-purple"
                            label="Acerca del Cliente"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <router-link :to="{ name: 'customers'}">
                        <v-btn> Cancelar</v-btn>
                    </router-link>
                    <v-btn text color="primary" :loading="saving" right @click="createCustomer(customer)" >Registrar</v-btn>
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
                dni:'',
                email:'',
                phone:'',
                customer: {},
                dialog_title:'',
                countries: [],
                step: 1,
                turn:0,
                saving: false,
                min: '',

            }
        },
        computed: {
        },
        methods: {
            getCustomer(){
                let me = this;

                axios.get(`/api/customers/edit/${me.$route.params.id}`)
                    .then(response => {
                        var res = response.data;
                        if(res.customer) {
                            me.customer = res.customer
                        } else {
                            me.$router.push({name: 'customers'});
                        }
                    })
            },
            getCountries(){
                let me = this;
                axios.get('/api/countries')
                    .then(res => {
                        me.countries = res.data.countries;
                    })
                    .catch(err => { console.log(err) })
            },
            updateCustomer() {
                let me = this;
                if (me.validateCustomer()) { return; }
                me.saving = true
                axios.post(`/api/customers/update/${me.$route.params.id}`, me.customer)
                    .then(response => {

                        Swal.fire({
                            position:'top-end',
                            icon: 'success',
                            title: `${response.data.message}`,
                            timer: 3000
                        });
                        me.$router.push({name: 'customers'});
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
                    .finally(() => me.saving = false);

            },
            validateCustomer(){
                let me=this;
                me.eCustomer=0;
                me.errListC =[];

                if (!me.customer.name)me.errListC.push("Por favor ingrese nombre completo");

                if (!me.customer.dni)me.errListC.push("Por favor ingrese una identificacion Valida!.");

                if (!me.customer.phone)me.errListC.push("Ingrese un numero telefonico valido");

                if (!me.customer.email)me.errListC.push("Ingrese un email valido");
                if (!me.customer.birthdate)me.errListC.push("Ingrese fecha de Nacimiento");

                if (me.email)me.errListC.push("E-mail Registrado, por favor introduzca otro");
                if (me.phone)me.errListC.push("Telefono registrado, por favor introduzca otro");
                if (me.dni)me.errListC.push("Documento registrado, verifique si el customere esta registrado Cuando realize un Pago.");
                if (me.errListC.length) me.eCustomer = 1;
                if (me.errListC.length >= 1) {
                    Swal.fire({
                        title:'Falta(n) Datos',
                        icon: 'error',
                        confirmButtonText: 'Aceptar!',
                        confirmButtonColor: '#3085d6',
                        html: `${me.errListC.map( er =>`<br><span class="mb-3"><i class="mdi-close-circle-outline mr-3"></i> ${er}</span>`)}`,
                        showCancelButton: false
                    });
                };
                return me.eCustomer;
            },
            vEmail(email){
                let me = this;
                axios.get('/api/customers/email-verify/'+email)
                .then(response => {
                    me.email =response.data.email;
                })
                .catch(error => console.log(error));
            },
            vDni(dni){
                let me = this;
                axios.get('/api/customers/dni-verify/'+dni)
                .then(response => {
                    me.dni =response.data.dni;
                })
                .catch(error => console.log(error));
            },
            vPhone(phone){
                let me = this;
                axios.get('/api/customers/phone-verify/'+phone)
                .then(response => {
                    me.phone =response.data.phone;
                })
                .catch(error => console.log(error));
            },
            valpass(){
                this.min = this.customer.password.length
            },
        },
        mounted(){
            this.getCustomer();
            this.getCountries();
        }
    }
</script>
<style>
    .v-col {
        padding-top: 0;
    }
    .v-stepper--vertical .v-stepper__content {
        padding-top: 0px;
    }
</style>
