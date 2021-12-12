"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_components_Layout_Layout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Header/Header.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Header/Header.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Notifications_Notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Notifications/Notifications */ "./resources/src/components/Notifications/Notifications.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Header',
  components: {
    Notifications: _components_Notifications_Notifications__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      showNavbarAlert: true
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)('layout', {
    sidebarClose: function sidebarClose(state) {
      return state.sidebarClose;
    },
    sidebarStatic: function sidebarStatic(state) {
      return state.sidebarStatic;
    }
  })),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('layout', ['switchSidebar', 'changeSidebarActive'])), {}, {
    switchSidebarMethod: function switchSidebarMethod() {
      if (!this.sidebarClose) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      } else {
        this.switchSidebar(false);
        var paths = this.$route.fullPath.split('/');
        paths.pop();
        this.changeSidebarActive(paths.join('/'));
      }
    },
    logout: function logout() {
      this.axios.get('logout'); // window.localStorage.setItem('authenticated', false);
      // this.$router.push('/login');
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Helper/Helper.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Helper/Helper.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Helper',
  data: function data() {
    return {
      opened: false
    };
  },
  methods: {
    toggle: function toggle() {
      this.opened = !this.opened;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Layout/Layout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Layout/Layout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Sidebar/Sidebar */ "./resources/src/components/Sidebar/Sidebar.vue");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Header/Header */ "./resources/src/components/Header/Header.vue");
/* harmony import */ var _components_Helper_Helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Helper/Helper */ "./resources/src/components/Helper/Helper.vue");
/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.scss */ "./resources/src/components/Layout/Layout.scss");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Layout',
  components: {
    Sidebar: _components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    Header: _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"],
    Helper: _components_Helper_Helper__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)('layout', ['switchSidebar', 'changeSidebarActive'])),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapState)('layout', {
    sidebarClose: function sidebarClose(state) {
      return state.sidebarClose;
    }
  })),
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    this.$refs.content.addEventListener('animationend', function () {
      _this.$refs.content.classList.remove('animated');

      _this.$refs.content.classList.remove('fadeInUp');
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/Notifications.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/Notifications.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _NotificationsDemo_NotificationsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationsDemo/NotificationsList */ "./resources/src/components/Notifications/NotificationsDemo/NotificationsList.vue");
/* harmony import */ var _NotificationsDemo_NewNotificationsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationsDemo/NewNotificationsList */ "./resources/src/components/Notifications/NotificationsDemo/NewNotificationsList.vue");
/* harmony import */ var _NotificationsDemo_Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationsDemo/Messages */ "./resources/src/components/Notifications/NotificationsDemo/Messages.vue");
/* harmony import */ var _NotificationsDemo_Progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NotificationsDemo/Progress */ "./resources/src/components/Notifications/NotificationsDemo/Progress.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Notification',
  components: {
    NotifictionsList: _NotificationsDemo_NotificationsList__WEBPACK_IMPORTED_MODULE_0__["default"],
    NewNotifictionsList: _NotificationsDemo_NewNotificationsList__WEBPACK_IMPORTED_MODULE_1__["default"],
    Messages: _NotificationsDemo_Messages__WEBPACK_IMPORTED_MODULE_2__["default"],
    Progress: _NotificationsDemo_Progress__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      notificationsTabSelected: 1,
      newNotifications: null,
      isLoad: false
    };
  },
  methods: {
    loadNotifications: function loadNotifications() {
      var _this = this;

      vue__WEBPACK_IMPORTED_MODULE_4__["default"].set(this, 'isLoad', true);
      setTimeout(function () {
        vue__WEBPACK_IMPORTED_MODULE_4__["default"].set(_this, 'newNotifications', 'new notifications component');
        vue__WEBPACK_IMPORTED_MODULE_4__["default"].set(_this, 'isLoad', false);
      }, 1500);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/Messages.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/Messages.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Messages'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/NewNotificationsList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/NewNotificationsList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'NewNotificationsList'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/NotificationsList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/NotificationsList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'NotificationsList'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/Progress.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/Progress.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Progress'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Sidebar/NavLink/NavLink.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Sidebar/NavLink/NavLink.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'NavLink',
  props: {
    badge: {
      type: String,
      dafault: ''
    },
    header: {
      type: String,
      "default": ''
    },
    iconName: {
      type: String,
      "default": ''
    },
    headerLink: {
      type: String,
      "default": ''
    },
    link: {
      type: String,
      "default": ''
    },
    childrenLinks: {
      type: Array,
      "default": null
    },
    className: {
      type: String,
      "default": ''
    },
    isHeader: {
      type: Boolean,
      "default": false
    },
    deep: {
      type: Number,
      "default": 0
    },
    activeItem: {
      type: String,
      "default": ''
    },
    label: {
      type: String
    },
    labelColor: {
      type: String,
      "default": 'warning'
    },
    index: {
      type: String
    }
  },
  data: function data() {
    return {
      headerLinkWasClicked: true
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('layout', ['changeSidebarActive'])), {}, {
    togglePanelCollapse: function togglePanelCollapse(link) {
      this.changeSidebarActive(link);
      this.headerLinkWasClicked = !this.headerLinkWasClicked || !this.activeItem.includes(this.index);
    }
  }),
  computed: {
    fullIconName: function fullIconName() {
      return "fi ".concat(this.iconName);
    },
    isActive: function isActive() {
      return this.activeItem && this.activeItem.includes(this.index) && this.headerLinkWasClicked;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Sidebar/Sidebar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Sidebar/Sidebar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _NavLink_NavLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavLink/NavLink */ "./resources/src/components/Sidebar/NavLink/NavLink.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Sidebar',
  components: {
    NavLink: _NavLink_NavLink__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      alerts: [{
        id: 0,
        title: 'Sales Report',
        value: 15,
        footer: 'Calculating x-axis bias... 65%',
        color: 'primary'
      }, {
        id: 1,
        title: 'Personal Responsibility',
        value: 20,
        footer: 'Provide required notes',
        color: 'danger'
      }]
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('layout', ['changeSidebarActive', 'switchSidebar'])), {}, {
    setActiveByRoute: function setActiveByRoute() {
      var paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    }
  }),
  created: function created() {
    this.setActiveByRoute();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)('layout', {
    sidebarOpened: function sidebarOpened(state) {
      return !state.sidebarClose;
    },
    activeItem: function activeItem(state) {
      return state.sidebarActiveElement;
    }
  }))
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Layout/Layout.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Layout/Layout.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Fonts\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n.root {\n  height: 100%;\n}\n@media (min-width: 768px) {\n  .root {\n    margin-left: 230px;\n  }\n}\n@media print and (min-width: 768px) {\n  .root {\n    margin-left: 0;\n  }\n}\n\n.content {\n  position: relative;\n  flex-grow: 1;\n  padding: 2.85rem 2.85rem 3.85rem;\n}\n@media (max-width: 767.98px) {\n  .content {\n    padding: 20px 15px 40px;\n  }\n}\n@media (min-width: 576px) {\n  .content {\n    -webkit-user-select: auto !important;\n       -moz-user-select: auto !important;\n        -ms-user-select: auto !important;\n            user-select: auto !important;\n  }\n}\n\n.contentFooter {\n  position: absolute;\n  bottom: 15px;\n  color: rgba(244, 244, 245, 0.7);\n  padding: 0 2.85rem;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Header/Header.scss?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Header/Header.scss?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Fonts\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n.app-header.navbar {\n  z-index: 100;\n  padding: 0 1.85rem 0;\n}\n@media (max-width: 991.98px) {\n.app-header.navbar {\n    padding: 0 10px;\n}\n}\n.app-header.navbar .dropdown-menu {\n  color: rgba(244, 244, 245, 0.7);\n  margin-top: 12.5px;\n  background: radial-gradient(farthest-side ellipse at 10% 0, #333867, #17193B);\n  border: none;\n}\n.app-header.navbar .dropdown-item {\n  color: rgba(244, 244, 245, 0.6);\n}\n.app-header.navbar .dropdown-item:active, .app-header.navbar .dropdown-item:focus, .app-header.navbar .dropdown-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: rgba(244, 244, 245, 0.6);\n  outline: none;\n}\n.app-header.navbar .dropdown-menu-messages .dropdown-item {\n  display: flex;\n  align-items: center;\n}\n.app-header.navbar .dropdown-menu-settings .dropdown-divider {\n  border-color: #040620;\n}\n.app-header.navbar .search-group .input-group-text {\n  padding-left: 0.85rem;\n  color: #798892;\n  border-radius: 0;\n}\n.app-header.navbar .search-group #search-input {\n  border-radius: 0;\n}\n.app-header.navbar .divider {\n  display: block;\n  width: 1px;\n  height: 20px;\n  margin: 18px 15px;\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.app-header.navbar .header-alert {\n  background: rgba(0, 0, 0, 0.31);\n  border: none;\n  font-size: 0.875rem;\n  line-height: 19px;\n  margin-bottom: 0;\n  padding: 3px 9px;\n  text-shadow: none;\n  border-radius: 10px;\n  color: rgba(244, 244, 245, 0.6);\n}\n.app-header.navbar .header-alert .close {\n  margin-left: 1rem;\n}\n@media (max-width: 1199.98px) {\n.app-header.navbar .header-alert {\n    display: none;\n}\n}\n.app-header.navbar .navbar-nav-mobile {\n  flex-direction: row;\n}\n.app-header.navbar .navbar-nav-mobile .nav-item {\n  display: flex;\n  align-items: center;\n}\n.app-header.navbar .navbar-nav-mobile .nav-item.show {\n  display: flex !important;\n}\n.app-header.navbar .navbar-nav-mobile .nav-item .nav-link {\n  display: flex;\n  align-items: center;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  color: rgba(244, 244, 245, 0.6);\n}\n.app-header.navbar .navbar-nav-mobile .nav-item .nav-link:hover {\n  color: rgba(244, 244, 245, 0.9);\n}\n.app-header.navbar .navbar-nav-mobile .navbar-text {\n  display: flex;\n  align-items: center;\n}\n.app-header.navbar .navbar-nav-mobile .dropdown-menu {\n  position: absolute;\n}\n@media (max-width: 575.98px) {\n.app-header.navbar .navbar-nav-mobile .dropdown-menu {\n    position: fixed;\n    top: 60px;\n    right: 1rem;\n    margin-top: 0;\n}\n}\n.app-header.navbar .avatar-toggle .dropdown-toggle::after {\n  display: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Helper/Helper.scss?vue&type=style&index=0&id=27fa14f9&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Helper/Helper.scss?vue&type=style&index=0&id=27fa14f9&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Fonts\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n.theme-helper[data-v-27fa14f9] {\n  width: 220px;\n  position: fixed;\n  right: -220px;\n  top: 120px;\n  z-index: 100;\n  transition: right 0.3s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.theme-helper[data-v-27fa14f9] {\n    transition: none;\n}\n}\n.theme-helper.theme-helper-opened[data-v-27fa14f9] {\n  right: 0;\n}\n.theme-helper .theme-helper-toggler[data-v-27fa14f9] {\n  width: 55px;\n  margin-left: -55px;\n  cursor: pointer;\n}\n.theme-helper .theme-helper-toggler i[data-v-27fa14f9] {\n  -webkit-animation-duration: 6500ms;\n          animation-duration: 6500ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n}\n.theme-helper .theme-helper-toggler i[data-v-27fa14f9]:first-of-type {\n  -webkit-animation-name: spin-data-v-27fa14f9;\n          animation-name: spin-data-v-27fa14f9;\n  margin-right: -1.15rem;\n  vertical-align: text-bottom;\n}\n.theme-helper .theme-helper-toggler i[data-v-27fa14f9]:last-of-type {\n  -webkit-animation-name: spin-reverse-data-v-27fa14f9;\n          animation-name: spin-reverse-data-v-27fa14f9;\n  vertical-align: 0.875rem;\n}\n.theme-helper .theme-helper-spinner[data-v-27fa14f9] {\n  z-index: 200;\n  border-radius: 50% 0 0 50%;\n  padding: 0.8rem 0.5rem 0.8rem 1rem;\n  font-size: 1.75rem;\n  line-height: initial;\n  box-shadow: -1px 0 8px rgba(0, 0, 0, 0.2);\n  background: rgba(0, 0, 0, 0.34);\n}\n.theme-helper .theme-helper-header[data-v-27fa14f9] {\n  padding-top: 0;\n}\n.theme-helper .theme-helper-header h6[data-v-27fa14f9] {\n  margin: auto;\n}\n.theme-helper .theme-helper-content[data-v-27fa14f9] {\n  box-shadow: -1px 0 8px rgba(0, 0, 0, 0.2);\n  border-radius: 0;\n  background: rgba(0, 0, 0, 0.34);\n}\n.theme-helper .theme-sharing[data-v-27fa14f9], .theme-helper .theme-switcher[data-v-27fa14f9] {\n  font-size: 1.25rem;\n  cursor: pointer;\n}\n.theme-helper .abc-radio-warning input[type=radio]:not(:checked) + label[data-v-27fa14f9]::before {\n  background-color: #E49400;\n}\n.theme-helper .abc-radio-secondary input[type=radio]:not(:checked) + label[data-v-27fa14f9]::before {\n  background-color: rgba(244, 244, 245, 0.9);\n}\n@-webkit-keyframes spin-data-v-27fa14f9 {\n0% {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spin-data-v-27fa14f9 {\n0% {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes spin-reverse-data-v-27fa14f9 {\n0% {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes spin-reverse-data-v-27fa14f9 {\n0% {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(-360deg);\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Layout/Layout.scss?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Layout/Layout.scss?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Fonts\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n.root {\n  height: 100%;\n}\n@media (min-width: 768px) {\n.root {\n    margin-left: 230px;\n}\n}\n@media print and (min-width: 768px) {\n.root {\n    margin-left: 0;\n}\n}\n.content {\n  position: relative;\n  flex-grow: 1;\n  padding: 2.85rem 2.85rem 3.85rem;\n}\n@media (max-width: 767.98px) {\n.content {\n    padding: 20px 15px 40px;\n}\n}\n@media (min-width: 576px) {\n.content {\n    -webkit-user-select: auto !important;\n       -moz-user-select: auto !important;\n        -ms-user-select: auto !important;\n            user-select: auto !important;\n}\n}\n.contentFooter {\n  position: absolute;\n  bottom: 15px;\n  color: rgba(244, 244, 245, 0.7);\n  padding: 0 2.85rem;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Notifications/Notifications.scss?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Notifications/Notifications.scss?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Fonts\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n.notifications {\n  width: 343px;\n  height: 100%;\n  border: none;\n}\n.notifications :global(.list-group-item) {\n  border: none;\n}\n.header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.24);\n}\n.footer {\n  border-top: 1px solid rgba(0, 0, 0, 0.24);\n}\n.footer :global(.btn) {\n  background: none;\n  border: none;\n}\n.footer :global(.btn), .footer :global(.btn):hover, .footer :global(.btn):active, .footer :global(.btn):focus {\n  color: rgba(244, 244, 245, 0.6);\n  text-decoration: none;\n}\n.btnNotificationsReload {\n  color: rgba(0, 0, 0, 0.31);\n  outline: none;\n}\n.btnNotificationsReload i::before {\n  top: 2px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Notifications/NotificationsDemo/ListGroup.scss?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Notifications/NotificationsDemo/ListGroup.scss?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Fonts\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n.listGroup {\n  display: block;\n  height: 320px;\n  overflow-y: scroll;\n}\n.listGroup .listGroupItem:first-child {\n  border: none;\n}\n.listGroupItem {\n  transition: background-color 0.15s ease-in-out;\n  text-decoration: none;\n  color: #636c72;\n  display: block;\n}\n.listGroupItem .progress {\n  transition: background 0.15s ease-in-out;\n}\n.listGroupItem .progress:hover {\n  background: #000;\n}\n.listGroupItem:hover {\n  background-color: #f8f9fa;\n}\n.listGroupItem:hover .progress {\n  background: #fff !important;\n}\n.listGroupItem:first-child {\n  border-top: none;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.listGroupItem:last-child {\n  border-bottom: none;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.notificationIcon {\n  margin-right: 1rem;\n  float: left;\n}\n.notificationIcon::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Sidebar/NavLink/NavLink.scss?vue&type=style&index=0&id=732219bc&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Sidebar/NavLink/NavLink.scss?vue&type=style&index=0&id=732219bc&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Fonts\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n.headerLink[data-v-732219bc] {\n  width: 100%;\n  overflow-x: hidden;\n}\n@media (min-width: 992px) and (min-height: 670px), (max-width: 767px) {\n.headerLink[data-v-732219bc] {\n    font-size: 13px;\n}\n}\n.headerLink a[data-v-732219bc] {\n  display: block;\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: 400;\n}\n.headerLink:last-child > a[data-v-732219bc] {\n  border-bottom: 1px solid transparent;\n}\n.headerLink > a[data-v-732219bc],\n.headerLink > div a[data-v-732219bc] {\n  align-items: center;\n  position: relative;\n  padding-left: 54px;\n  line-height: 35px;\n  border-top: 1px solid transparent;\n  border-radius: 0.3rem;\n}\n.headerLink > a > i[data-v-732219bc],\n.headerLink > div a > i[data-v-732219bc] {\n  margin-right: 7px;\n}\n@media (min-width: 992px) and (min-height: 670px), (max-width: 767px) {\n.headerLink > a[data-v-732219bc],\n.headerLink > div a[data-v-732219bc] {\n    line-height: 55px;\n}\n}\n.headerLink > a[data-v-732219bc]:hover,\n.headerLink > div a[data-v-732219bc]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.headerLink .icon[data-v-732219bc] {\n  font-size: 1.1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 3px;\n  left: 11px;\n  width: 32px;\n  height: 32px;\n}\n@media (min-width: 992px) and (min-height: 670px), (max-width: 767px) {\n.headerLink .icon[data-v-732219bc] {\n    top: 12px;\n}\n}\n.headerLink .badge[data-v-732219bc] {\n  float: right;\n  line-height: 8px;\n  margin-top: 6px;\n  margin-right: 15px;\n  padding: 7px;\n}\n@media (min-width: 992px) and (min-height: 670px), (max-width: 767px) {\n.headerLink .badge[data-v-732219bc] {\n    margin-top: 16px;\n}\n}\n.nav-link-nested > a[data-v-732219bc] {\n  line-height: 32px !important;\n}\n.headerLabel[data-v-732219bc] {\n  font-weight: 600;\n}\n.caretWrapper[data-v-732219bc] {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  margin-right: 15px;\n}\n.caretWrapper i[data-v-732219bc] {\n  transform: rotate(-90deg);\n  transition: transform 0.3s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.caretWrapper i[data-v-732219bc] {\n    transition: none;\n}\n}\n.carretActive i[data-v-732219bc] {\n  transform: rotate(0deg);\n}\na.router-link-active[data-v-732219bc] {\n  font-weight: 600;\n  font-size: 1.143rem;\n}\na.router-link-active .icon[data-v-732219bc] {\n  border-radius: 50%;\n  background-color: #3979F6;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Sidebar/Sidebar.scss?vue&type=style&index=0&id=2298edb3&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Sidebar/Sidebar.scss?vue&type=style&index=0&id=2298edb3&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Fonts\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n.sidebar[data-v-2298edb3] {\n  color: rgba(244, 244, 245, 0.6);\n  margin-left: 15px;\n}\n@media (min-width: 768px) {\n.sidebar[data-v-2298edb3] {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 230px;\n    bottom: 0;\n}\n}\n.logo[data-v-2298edb3] {\n  margin: 15px 0;\n  font-size: 18px;\n  width: 100%;\n  font-weight: 400;\n  text-transform: uppercase;\n  text-align: center;\n  transition: width 0.3s ease-in-out;\n}\n.logo a[data-v-2298edb3] {\n  color: #3979F6;\n  padding: 0 5px;\n  text-decoration: none;\n  white-space: nowrap;\n}\n@media (max-width: 767.98px) {\n.logo[data-v-2298edb3] {\n    display: none;\n}\n}\n.generator-link[data-v-2298edb3] {\n  display: block;\n  color: #fff !important;\n  text-decoration: none;\n  cursor: pointer;\n  font-size: 16px !important;\n}\n.nav[data-v-2298edb3] {\n  width: 100%;\n  padding: 30px 0 10px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.navTitle[data-v-2298edb3] {\n  margin: 35px 0 5px 11px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: #474E80;\n  transition: opacity 0.3s ease-in-out;\n}\n@media (min-width: 992px) {\n.navTitle[data-v-2298edb3] {\n    opacity: 1;\n}\n}\n.actionLink[data-v-2298edb3] {\n  color: #aaa;\n  float: right;\n  margin-right: 15px;\n  margin-top: -1px;\n}\n.actionLink .la[data-v-2298edb3] {\n  font-size: 0.875rem;\n  margin-top: 4px;\n}\n.labelName[data-v-2298edb3] {\n  color: #fff;\n  transition: opacity 0.3s ease-in-out;\n}\n.glyphiconSm[data-v-2298edb3] {\n  font-size: 9px;\n}\n.sidebarLabels[data-v-2298edb3] {\n  list-style-type: none;\n  padding: 11px;\n  padding-right: 15px;\n}\n.sidebarLabels > li + li[data-v-2298edb3] {\n  margin-top: 28px;\n}\n.sidebarLabels li > a[data-v-2298edb3] {\n  font-size: 0.9rem;\n  color: rgba(244, 244, 245, 0.6);\n  text-decoration: none;\n}\n.sidebarLabels li > a > i[data-v-2298edb3] {\n  font-size: 11px;\n  vertical-align: 1px;\n  transition: margin-left 0.3s ease-in-out;\n}\n.sidebarAlerts[data-v-2298edb3] {\n  margin-bottom: 2rem;\n  transition: opacity 0.3s ease-in-out;\n  opacity: 1;\n}\n.sidebarAlert[data-v-2298edb3] {\n  background: transparent;\n  margin-bottom: 0;\n  padding: 0.5rem 15px 0.5rem 11px;\n}\n.sidebarAlert span[data-v-2298edb3], .sidebarAlert small[data-v-2298edb3] {\n  color: #fff;\n}\n.sidebarAlert .sidebarProgress[data-v-2298edb3] {\n  background-color: #151730;\n}\n.groupTitle[data-v-2298edb3] {\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n.sidebar-collapse[data-v-2298edb3] {\n    display: block !important;\n}\n}\n@media print and (min-width: 768px) {\n.sidebar-collapse[data-v-2298edb3] {\n    display: none !important;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/src/assets/people/a1.jpg":
/*!********************************************!*\
  !*** ./resources/src/assets/people/a1.jpg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/a1.jpg?4781a3056d7081d74ad15976137bfac0");

/***/ }),

/***/ "./resources/src/assets/people/a2.jpg":
/*!********************************************!*\
  !*** ./resources/src/assets/people/a2.jpg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/a2.jpg?9d099eb1eefd38f2c2d986f0e5ebfa77");

/***/ }),

/***/ "./resources/src/assets/people/a3.jpg":
/*!********************************************!*\
  !*** ./resources/src/assets/people/a3.jpg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/a3.jpg?5abba496aa303fd51a5c9ec2fa2a160e");

/***/ }),

