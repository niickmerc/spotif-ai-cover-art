"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ \"./pages/callback.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./pages/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ \"./pages/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n // Import the callback component\n\n\n\n\nconst MyApp = (param)=>{\n    let { Component, pageProps } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // Function to extract the access token from the URL fragment\n        const getAccessToken = ()=>{\n            const hash = router.asPath.split(\"#\")[1];\n            const params = new URLSearchParams(hash);\n            const accessToken = params.get(\"access_token\");\n            // Now you have the access token, you can use it globally or pass it down to the pages\n            console.log(\"Access Token:\", accessToken);\n        // You can store the access token in state or context to make it available to all pages\n        };\n        getAccessToken();\n    }, [\n        router.asPath\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/_app.js\",\n        lineNumber: 25,\n        columnNumber: 10\n    }, undefined);\n};\n_s(MyApp, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUMsQ0FBQyxnQ0FBZ0M7QUFDcEQ7QUFDQTtBQUVtQjtBQUNEO0FBRXhDLE1BQU1LLFFBQVE7UUFBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTs7SUFDckMsTUFBTUMsU0FBU0osc0RBQVNBO0lBRXhCRCxnREFBU0EsQ0FBQztRQUNSLDZEQUE2RDtRQUM3RCxNQUFNTSxpQkFBaUI7WUFDckIsTUFBTUMsT0FBT0YsT0FBT0csTUFBTSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEMsTUFBTUMsU0FBUyxJQUFJQyxnQkFBZ0JKO1lBQ25DLE1BQU1LLGNBQWNGLE9BQU9HLEdBQUcsQ0FBQztZQUMvQixzRkFBc0Y7WUFDdEZDLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJIO1FBQzdCLHVGQUF1RjtRQUN6RjtRQUVBTjtJQUNGLEdBQUc7UUFBQ0QsT0FBT0csTUFBTTtLQUFDO0lBRWxCLHFCQUFPLDhEQUFDTDtRQUFXLEdBQUdDLFNBQVM7Ozs7OztBQUNqQztHQWxCTUY7O1FBQ1dELGtEQUFTQTs7O0tBRHBCQztBQW9CTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwb3RpZnlDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJzsgLy8gSW1wb3J0IHRoZSBjYWxsYmFjayBjb21wb25lbnRcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBMb2dpbiBmcm9tICcuJztcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRnVuY3Rpb24gdG8gZXh0cmFjdCB0aGUgYWNjZXNzIHRva2VuIGZyb20gdGhlIFVSTCBmcmFnbWVudFxuICAgIGNvbnN0IGdldEFjY2Vzc1Rva2VuID0gKCkgPT4ge1xuICAgICAgY29uc3QgaGFzaCA9IHJvdXRlci5hc1BhdGguc3BsaXQoJyMnKVsxXTtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoaGFzaCk7XG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHBhcmFtcy5nZXQoJ2FjY2Vzc190b2tlbicpO1xuICAgICAgLy8gTm93IHlvdSBoYXZlIHRoZSBhY2Nlc3MgdG9rZW4sIHlvdSBjYW4gdXNlIGl0IGdsb2JhbGx5IG9yIHBhc3MgaXQgZG93biB0byB0aGUgcGFnZXNcbiAgICAgIGNvbnNvbGUubG9nKCdBY2Nlc3MgVG9rZW46JywgYWNjZXNzVG9rZW4pO1xuICAgICAgLy8gWW91IGNhbiBzdG9yZSB0aGUgYWNjZXNzIHRva2VuIGluIHN0YXRlIG9yIGNvbnRleHQgdG8gbWFrZSBpdCBhdmFpbGFibGUgdG8gYWxsIHBhZ2VzXG4gICAgfTtcblxuICAgIGdldEFjY2Vzc1Rva2VuKCk7XG4gIH0sIFtyb3V0ZXIuYXNQYXRoXSk7XG5cbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiU3BvdGlmeUNhbGxiYWNrIiwiTG9naW4iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiZ2V0QWNjZXNzVG9rZW4iLCJoYXNoIiwiYXNQYXRoIiwic3BsaXQiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhY2Nlc3NUb2tlbiIsImdldCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});