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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "(pages-dir-node)/./components/AssetChart.tsx":
/*!***********************************!*\
  !*** ./components/AssetChart.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AssetChart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Line,LineChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"(pages-dir-node)/__barrel_optimize__?names=Line,LineChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!./node_modules/recharts/es6/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, _barrel_optimize_names_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__]);\n([axios__WEBPACK_IMPORTED_MODULE_2__, _barrel_optimize_names_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction AssetChart({ symbol, assetType, range }) {\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AssetChart.useEffect\": ()=>{\n            setLoading(true);\n            axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`/api/history?symbol=${symbol}&assetType=${assetType}&range=${range}`).then({\n                \"AssetChart.useEffect\": (resp)=>setData(resp.data)\n            }[\"AssetChart.useEffect\"]).catch({\n                \"AssetChart.useEffect\": ()=>setData([])\n            }[\"AssetChart.useEffect\"]).finally({\n                \"AssetChart.useEffect\": ()=>setLoading(false)\n            }[\"AssetChart.useEffect\"]);\n        }\n    }[\"AssetChart.useEffect\"], [\n        symbol,\n        assetType,\n        range\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading chart...\"\n    }, void 0, false, {\n        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetChart.tsx\",\n        lineNumber: 23,\n        columnNumber: 23\n    }, this);\n    if (!data.length) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"No historical data.\"\n    }, void 0, false, {\n        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetChart.tsx\",\n        lineNumber: 24,\n        columnNumber: 28\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.ResponsiveContainer, {\n        width: \"100%\",\n        height: 300,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.LineChart, {\n            data: data,\n            margin: {\n                top: 10,\n                right: 20,\n                left: 0,\n                bottom: 0\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.XAxis, {\n                    dataKey: \"timestamp\",\n                    tickFormatter: (t)=>new Date(t).toLocaleString(),\n                    minTickGap: 30\n                }, void 0, false, {\n                    fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetChart.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.YAxis, {\n                    domain: [\n                        'auto',\n                        'auto'\n                    ]\n                }, void 0, false, {\n                    fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetChart.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {\n                    labelFormatter: (l)=>new Date(l).toLocaleString()\n                }, void 0, false, {\n                    fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetChart.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.Line, {\n                    type: \"monotone\",\n                    dataKey: \"price\",\n                    stroke: \"#2563eb\",\n                    strokeWidth: 2,\n                    dot: false\n                }, void 0, false, {\n                    fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetChart.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetChart.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetChart.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvQXNzZXRDaGFydC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDMkM7QUFDN0Q7QUFRWCxTQUFTUyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQW1CO0lBQzlFLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBUSxFQUFFO0lBQzFDLE1BQU0sQ0FBQ2MsU0FBU0MsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBO2dDQUFDO1lBQ1JnQixXQUFXO1lBQ1hSLGlEQUFTLENBQUMsQ0FBQyxvQkFBb0IsRUFBRUUsT0FBTyxXQUFXLEVBQUVDLFVBQVUsT0FBTyxFQUFFQyxPQUFPLEVBQzVFTSxJQUFJO3dDQUFDQyxDQUFBQSxPQUFRTCxRQUFRSyxLQUFLTixJQUFJO3VDQUM5Qk8sS0FBSzt3Q0FBQyxJQUFNTixRQUFRLEVBQUU7dUNBQ3RCTyxPQUFPO3dDQUFDLElBQU1MLFdBQVc7O1FBQzlCOytCQUFHO1FBQUNOO1FBQVFDO1FBQVdDO0tBQU07SUFFN0IsSUFBSUcsU0FBUyxxQkFBTyw4REFBQ087a0JBQUk7Ozs7OztJQUN6QixJQUFJLENBQUNULEtBQUtVLE1BQU0sRUFBRSxxQkFBTyw4REFBQ0Q7a0JBQUk7Ozs7OztJQUU5QixxQkFDRSw4REFBQ2YsdUlBQW1CQTtRQUFDaUIsT0FBTTtRQUFPQyxRQUFRO2tCQUN4Qyw0RUFBQ3ZCLDZIQUFTQTtZQUFDVyxNQUFNQTtZQUFNYSxRQUFRO2dCQUFFQyxLQUFLO2dCQUFJQyxPQUFPO2dCQUFJQyxNQUFNO2dCQUFHQyxRQUFRO1lBQUU7OzhCQUN0RSw4REFBQzFCLHlIQUFLQTtvQkFBQzJCLFNBQVE7b0JBQVlDLGVBQWVDLENBQUFBLElBQUssSUFBSUMsS0FBS0QsR0FBR0UsY0FBYztvQkFBSUMsWUFBWTs7Ozs7OzhCQUN6Riw4REFBQy9CLHlIQUFLQTtvQkFBQ2dDLFFBQVE7d0JBQUM7d0JBQVE7cUJBQU87Ozs7Ozs4QkFDL0IsOERBQUMvQiwySEFBT0E7b0JBQUNnQyxnQkFBZ0JDLENBQUFBLElBQUssSUFBSUwsS0FBS0ssR0FBR0osY0FBYzs7Ozs7OzhCQUN4RCw4REFBQ2hDLHdIQUFJQTtvQkFBQ3FDLE1BQUs7b0JBQVdULFNBQVE7b0JBQVFVLFFBQU87b0JBQVVDLGFBQWE7b0JBQUdDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBGIiwic291cmNlcyI6WyJEOlxcVlNjb2RlXFxib3QtYmluYW5jZVxcY29tcG9uZW50c1xcQXNzZXRDaGFydC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmVDaGFydCwgTGluZSwgWEF4aXMsIFlBeGlzLCBUb29sdGlwLCBSZXNwb25zaXZlQ29udGFpbmVyIH0gZnJvbSAncmVjaGFydHMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW50ZXJmYWNlIEFzc2V0Q2hhcnRQcm9wcyB7XG4gIHN5bWJvbDogc3RyaW5nO1xuICBhc3NldFR5cGU6IHN0cmluZztcbiAgcmFuZ2U6ICcyNGgnIHwgJzdkJyB8ICdhbGwnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBc3NldENoYXJ0KHsgc3ltYm9sLCBhc3NldFR5cGUsIHJhbmdlIH06IEFzc2V0Q2hhcnRQcm9wcykge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF4aW9zLmdldChgL2FwaS9oaXN0b3J5P3N5bWJvbD0ke3N5bWJvbH0mYXNzZXRUeXBlPSR7YXNzZXRUeXBlfSZyYW5nZT0ke3JhbmdlfWApXG4gICAgICAudGhlbihyZXNwID0+IHNldERhdGEocmVzcC5kYXRhKSlcbiAgICAgIC5jYXRjaCgoKSA9PiBzZXREYXRhKFtdKSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHNldExvYWRpbmcoZmFsc2UpKTtcbiAgfSwgW3N5bWJvbCwgYXNzZXRUeXBlLCByYW5nZV0pO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nIGNoYXJ0Li4uPC9kaXY+O1xuICBpZiAoIWRhdGEubGVuZ3RoKSByZXR1cm4gPGRpdj5ObyBoaXN0b3JpY2FsIGRhdGEuPC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXszMDB9PlxuICAgICAgPExpbmVDaGFydCBkYXRhPXtkYXRhfSBtYXJnaW49e3sgdG9wOiAxMCwgcmlnaHQ6IDIwLCBsZWZ0OiAwLCBib3R0b206IDAgfX0+XG4gICAgICAgIDxYQXhpcyBkYXRhS2V5PVwidGltZXN0YW1wXCIgdGlja0Zvcm1hdHRlcj17dCA9PiBuZXcgRGF0ZSh0KS50b0xvY2FsZVN0cmluZygpfSBtaW5UaWNrR2FwPXszMH0gLz5cbiAgICAgICAgPFlBeGlzIGRvbWFpbj17WydhdXRvJywgJ2F1dG8nXX0gLz5cbiAgICAgICAgPFRvb2x0aXAgbGFiZWxGb3JtYXR0ZXI9e2wgPT4gbmV3IERhdGUobCkudG9Mb2NhbGVTdHJpbmcoKX0gLz5cbiAgICAgICAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInByaWNlXCIgc3Ryb2tlPVwiIzI1NjNlYlwiIHN0cm9rZVdpZHRoPXsyfSBkb3Q9e2ZhbHNlfSAvPlxuICAgICAgPC9MaW5lQ2hhcnQ+XG4gICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluZUNoYXJ0IiwiTGluZSIsIlhBeGlzIiwiWUF4aXMiLCJUb29sdGlwIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsImF4aW9zIiwiQXNzZXRDaGFydCIsInN5bWJvbCIsImFzc2V0VHlwZSIsInJhbmdlIiwiZGF0YSIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldCIsInRoZW4iLCJyZXNwIiwiY2F0Y2giLCJmaW5hbGx5IiwiZGl2IiwibGVuZ3RoIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImxlZnQiLCJib3R0b20iLCJkYXRhS2V5IiwidGlja0Zvcm1hdHRlciIsInQiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJtaW5UaWNrR2FwIiwiZG9tYWluIiwibGFiZWxGb3JtYXR0ZXIiLCJsIiwidHlwZSIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwiZG90Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/AssetChart.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./components/AssetDashboard.tsx":
/*!***************************************!*\
  !*** ./components/AssetDashboard.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AssetDashboard)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _AssetChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AssetChart */ \"(pages-dir-node)/./components/AssetChart.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, _AssetChart__WEBPACK_IMPORTED_MODULE_3__]);\n([axios__WEBPACK_IMPORTED_MODULE_2__, _AssetChart__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst assets = [\n    {\n        symbol: 'BTCUSDT',\n        name: 'Bitcoin',\n        assetType: 'crypto'\n    },\n    {\n        symbol: 'ETHUSDT',\n        name: 'Ethereum',\n        assetType: 'crypto'\n    }\n];\nconst ranges = [\n    {\n        label: '24h',\n        value: '24h'\n    },\n    {\n        label: '7d',\n        value: '7d'\n    },\n    {\n        label: 'All',\n        value: 'all'\n    }\n];\nfunction AssetDashboard() {\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [range, setRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('24h');\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AssetDashboard.useEffect\": ()=>{\n            const fetchPrices = {\n                \"AssetDashboard.useEffect.fetchPrices\": async ()=>{\n                    const updated = {};\n                    for (const asset of assets){\n                        try {\n                            const resp = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`/api/prices?symbol=${asset.symbol}&assetType=${asset.assetType}`);\n                            updated[asset.symbol] = resp.data.price;\n                        } catch  {\n                            updated[asset.symbol] = 'N/A';\n                        }\n                    }\n                    setPrices(updated);\n                }\n            }[\"AssetDashboard.useEffect.fetchPrices\"];\n            fetchPrices();\n            const interval = setInterval(fetchPrices, 5000); // Refresh every 5s\n            return ({\n                \"AssetDashboard.useEffect\": ()=>clearInterval(interval)\n            })[\"AssetDashboard.useEffect\"];\n        }\n    }[\"AssetDashboard.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-4\",\n                children: \"Trading Dashboard\"\n            }, void 0, false, {\n                fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-4 gap-4\",\n                children: assets.map((asset)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border rounded p-4 cursor-pointer hover:bg-gray-100\",\n                        onClick: ()=>{\n                            setSelected(asset);\n                            setRange('24h');\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-semibold\",\n                                children: asset.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl\",\n                                children: prices[asset.symbol] ?? '...'\n                            }, void 0, false, {\n                                fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, asset.symbol, true, {\n                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            selected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-semibold mb-2\",\n                        children: [\n                            selected.name,\n                            \" (\",\n                            selected.symbol,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 flex gap-2\",\n                        children: ranges.map((r)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setRange(r.value),\n                                className: `px-3 py-1 rounded border ${range === r.value ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600'}`,\n                                children: r.label\n                            }, r.value, false, {\n                                fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AssetChart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        symbol: selected.symbol,\n                        assetType: selected.assetType,\n                        range: range\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvQXNzZXREYXNoYm9hcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ2xCO0FBQ1k7QUFFdEMsTUFBTUksU0FBUztJQUNiO1FBQUVDLFFBQVE7UUFBV0MsTUFBTTtRQUFXQyxXQUFXO0lBQVM7SUFDMUQ7UUFBRUYsUUFBUTtRQUFXQyxNQUFNO1FBQVlDLFdBQVc7SUFBUztDQUU1RDtBQUVELE1BQU1DLFNBQVM7SUFDYjtRQUFFQyxPQUFPO1FBQU9DLE9BQU87SUFBTTtJQUM3QjtRQUFFRCxPQUFPO1FBQU1DLE9BQU87SUFBSztJQUMzQjtRQUFFRCxPQUFPO1FBQU9DLE9BQU87SUFBTTtDQUM5QjtBQUVjLFNBQVNDO0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBTSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2EsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBTTtJQUM5QyxNQUFNLENBQUNlLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUF1QjtJQUV6REQsZ0RBQVNBO29DQUFDO1lBQ1IsTUFBTWtCO3dEQUFjO29CQUNsQixNQUFNQyxVQUFlLENBQUM7b0JBQ3RCLEtBQUssTUFBTUMsU0FBU2hCLE9BQVE7d0JBQzFCLElBQUk7NEJBQ0YsTUFBTWlCLE9BQU8sTUFBTW5CLGlEQUFTLENBQUMsQ0FBQyxtQkFBbUIsRUFBRWtCLE1BQU1mLE1BQU0sQ0FBQyxXQUFXLEVBQUVlLE1BQU1iLFNBQVMsRUFBRTs0QkFDOUZZLE9BQU8sQ0FBQ0MsTUFBTWYsTUFBTSxDQUFDLEdBQUdnQixLQUFLRSxJQUFJLENBQUNDLEtBQUs7d0JBQ3pDLEVBQUUsT0FBTTs0QkFDTkwsT0FBTyxDQUFDQyxNQUFNZixNQUFNLENBQUMsR0FBRzt3QkFDMUI7b0JBQ0Y7b0JBQ0FRLFVBQVVNO2dCQUNaOztZQUNBRDtZQUNBLE1BQU1PLFdBQVdDLFlBQVlSLGFBQWEsT0FBTyxtQkFBbUI7WUFDcEU7NENBQU8sSUFBTVMsY0FBY0Y7O1FBQzdCO21DQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUEwQjs7Ozs7OzBCQUN4Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1p6QixPQUFPMkIsR0FBRyxDQUFDWCxDQUFBQSxzQkFDViw4REFBQ1E7d0JBQXVCQyxXQUFVO3dCQUFzREcsU0FBUzs0QkFBUWpCLFlBQVlLOzRCQUFRSCxTQUFTO3dCQUFROzswQ0FDNUksOERBQUNXO2dDQUFJQyxXQUFVOzBDQUFpQlQsTUFBTWQsSUFBSTs7Ozs7OzBDQUMxQyw4REFBQ3NCO2dDQUFJQyxXQUFVOzBDQUFXakIsTUFBTSxDQUFDUSxNQUFNZixNQUFNLENBQUMsSUFBSTs7Ozs7Ozt1QkFGMUNlLE1BQU1mLE1BQU07Ozs7Ozs7Ozs7WUFNekJTLDBCQUNDLDhEQUFDYztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNJO3dCQUFHSixXQUFVOzs0QkFBK0JmLFNBQVNSLElBQUk7NEJBQUM7NEJBQUdRLFNBQVNULE1BQU07NEJBQUM7Ozs7Ozs7a0NBQzlFLDhEQUFDdUI7d0JBQUlDLFdBQVU7a0NBQ1pyQixPQUFPdUIsR0FBRyxDQUFDRyxDQUFBQSxrQkFDViw4REFBQ0M7Z0NBRUNILFNBQVMsSUFBTWYsU0FBU2lCLEVBQUV4QixLQUFLO2dDQUMvQm1CLFdBQVcsQ0FBQyx5QkFBeUIsRUFBRWIsVUFBVWtCLEVBQUV4QixLQUFLLEdBQUcsMkJBQTJCLDBDQUEwQzswQ0FFL0h3QixFQUFFekIsS0FBSzsrQkFKSHlCLEVBQUV4QixLQUFLOzs7Ozs7Ozs7O2tDQVFsQiw4REFBQ1AsbURBQVVBO3dCQUFDRSxRQUFRUyxTQUFTVCxNQUFNO3dCQUFFRSxXQUFXTyxTQUFTUCxTQUFTO3dCQUFFUyxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JGIiwic291cmNlcyI6WyJEOlxcVlNjb2RlXFxib3QtYmluYW5jZVxcY29tcG9uZW50c1xcQXNzZXREYXNoYm9hcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEFzc2V0Q2hhcnQgZnJvbSAnLi9Bc3NldENoYXJ0JztcblxuY29uc3QgYXNzZXRzID0gW1xuICB7IHN5bWJvbDogJ0JUQ1VTRFQnLCBuYW1lOiAnQml0Y29pbicsIGFzc2V0VHlwZTogJ2NyeXB0bycgfSxcbiAgeyBzeW1ib2w6ICdFVEhVU0RUJywgbmFtZTogJ0V0aGVyZXVtJywgYXNzZXRUeXBlOiAnY3J5cHRvJyB9LFxuICAvLyBBZGQgbW9yZSBhc3NldHMgKHN0b2Nrcy9mb3JleCkgYXMgbmVlZGVkXG5dO1xuXG5jb25zdCByYW5nZXMgPSBbXG4gIHsgbGFiZWw6ICcyNGgnLCB2YWx1ZTogJzI0aCcgfSxcbiAgeyBsYWJlbDogJzdkJywgdmFsdWU6ICc3ZCcgfSxcbiAgeyBsYWJlbDogJ0FsbCcsIHZhbHVlOiAnYWxsJyB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXNzZXREYXNoYm9hcmQoKSB7XG4gIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZTxhbnk+KHt9KTtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xuICBjb25zdCBbcmFuZ2UsIHNldFJhbmdlXSA9IHVzZVN0YXRlPCcyNGgnIHwgJzdkJyB8ICdhbGwnPignMjRoJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFByaWNlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHVwZGF0ZWQ6IGFueSA9IHt9O1xuICAgICAgZm9yIChjb25zdCBhc3NldCBvZiBhc3NldHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3ByaWNlcz9zeW1ib2w9JHthc3NldC5zeW1ib2x9JmFzc2V0VHlwZT0ke2Fzc2V0LmFzc2V0VHlwZX1gKTtcbiAgICAgICAgICB1cGRhdGVkW2Fzc2V0LnN5bWJvbF0gPSByZXNwLmRhdGEucHJpY2U7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIHVwZGF0ZWRbYXNzZXQuc3ltYm9sXSA9ICdOL0EnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXRQcmljZXModXBkYXRlZCk7XG4gICAgfTtcbiAgICBmZXRjaFByaWNlcygpO1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZmV0Y2hQcmljZXMsIDUwMDApOyAvLyBSZWZyZXNoIGV2ZXJ5IDVzXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi00XCI+VHJhZGluZyBEYXNoYm9hcmQ8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC00XCI+XG4gICAgICAgIHthc3NldHMubWFwKGFzc2V0ID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17YXNzZXQuc3ltYm9sfSBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZCBwLTQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctZ3JheS0xMDBcIiBvbkNsaWNrPXsoKSA9PiB7IHNldFNlbGVjdGVkKGFzc2V0KTsgc2V0UmFuZ2UoJzI0aCcpOyB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPnthc3NldC5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+e3ByaWNlc1thc3NldC5zeW1ib2xdID8/ICcuLi4nfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAge3NlbGVjdGVkICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItMlwiPntzZWxlY3RlZC5uYW1lfSAoe3NlbGVjdGVkLnN5bWJvbH0pPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAge3Jhbmdlcy5tYXAociA9PiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e3IudmFsdWV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UmFuZ2Uoci52YWx1ZSBhcyAnMjRoJyB8ICc3ZCcgfCAnYWxsJyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMyBweS0xIHJvdW5kZWQgYm9yZGVyICR7cmFuZ2UgPT09IHIudmFsdWUgPyAnYmctYmx1ZS02MDAgdGV4dC13aGl0ZScgOiAnYmctd2hpdGUgdGV4dC1ibHVlLTYwMCBib3JkZXItYmx1ZS02MDAnfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ci5sYWJlbH1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QXNzZXRDaGFydCBzeW1ib2w9e3NlbGVjdGVkLnN5bWJvbH0gYXNzZXRUeXBlPXtzZWxlY3RlZC5hc3NldFR5cGV9IHJhbmdlPXtyYW5nZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJBc3NldENoYXJ0IiwiYXNzZXRzIiwic3ltYm9sIiwibmFtZSIsImFzc2V0VHlwZSIsInJhbmdlcyIsImxhYmVsIiwidmFsdWUiLCJBc3NldERhc2hib2FyZCIsInByaWNlcyIsInNldFByaWNlcyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJyYW5nZSIsInNldFJhbmdlIiwiZmV0Y2hQcmljZXMiLCJ1cGRhdGVkIiwiYXNzZXQiLCJyZXNwIiwiZ2V0IiwiZGF0YSIsInByaWNlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsIm9uQ2xpY2siLCJoMiIsInIiLCJidXR0b24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/AssetDashboard.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%5Cindex.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%5Cindex.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(pages-dir-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(pages-dir-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"(pages-dir-node)/./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"(pages-dir-node)/./pages/_app.tsx\");\n/* harmony import */ var _pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages\\index.tsx */ \"(pages-dir-node)/./pages/index.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__]);\n_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/index\",\n        pathname: \"/\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVMmcGFnZT0lMkYmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyU1Q2luZGV4LnRzeCZhYnNvbHV0ZUFwcFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2FwcCZhYnNvbHV0ZURvY3VtZW50UGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZG9jdW1lbnQmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdGO0FBQ2hDO0FBQ0U7QUFDMUQ7QUFDeUQ7QUFDVjtBQUMvQztBQUMrQztBQUMvQztBQUNBLGlFQUFlLHdFQUFLLENBQUMsNkNBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sdUJBQXVCLHdFQUFLLENBQUMsNkNBQVE7QUFDckMsdUJBQXVCLHdFQUFLLENBQUMsNkNBQVE7QUFDckMsMkJBQTJCLHdFQUFLLENBQUMsNkNBQVE7QUFDekMsZUFBZSx3RUFBSyxDQUFDLDZDQUFRO0FBQzdCLHdCQUF3Qix3RUFBSyxDQUFDLDZDQUFRO0FBQzdDO0FBQ08sZ0NBQWdDLHdFQUFLLENBQUMsNkNBQVE7QUFDOUMsZ0NBQWdDLHdFQUFLLENBQUMsNkNBQVE7QUFDOUMsaUNBQWlDLHdFQUFLLENBQUMsNkNBQVE7QUFDL0MsZ0NBQWdDLHdFQUFLLENBQUMsNkNBQVE7QUFDOUMsb0NBQW9DLHdFQUFLLENBQUMsNkNBQVE7QUFDekQ7QUFDTyx3QkFBd0Isa0dBQWdCO0FBQy9DO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDhEQUFXO0FBQ3hCLGtCQUFrQixvRUFBZ0I7QUFDbEMsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVELGlDIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgYXBwIGFuZCBkb2N1bWVudCBtb2R1bGVzLlxuaW1wb3J0ICogYXMgZG9jdW1lbnQgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fZG9jdW1lbnRcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHBcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzXFxcXGluZGV4LnRzeFwiO1xuLy8gUmUtZXhwb3J0IHRoZSBjb21wb25lbnQgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XG4vLyBSZS1leHBvcnQgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFNlcnZlclNpZGVQcm9wcycpO1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCAnY29uZmlnJyk7XG5leHBvcnQgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gaG9pc3QodXNlcmxhbmQsICdyZXBvcnRXZWJWaXRhbHMnKTtcbi8vIFJlLWV4cG9ydCBsZWdhY3kgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1BhcmFtcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclByb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzJyk7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc1JvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFUyxcbiAgICAgICAgcGFnZTogXCIvaW5kZXhcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL1wiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6ICcnLFxuICAgICAgICBmaWxlbmFtZTogJydcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgLy8gZGVmYXVsdCBleHBvcnQgbWlnaHQgbm90IGV4aXN0IHdoZW4gb3B0aW1pemVkIGZvciBkYXRhIG9ubHlcbiAgICAgICAgQXBwOiBhcHAuZGVmYXVsdCxcbiAgICAgICAgRG9jdW1lbnQ6IGRvY3VtZW50LmRlZmF1bHRcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%5Cindex.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"D:\\\\VScode\\\\bot-binance\\\\pages\\\\_app.tsx\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQjtBQUdoQixTQUFTQSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzlELHFCQUFPLDhEQUFDRDtRQUFXLEdBQUdDLFNBQVM7Ozs7OztBQUNqQyIsInNvdXJjZXMiOlsiRDpcXFZTY29kZVxcYm90LWJpbmFuY2VcXHBhZ2VzXFxfYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xufVxuIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"(pages-dir-node)/./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AssetDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AssetDashboard */ \"(pages-dir-node)/./components/AssetDashboard.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AssetDashboard__WEBPACK_IMPORTED_MODULE_2__]);\n_components_AssetDashboard__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Trading Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\pages\\\\index.tsx\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Real-time crypto, forex, and stocks dashboard\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\pages\\\\index.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\VScode\\\\bot-binance\\\\pages\\\\index.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AssetDashboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\VScode\\\\bot-binance\\\\pages\\\\index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\VScode\\\\bot-binance\\\\pages\\\\index.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQzZCO0FBRTNDLFNBQVNFO0lBQ3RCLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNILGtEQUFJQTs7a0NBQ0gsOERBQUNJO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRW5DLDhEQUFDTixrRUFBY0E7Ozs7Ozs7Ozs7O0FBR3JCIiwic291cmNlcyI6WyJEOlxcVlNjb2RlXFxib3QtYmluYW5jZVxccGFnZXNcXGluZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEFzc2V0RGFzaGJvYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQXNzZXREYXNoYm9hcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlRyYWRpbmcgRGFzaGJvYXJkPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlJlYWwtdGltZSBjcnlwdG8sIGZvcmV4LCBhbmQgc3RvY2tzIGRhc2hib2FyZFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QXNzZXREYXNoYm9hcmQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiQXNzZXREYXNoYm9hcmQiLCJIb21lIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/index.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=Line,LineChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!./node_modules/recharts/es6/index.js":
