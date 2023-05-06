"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_User_Students_Students_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Students/Students.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Students/Students.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      studentForm: {
        name: '',
        roll: '',
        department: '',
        email: '',
        session: '',
        phone: '',
        password: '1234'
      },
      search: '',
      students: [],
      departments: [],
      errors: []
    };
  },
  computed: {
    filteredStudents: function filteredStudents() {
      if (!this.search) return this.students;
      var keyword = this.search.toLowerCase();
      return this.students.filter(function (el) {
        return el.roll.toString().toLowerCase().includes(keyword) || el.department.toString().toLowerCase().includes(keyword);
      });
    }
  },
  methods: {
    addStudent: function addStudent() {
      this.myModal = new bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal(document.getElementById('myModal'));
      this.myModal.show();
    },
    registerStudent: function registerStudent() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _yield$axios$post, data, _error$response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.errors = [];
                _context.prev = 1;
                _context.next = 4;
                return axios.post('/register-student', _this.studentForm);

              case 4:
                _yield$axios$post = _context.sent;
                data = _yield$axios$post.data;
                _this.studentForm = {
                  name: '',
                  roll: '',
                  department: '',
                  email: '',
                  session: '',
                  phone: '',
                  password: '1234'
                };

                _this.loadStudents();

                _this.myModal.hide();

                toast.fire({
                  icon: 'success',
                  title: 'Successfully Registered'
                });
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);

                if (((_error$response = _context.t0.response) === null || _error$response === void 0 ? void 0 : _error$response.status) == 422) {
                  _this.errors = _context.t0.response.data.errors;
                }

                toast.fire({
                  icon: 'error',
                  title: 'Try again'
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 12]]);
      }))();
    },
    loadStudents: function loadStudents() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('/students');

              case 2:
                _yield$axios$get = _context2.sent;
                data = _yield$axios$get.data;
                _this2.students = data.map(function (el) {
                  var _el$student_details, _el$student_details$d, _el$student_details2, _el$student_details3, _el$student_details4, _el$student_details5;

                  el.department = (_el$student_details = el.student_details) === null || _el$student_details === void 0 ? void 0 : (_el$student_details$d = _el$student_details.department_detail) === null || _el$student_details$d === void 0 ? void 0 : _el$student_details$d.name;
                  el.session = (_el$student_details2 = el.student_details) === null || _el$student_details2 === void 0 ? void 0 : _el$student_details2.session;
                  el.allocated_date = (_el$student_details3 = el.student_details) === null || _el$student_details3 === void 0 ? void 0 : _el$student_details3.allocated_date;
                  el.cancelled_date = (_el$student_details4 = el.student_details) === null || _el$student_details4 === void 0 ? void 0 : _el$student_details4.cancelled_date;
                  el.total_charge = (_el$student_details5 = el.student_details) === null || _el$student_details5 === void 0 ? void 0 : _el$student_details5.charge;
                  delete el.student_details;
                  return el;
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    loadDepartments: function loadDepartments() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var _yield$axios$get2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.get('/all-department');

              case 2:
                _yield$axios$get2 = _context3.sent;
                data = _yield$axios$get2.data;
                _this3.departments = data;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  },
  created: function created() {
    this.loadStudents();
    this.loadDepartments();
  }
});

/***/ }),

