/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: Verdana, Geneva, Tahoma, sans-serif; }\\n\\nh1 {\\n  font-size: 42px;\\n  color: #ffff18; }\\n\\n#board {\\n  width: 400px;\\n  height: 800px;\\n  border: solid 1px white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  margin-top: 56px; }\\n\\n.next-diplayer-container {\\n  width: 256px;\\n  height: 236px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  margin-top: 12px;\\n  padding: 0px 15px;\\n  background-color: #1c1c2c;\\n  border-radius: 8px; }\\n\\n.next-typo {\\n  font-weight: 800;\\n  font-size: 33px;\\n  color: #e7dfea; }\\n\\n#next-display {\\n  width: 200px;\\n  height: 100px;\\n  display: flex;\\n  flex-wrap: wrap;\\n  border: solid 1px white;\\n  margin-left: 25px; }\\n\\n.min-cell {\\n  width: 20px;\\n  height: 20px;\\n  border-top: solid 1px rgba(255, 255, 255, 0.03);\\n  border-left: solid 1px rgba(255, 255, 255, 0.03);\\n  border-bottom: solid 2px rgba(0, 0, 0, 0.03);\\n  border-right: solid 2px rgba(0, 0, 0, 0.03);\\n  box-sizing: border-box;\\n  box-shadow: inset 2px 2px 2px rgba(255, 255, 255, 0.05), inset -2px -2px 2px rgba(0, 0, 0, 0.02); }\\n\\n#taken {\\n  border: none;\\n  box-shadow: none;\\n  width: 0;\\n  height: 0; }\\n\\n.blank-cell {\\n  width: 40px;\\n  height: 40px;\\n  border-top: solid 1px rgba(255, 255, 255, 0.03);\\n  border-left: solid 1px rgba(255, 255, 255, 0.03);\\n  border-bottom: solid 2px rgba(0, 0, 0, 0.03);\\n  border-right: solid 2px rgba(0, 0, 0, 0.03);\\n  box-sizing: border-box;\\n  box-shadow: inset 2px 2px 2px rgba(255, 255, 255, 0.05), inset -2px -2px 2px rgba(0, 0, 0, 0.02);\\n  background-color: #222430; }\\n\\n.cell {\\n  width: 40px;\\n  height: 40px; }\\n\\n.o-cell {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-top: solid 1px rgba(255, 255, 255, 0.6);\\n  border-left: solid 1px rgba(255, 255, 255, 0.6);\\n  border-bottom: solid 2px rgba(0, 0, 0, 0.3);\\n  border-right: solid 2px rgba(0, 0, 0, 0.3);\\n  box-sizing: border-box;\\n  box-shadow: inset 4px 4px 4px rgba(255, 255, 255, 0.25), inset 4px -4px 4px rgba(0, 0, 50, 0.2);\\n  background-color: #ff6666; }\\n  .o-cell div {\\n    height: 24px;\\n    width: 24px;\\n    opacity: 0.8;\\n    mix-blend-mode: lighten; }\\n  .o-cell div {\\n    background-color: #ffadad; }\\n\\n.i-cell {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-top: solid 1px rgba(255, 255, 255, 0.6);\\n  border-left: solid 1px rgba(255, 255, 255, 0.6);\\n  border-bottom: solid 2px rgba(0, 0, 0, 0.3);\\n  border-right: solid 2px rgba(0, 0, 0, 0.3);\\n  box-sizing: border-box;\\n  box-shadow: inset 4px 4px 4px rgba(255, 255, 255, 0.25), inset 4px -4px 4px rgba(0, 0, 50, 0.2);\\n  background-color: #ccff66; }\\n  .i-cell div {\\n    height: 24px;\\n    width: 24px;\\n    opacity: 0.8;\\n    mix-blend-mode: lighten; }\\n  .i-cell div {\\n    background-color: #e9ffbe; }\\n\\n.l-cell {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-top: solid 1px rgba(255, 255, 255, 0.6);\\n  border-left: solid 1px rgba(255, 255, 255, 0.6);\\n  border-bottom: solid 2px rgba(0, 0, 0, 0.3);\\n  border-right: solid 2px rgba(0, 0, 0, 0.3);\\n  box-sizing: border-box;\\n  box-shadow: inset 4px 4px 4px rgba(255, 255, 255, 0.25), inset 4px -4px 4px rgba(0, 0, 50, 0.2);\\n  background-color: #e8ebf7; }\\n  .l-cell div {\\n    height: 24px;\\n    width: 24px;\\n    opacity: 0.8;\\n    mix-blend-mode: lighten; }\\n  .l-cell div {\\n    background-color: #a1acd6; }\\n\\n.j-cell {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-top: solid 1px rgba(255, 255, 255, 0.6);\\n  border-left: solid 1px rgba(255, 255, 255, 0.6);\\n  border-bottom: solid 2px rgba(0, 0, 0, 0.3);\\n  border-right: solid 2px rgba(0, 0, 0, 0.3);\\n  box-sizing: border-box;\\n  box-shadow: inset 4px 4px 4px rgba(255, 255, 255, 0.25), inset 4px -4px 4px rgba(0, 0, 50, 0.2);\\n  background-color: #eca400; }\\n  .j-cell div {\\n    height: 24px;\\n    width: 24px;\\n    opacity: 0.8;\\n    mix-blend-mode: lighten; }\\n  .j-cell div {\\n    background-color: #fccf65; }\\n\\n.s-cell {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-top: solid 1px rgba(255, 255, 255, 0.6);\\n  border-left: solid 1px rgba(255, 255, 255, 0.6);\\n  border-bottom: solid 2px rgba(0, 0, 0, 0.3);\\n  border-right: solid 2px rgba(0, 0, 0, 0.3);\\n  box-sizing: border-box;\\n  box-shadow: inset 4px 4px 4px rgba(255, 255, 255, 0.25), inset 4px -4px 4px rgba(0, 0, 50, 0.2);\\n  background-color: #357ded; }\\n  .s-cell div {\\n    height: 24px;\\n    width: 24px;\\n    opacity: 0.8;\\n    mix-blend-mode: lighten; }\\n  .s-cell div {\\n    background-color: #76a6f4; }\\n\\n.z-cell {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-top: solid 1px rgba(255, 255, 255, 0.6);\\n  border-left: solid 1px rgba(255, 255, 255, 0.6);\\n  border-bottom: solid 2px rgba(0, 0, 0, 0.3);\\n  border-right: solid 2px rgba(0, 0, 0, 0.3);\\n  box-sizing: border-box;\\n  box-shadow: inset 4px 4px 4px rgba(255, 255, 255, 0.25), inset 4px -4px 4px rgba(0, 0, 50, 0.2);\\n  background-color: #e2adf2; }\\n  .z-cell div {\\n    height: 24px;\\n    width: 24px;\\n    opacity: 0.8;\\n    mix-blend-mode: lighten; }\\n  .z-cell div {\\n    background-color: #f8e1ff; }\\n\\n.t-cell {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-top: solid 1px rgba(255, 255, 255, 0.6);\\n  border-left: solid 1px rgba(255, 255, 255, 0.6);\\n  border-bottom: solid 2px rgba(0, 0, 0, 0.3);\\n  border-right: solid 2px rgba(0, 0, 0, 0.3);\\n  box-sizing: border-box;\\n  box-shadow: inset 4px 4px 4px rgba(255, 255, 255, 0.25), inset 4px -4px 4px rgba(0, 0, 50, 0.2);\\n  background-color: #61e8e1; }\\n  .t-cell div {\\n    height: 24px;\\n    width: 24px;\\n    opacity: 0.8;\\n    mix-blend-mode: lighten; }\\n  .t-cell div {\\n    background-color: #b2fefa; }\\n\\n.nav {\\n  display: flex;\\n  width: 256px;\\n  align-items: center;\\n  justify-content: space-between; }\\n\\n#app {\\n  width: 100vw;\\n  height: 100vh;\\n  display: flex;\\n  background-color: #2c2c33;\\n  color: white; }\\n\\n.button-container {\\n  width: 256px;\\n  display: flex; }\\n\\n.head-container {\\n  margin: 0px 12px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center; }\\n\\n#start-game-button {\\n  height: 56px;\\n  width: 128px;\\n  background-color: rgba(0, 0, 0, 0.025);\\n  color: #fdfdff;\\n  border: none;\\n  border-radius: 6px;\\n  font-size: 24px;\\n  font-style: normal;\\n  transition: 200ms; }\\n  #start-game-button:hover {\\n    background-color: rgba(20, 20, 200, 0.2);\\n    cursor: pointer; }\\n  #start-game-button:focus {\\n    border: none;\\n    background-color: rgba(20, 35, 150, 0.5);\\n    box-shadow: \\\"none\\\";\\n    display: inline-block; }\\n\\n.score {\\n  width: 96px; }\\n\\nhtml,\\nbody,\\ndiv {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tetrisjs/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://tetrisjs/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tetrisjs/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/sounds/block.mp3":
/*!******************************!*\
  !*** ./src/sounds/block.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d3d9abd3282adf9e6313b8bbc0f3acfb.mp3\");\n\n//# sourceURL=webpack://tetrisjs/./src/sounds/block.mp3?");

/***/ }),

