<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row>

      <v-col
        cols="12"
      >
        <base-material-card
          color="warning"
          class="py-3"
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Ultimas 10 Remesas Recibidas
            </div>

            <div class="subtitle-1 font-weight-light">
              <!-- New employees on 15th September, 2016 -->
            </div>
          </template>
          <v-card-text class="no-pad">
            <v-data-table
              :headers="paymentHeader"
              :items="payments_for_stats"
            >
                <template v-slot:item.pay="{ item }">
                    <div>{{ item.pay_formated }} {{ item.pay_iso }}</div>
                </template>
            </v-data-table>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'CustomerDashboard',

    data () {
      return {
        loadPayments: false,
        payments_by_iso: [],
        payments_for_stats: [],
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
                { text: 'Monto', align: 'right', value: 'pay', sortable: false }
            ],
      }
    },

    methods: {
      customerStatsPayments(){
        let me = this;
        me.loadPayments = true
        axios.get('/api/payments/customer-for-stats')
        .then( res => {
            var res = res.data.payments;
            me.payments_for_stats = res
        })
        .catch(err => {
            console.log(err.data);
        })
        .finally( me.loadPayments = false);
      }
    },
    mounted() {
        this.customerStatsPayments();
    }
  }
</script>

<style >
    .no-pad {
        padding: 0! important;
    }
</style>
