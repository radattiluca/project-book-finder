/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/jsComponents/goBack.js":
/*!***********************************************!*\
  !*** ./src/components/jsComponents/goBack.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ goBack)\n/* harmony export */ });\n// Fill the Result container with an empty value so that the last population reappears\nfunction goBack(containerResult, containerCoverBook) {\n  containerResult.innerHTML = \"\";\n  containerCoverBook.innerHTML = \"\";\n  return containerResult, containerCoverBook;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9qc0NvbXBvbmVudHMvZ29CYWNrLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNlLFNBQVNBLE1BQU1BLENBQUNDLGVBQWUsRUFBRUMsa0JBQWtCLEVBQUU7RUFDbEVELGVBQWUsQ0FBQ0UsU0FBUyxHQUFHLEVBQUU7RUFDOUJELGtCQUFrQixDQUFDQyxTQUFTLEdBQUcsRUFBRTtFQUNqQyxPQUFPRixlQUFlLEVBQUVDLGtCQUFrQjtBQUM1QyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtYm9vay1maW5kZXIvLi9zcmMvY29tcG9uZW50cy9qc0NvbXBvbmVudHMvZ29CYWNrLmpzPzBiNWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRmlsbCB0aGUgUmVzdWx0IGNvbnRhaW5lciB3aXRoIGFuIGVtcHR5IHZhbHVlIHNvIHRoYXQgdGhlIGxhc3QgcG9wdWxhdGlvbiByZWFwcGVhcnNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdvQmFjayhjb250YWluZXJSZXN1bHQsIGNvbnRhaW5lckNvdmVyQm9vaykge1xuICBjb250YWluZXJSZXN1bHQuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGFpbmVyQ292ZXJCb29rLmlubmVySFRNTCA9IFwiXCI7XG4gIHJldHVybiBjb250YWluZXJSZXN1bHQsIGNvbnRhaW5lckNvdmVyQm9vaztcbn1cbiJdLCJuYW1lcyI6WyJnb0JhY2siLCJjb250YWluZXJSZXN1bHQiLCJjb250YWluZXJDb3ZlckJvb2siLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/jsComponents/goBack.js\n");

/***/ }),

/***/ "./src/components/jsComponents/spaceRemover.js":
/*!*****************************************************!*\
  !*** ./src/components/jsComponents/spaceRemover.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ spaceRemover)\n/* harmony export */ });\n//this function removes spaces within a string and returns the string with the underscore instead of the spaces\nfunction spaceRemover(str) {\n  return str.replace(/\\s+/g, \"_\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9qc0NvbXBvbmVudHMvc3BhY2VSZW1vdmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNlLFNBQVNBLFlBQVlBLENBQUNDLEdBQUcsRUFBRTtFQUN4QyxPQUFPQSxHQUFHLENBQUNDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO0FBQ2pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1ib29rLWZpbmRlci8uL3NyYy9jb21wb25lbnRzL2pzQ29tcG9uZW50cy9zcGFjZVJlbW92ZXIuanM/ZDZlZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3RoaXMgZnVuY3Rpb24gcmVtb3ZlcyBzcGFjZXMgd2l0aGluIGEgc3RyaW5nIGFuZCByZXR1cm5zIHRoZSBzdHJpbmcgd2l0aCB0aGUgdW5kZXJzY29yZSBpbnN0ZWFkIG9mIHRoZSBzcGFjZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwYWNlUmVtb3ZlcihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMrL2csIFwiX1wiKTtcbn1cbiJdLCJuYW1lcyI6WyJzcGFjZVJlbW92ZXIiLCJzdHIiLCJyZXBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/jsComponents/spaceRemover.js\n");

/***/ }),

/***/ "./src/components/jsComponents/stringExtractor.js":
/*!********************************************************!*\
  !*** ./src/components/jsComponents/stringExtractor.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ stringExtractor)\n/* harmony export */ });\n// this function searches for a specific character in the string and returns the string preceding that character.\nfunction stringExtractor(str, _char) {\n  var index = str.indexOf(_char);\n  return index !== -1 ? str.slice(0, index).trim() : str.trim();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9qc0NvbXBvbmVudHMvc3RyaW5nRXh0cmFjdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNlLFNBQVNBLGVBQWVBLENBQUNDLEdBQUcsRUFBRUMsS0FBSSxFQUFFO0VBQ2pELElBQU1DLEtBQUssR0FBR0YsR0FBRyxDQUFDRyxPQUFPLENBQUNGLEtBQUksQ0FBQztFQUMvQixPQUFPQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEdBQUdGLEdBQUcsQ0FBQ0ksS0FBSyxDQUFDLENBQUMsRUFBRUYsS0FBSyxDQUFDLENBQUNHLElBQUksQ0FBQyxDQUFDLEdBQUdMLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDLENBQUM7QUFDL0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJvb2stZmluZGVyLy4vc3JjL2NvbXBvbmVudHMvanNDb21wb25lbnRzL3N0cmluZ0V4dHJhY3Rvci5qcz9iZWU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgZnVuY3Rpb24gc2VhcmNoZXMgZm9yIGEgc3BlY2lmaWMgY2hhcmFjdGVyIGluIHRoZSBzdHJpbmcgYW5kIHJldHVybnMgdGhlIHN0cmluZyBwcmVjZWRpbmcgdGhhdCBjaGFyYWN0ZXIuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHJpbmdFeHRyYWN0b3Ioc3RyLCBjaGFyKSB7XG4gIGNvbnN0IGluZGV4ID0gc3RyLmluZGV4T2YoY2hhcik7XG4gIHJldHVybiBpbmRleCAhPT0gLTEgPyBzdHIuc2xpY2UoMCwgaW5kZXgpLnRyaW0oKSA6IHN0ci50cmltKCk7XG59XG4iXSwibmFtZXMiOlsic3RyaW5nRXh0cmFjdG9yIiwic3RyIiwiY2hhciIsImluZGV4IiwiaW5kZXhPZiIsInNsaWNlIiwidHJpbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/jsComponents/stringExtractor.js\n");

/***/ }),

/***/ "./src/components/logo/iconMySite.js":
/*!*******************************************!*\
  !*** ./src/components/logo/iconMySite.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _icon_footer_lr_web_site_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-footer-lr-web-site.png */ \"./src/components/logo/icon-footer-lr-web-site.png\");\n/* harmony import */ var _icon_footer_lr_web_site_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_icon_footer_lr_web_site_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styleIconMS_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleIconMS.scss */ \"./src/components/logo/styleIconMS.scss\");\n\n\nfunction iconFn() {\n  var iconDomImage = new Image();\n  iconDomImage.src = (_icon_footer_lr_web_site_png__WEBPACK_IMPORTED_MODULE_0___default());\n  iconDomImage.className = \"my-icon\";\n  console.log(iconDomImage);\n  return iconDomImage;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (iconFn);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sb2dvL2ljb25NeVNpdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFvRDtBQUN4QjtBQUU1QixTQUFTQyxNQUFNQSxDQUFBLEVBQUc7RUFDaEIsSUFBTUMsWUFBWSxHQUFHLElBQUlDLEtBQUssQ0FBQyxDQUFDO0VBQ2hDRCxZQUFZLENBQUNFLEdBQUcsR0FBR0oscUVBQU87RUFDMUJFLFlBQVksQ0FBQ0csU0FBUyxHQUFHLFNBQVM7RUFDbENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxZQUFZLENBQUM7RUFDekIsT0FBT0EsWUFBWTtBQUNyQjtBQUVBLGlFQUFlRCxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1ib29rLWZpbmRlci8uL3NyYy9jb21wb25lbnRzL2xvZ28vaWNvbk15U2l0ZS5qcz8yNWNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpY29uSW1nIGZyb20gXCIuL2ljb24tZm9vdGVyLWxyLXdlYi1zaXRlLnBuZ1wiO1xuaW1wb3J0IFwiLi9zdHlsZUljb25NUy5zY3NzXCI7XG5cbmZ1bmN0aW9uIGljb25GbigpIHtcbiAgY29uc3QgaWNvbkRvbUltYWdlID0gbmV3IEltYWdlKCk7XG4gIGljb25Eb21JbWFnZS5zcmMgPSBpY29uSW1nO1xuICBpY29uRG9tSW1hZ2UuY2xhc3NOYW1lID0gXCJteS1pY29uXCI7XG4gIGNvbnNvbGUubG9nKGljb25Eb21JbWFnZSk7XG4gIHJldHVybiBpY29uRG9tSW1hZ2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGljb25GbjtcbiJdLCJuYW1lcyI6WyJpY29uSW1nIiwiaWNvbkZuIiwiaWNvbkRvbUltYWdlIiwiSW1hZ2UiLCJzcmMiLCJjbGFzc05hbWUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/logo/iconMySite.js\n");

/***/ }),

