(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{214:function(e,t,n){"use strict";n.r(t);var a={data:function(){return{pay:{},detail_pay:[],prices:[],dialog_title:"Agregar datos de cuenta",banks:[],receivers:[],receiver:{},total_pay:0,remaining:0,remaining_text:"Restante",step:1,turn:0,loadingCustomers:!1,saving:!1,min:"",dialog:!1,valid_modal:!1,disable_pay:!0,emodal:0,emodalList:[],epay:0,epayList:[],price:{},amount_paied:0,modalRules:[],bankDisabled:!0,registerDisabled:!1,customers:[],customer:{},pmoney:{value:"",placeholder:"Ingrese Monto depositado",readonly:!1,disabled:!1,outlined:!0,clearable:!0,valueWhenIsEmpty:"",options:{locale:"en-US",prefix:"",currency:"USD",suffix:"",length:20,precision:2},properties:{hint:"Ingrese Monto"}},vmoney:{value:"0.00",placeholder:" ",readonly:!1,disabled:!1,outlined:!0,clearable:!0,valueWhenIsEmpty:"",options:{locale:"es-Ve",prefix:"",currency:"VES",suffix:"",length:20,precision:2},properties:{hint:"Ingrese Monto"}}}},computed:{width:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"100%";case"sm":return"70%";case"md":case"lg":case"xl":return"30%"}},register:function(){this.pay.amount&&this.receivers.length}},methods:{getPrices:function(){var e=this;axios.get("/api/prices").then((function(t){e.prices=t.data.prices})).catch((function(e){console.log(e)}))},getCustomers:function(){var e=this;e.loadingCustomers=!0,axios.get("/api/customers/all").then((function(t){e.customers=t.data.customers,e.bankDisabled=!1})).catch((function(e){console.log(e)})).finally((function(){return e.loadingCustomers=!1}))},getBanks:function(e){var t=this;axios.get("/api/banks/by-currency/"+e).then((function(e){t.banks=e.data.banks,t.bankDisabled=!1})).catch((function(e){console.log(e)}))},setPrice:function(e){var t=this;t.bankDisabled=!0,t.pay.price_rate=e.amount,t.disable_pay=!1,t.pay.pay_iso=e.iso,t.pay.currency_id=e.currency_id,t.pmoney.options.currency=e.iso,t.pmoney.options.locale=e.locale,t.getBanks(e.currency_id)},addReceiver:function(e){var t=this;t.validateReceiver()||(t.find(e.bank_account)?Swal.fire({icon:"error",title:"Error...",text:"Cuenta ya agregada!.",footer:"Guardar pago o Seguir Agregando?."}):(t.receivers.push({bank_account:e.bank_account,bank_name:e.bank_name,name:e.name,dni:e.dni,amount:e.amount,description:""}),t.decreaseRemaining(e.amount),t.closeDialog()))},createPay:function(){var e=this;e.pay.detail_pay=e.receivers,console.log(e.pay),e.validatePay()||(e.saving=!0,axios.post("/api/payments/store",e.pay).then((function(t){Swal.fire({position:"top-end",icon:"success",title:"".concat(t.data.message),timer:3e3}),e.$router.push({name:"payments"})})).catch((function(t){if(422==t.response.status){for(var n="",a=t.response.data.errors,o=0,i=Object.keys(a);o<i.length;o++){n=n+". "+a[i[o]].flat()}e.alert(4,n)}})).finally((function(){return e.saving=!1})))},validatePay:function(){var e=this;return e.epay=0,e.epayList=[],e.pay.price_rate||e.epayList.push("Seleccione Moneda de Remesa."),e.pay.bank_id||e.epayList.push("Seleccione un Banco"),e.pay.pay||e.epayList.push("Se necesita el Monto Depositado."),e.remaining>0&&e.epayList.push("Asigne el monto Calculado a algún Beneficiario."),0==e.pay.detail_pay.length&&e.epayList.push("Ingrese algún Beneficiario."),e.epayList.length&&(e.epay=1),e.epayList.length>=1&&Sfire.validateF(e.epayList),e.epay},validateReceiver:function(){var e=this;return e.emodal=0,e.emodalList=[],e.receiver.amount||e.emodalList.push("Ingrese un Monto"),e.receiver.amount>e.reminder&&e.emodalList.push("Monto superior a su total disponible"),e.receiver.bank_account||e.emodalList.push("Ingrese Cuenta"),e.receiver.name||e.emodalList.push("Ingrese Nombre de Beneficiario"),e.receiver.dni||e.emodalList.push("Ingrese C.i. del Beneficiario"),e.emodalList.length&&(e.emodal=1),e.emodalList.length>=1&&Sfire.validateF(e.emodalList),e.emodal},find:function(e){var t=0;return this.receivers&&(t=this.receivers.some((function(t){return t.bank_account==e}))),t},deleteReceiver:function(e,t){var n=this.receivers.splice(e,1);console.log(n),this.increaseReaming(n[0].amount)},openDialog:function(){this.dialog=!0,this.receiver.amount=this.remaining},clearDialog:function(){this.receiver={}},closeDialog:function(){this.receiver={},this.dialog=!1},setRemaining:function(){this.total_pay=this.pay.pay*this.pay.price_rate,this.remaining=this.pay.pay*this.pay.price_rate},decreaseRemaining:function(e){this.remaining=this.remaining-e},increaseReaming:function(e){this.remaining+=parseFloat(e)},moneyFormat:function(e){return Sfire.moneyFormatF(e)}},mounted:function(){this.getPrices(),this.getCustomers()}},o=(n(75),n(0)),i=Object(o.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:""}},[n("v-container",{attrs:{id:"regular-tables",fluid:"",tag:"section"}},[n("base-material-card",{staticClass:"px-5 py-3",attrs:{icon:"mdi-file-plus-outline",title:"Nuevo Pago"}},[n("v-card",{attrs:{height:"100%"}},[n("v-row",{staticClass:"mx-2"},[n("v-col",{attrs:{cols:"12"}},[n("v-card-text",{attrs:{"elevation-2":""}},[e._v("\n                            Orden de Selecion: "),n("span",{staticClass:"red--text text--darken-4"},[n("v-icon",[e._v("mdi-information-variant")]),e._v(" Seleccione Cliente,\n                            "),n("v-icon",[e._v("mdi-information-variant")]),e._v(" Seleccione Moneda de Remesa,\n                            "),n("v-icon",[e._v("mdi-information-variant")]),e._v(" Luego El Banco donde Deposito,\n                            "),n("v-icon",[e._v("mdi-information-variant")]),e._v(" Inserte el monto de Remesa y\n                            "),n("v-icon",[e._v("mdi-information-variant")]),e._v(" Luego agrege los datos del (Los) Beneficiario(s). ")],1)])],1),e._v(" "),n("v-col",{attrs:{cols:"2",md:"6"}},[n("v-autocomplete",{attrs:{"prepend-icon":"mdi-account",clearable:"",items:e.customers,loading:e.loadingCustomers,"item-text":"name","item-value":"id",label:"Buscar Cliente"},model:{value:e.pay.customer_id,callback:function(t){e.$set(e.pay,"customer_id",t)},expression:"pay.customer_id"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-select",{attrs:{items:e.prices,"menu-props":"auto",label:"Seleccione una Moneda","hide-details":"","prepend-icon":"mdi-map","single-line":"","return-object":""},on:{change:function(t){return e.setPrice(e.price)}},scopedSlots:e._u([{key:"selection",fn:function(t){var n=t.item;return[e._v("\n                                "+e._s(n.amount_formated)+" "+e._s(n.iso)+"\n                            ")]}},{key:"item",fn:function(t){var n=t.item;return[e._v("\n                                "+e._s(n.amount_formated)+" "+e._s(n.iso)+"\n                            ")]}}]),model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-select",{attrs:{items:e.banks,"menu-props":"auto",label:"Seleccione un Banco","hide-details":"","item-value":"id",disabled:e.bankDisabled,"prepend-icon":"mdi-bank-check","single-line":""},scopedSlots:e._u([{key:"selection",fn:function(t){var n=t.item;return[e._v("\n                                "+e._s(n.bank_name)+" "+e._s(n.account_code)+"\n                            ")]}},{key:"item",fn:function(t){var n=t.item;return[e._v("\n                                "+e._s(n.bank_name)+" "+e._s(n.account_code)+"\n                            ")]}}]),model:{value:e.pay.bank_id,callback:function(t){e.$set(e.pay,"bank_id",t)},expression:"pay.bank_id"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{label:"Numero de Operacion",type:"text",required:"",outlined:"",clearable:"",dense:"",color:"deep-purple","prepend-icon":"mdi-numeric"},model:{value:e.pay.operation_code,callback:function(t){e.$set(e.pay,"operation_code",t)},expression:"pay.operation_code"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("money",{attrs:{color:"deep-purple",label:"Insertar Monto",outlined:e.pmoney.outlined,clearable:!0,dense:e.pmoney.outlined,placeholder:e.pmoney.placeholder,readonly:e.pmoney.readonly,disabled:e.disable_pay,valueWhenIsEmpty:e.pmoney.valueWhenIsEmpty,options:e.pmoney.options,properties:e.pmoney.properties,"prepend-outer-icon":"mdi-bank-plus"},on:{"update:options":function(t){return e.$set(e.pmoney,"options",t)},input:function(t){return e.setRemaining()}},model:{value:e.pay.pay,callback:function(t){e.$set(e.pay,"pay",t)},expression:"pay.pay"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("money",{attrs:{color:"deep-purple",label:"Restante en Bs",outlined:e.vmoney.outlined,clearable:!0,dense:e.vmoney.outlined,placeholder:e.remaining_text,readonly:!0,disabled:!0,valueWhenIsEmpty:e.vmoney.valueWhenIsEmpty,options:e.vmoney.options,properties:e.vmoney.properties,"prepend-outer-icon":"mdi-cash-plus"},on:{"update:options":function(t){return e.$set(e.vmoney,"options",t)}},model:{value:e.remaining,callback:function(t){e.remaining=t},expression:"remaining"}})],1),e._v(" "),n("v-banner",[e._v("\n                        Carga tus pagos en la lista y guardalos\n                            "),n("v-btn",{attrs:{"elevation-5":"",color:"deep-purple accent-4"},on:{click:function(t){return e.openDialog()}}},[e._v("\n                                Agregar Remesa\n                            ")]),e._v(" "),n("money",{attrs:{color:"deep-purple",label:"Total en Bs",outlined:e.vmoney.outlined,clearable:!0,dense:e.vmoney.outlined,placeholder:"Total Calculado",readonly:!0,disabled:!0,valueWhenIsEmpty:e.vmoney.valueWhenIsEmpty,options:e.vmoney.options,properties:e.vmoney.properties,"prepend-outer-icon":"mdi-cash-plus"},on:{"update:options":function(t){return e.$set(e.vmoney,"options",t)}},model:{value:e.total_pay,callback:function(t){e.total_pay=t},expression:"total_pay"}})],1)],1),e._v(" "),n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:e.receivers,expression:"receivers"}]},[n("v-simple-table",{attrs:{"fixed-header":""},scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-center"},[e._v("Eliminar")]),e._v(" "),n("th",{staticClass:"text-left"},[e._v("\n                                        Nombre\n                                    ")]),e._v(" "),n("th",{staticClass:"text-left"},[e._v("\n                                        C.I/D.N.I.\n                                    ")]),e._v(" "),n("th",{staticClass:"text-left"},[e._v("\n                                        Banco\n                                    ")]),e._v(" "),n("th",{staticClass:"text-left"},[e._v("\n                                        Cuenta\n                                    ")]),e._v(" "),n("th",{staticClass:"text-center"},[e._v("\n                                        Monto\n                                    ")]),e._v(" "),n("th",[e._v("Acciones")])])]),e._v(" "),n("tbody",e._l(e.receivers,(function(t,a){return n("tr",{key:t.name},[n("td",{staticClass:"text-center"},[n("v-icon",{attrs:{size:"40",color:"red"},on:{click:function(n){return e.deleteReceiver(a,t)}}},[e._v("mdi-delete-forever-outline")])],1),e._v(" "),n("td",[e._v(e._s(t.name))]),e._v(" "),n("td",[e._v(e._s(t.dni))]),e._v(" "),n("td",[e._v(e._s(t.bank_name))]),e._v(" "),n("td",[e._v(e._s(t.bank_account))]),e._v(" "),n("td",[e._v(e._s(e.moneyFormat(t.amount)))])])})),0)]},proxy:!0}])})],1),e._v(" "),n("v-card-actions",{directives:[{name:"show",rawName:"v-show",value:e.receivers,expression:"receivers"}]},[n("router-link",{attrs:{to:{name:"payments"}}},[n("v-btn",{attrs:{medium:"",filled:"","elevation-4":""}},[e._v(" Cancelar")])],1),e._v(" "),n("v-btn",{attrs:{medium:"",outlined:"","elevation-4":"",color:"orange darken-4",loading:e.saving,disabled:e.registerDisabled,right:""},on:{click:function(t){return e.createPay()}}},[e._v("Registrar\n                    ")])],1)],1)],1)],1),e._v(" "),n("div",[n("v-row",[n("v-dialog",{attrs:{width:e.width,"hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",{attrs:{tile:""}},[n("v-toolbar",{attrs:{flat:"",dark:"",color:"orange darken-4"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[n("v-icon",[e._v("mdi-close")])],1),e._v(" "),n("v-toolbar-title",[e._v("Agregar Pago")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{text:"",outlined:"","elevation-4":""},on:{click:function(t){return e.addReceiver(e.receiver)}}},[e._v("\n                                Agregar Cuenta\n                            ")]),e._v(" "),n("money",{attrs:{color:"deep-purple",label:"Restante en Bs",outlined:e.vmoney.outlined,clearable:!0,dense:e.vmoney.outlined,placeholder:e.remaining_text,readonly:!0,disabled:!0,valueWhenIsEmpty:e.vmoney.valueWhenIsEmpty,options:e.vmoney.options,properties:e.vmoney.properties,"prepend-outer-icon":"mdi-cash-plus"},on:{"update:options":function(t){return e.$set(e.vmoney,"options",t)}},model:{value:e.remaining,callback:function(t){e.remaining=t},expression:"remaining"}})],1)],1),e._v(" "),n("v-card-text",[n("v-row",{staticClass:"mx-2"},[n("v-col",{staticClass:"pt-0 pl-0",attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Introduzca Nombre Completo de Quien recibe",type:"text",required:"",outlined:"",clearable:"",dense:"",color:"deep-purple","prepend-outer-icon":"mdi-account"},model:{value:e.receiver.name,callback:function(t){e.$set(e.receiver,"name",t)},expression:"receiver.name"}})],1),e._v(" "),n("v-col",{staticClass:"pt-0 pl-0",attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Introduzca Cedula",type:"text",required:"",outlined:"",clearable:"",dense:"",color:"deep-purple","prepend-outer-icon":"mdi-account"},model:{value:e.receiver.dni,callback:function(t){e.$set(e.receiver,"dni",t)},expression:"receiver.dni"}})],1),e._v(" "),n("v-col",{staticClass:"pt-0 pl-0",attrs:{cols:"12"}},[n("v-text-field",{attrs:{type:"text",color:"deep-purple",label:"Insertar Cuenta Beneficiaria ",outlined:"",clearable:"",dense:"",min:"20",max:"20",counter:"20","prepend-outer-icon":"mdi-bank-plus"},model:{value:e.receiver.bank_account,callback:function(t){e.$set(e.receiver,"bank_account",t)},expression:"receiver.bank_account"}})],1),e._v(" "),n("v-col",{staticClass:"pt-0 pl-0",attrs:{cols:"12"}},[n("v-text-field",{attrs:{type:"text",color:"deep-purple",label:"Insertar Nombre del Banco",outlined:"",clearable:"",dense:"","prepend-outer-icon":"mdi-bank-plus"},model:{value:e.receiver.bank_name,callback:function(t){e.$set(e.receiver,"bank_name",t)},expression:"receiver.bank_name"}})],1),e._v(" "),n("v-col",{staticClass:"pt-0 pl-0",attrs:{cols:"12"}},[n("money",{attrs:{color:"deep-purple",label:"Insertar Monto",outlined:e.vmoney.outlined,clearable:!0,dense:e.vmoney.outlined,placeholder:e.vmoney.placeholder,readonly:e.vmoney.readonly,disabled:e.vmoney.disabled,valueWhenIsEmpty:e.vmoney.valueWhenIsEmpty,options:e.vmoney.options,properties:e.vmoney.properties,"prepend-outer-icon":"mdi-bank-plus"},model:{value:e.receiver.amount,callback:function(t){e.$set(e.receiver,"amount",t)},expression:"receiver.amount"}})],1)],1),e._v(" "),n("v-divider")],1),e._v(" "),n("div",{staticStyle:{flex:"1 1 auto"}}),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{outlined:"",color:"orange darken-4","elevation-4":""},on:{click:function(t){return e.addReceiver(e.receiver)}}},[e._v("\n                            Agregar Cuenta\n                        ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=i.exports},32:function(e,t,n){var a=n(76);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(a,o);a.locals&&(e.exports=a.locals)},75:function(e,t,n){"use strict";n(32)},76:function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".v-col,.v-stepper--vertical .v-stepper__content{padding-top:0}",""])}}]);