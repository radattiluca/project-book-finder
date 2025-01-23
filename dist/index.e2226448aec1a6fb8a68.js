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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAuthors)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/**This function makes an API request and manages data to display a list of book titles and authors of the category selected by the user */\n ///to use the _.get method\n\nfunction fetchAuthors(newUrl, containerResult, containerCoverBook, collectedData) {\n  return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(newUrl).then(function (response) {\n    // Check if the response status is what you expect\n    if (response.status !== 200) {\n      throw new Error(\"Request failed in fetchAuthors with status \".concat(response.status));\n    }\n    var resp = response.data; // Access response data\n    console.log(resp); // Debug\n\n    var authors = lodash__WEBPACK_IMPORTED_MODULE_0___default().get(resp, \"works\", []); // Extract the array of objects containing authors and book titles\n\n    if (authors.length === 0) {\n      throw new Error(\"The category entered is invalid\");\n    }\n    console.log(authors); // Debug\n    containerCoverBook.innerHTML = \"\";\n    containerResult.innerHTML = \"\";\n\n    // Iterate over the authors array to populate `collectedData` and update the DOM\n    authors.forEach(function (element) {\n      var objAuthors = lodash__WEBPACK_IMPORTED_MODULE_0___default().get(element, \"authors[0].name\", \"Unknown\");\n      var objTitle = lodash__WEBPACK_IMPORTED_MODULE_0___default().get(element, \"title\", \"Unknown\");\n      var objKey = lodash__WEBPACK_IMPORTED_MODULE_0___default().get(element, \"key\", \"Unknown\");\n      var objIdCover = lodash__WEBPACK_IMPORTED_MODULE_0___default().get(element, \"cover_id\", \"Unknown\");\n\n      // Create an array of objects with corresponding title, author, and key\n      collectedData.push({\n        title: objTitle,\n        authors: objAuthors,\n        key: objKey,\n        coverId: objIdCover\n      });\n\n      // Populate the containerResult with titles and authors\n      containerResult.innerHTML += \"<li>\".concat(objTitle, \" - \").concat(objAuthors, \"</li>\");\n    });\n    return {\n      collectedData: collectedData,\n      containerResult: containerResult,\n      containerCoverBook: containerCoverBook\n    };\n  })[\"catch\"](function (error) {\n    console.error(\"Error fetching authors:\", error.message);\n    throw new Error(error.message);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZmV0Y2hBdXRob3JzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUN1QixDQUFDO0FBQ0U7QUFDWCxTQUFTRSxZQUFZQSxDQUNsQ0MsTUFBTSxFQUNOQyxlQUFlLEVBQ2ZDLGtCQUFrQixFQUNsQkMsYUFBYSxFQUNiO0VBQ0EsT0FBT0wsNkNBQUssQ0FDVE0sR0FBRyxDQUFDSixNQUFNLENBQUMsQ0FDWEssSUFBSSxDQUFDLFVBQUNDLFFBQVEsRUFBSztJQUNsQjtJQUNBLElBQUlBLFFBQVEsQ0FBQ0MsTUFBTSxLQUFLLEdBQUcsRUFBRTtNQUMzQixNQUFNLElBQUlDLEtBQUssK0NBQUFDLE1BQUEsQ0FDaUNILFFBQVEsQ0FBQ0MsTUFBTSxDQUMvRCxDQUFDO0lBQ0g7SUFDQSxJQUFNRyxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDLENBQUM7SUFDNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLENBQUMsQ0FBQyxDQUFDOztJQUVuQixJQUFNSSxPQUFPLEdBQUdqQixpREFBSyxDQUFDYSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0lBRTFDLElBQUlJLE9BQU8sQ0FBQ0MsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUN4QixNQUFNLElBQUlQLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQztJQUNwRDtJQUVBSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN0Qlosa0JBQWtCLENBQUNjLFNBQVMsR0FBRyxFQUFFO0lBQ2pDZixlQUFlLENBQUNlLFNBQVMsR0FBRyxFQUFFOztJQUU5QjtJQUNBRixPQUFPLENBQUNHLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUs7TUFDM0IsSUFBTUMsVUFBVSxHQUFHdEIsaURBQUssQ0FBQ3FCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLENBQUM7TUFDL0QsSUFBTUUsUUFBUSxHQUFHdkIsaURBQUssQ0FBQ3FCLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO01BQ25ELElBQU1HLE1BQU0sR0FBR3hCLGlEQUFLLENBQUNxQixPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQztNQUMvQyxJQUFNSSxVQUFVLEdBQUd6QixpREFBSyxDQUFDcUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUM7O01BRXhEO01BQ0FmLGFBQWEsQ0FBQ29CLElBQUksQ0FBQztRQUNqQkMsS0FBSyxFQUFFSixRQUFRO1FBQ2ZOLE9BQU8sRUFBRUssVUFBVTtRQUNuQk0sR0FBRyxFQUFFSixNQUFNO1FBQ1hLLE9BQU8sRUFBRUo7TUFDWCxDQUFDLENBQUM7O01BRUY7TUFDQXJCLGVBQWUsQ0FBQ2UsU0FBUyxXQUFBUCxNQUFBLENBQVdXLFFBQVEsU0FBQVgsTUFBQSxDQUFNVSxVQUFVLFVBQU87SUFDckUsQ0FBQyxDQUFDO0lBQ0YsT0FBTztNQUFFaEIsYUFBYSxFQUFiQSxhQUFhO01BQUVGLGVBQWUsRUFBZkEsZUFBZTtNQUFFQyxrQkFBa0IsRUFBbEJBO0lBQW1CLENBQUM7RUFDL0QsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFDeUIsS0FBSyxFQUFLO0lBQ2hCZixPQUFPLENBQUNlLEtBQUssQ0FBQyx5QkFBeUIsRUFBRUEsS0FBSyxDQUFDQyxPQUFPLENBQUM7SUFDdkQsTUFBTSxJQUFJcEIsS0FBSyxDQUFDbUIsS0FBSyxDQUFDQyxPQUFPLENBQUM7RUFDaEMsQ0FBQyxDQUFDO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJvb2stZmluZGVyLy4vc3JjL2pzL2ZldGNoQXV0aG9ycy5qcz85MTFmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlRoaXMgZnVuY3Rpb24gbWFrZXMgYW4gQVBJIHJlcXVlc3QgYW5kIG1hbmFnZXMgZGF0YSB0byBkaXNwbGF5IGEgbGlzdCBvZiBib29rIHRpdGxlcyBhbmQgYXV0aG9ycyBvZiB0aGUgY2F0ZWdvcnkgc2VsZWN0ZWQgYnkgdGhlIHVzZXIgKi9cbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjsgLy8vdG8gdXNlIHRoZSBfLmdldCBtZXRob2RcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZldGNoQXV0aG9ycyhcbiAgbmV3VXJsLFxuICBjb250YWluZXJSZXN1bHQsXG4gIGNvbnRhaW5lckNvdmVyQm9vayxcbiAgY29sbGVjdGVkRGF0YVxuKSB7XG4gIHJldHVybiBheGlvc1xuICAgIC5nZXQobmV3VXJsKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHJlc3BvbnNlIHN0YXR1cyBpcyB3aGF0IHlvdSBleHBlY3RcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFJlcXVlc3QgZmFpbGVkIGluIGZldGNoQXV0aG9ycyB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCByZXNwID0gcmVzcG9uc2UuZGF0YTsgLy8gQWNjZXNzIHJlc3BvbnNlIGRhdGFcbiAgICAgIGNvbnNvbGUubG9nKHJlc3ApOyAvLyBEZWJ1Z1xuXG4gICAgICBjb25zdCBhdXRob3JzID0gXy5nZXQocmVzcCwgXCJ3b3Jrc1wiLCBbXSk7IC8vIEV4dHJhY3QgdGhlIGFycmF5IG9mIG9iamVjdHMgY29udGFpbmluZyBhdXRob3JzIGFuZCBib29rIHRpdGxlc1xuXG4gICAgICBpZiAoYXV0aG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNhdGVnb3J5IGVudGVyZWQgaXMgaW52YWxpZFwiKTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coYXV0aG9ycyk7IC8vIERlYnVnXG4gICAgICBjb250YWluZXJDb3ZlckJvb2suaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGNvbnRhaW5lclJlc3VsdC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIGF1dGhvcnMgYXJyYXkgdG8gcG9wdWxhdGUgYGNvbGxlY3RlZERhdGFgIGFuZCB1cGRhdGUgdGhlIERPTVxuICAgICAgYXV0aG9ycy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG9iakF1dGhvcnMgPSBfLmdldChlbGVtZW50LCBcImF1dGhvcnNbMF0ubmFtZVwiLCBcIlVua25vd25cIik7XG4gICAgICAgIGNvbnN0IG9ialRpdGxlID0gXy5nZXQoZWxlbWVudCwgXCJ0aXRsZVwiLCBcIlVua25vd25cIik7XG4gICAgICAgIGNvbnN0IG9iaktleSA9IF8uZ2V0KGVsZW1lbnQsIFwia2V5XCIsIFwiVW5rbm93blwiKTtcbiAgICAgICAgY29uc3Qgb2JqSWRDb3ZlciA9IF8uZ2V0KGVsZW1lbnQsIFwiY292ZXJfaWRcIiwgXCJVbmtub3duXCIpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhbiBhcnJheSBvZiBvYmplY3RzIHdpdGggY29ycmVzcG9uZGluZyB0aXRsZSwgYXV0aG9yLCBhbmQga2V5XG4gICAgICAgIGNvbGxlY3RlZERhdGEucHVzaCh7XG4gICAgICAgICAgdGl0bGU6IG9ialRpdGxlLFxuICAgICAgICAgIGF1dGhvcnM6IG9iakF1dGhvcnMsXG4gICAgICAgICAga2V5OiBvYmpLZXksXG4gICAgICAgICAgY292ZXJJZDogb2JqSWRDb3ZlcixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUG9wdWxhdGUgdGhlIGNvbnRhaW5lclJlc3VsdCB3aXRoIHRpdGxlcyBhbmQgYXV0aG9yc1xuICAgICAgICBjb250YWluZXJSZXN1bHQuaW5uZXJIVE1MICs9IGA8bGk+JHtvYmpUaXRsZX0gLSAke29iakF1dGhvcnN9PC9saT5gO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4geyBjb2xsZWN0ZWREYXRhLCBjb250YWluZXJSZXN1bHQsIGNvbnRhaW5lckNvdmVyQm9vayB9O1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGF1dGhvcnM6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbIl8iLCJheGlvcyIsImZldGNoQXV0aG9ycyIsIm5ld1VybCIsImNvbnRhaW5lclJlc3VsdCIsImNvbnRhaW5lckNvdmVyQm9vayIsImNvbGxlY3RlZERhdGEiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsImNvbmNhdCIsInJlc3AiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImF1dGhvcnMiLCJsZW5ndGgiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm9iakF1dGhvcnMiLCJvYmpUaXRsZSIsIm9iaktleSIsIm9iaklkQ292ZXIiLCJwdXNoIiwidGl0bGUiLCJrZXkiLCJjb3ZlcklkIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/fetchAuthors.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateUrl)\n/* harmony export */ });\n/* harmony import */ var _components_jsComponents_spaceRemover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/jsComponents/spaceRemover */ \"./src/components/jsComponents/spaceRemover.js\");\n/** In this function the URL is generated with the data entered by the visitor*/\n\nfunction generateUrl(categoryForm) {\n  // Ottieni e normalizza l'input dell'utente\n  var valueInput = categoryForm.value.toLowerCase();\n  if (valueInput === \"\") {\n    throw new Error(\"Enter a category first\");\n  }\n  if (valueInput.includes(\" \")) {\n    console.log(\"Include space\"); // Per il debug\n    valueInput = (0,_components_jsComponents_spaceRemover__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(valueInput);\n    console.log(valueInput); // Per il debug\n  }\n\n  // Genera e restituisci l'URL\n  return new URL(\"\".concat(valueInput, \".json\"), \"https://openlibrary.org/subjects/\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZ2VuZXJhdGVVcmwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNtRTtBQUVwRCxTQUFTQyxXQUFXQSxDQUFDQyxZQUFZLEVBQUU7RUFDaEQ7RUFDQSxJQUFJQyxVQUFVLEdBQUdELFlBQVksQ0FBQ0UsS0FBSyxDQUFDQyxXQUFXLENBQUMsQ0FBQztFQUVqRCxJQUFJRixVQUFVLEtBQUssRUFBRSxFQUFFO0lBQ3JCLE1BQU0sSUFBSUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDO0VBQzNDO0VBRUEsSUFBSUgsVUFBVSxDQUFDSSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDOUJOLFVBQVUsR0FBR0gsaUZBQVksQ0FBQ0csVUFBVSxDQUFDO0lBQ3JDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sVUFBVSxDQUFDLENBQUMsQ0FBQztFQUMzQjs7RUFFQTtFQUNBLE9BQU8sSUFBSU8sR0FBRyxJQUFBQyxNQUFBLENBQUlSLFVBQVUsWUFBUyxtQ0FBbUMsQ0FBQztBQUMzRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtYm9vay1maW5kZXIvLi9zcmMvanMvZ2VuZXJhdGVVcmwuanM/YjM0MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogSW4gdGhpcyBmdW5jdGlvbiB0aGUgVVJMIGlzIGdlbmVyYXRlZCB3aXRoIHRoZSBkYXRhIGVudGVyZWQgYnkgdGhlIHZpc2l0b3IqL1xuaW1wb3J0IHNwYWNlUmVtb3ZlciBmcm9tIFwiLi4vY29tcG9uZW50cy9qc0NvbXBvbmVudHMvc3BhY2VSZW1vdmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVXJsKGNhdGVnb3J5Rm9ybSkge1xuICAvLyBPdHRpZW5pIGUgbm9ybWFsaXp6YSBsJ2lucHV0IGRlbGwndXRlbnRlXG4gIGxldCB2YWx1ZUlucHV0ID0gY2F0ZWdvcnlGb3JtLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKHZhbHVlSW5wdXQgPT09IFwiXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbnRlciBhIGNhdGVnb3J5IGZpcnN0XCIpO1xuICB9XG5cbiAgaWYgKHZhbHVlSW5wdXQuaW5jbHVkZXMoXCIgXCIpKSB7XG4gICAgY29uc29sZS5sb2coXCJJbmNsdWRlIHNwYWNlXCIpOyAvLyBQZXIgaWwgZGVidWdcbiAgICB2YWx1ZUlucHV0ID0gc3BhY2VSZW1vdmVyKHZhbHVlSW5wdXQpO1xuICAgIGNvbnNvbGUubG9nKHZhbHVlSW5wdXQpOyAvLyBQZXIgaWwgZGVidWdcbiAgfVxuXG4gIC8vIEdlbmVyYSBlIHJlc3RpdHVpc2NpIGwnVVJMXG4gIHJldHVybiBuZXcgVVJMKGAke3ZhbHVlSW5wdXR9Lmpzb25gLCBcImh0dHBzOi8vb3BlbmxpYnJhcnkub3JnL3N1YmplY3RzL1wiKTtcbn1cbiJdLCJuYW1lcyI6WyJzcGFjZVJlbW92ZXIiLCJnZW5lcmF0ZVVybCIsImNhdGVnb3J5Rm9ybSIsInZhbHVlSW5wdXQiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwiRXJyb3IiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJVUkwiLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/generateUrl.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styleScss_indexStyle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styleScss/indexStyle.scss */ \"./src/styleScss/indexStyle.scss\");\n/* harmony import */ var _components_jsComponents_stringExtractor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/jsComponents/stringExtractor.js */ \"./src/components/jsComponents/stringExtractor.js\");\n/* harmony import */ var _components_jsComponents_goBack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/jsComponents/goBack.js */ \"./src/components/jsComponents/goBack.js\");\n/* harmony import */ var _generateUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateUrl */ \"./src/js/generateUrl.js\");\n/* harmony import */ var _fetchBookDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetchBookDetails */ \"./src/js/fetchBookDetails.js\");\n/* harmony import */ var _fetchAuthors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetchAuthors */ \"./src/js/fetchAuthors.js\");\n/* harmony import */ var _detailsUrlDescription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detailsUrlDescription */ \"./src/js/detailsUrlDescription.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_logo_logo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/logo/logo.js */ \"./src/components/logo/logo.js\");\n/* harmony import */ var _components_logo_iconMySite_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/logo/iconMySite.js */ \"./src/components/logo/iconMySite.js\");\n\n\n\n\n\n\n\n\nvar containerEvent = document.querySelector(\".wrapperColumn\");\nvar containerResult = document.querySelector(\".containerTitleAuthors\");\nvar containerCoverBook = document.querySelector(\".containerCoverBook\");\nvar categoryForm = document.querySelector(\"#category\");\nvar buttonGoBack = document.querySelector(\".goBack\");\nvar collectedData = [];\n\nvar containerLogo = document.querySelector(\".containerLogo\");\nif (!containerLogo.querySelector(\".my-logo\")) {\n  containerLogo.appendChild((0,_components_logo_logo_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])());\n}\n\nvar containerIcon = document.querySelector(\".row-social-footer\");\nif (!containerIcon.querySelector(\".my-icon\")) {\n  containerIcon.appendChild((0,_components_logo_iconMySite_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])());\n}\n\n// Prevenire la duplicazione del listener\nif (!window.isEventListenerAttached) {\n  window.isEventListenerAttached = true;\n  containerEvent.addEventListener(\"click\", function (event) {\n    if (event.target.tagName === \"BUTTON\") {\n      //user click on the search button\n      console.log(event.target.tagName); //for debugging\n      event.preventDefault(); //to block the default submit event\n      /**the valueInput constant takes the value typed by the user in the textbox and first removes the outer spaces of the string with .trim() and then converts the string to lowercase. */\n      var valueInput = categoryForm.value.trim().toLowerCase();\n      /**this if returns an error if the user does not enter a category and presses the search button */\n      if (!valueInput) {\n        throw new Error(\"Enter a category first\");\n      }\n      //we generate the url with the generateUrl function\n      var newUrl = (0,_generateUrl__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(categoryForm);\n      //console.log(newUrl); //for debugging\n      //console.log(valueInput); //for debugging\n\n      /**we send the fetch .get request with axios at https://openlibrary.org via the fetchAuthors function */\n      (0,_fetchAuthors__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(newUrl, containerResult, containerCoverBook, collectedData).then(function (response) {});\n    }\n    if (event.target.tagName === \"LI\") {\n      //the user clicks on a LI containing the title of the book and the author\n\n      /**the variable valueLi takes the value containing in the clicked LI element */\n      var valueLi = event.target.textContent;\n\n      /**We extract the entire string before the \"-\" character to have only the title of the book without the author, using the stringExtractor function */\n      var extractedTitle = (0,_components_jsComponents_stringExtractor_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(valueLi, \" - \");\n      console.log(extractedTitle); //for debugging\n\n      /**We compare the string extracted in the extract Title constant with the Data collection array to find a reference with the title selected by the user. */\n      var foundBook = collectedData.find(function (element) {\n        return element.title.toLowerCase().includes(extractedTitle.toLowerCase());\n      });\n      console.log(foundBook); //for debugging\n\n      /**from the correspondence found, the identification key of the book and the number identified for the book cover are returned */\n      var _detailsUrlDescriptio = (0,_detailsUrlDescription__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(foundBook),\n        keyBook = _detailsUrlDescriptio.keyBook,\n        numCover = _detailsUrlDescriptio.numCover;\n      console.log(keyBook); //for debuggin\n      console.log(numCover); //for debuggin\n\n      /**the book key is used to create the url and send a new fetch request for the details of the book selected by the user */\n      var newUrlDetails = new URL(\"\".concat(keyBook, \".json?details=true\"), \"https://openlibrary.org/\");\n      // Make a request to the API for the book's description\n      (0,_fetchBookDetails__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(newUrlDetails, valueLi, numCover, containerResult, containerCoverBook)\n      /**If the request is successful, the response is handled in fetchBookDetails and the description with the respective book cover is displayed */.then(function (response) {})[\"catch\"](function (error) {\n        console.error(\"Error fetching book details:\", error.message);\n        throw new Error(error.message);\n      });\n    }\n    /**with the goback function combined with the creation of a dynamic button that appears only after viewing the book description, we can go back to the titles. */\n    if (event.target.className === \"goBack\") {\n      buttonGoBack.style.display = \"none\";\n      (0,_components_jsComponents_goBack_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(containerResult, containerCoverBook);\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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anM/N2JhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZVNjc3MvaW5kZXhTdHlsZS5zY3NzXCI7XG5pbXBvcnQgc3RyaW5nRXh0cmFjdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL2pzQ29tcG9uZW50cy9zdHJpbmdFeHRyYWN0b3IuanNcIjtcbmltcG9ydCBnb0JhY2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvanNDb21wb25lbnRzL2dvQmFjay5qc1wiO1xuXG5pbXBvcnQgZ2VuZXJhdGVVcmwgZnJvbSBcIi4vZ2VuZXJhdGVVcmxcIjtcbmltcG9ydCBmZXRjaEJvb2tEZXRhaWxzIGZyb20gXCIuL2ZldGNoQm9va0RldGFpbHNcIjtcbmltcG9ydCBmZXRjaEF1dGhvcnMgZnJvbSBcIi4vZmV0Y2hBdXRob3JzXCI7XG5pbXBvcnQgZGV0YWlsc1VybERlc2NyaXB0aW9uIGZyb20gXCIuL2RldGFpbHNVcmxEZXNjcmlwdGlvblwiO1xuXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmNvbnN0IGNvbnRhaW5lckV2ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyQ29sdW1uXCIpO1xuY29uc3QgY29udGFpbmVyUmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJUaXRsZUF1dGhvcnNcIik7XG5jb25zdCBjb250YWluZXJDb3ZlckJvb2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lckNvdmVyQm9va1wiKTtcbmNvbnN0IGNhdGVnb3J5Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2F0ZWdvcnlcIik7XG5jb25zdCBidXR0b25Hb0JhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvQmFja1wiKTtcblxuY29uc3QgY29sbGVjdGVkRGF0YSA9IFtdO1xuXG5pbXBvcnQgbG9nb0ZuIGZyb20gXCIuLi9jb21wb25lbnRzL2xvZ28vbG9nby5qc1wiO1xuY29uc3QgY29udGFpbmVyTG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyTG9nb1wiKTtcblxuaWYgKCFjb250YWluZXJMb2dvLnF1ZXJ5U2VsZWN0b3IoXCIubXktbG9nb1wiKSkge1xuICBjb250YWluZXJMb2dvLmFwcGVuZENoaWxkKGxvZ29GbigpKTtcbn1cblxuaW1wb3J0IGljb25GbiBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2dvL2ljb25NeVNpdGUuanNcIjtcbmNvbnN0IGNvbnRhaW5lckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdy1zb2NpYWwtZm9vdGVyXCIpO1xuXG5pZiAoIWNvbnRhaW5lckljb24ucXVlcnlTZWxlY3RvcihcIi5teS1pY29uXCIpKSB7XG4gIGNvbnRhaW5lckljb24uYXBwZW5kQ2hpbGQoaWNvbkZuKCkpO1xufVxuXG4vLyBQcmV2ZW5pcmUgbGEgZHVwbGljYXppb25lIGRlbCBsaXN0ZW5lclxuaWYgKCF3aW5kb3cuaXNFdmVudExpc3RlbmVyQXR0YWNoZWQpIHtcbiAgd2luZG93LmlzRXZlbnRMaXN0ZW5lckF0dGFjaGVkID0gdHJ1ZTtcblxuICBjb250YWluZXJFdmVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSBcIkJVVFRPTlwiKSB7XG4gICAgICAvL3VzZXIgY2xpY2sgb24gdGhlIHNlYXJjaCBidXR0b25cbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC50YWdOYW1lKTsgLy9mb3IgZGVidWdnaW5nXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvL3RvIGJsb2NrIHRoZSBkZWZhdWx0IHN1Ym1pdCBldmVudFxuICAgICAgLyoqdGhlIHZhbHVlSW5wdXQgY29uc3RhbnQgdGFrZXMgdGhlIHZhbHVlIHR5cGVkIGJ5IHRoZSB1c2VyIGluIHRoZSB0ZXh0Ym94IGFuZCBmaXJzdCByZW1vdmVzIHRoZSBvdXRlciBzcGFjZXMgb2YgdGhlIHN0cmluZyB3aXRoIC50cmltKCkgYW5kIHRoZW4gY29udmVydHMgdGhlIHN0cmluZyB0byBsb3dlcmNhc2UuICovXG4gICAgICBjb25zdCB2YWx1ZUlucHV0ID0gY2F0ZWdvcnlGb3JtLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgLyoqdGhpcyBpZiByZXR1cm5zIGFuIGVycm9yIGlmIHRoZSB1c2VyIGRvZXMgbm90IGVudGVyIGEgY2F0ZWdvcnkgYW5kIHByZXNzZXMgdGhlIHNlYXJjaCBidXR0b24gKi9cbiAgICAgIGlmICghdmFsdWVJbnB1dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbnRlciBhIGNhdGVnb3J5IGZpcnN0XCIpO1xuICAgICAgfVxuICAgICAgLy93ZSBnZW5lcmF0ZSB0aGUgdXJsIHdpdGggdGhlIGdlbmVyYXRlVXJsIGZ1bmN0aW9uXG4gICAgICBjb25zdCBuZXdVcmwgPSBnZW5lcmF0ZVVybChjYXRlZ29yeUZvcm0pO1xuICAgICAgLy9jb25zb2xlLmxvZyhuZXdVcmwpOyAvL2ZvciBkZWJ1Z2dpbmdcbiAgICAgIC8vY29uc29sZS5sb2codmFsdWVJbnB1dCk7IC8vZm9yIGRlYnVnZ2luZ1xuXG4gICAgICAvKip3ZSBzZW5kIHRoZSBmZXRjaCAuZ2V0IHJlcXVlc3Qgd2l0aCBheGlvcyBhdCBodHRwczovL29wZW5saWJyYXJ5Lm9yZyB2aWEgdGhlIGZldGNoQXV0aG9ycyBmdW5jdGlvbiAqL1xuICAgICAgZmV0Y2hBdXRob3JzKFxuICAgICAgICBuZXdVcmwsXG4gICAgICAgIGNvbnRhaW5lclJlc3VsdCxcbiAgICAgICAgY29udGFpbmVyQ292ZXJCb29rLFxuICAgICAgICBjb2xsZWN0ZWREYXRhXG4gICAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiB7fSk7XG4gICAgfVxuICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gXCJMSVwiKSB7XG4gICAgICAvL3RoZSB1c2VyIGNsaWNrcyBvbiBhIExJIGNvbnRhaW5pbmcgdGhlIHRpdGxlIG9mIHRoZSBib29rIGFuZCB0aGUgYXV0aG9yXG5cbiAgICAgIC8qKnRoZSB2YXJpYWJsZSB2YWx1ZUxpIHRha2VzIHRoZSB2YWx1ZSBjb250YWluaW5nIGluIHRoZSBjbGlja2VkIExJIGVsZW1lbnQgKi9cbiAgICAgIGxldCB2YWx1ZUxpID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xuXG4gICAgICAvKipXZSBleHRyYWN0IHRoZSBlbnRpcmUgc3RyaW5nIGJlZm9yZSB0aGUgXCItXCIgY2hhcmFjdGVyIHRvIGhhdmUgb25seSB0aGUgdGl0bGUgb2YgdGhlIGJvb2sgd2l0aG91dCB0aGUgYXV0aG9yLCB1c2luZyB0aGUgc3RyaW5nRXh0cmFjdG9yIGZ1bmN0aW9uICovXG4gICAgICBjb25zdCBleHRyYWN0ZWRUaXRsZSA9IHN0cmluZ0V4dHJhY3Rvcih2YWx1ZUxpLCBcIiAtIFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGV4dHJhY3RlZFRpdGxlKTsgLy9mb3IgZGVidWdnaW5nXG5cbiAgICAgIC8qKldlIGNvbXBhcmUgdGhlIHN0cmluZyBleHRyYWN0ZWQgaW4gdGhlIGV4dHJhY3QgVGl0bGUgY29uc3RhbnQgd2l0aCB0aGUgRGF0YSBjb2xsZWN0aW9uIGFycmF5IHRvIGZpbmQgYSByZWZlcmVuY2Ugd2l0aCB0aGUgdGl0bGUgc2VsZWN0ZWQgYnkgdGhlIHVzZXIuICovXG4gICAgICBjb25zdCBmb3VuZEJvb2sgPSBjb2xsZWN0ZWREYXRhLmZpbmQoKGVsZW1lbnQpID0+XG4gICAgICAgIGVsZW1lbnQudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhleHRyYWN0ZWRUaXRsZS50b0xvd2VyQ2FzZSgpKVxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKGZvdW5kQm9vayk7IC8vZm9yIGRlYnVnZ2luZ1xuXG4gICAgICAvKipmcm9tIHRoZSBjb3JyZXNwb25kZW5jZSBmb3VuZCwgdGhlIGlkZW50aWZpY2F0aW9uIGtleSBvZiB0aGUgYm9vayBhbmQgdGhlIG51bWJlciBpZGVudGlmaWVkIGZvciB0aGUgYm9vayBjb3ZlciBhcmUgcmV0dXJuZWQgKi9cbiAgICAgIGNvbnN0IHsga2V5Qm9vaywgbnVtQ292ZXIgfSA9IGRldGFpbHNVcmxEZXNjcmlwdGlvbihmb3VuZEJvb2spO1xuXG4gICAgICBjb25zb2xlLmxvZyhrZXlCb29rKTsgLy9mb3IgZGVidWdnaW5cbiAgICAgIGNvbnNvbGUubG9nKG51bUNvdmVyKTsgLy9mb3IgZGVidWdnaW5cblxuICAgICAgLyoqdGhlIGJvb2sga2V5IGlzIHVzZWQgdG8gY3JlYXRlIHRoZSB1cmwgYW5kIHNlbmQgYSBuZXcgZmV0Y2ggcmVxdWVzdCBmb3IgdGhlIGRldGFpbHMgb2YgdGhlIGJvb2sgc2VsZWN0ZWQgYnkgdGhlIHVzZXIgKi9cbiAgICAgIGxldCBuZXdVcmxEZXRhaWxzID0gbmV3IFVSTChcbiAgICAgICAgYCR7a2V5Qm9va30uanNvbj9kZXRhaWxzPXRydWVgLFxuICAgICAgICBcImh0dHBzOi8vb3BlbmxpYnJhcnkub3JnL1wiXG4gICAgICApO1xuICAgICAgLy8gTWFrZSBhIHJlcXVlc3QgdG8gdGhlIEFQSSBmb3IgdGhlIGJvb2sncyBkZXNjcmlwdGlvblxuICAgICAgZmV0Y2hCb29rRGV0YWlscyhcbiAgICAgICAgbmV3VXJsRGV0YWlscyxcbiAgICAgICAgdmFsdWVMaSxcbiAgICAgICAgbnVtQ292ZXIsXG4gICAgICAgIGNvbnRhaW5lclJlc3VsdCxcbiAgICAgICAgY29udGFpbmVyQ292ZXJCb29rXG4gICAgICApXG4gICAgICAgIC8qKklmIHRoZSByZXF1ZXN0IGlzIHN1Y2Nlc3NmdWwsIHRoZSByZXNwb25zZSBpcyBoYW5kbGVkIGluIGZldGNoQm9va0RldGFpbHMgYW5kIHRoZSBkZXNjcmlwdGlvbiB3aXRoIHRoZSByZXNwZWN0aXZlIGJvb2sgY292ZXIgaXMgZGlzcGxheWVkICovXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge30pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgYm9vayBkZXRhaWxzOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKip3aXRoIHRoZSBnb2JhY2sgZnVuY3Rpb24gY29tYmluZWQgd2l0aCB0aGUgY3JlYXRpb24gb2YgYSBkeW5hbWljIGJ1dHRvbiB0aGF0IGFwcGVhcnMgb25seSBhZnRlciB2aWV3aW5nIHRoZSBib29rIGRlc2NyaXB0aW9uLCB3ZSBjYW4gZ28gYmFjayB0byB0aGUgdGl0bGVzLiAqL1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSBcImdvQmFja1wiKSB7XG4gICAgICBidXR0b25Hb0JhY2suc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgZ29CYWNrKGNvbnRhaW5lclJlc3VsdCwgY29udGFpbmVyQ292ZXJCb29rKTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInN0cmluZ0V4dHJhY3RvciIsImdvQmFjayIsImdlbmVyYXRlVXJsIiwiZmV0Y2hCb29rRGV0YWlscyIsImZldGNoQXV0aG9ycyIsImRldGFpbHNVcmxEZXNjcmlwdGlvbiIsIl8iLCJjb250YWluZXJFdmVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5lclJlc3VsdCIsImNvbnRhaW5lckNvdmVyQm9vayIsImNhdGVnb3J5Rm9ybSIsImJ1dHRvbkdvQmFjayIsImNvbGxlY3RlZERhdGEiLCJsb2dvRm4iLCJjb250YWluZXJMb2dvIiwiYXBwZW5kQ2hpbGQiLCJpY29uRm4iLCJjb250YWluZXJJY29uIiwid2luZG93IiwiaXNFdmVudExpc3RlbmVyQXR0YWNoZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwidmFsdWVJbnB1dCIsInZhbHVlIiwidHJpbSIsInRvTG93ZXJDYXNlIiwiRXJyb3IiLCJuZXdVcmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJ2YWx1ZUxpIiwidGV4dENvbnRlbnQiLCJleHRyYWN0ZWRUaXRsZSIsImZvdW5kQm9vayIsImZpbmQiLCJlbGVtZW50IiwidGl0bGUiLCJpbmNsdWRlcyIsIl9kZXRhaWxzVXJsRGVzY3JpcHRpbyIsImtleUJvb2siLCJudW1Db3ZlciIsIm5ld1VybERldGFpbHMiLCJVUkwiLCJjb25jYXQiLCJlcnJvciIsIm1lc3NhZ2UiLCJjbGFzc05hbWUiLCJzdHlsZSIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

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