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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AssetChart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Line_LineChart_ReferenceDot_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Line,LineChart,ReferenceDot,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"(pages-dir-node)/__barrel_optimize__?names=Line,LineChart,ReferenceDot,ResponsiveContainer,Tooltip,XAxis,YAxis!=!./node_modules/recharts/es6/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, _barrel_optimize_names_Line_LineChart_ReferenceDot_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__]);\n([axios__WEBPACK_IMPORTED_MODULE_2__, _barrel_optimize_names_Line_LineChart_ReferenceDot_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n// Helper to color-code up/down segments\nfunction getLineSegments(data) {\n    if (!data.length) return [];\n    const segments = [];\n    for(let i = 1; i < data.length; i++){\n        segments.push({\n            from: data[i - 1],\n            to: data[i],\n            isUp: data[i].price > data[i - 1].price\n        });\n    }\n    return segments;\n}\nfunction AssetChart({ symbol, assetType, range }) {\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AssetChart.useEffect\": ()=>{\n            setLoading(true);\n            axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`/api/history?symbol=${symbol}&assetType=${assetType}&range=${range}`).then({\n                \"AssetChart.useEffect\": (resp)=>setData(resp.data)\n            }[\"AssetChart.useEffect\"]).catch({\n                \"AssetChart.useEffect\": ()=>setData([])\n            }[\"AssetChart.useEffect\"]).finally({\n                \"AssetChart.useEffect\": ()=>setLoading(false)\n            }[\"AssetChart.useEffect\"]);\n        }\n    }[\"AssetChart.useEffect\"], [\n        symbol,\n        assetType,\n        range\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading chart...\"\n    }, void 0, false, {\n        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetChart.tsx\",\n        lineNumber: 37,\n        columnNumber: 23\n    }, this);\n    if (!data.length) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"No historical data.\"\n    }, void 0, false, {\n        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetChart.tsx\",\n        lineNumber: 38,\n        columnNumber: 28\n    }, this);\n    const segments = getLineSegments(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Line_LineChart_ReferenceDot_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.ResponsiveContainer, {\n        width: \"100%\",\n        height: 300,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Line_LineChart_ReferenceDot_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.LineChart, {\n            data: data,\n            margin: {\n                top: 10,\n                right: 20,\n                left: 0,\n                bottom: 0\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Line_LineChart_ReferenceDot_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.XAxis, {\n                    dataKey: \"timestamp\",\n                    tickFormatter: (t)=>new Date(t).toLocaleString(),\n                    minTickGap: 30\n                }, void 0, false, {\n                    fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetChart.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Line_LineChart_ReferenceDot_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.YAxis, {\n                    domain: [\n                        'auto',\n                        'auto'\n                    ]\n                }, void 0, false, {\n                    fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetChart.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Line_LineChart_ReferenceDot_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {\n                    labelFormatter: (l)=>new Date(l).toLocaleString()\n                }, void 0, false, {\n                    fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetChart.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                segments.map((seg, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Line_LineChart_ReferenceDot_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.Line, {\n                        data: [\n                            seg.from,\n                            seg.to\n                        ],\n                        type: \"monotone\",\n                        dataKey: \"price\",\n                        stroke: seg.isUp ? '#22c55e' : '#ef4444',\n                        strokeWidth: 2,\n                        dot: false,\n                        isAnimationActive: false\n                    }, i, false, {\n                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetChart.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this)),\n                segments.map((seg, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Line_LineChart_ReferenceDot_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.ReferenceDot, {\n                        x: seg.to.timestamp,\n                        y: seg.to.price,\n                        r: 3,\n                        fill: seg.isUp ? '#22c55e' : '#ef4444',\n                        stroke: \"none\"\n                    }, i, false, {\n                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetChart.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetChart.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetChart.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvQXNzZXRDaGFydC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDeUQ7QUFDM0U7QUFRMUIsd0NBQXdDO0FBQ3hDLFNBQVNVLGdCQUFnQkMsSUFBVztJQUNsQyxJQUFJLENBQUNBLEtBQUtDLE1BQU0sRUFBRSxPQUFPLEVBQUU7SUFDM0IsTUFBTUMsV0FBVyxFQUFFO0lBQ25CLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJSCxLQUFLQyxNQUFNLEVBQUVFLElBQUs7UUFDcENELFNBQVNFLElBQUksQ0FBQztZQUNaQyxNQUFNTCxJQUFJLENBQUNHLElBQUksRUFBRTtZQUNqQkcsSUFBSU4sSUFBSSxDQUFDRyxFQUFFO1lBQ1hJLE1BQU1QLElBQUksQ0FBQ0csRUFBRSxDQUFDSyxLQUFLLEdBQUdSLElBQUksQ0FBQ0csSUFBSSxFQUFFLENBQUNLLEtBQUs7UUFDekM7SUFDRjtJQUNBLE9BQU9OO0FBQ1Q7QUFFZSxTQUFTTyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQW1CO0lBQzlFLE1BQU0sQ0FBQ1osTUFBTWEsUUFBUSxHQUFHdkIsK0NBQVFBLENBQVEsRUFBRTtJQUMxQyxNQUFNLENBQUN3QixTQUFTQyxXQUFXLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBO2dDQUFDO1lBQ1IwQixXQUFXO1lBQ1hqQixpREFBUyxDQUFDLENBQUMsb0JBQW9CLEVBQUVZLE9BQU8sV0FBVyxFQUFFQyxVQUFVLE9BQU8sRUFBRUMsT0FBTyxFQUM1RUssSUFBSTt3Q0FBQ0MsQ0FBQUEsT0FBUUwsUUFBUUssS0FBS2xCLElBQUk7dUNBQzlCbUIsS0FBSzt3Q0FBQyxJQUFNTixRQUFRLEVBQUU7dUNBQ3RCTyxPQUFPO3dDQUFDLElBQU1MLFdBQVc7O1FBQzlCOytCQUFHO1FBQUNMO1FBQVFDO1FBQVdDO0tBQU07SUFFN0IsSUFBSUUsU0FBUyxxQkFBTyw4REFBQ087a0JBQUk7Ozs7OztJQUN6QixJQUFJLENBQUNyQixLQUFLQyxNQUFNLEVBQUUscUJBQU8sOERBQUNvQjtrQkFBSTs7Ozs7O0lBRTlCLE1BQU1uQixXQUFXSCxnQkFBZ0JDO0lBRWpDLHFCQUNFLDhEQUFDSixvSkFBbUJBO1FBQUMwQixPQUFNO1FBQU9DLFFBQVE7a0JBR3hDLDRFQUFDaEMsMElBQVNBO1lBQUNTLE1BQU1BO1lBQU13QixRQUFRO2dCQUFFQyxLQUFLO2dCQUFJQyxPQUFPO2dCQUFJQyxNQUFNO2dCQUFHQyxRQUFRO1lBQUU7OzhCQUN0RSw4REFBQ25DLHNJQUFLQTtvQkFBQ29DLFNBQVE7b0JBQVlDLGVBQWVDLENBQUFBLElBQUssSUFBSUMsS0FBS0QsR0FBR0UsY0FBYztvQkFBSUMsWUFBWTs7Ozs7OzhCQUN6Riw4REFBQ3hDLHNJQUFLQTtvQkFBQ3lDLFFBQVE7d0JBQUM7d0JBQVE7cUJBQU87Ozs7Ozs4QkFDL0IsOERBQUN4Qyx3SUFBT0E7b0JBQUN5QyxnQkFBZ0JDLENBQUFBLElBQUssSUFBSUwsS0FBS0ssR0FBR0osY0FBYzs7Ozs7O2dCQUV2RC9CLFNBQVNvQyxHQUFHLENBQUMsQ0FBQ0MsS0FBS3BDLGtCQUNsQiw4REFBQ1gscUlBQUlBO3dCQUVIUSxNQUFNOzRCQUFDdUMsSUFBSWxDLElBQUk7NEJBQUVrQyxJQUFJakMsRUFBRTt5QkFBQzt3QkFDeEJrQyxNQUFLO3dCQUNMWCxTQUFRO3dCQUNSWSxRQUFRRixJQUFJaEMsSUFBSSxHQUFHLFlBQVk7d0JBQy9CbUMsYUFBYTt3QkFDYkMsS0FBSzt3QkFDTEMsbUJBQW1CO3VCQVBkekM7Ozs7O2dCQVdSRCxTQUFTb0MsR0FBRyxDQUFDLENBQUNDLEtBQUtwQyxrQkFDbEIsOERBQUNOLDZJQUFZQTt3QkFFWGdELEdBQUdOLElBQUlqQyxFQUFFLENBQUN3QyxTQUFTO3dCQUNuQkMsR0FBR1IsSUFBSWpDLEVBQUUsQ0FBQ0UsS0FBSzt3QkFDZndDLEdBQUc7d0JBQ0hDLE1BQU1WLElBQUloQyxJQUFJLEdBQUcsWUFBWTt3QkFDN0JrQyxRQUFPO3VCQUxGdEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXakIiLCJzb3VyY2VzIjpbIkQ6XFxWU2NvZGVcXGJvdC1iaW5hbmNlXFxjb21wb25lbnRzXFxBc3NldENoYXJ0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluZUNoYXJ0LCBMaW5lLCBYQXhpcywgWUF4aXMsIFRvb2x0aXAsIFJlc3BvbnNpdmVDb250YWluZXIsIFJlZmVyZW5jZURvdCB9IGZyb20gJ3JlY2hhcnRzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmludGVyZmFjZSBBc3NldENoYXJ0UHJvcHMge1xuICBzeW1ib2w6IHN0cmluZztcbiAgYXNzZXRUeXBlOiBzdHJpbmc7XG4gIHJhbmdlOiAnMjRoJyB8ICc3ZCcgfCAnYWxsJztcbn1cblxuLy8gSGVscGVyIHRvIGNvbG9yLWNvZGUgdXAvZG93biBzZWdtZW50c1xuZnVuY3Rpb24gZ2V0TGluZVNlZ21lbnRzKGRhdGE6IGFueVtdKSB7XG4gIGlmICghZGF0YS5sZW5ndGgpIHJldHVybiBbXTtcbiAgY29uc3Qgc2VnbWVudHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgc2VnbWVudHMucHVzaCh7XG4gICAgICBmcm9tOiBkYXRhW2kgLSAxXSxcbiAgICAgIHRvOiBkYXRhW2ldLFxuICAgICAgaXNVcDogZGF0YVtpXS5wcmljZSA+IGRhdGFbaSAtIDFdLnByaWNlXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHNlZ21lbnRzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBc3NldENoYXJ0KHsgc3ltYm9sLCBhc3NldFR5cGUsIHJhbmdlIH06IEFzc2V0Q2hhcnRQcm9wcykge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF4aW9zLmdldChgL2FwaS9oaXN0b3J5P3N5bWJvbD0ke3N5bWJvbH0mYXNzZXRUeXBlPSR7YXNzZXRUeXBlfSZyYW5nZT0ke3JhbmdlfWApXG4gICAgICAudGhlbihyZXNwID0+IHNldERhdGEocmVzcC5kYXRhKSlcbiAgICAgIC5jYXRjaCgoKSA9PiBzZXREYXRhKFtdKSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHNldExvYWRpbmcoZmFsc2UpKTtcbiAgfSwgW3N5bWJvbCwgYXNzZXRUeXBlLCByYW5nZV0pO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nIGNoYXJ0Li4uPC9kaXY+O1xuICBpZiAoIWRhdGEubGVuZ3RoKSByZXR1cm4gPGRpdj5ObyBoaXN0b3JpY2FsIGRhdGEuPC9kaXY+O1xuXG4gIGNvbnN0IHNlZ21lbnRzID0gZ2V0TGluZVNlZ21lbnRzKGRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXszMDB9PlxuICAgICAgey8qIFVuY29tbWVudCBmb3IgY2FuZGxlc3RpY2sgc3VwcG9ydCBsYXRlciAqL31cbiAgICAgIHsvKiA8Q29tcG9zZWRDaGFydCAuLi4gPiAuLi4gPC9Db21wb3NlZENoYXJ0PiAqL31cbiAgICAgIDxMaW5lQ2hhcnQgZGF0YT17ZGF0YX0gbWFyZ2luPXt7IHRvcDogMTAsIHJpZ2h0OiAyMCwgbGVmdDogMCwgYm90dG9tOiAwIH19PlxuICAgICAgICA8WEF4aXMgZGF0YUtleT1cInRpbWVzdGFtcFwiIHRpY2tGb3JtYXR0ZXI9e3QgPT4gbmV3IERhdGUodCkudG9Mb2NhbGVTdHJpbmcoKX0gbWluVGlja0dhcD17MzB9IC8+XG4gICAgICAgIDxZQXhpcyBkb21haW49e1snYXV0bycsICdhdXRvJ119IC8+XG4gICAgICAgIDxUb29sdGlwIGxhYmVsRm9ybWF0dGVyPXtsID0+IG5ldyBEYXRlKGwpLnRvTG9jYWxlU3RyaW5nKCl9IC8+XG4gICAgICAgIHsvKiBEcmF3IHVwL2Rvd24gc2VnbWVudHMgd2l0aCBkaWZmZXJlbnQgY29sb3JzICovfVxuICAgICAgICB7c2VnbWVudHMubWFwKChzZWcsIGkpID0+IChcbiAgICAgICAgICA8TGluZVxuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgZGF0YT17W3NlZy5mcm9tLCBzZWcudG9dfVxuICAgICAgICAgICAgdHlwZT1cIm1vbm90b25lXCJcbiAgICAgICAgICAgIGRhdGFLZXk9XCJwcmljZVwiXG4gICAgICAgICAgICBzdHJva2U9e3NlZy5pc1VwID8gJyMyMmM1NWUnIDogJyNlZjQ0NDQnfVxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICBkb3Q9e2ZhbHNlfVxuICAgICAgICAgICAgaXNBbmltYXRpb25BY3RpdmU9e2ZhbHNlfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICB7LyogTWFya2VycyBmb3IgdXAvZG93biBwb2ludHMgKi99XG4gICAgICAgIHtzZWdtZW50cy5tYXAoKHNlZywgaSkgPT4gKFxuICAgICAgICAgIDxSZWZlcmVuY2VEb3RcbiAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgIHg9e3NlZy50by50aW1lc3RhbXB9XG4gICAgICAgICAgICB5PXtzZWcudG8ucHJpY2V9XG4gICAgICAgICAgICByPXszfVxuICAgICAgICAgICAgZmlsbD17c2VnLmlzVXAgPyAnIzIyYzU1ZScgOiAnI2VmNDQ0NCd9XG4gICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvTGluZUNoYXJ0PlxuICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmVDaGFydCIsIkxpbmUiLCJYQXhpcyIsIllBeGlzIiwiVG9vbHRpcCIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJSZWZlcmVuY2VEb3QiLCJheGlvcyIsImdldExpbmVTZWdtZW50cyIsImRhdGEiLCJsZW5ndGgiLCJzZWdtZW50cyIsImkiLCJwdXNoIiwiZnJvbSIsInRvIiwiaXNVcCIsInByaWNlIiwiQXNzZXRDaGFydCIsInN5bWJvbCIsImFzc2V0VHlwZSIsInJhbmdlIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZ2V0IiwidGhlbiIsInJlc3AiLCJjYXRjaCIsImZpbmFsbHkiLCJkaXYiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsImRhdGFLZXkiLCJ0aWNrRm9ybWF0dGVyIiwidCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIm1pblRpY2tHYXAiLCJkb21haW4iLCJsYWJlbEZvcm1hdHRlciIsImwiLCJtYXAiLCJzZWciLCJ0eXBlIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJkb3QiLCJpc0FuaW1hdGlvbkFjdGl2ZSIsIngiLCJ0aW1lc3RhbXAiLCJ5IiwiciIsImZpbGwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/AssetChart.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./components/AssetDashboard.tsx":
/*!***************************************!*\
  !*** ./components/AssetDashboard.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AssetDashboard)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _AssetChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AssetChart */ \"(pages-dir-node)/./components/AssetChart.tsx\");\n/* harmony import */ var _CandlestickChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CandlestickChart */ \"(pages-dir-node)/./components/CandlestickChart.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, _AssetChart__WEBPACK_IMPORTED_MODULE_3__, _CandlestickChart__WEBPACK_IMPORTED_MODULE_4__]);\n([axios__WEBPACK_IMPORTED_MODULE_2__, _AssetChart__WEBPACK_IMPORTED_MODULE_3__, _CandlestickChart__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst assets = [\n    {\n        symbol: 'BTCUSDT',\n        name: 'Bitcoin',\n        assetType: 'crypto'\n    },\n    {\n        symbol: 'ETHUSDT',\n        name: 'Ethereum',\n        assetType: 'crypto'\n    },\n    {\n        symbol: 'AAPL',\n        name: 'Apple',\n        assetType: 'stock'\n    },\n    {\n        symbol: 'MSFT',\n        name: 'Microsoft',\n        assetType: 'stock'\n    },\n    {\n        symbol: 'EURUSD',\n        name: 'EUR/USD',\n        assetType: 'forex'\n    }\n];\nfunction assetTypeIcon(type) {\n    if (type === 'crypto') return '🪙';\n    if (type === 'stock') return '📈';\n    if (type === 'forex') return '💱';\n    return '';\n}\nconst ranges = [\n    {\n        label: '24h',\n        value: '24h'\n    },\n    {\n        label: '7d',\n        value: '7d'\n    },\n    {\n        label: 'All',\n        value: 'all'\n    }\n];\nfunction AssetDashboard() {\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [chartType, setChartType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('line');\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [ticker24, setTicker24] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [range, setRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('24h');\n    // Fetch 24hr stats for crypto assets\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AssetDashboard.useEffect\": ()=>{\n            async function fetch24hr() {\n                try {\n                    const resp = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('https://api.binance.com/api/v3/ticker/24hr');\n                    const map = {};\n                    for (const t of resp.data){\n                        map[t.symbol] = t;\n                    }\n                    setTicker24(map);\n                } catch  {}\n            }\n            fetch24hr();\n            const interval = setInterval(fetch24hr, 10000);\n            return ({\n                \"AssetDashboard.useEffect\": ()=>clearInterval(interval)\n            })[\"AssetDashboard.useEffect\"];\n        }\n    }[\"AssetDashboard.useEffect\"], []);\n    // WebSocket for live price updates (crypto)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AssetDashboard.useEffect\": ()=>{\n            const ws = {};\n            const updateLive = {\n                \"AssetDashboard.useEffect.updateLive\": (symbol, price)=>{\n                    setPrices({\n                        \"AssetDashboard.useEffect.updateLive\": (prev)=>({\n                                ...prev,\n                                [symbol]: price\n                            })\n                    }[\"AssetDashboard.useEffect.updateLive\"]);\n                }\n            }[\"AssetDashboard.useEffect.updateLive\"];\n            assets.forEach({\n                \"AssetDashboard.useEffect\": (asset)=>{\n                    if (asset.assetType === 'crypto') {\n                        const wsUrl = `wss://stream.binance.com:9443/ws/${asset.symbol.toLowerCase()}@trade`;\n                        ws[asset.symbol] = new window.WebSocket(wsUrl);\n                        ws[asset.symbol].onmessage = ({\n                            \"AssetDashboard.useEffect\": (event)=>{\n                                const data = JSON.parse(event.data);\n                                updateLive(asset.symbol, parseFloat(data.p));\n                            }\n                        })[\"AssetDashboard.useEffect\"];\n                    }\n                }\n            }[\"AssetDashboard.useEffect\"]);\n            return ({\n                \"AssetDashboard.useEffect\": ()=>{\n                    Object.values(ws).forEach({\n                        \"AssetDashboard.useEffect\": (socket)=>socket && socket.close()\n                    }[\"AssetDashboard.useEffect\"]);\n                }\n            })[\"AssetDashboard.useEffect\"];\n        }\n    }[\"AssetDashboard.useEffect\"], []);\n    // Fallback fetch for non-crypto\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AssetDashboard.useEffect\": ()=>{\n            const fetchPrices = {\n                \"AssetDashboard.useEffect.fetchPrices\": async ()=>{\n                    const updated = {};\n                    for (const asset of assets){\n                        if (asset.assetType !== 'crypto') {\n                            try {\n                                const resp = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`/api/prices?symbol=${asset.symbol}&assetType=${asset.assetType}`);\n                                updated[asset.symbol] = resp.data.price;\n                            } catch  {\n                                updated[asset.symbol] = 'N/A';\n                            }\n                        }\n                    }\n                    setPrices({\n                        \"AssetDashboard.useEffect.fetchPrices\": (prev)=>({\n                                ...prev,\n                                ...updated\n                            })\n                    }[\"AssetDashboard.useEffect.fetchPrices\"]);\n                }\n            }[\"AssetDashboard.useEffect.fetchPrices\"];\n            fetchPrices();\n            const interval = setInterval(fetchPrices, 5000); // Refresh every 5s\n            return ({\n                \"AssetDashboard.useEffect\": ()=>clearInterval(interval)\n            })[\"AssetDashboard.useEffect\"];\n        }\n    }[\"AssetDashboard.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-4\",\n                children: \"Trading Dashboard\"\n            }, void 0, false, {\n                fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 flex flex-col md:flex-row gap-4 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Search assets...\",\n                        value: search,\n                        onChange: (e)=>setSearch(e.target.value),\n                        className: \"border px-3 py-2 rounded w-full md:w-64\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2 ml-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: `px-3 py-1 rounded border ${chartType === 'line' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600'}`,\n                                onClick: ()=>setChartType('line'),\n                                children: \"Line\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: `px-3 py-1 rounded border ${chartType === 'candle' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600'}`,\n                                onClick: ()=>setChartType('candle'),\n                                children: \"Candle\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-4 gap-4\",\n                children: assets.filter((asset)=>asset.name.toLowerCase().includes(search.toLowerCase()) || asset.symbol.toLowerCase().includes(search.toLowerCase())).map((asset)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border rounded-lg shadow-sm p-4 cursor-pointer hover:bg-blue-50 flex flex-col items-center transition-all\",\n                        onClick: ()=>{\n                            setSelected(asset);\n                            setRange('24h');\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-3xl mb-2\",\n                                children: assetTypeIcon(asset.assetType)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                                lineNumber: 136,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-semibold mb-1\",\n                                children: asset.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                                lineNumber: 137,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xs text-gray-500 mb-1\",\n                                children: asset.symbol\n                            }, void 0, false, {\n                                fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                                lineNumber: 138,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl font-mono\",\n                                children: prices[asset.symbol] ?? '...'\n                            }, void 0, false, {\n                                fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                                lineNumber: 139,\n                                columnNumber: 13\n                            }, this),\n                            asset.assetType === 'crypto' && ticker24[asset.symbol] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-1 text-xs\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: parseFloat(ticker24[asset.symbol].priceChange) > 0 ? 'text-green-600' : 'text-red-600',\n                                        children: [\n                                            parseFloat(ticker24[asset.symbol].priceChange) > 0 ? '+' : '',\n                                            parseFloat(ticker24[asset.symbol].priceChange).toFixed(2),\n                                            ' ',\n                                            \"(\",\n                                            parseFloat(ticker24[asset.symbol].priceChangePercent).toFixed(2),\n                                            \"%)\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                                        lineNumber: 142,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                                        lineNumber: 148,\n                                        columnNumber: 24\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-gray-500\",\n                                        children: [\n                                            \"H: \",\n                                            ticker24[asset.symbol].highPrice,\n                                            \" L: \",\n                                            ticker24[asset.symbol].lowPrice\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                                        lineNumber: 149,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, asset.symbol, true, {\n                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, this),\n            selected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-semibold mb-2\",\n                        children: [\n                            selected.name,\n                            \" (\",\n                            selected.symbol,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                        lineNumber: 157,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 flex gap-2\",\n                        children: ranges.map((r)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setRange(r.value),\n                                className: `px-3 py-1 rounded border ${range === r.value ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600'}`,\n                                children: r.label\n                            }, r.value, false, {\n                                fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                                lineNumber: 160,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                        lineNumber: 158,\n                        columnNumber: 11\n                    }, this),\n                    chartType === 'line' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AssetChart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        symbol: selected.symbol,\n                        assetType: selected.assetType,\n                        range: range\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                        lineNumber: 170,\n                        columnNumber: 13\n                    }, this),\n                    chartType === 'candle' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CandlestickChart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        symbol: selected.symbol,\n                        assetType: selected.assetType,\n                        range: range\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                        lineNumber: 173,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n                lineNumber: 156,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\AssetDashboard.tsx\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvQXNzZXREYXNoYm9hcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNsQjtBQUNZO0FBQ1k7QUFFbEQsTUFBTUssU0FBUztJQUNiO1FBQUVDLFFBQVE7UUFBV0MsTUFBTTtRQUFXQyxXQUFXO0lBQVM7SUFDMUQ7UUFBRUYsUUFBUTtRQUFXQyxNQUFNO1FBQVlDLFdBQVc7SUFBUztJQUMzRDtRQUFFRixRQUFRO1FBQVFDLE1BQU07UUFBU0MsV0FBVztJQUFRO0lBQ3BEO1FBQUVGLFFBQVE7UUFBUUMsTUFBTTtRQUFhQyxXQUFXO0lBQVE7SUFDeEQ7UUFBRUYsUUFBUTtRQUFVQyxNQUFNO1FBQVdDLFdBQVc7SUFBUTtDQUN6RDtBQUVELFNBQVNDLGNBQWNDLElBQVk7SUFDakMsSUFBSUEsU0FBUyxVQUFVLE9BQU87SUFDOUIsSUFBSUEsU0FBUyxTQUFTLE9BQU87SUFDN0IsSUFBSUEsU0FBUyxTQUFTLE9BQU87SUFDN0IsT0FBTztBQUNUO0FBRUEsTUFBTUMsU0FBUztJQUNiO1FBQUVDLE9BQU87UUFBT0MsT0FBTztJQUFNO0lBQzdCO1FBQUVELE9BQU87UUFBTUMsT0FBTztJQUFLO0lBQzNCO1FBQUVELE9BQU87UUFBT0MsT0FBTztJQUFNO0NBQzlCO0FBWWMsU0FBU0M7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2dCLFdBQVdDLGFBQWEsR0FBR2pCLCtDQUFRQSxDQUFvQjtJQUM5RCxNQUFNLENBQUNrQixRQUFRQyxVQUFVLEdBQUduQiwrQ0FBUUEsQ0FBTSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ29CLFVBQVVDLFlBQVksR0FBR3JCLCtDQUFRQSxDQUE2QixDQUFDO0lBQ3RFLE1BQU0sQ0FBQ3NCLFVBQVVDLFlBQVksR0FBR3ZCLCtDQUFRQSxDQUFNO0lBQzlDLE1BQU0sQ0FBQ3dCLE9BQU9DLFNBQVMsR0FBR3pCLCtD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QkFBRUUsV0FBV2UsU0FBU2YsU0FBUzt3QkFBRWlCLE9BQU9BOzs7Ozs7b0JBRTVFUixjQUFjLDBCQUNiLDhEQUFDYix5REFBZ0JBO3dCQUFDRSxRQUFRaUIsU0FBU2pCLE1BQU07d0JBQUVFLFdBQVdlLFNBQVNmLFNBQVM7d0JBQUVpQixPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdGIiwic291cmNlcyI6WyJEOlxcVlNjb2RlXFxib3QtYmluYW5jZVxcY29tcG9uZW50c1xcQXNzZXREYXNoYm9hcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEFzc2V0Q2hhcnQgZnJvbSAnLi9Bc3NldENoYXJ0JztcbmltcG9ydCBDYW5kbGVzdGlja0NoYXJ0IGZyb20gJy4vQ2FuZGxlc3RpY2tDaGFydCc7XG5cbmNvbnN0IGFzc2V0cyA9IFtcbiAgeyBzeW1ib2w6ICdCVENVU0RUJywgbmFtZTogJ0JpdGNvaW4nLCBhc3NldFR5cGU6ICdjcnlwdG8nIH0sXG4gIHsgc3ltYm9sOiAnRVRIVVNEVCcsIG5hbWU6ICdFdGhlcmV1bScsIGFzc2V0VHlwZTogJ2NyeXB0bycgfSxcbiAgeyBzeW1ib2w6ICdBQVBMJywgbmFtZTogJ0FwcGxlJywgYXNzZXRUeXBlOiAnc3RvY2snIH0sXG4gIHsgc3ltYm9sOiAnTVNGVCcsIG5hbWU6ICdNaWNyb3NvZnQnLCBhc3NldFR5cGU6ICdzdG9jaycgfSxcbiAgeyBzeW1ib2w6ICdFVVJVU0QnLCBuYW1lOiAnRVVSL1VTRCcsIGFzc2V0VHlwZTogJ2ZvcmV4JyB9LFxuXTtcblxuZnVuY3Rpb24gYXNzZXRUeXBlSWNvbih0eXBlOiBzdHJpbmcpIHtcbiAgaWYgKHR5cGUgPT09ICdjcnlwdG8nKSByZXR1cm4gJ/CfqpknO1xuICBpZiAodHlwZSA9PT0gJ3N0b2NrJykgcmV0dXJuICfwn5OIJztcbiAgaWYgKHR5cGUgPT09ICdmb3JleCcpIHJldHVybiAn8J+SsSc7XG4gIHJldHVybiAnJztcbn1cblxuY29uc3QgcmFuZ2VzID0gW1xuICB7IGxhYmVsOiAnMjRoJywgdmFsdWU6ICcyNGgnIH0sXG4gIHsgbGFiZWw6ICc3ZCcsIHZhbHVlOiAnN2QnIH0sXG4gIHsgbGFiZWw6ICdBbGwnLCB2YWx1ZTogJ2FsbCcgfSxcbl07XG5cbnR5cGUgVGlja2VyMjRociA9IHtcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIHByaWNlOiBzdHJpbmc7XG4gIHByaWNlQ2hhbmdlOiBzdHJpbmc7XG4gIHByaWNlQ2hhbmdlUGVyY2VudDogc3RyaW5nO1xuICBoaWdoUHJpY2U6IHN0cmluZztcbiAgbG93UHJpY2U6IHN0cmluZztcbiAgbGFzdFByaWNlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBc3NldERhc2hib2FyZCgpIHtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2NoYXJ0VHlwZSwgc2V0Q2hhcnRUeXBlXSA9IHVzZVN0YXRlPCdsaW5lJyB8ICdjYW5kbGUnPignbGluZScpO1xuICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGU8YW55Pih7fSk7XG4gIGNvbnN0IFt0aWNrZXIyNCwgc2V0VGlja2VyMjRdID0gdXNlU3RhdGU8UmVjb3JkPHN0cmluZywgVGlja2VyMjRocj4+KHt9KTtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xuICBjb25zdCBbcmFuZ2UsIHNldFJhbmdlXSA9IHVzZVN0YXRlPCcyNGgnIHwgJzdkJyB8ICdhbGwnPignMjRoJyk7XG5cbiAgLy8gRmV0Y2ggMjRociBzdGF0cyBmb3IgY3J5cHRvIGFzc2V0c1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoMjRocigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLmJpbmFuY2UuY29tL2FwaS92My90aWNrZXIvMjRocicpO1xuICAgICAgICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRpY2tlcjI0aHI+ID0ge307XG4gICAgICAgIGZvciAoY29uc3QgdCBvZiByZXNwLmRhdGEpIHtcbiAgICAgICAgICBtYXBbdC5zeW1ib2xdID0gdDtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaWNrZXIyNChtYXApO1xuICAgICAgfSBjYXRjaCB7fVxuICAgIH1cbiAgICBmZXRjaDI0aHIoKTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZldGNoMjRociwgMTAwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW10pO1xuXG4gIC8vIFdlYlNvY2tldCBmb3IgbGl2ZSBwcmljZSB1cGRhdGVzIChjcnlwdG8pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgd3M6IFJlY29yZDxzdHJpbmcsIFdlYlNvY2tldD4gPSB7fTtcbiAgICBjb25zdCB1cGRhdGVMaXZlID0gKHN5bWJvbDogc3RyaW5nLCBwcmljZTogbnVtYmVyKSA9PiB7XG4gICAgICBzZXRQcmljZXMoKHByZXY6IGFueSkgPT4gKHsgLi4ucHJldiwgW3N5bWJvbF06IHByaWNlIH0pKTtcbiAgICB9O1xuICAgIGFzc2V0cy5mb3JFYWNoKGFzc2V0ID0+IHtcbiAgICAgIGlmIChhc3NldC5hc3NldFR5cGUgPT09ICdjcnlwdG8nKSB7XG4gICAgICAgIGNvbnN0IHdzVXJsID0gYHdzczovL3N0cmVhbS5iaW5hbmNlLmNvbTo5NDQzL3dzLyR7YXNzZXQuc3ltYm9sLnRvTG93ZXJDYXNlKCl9QHRyYWRlYDtcbiAgICAgICAgd3NbYXNzZXQuc3ltYm9sXSA9IG5ldyB3aW5kb3cuV2ViU29ja2V0KHdzVXJsKTtcbiAgICAgICAgd3NbYXNzZXQuc3ltYm9sXS5vbm1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgICAgIHVwZGF0ZUxpdmUoYXNzZXQuc3ltYm9sLCBwYXJzZUZsb2F0KGRhdGEucCkpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBPYmplY3QudmFsdWVzKHdzKS5mb3JFYWNoKHNvY2tldCA9PiBzb2NrZXQgJiYgc29ja2V0LmNsb3NlKCkpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICAvLyBGYWxsYmFjayBmZXRjaCBmb3Igbm9uLWNyeXB0b1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUHJpY2VzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdXBkYXRlZDogYW55ID0ge307XG4gICAgICBmb3IgKGNvbnN0IGFzc2V0IG9mIGFzc2V0cykge1xuICAgICAgICBpZiAoYXNzZXQuYXNzZXRUeXBlICE9PSAnY3J5cHRvJykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3ByaWNlcz9zeW1ib2w9JHthc3NldC5zeW1ib2x9JmFzc2V0VHlwZT0ke2Fzc2V0LmFzc2V0VHlwZX1gKTtcbiAgICAgICAgICAgIHVwZGF0ZWRbYXNzZXQuc3ltYm9sXSA9IHJlc3AuZGF0YS5wcmljZTtcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHVwZGF0ZWRbYXNzZXQuc3ltYm9sXSA9ICdOL0EnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2V0UHJpY2VzKChwcmV2OiBhbnkpID0+ICh7IC4uLnByZXYsIC4uLnVwZGF0ZWQgfSkpO1xuICAgIH07XG4gICAgZmV0Y2hQcmljZXMoKTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZldGNoUHJpY2VzLCA1MDAwKTsgLy8gUmVmcmVzaCBldmVyeSA1c1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLThcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNFwiPlRyYWRpbmcgRGFzaGJvYXJkPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC00IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYXNzZXRzLi4uXCJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHB4LTMgcHktMiByb3VuZGVkIHctZnVsbCBtZDp3LTY0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIG1sLWF1dG9cIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zIHB5LTEgcm91bmRlZCBib3JkZXIgJHtjaGFydFR5cGUgPT09ICdsaW5lJyA/ICdiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlJyA6ICdiZy13aGl0ZSB0ZXh0LWJsdWUtNjAwIGJvcmRlci1ibHVlLTYwMCd9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENoYXJ0VHlwZSgnbGluZScpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIExpbmVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zIHB5LTEgcm91bmRlZCBib3JkZXIgJHtjaGFydFR5cGUgPT09ICdjYW5kbGUnID8gJ2JnLWJsdWUtNjAwIHRleHQtd2hpdGUnIDogJ2JnLXdoaXRlIHRleHQtYmx1ZS02MDAgYm9yZGVyLWJsdWUtNjAwJ31gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q2hhcnRUeXBlKCdjYW5kbGUnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDYW5kbGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICB7YXNzZXRzLmZpbHRlcihhc3NldCA9PlxuICAgICAgICAgIGFzc2V0Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICBhc3NldC5zeW1ib2wudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgKS5tYXAoYXNzZXQgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXthc3NldC5zeW1ib2x9IGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLWxnIHNoYWRvdy1zbSBwLTQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctYmx1ZS01MCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uLWFsbFwiIG9uQ2xpY2s9eygpID0+IHsgc2V0U2VsZWN0ZWQoYXNzZXQpOyBzZXRSYW5nZSgnMjRoJyk7IH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi0yXCI+e2Fzc2V0VHlwZUljb24oYXNzZXQuYXNzZXRUeXBlKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBtYi0xXCI+e2Fzc2V0Lm5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBtYi0xXCI+e2Fzc2V0LnN5bWJvbH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1vbm9cIj57cHJpY2VzW2Fzc2V0LnN5bWJvbF0gPz8gJy4uLid9PC9kaXY+XG4gICAgICAgICAgICB7YXNzZXQuYXNzZXRUeXBlID09PSAnY3J5cHRvJyAmJiB0aWNrZXIyNFthc3NldC5zeW1ib2xdICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdCh0aWNrZXIyNFthc3NldC5zeW1ib2xdLnByaWNlQ2hhbmdlKSA+IDAgPyAndGV4dC1ncmVlbi02MDAnIDogJ3RleHQtcmVkLTYwMCdcbiAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAge3BhcnNlRmxvYXQodGlja2VyMjRbYXNzZXQuc3ltYm9sXS5wcmljZUNoYW5nZSkgPiAwID8gJysnIDogJyd9XG4gICAgICAgICAgICAgICAgICB7cGFyc2VGbG9hdCh0aWNrZXIyNFthc3NldC5zeW1ib2xdLnByaWNlQ2hhbmdlKS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgICAgeycgJ30oe3BhcnNlRmxvYXQodGlja2VyMjRbYXNzZXQuc3ltYm9sXS5wcmljZUNoYW5nZVBlcmNlbnQpLnRvRml4ZWQoMil9JSlcbiAgICAgICAgICAgICAgICA8L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPkg6IHt0aWNrZXIyNFthc3NldC5zeW1ib2xdLmhpZ2hQcmljZX0gTDoge3RpY2tlcjI0W2Fzc2V0LnN5bWJvbF0ubG93UHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICB7c2VsZWN0ZWQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi0yXCI+e3NlbGVjdGVkLm5hbWV9ICh7c2VsZWN0ZWQuc3ltYm9sfSk8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICB7cmFuZ2VzLm1hcChyID0+IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17ci52YWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSYW5nZShyLnZhbHVlIGFzICcyNGgnIHwgJzdkJyB8ICdhbGwnKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zIHB5LTEgcm91bmRlZCBib3JkZXIgJHtyYW5nZSA9PT0gci52YWx1ZSA/ICdiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlJyA6ICdiZy13aGl0ZSB0ZXh0LWJsdWUtNjAwIGJvcmRlci1ibHVlLTYwMCd9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyLmxhYmVsfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtjaGFydFR5cGUgPT09ICdsaW5lJyAmJiAoXG4gICAgICAgICAgICA8QXNzZXRDaGFydCBzeW1ib2w9e3NlbGVjdGVkLnN5bWJvbH0gYXNzZXRUeXBlPXtzZWxlY3RlZC5hc3NldFR5cGV9IHJhbmdlPXtyYW5nZX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtjaGFydFR5cGUgPT09ICdjYW5kbGUnICYmIChcbiAgICAgICAgICAgIDxDYW5kbGVzdGlja0NoYXJ0IHN5bWJvbD17c2VsZWN0ZWQuc3ltYm9sfSBhc3NldFR5cGU9e3NlbGVjdGVkLmFzc2V0VHlwZX0gcmFuZ2U9e3JhbmdlfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQXNzZXRDaGFydCIsIkNhbmRsZXN0aWNrQ2hhcnQiLCJhc3NldHMiLCJzeW1ib2wiLCJuYW1lIiwiYXNzZXRUeXBlIiwiYXNzZXRUeXBlSWNvbiIsInR5cGUiLCJyYW5nZXMiLCJsYWJlbCIsInZhbHVlIiwiQXNzZXREYXNoYm9hcmQiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJjaGFydFR5cGUiLCJzZXRDaGFydFR5cGUiLCJwcmljZXMiLCJzZXRQcmljZXMiLCJ0aWNrZXIyNCIsInNldFRpY2tlcjI0Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInJhbmdlIiwic2V0UmFuZ2UiLCJmZXRjaDI0aHIiLCJyZXNwIiwiZ2V0IiwibWFwIiwidCIsImRhdGEiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIndzIiwidXBkYXRlTGl2ZSIsInByaWNlIiwicHJldiIsImZvckVhY2giLCJhc3NldCIsIndzVXJsIiwidG9Mb3dlckNhc2UiLCJ3aW5kb3ciLCJXZWJTb2NrZXQiLCJvbm1lc3NhZ2UiLCJldmVudCIsIkpTT04iLCJwYXJzZSIsInBhcnNlRmxvYXQiLCJwIiwiT2JqZWN0IiwidmFsdWVzIiwic29ja2V0IiwiY2xvc2UiLCJmZXRjaFByaWNlcyIsInVwZGF0ZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJzcGFuIiwicHJpY2VDaGFuZ2UiLCJ0b0ZpeGVkIiwicHJpY2VDaGFuZ2VQZXJjZW50IiwiYnIiLCJoaWdoUHJpY2UiLCJsb3dQcmljZSIsImgyIiwiciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/AssetDashboard.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./components/CandlestickChart.tsx":
