/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.styl */ \"./src/index.styl\");\n/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.pug */ \"./src/index.pug\");\n/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_pug__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Root = function Root() {\n  _classCallCheck(this, Root);\n\n  document.body.innerHTML = _index_pug__WEBPACK_IMPORTED_MODULE_1___default().call(this, {\n    HW: 'Hello World!'\n  });\n};\n\n_defineProperty(Root, \"DOM\", void 0);\n\nwindow.addEventListener('load', function () {\n  return new Root();\n});\n\n//# sourceURL=webpack://audiowars.space/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/stylus-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/index.styl":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/stylus-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/index.styl ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ \"./node_modules/css-loader/dist/runtime/cssWithMappingToString.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _img_audiowars_white_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/audiowars-white.svg */ \"./src/img/audiowars-white.svg\");\n// Imports\n;\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_img_audiowars_white_svg__WEBPACK_IMPORTED_MODULE_3__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  font-family: 'Roboto Condensed', sans-serif;\\n  font-variant: petite-caps; }\\n\\nhtml {\\n  background-color: #000;\\n  color: #fff; }\\n\\nbody {\\n  opacity: 0;\\n  overflow-x: hidden;\\n  animation: AnimBody 1000ms ease-in-out 100ms both;\\n  cursor: default; }\\n\\nhtml::-webkit-scrollbar,\\nbody::-webkit-scrollbar {\\n  display: none; }\\n\\nhtml,\\nbody {\\n  -ms-overflow-style: none;\\n  scrollbar-width: none; }\\n\\nbutton[goto-slide] {\\n  position: relative;\\n  margin: inherit;\\n  padding: inherit;\\n  border: inherit;\\n  background: inherit;\\n  text-decoration: underline;\\n  font-size: inherit;\\n  color: inherit;\\n  cursor: pointer;\\n  transition: all 100ms ease; }\\n\\nbutton[goto-slide]:hover {\\n  text-decoration-color: transparent; }\\n\\n@-moz-keyframes AnimBody {\\n  from {\\n    opacity: 0; }\\n  to {\\n    opacity: 1; } }\\n\\n@-webkit-keyframes AnimBody {\\n  from {\\n    opacity: 0; }\\n  to {\\n    opacity: 1; } }\\n\\n@-o-keyframes AnimBody {\\n  from {\\n    opacity: 0; }\\n  to {\\n    opacity: 1; } }\\n\\n@keyframes AnimBody {\\n  from {\\n    opacity: 0; }\\n  to {\\n    opacity: 1; } }\\n\\n.root {\\n  min-height: 100vh; }\\n\\n.fx-show {\\n  opacity: 0;\\n  transition: all 250ms ease; }\\n\\n.fx-show.fx-show-active {\\n  opacity: 1; }\\n\\n.fx-show.fx-500ms,\\n.fx-show.fx-500ms .fx-show {\\n  transition-duration: 500ms; }\\n\\n.fx-show.fx-500ms,\\n.fx-show.fx-2000ms .fx-show {\\n  transition-duration: 2000ms; }\\n\\n.main-background {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100vw;\\n  height: 100vh;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-position: center center;\\n  background-repeat: no-repeat;\\n  background-size: 20% 20%;\\n  opacity: 0.1; }\\n\\n.three-background {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100vw;\\n  height: 100vh; }\\n\\n.three-background canvas {\\n  width: 100%;\\n  height: 100%; }\\n\\n.language {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  grid-gap: 1px;\\n  position: fixed;\\n  top: 10px;\\n  right: 10px;\\n  z-index: 210; }\\n\\n.language button {\\n  width: 100%;\\n  border: unset;\\n  background-color: rgba(255, 255, 255, 0.2);\\n  color: #fff;\\n  overflow: hidden;\\n  max-height: 0;\\n  padding: 0;\\n  font-size: 0;\\n  opacity: 0;\\n  transition: all 300ms ease; }\\n\\n.language button:hover {\\n  background-color: rgba(255, 255, 255, 0.4); }\\n\\n.language:hover button,\\n.language button.current {\\n  max-height: 100%;\\n  padding: 10px 30px;\\n  font-size: 16px;\\n  cursor: pointer;\\n  opacity: 1; }\\n\\n.language button.current {\\n  padding: 10px;\\n  background-color: rgba(255, 255, 255, 0.4);\\n  cursor: default; }\\n\\n.slide-list {\\n  position: relative;\\n  z-index: 100; }\\n\\n.slide-item {\\n  display: grid;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100vw;\\n  min-height: 100vh; }\\n\\nslide-name {\\n  display: none; }\\n\\n.slide-content {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center; }\\n\\n.slide-indicator-wrap {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: fixed;\\n  top: 0;\\n  right: 32px;\\n  bottom: 0;\\n  z-index: 200;\\n  width: 48px; }\\n\\n.slide-indicator-list,\\n.slide-indicator-list * {\\n  transition: all 200ms ease; }\\n\\n.slide-indicator-list {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  grid-gap: 1px;\\n  width: 100%; }\\n\\n.slide-indicator-item {\\n  position: relative;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  height: 32px;\\n  cursor: pointer;\\n  opacity: 0.5; }\\n\\n.slide-indicator-item .title {\\n  position: absolute;\\n  right: 0;\\n  white-space: nowrap;\\n  opacity: 0;\\n  pointer-events: none; }\\n\\n.slide-indicator-item .point {\\n  width: 8px;\\n  height: 8px;\\n  border-radius: 16px;\\n  background-color: #fff;\\n  filter: drop-shadow(0 0 1px #fff); }\\n\\n.slide-indicator-list:hover {\\n  opacity: 1; }\\n\\n.slide-indicator-list:hover .slide-indicator-item {\\n  background-color: rgba(255, 255, 255, 0.2); }\\n\\n.slide-indicator-item.active,\\n.slide-indicator-item:hover {\\n  opacity: 1; }\\n\\n.slide-indicator-item.active .title {\\n  right: 80%;\\n  opacity: 1; }\\n\\n.slide-indicator-list:hover .title {\\n  right: 120%;\\n  opacity: 1; }\\n\\n.slide-indicator-item.active .point {\\n  filter: drop-shadow(0 0 5px #fff); }\\n\\n.slide-indicator-item:hover .point {\\n  width: 12px;\\n  height: 12px; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./src/index.styl\"],\"names\":[],\"mappings\":\"AACA;EACE,2CAA2C;EAC3C,yBAAyB,EAAA;;AAE3B;EACE,sBAAsB;EACtB,WAAW,EAAA;;AAEb;EACE,UAAU;EACV,kBAAkB;EAClB,iDAAiD;EACjD,eAAe,EAAA;;AAEjB;;EAEE,aAAa,EAAA;;AAEf;;EAEE,wBAAwB;EACxB,qBAAqB,EAAA;;AAEvB;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,0BAA0B;EAC1B,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf,0BAA0B,EAAA;;AAE5B;EACE,kCAAkC,EAAA;;AAEpC;EACE;IACE,UAAU,EAAA;EAEZ;IACE,UAAU,EAAA,EAAA;;AAGd;EACE;IACE,UAAU,EAAA;EAEZ;IACE,UAAU,EAAA,EAAA;;AAGd;EACE;IACE,UAAU,EAAA;EAEZ;IACE,UAAU,EAAA,EAAA;;AAGd;EACE;IACE,UAAU,EAAA;EAEZ;IACE,UAAU,EAAA,EAAA;;AAGd;EACE,iBAAiB,EAAA;;AAEnB;EACE,UAAU;EACV,0BAA0B,EAAA;;AAE5B;EACE,UAAU,EAAA;;AAEZ;;EAEE,0BAA0B,EAAA;;AAE5B;;EAEE,2BAA2B,EAAA;;AAE7B;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,yDAAgD;EAChD,kCAAkC;EAClC,4BAA4B;EAC5B,wBAAwB;EACxB,YAAY,EAAA;;AAEd;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa,EAAA;;AAEf;EACE,WAAW;EACX,YAAY,EAAA;;AAEd;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,SAAS;EACT,WAAW;EACX,YAAY,EAAA;;AAEd;EACE,WAAW;EACX,aAAa;EACb,0CAAuC;EACvC,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,UAAU;EACV,YAAY;EACZ,UAAU;EACV,0BAA0B,EAAA;;AAE5B;EACE,0CAAuC,EAAA;;AAEzC;;EAEE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,UAAU,EAAA;;AAEZ;EACE,aAAa;EACb,0CAAuC;EACvC,eAAe,EAAA;;AAEjB;EACE,kBAAkB;EAClB,YAAY,EAAA;;AAEd;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB,EAAA;;AAEnB;EACE,aAAa,EAAA;;AAEf;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB,EAAA;;AAErB;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,MAAM;EACN,WAAW;EACX,SAAS;EACT,YAAY;EACZ,WAAW,EAAA;;AAEb;;EAEE,0BAA0B,EAAA;;AAE5B;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,WAAW,EAAA;;AAEb;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,YAAY,EAAA;;AAEd;EACE,kBAAkB;EAClB,QAAQ;EACR,mBAAmB;EACnB,UAAU;EACV,oBAAoB,EAAA;;AAEtB;EACE,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,sBAAsB;EACtB,iCAAiC,EAAA;;AAEnC;EACE,UAAU,EAAA;;AAEZ;EACE,0CAAuC,EAAA;;AAEzC;;EAEE,UAAU,EAAA;;AAEZ;EACE,UAAU;EACV,UAAU,EAAA;;AAEZ;EACE,WAAW;EACX,UAAU,EAAA;;AAEZ;EACE,iCAAiC,EAAA;;AAEnC;EACE,WAAW;EACX,YAAY,EAAA\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap\\\");\\n* {\\n  font-family: 'Roboto Condensed', sans-serif;\\n  font-variant: petite-caps;\\n}\\nhtml {\\n  background-color: #000;\\n  color: #fff;\\n}\\nbody {\\n  opacity: 0;\\n  overflow-x: hidden;\\n  animation: AnimBody 1000ms ease-in-out 100ms both;\\n  cursor: default;\\n}\\nhtml::-webkit-scrollbar,\\nbody::-webkit-scrollbar {\\n  display: none;\\n}\\nhtml,\\nbody {\\n  -ms-overflow-style: none /* IE and Edge */;\\n  scrollbar-width: none /* Firefox */;\\n}\\nbutton[goto-slide] {\\n  position: relative;\\n  margin: inherit;\\n  padding: inherit;\\n  border: inherit;\\n  background: inherit;\\n  text-decoration: underline;\\n  font-size: inherit;\\n  color: inherit;\\n  cursor: pointer;\\n  transition: all 100ms ease;\\n}\\nbutton[goto-slide]:hover {\\n  text-decoration-color: transparent;\\n}\\n@-moz-keyframes AnimBody {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n@-webkit-keyframes AnimBody {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n@-o-keyframes AnimBody {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n@keyframes AnimBody {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n.root {\\n  min-height: 100vh;\\n}\\n.fx-show {\\n  opacity: 0;\\n  transition: all 250ms ease;\\n}\\n.fx-show.fx-show-active {\\n  opacity: 1;\\n}\\n.fx-show.fx-500ms,\\n.fx-show.fx-500ms .fx-show {\\n  transition-duration: 500ms;\\n}\\n.fx-show.fx-500ms,\\n.fx-show.fx-2000ms .fx-show {\\n  transition-duration: 2000ms;\\n}\\n.main-background {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100vw;\\n  height: 100vh;\\n  background-image: url(\\\"img/audiowars-white.svg\\\");\\n  background-position: center center;\\n  background-repeat: no-repeat;\\n  background-size: 20% 20%;\\n  opacity: 0.1;\\n}\\n.three-background {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100vw;\\n  height: 100vh;\\n}\\n.three-background canvas {\\n  width: 100%;\\n  height: 100%;\\n}\\n.language {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  grid-gap: 1px;\\n  position: fixed;\\n  top: 10px;\\n  right: 10px;\\n  z-index: 210;\\n}\\n.language button {\\n  width: 100%;\\n  border: unset;\\n  background-color: rgba(255,255,255,0.2);\\n  color: #fff;\\n  overflow: hidden;\\n  max-height: 0;\\n  padding: 0;\\n  font-size: 0;\\n  opacity: 0;\\n  transition: all 300ms ease;\\n}\\n.language button:hover {\\n  background-color: rgba(255,255,255,0.4);\\n}\\n.language:hover button,\\n.language button.current {\\n  max-height: 100%;\\n  padding: 10px 30px;\\n  font-size: 16px;\\n  cursor: pointer;\\n  opacity: 1;\\n}\\n.language button.current {\\n  padding: 10px;\\n  background-color: rgba(255,255,255,0.4);\\n  cursor: default;\\n}\\n.slide-list {\\n  position: relative;\\n  z-index: 100;\\n}\\n.slide-item {\\n  display: grid;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100vw;\\n  min-height: 100vh;\\n}\\nslide-name {\\n  display: none;\\n}\\n.slide-content {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.slide-indicator-wrap {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: fixed;\\n  top: 0;\\n  right: 32px;\\n  bottom: 0;\\n  z-index: 200;\\n  width: 48px;\\n}\\n.slide-indicator-list,\\n.slide-indicator-list * {\\n  transition: all 200ms ease;\\n}\\n.slide-indicator-list {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  grid-gap: 1px;\\n  width: 100%;\\n}\\n.slide-indicator-item {\\n  position: relative;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  height: 32px;\\n  cursor: pointer;\\n  opacity: 0.5;\\n}\\n.slide-indicator-item .title {\\n  position: absolute;\\n  right: 0;\\n  white-space: nowrap;\\n  opacity: 0;\\n  pointer-events: none;\\n}\\n.slide-indicator-item .point {\\n  width: 8px;\\n  height: 8px;\\n  border-radius: 16px;\\n  background-color: #fff;\\n  filter: drop-shadow(0 0 1px #fff);\\n}\\n.slide-indicator-list:hover {\\n  opacity: 1;\\n}\\n.slide-indicator-list:hover .slide-indicator-item {\\n  background-color: rgba(255,255,255,0.2);\\n}\\n.slide-indicator-item.active,\\n.slide-indicator-item:hover {\\n  opacity: 1;\\n}\\n.slide-indicator-item.active .title {\\n  right: 80%;\\n  opacity: 1;\\n}\\n.slide-indicator-list:hover .title {\\n  right: 120%;\\n  opacity: 1;\\n}\\n.slide-indicator-item.active .point {\\n  filter: drop-shadow(0 0 5px #fff);\\n}\\n.slide-indicator-item:hover .point {\\n  width: 12px;\\n  height: 12px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://audiowars.space/./src/index.styl?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B2%5D!./node_modules/stylus-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B3%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://audiowars.space/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 15:0-14 */
/***/ ((module) => {

"use strict";
eval("\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nmodule.exports = function cssWithMappingToString(item) {\n  var _item = _slicedToArray(item, 4),\n      content = _item[1],\n      cssMapping = _item[3];\n\n  if (typeof btoa === 'function') {\n    // eslint-disable-next-line no-undef\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    var sourceMapping = \"/*# \".concat(data, \" */\");\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n};\n\n//# sourceURL=webpack://audiowars.space/./node_modules/css-loader/dist/runtime/cssWithMappingToString.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://audiowars.space/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/img/audiowars-white.svg":
/*!*************************************!*\
  !*** ./src/img/audiowars-white.svg ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/cfd4d9edd538bc3a7a43100830b8b6ab.svg\");\n\n//# sourceURL=webpack://audiowars.space/./src/img/audiowars-white.svg?");

/***/ }),

/***/ "./src/index.pug":
/*!***********************!*\
  !*** ./src/index.pug ***!
  \***********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pug = __webpack_require__(/*! !../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"root\\\"\\u003E\" + (null == (pug_interp = __webpack_require__(/*! ./views/three-background.pug */ \"./src/views/three-background.pug\").call(this, locals)) ? \"\" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ./views/language-selector.pug */ \"./src/views/language-selector.pug\").call(this, locals)) ? \"\" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ./views/slide-list.pug */ \"./src/views/slide-list.pug\").call(this, locals)) ? \"\" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ./views/slide-indicator-list.pug */ \"./src/views/slide-indicator-list.pug\").call(this, locals)) ? \"\" : pug_interp) + \"\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack://audiowars.space/./src/index.pug?");

