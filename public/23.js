(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/payments/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/payments/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      payments: [],
      search: '',
      pagination: {
        current: 1,
        total: 0
      },
      loading: false,
      searching: false,
      headers: [{
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
        value: 'amount'
      }, {
        text: 'Banco',
        align: 'right',
        value: 'bank'
      }, {
        text: 'Fecha del Pago',
        align: 'right',
        value: 'created_at'
      }, {
        text: 'Opciones',
        value: 'actions',
        sortable: false
      }]
    };
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
    onPageChange: function onPageChange() {
      this.getPayments();
    },
    alert: function alert(display, res) {
      this.$refs.Alerts.showAlert(display, res);
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
      _c("base-v-component", {
        attrs: { heading: "Panel Pagos", link: "pagos/listado" }
      }),
      _vm._v(" "),
      _c(
        "base-material-card",
        {
          staticClass: "px-5 py-3",
          attrs: { icon: "mdi-file-document", title: "Tabla de Pagos" }
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
                        "router-link",
                        { attrs: { to: { name: "create-payment" } } },
                        [
                          _c(
                            "v-btn",
                            { attrs: { elevation: "5", icon: "", large: "" } },
                            [
                              _c("v-icon", { attrs: { color: "orange" } }, [
                                _vm._v("mdi-account-plus-outline")
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
                    "v-col",
                    [
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          clearable: "",
                          color: "orange",
                          filled: "",
                          "append-icon": "mdi-magnify",
                          label: "Buscar Cliente",
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
                      }),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "white--text",
                          attrs: {
                            color: "blue-grey darken-4",
                            loading: _vm.loading
                          }
                        },
                        [
                          _c(
                            "v-icon",
                            { attrs: { right: "", small: "", dark: "" } },
                            [_vm._v("mdi-magnify ")]
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
          _c("v-data-table", {
            staticClass: "elevation-2",
            attrs: {
              dark: "",
              search: _vm.search,
              headers: _vm.headers,
              items: _vm.payments,
              options: _vm.pagination,
              loading: "true",
              "items-per-page": 20
            },
            on: {
              "update:options": function($event) {
                _vm.pagination = $event
              }
            }
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