/*!*****************************************!*\
  !*** ./components/CandlestickChart.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CandlestickChart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lightweight_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lightweight-charts */ \"lightweight-charts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lightweight_charts__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__]);\n([lightweight_charts__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction CandlestickChart({ symbol, range, assetType }) {\n    const chartContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const seriesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CandlestickChart.useEffect\": ()=>{\n            if (!chartContainerRef.current) return;\n            if (chartRef.current) chartRef.current.remove();\n            chartRef.current = (0,lightweight_charts__WEBPACK_IMPORTED_MODULE_2__.createChart)(chartContainerRef.current, {\n                width: chartContainerRef.current.clientWidth,\n                height: 300,\n                layout: {\n                    background: {\n                        type: 'solid',\n                        color: '#fff'\n                    },\n                    textColor: '#222'\n                },\n                grid: {\n                    vertLines: {\n                        color: '#eee'\n                    },\n                    horzLines: {\n                        color: '#eee'\n                    }\n                },\n                timeScale: {\n                    timeVisible: true,\n                    secondsVisible: false\n                }\n            });\n            seriesRef.current = chartRef.current.addCandlestickSeries();\n            return ({\n                \"CandlestickChart.useEffect\": ()=>{\n                    chartRef.current?.remove();\n                }\n            })[\"CandlestickChart.useEffect\"];\n        }\n    }[\"CandlestickChart.useEffect\"], [\n        symbol,\n        range\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CandlestickChart.useEffect\": ()=>{\n            async function fetchCandles() {\n                let interval = '1h', limit = 24;\n                if (range === '7d') {\n                    interval = '1h';\n                    limit = 7 * 24;\n                }\n                if (range === 'all') {\n                    interval = '1d';\n                    limit = 365;\n                }\n                let url = assetType === 'crypto' ? `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}` : `/api/history?symbol=${symbol}&assetType=${assetType}&range=${range}`;\n                const resp = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(url);\n                let candles = resp.data.map({\n                    \"CandlestickChart.useEffect.fetchCandles.candles\": (k)=>({\n                            time: assetType === 'crypto' ? k[0] / 1000 : Math.floor(k.timestamp / 1000),\n                            open: parseFloat(assetType === 'crypto' ? k[1] : k.open || k.price),\n                            high: parseFloat(assetType === 'crypto' ? k[2] : k.high || k.price),\n                            low: parseFloat(assetType === 'crypto' ? k[3] : k.low || k.price),\n                            close: parseFloat(assetType === 'crypto' ? k[4] : k.close || k.price)\n                        })\n                }[\"CandlestickChart.useEffect.fetchCandles.candles\"]);\n                seriesRef.current?.setData(candles);\n            }\n            fetchCandles();\n        }\n    }[\"CandlestickChart.useEffect\"], [\n        symbol,\n        range,\n        assetType\n    ]);\n    // WebSocket for live updates (crypto only)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CandlestickChart.useEffect\": ()=>{\n            if (assetType !== 'crypto') return;\n            const ws = new window.WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_1h`);\n            ws.onmessage = ({\n                \"CandlestickChart.useEffect\": (event)=>{\n                    const data = JSON.parse(event.data);\n                    const k = data.k;\n                    if (seriesRef.current) {\n                        seriesRef.current.update({\n                            time: k.t / 1000,\n                            open: parseFloat(k.o),\n                            high: parseFloat(k.h),\n                            low: parseFloat(k.l),\n                            close: parseFloat(k.c)\n                        });\n                    }\n                }\n            })[\"CandlestickChart.useEffect\"];\n            return ({\n                \"CandlestickChart.useEffect\": ()=>ws.close()\n            })[\"CandlestickChart.useEffect\"];\n        }\n    }[\"CandlestickChart.useEffect\"], [\n        symbol,\n        assetType\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: chartContainerRef,\n        style: {\n            width: '100%',\n            height: 300\n        }\n    }, void 0, false, {\n        fileName: \"D:\\\\VScode\\\\bot-binance\\\\components\\\\CandlestickChart.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvQ2FuZGxlc3RpY2tDaGFydC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFFZ0M7QUFDaEQ7QUFRWCxTQUFTSSxpQkFBaUIsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBeUI7SUFDMUYsTUFBTUMsb0JBQW9CUCw2Q0FBTUEsQ0FBaUI7SUFDakQsTUFBTVEsV0FBV1IsNkNBQU1BLENBQW1CO0lBQzFDLE1BQU1TLFlBQVlULDZDQUFNQSxDQUFNO0lBRTlCRCxnREFBU0E7c0NBQUM7WUFDUixJQUFJLENBQUNRLGtCQUFrQkcsT0FBTyxFQUFFO1lBQ2hDLElBQUlGLFNBQVNFLE9BQU8sRUFBRUYsU0FBU0UsT0FBTyxDQUFDQyxNQUFNO1lBQzdDSCxTQUFTRSxPQUFPLEdBQUdULCtEQUFXQSxDQUFDTSxrQkFBa0JHLE9BQU8sRUFBRTtnQkFDeERFLE9BQU9MLGtCQUFrQkcsT0FBTyxDQUFDRyxXQUFXO2dCQUM1Q0MsUUFBUTtnQkFDUkMsUUFBUTtvQkFBRUMsWUFBWTt3QkFBRUMsTUFBTTt3QkFBU0MsT0FBTztvQkFBTztvQkFBR0MsV0FBVztnQkFBTztnQkFDMUVDLE1BQU07b0JBQUVDLFdBQVc7d0JBQUVILE9BQU87b0JBQU87b0JBQUdJLFdBQVc7d0JBQUVKLE9BQU87b0JBQU87Z0JBQUU7Z0JBQ25FSyxXQUFXO29CQUFFQyxhQUFhO29CQUFNQyxnQkFBZ0I7Z0JBQU07WUFDeEQ7WUFDQWhCLFVBQVVDLE9BQU8sR0FBR0YsU0FBU0UsT0FBTyxDQUFDZ0Isb0JBQW9CO1lBQ3pEOzhDQUFPO29CQUFRbEIsU0FBU0UsT0FBTyxFQUFFQztnQkFBVTs7UUFDN0M7cUNBQUc7UUFBQ1A7UUFBUUM7S0FBTTtJQUVsQk4sZ0RBQVNBO3NDQUFDO1lBQ1IsZUFBZTRCO2dCQUNiLElBQUlDLFdBQVcsTUFBTUMsUUFBUTtnQkFDN0IsSUFBSXhCLFVBQVUsTUFBTTtvQkFBRXVCLFdBQVc7b0JBQU1DLFFBQVEsSUFBSTtnQkFBSTtnQkFDdkQsSUFBSXhCLFVBQVUsT0FBTztvQkFBRXVCLFdBQVc7b0JBQU1DLFFBQVE7Z0JBQUs7Z0JBQ3JELElBQUlDLE1BQU14QixjQUFjLFdBQ3BCLENBQUMsNkNBQTZDLEVBQUVGLE9BQU8sVUFBVSxFQUFFd0IsU0FBUyxPQUFPLEVBQUVDLE9BQU8sR0FDNUYsQ0FBQyxvQkFBb0IsRUFBRXpCLE9BQU8sV0FBVyxFQUFFRSxVQUFVLE9BQU8sRUFBRUQsT0FBTztnQkFDekUsTUFBTTBCLE9BQU8sTUFBTTdCLGlEQUFTLENBQUM0QjtnQkFDN0IsSUFBSUcsVUFBVUYsS0FBS0csSUFBSSxDQUFDQyxHQUFHO3VFQUFDLENBQUNDLElBQVk7NEJBQ3ZDQyxNQUFNL0IsY0FBYyxXQUFZOEIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxPQUF3QkUsS0FBS0MsS0FBSyxDQUFDSCxFQUFFSSxTQUFTLEdBQUc7NEJBQ3hGQyxNQUFNQyxXQUFXcEMsY0FBYyxXQUFXOEIsQ0FBQyxDQUFDLEVBQUUsR0FBR0EsRUFBRUssSUFBSSxJQUFJTCxFQUFFTyxLQUFLOzRCQUNsRUMsTUFBTUYsV0FBV3BDLGNBQWMsV0FBVzhCLENBQUMsQ0FBQyxFQUFFLEdBQUdBLEVBQUVRLElBQUksSUFBSVIsRUFBRU8sS0FBSzs0QkFDbEVFLEtBQUtILFdBQVdwQyxjQUFjLFdBQVc4QixDQUFDLENBQUMsRUFBRSxHQUFHQSxFQUFFUyxHQUFHLElBQUlULEVBQUVPLEtBQUs7NEJBQ2hFRyxPQUFPSixXQUFXcEMsY0FBYyxXQUFXOEIsQ0FBQyxDQUFDLEVBQUUsR0FBR0EsRUFBRVUsS0FBSyxJQUFJVixFQUFFTyxLQUFLO3dCQUN0RTs7Z0JBQ0FsQyxVQUFVQyxPQUFPLEVBQUVxQyxRQUFRZDtZQUM3QjtZQUNBTjtRQUNGO3FDQUFHO1FBQUN2QjtRQUFRQztRQUFPQztLQUFVO0lBRTdCLDJDQUEyQztJQUMzQ1AsZ0RBQVNBO3NDQUFDO1lBQ1IsSUFBSU8sY0FBYyxVQUFVO1lBQzVCLE1BQU0wQyxLQUFLLElBQUlDLE9BQU9DLFNBQVMsQ0FBQyxDQUFDLGlDQUFpQyxFQUFFOUMsT0FBTytDLFdBQVcsR0FBRyxTQUFTLENBQUM7WUFDbkdILEdBQUdJLFNBQVM7OENBQUcsQ0FBQ0M7b0JBQ2QsTUFBTW5CLE9BQU9vQixLQUFLQyxLQUFLLENBQUNGLE1BQU1uQixJQUFJO29CQUNsQyxNQUFNRSxJQUFJRixLQUFLRSxDQUFDO29CQUNoQixJQUFJM0IsVUFBVUMsT0FBTyxFQUFFO3dCQUNyQkQsVUFBVUMsT0FBTyxDQUFDOEMsTUFBTSxDQUFDOzRCQUN2Qm5CLE1BQU1ELEVBQUVxQixDQUFDLEdBQUc7NEJBQ1poQixNQUFNQyxXQUFXTixFQUFFc0IsQ0FBQzs0QkFDcEJkLE1BQU1GLFdBQVdOLEVBQUV1QixDQUFDOzRCQUNwQmQsS0FBS0gsV0FBV04sRUFBRXdCLENBQUM7NEJBQ25CZCxPQUFPSixXQUFXTixFQUFFeUIsQ0FBQzt3QkFDdkI7b0JBQ0Y7Z0JBQ0Y7O1lBQ0E7OENBQU8sSUFBTWIsR0FBR0YsS0FBSzs7UUFDdkI7cUNBQUc7UUFBQzFDO1FBQVFFO0tBQVU7SUFFdEIscUJBQ0UsOERBQUN3RDtRQUFJQyxLQUFLeEQ7UUFBbUJ5RCxPQUFPO1lBQUVwRCxPQUFPO1lBQVFFLFFBQVE7UUFBSTs7Ozs7O0FBRXJFIiwic291cmNlcyI6WyJEOlxcVlNjb2RlXFxib3QtYmluYW5jZVxcY29tcG9uZW50c1xcQ2FuZGxlc3RpY2tDaGFydC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZXNwb25zaXZlQ29udGFpbmVyIH0gZnJvbSAncmVjaGFydHMnO1xuaW1wb3J0IHsgY3JlYXRlQ2hhcnQsIElDaGFydEFwaSwgVVRDVGltZXN0YW1wIH0gZnJvbSAnbGlnaHR3ZWlnaHQtY2hhcnRzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmludGVyZmFjZSBDYW5kbGVzdGlja0NoYXJ0UHJvcHMge1xuICBzeW1ib2w6IHN0cmluZztcbiAgcmFuZ2U6ICcyNGgnIHwgJzdkJyB8ICdhbGwnO1xuICBhc3NldFR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FuZGxlc3RpY2tDaGFydCh7IHN5bWJvbCwgcmFuZ2UsIGFzc2V0VHlwZSB9OiBDYW5kbGVzdGlja0NoYXJ0UHJvcHMpIHtcbiAgY29uc3QgY2hhcnRDb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBjaGFydFJlZiA9IHVzZVJlZjxJQ2hhcnRBcGkgfCBudWxsPihudWxsKTtcbiAgY29uc3Qgc2VyaWVzUmVmID0gdXNlUmVmPGFueT4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWNoYXJ0Q29udGFpbmVyUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBpZiAoY2hhcnRSZWYuY3VycmVudCkgY2hhcnRSZWYuY3VycmVudC5yZW1vdmUoKTtcbiAgICBjaGFydFJlZi5jdXJyZW50ID0gY3JlYXRlQ2hhcnQoY2hhcnRDb250YWluZXJSZWYuY3VycmVudCwge1xuICAgICAgd2lkdGg6IGNoYXJ0Q29udGFpbmVyUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgIGxheW91dDogeyBiYWNrZ3JvdW5kOiB7IHR5cGU6ICdzb2xpZCcsIGNvbG9yOiAnI2ZmZicgfSwgdGV4dENvbG9yOiAnIzIyMicgfSxcbiAgICAgIGdyaWQ6IHsgdmVydExpbmVzOiB7IGNvbG9yOiAnI2VlZScgfSwgaG9yekxpbmVzOiB7IGNvbG9yOiAnI2VlZScgfSB9LFxuICAgICAgdGltZVNjYWxlOiB7IHRpbWVWaXNpYmxlOiB0cnVlLCBzZWNvbmRzVmlzaWJsZTogZmFsc2UgfSxcbiAgICB9KTtcbiAgICBzZXJpZXNSZWYuY3VycmVudCA9IGNoYXJ0UmVmLmN1cnJlbnQuYWRkQ2FuZGxlc3RpY2tTZXJpZXMoKTtcbiAgICByZXR1cm4gKCkgPT4geyBjaGFydFJlZi5jdXJyZW50Py5yZW1vdmUoKTsgfTtcbiAgfSwgW3N5bWJvbCwgcmFuZ2VdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ2FuZGxlcygpIHtcbiAgICAgIGxldCBpbnRlcnZhbCA9ICcxaCcsIGxpbWl0ID0gMjQ7XG4gICAgICBpZiAocmFuZ2UgPT09ICc3ZCcpIHsgaW50ZXJ2YWwgPSAnMWgnOyBsaW1pdCA9IDcgKiAyNDsgfVxuICAgICAgaWYgKHJhbmdlID09PSAnYWxsJykgeyBpbnRlcnZhbCA9ICcxZCc7IGxpbWl0ID0gMzY1OyB9XG4gICAgICBsZXQgdXJsID0gYXNzZXRUeXBlID09PSAnY3J5cHRvJ1xuICAgICAgICA/IGBodHRwczovL2FwaS5iaW5hbmNlLmNvbS9hcGkvdjMva2xpbmVzP3N5bWJvbD0ke3N5bWJvbH0maW50ZXJ2YWw9JHtpbnRlcnZhbH0mbGltaXQ9JHtsaW1pdH1gXG4gICAgICAgIDogYC9hcGkvaGlzdG9yeT9zeW1ib2w9JHtzeW1ib2x9JmFzc2V0VHlwZT0ke2Fzc2V0VHlwZX0mcmFuZ2U9JHtyYW5nZX1gO1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuICAgICAgbGV0IGNhbmRsZXMgPSByZXNwLmRhdGEubWFwKChrOiBhbnkpID0+ICh7XG4gICAgICAgIHRpbWU6IGFzc2V0VHlwZSA9PT0gJ2NyeXB0bycgPyAoa1swXSAvIDEwMDApIGFzIFVUQ1RpbWVzdGFtcCA6IE1hdGguZmxvb3Ioay50aW1lc3RhbXAgLyAxMDAwKSxcbiAgICAgICAgb3BlbjogcGFyc2VGbG9hdChhc3NldFR5cGUgPT09ICdjcnlwdG8nID8ga1sxXSA6IGsub3BlbiB8fCBrLnByaWNlKSxcbiAgICAgICAgaGlnaDogcGFyc2VGbG9hdChhc3NldFR5cGUgPT09ICdjcnlwdG8nID8ga1syXSA6IGsuaGlnaCB8fCBrLnByaWNlKSxcbiAgICAgICAgbG93OiBwYXJzZUZsb2F0KGFzc2V0VHlwZSA9PT0gJ2NyeXB0bycgPyBrWzNdIDogay5sb3cgfHwgay5wcmljZSksXG4gICAgICAgIGNsb3NlOiBwYXJzZUZsb2F0KGFzc2V0VHlwZSA9PT0gJ2NyeXB0bycgPyBrWzRdIDogay5jbG9zZSB8fCBrLnByaWNlKSxcbiAgICAgIH0pKTtcbiAgICAgIHNlcmllc1JlZi5jdXJyZW50Py5zZXREYXRhKGNhbmRsZXMpO1xuICAgIH1cbiAgICBmZXRjaENhbmRsZXMoKTtcbiAgfSwgW3N5bWJvbCwgcmFuZ2UsIGFzc2V0VHlwZV0pO1xuXG4gIC8vIFdlYlNvY2tldCBmb3IgbGl2ZSB1cGRhdGVzIChjcnlwdG8gb25seSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXNzZXRUeXBlICE9PSAnY3J5cHRvJykgcmV0dXJuO1xuICAgIGNvbnN0IHdzID0gbmV3IHdpbmRvdy5XZWJTb2NrZXQoYHdzczovL3N0cmVhbS5iaW5hbmNlLmNvbTo5NDQzL3dzLyR7c3ltYm9sLnRvTG93ZXJDYXNlKCl9QGtsaW5lXzFoYCk7XG4gICAgd3Mub25tZXNzYWdlID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgY29uc3QgayA9IGRhdGEuaztcbiAgICAgIGlmIChzZXJpZXNSZWYuY3VycmVudCkge1xuICAgICAgICBzZXJpZXNSZWYuY3VycmVudC51cGRhdGUoe1xuICAgICAgICAgIHRpbWU6IGsudCAvIDEwMDAsXG4gICAgICAgICAgb3BlbjogcGFyc2VGbG9hdChrLm8pLFxuICAgICAgICAgIGhpZ2g6IHBhcnNlRmxvYXQoay5oKSxcbiAgICAgICAgICBsb3c6IHBhcnNlRmxvYXQoay5sKSxcbiAgICAgICAgICBjbG9zZTogcGFyc2VGbG9hdChrLmMpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoKSA9PiB3cy5jbG9zZSgpO1xuICB9LCBbc3ltYm9sLCBhc3NldFR5cGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtjaGFydENvbnRhaW5lclJlZn0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAzMDAgfX0gLz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJjcmVhdGVDaGFydCIsImF4aW9zIiwiQ2FuZGxlc3RpY2tDaGFydCIsInN5bWJvbCIsInJhbmdlIiwiYXNzZXRUeXBlIiwiY2hhcnRDb250YWluZXJSZWYiLCJjaGFydFJlZiIsInNlcmllc1JlZiIsImN1cnJlbnQiLCJyZW1vdmUiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwibGF5b3V0IiwiYmFja2dyb3VuZCIsInR5cGUiLCJjb2xvciIsInRleHRDb2xvciIsImdyaWQiLCJ2ZXJ0TGluZXMiLCJob3J6TGluZXMiLCJ0aW1lU2NhbGUiLCJ0aW1lVmlzaWJsZSIsInNlY29uZHNWaXNpYmxlIiwiYWRkQ2FuZGxlc3RpY2tTZXJpZXMiLCJmZXRjaENhbmRsZXMiLCJpbnRlcnZhbCIsImxpbWl0IiwidXJsIiwicmVzcCIsImdldCIsImNhbmRsZXMiLCJkYXRhIiwibWFwIiwiayIsInRpbWUiLCJNYXRoIiwiZmxvb3IiLCJ0aW1lc3RhbXAiLCJvcGVuIiwicGFyc2VGbG9hdCIsInByaWNlIiwiaGlnaCIsImxvdyIsImNsb3NlIiwic2V0RGF0YSIsIndzIiwid2luZG93IiwiV2ViU29ja2V0IiwidG9Mb3dlckNhc2UiLCJvbm1lc3NhZ2UiLCJldmVudCIsIkpTT04iLCJwYXJzZSIsInVwZGF0ZSIsInQiLCJvIiwiaCIsImwiLCJjIiwiZGl2IiwicmVmIiwic3R5bGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/CandlestickChart.tsx\n");

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