/***/ "./resources/src/assets/people/a4.jpg":
/*!********************************************!*\
  !*** ./resources/src/assets/people/a4.jpg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/a4.jpg?0933d72da300a165f68b9090fb1ed0e6");

/***/ }),

/***/ "./resources/src/assets/people/a5.jpg":
/*!********************************************!*\
  !*** ./resources/src/assets/people/a5.jpg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/a5.jpg?96cde40a47e8c446518dd373dd3a6da3");

/***/ }),

/***/ "./resources/src/assets/people/a6.jpg":
/*!********************************************!*\
  !*** ./resources/src/assets/people/a6.jpg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/a6.jpg?d7a579470c5e875d53f193033fbb3985");

/***/ }),

/***/ "./resources/src/assets/people/a7.png":
/*!********************************************!*\
  !*** ./resources/src/assets/people/a7.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/a7.png?e730804c40afdbca9eae498a83d4d3f0");

/***/ }),

/***/ "./resources/src/components/Layout/Layout.scss":
/*!*****************************************************!*\
  !*** ./resources/src/components/Layout/Layout.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Layout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./Layout.scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Layout/Layout.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Layout_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Layout_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Header/Header.scss?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Header/Header.scss?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Header_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./Header.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Header/Header.scss?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Header_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Header_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Helper/Helper.scss?vue&type=style&index=0&id=27fa14f9&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Helper/Helper.scss?vue&type=style&index=0&id=27fa14f9&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Helper_scss_vue_type_style_index_0_id_27fa14f9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./Helper.scss?vue&type=style&index=0&id=27fa14f9&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Helper/Helper.scss?vue&type=style&index=0&id=27fa14f9&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Helper_scss_vue_type_style_index_0_id_27fa14f9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Helper_scss_vue_type_style_index_0_id_27fa14f9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Layout/Layout.scss?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Layout/Layout.scss?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Layout_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./Layout.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Layout/Layout.scss?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Layout_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Layout_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Notifications/Notifications.scss?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Notifications/Notifications.scss?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Notifications_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./Notifications.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Notifications/Notifications.scss?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Notifications_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Notifications_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Notifications/NotificationsDemo/ListGroup.scss?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Notifications/NotificationsDemo/ListGroup.scss?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_ListGroup_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./ListGroup.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Notifications/NotificationsDemo/ListGroup.scss?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_ListGroup_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_ListGroup_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Sidebar/NavLink/NavLink.scss?vue&type=style&index=0&id=732219bc&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Sidebar/NavLink/NavLink.scss?vue&type=style&index=0&id=732219bc&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_NavLink_scss_vue_type_style_index_0_id_732219bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./NavLink.scss?vue&type=style&index=0&id=732219bc&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Sidebar/NavLink/NavLink.scss?vue&type=style&index=0&id=732219bc&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_NavLink_scss_vue_type_style_index_0_id_732219bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_NavLink_scss_vue_type_style_index_0_id_732219bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Sidebar/Sidebar.scss?vue&type=style&index=0&id=2298edb3&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Sidebar/Sidebar.scss?vue&type=style&index=0&id=2298edb3&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Sidebar_scss_vue_type_style_index_0_id_2298edb3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./Sidebar.scss?vue&type=style&index=0&id=2298edb3&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Sidebar/Sidebar.scss?vue&type=style&index=0&id=2298edb3&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Sidebar_scss_vue_type_style_index_0_id_2298edb3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Sidebar_scss_vue_type_style_index_0_id_2298edb3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/src/components/Header/Header.vue":
/*!****************************************************!*\
  !*** ./resources/src/components/Header/Header.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_78a147ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=78a147ce& */ "./resources/src/components/Header/Header.vue?vue&type=template&id=78a147ce&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/src/components/Header/Header.vue?vue&type=script&lang=js&");