/***/ "./src/components/logo/logo.js":
/*!*************************************!*\
  !*** ./src/components/logo/logo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logo_book_finder_dark_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo-book-finder-dark.png */ \"./src/components/logo/logo-book-finder-dark.png\");\n/* harmony import */ var _logo_book_finder_dark_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_logo_book_finder_dark_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styleLogo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleLogo.scss */ \"./src/components/logo/styleLogo.scss\");\n/** This function creates a new image object to insert the image B of the Book Finder title and insert it inside the index.js file and then attach it inside the header*/\n\n\n\nfunction logoFn() {\n  var logoDomImage = new Image();\n  logoDomImage.src = (_logo_book_finder_dark_png__WEBPACK_IMPORTED_MODULE_0___default());\n  logoDomImage.className = \"my-logo\";\n  console.log(logoDomImage);\n  return logoDomImage;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logoFn);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sb2dvL2xvZ28uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVrRDtBQUN4QjtBQUUxQixTQUFTQyxNQUFNQSxDQUFBLEVBQUc7RUFDaEIsSUFBTUMsWUFBWSxHQUFHLElBQUlDLEtBQUssQ0FBQyxDQUFDO0VBQ2hDRCxZQUFZLENBQUNFLEdBQUcsR0FBR0osbUVBQU87RUFDMUJFLFlBQVksQ0FBQ0csU0FBUyxHQUFHLFNBQVM7RUFDbENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxZQUFZLENBQUM7RUFDekIsT0FBT0EsWUFBWTtBQUNyQjtBQUVBLGlFQUFlRCxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1ib29rLWZpbmRlci8uL3NyYy9jb21wb25lbnRzL2xvZ28vbG9nby5qcz81NjlkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBuZXcgaW1hZ2Ugb2JqZWN0IHRvIGluc2VydCB0aGUgaW1hZ2UgQiBvZiB0aGUgQm9vayBGaW5kZXIgdGl0bGUgYW5kIGluc2VydCBpdCBpbnNpZGUgdGhlIGluZGV4LmpzIGZpbGUgYW5kIHRoZW4gYXR0YWNoIGl0IGluc2lkZSB0aGUgaGVhZGVyKi9cblxuaW1wb3J0IGxvZ29JbWcgZnJvbSBcIi4vbG9nby1ib29rLWZpbmRlci1kYXJrLnBuZ1wiO1xuaW1wb3J0IFwiLi9zdHlsZUxvZ28uc2Nzc1wiO1xuXG5mdW5jdGlvbiBsb2dvRm4oKSB7XG4gIGNvbnN0IGxvZ29Eb21JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBsb2dvRG9tSW1hZ2Uuc3JjID0gbG9nb0ltZztcbiAgbG9nb0RvbUltYWdlLmNsYXNzTmFtZSA9IFwibXktbG9nb1wiO1xuICBjb25zb2xlLmxvZyhsb2dvRG9tSW1hZ2UpO1xuICByZXR1cm4gbG9nb0RvbUltYWdlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dvRm47XG4iXSwibmFtZXMiOlsibG9nb0ltZyIsImxvZ29GbiIsImxvZ29Eb21JbWFnZSIsIkltYWdlIiwic3JjIiwiY2xhc3NOYW1lIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/logo/logo.js\n");

/***/ }),

/***/ "./src/js/detailsUrlDescription.js":
/*!*****************************************!*\
  !*** ./src/js/detailsUrlDescription.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ detailsUrlDescription)\n/* harmony export */ });\n/**This function takes the foundBook object and reprocesses it to return the book key to identify the description and the cover id number to display the cover image */\nfunction detailsUrlDescription(foundBook) {\n  if (foundBook) {\n    console.log(\"Book found:\", foundBook.key);\n    console.log(\"Number cover id found:\", foundBook.coverId);\n    var keyBook = foundBook.key;\n    var numCover = foundBook.coverId;\n    return {\n      keyBook: keyBook,\n      numCover: numCover\n    }; // return an object with the book key and the cover id\n  } else {\n    throw new Error(\"Book not found\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZGV0YWlsc1VybERlc2NyaXB0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNlLFNBQVNBLHFCQUFxQkEsQ0FBQ0MsU0FBUyxFQUFFO0VBQ3ZELElBQUlBLFNBQVMsRUFBRTtJQUNiQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUVGLFNBQVMsQ0FBQ0csR0FBRyxDQUFDO0lBQ3pDRixPQUFPLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRUYsU0FBUyxDQUFDSSxPQUFPLENBQUM7SUFDeEQsSUFBTUMsT0FBTyxHQUFHTCxTQUFTLENBQUNHLEdBQUc7SUFDN0IsSUFBTUcsUUFBUSxHQUFHTixTQUFTLENBQUNJLE9BQU87SUFDbEMsT0FBTztNQUFFQyxPQUFPLEVBQVBBLE9BQU87TUFBRUMsUUFBUSxFQUFSQTtJQUFTLENBQUMsQ0FBQyxDQUFDO0VBQ2hDLENBQUMsTUFBTTtJQUNMLE1BQU0sSUFBSUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO0VBQ25DO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJvb2stZmluZGVyLy4vc3JjL2pzL2RldGFpbHNVcmxEZXNjcmlwdGlvbi5qcz81NmQ4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlRoaXMgZnVuY3Rpb24gdGFrZXMgdGhlIGZvdW5kQm9vayBvYmplY3QgYW5kIHJlcHJvY2Vzc2VzIGl0IHRvIHJldHVybiB0aGUgYm9vayBrZXkgdG8gaWRlbnRpZnkgdGhlIGRlc2NyaXB0aW9uIGFuZCB0aGUgY292ZXIgaWQgbnVtYmVyIHRvIGRpc3BsYXkgdGhlIGNvdmVyIGltYWdlICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRhaWxzVXJsRGVzY3JpcHRpb24oZm91bmRCb29rKSB7XG4gIGlmIChmb3VuZEJvb2spIHtcbiAgICBjb25zb2xlLmxvZyhcIkJvb2sgZm91bmQ6XCIsIGZvdW5kQm9vay5rZXkpO1xuICAgIGNvbnNvbGUubG9nKFwiTnVtYmVyIGNvdmVyIGlkIGZvdW5kOlwiLCBmb3VuZEJvb2suY292ZXJJZCk7XG4gICAgY29uc3Qga2V5Qm9vayA9IGZvdW5kQm9vay5rZXk7XG4gICAgY29uc3QgbnVtQ292ZXIgPSBmb3VuZEJvb2suY292ZXJJZDtcbiAgICByZXR1cm4geyBrZXlCb29rLCBudW1Db3ZlciB9OyAvLyByZXR1cm4gYW4gb2JqZWN0IHdpdGggdGhlIGJvb2sga2V5IGFuZCB0aGUgY292ZXIgaWRcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJCb29rIG5vdCBmb3VuZFwiKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRldGFpbHNVcmxEZXNjcmlwdGlvbiIsImZvdW5kQm9vayIsImNvbnNvbGUiLCJsb2ciLCJrZXkiLCJjb3ZlcklkIiwia2V5Qm9vayIsIm51bUNvdmVyIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/detailsUrlDescription.js\n");

/***/ }),

