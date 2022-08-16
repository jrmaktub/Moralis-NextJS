"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/native";
exports.ids = ["pages/native"];
exports.modules = {

/***/ "./pages/native.jsx":
/*!**************************!*\
  !*** ./pages/native.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Native({ nativeBalance , address  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Wallet: \",\n                    address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jorgeramirez/Downloads/Hackathons/NextJS-Moralis/pages/native.jsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Native Balance: \",\n                    nativeBalance,\n                    \" ETH\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jorgeramirez/Downloads/Hackathons/NextJS-Moralis/pages/native.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jorgeramirez/Downloads/Hackathons/NextJS-Moralis/pages/native.jsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n// This gets called on every page render\nasync function getServerSideProps(context) {\n    // reads the api key from .env.local and starts Moralis SDK\n    await moralis__WEBPACK_IMPORTED_MODULE_1___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    const address = \"0x9e8f0f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f\";\n    const nativeBalance = await moralis__WEBPACK_IMPORTED_MODULE_1___default().EvmApi.account.getNativeBalance({\n        address\n    });\n    return {\n        props: {\n            address,\n            // Return the native balance formatted in ether via the .ether getter\n            nativeBalance: nativeBalance.result.balance.ether\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Native);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uYXRpdmUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQThCO0FBRzlCLFNBQVNDLE1BQU0sQ0FBQyxFQUFFQyxhQUFhLEdBQUVDLE9BQU8sR0FBRSxFQUFFO0lBQ3hDLHFCQUNJLDhEQUFDQyxLQUFHOzswQkFDQSw4REFBQ0MsSUFBRTs7b0JBQUMsVUFBUTtvQkFBQ0YsT0FBTzs7Ozs7O29CQUFNOzBCQUMxQiw4REFBQ0UsSUFBRTs7b0JBQUMsa0JBQWdCO29CQUFDSCxhQUFhO29CQUFDLE1BQUk7Ozs7OztvQkFBSzs7Ozs7O1lBQzFDLENBQ1Q7Q0FDSjtBQUVELHdDQUF3QztBQUNqQyxlQUFlSSxrQkFBa0IsQ0FBQ0MsT0FBTyxFQUFFO0lBRTlDLDJEQUEyRDtJQUMzRCxNQUFNUCxvREFBYSxDQUFDO1FBQUVTLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGVBQWU7S0FBRSxDQUFDLENBQUM7SUFFN0QsTUFBTVQsT0FBTyxHQUFHLDRDQUE0QztJQUU1RCxNQUFNRCxhQUFhLEdBQUcsTUFBTUYsOEVBQXVDLENBQUM7UUFDaEVHLE9BQU87S0FDVixDQUFDO0lBRUYsT0FBTztRQUNIYSxLQUFLLEVBQUU7WUFDSGIsT0FBTztZQUNQLHFFQUFxRTtZQUNyRUQsYUFBYSxFQUFFQSxhQUFhLENBQUNlLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxLQUFLO1NBQ3BEO0tBQ0o7Q0FDSjtBQUVELGlFQUFlbEIsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbXBsZS1uZXh0anMtZGVtby8uL3BhZ2VzL25hdGl2ZS5qc3g/ZTI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9yYWxpcyBmcm9tICdtb3JhbGlzJztcblxuXG5mdW5jdGlvbiBOYXRpdmUoeyBuYXRpdmVCYWxhbmNlLCBhZGRyZXNzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPldhbGxldDoge2FkZHJlc3N9PC9oMz5cbiAgICAgICAgICAgIDxoMz5OYXRpdmUgQmFsYW5jZToge25hdGl2ZUJhbGFuY2V9IEVUSDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuLy8gVGhpcyBnZXRzIGNhbGxlZCBvbiBldmVyeSBwYWdlIHJlbmRlclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG5cbiAgICAvLyByZWFkcyB0aGUgYXBpIGtleSBmcm9tIC5lbnYubG9jYWwgYW5kIHN0YXJ0cyBNb3JhbGlzIFNES1xuICAgIGF3YWl0IE1vcmFsaXMuc3RhcnQoeyBhcGlLZXk6IHByb2Nlc3MuZW52Lk1PUkFMSVNfQVBJX0tFWSB9KTtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSAnMHg5ZThmMGY4ZjhmOGY4ZjhmOGY4ZjhmOGY4ZjhmOGY4ZjhmOGY4ZjhmJztcblxuICAgIGNvbnN0IG5hdGl2ZUJhbGFuY2UgPSBhd2FpdCBNb3JhbGlzLkV2bUFwaS5hY2NvdW50LmdldE5hdGl2ZUJhbGFuY2Uoe1xuICAgICAgICBhZGRyZXNzLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIG5hdGl2ZSBiYWxhbmNlIGZvcm1hdHRlZCBpbiBldGhlciB2aWEgdGhlIC5ldGhlciBnZXR0ZXJcbiAgICAgICAgICAgIG5hdGl2ZUJhbGFuY2U6IG5hdGl2ZUJhbGFuY2UucmVzdWx0LmJhbGFuY2UuZXRoZXIgXG4gICAgICAgIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF0aXZlIl0sIm5hbWVzIjpbIk1vcmFsaXMiLCJOYXRpdmUiLCJuYXRpdmVCYWxhbmNlIiwiYWRkcmVzcyIsImRpdiIsImgzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInN0YXJ0IiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk1PUkFMSVNfQVBJX0tFWSIsIkV2bUFwaSIsImFjY291bnQiLCJnZXROYXRpdmVCYWxhbmNlIiwicHJvcHMiLCJyZXN1bHQiLCJiYWxhbmNlIiwiZXRoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/native.jsx\n");

/***/ }),

/***/ "moralis":
/*!**************************!*\
  !*** external "moralis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/native.jsx"));
module.exports = __webpack_exports__;

})();