/***/ "./resources/js/components/User/Students/Students.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/User/Students/Students.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Students_vue_vue_type_template_id_3048bd96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Students.vue?vue&type=template&id=3048bd96&scoped=true& */ "./resources/js/components/User/Students/Students.vue?vue&type=template&id=3048bd96&scoped=true&");
/* harmony import */ var _Students_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Students.vue?vue&type=script&lang=js& */ "./resources/js/components/User/Students/Students.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Students_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Students_vue_vue_type_template_id_3048bd96_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Students_vue_vue_type_template_id_3048bd96_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3048bd96",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/User/Students/Students.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/User/Students/Students.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/User/Students/Students.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Students_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Students.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Students/Students.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Students_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/User/Students/Students.vue?vue&type=template&id=3048bd96&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/User/Students/Students.vue?vue&type=template&id=3048bd96&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Students_vue_vue_type_template_id_3048bd96_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Students_vue_vue_type_template_id_3048bd96_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Students_vue_vue_type_template_id_3048bd96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Students.vue?vue&type=template&id=3048bd96&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Students/Students.vue?vue&type=template&id=3048bd96&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Students/Students.vue?vue&type=template&id=3048bd96&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Students/Students.vue?vue&type=template&id=3048bd96&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
      _c("h5", { staticClass: "text-danger fw-bold" }, [_vm._v("Students")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-sm btn-primary",
          on: {
            click: function ($event) {
              $event.preventDefault()
              return _vm.addStudent.apply(null, arguments)
            },
          },
        },
        [_vm._v("Add Student")]
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.search,
              expression: "search",
            },
          ],
          staticClass: "form-control form-control-sm",
          attrs: { type: "text", placeholder: "Search Roll / Department" },
          domProps: { value: _vm.search },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.search = $event.target.value
            },
          },
        }),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mt-1" }, [
      _c("table", { staticClass: "table table-sm table-bordered" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.filteredStudents, function (stu, index) {
            return _c("tr", { key: "stu" + index }, [
              _c("td", [_vm._v(_vm._s(index + 1))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(stu.name))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(stu.roll))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(stu.department))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(stu.session))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(stu.allocated_date))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(stu.cancelled_date))]),
              _vm._v(" "),
              _c("td", { staticClass: "text-end" }, [
                _vm._v(_vm._s(stu.total_charge)),
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "text-end" }, [
                _vm._v(_vm._s(stu.payments_sum_amount)),
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(stu.phone))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(stu.email))]),
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
                            value: _vm.studentForm.name,
                            expression: "studentForm.name",
                          },
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          type: "text",
                          placeholder: "Name",
                          required: "",
                        },
                        domProps: { value: _vm.studentForm.name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.studentForm,
                              "name",
                              $event.target.value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm.errors["name"]
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors["name"][0])),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mt-3" }, [
                      _c("label", [_vm._v("Roll")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.studentForm.roll,
                            expression: "studentForm.roll",
                          },
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          type: "text",
                          placeholder: "Roll",
                          required: "",
                        },
                        domProps: { value: _vm.studentForm.roll },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.studentForm,
                              "roll",
                              $event.target.value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm.errors["roll"]
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors["roll"][0])),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mt-3" }, [
                      _c("label", [_vm._v("Session")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.studentForm.session,
                            expression: "studentForm.session",
                          },
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "text", placeholder: "Session" },
                        domProps: { value: _vm.studentForm.session },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.studentForm,
                              "session",
                              $event.target.value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm.errors["session"]
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors["session"][0])),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group row mt-3" },
                      [
                        _c("label", [_vm._v("Department")]),
                        _vm._v(" "),
                        _c("v-select", {
                          staticClass: "v-select-sm",
                          attrs: {
                            selectOnTab: true,
                            clearable: true,
                            reduce: function (el) {
                              return el.code
                            },
                            options: _vm.departments,
                            placeholder: "Select Department",
                            label: "name",
                          },
                          model: {
                            value: _vm.studentForm.department,
                            callback: function ($$v) {
                              _vm.$set(_vm.studentForm, "department", $$v)
                            },
                            expression: "studentForm.department",
                          },
                        }),
                        _vm._v(" "),
                        _vm.errors["department"]
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors["department"][0])),
                            ])
                          : _vm._e(),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mt-3" }, [
                      _c("label", [_vm._v("Phone")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.studentForm.phone,
                            expression: "studentForm.phone",
                          },
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "text", placeholder: "Phone" },
                        domProps: { value: _vm.studentForm.phone },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.studentForm,
                              "phone",
                              $event.target.value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm.errors["phone"]
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors["phone"][0])),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mt-3" }, [
                      _c("label", { attrs: { for: "email" } }, [
                        _vm._v("Email(Optional)"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.studentForm.email,
                            expression: "studentForm.email",
                          },
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          type: "email",
                          placeholder: "Email",
                          required: "",
                        },
                        domProps: { value: _vm.studentForm.email },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.studentForm,
                              "email",
                              $event.target.value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm.errors["email"]
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors["email"][0])),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mt-3" }, [
                      _c("label", { attrs: { for: "password" } }, [
                        _vm._v("Temporary Password"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.studentForm.password,
                            expression: "studentForm.password",
                          },
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          type: "text",
                          id: "password",
                          placeholder: "Password",
                          required: "",
                        },
                        domProps: { value: _vm.studentForm.password },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.studentForm,
                              "password",
                              $event.target.value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm.errors["password"]
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors["password"][0])),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm w-100 btn-primary mt-3",
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.registerStudent.apply(null, arguments)
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
      _c("tr", { staticClass: "table-danger" }, [
        _c("th", [_vm._v("SN.")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Roll")]),
        _vm._v(" "),
        _c("th", [_vm._v("Department")]),
        _vm._v(" "),
        _c("th", [_vm._v("Session")]),
        _vm._v(" "),
        _c("th", [_vm._v("Allocated Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cancelled Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Charge")]),
        _vm._v(" "),
        _c("th", [_vm._v("Paid")]),
        _vm._v(" "),
        _c("th", [_vm._v("Phone")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Add Student")]),
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