/* harmony import */ var _Header_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.scss?vue&type=style&index=0&lang=scss& */ "./resources/src/components/Header/Header.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_78a147ce___WEBPACK_IMPORTED_MODULE_0__.render,
  _Header_vue_vue_type_template_id_78a147ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Header/Header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/components/Helper/Helper.vue":
/*!****************************************************!*\
  !*** ./resources/src/components/Helper/Helper.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Helper_vue_vue_type_template_id_27fa14f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Helper.vue?vue&type=template&id=27fa14f9&scoped=true& */ "./resources/src/components/Helper/Helper.vue?vue&type=template&id=27fa14f9&scoped=true&");
/* harmony import */ var _Helper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helper.vue?vue&type=script&lang=js& */ "./resources/src/components/Helper/Helper.vue?vue&type=script&lang=js&");
/* harmony import */ var _Helper_scss_vue_type_style_index_0_id_27fa14f9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Helper.scss?vue&type=style&index=0&id=27fa14f9&lang=scss&scoped=true& */ "./resources/src/components/Helper/Helper.scss?vue&type=style&index=0&id=27fa14f9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Helper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Helper_vue_vue_type_template_id_27fa14f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Helper_vue_vue_type_template_id_27fa14f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "27fa14f9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Helper/Helper.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/components/Layout/Layout.vue":
/*!****************************************************!*\
  !*** ./resources/src/components/Layout/Layout.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue_vue_type_template_id_373b3179___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=373b3179& */ "./resources/src/components/Layout/Layout.vue?vue&type=template&id=373b3179&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/src/components/Layout/Layout.vue?vue&type=script&lang=js&");
/* harmony import */ var _Layout_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.scss?vue&type=style&index=0&lang=scss& */ "./resources/src/components/Layout/Layout.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_373b3179___WEBPACK_IMPORTED_MODULE_0__.render,
  _Layout_vue_vue_type_template_id_373b3179___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Layout/Layout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/components/Notifications/Notifications.vue":
/*!******************************************************************!*\
  !*** ./resources/src/components/Notifications/Notifications.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Notifications_vue_vue_type_template_id_51004f0b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notifications.vue?vue&type=template&id=51004f0b& */ "./resources/src/components/Notifications/Notifications.vue?vue&type=template&id=51004f0b&");
/* harmony import */ var _Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notifications.vue?vue&type=script&lang=js& */ "./resources/src/components/Notifications/Notifications.vue?vue&type=script&lang=js&");
/* harmony import */ var _Notifications_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notifications.scss?vue&type=style&index=0&lang=scss& */ "./resources/src/components/Notifications/Notifications.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notifications_vue_vue_type_template_id_51004f0b___WEBPACK_IMPORTED_MODULE_0__.render,
  _Notifications_vue_vue_type_template_id_51004f0b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Notifications/Notifications.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/components/Notifications/NotificationsDemo/Messages.vue":
/*!*******************************************************************************!*\
  !*** ./resources/src/components/Notifications/NotificationsDemo/Messages.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Messages_vue_vue_type_template_id_16b95606___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Messages.vue?vue&type=template&id=16b95606& */ "./resources/src/components/Notifications/NotificationsDemo/Messages.vue?vue&type=template&id=16b95606&");
/* harmony import */ var _Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Messages.vue?vue&type=script&lang=js& */ "./resources/src/components/Notifications/NotificationsDemo/Messages.vue?vue&type=script&lang=js&");
/* harmony import */ var _ListGroup_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListGroup.scss?vue&type=style&index=0&lang=scss& */ "./resources/src/components/Notifications/NotificationsDemo/ListGroup.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Messages_vue_vue_type_template_id_16b95606___WEBPACK_IMPORTED_MODULE_0__.render,
  _Messages_vue_vue_type_template_id_16b95606___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Notifications/NotificationsDemo/Messages.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/components/Notifications/NotificationsDemo/NewNotificationsList.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/src/components/Notifications/NotificationsDemo/NewNotificationsList.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewNotificationsList_vue_vue_type_template_id_6ae7a917___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewNotificationsList.vue?vue&type=template&id=6ae7a917& */ "./resources/src/components/Notifications/NotificationsDemo/NewNotificationsList.vue?vue&type=template&id=6ae7a917&");