/***/ "./src/js/fetchAuthors.js":
/*!********************************!*\
  !*** ./src/js/fetchAuthors.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAuthors)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/**This function makes an API request and manages data to display a list of book titles and authors of the category selected by the user */\n ///to use the _.get method\n\nfunction fetchAuthors(newUrl, containerResult, containerCoverBook, collectedData) {\n  return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(newUrl).then(function (response) {\n    // Check if the response status is what you expect\n    if (response.status !== 200) {\n      throw new Error(\"Request failed in fetchAuthors with status \".concat(response.status));\n    }\n    var resp = response.data; // Access response data\n    console.log(resp); // Debug\n\n    var authors = lodash__WEBPACK_IMPORTED_MODULE_0___default().get(resp, \"works\", []); // Extract the array of objects containing authors and book titles\n\n    if (authors.length === 0) {\n      throw new Error(\"The category entered is invalid\");\n    }\n    console.log(authors); // Debug\n    containerCoverBook.innerHTML = \"\";\n    containerResult.innerHTML = \"\";\n\n    // Iterate over the authors array to populate `collectedData` and update the DOM\n    authors.forEach(function (element) {\n      var objAuthors = lodash__WEBPACK_IMPORTED_MODULE_0___default().get(element, \"authors[0].name\", \"Unknown\");\n      var objTitle = lodash__WEBPACK_IMPORTED_MODULE_0___default().get(element, \"title\", \"Unknown\");\n      var objKey = lodash__WEBPACK_IMPORTED_MODULE_0___default().get(element, \"key\", \"Unknown\");\n      var objIdCover = lodash__WEBPACK_IMPORTED_MODULE_0___default().get(element, \"cover_id\", \"Unknown\");\n\n      // Create an array of objects with corresponding title, author, and key\n      collectedData.push({\n        title: objTitle,\n        authors: objAuthors,\n        key: objKey,\n        coverId: objIdCover\n      });\n\n      // Populate the containerResult with titles and authors\n      containerResult.innerHTML += \"<li id=\\\"\".concat(objKey, \"\\\">\").concat(objTitle, \" - \").concat(objAuthors, \"</li>\");\n    });\n    return {\n      collectedData: collectedData,\n      containerResult: containerResult,\n      containerCoverBook: containerCoverBook\n    };\n  })[\"catch\"](function (error) {\n    console.error(\"Error fetching authors:\", error.message);\n    throw new Error(error.message);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZmV0Y2hBdXRob3JzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUN1QixDQUFDO0FBQ0U7QUFDWCxTQUFTRSxZQUFZQSxDQUNsQ0MsTUFBTSxFQUNOQyxlQUFlLEVBQ2ZDLGtCQUFrQixFQUNsQkMsYUFBYSxFQUNiO0VBQ0EsT0FBT0wsNkNBQUssQ0FDVE0sR0FBRyxDQUFDSixNQUFNLENBQUMsQ0FDWEssSUFBSSxDQUFDLFVBQUNDLFFBQVEsRUFBSztJQUNsQjtJQUNBLElBQUlBLFFBQVEsQ0FBQ0MsTUFBTSxLQUFLLEdBQUcsRUFBRTtNQUMzQixNQUFNLElBQUlDLEtBQUssK0NBQUFDLE1BQUEsQ0FDaUNILFFBQVEsQ0FBQ0MsTUFBTSxDQUMvRCxDQUFDO0lBQ0g7SUFDQSxJQUFNRyxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDLENBQUM7SUFDNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLENBQUMsQ0FBQyxDQUFDOztJQUVuQixJQUFNSSxPQUFPLEdBQUdqQixpREFBSyxDQUFDYSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0lBRTFDLElBQUlJLE9BQU8sQ0FBQ0MsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUN4QixNQUFNLElBQUlQLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQztJQUNwRDtJQUVBSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN0Qlosa0JBQWtCLENBQUNjLFNBQVMsR0FBRyxFQUFFO0lBQ2pDZixlQUFlLENBQUNlLFNBQVMsR0FBRyxFQUFFOztJQUU5QjtJQUNBRixPQUFPLENBQUNHLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUs7TUFDM0IsSUFBTUMsVUFBVSxHQUFHdEIsaURBQUssQ0FBQ3FCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLENBQUM7TUFDL0QsSUFBTUUsUUFBUSxHQUFHdkIsaURBQUssQ0FBQ3FCLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO01BQ25ELElBQU1HLE1BQU0sR0FBR3hCLGlEQUFLLENBQUNxQixPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQztNQUMvQyxJQUFNSSxVQUFVLEdBQUd6QixpREFBSyxDQUFDcUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUM7O01BRXhEO01BQ0FmLGFBQWEsQ0FBQ29CLElBQUksQ0FBQztRQUNqQkMsS0FBSyxFQUFFSixRQUFRO1FBQ2ZOLE9BQU8sRUFBRUssVUFBVTtRQUNuQk0sR0FBRyxFQUFFSixNQUFNO1FBQ1hLLE9BQU8sRUFBRUo7TUFDWCxDQUFDLENBQUM7O01BRUY7TUFDQXJCLGVBQWUsQ0FBQ2UsU0FBUyxnQkFBQVAsTUFBQSxDQUFlWSxNQUFNLFNBQUFaLE1BQUEsQ0FBS1csUUFBUSxTQUFBWCxNQUFBLENBQU1VLFVBQVUsVUFBTztJQUNwRixDQUFDLENBQUM7SUFDRixPQUFPO01BQUVoQixhQUFhLEVBQWJBLGFBQWE7TUFBRUYsZUFBZSxFQUFmQSxlQUFlO01BQUVDLGtCQUFrQixFQUFsQkE7SUFBbUIsQ0FBQztFQUMvRCxDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUN5QixLQUFLLEVBQUs7SUFDaEJmLE9BQU8sQ0FBQ2UsS0FBSyxDQUFDLHlCQUF5QixFQUFFQSxLQUFLLENBQUNDLE9BQU8sQ0FBQztJQUN2RCxNQUFNLElBQUlwQixLQUFLLENBQUNtQixLQUFLLENBQUNDLE9BQU8sQ0FBQztFQUNoQyxDQUFDLENBQUM7QUFDTiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtYm9vay1maW5kZXIvLi9zcmMvanMvZmV0Y2hBdXRob3JzLmpzPzkxMWYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqVGhpcyBmdW5jdGlvbiBtYWtlcyBhbiBBUEkgcmVxdWVzdCBhbmQgbWFuYWdlcyBkYXRhIHRvIGRpc3BsYXkgYSBsaXN0IG9mIGJvb2sgdGl0bGVzIGFuZCBhdXRob3JzIG9mIHRoZSBjYXRlZ29yeSBzZWxlY3RlZCBieSB0aGUgdXNlciAqL1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiOyAvLy90byB1c2UgdGhlIF8uZ2V0IG1ldGhvZFxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmV0Y2hBdXRob3JzKFxuICBuZXdVcmwsXG4gIGNvbnRhaW5lclJlc3VsdCxcbiAgY29udGFpbmVyQ292ZXJCb29rLFxuICBjb2xsZWN0ZWREYXRhXG4pIHtcbiAgcmV0dXJuIGF4aW9zXG4gICAgLmdldChuZXdVcmwpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgcmVzcG9uc2Ugc3RhdHVzIGlzIHdoYXQgeW91IGV4cGVjdFxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgUmVxdWVzdCBmYWlsZWQgaW4gZmV0Y2hBdXRob3JzIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3AgPSByZXNwb25zZS5kYXRhOyAvLyBBY2Nlc3MgcmVzcG9uc2UgZGF0YVxuICAgICAgY29uc29sZS5sb2cocmVzcCk7IC8vIERlYnVnXG5cbiAgICAgIGNvbnN0IGF1dGhvcnMgPSBfLmdldChyZXNwLCBcIndvcmtzXCIsIFtdKTsgLy8gRXh0cmFjdCB0aGUgYXJyYXkgb2Ygb2JqZWN0cyBjb250YWluaW5nIGF1dGhvcnMgYW5kIGJvb2sgdGl0bGVzXG5cbiAgICAgIGlmIChhdXRob3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY2F0ZWdvcnkgZW50ZXJlZCBpcyBpbnZhbGlkXCIpO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhhdXRob3JzKTsgLy8gRGVidWdcbiAgICAgIGNvbnRhaW5lckNvdmVyQm9vay5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29udGFpbmVyUmVzdWx0LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgYXV0aG9ycyBhcnJheSB0byBwb3B1bGF0ZSBgY29sbGVjdGVkRGF0YWAgYW5kIHVwZGF0ZSB0aGUgRE9NXG4gICAgICBhdXRob3JzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqQXV0aG9ycyA9IF8uZ2V0KGVsZW1lbnQsIFwiYXV0aG9yc1swXS5uYW1lXCIsIFwiVW5rbm93blwiKTtcbiAgICAgICAgY29uc3Qgb2JqVGl0bGUgPSBfLmdldChlbGVtZW50LCBcInRpdGxlXCIsIFwiVW5rbm93blwiKTtcbiAgICAgICAgY29uc3Qgb2JqS2V5ID0gXy5nZXQoZWxlbWVudCwgXCJrZXlcIiwgXCJVbmtub3duXCIpO1xuICAgICAgICBjb25zdCBvYmpJZENvdmVyID0gXy5nZXQoZWxlbWVudCwgXCJjb3Zlcl9pZFwiLCBcIlVua25vd25cIik7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGFuIGFycmF5IG9mIG9iamVjdHMgd2l0aCBjb3JyZXNwb25kaW5nIHRpdGxlLCBhdXRob3IsIGFuZCBrZXlcbiAgICAgICAgY29sbGVjdGVkRGF0YS5wdXNoKHtcbiAgICAgICAgICB0aXRsZTogb2JqVGl0bGUsXG4gICAgICAgICAgYXV0aG9yczogb2JqQXV0aG9ycyxcbiAgICAgICAgICBrZXk6IG9iaktleSxcbiAgICAgICAgICBjb3ZlcklkOiBvYmpJZENvdmVyLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBQb3B1bGF0ZSB0aGUgY29udGFpbmVyUmVzdWx0IHdpdGggdGl0bGVzIGFuZCBhdXRob3JzXG4gICAgICAgIGNvbnRhaW5lclJlc3VsdC5pbm5lckhUTUwgKz0gYDxsaSBpZD1cIiR7b2JqS2V5fVwiPiR7b2JqVGl0bGV9IC0gJHtvYmpBdXRob3JzfTwvbGk+YDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHsgY29sbGVjdGVkRGF0YSwgY29udGFpbmVyUmVzdWx0LCBjb250YWluZXJDb3ZlckJvb2sgfTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBhdXRob3JzOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJfIiwiYXhpb3MiLCJmZXRjaEF1dGhvcnMiLCJuZXdVcmwiLCJjb250YWluZXJSZXN1bHQiLCJjb250YWluZXJDb3ZlckJvb2siLCJjb2xsZWN0ZWREYXRhIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJjb25jYXQiLCJyZXNwIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhdXRob3JzIiwibGVuZ3RoIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJvYmpBdXRob3JzIiwib2JqVGl0bGUiLCJvYmpLZXkiLCJvYmpJZENvdmVyIiwicHVzaCIsInRpdGxlIiwia2V5IiwiY292ZXJJZCIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/fetchAuthors.js\n");

/***/ }),

