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
___CSS_LOADER_EXPORT___.push([module.id, ".checkmark {\n  background-image: url(\"../icons/tomato.png\");\n  width: 32px;\n  height: 32px;\n}\n\n.form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n@media (max-width: 400px) {\n  .form {\n    width: 280px;\n  }\n}\n.form__options-label {\n  align-self: flex-start;\n  font-weight: 700;\n  font-size: 20px;\n}\n@media (max-width: 600px) {\n  .form__options-label {\n    font-size: 16px;\n  }\n}\n.form__options {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0 10px 10px;\n  margin-bottom: 10px;\n}\n.form__option-container {\n  position: relative;\n  min-width: 120px;\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: flex-end;\n}\n@media (max-width: 400px) {\n  .form__option-container {\n    min-width: 90px;\n    font-size: 14px;\n  }\n}\n.form__radio {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.form__radio:checked + .form__checkmark {\n  transform: scale(1.3);\n  background-image: url(\"./icons/tomato-color.png\");\n}\n.form__checkmark {\n  height: 32px;\n  width: 32px;\n  margin-right: 8px;\n  background-image: url(\"./icons/tomato.png\");\n  background-size: cover;\n  transition: all 0.1s ease-in-out;\n}\n@media (max-width: 600px) {\n  .form__checkmark {\n    height: 25px;\n    width: 25px;\n  }\n}\n.form__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #ddd;\n  border: 2px solid #ddd;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  margin-top: 30px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n@media (max-width: 600px) {\n  .form__button {\n    min-width: 80px;\n    font-size: 14px;\n    padding: 7px 15px;\n  }\n}\n.form__button:hover {\n  background-color: #ddd;\n  color: #971515;\n}\n.form__button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.left {\n  background-color: #971515;\n  color: #ddd;\n}\n.left__header {\n  text-transform: uppercase;\n  font-size: 64px;\n  text-align: center;\n  padding: 20px;\n}\n@media (max-width: 600px) {\n  .left__header {\n    font-size: 44px;\n  }\n}\n@media (max-width: 400px) {\n  .left__header {\n    font-size: 34px;\n  }\n}\n.left__reset-button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #ddd;\n  border: 2px solid #ddd;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n@media (max-width: 600px) {\n  .left__reset-button {\n    min-width: 80px;\n    font-size: 14px;\n    padding: 7px 15px;\n  }\n}\n.left__reset-button:hover {\n  background-color: #ddd;\n  color: #971515;\n}\n@media (max-width: 400px) {\n  .left__reset-button {\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n\n.right {\n  color: #971515;\n}\n.right__wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.right__counter {\n  font-size: 180px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.right__counter #minutes {\n  font-size: 220px;\n  border-bottom: 1px solid #971515;\n}\n@media (max-width: 600px) {\n  .right__counter {\n    font-size: 140px;\n  }\n  .right__counter #minutes {\n    font-size: 180px;\n  }\n}\n.right__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #971515;\n  border: 2px solid #971515;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n@media (max-width: 600px) {\n  .right__button {\n    min-width: 80px;\n    font-size: 14px;\n    padding: 7px 15px;\n  }\n}\n.right__button:hover {\n  background-color: #971515;\n  color: #ddd;\n}\n.right__button:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.right__streak {\n  color: #000;\n  margin-top: 20px;\n  font-weight: 700;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #ddd;\n  display: flex;\n}\n@media (max-width: 1024px) {\n  body {\n    flex-direction: column;\n  }\n}\n\n.hide {\n  display: none;\n}\n\n.container {\n  position: relative;\n  width: 50vw;\n  height: 100vh;\n}\n@media (max-width: 1024px) {\n  .container {\n    width: 100vw;\n    height: 90vh;\n  }\n}\n\n.right-modal {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.93);\n  bottom: 0;\n  right: 0;\n  color: #fff;\n}\n.right-modal__wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.right-modal__continue {\n  font-size: 100px;\n}\n@media (max-width: 600px) {\n  .right-modal__continue {\n    font-size: 70px;\n  }\n}\n@media (max-width: 400px) {\n  .right-modal__continue {\n    font-size: 50px;\n  }\n}\n.right-modal__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #fff;\n  border: 2px solid #fff;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  margin-top: 30px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n@media (max-width: 600px) {\n  .right-modal__button {\n    min-width: 80px;\n    font-size: 14px;\n    padding: 7px 15px;\n  }\n}\n.right-modal__button:hover {\n  background-color: #fff;\n  color: #000;\n}\n\n.clock {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  margin-top: 50px;\n  position: absolute;\n  bottom: -100px;\n}\n.clock__icon {\n  width: 50px;\n  height: 50px;\n  fill: #fff;\n  transition: fill 0.1s ease-in;\n}\n.clock__icon--alarm {\n  fill: #971515;\n  animation: shake 0.1s ease-in infinite;\n}\n.clock__icon:hover {\n  fill: #41b883;\n}\n\n@keyframes shake {\n  25% {\n    transform: translateX(-2px);\n  }\n  75% {\n    transform: translateX(2px);\n  }\n}", "",{"version":3,"sources":["webpack://./_form.scss","webpack://./main.scss","webpack://./_mixins.scss","webpack://./_variables.scss","webpack://./_left.scss","webpack://./_right.scss"],"names":[],"mappings":"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","sourcesContent":["@import 'variables';\r\n@import 'mixins';\r\n\r\n.checkmark {\r\n   background-image: url('../icons/tomato.png');\r\n   width: 32px;\r\n   height: 32px;\r\n}\r\n\r\n.form {\r\n   position: absolute;\r\n   top: 50%;\r\n   left: 50%;\r\n   transform: translate(-50%, -50%);\r\n\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: center;\r\n\r\n   @media (max-width: 400px) {\r\n      width: 280px;\r\n   }\r\n\r\n   &__options-label {\r\n      align-self: flex-start;\r\n      font-weight: 700;\r\n      font-size: 20px;\r\n\r\n      @media (max-width: 600px) {\r\n         font-size: 16px;\r\n      }\r\n   }\r\n\r\n   &__options {\r\n      width: 100%;\r\n      display: flex;\r\n      justify-content: space-between;\r\n      padding: 10px 0 10px 10px;\r\n      margin-bottom: 10px;\r\n   }\r\n\r\n   &__option-container {\r\n      position: relative;\r\n      min-width: 120px;\r\n      font-size: 18px;\r\n      cursor: pointer;\r\n      display: flex;\r\n      align-items: flex-end;\r\n\r\n      @media (max-width: 400px) {\r\n         min-width: 90px;\r\n         font-size: 14px;\r\n      }\r\n   }\r\n\r\n   &__radio {\r\n      position: absolute;\r\n      opacity: 0;\r\n      cursor: pointer;\r\n      height: 0;\r\n      width: 0;\r\n\r\n      &:checked + .form__checkmark {\r\n         transform: scale(1.3);\r\n         background-image: url('./icons/tomato-color.png');\r\n      }\r\n   }\r\n\r\n   &__checkmark {\r\n      height: 32px;\r\n      width: 32px;\r\n      margin-right: 8px;\r\n\r\n      background-image: url('./icons/tomato.png');\r\n      background-size: cover;\r\n      transition: all 0.1s ease-in-out;\r\n\r\n      @media (max-width: 600px) {\r\n         height: 25px;\r\n         width: 25px;\r\n      }\r\n   }\r\n\r\n   &__button {\r\n      @include btn($primary-color);\r\n\r\n      margin-top: 30px;\r\n      transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\r\n      &:hover {\r\n         background-color: $primary-color;\r\n         color: $secondary-color;\r\n      }\r\n\r\n      &:disabled {\r\n         opacity: 0.5;\r\n         cursor: not-allowed;\r\n      }\r\n   }\r\n}\r\n",".checkmark {\n  background-image: url(\"../icons/tomato.png\");\n  width: 32px;\n  height: 32px;\n}\n\n.form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n@media (max-width: 400px) {\n  .form {\n    width: 280px;\n  }\n}\n.form__options-label {\n  align-self: flex-start;\n  font-weight: 700;\n  font-size: 20px;\n}\n@media (max-width: 600px) {\n  .form__options-label {\n    font-size: 16px;\n  }\n}\n.form__options {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0 10px 10px;\n  margin-bottom: 10px;\n}\n.form__option-container {\n  position: relative;\n  min-width: 120px;\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: flex-end;\n}\n@media (max-width: 400px) {\n  .form__option-container {\n    min-width: 90px;\n    font-size: 14px;\n  }\n}\n.form__radio {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.form__radio:checked + .form__checkmark {\n  transform: scale(1.3);\n  background-image: url(\"./icons/tomato-color.png\");\n}\n.form__checkmark {\n  height: 32px;\n  width: 32px;\n  margin-right: 8px;\n  background-image: url(\"./icons/tomato.png\");\n  background-size: cover;\n  transition: all 0.1s ease-in-out;\n}\n@media (max-width: 600px) {\n  .form__checkmark {\n    height: 25px;\n    width: 25px;\n  }\n}\n.form__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #ddd;\n  border: 2px solid #ddd;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  margin-top: 30px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n@media (max-width: 600px) {\n  .form__button {\n    min-width: 80px;\n    font-size: 14px;\n    padding: 7px 15px;\n  }\n}\n.form__button:hover {\n  background-color: #ddd;\n  color: #971515;\n}\n.form__button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.left {\n  background-color: #971515;\n  color: #ddd;\n}\n.left__header {\n  text-transform: uppercase;\n  font-size: 64px;\n  text-align: center;\n  padding: 20px;\n}\n@media (max-width: 600px) {\n  .left__header {\n    font-size: 44px;\n  }\n}\n@media (max-width: 400px) {\n  .left__header {\n    font-size: 34px;\n  }\n}\n.left__reset-button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #ddd;\n  border: 2px solid #ddd;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n@media (max-width: 600px) {\n  .left__reset-button {\n    min-width: 80px;\n    font-size: 14px;\n    padding: 7px 15px;\n  }\n}\n.left__reset-button:hover {\n  background-color: #ddd;\n  color: #971515;\n}\n@media (max-width: 400px) {\n  .left__reset-button {\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n\n.right {\n  color: #971515;\n}\n.right__wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.right__counter {\n  font-size: 180px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.right__counter #minutes {\n  font-size: 220px;\n  border-bottom: 1px solid #971515;\n}\n@media (max-width: 600px) {\n  .right__counter {\n    font-size: 140px;\n  }\n  .right__counter #minutes {\n    font-size: 180px;\n  }\n}\n.right__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #971515;\n  border: 2px solid #971515;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n@media (max-width: 600px) {\n  .right__button {\n    min-width: 80px;\n    font-size: 14px;\n    padding: 7px 15px;\n  }\n}\n.right__button:hover {\n  background-color: #971515;\n  color: #ddd;\n}\n.right__button:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.right__streak {\n  color: #000;\n  margin-top: 20px;\n  font-weight: 700;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #ddd;\n  display: flex;\n}\n@media (max-width: 1024px) {\n  body {\n    flex-direction: column;\n  }\n}\n\n.hide {\n  display: none;\n}\n\n.container {\n  position: relative;\n  width: 50vw;\n  height: 100vh;\n}\n@media (max-width: 1024px) {\n  .container {\n    width: 100vw;\n    height: 90vh;\n  }\n}\n\n.right-modal {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.93);\n  bottom: 0;\n  right: 0;\n  color: #fff;\n}\n.right-modal__wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.right-modal__continue {\n  font-size: 100px;\n}\n@media (max-width: 600px) {\n  .right-modal__continue {\n    font-size: 70px;\n  }\n}\n@media (max-width: 400px) {\n  .right-modal__continue {\n    font-size: 50px;\n  }\n}\n.right-modal__button {\n  min-width: 120px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  color: #fff;\n  border: 2px solid #fff;\n  border-radius: 50px;\n  padding: 10px 20px;\n  cursor: pointer;\n  outline: none;\n  margin-top: 30px;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n@media (max-width: 600px) {\n  .right-modal__button {\n    min-width: 80px;\n    font-size: 14px;\n    padding: 7px 15px;\n  }\n}\n.right-modal__button:hover {\n  background-color: #fff;\n  color: #000;\n}\n\n.clock {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  margin-top: 50px;\n  position: absolute;\n  bottom: -100px;\n}\n.clock__icon {\n  width: 50px;\n  height: 50px;\n  fill: #fff;\n  transition: fill 0.1s ease-in;\n}\n.clock__icon--alarm {\n  fill: #971515;\n  animation: shake 0.1s ease-in infinite;\n}\n.clock__icon:hover {\n  fill: #41b883;\n}\n\n@keyframes shake {\n  25% {\n    transform: translateX(-2px);\n  }\n  75% {\n    transform: translateX(2px);\n  }\n}","@mixin btn($color) {\r\n   min-width: 120px;\r\n   background-color: transparent;\r\n   font-family: inherit;\r\n   font-size: 16px;\r\n   color: $color;\r\n   border: 2px solid $color;\r\n   border-radius: 50px;\r\n   padding: 10px 20px;\r\n   cursor: pointer;\r\n   outline: none;\r\n\r\n   @media (max-width: 600px) {\r\n      min-width: 80px;\r\n      font-size: 14px;\r\n      padding: 7px 15px;\r\n   }\r\n}\r\n","$primary-color: #ddd;\r\n$secondary-color: #971515;\r\n","@import 'variables';\r\n@import 'mixins';\r\n\r\n.left {\r\n   background-color: $secondary-color;\r\n   color: $primary-color;\r\n\r\n   &__header {\r\n      text-transform: uppercase;\r\n      font-size: 64px;\r\n      text-align: center;\r\n      padding: 20px;\r\n\r\n      @media (max-width: 600px) {\r\n         font-size: 44px;\r\n      }\r\n\r\n      @media (max-width: 400px) {\r\n         font-size: 34px;\r\n      }\r\n   }\r\n\r\n   &__reset-button {\r\n      @include btn($primary-color);\r\n\r\n      position: absolute;\r\n      bottom: 50px;\r\n      right: 50px;\r\n\r\n      transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\r\n      &:hover {\r\n         background-color: $primary-color;\r\n         color: $secondary-color;\r\n      }\r\n\r\n      @media (max-width: 400px) {\r\n         left: 50%;\r\n         transform: translateX(-50%);\r\n      }\r\n   }\r\n}\r\n","@import 'variables';\r\n@import 'mixins';\r\n\r\n.right {\r\n   color: $secondary-color;\r\n\r\n   &__wrapper {\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n   }\r\n\r\n   &__counter {\r\n      font-size: 180px;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n\r\n      #minutes {\r\n         font-size: 220px;\r\n         border-bottom: 1px solid $secondary-color;\r\n      }\r\n\r\n      @media (max-width: 600px) {\r\n         font-size: 140px;\r\n\r\n         #minutes {\r\n            font-size: 180px;\r\n         }\r\n      }\r\n   }\r\n\r\n   &__button {\r\n      @include btn($secondary-color);\r\n      transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\r\n\r\n      &:hover {\r\n         background-color: $secondary-color;\r\n         color: $primary-color;\r\n      }\r\n\r\n      &:disabled {\r\n         opacity: 0.3;\r\n         cursor: not-allowed;\r\n      }\r\n   }\r\n\r\n   &__streak {\r\n      color: #000;\r\n      margin-top: 20px;\r\n      font-weight: 700;\r\n   }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb21vZG9ycm8tYXBwLy4vc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL3BvbW9kb3Jyby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvbW9kb3Jyby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9wb21vZG9ycm8tYXBwLy4vc3JjL3Njc3MvbWFpbi5zY3NzP2ZkNzYiLCJ3ZWJwYWNrOi8vcG9tb2RvcnJvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb21vZG9ycm8tYXBwLy4vc3JjL1BvbW9kb3Jyby50cyIsIndlYnBhY2s6Ly9wb21vZG9ycm8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvbW9kb3Jyby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9tb2RvcnJvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9tb2RvcnJvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvbW9kb3Jyby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb21vZG9ycm8tYXBwLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxzREFBc0QsbURBQW1ELGdCQUFnQixp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QUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFlBQVksWUFBWSxPQUFPLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxN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QU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDL0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGlDQUFtQixHQUFuQjtRQUVHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELG1DQUFxQixHQUFyQjtRQUNHLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUV6RCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN4RCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDM0QsQ0FBQztJQUVELHVCQUFTLEdBQVQ7UUFDRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDSixVQUFDO0FBQUQsQ0FBQztBQUVELElBQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFDdEIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY2hlY2ttYXJrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaWNvbnMvdG9tYXRvLnBuZ1xcXCIpO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbi5mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLmZvcm0ge1xcbiAgICB3aWR0aDogMjgwcHg7XFxuICB9XFxufVxcbi5mb3JtX19vcHRpb25zLWxhYmVsIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5mb3JtX19vcHRpb25zLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcbn1cXG4uZm9ybV9fb3B0aW9ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmZvcm1fX29wdGlvbi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLmZvcm1fX29wdGlvbi1jb250YWluZXIge1xcbiAgICBtaW4td2lkdGg6IDkwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH1cXG59XFxuLmZvcm1fX3JhZGlvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG59XFxuLmZvcm1fX3JhZGlvOmNoZWNrZWQgKyAuZm9ybV9fY2hlY2ttYXJrIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pY29ucy90b21hdG8tY29sb3IucG5nXFxcIik7XFxufVxcbi5mb3JtX19jaGVja21hcmsge1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pY29ucy90b21hdG8ucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmZvcm1fX2NoZWNrbWFyayB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICB9XFxufVxcbi5mb3JtX19idXR0b24ge1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogI2RkZDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmZvcm1fX2J1dHRvbiB7XFxuICAgIG1pbi13aWR0aDogODBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcXG4gIH1cXG59XFxuLmZvcm1fX2J1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgY29sb3I6ICM5NzE1MTU7XFxufVxcbi5mb3JtX19idXR0b246ZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLmxlZnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk3MTUxNTtcXG4gIGNvbG9yOiAjZGRkO1xcbn1cXG4ubGVmdF9faGVhZGVyIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDY0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5sZWZ0X19oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDQ0cHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLmxlZnRfX2hlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMzRweDtcXG4gIH1cXG59XFxuLmxlZnRfX3Jlc2V0LWJ1dHRvbiB7XFxuICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjZGRkO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1MHB4O1xcbiAgcmlnaHQ6IDUwcHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmxlZnRfX3Jlc2V0LWJ1dHRvbiB7XFxuICAgIG1pbi13aWR0aDogODBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcXG4gIH1cXG59XFxuLmxlZnRfX3Jlc2V0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgY29sb3I6ICM5NzE1MTU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLmxlZnRfX3Jlc2V0LWJ1dHRvbiB7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgfVxcbn1cXG5cXG4ucmlnaHQge1xcbiAgY29sb3I6ICM5NzE1MTU7XFxufVxcbi5yaWdodF9fd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucmlnaHRfX2NvdW50ZXIge1xcbiAgZm9udC1zaXplOiAxODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucmlnaHRfX2NvdW50ZXIgI21pbnV0ZXMge1xcbiAgZm9udC1zaXplOiAyMjBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTcxNTE1O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5yaWdodF9fY291bnRlciB7XFxuICAgIGZvbnQtc2l6ZTogMTQwcHg7XFxuICB9XFxuICAucmlnaHRfX2NvdW50ZXIgI21pbnV0ZXMge1xcbiAgICBmb250LXNpemU6IDE4MHB4O1xcbiAgfVxcbn1cXG4ucmlnaHRfX2J1dHRvbiB7XFxuICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjOTcxNTE1O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzk3MTUxNTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5yaWdodF9fYnV0dG9uIHtcXG4gICAgbWluLXdpZHRoOiA4MHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xcbiAgfVxcbn1cXG4ucmlnaHRfX2J1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTcxNTE1O1xcbiAgY29sb3I6ICNkZGQ7XFxufVxcbi5yaWdodF9fYnV0dG9uOmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5yaWdodF9fc3RyZWFrIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIGJvZHkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgfVxcbn1cXG5cXG4ucmlnaHQtbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkzKTtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5yaWdodC1tb2RhbF9fd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5yaWdodC1tb2RhbF9fY29udGludWUge1xcbiAgZm9udC1zaXplOiAxMDBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAucmlnaHQtbW9kYWxfX2NvbnRpbnVlIHtcXG4gICAgZm9udC1zaXplOiA3MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIC5yaWdodC1tb2RhbF9fY29udGludWUge1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICB9XFxufVxcbi5yaWdodC1tb2RhbF9fYnV0dG9uIHtcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5yaWdodC1tb2RhbF9fYnV0dG9uIHtcXG4gICAgbWluLXdpZHRoOiA4MHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xcbiAgfVxcbn1cXG4ucmlnaHQtbW9kYWxfX2J1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5jbG9jayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0xMDBweDtcXG59XFxuLmNsb2NrX19pY29uIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZmlsbDogI2ZmZjtcXG4gIHRyYW5zaXRpb246IGZpbGwgMC4xcyBlYXNlLWluO1xcbn1cXG4uY2xvY2tfX2ljb24tLWFsYXJtIHtcXG4gIGZpbGw6ICM5NzE1MTU7XFxuICBhbmltYXRpb246IHNoYWtlIDAuMXMgZWFzZS1pbiBpbmZpbml0ZTtcXG59XFxuLmNsb2NrX19pY29uOmhvdmVyIHtcXG4gIGZpbGw6ICM0MWI4ODM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgMjUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL19mb3JtLnNjc3NcIixcIndlYnBhY2s6Ly8uL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL19sZWZ0LnNjc3NcIixcIndlYnBhY2s6Ly8uL19yaWdodC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0csNENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZIOztBREtBO0VBQ0csa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNISDtBREtHO0VBVkg7SUFXTSxZQUFBO0VDRko7QUFDRjtBRElHO0VBQ0csc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNGTjtBRElNO0VBTEg7SUFNTSxlQUFBO0VDRFA7QUFDRjtBRElHO0VBQ0csV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNGTjtBREtHO0VBQ0csa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FDSE47QURLTTtFQVJIO0lBU00sZUFBQTtJQUNBLGVBQUE7RUNGUDtBQUNGO0FES0c7RUFDRyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNITjtBREtNO0VBQ0cscUJBQUE7RUFDQSxpREFBQTtBQ0hUO0FET0c7RUFDRyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBRUEsMkNBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FDTk47QURRTTtFQVRIO0lBVU0sWUFBQTtJQUNBLFdBQUE7RUNMUDtBQUNGO0FEUUc7RUVsRkEsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFdDTGE7RURNYixzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFRjRFRyxnQkFBQTtFQUNBLHFFQUFBO0FDRU47QUM3RUc7RUZ1RUE7SUV0RUcsZUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFRGdGSjtB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QXhPQTtFQUNHLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQTJPSDtBQXpPRztFQUNHLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBMk9OO0FBek9NO0VBQ0csYUU5RlM7RUYrRlQsc0NBQUE7QUEyT1Q7QUF2T0c7RUFDRyxhQUFBO0FBeU9OOztBQXJPQTtFQUNHO0lBQ0csMkJBQUE7RUF3T0o7RUF0T0M7SUFDRywwQkFBQTtFQXdPSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XFxyXFxuQGltcG9ydCAnbWl4aW5zJztcXHJcXG5cXHJcXG4uY2hlY2ttYXJrIHtcXHJcXG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ljb25zL3RvbWF0by5wbmcnKTtcXHJcXG4gICB3aWR0aDogMzJweDtcXHJcXG4gICBoZWlnaHQ6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgdG9wOiA1MCU7XFxyXFxuICAgbGVmdDogNTAlO1xcclxcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcblxcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcclxcbiAgICAgIHdpZHRoOiAyODBweDtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgJl9fb3B0aW9ucy1sYWJlbCB7XFxyXFxuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHJcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAmX19vcHRpb25zIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxMHB4O1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgfVxcclxcblxcclxcbiAgICZfX29wdGlvbi1jb250YWluZXIge1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICBtaW4td2lkdGg6IDEyMHB4O1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuXFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxyXFxuICAgICAgICAgbWluLXdpZHRoOiA5MHB4O1xcclxcbiAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcblxcclxcbiAgICZfX3JhZGlvIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgaGVpZ2h0OiAwO1xcclxcbiAgICAgIHdpZHRoOiAwO1xcclxcblxcclxcbiAgICAgICY6Y2hlY2tlZCArIC5mb3JtX19jaGVja21hcmsge1xcclxcbiAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXHJcXG4gICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaWNvbnMvdG9tYXRvLWNvbG9yLnBuZycpO1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgJl9fY2hlY2ttYXJrIHtcXHJcXG4gICAgICBoZWlnaHQ6IDMycHg7XFxyXFxuICAgICAgd2lkdGg6IDMycHg7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxyXFxuXFxyXFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ljb25zL3RvbWF0by5wbmcnKTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAgICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgICAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcblxcclxcbiAgICZfX2J1dHRvbiB7XFxyXFxuICAgICAgQGluY2x1ZGUgYnRuKCRwcmltYXJ5LWNvbG9yKTtcXHJcXG5cXHJcXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJjpkaXNhYmxlZCB7XFxyXFxuICAgICAgICAgb3BhY2l0eTogMC41O1xcclxcbiAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG59XFxyXFxuXCIsXCIuY2hlY2ttYXJrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaWNvbnMvdG9tYXRvLnBuZ1xcXCIpO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbi5mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLmZvcm0ge1xcbiAgICB3aWR0aDogMjgwcHg7XFxuICB9XFxufVxcbi5mb3JtX19vcHRpb25zLWxhYmVsIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5mb3JtX19vcHRpb25zLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcbn1cXG4uZm9ybV9fb3B0aW9ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmZvcm1fX29wdGlvbi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLmZvcm1fX29wdGlvbi1jb250YWluZXIge1xcbiAgICBtaW4td2lkdGg6IDkwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH1cXG59XFxuLmZvcm1fX3JhZGlvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG59XFxuLmZvcm1fX3JhZGlvOmNoZWNrZWQgKyAuZm9ybV9fY2hlY2ttYXJrIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pY29ucy90b21hdG8tY29sb3IucG5nXFxcIik7XFxufVxcbi5mb3JtX19jaGVja21hcmsge1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pY29ucy90b21hdG8ucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmZvcm1fX2NoZWNrbWFyayB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICB9XFxufVxcbi5mb3JtX19idXR0b24ge1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogI2RkZDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmZvcm1fX2J1dHRvbiB7XFxuICAgIG1pbi13aWR0aDogODBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcXG4gIH1cXG59XFxuLmZvcm1fX2J1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgY29sb3I6ICM5NzE1MTU7XFxufVxcbi5mb3JtX19idXR0b246ZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLmxlZnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk3MTUxNTtcXG4gIGNvbG9yOiAjZGRkO1xcbn1cXG4ubGVmdF9faGVhZGVyIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDY0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5sZWZ0X19oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDQ0cHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLmxlZnRfX2hlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMzRweDtcXG4gIH1cXG59XFxuLmxlZnRfX3Jlc2V0LWJ1dHRvbiB7XFxuICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjZGRkO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1MHB4O1xcbiAgcmlnaHQ6IDUwcHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmxlZnRfX3Jlc2V0LWJ1dHRvbiB7XFxuICAgIG1pbi13aWR0aDogODBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcXG4gIH1cXG59XFxuLmxlZnRfX3Jlc2V0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgY29sb3I6ICM5NzE1MTU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLmxlZnRfX3Jlc2V0LWJ1dHRvbiB7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgfVxcbn1cXG5cXG4ucmlnaHQge1xcbiAgY29sb3I6ICM5NzE1MTU7XFxufVxcbi5yaWdodF9fd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucmlnaHRfX2NvdW50ZXIge1xcbiAgZm9udC1zaXplOiAxODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucmlnaHRfX2NvdW50ZXIgI21pbnV0ZXMge1xcbiAgZm9udC1zaXplOiAyMjBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTcxNTE1O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5yaWdodF9fY291bnRlciB7XFxuICAgIGZvbnQtc2l6ZTogMTQwcHg7XFxuICB9XFxuICAucmlnaHRfX2NvdW50ZXIgI21pbnV0ZXMge1xcbiAgICBmb250LXNpemU6IDE4MHB4O1xcbiAgfVxcbn1cXG4ucmlnaHRfX2J1dHRvbiB7XFxuICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjOTcxNTE1O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzk3MTUxNTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5yaWdodF9fYnV0dG9uIHtcXG4gICAgbWluLXdpZHRoOiA4MHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xcbiAgfVxcbn1cXG4ucmlnaHRfX2J1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTcxNTE1O1xcbiAgY29sb3I6ICNkZGQ7XFxufVxcbi5yaWdodF9fYnV0dG9uOmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5yaWdodF9fc3RyZWFrIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIGJvZHkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgfVxcbn1cXG5cXG4ucmlnaHQtbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkzKTtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5yaWdodC1tb2RhbF9fd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5yaWdodC1tb2RhbF9fY29udGludWUge1xcbiAgZm9udC1zaXplOiAxMDBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAucmlnaHQtbW9kYWxfX2NvbnRpbnVlIHtcXG4gICAgZm9udC1zaXplOiA3MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIC5yaWdodC1tb2RhbF9fY29udGludWUge1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICB9XFxufVxcbi5yaWdodC1tb2RhbF9fYnV0dG9uIHtcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5yaWdodC1tb2RhbF9fYnV0dG9uIHtcXG4gICAgbWluLXdpZHRoOiA4MHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xcbiAgfVxcbn1cXG4ucmlnaHQtbW9kYWxfX2J1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5jbG9jayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0xMDBweDtcXG59XFxuLmNsb2NrX19pY29uIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZmlsbDogI2ZmZjtcXG4gIHRyYW5zaXRpb246IGZpbGwgMC4xcyBlYXNlLWluO1xcbn1cXG4uY2xvY2tfX2ljb24tLWFsYXJtIHtcXG4gIGZpbGw6ICM5NzE1MTU7XFxuICBhbmltYXRpb246IHNoYWtlIDAuMXMgZWFzZS1pbiBpbmZpbml0ZTtcXG59XFxuLmNsb2NrX19pY29uOmhvdmVyIHtcXG4gIGZpbGw6ICM0MWI4ODM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgMjUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XFxuICB9XFxufVwiLFwiQG1peGluIGJ0bigkY29sb3IpIHtcXHJcXG4gICBtaW4td2lkdGg6IDEyMHB4O1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICBjb2xvcjogJGNvbG9yO1xcclxcbiAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvcjtcXHJcXG4gICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgb3V0bGluZTogbm9uZTtcXHJcXG5cXHJcXG4gICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgICBtaW4td2lkdGg6IDgwcHg7XFxyXFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgIHBhZGRpbmc6IDdweCAxNXB4O1xcclxcbiAgIH1cXHJcXG59XFxyXFxuXCIsXCIkcHJpbWFyeS1jb2xvcjogI2RkZDtcXHJcXG4kc2Vjb25kYXJ5LWNvbG9yOiAjOTcxNTE1O1xcclxcblwiLFwiQGltcG9ydCAndmFyaWFibGVzJztcXHJcXG5AaW1wb3J0ICdtaXhpbnMnO1xcclxcblxcclxcbi5sZWZ0IHtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG5cXHJcXG4gICAmX19oZWFkZXIge1xcclxcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgICAgZm9udC1zaXplOiA2NHB4O1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICBwYWRkaW5nOiAyMHB4O1xcclxcblxcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAgICAgIGZvbnQtc2l6ZTogNDRweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxyXFxuICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgJl9fcmVzZXQtYnV0dG9uIHtcXHJcXG4gICAgICBAaW5jbHVkZSBidG4oJHByaW1hcnktY29sb3IpO1xcclxcblxcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBib3R0b206IDUwcHg7XFxyXFxuICAgICAgcmlnaHQ6IDUwcHg7XFxyXFxuXFxyXFxuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXHJcXG4gICAgICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCAndmFyaWFibGVzJztcXHJcXG5AaW1wb3J0ICdtaXhpbnMnO1xcclxcblxcclxcbi5yaWdodCB7XFxyXFxuICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuXFxyXFxuICAgJl9fd3JhcHBlciB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgJl9fY291bnRlciB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxODBweDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAjbWludXRlcyB7XFxyXFxuICAgICAgICAgZm9udC1zaXplOiAyMjBweDtcXHJcXG4gICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgICAgICAgZm9udC1zaXplOiAxNDBweDtcXHJcXG5cXHJcXG4gICAgICAgICAjbWludXRlcyB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxODBweDtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAmX19idXR0b24ge1xcclxcbiAgICAgIEBpbmNsdWRlIGJ0bigkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICY6ZGlzYWJsZWQge1xcclxcbiAgICAgICAgIG9wYWNpdHk6IDAuMztcXHJcXG4gICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgJl9fc3RyZWFrIHtcXHJcXG4gICAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/dXJsPWZhbHNlIS4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbnRlcmZhY2UgSUNvbmZpZyB7XHJcbiAgIHNlc3Npb25TZWNvbmRzOiBudW1iZXI7XHJcbiAgIHNob3J0QnJlYWtTZWNvbmRzOiBudW1iZXI7XHJcbiAgIGxvbmdCcmVha1NlY29uZHM6IG51bWJlcjtcclxuICAgbG9uZ0JyZWFrU3RlcDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb21vZG9ycm8ge1xyXG4gICBwcml2YXRlIGNvbmZpZzogSUNvbmZpZztcclxuICAgcHVibGljIGN1cnJlbnRTZWNvbmRzOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBzZXNzaW9uQ291bnRlcjogbnVtYmVyO1xyXG4gICBwdWJsaWMgaXNCcmFrZTogYm9vbGVhbjtcclxuICAgcHVibGljIG1pbnV0ZXM6IG51bWJlcjtcclxuICAgcHVibGljIHNlY29uZHM6IG51bWJlcjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHNlc3Npb25TZWM6IG51bWJlciwgc0JTZWM6IG51bWJlciwgbEJTZWM6IG51bWJlcikge1xyXG4gICAgICB0aGlzLmNvbmZpZyA9IHtcclxuICAgICAgICAgc2Vzc2lvblNlY29uZHM6IHNlc3Npb25TZWMsXHJcbiAgICAgICAgIHNob3J0QnJlYWtTZWNvbmRzOiBzQlNlYyxcclxuICAgICAgICAgbG9uZ0JyZWFrU2Vjb25kczogbEJTZWMsXHJcbiAgICAgICAgIGxvbmdCcmVha1N0ZXA6IDMsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuc2Vzc2lvbkNvdW50ZXIgPSAxO1xyXG4gICAgICB0aGlzLmlzQnJha2UgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jdXJyZW50U2Vjb25kcyA9IHNlc3Npb25TZWM7XHJcbiAgIH1cclxuXHJcbiAgIHNldEN1cnJlbnRTZWNvbmRzKCkge1xyXG4gICAgICB0aGlzLmlzQnJha2UgPSAhdGhpcy5pc0JyYWtlO1xyXG4gICAgICBpZiAodGhpcy5pc0JyYWtlKSB7XHJcbiAgICAgICAgIGlmICh0aGlzLnNlc3Npb25Db3VudGVyICUgdGhpcy5jb25maWcubG9uZ0JyZWFrU3RlcCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTZWNvbmRzID0gdGhpcy5jb25maWcubG9uZ0JyZWFrU2Vjb25kcztcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2Vjb25kcyA9IHRoaXMuY29uZmlnLnNob3J0QnJlYWtTZWNvbmRzO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIHRoaXMuc2Vzc2lvbkNvdW50ZXIrKztcclxuICAgICAgICAgdGhpcy5jdXJyZW50U2Vjb25kcyA9IHRoaXMuY29uZmlnLnNlc3Npb25TZWNvbmRzO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGRlY3JlbWVudFNlY29uZHMoKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTZWNvbmRzID09PSAwKSB7XHJcbiAgICAgICAgIHRoaXMuc2V0Q3VycmVudFNlY29uZHMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgdGhpcy5jdXJyZW50U2Vjb25kcy0tO1xyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJztcclxuaW1wb3J0IFBvbW9kb3JybyBmcm9tICcuL1BvbW9kb3Jybyc7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICBwb21vZG9ycm86IFBvbW9kb3JybztcclxuICAgdWk6IHtcclxuICAgICAgZm9ybTogSFRNTEZvcm1FbGVtZW50O1xyXG4gICAgICBzdGFydEJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgIHBhdXNlQnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgcmVzZXRCdG46IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICBjb250aW51ZUJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgIG1pbnV0ZXM6IEhUTUxTcGFuRWxlbWVudDtcclxuICAgICAgc2Vjb25kczogSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgICBtb2RhbDogSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGFsYXJtOiBIVE1MQXVkaW9FbGVtZW50O1xyXG4gICAgICBhbGFybUJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgIHN0cmVhazogSFRNTFNwYW5FbGVtZW50O1xyXG4gICB9O1xyXG4gICBpbnRlcnZhbDogbnVtYmVyO1xyXG4gICBpc1BvbW9kb3Jyb0luUHJvZ3Jlc3M6IGJvb2xlYW47XHJcbiAgIGlzUGF1c2VkOiBib29sZWFuO1xyXG5cclxuICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMudWkgPSB7XHJcbiAgICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKSEsXHJcbiAgICAgICAgIHN0YXJ0QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnRCdG4nKSEsXHJcbiAgICAgICAgIHBhdXNlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGF1c2VCdG4nKSEsXHJcbiAgICAgICAgIHJlc2V0QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXRCdG4nKSEsXHJcbiAgICAgICAgIGNvbnRpbnVlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGludWVCdG4nKSEsXHJcbiAgICAgICAgIG1pbnV0ZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaW51dGVzJykhLFxyXG4gICAgICAgICBzZWNvbmRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2Vjb25kcycpISxcclxuICAgICAgICAgbW9kYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpISxcclxuICAgICAgICAgYWxhcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGFybScpISxcclxuICAgICAgICAgYWxhcm1CdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGFybUJ0bicpISxcclxuICAgICAgICAgc3RyZWFrOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RyZWFrJykhLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5pc1BvbW9kb3Jyb0luUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xyXG4gICB9XHJcblxyXG4gICBpbml0KCkge1xyXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgIH1cclxuXHJcbiAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICB0aGlzLnVpLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHRoaXMuaGFuZGxlU3RhcnRDbGljayhlKSk7XHJcbiAgICAgIHRoaXMudWkucGF1c2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhhbmRsZVBhdXNlQ2xpY2soKSk7XHJcbiAgICAgIHRoaXMudWkucmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhhbmRsZVJlc2V0Q2xpY2soKSk7XHJcbiAgICAgIHRoaXMudWkuY29udGludWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhhbmRsZUNvbnRpbnVlQ2xpY2soKSk7XHJcbiAgICAgIHRoaXMudWkuYWxhcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnN0b3BBbGFybSgpKTtcclxuICAgfVxyXG5cclxuICAgdG9nZ2xlTW9kYWwoKSB7XHJcbiAgICAgIHRoaXMucGF1c2VVbnBhdXNlSW50ZXJ2YWwoKTtcclxuICAgICAgdGhpcy51aS5tb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgIH1cclxuXHJcbiAgIHNob3dUaW1lcigpIHtcclxuICAgICAgY29uc3QgbWluID1cclxuICAgICAgICAgdGhpcy5wb21vZG9ycm8uY3VycmVudFNlY29uZHMgPiA1OSA/IE1hdGguZmxvb3IodGhpcy5wb21vZG9ycm8uY3VycmVudFNlY29uZHMgLyA2MCkgOiAwO1xyXG5cclxuICAgICAgY29uc3Qgc2VjID0gbWluID09PSAwID8gdGhpcy5wb21vZG9ycm8uY3VycmVudFNlY29uZHMgOiB0aGlzLnBvbW9kb3Jyby5jdXJyZW50U2Vjb25kcyAlIDYwO1xyXG5cclxuICAgICAgdGhpcy51aS5taW51dGVzLmlubmVySFRNTCA9IG1pbiA+IDkgPyBtaW4udG9TdHJpbmcoKSA6IGAwJHttaW59YDtcclxuICAgICAgdGhpcy51aS5zZWNvbmRzLmlubmVySFRNTCA9IHNlYyA+IDkgPyBzZWMudG9TdHJpbmcoKSA6IGAwJHtzZWN9YDtcclxuICAgfVxyXG5cclxuICAgc3RhcnRJbnRlcnZhbCgpIHtcclxuICAgICAgdGhpcy5zaG93VGltZXIoKTtcclxuICAgICAgdGhpcy51aS5zdHJlYWsuaW5uZXJIVE1MID0gdGhpcy5wb21vZG9ycm8uc2Vzc2lvbkNvdW50ZXIudG9TdHJpbmcoKTtcclxuICAgICAgdGhpcy5pbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgIGlmICh0aGlzLnBvbW9kb3Jyby5jdXJyZW50U2Vjb25kcyA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnVpLmFsYXJtLnBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy51aS5hbGFybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTW9kYWwoKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB0aGlzLnBvbW9kb3Jyby5kZWNyZW1lbnRTZWNvbmRzKCk7XHJcbiAgICAgICAgIHRoaXMuc2hvd1RpbWVyKCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICB9XHJcblxyXG4gICBwYXVzZVVucGF1c2VJbnRlcnZhbCgpIHtcclxuICAgICAgdGhpcy5pc1BhdXNlZCA9ICF0aGlzLmlzUGF1c2VkO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaXNQYXVzZWQpIHtcclxuICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgaGFuZGxlU3RhcnRDbGljayhlOiBFdmVudCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHNlc3Npb25UaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRpbWVcIl06Y2hlY2tlZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IHNob3J0QlRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAnaW5wdXRbbmFtZT1cInNob3J0LWJyZWFrXCJdOmNoZWNrZWQnLFxyXG4gICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGxvbmdCVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICdpbnB1dFtuYW1lPVwibG9uZy1icmVha1wiXTpjaGVja2VkJyxcclxuICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICB0aGlzLnBvbW9kb3JybyA9IG5ldyBQb21vZG9ycm8oXHJcbiAgICAgICAgIHBhcnNlSW50KHNlc3Npb25UaW1lLnZhbHVlKSxcclxuICAgICAgICAgcGFyc2VJbnQoc2hvcnRCVGltZS52YWx1ZSksXHJcbiAgICAgICAgIHBhcnNlSW50KGxvbmdCVGltZS52YWx1ZSksXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc3dpdGNoRGlzYWJsZWRCdXR0b25zKCk7XHJcbiAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xyXG4gICB9XHJcblxyXG4gICBoYW5kbGVQYXVzZUNsaWNrKCkge1xyXG4gICAgICB0aGlzLnBhdXNlVW5wYXVzZUludGVydmFsKCk7XHJcbiAgICAgIHRoaXMudWkucGF1c2VCdG4uaW5uZXJIVE1MID0gdGhpcy5pc1BhdXNlZCA/ICdVTlBBVVNFJyA6ICdQQVVTRSc7XHJcbiAgIH1cclxuXHJcbiAgIGhhbmRsZVJlc2V0Q2xpY2soKSB7XHJcbiAgICAgIHRoaXMuc3dpdGNoRGlzYWJsZWRCdXR0b25zKCk7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgICAgIHRoaXMudWkubW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudWkucGF1c2VCdG4uaW5uZXJIVE1MID0gdGhpcy5pc1BhdXNlZCA/ICdVTlBBVVNFJyA6ICdQQVVTRSc7XHJcbiAgICAgIHRoaXMudWkubWludXRlcy5pbm5lckhUTUwgPSAnMDAnO1xyXG4gICAgICB0aGlzLnVpLnNlY29uZHMuaW5uZXJIVE1MID0gJzAwJztcclxuICAgICAgdGhpcy51aS5zdHJlYWsuaW5uZXJIVE1MID0gJzAnO1xyXG4gICAgICB0aGlzLnVpLmFsYXJtLnBhdXNlKCk7XHJcbiAgIH1cclxuXHJcbiAgIGhhbmRsZUNvbnRpbnVlQ2xpY2soKSB7XHJcbiAgICAgIC8vIHRoaXMucGF1c2VVbnBhdXNlSW50ZXJ2YWwoKTtcclxuICAgICAgdGhpcy50b2dnbGVNb2RhbCgpO1xyXG4gICAgICB0aGlzLnN0b3BBbGFybSgpO1xyXG4gICB9XHJcblxyXG4gICBzd2l0Y2hEaXNhYmxlZEJ1dHRvbnMoKSB7XHJcbiAgICAgIHRoaXMuaXNQb21vZG9ycm9JblByb2dyZXNzID0gIXRoaXMuaXNQb21vZG9ycm9JblByb2dyZXNzO1xyXG5cclxuICAgICAgdGhpcy51aS5zdGFydEJ0bi5kaXNhYmxlZCA9IHRoaXMuaXNQb21vZG9ycm9JblByb2dyZXNzO1xyXG4gICAgICB0aGlzLnVpLnBhdXNlQnRuLmRpc2FibGVkID0gIXRoaXMuaXNQb21vZG9ycm9JblByb2dyZXNzO1xyXG4gICAgICB0aGlzLnVpLnJlc2V0QnRuLmRpc2FibGVkID0gIXRoaXMuaXNQb21vZG9ycm9JblByb2dyZXNzO1xyXG4gICB9XHJcblxyXG4gICBzdG9wQWxhcm0oKSB7XHJcbiAgICAgIHRoaXMudWkuYWxhcm0ucGF1c2UoKTtcclxuICAgICAgdGhpcy51aS5hbGFybUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgIH1cclxufVxyXG5cclxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xyXG5hcHAuaW5pdCgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9