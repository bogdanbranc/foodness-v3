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
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./styles/Register.module.css":
/*!************************************!*\
  !*** ./styles/Register.module.css ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"body\": \"Register_body__WHoJ7\",\n\t\"signin_form\": \"Register_signin_form__mTcrp\",\n\t\"input_box\": \"Register_input_box__WR4fU\",\n\t\"signup_button\": \"Register_signup_button__6zLXL\",\n\t\"exclam\": \"Register_exclam__19OZ2\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvUmVnaXN0ZXIubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZG5lc3MvLi9zdHlsZXMvUmVnaXN0ZXIubW9kdWxlLmNzcz9mNDU5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJvZHlcIjogXCJSZWdpc3Rlcl9ib2R5X19XSG9KN1wiLFxuXHRcInNpZ25pbl9mb3JtXCI6IFwiUmVnaXN0ZXJfc2lnbmluX2Zvcm1fX21UY3JwXCIsXG5cdFwiaW5wdXRfYm94XCI6IFwiUmVnaXN0ZXJfaW5wdXRfYm94X19XUjRmVVwiLFxuXHRcInNpZ251cF9idXR0b25cIjogXCJSZWdpc3Rlcl9zaWdudXBfYnV0dG9uX182ekxYTFwiLFxuXHRcImV4Y2xhbVwiOiBcIlJlZ2lzdGVyX2V4Y2xhbV9fMTlPWjJcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Register.module.css\n");

/***/ }),

/***/ "./firebase/firebase.js":
/*!******************************!*\
  !*** ./firebase/firebase.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCGBXolzJkBOc6nBn5RC4UejCiEd0ULxMU\",\n    authDomain: \"foodness-65b3e.firebaseapp.com\",\n    projectId: \"foodness-65b3e\",\n    storageBucket: \"foodness-65b3e.appspot.com\",\n    messagingSenderId: \"411484777192\",\n    appId: \"1:411484777192:web:6fce9a4d723d15f1a8f75d\",\n    measurementId: \"G-CYEKX3G3Z4\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUM2QztBQUNOO0FBQ1U7QUFDSjtBQUU3QyxNQUFNSSxjQUFjLEdBQUc7SUFDbkJDLE1BQU0sRUFBRSx5Q0FBeUM7SUFDakRDLFVBQVUsRUFBRSxnQ0FBZ0M7SUFDNUNDLFNBQVMsRUFBRSxnQkFBZ0I7SUFDM0JDLGFBQWEsRUFBRSw0QkFBNEI7SUFDM0NDLGlCQUFpQixFQUFFLGNBQWM7SUFDakNDLEtBQUssRUFBRSwyQ0FBMkM7SUFDbERDLGFBQWEsRUFBRSxjQUFjO0NBQ2hDO0FBRUQsc0JBQXNCO0FBQ3RCLE1BQU1DLEdBQUcsR0FBR1osMkRBQWEsQ0FBQ0ksY0FBYyxDQUFDO0FBQ2xDLE1BQU1TLE9BQU8sR0FBR1YsNERBQVUsQ0FBQ1MsR0FBRyxDQUFDLENBQUM7QUFDaEMsTUFBTUUsRUFBRSxHQUFHWixnRUFBWSxDQUFDVSxHQUFHLENBQUMsQ0FBQztBQUM3QixNQUFNRyxJQUFJLEdBQUdkLHNEQUFPLENBQUNXLEdBQUcsQ0FBQyxDQUFDO0FBRWpDLGlFQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kbmVzcy8uL2ZpcmViYXNlL2ZpcmViYXNlLmpzP2U3NjUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCJcbmltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tICdmaXJlYmFzZS9zdG9yYWdlJ1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5Q0dCWG9sekprQk9jNm5CbjVSQzRVZWpDaUVkMFVMeE1VXCIsXG4gICAgYXV0aERvbWFpbjogXCJmb29kbmVzcy02NWIzZS5maXJlYmFzZWFwcC5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwiZm9vZG5lc3MtNjViM2VcIixcbiAgICBzdG9yYWdlQnVja2V0OiBcImZvb2RuZXNzLTY1YjNlLmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDExNDg0Nzc3MTkyXCIsXG4gICAgYXBwSWQ6IFwiMTo0MTE0ODQ3NzcxOTI6d2ViOjZmY2U5YTRkNzIzZDE1ZjFhOGY3NWRcIixcbiAgICBtZWFzdXJlbWVudElkOiBcIkctQ1lFS1gzRzNaNFwiXG59O1xuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZShhcHApO1xuZXhwb3J0IGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG5leHBvcnQgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwOyJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsImdldEZpcmVzdG9yZSIsImdldFN0b3JhZ2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJzdG9yYWdlIiwiZGIiLCJhdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase/firebase.js\n");

/***/ }),

