"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/callback",{

/***/ "./pages/callback.js":
/*!***************************!*\
  !*** ./pages/callback.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst SpotifyCallback = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Function to extract the access token from the URL fragment\n        const getAccessToken = ()=>{\n            const hash = router.asPath.split(\"#\")[1]; // Use router.asPath instead of window.location.hash\n            const params = new URLSearchParams(hash);\n            const accessToken = params.get(\"access_token\");\n            // Now you have the access token, you can use it to make API calls\n            console.log(\"Access Token:\", accessToken);\n        };\n        getAccessToken();\n    }, [\n        router.asPath\n    ]); // Add router.asPath to the dependencies array\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Spotify Callback\"\n        }, void 0, false, {\n            fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/callback.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/callback.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SpotifyCallback, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SpotifyCallback;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpotifyCallback);\nvar _c;\n$RefreshReg$(_c, \"SpotifyCallback\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYWxsYmFjay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUM7QUFDRDtBQUV4QyxNQUFNRyxrQkFBa0I7O0lBQ3RCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUV4QkQsZ0RBQVNBLENBQUM7UUFDUiw2REFBNkQ7UUFDN0QsTUFBTUksaUJBQWlCO1lBQ3JCLE1BQU1DLE9BQU9GLE9BQU9HLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsb0RBQW9EO1lBQzlGLE1BQU1DLFNBQVMsSUFBSUMsZ0JBQWdCSjtZQUNuQyxNQUFNSyxjQUFjRixPQUFPRyxHQUFHLENBQUM7WUFDL0Isa0VBQWtFO1lBQ2xFQyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCSDtRQUMvQjtRQUVBTjtJQUNGLEdBQUc7UUFBQ0QsT0FBT0csTUFBTTtLQUFDLEdBQUcsOENBQThDO0lBRW5FLHFCQUNFLDhEQUFDUTtrQkFDQyw0RUFBQ0M7c0JBQUc7Ozs7Ozs7Ozs7O0FBSVY7R0F0Qk1iOztRQUNXRCxrREFBU0E7OztLQURwQkM7QUF3Qk4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FsbGJhY2suanM/M2ZlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBTcG90aWZ5Q2FsbGJhY2sgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRnVuY3Rpb24gdG8gZXh0cmFjdCB0aGUgYWNjZXNzIHRva2VuIGZyb20gdGhlIFVSTCBmcmFnbWVudFxuICAgIGNvbnN0IGdldEFjY2Vzc1Rva2VuID0gKCkgPT4ge1xuICAgICAgY29uc3QgaGFzaCA9IHJvdXRlci5hc1BhdGguc3BsaXQoJyMnKVsxXTsgLy8gVXNlIHJvdXRlci5hc1BhdGggaW5zdGVhZCBvZiB3aW5kb3cubG9jYXRpb24uaGFzaFxuICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhoYXNoKTtcbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gcGFyYW1zLmdldCgnYWNjZXNzX3Rva2VuJyk7XG4gICAgICAvLyBOb3cgeW91IGhhdmUgdGhlIGFjY2VzcyB0b2tlbiwgeW91IGNhbiB1c2UgaXQgdG8gbWFrZSBBUEkgY2FsbHNcbiAgICAgIGNvbnNvbGUubG9nKCdBY2Nlc3MgVG9rZW46JywgYWNjZXNzVG9rZW4pO1xuICAgIH07XG5cbiAgICBnZXRBY2Nlc3NUb2tlbigpO1xuICB9LCBbcm91dGVyLmFzUGF0aF0pOyAvLyBBZGQgcm91dGVyLmFzUGF0aCB0byB0aGUgZGVwZW5kZW5jaWVzIGFycmF5XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlNwb3RpZnkgQ2FsbGJhY2s8L2gxPlxuICAgICAgey8qIFlvdSBjYW4gYWRkIGFueSBjb250ZW50IG9yIHJlZGlyZWN0IHRoZSB1c2VyIHRvIGFub3RoZXIgcGFnZSBhZnRlciBleHRyYWN0aW5nIHRoZSBhY2Nlc3MgdG9rZW4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcG90aWZ5Q2FsbGJhY2s7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiU3BvdGlmeUNhbGxiYWNrIiwicm91dGVyIiwiZ2V0QWNjZXNzVG9rZW4iLCJoYXNoIiwiYXNQYXRoIiwic3BsaXQiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhY2Nlc3NUb2tlbiIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/callback.js\n"));

/***/ })

});