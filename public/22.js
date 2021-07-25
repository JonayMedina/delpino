(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/pages/Register.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/pages/Register.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      dni: '',
      email: '',
      phone: '',
      customer: {},
      dialog_title: '',
      countries: [],
      step: 1,
      turn: 0,
      saving: false,
      min: '',
      errorMessages: 'Credenciales Incorrectas',
      snackbar: false,
      color: 'general',
      showPassword: false
    };
  },
  computed: {
    currentUser: function currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    login: function login() {
      var _this = this;

      var email = this.email;
      var password = this.password;
      this.$store.dispatch('login', {
        email: email,
        password: password
      }).then(function (res) {
        _this.$store.commit('loginSuccess', res);
      })["catch"](function (err) {
        console.log(err);
        _this.snackbar = true;
      });
    }
  },
  metaInfo: function metaInfo() {
    return {
      title: 'Para Enviar Remesas | Registrarse'
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/pages/Register.vue?vue&type=template&id=a3a399f0&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/pages/Register.vue?vue&type=template&id=a3a399f0& ***!
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
    { attrs: { id: "login", fluid: "", tag: "section" } },
    [
      _c(
        "v-layout",
        { attrs: { "align-center": "", "justify-center": "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs12: "", sm8: "", md8: "" } },
            [
              _c(
                "v-card",
                { staticClass: "elevation-12" },
                [
                  _c(
                    "v-toolbar",
                    { staticClass: "white--text", attrs: { color: "#fb8c00" } },
                    [
                      _c("v-toolbar-title", [
                        _vm._v("Registrarse en DELPINOEXPRESS ")
                      ]),
                      _vm._v(" "),
                      _c("v-spacer")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-form",
                        [
                          _c(
                            "v-row",
                            { staticClass: "mx-2" },
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "pt-5 pl-0",
                                  attrs: { cols: "12", md: "4" }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Introduzca Nombre Completo",
                                      type: "text",
                                      required: "",
                                      color: "deep-purple",
                                      cols: "12",
                                      md: "6"
                                    },
                                    model: {
                                      value: _vm.customer.name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.customer, "name", $$v)
                                      },
                                      expression: "customer.name"
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
                                  attrs: { cols: "12", md: "4" }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.email,
                                          expression: "email"
                                        }
                                      ],
                                      staticStyle: { color: "red" }
                                    },
                                    [_vm._v("Ya en Uso, Inserte Otro")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: !_vm.email,
                                          expression: "!email"
                                        }
                                      ],
                                      staticStyle: { color: "#fb8c00" }
                                    },
                                    [_vm._v("Ingrese Mail valido.")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      type: "text",
                                      color: "deep-purple",
                                      label: "Insertar Mail"
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.vEmail(_vm.customer.email)
                                      }
                                    },
                                    model: {
                                      value: _vm.customer.email,
                                      callback: function($$v) {
                                        _vm.$set(_vm.customer, "email", $$v)
                                      },
                                      expression: "customer.email"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass:
                                    "align-center justify-space-between",
                                  attrs: { cols: "12", md: "4" }
                                },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      clearable: "",
                                      color: "deep-purple",
                                      items: _vm.countries,
                                      "item-text": "name",
                                      "item-value": "name",
                                      label: "De Donde Eres"
                                    },
                                    model: {
                                      value: _vm.customer.country,
                                      callback: function($$v) {
                                        _vm.$set(_vm.customer, "country", $$v)
                                      },
                                      expression: "customer.country"
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
                                  attrs: { cols: "12", md: "4" }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.phone,
                                          expression: "phone"
                                        }
                                      ],
                                      staticStyle: { color: "red" }
                                    },
                                    [
                                      _vm._v(
                                        "Inserte otro, Este se Encuentra en uso!"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: !_vm.phone,
                                          expression: "!phone"
                                        }
                                      ],
                                      staticStyle: { color: "#fb8c00" }
                                    },
                                    [_vm._v("Inserte Telefono Unico.")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      type: "text",
                                      label: "Numero de Telefono Valido",
                                      color: "deep-purple"
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.vPhone(_vm.customer.phone)
                                      }
                                    },
                                    model: {
                                      value: _vm.customer.phone,
                                      callback: function($$v) {
                                        _vm.$set(_vm.customer, "phone", $$v)
                                      },
                                      expression: "customer.phone"
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
                                  attrs: { cols: "12", md: "4" }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: !_vm.customer.birthdate,
                                          expression: "!customer.birthdate"
                                        }
                                      ]
                                    },
                                    [_vm._v("Fecha de nacimiento del Cliente.")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      type: "date",
                                      color: "deep-purple",
                                      Label: "Ingrese una fecha de nacimiento"
                                    },
                                    model: {
                                      value: _vm.customer.birthdate,
                                      callback: function($$v) {
                                        _vm.$set(_vm.customer, "birthdate", $$v)
                                      },
                                      expression: "customer.birthdate"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
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
                                        { attrs: { cols: "6" } },
                                        [
                                          _c(
                                            "span",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: _vm.min < 6,
                                                  expression: "min < 6"
                                                }
                                              ],
                                              staticStyle: { color: "red" }
                                            },
                                            [
                                              _vm._v(
                                                "Ingrese Constraseña minimo 6 Caracteres"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              type: "password",
                                              placeholder: "Contraseña",
                                              label: "CONTRASEÑA",
                                              color: "deep-purple",
                                              rules: [
                                                function() {
                                                  return (
                                                    !!_vm.password ||
                                                    "Campo Obligatorio"
                                                  )
                                                }
                                              ],
                                              "append-icon": _vm.showPassword
                                                ? "mdi-eye-off"
                                                : "mdi-eye",
                                              type: _vm.showPassword
                                                ? "text"
                                                : "password",
                                              "prepend-icon": "mdi-lock"
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.valpass()
                                              },
                                              "click:append": function($event) {
                                                _vm.showPassword = !_vm.showPassword
                                              }
                                            },
                                            model: {
                                              value: _vm.customer.password,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.customer,
                                                  "password",
                                                  $$v
                                                )
                                              },
                                              expression: "customer.password"
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
                                          _c(
                                            "span",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    _vm.customer.password !=
                                                    _vm.customer.confirm_pass,
                                                  expression:
                                                    "customer.password != customer.confirm_pass"
                                                }
                                              ],
                                              staticStyle: { color: "red" }
                                            },
                                            [_vm._v("Deben Coincidir")]
                                          ),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              type: "password",
                                              placeholder:
                                                "Confirme Su Contraña",
                                              label: "Repita su Contraseña",
                                              color: "deep-purple",
                                              rules: [
                                                function() {
                                                  return (
                                                    !!_vm.confirm_pass ||
                                                    "TCampo Obligatorio"
                                                  )
                                                }
                                              ],
                                              "append-icon": _vm.showPassword
                                                ? "mdi-eye-off"
                                                : "mdi-eye",
                                              type: _vm.showPassword
                                                ? "text"
                                                : "password",
                                              "prepend-icon": "mdi-lock"
                                            },
                                            on: {
                                              "click:append": function($event) {
                                                _vm.showPassword = !_vm.showPassword
                                              }
                                            },
                                            model: {
                                              value: _vm.customer.confirm_pass,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.customer,
                                                  "confirm_pass",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "customer.confirm_pass"
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
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "mt-5" }),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "a",
                        { attrs: { href: "/" } },
                        [_c("v-btn", [_vm._v(" Cancelar")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            text: "",
                            color: "primary",
                            loading: _vm.saving,
                            right: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.createCustomer(_vm.customer)
                            }
                          }
                        },
                        [_vm._v("Registrar")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-snackbar",
                    {
                      attrs: { color: _vm.color, top: true },
                      model: {
                        value: _vm.snackbar,
                        callback: function($$v) {
                          _vm.snackbar = $$v
                        },
                        expression: "snackbar"
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.errorMessages) +
                          "\n          "
                      ),
                      _c(
                        "v-btn",
                        {
                          attrs: { dark: "" },
                          on: {
                            click: function($event) {
                              _vm.snackbar = false
                            }
                          }
                        },
                        [_vm._v("\n            Close\n          ")]
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

/***/ "./resources/js/views/dashboard/pages/Register.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/dashboard/pages/Register.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_a3a399f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=a3a399f0& */ "./resources/js/views/dashboard/pages/Register.vue?vue&type=template&id=a3a399f0&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_a3a399f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_a3a399f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/pages/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/pages/Register.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/dashboard/pages/Register.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/pages/Register.vue?vue&type=template&id=a3a399f0&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/pages/Register.vue?vue&type=template&id=a3a399f0& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_a3a399f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=a3a399f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/pages/Register.vue?vue&type=template&id=a3a399f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_a3a399f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_a3a399f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);