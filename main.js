/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact(){\n    const contactPage = document.createElement(\"div\");\n\n    const contactTitle = document.createElement('h1');\n    contactTitle.textContent = 'CONTACT US';\n\n    const contactInfo = [\n        {\n        name: \"Manager\",\n        email: \"manager@gmail.com\",\n        number: \"+822 0899 889\",\n    }\n    ]\n    \n    const contactList = document.createElement(\"ul\")\n    contactInfo.forEach(contact =>{\n        const listItem = document.createElement(\"li\");\n        listItem.textContent = `${contact.name} ${contact.email} ${contact.number}`;\n        contactList.appendChild(listItem)\n    });\n\n    contactPage.append(contactTitle, contactList);\n    return contactPage;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsY0FBYyxFQUFFLGVBQWUsRUFBRSxlQUFlO0FBQ2xGO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcz9kNTY1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb250YWN0KCl7XG4gICAgY29uc3QgY29udGFjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSAnQ09OVEFDVCBVUyc7XG5cbiAgICBjb25zdCBjb250YWN0SW5mbyA9IFtcbiAgICAgICAge1xuICAgICAgICBuYW1lOiBcIk1hbmFnZXJcIixcbiAgICAgICAgZW1haWw6IFwibWFuYWdlckBnbWFpbC5jb21cIixcbiAgICAgICAgbnVtYmVyOiBcIis4MjIgMDg5OSA4ODlcIixcbiAgICB9XG4gICAgXVxuICAgIFxuICAgIGNvbnN0IGNvbnRhY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG4gICAgY29udGFjdEluZm8uZm9yRWFjaChjb250YWN0ID0+e1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBgJHtjb250YWN0Lm5hbWV9ICR7Y29udGFjdC5lbWFpbH0gJHtjb250YWN0Lm51bWJlcn1gO1xuICAgICAgICBjb250YWN0TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSlcbiAgICB9KTtcblxuICAgIGNvbnRhY3RQYWdlLmFwcGVuZChjb250YWN0VGl0bGUsIGNvbnRhY3RMaXN0KTtcbiAgICByZXR1cm4gY29udGFjdFBhZ2U7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contact.js\n");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\nfunction home(){\n    const homePage = document.createElement(\"div\");\n\n    const restaurantName = document.createElement(\"h1\");\n    const welcomeMessage = document.createElement(\"p\");\n    \n    restaurantName.textContent = \"CASA\";\n    welcomeMessage.textContent = \"Welcome to CASA.Home of delicious meals\";\n    \n    homePage.append(restaurantName, welcomeMessage);\n    return homePage;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZXBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzPzE3YmQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGhvbWUoKXtcbiAgICBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCB3ZWxjb21lTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIFxuICAgIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gXCJDQVNBXCI7XG4gICAgd2VsY29tZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gQ0FTQS5Ib21lIG9mIGRlbGljaW91cyBtZWFsc1wiO1xuICAgIFxuICAgIGhvbWVQYWdlLmFwcGVuZChyZXN0YXVyYW50TmFtZSwgd2VsY29tZU1lc3NhZ2UpO1xuICAgIHJldHVybiBob21lUGFnZTtcbn1cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/homepage.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\nconst homeTab = document.querySelector(\"#home\");\nconst menuTab = document.querySelector(\"#menu\");\nconst contactTab = document.querySelector(\"#contact\");\nconst content = document.querySelector(\"#content\");\n\ncontent.appendChild((0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.home)());\n\nhomeTab.addEventListener(\"click\", ()=>{\n    content.textContent = \"\";\n    content.appendChild((0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.home)());\n});\n\nmenuTab.addEventListener(\"click\", ()=>{\n    content.textContent = \"\";\n    content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)());\n});\n\ncontactTab.addEventListener(\"click\", ()=>{\n    content.textContent = \"\";\n    content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contact)());\n});\n\n})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFxQztBQUNKO0FBQ007O0FBRXZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixrREFBSTs7QUFFeEI7QUFDQTtBQUNBLHdCQUF3QixrREFBSTtBQUM1QixDQUFDOztBQUVEO0FBQ0E7QUFDQSx3QkFBd0IsOENBQUk7QUFDNUIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFPO0FBQy9CLENBQUM7O0FBRUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvbWUgfSBmcm9tIFwiLi9ob21lcGFnZS5qc1wiO1xuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCB7IGNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKTtcbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XG5jb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0XCIpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuY29udGVudC5hcHBlbmRDaGlsZChob21lKCkpO1xuXG5ob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSgpKTtcbn0pO1xuXG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSgpKTtcbn0pO1xuXG5jb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCgpKTtcbn0pO1xuXG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu(){\n    const menuPage = document.createElement(\"div\");\n    \n    const menuItems = [\n        { name: 'Margherita Pizza', price: 12.99 },\n        { name: 'Spaghetti Carbonara', price: 14.99 },\n        { name: 'Caesar Salad', price: 8.99 },\n        { name: 'Grilled Chicken', price: 16.99 },\n        { name: 'Tiramisu', price: 6.99 },\n      ];\n\n      const menuTitle = document.createElement('h1');\n      menuTitle.textContent = 'Restaurant Menu';\n      \n\n      const menuList = document.createElement('ul');\n\n      menuItems.forEach(item => {\n        const listItem = document.createElement('li');\n        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;\n        menuList.appendChild(listItem);\n      });\n\n      menuPage.append(menuTitle, menuList);\n      return menuPage;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxVQUFVLHdDQUF3QztBQUNsRCxVQUFVLDJDQUEyQztBQUNyRCxVQUFVLG1DQUFtQztBQUM3QyxVQUFVLHVDQUF1QztBQUNqRCxVQUFVLCtCQUErQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxXQUFXLEtBQUssc0JBQXNCO0FBQ3hFO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBtZW51KCl7XG4gICAgY29uc3QgbWVudVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIFxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICAgICAgeyBuYW1lOiAnTWFyZ2hlcml0YSBQaXp6YScsIHByaWNlOiAxMi45OSB9LFxuICAgICAgICB7IG5hbWU6ICdTcGFnaGV0dGkgQ2FyYm9uYXJhJywgcHJpY2U6IDE0Ljk5IH0sXG4gICAgICAgIHsgbmFtZTogJ0NhZXNhciBTYWxhZCcsIHByaWNlOiA4Ljk5IH0sXG4gICAgICAgIHsgbmFtZTogJ0dyaWxsZWQgQ2hpY2tlbicsIHByaWNlOiAxNi45OSB9LFxuICAgICAgICB7IG5hbWU6ICdUaXJhbWlzdScsIHByaWNlOiA2Ljk5IH0sXG4gICAgICBdO1xuXG4gICAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gJ1Jlc3RhdXJhbnQgTWVudSc7XG4gICAgICBcblxuICAgICAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgICBtZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IGAke2l0ZW0ubmFtZX0gLSAkJHtpdGVtLnByaWNlLnRvRml4ZWQoMil9YDtcbiAgICAgICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgfSk7XG5cbiAgICAgIG1lbnVQYWdlLmFwcGVuZChtZW51VGl0bGUsIG1lbnVMaXN0KTtcbiAgICAgIHJldHVybiBtZW51UGFnZTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;