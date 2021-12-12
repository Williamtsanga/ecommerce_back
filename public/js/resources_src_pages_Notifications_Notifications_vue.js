"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_pages_Notifications_Notifications_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/pages/Notifications/Notifications.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/pages/Notifications/Notifications.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Widget_Widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Widget/Widget */ "./resources/src/components/Widget/Widget.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Notifications',
  components: {
    Widget: _components_Widget_Widget__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    addSuccessNotification: function addSuccessNotification() {
      this.$toasted.success('Showing success message was successful!', {
        action: {
          text: 'Close',
          onClick: function onClick(e, toastObject) {
            toastObject.goAway(0);
          }
        }
      });
    },
    addInfoNotification: function addInfoNotification() {
      this.$toasted.info('Launching thermonuclear war...', {
        action: {
          text: 'Cancel launch',
          onClick: function onClick(e, toastObject) {
            toastObject.text('Thermonuclear war averted').goAway(1000);
          }
        }
      });
    },
    addErrorNotification: function addErrorNotification() {
      this.$toasted.error('Launching thermonuclear war...', {
        action: [{
          text: 'Cancel',
          onClick: function onClick(e, toastObject) {
            toastObject.el.classList.remove('info');
            toastObject.el.classList.add('success');
            toastObject.text('Alien planet destroyed!').goAway(2000);
          }
        }]
      });
    },
    toggleLocation: function toggleLocation() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'top-right';
      this.$toasted.options.position = position;
      this.$toasted.show(null);
    }
  },
  created: function created() {
    this.$toasted.show('Thanks for checking out Messenger!');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/pages/Notifications/Notifications.scss?vue&type=style&index=0&id=2c4df483&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/pages/Notifications/Notifications.scss?vue&type=style&index=0&id=2c4df483&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Fonts\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n.location-selector[data-v-2c4df483] {\n  width: 100%;\n  height: 220px;\n  border: 1px dashed transparent;\n  background-color: #040620;\n  position: relative;\n}\n.location-selector .bit[data-v-2c4df483] {\n  transition: background-color 0.15s ease-in-out;\n  background-color: rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n  position: absolute;\n}\n@media (prefers-reduced-motion: reduce) {\n.location-selector .bit[data-v-2c4df483] {\n    transition: none;\n}\n}\n.location-selector .bit[data-v-2c4df483]:hover {\n  background-color: rgba(204, 204, 204, 0.2);\n}\n.location-selector .bit.top[data-v-2c4df483],\n.location-selector .bit.bottom[data-v-2c4df483] {\n  height: 25%;\n  width: 40%;\n  margin: 0 30%;\n}\n.location-selector .bit.top[data-v-2c4df483] {\n  top: 0;\n}\n.location-selector .bit.bottom[data-v-2c4df483] {\n  bottom: 0;\n}\n.location-selector .bit.right[data-v-2c4df483],\n.location-selector .bit.left[data-v-2c4df483] {\n  height: 20%;\n  width: 20%;\n  margin-left: 0;\n  margin-right: 0;\n}\n.location-selector .bit.right[data-v-2c4df483] {\n  right: 0;\n}\n.location-selector .bit.left[data-v-2c4df483] {\n  left: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/pages/Notifications/Notifications.scss?vue&type=style&index=0&id=2c4df483&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/pages/Notifications/Notifications.scss?vue&type=style&index=0&id=2c4df483&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Notifications_scss_vue_type_style_index_0_id_2c4df483_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./Notifications.scss?vue&type=style&index=0&id=2c4df483&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/pages/Notifications/Notifications.scss?vue&type=style&index=0&id=2c4df483&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Notifications_scss_vue_type_style_index_0_id_2c4df483_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Notifications_scss_vue_type_style_index_0_id_2c4df483_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/src/pages/Notifications/Notifications.vue":
/*!*************************************************************!*\
  !*** ./resources/src/pages/Notifications/Notifications.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Notifications_vue_vue_type_template_id_2c4df483_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notifications.vue?vue&type=template&id=2c4df483&scoped=true& */ "./resources/src/pages/Notifications/Notifications.vue?vue&type=template&id=2c4df483&scoped=true&");
/* harmony import */ var _Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notifications.vue?vue&type=script&lang=js& */ "./resources/src/pages/Notifications/Notifications.vue?vue&type=script&lang=js&");
/* harmony import */ var _Notifications_scss_vue_type_style_index_0_id_2c4df483_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notifications.scss?vue&type=style&index=0&id=2c4df483&lang=scss&scoped=true& */ "./resources/src/pages/Notifications/Notifications.scss?vue&type=style&index=0&id=2c4df483&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notifications_vue_vue_type_template_id_2c4df483_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Notifications_vue_vue_type_template_id_2c4df483_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2c4df483",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/pages/Notifications/Notifications.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/pages/Notifications/Notifications.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/src/pages/Notifications/Notifications.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Notifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/pages/Notifications/Notifications.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/pages/Notifications/Notifications.scss?vue&type=style&index=0&id=2c4df483&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/src/pages/Notifications/Notifications.scss?vue&type=style&index=0&id=2c4df483&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Notifications_scss_vue_type_style_index_0_id_2c4df483_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./Notifications.scss?vue&type=style&index=0&id=2c4df483&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/pages/Notifications/Notifications.scss?vue&type=style&index=0&id=2c4df483&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/src/pages/Notifications/Notifications.vue?vue&type=template&id=2c4df483&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/src/pages/Notifications/Notifications.vue?vue&type=template&id=2c4df483&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_2c4df483_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_2c4df483_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_2c4df483_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Notifications.vue?vue&type=template&id=2c4df483&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/pages/Notifications/Notifications.vue?vue&type=template&id=2c4df483&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/pages/Notifications/Notifications.vue?vue&type=template&id=2c4df483&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/pages/Notifications/Notifications.vue?vue&type=template&id=2c4df483&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-breadcrumb",
        [
          _c("b-breadcrumb-item", [_vm._v("YOU ARE HERE")]),
          _vm._v(" "),
          _c("b-breadcrumb-item", { attrs: { active: "" } }, [
            _vm._v("UI Notifications"),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "Widget",
        {
          attrs: {
            title: "<h6> Vue Toasted </h6>",
            close: "",
            collapse: "",
            settings: "",
            customHeader: "",
          },
        },
        [
          _c(
            "b-row",
            [
              _c("b-col", { attrs: { lg: "4", xs: "12" } }, [
                _c("h5", { staticClass: "m-t-1" }, [_vm._v("Layout options")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "There are few position options available for notifications. You can click any of\n            them\n            to change notifications position:"
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "location-selector" }, [
                  _c("div", {
                    staticClass: "bit top left",
                    on: {
                      click: function ($event) {
                        return _vm.toggleLocation("top-left")
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "bit top right",
                    on: {
                      click: function ($event) {
                        return _vm.toggleLocation("top-right")
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "bit top",
                    on: {
                      click: function ($event) {
                        return _vm.toggleLocation("top-center")
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "bit bottom left",
                    on: {
                      click: function ($event) {
                        return _vm.toggleLocation("bottom-left")
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "bit bottom right",
                    on: {
                      click: function ($event) {
                        return _vm.toggleLocation("bottom-right")
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "bit bottom",
                    on: {
                      click: function ($event) {
                        return _vm.toggleLocation("bottom-center")
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("b-col", { attrs: { lg: "4", xs: "12" } }, [
                _c("h5", { staticClass: "m-t-1" }, [
                  _vm._v("Notification Types"),
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Different types of notifications for lots of use cases. Custom classes are also\n            supported."
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "info", id: "show-info-message" },
                        on: { click: _vm.addInfoNotification },
                      },
                      [_vm._v("Info\n            Message")]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "danger", id: "show-error-message" },
                        on: { click: _vm.addErrorNotification },
                      },
                      [_vm._v("Error\n            Message")]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _c(
                      "b-button",
                      {
                        attrs: {
                          variant: "success",
                          id: "show-success-message",
                        },
                        on: { click: _vm.addSuccessNotification },
                      },
                      [_vm._v("Success Message")]
                    ),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("b-col", { attrs: { lg: "4", xs: "12" } }, [
                _c("h5", { staticClass: "m-t-1" }, [
                  _vm._v("Dead Simple Usage"),
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Just few lines of code to instantiate a notifications object. Does not require\n            passing any options:"
                  ),
                ]),
                _vm._v(" "),
                _c("pre", [
                  _c("code", [
                    _vm._v(
                      'this.$toasted.show("Thanks for checking out Messenger!");'
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("p", [_vm._v("More complex example:")]),
                _vm._v(" "),
                _c("pre", [
                  _vm._v("            "),
                  _c("code", [
                    _vm._v(
                      "this.$toasted.error('There was an explosion while processing your request.', {\n  duration: 5000,\n  position: 'top-center'\n});"
                    ),
                  ]),
                  _vm._v("\n          "),
                ]),
              ]),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", { staticClass: "page-title" }, [
      _vm._v("Messages - "),
      _c("span", { staticClass: "fw-semi-bold" }, [_vm._v("Notifications")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);