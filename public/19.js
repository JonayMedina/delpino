(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/components/core/Footer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/components/core/Footer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DashboardCoreFooter',
  data: function data() {
    return {
      links: [{
        href: '#',
        text: 'Creative Tim'
      }, {
        href: '#',
        text: 'About Us'
      }, {
        href: '#',
        text: 'Blog'
      }, {
        href: '#',
        text: 'Licenses'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/components/core/Footer.vue?vue&type=style&index=0&lang=sass&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/components/core/Footer.vue?vue&type=style&index=0&lang=sass& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#dashboard-core-footer a {\n  font-size: 0.825rem;\n  font-weight: 500;\n  text-decoration: none;\n  text-transform: uppercase;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/components/core/Footer.vue?vue&type=style&index=0&lang=sass&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/components/core/Footer.vue?vue&type=style&index=0&lang=sass& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=style&index=0&lang=sass& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/components/core/Footer.vue?vue&type=style&index=0&lang=sass&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/components/core/Footer.vue?vue&type=template&id=c08021e8&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/components/core/Footer.vue?vue&type=template&id=c08021e8& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    "v-footer",
    { attrs: { id: "dashboard-core-footer" } },
    [
      _c(
        "v-container",
        [
          _c(
            "v-row",
            { attrs: { align: "center", "no-gutters": "" } },
            [
              _vm._l(_vm.links, function(link, i) {
                return _c(
                  "v-col",
                  {
                    key: i,
                    staticClass: "text-center mb-sm-0 mb-5",
                    attrs: { cols: "auto" }
                  },
                  [
                    _c("a", {
                      staticClass: "mr-0 grey--text text--darken-3",
                      attrs: {
                        href: link.href,
                        rel: "noopener",
                        target: "_blank"
                      },
                      domProps: { textContent: _vm._s(link.text) }
                    })
                  ]
                )
              }),
              _vm._v(" "),
              _c("v-spacer", { staticClass: "hidden-sm-and-down" }),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "12", md: "auto" } }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "body-1 font-weight-light pt-6 pt-md-0 text-center"
                  },
                  [
                    _vm._v("\n          © 2019, made with\n          "),
                    _c("v-icon", { attrs: { size: "18" } }, [
                      _vm._v("\n            mdi-heart\n          ")
                    ]),
                    _vm._v("\n          by "),
                    _c(
                      "a",
                      { attrs: { href: "https://www.creative-tim.com" } },
                      [_vm._v("Creative Tim")]
                    ),
                    _vm._v(" for a better web.\n        ")
                  ],
                  1
                )
              ])
            ],
            2
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

/***/ "./resources/js/views/dashboard/components/core/Footer.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/dashboard/components/core/Footer.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_c08021e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=c08021e8& */ "./resources/js/views/dashboard/components/core/Footer.vue?vue&type=template&id=c08021e8&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/components/core/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Footer_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.vue?vue&type=style&index=0&lang=sass& */ "./resources/js/views/dashboard/components/core/Footer.vue?vue&type=style&index=0&lang=sass&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_c08021e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_c08021e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/components/core/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/components/core/Footer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/dashboard/components/core/Footer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/components/core/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/components/core/Footer.vue?vue&type=style&index=0&lang=sass&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/components/core/Footer.vue?vue&type=style&index=0&lang=sass& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=style&index=0&lang=sass& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/components/core/Footer.vue?vue&type=style&index=0&lang=sass&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/dashboard/components/core/Footer.vue?vue&type=template&id=c08021e8&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/components/core/Footer.vue?vue&type=template&id=c08021e8& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_c08021e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=c08021e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/components/core/Footer.vue?vue&type=template&id=c08021e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_c08021e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_c08021e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);