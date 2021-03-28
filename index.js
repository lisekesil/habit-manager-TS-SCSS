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
___CSS_LOADER_EXPORT___.push([module.id, ".checkmark {\n  background-image: url(\"../icons/tomato.png\");\n  width: 32px;\n  height: 32px;\n}\n\n.form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.form__options-label {\n  align-self: flex-start;\n  font-weight: 700;\n  font-size: 20px;\n}\n.form__options {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.form__option-container {\n  position: relative;\n  min-width: 120px;\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: flex-end;\n}\n.form__radio {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.form__radio:checked + .form__checkmark {\n  transform: scale(1.3);\n  background-image: url(\"./icons/tomato-color.png\");\n}\n.form__checkmark {\n  height: 32px;\n  width: 32px;\n  margin-right: 8px;\n  background-image: url(\"./icons/tomato.png\");\n  background-size: cover;\n  transition: all 0.1s ease-in-out;\n}\n.form__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #ddd;\n  border: 2px solid #ddd;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  margin-top: 30px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.form__button:hover {\n  background-color: #ddd;\n  color: #971515;\n}\n.form__button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.left {\n  background-color: #971515;\n  color: #ddd;\n}\n.left__header {\n  text-transform: uppercase;\n  font-size: 64px;\n  text-align: center;\n  padding: 20px;\n}\n.left__reset-button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #ddd;\n  border: 2px solid #ddd;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.left__reset-button:hover {\n  background-color: #ddd;\n  color: #971515;\n}\n\n.right {\n  color: #971515;\n}\n.right__wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.right__counter {\n  font-size: 180px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.right__counter #minutes {\n  font-size: 220px;\n  border-bottom: 1px solid #971515;\n}\n.right__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #971515;\n  border: 2px solid #971515;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.right__button:hover {\n  background-color: #971515;\n  color: #ddd;\n}\n.right__button:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.right__streak {\n  color: #000;\n  margin-top: 20px;\n  font-weight: 700;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #ddd;\n  display: flex;\n}\n\n.hide {\n  display: none;\n}\n\n.container {\n  position: relative;\n  width: 50vw;\n  height: 100vh;\n}\n\n.right-modal {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.93);\n  top: 0;\n  right: 0;\n  color: #fff;\n}\n.right-modal__wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.right-modal__continue {\n  font-size: 100px;\n}\n.right-modal__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #fff;\n  border: 2px solid #fff;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  margin-top: 30px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.right-modal__button:hover {\n  background-color: #fff;\n  color: #000;\n}\n\n.clock {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  margin-top: 50px;\n  position: absolute;\n  bottom: -100px;\n}\n.clock__icon {\n  width: 50px;\n  height: 50px;\n  fill: #fff;\n  transition: fill 0.1s ease-in;\n}\n.clock__icon--alarm {\n  fill: #971515;\n  animation: shake 0.1s ease-in infinite;\n}\n.clock__icon:hover {\n  fill: #41b883;\n}\n\n@keyframes shake {\n  25% {\n    transform: translateX(-2px);\n  }\n  75% {\n    transform: translateX(2px);\n  }\n}", "",{"version":3,"sources":["webpack://./_form.scss","webpack://./main.scss","webpack://./_mixins.scss","webpack://./_variables.scss","webpack://./_left.scss","webpack://./_right.scss"],"names":[],"mappings":"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","sourcesContent":["@import 'variables';\r\n@import 'mixins';\r\n\r\n.checkmark {\r\n   background-image: url('../icons/tomato.png');\r\n   width: 32px;\r\n   height: 32px;\r\n}\r\n\r\n.form {\r\n   position: absolute;\r\n   top: 50%;\r\n   left: 50%;\r\n   transform: translate(-50%, -50%);\r\n   padding: 20px;\r\n\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: center;\r\n\r\n   &__options-label {\r\n      align-self: flex-start;\r\n      font-weight: 700;\r\n      font-size: 20px;\r\n   }\r\n\r\n   &__options {\r\n      width: 100%;\r\n      display: flex;\r\n      justify-content: flex-start;\r\n      padding: 10px;\r\n      margin-bottom: 10px;\r\n   }\r\n\r\n   &__option-container {\r\n      position: relative;\r\n      min-width: 120px;\r\n      font-size: 18px;\r\n      cursor: pointer;\r\n      display: flex;\r\n      align-items: flex-end;\r\n   }\r\n\r\n   &__radio {\r\n      position: absolute;\r\n      opacity: 0;\r\n      cursor: pointer;\r\n      height: 0;\r\n      width: 0;\r\n\r\n      &:checked + .form__checkmark {\r\n         transform: scale(1.3);\r\n         background-image: url('./icons/tomato-color.png');\r\n      }\r\n   }\r\n\r\n   &__checkmark {\r\n      height: 32px;\r\n      width: 32px;\r\n      margin-right: 8px;\r\n\r\n      background-image: url('./icons/tomato.png');\r\n      background-size: cover;\r\n      transition: all 0.1s ease-in-out;\r\n   }\r\n\r\n   &__button {\r\n      @include btn($primary-color);\r\n\r\n      margin-top: 30px;\r\n      transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\r\n      &:hover {\r\n         background-color: $primary-color;\r\n         color: $secondary-color;\r\n      }\r\n\r\n      &:disabled {\r\n         opacity: 0.5;\r\n         cursor: not-allowed;\r\n      }\r\n   }\r\n}\r\n",".checkmark {\n  background-image: url(\"../icons/tomato.png\");\n  width: 32px;\n  height: 32px;\n}\n\n.form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.form__options-label {\n  align-self: flex-start;\n  font-weight: 700;\n  font-size: 20px;\n}\n.form__options {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.form__option-container {\n  position: relative;\n  min-width: 120px;\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: flex-end;\n}\n.form__radio {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.form__radio:checked + .form__checkmark {\n  transform: scale(1.3);\n  background-image: url(\"./icons/tomato-color.png\");\n}\n.form__checkmark {\n  height: 32px;\n  width: 32px;\n  margin-right: 8px;\n  background-image: url(\"./icons/tomato.png\");\n  background-size: cover;\n  transition: all 0.1s ease-in-out;\n}\n.form__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #ddd;\n  border: 2px solid #ddd;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  margin-top: 30px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.form__button:hover {\n  background-color: #ddd;\n  color: #971515;\n}\n.form__button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.left {\n  background-color: #971515;\n  color: #ddd;\n}\n.left__header {\n  text-transform: uppercase;\n  font-size: 64px;\n  text-align: center;\n  padding: 20px;\n}\n.left__reset-button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #ddd;\n  border: 2px solid #ddd;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.left__reset-button:hover {\n  background-color: #ddd;\n  color: #971515;\n}\n\n.right {\n  color: #971515;\n}\n.right__wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.right__counter {\n  font-size: 180px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.right__counter #minutes {\n  font-size: 220px;\n  border-bottom: 1px solid #971515;\n}\n.right__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #971515;\n  border: 2px solid #971515;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.right__button:hover {\n  background-color: #971515;\n  color: #ddd;\n}\n.right__button:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.right__streak {\n  color: #000;\n  margin-top: 20px;\n  font-weight: 700;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #ddd;\n  display: flex;\n}\n\n.hide {\n  display: none;\n}\n\n.container {\n  position: relative;\n  width: 50vw;\n  height: 100vh;\n}\n\n.right-modal {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.93);\n  top: 0;\n  right: 0;\n  color: #fff;\n}\n.right-modal__wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.right-modal__continue {\n  font-size: 100px;\n}\n.right-modal__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #fff;\n  border: 2px solid #fff;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  margin-top: 30px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.right-modal__button:hover {\n  background-color: #fff;\n  color: #000;\n}\n\n.clock {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  margin-top: 50px;\n  position: absolute;\n  bottom: -100px;\n}\n.clock__icon {\n  width: 50px;\n  height: 50px;\n  fill: #fff;\n  transition: fill 0.1s ease-in;\n}\n.clock__icon--alarm {\n  fill: #971515;\n  animation: shake 0.1s ease-in infinite;\n}\n.clock__icon:hover {\n  fill: #41b883;\n}\n\n@keyframes shake {\n  25% {\n    transform: translateX(-2px);\n  }\n  75% {\n    transform: translateX(2px);\n  }\n}","@mixin btn($color) {\r\n   min-width: 120px;\r\n   background-color: transparent;\r\n   font-family: inherit;\r\n   font-size: 16px;\r\n   color: $color;\r\n   border: 2px solid $color;\r\n   border-radius: 50px;\r\n   padding: 10px 20px;\r\n   cursor: pointer;\r\n   outline: none;\r\n}\r\n","$primary-color: #ddd;\r\n$secondary-color: #971515;\r\n","@import 'variables';\r\n@import 'mixins';\r\n\r\n.left {\r\n   background-color: $secondary-color;\r\n   color: $primary-color;\r\n\r\n   &__header {\r\n      text-transform: uppercase;\r\n      font-size: 64px;\r\n      text-align: center;\r\n      padding: 20px;\r\n   }\r\n\r\n   &__reset-button {\r\n      @include btn($primary-color);\r\n\r\n      position: absolute;\r\n      bottom: 50px;\r\n      right: 50px;\r\n\r\n      transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\r\n      &:hover {\r\n         background-color: $primary-color;\r\n         color: $secondary-color;\r\n      }\r\n   }\r\n}\r\n","@import 'variables';\r\n@import 'mixins';\r\n\r\n.right {\r\n   color: $secondary-color;\r\n\r\n   &__wrapper {\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n   }\r\n\r\n   &__counter {\r\n      font-size: 180px;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n\r\n      #minutes {\r\n         font-size: 220px;\r\n         border-bottom: 1px solid $secondary-color;\r\n      }\r\n   }\r\n\r\n   &__button {\r\n      @include btn($secondary-color);\r\n      transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\r\n\r\n      &:hover {\r\n         background-color: $secondary-color;\r\n         color: $primary-color;\r\n      }\r\n\r\n      &:disabled {\r\n         opacity: 0.3;\r\n         cursor: not-allowed;\r\n      }\r\n   }\r\n\r\n   &__streak {\r\n      color: #000;\r\n      margin-top: 20px;\r\n      font-weight: 700;\r\n   }\r\n}\r\n"],"sourceRoot":""}]);
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
    function Pomodorro(sessionSec, sBSec, lBSec) {
        this.config = {
            sessionSeconds: sessionSec,
            shortBreakSeconds: sBSec,
            longBreakSeconds: lBSec,
            longBreakStep: 3,
        };
        this.sessionCounter = 1;
        this.isBrake = false;
        this.currentSeconds = sessionSec;
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
            streak: document.querySelector('#streak'),
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
        this.ui.streak.innerHTML = this.pomodorro.sessionCounter.toString();
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
        var sessionTime = document.querySelector('input[name="time"]:checked');
        var shortBTime = document.querySelector('input[name="short-break"]:checked');
        var longBTime = document.querySelector('input[name="long-break"]:checked');
        this.pomodorro = new Pomodorro_1.default(parseInt(sessionTime.value), parseInt(shortBTime.value), parseInt(longBTime.value));
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
        this.ui.modal.classList.add('hide');
        this.isPaused = false;
        this.ui.pauseBtn.innerHTML = this.isPaused ? 'UNPAUSE' : 'PAUSE';
        this.ui.minutes.innerHTML = '00';
        this.ui.seconds.innerHTML = '00';
        this.ui.streak.innerHTML = '0';
        this.ui.alarm.pause();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb21vZG9ycm8tYXBwLy4vc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL3BvbW9kb3Jyby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvbW9kb3Jyby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9wb21vZG9ycm8tYXBwLy4vc3JjL3Njc3MvbWFpbi5zY3NzP2ZkNzYiLCJ3ZWJwYWNrOi8vcG9tb2RvcnJvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb21vZG9ycm8tYXBwLy4vc3JjL1BvbW9kb3Jyby50cyIsIndlYnBhY2s6Ly9wb21vZG9ycm8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvbW9kb3Jyby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9tb2RvcnJvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9tb2RvcnJvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvbW9kb3Jyby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb21vZG9ycm8tYXBwLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxzREFBc0QsbURBQW1ELGdCQUFnQixp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LFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxRQUFRLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxPQUFP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QUFTLEdBQUcsR0FBRyxDQUFDO1FBQy9CLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxpQ0FBbUIsR0FBbkI7UUFFRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxtQ0FBcUIsR0FBckI7UUFDRyxJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFFekQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN2RCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDeEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQzNELENBQUM7SUFFRCx1QkFBUyxHQUFUO1FBQ0csSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0osVUFBQztBQUFELENBQUM7QUFFRCxJQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNoZWNrbWFyayB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ljb25zL3RvbWF0by5wbmdcXFwiKTtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG4uZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvcm1fX29wdGlvbnMtbGFiZWwge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5mb3JtX19vcHRpb25zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uZm9ybV9fb3B0aW9uLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuLmZvcm1fX3JhZGlvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG59XFxuLmZvcm1fX3JhZGlvOmNoZWNrZWQgKyAuZm9ybV9fY2hlY2ttYXJrIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pY29ucy90b21hdG8tY29sb3IucG5nXFxcIik7XFxufVxcbi5mb3JtX19jaGVja21hcmsge1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pY29ucy90b21hdG8ucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5mb3JtX19idXR0b24ge1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogI2RkZDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbi5mb3JtX19idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gIGNvbG9yOiAjOTcxNTE1O1xcbn1cXG4uZm9ybV9fYnV0dG9uOmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5sZWZ0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NzE1MTU7XFxuICBjb2xvcjogI2RkZDtcXG59XFxuLmxlZnRfX2hlYWRlciB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiA2NHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuLmxlZnRfX3Jlc2V0LWJ1dHRvbiB7XFxuICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjZGRkO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1MHB4O1xcbiAgcmlnaHQ6IDUwcHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbi5sZWZ0X19yZXNldC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gIGNvbG9yOiAjOTcxNTE1O1xcbn1cXG5cXG4ucmlnaHQge1xcbiAgY29sb3I6ICM5NzE1MTU7XFxufVxcbi5yaWdodF9fd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucmlnaHRfX2NvdW50ZXIge1xcbiAgZm9udC1zaXplOiAxODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucmlnaHRfX2NvdW50ZXIgI21pbnV0ZXMge1xcbiAgZm9udC1zaXplOiAyMjBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTcxNTE1O1xcbn1cXG4ucmlnaHRfX2J1dHRvbiB7XFxuICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjOTcxNTE1O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzk3MTUxNTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4ucmlnaHRfX2J1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTcxNTE1O1xcbiAgY29sb3I6ICNkZGQ7XFxufVxcbi5yaWdodF9fYnV0dG9uOmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5yaWdodF9fc3RyZWFrIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ucmlnaHQtbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkzKTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5yaWdodC1tb2RhbF9fd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5yaWdodC1tb2RhbF9fY29udGludWUge1xcbiAgZm9udC1zaXplOiAxMDBweDtcXG59XFxuLnJpZ2h0LW1vZGFsX19idXR0b24ge1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbi5yaWdodC1tb2RhbF9fYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmNsb2NrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTEwMHB4O1xcbn1cXG4uY2xvY2tfX2ljb24ge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBmaWxsOiAjZmZmO1xcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjFzIGVhc2UtaW47XFxufVxcbi5jbG9ja19faWNvbi0tYWxhcm0ge1xcbiAgZmlsbDogIzk3MTUxNTtcXG4gIGFuaW1hdGlvbjogc2hha2UgMC4xcyBlYXNlLWluIGluZmluaXRlO1xcbn1cXG4uY2xvY2tfX2ljb246aG92ZXIge1xcbiAgZmlsbDogIzQxYjg4MztcXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAyNSUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XFxuICB9XFxuICA3NSUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vX2Zvcm0uc2Nzc1wiLFwid2VicGFjazovLy4vbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vX2xlZnQuc2Nzc1wiLFwid2VicGFjazovLy4vX3JpZ2h0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRyw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRkg7O0FES0E7RUFDRyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNISDtBREtHO0VBQ0csc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNITjtBRE1HO0VBQ0csV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0pOO0FET0c7RUFDRyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUNMTjtBRFFHO0VBQ0csa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDTk47QURRTTtFQUNHLHFCQUFBO0VBQ0EsaURBQUE7QUNOVDtBRFVHO0VBQ0csWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUVBLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQ1ROO0FEWUc7RUVqRUEsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFdDTGE7RURNYixzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFRjJERyxnQkFBQTtFQUNBLHFFQUFBO0FDRk47QURHTTtFQUNHLHNCR3hFTztFSHlFUCxjR3hFUztBRnVFbEI7QURJTTtFQUNHLFlBQUE7RUFDQSxtQkFBQTtBQ0ZUOztBR3pFQTtFQUNHLHlCREhlO0VDSWYsV0RMYTtBRmlGaEI7QUcxRUc7RUFDRyx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUg0RU47QUd6RUc7RUZiQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0NMYTtFRE1iLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VFT0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLHFFQUFBO0FIa0ZOO0FHakZNO0VBQ0csc0JEdkJPO0VDd0JQLGNEdkJTO0FGMEdsQjs7QUl4R0E7RUFDRyxjRkhlO0FGOEdsQjtBSXpHRztFQUNHLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FKMkdOO0FJeEdHO0VBQ0csZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FKMEdOO0FJeEdNO0VBQ0csZ0JBQUE7RUFDQSxnQ0FBQTtBSjBHVDtBSXRHRztFSDVCQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0NKZTtFREtmLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VHcUJHLHFFQUFBO0FKaUhOO0FJL0dNO0VBQ0cseUJGakNTO0VFa0NULFdGbkNPO0FGb0poQjtBSTlHTTtFQUNHLFlBQUE7RUFDQSxtQkFBQTtBSmdIVDtBSTVHRztFQUNHLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FKOEdOOztBQXhKQTtFQUNHLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUEySkg7O0FBeEpBO0VBQ0csaUNBQUE7RUFDQSxzQkViYTtFRmNiLGFBQUE7QUEySkg7O0FBeEpBO0VBQ0csYUFBQTtBQTJKSDs7QUF4SkE7RUFDRyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBMkpIOztBQXhKQTtFQUNHLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUEySkg7QUF6Skc7RUFDRyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBMEpOO0FBdkpHO0VBQ0csZ0JBQUE7QUF5Sk47QUF0Skc7RUNqREEsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFdEOENnQjtFQzdDaEIsc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUQyQ0csZ0JBQUE7RUFFQSxxRUFBQTtBQStKTjtBQTdKTTtFQUNHLHNCQUFBO0VBQ0EsV0FBQTtBQStKVDs7QUExSkE7RUFDRyw2QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUE2Skg7QUEzSkc7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtBQTZKTjtBQTNKTTtFQUNHLGFFOUVTO0VGK0VULHNDQUFBO0FBNkpUO0FBekpHO0VBQ0csYUFBQTtBQTJKTjs7QUF2SkE7RUFDRztJQUNHLDJCQUFBO0VBMEpKO0VBeEpDO0lBQ0csMEJBQUE7RUEwSko7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xcclxcbkBpbXBvcnQgJ21peGlucyc7XFxyXFxuXFxyXFxuLmNoZWNrbWFyayB7XFxyXFxuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pY29ucy90b21hdG8ucG5nJyk7XFxyXFxuICAgd2lkdGg6IDMycHg7XFxyXFxuICAgaGVpZ2h0OiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgIHRvcDogNTAlO1xcclxcbiAgIGxlZnQ6IDUwJTtcXHJcXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICBwYWRkaW5nOiAyMHB4O1xcclxcblxcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICZfX29wdGlvbnMtbGFiZWwge1xcclxcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgfVxcclxcblxcclxcbiAgICZfX29wdGlvbnMge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgJl9fb3B0aW9uLWNvbnRhaW5lciB7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIG1pbi13aWR0aDogMTIwcHg7XFxyXFxuICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgJl9fcmFkaW8ge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBoZWlnaHQ6IDA7XFxyXFxuICAgICAgd2lkdGg6IDA7XFxyXFxuXFxyXFxuICAgICAgJjpjaGVja2VkICsgLmZvcm1fX2NoZWNrbWFyayB7XFxyXFxuICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcclxcbiAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pY29ucy90b21hdG8tY29sb3IucG5nJyk7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAmX19jaGVja21hcmsge1xcclxcbiAgICAgIGhlaWdodDogMzJweDtcXHJcXG4gICAgICB3aWR0aDogMzJweDtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXHJcXG5cXHJcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaWNvbnMvdG9tYXRvLnBuZycpO1xcclxcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgfVxcclxcblxcclxcbiAgICZfX2J1dHRvbiB7XFxyXFxuICAgICAgQGluY2x1ZGUgYnRuKCRwcmltYXJ5LWNvbG9yKTtcXHJcXG5cXHJcXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJjpkaXNhYmxlZCB7XFxyXFxuICAgICAgICAgb3BhY2l0eTogMC41O1xcclxcbiAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG59XFxyXFxuXCIsXCIuY2hlY2ttYXJrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaWNvbnMvdG9tYXRvLnBuZ1xcXCIpO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbi5mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9ybV9fb3B0aW9ucy1sYWJlbCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmZvcm1fX29wdGlvbnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5mb3JtX19vcHRpb24tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG4uZm9ybV9fcmFkaW8ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbn1cXG4uZm9ybV9fcmFkaW86Y2hlY2tlZCArIC5mb3JtX19jaGVja21hcmsge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ljb25zL3RvbWF0by1jb2xvci5wbmdcXFwiKTtcXG59XFxuLmZvcm1fX2NoZWNrbWFyayB7XFxuICBoZWlnaHQ6IDMycHg7XFxuICB3aWR0aDogMzJweDtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ljb25zL3RvbWF0by5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG59XFxuLmZvcm1fX2J1dHRvbiB7XFxuICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjZGRkO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuLmZvcm1fX2J1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgY29sb3I6ICM5NzE1MTU7XFxufVxcbi5mb3JtX19idXR0b246ZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLmxlZnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk3MTUxNTtcXG4gIGNvbG9yOiAjZGRkO1xcbn1cXG4ubGVmdF9faGVhZGVyIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDY0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4ubGVmdF9fcmVzZXQtYnV0dG9uIHtcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICNkZGQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDUwcHg7XFxuICByaWdodDogNTBweDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuLmxlZnRfX3Jlc2V0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgY29sb3I6ICM5NzE1MTU7XFxufVxcblxcbi5yaWdodCB7XFxuICBjb2xvcjogIzk3MTUxNTtcXG59XFxuLnJpZ2h0X193cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5yaWdodF9fY291bnRlciB7XFxuICBmb250LXNpemU6IDE4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5yaWdodF9fY291bnRlciAjbWludXRlcyB7XFxuICBmb250LXNpemU6IDIyMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5NzE1MTU7XFxufVxcbi5yaWdodF9fYnV0dG9uIHtcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICM5NzE1MTU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjOTcxNTE1O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbi5yaWdodF9fYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NzE1MTU7XFxuICBjb2xvcjogI2RkZDtcXG59XFxuLnJpZ2h0X19idXR0b246ZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnJpZ2h0X19zdHJlYWsge1xcbiAgY29sb3I6ICMwMDA7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5yaWdodC1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOTMpO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnJpZ2h0LW1vZGFsX193cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnJpZ2h0LW1vZGFsX19jb250aW51ZSB7XFxuICBmb250LXNpemU6IDEwMHB4O1xcbn1cXG4ucmlnaHQtbW9kYWxfX2J1dHRvbiB7XFxuICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuLnJpZ2h0LW1vZGFsX19idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uY2xvY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMTAwcHg7XFxufVxcbi5jbG9ja19faWNvbiB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGZpbGw6ICNmZmY7XFxuICB0cmFuc2l0aW9uOiBmaWxsIDAuMXMgZWFzZS1pbjtcXG59XFxuLmNsb2NrX19pY29uLS1hbGFybSB7XFxuICBmaWxsOiAjOTcxNTE1O1xcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjFzIGVhc2UtaW4gaW5maW5pdGU7XFxufVxcbi5jbG9ja19faWNvbjpob3ZlciB7XFxuICBmaWxsOiAjNDFiODgzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gIDI1JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xcbiAgfVxcbn1cIixcIkBtaXhpbiBidG4oJGNvbG9yKSB7XFxyXFxuICAgbWluLXdpZHRoOiAxMjBweDtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgY29sb3I6ICRjb2xvcjtcXHJcXG4gICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3I7XFxyXFxuICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblwiLFwiJHByaW1hcnktY29sb3I6ICNkZGQ7XFxyXFxuJHNlY29uZGFyeS1jb2xvcjogIzk3MTUxNTtcXHJcXG5cIixcIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XFxyXFxuQGltcG9ydCAnbWl4aW5zJztcXHJcXG5cXHJcXG4ubGVmdCB7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICBjb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuXFxyXFxuICAgJl9faGVhZGVyIHtcXHJcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogNjRweDtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgcGFkZGluZzogMjBweDtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgJl9fcmVzZXQtYnV0dG9uIHtcXHJcXG4gICAgICBAaW5jbHVkZSBidG4oJHByaW1hcnktY29sb3IpO1xcclxcblxcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBib3R0b206IDUwcHg7XFxyXFxuICAgICAgcmlnaHQ6IDUwcHg7XFxyXFxuXFxyXFxuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCAndmFyaWFibGVzJztcXHJcXG5AaW1wb3J0ICdtaXhpbnMnO1xcclxcblxcclxcbi5yaWdodCB7XFxyXFxuICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuXFxyXFxuICAgJl9fd3JhcHBlciB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgJl9fY291bnRlciB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxODBweDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAjbWludXRlcyB7XFxyXFxuICAgICAgICAgZm9udC1zaXplOiAyMjBweDtcXHJcXG4gICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcblxcclxcbiAgICZfX2J1dHRvbiB7XFxyXFxuICAgICAgQGluY2x1ZGUgYnRuKCRzZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXHJcXG5cXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJjpkaXNhYmxlZCB7XFxyXFxuICAgICAgICAgb3BhY2l0eTogMC4zO1xcclxcbiAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAmX19zdHJlYWsge1xcclxcbiAgICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz91cmw9ZmFsc2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImludGVyZmFjZSBJQ29uZmlnIHtcclxuICAgc2Vzc2lvblNlY29uZHM6IG51bWJlcjtcclxuICAgc2hvcnRCcmVha1NlY29uZHM6IG51bWJlcjtcclxuICAgbG9uZ0JyZWFrU2Vjb25kczogbnVtYmVyO1xyXG4gICBsb25nQnJlYWtTdGVwOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbW9kb3JybyB7XHJcbiAgIHByaXZhdGUgY29uZmlnOiBJQ29uZmlnO1xyXG4gICBwdWJsaWMgY3VycmVudFNlY29uZHM6IG51bWJlcjtcclxuICAgcHVibGljIHNlc3Npb25Db3VudGVyOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBpc0JyYWtlOiBib29sZWFuO1xyXG4gICBwdWJsaWMgbWludXRlczogbnVtYmVyO1xyXG4gICBwdWJsaWMgc2Vjb25kczogbnVtYmVyO1xyXG5cclxuICAgY29uc3RydWN0b3Ioc2Vzc2lvblNlYzogbnVtYmVyLCBzQlNlYzogbnVtYmVyLCBsQlNlYzogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuY29uZmlnID0ge1xyXG4gICAgICAgICBzZXNzaW9uU2Vjb25kczogc2Vzc2lvblNlYyxcclxuICAgICAgICAgc2hvcnRCcmVha1NlY29uZHM6IHNCU2VjLFxyXG4gICAgICAgICBsb25nQnJlYWtTZWNvbmRzOiBsQlNlYyxcclxuICAgICAgICAgbG9uZ0JyZWFrU3RlcDogMyxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5zZXNzaW9uQ291bnRlciA9IDE7XHJcbiAgICAgIHRoaXMuaXNCcmFrZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmN1cnJlbnRTZWNvbmRzID0gc2Vzc2lvblNlYztcclxuICAgfVxyXG5cclxuICAgc2V0Q3VycmVudFNlY29uZHMoKSB7XHJcbiAgICAgIHRoaXMuaXNCcmFrZSA9ICF0aGlzLmlzQnJha2U7XHJcbiAgICAgIGlmICh0aGlzLmlzQnJha2UpIHtcclxuICAgICAgICAgaWYgKHRoaXMuc2Vzc2lvbkNvdW50ZXIgJSB0aGlzLmNvbmZpZy5sb25nQnJlYWtTdGVwID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNlY29uZHMgPSB0aGlzLmNvbmZpZy5sb25nQnJlYWtTZWNvbmRzO1xyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTZWNvbmRzID0gdGhpcy5jb25maWcuc2hvcnRCcmVha1NlY29uZHM7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgdGhpcy5zZXNzaW9uQ291bnRlcisrO1xyXG4gICAgICAgICB0aGlzLmN1cnJlbnRTZWNvbmRzID0gdGhpcy5jb25maWcuc2Vzc2lvblNlY29uZHM7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZGVjcmVtZW50U2Vjb25kcygpIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFNlY29uZHMgPT09IDApIHtcclxuICAgICAgICAgdGhpcy5zZXRDdXJyZW50U2Vjb25kcygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICB0aGlzLmN1cnJlbnRTZWNvbmRzLS07XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnO1xyXG5pbXBvcnQgUG9tb2RvcnJvIGZyb20gJy4vUG9tb2RvcnJvJztcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgIHBvbW9kb3JybzogUG9tb2RvcnJvO1xyXG4gICB1aToge1xyXG4gICAgICBmb3JtOiBIVE1MRm9ybUVsZW1lbnQ7XHJcbiAgICAgIHN0YXJ0QnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgcGF1c2VCdG46IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICByZXNldEJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgIGNvbnRpbnVlQnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgbWludXRlczogSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgICBzZWNvbmRzOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICAgIG1vZGFsOiBIVE1MRWxlbWVudDtcclxuICAgICAgYWxhcm06IEhUTUxBdWRpb0VsZW1lbnQ7XHJcbiAgICAgIGFsYXJtQnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgc3RyZWFrOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgIH07XHJcbiAgIGludGVydmFsOiBudW1iZXI7XHJcbiAgIGlzUG9tb2RvcnJvSW5Qcm9ncmVzczogYm9vbGVhbjtcclxuICAgaXNQYXVzZWQ6IGJvb2xlYW47XHJcblxyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy51aSA9IHtcclxuICAgICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpISxcclxuICAgICAgICAgc3RhcnRCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydEJ0bicpISxcclxuICAgICAgICAgcGF1c2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXVzZUJ0bicpISxcclxuICAgICAgICAgcmVzZXRCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldEJ0bicpISxcclxuICAgICAgICAgY29udGludWVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250aW51ZUJ0bicpISxcclxuICAgICAgICAgbWludXRlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pbnV0ZXMnKSEsXHJcbiAgICAgICAgIHNlY29uZHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWNvbmRzJykhLFxyXG4gICAgICAgICBtb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJykhLFxyXG4gICAgICAgICBhbGFybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsYXJtJykhLFxyXG4gICAgICAgICBhbGFybUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsYXJtQnRuJykhLFxyXG4gICAgICAgICBzdHJlYWs6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdHJlYWsnKSEsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLmlzUG9tb2RvcnJvSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XHJcbiAgIH1cclxuXHJcbiAgIGluaXQoKSB7XHJcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgfVxyXG5cclxuICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIHRoaXMudWkuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gdGhpcy5oYW5kbGVTdGFydENsaWNrKGUpKTtcclxuICAgICAgdGhpcy51aS5wYXVzZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlUGF1c2VDbGljaygpKTtcclxuICAgICAgdGhpcy51aS5yZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlUmVzZXRDbGljaygpKTtcclxuICAgICAgdGhpcy51aS5jb250aW51ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlQ29udGludWVDbGljaygpKTtcclxuICAgICAgdGhpcy51aS5hbGFybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc3RvcEFsYXJtKCkpO1xyXG4gICB9XHJcblxyXG4gICB0b2dnbGVNb2RhbCgpIHtcclxuICAgICAgdGhpcy5wYXVzZVVucGF1c2VJbnRlcnZhbCgpO1xyXG4gICAgICB0aGlzLnVpLm1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgfVxyXG5cclxuICAgc2hvd1RpbWVyKCkge1xyXG4gICAgICBjb25zdCBtaW4gPVxyXG4gICAgICAgICB0aGlzLnBvbW9kb3Jyby5jdXJyZW50U2Vjb25kcyA+IDU5ID8gTWF0aC5mbG9vcih0aGlzLnBvbW9kb3Jyby5jdXJyZW50U2Vjb25kcyAvIDYwKSA6IDA7XHJcblxyXG4gICAgICBjb25zdCBzZWMgPSBtaW4gPT09IDAgPyB0aGlzLnBvbW9kb3Jyby5jdXJyZW50U2Vjb25kcyA6IHRoaXMucG9tb2RvcnJvLmN1cnJlbnRTZWNvbmRzICUgNjA7XHJcblxyXG4gICAgICB0aGlzLnVpLm1pbnV0ZXMuaW5uZXJIVE1MID0gbWluID4gOSA/IG1pbi50b1N0cmluZygpIDogYDAke21pbn1gO1xyXG4gICAgICB0aGlzLnVpLnNlY29uZHMuaW5uZXJIVE1MID0gc2VjID4gOSA/IHNlYy50b1N0cmluZygpIDogYDAke3NlY31gO1xyXG4gICB9XHJcblxyXG4gICBzdGFydEludGVydmFsKCkge1xyXG4gICAgICB0aGlzLnNob3dUaW1lcigpO1xyXG4gICAgICB0aGlzLnVpLnN0cmVhay5pbm5lckhUTUwgPSB0aGlzLnBvbW9kb3Jyby5zZXNzaW9uQ291bnRlci50b1N0cmluZygpO1xyXG4gICAgICB0aGlzLmludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgaWYgKHRoaXMucG9tb2RvcnJvLmN1cnJlbnRTZWNvbmRzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudWkuYWxhcm0ucGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLnVpLmFsYXJtQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVNb2RhbCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMucG9tb2RvcnJvLmRlY3JlbWVudFNlY29uZHMoKTtcclxuICAgICAgICAgdGhpcy5zaG93VGltZXIoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgIH1cclxuXHJcbiAgIHBhdXNlVW5wYXVzZUludGVydmFsKCkge1xyXG4gICAgICB0aGlzLmlzUGF1c2VkID0gIXRoaXMuaXNQYXVzZWQ7XHJcblxyXG4gICAgICBpZiAodGhpcy5pc1BhdXNlZCkge1xyXG4gICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBoYW5kbGVTdGFydENsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3Qgc2Vzc2lvblRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGltZVwiXTpjaGVja2VkJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgY29uc3Qgc2hvcnRCVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICdpbnB1dFtuYW1lPVwic2hvcnQtYnJlYWtcIl06Y2hlY2tlZCcsXHJcbiAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgY29uc3QgbG9uZ0JUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgJ2lucHV0W25hbWU9XCJsb25nLWJyZWFrXCJdOmNoZWNrZWQnLFxyXG4gICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIHRoaXMucG9tb2RvcnJvID0gbmV3IFBvbW9kb3JybyhcclxuICAgICAgICAgcGFyc2VJbnQoc2Vzc2lvblRpbWUudmFsdWUpLFxyXG4gICAgICAgICBwYXJzZUludChzaG9ydEJUaW1lLnZhbHVlKSxcclxuICAgICAgICAgcGFyc2VJbnQobG9uZ0JUaW1lLnZhbHVlKSxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zd2l0Y2hEaXNhYmxlZEJ1dHRvbnMoKTtcclxuICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XHJcbiAgIH1cclxuXHJcbiAgIGhhbmRsZVBhdXNlQ2xpY2soKSB7XHJcbiAgICAgIHRoaXMucGF1c2VVbnBhdXNlSW50ZXJ2YWwoKTtcclxuICAgICAgdGhpcy51aS5wYXVzZUJ0bi5pbm5lckhUTUwgPSB0aGlzLmlzUGF1c2VkID8gJ1VOUEFVU0UnIDogJ1BBVVNFJztcclxuICAgfVxyXG5cclxuICAgaGFuZGxlUmVzZXRDbGljaygpIHtcclxuICAgICAgdGhpcy5zd2l0Y2hEaXNhYmxlZEJ1dHRvbnMoKTtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgICAgdGhpcy51aS5tb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy51aS5wYXVzZUJ0bi5pbm5lckhUTUwgPSB0aGlzLmlzUGF1c2VkID8gJ1VOUEFVU0UnIDogJ1BBVVNFJztcclxuICAgICAgdGhpcy51aS5taW51dGVzLmlubmVySFRNTCA9ICcwMCc7XHJcbiAgICAgIHRoaXMudWkuc2Vjb25kcy5pbm5lckhUTUwgPSAnMDAnO1xyXG4gICAgICB0aGlzLnVpLnN0cmVhay5pbm5lckhUTUwgPSAnMCc7XHJcbiAgICAgIHRoaXMudWkuYWxhcm0ucGF1c2UoKTtcclxuICAgfVxyXG5cclxuICAgaGFuZGxlQ29udGludWVDbGljaygpIHtcclxuICAgICAgLy8gdGhpcy5wYXVzZVVucGF1c2VJbnRlcnZhbCgpO1xyXG4gICAgICB0aGlzLnRvZ2dsZU1vZGFsKCk7XHJcbiAgICAgIHRoaXMuc3RvcEFsYXJtKCk7XHJcbiAgIH1cclxuXHJcbiAgIHN3aXRjaERpc2FibGVkQnV0dG9ucygpIHtcclxuICAgICAgdGhpcy5pc1BvbW9kb3Jyb0luUHJvZ3Jlc3MgPSAhdGhpcy5pc1BvbW9kb3Jyb0luUHJvZ3Jlc3M7XHJcblxyXG4gICAgICB0aGlzLnVpLnN0YXJ0QnRuLmRpc2FibGVkID0gdGhpcy5pc1BvbW9kb3Jyb0luUHJvZ3Jlc3M7XHJcbiAgICAgIHRoaXMudWkucGF1c2VCdG4uZGlzYWJsZWQgPSAhdGhpcy5pc1BvbW9kb3Jyb0luUHJvZ3Jlc3M7XHJcbiAgICAgIHRoaXMudWkucmVzZXRCdG4uZGlzYWJsZWQgPSAhdGhpcy5pc1BvbW9kb3Jyb0luUHJvZ3Jlc3M7XHJcbiAgIH1cclxuXHJcbiAgIHN0b3BBbGFybSgpIHtcclxuICAgICAgdGhpcy51aS5hbGFybS5wYXVzZSgpO1xyXG4gICAgICB0aGlzLnVpLmFsYXJtQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgfVxyXG59XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcbmFwcC5pbml0KCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=