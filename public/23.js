(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/payments/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/payments/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _ref;

    return _ref = {
      payments: [],
      pay: {
        bank: {
          bank_name: ''
        },
        detail_payments: []
      },
      expanded: [],
      search: '',
      pagination: {
        current: 1,
        total: 0
      }
    }, _defineProperty(_ref, "search", ''), _defineProperty(_ref, "dialogDetail", false), _defineProperty(_ref, "loading", false), _defineProperty(_ref, "searching", false), _defineProperty(_ref, "paymentHeader", [{
      text: 'Pago Nro.',
      align: 'right',
      value: 'id'
    }, {
      text: 'Cliente ',
      align: 'right',
      value: 'customer_name'
    }, {
      text: 'Monto',
      align: 'right',
      value: 'pay'
    }, {
      text: 'Banco',
      align: 'right',
      value: 'bank.bank_name'
    }, {
      text: 'Fecha de Registro',
      align: 'right',
      value: 'created_at'
    }, {
      text: 'Opciones',
      value: 'actions',
      sortable: false
    }]), _ref;
  },
  methods: {
    getPayments: function getPayments() {
      var me = this;
      me.loading = true;
      axios.get('/api/payments?page=' + this.pagination.current + '&search=' + this.search).then(function (res) {
        var res = res.data.payments;
        me.payments = res.data;
        me.pagination.current = res.current_page;
        me.pagination.total = res.last_page;
      })["catch"](function (err) {
        console.log(err.data);
      })["finally"](me.loading = false);
    },
    searchSale: function searchSale() {
      this.getPayments();
    },
    openDialog: function openDialog(item) {
      var me = this;
      me.pay = item;
      me.dialogDetail = true;
    },
    closeDialog: function closeDialog() {
      var me = this;
      me.pay = {};
      me.dialogDetail = false;
    },
    onPageChange: function onPageChange() {
      this.getPayments();
    },
    alert: function alert(display, res) {
      this.$refs.Alerts.showAlert(display, res);
    },
    moneyFormat: function moneyFormat(data) {
      return Sfire.moneyFormatF(data);
    }
  },
  mounted: function mounted() {
    this.getPayments();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/payments/Index.vue?vue&type=template&id=e5226eac&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/payments/Index.vue?vue&type=template&id=e5226eac& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "regular-tables", fluid: "", tag: "section" } },
    [
      _c(
        "base-material-card",
        {
          staticClass: "px-5 py-3",
          attrs: { icon: "mdi-file-document", title: "Tabla de Remesas" }
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
                    { attrs: { cols: "9", md: "3" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "my-0",
                          attrs: { color: "teal", outlined: "", rounded: "" }
                        },
                        [
                          _c(
                            "v-list",
                            { staticClass: "my-0" },
                            [
                              _c(
                                "v-list-item",
                                {
                                  attrs: {
                                    to: { name: "create-payment" },
                                    link: ""
                                  }
                                },
                                [
                                  _c(
                                    "v-list-item-avatar",
                                    [
                                      _c(
                                        "v-icon",
                                        { attrs: { large: "", color: "teal" } },
                                        [_vm._v("mdi-file-plus-outline")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-content",
                                    [
                                      _c("v-list-item-title", {
                                        attrs: { color: "teal" },
                                        domProps: {
                                          textContent: _vm._s("Remesa Nueva +")
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
                    "v-col",
                    { attrs: { cols: "12", md: "9" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          clearable: "",
                          color: "orange",
                          filled: "",
                          "append-icon": "mdi-file-find-outline",
                          label: "Buscar Remesa",
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
              headers: _vm.paymentHeader,
              items: _vm.payments,
              options: _vm.pagination,
              loading: "true",
              "items-per-page": 20,
              "item-key": "id",
              "hide-default-footer": ""
            },
            on: {
              "update:options": function($event) {
                _vm.pagination = $event
              }
            },
            scopedSlots: _vm._u([
              {
                key: "item.id",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c(
                      "v-btn",
                      {
                        attrs: { rounded: "", outlined: "", color: "teal" },
                        on: {
                          click: function($event) {
                            return _vm.openDialog(item)
                          }
                        }
                      },
                      [
                        _c("div", [_vm._v(_vm._s(item.id) + " ")]),
                        _vm._v(" "),
                        _c("v-icon", { staticClass: "pl-2" }, [
                          _vm._v("mdi-eye")
                        ])
                      ],
                      1
                    )
                  ]
                }
              },
              {
                key: "item.pay",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("div", [
                      _vm._v(
                        _vm._s(item.pay_formated) + " " + _vm._s(item.pay_iso)
                      )
                    ])
                  ]
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
                          outlined: "",
                          rounded: "",
                          color: "deep-orange",
                          "x-small": ""
                        },
                        on: {
                          click: function($event) {
                            return _vm.deleteCustomer(item.id)
                          }
                        }
                      },
                      [
                        _vm._v(" Eliminar\n                    "),
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
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-center" },
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    { attrs: { justify: "center" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "8" } },
                        [
                          _c(
                            "v-container",
                            { staticClass: "max-width" },
                            [
                              _c("v-pagination", {
                                staticClass: "mx-4",
                                attrs: { length: _vm.pagination.total },
                                on: { input: _vm.onPageChange },
                                model: {
                                  value: _vm.pagination.current,
                                  callback: function($$v) {
                                    _vm.$set(_vm.pagination, "current", $$v)
                                  },
                                  expression: "pagination.current"
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
            "div",
            [
              _c(
                "v-dialog",
                {
                  model: {
                    value: _vm.dialogDetail,
                    callback: function($$v) {
                      _vm.dialogDetail = $$v
                    },
                    expression: "dialogDetail"
                  }
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
                            { attrs: { cols: "4", md: "3" } },
                            [
                              _c(
                                "v-card-title",
                                [
                                  _vm._v(
                                    "\n                                Oper. Num.\n                                "
                                  ),
                                  _c("v-card-text", [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.pay.id) +
                                        "\n                                "
                                    )
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
                            { attrs: { cols: "8", md: "3" } },
                            [
                              _c(
                                "v-card-title",
                                [
                                  _vm._v(
                                    "\n                                Cliente\n                                "
                                  ),
                                  _c("v-card-text", [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.pay.customer_name) +
                                        "\n                                "
                                    )
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
                            { attrs: { cols: "6", md: "3" } },
                            [
                              _c(
                                "v-card-title",
                                [
                                  _vm._v(
                                    "\n                                Referencia Bancaria\n                                "
                                  ),
                                  _c("v-card-text", [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.pay.operation_code) +
                                        "\n                                "
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.pay.bank
                            ? _c(
                                "v-col",
                                { attrs: { cols: "6", md: "3" } },
                                [
                                  _c(
                                    "v-card-title",
                                    [
                                      _vm._v(
                                        "\n                                Fecha Registro\n                                "
                                      ),
                                      _c("v-card-text", [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(_vm.pay.created_at) +
                                            "\n                                "
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.pay.bank
                            ? _c(
                                "v-col",
                                { attrs: { cols: "6", md: "3" } },
                                [
                                  _c(
                                    "v-card-title",
                                    [
                                      _vm._v(
                                        "\n                                Banco Receptor\n                            "
                                      ),
                                      _c("v-card-text", [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(_vm.pay.bank.bank_name) +
                                            "\n                            "
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "6", md: "3" } },
                            [
                              _c(
                                "v-card-title",
                                [
                                  _vm._v(
                                    "\n                                Monto entrante\n                            "
                                  ),
                                  _c("v-card-text", [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          _vm.pay.pay + " " + _vm.pay.pay_iso
                                        ) +
                                        "\n                            "
                                    )
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
                            { attrs: { cols: "6", md: "3" } },
                            [
                              _c(
                                "v-card-title",
                                [
                                  _vm._v(
                                    "\n                                Total en Bs.\n                            "
                                  ),
                                  _c("v-card-text", [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.pay.price_formated) +
                                        "\n                            "
                                    )
                                  ])
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
                        "v-card-text",
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
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                                            Nombre\n                                        "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                                            C.I/D.N.I.\n                                        "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                                            Banco\n                                        "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                                            Cuenta\n                                        "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                                            Monto\n                                        "
                                          )
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "tbody",
                                      _vm._l(_vm.pay.detail_payments, function(
                                        r
                                      ) {
                                        return _c("tr", { key: r.name }, [
                                          _c("td", [_vm._v(_vm._s(r.name))]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(_vm._s(r.dni))]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(r.bank_name))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(r.bank_account))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(r.amount_formated))
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
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                medium: "",
                                filled: "",
                                "elevation-4": ""
                              },
                              on: {
                                click: function($event) {
                                  return _vm.closeDialog()
                                }
                              }
                            },
                            [_vm._v(" Cerrar")]
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

/***/ "./resources/js/views/dashboard/payments/Index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/dashboard/payments/Index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_e5226eac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=e5226eac& */ "./resources/js/views/dashboard/payments/Index.vue?vue&type=template&id=e5226eac&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/payments/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_e5226eac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_e5226eac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/payments/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/payments/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/dashboard/payments/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/payments/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/payments/Index.vue?vue&type=template&id=e5226eac&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/payments/Index.vue?vue&type=template&id=e5226eac& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_e5226eac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=e5226eac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/payments/Index.vue?vue&type=template&id=e5226eac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_e5226eac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_e5226eac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);