/***/ "./src/js/fetchBookDetails.js":
/*!************************************!*\
  !*** ./src/js/fetchBookDetails.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBookDetails)\n/* harmony export */ });\n/* harmony import */ var _handleDescription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleDescription */ \"./src/js/handleDescription.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/** This function makes an API request to get data for the book description. Furthermore, by managing the numCover variable we extract the cover_id which we insert into the image URL to obtain the cover*/\n\n\nfunction fetchBookDetails(newUrlDetails, valueLi, numCover, containerResult, containerCoverBook) {\n  return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(newUrlDetails).then(function (response) {\n    // Check if the response status is what you expect\n    if (response.status !== 200) {\n      throw new Error(\"Request failed in fetchBookDetails with status \".concat(response.status));\n    }\n    var respDetails = response.data;\n    console.log(respDetails.description); // Debug\n\n    containerResult.innerHTML = \"\";\n    containerCoverBook.innerHTML = \"\";\n    setTimeout(function () {\n      (0,_handleDescription__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(respDetails, valueLi, containerResult);\n    }, 2000);\n    containerCoverBook.innerHTML += \"<img src=\\\"https://covers.openlibrary.org/b/id/\".concat(numCover, \"-M.jpg?default=true\\\" alt=\\\"\").concat(valueLi, \"\\\">\");\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZmV0Y2hCb29rRGV0YWlscy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNvRDtBQUMxQjtBQUNYLFNBQVNFLGdCQUFnQkEsQ0FDdENDLGFBQWEsRUFDYkMsT0FBTyxFQUNQQyxRQUFRLEVBQ1JDLGVBQWUsRUFDZkMsa0JBQWtCLEVBQ2xCO0VBQ0EsT0FBT04sNkNBQUssQ0FBQ08sR0FBRyxDQUFDTCxhQUFhLENBQUMsQ0FBQ00sSUFBSSxDQUFDLFVBQUNDLFFBQVEsRUFBSztJQUNqRDtJQUNBLElBQUlBLFFBQVEsQ0FBQ0MsTUFBTSxLQUFLLEdBQUcsRUFBRTtNQUMzQixNQUFNLElBQUlDLEtBQUssbURBQUFDLE1BQUEsQ0FDcUNILFFBQVEsQ0FBQ0MsTUFBTSxDQUNuRSxDQUFDO0lBQ0g7SUFDQSxJQUFNRyxXQUFXLEdBQUdKLFFBQVEsQ0FBQ0ssSUFBSTtJQUNqQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILFdBQVcsQ0FBQ0ksV0FBVyxDQUFDLENBQUMsQ0FBQzs7SUFFdENaLGVBQWUsQ0FBQ2EsU0FBUyxHQUFHLEVBQUU7SUFDOUJaLGtCQUFrQixDQUFDWSxTQUFTLEdBQUcsRUFBRTtJQUVqQ0MsVUFBVSxDQUFDLFlBQU07TUFDZnBCLDhEQUFpQixDQUFDYyxXQUFXLEVBQUVWLE9BQU8sRUFBRUUsZUFBZSxDQUFDO0lBQzFELENBQUMsRUFBRSxJQUFJLENBQUM7SUFFUkMsa0JBQWtCLENBQUNZLFNBQVMsc0RBQUFOLE1BQUEsQ0FBcURSLFFBQVEsa0NBQUFRLE1BQUEsQ0FBNkJULE9BQU8sUUFBSTtFQUNuSSxDQUFDLENBQUM7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtYm9vay1maW5kZXIvLi9zcmMvanMvZmV0Y2hCb29rRGV0YWlscy5qcz9iZWE0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBUaGlzIGZ1bmN0aW9uIG1ha2VzIGFuIEFQSSByZXF1ZXN0IHRvIGdldCBkYXRhIGZvciB0aGUgYm9vayBkZXNjcmlwdGlvbi4gRnVydGhlcm1vcmUsIGJ5IG1hbmFnaW5nIHRoZSBudW1Db3ZlciB2YXJpYWJsZSB3ZSBleHRyYWN0IHRoZSBjb3Zlcl9pZCB3aGljaCB3ZSBpbnNlcnQgaW50byB0aGUgaW1hZ2UgVVJMIHRvIG9idGFpbiB0aGUgY292ZXIqL1xuaW1wb3J0IGhhbmRsZURlc2NyaXB0aW9uIGZyb20gXCIuL2hhbmRsZURlc2NyaXB0aW9uXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZXRjaEJvb2tEZXRhaWxzKFxuICBuZXdVcmxEZXRhaWxzLFxuICB2YWx1ZUxpLFxuICBudW1Db3ZlcixcbiAgY29udGFpbmVyUmVzdWx0LFxuICBjb250YWluZXJDb3ZlckJvb2tcbikge1xuICByZXR1cm4gYXhpb3MuZ2V0KG5ld1VybERldGFpbHMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHJlc3BvbnNlIHN0YXR1cyBpcyB3aGF0IHlvdSBleHBlY3RcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFJlcXVlc3QgZmFpbGVkIGluIGZldGNoQm9va0RldGFpbHMgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgcmVzcERldGFpbHMgPSByZXNwb25zZS5kYXRhO1xuICAgIGNvbnNvbGUubG9nKHJlc3BEZXRhaWxzLmRlc2NyaXB0aW9uKTsgLy8gRGVidWdcblxuICAgIGNvbnRhaW5lclJlc3VsdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnRhaW5lckNvdmVyQm9vay5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBoYW5kbGVEZXNjcmlwdGlvbihyZXNwRGV0YWlscywgdmFsdWVMaSwgY29udGFpbmVyUmVzdWx0KTtcbiAgICB9LCAyMDAwKTtcblxuICAgIGNvbnRhaW5lckNvdmVyQm9vay5pbm5lckhUTUwgKz0gYDxpbWcgc3JjPVwiaHR0cHM6Ly9jb3ZlcnMub3BlbmxpYnJhcnkub3JnL2IvaWQvJHtudW1Db3Zlcn0tTS5qcGc/ZGVmYXVsdD10cnVlXCIgYWx0PVwiJHt2YWx1ZUxpfVwiPmA7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImhhbmRsZURlc2NyaXB0aW9uIiwiYXhpb3MiLCJmZXRjaEJvb2tEZXRhaWxzIiwibmV3VXJsRGV0YWlscyIsInZhbHVlTGkiLCJudW1Db3ZlciIsImNvbnRhaW5lclJlc3VsdCIsImNvbnRhaW5lckNvdmVyQm9vayIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsIkVycm9yIiwiY29uY2F0IiwicmVzcERldGFpbHMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRlc2NyaXB0aW9uIiwiaW5uZXJIVE1MIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/fetchBookDetails.js\n");

/***/ }),

