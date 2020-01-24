/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/bottom-right-elips.png":
/*!***************************************!*\
  !*** ./assets/bottom-right-elips.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0d7b5f6c71291648b466c3eddd48d796.png";

/***/ }),

/***/ "./assets/top-left-elips.png":
/*!***********************************!*\
  !*** ./assets/top-left-elips.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b20c408456f614a2870e18fe7b813145.png";

/***/ }),

/***/ "./js/Components/Todo/index.js":
/*!*************************************!*\
  !*** ./js/Components/Todo/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Todo = function Todo(text, id) {
  return "<div class=\"outer-item\" id=\"outer-item-".concat(id, "\" >\n<div class=\"to-do-item\">\n<p> ").concat(text, " </p>\n<span class=\"close\" data-outer-item=\"").concat(id, "\" >  X </span>\n</div>\n<!-- /.to-do-item -->\n</div>\n<!-- /.outer-item -->");
};

/* harmony default export */ __webpack_exports__["default"] = (Todo);

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.scss */ "./main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_top_left_elips_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/top-left-elips.png */ "./assets/top-left-elips.png");
/* harmony import */ var _assets_top_left_elips_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_top_left_elips_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_bottom_right_elips_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/bottom-right-elips.png */ "./assets/bottom-right-elips.png");
/* harmony import */ var _assets_bottom_right_elips_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_bottom_right_elips_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todos */ "./js/todos.js");
/* harmony import */ var _Components_Todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Todo */ "./js/Components/Todo/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }






console.log(_todos__WEBPACK_IMPORTED_MODULE_3__["default"]);
var view = " <img\nsrc=\"".concat(_assets_top_left_elips_png__WEBPACK_IMPORTED_MODULE_1___default.a, "\"\nid=\"background-left\"\nalt=\"background\"\n/>\n<img\nsrc=\"").concat(_assets_bottom_right_elips_png__WEBPACK_IMPORTED_MODULE_2___default.a, "\"\nid=\"background-right\"\nalt=\"background\"\n/>\n\n<div class=\"wrapper\">\n<div class=\"todolist\">\n  <h1>WEB DESIGN STUDENT TO DO LIST</h1>\n  <input type=\"text\" id=\"todoInput\" placeholder=\"What do you need to do today....\" />\n  <div class=\"list\">\n  </div>\n  <!-- /.list -->\n</div>\n<!-- /.todolist -->\n</div>\n<!-- /.wrapper -->");
window.addEventListener("DOMContentLoaded", render(_todos__WEBPACK_IMPORTED_MODULE_3__["default"]));
document.addEventListener("keydown", handleKeyDown());

function handleKeyDown(e) {
  if (e.key == 13) {
    alert(e.value);
  }
}

;

function render(todos) {
  var tds = _toConsumableArray(todos);

  var handleCloseClick = function handleCloseClick(e) {
    //console.log(e.target.dataset);
    render(tds.filter(function (c) {
      return e.target.dataset.outerItem != c.id;
    }));
  };

  document.querySelector("#app").innerHTML = view;
  var htmlList = todos.map(function (item) {
    return Object(_Components_Todo__WEBPACK_IMPORTED_MODULE_4__["default"])(item.text, item.id);
  });
  document.querySelector(".list").innerHTML = htmlList.join("");
  document.querySelectorAll(".close").forEach(function (e) {
    return e.addEventListener("click", handleCloseClick);
  });
}

/***/ }),

/***/ "./js/todos.js":
/*!*********************!*\
  !*** ./js/todos.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var todos = [{
  id: "1",
  text: "Complete My Assessment AE1",
  created: "Wed Jan 22 2020 07:02:0",
  completed: false
}, {
  id: "2",
  text: "Complete My Assessment AE2",
  created: "Wed Jan 22 2020 07:03:0",
  completed: false
}];
/* harmony default export */ __webpack_exports__["default"] = (todos);

/***/ }),

/***/ "./main.scss":
/*!*******************!*\
  !*** ./main.scss ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map