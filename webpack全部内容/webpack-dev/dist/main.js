 (function(modules) { // webpackBootstrap
 	var installedModules = {};
 	function __webpack_require__(moduleId) {
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
 		module.l = true;
 		return module.exports;
 	}
 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
 })
 ({

"./src/a.js":
 (function(module, exports) {

eval("module.exports='b';\n\n//# sourceURL=webpack:///./src/a.js?");

/***/ }),

"./src/index.js":
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let str = __webpack_require__(/*! ./a.js */ \"./src/a.js\");\r\nconsole.log(str);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

 });