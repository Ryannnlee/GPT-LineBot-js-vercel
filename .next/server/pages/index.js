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

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"index_main__3wZvj\",\n\t\"icon\": \"index_icon__CgRrC\",\n\t\"result\": \"index_result__66e57\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0dQVC1MaW5lYm90LW5vZGVqcy1vbi12ZXJjZWwvLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzP2Q4NTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcImluZGV4X21haW5fXzN3WnZqXCIsXG5cdFwiaWNvblwiOiBcImluZGV4X2ljb25fX0NnUnJDXCIsXG5cdFwicmVzdWx0XCI6IFwiaW5kZXhfcmVzdWx0X182NmU1N1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Home() {\n    const { 0: animalInput , 1: setAnimalInput  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: result , 1: setResult  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    async function onSubmit(event) {\n        event.preventDefault();\n        const response = await fetch(\"/api/generate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                animal: animalInput\n            })\n        });\n        const data = await response.json();\n        setResult(data.result);\n        setAnimalInput(\"\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"GPT + LineBot + Vercel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ryan/project/GPT-LineBot-Vercel/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/dog.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ryan/project/GPT-LineBot-Vercel/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ryan/project/GPT-LineBot-Vercel/pages/index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/dog.png\",\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon)\n                    }, void 0, false, {\n                        fileName: \"/Users/ryan/project/GPT-LineBot-Vercel/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Name my pet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ryan/project/GPT-LineBot-Vercel/pages/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"animal\",\n                                placeholder: \"Enter an animal\",\n                                value: animalInput,\n                                onChange: (e)=>setAnimalInput(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/ryan/project/GPT-LineBot-Vercel/pages/index.js\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Generate names\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ryan/project/GPT-LineBot-Vercel/pages/index.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ryan/project/GPT-LineBot-Vercel/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().result),\n                        children: result\n                    }, void 0, false, {\n                        fileName: \"/Users/ryan/project/GPT-LineBot-Vercel/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ryan/project/GPT-LineBot-Vercel/pages/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ryan/project/GPT-LineBot-Vercel/pages/index.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUNJO0FBQ087QUFFeEIsU0FBU0csSUFBSSxHQUFHO0lBQzdCLE1BQU0sS0FBQ0MsV0FBVyxNQUFFQyxjQUFjLE1BQUlKLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ2xELE1BQU0sS0FBQ0ssTUFBTSxNQUFFQyxTQUFTLE1BQUlOLCtDQUFRLEVBQUU7SUFFdEMsZUFBZU8sUUFBUSxDQUFDQyxLQUFLLEVBQUU7UUFDN0JBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO1FBQ3RCLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsZUFBZSxFQUFFO1lBQzVDQyxNQUFNLEVBQUUsTUFBTTtZQUNkQyxPQUFPLEVBQUU7Z0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjthQUNuQztZQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2dCQUFFQyxNQUFNLEVBQUVkLFdBQVc7YUFBRSxDQUFDO1NBQzlDLENBQUM7UUFDRixNQUFNZSxJQUFJLEdBQUcsTUFBTVIsUUFBUSxDQUFDUyxJQUFJLEVBQUU7UUFDbENiLFNBQVMsQ0FBQ1ksSUFBSSxDQUFDYixNQUFNLENBQUM7UUFDdEJELGNBQWMsQ0FBQyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHFCQUNFLDhEQUFDZ0IsS0FBRzs7MEJBQ0YsOERBQUNyQixrREFBSTs7a0NBQ0gsOERBQUNzQixPQUFLO2tDQUFDLHdCQUFzQjs7Ozs7NEJBQVE7a0NBQ3JDLDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLFVBQVU7Ozs7OzRCQUFHOzs7Ozs7b0JBQzlCOzBCQUVQLDhEQUFDQyxNQUFJO2dCQUFDQyxTQUFTLEVBQUV6QiwrREFBVzs7a0NBQzFCLDhEQUFDMEIsS0FBRzt3QkFBQ0MsR0FBRyxFQUFDLFVBQVU7d0JBQUNGLFNBQVMsRUFBRXpCLCtEQUFXOzs7Ozs0QkFBSTtrQ0FDOUMsOERBQUM2QixJQUFFO2tDQUFDLGFBQVc7Ozs7OzRCQUFLO2tDQUNwQiw4REFBQ0MsTUFBSTt3QkFBQ3hCLFFBQVEsRUFBRUEsUUFBUTs7MENBQ3RCLDhEQUFDeUIsT0FBSztnQ0FDSkMsSUFBSSxFQUFDLE1BQU07Z0NBQ1hDLElBQUksRUFBQyxRQUFRO2dDQUNiQyxXQUFXLEVBQUMsaUJBQWlCO2dDQUM3QkMsS0FBSyxFQUFFakMsV0FBVztnQ0FDbEJrQyxRQUFRLEVBQUUsQ0FBQ0MsQ0FBQyxHQUFLbEMsY0FBYyxDQUFDa0MsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQzs7Ozs7b0NBQy9DOzBDQUNGLDhEQUFDSixPQUFLO2dDQUFDQyxJQUFJLEVBQUMsUUFBUTtnQ0FBQ0csS0FBSyxFQUFDLGdCQUFnQjs7Ozs7b0NBQUc7Ozs7Ozs0QkFDekM7a0NBQ1AsOERBQUNoQixLQUFHO3dCQUFDTSxTQUFTLEVBQUV6QixpRUFBYTtrQ0FBR0ksTUFBTTs7Ozs7NEJBQU87Ozs7OztvQkFDeEM7Ozs7OztZQUNILENBQ1A7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vR1BULUxpbmVib3Qtbm9kZWpzLW9uLXZlcmNlbC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYW5pbWFsSW5wdXQsIHNldEFuaW1hbElucHV0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2VuZXJhdGUnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGFuaW1hbDogYW5pbWFsSW5wdXQgfSksXG4gICAgfSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgc2V0UmVzdWx0KGRhdGEucmVzdWx0KVxuICAgIHNldEFuaW1hbElucHV0KCcnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5HUFQgKyBMaW5lQm90ICsgVmVyY2VsPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZG9nLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aW1nIHNyYz1cIi9kb2cucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgICAgPGgzPk5hbWUgbXkgcGV0PC9oMz5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJhbmltYWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhbiBhbmltYWxcIlxuICAgICAgICAgICAgdmFsdWU9e2FuaW1hbElucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbmltYWxJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiR2VuZXJhdGUgbmFtZXNcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0fT57cmVzdWx0fTwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSG9tZSIsImFuaW1hbElucHV0Iiwic2V0QW5pbWFsSW5wdXQiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYW5pbWFsIiwiZGF0YSIsImpzb24iLCJkaXYiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImljb24iLCJoMyIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();