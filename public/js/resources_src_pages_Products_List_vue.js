"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_pages_Products_List_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/pages/Products/List.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/pages/Products/List.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Widget_Widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Widget/Widget */ "./resources/src/components/Widget/Widget.vue");
/* harmony import */ var _components_Validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Validator */ "./resources/src/components/Validator/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import axios from 'axios'
// import VueAxios from 'vue-axios'
// import Vue from 'vue'


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProductsList',
  components: {
    Widget: _components_Widget_Widget__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      categories: [],
      colors: {
        hot: 'danger',
        "new": 'warning',
        sale: "success"
      },
      products: null,
      subcategories: [],
      additionalInfos: [{
        name: '',
        keys: [''],
        values: ['']
      }],
      images: [{
        front: new File([''], ''),
        rear: new File([''], ''),
        left: new File([''], ''),
        right: new File([''], '')
      }],
      variations: [{
        name: '',
        values: [''],
        alias: [''],
        prices: [],
        vary: false,
        def: false
      }],
      imageIndex: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.axios.get('products').then(function (_ref) {
                var data = _ref.data;
                console.log(data);
                _this.products = data.products;
              }, function (err) {
                return console.log(err);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    fetchSubcat: function fetchSubcat(value) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.axios.get('subcategories', {
                  params: {
                    value: value
                  }
                }).then(function (_ref2) {
                  var data = _ref2.data;
                  return _this2.subcategories = data;
                }, function (err) {
                  return console.log(err);
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    addErrorNotification: function addErrorNotification(message) {
      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
      this.$toasted.error(message, {
        action: [{
          text: 'Cancel',
          onClick: function onClick(e, toastObject) {
            toastObject.el.classList.remove('info');
            toastObject.el.classList.add('success');
            toastObject.text('Alien planet destroyed!').goAway(timeout);
          }
        }]
      });
    },
    changeIt: function changeIt(ev) {
      console.log(ev);
    },
    submit: function submit() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var result, form, combinations, variations, additionalInfos, images, new_add_infos, real_images, index, el, formdata;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                result = (0,_components_Validator__WEBPACK_IMPORTED_MODULE_2__.ValidateProductForm)(_this3.form);
                _this3.prodError = result.errors;

                if (result.isValid) {
                  _context3.next = 5;
                  break;
                }

                _this3.addErrorNotification(result.message);

                return _context3.abrupt("return");

              case 5:
                if (!(_this3.images.slice(0, -1).length === 0)) {
                  _context3.next = 8;
                  break;
                }

                _this3.addErrorNotification("you must add at least on image gallery", 6000);

                return _context3.abrupt("return");

              case 8:
                if (!_this3.default_image) _this3.addErrorNotification("you must select at lestt one preview image gallery");
                form = _this3.form, combinations = _this3.combinations, variations = _this3.variations, additionalInfos = _this3.additionalInfos, images = _this3.images;
                new_add_infos = {};
                additionalInfos.slice(0, -1).forEach(function (el) {
                  var temp = {};

                  for (var index = 0; index < el.keys.length; index++) {
                    temp = _objectSpread(_objectSpread({}, temp), {}, _defineProperty({}, el.keys[index], el.values[index]));
                  }

                  new_add_infos = _objectSpread(_objectSpread({}, new_add_infos), {}, _defineProperty({}, el.name, temp));
                });
                real_images = images.slice(0, -1);
                index = 0;

              case 14:
                if (!(index < real_images.length)) {
                  _context3.next = 26;
                  break;
                }

                el = real_images[index];
                formdata = new FormData();
                formdata.append("images[]", el.front, el.front.name);
                formdata.append("images[]", el.rear, el.rear.name);
                formdata.append("images[]", el.right, el.right.name);
                formdata.append("images[]", el.left, el.left.name);
                _context3.next = 23;
                return _this3.axios.post("upload", formdata, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                }).then(function (_ref3) {
                  var data = _ref3.data;
                  return console.log(data, "data");
                }, function (err) {
                  return console.log(err.response);
                });

              case 23:
                index++;
                _context3.next = 14;
                break;

              case 26:
                _this3.axios.post('addProduct', {
                  product: _objectSpread({}, form),
                  combinations: _objectSpread({}, combinations),
                  variations: _toConsumableArray(variations.slice(0, -1)),
                  addInfos: _objectSpread({}, new_add_infos),
                  default_image: _this3.imageIndex
                }).then(function (_ref4) {
                  var data = _ref4.data;
                  console.log(data);
                }, function (err) {
                  return console.log(err);
                });

              case 27:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    onReset: function onReset() {
      this.form = {};
    },
    addVariation: function addVariation() {
      var _this4 = this;

      var new_combs = [];

      if (this.variations.length > 1) {
        this.variations[this.variations.length - 1].alias.forEach(function (el, ind) {
          var temp1 = el.split(' ').join('-');
          var price = null;
          var def1 = _this4.variations[_this4.variations.length - 1].def == ind;
          if (_this4.variations[_this4.variations.length - 1].vary) price = _this4.variations[_this4.variations.length - 1].prices[ind];

          _this4.combinations.forEach(function (comb) {
            var new_raw_key = el + comb.key;
            var def2 = comb["default"];
            new_combs.push({
              string: temp1 + '-' + comb.string,
              price: price,
              key: new_raw_key.split('').sort().join(''),
              "default": def2 && def1,
              gallery: null
            });
          });
        });
      } else this.variations[0].alias.forEach(function (el, ind) {
        var price = null;
        var def = _this4.variations[0].def == ind;
        if (_this4.variations[0].vary) price = _this4.variations[0].prices[ind];
        new_combs.push({
          string: el.split(' ').join('-'),
          price: price,
          key: el.split('').sort().join(''),
          "default": def,
          gallery: null
        });
      });

      this.combinations = new_combs;
      this.variations = [].concat(_toConsumableArray(this.variations), [{
        name: '',
        values: [''],
        alias: [''],
        vary: false,
        def: false,
        prices: []
      }]); // console.log(new_combs)
    },
    addGallery: function addGallery() {
      this.images = [].concat(_toConsumableArray(this.images), [{
        front: new File([''], ''),
        rear: new File([''], ''),
        left: new File([''], ''),
        right: new File([''], '')
      }]);
    },
    addTable: function addTable() {
      this.additionalInfos = [].concat(_toConsumableArray(this.additionalInfos), [{
        name: '',
        keys: [''],
        values: ['']
      }]);
    }
  }
});

/***/ }),