/***/ "./src/js/generateUrl.js":
/*!*******************************!*\
  !*** ./src/js/generateUrl.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateUrl)\n/* harmony export */ });\n/* harmony import */ var _components_jsComponents_spaceRemover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/jsComponents/spaceRemover */ \"./src/components/jsComponents/spaceRemover.js\");\n/** In this function the URL is generated with the data entered by the visitor*/\n\nfunction generateUrl(categoryForm, valueInput) {\n  /**the valueInput constant takes the value typed by the user in the textbox and first removes the outer spaces of the string with .trim() and then converts the string to lowercase. */\n  valueInput = categoryForm.value.trim().toLowerCase();\n  console.log(valueInput);\n  if (valueInput === \"\") {\n    throw new Error(\"Enter a category first\");\n  }\n  if (valueInput.includes(\" \")) {\n    console.log(\"Include space\"); // Per il debug\n    valueInput = (0,_components_jsComponents_spaceRemover__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(valueInput);\n    console.log(valueInput); // Per il debug\n  }\n\n  // Genera e restituisci l'URL\n  return new URL(\"\".concat(valueInput, \".json\"), \"https://openlibrary.org/subjects/\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZ2VuZXJhdGVVcmwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNtRTtBQUVwRCxTQUFTQyxXQUFXQSxDQUFDQyxZQUFZLEVBQUVDLFVBQVUsRUFBRTtFQUM1RDtFQUNBQSxVQUFVLEdBQUdELFlBQVksQ0FBQ0UsS0FBSyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztFQUNwREMsT0FBTyxDQUFDQyxHQUFHLENBQUNMLFVBQVUsQ0FBQztFQUN2QixJQUFJQSxVQUFVLEtBQUssRUFBRSxFQUFFO0lBQ3JCLE1BQU0sSUFBSU0sS0FBSyxDQUFDLHdCQUF3QixDQUFDO0VBQzNDO0VBRUEsSUFBSU4sVUFBVSxDQUFDTyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDNUJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDOUJMLFVBQVUsR0FBR0gsaUZBQVksQ0FBQ0csVUFBVSxDQUFDO0lBQ3JDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsVUFBVSxDQUFDLENBQUMsQ0FBQztFQUMzQjs7RUFFQTtFQUNBLE9BQU8sSUFBSVEsR0FBRyxJQUFBQyxNQUFBLENBQUlULFVBQVUsWUFBUyxtQ0FBbUMsQ0FBQztBQUMzRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtYm9vay1maW5kZXIvLi9zcmMvanMvZ2VuZXJhdGVVcmwuanM/YjM0MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogSW4gdGhpcyBmdW5jdGlvbiB0aGUgVVJMIGlzIGdlbmVyYXRlZCB3aXRoIHRoZSBkYXRhIGVudGVyZWQgYnkgdGhlIHZpc2l0b3IqL1xuaW1wb3J0IHNwYWNlUmVtb3ZlciBmcm9tIFwiLi4vY29tcG9uZW50cy9qc0NvbXBvbmVudHMvc3BhY2VSZW1vdmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVXJsKGNhdGVnb3J5Rm9ybSwgdmFsdWVJbnB1dCkge1xuICAvKip0aGUgdmFsdWVJbnB1dCBjb25zdGFudCB0YWtlcyB0aGUgdmFsdWUgdHlwZWQgYnkgdGhlIHVzZXIgaW4gdGhlIHRleHRib3ggYW5kIGZpcnN0IHJlbW92ZXMgdGhlIG91dGVyIHNwYWNlcyBvZiB0aGUgc3RyaW5nIHdpdGggLnRyaW0oKSBhbmQgdGhlbiBjb252ZXJ0cyB0aGUgc3RyaW5nIHRvIGxvd2VyY2FzZS4gKi9cbiAgdmFsdWVJbnB1dCA9IGNhdGVnb3J5Rm9ybS52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgY29uc29sZS5sb2codmFsdWVJbnB1dCk7XG4gIGlmICh2YWx1ZUlucHV0ID09PSBcIlwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRW50ZXIgYSBjYXRlZ29yeSBmaXJzdFwiKTtcbiAgfVxuXG4gIGlmICh2YWx1ZUlucHV0LmluY2x1ZGVzKFwiIFwiKSkge1xuICAgIGNvbnNvbGUubG9nKFwiSW5jbHVkZSBzcGFjZVwiKTsgLy8gUGVyIGlsIGRlYnVnXG4gICAgdmFsdWVJbnB1dCA9IHNwYWNlUmVtb3Zlcih2YWx1ZUlucHV0KTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZUlucHV0KTsgLy8gUGVyIGlsIGRlYnVnXG4gIH1cblxuICAvLyBHZW5lcmEgZSByZXN0aXR1aXNjaSBsJ1VSTFxuICByZXR1cm4gbmV3IFVSTChgJHt2YWx1ZUlucHV0fS5qc29uYCwgXCJodHRwczovL29wZW5saWJyYXJ5Lm9yZy9zdWJqZWN0cy9cIik7XG59XG4iXSwibmFtZXMiOlsic3BhY2VSZW1vdmVyIiwiZ2VuZXJhdGVVcmwiLCJjYXRlZ29yeUZvcm0iLCJ2YWx1ZUlucHV0IiwidmFsdWUiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJpbmNsdWRlcyIsIlVSTCIsImNvbmNhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/generateUrl.js\n");

/***/ }),

