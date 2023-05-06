"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Provost_Admins_Admins_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Provost/Admins/Admins.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Provost/Admins/Admins.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      myModal: {},
      adminForm: {
        name: '',
        email: '',
        password: ''
      },
      admins: []
    };
  },
  methods: {
    addAdmin: function addAdmin() {
      this.myModal = new bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal(document.getElementById('myModal'));
      this.myModal.show();
    },
    registerAdmin: function registerAdmin() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _yield$axios$post, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.post('/register-admin', _this.adminForm);

              case 3:
                _yield$axios$post = _context.sent;
                data = _yield$axios$post.data;

                _this.loadAdmins();

                _this.myModal.hide();

                toast.fire({
                  icon: 'success',
                  title: 'Successfully Registered'
                });
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);

                _this.$root.$emit('logout');

                toast.fire({
                  icon: 'error',
                  title: 'Try again'
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }))();
    },
    loadAdmins: function loadAdmins() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('/admins');

              case 2:
                _yield$axios$get = _context2.sent;
                data = _yield$axios$get.data;
                _this2.admins = data;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  created: function created() {
    this.loadAdmins();
  }
});

/***/ }),

/***/ "./resources/js/components/Provost/Admins/Admins.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Provost/Admins/Admins.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Admins_vue_vue_type_template_id_0c1e168c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admins.vue?vue&type=template&id=0c1e168c&scoped=true& */ "./resources/js/components/Provost/Admins/Admins.vue?vue&type=template&id=0c1e168c&scoped=true&");
/* harmony import */ var _Admins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admins.vue?vue&type=script&lang=js& */ "./resources/js/components/Provost/Admins/Admins.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Admins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Admins_vue_vue_type_template_id_0c1e168c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Admins_vue_vue_type_template_id_0c1e168c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0c1e168c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Provost/Admins/Admins.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Provost/Admins/Admins.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Provost/Admins/Admins.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Admins.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Provost/Admins/Admins.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Provost/Admins/Admins.vue?vue&type=template&id=0c1e168c&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Provost/Admins/Admins.vue?vue&type=template&id=0c1e168c&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_template_id_0c1e168c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_template_id_0c1e168c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_template_id_0c1e168c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Admins.vue?vue&type=template&id=0c1e168c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Provost/Admins/Admins.vue?vue&type=template&id=0c1e168c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Provost/Admins/Admins.vue?vue&type=template&id=0c1e168c&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Provost/Admins/Admins.vue?vue&type=template&id=0c1e168c&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "d-flex justify-content-between mt-3" }, [
      _c("h6", { staticClass: "text-danger fw-bold" }, [_vm._v("Admins")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-sm btn-primary",
          on: {
            click: function ($event) {
              $event.preventDefault()
              return _vm.addAdmin.apply(null, arguments)
            },
          },
        },
        [_vm._v("Add Admin")]
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mt-4" }, [
      _c("table", { staticClass: "table table-sm table-bordered" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.admins, function (ad, index) {
            return _c("tr", { key: "ad" + index }, [
              _c("td", [_vm._v(_vm._s(index + 1))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(ad.name))]),
              _vm._v(" "),
              _c("td", [_vm._v("{{}}")]),
            ])
          }),
          0
        ),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "myModal", tabindex: "-1" } },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "row justify-content-center" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("form", [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.adminForm.name,
                            expression: "adminForm.name",
                          },
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          type: "text",
                          placeholder: "Name",
                          required: "",
                        },
                        domProps: { value: _vm.adminForm.name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.adminForm, "name", $event.target.value)
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mt-3" }, [
                      _c("label", { attrs: { for: "email" } }, [
                        _vm._v("Email"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.adminForm.email,
                            expression: "adminForm.email",
                          },
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "email", required: "" },
                        domProps: { value: _vm.adminForm.email },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.adminForm,
                              "email",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mt-3" }, [
                      _c("label", { attrs: { for: "password" } }, [
                        _vm._v("Password"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.adminForm.password,
                            expression: "adminForm.password",
                          },
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          type: "password",
                          id: "password",
                          placeholder: "Password",
                          required: "",
                        },
                        domProps: { value: _vm.adminForm.password },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.adminForm,
                              "password",
                              $event.target.value
                            )
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
                            return _vm.registerAdmin.apply(null, arguments)
                          },
                        },
                      },
                      [_vm._v("Register")]
                    ),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _vm._m(2),
          ]),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "table-secondary" }, [
        _c("th", [_vm._v("SN.")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Login")]),
      _vm._v(" "),
      _c("button", {
        staticClass: "btn-close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-sm btn-secondary",
          attrs: { type: "button", "data-bs-dismiss": "modal" },
        },
        [_vm._v("Close")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);