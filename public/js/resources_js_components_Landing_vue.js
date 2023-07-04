"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Landing_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Landing.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Landing.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['login_status'],
  data: function data() {
    return {
      email: '',
      password: ''
    };
  },
  computed: {
    loginStatus: function loginStatus() {}
  },
  methods: {
    submitForm: function submitForm() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _yield$axios$post, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.post('/login', {
                  email: _this.email,
                  password: _this.password
                });

              case 3:
                _yield$axios$post = _context.sent;
                data = _yield$axios$post.data;
                localStorage.setItem('user_name', data.user.name);
                localStorage.setItem('user_id', data.user.id);
                localStorage.setItem('user_role', data.user.role_id);

                _this.$root.$emit('login');

                _this.goDashboard();

                toast.fire({
                  icon: 'success',
                  title: 'Successfully Logged In'
                });
                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);

                _this.$root.$emit('logout');

                toast.fire({
                  icon: 'error',
                  title: 'Email or password doesn\'t match'
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 13]]);
      }))();
    },
    goDashboard: function goDashboard() {
      var user_role = localStorage.getItem('user_role');

      if (user_role == 1) {
        this.$router.push({
          name: 'provost_dashboard'
        });
      }

      if (user_role == 2) {
        this.$router.push({
          name: 'admin_dashboard'
        });
      }

      if (user_role == 3) {
        this.$router.push({
          name: 'student_profile'
        });
      }
    },
    logout: function logout() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios.get('/logout');

              case 3:
                _yield$axios$get = _context2.sent;
                data = _yield$axios$get.data;

                _this2.$root.$emit('logout');

                _context2.next = 10;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Landing.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Landing.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Landing_vue_vue_type_template_id_15bf0008___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Landing.vue?vue&type=template&id=15bf0008& */ "./resources/js/components/Landing.vue?vue&type=template&id=15bf0008&");
/* harmony import */ var _Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Landing.vue?vue&type=script&lang=js& */ "./resources/js/components/Landing.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Landing_vue_vue_type_template_id_15bf0008___WEBPACK_IMPORTED_MODULE_0__.render,
  _Landing_vue_vue_type_template_id_15bf0008___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Landing.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Landing.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Landing.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Landing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Landing.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Landing.vue?vue&type=template&id=15bf0008&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Landing.vue?vue&type=template&id=15bf0008& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_15bf0008___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_15bf0008___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_15bf0008___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Landing.vue?vue&type=template&id=15bf0008& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Landing.vue?vue&type=template&id=15bf0008&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Landing.vue?vue&type=template&id=15bf0008&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Landing.vue?vue&type=template&id=15bf0008& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "nav",
      { staticClass: "navbar navbar-expand-lg navbar-light bg-light" },
      [
        _c("div", { staticClass: "container-fluid" }, [
          _c(
            "div",
            {
              staticClass: "collapse navbar-collapse justify-content-between",
              attrs: { id: "navbarNav" },
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("ul", { staticClass: "navbar-nav justify-content-between" }, [
                _vm.login_status
                  ? _c(
                      "li",
                      {
                        staticClass: "nav-item",
                        staticStyle: { "list-style": "none" },
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn nav-link",
                            attrs: { "aria-current": "page" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.goDashboard.apply(null, arguments)
                              },
                            },
                          },
                          [_vm._v("Dashboard")]
                        ),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.login_status
                  ? _c(
                      "li",
                      {
                        staticClass: "nav-item",
                        staticStyle: { "list-style": "none" },
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-outline-danger mt-1",
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.logout.apply(null, arguments)
                              },
                            },
                          },
                          [_vm._v("Logout")]
                        ),
                      ]
                    )
                  : _vm._e(),
              ]),
            ]
          ),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2),
        ]),
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "container mt-5 mb-5" }, [
      _c("h1", { staticClass: "text-center mb-5" }, [_vm._v("Login")]),
      _vm._v(" "),
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-4" }, [
          _c("form", [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "email" } }, [_vm._v("Roll/Email")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.email,
                    expression: "email",
                  },
                ],
                staticClass: "form-control form-control-sm",
                attrs: {
                  type: "email",
                  id: "email",
                  placeholder: "Enter roll/email",
                  required: "",
                },
                domProps: { value: _vm.email },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.email = $event.target.value
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mt-3" }, [
              _c("label", { attrs: { for: "password" } }, [_vm._v("Password")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.password,
                    expression: "password",
                  },
                ],
                staticClass: "form-control form-control-sm",
                attrs: {
                  type: "password",
                  id: "password",
                  placeholder: "Password",
                  required: "",
                },
                domProps: { value: _vm.password },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.password = $event.target.value
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm w-100 btn-primary mt-3",
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.submitForm.apply(null, arguments)
                  },
                },
              },
              [_vm._v("Login")]
            ),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "navbar-nav" }, [
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "navbar-brand",
            attrs: { "aria-current": "page", href: "#" },
          },
          [_vm._v("Hall Management System")]
        ),
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "navbar-brand",
            attrs: {
              "aria-current": "page",
              href: "https://www.pust.ac.bd/facilities/residence/BSMRH",
            },
          },
          [_vm._v("BSMR Hall")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "navbar-brand",
        attrs: { target: "_blank", href: "https://www.pust.ac.bd/" },
      },
      [
        _c("img", {
          staticStyle: { width: "45px" },
          attrs: { src: "/img/logo.png", alt: "" },
        }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarNav",
          "aria-controls": "navbarNav",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
        },
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  },
]
render._withStripped = true



/***/ })

}]);