/***/ "./resources/src/components/Validator/index.js":
/*!*****************************************************!*\
  !*** ./resources/src/components/Validator/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidateProductForm": () => (/* binding */ ValidateProductForm)
/* harmony export */ });
var ValidateProductForm = function ValidateProductForm(payload) {
  var isValid = true;
  var errors = {};

  if (!payload.name) {
    isValid = false;
    errors.name = false;
  }

  if (!payload.category) {
    isValid = false;
    errors.category = true;
  }

  if (!payload.subcategory) {
    isValid = false;
    errors.subcategory = false;
  }

  if (!payload.summary) {
    isValid = false;
    errors.summary = false;
  }

  if (!payload.desc) {
    isValid = false;
    errors.desc = false;
  }

  return {
    isValid: isValid,
    errors: errors,
    message: "please check your product infos...!"
  };
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/pages/Products/List.vue?vue&type=style&index=0&id=d2b116aa&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/pages/Products/List.vue?vue&type=style&index=0&id=d2b116aa&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.cust_form[data-v-d2b116aa] {\n  display: flex;\n  justify-content : space-between;\n}\n.child.values[data-v-d2b116aa] {\n    \n      flex: 0 0 55%;\n}\n.child.name[data-v-d2b116aa] {\n      flex: 0 0 38%;\n}\n.select_error[data-v-d2b116aa] {\n    border: 1px solid red\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/pages/Products/List.vue?vue&type=style&index=0&id=d2b116aa&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/pages/Products/List.vue?vue&type=style&index=0&id=d2b116aa&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_d2b116aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=style&index=0&id=d2b116aa&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/pages/Products/List.vue?vue&type=style&index=0&id=d2b116aa&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_d2b116aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_d2b116aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/src/pages/Products/List.vue":
/*!***********************************************!*\
  !*** ./resources/src/pages/Products/List.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _List_vue_vue_type_template_id_d2b116aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=d2b116aa&scoped=true& */ "./resources/src/pages/Products/List.vue?vue&type=template&id=d2b116aa&scoped=true&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/src/pages/Products/List.vue?vue&type=script&lang=js&");
/* harmony import */ var _List_vue_vue_type_style_index_0_id_d2b116aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List.vue?vue&type=style&index=0&id=d2b116aa&scoped=true&lang=css& */ "./resources/src/pages/Products/List.vue?vue&type=style&index=0&id=d2b116aa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_d2b116aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _List_vue_vue_type_template_id_d2b116aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d2b116aa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/pages/Products/List.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/pages/Products/List.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/src/pages/Products/List.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/pages/Products/List.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/pages/Products/List.vue?vue&type=style&index=0&id=d2b116aa&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/src/pages/Products/List.vue?vue&type=style&index=0&id=d2b116aa&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_d2b116aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=style&index=0&id=d2b116aa&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/pages/Products/List.vue?vue&type=style&index=0&id=d2b116aa&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/src/pages/Products/List.vue?vue&type=template&id=d2b116aa&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/src/pages/Products/List.vue?vue&type=template&id=d2b116aa&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_d2b116aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_d2b116aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_d2b116aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=template&id=d2b116aa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/pages/Products/List.vue?vue&type=template&id=d2b116aa&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/pages/Products/List.vue?vue&type=template&id=d2b116aa&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/pages/Products/List.vue?vue&type=template&id=d2b116aa&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "tables-basic" },
    [
      _c(
        "b-breadcrumb",
        [
          _c("b-breadcrumb-item", [_vm._v("Home")]),
          _vm._v(" "),
          _c("b-breadcrumb-item", { attrs: { active: "" } }, [
            _vm._v("Products"),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            [
              _c(
                "Widget",
                {
                  attrs: {
                    title:
                      "<h5>Table <span class='fw-semi-bold'>Styles</span></h5>",
                    customHeader: "",
                    settings: "",
                    close: "",
                  },
                },
                [
                  _c("div", { staticClass: "table-resposive" }, [
                    _c("table", { staticClass: "table" }, [
                      _c("thead", [
                        _c("tr", [
                          _c("th", { staticClass: "hidden-sm-down" }, [
                            _vm._v("#"),
                          ]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Picture")]),
                          _vm._v(" "),
                          _c("th", { staticClass: "hidden-sm-down" }, [
                            _vm._v("name"),
                          ]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Price (FCFA)")]),
                          _vm._v(" "),
                          _c("th", { staticClass: "hidden-sm-down" }, [
                            _vm._v("Date"),
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "hidden-sm-down" }, [
                            _vm._v("Incentory  (sold/remaining)"),
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "hidden-sm-down" }, [
                            _vm._v("Action"),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.products, function (product, index) {
                          return _c("tr", { key: index }, [
                            _c("td", [_vm._v(_vm._s(product.id))]),
                            _vm._v(" "),
                            _c("td", [
                              _c("img", {
                                staticClass: "img-rounded",
                                attrs: {
                                  src: "/" + product.preview_front_image,
                                  alt: "",
                                  height: "150",
                                },
                              }),
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "width-150" }, [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(product.name) +
                                  "\n                "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(product.price) +
                                  "\n                  "
                              ),
                              product.flash
                                ? _c(
                                    "div",
                                    [
                                      _c(
                                        "b-badge",
                                        {
                                          attrs: {
                                            variant: _vm.colors[product.flash],
                                          },
                                        },
                                        [_vm._v(_vm._s(product.flash))]
                                      ),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-muted" }, [
                              _vm._v("\n                  .\n                "),
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "width-150" }, [
                              _vm._v("\n                  .\n                "),
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "width-150" },
                              [
                                _c(
                                  "b-button-group",
                                  [
                                    _c("b-button", [_vm._v("Edit")]),
                                    _vm._v(" "),
                                    _c(
                                      "b-button",
                                      { attrs: { variant: "danger" } },
                                      [_vm._v("Delete")]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ])
                        }),
                        0
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "clearfix" }, [
                    _c(
                      "div",
                      { staticClass: "float-right" },
                      [
                        _c(
                          "b-button",
                          {
                            staticClass: "mr-3",
                            attrs: { variant: "default", size: "sm" },
                          },
                          [_vm._v("Send to...")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown",
                          {
                            staticClass: "mr-xs",
                            attrs: {
                              variant: "inverse",
                              size: "sm",
                              text: "Clear",
                              right: "",
                            },
                          },
                          [
                            _c("b-dropdown-item", [_vm._v("Clear")]),
                            _vm._v(" "),
                            _c("b-dropdown-item", [_vm._v("Move ...")]),
                            _vm._v(" "),
                            _c("b-dropdown-item", [
                              _vm._v("Something else here"),
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-divider"),
                            _vm._v(" "),
                            _c("b-dropdown-item", [_vm._v("Separated link")]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("p", [_vm._v("Basic table with styled content")]),
                  ]),
                ]
              ),
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
    return _c("h2", { staticClass: "page-title" }, [
      _vm._v("Product - "),
      _c("span", { staticClass: "fw-semi-bold" }, [_vm._v("List")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);