/*!*******************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=Line,LineChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!./node_modules/recharts/es6/index.js ***!
  \*******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Line: () => (/* reexport safe */ _cartesian_Line__WEBPACK_IMPORTED_MODULE_0__.Line),\n/* harmony export */   LineChart: () => (/* reexport safe */ _chart_LineChart__WEBPACK_IMPORTED_MODULE_1__.LineChart),\n/* harmony export */   ResponsiveContainer: () => (/* reexport safe */ _component_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_2__.ResponsiveContainer),\n/* harmony export */   Tooltip: () => (/* reexport safe */ _component_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Tooltip),\n/* harmony export */   XAxis: () => (/* reexport safe */ _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_4__.XAxis),\n/* harmony export */   YAxis: () => (/* reexport safe */ _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_5__.YAxis)\n/* harmony export */ });\n/* harmony import */ var _cartesian_Line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartesian/Line */ \"(pages-dir-node)/./node_modules/recharts/es6/cartesian/Line.js\");\n/* harmony import */ var _chart_LineChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart/LineChart */ \"(pages-dir-node)/./node_modules/recharts/es6/chart/LineChart.js\");\n/* harmony import */ var _component_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/ResponsiveContainer */ \"(pages-dir-node)/./node_modules/recharts/es6/component/ResponsiveContainer.js\");\n/* harmony import */ var _component_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/Tooltip */ \"(pages-dir-node)/./node_modules/recharts/es6/component/Tooltip.js\");\n/* harmony import */ var _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cartesian/XAxis */ \"(pages-dir-node)/./node_modules/recharts/es6/cartesian/XAxis.js\");\n/* harmony import */ var _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cartesian/YAxis */ \"(pages-dir-node)/./node_modules/recharts/es6/cartesian/YAxis.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_cartesian_Line__WEBPACK_IMPORTED_MODULE_0__, _chart_LineChart__WEBPACK_IMPORTED_MODULE_1__, _component_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_2__, _component_Tooltip__WEBPACK_IMPORTED_MODULE_3__, _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_4__, _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_5__]);\n([_cartesian_Line__WEBPACK_IMPORTED_MODULE_0__, _chart_LineChart__WEBPACK_IMPORTED_MODULE_1__, _component_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_2__, _component_Tooltip__WEBPACK_IMPORTED_MODULE_3__, _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_4__, _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS9fX2JhcnJlbF9vcHRpbWl6ZV9fP25hbWVzPUxpbmUsTGluZUNoYXJ0LFJlc3BvbnNpdmVDb250YWluZXIsVG9vbHRpcCxYQXhpcyxZQXhpcyE9IS4vbm9kZV9tb2R1bGVzL3JlY2hhcnRzL2VzNi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3VDO0FBQ007QUFDd0I7QUFDeEI7QUFDSiIsInNvdXJjZXMiOlsiRDpcXFZTY29kZVxcYm90LWJpbmFuY2VcXG5vZGVfbW9kdWxlc1xccmVjaGFydHNcXGVzNlxcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBMaW5lIH0gZnJvbSBcIi4vY2FydGVzaWFuL0xpbmVcIlxuZXhwb3J0IHsgTGluZUNoYXJ0IH0gZnJvbSBcIi4vY2hhcnQvTGluZUNoYXJ0XCJcbmV4cG9ydCB7IFJlc3BvbnNpdmVDb250YWluZXIgfSBmcm9tIFwiLi9jb21wb25lbnQvUmVzcG9uc2l2ZUNvbnRhaW5lclwiXG5leHBvcnQgeyBUb29sdGlwIH0gZnJvbSBcIi4vY29tcG9uZW50L1Rvb2x0aXBcIlxuZXhwb3J0IHsgWEF4aXMgfSBmcm9tIFwiLi9jYXJ0ZXNpYW4vWEF4aXNcIlxuZXhwb3J0IHsgWUF4aXMgfSBmcm9tIFwiLi9jYXJ0ZXNpYW4vWUF4aXNcIiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/__barrel_optimize__?names=Line,LineChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!./node_modules/recharts/es6/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = import("clsx");;

