<template>
    <v-alert :value="format.status" cols="6" :type="format.type"
        dismissible close-icon="mdi-trash-can-outline"
        border="left" elevation="6" :color="format.color" dark
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
                    status:false,
                    icon: '',
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
                            'color' : 'orange',
                            'status' : true,
                            'type' : 'success',
                            'icon' : 'mdi-check'
                        }
                        setTimeout(() => me.format.status = false, 3000);
                        break;
                    case 2:
                        // disactivePlan()
                        me.format = {
                            'text' : 'Inactivo',
                            'color' : 'grey',
                            'status' : true,
                            'type' : 'info',
                            'icon' : 'mdi-book-off'
                        }
                        setTimeout(() => me.format.status = false, 3000);
                        break;

                    case 3:
                        // deletePlan()
                        me.format = {
                            'text' : res,
                            'color' : 'blue',
                            'status' : true,
                            'type' : 'warning',
                            'icon' : 'mdi-trash-can-outline'
                        }
                        setTimeout(() => me.format.status = false, 3000);
                        break;

                    case 4:
                        // error
                        me.format = {
                            'text' : 'Error, no se pudo procesar! ' +res,
                            'color' : 'red',
                            'status' : true,
                            'type' : 'error',
                            'icon' : 'mdi-book-remove-outline'
                        }
                        setTimeout(() => me.format.status = false, 5000);
                        break;

                    case 5:
                        // error
                        me.format = {
                            'text' : 'Error!. ' +res,
                            'color' : 'red',
                            'status' : true,
                            'type' : 'error',
                            'icon' : 'mdi-book-remove-outline'
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