/***/ "./pages/context/UserAuthContext.js":
/*!******************************************!*\
  !*** ./pages/context/UserAuthContext.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserAuthContextProvider\": () => (/* binding */ UserAuthContextProvider),\n/* harmony export */   \"useUserAuth1\": () => (/* binding */ useUserAuth1)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/firebase */ \"./firebase/firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst userAuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction UserAuthContextProvider({ children  }) {\n    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    function signUp(email, password) {\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, email, password);\n    }\n    function logIn(email, password) {\n        console.log(email);\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, email, password);\n    }\n    function logOut() {\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__.auth);\n    }\n    function googleSignIn() {\n        const googleAuthProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, googleAuthProvider);\n    }\n    function deleteUser1(user) {\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.deleteUser)(user).then(()=>{\n            console.log(\"Utilizatorul a fost sters!\");\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }\n    function resetPasswordEmail1(email) {\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.sendPasswordResetEmail)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, email).then(()=>{\n            console.log(\"Emailul cu link-ul de resetare a parolei a fost trimis!\");\n        }).catch((error)=>{\n            const errorCode = error.code;\n            const errorMessage = error.message;\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, (currentUser)=>{\n            setUser(currentUser);\n        });\n        return ()=>{\n            unsubscribe();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(userAuthContext.Provider, {\n        value: {\n            user: user1,\n            signUp,\n            logIn,\n            logOut,\n            googleSignIn,\n            deleteUser1,\n            resetPasswordEmail1\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bogda\\\\Desktop\\\\foodnes v2 finall\\\\FoodnessV2-main\\\\pages\\\\context\\\\UserAuthContext.js\",\n        lineNumber: 55,\n        columnNumber: 13\n    }, this);\n}\nfunction useUserAuth1() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(userAuthContext);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250ZXh0L1VzZXJBdXRoQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXNFO0FBQzBIO0FBQ2xKO0FBRzlDLE1BQU1hLGVBQWUsaUJBQUdiLG9EQUFhLEVBQUU7QUFFaEMsU0FBU2MsdUJBQXVCLENBQUMsRUFBRUMsUUFBUSxHQUFFLEVBQUU7SUFDbEQsTUFBTSxFQVJWLEdBUVdDLEtBQUksR0FSZixHQVFpQkMsT0FBTyxNQUFJZiwrQ0FBUSxFQUFFO0lBQ2xDLFNBQVNnQixNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxFQUFFO1FBQzdCLE9BQU9oQiw2RUFBOEIsQ0FBQ1Esb0RBQUksRUFBRU8sS0FBSyxFQUFFQyxRQUFRLENBQUMsQ0FBQztLQUNoRTtJQUVELFNBQVNDLEtBQUssQ0FBQ0YsS0FBSyxFQUFFQyxRQUFRLEVBQUU7UUFDNUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixLQUFLLENBQUMsQ0FBQztRQUNuQixPQUFPZCx5RUFBMEIsQ0FBQ08sb0RBQUksRUFBRU8sS0FBSyxFQUFFQyxRQUFRLENBQUMsQ0FBQztLQUM1RDtJQUVELFNBQVNJLE1BQU0sR0FBRztRQUNkLE9BQU9sQixzREFBTyxDQUFDTSxvREFBSSxDQUFDLENBQUM7S0FDeEI7SUFFRCxTQUFTYSxZQUFZLEdBQUc7UUFDcEIsTUFBTUMsa0JBQWtCLEdBQUcsSUFBSWpCLDZEQUFrQixFQUFFO1FBQ25ELE9BQU9ELDhEQUFlLENBQUNJLG9EQUFJLEVBQUVjLGtCQUFrQixDQUFDO0tBQ25EO0lBRUQsU0FBU0MsV0FBVyxDQUFDWCxJQUFJLEVBQUU7UUFDdkJOLHlEQUFVLENBQUNNLElBQUksQ0FBQyxDQUFDWSxJQUFJLENBQUMsSUFBTTtZQUN4Qk4sT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLENBQUM7U0FDNUMsQ0FBQyxDQUFDTSxLQUFLLENBQUMsQ0FBQ0MsS0FBSyxHQUFLO1lBQ2hCUixPQUFPLENBQUNDLEdBQUcsQ0FBQ08sS0FBSyxDQUFDO1NBQ3JCLENBQUMsQ0FBQztLQUNOO0lBRUQsU0FBU0MsbUJBQW1CLENBQUNaLEtBQUssRUFBRTtRQUNoQ1IscUVBQXNCLENBQUNDLG9EQUFJLEVBQUVPLEtBQUssQ0FBQyxDQUM5QlMsSUFBSSxDQUFDLElBQU07WUFDUk4sT0FBTyxDQUFDQyxHQUFHLENBQUMseURBQXlELENBQUM7U0FDekUsQ0FBQyxDQUNETSxLQUFLLENBQUMsQ0FBQ0MsS0FBSyxHQUFLO1lBQ2QsTUFBTUUsU0FBUyxHQUFHRixLQUFLLENBQUNHLElBQUk7WUFDNUIsTUFBTUMsWUFBWSxHQUFHSixLQUFLLENBQUNLLE9BQU87U0FFckMsQ0FBQyxDQUFDO0tBQ1Y7SUFFRGxDLGdEQUFTLENBQUMsSUFBTTtRQUNaLE1BQU1tQyxXQUFXLEdBQUc3QixpRUFBa0IsQ0FBQ0ssb0RBQUksRUFBRSxDQUFDeUIsV0FBVyxHQUFLO1lBQzFEcEIsT0FBTyxDQUFDb0IsV0FBVyxDQUFDLENBQUM7U0FDeEIsQ0FBQztRQUVGLE9BQU8sSUFBTTtZQUFFRCxXQUFXLEVBQUUsQ0FBQztTQUFFO0tBQ2xDLEVBQUUsRUFBRSxDQUFDO0lBQ04scUJBQVEsOERBQUN2QixlQUFlLENBQUN5QixRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFFdkIsSUFBSSxFQUFKQSxLQUFJO1lBQUVFLE1BQU07WUFBRUcsS0FBSztZQUFFRyxNQUFNO1lBQUVDLFlBQVk7WUFBRUUsV0FBVztZQUFFSSxtQkFBbUI7U0FBRTtrQkFBR2hCLFFBQVE7Ozs7O1lBQTRCLENBQUM7Q0FDbks7QUFFTSxTQUFTeUIsWUFBWSxHQUFHO0lBQzNCLE9BQU9yQyxpREFBVSxDQUFDVSxlQUFlLENBQUMsQ0FBQztDQUN0QyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2RuZXNzLy4vcGFnZXMvY29udGV4dC9Vc2VyQXV0aENvbnRleHQuanM/ZTU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsIHNpZ25PdXQsIG9uQXV0aFN0YXRlQ2hhbmdlZCwgc2lnbkluV2l0aFBvcHVwLCBHb29nbGVBdXRoUHJvdmlkZXIsIGRlbGV0ZVVzZXIsIHNlbmRQYXNzd29yZFJlc2V0RW1haWwgfSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlJ1xuXG5cbmNvbnN0IHVzZXJBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJBdXRoQ29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKClcbiAgICBmdW5jdGlvbiBzaWduVXAoZW1haWwsIHBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2dJbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgY29uc29sZS5sb2coZW1haWwpO1xuICAgICAgICByZXR1cm4gc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2dPdXQoKSB7XG4gICAgICAgIHJldHVybiBzaWduT3V0KGF1dGgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdvb2dsZVNpZ25JbigpIHtcbiAgICAgICAgY29uc3QgZ29vZ2xlQXV0aFByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xuICAgICAgICByZXR1cm4gc2lnbkluV2l0aFBvcHVwKGF1dGgsIGdvb2dsZUF1dGhQcm92aWRlcilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVVc2VyMSh1c2VyKSB7XG4gICAgICAgIGRlbGV0ZVVzZXIodXNlcikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVXRpbGl6YXRvcnVsIGEgZm9zdCBzdGVycyEnKVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldFBhc3N3b3JkRW1haWwxKGVtYWlsKSB7XG4gICAgICAgIHNlbmRQYXNzd29yZFJlc2V0RW1haWwoYXV0aCwgZW1haWwpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VtYWlsdWwgY3UgbGluay11bCBkZSByZXNldGFyZSBhIHBhcm9sZWkgYSBmb3N0IHRyaW1pcyEnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIChjdXJyZW50VXNlcikgPT4ge1xuICAgICAgICAgICAgc2V0VXNlcihjdXJyZW50VXNlcik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuICgpID0+IHsgdW5zdWJzY3JpYmUoKTsgfVxuICAgIH0sIFtdKVxuICAgIHJldHVybiAoPHVzZXJBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBzaWduVXAsIGxvZ0luLCBsb2dPdXQsIGdvb2dsZVNpZ25JbiwgZGVsZXRlVXNlcjEsIHJlc2V0UGFzc3dvcmRFbWFpbDEgfX0+e2NoaWxkcmVufTwvdXNlckF1dGhDb250ZXh0LlByb3ZpZGVyPilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVzZXJBdXRoMSgpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dCh1c2VyQXV0aENvbnRleHQpO1xufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0Iiwib25BdXRoU3RhdGVDaGFuZ2VkIiwic2lnbkluV2l0aFBvcHVwIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZGVsZXRlVXNlciIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJhdXRoIiwidXNlckF1dGhDb250ZXh0IiwiVXNlckF1dGhDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwic2lnblVwIiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ0luIiwiY29uc29sZSIsImxvZyIsImxvZ091dCIsImdvb2dsZVNpZ25JbiIsImdvb2dsZUF1dGhQcm92aWRlciIsImRlbGV0ZVVzZXIxIiwidGhlbiIsImNhdGNoIiwiZXJyb3IiLCJyZXNldFBhc3N3b3JkRW1haWwxIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJ1bnN1YnNjcmliZSIsImN1cnJlbnRVc2VyIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVVzZXJBdXRoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/context/UserAuthContext.js\n");