/* harmony import */ var _NewNotificationsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewNotificationsList.vue?vue&type=script&lang=js& */ "./resources/src/components/Notifications/NotificationsDemo/NewNotificationsList.vue?vue&type=script&lang=js&");
/* harmony import */ var _ListGroup_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListGroup.scss?vue&type=style&index=0&lang=scss& */ "./resources/src/components/Notifications/NotificationsDemo/ListGroup.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NewNotificationsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewNotificationsList_vue_vue_type_template_id_6ae7a917___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewNotificationsList_vue_vue_type_template_id_6ae7a917___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Notifications/NotificationsDemo/NewNotificationsList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/components/Notifications/NotificationsDemo/NotificationsList.vue":
/*!****************************************************************************************!*\
  !*** ./resources/src/components/Notifications/NotificationsDemo/NotificationsList.vue ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NotificationsList_vue_vue_type_template_id_23878b76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationsList.vue?vue&type=template&id=23878b76& */ "./resources/src/components/Notifications/NotificationsDemo/NotificationsList.vue?vue&type=template&id=23878b76&");
/* harmony import */ var _NotificationsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationsList.vue?vue&type=script&lang=js& */ "./resources/src/components/Notifications/NotificationsDemo/NotificationsList.vue?vue&type=script&lang=js&");
/* harmony import */ var _ListGroup_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListGroup.scss?vue&type=style&index=0&lang=scss& */ "./resources/src/components/Notifications/NotificationsDemo/ListGroup.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NotificationsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotificationsList_vue_vue_type_template_id_23878b76___WEBPACK_IMPORTED_MODULE_0__.render,
  _NotificationsList_vue_vue_type_template_id_23878b76___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Notifications/NotificationsDemo/NotificationsList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/components/Notifications/NotificationsDemo/Progress.vue":
/*!*******************************************************************************!*\
  !*** ./resources/src/components/Notifications/NotificationsDemo/Progress.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Progress_vue_vue_type_template_id_6b05bd5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Progress.vue?vue&type=template&id=6b05bd5e& */ "./resources/src/components/Notifications/NotificationsDemo/Progress.vue?vue&type=template&id=6b05bd5e&");
/* harmony import */ var _Progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Progress.vue?vue&type=script&lang=js& */ "./resources/src/components/Notifications/NotificationsDemo/Progress.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Progress_vue_vue_type_template_id_6b05bd5e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Progress_vue_vue_type_template_id_6b05bd5e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Notifications/NotificationsDemo/Progress.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/components/Sidebar/NavLink/NavLink.vue":
/*!**************************************************************!*\
  !*** ./resources/src/components/Sidebar/NavLink/NavLink.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavLink_vue_vue_type_template_id_732219bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavLink.vue?vue&type=template&id=732219bc&scoped=true& */ "./resources/src/components/Sidebar/NavLink/NavLink.vue?vue&type=template&id=732219bc&scoped=true&");
/* harmony import */ var _NavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavLink.vue?vue&type=script&lang=js& */ "./resources/src/components/Sidebar/NavLink/NavLink.vue?vue&type=script&lang=js&");
/* harmony import */ var _NavLink_scss_vue_type_style_index_0_id_732219bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavLink.scss?vue&type=style&index=0&id=732219bc&lang=scss&scoped=true& */ "./resources/src/components/Sidebar/NavLink/NavLink.scss?vue&type=style&index=0&id=732219bc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavLink_vue_vue_type_template_id_732219bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NavLink_vue_vue_type_template_id_732219bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "732219bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Sidebar/NavLink/NavLink.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/components/Sidebar/Sidebar.vue":
/*!******************************************************!*\
  !*** ./resources/src/components/Sidebar/Sidebar.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_vue_vue_type_template_id_2298edb3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=2298edb3&scoped=true& */ "./resources/src/components/Sidebar/Sidebar.vue?vue&type=template&id=2298edb3&scoped=true&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/src/components/Sidebar/Sidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _Sidebar_scss_vue_type_style_index_0_id_2298edb3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar.scss?vue&type=style&index=0&id=2298edb3&lang=scss&scoped=true& */ "./resources/src/components/Sidebar/Sidebar.scss?vue&type=style&index=0&id=2298edb3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_2298edb3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Sidebar_vue_vue_type_template_id_2298edb3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2298edb3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Sidebar/Sidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/components/Header/Header.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/src/components/Header/Header.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Header/Header.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Helper/Helper.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/src/components/Helper/Helper.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Helper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Helper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Helper/Helper.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Helper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Layout/Layout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/src/components/Layout/Layout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Layout/Layout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Notifications/Notifications.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/src/components/Notifications/Notifications.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Notifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/Notifications.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Notifications/NotificationsDemo/Messages.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/src/components/Notifications/NotificationsDemo/Messages.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Messages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/Messages.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Notifications/NotificationsDemo/NewNotificationsList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/src/components/Notifications/NotificationsDemo/NewNotificationsList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewNotificationsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewNotificationsList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/NewNotificationsList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewNotificationsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Notifications/NotificationsDemo/NotificationsList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/src/components/Notifications/NotificationsDemo/NotificationsList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NotificationsList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/NotificationsList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Notifications/NotificationsDemo/Progress.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/src/components/Notifications/NotificationsDemo/Progress.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Progress.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/Progress.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Sidebar/NavLink/NavLink.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/src/components/Sidebar/NavLink/NavLink.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Sidebar/NavLink/NavLink.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Sidebar/Sidebar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/src/components/Sidebar/Sidebar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Sidebar/Sidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Header/Header.scss?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************!*\
  !*** ./resources/src/components/Header/Header.scss?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Header_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./Header.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Header/Header.scss?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/src/components/Helper/Helper.scss?vue&type=style&index=0&id=27fa14f9&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/src/components/Helper/Helper.scss?vue&type=style&index=0&id=27fa14f9&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Helper_scss_vue_type_style_index_0_id_27fa14f9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./Helper.scss?vue&type=style&index=0&id=27fa14f9&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Helper/Helper.scss?vue&type=style&index=0&id=27fa14f9&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/src/components/Layout/Layout.scss?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************!*\
  !*** ./resources/src/components/Layout/Layout.scss?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Layout_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./Layout.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Layout/Layout.scss?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/src/components/Notifications/Notifications.scss?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./resources/src/components/Notifications/Notifications.scss?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Notifications_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./Notifications.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Notifications/Notifications.scss?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/src/components/Notifications/NotificationsDemo/ListGroup.scss?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/src/components/Notifications/NotificationsDemo/ListGroup.scss?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_ListGroup_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./ListGroup.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Notifications/NotificationsDemo/ListGroup.scss?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/src/components/Sidebar/NavLink/NavLink.scss?vue&type=style&index=0&id=732219bc&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/src/components/Sidebar/NavLink/NavLink.scss?vue&type=style&index=0&id=732219bc&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_NavLink_scss_vue_type_style_index_0_id_732219bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./NavLink.scss?vue&type=style&index=0&id=732219bc&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Sidebar/NavLink/NavLink.scss?vue&type=style&index=0&id=732219bc&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/src/components/Sidebar/Sidebar.scss?vue&type=style&index=0&id=2298edb3&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/src/components/Sidebar/Sidebar.scss?vue&type=style&index=0&id=2298edb3&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_Sidebar_scss_vue_type_style_index_0_id_2298edb3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./Sidebar.scss?vue&type=style&index=0&id=2298edb3&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/src/components/Sidebar/Sidebar.scss?vue&type=style&index=0&id=2298edb3&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/src/components/Header/Header.vue?vue&type=template&id=78a147ce&":
/*!***********************************************************************************!*\
  !*** ./resources/src/components/Header/Header.vue?vue&type=template&id=78a147ce& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_78a147ce___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_78a147ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_78a147ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Header.vue?vue&type=template&id=78a147ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Header/Header.vue?vue&type=template&id=78a147ce&");


/***/ }),

/***/ "./resources/src/components/Helper/Helper.vue?vue&type=template&id=27fa14f9&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/src/components/Helper/Helper.vue?vue&type=template&id=27fa14f9&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Helper_vue_vue_type_template_id_27fa14f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Helper_vue_vue_type_template_id_27fa14f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Helper_vue_vue_type_template_id_27fa14f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Helper.vue?vue&type=template&id=27fa14f9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Helper/Helper.vue?vue&type=template&id=27fa14f9&scoped=true&");


/***/ }),

/***/ "./resources/src/components/Layout/Layout.vue?vue&type=template&id=373b3179&":
/*!***********************************************************************************!*\
  !*** ./resources/src/components/Layout/Layout.vue?vue&type=template&id=373b3179& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_373b3179___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_373b3179___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_373b3179___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=template&id=373b3179& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Layout/Layout.vue?vue&type=template&id=373b3179&");


/***/ }),

/***/ "./resources/src/components/Notifications/Notifications.vue?vue&type=template&id=51004f0b&":
/*!*************************************************************************************************!*\
  !*** ./resources/src/components/Notifications/Notifications.vue?vue&type=template&id=51004f0b& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_51004f0b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_51004f0b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_51004f0b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Notifications.vue?vue&type=template&id=51004f0b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/Notifications.vue?vue&type=template&id=51004f0b&");


/***/ }),

/***/ "./resources/src/components/Notifications/NotificationsDemo/Messages.vue?vue&type=template&id=16b95606&":
/*!**************************************************************************************************************!*\
  !*** ./resources/src/components/Notifications/NotificationsDemo/Messages.vue?vue&type=template&id=16b95606& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_16b95606___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_16b95606___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_16b95606___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Messages.vue?vue&type=template&id=16b95606& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/Messages.vue?vue&type=template&id=16b95606&");


/***/ }),

/***/ "./resources/src/components/Notifications/NotificationsDemo/NewNotificationsList.vue?vue&type=template&id=6ae7a917&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/src/components/Notifications/NotificationsDemo/NewNotificationsList.vue?vue&type=template&id=6ae7a917& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewNotificationsList_vue_vue_type_template_id_6ae7a917___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewNotificationsList_vue_vue_type_template_id_6ae7a917___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewNotificationsList_vue_vue_type_template_id_6ae7a917___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewNotificationsList.vue?vue&type=template&id=6ae7a917& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/NewNotificationsList.vue?vue&type=template&id=6ae7a917&");


/***/ }),