/***/ }),

/***/ "./src/views/language-selector.pug":
/*!*****************************************!*\
  !*** ./src/views/language-selector.pug ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"language\\\"\\u003E\\u003Cbutton type=\\\"button\\\" data-lang=\\\"en\\\"\\u003EEnglish\\u003C\\u002Fbutton\\u003E\\u003Cbutton type=\\\"button\\\" data-lang=\\\"ru\\\"\\u003EРусский\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack://audiowars.space/./src/views/language-selector.pug?");

/***/ }),

/***/ "./src/views/slide-indicator-list.pug":
/*!********************************************!*\
  !*** ./src/views/slide-indicator-list.pug ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"slide-indicator-wrap\\\"\\u003E\\u003Cdiv class=\\\"slide-indicator-list\\\"\\u003E\\u003Cdiv class=\\\"slide-indicator-item template\\\"\\u003E\\u003Cdiv class=\\\"title\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"point\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack://audiowars.space/./src/views/slide-indicator-list.pug?");

/***/ }),

/***/ "./src/views/slide-list.pug":
/*!**********************************!*\
  !*** ./src/views/slide-list.pug ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"slide-list\\\"\\u003E\\u003Cdiv class=\\\"slide-item\\\" id=\\\"Intro\\\"\\u003E\\u003Cslide-name\\u003E\\u003Ctext key=\\\"Intro\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fslide-name\\u003E\\u003Cdiv class=\\\"slide-content text-center fx-show\\\"\\u003E\\u003Cdiv class=\\\"text-large fx-show\\\" fx-show-up\\u003E\\u003Csmall\\u003E\\u003Ctext key=\\\"Welcome\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fsmall\\u003E\\u003Csmall class=\\\"fx-show\\\" fx-show-up\\u003E\\u003Ctext key=\\\"to\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fsmall\\u003E\\u003Cbr\\u003E\\u003Cspan class=\\\"fx-show\\\" fx-show-up=\\\"2\\\"\\u003E\\u003Ctext key=\\\"ProjectTitle\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"text-large mar-top-5 fx-show\\\" fx-show-up\\u003E\\u003Cspan\\u003E\\u003Csmall class=\\\"fx-show\\\"\\u003E\\u003Ctext key=\\\"Project\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fsmall\\u003E\\u003Csmall class=\\\"fx-show\\\" fx-show-up\\u003E\\u003C\\u002Fsmall\\u003E\\u003Cspan\\u003E&amp;\\u003C\\u002Fspan\\u003E\\u003Csmall class=\\\"fx-show\\\" fx-show-up\\u003E\\u003Ctext key=\\\"Portfolio\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fsmall\\u003E\\u003Cbr\\u003E\\u003Cspan class=\\\"fx-show\\\" fx-show-up=\\\"2\\\"\\u003E\\u003Cbutton type=\\\"button\\\" goto-slide=\\\"About\\\"\\u003E\\u003Ctext key=\\\"AuthorNickname\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"slide-item\\\" id=\\\"About\\\"\\u003E\\u003Cslide-name\\u003E\\u003Ctext key=\\\"About\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fslide-name\\u003E\\u003Cdiv class=\\\"slide-content\\\"\\u003E\\u003Cdiv class=\\\"text-large fx-show\\\"\\u003E\\u003Cspan class=\\\"fx-show\\\" fx-show-up\\u003E\\u003Ctext key=\\\"About\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"fx-show\\\"\\u003E\\u003Cspan class=\\\"fx-show\\\" fx-show-up\\u003E\\u003Cspan class=\\\"fx-show\\\" fx-show-up\\u003E\\u003Ctext key=\\\"My\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"fx-show\\\" fx-show-up\\u003E\\u003Ctext key=\\\"name\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"fx-show\\\" fx-show-up\\u003E\\u003Ctext key=\\\"is\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"fx-show\\\" fx-show-up\\u003E\\u003Ctext key=\\\"Maxim\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"fx-show\\\" fx-show-up\\u003E\\u003Ctext key=\\\"Radul\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"slide-item\\\"\\u003E\\u003Cslide-name\\u003E\\u003Cspan\\u003E\\u003Ctext key=\\\"Hobby\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003Cspan\\u003E&amp;\\u003C\\u002Fspan\\u003E\\u003Ctext key=\\\"Interests\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fslide-name\\u003E\\u003Cdiv class=\\\"slide-content\\\"\\u003E\\u003Cdiv class=\\\"text-large fx-show\\\"\\u003E\\u003Cspan class=\\\"fx-show\\\" fx-show-up\\u003E\\u003Ctext key=\\\"Hobby\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"fx-show\\\" fx-show-up\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"fx-show\\\" fx-show-up\\u003E\\u003Ctext key=\\\"Interests\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"slide-item\\\"\\u003E\\u003Cslide-name\\u003E\\u003Cspan\\u003E\\u003Ctext key=\\\"Plans\\\"\\u003E\\u003Cspan\\u003E&amp;\\u003C\\u002Fspan\\u003E\\u003Ctext key=\\\"Objectives\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fslide-name\\u003E\\u003Cdiv class=\\\"slide-content\\\"\\u003E\\u003Cdiv class=\\\"text-large fx-show\\\"\\u003E\\u003Cspan class=\\\"fx-show\\\" fx-show-up\\u003E\\u003Ctext key=\\\"Plans\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"fx-show\\\" fx-show-up\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"fx-show\\\" fx-show-up\\u003E\\u003Ctext key=\\\"Objectives\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"slide-item\\\"\\u003E\\u003Cslide-name\\u003E\\u003Ctext key=\\\"Projects\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fslide-name\\u003E\\u003Cdiv class=\\\"slide-content\\\"\\u003E\\u003Cdiv class=\\\"text-large fx-show\\\"\\u003E\\u003Cspan class=\\\"fx-show\\\" fx-show-up\\u003E\\u003Ctext key=\\\"Projects\\\"\\u003E\\u003C\\u002Ftext\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack://audiowars.space/./src/views/slide-list.pug?");

/***/ }),