/***/ "./src/sounds/gameOver.mp3":
/*!*********************************!*\
  !*** ./src/sounds/gameOver.mp3 ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"2dd4b8532c475474b010f45d28280ab4.mp3\");\n\n//# sourceURL=webpack://tetrisjs/./src/sounds/gameOver.mp3?");

/***/ }),

/***/ "./src/sounds/movement.mp3":
/*!*********************************!*\
  !*** ./src/sounds/movement.mp3 ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"9d04477d0b5721132613071a1f0243bc.mp3\");\n\n//# sourceURL=webpack://tetrisjs/./src/sounds/movement.mp3?");

/***/ }),

/***/ "./src/sounds/pause.mp3":
/*!******************************!*\
  !*** ./src/sounds/pause.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"661860107cb35938732f93ebe9601b28.mp3\");\n\n//# sourceURL=webpack://tetrisjs/./src/sounds/pause.mp3?");

/***/ }),

/***/ "./src/sounds/score.mp3":
/*!******************************!*\
  !*** ./src/sounds/score.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d14c5c7027287148204e08aa4012d347.mp3\");\n\n//# sourceURL=webpack://tetrisjs/./src/sounds/score.mp3?");

/***/ }),

/***/ "./src/sounds/song.mp3":
/*!*****************************!*\
  !*** ./src/sounds/song.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"40449573dcc4c391cac437dd459ff5ed.mp3\");\n\n//# sourceURL=webpack://tetrisjs/./src/sounds/song.mp3?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tetrisjs/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tetrisjs/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tetrisjs/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tetrisjs/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tetrisjs/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tetrisjs/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tetrisjs/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tetrominoes\": () => (/* reexport safe */ _tetrominoes__WEBPACK_IMPORTED_MODULE_0__.tetrominoes)\n/* harmony export */ });\n/* harmony import */ var _tetrominoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tetrominoes */ \"./src/constants/tetrominoes/index.js\");\n\n\n//# sourceURL=webpack://tetrisjs/./src/constants/index.js?");