/***/ "./resources/src/components/Notifications/NotificationsDemo/NotificationsList.vue?vue&type=template&id=23878b76&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/src/components/Notifications/NotificationsDemo/NotificationsList.vue?vue&type=template&id=23878b76& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsList_vue_vue_type_template_id_23878b76___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsList_vue_vue_type_template_id_23878b76___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsList_vue_vue_type_template_id_23878b76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NotificationsList.vue?vue&type=template&id=23878b76& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/NotificationsList.vue?vue&type=template&id=23878b76&");


/***/ }),

/***/ "./resources/src/components/Notifications/NotificationsDemo/Progress.vue?vue&type=template&id=6b05bd5e&":
/*!**************************************************************************************************************!*\
  !*** ./resources/src/components/Notifications/NotificationsDemo/Progress.vue?vue&type=template&id=6b05bd5e& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_template_id_6b05bd5e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_template_id_6b05bd5e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_template_id_6b05bd5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Progress.vue?vue&type=template&id=6b05bd5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/Progress.vue?vue&type=template&id=6b05bd5e&");


/***/ }),

/***/ "./resources/src/components/Sidebar/NavLink/NavLink.vue?vue&type=template&id=732219bc&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/src/components/Sidebar/NavLink/NavLink.vue?vue&type=template&id=732219bc&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_template_id_732219bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_template_id_732219bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_template_id_732219bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavLink.vue?vue&type=template&id=732219bc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Sidebar/NavLink/NavLink.vue?vue&type=template&id=732219bc&scoped=true&");


/***/ }),

