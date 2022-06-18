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
exports.id = "pages/api/checkout_sessions";
exports.ids = ["pages/api/checkout_sessions"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/checkout_sessions.js":
/*!****************************************!*\
  !*** ./pages/api/checkout_sessions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\nasync function handler(req, res) {\n    console.log(req);\n    console.log(res);\n    if (req.method === \"POST\") {\n        try {\n            // Create Checkout Sessions from body params.\n            const session = await stripe.checkout.sessions.create({\n                line_items: [\n                    {\n                        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell\n                        price: \"price_1L9ygBLPO2z5XuMVe3vFHZDV\",\n                        quantity: 1\n                    }, \n                ],\n                mode: \"payment\",\n                success_url: `${req.headers.origin}/?success=true`,\n                cancel_url: `${req.headers.origin}/?canceled=true`\n            });\n            res.redirect(303, session.url);\n        } catch (err) {\n            res.status(err.statusCode || 500).json(err.message);\n        }\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method Not Allowed\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hlY2tvdXRfc2Vzc2lvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUIsQ0FBQztBQUVoRCxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDLENBQUM7SUFDakJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUMsQ0FBQztJQUNqQixJQUFJRCxHQUFHLENBQUNJLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDdkIsSUFBSTtZQUNBLDZDQUE2QztZQUM3QyxNQUFNQyxPQUFPLEdBQUcsTUFBTVgsTUFBTSxDQUFDWSxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO2dCQUNsREMsVUFBVSxFQUFFO29CQUNSO3dCQUNJLG9GQUFvRjt3QkFDcEZDLEtBQUssRUFBRSxnQ0FBZ0M7d0JBQ3ZDQyxRQUFRLEVBQUUsQ0FBQztxQkFDZDtpQkFDSjtnQkFDREMsSUFBSSxFQUFFLFNBQVM7Z0JBQ2ZDLFdBQVcsRUFBRSxDQUFDLEVBQUViLEdBQUcsQ0FBQ2MsT0FBTyxDQUFDQyxNQUFNLENBQUMsY0FBYyxDQUFDO2dCQUNsREMsVUFBVSxFQUFFLENBQUMsRUFBRWhCLEdBQUcsQ0FBQ2MsT0FBTyxDQUFDQyxNQUFNLENBQUMsZUFBZSxDQUFDO2FBQ3JELENBQUM7WUFDRmQsR0FBRyxDQUFDZ0IsUUFBUSxDQUFDLEdBQUcsRUFBRVosT0FBTyxDQUFDYSxHQUFHLENBQUMsQ0FBQztTQUNsQyxDQUFDLE9BQU9DLEdBQUcsRUFBRTtZQUNWbEIsR0FBRyxDQUFDbUIsTUFBTSxDQUFDRCxHQUFHLENBQUNFLFVBQVUsSUFBSSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSCxHQUFHLENBQUNJLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZEO0tBQ0osTUFBTTtRQUNIdEIsR0FBRyxDQUFDdUIsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQnZCLEdBQUcsQ0FBQ21CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0ssR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7S0FDN0M7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2RuZXNzLy4vcGFnZXMvYXBpL2NoZWNrb3V0X3Nlc3Npb25zLmpzPzA3OWEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RyaXBlID0gcmVxdWlyZSgnc3RyaXBlJykocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgY29uc29sZS5sb2cocmVxKTtcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBDaGVja291dCBTZXNzaW9ucyBmcm9tIGJvZHkgcGFyYW1zLlxuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGxpbmVfaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJvdmlkZSB0aGUgZXhhY3QgUHJpY2UgSUQgKGZvciBleGFtcGxlLCBwcl8xMjM0KSBvZiB0aGUgcHJvZHVjdCB5b3Ugd2FudCB0byBzZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogJ3ByaWNlXzFMOXlnQkxQTzJ6NVh1TVZlM3ZGSFpEVicsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIG1vZGU6ICdwYXltZW50JyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS8/c3VjY2Vzcz10cnVlYCxcbiAgICAgICAgICAgICAgICBjYW5jZWxfdXJsOiBgJHtyZXEuaGVhZGVycy5vcmlnaW59Lz9jYW5jZWxlZD10cnVlYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzLnJlZGlyZWN0KDMwMywgc2Vzc2lvbi51cmwpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoZXJyLnN0YXR1c0NvZGUgfHwgNTAwKS5qc29uKGVyci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgJ1BPU1QnKTtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgnTWV0aG9kIE5vdCBBbGxvd2VkJyk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJzdHJpcGUiLCJyZXF1aXJlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TRUNSRVRfS0VZIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2QiLCJzZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImNyZWF0ZSIsImxpbmVfaXRlbXMiLCJwcmljZSIsInF1YW50aXR5IiwibW9kZSIsInN1Y2Nlc3NfdXJsIiwiaGVhZGVycyIsIm9yaWdpbiIsImNhbmNlbF91cmwiLCJyZWRpcmVjdCIsInVybCIsImVyciIsInN0YXR1cyIsInN0YXR1c0NvZGUiLCJqc29uIiwibWVzc2FnZSIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/checkout_sessions.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/checkout_sessions.js"));
module.exports = __webpack_exports__;

})();