/***/ "./src/views/three-background.pug":
/*!****************************************!*\
  !*** ./src/views/three-background.pug ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"main-background\\\"\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack://audiowars.space/./src/views/three-background.pug?");

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/*! default exports */
/*! export attr [provided] [no usage info] [missing usage info prevents renaming] */
/*! export attrs [provided] [no usage info] [missing usage info prevents renaming] */
/*! export classes [provided] [no usage info] [missing usage info prevents renaming] */
/*! export escape [provided] [no usage info] [missing usage info prevents renaming] */
/*! export merge [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rethrow [provided] [no usage info] [missing usage info prevents renaming] */
/*! export style [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;\n      var valB = pug_style(b[key]);\n      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n}\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '',\n    className,\n    padding = '',\n    escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '',\n    padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    return val + '';\n  }\n}\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (\n    val === false ||\n    val == null ||\n    (!val && (key === 'class' || key === 'style'))\n  ) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  var type = typeof val;\n  if (\n    (type === 'object' || type === 'function') &&\n    typeof val.toJSON === 'function'\n  ) {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + \"='\" + val.replace(/'/g, '&#39;') + \"'\";\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n}\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse) {\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n}\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html) {\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34:\n        escape = '&quot;';\n        break;\n      case 38:\n        escape = '&amp;';\n        break;\n      case 60:\n        escape = '&lt;';\n        break;\n      case 62:\n        escape = '&gt;';\n        break;\n      default:\n        continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n}\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str) {\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || __webpack_require__(/*! fs */ \"?65c5\").readFileSync(filename, 'utf8');\n  } catch (ex) {\n    pug_rethrow(err, null, lineno);\n  }\n  var context = 3,\n    lines = str.split('\\n'),\n    start = Math.max(lineno - context, 0),\n    end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines\n    .slice(start, end)\n    .map(function(line, i) {\n      var curr = i + start + 1;\n      return (curr == lineno ? '  > ' : '    ') + curr + '| ' + line;\n    })\n    .join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  try {\n    err.message =\n      (filename || 'Pug') +\n      ':' +\n      lineno +\n      '\\n' +\n      context +\n      '\\n\\n' +\n      err.message;\n  } catch (e) {}\n  throw err;\n}\n\n\n//# sourceURL=webpack://audiowars.space/./node_modules/pug-runtime/index.js?");

/***/ }),

/***/ "./src/index.styl":
/*!************************!*\
  !*** ./src/index.styl ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_stylus_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_index_styl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/stylus-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./index.styl */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/stylus-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/index.styl\");\n;\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_stylus_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_index_styl__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_stylus_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_index_styl__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://audiowars.space/./src/index.styl?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://audiowars.space/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "?65c5":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://audiowars.space/fs_(ignored)?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;