/***/ "./resources/src/components/Sidebar/Sidebar.vue?vue&type=template&id=2298edb3&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/src/components/Sidebar/Sidebar.vue?vue&type=template&id=2298edb3&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_2298edb3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_2298edb3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_2298edb3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=template&id=2298edb3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Sidebar/Sidebar.vue?vue&type=template&id=2298edb3&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Header/Header.vue?vue&type=template&id=78a147ce&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Header/Header.vue?vue&type=template&id=78a147ce& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    "b-navbar",
    { staticClass: "app-header d-print-none", attrs: { toggleable: "md" } },
    [
      _c(
        "b-navbar-nav",
        { staticClass: "navbar-nav-mobile ml-auto" },
        [
          _c(
            "b-nav-text",
            { staticClass: "mr-3" },
            [
              _c(
                "b-alert",
                {
                  staticClass:
                    "header-alert animate__animated animate__bounceIn animate__delay-2s",
                  attrs: { dismissible: "" },
                  model: {
                    value: _vm.showNavbarAlert,
                    callback: function ($$v) {
                      _vm.showNavbarAlert = $$v
                    },
                    expression: "showNavbarAlert",
                  },
                },
                [
                  _c("i", { staticClass: "fa fa-info-circle mr-1" }),
                  _vm._v(
                    " Check out Light Blue Settings on the right!\n        "
                  ),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-nav-form",
            { staticClass: "d-sm-down-none mr-3" },
            [
              _c(
                "b-input-group",
                { staticClass: "input-group-transparent search-group" },
                [
                  _c(
                    "b-input-group-text",
                    { attrs: { slot: "prepend" }, slot: "prepend" },
                    [_c("i", { staticClass: "fi flaticon-search-2" })]
                  ),
                  _vm._v(" "),
                  _c("b-input", {
                    staticClass: "input-transparent",
                    attrs: {
                      id: "search-input",
                      placeholder: "Search Dashboard",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-nav-item-dropdown",
            {
              staticClass: "avatar-toggle",
              attrs: { right: "", "menu-class": "py-0" },
            },
            [
              _c("template", { slot: "button-content" }, [
                _c(
                  "span",
                  {
                    staticClass:
                      "avatar rounded-circle thumb-sm-1 float-left mr-2",
                  },
                  [
                    _c("img", {
                      staticClass: "rounded-circle",
                      attrs: {
                        src: __webpack_require__(/*! ../../assets/people/a7.png */ "./resources/src/assets/people/a7.png"),
                        alt: "...",
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "text-white" }, [
                  _vm._v("Philip Smith"),
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass:
                      "mx-2 circle bg-danger text-dark fs-sm fw-bold",
                  },
                  [_vm._v("9")]
                ),
                _vm._v(" "),
                _c("i", { staticClass: "fi flaticon-arrow-down" }),
              ]),
              _vm._v(" "),
              _c("notifications"),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "b-nav-item-dropdown",
            {
              staticClass: "d-md-down-none",
              attrs: {
                "no-caret": "",
                right: "",
                "menu-class": "dropdown-menu-messages",
              },
            },
            [
              _c("template", { slot: "button-content" }, [
                _c("i", { staticClass: "fi flaticon-message-circle px-2" }),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", [
                _c("span", { staticClass: "avatar thumb-sm mr-3" }, [
                  _c("img", {
                    staticClass: "rounded-circle",
                    attrs: {
                      src: __webpack_require__(/*! ../../assets/people/a1.jpg */ "./resources/src/assets/people/a1.jpg"),
                      alt: "...",
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("h6", [
                    _vm._v("Jane "),
                    _c("span", { staticClass: "fw-semi-bold" }, [
                      _vm._v("Hew"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "fs-sm text-muted fw-thin" }, [
                    _vm._v("Hey, John! How is it going? ..."),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", [
                _c("span", { staticClass: "avatar thumb-sm mr-3" }, [
                  _c("img", {
                    staticClass: "rounded-circle",
                    attrs: {
                      src: __webpack_require__(/*! ../../assets/people/a2.jpg */ "./resources/src/assets/people/a2.jpg"),
                      alt: "...",
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("h6", [
                    _vm._v("Alies "),
                    _c("span", { staticClass: "fw-semi-bold" }, [
                      _vm._v("Rumiancaŭ"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "fs-sm text-muted fw-thin" }, [
                    _vm._v("I will definitely buy this template"),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", [
                _c("span", { staticClass: "avatar thumb-sm mr-3" }, [
                  _c("img", {
                    staticClass: "rounded-circle",
                    attrs: {
                      src: __webpack_require__(/*! ../../assets/people/a3.jpg */ "./resources/src/assets/people/a3.jpg"),
                      alt: "...",
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("h6", [
                    _vm._v("Alexey "),
                    _c("span", { staticClass: "fw-semi-bold" }, [
                      _vm._v("Kamandzirau"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "fs-sm text-muted fw-thin" }, [
                    _vm._v("I will definitely buy this template"),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item-button", { staticClass: "text-center" }, [
                _c("span", { staticClass: "mx-auto" }, [
                  _vm._v("See all messages "),
                  _c("i", { staticClass: "fa fa-arrow-right ml-1" }),
                ]),
              ]),
            ],
            2
          ),
          _vm._v(" "),
          _c("b-nav-item", { staticClass: "divider d-md-down-none" }),
          _vm._v(" "),
          _c(
            "b-nav-item-dropdown",
            {
              staticClass: "mr-2",
              attrs: {
                "no-caret": "",
                right: "",
                "menu-class": "dropdown-menu-settings",
              },
            },
            [
              _c("template", { slot: "button-content" }, [
                _c("i", { staticClass: "fi flaticon-settings-10 px-2" }),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", [
                _c("i", { staticClass: "la la-user" }),
                _vm._v(" My Account"),
              ]),
              _vm._v(" "),
              _c("b-dropdown-divider"),
              _vm._v(" "),
              _c("b-dropdown-item", [_vm._v("Calendar")]),
              _vm._v(" "),
              _c(
                "b-dropdown-item",
                [
                  _vm._v("\n          Inbox   "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "animate__animated animate__bounceIn",
                      attrs: { variant: "danger", pill: "" },
                    },
                    [_vm._v("9")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("b-dropdown-divider"),
              _vm._v(" "),
              _c("b-dropdown-item-button", { on: { click: _vm.logout } }, [
                _c("i", { staticClass: "la la-sign-out" }),
                _vm._v(" Log Out\n        "),
              ]),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "b-nav-item-dropdown",
            {
              staticClass: "d-md-down-none mr-2",
              attrs: { "no-caret": "", right: "" },
            },
            [
              _c("template", { slot: "button-content" }, [
                _c("i", { staticClass: "fi flaticon-bell px-2" }),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", [
                _c("span", { staticClass: "badge badge-danger mr-2" }, [
                  _c("i", { staticClass: "fa fa-bell-o" }),
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "fs-sm" }, [
                  _vm._v("Check out this awesome ticket"),
                ]),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", [
                _c("span", { staticClass: "badge bg-primary mr-2" }, [
                  _c("i", { staticClass: "fa fa-question-circle" }),
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "fs-sm" }, [
                  _vm._v("Finish 2019 annual report"),
                ]),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", [
                _c("span", { staticClass: "badge badge-success mr-2" }, [
                  _c("i", { staticClass: "fa fa-info-circle" }),
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "fs-sm" }, [
                  _vm._v("Update Vue.js to the newest version"),
                ]),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", [
                _c("span", { staticClass: "badge badge-info mr-2" }, [
                  _c("i", { staticClass: "fa fa-plus" }),
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "fs-sm" }, [
                  _vm._v("Establish OKR system"),
                ]),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", [
                _c("span", { staticClass: "badge badge-danger mr-2" }, [
                  _c("i", { staticClass: "fa fa-tag" }),
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "fs-sm" }, [
                  _vm._v("Fill in time tracking"),
                ]),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item-button", { staticClass: "text-center" }, [
                _vm._v("\n          See all tickets "),
                _c("i", { staticClass: "fa fa-arrow-right ml-1" }),
              ]),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "b-nav-item",
            { staticClass: "d-md-down-none", on: { click: _vm.logout } },
            [_c("i", { staticClass: "fi flaticon-power-1 px-2" })]
          ),
          _vm._v(" "),
          _c(
            "b-nav-item",
            {
              staticClass: "d-md-none",
              on: { click: _vm.switchSidebarMethod },
            },
            [_c("i", { staticClass: "la la-navicon px-2" })]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Helper/Helper.vue?vue&type=template&id=27fa14f9&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Helper/Helper.vue?vue&type=template&id=27fa14f9&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    { class: { "theme-helper": true, "theme-helper-opened": _vm.opened } },
    [
      _c("section", { staticClass: "widget theme-helper-content" }, [
        _c("header", { staticClass: "theme-helper-header d-flex p-0" }, [
          _c(
            "div",
            { staticClass: "theme-helper-toggler", on: { click: _vm.toggle } },
            [_vm._m(0)]
          ),
          _vm._v(" "),
          _c("h6", [_vm._v("Configuration")]),
        ]),
        _vm._v(" "),
        _vm._m(1),
      ]),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "theme-helper-spinner text-white" }, [
      _c("i", { staticClass: "la la-cog" }),
      _vm._v(" "),
      _c("i", { staticClass: "la la-cog" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget-body mt-3" }, [
      _c("div", { staticClass: "mt-4" }, [
        _c(
          "a",
          {
            staticClass:
              "btn btn-warning btn-rounded-f btn-block fs-mini text-white",
            attrs: {
              href: "https://flatlogic.com/templates/light-blue-vue/",
              target: "_blank",
              role: "button",
            },
          },
          [_vm._v("\n                    Purchase\n                ")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass:
              "btn btn-danger btn-rounded-f btn-block fs-mini text-white",
            attrs: {
              href: "https://demo.flatlogic.com/light-blue-vue/",
              target: "_blank",
              role: "button",
            },
          },
          [_vm._v("\n                    Go FULL Version\n                ")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-inverse btn-rounded-f btn-block fs-mini",
            attrs: {
              href: "https://demo.flatlogic.com/light-blue/documentation/",
              target: "_blank",
              role: "button",
            },
          },
          [_vm._v("\n                    Documentation\n                ")]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex justify-content-between mt-lg" }, [
        _c(
          "a",
          {
            staticClass:
              "btn btn-outline-default btn-rounded-f fs-mini text-muted d-flex align-items-center",
            attrs: {
              role: "button",
              target: "_blank",
              href: "https://flatlogic.com/contact",
            },
          },
          [
            _c("i", {
              staticClass: "glyphicon glyphicon-headphones mr-xs mt-n-sm",
            }),
            _vm._v("\n                    Support\n                "),
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass:
              "btn btn-outline-default btn-rounded-f fs-mini text-muted d-flex align-items-center",
            attrs: {
              role: "button",
              target: "_blank",
              href: "https://github.com/flatlogic/light-blue-vue",
            },
          },
          [
            _c("i", { staticClass: "fa fa-github mr-xs" }),
            _vm._v("\n                    Github\n                "),
          ]
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "mt-lg d-flex flex-column align-items-center theme-sharing",
        },
        [
          _c("span", { staticClass: "fs-sm" }, [
            _vm._v(
              "\n                    Thank you for sharing!\n                "
            ),
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "d-flexjustify-content-center text-light mt-2 h2 mb-0",
            },
            [
              _c(
                "a",
                {
                  attrs: {
                    target: "_blank",
                    href: "https://twitter.com/intent/tweet?text=Amazing%20admin%20dashboard%20template%20built%20with%20%23VueJS%20and%20%23Bootstrap%204!&url=https://flatlogic.com/templates/light-blue-vue-lite/demo&via=flatlogic",
                  },
                },
                [_c("i", { staticClass: "fa fa-twitter mx-3" })]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  attrs: {
                    href: "https://www.facebook.com/sharer/sharer.php?u=https://flatlogic.com/templates/light-blue-vue-lite/demo",
                    target: "_blank",
                  },
                },
                [_c("i", { staticClass: "fa fa-facebook mx-3" })]
              ),
            ]
          ),
        ]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Layout/Layout.vue?vue&type=template&id=373b3179&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Layout/Layout.vue?vue&type=template&id=373b3179& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { class: { root: true, sidebarClose: _vm.sidebarClose } },
    [
      _c("Helper"),
      _vm._v(" "),
      _c("Header"),
      _vm._v(" "),
      _c("Sidebar"),
      _vm._v(" "),
      _c(
        "div",
        { ref: "content", staticClass: "content animated fadeInUp" },
        [
          _c(
            "transition",
            { attrs: { name: "router-animation" } },
            [_c("router-view")],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(0),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "contentFooter" }, [
      _vm._v("\n    Light Blue Vue Admin Dashboard Template - Made by "),
      _c("a", { attrs: { href: "https://flatlogic.com", target: "_blank" } }, [
        _vm._v("Flatlogic"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/Notifications.vue?vue&type=template&id=51004f0b&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/Notifications.vue?vue&type=template&id=51004f0b& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "notifications navbar-notifications" },
    [
      _vm._m(0),
      _vm._v(" "),
      _vm.newNotifications
        ? _c("NewNotifictionsList")
        : _vm.notificationsTabSelected === 1
        ? _c("NotifictionsList")
        : _vm.notificationsTabSelected === 2
        ? _c("Messages")
        : _vm.notificationsTabSelected === 3
        ? _c("Progress")
        : _c("NotifictionsList"),
      _vm._v(" "),
      _c(
        "footer",
        { staticClass: "text-sm footer px-4 py-2" },
        [
          _c("span", { staticClass: "fs-mini" }, [
            _vm._v("Synced at: 21 Apr 2019 18:36"),
          ]),
          _vm._v(" "),
          _c(
            "b-button",
            {
              class: { disabled: _vm.isLoad, "btn-xs float-right py-0": true },
              attrs: { variant: "link" },
              on: { click: _vm.loadNotifications },
            },
            [
              _vm.isLoad
                ? _c("span", [
                    _c("i", { staticClass: "la la-refresh la-spin" }),
                    _vm._v(" Loading..."),
                  ])
                : _c("i", { staticClass: "la la-refresh" }),
            ]
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
    return _c("header", { staticClass: "header" }, [
      _c("h6", { staticClass: "my-3 text-center" }, [
        _vm._v("You have 13 notifications"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/Messages.vue?vue&type=template&id=16b95606&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/Messages.vue?vue&type=template&id=16b95606& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    "b-list-group",
    { staticClass: "listGroup thin-scroll" },
    [
      _c(
        "b-list-group-item",
        { staticClass: "listGroupItem bg-primary-light" },
        [
          _c("span", { staticClass: "notificationIcon thumb-sm" }, [
            _c("img", {
              staticClass: "rounded-circle",
              attrs: {
                src: __webpack_require__(/*! ../../../assets/people/a2.jpg */ "./resources/src/assets/people/a2.jpg"),
                alt: "...",
              },
            }),
            _vm._v(" "),
            _c("i", { staticClass: "status status-bottom bg-success" }),
          ]),
          _vm._v(" "),
          _c("time", { staticClass: "text-link help float-right" }, [
            _vm._v("10 sec ago"),
          ]),
          _vm._v(" "),
          _c("h6", { staticClass: "m-0 fw-bold mb-1" }, [_vm._v("Chris Gray")]),
          _vm._v(" "),
          _c("p", { staticClass: "deemphasize text-ellipsis m-0" }, [
            _vm._v("Hey! What's up? So many times since we"),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("b-list-group-item", { staticClass: "listGroupItem" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("img", {
            staticClass: "rounded-circle",
            attrs: {
              src: __webpack_require__(/*! ../../../assets/people/a5.jpg */ "./resources/src/assets/people/a5.jpg"),
              alt: "...",
            },
          }),
          _vm._v(" "),
          _c("i", { staticClass: "status status-bottom bg-success" }),
        ]),
        _vm._v(" "),
        _c("time", { staticClass: "text-link help float-right" }, [
          _vm._v("2 min ago"),
        ]),
        _vm._v(" "),
        _c("h6", { staticClass: "m-0 mb-1" }, [_vm._v("Jamey Brownlow")]),
        _vm._v(" "),
        _c("p", { staticClass: "deemphasize text-ellipsis m-0" }, [
          _vm._v(
            "\n      Good news coming tonight. Seems they agreed to proceed\n    "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("b-list-group-item", { staticClass: "listGroupItem" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("img", {
            staticClass: "rounded-circle",
            attrs: {
              src: __webpack_require__(/*! ../../../assets/people/a1.jpg */ "./resources/src/assets/people/a1.jpg"),
              alt: "...",
            },
          }),
          _vm._v(" "),
          _c("i", { staticClass: "status status-bottom bg-warning" }),
        ]),
        _vm._v(" "),
        _c("time", { staticClass: "text-link help float-right" }, [
          _vm._v("9 min ago"),
        ]),
        _vm._v(" "),
        _c("h6", { staticClass: "m-0 mb-1" }, [_vm._v("Livia Walsh")]),
        _vm._v(" "),
        _c("p", { staticClass: "deemphasize text-ellipsis m-0" }, [
          _vm._v("Check out my latest email plz!"),
        ]),
      ]),
      _vm._v(" "),
      _c("b-list-group-item", { staticClass: "listGroupItem" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("img", {
            staticClass: "rounded-circle",
            attrs: {
              src: __webpack_require__(/*! ../../../assets/people/a6.jpg */ "./resources/src/assets/people/a6.jpg"),
              alt: "...",
            },
          }),
          _vm._v(" "),
          _c("i", { staticClass: "status status-bottom bg-danger" }),
        ]),
        _vm._v(" "),
        _c("time", { staticClass: "text-link help float-right" }, [
          _vm._v("12:56 AM"),
        ]),
        _vm._v(" "),
        _c("h6", { staticClass: "m-0 mb-1" }, [_vm._v("Jaron Fitzroy")]),
        _vm._v(" "),
        _c("p", { staticClass: "deemphasize text-ellipsis m-0" }, [
          _vm._v("What about summer break?"),
        ]),
      ]),
      _vm._v(" "),
      _c("b-list-group-item", { staticClass: "listGroupItem" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("img", {
            staticClass: "rounded-circle",
            attrs: {
              src: __webpack_require__(/*! ../../../assets/people/a4.jpg */ "./resources/src/assets/people/a4.jpg"),
              alt: "...",
            },
          }),
          _vm._v(" "),
          _c("i", { staticClass: "status status-bottom bg-gray-light" }),
        ]),
        _vm._v(" "),
        _c("time", { staticClass: "text-link help float-right" }, [
          _vm._v("Yesterday"),
        ]),
        _vm._v(" "),
        _c("h6", { staticClass: "m-0 mb-1" }, [_vm._v("Mike Lewis")]),
        _vm._v(" "),
        _c("p", { staticClass: "deemphasize text-ellipsis m-0" }, [
          _vm._v(
            "\n      Just ain't sure about the weekend now. 90% I'll make it.\n    "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("b-list-group-item", { staticClass: "listGroupItem" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("img", {
            staticClass: "rounded-circle",
            attrs: {
              src: __webpack_require__(/*! ../../../assets/people/a6.jpg */ "./resources/src/assets/people/a6.jpg"),
              alt: "...",
            },
          }),
          _vm._v(" "),
          _c("i", { staticClass: "status status-bottom bg-success" }),
        ]),
        _vm._v(" "),
        _c("time", { staticClass: "text-link help float-right" }, [
          _vm._v("Apr 23"),
        ]),
        _vm._v(" "),
        _c("h6", { staticClass: "m-0 mb-1" }, [_vm._v("Freda Edison")]),
        _vm._v(" "),
        _c("p", { staticClass: "deemphasize text-ellipsis m-0" }, [
          _vm._v(
            "\n      Hey what's up? Me and Monica going for a lunch somewhere. Wanna join?\n    "
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/NewNotificationsList.vue?vue&type=template&id=6ae7a917&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/NewNotificationsList.vue?vue&type=template&id=6ae7a917& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
    "b-list-group",
    { staticClass: "listGroup thin-scroll" },
    [
      _c("b-list-group-item", { staticClass: "listGroupItem bg-attention" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("i", { staticClass: "fa fa-check text-success fa-lg" }),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "m-0 overflow-hidden" }, [
          _vm._v("\n      2 issues require your approval.\n       "),
          _c("a", { attrs: { href: "#" } }, [_vm._v("The Search Project")]),
          _vm._v(" completed on time!\n      "),
          _c("time", { staticClass: "help-block m-0" }, [
            _vm._v("\n        just now\n      "),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("b-list-group-item", { staticClass: "listGroupItem bg-attention" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("img", {
            staticClass: "rounded-circle",
            attrs: {
              src: __webpack_require__(/*! ../../../assets/people/a4.jpg */ "./resources/src/assets/people/a4.jpg"),
              alt: "...",
            },
          }),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "m-0 overflow-hidden" }, [
          _c("a", { attrs: { href: "#" } }, [_vm._v("Jeniffer Willington")]),
          _vm._v("has just endorsed you with 50 points!\n      "),
          _c("time", { staticClass: "help-block m-0" }, [
            _vm._v("\n        30 sec ago\n      "),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("b-list-group-item", { staticClass: "listGroupItem" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("img", {
            staticClass: "rounded-circle",
            attrs: {
              src: __webpack_require__(/*! ../../../assets/people/a3.jpg */ "./resources/src/assets/people/a3.jpg"),
              alt: "...",
            },
          }),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "m-0 overflow-hidden" }, [
          _vm._v("\n      1 new user just signed up! Check out\n       "),
          _c("a", { attrs: { href: "#" } }, [_vm._v("Monica Smith")]),
          _vm._v("'s account.\n      "),
          _c("time", { staticClass: "help-block m-0" }, [
            _vm._v("\n        2 mins ago\n      "),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("b-list-group-item", { staticClass: "listGroupItem" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("i", { staticClass: "fa fa-angle-double-up fa-2x" }),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-ellipsis m-0" }, [
          _vm._v("\n      2.1.0-pre-alpha just released.\n      "),
          _c("time", { staticClass: "help-block m-0" }, [
            _vm._v("\n        5h ago\n      "),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("b-list-group-item", { staticClass: "listGroupItem" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("i", { staticClass: "fa fa-bolt fa-lg" }),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-ellipsis m-0 overflow-hidden" }, [
          _vm._v("\n      Server load limited.\n      "),
          _c("time", { staticClass: "help-block m-0" }, [
            _vm._v("\n        7h ago\n      "),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("b-list-group-item", { staticClass: "listGroupItem" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("img", {
            staticClass: "rounded-circle",
            attrs: {
              src: __webpack_require__(/*! ../../../assets/people/a5.jpg */ "./resources/src/assets/people/a5.jpg"),
              alt: "...",
            },
          }),
        ]),
        _vm._v(" "),
        _c(
          "p",
          { staticClass: "m-0 overflow-hidden" },
          [
            _vm._v("\n      User "),
            _c("a", { attrs: { href: "#" } }, [_vm._v("Jeff")]),
            _vm._v(" registered\n        \n      "),
            _c(
              "b-button",
              {
                staticClass: "mr-1",
                attrs: { size: "xs", variant: "success" },
              },
              [_vm._v("Allow")]
            ),
            _vm._v(" "),
            _c("b-button", { attrs: { size: "xs", variant: "danger" } }, [
              _vm._v("Deny"),
            ]),
            _vm._v(" "),
            _c("time", { staticClass: "help-block m-0" }, [
              _vm._v("\n        12:18 AM\n      "),
            ]),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("b-list-group-item", { staticClass: "listGroupItem" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("i", { staticClass: "fa fa-shield fa-lg" }),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "m-0 overflow-hidden" }, [
          _vm._v(
            "\n      Instructions for changing your Envato Account password. Please\n      check your account "
          ),
          _c("a", { attrs: { href: "#" } }, [_vm._v("security page")]),
          _vm._v(".\n      "),
          _c("time", { staticClass: "help-block m-0" }, [
            _vm._v("\n        12:18 AM\n      "),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("b-list-group-item", { staticClass: "listGroupItem" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("span", { staticClass: "rounded bg-primary rounded-lg" }, [
            _c("i", { staticClass: "fa fa-facebook text-white" }),
          ]),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-ellipsis m-0" }, [
          _vm._v("\n      New "),
          _c("strong", [_vm._v("76")]),
          _vm._v(" facebook likes received.\n      "),
          _c("time", { staticClass: "help-block m-0" }, [
            _vm._v("\n        15 Apr 2014\n      "),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("b-list-group-item", { staticClass: "listGroupItem" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("span", { staticClass: "circle circle-lg bg-gray-dark" }, [
            _c("i", { staticClass: "fa fa-circle-o text-white" }),
          ]),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-ellipsis m-0" }, [
          _vm._v("\n      Dark matter detected.\n      "),
          _c("time", { staticClass: "help-block m-0" }, [
            _vm._v("\n        15 Apr 2014\n      "),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/NotificationsList.vue?vue&type=template&id=23878b76&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/NotificationsList.vue?vue&type=template&id=23878b76& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
    "b-list-group",
    { staticClass: "listGroup thin-scroll" },
    [
      _c("b-list-group-item", { staticClass: "listGroupItem" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("img", {
            staticClass: "rounded-circle",
            attrs: {
              src: __webpack_require__(/*! ../../../assets/people/a3.jpg */ "./resources/src/assets/people/a3.jpg"),
              alt: "...",
            },
          }),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "m-0 overflow-hidden" }, [
          _vm._v("\n      1 new user just signed up! Check out\n       "),
          _c("a", { attrs: { href: "#" } }, [_vm._v("Monica Smith")]),
          _vm._v("'s account.\n      "),
          _c("time", { staticClass: "help-block m-0" }, [
            _vm._v("\n        2 mins ago\n      "),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("b-list-group-item", { staticClass: "listGroupItem" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("i", { staticClass: "fa fa-angle-double-up fa-2x" }),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-ellipsis m-0" }, [
          _vm._v("\n      2.1.0-pre-alpha just released.\n      "),
          _c("time", { staticClass: "help-block m-0" }, [
            _vm._v("\n        5h ago\n      "),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("b-list-group-item", { staticClass: "listGroupItem" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("i", { staticClass: "fa fa-bolt fa-lg" }),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-ellipsis m-0 overflow-hidden" }, [
          _vm._v("\n      Server load limited.\n      "),
          _c("time", { staticClass: "help-block m-0" }, [
            _vm._v("\n        7h ago\n      "),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("b-list-group-item", { staticClass: "listGroupItem" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("img", {
            staticClass: "rounded-circle",
            attrs: {
              src: __webpack_require__(/*! ../../../assets/people/a5.jpg */ "./resources/src/assets/people/a5.jpg"),
              alt: "...",
            },
          }),
        ]),
        _vm._v(" "),
        _c(
          "p",
          { staticClass: "m-0 overflow-hidden" },
          [
            _vm._v("\n      User "),
            _c("a", { attrs: { href: "#" } }, [_vm._v("Jeff")]),
            _vm._v(" registered\n        \n      "),
            _c(
              "b-button",
              {
                staticClass: "mr-1",
                attrs: { size: "xs", variant: "success" },
              },
              [_vm._v("Allow")]
            ),
            _vm._v(" "),
            _c("b-button", { attrs: { size: "xs", variant: "danger" } }, [
              _vm._v("Deny"),
            ]),
            _vm._v(" "),
            _c("time", { staticClass: "help-block m-0" }, [
              _vm._v("\n        12:18 AM\n      "),
            ]),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("b-list-group-item", { staticClass: "listGroupItem" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("i", { staticClass: "fa fa-shield fa-lg" }),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "m-0 overflow-hidden" }, [
          _vm._v(
            "\n      Instructions for changing your Envato Account password. Please\n      check your account "
          ),
          _c("a", { attrs: { href: "#" } }, [_vm._v("security page")]),
          _vm._v(".\n      "),
          _c("time", { staticClass: "help-block m-0" }, [
            _vm._v("\n        12:18 AM\n      "),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("b-list-group-item", { staticClass: "listGroupItem" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("span", { staticClass: "rounded bg-primary rounded-lg" }, [
            _c("i", { staticClass: "fa fa-facebook text-white" }),
          ]),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-ellipsis m-0" }, [
          _vm._v("\n      New "),
          _c("strong", [_vm._v("76")]),
          _vm._v(" facebook likes received.\n      "),
          _c("time", { staticClass: "help-block m-0" }, [
            _vm._v("\n        15 Apr 2014\n      "),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("b-list-group-item", { staticClass: "listGroupItem" }, [
        _c("span", { staticClass: "notificationIcon thumb-sm" }, [
          _c("span", { staticClass: "circle circle-lg bg-gray-dark" }, [
            _c("i", { staticClass: "fa fa-circle-o text-white" }),
          ]),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-ellipsis m-0" }, [
          _vm._v("\n      Dark matter detected.\n      "),
          _c("time", { staticClass: "help-block m-0" }, [
            _vm._v("\n        15 Apr 2014\n      "),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/Progress.vue?vue&type=template&id=6b05bd5e&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Notifications/NotificationsDemo/Progress.vue?vue&type=template&id=6b05bd5e& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    "b-list-group",
    { staticClass: "listGroup thin-scroll" },
    [
      _c(
        "b-list-group-item",
        { staticClass: "listGroupItem" },
        [
          _c("span", { staticClass: "text-muted float-right" }, [
            _vm._v("60%"),
          ]),
          _vm._v(" "),
          _c("h6", { staticClass: "m-0 mb-1 text-gray" }, [
            _c("strong", [_vm._v("Urgent:")]),
            _vm._v("\n       Rails 4.1.0 upgrade\n    "),
          ]),
          _vm._v(" "),
          _c("b-progress", {
            staticClass: "m-0",
            attrs: { variant: "primary", value: 60, max: 100 },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "help-block" }, [
            _vm._v("3 notes added by James 2h ago..."),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-list-group-item",
        { staticClass: "listGroupItem" },
        [
          _c("span", { staticClass: "text-muted float-right" }, [
            _vm._v("83%"),
          ]),
          _vm._v(" "),
          _c("h6", { staticClass: "m-0 mb-1 text-gray" }, [
            _c("strong", [_vm._v("Primary:")]),
            _vm._v("\n       Sing Web App\n    "),
          ]),
          _vm._v(" "),
          _c("b-progress", {
            staticClass: "progress-sm m-0",
            attrs: { variant: "success", value: 83, max: 100 },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "help-block" }, [
            _vm._v("verifying stable probability status"),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-list-group-item",
        { staticClass: "listGroupItem" },
        [
          _c("span", { staticClass: "text-muted float-right" }, [
            _vm._v("44%"),
          ]),
          _vm._v(" "),
          _c("h6", { staticClass: "m-0 mb-1" }, [
            _c(
              "span",
              {
                directives: [
                  {
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: { hover: true },
                  },
                ],
                staticClass: "circle bg-gray-dark text-warning",
                attrs: {
                  title: "2 issues require your attention",
                  placement: "bottom",
                },
              },
              [_c("i", { staticClass: "fa fa-question" })]
            ),
            _vm._v("\n       \n      Finish The Road to Hell Song\n    "),
          ]),
          _vm._v(" "),
          _c("b-progress", {
            staticClass: "progress-sm m-0",
            attrs: { variant: "gray-dark", value: 44, max: 100 },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "help-block" }, [
            _vm._v("last update: 2h ago"),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-list-group-item",
        { staticClass: "listGroupItem" },
        [
          _c("span", { staticClass: "text-muted float-right" }, [
            _vm._v("86%"),
          ]),
          _vm._v(" "),
          _c("h6", { staticClass: "m-0 mb-1 deemphasize text-gray" }, [
            _vm._v("\n      Complete project planning\n    "),
          ]),
          _vm._v(" "),
          _c("b-progress", {
            staticClass: "progress-xs m-0",
            attrs: { variant: "danger", value: 86, max: 100 },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "help-block" }, [
            _vm._v("no, no way this is not working..."),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-list-group-item",
        { staticClass: "listGroupItem" },
        [
          _c("span", { staticClass: "text-muted float-right" }, [
            _vm._v("100%"),
          ]),
          _vm._v(" "),
          _c("h6", { staticClass: "m-0 mb-1 deemphasize text-gray" }, [
            _c("strong", [_vm._v("Completed:")]),
            _vm._v("\n       Instruct newbies on coding standards\n    "),
          ]),
          _vm._v(" "),
          _c("b-progress", {
            staticClass: "progress-xs m-0",
            attrs: { variant: "primary", value: 100, max: 100 },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "help-block" }, [
            _vm._v("last update: April 22, 2014 2:36 pm"),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Sidebar/NavLink/NavLink.vue?vue&type=template&id=732219bc&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Sidebar/NavLink/NavLink.vue?vue&type=template&id=732219bc&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
  return !_vm.childrenLinks && _vm.isHeader
    ? _c(
        "li",
        { class: { headerLink: true, className: _vm.className } },
        [
          _c(
            "router-link",
            { staticClass: "sidebar-link", attrs: { to: _vm.link } },
            [
              _c("span", { staticClass: "icon" }, [
                _c("i", { class: _vm.fullIconName }),
              ]),
              _vm._v("\n    " + _vm._s(_vm.header) + " "),
              _vm.label
                ? _c(
                    "sup",
                    {
                      staticClass: "headerLabel",
                      class: "text-" + _vm.labelColor,
                    },
                    [_vm._v(_vm._s(_vm.label))]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.badge
                ? _c(
                    "b-badge",
                    {
                      staticClass: "badge rounded-f",
                      attrs: { variant: "primary", pill: "" },
                    },
                    [_vm._v(_vm._s(_vm.badge))]
                  )
                : _vm._e(),
            ],
            1
          ),
        ],
        1
      )
    : _vm.childrenLinks
    ? _c(
        "li",
        { class: { headerLink: true, className: _vm.className } },
        [
          _c(
            "div",
            {
              on: {
                click: function () {
                  return _vm.togglePanelCollapse(_vm.link)
                },
              },
            },
            [
              _c(
                "router-link",
                {
                  staticClass: "d-flex sidebar-link",
                  attrs: { to: _vm.link, event: "" },
                },
                [
                  _c("span", { staticClass: "icon" }, [
                    _c("i", { class: _vm.fullIconName }),
                  ]),
                  _vm._v("\n      " + _vm._s(_vm.header) + " "),
                  _vm.label
                    ? _c(
                        "sup",
                        {
                          staticClass: "ml-1 headerLabel",
                          class: "text-" + _vm.labelColor,
                        },
                        [_vm._v(_vm._s(_vm.label))]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      class: { caretWrapper: true, carretActive: _vm.isActive },
                    },
                    [_c("i", { staticClass: "fi flaticon-arrow-down" })]
                  ),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-collapse",
            { attrs: { id: "collapse" + _vm.index, visible: _vm.isActive } },
            [
              _c(
                "ul",
                { staticClass: "sub-menu" },
                _vm._l(_vm.childrenLinks, function (link) {
                  return _c("NavLink", {
                    key: link.link,
                    staticClass: "nav-link-nested",
                    attrs: {
                      activeItem: _vm.activeItem,
                      header: link.header,
                      index: link.index,
                      link: link.link,
                      childrenLinks: link.childrenLinks,
                    },
                  })
                }),
                1
              ),
            ]
          ),
        ],
        1
      )
    : _c(
        "li",
        [
          _c(
            "router-link",
            { attrs: { to: _vm.index !== "menu" && _vm.link } },
            [
              _vm._v("\n    " + _vm._s(_vm.header) + " "),
              _vm.label
                ? _c(
                    "sup",
                    {
                      staticClass: "headerLabel",
                      class: "text-" + _vm.labelColor,
                    },
                    [_vm._v(_vm._s(_vm.label))]
                  )
                : _vm._e(),
            ]
          ),
        ],
        1
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Sidebar/Sidebar.vue?vue&type=template&id=2298edb3&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/Sidebar/Sidebar.vue?vue&type=template&id=2298edb3&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    "b-collapse",
    {
      staticClass: "sidebar-collapse",
      attrs: { id: "sidebar-collapse", visible: _vm.sidebarOpened },
    },
    [
      _c("nav", { class: { sidebar: true } }, [
        _c(
          "header",
          { staticClass: "logo" },
          [
            _c("router-link", { attrs: { to: "/app" } }, [
              _vm._v("Light "),
              _c("span", { staticClass: "fw-bold" }, [_vm._v("Blue")]),
            ]),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "generator-link navTitle",
            attrs: {
              target: "_blank",
              href: "https://flatlogic.com/generator",
            },
          },
          [_vm._v("Generate App")]
        ),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "nav" },
          [
            _c("h5", { staticClass: "navTitle" }, [_vm._v("APP")]),
            _vm._v(" "),
            _c("NavLink", {
              attrs: {
                activeItem: _vm.activeItem,
                header: "Dashboard",
                link: "/app/dashboard",
                iconName: "flaticon-home-3",
                index: "dashboard",
                isHeader: "",
              },
            }),
            _vm._v(" "),
            _c("h5", { staticClass: "navTitle" }, [_vm._v("TEMPLATE")]),
            _vm._v(" "),
            _c("NavLink", {
              attrs: {
                header: "Typography",
                link: "/app/typography",
                iconName: "flaticon-list-3",
                index: "typography",
                isHeader: "",
              },
            }),
            _vm._v(" "),
            _c("NavLink", {
              attrs: {
                header: "Tables Basic",
                link: "/tables",
                iconName: "flaticon-equal-3",
                index: "tables",
                isHeader: "",
              },
            }),
            _vm._v(" "),
            _c("NavLink", {
              attrs: {
                header: "Notifications",
                link: "/app/notifications",
                iconName: "flaticon-bell",
                index: "notifications",
                isHeader: "",
              },
            }),
            _vm._v(" "),
            _c("NavLink", {
              attrs: {
                activeItem: _vm.activeItem,
                header: "Components",
                link: "/app/components",
                iconName: "flaticon-network-1",
                index: "components",
                childrenLinks: [
                  { header: "Charts", link: "/app/components/charts" },
                  { header: "Icons", link: "/app/components/icons" },
                  { header: "Maps", link: "/app/components/maps" },
                ],
              },
            }),
            _vm._v(" "),
            _c("NavLink", {
              attrs: {
                activeItem: _vm.activeItem,
                header: "Ecommerce",
                link: "/app/components",
                iconName: "flaticon-network-1",
                index: "components",
                childrenLinks: [
                  { header: "Add product", link: "/ecommerce/addproducts" },
                  { header: "Products list", link: "/ecommerce/products" },
                ],
              },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c("h5", { staticClass: "navTitle d-sm-down-none" }, [
          _vm._v("\n    LABELS\n  "),
        ]),
        _vm._v(" "),
        _c("ul", { staticClass: "sidebarLabels d-sm-down-none" }, [
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("i", { staticClass: "fa fa-circle text-success mr-3" }),
              _vm._v(" "),
              _c("span", { staticClass: "labelName" }, [_vm._v("Core")]),
            ]),
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("i", { staticClass: "fa fa-circle text-primary mr-3" }),
              _vm._v(" "),
              _c("span", { staticClass: "labelName" }, [_vm._v("UI Elements")]),
            ]),
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("i", { staticClass: "fa fa-circle text-danger mr-3" }),
              _vm._v(" "),
              _c("span", { staticClass: "labelName" }, [_vm._v("Forms")]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("h5", { staticClass: "navTitle d-sm-down-none mb-3" }, [
          _vm._v("\n    PROJECTS\n  "),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "sidebarAlerts d-sm-down-none" },
          _vm._l(_vm.alerts, function (alert) {
            return _c(
              "b-alert",
              {
                key: alert.id,
                staticClass: "sidebarAlert",
                attrs: { variant: "transparent", show: "", dismissible: "" },
              },
              [
                _c("span", [_vm._v(_vm._s(alert.title))]),
                _c("br"),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "sidebarProgress progress-xs mt-1",
                  attrs: { variant: alert.color, value: alert.value, max: 100 },
                }),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(alert.footer))]),
              ],
              1
            )
          }),
          1
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);