/***/ "(pages-dir-node)/__barrel_optimize__?names=Line,LineChart,ReferenceDot,ResponsiveContainer,Tooltip,XAxis,YAxis!=!./node_modules/recharts/es6/index.js":
/*!********************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=Line,LineChart,ReferenceDot,ResponsiveContainer,Tooltip,XAxis,YAxis!=!./node_modules/recharts/es6/index.js ***!
  \********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Line: () => (/* reexport safe */ _cartesian_Line__WEBPACK_IMPORTED_MODULE_0__.Line),\n/* harmony export */   LineChart: () => (/* reexport safe */ _chart_LineChart__WEBPACK_IMPORTED_MODULE_1__.LineChart),\n/* harmony export */   ReferenceDot: () => (/* reexport safe */ _cartesian_ReferenceDot__WEBPACK_IMPORTED_MODULE_2__.ReferenceDot),\n/* harmony export */   ResponsiveContainer: () => (/* reexport safe */ _component_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_3__.ResponsiveContainer),\n/* harmony export */   Tooltip: () => (/* reexport safe */ _component_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip),\n/* harmony export */   XAxis: () => (/* reexport safe */ _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_5__.XAxis),\n/* harmony export */   YAxis: () => (/* reexport safe */ _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_6__.YAxis)\n/* harmony export */ });\n/* harmony import */ var _cartesian_Line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartesian/Line */ \"(pages-dir-node)/./node_modules/recharts/es6/cartesian/Line.js\");\n/* harmony import */ var _chart_LineChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart/LineChart */ \"(pages-dir-node)/./node_modules/recharts/es6/chart/LineChart.js\");\n/* harmony import */ var _cartesian_ReferenceDot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cartesian/ReferenceDot */ \"(pages-dir-node)/./node_modules/recharts/es6/cartesian/ReferenceDot.js\");\n/* harmony import */ var _component_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/ResponsiveContainer */ \"(pages-dir-node)/./node_modules/recharts/es6/component/ResponsiveContainer.js\");\n/* harmony import */ var _component_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/Tooltip */ \"(pages-dir-node)/./node_modules/recharts/es6/component/Tooltip.js\");\n/* harmony import */ var _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cartesian/XAxis */ \"(pages-dir-node)/./node_modules/recharts/es6/cartesian/XAxis.js\");\n/* harmony import */ var _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cartesian/YAxis */ \"(pages-dir-node)/./node_modules/recharts/es6/cartesian/YAxis.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_cartesian_Line__WEBPACK_IMPORTED_MODULE_0__, _chart_LineChart__WEBPACK_IMPORTED_MODULE_1__, _cartesian_ReferenceDot__WEBPACK_IMPORTED_MODULE_2__, _component_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_3__, _component_Tooltip__WEBPACK_IMPORTED_MODULE_4__, _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_5__, _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_6__]);\n([_cartesian_Line__WEBPACK_IMPORTED_MODULE_0__, _chart_LineChart__WEBPACK_IMPORTED_MODULE_1__, _cartesian_ReferenceDot__WEBPACK_IMPORTED_MODULE_2__, _component_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_3__, _component_Tooltip__WEBPACK_IMPORTED_MODULE_4__, _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_5__, _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS9fX2JhcnJlbF9vcHRpbWl6ZV9fP25hbWVzPUxpbmUsTGluZUNoYXJ0LFJlZmVyZW5jZURvdCxSZXNwb25zaXZlQ29udGFpbmVyLFRvb2x0aXAsWEF4aXMsWUF4aXMhPSEuL25vZGVfbW9kdWxlcy9yZWNoYXJ0cy9lczYvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3VDO0FBQ007QUFDVTtBQUNjO0FBQ3hCO0FBQ0oiLCJzb3VyY2VzIjpbIkQ6XFxWU2NvZGVcXGJvdC1iaW5hbmNlXFxub2RlX21vZHVsZXNcXHJlY2hhcnRzXFxlczZcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IHsgTGluZSB9IGZyb20gXCIuL2NhcnRlc2lhbi9MaW5lXCJcbmV4cG9ydCB7IExpbmVDaGFydCB9IGZyb20gXCIuL2NoYXJ0L0xpbmVDaGFydFwiXG5leHBvcnQgeyBSZWZlcmVuY2VEb3QgfSBmcm9tIFwiLi9jYXJ0ZXNpYW4vUmVmZXJlbmNlRG90XCJcbmV4cG9ydCB7IFJlc3BvbnNpdmVDb250YWluZXIgfSBmcm9tIFwiLi9jb21wb25lbnQvUmVzcG9uc2l2ZUNvbnRhaW5lclwiXG5leHBvcnQgeyBUb29sdGlwIH0gZnJvbSBcIi4vY29tcG9uZW50L1Rvb2x0aXBcIlxuZXhwb3J0IHsgWEF4aXMgfSBmcm9tIFwiLi9jYXJ0ZXNpYW4vWEF4aXNcIlxuZXhwb3J0IHsgWUF4aXMgfSBmcm9tIFwiLi9jYXJ0ZXNpYW4vWUF4aXNcIiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/__barrel_optimize__?names=Line,LineChart,ReferenceDot,ResponsiveContainer,Tooltip,XAxis,YAxis!=!./node_modules/recharts/es6/index.js\n");

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

/***/ "lightweight-charts":
/*!*************************************!*\
  !*** external "lightweight-charts" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("lightweight-charts");;

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