/***/ }),

/***/ "./pages/register.jsx":
/*!****************************!*\
  !*** ./pages/register.jsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Register.module.css */ \"./styles/Register.module.css\");\n/* harmony import */ var _styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _context_UserAuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/UserAuthContext */ \"./pages/context/UserAuthContext.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_UserAuthContext__WEBPACK_IMPORTED_MODULE_3__]);\n_context_UserAuthContext__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst Register = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: confirmedPassword , 1: setConfirmedPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { signUp  } = (0,_context_UserAuthContext__WEBPACK_IMPORTED_MODULE_3__.useUserAuth1)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setError(\"\");\n        try {\n            if (password !== confirmedPassword) {\n                setError(\"Parolele nu corespund\");\n                return;\n            }\n            await signUp(email, password);\n            router.push(\"/\");\n        } catch (err) {\n            setError(err.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5___default().body),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5___default().signin_form),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Inregistrare\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bogda\\\\Desktop\\\\foodnes v2 finall\\\\FoodnessV2-main\\\\pages\\\\register.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            className: (_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5___default().input_box),\n                            required: true,\n                            placeholder: \"Adresa de e-mail\",\n                            onChange: (e)=>setEmail(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bogda\\\\Desktop\\\\foodnes v2 finall\\\\FoodnessV2-main\\\\pages\\\\register.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            className: (_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5___default().input_box),\n                            required: true,\n                            placeholder: \"Parola\",\n                            onChange: (e)=>setPassword(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bogda\\\\Desktop\\\\foodnes v2 finall\\\\FoodnessV2-main\\\\pages\\\\register.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, undefined),\n                        error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Alert, {\n                            variant: \"danger\",\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bogda\\\\Desktop\\\\foodnes v2 finall\\\\FoodnessV2-main\\\\pages\\\\register.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 31\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            className: (_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5___default().input_box),\n                            required: true,\n                            placeholder: \"Confirma Parola\",\n                            onChange: (e)=>setConfirmedPassword(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bogda\\\\Desktop\\\\foodnes v2 finall\\\\FoodnessV2-main\\\\pages\\\\register.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bogda\\\\Desktop\\\\foodnes v2 finall\\\\FoodnessV2-main\\\\pages\\\\register.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bogda\\\\Desktop\\\\foodnes v2 finall\\\\FoodnessV2-main\\\\pages\\\\register.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bogda\\\\Desktop\\\\foodnes v2 finall\\\\FoodnessV2-main\\\\pages\\\\register.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 27\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bogda\\\\Desktop\\\\foodnes v2 finall\\\\FoodnessV2-main\\\\pages\\\\register.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            className: (_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5___default().exclam),\n                            children: \"Sunt de acord cu termenii si conditiile(click) \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bogda\\\\Desktop\\\\foodnes v2 finall\\\\FoodnessV2-main\\\\pages\\\\register.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 68\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: (_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5___default().signup_button),\n                            onClick: handleSubmit,\n                            children: \"Inregistreaza\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bogda\\\\Desktop\\\\foodnes v2 finall\\\\FoodnessV2-main\\\\pages\\\\register.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\bogda\\\\Desktop\\\\foodnes v2 finall\\\\FoodnessV2-main\\\\pages\\\\register.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\bogda\\\\Desktop\\\\foodnes v2 finall\\\\FoodnessV2-main\\\\pages\\\\register.jsx\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bogda\\\\Desktop\\\\foodnes v2 finall\\\\FoodnessV2-main\\\\pages\\\\register.jsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3lDQUFHOzs7OztxQ0FBTztzQ0FBQSw4REFBQ1EsR0FBQzs0QkFBQ0MsSUFBSSxFQUFDLEdBQUc7NEJBQUNqQixTQUFTLEVBQUVyQiwyRUFBYTtzQ0FBRSxpREFBK0M7Ozs7O3FDQUFJO3NDQUN4SSw4REFBQ3dDLFFBQU07NEJBQUNiLElBQUksRUFBQyxRQUFROzRCQUFDTixTQUFTLEVBQUVyQixrRkFBb0I7NEJBQUUwQyxPQUFPLEVBQUU1QixZQUFZO3NDQUFFLGVBQWE7Ozs7O3FDQUFTOzs7Ozs7NkJBQ2pHOzs7Ozs7cUJBQ0w7Ozs7O2lCQUNKLENBQ1Q7Q0FDSjtBQUNELGlFQUFlWCxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZG5lc3MvLi9wYWdlcy9yZWdpc3Rlci5qc3g/ZTgyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUmVnaXN0ZXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlVXNlckF1dGgxIH0gZnJvbSBcIi4vY29udGV4dC9Vc2VyQXV0aENvbnRleHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtjb25maXJtZWRQYXNzd29yZCwgc2V0Q29uZmlybWVkUGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCB7IHNpZ25VcCB9ID0gdXNlVXNlckF1dGgxKCk7XG5cblxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcblxuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0RXJyb3IoJycpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAocGFzc3dvcmQgIT09IGNvbmZpcm1lZFBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoJ1Bhcm9sZWxlIG51IGNvcmVzcHVuZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHNpZ25VcChlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbmluX2Zvcm19PlxuICAgICAgICAgICAgICAgIDxoMT5JbnJlZ2lzdHJhcmU8L2gxPlxuICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfYm94fSByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkFkcmVzYSBkZSBlLW1haWxcIiBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X2JveH0gcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJQYXJvbGFcIiBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9yICYmIDxBbGVydCB2YXJpYW50PVwiZGFuZ2VyXCI+e2Vycm9yfTwvQWxlcnQ+fVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfYm94fSByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkNvbmZpcm1hIFBhcm9sYVwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29uZmlybWVkUGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiByZXF1aXJlZCAvPjwvc3Bhbj48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17c3R5bGVzLmV4Y2xhbX0+U3VudCBkZSBhY29yZCBjdSB0ZXJtZW5paSBzaSBjb25kaXRpaWxlKGNsaWNrKSA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLnNpZ251cF9idXR0b259IG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+SW5yZWdpc3RyZWF6YTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlciJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkFsZXJ0Iiwic3R5bGVzIiwidXNlVXNlckF1dGgxIiwidXNlUm91dGVyIiwiUmVnaXN0ZXIiLCJyb3V0ZXIiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImNvbmZpcm1lZFBhc3N3b3JkIiwic2V0Q29uZmlybWVkUGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwic2lnblVwIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImVyciIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJib2R5Iiwic2lnbmluX2Zvcm0iLCJoMSIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJpbnB1dF9ib3giLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInZhcmlhbnQiLCJiciIsInNwYW4iLCJhIiwiaHJlZiIsImV4Y2xhbSIsImJ1dHRvbiIsInNpZ251cF9idXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/register.jsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/register.jsx"));
module.exports = __webpack_exports__;

})();