/***/ }),

/***/ "eventemitter3":
/*!********************************!*\
  !*** external "eventemitter3" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("eventemitter3");

/***/ }),

/***/ "lodash/every":
/*!*******************************!*\
  !*** external "lodash/every" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/every");

/***/ }),

/***/ "lodash/find":
/*!******************************!*\
  !*** external "lodash/find" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/find");

/***/ }),

/***/ "lodash/flatMap":
/*!*********************************!*\
  !*** external "lodash/flatMap" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/flatMap");

/***/ }),

/***/ "lodash/get":
/*!*****************************!*\
  !*** external "lodash/get" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/get");

/***/ }),

/***/ "lodash/isBoolean":
/*!***********************************!*\
  !*** external "lodash/isBoolean" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isBoolean");

/***/ }),

/***/ "lodash/isEqual":
/*!*********************************!*\
  !*** external "lodash/isEqual" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEqual");

/***/ }),

/***/ "lodash/isFunction":
/*!************************************!*\
  !*** external "lodash/isFunction" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isFunction");

/***/ }),

/***/ "lodash/isNaN":
/*!*******************************!*\
  !*** external "lodash/isNaN" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isNaN");

/***/ }),

/***/ "lodash/isNil":
/*!*******************************!*\
  !*** external "lodash/isNil" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isNil");

/***/ }),

