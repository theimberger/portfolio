/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_wave__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_sea__ = __webpack_require__(2);



document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('#sea').getContext('2d');
  const sea = new __WEBPACK_IMPORTED_MODULE_1__modules_sea__["a" /* default */](canvas)
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Wave {
  constructor (sea, layer = 1) {
    // const initialXPosition = Math.floor(Math.random() * 100);
    // const initialYPosition = Math.floor(Math.random() * 75);
    //
    // const waveElement = document.createElement('div');
    //
    // waveElement.classList.add('wave');
    // waveElement.style.top = `${initialYPosition}vh`;
    // waveElement.style.left = `${initialXPosition - 50}vw`;
    // waveElement.style.borderBottom = '3vw solid #607495';
    // waveElement.style.borderLeft = '50vw solid transparent';
    // waveElement.style.borderRight = '50vw solid transparent';
    //
    // sea.appendChild(waveElement);
  }
  move() {

  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (Wave);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Sea {
  constructor (canvas) {
    this.width = Math.ceil(window.innerWidth);
    this.height = Math.ceil(window.innerHeight);
    canvas.fillStyle = '#768AA8';
    canvas.fillRect(0, 0, this.width, window.innerHeight);
  }
  move() {

  }
}

/* harmony default export */ __webpack_exports__["a"] = (Sea);


/***/ })
/******/ ]);