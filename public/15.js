(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{223:function(e,t,r){"use strict";r.r(t);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],o=!0,n=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(o=(s=i.next()).done)&&(r.push(s.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{o||null==i.return||i.return()}finally{if(n)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var a={data:function(){return{isValid:!0,dni:"",email:"",phone:"",menu:!1,date:"",max_date:"",customer:{password:"",birthdate:null},dialog_title:"",checkInEmail:!1,countries:[],step:1,turn:0,saving:!1,min:"",eCustomer:0,errListC:[],passwordRules:{required:function(e){return!!e||"Campo Requerido."},min:function(e){return e.length>=8||"Min 8 caracteres entre letras y numeros"}},emailRules:[function(e){return!!e||"Email es Requerido"},function(e){return/^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"E-mail debe ser valido"}]}},watch:{menu:function(e){var t=this;e&&setTimeout((function(){return t.$refs.picker.activePicker="YEAR"}))}},computed:{computedDate:function(){return this.formatDate(this.customer.birthdate)},checkEqual:function(){return this.customer.password===this.customer.password_confirmation||"Las Contraseñas deben Coincidir"}},methods:{setDate:function(){var e=new Date;e=e.setFullYear(e.getFullYear()-16),this.max_date=new Date(e).toISOString().substr(0,10)},formatDate:function(e){if(!e)return null;var t=o(e.split("-"),3),r=t[0],n=t[1],a=t[2];return"".concat(a,"/").concat(n,"/").concat(r)},parseDate:function(e){if(!e)return null;var t=o(e.split("/"),3),r=t[0],n=t[1],a=t[2];return"".concat(a,"-").concat(r.padStart(2,"0"),"-").concat(n.padStart(2,"0"))},save:function(e){this.$refs.menu.save(e)},getCountries:function(){var e=this;axios.get("/api/countries").then((function(t){e.countries=t.data.countries})).catch((function(e){console.log(e)}))},createCustomer:function(){var e=this;e.validateCustomer()||(e.saving=!0,axios.post("/api/customers/store",e.customer).then((function(t){Swal.fire({position:"top-end",icon:"success",title:"".concat(t.data.message),timer:3e3}),e.$router.push({name:"customers"})})).catch((function(t){if(422==t.response.status){for(var r="",o=t.response.data.errors,n=0,a=Object.keys(o);n<a.length;n++){r=r+". "+o[a[n]].flat()}e.alert(4,r)}})).finally((function(){return e.saving=!1})))},validateCustomer:function(){var e=this;return e.eCustomer=0,e.errListC=[],e.customer.name||e.errListC.push("Por favor ingrese nombre completo"),e.customer.email||e.errListC.push("Ingrese un email valido"),e.email&&e.errListC.push("E-mail Registrado, por favor introduzca otro"),e.customer.phone||e.errListC.push("Ingrese numero de Telefono"),e.customer.password||e.errListC.push("Ingrese Contraseña"),e.customer.password_confirmation||e.errListC.push("Ingrese Contraseña de confirmación "),e.customer.password!=e.customer.password_confirmation&&e.errListC.push("Las Contraseñas no Coinciden"),e.errListC.length&&(e.eCustomer=1),e.errListC.length>=1&&Swal.fire({title:"Falta(n) Datos",icon:"error",confirmButtonText:"Aceptar!",confirmButtonColor:"#3085d6",html:"".concat(e.errListC.map((function(e){return'<br><span class="mb-3"><i class="mdi-close-circle-outline mr-3"></i> '.concat(e,"</span>")}))),showCancelButton:!1}),e.eCustomer},vEmail:function(e){var t=this;t.checkInEmail=!0,axios.get("/api/auth/email-verify/"+e).then((function(e){t.email=e.data.email})).catch((function(e){return console.log(e)})).finally((function(){return t.checkInEmail=!1}))},vDni:function(e){var t=this;axios.get("/api/customers/dni-verify/"+e).then((function(e){t.dni=e.data.dni})).catch((function(e){return console.log(e)}))},vPhone:function(e){var t=this;axios.get("/api/customers/phone-verify/"+e).then((function(e){t.phone=e.data.phone})).catch((function(e){return console.log(e)}))},valpass:function(){this.min=this.customer.password.length},alert:function(e,t){this.$refs.Alerts.showAlert(e,t)}},mounted:function(){this.setDate()}},s=(r(76),r(0)),i=Object(s.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},[r("v-container",[r("v-flex",{attrs:{xs6:""}},[r("v-subheader",{staticClass:"display-1"},[e._v("Registrar Cliente")])],1),e._v(" "),r("v-card",[r("alerts",{ref:"Alerts"}),e._v(" "),r("v-card-text",[r("v-form",{model:{value:e.isValid,callback:function(t){e.isValid=t},expression:"isValid"}},[r("v-row",{staticClass:"mx-2"},[r("v-col",{staticClass:"pt-5 pt-xs-0 pl-0",attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Introduzca Nombre Completo",type:"text",rules:[function(e){return!!e||"Nombre Completo es Requerido"}],outlined:"",clearable:"",dense:"",color:"deep-purple","prepend-outer-icon":"mdi-account"},model:{value:e.customer.name,callback:function(t){e.$set(e.customer,"name",t)},expression:"customer.name"}})],1),e._v(" "),r("v-col",{staticClass:"pt-5 pt-xs-0 pl-0",attrs:{cols:"12",md:"4"}},[r("span",{directives:[{name:"show",rawName:"v-show",value:e.email,expression:"email"}],staticStyle:{color:"red"}},[e._v("Ya en Uso, Inserte Otro")]),e._v(" "),r("v-text-field",{attrs:{type:"text",color:"deep-purple",label:"Insertar Mail",outlined:"",clearable:"",rules:[e.emailRules.required,e.emailRules.valid,e.emailAvailable],dense:"","prepend-outer-icon":"mdi-email-lock",loading:e.checkInEmail,disabled:e.checkInEmail},on:{change:function(t){return e.vEmail(e.customer.email)}},model:{value:e.customer.email,callback:function(t){e.$set(e.customer,"email",t)},expression:"customer.email"}})],1),e._v(" "),r("v-col",{staticClass:"pt-0 pl-0",attrs:{cols:"12",md:"4"}},[r("span",{directives:[{name:"show",rawName:"v-show",value:e.phone,expression:"phone"}],staticStyle:{color:"red"}},[e._v("Inserte otro, Este se Encuentra en uso!")]),e._v(" "),r("v-text-field",{attrs:{type:"text",label:"Numero de Telefono Valido",color:"deep-purple",outlined:"",rules:[function(e){return!!e||"Telefono es Requerido"}],dense:"",clearable:"","prepend-outer-icon":"mdi-card-account-phone-outline"},on:{change:function(t){return e.vPhone(e.customer.phone)}},model:{value:e.customer.phone,callback:function(t){e.$set(e.customer,"phone",t)},expression:"customer.phone"}})],1),e._v(" "),r("v-col",{staticClass:"pt-0 pl-0",attrs:{cols:"12",md:"4"}},[r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,n=t.attrs;return[r("v-text-field",e._g(e._b({attrs:{label:"Fecha de Nacimiento","prepend-outer-icon":"mdi-cake-variant",readonly:"",outlined:"",dense:"",clearable:""},model:{value:e.computedDate,callback:function(t){e.computedDate=t},expression:"computedDate"}},"v-text-field",n,!1),o))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),r("v-date-picker",{ref:"picker",attrs:{max:e.max_date,min:"1950-01-01"},on:{change:e.save},model:{value:e.customer.birthdate,callback:function(t){e.$set(e.customer,"birthdate",t)},expression:"customer.birthdate"}})],1)],1),e._v(" "),r("v-col",{staticClass:"pt-0 pl-0",attrs:{cols:"12",md:"6"}},[r("v-textarea",{attrs:{rows:"1","auto-grow":"",color:"deep-purple",label:"Acerca del Cliente",outlined:"",dense:"",clearable:"","prepend-outer-icon":"mdi-book-information-variant"},model:{value:e.customer.notes,callback:function(t){e.$set(e.customer,"notes",t)},expression:"customer.notes"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-row",{staticClass:"mr-0",attrs:{align:"center"}},[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{type:"password",placeholder:"Contraseña",label:"CONTRASEÑA",color:"deep-purple",outlined:"",rules:[e.passwordRules.required,e.passwordRules.min,e.checkEqual],dense:"",clearable:"","prepend-outer-icon":"mdi-lock-open-check-outline"},on:{input:function(t){return e.valpass()}},model:{value:e.customer.password,callback:function(t){e.$set(e.customer,"password",t)},expression:"customer.password"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{type:"password",placeholder:"Instroduzcala de nuevo",label:"Repita su Contraseña",color:"deep-purple",outlined:"",rules:[e.passwordRules.required,e.passwordRules.min,e.checkEqual],dense:"",clearable:"","prepend-outer-icon":"mdi-lock-open-check-outline"},model:{value:e.customer.password_confirmation,callback:function(t){e.$set(e.customer,"password_confirmation",t)},expression:"customer.password_confirmation"}})],1)],1)],1)],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{to:{name:"customers"},text:""}},[e._v(" Cancelar")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",loading:e.saving,right:"",disabled:!e.isValid},on:{click:function(t){return e.createCustomer(e.customer)}}},[e._v("Registrar\n                    ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=i.exports},33:function(e,t,r){var o=r(77);"string"==typeof o&&(o=[[e.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(4)(o,n);o.locals&&(e.exports=o.locals)},76:function(e,t,r){"use strict";r(33)},77:function(e,t,r){(e.exports=r(3)(!1)).push([e.i,".v-col,.v-stepper--vertical .v-stepper__content{padding-top:0}",""])}}]);