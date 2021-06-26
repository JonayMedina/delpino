(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/price/Currencies.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/price/Currencies.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      currencies: [],
      currency: {},
      loading: false,
      search: '',
      dialog_title: '',
      dialog: false,
      dialog_type: 1,
      saving: '',
      headers: [{
        text: 'Nombre de Moneda',
        align: 'right',
        value: 'name'
      }, {
        text: 'Codigo Iso',
        align: 'right',
        value: 'iso'
      }, {
        text: 'Simbolo',
        align: 'right',
        value: 'symbol'
      }, {
        text: 'Opciones',
        value: 'actions',
        sortable: false
      }]
    };
  },
  methods: {
    getCurrencies: function getCurrencies() {
      var me = this;
      axios.get('/api/currencies').then(function (res) {
        me.currencies = res.data.currencies;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    showDialog: function showDialog(type, currency) {
      var me = this;

      if (type == 1) {
        me.dialog_title = 'Guardar Monto';
        me.currency = {};
      } else {
        me.dialog_title = 'Actualizar Monto';
        me.currency = currency;
      }

      me.dialog = true;
    },
    createCurrency: function createCurrency() {
      var me = this;

      if (me.validateCurrency()) {
        return;
      }

      me.saving = true;
      axios.post('/api/currencies/store', me.currency).then(function (resp) {
        me.getCurrencies();
        me.closeDialog();
        me.alert(1, resp.data.message);
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
    updateCurrency: function updateCurrency() {
      var me = this;

      if (me.validateCurrency()) {
        return;
      }

      me.saving = true;
      axios.post('/api/currencies/update/' + me.currency.id, me.currency).then(function (resp) {
        me.getCurrencies();
        me.closeDialog();
        me.alert(1, resp.data.message);
      })["catch"](function (error) {
        if (error.response.status == 422) {
          var data = '';
          var errors = error.response.data.errors;

          for (var _i2 = 0, _Object$keys2 = Object.keys(errors); _i2 < _Object$keys2.length; _i2++) {
            var field = _Object$keys2[_i2];
            data = data + '. ' + errors[field].flat();
          }

          me.alert(4, data);
        }
      })["finally"](function () {
        return me.saving = false;
      });
      bank._method = 'put';
    },
    closeDialog: function closeDialog() {
      var me = this;
      me.dialog_title = 'Registrar Moneda';
      me.currency = {};
      me.dialog = false;
    },
    activeCurrency: function activeCurrency(id) {
      var me = this;
      var data = {
        url: "/api/currencies/activate/" + id,
        title: "Activar Moneda?",
        active: 1
      };
      Sfire.activeF(data).then(function (res) {
        me.getCurrencies();
        me.alert(1, res);
      })["catch"](function (error) {
        me.alert(4, error);
      });
    },
    desactiveCurrency: function desactiveCurrency(id) {
      var me = this;
      var data = {
        url: "/api/currencies/desactive/" + id,
        title: "Desactivar Moneda?",
        active: 0
      };
      Sfire.desactiveF(data).then(function (res) {
        me.getCurrencies();
        me.alert(1, res);
      })["catch"](function (error) {
        me.alert(4, error);
      });
    },
    deleteCurrency: function deleteCurrency(id) {
      var me = this;
      var data = {
        url: "/api/currencies/activate/" + id,
        title: "BORRAR Moneda?",
        active: 1
      };
      Sfire.activeS(data).then(function (res) {
        me.getCurrencies();
        me.alert(1, res);
      })["catch"](function (error) {
        me.alert(4, error);
      });
    },
    validateCurrency: function validateCurrency() {
      var me = this;
      me.errorSmsS = 0;
      me.errorSmsListS = [];
      if (!me.currency.name) me.errorSmsListS.push("Por favor Ingrese el nombre de la moneda");
      if (!me.currency.iso) me.errorSmsListS.push("Por favor Inserte Codigo ISO ejemplo 'USD, EUR, COP'");
      if (!me.currency.symbol) me.errPayL.push("Por favor Ingrese simbolo de la moneda ejemplo: ' €, $' ");
      if (me.errorSmsListS.length) me.errorSmsS = 1;

      if (me.errorSmsListS.length >= 1) {
        Swal.fire({
          title: 'Hey!! Nos falta(n) Datos',
          icon: 'info',
          confirmButtonText: 'Aceptar!',
          confirmButtonColor: '#3085d6',
          html: "".concat(me.errorSmsListS.map(function (er) {
            return "<br><span style=\"color:red;\" class=\"mb-3\"><i class=\"mdi mdi-minus-circle-outline mdi-spin mr-3\"></i> ".concat(er, "</span>");
          })),
          showCancelButton: false
        });
      }

      ;
      return me.errorSmsS;
    },
    alert: function alert(display, res) {
      this.$refs.Alerts.showAlert(display, res);
    }
  },
  mounted: function mounted() {
    this.getCurrencies();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/price/Currencies.vue?vue&type=template&id=2e89036f&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/price/Currencies.vue?vue&type=template&id=2e89036f& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    { attrs: { id: "currencies", fluid: "", tag: "section" } },
    [
      _c("base-v-component", {
        attrs: { heading: "Lisado de Monedas", link: "Monedas/listado" }
      }),
      _vm._v(" "),
      _c(
        "base-material-card",
        {
          staticClass: "px-3 py-2",
          attrs: { icon: "mdi-clipboard-text", title: "Tabla de Monedas" }
        },
        [
          _c("alerts", { ref: "Alerts" }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-center" },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "2" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { elevation: "5", icon: "", large: "" },
                          on: {
                            click: function($event) {
                              return _vm.showDialog(
                                (_vm.dialog_type = 1),
                                (_vm.currency = {})
                              )
                            }
                          }
                        },
                        [
                          _c("v-icon", { attrs: { color: "orange" } }, [
                            _vm._v("mdi-cash-plus")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          clearable: "",
                          color: "orange",
                          "append-icon": "mdi-image-search",
                          label: "Buscar Moneda",
                          "single-line": "",
                          "hide-details": ""
                        },
                        model: {
                          value: _vm.search,
                          callback: function($$v) {
                            _vm.search = $$v
                          },
                          expression: "search"
                        }
                      })
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
          _c("v-data-table", {
            staticClass: "elevation-2",
            attrs: {
              search: _vm.search,
              headers: _vm.headers,
              items: _vm.currencies,
              loading: "true",
              "items-per-page": 20
            },
            scopedSlots: _vm._u([
              {
                key: "item.actions",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c(
                      "v-btn",
                      {
                        staticClass: "ma-1 white--text",
                        attrs: {
                          color: "orange darken-4",
                          medium: "",
                          filled: "",
                          "elevation-4": ""
                        },
                        on: {
                          click: function($event) {
                            return _vm.showDialog((_vm.dialog_type = 2), item)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        Editar\n                        "
                        ),
                        _c(
                          "v-icon",
                          { attrs: { right: "", small: "", dark: "" } },
                          [_vm._v("mdi-book-edit-outline")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    item.active == 1
                      ? _c(
                          "v-btn",
                          {
                            staticClass: "ma-1",
                            attrs: {
                              color: "",
                              medium: "",
                              filled: "",
                              "elevation-4": ""
                            },
                            on: {
                              click: function($event) {
                                return _vm.desactiveCurrency(item.id)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        Colocar Inactivo\n                        "
                            ),
                            _c(
                              "v-icon",
                              { attrs: { medium: "", right: "", light: "" } },
                              [_vm._v("mdi-book-off")]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    item.active == 0
                      ? _c(
                          "v-btn",
                          {
                            staticClass: "ma-1 white--text",
                            attrs: {
                              color: "blue darken-2",
                              medium: "",
                              filled: "",
                              "elevation-4": ""
                            },
                            on: {
                              click: function($event) {
                                return _vm.activeCurrency(item.id)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        Colocar Activo\n                        "
                            ),
                            _c(
                              "v-icon",
                              { attrs: { small: "", right: "", dark: "" } },
                              [_vm._v("mdi-check-circle-outline")]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "ma-1 white--text",
                        attrs: {
                          color: "deep-red",
                          medium: "",
                          filled: "",
                          "elevation-4": "",
                          disabled: item.active == 3 || item.active == 1
                        },
                        on: {
                          click: function($event) {
                            return _vm.deleteCurrency(item.id)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        Eliminar\n                        "
                        ),
                        _c(
                          "v-icon",
                          { attrs: { small: "", right: "", dark: "" } },
                          [_vm._v(" mdi-close-outline ")]
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "mx-2" },
        [
          _c(
            "v-dialog",
            {
              attrs: { cols: "10" },
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
                [
                  _c("v-card-title", {
                    staticClass: "grey darken-2",
                    domProps: { textContent: _vm._s("Editar Moneda") }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        { staticClass: "mx-2" },
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "align-center justify-space-between",
                              attrs: { cols: "12" }
                            },
                            [
                              _c(
                                "v-row",
                                {
                                  staticClass: "mr-0",
                                  attrs: { align: "center" }
                                },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          type: "text",
                                          color: "deep-purple",
                                          required: "",
                                          outlined: "",
                                          clearable: "",
                                          dense: "",
                                          label: "Ingrese Nombre de Moneda",
                                          "prepend-outer-icon": "mdi-cash-check"
                                        },
                                        model: {
                                          value: _vm.currency.name,
                                          callback: function($$v) {
                                            _vm.$set(_vm.currency, "name", $$v)
                                          },
                                          expression: "currency.name"
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
                                          type: "text",
                                          color: "deep-purple",
                                          required: "",
                                          outlined: "",
                                          clearable: "",
                                          dense: "",
                                          label:
                                            "ingrese Codigo ISO ejemp: 'USD'",
                                          "prepend-outer-icon": "mdi-cash-check"
                                        },
                                        model: {
                                          value: _vm.currency.name,
                                          callback: function($$v) {
                                            _vm.$set(_vm.currency, "name", $$v)
                                          },
                                          expression: "currency.name"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          type: "text",
                                          color: "deep-purple",
                                          required: "",
                                          outlined: "",
                                          clearable: "",
                                          dense: "",
                                          "prepend-icon":
                                            "mdi-account-card-details-outline",
                                          placeholder:
                                            "Ingrese simbolo ejemp: '$' "
                                        },
                                        model: {
                                          value: _vm.currency.notes,
                                          callback: function($$v) {
                                            _vm.$set(_vm.currency, "notes", $$v)
                                          },
                                          expression: "currency.notes"
                                        }
                                      })
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { text: "", color: "primary" },
                          on: {
                            click: function($event) {
                              _vm.dialog = false
                            }
                          }
                        },
                        [_vm._v(" Cancelar")]
                      ),
                      _vm._v(" "),
                      _vm.dialog_type == 1
                        ? _c(
                            "v-btn",
                            {
                              attrs: { text: "" },
                              on: {
                                click: function($event) {
                                  return _vm.createCurrency(_vm.currency)
                                }
                              }
                            },
                            [_vm._v("Guardar")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.dialog_type == 2
                        ? _c(
                            "v-btn",
                            {
                              attrs: { text: "" },
                              on: {
                                click: function($event) {
                                  return _vm.updateCurrency(_vm.list)
                                }
                              }
                            },
                            [_vm._v("Actualizar")]
                          )
                        : _vm._e()
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

/***/ "./resources/js/views/dashboard/price/Currencies.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/dashboard/price/Currencies.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Currencies_vue_vue_type_template_id_2e89036f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Currencies.vue?vue&type=template&id=2e89036f& */ "./resources/js/views/dashboard/price/Currencies.vue?vue&type=template&id=2e89036f&");
/* harmony import */ var _Currencies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Currencies.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/price/Currencies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Currencies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Currencies_vue_vue_type_template_id_2e89036f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Currencies_vue_vue_type_template_id_2e89036f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/price/Currencies.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/price/Currencies.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/dashboard/price/Currencies.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Currencies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Currencies.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/price/Currencies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Currencies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/price/Currencies.vue?vue&type=template&id=2e89036f&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/dashboard/price/Currencies.vue?vue&type=template&id=2e89036f& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Currencies_vue_vue_type_template_id_2e89036f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Currencies.vue?vue&type=template&id=2e89036f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/price/Currencies.vue?vue&type=template&id=2e89036f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Currencies_vue_vue_type_template_id_2e89036f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Currencies_vue_vue_type_template_id_2e89036f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);