/***/ }),

/***/ "./src/constants/tetrominoes/index.js":
/*!********************************************!*\
  !*** ./src/constants/tetrominoes/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tetrominoes\": () => (/* binding */ tetrominoes)\n/* harmony export */ });\nconst width = 10\n\nconst o = [\n    [1, 2, width + 1, width * 1 + 2],\n    [1, 2, width + 1, width * 1 + 2],\n    [1, 2, width + 1, width * 1 + 2],\n    [1, 2, width + 1, width * 1 + 2],\n]\nconst l = [\n    [1, width + 1, width * 2 + 1, width * 2 + 2],\n    [0, 1, 2, width],\n    [0, 1, width + 1, width * 2 + 1],\n    [width, width + 1, width + 2, 2]\n]\nconst j = [\n    [1, width + 1, width * 2, width * 2 + 1],\n    [width, width + 1, width + 2, 0],\n    [1, 2, width * 1 + 1, width * 2 + 1,],\n    [0, 1, 2, width + 2]\n]\nconst i = [\n    [1, width + 1, width * 2 + 1, width * 3 + 1],\n    [0, 1, 2, 3],\n    [1, width + 1, width * 2 + 1, width * 3 + 1],\n    [0, 1, 2, 3],\n]\nconst s = [\n    [1, 2, width, width + 1],\n    [1, width + 1, width + 2, width * 2 + 2],\n    [1, 2, width, width + 1],\n    [1, width + 1, width + 2, width * 2 + 2]\n]\nconst z = [\n    [0, 1, width + 1, width + 2],\n    [1, width + 1, width, width * 2],\n    [0, 1, width + 1, width + 2],\n    [1, width + 1, width, width * 2],\n]\nconst t = [\n    [0, 1, 2, width + 1],\n    [1, width + 1, width * 2 + 1, width],\n    [1, width, width + 1, width + 2],\n    [1, width + 1, width * 2 + 1, width + 2],\n]\n\nconst tetrominoes = [i, o, l, j, z, s, t]\n\n//# sourceURL=webpack://tetrisjs/./src/constants/tetrominoes/index.js?");

/***/ }),

/***/ "./src/helpers/board/index.js":
/*!************************************!*\
  !*** ./src/helpers/board/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeGrid\": () => (/* binding */ makeGrid)\n/* harmony export */ });\n// MAKE THE GAME BOARD\n\nconst columns = 10\nconst rows = 20\n\nconst Grid = () => new Array(columns * rows).fill(0)\n\nconst makeGrid = (function () {\n    let _grid = Grid()\n    let _calls = 0\n    return {\n        get grid() {\n            return _grid\n        },\n        set grid(newBoard) {\n            _calls = _calls + 1\n            _grid = newBoard\n        },\n        get calls() {\n            return _calls\n        }\n    }\n})()\n\n//# sourceURL=webpack://tetrisjs/./src/helpers/board/index.js?");

/***/ }),

