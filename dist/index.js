/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \**************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".checkmark {\n  background-image: url(\"../icons/tomato.png\");\n  width: 32px;\n  height: 32px;\n}\n\n.form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.form__options-label {\n  align-self: flex-start;\n  font-weight: 700;\n  font-size: 20px;\n}\n.form__options {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.form__option-container {\n  position: relative;\n  min-width: 120px;\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: flex-end;\n}\n.form__radio {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.form__radio:checked + .form__checkmark {\n  background-image: url(\"./icons/tomato-color.png\");\n}\n.form__checkmark {\n  height: 32px;\n  width: 32px;\n  margin-right: 8px;\n  background-image: url(\"./icons/tomato.png\");\n  background-size: cover;\n}\n.form__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #ddd;\n  border: 2px solid #ddd;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  margin-top: 30px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.form__button:hover {\n  background-color: #ddd;\n  color: #971515;\n}\n.form__button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.left {\n  background-color: #971515;\n  color: #ddd;\n}\n.left__header {\n  text-transform: uppercase;\n  font-size: 64px;\n  text-align: center;\n  padding: 20px;\n}\n.left__reset-button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #ddd;\n  border: 2px solid #ddd;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.left__reset-button:hover {\n  background-color: #ddd;\n  color: #971515;\n}\n\n.right {\n  color: #971515;\n}\n.right__wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.right__counter {\n  font-size: 180px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.right__counter #minutes {\n  font-size: 220px;\n  border-bottom: 1px solid #971515;\n}\n.right__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #971515;\n  border: 2px solid #971515;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.right__button:hover {\n  background-color: #971515;\n  color: #ddd;\n}\n.right__button:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #ddd;\n  display: flex;\n}\n\n.hide {\n  display: none;\n}\n\n.container {\n  position: relative;\n  width: 50vw;\n  height: 100vh;\n}\n\n.right-modal {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.93);\n  top: 0;\n  right: 0;\n  color: #fff;\n}\n.right-modal__wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.right-modal__continue {\n  font-size: 100px;\n}\n.right-modal__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #fff;\n  border: 2px solid #fff;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  margin-top: 30px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.right-modal__button:hover {\n  background-color: #fff;\n  color: #000;\n}\n\n.clock {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  margin-top: 50px;\n  position: absolute;\n  bottom: -100px;\n}\n.clock__icon {\n  width: 50px;\n  height: 50px;\n  fill: #fff;\n  transition: fill 0.1s ease-in;\n}\n.clock__icon--alarm {\n  fill: #971515;\n  animation: shake 0.1s ease-in infinite;\n}\n.clock__icon:hover {\n  fill: #41b883;\n}\n\n@keyframes shake {\n  25% {\n    transform: translateX(-2px);\n  }\n  75% {\n    transform: translateX(2px);\n  }\n}", "",{"version":3,"sources":["webpack://./_form.scss","webpack://./main.scss","webpack://./_mixins.scss","webpack://./_variables.scss","webpack://./_left.scss","webpack://./_right.scss"],"names":[],"mappings":"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","sourcesContent":["@import 'variables';\r\n@import 'mixins';\r\n\r\n.checkmark {\r\n   background-image: url('../icons/tomato.png');\r\n   width: 32px;\r\n   height: 32px;\r\n}\r\n\r\n.form {\r\n   position: absolute;\r\n   top: 50%;\r\n   left: 50%;\r\n   transform: translate(-50%, -50%);\r\n   padding: 20px;\r\n   // border: 1px solid $primary-color;\r\n\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: center;\r\n\r\n   &__options-label {\r\n      align-self: flex-start;\r\n      font-weight: 700;\r\n      font-size: 20px;\r\n   }\r\n\r\n   &__options {\r\n      width: 100%;\r\n      display: flex;\r\n      justify-content: flex-start;\r\n      padding: 10px;\r\n      margin-bottom: 10px;\r\n   }\r\n\r\n   &__option-container {\r\n      position: relative;\r\n      min-width: 120px;\r\n      font-size: 18px;\r\n      cursor: pointer;\r\n      display: flex;\r\n      align-items: flex-end;\r\n   }\r\n\r\n   &__radio {\r\n      position: absolute;\r\n      opacity: 0;\r\n      cursor: pointer;\r\n      height: 0;\r\n      width: 0;\r\n\r\n      &:checked + .form__checkmark {\r\n         background-image: url('./icons/tomato-color.png');\r\n      }\r\n   }\r\n\r\n   &__checkmark {\r\n      height: 32px;\r\n      width: 32px;\r\n      margin-right: 8px;\r\n\r\n      background-image: url('./icons/tomato.png');\r\n      background-size: cover;\r\n   }\r\n\r\n   &__button {\r\n      @include btn($primary-color);\r\n\r\n      margin-top: 30px;\r\n      transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\r\n      &:hover {\r\n         background-color: $primary-color;\r\n         color: $secondary-color;\r\n      }\r\n\r\n      &:disabled {\r\n         opacity: 0.5;\r\n         cursor: not-allowed;\r\n      }\r\n   }\r\n}\r\n",".checkmark {\n  background-image: url(\"../icons/tomato.png\");\n  width: 32px;\n  height: 32px;\n}\n\n.form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.form__options-label {\n  align-self: flex-start;\n  font-weight: 700;\n  font-size: 20px;\n}\n.form__options {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.form__option-container {\n  position: relative;\n  min-width: 120px;\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: flex-end;\n}\n.form__radio {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.form__radio:checked + .form__checkmark {\n  background-image: url(\"./icons/tomato-color.png\");\n}\n.form__checkmark {\n  height: 32px;\n  width: 32px;\n  margin-right: 8px;\n  background-image: url(\"./icons/tomato.png\");\n  background-size: cover;\n}\n.form__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #ddd;\n  border: 2px solid #ddd;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  margin-top: 30px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.form__button:hover {\n  background-color: #ddd;\n  color: #971515;\n}\n.form__button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.left {\n  background-color: #971515;\n  color: #ddd;\n}\n.left__header {\n  text-transform: uppercase;\n  font-size: 64px;\n  text-align: center;\n  padding: 20px;\n}\n.left__reset-button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #ddd;\n  border: 2px solid #ddd;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.left__reset-button:hover {\n  background-color: #ddd;\n  color: #971515;\n}\n\n.right {\n  color: #971515;\n}\n.right__wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.right__counter {\n  font-size: 180px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.right__counter #minutes {\n  font-size: 220px;\n  border-bottom: 1px solid #971515;\n}\n.right__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #971515;\n  border: 2px solid #971515;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.right__button:hover {\n  background-color: #971515;\n  color: #ddd;\n}\n.right__button:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #ddd;\n  display: flex;\n}\n\n.hide {\n  display: none;\n}\n\n.container {\n  position: relative;\n  width: 50vw;\n  height: 100vh;\n}\n\n.right-modal {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.93);\n  top: 0;\n  right: 0;\n  color: #fff;\n}\n.right-modal__wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.right-modal__continue {\n  font-size: 100px;\n}\n.right-modal__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #fff;\n  border: 2px solid #fff;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  margin-top: 30px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.right-modal__button:hover {\n  background-color: #fff;\n  color: #000;\n}\n\n.clock {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  margin-top: 50px;\n  position: absolute;\n  bottom: -100px;\n}\n.clock__icon {\n  width: 50px;\n  height: 50px;\n  fill: #fff;\n  transition: fill 0.1s ease-in;\n}\n.clock__icon--alarm {\n  fill: #971515;\n  animation: shake 0.1s ease-in infinite;\n}\n.clock__icon:hover {\n  fill: #41b883;\n}\n\n@keyframes shake {\n  25% {\n    transform: translateX(-2px);\n  }\n  75% {\n    transform: translateX(2px);\n  }\n}","@mixin btn($color) {\r\n   min-width: 120px;\r\n   background-color: transparent;\r\n   font-family: inherit;\r\n   font-size: 16px;\r\n   color: $color;\r\n   border: 2px solid $color;\r\n   border-radius: 50px;\r\n   padding: 10px 20px;\r\n   cursor: pointer;\r\n   outline: none;\r\n}\r\n","$primary-color: #ddd;\r\n$secondary-color: #971515;\r\n","@import 'variables';\r\n@import 'mixins';\r\n\r\n.left {\r\n   background-color: $secondary-color;\r\n   color: $primary-color;\r\n\r\n   &__header {\r\n      text-transform: uppercase;\r\n      font-size: 64px;\r\n      text-align: center;\r\n      padding: 20px;\r\n   }\r\n\r\n   &__reset-button {\r\n      @include btn($primary-color);\r\n\r\n      position: absolute;\r\n      bottom: 50px;\r\n      right: 50px;\r\n\r\n      transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\r\n      &:hover {\r\n         background-color: $primary-color;\r\n         color: $secondary-color;\r\n      }\r\n   }\r\n}\r\n","@import 'variables';\r\n@import 'mixins';\r\n\r\n.right {\r\n   color: $secondary-color;\r\n\r\n   &__wrapper {\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n   }\r\n\r\n   &__counter {\r\n      font-size: 180px;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n\r\n      #minutes {\r\n         font-size: 220px;\r\n         border-bottom: 1px solid $secondary-color;\r\n      }\r\n   }\r\n\r\n   &__button {\r\n      @include btn($secondary-color);\r\n      transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\r\n\r\n      &:hover {\r\n         background-color: $secondary-color;\r\n         color: $primary-color;\r\n      }\r\n\r\n      &:disabled {\r\n         opacity: 0.3;\r\n         cursor: not-allowed;\r\n      }\r\n   }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_url_false_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js?url=false!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_url_false_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_url_false_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./src/Pomodorro.ts":
/*!**************************!*\
  !*** ./src/Pomodorro.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Pomodorro = (function () {
    function Pomodorro(sec) {
        this.config = {
            sessionSeconds: sec,
            shortBreakSeconds: 5,
            longBreakSeconds: 15,
            longBreakStep: 3,
        };
        this.sessionCounter = 1;
        this.isBrake = false;
        this.currentSeconds = sec;
    }
    Pomodorro.prototype.setCurrentSeconds = function () {
        this.isBrake = !this.isBrake;
        if (this.isBrake) {
            if (this.sessionCounter % this.config.longBreakStep === 0) {
                this.currentSeconds = this.config.longBreakSeconds;
            }
            else {
                this.currentSeconds = this.config.shortBreakSeconds;
            }
        }
        else {
            this.sessionCounter++;
            this.currentSeconds = this.config.sessionSeconds;
        }
    };
    Pomodorro.prototype.decrementSeconds = function () {
        if (this.currentSeconds === 0) {
            this.setCurrentSeconds();
        }
        else {
            this.currentSeconds--;
        }
    };
    return Pomodorro;
}());
exports.default = Pomodorro;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
var Pomodorro_1 = __webpack_require__(/*! ./Pomodorro */ "./src/Pomodorro.ts");
var App = (function () {
    function App() {
        this.ui = {
            form: document.querySelector('form'),
            startBtn: document.querySelector('#startBtn'),
            pauseBtn: document.querySelector('#pauseBtn'),
            resetBtn: document.querySelector('#resetBtn'),
            continueBtn: document.querySelector('#continueBtn'),
            minutes: document.querySelector('#minutes'),
            seconds: document.querySelector('#seconds'),
            modal: document.querySelector('#modal'),
            alarm: document.querySelector('#alarm'),
            alarmBtn: document.querySelector('#alarmBtn'),
        };
        this.isPomodorroInProgress = false;
        this.isPaused = false;
    }
    App.prototype.init = function () {
        this.addEventListeners();
    };
    App.prototype.addEventListeners = function () {
        var _this = this;
        this.ui.form.addEventListener('submit', function (e) { return _this.handleStartClick(e); });
        this.ui.pauseBtn.addEventListener('click', function () { return _this.handlePauseClick(); });
        this.ui.resetBtn.addEventListener('click', function () { return _this.handleResetClick(); });
        this.ui.continueBtn.addEventListener('click', function () { return _this.handleContinueClick(); });
        this.ui.alarmBtn.addEventListener('click', function () { return _this.stopAlarm(); });
    };
    App.prototype.toggleModal = function () {
        this.pauseUnpauseInterval();
        this.ui.modal.classList.toggle('hide');
    };
    App.prototype.showTimer = function () {
        var min = this.pomodorro.currentSeconds > 59 ? Math.floor(this.pomodorro.currentSeconds / 60) : 0;
        var sec = min === 0 ? this.pomodorro.currentSeconds : this.pomodorro.currentSeconds % 60;
        this.ui.minutes.innerHTML = min > 9 ? min.toString() : "0" + min;
        this.ui.seconds.innerHTML = sec > 9 ? sec.toString() : "0" + sec;
    };
    App.prototype.startInterval = function () {
        var _this = this;
        this.showTimer();
        this.interval = window.setInterval(function () {
            if (_this.pomodorro.currentSeconds === 0) {
                _this.ui.alarm.play();
                _this.ui.alarmBtn.classList.remove('hide');
                _this.toggleModal();
            }
            _this.pomodorro.decrementSeconds();
            _this.showTimer();
        }, 1000);
    };
    App.prototype.pauseUnpauseInterval = function () {
        this.isPaused = !this.isPaused;
        if (this.isPaused) {
            clearInterval(this.interval);
        }
        else {
            this.startInterval();
        }
    };
    App.prototype.handleStartClick = function (e) {
        e.preventDefault();
        var time = document.querySelector('input[name="time"]:checked');
        this.pomodorro = new Pomodorro_1.default(parseInt(time.value));
        this.switchDisabledButtons();
        this.startInterval();
    };
    App.prototype.handlePauseClick = function () {
        this.pauseUnpauseInterval();
        this.ui.pauseBtn.innerHTML = this.isPaused ? 'UNPAUSE' : 'PAUSE';
    };
    App.prototype.handleResetClick = function () {
        this.switchDisabledButtons();
        clearInterval(this.interval);
        this.isPaused = false;
        this.ui.modal.classList.add('hide');
        this.ui.pauseBtn.innerHTML = this.isPaused ? 'UNPAUSE' : 'PAUSE';
        this.ui.minutes.innerHTML = '00';
        this.ui.seconds.innerHTML = '00';
    };
    App.prototype.handleContinueClick = function () {
        this.toggleModal();
        this.stopAlarm();
    };
    App.prototype.switchDisabledButtons = function () {
        this.isPomodorroInProgress = !this.isPomodorroInProgress;
        this.ui.startBtn.disabled = this.isPomodorroInProgress;
        this.ui.pauseBtn.disabled = !this.isPomodorroInProgress;
        this.ui.resetBtn.disabled = !this.isPomodorroInProgress;
    };
    App.prototype.stopAlarm = function () {
        this.ui.alarm.pause();
        this.ui.alarmBtn.classList.add('hide');
    };
    return App;
}());
var app = new App();
app.init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb21vZG9ycm8tYXBwLy4vc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL3BvbW9kb3Jyby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvbW9kb3Jyby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9wb21vZG9ycm8tYXBwLy4vc3JjL3Njc3MvbWFpbi5zY3NzP2ZkNzYiLCJ3ZWJwYWNrOi8vcG9tb2RvcnJvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb21vZG9ycm8tYXBwLy4vc3JjL1BvbW9kb3Jyby50cyIsIndlYnBhY2s6Ly9wb21vZG9ycm8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvbW9kb3Jyby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9tb2RvcnJvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9tb2RvcnJvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvbW9kb3Jyby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb21vZG9ycm8tYXBwLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxzREFBc0QsbURBQW1ELGdCQUFnQixp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QUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxRQUFRLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSw2Q0FBNkMscUJBQXFCLG9CQUFvQixvREFBb0QsbUJBQW1CLG9CQUFvQixLQUFL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QUFELENBQUM7QUFFRCxJQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNoZWNrbWFyayB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ljb25zL3RvbWF0by5wbmdcXFwiKTtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG4uZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvcm1fX29wdGlvbnMtbGFiZWwge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5mb3JtX19vcHRpb25zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uZm9ybV9fb3B0aW9uLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuLmZvcm1fX3JhZGlvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG59XFxuLmZvcm1fX3JhZGlvOmNoZWNrZWQgKyAuZm9ybV9fY2hlY2ttYXJrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pY29ucy90b21hdG8tY29sb3IucG5nXFxcIik7XFxufVxcbi5mb3JtX19jaGVja21hcmsge1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pY29ucy90b21hdG8ucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uZm9ybV9fYnV0dG9uIHtcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICNkZGQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4uZm9ybV9fYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICBjb2xvcjogIzk3MTUxNTtcXG59XFxuLmZvcm1fX2J1dHRvbjpkaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4ubGVmdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTcxNTE1O1xcbiAgY29sb3I6ICNkZGQ7XFxufVxcbi5sZWZ0X19oZWFkZXIge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogNjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5sZWZ0X19yZXNldC1idXR0b24ge1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogI2RkZDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNTBweDtcXG4gIHJpZ2h0OiA1MHB4O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4ubGVmdF9fcmVzZXQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICBjb2xvcjogIzk3MTUxNTtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gIGNvbG9yOiAjOTcxNTE1O1xcbn1cXG4ucmlnaHRfX3dyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnJpZ2h0X19jb3VudGVyIHtcXG4gIGZvbnQtc2l6ZTogMTgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnJpZ2h0X19jb3VudGVyICNtaW51dGVzIHtcXG4gIGZvbnQtc2l6ZTogMjIwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk3MTUxNTtcXG59XFxuLnJpZ2h0X19idXR0b24ge1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogIzk3MTUxNTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5NzE1MTU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuLnJpZ2h0X19idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk3MTUxNTtcXG4gIGNvbG9yOiAjZGRkO1xcbn1cXG4ucmlnaHRfX2J1dHRvbjpkaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjM7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLnJpZ2h0LW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45Myk7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ucmlnaHQtbW9kYWxfX3dyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ucmlnaHQtbW9kYWxfX2NvbnRpbnVlIHtcXG4gIGZvbnQtc2l6ZTogMTAwcHg7XFxufVxcbi5yaWdodC1tb2RhbF9fYnV0dG9uIHtcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4ucmlnaHQtbW9kYWxfX2J1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5jbG9jayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0xMDBweDtcXG59XFxuLmNsb2NrX19pY29uIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZmlsbDogI2ZmZjtcXG4gIHRyYW5zaXRpb246IGZpbGwgMC4xcyBlYXNlLWluO1xcbn1cXG4uY2xvY2tfX2ljb24tLWFsYXJtIHtcXG4gIGZpbGw6ICM5NzE1MTU7XFxuICBhbmltYXRpb246IHNoYWtlIDAuMXMgZWFzZS1pbiBpbmZpbml0ZTtcXG59XFxuLmNsb2NrX19pY29uOmhvdmVyIHtcXG4gIGZpbGw6ICM0MWI4ODM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgMjUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL19mb3JtLnNjc3NcIixcIndlYnBhY2s6Ly8uL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL19sZWZ0LnNjc3NcIixcIndlYnBhY2s6Ly8uL19yaWdodC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0csNENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZIOztBREtBO0VBQ0csa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUdBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDSkg7QURNRztFQUNHLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSk47QURPRztFQUNHLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNMTjtBRFFHO0VBQ0csa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FDTk47QURTRztFQUNHLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ1BOO0FEU007RUFDRyxpREFBQTtBQ1BUO0FEV0c7RUFDRyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBRUEsMkNBQUE7RUFDQSxzQkFBQTtBQ1ZOO0FEYUc7RUVoRUEsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFdDTGE7RURNYixzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFRjBERyxnQkFBQTtFQUNBLHFFQUFBO0FDSE47QURJTTtFQUNHLHNCR3ZFTztFSHdFUCxjR3ZFUztBRnFFbEI7QURLTTtFQUNHLFlBQUE7RUFDQSxtQkFBQTtBQ0hUOztBR3ZFQTtFQUNHLHlCREhlO0VDSWYsV0RMYTtBRitFaEI7QUd4RUc7RUFDRyx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUgwRU47QUd2RUc7RUZiQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0NMYTtFRE1iLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VFT0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLHFFQUFBO0FIZ0ZOO0FHL0VNO0VBQ0csc0JEdkJPO0VDd0JQLGNEdkJTO0FGd0dsQjs7QUl0R0E7RUFDRyxjRkhlO0FGNEdsQjtBSXZHRztFQUNHLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FKeUdOO0FJdEdHO0VBQ0csZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FKd0dOO0FJdEdNO0VBQ0csZ0JBQUE7RUFDQSxnQ0FBQTtBSndHVDtBSXBHRztFSDVCQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0NKZTtFREtmLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VHcUJHLHFFQUFBO0FKK0dOO0FJN0dNO0VBQ0cseUJGakNTO0VFa0NULFdGbkNPO0FGa0poQjtBSTVHTTtFQUNHLFlBQUE7RUFDQSxtQkFBQTtBSjhHVDs7QUFqSkE7RUFDRyxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBb0pIOztBQWpKQTtFQUNHLGlDQUFBO0VBQ0Esc0JFYmE7RUZjYixhQUFBO0FBb0pIOztBQWpKQTtFQUNHLGFBQUE7QUFvSkg7O0FBakpBO0VBQ0csa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQW9KSDs7QUFqSkE7RUFDRyxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBb0pIO0FBbEpHO0VBQ0csa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQW1KTjtBQWhKRztFQUNHLGdCQUFBO0FBa0pOO0FBL0lHO0VDakRBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxXRDhDZ0I7RUM3Q2hCLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VEMkNHLGdCQUFBO0VBRUEscUVBQUE7QUF3Sk47QUF0Sk07RUFDRyxzQkFBQTtFQUNBLFdBQUE7QUF3SlQ7O0FBbkpBO0VBQ0csNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBc0pIO0FBcEpHO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUFzSk47QUFwSk07RUFDRyxhRTlFUztFRitFVCxzQ0FBQTtBQXNKVDtBQWxKRztFQUNHLGFBQUE7QUFvSk47O0FBaEpBO0VBQ0c7SUFDRywyQkFBQTtFQW1KSjtFQWpKQztJQUNHLDBCQUFBO0VBbUpKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAndmFyaWFibGVzJztcXHJcXG5AaW1wb3J0ICdtaXhpbnMnO1xcclxcblxcclxcbi5jaGVja21hcmsge1xcclxcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaWNvbnMvdG9tYXRvLnBuZycpO1xcclxcbiAgIHdpZHRoOiAzMnB4O1xcclxcbiAgIGhlaWdodDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICB0b3A6IDUwJTtcXHJcXG4gICBsZWZ0OiA1MCU7XFxyXFxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAvLyBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcXHJcXG5cXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAmX19vcHRpb25zLWxhYmVsIHtcXHJcXG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAmX19vcHRpb25zIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgfVxcclxcblxcclxcbiAgICZfX29wdGlvbi1jb250YWluZXIge1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICBtaW4td2lkdGg6IDEyMHB4O1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgfVxcclxcblxcclxcbiAgICZfX3JhZGlvIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgaGVpZ2h0OiAwO1xcclxcbiAgICAgIHdpZHRoOiAwO1xcclxcblxcclxcbiAgICAgICY6Y2hlY2tlZCArIC5mb3JtX19jaGVja21hcmsge1xcclxcbiAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pY29ucy90b21hdG8tY29sb3IucG5nJyk7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAmX19jaGVja21hcmsge1xcclxcbiAgICAgIGhlaWdodDogMzJweDtcXHJcXG4gICAgICB3aWR0aDogMzJweDtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXHJcXG5cXHJcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaWNvbnMvdG9tYXRvLnBuZycpO1xcclxcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgfVxcclxcblxcclxcbiAgICZfX2J1dHRvbiB7XFxyXFxuICAgICAgQGluY2x1ZGUgYnRuKCRwcmltYXJ5LWNvbG9yKTtcXHJcXG5cXHJcXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJjpkaXNhYmxlZCB7XFxyXFxuICAgICAgICAgb3BhY2l0eTogMC41O1xcclxcbiAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG59XFxyXFxuXCIsXCIuY2hlY2ttYXJrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaWNvbnMvdG9tYXRvLnBuZ1xcXCIpO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbi5mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9ybV9fb3B0aW9ucy1sYWJlbCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmZvcm1fX29wdGlvbnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5mb3JtX19vcHRpb24tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG4uZm9ybV9fcmFkaW8ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbn1cXG4uZm9ybV9fcmFkaW86Y2hlY2tlZCArIC5mb3JtX19jaGVja21hcmsge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ljb25zL3RvbWF0by1jb2xvci5wbmdcXFwiKTtcXG59XFxuLmZvcm1fX2NoZWNrbWFyayB7XFxuICBoZWlnaHQ6IDMycHg7XFxuICB3aWR0aDogMzJweDtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ljb25zL3RvbWF0by5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbi5mb3JtX19idXR0b24ge1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogI2RkZDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbi5mb3JtX19idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gIGNvbG9yOiAjOTcxNTE1O1xcbn1cXG4uZm9ybV9fYnV0dG9uOmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5sZWZ0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NzE1MTU7XFxuICBjb2xvcjogI2RkZDtcXG59XFxuLmxlZnRfX2hlYWRlciB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiA2NHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuLmxlZnRfX3Jlc2V0LWJ1dHRvbiB7XFxuICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjZGRkO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1MHB4O1xcbiAgcmlnaHQ6IDUwcHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbi5sZWZ0X19yZXNldC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gIGNvbG9yOiAjOTcxNTE1O1xcbn1cXG5cXG4ucmlnaHQge1xcbiAgY29sb3I6ICM5NzE1MTU7XFxufVxcbi5yaWdodF9fd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucmlnaHRfX2NvdW50ZXIge1xcbiAgZm9udC1zaXplOiAxODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucmlnaHRfX2NvdW50ZXIgI21pbnV0ZXMge1xcbiAgZm9udC1zaXplOiAyMjBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTcxNTE1O1xcbn1cXG4ucmlnaHRfX2J1dHRvbiB7XFxuICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjOTcxNTE1O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzk3MTUxNTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4ucmlnaHRfX2J1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTcxNTE1O1xcbiAgY29sb3I6ICNkZGQ7XFxufVxcbi5yaWdodF9fYnV0dG9uOmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ucmlnaHQtbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkzKTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5yaWdodC1tb2RhbF9fd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5yaWdodC1tb2RhbF9fY29udGludWUge1xcbiAgZm9udC1zaXplOiAxMDBweDtcXG59XFxuLnJpZ2h0LW1vZGFsX19idXR0b24ge1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbi5yaWdodC1tb2RhbF9fYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmNsb2NrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTEwMHB4O1xcbn1cXG4uY2xvY2tfX2ljb24ge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBmaWxsOiAjZmZmO1xcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjFzIGVhc2UtaW47XFxufVxcbi5jbG9ja19faWNvbi0tYWxhcm0ge1xcbiAgZmlsbDogIzk3MTUxNTtcXG4gIGFuaW1hdGlvbjogc2hha2UgMC4xcyBlYXNlLWluIGluZmluaXRlO1xcbn1cXG4uY2xvY2tfX2ljb246aG92ZXIge1xcbiAgZmlsbDogIzQxYjg4MztcXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAyNSUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XFxuICB9XFxuICA3NSUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KTtcXG4gIH1cXG59XCIsXCJAbWl4aW4gYnRuKCRjb2xvcikge1xcclxcbiAgIG1pbi13aWR0aDogMTIwcHg7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgIGNvbG9yOiAkY29sb3I7XFxyXFxuICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yO1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cIixcIiRwcmltYXJ5LWNvbG9yOiAjZGRkO1xcclxcbiRzZWNvbmRhcnktY29sb3I6ICM5NzE1MTU7XFxyXFxuXCIsXCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xcclxcbkBpbXBvcnQgJ21peGlucyc7XFxyXFxuXFxyXFxuLmxlZnQge1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcblxcclxcbiAgICZfX2hlYWRlciB7XFxyXFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgICBmb250LXNpemU6IDY0cHg7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgfVxcclxcblxcclxcbiAgICZfX3Jlc2V0LWJ1dHRvbiB7XFxyXFxuICAgICAgQGluY2x1ZGUgYnRuKCRwcmltYXJ5LWNvbG9yKTtcXHJcXG5cXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgYm90dG9tOiA1MHB4O1xcclxcbiAgICAgIHJpZ2h0OiA1MHB4O1xcclxcblxcclxcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XFxyXFxuQGltcG9ydCAnbWl4aW5zJztcXHJcXG5cXHJcXG4ucmlnaHQge1xcclxcbiAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcblxcclxcbiAgICZfX3dyYXBwZXIge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgfVxcclxcblxcclxcbiAgICZfX2NvdW50ZXIge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTgwcHg7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgI21pbnV0ZXMge1xcclxcbiAgICAgICAgIGZvbnQtc2l6ZTogMjIwcHg7XFxyXFxuICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAmX19idXR0b24ge1xcclxcbiAgICAgIEBpbmNsdWRlIGJ0bigkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICY6ZGlzYWJsZWQge1xcclxcbiAgICAgICAgIG9wYWNpdHk6IDAuMztcXHJcXG4gICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz91cmw9ZmFsc2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImludGVyZmFjZSBJQ29uZmlnIHtcclxuICAgc2Vzc2lvblNlY29uZHM6IG51bWJlcjtcclxuICAgc2hvcnRCcmVha1NlY29uZHM6IG51bWJlcjtcclxuICAgbG9uZ0JyZWFrU2Vjb25kczogbnVtYmVyO1xyXG4gICBsb25nQnJlYWtTdGVwOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbW9kb3JybyB7XHJcbiAgIHByaXZhdGUgY29uZmlnOiBJQ29uZmlnO1xyXG4gICBwdWJsaWMgY3VycmVudFNlY29uZHM6IG51bWJlcjtcclxuICAgcHVibGljIHNlc3Npb25Db3VudGVyOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBpc0JyYWtlOiBib29sZWFuO1xyXG4gICBwdWJsaWMgbWludXRlczogbnVtYmVyO1xyXG4gICBwdWJsaWMgc2Vjb25kczogbnVtYmVyO1xyXG5cclxuICAgY29uc3RydWN0b3Ioc2VjOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5jb25maWcgPSB7XHJcbiAgICAgICAgIHNlc3Npb25TZWNvbmRzOiBzZWMsXHJcbiAgICAgICAgIHNob3J0QnJlYWtTZWNvbmRzOiA1LFxyXG4gICAgICAgICBsb25nQnJlYWtTZWNvbmRzOiAxNSxcclxuICAgICAgICAgbG9uZ0JyZWFrU3RlcDogMyxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5zZXNzaW9uQ291bnRlciA9IDE7XHJcbiAgICAgIHRoaXMuaXNCcmFrZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmN1cnJlbnRTZWNvbmRzID0gc2VjO1xyXG4gICB9XHJcblxyXG4gICBzZXRDdXJyZW50U2Vjb25kcygpIHtcclxuICAgICAgdGhpcy5pc0JyYWtlID0gIXRoaXMuaXNCcmFrZTtcclxuICAgICAgaWYgKHRoaXMuaXNCcmFrZSkge1xyXG4gICAgICAgICBpZiAodGhpcy5zZXNzaW9uQ291bnRlciAlIHRoaXMuY29uZmlnLmxvbmdCcmVha1N0ZXAgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2Vjb25kcyA9IHRoaXMuY29uZmlnLmxvbmdCcmVha1NlY29uZHM7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNlY29uZHMgPSB0aGlzLmNvbmZpZy5zaG9ydEJyZWFrU2Vjb25kcztcclxuICAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnNlc3Npb25Db3VudGVyKys7XHJcbiAgICAgICAgIHRoaXMuY3VycmVudFNlY29uZHMgPSB0aGlzLmNvbmZpZy5zZXNzaW9uU2Vjb25kcztcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBkZWNyZW1lbnRTZWNvbmRzKCkge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50U2Vjb25kcyA9PT0gMCkge1xyXG4gICAgICAgICB0aGlzLnNldEN1cnJlbnRTZWNvbmRzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIHRoaXMuY3VycmVudFNlY29uZHMtLTtcclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zY3NzL21haW4uc2Nzcyc7XHJcbmltcG9ydCBQb21vZG9ycm8gZnJvbSAnLi9Qb21vZG9ycm8nO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgcG9tb2RvcnJvOiBQb21vZG9ycm87XHJcbiAgIHVpOiB7XHJcbiAgICAgIGZvcm06IEhUTUxGb3JtRWxlbWVudDtcclxuICAgICAgc3RhcnRCdG46IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICBwYXVzZUJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgIHJlc2V0QnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgY29udGludWVCdG46IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICBtaW51dGVzOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICAgIHNlY29uZHM6IEhUTUxTcGFuRWxlbWVudDtcclxuICAgICAgbW9kYWw6IEhUTUxFbGVtZW50O1xyXG4gICAgICBhbGFybTogSFRNTEF1ZGlvRWxlbWVudDtcclxuICAgICAgYWxhcm1CdG46IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICB9O1xyXG4gICBpbnRlcnZhbDogbnVtYmVyO1xyXG4gICBpc1BvbW9kb3Jyb0luUHJvZ3Jlc3M6IGJvb2xlYW47XHJcbiAgIGlzUGF1c2VkOiBib29sZWFuO1xyXG5cclxuICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMudWkgPSB7XHJcbiAgICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKSEsXHJcbiAgICAgICAgIHN0YXJ0QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnRCdG4nKSEsXHJcbiAgICAgICAgIHBhdXNlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGF1c2VCdG4nKSEsXHJcbiAgICAgICAgIHJlc2V0QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXRCdG4nKSEsXHJcbiAgICAgICAgIGNvbnRpbnVlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGludWVCdG4nKSEsXHJcbiAgICAgICAgIG1pbnV0ZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaW51dGVzJykhLFxyXG4gICAgICAgICBzZWNvbmRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2Vjb25kcycpISxcclxuICAgICAgICAgbW9kYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpISxcclxuICAgICAgICAgYWxhcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGFybScpISxcclxuICAgICAgICAgYWxhcm1CdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGFybUJ0bicpISxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuaXNQb21vZG9ycm9JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcclxuICAgfVxyXG5cclxuICAgaW5pdCgpIHtcclxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gICB9XHJcblxyXG4gICBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgdGhpcy51aS5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB0aGlzLmhhbmRsZVN0YXJ0Q2xpY2soZSkpO1xyXG4gICAgICB0aGlzLnVpLnBhdXNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oYW5kbGVQYXVzZUNsaWNrKCkpO1xyXG4gICAgICB0aGlzLnVpLnJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oYW5kbGVSZXNldENsaWNrKCkpO1xyXG4gICAgICB0aGlzLnVpLmNvbnRpbnVlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oYW5kbGVDb250aW51ZUNsaWNrKCkpO1xyXG4gICAgICB0aGlzLnVpLmFsYXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zdG9wQWxhcm0oKSk7XHJcbiAgIH1cclxuXHJcbiAgIHRvZ2dsZU1vZGFsKCkge1xyXG4gICAgICB0aGlzLnBhdXNlVW5wYXVzZUludGVydmFsKCk7XHJcbiAgICAgIHRoaXMudWkubW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG4gICB9XHJcblxyXG4gICBzaG93VGltZXIoKSB7XHJcbiAgICAgIGNvbnN0IG1pbiA9XHJcbiAgICAgICAgIHRoaXMucG9tb2RvcnJvLmN1cnJlbnRTZWNvbmRzID4gNTkgPyBNYXRoLmZsb29yKHRoaXMucG9tb2RvcnJvLmN1cnJlbnRTZWNvbmRzIC8gNjApIDogMDtcclxuXHJcbiAgICAgIGNvbnN0IHNlYyA9IG1pbiA9PT0gMCA/IHRoaXMucG9tb2RvcnJvLmN1cnJlbnRTZWNvbmRzIDogdGhpcy5wb21vZG9ycm8uY3VycmVudFNlY29uZHMgJSA2MDtcclxuXHJcbiAgICAgIHRoaXMudWkubWludXRlcy5pbm5lckhUTUwgPSBtaW4gPiA5ID8gbWluLnRvU3RyaW5nKCkgOiBgMCR7bWlufWA7XHJcbiAgICAgIHRoaXMudWkuc2Vjb25kcy5pbm5lckhUTUwgPSBzZWMgPiA5ID8gc2VjLnRvU3RyaW5nKCkgOiBgMCR7c2VjfWA7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXJ0SW50ZXJ2YWwoKSB7XHJcbiAgICAgIHRoaXMuc2hvd1RpbWVyKCk7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICBpZiAodGhpcy5wb21vZG9ycm8uY3VycmVudFNlY29uZHMgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy51aS5hbGFybS5wbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMudWkuYWxhcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZU1vZGFsKCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5wb21vZG9ycm8uZGVjcmVtZW50U2Vjb25kcygpO1xyXG4gICAgICAgICB0aGlzLnNob3dUaW1lcigpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgfVxyXG5cclxuICAgcGF1c2VVbnBhdXNlSW50ZXJ2YWwoKSB7XHJcbiAgICAgIHRoaXMuaXNQYXVzZWQgPSAhdGhpcy5pc1BhdXNlZDtcclxuXHJcbiAgICAgIGlmICh0aGlzLmlzUGF1c2VkKSB7XHJcbiAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGhhbmRsZVN0YXJ0Q2xpY2soZTogRXZlbnQpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRpbWVcIl06Y2hlY2tlZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIHRoaXMucG9tb2RvcnJvID0gbmV3IFBvbW9kb3JybyhwYXJzZUludCh0aW1lLnZhbHVlKSk7XHJcbiAgICAgIHRoaXMuc3dpdGNoRGlzYWJsZWRCdXR0b25zKCk7XHJcbiAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xyXG4gICB9XHJcblxyXG4gICBoYW5kbGVQYXVzZUNsaWNrKCkge1xyXG4gICAgICB0aGlzLnBhdXNlVW5wYXVzZUludGVydmFsKCk7XHJcbiAgICAgIHRoaXMudWkucGF1c2VCdG4uaW5uZXJIVE1MID0gdGhpcy5pc1BhdXNlZCA/ICdVTlBBVVNFJyA6ICdQQVVTRSc7XHJcbiAgIH1cclxuXHJcbiAgIGhhbmRsZVJlc2V0Q2xpY2soKSB7XHJcbiAgICAgIHRoaXMuc3dpdGNoRGlzYWJsZWRCdXR0b25zKCk7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy51aS5tb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIHRoaXMudWkucGF1c2VCdG4uaW5uZXJIVE1MID0gdGhpcy5pc1BhdXNlZCA/ICdVTlBBVVNFJyA6ICdQQVVTRSc7XHJcbiAgICAgIHRoaXMudWkubWludXRlcy5pbm5lckhUTUwgPSAnMDAnO1xyXG4gICAgICB0aGlzLnVpLnNlY29uZHMuaW5uZXJIVE1MID0gJzAwJztcclxuICAgfVxyXG5cclxuICAgaGFuZGxlQ29udGludWVDbGljaygpIHtcclxuICAgICAgLy8gdGhpcy5wYXVzZVVucGF1c2VJbnRlcnZhbCgpO1xyXG4gICAgICB0aGlzLnRvZ2dsZU1vZGFsKCk7XHJcbiAgICAgIHRoaXMuc3RvcEFsYXJtKCk7XHJcbiAgIH1cclxuXHJcbiAgIHN3aXRjaERpc2FibGVkQnV0dG9ucygpIHtcclxuICAgICAgdGhpcy5pc1BvbW9kb3Jyb0luUHJvZ3Jlc3MgPSAhdGhpcy5pc1BvbW9kb3Jyb0luUHJvZ3Jlc3M7XHJcblxyXG4gICAgICB0aGlzLnVpLnN0YXJ0QnRuLmRpc2FibGVkID0gdGhpcy5pc1BvbW9kb3Jyb0luUHJvZ3Jlc3M7XHJcbiAgICAgIHRoaXMudWkucGF1c2VCdG4uZGlzYWJsZWQgPSAhdGhpcy5pc1BvbW9kb3Jyb0luUHJvZ3Jlc3M7XHJcbiAgICAgIHRoaXMudWkucmVzZXRCdG4uZGlzYWJsZWQgPSAhdGhpcy5pc1BvbW9kb3Jyb0luUHJvZ3Jlc3M7XHJcbiAgIH1cclxuXHJcbiAgIHN0b3BBbGFybSgpIHtcclxuICAgICAgdGhpcy51aS5hbGFybS5wYXVzZSgpO1xyXG4gICAgICB0aGlzLnVpLmFsYXJtQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgfVxyXG59XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcbmFwcC5pbml0KCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=