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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction getSystemTheme() {\n    if (true) return 'dark';\n    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';\n}\nfunction MyApp({ Component, pageProps }) {\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('system');\n    // Apply theme to <body>\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            let t = theme;\n            if (t === 'system') t = getSystemTheme();\n            document.body.classList.remove('dark', 'light');\n            document.body.classList.add(t);\n        }\n    }[\"MyApp.useEffect\"], [\n        theme\n    ]);\n    // Listen for system changes if theme is 'system'\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            if (theme !== 'system') return;\n            const listener = {\n                \"MyApp.useEffect.listener\": ()=>{\n                    const t = getSystemTheme();\n                    document.body.classList.remove('dark', 'light');\n                    document.body.classList.add(t);\n                }\n            }[\"MyApp.useEffect.listener\"];\n            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener);\n            return ({\n                \"MyApp.useEffect\": ()=>window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener)\n            })[\"MyApp.useEffect\"];\n        }\n    }[\"MyApp.useEffect\"], [\n        theme\n    ]);\n    // Persist theme in localStorage\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            if (theme) localStorage.setItem('theme', theme);\n        }\n    }[\"MyApp.useEffect\"], [\n        theme\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            const stored = localStorage.getItem('theme');\n            if (stored) setTheme(stored);\n        }\n    }[\"MyApp.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-4 right-4 z-50 flex gap-2 bg-card/80 rounded-xl shadow p-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: `button px-3 py-1 ${theme === 'dark' ? 'ring-2 ring-primary' : ''}`,\n                        onClick: ()=>setTheme('dark'),\n                        children: \"Dark\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\pages\\\\_app.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: `button px-3 py-1 ${theme === 'light' ? 'ring-2 ring-primary' : ''}`,\n                        onClick: ()=>setTheme('light'),\n                        children: \"Light\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\pages\\\\_app.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: `button px-3 py-1 ${theme === 'system' ? 'ring-2 ring-primary' : ''}`,\n                        onClick: ()=>setTheme('system'),\n                        children: \"System\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\pages\\\\_app.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\VScode\\\\bot-binance\\\\pages\\\\_app.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\VScode\\\\bot-binance\\\\pages\\\\_app.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ29CO0FBS25ELFNBQVNHO0lBQ1AsSUFBSSxJQUE2QixFQUFFLE9BQU87SUFDMUMsT0FBT0MsT0FBT0MsVUFBVSxDQUFDLGdDQUFnQ0MsT0FBTyxHQUFHLFNBQVM7QUFDOUU7QUFFZSxTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzlELE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBUTtJQUUxQyx3QkFBd0I7SUFDeEJELGdEQUFTQTsyQkFBQztZQUNSLElBQUlXLElBQUlGO1lBQ1IsSUFBSUUsTUFBTSxVQUFVQSxJQUFJVDtZQUN4QlUsU0FBU0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRO1lBQ3ZDSCxTQUFTQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDTDtRQUM5QjswQkFBRztRQUFDRjtLQUFNO0lBRVYsaURBQWlEO0lBQ2pEVCxnREFBU0E7MkJBQUM7WUFDUixJQUFJUyxVQUFVLFVBQVU7WUFDeEIsTUFBTVE7NENBQVc7b0JBQ2YsTUFBTU4sSUFBSVQ7b0JBQ1ZVLFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUTtvQkFDdkNILFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxHQUFHLENBQUNMO2dCQUM5Qjs7WUFDQVIsT0FBT0MsVUFBVSxDQUFDLGdDQUFnQ2MsZ0JBQWdCLENBQUMsVUFBVUQ7WUFDN0U7bUNBQU8sSUFBTWQsT0FBT0MsVUFBVSxDQUFDLGdDQUFnQ2UsbUJBQW1CLENBQUMsVUFBVUY7O1FBQy9GOzBCQUFHO1FBQUNSO0tBQU07SUFFVixnQ0FBZ0M7SUFDaENULGdEQUFTQTsyQkFBQztZQUNSLElBQUlTLE9BQU9XLGFBQWFDLE9BQU8sQ0FBQyxTQUFTWjtRQUMzQzswQkFBRztRQUFDQTtLQUFNO0lBQ1ZULGdEQUFTQTsyQkFBQztZQUNSLE1BQU1zQixTQUFTRixhQUFhRyxPQUFPLENBQUM7WUFDcEMsSUFBSUQsUUFBUVosU0FBU1k7UUFDdkI7MEJBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ0U7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBT0QsV0FBVyxDQUFDLGlCQUFpQixFQUFFaEIsVUFBVSxTQUFTLHdCQUF3QixJQUFJO3dCQUFFa0IsU0FBUyxJQUFNakIsU0FBUztrQ0FBUzs7Ozs7O2tDQUN6SCw4REFBQ2dCO3dCQUFPRCxXQUFXLENBQUMsaUJBQWlCLEVBQUVoQixVQUFVLFVBQVUsd0JBQXdCLElBQUk7d0JBQUVrQixTQUFTLElBQU1qQixTQUFTO2tDQUFVOzs7Ozs7a0NBQzNILDhEQUFDZ0I7d0JBQU9ELFdBQVcsQ0FBQyxpQkFBaUIsRUFBRWhCLFVBQVUsV0FBVyx3QkFBd0IsSUFBSTt3QkFBRWtCLFNBQVMsSUFBTWpCLFNBQVM7a0NBQVc7Ozs7Ozs7Ozs7OzswQkFFL0gsOERBQUNIO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJEOlxcVlNjb2RlXFxib3QtYmluYW5jZVxccGFnZXNcXF9hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcblxudHlwZSBUaGVtZSA9ICdsaWdodCcgfCAnZGFyaycgfCAnc3lzdGVtJztcblxuZnVuY3Rpb24gZ2V0U3lzdGVtVGhlbWUoKTogVGhlbWUge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAnZGFyayc7XG4gIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMgPyAnZGFyaycgOiAnbGlnaHQnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGU8VGhlbWU+KCdzeXN0ZW0nKTtcblxuICAvLyBBcHBseSB0aGVtZSB0byA8Ym9keT5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdCA9IHRoZW1lO1xuICAgIGlmICh0ID09PSAnc3lzdGVtJykgdCA9IGdldFN5c3RlbVRoZW1lKCk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJywgJ2xpZ2h0Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHQpO1xuICB9LCBbdGhlbWVdKTtcblxuICAvLyBMaXN0ZW4gZm9yIHN5c3RlbSBjaGFuZ2VzIGlmIHRoZW1lIGlzICdzeXN0ZW0nXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRoZW1lICE9PSAnc3lzdGVtJykgcmV0dXJuO1xuICAgIGNvbnN0IGxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgdCA9IGdldFN5c3RlbVRoZW1lKCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnLCAnbGlnaHQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCh0KTtcbiAgICB9O1xuICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgbGlzdGVuZXIpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGxpc3RlbmVyKTtcbiAgfSwgW3RoZW1lXSk7XG5cbiAgLy8gUGVyc2lzdCB0aGVtZSBpbiBsb2NhbFN0b3JhZ2VcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodGhlbWUpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIHRoZW1lKTtcbiAgfSwgW3RoZW1lXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgYXMgVGhlbWUgfCBudWxsO1xuICAgIGlmIChzdG9yZWQpIHNldFRoZW1lKHN0b3JlZCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC00IHJpZ2h0LTQgei01MCBmbGV4IGdhcC0yIGJnLWNhcmQvODAgcm91bmRlZC14bCBzaGFkb3cgcC0yXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYnV0dG9uIHB4LTMgcHktMSAke3RoZW1lID09PSAnZGFyaycgPyAncmluZy0yIHJpbmctcHJpbWFyeScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZSgnZGFyaycpfT5EYXJrPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYnV0dG9uIHB4LTMgcHktMSAke3RoZW1lID09PSAnbGlnaHQnID8gJ3JpbmctMiByaW5nLXByaW1hcnknIDogJyd9YH0gb25DbGljaz17KCkgPT4gc2V0VGhlbWUoJ2xpZ2h0Jyl9PkxpZ2h0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYnV0dG9uIHB4LTMgcHktMSAke3RoZW1lID09PSAnc3lzdGVtJyA/ICdyaW5nLTIgcmluZy1wcmltYXJ5JyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKCdzeXN0ZW0nKX0+U3lzdGVtPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0U3lzdGVtVGhlbWUiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJzZXRUaGVtZSIsInQiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJsaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInN0b3JlZCIsImdldEl0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();