/***/ "./src/js/handleDescription.js":
/*!*************************************!*\
  !*** ./src/js/handleDescription.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleDescription)\n/* harmony export */ });\n/* harmony import */ var _components_jsComponents_stringExtractor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/jsComponents/stringExtractor */ \"./src/components/jsComponents/stringExtractor.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n/** In this function we manage the description in the various cases that may occur to us*/\n\nvar buttonGoBack = document.querySelector(\".goBack\");\nfunction handleDescription(respDetails, valueLi, containerResult) {\n  // Reset container\n  containerResult.innerHTML = \"\";\n  buttonGoBack.style.display = \"block\";\n  if (!respDetails.description) {\n    // Case: Description absent\n    containerResult.innerHTML += \"\\n      <p>\\n        <h3>Description \".concat(valueLi, \"</h3>\\n        Descrizione non presente, per maggiori info visitare il sito:\\n        <a href=\\\"https://openlibrary.org\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">openLibrary.org</a>\\n      </p>\");\n  } else if (_typeof(respDetails.description) === \"object\" && respDetails.description.value) {\n    // Case: Description as object\n    containerResult.innerHTML += \"\\n      <p>\\n        <h3>\".concat(valueLi, \"</h3>\\n        \").concat(respDetails.description.value, \"\\n      </p>\");\n  } else {\n    // Case: Description as string, partial extraction\n    var extractedDetails = (0,_components_jsComponents_stringExtractor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(respDetails.description, \"Also contained in\");\n    containerResult.innerHTML += \"\\n      <p>\\n        <h3>\".concat(valueLi, \"</h3>\\n        \").concat(extractedDetails, \"\\n      </p>\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaGFuZGxlRGVzY3JpcHRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDeUU7QUFDekUsSUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7QUFFdkMsU0FBU0MsaUJBQWlCQSxDQUN2Q0MsV0FBVyxFQUNYQyxPQUFPLEVBQ1BDLGVBQWUsRUFDZjtFQUNBO0VBQ0FBLGVBQWUsQ0FBQ0MsU0FBUyxHQUFHLEVBQUU7RUFDOUJQLFlBQVksQ0FBQ1EsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztFQUNwQyxJQUFJLENBQUNMLFdBQVcsQ0FBQ00sV0FBVyxFQUFFO0lBQzVCO0lBQ0FKLGVBQWUsQ0FBQ0MsU0FBUyw0Q0FBQUksTUFBQSxDQUVITixPQUFPLDRNQUd0QjtFQUNULENBQUMsTUFBTSxJQUNMTyxPQUFBLENBQU9SLFdBQVcsQ0FBQ00sV0FBVyxNQUFLLFFBQVEsSUFDM0NOLFdBQVcsQ0FBQ00sV0FBVyxDQUFDRyxLQUFLLEVBQzdCO0lBQ0E7SUFDQVAsZUFBZSxDQUFDQyxTQUFTLGdDQUFBSSxNQUFBLENBRWZOLE9BQU8scUJBQUFNLE1BQUEsQ0FDWFAsV0FBVyxDQUFDTSxXQUFXLENBQUNHLEtBQUssaUJBQzVCO0VBQ1QsQ0FBQyxNQUFNO0lBQ0w7SUFDQSxJQUFNQyxnQkFBZ0IsR0FBR2Ysb0ZBQWUsQ0FDdENLLFdBQVcsQ0FBQ00sV0FBVyxFQUN2QixtQkFDRixDQUFDO0lBQ0RKLGVBQWUsQ0FBQ0MsU0FBUyxnQ0FBQUksTUFBQSxDQUVmTixPQUFPLHFCQUFBTSxNQUFBLENBQ1hHLGdCQUFnQixpQkFDZjtFQUNUO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJvb2stZmluZGVyLy4vc3JjL2pzL2hhbmRsZURlc2NyaXB0aW9uLmpzP2UxNWEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEluIHRoaXMgZnVuY3Rpb24gd2UgbWFuYWdlIHRoZSBkZXNjcmlwdGlvbiBpbiB0aGUgdmFyaW91cyBjYXNlcyB0aGF0IG1heSBvY2N1ciB0byB1cyovXG5pbXBvcnQgc3RyaW5nRXh0cmFjdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL2pzQ29tcG9uZW50cy9zdHJpbmdFeHRyYWN0b3JcIjtcbmNvbnN0IGJ1dHRvbkdvQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29CYWNrXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVEZXNjcmlwdGlvbihcbiAgcmVzcERldGFpbHMsXG4gIHZhbHVlTGksXG4gIGNvbnRhaW5lclJlc3VsdFxuKSB7XG4gIC8vIFJlc2V0IGNvbnRhaW5lclxuICBjb250YWluZXJSZXN1bHQuaW5uZXJIVE1MID0gXCJcIjtcbiAgYnV0dG9uR29CYWNrLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGlmICghcmVzcERldGFpbHMuZGVzY3JpcHRpb24pIHtcbiAgICAvLyBDYXNlOiBEZXNjcmlwdGlvbiBhYnNlbnRcbiAgICBjb250YWluZXJSZXN1bHQuaW5uZXJIVE1MICs9IGBcbiAgICAgIDxwPlxuICAgICAgICA8aDM+RGVzY3JpcHRpb24gJHt2YWx1ZUxpfTwvaDM+XG4gICAgICAgIERlc2NyaXppb25lIG5vbiBwcmVzZW50ZSwgcGVyIG1hZ2dpb3JpIGluZm8gdmlzaXRhcmUgaWwgc2l0bzpcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vb3BlbmxpYnJhcnkub3JnXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPm9wZW5MaWJyYXJ5Lm9yZzwvYT5cbiAgICAgIDwvcD5gO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiByZXNwRGV0YWlscy5kZXNjcmlwdGlvbiA9PT0gXCJvYmplY3RcIiAmJlxuICAgIHJlc3BEZXRhaWxzLmRlc2NyaXB0aW9uLnZhbHVlXG4gICkge1xuICAgIC8vIENhc2U6IERlc2NyaXB0aW9uIGFzIG9iamVjdFxuICAgIGNvbnRhaW5lclJlc3VsdC5pbm5lckhUTUwgKz0gYFxuICAgICAgPHA+XG4gICAgICAgIDxoMz4ke3ZhbHVlTGl9PC9oMz5cbiAgICAgICAgJHtyZXNwRGV0YWlscy5kZXNjcmlwdGlvbi52YWx1ZX1cbiAgICAgIDwvcD5gO1xuICB9IGVsc2Uge1xuICAgIC8vIENhc2U6IERlc2NyaXB0aW9uIGFzIHN0cmluZywgcGFydGlhbCBleHRyYWN0aW9uXG4gICAgY29uc3QgZXh0cmFjdGVkRGV0YWlscyA9IHN0cmluZ0V4dHJhY3RvcihcbiAgICAgIHJlc3BEZXRhaWxzLmRlc2NyaXB0aW9uLFxuICAgICAgXCJBbHNvIGNvbnRhaW5lZCBpblwiXG4gICAgKTtcbiAgICBjb250YWluZXJSZXN1bHQuaW5uZXJIVE1MICs9IGBcbiAgICAgIDxwPlxuICAgICAgICA8aDM+JHt2YWx1ZUxpfTwvaDM+XG4gICAgICAgICR7ZXh0cmFjdGVkRGV0YWlsc31cbiAgICAgIDwvcD5gO1xuICB9XG59XG4iXSwibmFtZXMiOlsic3RyaW5nRXh0cmFjdG9yIiwiYnV0dG9uR29CYWNrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGFuZGxlRGVzY3JpcHRpb24iLCJyZXNwRGV0YWlscyIsInZhbHVlTGkiLCJjb250YWluZXJSZXN1bHQiLCJpbm5lckhUTUwiLCJzdHlsZSIsImRpc3BsYXkiLCJkZXNjcmlwdGlvbiIsImNvbmNhdCIsIl90eXBlb2YiLCJ2YWx1ZSIsImV4dHJhY3RlZERldGFpbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/handleDescription.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styleScss_indexStyle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styleScss/indexStyle.scss */ \"./src/styleScss/indexStyle.scss\");\n/* harmony import */ var _components_jsComponents_stringExtractor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/jsComponents/stringExtractor.js */ \"./src/components/jsComponents/stringExtractor.js\");\n/* harmony import */ var _components_jsComponents_goBack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/jsComponents/goBack.js */ \"./src/components/jsComponents/goBack.js\");\n/* harmony import */ var _generateUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateUrl */ \"./src/js/generateUrl.js\");\n/* harmony import */ var _fetchBookDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetchBookDetails */ \"./src/js/fetchBookDetails.js\");\n/* harmony import */ var _fetchAuthors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetchAuthors */ \"./src/js/fetchAuthors.js\");\n/* harmony import */ var _detailsUrlDescription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detailsUrlDescription */ \"./src/js/detailsUrlDescription.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_logo_logo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/logo/logo.js */ \"./src/components/logo/logo.js\");\n/* harmony import */ var _components_logo_iconMySite_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/logo/iconMySite.js */ \"./src/components/logo/iconMySite.js\");\n\n\n\n\n\n\n\n\nvar containerEvent = document.querySelector(\".wrapperColumn\");\nvar containerResult = document.querySelector(\".containerTitleAuthors\");\nvar containerCoverBook = document.querySelector(\".containerCoverBook\");\nvar categoryForm = document.querySelector(\"#category\");\nvar buttonGoBack = document.querySelector(\".goBack\");\n\nvar containerLogo = document.querySelector(\".containerLogo\");\nif (!containerLogo.querySelector(\".my-logo\")) {\n  containerLogo.appendChild((0,_components_logo_logo_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])());\n}\n\nvar containerIcon = document.querySelector(\".row-social-footer\");\nif (!containerIcon.querySelector(\".my-icon\")) {\n  containerIcon.appendChild((0,_components_logo_iconMySite_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])());\n}\nvar collectedData = [];\n\n// Prevenire la duplicazione del listener\nif (!window.isEventListenerAttached) {\n  window.isEventListenerAttached = true;\n  containerEvent.addEventListener(\"click\", function (event) {\n    if (event.target.tagName === \"BUTTON\") {\n      //user click on the search button\n      console.log(event.target.tagName); //for debugging\n      event.preventDefault(); //to block the default submit event\n\n      var valueInput = \"\";\n      //we generate the url with the generateUrl function\n      var newUrl = (0,_generateUrl__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(categoryForm);\n\n      /**we send the fetch .get request with axios at https://openlibrary.org via the fetchAuthors function */\n      (0,_fetchAuthors__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(newUrl, containerResult, containerCoverBook, collectedData).then(function (response) {});\n    }\n    if (event.target.tagName === \"LI\") {\n      //the user clicks on a LI containing the title of the book and the author\n\n      /**the variable valueLi takes the value containing in the clicked LI element */\n      var valueLi = event.target.textContent;\n\n      /**We extract the entire string before the \"-\" character to have only the title of the book without the author, using the stringExtractor function */\n      var extractedTitle = (0,_components_jsComponents_stringExtractor_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(valueLi, \" - \");\n      console.log(extractedTitle); //for debugging\n\n      /**We compare the string extracted in the extract Title constant with the Data collection array to find a reference with the title selected by the user. */\n      var foundBook = collectedData.find(function (element) {\n        return element.title.toLowerCase().includes(extractedTitle.toLowerCase());\n      });\n      console.log(foundBook); //for debugging\n\n      /**from the correspondence found, the identification key of the book and the number identified for the book cover are returned */\n      var _detailsUrlDescriptio = (0,_detailsUrlDescription__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(foundBook),\n        keyBook = _detailsUrlDescriptio.keyBook,\n        numCover = _detailsUrlDescriptio.numCover;\n\n      /**the book key is used to create the url and send a new fetch request for the details of the book selected by the user */\n      var newUrlDetails = new URL(\"\".concat(keyBook, \".json?details=true\"), \"https://openlibrary.org/\");\n      // Make a request to the API for the book's description\n      (0,_fetchBookDetails__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(newUrlDetails, valueLi, numCover, containerResult, containerCoverBook)\n      /**If the request is successful, the response is handled in fetchBookDetails and the description with the respective book cover is displayed */.then(function (response) {})[\"catch\"](function (error) {\n        console.error(\"Error fetching book details:\", error.message);\n        throw new Error(error.message);\n      });\n    }\n    /**with the goback function combined with the creation of a dynamic button that appears only after viewing the book description, we can go back to the titles. */\n    if (event.target.className === \"goBack\") {\n      buttonGoBack.style.display = \"none\";\n      (0,_components_jsComponents_goBack_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(containerResult, containerCoverBook);\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ3NDO0FBQ2xCO0FBRWxCO0FBQ1U7QUFDUjtBQUNrQjtBQUVyQztBQUV2QixJQUFNTyxjQUFjLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQy9ELElBQU1DLGVBQWUsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsd0JBQXdCLENBQUM7QUFDeEUsSUFBTUUsa0JBQWtCLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0FBQ3hFLElBQU1HLFlBQVksR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0FBQ3hELElBQU1JLFlBQVksR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0FBRU47QUFDaEQsSUFBTU0sYUFBYSxHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUU5RCxJQUFJLENBQUNNLGFBQWEsQ0FBQ04sYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0VBQzVDTSxhQUFhLENBQUNDLFdBQVcsQ0FBQ0Ysb0VBQU0sQ0FBQyxDQUFDLENBQUM7QUFDckM7QUFFc0Q7QUFDdEQsSUFBTUksYUFBYSxHQUFHVixRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztBQUVsRSxJQUFJLENBQUNTLGFBQWEsQ0FBQ1QsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0VBQzVDUyxhQUFhLENBQUNGLFdBQVcsQ0FBQ0MsMEVBQU0sQ0FBQyxDQUFDLENBQUM7QUFDckM7QUFFQSxJQUFNRSxhQUFhLEdBQUcsRUFBRTs7QUFFeEI7QUFDQSxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsdUJBQXVCLEVBQUU7RUFDbkNELE1BQU0sQ0FBQ0MsdUJBQXVCLEdBQUcsSUFBSTtFQUVyQ2QsY0FBYyxDQUFDZSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVUMsS0FBSyxFQUFFO0lBQ3hELElBQUlBLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLEtBQUssUUFBUSxFQUFFO01BQ3JDO01BQ0FDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQztNQUNuQ0YsS0FBSyxDQUFDSyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7O01BRXhCLElBQUlDLFVBQVUsR0FBRyxFQUFFO01BQ25CO01BQ0EsSUFBTUMsTUFBTSxHQUFHNUIsd0RBQVcsQ0FBQ1UsWUFBWSxDQUFDOztNQUV4QztNQUNBUix5REFBWSxDQUNWMEIsTUFBTSxFQUNOcEIsZUFBZSxFQUNmQyxrQkFBa0IsRUFDbEJRLGFBQ0YsQ0FBQyxDQUFDWSxJQUFJLENBQUMsVUFBQ0MsUUFBUSxFQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFCO0lBQ0EsSUFBSVQsS0FBSyxDQUFDQyxNQUFNLENBQUNDLE9BQU8sS0FBSyxJQUFJLEVBQUU7TUFDakM7O01BRUE7TUFDQSxJQUFJUSxPQUFPLEdBQUdWLEtBQUssQ0FBQ0MsTUFBTSxDQUFDVSxXQUFXOztNQUV0QztNQUNBLElBQU1DLGNBQWMsR0FBR25DLHVGQUFlLENBQUNpQyxPQUFPLEVBQUUsS0FBSyxDQUFDO01BQ3REUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsY0FBYyxDQUFDLENBQUMsQ0FBQzs7TUFFN0I7TUFDQSxJQUFNQyxTQUFTLEdBQUdqQixhQUFhLENBQUNrQixJQUFJLENBQUMsVUFBQ0MsT0FBTztRQUFBLE9BQzNDQSxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDTixjQUFjLENBQUNLLFdBQVcsQ0FBQyxDQUFDLENBQUM7TUFBQSxDQUNwRSxDQUFDO01BQ0RkLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyxTQUFTLENBQUMsQ0FBQyxDQUFDOztNQUV4QjtNQUNBLElBQUFNLHFCQUFBLEdBQThCckMsa0VBQXFCLENBQUMrQixTQUFTLENBQUM7UUFBdERPLE9BQU8sR0FBQUQscUJBQUEsQ0FBUEMsT0FBTztRQUFFQyxRQUFRLEdBQUFGLHFCQUFBLENBQVJFLFFBQVE7O01BRXpCO01BQ0EsSUFBSUMsYUFBYSxHQUFHLElBQUlDLEdBQUcsSUFBQUMsTUFBQSxDQUN0QkosT0FBTyx5QkFDViwwQkFDRixDQUFDO01BQ0Q7TUFDQXhDLDZEQUFnQixDQUNkMEMsYUFBYSxFQUNiWixPQUFPLEVBQ1BXLFFBQVEsRUFDUmxDLGVBQWUsRUFDZkMsa0JBQ0Y7TUFDRSxnSkFDQ29CLElBQUksQ0FBQyxVQUFDQyxRQUFRLEVBQUssQ0FBQyxDQUFDLENBQUMsU0FDakIsQ0FBQyxVQUFDZ0IsS0FBSyxFQUFLO1FBQ2hCdEIsT0FBTyxDQUFDc0IsS0FBSyxDQUFDLDhCQUE4QixFQUFFQSxLQUFLLENBQUNDLE9BQU8sQ0FBQztRQUM1RCxNQUFNLElBQUlDLEtBQUssQ0FBQ0YsS0FBSyxDQUFDQyxPQUFPLENBQUM7TUFDaEMsQ0FBQyxDQUFDO0lBQ047SUFDQTtJQUNBLElBQUkxQixLQUFLLENBQUNDLE1BQU0sQ0FBQzJCLFNBQVMsS0FBSyxRQUFRLEVBQUU7TUFDdkN0QyxZQUFZLENBQUN1QyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO01BQ25DcEQsOEVBQU0sQ0FBQ1MsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQztJQUM3QztFQUNGLENBQUMsQ0FBQztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1ib29rLWZpbmRlci8uL3NyYy9qcy9pbmRleC5qcz83YmE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlU2Nzcy9pbmRleFN0eWxlLnNjc3NcIjtcbmltcG9ydCBzdHJpbmdFeHRyYWN0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvanNDb21wb25lbnRzL3N0cmluZ0V4dHJhY3Rvci5qc1wiO1xuaW1wb3J0IGdvQmFjayBmcm9tIFwiLi4vY29tcG9uZW50cy9qc0NvbXBvbmVudHMvZ29CYWNrLmpzXCI7XG5cbmltcG9ydCBnZW5lcmF0ZVVybCBmcm9tIFwiLi9nZW5lcmF0ZVVybFwiO1xuaW1wb3J0IGZldGNoQm9va0RldGFpbHMgZnJvbSBcIi4vZmV0Y2hCb29rRGV0YWlsc1wiO1xuaW1wb3J0IGZldGNoQXV0aG9ycyBmcm9tIFwiLi9mZXRjaEF1dGhvcnNcIjtcbmltcG9ydCBkZXRhaWxzVXJsRGVzY3JpcHRpb24gZnJvbSBcIi4vZGV0YWlsc1VybERlc2NyaXB0aW9uXCI7XG5cbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuY29uc3QgY29udGFpbmVyRXZlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJDb2x1bW5cIik7XG5jb25zdCBjb250YWluZXJSZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclRpdGxlQXV0aG9yc1wiKTtcbmNvbnN0IGNvbnRhaW5lckNvdmVyQm9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyQ292ZXJCb29rXCIpO1xuY29uc3QgY2F0ZWdvcnlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXRlZ29yeVwiKTtcbmNvbnN0IGJ1dHRvbkdvQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29CYWNrXCIpO1xuXG5pbXBvcnQgbG9nb0ZuIGZyb20gXCIuLi9jb21wb25lbnRzL2xvZ28vbG9nby5qc1wiO1xuY29uc3QgY29udGFpbmVyTG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyTG9nb1wiKTtcblxuaWYgKCFjb250YWluZXJMb2dvLnF1ZXJ5U2VsZWN0b3IoXCIubXktbG9nb1wiKSkge1xuICBjb250YWluZXJMb2dvLmFwcGVuZENoaWxkKGxvZ29GbigpKTtcbn1cblxuaW1wb3J0IGljb25GbiBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2dvL2ljb25NeVNpdGUuanNcIjtcbmNvbnN0IGNvbnRhaW5lckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdy1zb2NpYWwtZm9vdGVyXCIpO1xuXG5pZiAoIWNvbnRhaW5lckljb24ucXVlcnlTZWxlY3RvcihcIi5teS1pY29uXCIpKSB7XG4gIGNvbnRhaW5lckljb24uYXBwZW5kQ2hpbGQoaWNvbkZuKCkpO1xufVxuXG5jb25zdCBjb2xsZWN0ZWREYXRhID0gW107XG5cbi8vIFByZXZlbmlyZSBsYSBkdXBsaWNhemlvbmUgZGVsIGxpc3RlbmVyXG5pZiAoIXdpbmRvdy5pc0V2ZW50TGlzdGVuZXJBdHRhY2hlZCkge1xuICB3aW5kb3cuaXNFdmVudExpc3RlbmVyQXR0YWNoZWQgPSB0cnVlO1xuXG4gIGNvbnRhaW5lckV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09IFwiQlVUVE9OXCIpIHtcbiAgICAgIC8vdXNlciBjbGljayBvbiB0aGUgc2VhcmNoIGJ1dHRvblxuICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnRhZ05hbWUpOyAvL2ZvciBkZWJ1Z2dpbmdcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vdG8gYmxvY2sgdGhlIGRlZmF1bHQgc3VibWl0IGV2ZW50XG5cbiAgICAgIGxldCB2YWx1ZUlucHV0ID0gXCJcIjtcbiAgICAgIC8vd2UgZ2VuZXJhdGUgdGhlIHVybCB3aXRoIHRoZSBnZW5lcmF0ZVVybCBmdW5jdGlvblxuICAgICAgY29uc3QgbmV3VXJsID0gZ2VuZXJhdGVVcmwoY2F0ZWdvcnlGb3JtKTtcblxuICAgICAgLyoqd2Ugc2VuZCB0aGUgZmV0Y2ggLmdldCByZXF1ZXN0IHdpdGggYXhpb3MgYXQgaHR0cHM6Ly9vcGVubGlicmFyeS5vcmcgdmlhIHRoZSBmZXRjaEF1dGhvcnMgZnVuY3Rpb24gKi9cbiAgICAgIGZldGNoQXV0aG9ycyhcbiAgICAgICAgbmV3VXJsLFxuICAgICAgICBjb250YWluZXJSZXN1bHQsXG4gICAgICAgIGNvbnRhaW5lckNvdmVyQm9vayxcbiAgICAgICAgY29sbGVjdGVkRGF0YVxuICAgICAgKS50aGVuKChyZXNwb25zZSkgPT4ge30pO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09IFwiTElcIikge1xuICAgICAgLy90aGUgdXNlciBjbGlja3Mgb24gYSBMSSBjb250YWluaW5nIHRoZSB0aXRsZSBvZiB0aGUgYm9vayBhbmQgdGhlIGF1dGhvclxuXG4gICAgICAvKip0aGUgdmFyaWFibGUgdmFsdWVMaSB0YWtlcyB0aGUgdmFsdWUgY29udGFpbmluZyBpbiB0aGUgY2xpY2tlZCBMSSBlbGVtZW50ICovXG4gICAgICBsZXQgdmFsdWVMaSA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcblxuICAgICAgLyoqV2UgZXh0cmFjdCB0aGUgZW50aXJlIHN0cmluZyBiZWZvcmUgdGhlIFwiLVwiIGNoYXJhY3RlciB0byBoYXZlIG9ubHkgdGhlIHRpdGxlIG9mIHRoZSBib29rIHdpdGhvdXQgdGhlIGF1dGhvciwgdXNpbmcgdGhlIHN0cmluZ0V4dHJhY3RvciBmdW5jdGlvbiAqL1xuICAgICAgY29uc3QgZXh0cmFjdGVkVGl0bGUgPSBzdHJpbmdFeHRyYWN0b3IodmFsdWVMaSwgXCIgLSBcIik7XG4gICAgICBjb25zb2xlLmxvZyhleHRyYWN0ZWRUaXRsZSk7IC8vZm9yIGRlYnVnZ2luZ1xuXG4gICAgICAvKipXZSBjb21wYXJlIHRoZSBzdHJpbmcgZXh0cmFjdGVkIGluIHRoZSBleHRyYWN0IFRpdGxlIGNvbnN0YW50IHdpdGggdGhlIERhdGEgY29sbGVjdGlvbiBhcnJheSB0byBmaW5kIGEgcmVmZXJlbmNlIHdpdGggdGhlIHRpdGxlIHNlbGVjdGVkIGJ5IHRoZSB1c2VyLiAqL1xuICAgICAgY29uc3QgZm91bmRCb29rID0gY29sbGVjdGVkRGF0YS5maW5kKChlbGVtZW50KSA9PlxuICAgICAgICBlbGVtZW50LnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZXh0cmFjdGVkVGl0bGUudG9Mb3dlckNhc2UoKSlcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhmb3VuZEJvb2spOyAvL2ZvciBkZWJ1Z2dpbmdcblxuICAgICAgLyoqZnJvbSB0aGUgY29ycmVzcG9uZGVuY2UgZm91bmQsIHRoZSBpZGVudGlmaWNhdGlvbiBrZXkgb2YgdGhlIGJvb2sgYW5kIHRoZSBudW1iZXIgaWRlbnRpZmllZCBmb3IgdGhlIGJvb2sgY292ZXIgYXJlIHJldHVybmVkICovXG4gICAgICBjb25zdCB7IGtleUJvb2ssIG51bUNvdmVyIH0gPSBkZXRhaWxzVXJsRGVzY3JpcHRpb24oZm91bmRCb29rKTtcblxuICAgICAgLyoqdGhlIGJvb2sga2V5IGlzIHVzZWQgdG8gY3JlYXRlIHRoZSB1cmwgYW5kIHNlbmQgYSBuZXcgZmV0Y2ggcmVxdWVzdCBmb3IgdGhlIGRldGFpbHMgb2YgdGhlIGJvb2sgc2VsZWN0ZWQgYnkgdGhlIHVzZXIgKi9cbiAgICAgIGxldCBuZXdVcmxEZXRhaWxzID0gbmV3IFVSTChcbiAgICAgICAgYCR7a2V5Qm9va30uanNvbj9kZXRhaWxzPXRydWVgLFxuICAgICAgICBcImh0dHBzOi8vb3BlbmxpYnJhcnkub3JnL1wiXG4gICAgICApO1xuICAgICAgLy8gTWFrZSBhIHJlcXVlc3QgdG8gdGhlIEFQSSBmb3IgdGhlIGJvb2sncyBkZXNjcmlwdGlvblxuICAgICAgZmV0Y2hCb29rRGV0YWlscyhcbiAgICAgICAgbmV3VXJsRGV0YWlscyxcbiAgICAgICAgdmFsdWVMaSxcbiAgICAgICAgbnVtQ292ZXIsXG4gICAgICAgIGNvbnRhaW5lclJlc3VsdCxcbiAgICAgICAgY29udGFpbmVyQ292ZXJCb29rXG4gICAgICApXG4gICAgICAgIC8qKklmIHRoZSByZXF1ZXN0IGlzIHN1Y2Nlc3NmdWwsIHRoZSByZXNwb25zZSBpcyBoYW5kbGVkIGluIGZldGNoQm9va0RldGFpbHMgYW5kIHRoZSBkZXNjcmlwdGlvbiB3aXRoIHRoZSByZXNwZWN0aXZlIGJvb2sgY292ZXIgaXMgZGlzcGxheWVkICovXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge30pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgYm9vayBkZXRhaWxzOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKip3aXRoIHRoZSBnb2JhY2sgZnVuY3Rpb24gY29tYmluZWQgd2l0aCB0aGUgY3JlYXRpb24gb2YgYSBkeW5hbWljIGJ1dHRvbiB0aGF0IGFwcGVhcnMgb25seSBhZnRlciB2aWV3aW5nIHRoZSBib29rIGRlc2NyaXB0aW9uLCB3ZSBjYW4gZ28gYmFjayB0byB0aGUgdGl0bGVzLiAqL1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSBcImdvQmFja1wiKSB7XG4gICAgICBidXR0b25Hb0JhY2suc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgZ29CYWNrKGNvbnRhaW5lclJlc3VsdCwgY29udGFpbmVyQ292ZXJCb29rKTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInN0cmluZ0V4dHJhY3RvciIsImdvQmFjayIsImdlbmVyYXRlVXJsIiwiZmV0Y2hCb29rRGV0YWlscyIsImZldGNoQXV0aG9ycyIsImRldGFpbHNVcmxEZXNjcmlwdGlvbiIsIl8iLCJjb250YWluZXJFdmVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5lclJlc3VsdCIsImNvbnRhaW5lckNvdmVyQm9vayIsImNhdGVnb3J5Rm9ybSIsImJ1dHRvbkdvQmFjayIsImxvZ29GbiIsImNvbnRhaW5lckxvZ28iLCJhcHBlbmRDaGlsZCIsImljb25GbiIsImNvbnRhaW5lckljb24iLCJjb2xsZWN0ZWREYXRhIiwid2luZG93IiwiaXNFdmVudExpc3RlbmVyQXR0YWNoZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwidmFsdWVJbnB1dCIsIm5ld1VybCIsInRoZW4iLCJyZXNwb25zZSIsInZhbHVlTGkiLCJ0ZXh0Q29udGVudCIsImV4dHJhY3RlZFRpdGxlIiwiZm91bmRCb29rIiwiZmluZCIsImVsZW1lbnQiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJfZGV0YWlsc1VybERlc2NyaXB0aW8iLCJrZXlCb29rIiwibnVtQ292ZXIiLCJuZXdVcmxEZXRhaWxzIiwiVVJMIiwiY29uY2F0IiwiZXJyb3IiLCJtZXNzYWdlIiwiRXJyb3IiLCJjbGFzc05hbWUiLCJzdHlsZSIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/components/logo/icon-footer-lr-web-site.png":
