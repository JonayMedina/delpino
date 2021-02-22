(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/customers/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/customers/Index.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      customers: [],
      expanded: [],
      search: '',
      pagination: {
        current: 1,
        total: 0
      },
      loading: false,
      searching: false,
      customerHeaders: [{
        text: 'id',
        align: 'right',
        value: 'id'
      }, {
        text: 'Nombre',
        align: 'right',
        value: 'name'
      }, {
        text: 'DNI',
        align: 'right',
        value: 'dni'
      }, {
        text: 'Fecha de Registro',
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
    getCustomers: function getCustomers() {
      var me = this;
      me.loading = true;
      axios.get('/api/customers?page=' + this.pagination.current + '&search=' + this.search).then(function (res) {
        var res = res.data.customers;
        me.customers = res.data;
        me.pagination.current = res.current_page;
        me.pagination.total = res.last_page;
      })["catch"](function (err) {
        console.log(err.data);
      })["finally"](me.loading = false);
    },
    searchCustomer: function searchCustomer() {
      this.getCustomers();
    },
    onPageChange: function onPageChange() {
      this.getCustomers();
    },
    activeCustomer: function activeCustomer(id) {
      var me = this;
      var data = {
        url: "/api/customers/activate/" + id,
        title: "Activar Usuario?",
        active: 1
      };
      Sfire.activeF(data).then(function (res) {
        me.getcustomers();
        me.alert(1, res);
      })["catch"](function (error) {
        me.alert(4, error);
      });
    },
    desactiveCustomer: function desactiveCustomer(id) {
      var me = this;
      var data = {
        url: "/api/customers/desactive/" + id,
        title: "Inactivar para remesas a Usuario?",
        active: 0
      };
      Sfire.desactiveF(data).then(function (res) {
        me.getcustomers();
        me.alert(1, res);
      })["catch"](function (error) {
        me.alert(4, error);
      });
    },
    deleteCustomer: function deleteCustomer(id) {
      var me = this;
      var data = {
        url: "/api/customers/activate/" + id,
        title: "Eliminar cuenta de Usuario?",
        active: 1
      };
      Sfire.activeS(data).then(function (res) {
        me.getcustomers();
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
    this.getCustomers();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/customers/Index.vue?vue&type=template&id=055ca2e4&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/customers/Index.vue?vue&type=template&id=055ca2e4& ***!
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
    "v-container",
    { attrs: { id: "regular-tables", fluid: "", tag: "section" } },
    [
      _c("base-v-component", {
        attrs: { heading: "Panel Clientes", link: "clientes/listado" }
      }),
      _vm._v(" "),
      _c(
        "base-material-card",
        {
          staticClass: "px-5 py-3",
          attrs: { icon: "mdi-account-box-outline", title: "Tabla de Clientes" }
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
                        { attrs: { to: { name: "create-customer" } } },
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
                          "append-icon": "mdi-account-search",
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
              headers: _vm.customerHeaders,
              items: _vm.customers,
              options: _vm.pagination,
              loading: "true",
              "items-per-page": 20,
              expanded: _vm.expanded,
              "item-key": "name",
              "show-expand": "",
              "expand-icon": "Ver Mas"
            },
            on: {
              "update:options": function($event) {
                _vm.pagination = $event
              },
              "update:expanded": function($event) {
                _vm.expanded = $event
              }
            },
            scopedSlots: _vm._u([
              {
                key: "expanded-item",
                fn: function(ref) {
                  var headers = ref.headers
                  var item = ref.item
                  return [
                    _c("td", { attrs: { colspan: "2" } }, [
                      _vm._v(
                        "\n                    " +
                          _vm._s(item.name) +
                          "\n                "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { attrs: { colspan: "1" } }, [
                      _vm._v(
                        "\n                    " +
                          _vm._s(item.email) +
                          "\n                "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { attrs: { colspan: "1" } }, [
                      _vm._v(
                        "\n                    Telefono: " +
                          _vm._s(item.phone) +
                          "\n                "
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
                        attrs: { color: "deep-orange", "x-small": "" },
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

/***/ "./resources/js/views/dashboard/customers/Index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/dashboard/customers/Index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_055ca2e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=055ca2e4& */ "./resources/js/views/dashboard/customers/Index.vue?vue&type=template&id=055ca2e4&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/customers/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_055ca2e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_055ca2e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/customers/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/customers/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/dashboard/customers/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/customers/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/customers/Index.vue?vue&type=template&id=055ca2e4&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/customers/Index.vue?vue&type=template&id=055ca2e4& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_055ca2e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=055ca2e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/customers/Index.vue?vue&type=template&id=055ca2e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_055ca2e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_055ca2e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);