/***/ "./src/helpers/control/index.js":
/*!**************************************!*\
  !*** ./src/helpers/control/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"moveL\": () => (/* binding */ moveL),\n/* harmony export */   \"moveR\": () => (/* binding */ moveR),\n/* harmony export */   \"rotate\": () => (/* binding */ rotate),\n/* harmony export */   \"control\": () => (/* binding */ control)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/helpers/index.js\");\n/* harmony import */ var _sounds_movement_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sounds/movement.mp3 */ \"./src/sounds/movement.mp3\");\n/* harmony import */ var _sounds_block_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sounds/block.mp3 */ \"./src/sounds/block.mp3\");\n\n\n\n//CONNECT THE KEYS TO ACTION FUNCTIONS, IT HAS A EVENT GUN THAT DECIDES WHAT FUNCTION CALL\nconst movementSound = new Audio(_sounds_movement_mp3__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\nmovementSound.volume = 0.03\nconst blockSound = new Audio(_sounds_block_mp3__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\nblockSound.volume = 0.04\n\n\nconst moveL = (DomCells, currentTetro, currentPosition, width, setPos, currentTetroIdx) => {\n    const isAtTheLEdge = currentTetro().some(point => (point + currentPosition()) % width === 0)\n    const isNextTaken = currentTetro().some(point => DomCells[point + currentPosition() - 1].classList.contains('taken'))\n    if (!isAtTheLEdge && !isNextTaken) {\n        const collition = (0,___WEBPACK_IMPORTED_MODULE_0__.isCollition)(DomCells, currentTetro, currentPosition, width)\n        ;(0,___WEBPACK_IMPORTED_MODULE_0__.erase)(DomCells, currentTetro, currentPosition, currentTetroIdx)\n        setPos(false)\n        if (collition) {\n            setPos(true)\n\n        } else movementSound.play()\n        ;(0,___WEBPACK_IMPORTED_MODULE_0__.draw)(DomCells, currentTetro, currentPosition, currentTetroIdx)\n        return\n    }\n    blockSound.play()\n\n}\nconst moveR = (DomCells, currentTetro, currentPosition, width, setPos, currentTetroIdx) => {\n    const isAtTheREdge = currentTetro().some(point => (point + currentPosition()) % width === width - 1)\n    const isNextTaken = currentTetro().some(point => DomCells[point + currentPosition() + 1].classList.contains('taken'))\n    if (!isAtTheREdge && !isNextTaken) {\n        const collition = (0,___WEBPACK_IMPORTED_MODULE_0__.isCollition)(DomCells, currentTetro, currentPosition, width)\n        ;(0,___WEBPACK_IMPORTED_MODULE_0__.erase)(DomCells, currentTetro, currentPosition, currentTetroIdx)\n        setPos(true)\n        if (collition) {\n            setPos(false)\n\n        } else {\n            movementSound.play()\n        }\n        (0,___WEBPACK_IMPORTED_MODULE_0__.draw)(DomCells, currentTetro, currentPosition, currentTetroIdx)\n        return\n    }\n    blockSound.play()\n}\nconst rotate = (DomCells, currentTetro, currentPosition, currentTetroIdx, nextRotation, width) => {\n    ;(0,___WEBPACK_IMPORTED_MODULE_0__.erase)(DomCells, currentTetro, currentPosition, currentTetroIdx)\n    nextRotation(true)\n    const isAtTheREdge = currentTetro().some(point => (point + currentPosition()) % width === width)\n    const isAtTheLEdge = currentTetro().some(point => (point + currentPosition()) % width === 0)\n    if (isAtTheLEdge || isAtTheREdge) { nextRotation(false); blockSound.play() } else { movementSound.play() }\n    (0,___WEBPACK_IMPORTED_MODULE_0__.draw)(DomCells, currentTetro, currentPosition, currentTetroIdx)\n}\n\nconst control = (e, DomCells, currentTetro, currentPosition, width, setPos, currentTetroIdx, nextRotation, gameLoop, gameIsPause) => {\n\n    if (gameIsPause()) return\n    if (e.keyCode === 37 || e.keyCode === 65) {\n        moveL(DomCells, currentTetro, currentPosition, width, setPos, currentTetroIdx)\n    }\n    if (e.keyCode === 39 || e.keyCode === 68) {\n        moveR(DomCells, currentTetro, currentPosition, width, setPos, currentTetroIdx)\n    }\n    if (e.keyCode === 38 || e.keyCode === 87) {\n        rotate(DomCells, currentTetro, currentPosition, currentTetroIdx, nextRotation, width)\n    }\n    if (e.keyCode === 40 || e.keyCode === 83) {\n        gameLoop()\n        movementSound.play()\n    }\n\n}\n\n//# sourceURL=webpack://tetrisjs/./src/helpers/control/index.js?");

/***/ }),

