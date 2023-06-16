"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Operation_Room_Room_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Operation/Room/Room.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Operation/Room/Room.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      alModal: {},
      cancelModal: {},
      roomForm: {
        room_number: null,
        number_of_seats: null
      },
      allocationForm: {
        room_number: null,
        seat_number: null,
        seat_id: null,
        student_id: null,
        allocated_date: null
      },
      search: '',
      cancelled_date: null,
      cancelled_name: null,
      cancelled_seat_id: null,
      rooms: [],
      students: [],
      errors: []
    };
  },
  computed: {
    filteredRooms: function filteredRooms() {
      if (!this.search) return this.rooms;
      var keyword = this.search.toLowerCase();
      return this.rooms.filter(function (el) {
        return el.room_number.toString().toLowerCase().includes(keyword);
      });
    }
  },
  methods: {
    cancelAllocation: function cancelAllocation(st) {
      this.cancelled_seat_id = st.id;
      this.cancelled_name = st.student.name;
      this.cancelModal = new bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal(document.getElementById('cancelModal'));
      this.cancelModal.show();
    },
    executeCancel: function executeCancel() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _yield$axios$get, data, index;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get("/cancel-seat", {
                  params: {
                    cancelled_seat_id: _this.cancelled_seat_id,
                    cancelled_date: _this.cancelled_date
                  }
                });

              case 3:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                index = _this.rooms.findIndex(function (el) {
                  return el.id == data.id;
                });

                _this.rooms.splice(index, 1, data);

                _this.cancelModal.hide();

                toast.fire({
                  icon: 'success',
                  title: 'Canceled Successfully'
                });
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                toast.fire({
                  icon: 'error',
                  title: 'Try again'
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }))();
    },
    allocateEdit: function allocateEdit(room, seat) {
      this.allocationForm.room_number = room.room_number;
      this.allocationForm.seat_number = seat.seat_number;
      this.allocationForm.seat_id = seat.id;
      this.allocationForm.allocated_date = seat.allocated_date;
      this.allocationForm.student_id = seat.allocated_user;
      this.alModal = new bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal(document.getElementById('alModal'));
      this.alModal.show();
    },
    updateAllocation: function updateAllocation() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _yield$axios$post, data, index, _error$response, _error$response2, _error$response3, _error$response3$data, error_msg;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.errors = [];
                _context2.prev = 1;
                _context2.next = 4;
                return axios.post('/update-allocation', _this2.allocationForm);

              case 4:
                _yield$axios$post = _context2.sent;
                data = _yield$axios$post.data;
                index = _this2.rooms.findIndex(function (el) {
                  return el.id == data.id;
                });

                _this2.rooms.splice(index, 1, data);

                _this2.alModal.hide();

                _this2.allocationForm = {
                  room_number: null,
                  seat_number: null,
                  seat_id: null,
                  student_id: null,
                  allocated_date: null
                };
                toast.fire({
                  icon: 'success',
                  title: 'Successfully Updated'
                });
                _context2.next = 21;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](1);

                if (((_error$response = _context2.t0.response) === null || _error$response === void 0 ? void 0 : _error$response.status) == 422) {
                  _this2.errors = _context2.t0.response.data.errors;
                }

                if (!(((_error$response2 = _context2.t0.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.status) == 403)) {
                  _context2.next = 20;
                  break;
                }

                error_msg = "Student is already attached to room no ".concat((_error$response3 = _context2.t0.response) === null || _error$response3 === void 0 ? void 0 : (_error$response3$data = _error$response3.data) === null || _error$response3$data === void 0 ? void 0 : _error$response3$data.room_number);
                toast.fire({
                  icon: 'error',
                  title: error_msg
                });
                return _context2.abrupt("return");

              case 20:
                toast.fire({
                  icon: 'error',
                  title: 'Try again'
                });

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 13]]);
      }))();
    },
    addRoom: function addRoom() {
      this.myModal = new bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal(document.getElementById('myModal'));
      this.myModal.show();
    },
    saveRoom: function saveRoom() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var _yield$axios$post2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.errors = [];
                _context3.prev = 1;
                _context3.next = 4;
                return axios.post('/register-room', _this3.roomForm);

              case 4:
                _yield$axios$post2 = _context3.sent;
                data = _yield$axios$post2.data;

                _this3.myModal.hide();

                _this3.roomForm = {
                  room_number: null,
                  number_of_seats: null
                };
                toast.fire({
                  icon: 'success',
                  title: 'Successfully Registered'
                });
                _context3.next = 15;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](1);

                if (_context3.t0.response.status == 422) {
                  _this3.errors = _context3.t0.response.data.errors;
                }

                toast.fire({
                  icon: 'error',
                  title: 'Try again'
                });

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 11]]);
      }))();
    },
    loadRooms: function loadRooms() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var _yield$axios$get2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return axios.get('/get-rooms');

              case 3:
                _yield$axios$get2 = _context4.sent;
                data = _yield$axios$get2.data;
                _this4.rooms = data;
                _context4.next = 10;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }))();
    },
    loadStudents: function loadStudents() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var _yield$axios$get3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios.get('/students-room-allocation');

              case 2:
                _yield$axios$get3 = _context5.sent;
                data = _yield$axios$get3.data;
                _this5.students = data;

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    allocateModal: function allocateModal() {}
  },
  created: function created() {
    var dates = new Date();
    var Year = dates.getFullYear();
    var Month = ("0" + (dates.getMonth() + 1)).slice(-2);
    var Day = ("0" + dates.getDate()).slice(-2);
    this.cancelled_date = Year + '-' + Month + '-' + Day;
    this.loadRooms();
    this.loadStudents();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Operation/Room/Room.vue?vue&type=style&index=0&id=1a23e568&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Operation/Room/Room.vue?vue&type=style&index=0&id=1a23e568&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.seat-table[data-v-1a23e568]{\n    font-size: 13px !important;\n    margin-bottom: .5rem !important;\n}\n.seat-table th[data-v-1a23e568], .seat-table td[data-v-1a23e568]{\n    padding: .15rem .25rem !important;\n    color: #4f4f4f !important;\n    font-style: italic !important;\n}\n.seat-table .btn-sm[data-v-1a23e568]{\n    padding: 0.1rem 0.5rem !important;\n    font-size: 0.75rem !important;\n}\nbutton[data-v-1a23e568]:disabled {\n    cursor: not-allowed;\n    pointer-events: all !important;\n}\n.tableFixHead>thead th[data-v-1a23e568]{\n    position: -webkit-sticky;\n    position: sticky;\n    top: -2px;\n    z-index: 999;\n}\n/* .tableFixHead>tfoot td{\n    position: sticky;\n    bottom: -1px;\n} */\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Operation/Room/Room.vue?vue&type=style&index=0&id=1a23e568&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Operation/Room/Room.vue?vue&type=style&index=0&id=1a23e568&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_style_index_0_id_1a23e568_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Room.vue?vue&type=style&index=0&id=1a23e568&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Operation/Room/Room.vue?vue&type=style&index=0&id=1a23e568&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_style_index_0_id_1a23e568_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_style_index_0_id_1a23e568_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/Operation/Room/Room.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Operation/Room/Room.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Room_vue_vue_type_template_id_1a23e568_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Room.vue?vue&type=template&id=1a23e568&scoped=true& */ "./resources/js/components/Operation/Room/Room.vue?vue&type=template&id=1a23e568&scoped=true&");
/* harmony import */ var _Room_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Room.vue?vue&type=script&lang=js& */ "./resources/js/components/Operation/Room/Room.vue?vue&type=script&lang=js&");
/* harmony import */ var _Room_vue_vue_type_style_index_0_id_1a23e568_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Room.vue?vue&type=style&index=0&id=1a23e568&scoped=true&lang=css& */ "./resources/js/components/Operation/Room/Room.vue?vue&type=style&index=0&id=1a23e568&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Room_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Room_vue_vue_type_template_id_1a23e568_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Room_vue_vue_type_template_id_1a23e568_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1a23e568",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Operation/Room/Room.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Operation/Room/Room.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Operation/Room/Room.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Room.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Operation/Room/Room.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Operation/Room/Room.vue?vue&type=style&index=0&id=1a23e568&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Operation/Room/Room.vue?vue&type=style&index=0&id=1a23e568&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_style_index_0_id_1a23e568_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Room.vue?vue&type=style&index=0&id=1a23e568&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Operation/Room/Room.vue?vue&type=style&index=0&id=1a23e568&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Operation/Room/Room.vue?vue&type=template&id=1a23e568&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Operation/Room/Room.vue?vue&type=template&id=1a23e568&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_template_id_1a23e568_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_template_id_1a23e568_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_template_id_1a23e568_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Room.vue?vue&type=template&id=1a23e568&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Operation/Room/Room.vue?vue&type=template&id=1a23e568&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Operation/Room/Room.vue?vue&type=template&id=1a23e568&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Operation/Room/Room.vue?vue&type=template&id=1a23e568&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
      _c("h5", { staticClass: "text-danger fw-bold" }, [_vm._v("Rooms")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-sm btn-primary",
          on: {
            click: function ($event) {
              $event.preventDefault()
              return _vm.addRoom.apply(null, arguments)
            },
          },
        },
        [_vm._v("Add Room")]
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
          attrs: { type: "text", placeholder: "Search Room No" },
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
    _c(
      "div",
      {
        staticClass: "mt-1 table-responsive",
        staticStyle: { height: "calc(100vh - 150px)" },
      },
      [
        _c(
          "table",
          { staticClass: "table table-sm table-bordered tableFixHead" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.filteredRooms, function (rm, index) {
                return _c("tr", { key: "rm" + index }, [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(rm.room_number))]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "table",
                      {
                        staticClass: "table table-sm table-bordered seat-table",
                      },
                      [
                        _vm._m(1, true),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(rm.seats, function (st, st_indx) {
                            return _c("tr", { key: "st_indx" + st_indx }, [
                              _c("td", [_vm._v(_vm._s(st.seat_number))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    st.student
                                      ? st.student.name + "-" + st.student.roll
                                      : ""
                                  )
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(st.student ? st.allocated_date : "")
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-outline-primary",
                                    on: {
                                      click: function ($event) {
                                        $event.preventDefault()
                                        return _vm.allocateEdit(rm, st)
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-cog",
                                      attrs: { "aria-hidden": "true" },
                                    }),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-outline-danger",
                                    attrs: {
                                      disabled: !st.student,
                                      title: "Cancel Allocation",
                                    },
                                    on: {
                                      click: function ($event) {
                                        $event.preventDefault()
                                        return _vm.cancelAllocation(st)
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-times",
                                      attrs: { "aria-hidden": "true" },
                                    }),
                                  ]
                                ),
                              ]),
                            ])
                          }),
                          0
                        ),
                      ]
                    ),
                  ]),
                ])
              }),
              0
            ),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "myModal", tabindex: "-1" } },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "row justify-content-center" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("form", [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Room number")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.roomForm.room_number,
                            expression: "roomForm.room_number",
                          },
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          type: "text",
                          placeholder: "Room number",
                          required: "",
                        },
                        domProps: { value: _vm.roomForm.room_number },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.roomForm,
                              "room_number",
                              $event.target.value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm.errors["room_number"]
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors["room_number"][0])),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mt-3" }, [
                      _c("label", [_vm._v("Number of seats in the room")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.roomForm.number_of_seats,
                            expression: "roomForm.number_of_seats",
                          },
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          type: "text",
                          placeholder: "Number of seats",
                          required: "",
                        },
                        domProps: { value: _vm.roomForm.number_of_seats },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.roomForm,
                              "number_of_seats",
                              $event.target.value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm.errors["number_of_seats"]
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors["number_of_seats"][0])),
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
                            return _vm.saveRoom.apply(null, arguments)
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
            _vm._m(3),
          ]),
        ]),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "alModal", tabindex: "-1" } },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(4),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Room number")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.allocationForm.room_number,
                          expression: "allocationForm.room_number",
                        },
                      ],
                      staticClass: "form-control form-control-sm",
                      attrs: {
                        type: "text",
                        disabled: true,
                        placeholder: "Room number",
                        required: "",
                      },
                      domProps: { value: _vm.allocationForm.room_number },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.allocationForm,
                            "room_number",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Seat number")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.allocationForm.seat_number,
                          expression: "allocationForm.seat_number",
                        },
                      ],
                      staticClass: "form-control form-control-sm",
                      attrs: {
                        type: "text",
                        disabled: true,
                        placeholder: "Seat number",
                        required: "",
                      },
                      domProps: { value: _vm.allocationForm.seat_number },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.allocationForm,
                            "seat_number",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-3" }, [
                _c(
                  "div",
                  { staticClass: "col-md-12" },
                  [
                    _c("label", [_vm._v("Student for allocation")]),
                    _vm._v(" "),
                    _c("v-select", {
                      staticClass: "v-select-sm",
                      attrs: {
                        selectOnTab: true,
                        clearable: true,
                        reduce: function (el) {
                          return el.id
                        },
                        options: _vm.students,
                        placeholder: "Select student",
                        label: "name_roll",
                      },
                      model: {
                        value: _vm.allocationForm.student_id,
                        callback: function ($$v) {
                          _vm.$set(_vm.allocationForm, "student_id", $$v)
                        },
                        expression: "allocationForm.student_id",
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors["student_id"]
                      ? _c("span", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors["student_id"][0])),
                        ])
                      : _vm._e(),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-3" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("label", [_vm._v("Date of allocation")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.allocationForm.allocated_date,
                        expression: "allocationForm.allocated_date",
                      },
                    ],
                    staticClass: "form-control form-control-sm",
                    attrs: { type: "date" },
                    domProps: { value: _vm.allocationForm.allocated_date },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.allocationForm,
                          "allocated_date",
                          $event.target.value
                        )
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.errors["allocated_date"]
                    ? _c("span", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.errors["allocated_date"][0])),
                      ])
                    : _vm._e(),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm w-100 btn-primary mt-3",
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.updateAllocation.apply(null, arguments)
                    },
                  },
                },
                [_vm._v("Update")]
              ),
            ]),
            _vm._v(" "),
            _vm._m(5),
          ]),
        ]),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "cancelModal", tabindex: "-1" },
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(6),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "mt-3" }, [
                _c("h5", [
                  _vm._v(
                    "Do you want to cancel allocation of " +
                      _vm._s(_vm.cancelled_name) +
                      " ?"
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-3" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("label", [_vm._v("Date of cancelation")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.cancelled_date,
                        expression: "cancelled_date",
                      },
                    ],
                    staticClass: "form-control form-control-sm",
                    attrs: { type: "text", onfocus: "(this.type='date')" },
                    domProps: { value: _vm.cancelled_date },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.cancelled_date = $event.target.value
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm w-100 btn-primary mt-3",
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.executeCancel.apply(null, arguments)
                    },
                  },
                },
                [_vm._v("Cancel Allocation")]
              ),
            ]),
            _vm._v(" "),
            _vm._m(7),
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
        _c("th", [_vm._v("Room Number")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Seats")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "table-secondary" }, [
        _c("th", [_vm._v("Seat Number")]),
        _vm._v(" "),
        _c("th", [_vm._v("Attached Student")]),
        _vm._v(" "),
        _c("th", [_vm._v("Attached Date")]),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "140px" } },
          [_vm._v("Allocate Seat")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Add room")]),
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
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Allocate Seat")]),
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
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Cancel Seat")]),
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