/*!*********************************************************!*\
  !*** ./src/components/logo/icon-footer-lr-web-site.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/icon-footer-lr-web-site.69ca14e5.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sb2dvL2ljb24tZm9vdGVyLWxyLXdlYi1zaXRlLnBuZyIsIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1ib29rLWZpbmRlci8uL3NyYy9jb21wb25lbnRzL2xvZ28vaWNvbi1mb290ZXItbHItd2ViLXNpdGUucG5nPzE3ZGUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1ncy9pY29uLWZvb3Rlci1sci13ZWItc2l0ZS42OWNhMTRlNS5wbmdcIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/logo/icon-footer-lr-web-site.png\n");

/***/ }),

/***/ "./src/components/logo/logo-book-finder-dark.png":
/*!*******************************************************!*\
  !*** ./src/components/logo/logo-book-finder-dark.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/logo-book-finder-dark.81441a34.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sb2dvL2xvZ28tYm9vay1maW5kZXItZGFyay5wbmciLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLHFCQUF1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtYm9vay1maW5kZXIvLi9zcmMvY29tcG9uZW50cy9sb2dvL2xvZ28tYm9vay1maW5kZXItZGFyay5wbmc/OGY2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWdzL2xvZ28tYm9vay1maW5kZXItZGFyay44MTQ0MWEzNC5wbmdcIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/logo/logo-book-finder-dark.png\n");

/***/ }),

