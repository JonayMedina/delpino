(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/price/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/price/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      prices: [],
      price: {},
      currencies: [],
      loading: false,
      search: '',
      dialog_title: '',
      dialog: false,
      dialog_type: 1,
      saving: false,
      errors: [],
      headers: [{
        text: 'Moneda',
        align: 'right',
        value: 'currency'
      }, {
        text: 'Monto',
        align: 'right',
        value: 'amount'
      }, {
        text: 'Descrip.',
        align: 'right',
        value: 'notes'
      }, {
        text: 'Opciones',
        value: 'actions',
        sortable: false
      }]
    };
  },
  methods: {
    getPrices: function getPrices() {
      var me = this;
      me.loading = true;
      axios.get('/api/prices').then(function (res) {
        me.prices = res.data.prices;
      })["catch"](function (err) {
        console.log(err.data);
      })["finally"](me.loading = false);
    },
    getCurrency: function getCurrency() {
      var me = this;
      axios.get('/api/currencies').then(function (res) {
        me.currencies = res.data.currencies;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    showDialog: function showDialog(type, price) {
      var me = this;

      if (!me.currencies.lenght) {
        me.getCurrency();
      }

      if (type == 1) {
        me.dialog_title = 'Guardar Monto';
        me.price = {};
      } else {
        me.dialog_title = 'Actualizar Monto';
        me.price = price;
      }

      me.dialog = true;
    },
    createPrice: function createPrice() {
      var me = this;
      me.saving = true;
      axios.post('/api/prices/store', me.price).then(function (resp) {
        me.getPrices();
        me.closeDialog();
        me.alert(1, resp.data.message);
      })["catch"](function (error) {
        return console.log(error);
      })["finally"](function () {
        return me.saving = false;
      });
    },
    updatePrice: function updatePrice() {
      var me = this;
      me.saving = true;
      me.price._method = 'put';
      axios.post('/api/prices/update/' + me.price.id, me.price).then(function (resp) {
        me.getPrices();
        me.closeDialog();
        me.alert(1, resp.data.message);
      })["catch"](function (e) {
        e.response.data.error.map(function (element) {
          me.alert(4, element);
        });
      })["finally"](function () {
        return me.saving = false;
      }, me.closeDialog());
    },
    closeDialog: function closeDialog() {
      var me = this;
      me.dialog_title = 'Crear Nuevo Precio';
      me.price = {};
      me.dialog = false;
    },
    activePrice: function activePrice(id) {
      var me = this;
      var data = {
        url: "/api/prices/activate/" + id,
        title: "Activar Precio?",
        active: 1
      };
      fire.activeS(data).then(function (res) {
        me.getPrices();
        me.alert(1, res);
      })["catch"](function (error) {
        me.alert(4, error);
      });
    },
    desactivePrice: function desactivePrice(id) {
      var me = this;
      var data = {
        url: "/api/prices/activate/" + id,
        title: "Activar Precio?",
        active: 1
      };
      fire.activeS(data).then(function (res) {
        me.getPrices();
        me.alert(1, res);
      })["catch"](function (error) {
        me.alert(4, error);
      });
    },
    deletePrice: function deletePrice(id) {
      var me = this;
      var data = {
        url: "/api/prices/activate/" + id,
        title: "Activar Precio?",
        active: 1
      };
      fire.activeS(data).then(function (res) {
        me.getPrices();
        me.alert(1, res);
      })["catch"](function (error) {
        me.alert(4, error);
      });
    },
    alert: function alert(display, res) {
      this.$refs.Alerts.showAlert(display, res);
    }
  },
  mounted: function mounted() {
    this.getPrices();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/price/Index.vue?vue&type=template&id=04469cfc&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/price/Index.vue?vue&type=template&id=04469cfc& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "prices", fluid: "", tag: "section" } },
    [
      _c("base-v-component", {
        attrs: { heading: "Lisado de Precios", link: "precios/listado" }
      }),
      _vm._v(" "),
      _c(
        "base-material-card",
        {
          staticClass: "px-3 py-2",
          attrs: { icon: "mdi-clipboard-text", title: "Tabla de Precios" }
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
                                (_vm.price = {})
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
              items: _vm.prices,
              loading: "true",
              "items-per-page": 20
            },
            scopedSlots: _vm._u([
              {
                key: "item.currency",
                fn: function(ref) {
                  var item = ref.item
                  return [_c("div", [_vm._v(_vm._s(item.currency.iso))])]
                }
              },
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
                                return _vm.desactivePrice(item.id)
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
                                return _vm.activePrice(item.id)
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
                            return _vm.deletePrice(item.id)
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
              attrs: {
                cols: "6",
                width: "60%",
                "overlay-color": "blue darken-5",
                transition: "dialog-top-transition"
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
                [
                  _c(
                    "v-card-title",
                    { staticClass: "orange white--text elevation-4" },
                    [
                      _c(
                        "v-icon",
                        { attrs: { large: "", left: "", color: "white" } },
                        [_vm._v("mdi-pencil")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "title font-weight-light text-right display-1"
                        },
                        [_vm._v("EDITAR MONEDA")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        { staticClass: "mr-0", attrs: { align: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _vm.price.currency
                                ? _c("div", {
                                    domProps: {
                                      textContent: _vm._s(
                                        _vm.price.currency.iso
                                      )
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  type: "number",
                                  color: "deep-purple",
                                  required: "",
                                  outlined: "",
                                  clearable: "",
                                  dense: "",
                                  label: "Ingrese precio de Venta",
                                  "prepend-outer-icon": "mdi-cash-check"
                                },
                                model: {
                                  value: _vm.price.amount,
                                  callback: function($$v) {
                                    _vm.$set(_vm.price, "amount", $$v)
                                  },
                                  expression: "price.amount"
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
                                  items: _vm.currencies,
                                  label: "Seleccione Moneda",
                                  "item-text": "name",
                                  "item-value": "id"
                                },
                                model: {
                                  value: _vm.price.currency_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.price, "currency_id", $$v)
                                  },
                                  expression: "price.currency_id"
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
                                  "prepend-icon":
                                    "mdi-account-card-details-outline",
                                  placeholder: "informacion sobre el Precio"
                                },
                                model: {
                                  value: _vm.price.notes,
                                  callback: function($$v) {
                                    _vm.$set(_vm.price, "notes", $$v)
                                  },
                                  expression: "price.notes"
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
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { text: "", color: "secondary" },
                          on: {
                            click: function($event) {
                              _vm.dialog = false
                            }
                          }
                        },
                        [_vm._v(" Cerrar")]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _vm.dialog_type == 1
                        ? _c(
                            "v-btn",
                            {
                              staticClass: "text-right",
                              attrs: {
                                loading: _vm.saving,
                                color: "orange darken-4"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.createPrice(_vm.price)
                                }
                              }
                            },
                            [_vm._v("Registrar")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.dialog_type == 2
                        ? _c(
                            "v-btn",
                            {
                              staticClass: "white--text",
                              attrs: {
                                loading: _vm.saving,
                                color: "orange darken-4"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.updatePrice(_vm.price)
                                }
                              }
                            },
                            [_vm._v("Guardar Cambios")]
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

/***/ "./resources/js/views/dashboard/price/Index.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/dashboard/price/Index.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_04469cfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=04469cfc& */ "./resources/js/views/dashboard/price/Index.vue?vue&type=template&id=04469cfc&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/price/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_04469cfc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_04469cfc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/price/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/price/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/dashboard/price/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/price/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/price/Index.vue?vue&type=template&id=04469cfc&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/dashboard/price/Index.vue?vue&type=template&id=04469cfc& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_04469cfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=04469cfc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/price/Index.vue?vue&type=template&id=04469cfc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_04469cfc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_04469cfc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);