/***/ "./src/helpers/createGame/index.js":
/*!*****************************************!*\
  !*** ./src/helpers/createGame/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGame\": () => (/* binding */ createGame)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ \"./src/constants/index.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ \"./src/helpers/index.js\");\n\n\n\n//ALL GAME VARIABLES, PRIVATE AND WITH ALL FUNCTIONS NEEDED TO IMPLEMENT THE GAME\nconst createGame = (function () {\n    let _gameStart = false\n    let _score = null\n    let _sound = false\n    let _music = false\n    let _gameOver = true\n    const _width = 10\n    let _currentXPos = 4\n    let _tetrominoeIndex = (0,___WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)(_constants__WEBPACK_IMPORTED_MODULE_0__.tetrominoes.length - 1)\n    let _currentTetro = null\n    let _gameSpeed = 1000\n    let _nextTetro = null\n    let _nextTetroIdx = null\n    let _id = null\n    let _newTetro = false\n    let _pause = false\n    return {\n        getgameStart: () => { return _gameStart },\n        getscore: () => _score,\n        getsound: () => _sound,\n        getmusic: () => _music,\n        getgameOver: () => _gameOver,\n        getcurrentXPos: () => _currentXPos,\n        gettetrominoeIndex: () => _tetrominoeIndex,\n        getcurrentTetro: () => _currentTetro,\n        getGameSpeed: () => _gameSpeed,\n        get width() { return _width },\n        getNextTetro: () => _newTetro,\n        getNextTetroIdx: () => _nextTetroIdx,\n        gameStart: () => {\n            _gameStart = !_gameStart\n            if (_gameStart) {\n                _id = (0,___WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)(3)\n                const nextId = (0,___WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)(3)\n                const nextTetro = (0,___WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)(_constants__WEBPACK_IMPORTED_MODULE_0__.tetrominoes.length - 1)\n                _gameOver = false\n                _score = 0\n                _currentTetro = _constants__WEBPACK_IMPORTED_MODULE_0__.tetrominoes[_tetrominoeIndex][_id]\n                _nextTetro = _constants__WEBPACK_IMPORTED_MODULE_0__.tetrominoes[nextTetro][nextId]\n                _nextTetroIdx = nextTetro\n            }\n            return _gameStart\n        },\n        gameOver: () => {\n            if (_gameStart && !_gameOver) {\n                _gameOver = true\n            }\n\n        },\n        setsound: () => {\n            _sound = !_sound\n        },\n        setmusic: () => {\n            _music = !_music\n        },\n        addLine: () => {\n            _score += 10\n            return\n        },\n        setcurrentXPos: (direction) => {\n            if (direction) {\n                _currentXPos += 1\n            } else {\n                _currentXPos -= 1\n            }\n        },\n        setcurrentYPos: () => {\n            _currentXPos += _width\n        },\n        newTetro: () => {\n            _currentXPos = 4\n            _currentTetro = _nextTetro\n            _tetrominoeIndex = _nextTetroIdx\n            _newTetro = true\n            const newTetro = (0,___WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)(_constants__WEBPACK_IMPORTED_MODULE_0__.tetrominoes.length - 1)\n            const newId = (0,___WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)(3)\n            _nextTetro = _constants__WEBPACK_IMPORTED_MODULE_0__.tetrominoes[newTetro][newId]\n            _nextTetroIdx = newTetro\n\n        },\n        getNextTetro: () => {\n            return _nextTetro\n        },\n        pauseGame: () => {\n            _pause = true\n        },\n        unPauseGame: () => {\n            _pause = false\n        },\n        isNewTetro: () => {\n            return _newTetro\n        },\n        setNewTetro: () => {\n            _newTetro = false\n        },\n        nextRotation: (direction) => {\n            if (direction) {\n                const newId = _id + 1 > _constants__WEBPACK_IMPORTED_MODULE_0__.tetrominoes[_tetrominoeIndex].length - 1 ? 0 : _id + 1\n                _id = newId\n                _currentTetro = _constants__WEBPACK_IMPORTED_MODULE_0__.tetrominoes[_tetrominoeIndex][newId]\n\n            } else {\n                const newId = _id - 1 < 0 ? _constants__WEBPACK_IMPORTED_MODULE_0__.tetrominoes[_tetrominoeIndex].length - 1 : _id - 1\n                _id = newId\n                _currentTetro = _constants__WEBPACK_IMPORTED_MODULE_0__.tetrominoes[_tetrominoeIndex][_id]\n            }\n        },\n        setGameOver: () => {\n            _gameOver = true\n            _currentXPos = 4\n            _tetrominoeIndex = (0,___WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)(_constants__WEBPACK_IMPORTED_MODULE_0__.tetrominoes.length - 1)\n            _currentTetro = null\n            _gameSpeed = 1000\n            _nextTetro = null\n            _nextTetroIdx = null\n            _id = null\n            _newTetro = false\n            _gameStart = false\n            _score = null\n        },\n        gameIsPause: () => {\n            return _pause\n        }\n    }\n})()\n\n//# sourceURL=webpack://tetrisjs/./src/helpers/createGame/index.js?");

