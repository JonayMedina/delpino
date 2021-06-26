<template>
    <!-- <v-alert
      text
      prominent
      type="error"
      icon="mdi-cloud-alert"
    >
      Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus tempus. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Duis leo.
    </v-alert> -->
    <v-alert :value="format.status" cols="6" :type="format.type"
        dismissible close-icon="mdi-delete"
        border="left" elevation="2" :color="format.color" dark
        class="fixed zindex-1 col-12" colored-border
        >
        {{format.text}}
    </v-alert>
</template>
<script>
    export default {
        name: 'alerts',
        data(){
            return{
                format:{
                    status:false
                },
                display: false,
                status: false,
                res:'',
                err:'',
            }
        },
        methods: {
            showAlert(display, res){
                let me = this
                switch (display) {

                    case 1:
                        // pago aprobado 'activePlan()'
                        me.format = {
                            'text' : res,
                            'color' : 'green',
                            'status' : true,
                            'type' : 'success'
                        }
                        setTimeout(() => me.format.status = false, 3000);
                        break;
                    case 2:
                        // disactivePlan()
                        me.format = {
                            'text' : 'Inactivo',
                            'color' : 'grey',
                            'status' : true,
                            'type' : 'info'
                        }
                        setTimeout(() => me.format.status = false, 3000);
                        break;

                    case 3:
                        // deletePlan()
                        me.format = {
                            'text' : res,
                            'color' : 'blue',
                            'status' : true,
                            'type' : 'warning'
                        }
                        setTimeout(() => me.format.status = false, 3000);
                        break;

                    case 4:
                        // error
                        me.format = {
                            'text' : 'Error, no se pudo procesar!. ' +res,
                            'color' : 'red',
                            'status' : true,
                            'type' : 'error'
                        }
                        setTimeout(() => me.format.status = false, 4000);
                        break;

                    case 5:
                        // error
                        me.format = {
                            'text' : 'Error!. ' +res,
                            'color' : 'red',
                            'status' : true,
                            'type' : 'error'
                        }
                        setTimeout(() => me.format.status = false, 4000);
                        break;
                    default:
                        break;
                }

            },
        }
    }
</script>