/***/ "lodash/isNumber":
/*!**********************************!*\
  !*** external "lodash/isNumber" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isNumber");

/***/ }),

/***/ "lodash/isObject":
/*!**********************************!*\
  !*** external "lodash/isObject" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isObject");

/***/ }),

/***/ "lodash/isPlainObject":
/*!***************************************!*\
  !*** external "lodash/isPlainObject" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isPlainObject");

/***/ }),

/***/ "lodash/isString":
/*!**********************************!*\
  !*** external "lodash/isString" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isString");

/***/ }),

/***/ "lodash/last":
/*!******************************!*\
  !*** external "lodash/last" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/last");

/***/ }),

/***/ "lodash/mapValues":
/*!***********************************!*\
  !*** external "lodash/mapValues" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/mapValues");

/***/ }),

/***/ "lodash/max":
/*!*****************************!*\
  !*** external "lodash/max" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/max");

/***/ }),

/***/ "lodash/memoize":
/*!*********************************!*\
  !*** external "lodash/memoize" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/memoize");

/***/ }),

/***/ "lodash/min":
/*!*****************************!*\
  !*** external "lodash/min" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/min");

/***/ }),

/***/ "lodash/range":
/*!*******************************!*\
  !*** external "lodash/range" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/range");

/***/ }),