/***/ }),

/***/ "./src/helpers/draw/index.js":
/*!***********************************!*\
  !*** ./src/helpers/draw/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"draw\": () => (/* binding */ draw),\n/* harmony export */   \"erase\": () => (/* binding */ erase),\n/* harmony export */   \"drawNext\": () => (/* binding */ drawNext)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/helpers/index.js\");\n\n//THIS FUNCTIONS DRAW AND CLEAN THE TETROMINOES, JUST THE ONE IS COTROLLED BY DE PLAYER\nconst draw = (DomCells, currentTetro, currentPosition, currentTetroIdx) => {\n    if (!Array.isArray(currentTetro)) {\n        return DomCells.forEach((e, idx) => {\n            if (currentTetro().map(t => t + currentPosition()).includes(idx)) {\n                const className = (0,___WEBPACK_IMPORTED_MODULE_0__.getClassName)(currentTetroIdx() + 1)\n                e.classList.add(className)\n            }\n            return e\n        })\n    }\n}\nconst erase = (DomCells, currentTetro, currentPosition, currentTetroIdx) => {\n    if (!Array.isArray(currentTetro)) {\n        return DomCells.forEach((e, idx) => {\n            if (currentTetro().map(t => t + currentPosition()).includes(idx)) {\n                const className = (0,___WEBPACK_IMPORTED_MODULE_0__.getClassName)(currentTetroIdx() + 1)\n                e.classList.remove(className)\n                return e\n            }\n            return e\n        })\n    }\n}\n\nconst drawNext = (NextDomCells, nextTetro, nextTetroIdx, justErase = false) => {\n    //erase\n    return NextDomCells.forEach((cell, idx) => {\n        cell.classList.remove('o-cell', 'i-cell', 'l-cell', 'j-cell', 's-cell', 'z-cell', 't-cell')\n        if (justErase) return\n        //draw\n        if (nextTetro.map(t => t + 13).includes(idx)) {\n            const className = (0,___WEBPACK_IMPORTED_MODULE_0__.getClassName)(nextTetroIdx + 1)\n            cell.classList.add(className)\n        }\n    })\n\n}\n\n//# sourceURL=webpack://tetrisjs/./src/helpers/draw/index.js?");

/***/ }),

/***/ "./src/helpers/freeze/index.js":
/*!*************************************!*\
  !*** ./src/helpers/freeze/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"freeze\": () => (/* binding */ freeze),\n/* harmony export */   \"isCollition\": () => (/* binding */ isCollition)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/helpers/index.js\");\n\n\n//FREEZE A COLLITION DETECTECTION, HERE YOU CHANGE THE STATE OF A TETROMINOE IF IT IS COLLIDE WITH A 'TAKEN' CELL\nconst freeze = (currentTetro, currentPosition, width, startNewTetro, currentTetroIdx, NextDomCells, getNextTetro, getNextTetroIdx) => {\n    const DomCells = Array.from(document.querySelectorAll('.cell'))\n    const isDone = isCollition(DomCells, currentTetro, currentPosition, width)\n    const current = currentTetro().map((e) => e + currentPosition())\n    if (isDone && !Array.isArray(currentTetro)) {\n\n        for (const i of current) {\n            DomCells[i].classList.add('taken')\n        }\n        startNewTetro()\n        const newTetro = currentTetro()\n        ;(0,___WEBPACK_IMPORTED_MODULE_0__.draw)(DomCells, newTetro, currentPosition(), currentTetroIdx())\n        ;(0,___WEBPACK_IMPORTED_MODULE_0__.drawNext)(NextDomCells, getNextTetro(), getNextTetroIdx())\n    }\n}\n\nconst isCollition = (DomCells, currentTetro, currentPosition, width, direction = false) => {\n    const current = currentTetro().map((e) => e + currentPosition())\n    const isDone = current.some(e => { return DomCells[width + e].classList.contains('taken') })\n    return isDone\n}\n\n\n//# sourceURL=webpack://tetrisjs/./src/helpers/freeze/index.js?");

/***/ }),

/***/ "./src/helpers/getClassName/index.js":
/*!*******************************************!*\
  !*** ./src/helpers/getClassName/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getClassName\": () => (/* binding */ getClassName)\n/* harmony export */ });\nconst getClassName = (n) => {\n    if (n <= 0) return 'blank-cell'\n    if (n === 1) return 'i-cell'\n    if (n === 2) return 'o-cell'\n    if (n === 3) return 'l-cell'\n    if (n === 4) return 'j-cell'\n    if (n === 5) return 'z-cell'\n    if (n === 6) return 's-cell'\n    if (n === 7) return 't-cell'\n\n\n}\n\n//# sourceURL=webpack://tetrisjs/./src/helpers/getClassName/index.js?");

