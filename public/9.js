(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/payments/Create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/payments/Create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import apis from '../../helpers/customer.js'
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pay: {},
      detail_pay: [],
      prices: [],
      dialog_title: 'Agregar datos de cuenta',
      banks: [],
      receivers: [],
      receiver: {},
      total_pay: 0.0,
      remaining: 0.0,
      remaining_text: 'Restante',
      step: 1,
      turn: 0,
      loadingCustomers: false,
      saving: false,
      min: '',
      dialog: false,
      valid_modal: false,
      disable_pay: true,
      emodal: 0,
      emodalList: [],
      epay: 0,
      epayList: [],
      price: {},
      amount_paied: 0.0,
      modalRules: [],
      bankDisabled: true,
      registerDisabled: false,
      customers: [],
      customer: {},
      pmoney: {
        value: "",
        placeholder: "Ingrese Monto depositado",
        readonly: false,
        disabled: false,
        outlined: true,
        clearable: true,
        valueWhenIsEmpty: "",
        options: {
          locale: "en-US",
          prefix: "",
          currency: "USD",
          suffix: "",
          length: 20,
          precision: 2
        },
        properties: {
          hint: "Ingrese Monto" // You can add other v-text-field properties, here.

        }
      },
      vmoney: {
        value: "0.00",
        placeholder: " ",
        readonly: false,
        disabled: false,
        outlined: true,
        clearable: true,
        valueWhenIsEmpty: "",
        options: {
          locale: "es-Ve",
          prefix: "",
          currency: "VES",
          suffix: "",
          length: 20,
          precision: 2
        },
        properties: {
          hint: "Ingrese Monto" // You can add other v-text-field properties, here.

        }
      }
    };
  },
  computed: {
    width: function width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '100%';

        case 'sm':
          return '70%';

        case 'md':
          return '30%';

        case 'lg':
          return '30%';

        case 'xl':
          return '30%';
      }
    },
    register: function register() {
      var me = this;

      if (me.pay.amount) {
        if (me.receivers.length) {}
      }
    }
  },
  methods: {
    getPrices: function getPrices() {
      var me = this;
      axios.get('/api/prices').then(function (res) {
        me.prices = res.data.prices;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getCustomers: function getCustomers() {
      var me = this;
      me.loadingCustomers = true;
      axios.get('/api/customers/all').then(function (res) {
        me.customers = res.data.customers;
        me.bankDisabled = false;
      })["catch"](function (err) {
        console.log(err);
      })["finally"](function () {
        return me.loadingCustomers = false;
      });
    },
    getBanks: function getBanks(data) {
      var me = this;
      axios.get('/api/banks/by-currency/' + data).then(function (res) {
        me.banks = res.data.banks;
        me.bankDisabled = false;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    setPrice: function setPrice(data) {
      var me = this;
      me.bankDisabled = true;
      me.pay.price_rate = data.amount;
      me.disable_pay = false;
      me.pay.pay_iso = data.iso;
      me.pay.currency_id = data.currency_id;
      me.pmoney.options.currency = data.iso;
      me.pmoney.options.locale = data.locale;
      me.getBanks(data.currency_id);
    },
    addReceiver: function addReceiver(data) {
      var me = this;

      if (me.validateReceiver()) {
        return;
      }

      ;

      if (me.find(data.bank_account)) {
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: 'Cuenta ya agregada!.',
          footer: 'Guardar pago o Seguir Agregando?.'
        });
      } else {
        me.receivers.push({
          bank_account: data.bank_account,
          bank_name: data.bank_name,
          name: data.name,
          dni: data.dni,
          amount: data.amount,
          description: ''
        });
        me.decreaseRemaining(data.amount);
        me.closeDialog();
      }
    },
    createPay: function createPay() {
      var me = this;
      me.pay.detail_pay = me.receivers;
      console.log(me.pay);

      if (me.validatePay()) {
        return;
      }

      me.saving = true;
      axios.post('/api/payments/store', me.pay).then(function (response) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: "".concat(response.data.message),
          timer: 3000
        });
        me.$router.push({
          name: 'payments'
        });
      })["catch"](function (error) {
        if (error.response.status == 422) {
          var data = '';
          var errors = error.response.data.errors;

          for (var _i = 0, _Object$keys = Object.keys(errors); _i < _Object$keys.length; _i++) {
            var field = _Object$keys[_i];
            data = data + '. ' + errors[field].flat();
          }

          me.alert(4, data);
        }
      })["finally"](function () {
        return me.saving = false;
      });
    },
    validatePay: function validatePay() {
      var me = this;
      me.epay = 0;
      me.epayList = [];
      if (!me.pay.price_rate) me.epayList.push("Seleccione Moneda de Remesa.");
      if (!me.pay.bank_id) me.epayList.push("Seleccione un Banco");
      if (!me.pay.pay) me.epayList.push("Se necesita el Monto Depositado.");
      if (me.remaining > 0) me.epayList.push("Asigne el monto Calculado a algún Beneficiario.");
      if (me.pay.detail_pay.length == 0) me.epayList.push("Ingrese algún Beneficiario.");
      if (me.epayList.length) me.epay = 1;

      if (me.epayList.length >= 1) {
        Sfire.validateF(me.epayList);
      }

      ;
      return me.epay;
    },
    validateReceiver: function validateReceiver() {
      var me = this;
      me.emodal = 0;
      me.emodalList = [];
      if (!me.receiver.amount) me.emodalList.push("Ingrese un Monto");
      if (me.receiver.amount > me.reminder) me.emodalList.push("Monto superior a su total disponible");
      if (!me.receiver.bank_account) me.emodalList.push("Ingrese Cuenta");
      if (!me.receiver.name) me.emodalList.push("Ingrese Nombre de Beneficiario");
      if (!me.receiver.dni) me.emodalList.push("Ingrese C.i. del Beneficiario");
      if (me.emodalList.length) me.emodal = 1;

      if (me.emodalList.length >= 1) {
        Sfire.validateF(me.emodalList);
      }

      return me.emodal;
    },
    find: function find(account) {
      var src = 0;

      if (this.receivers) {
        src = this.receivers.some(function (pay) {
          return pay.bank_account == account;
        });
      }

      return src;
    },
    deleteReceiver: function deleteReceiver(index, r) {
      // let rec = this.receivers.find(cur => {
      //     return cur.bank_account == r.bank_account
      // });
      var rec = this.receivers.splice(index, 1);
      console.log(rec);
      this.increaseReaming(rec[0]['amount']);
    },
    openDialog: function openDialog() {
      var me = this;
      me.dialog = true;
      me.receiver.amount = me.remaining;
    },
    clearDialog: function clearDialog() {
      var me = this;
      me.receiver = {};
    },
    closeDialog: function closeDialog() {
      var me = this;
      me.receiver = {};
      me.dialog = false;
    },
    setRemaining: function setRemaining() {
      this.total_pay = this.pay.pay * this.pay.price_rate;
      this.remaining = this.pay.pay * this.pay.price_rate;
    },
    decreaseRemaining: function decreaseRemaining(amount) {
      this.remaining = this.remaining - amount;
    },
    increaseReaming: function increaseReaming(amount) {
      this.remaining += parseFloat(amount);
    },
    moneyFormat: function moneyFormat(data) {
      return Sfire.moneyFormatF(data);
    }
  },
  mounted: function mounted() {
    // this.getBanks();
    this.getPrices();
    this.getCustomers();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/payments/Create.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/payments/Create.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-col {\n    padding-top: 0;\n}\n.v-stepper--vertical .v-stepper__content {\n    padding-top: 0px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/payments/Create.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/payments/Create.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/payments/Create.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/payments/Create.vue?vue&type=template&id=481e9754&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/payments/Create.vue?vue&type=template&id=481e9754& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { attrs: { row: "", wrap: "" } },
    [
      _c(
        "v-container",
        { attrs: { id: "regular-tables", fluid: "", tag: "section" } },
        [
          _c(
            "base-material-card",
            {
              staticClass: "px-5 py-3",
              attrs: { icon: "mdi-file-plus-outline", title: "Nuevo Pago" }
            },
            [
              _c(
                "v-card",
                { attrs: { height: "100%" } },
                [
                  _c(
                    "v-row",
                    { staticClass: "mx-2" },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-card-text", { attrs: { "elevation-2": "" } }, [
                            _vm._v(
                              "\n                            Orden de Selecion: "
                            ),
                            _c(
                              "span",
                              { staticClass: "red--text text--darken-4" },
                              [
                                _c("v-icon", [
                                  _vm._v("mdi-information-variant")
                                ]),
                                _vm._v(
                                  " Seleccione Cliente,\n                            "
                                ),
                                _c("v-icon", [
                                  _vm._v("mdi-information-variant")
                                ]),
                                _vm._v(
                                  " Seleccione Moneda de Remesa,\n                            "
                                ),
                                _c("v-icon", [
                                  _vm._v("mdi-information-variant")
                                ]),
                                _vm._v(
                                  " Luego El Banco donde Deposito,\n                            "
                                ),
                                _c("v-icon", [
                                  _vm._v("mdi-information-variant")
                                ]),
                                _vm._v(
                                  " Inserte el monto de Remesa y\n                            "
                                ),
                                _c("v-icon", [
                                  _vm._v("mdi-information-variant")
                                ]),
                                _vm._v(
                                  " Luego agrege los datos del (Los) Beneficiario(s). "
                                )
                              ],
                              1
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "2", md: "6" } },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              "prepend-icon": "mdi-account",
                              clearable: "",
                              items: _vm.customers,
                              loading: _vm.loadingCustomers,
                              "item-text": "name",
                              "item-value": "id",
                              label: "Buscar Cliente"
                            },
                            model: {
                              value: _vm.pay.customer_id,
                              callback: function($$v) {
                                _vm.$set(_vm.pay, "customer_id", $$v)
                              },
                              expression: "pay.customer_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.prices,
                              "menu-props": "auto",
                              label: "Seleccione una Moneda",
                              "hide-details": "",
                              "prepend-icon": "mdi-map",
                              "single-line": "",
                              "return-object": ""
                            },
                            on: {
                              change: function($event) {
                                return _vm.setPrice(_vm.price)
                              }
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "selection",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.amount_formated) +
                                        " " +
                                        _vm._s(item.iso) +
                                        "\n                            "
                                    )
                                  ]
                                }
                              },
                              {
                                key: "item",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.amount_formated) +
                                        " " +
                                        _vm._s(item.iso) +
                                        "\n                            "
                                    )
                                  ]
                                }
                              }
                            ]),
                            model: {
                              value: _vm.price,
                              callback: function($$v) {
                                _vm.price = $$v
                              },
                              expression: "price"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.banks,
                              "menu-props": "auto",
                              label: "Seleccione un Banco",
                              "hide-details": "",
                              "item-value": "id",
                              disabled: _vm.bankDisabled,
                              "prepend-icon": "mdi-bank-check",
                              "single-line": ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "selection",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.bank_name) +
                                        " " +
                                        _vm._s(item.account_code) +
                                        "\n                            "
                                    )
                                  ]
                                }
                              },
                              {
                                key: "item",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.bank_name) +
                                        " " +
                                        _vm._s(item.account_code) +
                                        "\n                            "
                                    )
                                  ]
                                }
                              }
                            ]),
                            model: {
                              value: _vm.pay.bank_id,
                              callback: function($$v) {
                                _vm.$set(_vm.pay, "bank_id", $$v)
                              },
                              expression: "pay.bank_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Numero de Operacion",
                              type: "text",
                              required: "",
                              outlined: "",
                              clearable: "",
                              dense: "",
                              color: "deep-purple",
                              "prepend-icon": "mdi-numeric"
                            },
                            model: {
                              value: _vm.pay.operation_code,
                              callback: function($$v) {
                                _vm.$set(_vm.pay, "operation_code", $$v)
                              },
                              expression: "pay.operation_code"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("money", {
                            attrs: {
                              color: "deep-purple",
                              label: "Insertar Monto",
                              outlined: _vm.pmoney.outlined,
                              clearable: true,
                              dense: _vm.pmoney.outlined,
                              placeholder: _vm.pmoney.placeholder,
                              readonly: _vm.pmoney.readonly,
                              disabled: _vm.disable_pay,
                              valueWhenIsEmpty: _vm.pmoney.valueWhenIsEmpty,
                              options: _vm.pmoney.options,
                              properties: _vm.pmoney.properties,
                              "prepend-outer-icon": "mdi-bank-plus"
                            },
                            on: {
                              "update:options": function($event) {
                                return _vm.$set(_vm.pmoney, "options", $event)
                              },
                              input: function($event) {
                                return _vm.setRemaining()
                              }
                            },
                            model: {
                              value: _vm.pay.pay,
                              callback: function($$v) {
                                _vm.$set(_vm.pay, "pay", $$v)
                              },
                              expression: "pay.pay"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("money", {
                            attrs: {
                              color: "deep-purple",
                              label: "Restante en Bs",
                              outlined: _vm.vmoney.outlined,
                              clearable: true,
                              dense: _vm.vmoney.outlined,
                              placeholder: _vm.remaining_text,
                              readonly: true,
                              disabled: true,
                              valueWhenIsEmpty: _vm.vmoney.valueWhenIsEmpty,
                              options: _vm.vmoney.options,
                              properties: _vm.vmoney.properties,
                              "prepend-outer-icon": "mdi-cash-plus"
                            },
                            on: {
                              "update:options": function($event) {
                                return _vm.$set(_vm.vmoney, "options", $event)
                              }
                            },
                            model: {
                              value: _vm.remaining,
                              callback: function($$v) {
                                _vm.remaining = $$v
                              },
                              expression: "remaining"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-banner",
                        [
                          _vm._v(
                            "\n                        Carga tus pagos en la lista y guardalos\n                            "
                          ),
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                "elevation-5": "",
                                color: "deep-purple accent-4"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.openDialog()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                Agregar Remesa\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("money", {
                            attrs: {
                              color: "deep-purple",
                              label: "Total en Bs",
                              outlined: _vm.vmoney.outlined,
                              clearable: true,
                              dense: _vm.vmoney.outlined,
                              placeholder: "Total Calculado",
                              readonly: true,
                              disabled: true,
                              valueWhenIsEmpty: _vm.vmoney.valueWhenIsEmpty,
                              options: _vm.vmoney.options,
                              properties: _vm.vmoney.properties,
                              "prepend-outer-icon": "mdi-cash-plus"
                            },
                            on: {
                              "update:options": function($event) {
                                return _vm.$set(_vm.vmoney, "options", $event)
                              }
                            },
                            model: {
                              value: _vm.total_pay,
                              callback: function($$v) {
                                _vm.total_pay = $$v
                              },
                              expression: "total_pay"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.receivers,
                          expression: "receivers"
                        }
                      ]
                    },
                    [
                      _c("v-simple-table", {
                        attrs: { "fixed-header": "" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function() {
                              return [
                                _c("thead", [
                                  _c("tr", [
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v("Eliminar")
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v(
                                        "\n                                        Nombre\n                                    "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v(
                                        "\n                                        C.I/D.N.I.\n                                    "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v(
                                        "\n                                        Banco\n                                    "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v(
                                        "\n                                        Cuenta\n                                    "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v(
                                        "\n                                        Monto\n                                    "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Acciones")])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.receivers, function(r, index) {
                                    return _c("tr", { key: r.name }, [
                                      _c(
                                        "td",
                                        { staticClass: "text-center" },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              attrs: {
                                                size: "40",
                                                color: "red"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.deleteReceiver(
                                                    index,
                                                    r
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "mdi-delete-forever-outline"
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(r.name))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(r.dni))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(r.bank_name))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(r.bank_account))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(_vm.moneyFormat(r.amount))
                                        )
                                      ])
                                    ])
                                  }),
                                  0
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.receivers,
                          expression: "receivers"
                        }
                      ]
                    },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: { name: "payments" } } },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                medium: "",
                                filled: "",
                                "elevation-4": ""
                              }
                            },
                            [_vm._v(" Cancelar")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            medium: "",
                            outlined: "",
                            "elevation-4": "",
                            color: "orange darken-4",
                            loading: _vm.saving,
                            disabled: _vm.registerDisabled,
                            right: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.createPay()
                            }
                          }
                        },
                        [_vm._v("Registrar\n                    ")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "v-row",
            [
              _c(
                "v-dialog",
                {
                  attrs: {
                    width: _vm.width,
                    "hide-overlay": "",
                    transition: "dialog-bottom-transition",
                    scrollable: ""
                  },
                  model: {
                    value: _vm.dialog,
                    callback: function($$v) {
                      _vm.dialog = $$v
                    },
                    expression: "dialog"
                  }
                },
                [
                  _c(
                    "v-card",
                    { attrs: { tile: "" } },
                    [
                      _c(
                        "v-toolbar",
                        {
                          attrs: {
                            flat: "",
                            dark: "",
                            color: "orange darken-4"
                          }
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "", dark: "" },
                              on: {
                                click: function($event) {
                                  _vm.dialog = false
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-close")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-toolbar-title", [_vm._v("Agregar Pago")]),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-toolbar-items",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    text: "",
                                    outlined: "",
                                    "elevation-4": ""
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.addReceiver(_vm.receiver)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Agregar Cuenta\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("money", {
                                attrs: {
                                  color: "deep-purple",
                                  label: "Restante en Bs",
                                  outlined: _vm.vmoney.outlined,
                                  clearable: true,
                                  dense: _vm.vmoney.outlined,
                                  placeholder: _vm.remaining_text,
                                  readonly: true,
                                  disabled: true,
                                  valueWhenIsEmpty: _vm.vmoney.valueWhenIsEmpty,
                                  options: _vm.vmoney.options,
                                  properties: _vm.vmoney.properties,
                                  "prepend-outer-icon": "mdi-cash-plus"
                                },
                                on: {
                                  "update:options": function($event) {
                                    return _vm.$set(
                                      _vm.vmoney,
                                      "options",
                                      $event
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.remaining,
                                  callback: function($$v) {
                                    _vm.remaining = $$v
                                  },
                                  expression: "remaining"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            { staticClass: "mx-2" },
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "pt-0 pl-0",
                                  attrs: { cols: "12" }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label:
                                        "Introduzca Nombre Completo de Quien recibe",
                                      type: "text",
                                      required: "",
                                      outlined: "",
                                      clearable: "",
                                      dense: "",
                                      color: "deep-purple",
                                      "prepend-outer-icon": "mdi-account"
                                    },
                                    model: {
                                      value: _vm.receiver.name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.receiver, "name", $$v)
                                      },
                                      expression: "receiver.name"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "pt-0 pl-0",
                                  attrs: { cols: "12" }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Introduzca Cedula",
                                      type: "text",
                                      required: "",
                                      outlined: "",
                                      clearable: "",
                                      dense: "",
                                      color: "deep-purple",
                                      "prepend-outer-icon": "mdi-account"
                                    },
                                    model: {
                                      value: _vm.receiver.dni,
                                      callback: function($$v) {
                                        _vm.$set(_vm.receiver, "dni", $$v)
                                      },
                                      expression: "receiver.dni"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "pt-0 pl-0",
                                  attrs: { cols: "12" }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      type: "text",
                                      color: "deep-purple",
                                      label: "Insertar Cuenta Beneficiaria ",
                                      outlined: "",
                                      clearable: "",
                                      dense: "",
                                      min: "20",
                                      max: "20",
                                      counter: "20",
                                      "prepend-outer-icon": "mdi-bank-plus"
                                    },
                                    model: {
                                      value: _vm.receiver.bank_account,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.receiver,
                                          "bank_account",
                                          $$v
                                        )
                                      },
                                      expression: "receiver.bank_account"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "pt-0 pl-0",
                                  attrs: { cols: "12" }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      type: "text",
                                      color: "deep-purple",
                                      label: "Insertar Nombre del Banco",
                                      outlined: "",
                                      clearable: "",
                                      dense: "",
                                      "prepend-outer-icon": "mdi-bank-plus"
                                    },
                                    model: {
                                      value: _vm.receiver.bank_name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.receiver, "bank_name", $$v)
                                      },
                                      expression: "receiver.bank_name"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "pt-0 pl-0",
                                  attrs: { cols: "12" }
                                },
                                [
                                  _c("money", {
                                    attrs: {
                                      color: "deep-purple",
                                      label: "Insertar Monto",
                                      outlined: _vm.vmoney.outlined,
                                      clearable: true,
                                      dense: _vm.vmoney.outlined,
                                      placeholder: _vm.vmoney.placeholder,
                                      readonly: _vm.vmoney.readonly,
                                      disabled: _vm.vmoney.disabled,
                                      valueWhenIsEmpty:
                                        _vm.vmoney.valueWhenIsEmpty,
                                      options: _vm.vmoney.options,
                                      properties: _vm.vmoney.properties,
                                      "prepend-outer-icon": "mdi-bank-plus"
                                    },
                                    model: {
                                      value: _vm.receiver.amount,
                                      callback: function($$v) {
                                        _vm.$set(_vm.receiver, "amount", $$v)
                                      },
                                      expression: "receiver.amount"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticStyle: { flex: "1 1 auto" } }),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                outlined: "",
                                color: "orange darken-4",
                                "elevation-4": ""
                              },
                              on: {
                                click: function($event) {
                                  return _vm.addReceiver(_vm.receiver)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Agregar Cuenta\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/dashboard/payments/Create.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/dashboard/payments/Create.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_481e9754___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=481e9754& */ "./resources/js/views/dashboard/payments/Create.vue?vue&type=template&id=481e9754&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/payments/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/dashboard/payments/Create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_481e9754___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_481e9754___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/payments/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/payments/Create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/dashboard/payments/Create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/payments/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/payments/Create.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/dashboard/payments/Create.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/payments/Create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/dashboard/payments/Create.vue?vue&type=template&id=481e9754&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/payments/Create.vue?vue&type=template&id=481e9754& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_481e9754___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=481e9754& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/payments/Create.vue?vue&type=template&id=481e9754&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_481e9754___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_481e9754___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);