/***/ "lodash/some":
/*!******************************!*\
  !*** external "lodash/some" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/some");

/***/ }),

/***/ "lodash/sortBy":
/*!********************************!*\
  !*** external "lodash/sortBy" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/sortBy");

/***/ }),

/***/ "lodash/throttle":
/*!**********************************!*\
  !*** external "lodash/throttle" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/throttle");

/***/ }),

/***/ "lodash/uniqBy":
/*!********************************!*\
  !*** external "lodash/uniqBy" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/uniqBy");

/***/ }),

/***/ "lodash/upperFirst":
/*!************************************!*\
  !*** external "lodash/upperFirst" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/upperFirst");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react-smooth":
/*!*******************************!*\
  !*** external "react-smooth" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-smooth");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "recharts-scale":
/*!*********************************!*\
  !*** external "recharts-scale" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("recharts-scale");

/***/ }),

/***/ "tiny-invariant":
/*!*********************************!*\
  !*** external "tiny-invariant" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("tiny-invariant");;

/***/ }),

/***/ "victory-vendor/d3-scale":
/*!******************************************!*\
  !*** external "victory-vendor/d3-scale" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("victory-vendor/d3-scale");

/***/ }),

/***/ "victory-vendor/d3-shape":
/*!******************************************!*\
  !*** external "victory-vendor/d3-shape" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("victory-vendor/d3-shape");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/recharts"], () => (__webpack_exec__("(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%5Cindex.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();