/***/ "./src/components/logo/styleIconMS.scss":
/*!**********************************************!*\
  !*** ./src/components/logo/styleIconMS.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sb2dvL3N0eWxlSWNvbk1TLnNjc3MiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1ib29rLWZpbmRlci8uL3NyYy9jb21wb25lbnRzL2xvZ28vc3R5bGVJY29uTVMuc2Nzcz80MWVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/logo/styleIconMS.scss\n");

/***/ }),

/***/ "./src/components/logo/styleLogo.scss":
/*!********************************************!*\
  !*** ./src/components/logo/styleLogo.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sb2dvL3N0eWxlTG9nby5zY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtYm9vay1maW5kZXIvLi9zcmMvY29tcG9uZW50cy9sb2dvL3N0eWxlTG9nby5zY3NzP2I4NDAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/logo/styleLogo.scss\n");

/***/ }),

/***/ "./src/styleScss/indexStyle.scss":
/*!***************************************!*\
  !*** ./src/styleScss/indexStyle.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVTY3NzL2luZGV4U3R5bGUuc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJvb2stZmluZGVyLy4vc3JjL3N0eWxlU2Nzcy9pbmRleFN0eWxlLnNjc3M/NzA0YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styleScss/indexStyle.scss\n");

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproject_book_finder"] = self["webpackChunkproject_book_finder"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_axios_lib_axios_js","vendors-node_modules_axios_lib_core_Axios_js-node_modules_axios_lib_core_settle_js-node_modul-696cab","vendors-node_modules_axios_lib_helpers_HttpStatusCode_js-node_modules_axios_lib_helpers_bind_-8392a1","vendors-node_modules_axios_lib_platform_index_js-node_modules_axios_lib_utils_js","vendors-node_modules_lodash_lodash_js"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;