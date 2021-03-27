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
___CSS_LOADER_EXPORT___.push([module.id, ".checkmark {\n  background-image: url(\"../icons/tomato.png\");\n  width: 32px;\n  height: 32px;\n}\n\n.form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.form__options-label {\n  align-self: flex-start;\n  font-weight: 700;\n  font-size: 20px;\n}\n.form__options {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.form__option-container {\n  position: relative;\n  min-width: 120px;\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: flex-end;\n}\n.form__radio {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.form__radio:checked + .form__checkmark {\n  background-image: url(\"./icons/tomato-color.png\");\n}\n.form__checkmark {\n  height: 32px;\n  width: 32px;\n  margin-right: 8px;\n  background-image: url(\"./icons/tomato.png\");\n  background-size: cover;\n}\n.form__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #ddd;\n  border: 2px solid #ddd;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  margin-top: 30px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.form__button:hover {\n  background-color: #ddd;\n  color: #971515;\n}\n.form__button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.left {\n  background-color: #971515;\n  color: #ddd;\n}\n.left__header {\n  text-transform: uppercase;\n  font-size: 64px;\n  text-align: center;\n  padding: 20px;\n}\n.left__reset-button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #ddd;\n  border: 2px solid #ddd;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.left__reset-button:hover {\n  background-color: #ddd;\n  color: #971515;\n}\n\n.right {\n  color: #971515;\n}\n.right__wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.right__counter {\n  font-size: 180px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.right__counter #minutes {\n  font-size: 220px;\n  border-bottom: 1px solid #971515;\n}\n.right__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #971515;\n  border: 2px solid #971515;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.right__button:hover {\n  background-color: #971515;\n  color: #ddd;\n}\n.right__button:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #ddd;\n  display: flex;\n}\n\n.hide {\n  display: none;\n}\n\n.container {\n  position: relative;\n  width: 50vw;\n  height: 100vh;\n}\n\n.right-modal {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.93);\n  top: 0;\n  right: 0;\n  color: #fff;\n}\n.right-modal__wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.right-modal__continue {\n  font-size: 100px;\n}\n.right-modal__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #fff;\n  border: 2px solid #fff;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  margin-top: 30px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.right-modal__button:hover {\n  background-color: #fff;\n  color: #000;\n}\n\n.clock {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  margin-top: 50px;\n  position: absolute;\n  bottom: -100px;\n}\n.clock__icon {\n  width: 50px;\n  height: 50px;\n  fill: #fff;\n  transition: fill 0.1s ease-in;\n}\n.clock__icon--alarm {\n  fill: #971515;\n  animation: shake 0.1s ease-in infinite;\n}\n.clock__icon:hover {\n  fill: #41b883;\n}\n\n@keyframes shake {\n  25% {\n    transform: translateX(-2px);\n  }\n  75% {\n    transform: translateX(2px);\n  }\n}", "",{"version":3,"sources":["webpack://./_form.scss","webpack://./main.scss","webpack://./_mixins.scss","webpack://./_variables.scss","webpack://./_left.scss","webpack://./_right.scss"],"names":[],"mappings":"AAGA;EACG,4CAAA;EACA,WAAA;EACA,YAAA;ACFH;;ADKA;EACG,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,aAAA;EAGA,aAAA;EACA,sBAAA;EACA,mBAAA;ACJH;ADMG;EACG,sBAAA;EACA,gBAAA;EACA,eAAA;ACJN;ADOG;EACG,WAAA;EACA,aAAA;EACA,2BAAA;EACA,aAAA;EACA,mBAAA;ACLN;ADQG;EACG,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,aAAA;EACA,qBAAA;ACNN;ADSG;EACG,kBAAA;EACA,UAAA;EACA,eAAA;EACA,SAAA;EACA,QAAA;ACPN;ADSM;EACG,iDAAA;ACPT;ADWG;EACG,YAAA;EACA,WAAA;EACA,iBAAA;EAEA,2CAAA;EACA,sBAAA;ACVN;ADaG;EEhEA,gBAAA;EACA,6BAAA;EACA,oBAAA;EACA,eAAA;EACA,WCLa;EDMb,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,aAAA;EF0DG,gBAAA;EACA,qEAAA;ACHN;ADIM;EACG,sBGvEO;EHwEP,cGvES;AFqElB;ADKM;EACG,YAAA;EACA,mBAAA;ACHT;;AGvEA;EACG,yBDHe;ECIf,WDLa;AF+EhB;AGxEG;EACG,yBAAA;EACA,eAAA;EACA,kBAAA;EACA,aAAA;AH0EN;AGvEG;EFbA,gBAAA;EACA,6BAAA;EACA,oBAAA;EACA,eAAA;EACA,WCLa;EDMb,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,aAAA;EEOG,kBAAA;EACA,YAAA;EACA,WAAA;EAEA,qEAAA;AHgFN;AG/EM;EACG,sBDvBO;ECwBP,cDvBS;AFwGlB;;AItGA;EACG,cFHe;AF4GlB;AIvGG;EACG,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AJyGN;AItGG;EACG,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AJwGN;AItGM;EACG,gBAAA;EACA,gCAAA;AJwGT;AIpGG;EH5BA,gBAAA;EACA,6BAAA;EACA,oBAAA;EACA,eAAA;EACA,cCJe;EDKf,yBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,aAAA;EGqBG,qEAAA;AJ+GN;AI7GM;EACG,yBFjCS;EEkCT,WFnCO;AFkJhB;AI5GM;EACG,YAAA;EACA,mBAAA;AJ8GT;;AAjJA;EACG,SAAA;EACA,UAAA;EACA,sBAAA;AAoJH;;AAjJA;EACG,iCAAA;EACA,sBEba;EFcb,aAAA;AAoJH;;AAjJA;EACG,aAAA;AAoJH;;AAjJA;EACG,kBAAA;EACA,WAAA;EACA,aAAA;AAoJH;;AAjJA;EACG,kBAAA;EACA,qCAAA;EACA,MAAA;EACA,QAAA;EACA,WAAA;AAoJH;AAlJG;EACG,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AAmJN;AAhJG;EACG,gBAAA;AAkJN;AA/IG;ECjDA,gBAAA;EACA,6BAAA;EACA,oBAAA;EACA,eAAA;EACA,WD8CgB;EC7ChB,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,aAAA;ED2CG,gBAAA;EAEA,qEAAA;AAwJN;AAtJM;EACG,sBAAA;EACA,WAAA;AAwJT;;AAnJA;EACG,6BAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,cAAA;AAsJH;AApJG;EACG,WAAA;EACA,YAAA;EACA,UAAA;EACA,6BAAA;AAsJN;AApJM;EACG,aE9ES;EF+ET,sCAAA;AAsJT;AAlJG;EACG,aAAA;AAoJN;;AAhJA;EACG;IACG,2BAAA;EAmJJ;EAjJC;IACG,0BAAA;EAmJJ;AACF","sourcesContent":["@import 'variables';\r\n@import 'mixins';\r\n\r\n.checkmark {\r\n   background-image: url('../icons/tomato.png');\r\n   width: 32px;\r\n   height: 32px;\r\n}\r\n\r\n.form {\r\n   position: absolute;\r\n   top: 50%;\r\n   left: 50%;\r\n   transform: translate(-50%, -50%);\r\n   padding: 20px;\r\n   // border: 1px solid $primary-color;\r\n\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: center;\r\n\r\n   &__options-label {\r\n      align-self: flex-start;\r\n      font-weight: 700;\r\n      font-size: 20px;\r\n   }\r\n\r\n   &__options {\r\n      width: 100%;\r\n      display: flex;\r\n      justify-content: flex-start;\r\n      padding: 10px;\r\n      margin-bottom: 10px;\r\n   }\r\n\r\n   &__option-container {\r\n      position: relative;\r\n      min-width: 120px;\r\n      font-size: 18px;\r\n      cursor: pointer;\r\n      display: flex;\r\n      align-items: flex-end;\r\n   }\r\n\r\n   &__radio {\r\n      position: absolute;\r\n      opacity: 0;\r\n      cursor: pointer;\r\n      height: 0;\r\n      width: 0;\r\n\r\n      &:checked + .form__checkmark {\r\n         background-image: url('icons/tomato-color.png');\r\n      }\r\n   }\r\n\r\n   &__checkmark {\r\n      height: 32px;\r\n      width: 32px;\r\n      margin-right: 8px;\r\n\r\n      background-image: url('icons/tomato.png');\r\n      background-size: cover;\r\n   }\r\n\r\n   &__button {\r\n      @include btn($primary-color);\r\n\r\n      margin-top: 30px;\r\n      transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\r\n      &:hover {\r\n         background-color: $primary-color;\r\n         color: $secondary-color;\r\n      }\r\n\r\n      &:disabled {\r\n         opacity: 0.5;\r\n         cursor: not-allowed;\r\n      }\r\n   }\r\n}\r\n",".checkmark {\n  background-image: url(\"../icons/tomato.png\");\n  width: 32px;\n  height: 32px;\n}\n\n.form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.form__options-label {\n  align-self: flex-start;\n  font-weight: 700;\n  font-size: 20px;\n}\n.form__options {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.form__option-container {\n  position: relative;\n  min-width: 120px;\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: flex-end;\n}\n.form__radio {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.form__radio:checked + .form__checkmark {\n  background-image: url(\"icons/tomato-color.png\");\n}\n.form__checkmark {\n  height: 32px;\n  width: 32px;\n  margin-right: 8px;\n  background-image: url(\"icons/tomato.png\");\n  background-size: cover;\n}\n.form__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #ddd;\n  border: 2px solid #ddd;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  margin-top: 30px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.form__button:hover {\n  background-color: #ddd;\n  color: #971515;\n}\n.form__button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.left {\n  background-color: #971515;\n  color: #ddd;\n}\n.left__header {\n  text-transform: uppercase;\n  font-size: 64px;\n  text-align: center;\n  padding: 20px;\n}\n.left__reset-button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #ddd;\n  border: 2px solid #ddd;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.left__reset-button:hover {\n  background-color: #ddd;\n  color: #971515;\n}\n\n.right {\n  color: #971515;\n}\n.right__wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.right__counter {\n  font-size: 180px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.right__counter #minutes {\n  font-size: 220px;\n  border-bottom: 1px solid #971515;\n}\n.right__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #971515;\n  border: 2px solid #971515;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.right__button:hover {\n  background-color: #971515;\n  color: #ddd;\n}\n.right__button:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #ddd;\n  display: flex;\n}\n\n.hide {\n  display: none;\n}\n\n.container {\n  position: relative;\n  width: 50vw;\n  height: 100vh;\n}\n\n.right-modal {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.93);\n  top: 0;\n  right: 0;\n  color: #fff;\n}\n.right-modal__wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.right-modal__continue {\n  font-size: 100px;\n}\n.right-modal__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #fff;\n  border: 2px solid #fff;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  margin-top: 30px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.right-modal__button:hover {\n  background-color: #fff;\n  color: #000;\n}\n\n.clock {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  margin-top: 50px;\n  position: absolute;\n  bottom: -100px;\n}\n.clock__icon {\n  width: 50px;\n  height: 50px;\n  fill: #fff;\n  transition: fill 0.1s ease-in;\n}\n.clock__icon--alarm {\n  fill: #971515;\n  animation: shake 0.1s ease-in infinite;\n}\n.clock__icon:hover {\n  fill: #41b883;\n}\n\n@keyframes shake {\n  25% {\n    transform: translateX(-2px);\n  }\n  75% {\n    transform: translateX(2px);\n  }\n}","@mixin btn($color) {\r\n   min-width: 120px;\r\n   background-color: transparent;\r\n   font-family: inherit;\r\n   font-size: 16px;\r\n   color: $color;\r\n   border: 2px solid $color;\r\n   border-radius: 50px;\r\n   padding: 10px 20px;\r\n   cursor: pointer;\r\n   outline: none;\r\n}\r\n","$primary-color: #ddd;\r\n$secondary-color: #971515;\r\n","@import 'variables';\r\n@import 'mixins';\r\n\r\n.left {\r\n   background-color: $secondary-color;\r\n   color: $primary-color;\r\n\r\n   &__header {\r\n      text-transform: uppercase;\r\n      font-size: 64px;\r\n      text-align: center;\r\n      padding: 20px;\r\n   }\r\n\r\n   &__reset-button {\r\n      @include btn($primary-color);\r\n\r\n      position: absolute;\r\n      bottom: 50px;\r\n      right: 50px;\r\n\r\n      transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\r\n      &:hover {\r\n         background-color: $primary-color;\r\n         color: $secondary-color;\r\n      }\r\n   }\r\n}\r\n","@import 'variables';\r\n@import 'mixins';\r\n\r\n.right {\r\n   color: $secondary-color;\r\n\r\n   &__wrapper {\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n   }\r\n\r\n   &__counter {\r\n      font-size: 180px;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n\r\n      #minutes {\r\n         font-size: 220px;\r\n         border-bottom: 1px solid $secondary-color;\r\n      }\r\n   }\r\n\r\n   &__button {\r\n      @include btn($secondary-color);\r\n      transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\r\n\r\n      &:hover {\r\n         background-color: $secondary-color;\r\n         color: $primary-color;\r\n      }\r\n\r\n      &:disabled {\r\n         opacity: 0.3;\r\n         cursor: not-allowed;\r\n      }\r\n   }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb21vZG9ycm8tYXBwLy4vc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL3BvbW9kb3Jyby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvbW9kb3Jyby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9wb21vZG9ycm8tYXBwLy4vc3JjL3Njc3MvbWFpbi5zY3NzP2ZkNzYiLCJ3ZWJwYWNrOi8vcG9tb2RvcnJvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb21vZG9ycm8tYXBwLy4vc3JjL1BvbW9kb3Jyby50cyIsIndlYnBhY2s6Ly9wb21vZG9ycm8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvbW9kb3Jyby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9tb2RvcnJvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9tb2RvcnJvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvbW9kb3Jyby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb21vZG9ycm8tYXBwLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxzREFBc0QsbURBQW1ELGdCQUFnQixp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QUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxRQUFRLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSw2Q0FBNkMscUJBQXFCLG9CQUFvQixvREFBb0QsbUJBQW1CLG9CQUFvQixLQUFL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QUFELENBQUM7QUFFRCxJQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNoZWNrbWFyayB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ljb25zL3RvbWF0by5wbmdcXFwiKTtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG4uZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvcm1fX29wdGlvbnMtbGFiZWwge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5mb3JtX19vcHRpb25zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uZm9ybV9fb3B0aW9uLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuLmZvcm1fX3JhZGlvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG59XFxuLmZvcm1fX3JhZGlvOmNoZWNrZWQgKyAuZm9ybV9fY2hlY2ttYXJrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pY29ucy90b21hdG8tY29sb3IucG5nXFxcIik7XFxufVxcbi5mb3JtX19jaGVja21hcmsge1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pY29ucy90b21hdG8ucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uZm9ybV9fYnV0dG9uIHtcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICNkZGQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4uZm9ybV9fYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICBjb2xvcjogIzk3MTUxNTtcXG59XFxuLmZvcm1fX2J1dHRvbjpkaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4ubGVmdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTcxNTE1O1xcbiAgY29sb3I6ICNkZGQ7XFxufVxcbi5sZWZ0X19oZWFkZXIge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogNjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5sZWZ0X19yZXNldC1idXR0b24ge1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogI2RkZDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNTBweDtcXG4gIHJpZ2h0OiA1MHB4O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4ubGVmdF9fcmVzZXQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICBjb2xvcjogIzk3MTUxNTtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gIGNvbG9yOiAjOTcxNTE1O1xcbn1cXG4ucmlnaHRfX3dyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnJpZ2h0X19jb3VudGVyIHtcXG4gIGZvbnQtc2l6ZTogMTgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnJpZ2h0X19jb3VudGVyICNtaW51dGVzIHtcXG4gIGZvbnQtc2l6ZTogMjIwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk3MTUxNTtcXG59XFxuLnJpZ2h0X19idXR0b24ge1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogIzk3MTUxNTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5NzE1MTU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuLnJpZ2h0X19idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk3MTUxNTtcXG4gIGNvbG9yOiAjZGRkO1xcbn1cXG4ucmlnaHRfX2J1dHRvbjpkaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjM7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLnJpZ2h0LW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45Myk7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ucmlnaHQtbW9kYWxfX3dyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ucmlnaHQtbW9kYWxfX2NvbnRpbnVlIHtcXG4gIGZvbnQtc2l6ZTogMTAwcHg7XFxufVxcbi5yaWdodC1tb2RhbF9fYnV0dG9uIHtcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4ucmlnaHQtbW9kYWxfX2J1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5jbG9jayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0xMDBweDtcXG59XFxuLmNsb2NrX19pY29uIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZmlsbDogI2ZmZjtcXG4gIHRyYW5zaXRpb246IGZpbGwgMC4xcyBlYXNlLWluO1xcbn1cXG4uY2xvY2tfX2ljb24tLWFsYXJtIHtcXG4gIGZpbGw6ICM5NzE1MTU7XFxuICBhbmltYXRpb246IHNoYWtlIDAuMXMgZWFzZS1pbiBpbmZpbml0ZTtcXG59XFxuLmNsb2NrX19pY29uOmhvdmVyIHtcXG4gIGZpbGw6ICM0MWI4ODM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgMjUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL19mb3JtLnNjc3NcIixcIndlYnBhY2s6Ly8uL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL19sZWZ0LnNjc3NcIixcIndlYnBhY2s6Ly8uL19yaWdodC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0csNENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZIOztBREtBO0VBQ0csa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUdBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDSkg7QURNRztFQUNHLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSk47QURPRztFQUNHLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNMTjtBRFFHO0VBQ0csa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FDTk47QURTRztFQUNHLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ1BOO0FEU007RUFDRyxpREFBQTtBQ1BUO0FEV0c7RUFDRyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBRUEsMkNBQUE7RUFDQSxzQkFBQTtBQ1ZOO0FEYUc7RUVoRUEsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFdDTGE7RURNYixzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFRjBERyxnQkFBQTtFQUNBLHFFQUFBO0FDSE47QURJTTtFQUNHLHNCR3ZFTztFSHdFUCxjR3ZFUztBRnFFbEI7QURLTTtFQUNHLFlBQUE7RUFDQSxtQkFBQTtBQ0hUOztBR3ZFQTtFQUNHLHlCREhlO0VDSWYsV0RMYTtBRitFaEI7QUd4RUc7RUFDRyx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUgwRU47QUd2RUc7RUZiQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0NMYTtFRE1iLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VFT0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLHFFQUFBO0FIZ0ZOO0FHL0VNO0VBQ0csc0JEdkJPO0VDd0JQLGNEdkJTO0FGd0dsQjs7QUl0R0E7RUFDRyxjRkhlO0FGNEdsQjtBSXZHRztFQUNHLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FKeUdOO0FJdEdHO0VBQ0csZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FKd0dOO0FJdEdNO0VBQ0csZ0JBQUE7RUFDQSxnQ0FBQTtBSndHVDtBSXBHRztFSDVCQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0NKZTtFREtmLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VHcUJHLHFFQUFBO0FKK0dOO0FJN0dNO0VBQ0cseUJGakNTO0VFa0NULFdGbkNPO0FGa0poQjtBSTVHTTtFQUNHLFlBQUE7RUFDQSxtQkFBQTtBSjhHVDs7QUFqSkE7RUFDRyxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBb0pIOztBQWpKQTtFQUNHLGlDQUFBO0VBQ0Esc0JFYmE7RUZjYixhQUFBO0FBb0pIOztBQWpKQTtFQUNHLGFBQUE7QUFvSkg7O0FBakpBO0VBQ0csa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQW9KSDs7QUFqSkE7RUFDRyxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBb0pIO0FBbEpHO0VBQ0csa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQW1KTjtBQWhKRztFQUNHLGdCQUFBO0FBa0pOO0FBL0lHO0VDakRBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxXRDhDZ0I7RUM3Q2hCLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VEMkNHLGdCQUFBO0VBRUEscUVBQUE7QUF3Sk47QUF0Sk07RUFDRyxzQkFBQTtFQUNBLFdBQUE7QUF3SlQ7O0FBbkpBO0VBQ0csNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBc0pIO0FBcEpHO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUFzSk47QUFwSk07RUFDRyxhRTlFUztFRitFVCxzQ0FBQTtBQXNKVDtBQWxKRztFQUNHLGFBQUE7QUFvSk47O0FBaEpBO0VBQ0c7SUFDRywyQkFBQTtFQW1KSjtFQWpKQztJQUNHLDBCQUFBO0VBbUpKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAndmFyaWFibGVzJztcXHJcXG5AaW1wb3J0ICdtaXhpbnMnO1xcclxcblxcclxcbi5jaGVja21hcmsge1xcclxcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaWNvbnMvdG9tYXRvLnBuZycpO1xcclxcbiAgIHdpZHRoOiAzMnB4O1xcclxcbiAgIGhlaWdodDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICB0b3A6IDUwJTtcXHJcXG4gICBsZWZ0OiA1MCU7XFxyXFxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAvLyBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcXHJcXG5cXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAmX19vcHRpb25zLWxhYmVsIHtcXHJcXG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAmX19vcHRpb25zIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgfVxcclxcblxcclxcbiAgICZfX29wdGlvbi1jb250YWluZXIge1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICBtaW4td2lkdGg6IDEyMHB4O1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgfVxcclxcblxcclxcbiAgICZfX3JhZGlvIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgaGVpZ2h0OiAwO1xcclxcbiAgICAgIHdpZHRoOiAwO1xcclxcblxcclxcbiAgICAgICY6Y2hlY2tlZCArIC5mb3JtX19jaGVja21hcmsge1xcclxcbiAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaWNvbnMvdG9tYXRvLWNvbG9yLnBuZycpO1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgJl9fY2hlY2ttYXJrIHtcXHJcXG4gICAgICBoZWlnaHQ6IDMycHg7XFxyXFxuICAgICAgd2lkdGg6IDMycHg7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxyXFxuXFxyXFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpY29ucy90b21hdG8ucG5nJyk7XFxyXFxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgJl9fYnV0dG9uIHtcXHJcXG4gICAgICBAaW5jbHVkZSBidG4oJHByaW1hcnktY29sb3IpO1xcclxcblxcclxcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAmOmRpc2FibGVkIHtcXHJcXG4gICAgICAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cIixcIi5jaGVja21hcmsge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pY29ucy90b21hdG8ucG5nXFxcIik7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb3JtX19vcHRpb25zLWxhYmVsIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uZm9ybV9fb3B0aW9ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmZvcm1fX29wdGlvbi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbi5mb3JtX19yYWRpbyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvcGFjaXR5OiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDA7XFxufVxcbi5mb3JtX19yYWRpbzpjaGVja2VkICsgLmZvcm1fX2NoZWNrbWFyayB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImljb25zL3RvbWF0by1jb2xvci5wbmdcXFwiKTtcXG59XFxuLmZvcm1fX2NoZWNrbWFyayB7XFxuICBoZWlnaHQ6IDMycHg7XFxuICB3aWR0aDogMzJweDtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJpY29ucy90b21hdG8ucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uZm9ybV9fYnV0dG9uIHtcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICNkZGQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4uZm9ybV9fYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICBjb2xvcjogIzk3MTUxNTtcXG59XFxuLmZvcm1fX2J1dHRvbjpkaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4ubGVmdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTcxNTE1O1xcbiAgY29sb3I6ICNkZGQ7XFxufVxcbi5sZWZ0X19oZWFkZXIge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogNjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5sZWZ0X19yZXNldC1idXR0b24ge1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogI2RkZDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNTBweDtcXG4gIHJpZ2h0OiA1MHB4O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4ubGVmdF9fcmVzZXQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICBjb2xvcjogIzk3MTUxNTtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gIGNvbG9yOiAjOTcxNTE1O1xcbn1cXG4ucmlnaHRfX3dyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnJpZ2h0X19jb3VudGVyIHtcXG4gIGZvbnQtc2l6ZTogMTgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnJpZ2h0X19jb3VudGVyICNtaW51dGVzIHtcXG4gIGZvbnQtc2l6ZTogMjIwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk3MTUxNTtcXG59XFxuLnJpZ2h0X19idXR0b24ge1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogIzk3MTUxNTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5NzE1MTU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuLnJpZ2h0X19idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk3MTUxNTtcXG4gIGNvbG9yOiAjZGRkO1xcbn1cXG4ucmlnaHRfX2J1dHRvbjpkaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjM7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLnJpZ2h0LW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45Myk7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ucmlnaHQtbW9kYWxfX3dyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ucmlnaHQtbW9kYWxfX2NvbnRpbnVlIHtcXG4gIGZvbnQtc2l6ZTogMTAwcHg7XFxufVxcbi5yaWdodC1tb2RhbF9fYnV0dG9uIHtcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4ucmlnaHQtbW9kYWxfX2J1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5jbG9jayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0xMDBweDtcXG59XFxuLmNsb2NrX19pY29uIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZmlsbDogI2ZmZjtcXG4gIHRyYW5zaXRpb246IGZpbGwgMC4xcyBlYXNlLWluO1xcbn1cXG4uY2xvY2tfX2ljb24tLWFsYXJtIHtcXG4gIGZpbGw6ICM5NzE1MTU7XFxuICBhbmltYXRpb246IHNoYWtlIDAuMXMgZWFzZS1pbiBpbmZpbml0ZTtcXG59XFxuLmNsb2NrX19pY29uOmhvdmVyIHtcXG4gIGZpbGw6ICM0MWI4ODM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgMjUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XFxuICB9XFxufVwiLFwiQG1peGluIGJ0bigkY29sb3IpIHtcXHJcXG4gICBtaW4td2lkdGg6IDEyMHB4O1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICBjb2xvcjogJGNvbG9yO1xcclxcbiAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvcjtcXHJcXG4gICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXCIsXCIkcHJpbWFyeS1jb2xvcjogI2RkZDtcXHJcXG4kc2Vjb25kYXJ5LWNvbG9yOiAjOTcxNTE1O1xcclxcblwiLFwiQGltcG9ydCAndmFyaWFibGVzJztcXHJcXG5AaW1wb3J0ICdtaXhpbnMnO1xcclxcblxcclxcbi5sZWZ0IHtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG5cXHJcXG4gICAmX19oZWFkZXIge1xcclxcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgICAgZm9udC1zaXplOiA2NHB4O1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAmX19yZXNldC1idXR0b24ge1xcclxcbiAgICAgIEBpbmNsdWRlIGJ0bigkcHJpbWFyeS1jb2xvcik7XFxyXFxuXFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIGJvdHRvbTogNTBweDtcXHJcXG4gICAgICByaWdodDogNTBweDtcXHJcXG5cXHJcXG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xcclxcbkBpbXBvcnQgJ21peGlucyc7XFxyXFxuXFxyXFxuLnJpZ2h0IHtcXHJcXG4gICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG5cXHJcXG4gICAmX193cmFwcGVyIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAmX19jb3VudGVyIHtcXHJcXG4gICAgICBmb250LXNpemU6IDE4MHB4O1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICNtaW51dGVzIHtcXHJcXG4gICAgICAgICBmb250LXNpemU6IDIyMHB4O1xcclxcbiAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgJl9fYnV0dG9uIHtcXHJcXG4gICAgICBAaW5jbHVkZSBidG4oJHNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAmOmRpc2FibGVkIHtcXHJcXG4gICAgICAgICBvcGFjaXR5OiAwLjM7XFxyXFxuICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/dXJsPWZhbHNlIS4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbnRlcmZhY2UgSUNvbmZpZyB7XHJcbiAgIHNlc3Npb25TZWNvbmRzOiBudW1iZXI7XHJcbiAgIHNob3J0QnJlYWtTZWNvbmRzOiBudW1iZXI7XHJcbiAgIGxvbmdCcmVha1NlY29uZHM6IG51bWJlcjtcclxuICAgbG9uZ0JyZWFrU3RlcDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb21vZG9ycm8ge1xyXG4gICBwcml2YXRlIGNvbmZpZzogSUNvbmZpZztcclxuICAgcHVibGljIGN1cnJlbnRTZWNvbmRzOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBzZXNzaW9uQ291bnRlcjogbnVtYmVyO1xyXG4gICBwdWJsaWMgaXNCcmFrZTogYm9vbGVhbjtcclxuICAgcHVibGljIG1pbnV0ZXM6IG51bWJlcjtcclxuICAgcHVibGljIHNlY29uZHM6IG51bWJlcjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHNlYzogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuY29uZmlnID0ge1xyXG4gICAgICAgICBzZXNzaW9uU2Vjb25kczogc2VjLFxyXG4gICAgICAgICBzaG9ydEJyZWFrU2Vjb25kczogNSxcclxuICAgICAgICAgbG9uZ0JyZWFrU2Vjb25kczogMTUsXHJcbiAgICAgICAgIGxvbmdCcmVha1N0ZXA6IDMsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuc2Vzc2lvbkNvdW50ZXIgPSAxO1xyXG4gICAgICB0aGlzLmlzQnJha2UgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jdXJyZW50U2Vjb25kcyA9IHNlYztcclxuICAgfVxyXG5cclxuICAgc2V0Q3VycmVudFNlY29uZHMoKSB7XHJcbiAgICAgIHRoaXMuaXNCcmFrZSA9ICF0aGlzLmlzQnJha2U7XHJcbiAgICAgIGlmICh0aGlzLmlzQnJha2UpIHtcclxuICAgICAgICAgaWYgKHRoaXMuc2Vzc2lvbkNvdW50ZXIgJSB0aGlzLmNvbmZpZy5sb25nQnJlYWtTdGVwID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNlY29uZHMgPSB0aGlzLmNvbmZpZy5sb25nQnJlYWtTZWNvbmRzO1xyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTZWNvbmRzID0gdGhpcy5jb25maWcuc2hvcnRCcmVha1NlY29uZHM7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgdGhpcy5zZXNzaW9uQ291bnRlcisrO1xyXG4gICAgICAgICB0aGlzLmN1cnJlbnRTZWNvbmRzID0gdGhpcy5jb25maWcuc2Vzc2lvblNlY29uZHM7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZGVjcmVtZW50U2Vjb25kcygpIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFNlY29uZHMgPT09IDApIHtcclxuICAgICAgICAgdGhpcy5zZXRDdXJyZW50U2Vjb25kcygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICB0aGlzLmN1cnJlbnRTZWNvbmRzLS07XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnO1xyXG5pbXBvcnQgUG9tb2RvcnJvIGZyb20gJy4vUG9tb2RvcnJvJztcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgIHBvbW9kb3JybzogUG9tb2RvcnJvO1xyXG4gICB1aToge1xyXG4gICAgICBmb3JtOiBIVE1MRm9ybUVsZW1lbnQ7XHJcbiAgICAgIHN0YXJ0QnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgcGF1c2VCdG46IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICByZXNldEJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgIGNvbnRpbnVlQnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgbWludXRlczogSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgICBzZWNvbmRzOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICAgIG1vZGFsOiBIVE1MRWxlbWVudDtcclxuICAgICAgYWxhcm06IEhUTUxBdWRpb0VsZW1lbnQ7XHJcbiAgICAgIGFsYXJtQnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgfTtcclxuICAgaW50ZXJ2YWw6IG51bWJlcjtcclxuICAgaXNQb21vZG9ycm9JblByb2dyZXNzOiBib29sZWFuO1xyXG4gICBpc1BhdXNlZDogYm9vbGVhbjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICB0aGlzLnVpID0ge1xyXG4gICAgICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykhLFxyXG4gICAgICAgICBzdGFydEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJ0QnRuJykhLFxyXG4gICAgICAgICBwYXVzZUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhdXNlQnRuJykhLFxyXG4gICAgICAgICByZXNldEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2V0QnRuJykhLFxyXG4gICAgICAgICBjb250aW51ZUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRpbnVlQnRuJykhLFxyXG4gICAgICAgICBtaW51dGVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWludXRlcycpISxcclxuICAgICAgICAgc2Vjb25kczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlY29uZHMnKSEsXHJcbiAgICAgICAgIG1vZGFsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKSEsXHJcbiAgICAgICAgIGFsYXJtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxhcm0nKSEsXHJcbiAgICAgICAgIGFsYXJtQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxhcm1CdG4nKSEsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLmlzUG9tb2RvcnJvSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XHJcbiAgIH1cclxuXHJcbiAgIGluaXQoKSB7XHJcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgfVxyXG5cclxuICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIHRoaXMudWkuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gdGhpcy5oYW5kbGVTdGFydENsaWNrKGUpKTtcclxuICAgICAgdGhpcy51aS5wYXVzZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlUGF1c2VDbGljaygpKTtcclxuICAgICAgdGhpcy51aS5yZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlUmVzZXRDbGljaygpKTtcclxuICAgICAgdGhpcy51aS5jb250aW51ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlQ29udGludWVDbGljaygpKTtcclxuICAgICAgdGhpcy51aS5hbGFybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc3RvcEFsYXJtKCkpO1xyXG4gICB9XHJcblxyXG4gICB0b2dnbGVNb2RhbCgpIHtcclxuICAgICAgdGhpcy5wYXVzZVVucGF1c2VJbnRlcnZhbCgpO1xyXG4gICAgICB0aGlzLnVpLm1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgfVxyXG5cclxuICAgc2hvd1RpbWVyKCkge1xyXG4gICAgICBjb25zdCBtaW4gPVxyXG4gICAgICAgICB0aGlzLnBvbW9kb3Jyby5jdXJyZW50U2Vjb25kcyA+IDU5ID8gTWF0aC5mbG9vcih0aGlzLnBvbW9kb3Jyby5jdXJyZW50U2Vjb25kcyAvIDYwKSA6IDA7XHJcblxyXG4gICAgICBjb25zdCBzZWMgPSBtaW4gPT09IDAgPyB0aGlzLnBvbW9kb3Jyby5jdXJyZW50U2Vjb25kcyA6IHRoaXMucG9tb2RvcnJvLmN1cnJlbnRTZWNvbmRzICUgNjA7XHJcblxyXG4gICAgICB0aGlzLnVpLm1pbnV0ZXMuaW5uZXJIVE1MID0gbWluID4gOSA/IG1pbi50b1N0cmluZygpIDogYDAke21pbn1gO1xyXG4gICAgICB0aGlzLnVpLnNlY29uZHMuaW5uZXJIVE1MID0gc2VjID4gOSA/IHNlYy50b1N0cmluZygpIDogYDAke3NlY31gO1xyXG4gICB9XHJcblxyXG4gICBzdGFydEludGVydmFsKCkge1xyXG4gICAgICB0aGlzLnNob3dUaW1lcigpO1xyXG4gICAgICB0aGlzLmludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgaWYgKHRoaXMucG9tb2RvcnJvLmN1cnJlbnRTZWNvbmRzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudWkuYWxhcm0ucGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLnVpLmFsYXJtQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVNb2RhbCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMucG9tb2RvcnJvLmRlY3JlbWVudFNlY29uZHMoKTtcclxuICAgICAgICAgdGhpcy5zaG93VGltZXIoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgIH1cclxuXHJcbiAgIHBhdXNlVW5wYXVzZUludGVydmFsKCkge1xyXG4gICAgICB0aGlzLmlzUGF1c2VkID0gIXRoaXMuaXNQYXVzZWQ7XHJcblxyXG4gICAgICBpZiAodGhpcy5pc1BhdXNlZCkge1xyXG4gICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBoYW5kbGVTdGFydENsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ0aW1lXCJdOmNoZWNrZWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICB0aGlzLnBvbW9kb3JybyA9IG5ldyBQb21vZG9ycm8ocGFyc2VJbnQodGltZS52YWx1ZSkpO1xyXG4gICAgICB0aGlzLnN3aXRjaERpc2FibGVkQnV0dG9ucygpO1xyXG4gICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcclxuICAgfVxyXG5cclxuICAgaGFuZGxlUGF1c2VDbGljaygpIHtcclxuICAgICAgdGhpcy5wYXVzZVVucGF1c2VJbnRlcnZhbCgpO1xyXG4gICAgICB0aGlzLnVpLnBhdXNlQnRuLmlubmVySFRNTCA9IHRoaXMuaXNQYXVzZWQgPyAnVU5QQVVTRScgOiAnUEFVU0UnO1xyXG4gICB9XHJcblxyXG4gICBoYW5kbGVSZXNldENsaWNrKCkge1xyXG4gICAgICB0aGlzLnN3aXRjaERpc2FibGVkQnV0dG9ucygpO1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudWkubW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICB0aGlzLnVpLnBhdXNlQnRuLmlubmVySFRNTCA9IHRoaXMuaXNQYXVzZWQgPyAnVU5QQVVTRScgOiAnUEFVU0UnO1xyXG4gICAgICB0aGlzLnVpLm1pbnV0ZXMuaW5uZXJIVE1MID0gJzAwJztcclxuICAgICAgdGhpcy51aS5zZWNvbmRzLmlubmVySFRNTCA9ICcwMCc7XHJcbiAgIH1cclxuXHJcbiAgIGhhbmRsZUNvbnRpbnVlQ2xpY2soKSB7XHJcbiAgICAgIC8vIHRoaXMucGF1c2VVbnBhdXNlSW50ZXJ2YWwoKTtcclxuICAgICAgdGhpcy50b2dnbGVNb2RhbCgpO1xyXG4gICAgICB0aGlzLnN0b3BBbGFybSgpO1xyXG4gICB9XHJcblxyXG4gICBzd2l0Y2hEaXNhYmxlZEJ1dHRvbnMoKSB7XHJcbiAgICAgIHRoaXMuaXNQb21vZG9ycm9JblByb2dyZXNzID0gIXRoaXMuaXNQb21vZG9ycm9JblByb2dyZXNzO1xyXG5cclxuICAgICAgdGhpcy51aS5zdGFydEJ0bi5kaXNhYmxlZCA9IHRoaXMuaXNQb21vZG9ycm9JblByb2dyZXNzO1xyXG4gICAgICB0aGlzLnVpLnBhdXNlQnRuLmRpc2FibGVkID0gIXRoaXMuaXNQb21vZG9ycm9JblByb2dyZXNzO1xyXG4gICAgICB0aGlzLnVpLnJlc2V0QnRuLmRpc2FibGVkID0gIXRoaXMuaXNQb21vZG9ycm9JblByb2dyZXNzO1xyXG4gICB9XHJcblxyXG4gICBzdG9wQWxhcm0oKSB7XHJcbiAgICAgIHRoaXMudWkuYWxhcm0ucGF1c2UoKTtcclxuICAgICAgdGhpcy51aS5hbGFybUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgIH1cclxufVxyXG5cclxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xyXG5hcHAuaW5pdCgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9