/***/ }),

/***/ "./src/helpers/getRandomNumber/index.js":
/*!**********************************************!*\
  !*** ./src/helpers/getRandomNumber/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomNumber\": () => (/* binding */ getRandomNumber)\n/* harmony export */ });\nconst getRandomNumber = (range = 4, start = 0) => {\n    const randomNumber = Math.round((Math.random() * range) + start)\n    if (randomNumber > range) {\n        getRandomNumber(range, start)\n    } else {\n        return randomNumber\n    }\n}\n\n//# sourceURL=webpack://tetrisjs/./src/helpers/getRandomNumber/index.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeGrid\": () => (/* reexport safe */ _board__WEBPACK_IMPORTED_MODULE_0__.makeGrid),\n/* harmony export */   \"getRandomNumber\": () => (/* reexport safe */ _getRandomNumber__WEBPACK_IMPORTED_MODULE_1__.getRandomNumber),\n/* harmony export */   \"getClassName\": () => (/* reexport safe */ _getClassName__WEBPACK_IMPORTED_MODULE_2__.getClassName),\n/* harmony export */   \"createGame\": () => (/* reexport safe */ _createGame__WEBPACK_IMPORTED_MODULE_3__.createGame),\n/* harmony export */   \"draw\": () => (/* reexport safe */ _draw__WEBPACK_IMPORTED_MODULE_4__.draw),\n/* harmony export */   \"erase\": () => (/* reexport safe */ _draw__WEBPACK_IMPORTED_MODULE_4__.erase),\n/* harmony export */   \"drawNext\": () => (/* reexport safe */ _draw__WEBPACK_IMPORTED_MODULE_4__.drawNext),\n/* harmony export */   \"freeze\": () => (/* reexport safe */ _freeze__WEBPACK_IMPORTED_MODULE_5__.freeze),\n/* harmony export */   \"isCollition\": () => (/* reexport safe */ _freeze__WEBPACK_IMPORTED_MODULE_5__.isCollition),\n/* harmony export */   \"control\": () => (/* reexport safe */ _control__WEBPACK_IMPORTED_MODULE_6__.control)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/helpers/board/index.js\");\n/* harmony import */ var _getRandomNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getRandomNumber */ \"./src/helpers/getRandomNumber/index.js\");\n/* harmony import */ var _getClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getClassName */ \"./src/helpers/getClassName/index.js\");\n/* harmony import */ var _createGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createGame */ \"./src/helpers/createGame/index.js\");\n/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./draw */ \"./src/helpers/draw/index.js\");\n/* harmony import */ var _freeze__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./freeze */ \"./src/helpers/freeze/index.js\");\n/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./control */ \"./src/helpers/control/index.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://tetrisjs/./src/helpers/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _sounds_song_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sounds/song.mp3 */ \"./src/sounds/song.mp3\");\n/* harmony import */ var _sounds_gameOver_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sounds/gameOver.mp3 */ \"./src/sounds/gameOver.mp3\");\n/* harmony import */ var _sounds_pause_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sounds/pause.mp3 */ \"./src/sounds/pause.mp3\");\n/* harmony import */ var _sounds_score_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sounds/score.mp3 */ \"./src/sounds/score.mp3\");\n\n\n\n\n\n\n\n//GAME ELEMENTS\nlet gameInterval\nconst DomBoard = document.getElementById('board')\nconst NextDisplayer = document.getElementById('next-display')\nconst Board = _helpers__WEBPACK_IMPORTED_MODULE_0__.makeGrid\nconst displayer = new Array(50).fill('min-cell')\n\nconst { getcurrentTetro,\n    getcurrentXPos,\n    setcurrentYPos,\n    gettetrominoeIndex,\n    gameStart,\n    getgameStart,\n    newTetro,\n    setcurrentXPos,\n    getGameSpeed,\n    width,\n    nextRotation,\n    pauseGame,\n    unPauseGame,\n    addLine,\n    getscore,\n    isNewTetro,\n    setNewTetro,\n    setGameOver,\n    gameIsPause,\n    getNextTetro,\n    getNextTetroIdx,\n} = _helpers__WEBPACK_IMPORTED_MODULE_0__.createGame\nBoard.grid.forEach((element) => {\n    const newElement = document.createElement('div')\n    const childElement = document.createElement('div')\n    newElement.classList.add('cell')\n    newElement.classList.add((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getClassName)(element))\n    newElement.appendChild(childElement)\n    DomBoard.appendChild(newElement)\n})\nconst takes = new Array(10).fill('taken')\ntakes.forEach((element) => {\n    const newElement = document.createElement('div')\n    newElement.classList.add(element)\n    newElement.classList.add('cell')\n    newElement.setAttribute('id', element);\n\n    DomBoard.appendChild(newElement)\n})\ndisplayer.forEach((element) => {\n    const newElement = document.createElement('div')\n    newElement.classList.add(element)\n    NextDisplayer.appendChild(newElement)\n})\nconst themeSong = new Audio(_sounds_song_mp3__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\nthemeSong.volume = 0.02\nthemeSong.loop = true\nconst gameOverSound = new Audio(_sounds_gameOver_mp3__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\ngameOverSound.volume = 0.05\nconst pauseSound = new Audio(_sounds_pause_mp3__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\npauseSound.volume = 0.05\nconst scoreSound = new Audio(_sounds_score_mp3__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\nscoreSound.volume = 0.05\nlet DomCells = Array.from(document.querySelectorAll('.cell'))\nconst NextDomCells = Array.from(document.querySelectorAll('.min-cell'))\nconst gameLoop = () => {\n    if (gameIsPause()) return\n\n    if (isNewTetro()) {\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.draw)(DomCells, getcurrentTetro, getcurrentXPos, gettetrominoeIndex)\n        setNewTetro(false)\n        isGameOver()\n        return\n    }\n    if (getgameStart()) {\n\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.erase)(DomCells, getcurrentTetro, getcurrentXPos, gettetrominoeIndex)\n        checkForPoints()\n        setcurrentYPos()\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.draw)(DomCells, getcurrentTetro, getcurrentXPos, gettetrominoeIndex)\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.freeze)(getcurrentTetro, getcurrentXPos, width, newTetro, gettetrominoeIndex, NextDomCells, getNextTetro, getNextTetroIdx)\n        isGameOver()\n    }\n}\n\nconst handleStartClick = () => {\n    if (!getgameStart()) {\n        gameStart()\n        themeSong.play()\n        gameInterval = setInterval(gameLoop, getGameSpeed())\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.draw)(DomCells, getcurrentTetro, getcurrentXPos, gettetrominoeIndex)\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.drawNext)(NextDomCells, getNextTetro(), getNextTetroIdx())\n        writePause()\n        return\n    }\n    if (gameIsPause()) {\n        themeSong.play()\n        pauseSound.play()\n        unPauseGame()\n        writePause()\n        return\n    }\n    if (getgameStart() && !gameIsPause()) {\n        themeSong.pause()\n        pauseSound.play()\n        pauseGame()\n        writeStart()\n        return\n    }\n}\n\n\ndocument.addEventListener('keyup', (e) => (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.control)(e, DomCells, getcurrentTetro, getcurrentXPos, width, setcurrentXPos, gettetrominoeIndex, nextRotation, gameLoop, gameIsPause))\n\nif (gameIsPause()) {\n    clearInterval(gameInterval)\n}\n//score Element\nconst scoreSpanEl = document.getElementById('score-display')\nconst writeScore = () => {\n    scoreSpanEl.innerText = getscore().toString()\n}\n// CHECKS AND CLEAN THE GRID\nconst checkForPoints = () => {\n    const len = DomCells.length - width\n    for (let idx = 0; idx < len; idx += width) {\n        const row = new Array(width).fill('nothing').map((e, i) => i + idx)\n        const isALine = row.every(index => DomCells[index].classList.contains('taken'))\n        if (isALine) {\n\n            for (let index of row) {\n                DomCells[index].classList.remove('taken', 'o-cell', 'i-cell', 'l-cell', 'j-cell', 's-cell', 'z-cell', 't-cell')\n            }\n            const newRow = DomCells.splice(idx, width)\n            DomCells = [...newRow, ...DomCells]\n            DomCells.forEach((DomNode) => {\n                DomBoard.appendChild(DomNode)\n            })\n            addLine()\n            writeScore()\n            scoreSound.play()\n        }\n    }\n}\nconst isGameOver = () => {\n    if (DomCells[getcurrentXPos() + width + 1].classList.contains('taken')) {\n        setGameOver()\n        writeStart()\n        themeSong.pause()\n        themeSong.fastSeek = 0\n        DomCells.forEach((cell, i) => {\n            if (i > 200) return\n            cell.classList.remove('taken', 'o-cell', 'i-cell', 'l-cell', 'j-cell', 's-cell', 'z-cell', 't-cell')\n        })\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.drawNext)(NextDomCells, null, null, true)\n        gameOverSound.play()\n\n    }\n}\n\n\n// UI ELEMENTS\nconst startButtonEl = document.getElementById('start-game-button')\nstartButtonEl.addEventListener('click', handleStartClick)\nconst writePause = () => startButtonEl.innerText = 'Pause'\nconst writeStart = () => startButtonEl.innerText = 'Start'\n\n\n\n//# sourceURL=webpack://tetrisjs/./src/main.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;