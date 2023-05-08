"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Student_History_History_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Student/History/History.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Student/History/History.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      payments: [],
      chargeInfo: {
        student_details: {}
      }
    };
  },
  computed: {
    totalPayment: function totalPayment() {
      return this.payments.reduce(function (pre, cur) {
        return pre + Number(cur.amount);
      }, 0);
    },
    dueAmount: function dueAmount() {
      return (Number(this.chargeInfo.student_details.charge) - Number(this.chargeInfo.payments_sum_amount)).toFixed(2);
    }
  },
  methods: {
    loadChargeInfo: function loadChargeInfo() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/charge-info');

              case 2:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.chargeInfo = data;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    loadPayments: function loadPayments() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _yield$axios$get2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('/get-payments-studentwise');

              case 2:
                _yield$axios$get2 = _context2.sent;
                data = _yield$axios$get2.data;
                _this2.payments = data.map(function (el) {
                  var _el$user, _el$user2;

                  el.name = (_el$user = el.user) === null || _el$user === void 0 ? void 0 : _el$user.name;
                  el.roll = (_el$user2 = el.user) === null || _el$user2 === void 0 ? void 0 : _el$user2.roll;
                  delete el.user;
                  return el;
                });

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
    this.loadChargeInfo();
    this.loadPayments();
  }
});

/***/ }),

/***/ "./resources/js/components/Student/History/History.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Student/History/History.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _History_vue_vue_type_template_id_9b0f622c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./History.vue?vue&type=template&id=9b0f622c&scoped=true& */ "./resources/js/components/Student/History/History.vue?vue&type=template&id=9b0f622c&scoped=true&");
/* harmony import */ var _History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./History.vue?vue&type=script&lang=js& */ "./resources/js/components/Student/History/History.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _History_vue_vue_type_template_id_9b0f622c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _History_vue_vue_type_template_id_9b0f622c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9b0f622c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Student/History/History.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Student/History/History.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Student/History/History.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./History.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Student/History/History.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Student/History/History.vue?vue&type=template&id=9b0f622c&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Student/History/History.vue?vue&type=template&id=9b0f622c&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_9b0f622c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_9b0f622c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_9b0f622c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./History.vue?vue&type=template&id=9b0f622c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Student/History/History.vue?vue&type=template&id=9b0f622c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Student/History/History.vue?vue&type=template&id=9b0f622c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Student/History/History.vue?vue&type=template&id=9b0f622c&scoped=true& ***!
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
  return _c("div", [
    _c("div", { staticClass: "card p-3" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-3" }, [
          _c("div", { staticClass: "card flex-row p-2" }, [
            _c("span", { staticClass: "fw-bold" }, [
              _vm._v("Hall Attached Date:  "),
            ]),
            _vm._v(_vm._s(_vm.chargeInfo.student_details.allocated_date) + " "),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("div", { staticClass: "card flex-row p-2" }, [
            _c("span", { staticClass: "fw-bold" }, [
              _vm._v("Total Charge(Tk.):  "),
            ]),
            _vm._v(_vm._s(_vm.chargeInfo.student_details.charge) + " "),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("div", { staticClass: "card flex-row p-2" }, [
            _c("span", { staticClass: "fw-bold" }, [
              _vm._v("Total Paid(Tk.):  "),
            ]),
            _vm._v(_vm._s(_vm.chargeInfo.payments_sum_amount) + " "),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("div", { staticClass: "card flex-row p-2" }, [
            _c("span", { staticClass: "fw-bold" }, [
              _vm._v("Total Due(Tk.):  "),
            ]),
            _vm._v(_vm._s(_vm.dueAmount) + " "),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-4" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "table",
          { staticClass: "table table-sm table-bordered tableFixHead" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.payments, function (pay, index) {
                return _c("tr", { key: "pay" + index }, [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(pay.name))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(pay.roll))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(pay.date))]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-end" }, [
                    _vm._v(_vm._s(pay.amount)),
                  ]),
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c("tfoot", [
              _c("tr", { staticClass: "table-danger" }, [
                _c("th", { attrs: { colspan: "4" } }, [_vm._v("Total")]),
                _vm._v(" "),
                _c("th", { staticClass: "text-end" }, [
                  _vm._v(_vm._s(_vm.totalPayment)),
                ]),
              ]),
            ]),
          ]
        ),
      ]),
    ]),
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
        _c("th", [_vm._v("Student Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Student Roll")]),
        _vm._v(" "),
        _c("th", [_vm._v("Payment Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Payment Amount(Tk.)")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);