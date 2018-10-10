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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Wave {
  constructor ({
    sea,
    maxHeight,
    maxWidth,
    layer = 1,
  }) {
    const coordinates = {
      top: [],
      left: [],
      right: [],
    };

    coordinates.top.push(Math.floor(Math.random() * maxWidth));
    coordinates.top.push(Math.floor(Math.random() * maxHeight));
    let waveWidth =  Math.floor((maxWidth - (Math.random() * 400)) / 3);

    let waveHeight =  Math.floor(waveWidth / 5);

    coordinates.right.push(coordinates.top[0] + waveWidth);
    coordinates.right.push(coordinates.top[1] + waveHeight);

    coordinates.left.push(coordinates.top[0] - waveWidth);
    coordinates.left.push(coordinates.top[1] + waveHeight);

    sea.beginPath();
    sea.moveTo(...coordinates.top);
    sea.lineTo(...coordinates.left);
    sea.lineTo(...coordinates.right);
    sea.closePath();
    sea.fillStyle = '#607495';
    sea.fill();
    this.coordinates = coordinates;
  }

  move() {

  }
}

/* harmony default export */ __webpack_exports__["a"] = (Wave);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_wave__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_sea__ = __webpack_require__(2);



document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('#sea');
  const sea = new __WEBPACK_IMPORTED_MODULE_1__modules_sea__["a" /* default */](canvas);
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wave__ = __webpack_require__(0);


class Sea {
  constructor (canvas) {
    const maxHeight = Math.ceil(window.innerHeight * 0.75);
    const maxWidth = Math.ceil(window.innerWidth);
    canvas.width = maxWidth;
    canvas.height = maxHeight;
    const seaContext = canvas.getContext('2d');

    this.width = maxWidth;
    this.height = maxHeight;
    this.seaElement = canvas;
    seaContext.fillStyle = '#768AA8';
    seaContext.fillRect(0, 0, maxWidth, maxHeight);

    this.waves = [];

    let i = 0;
    while (i < 10) {
      this.waves.push(new __WEBPACK_IMPORTED_MODULE_0__wave__["a" /* default */]({
        maxWidth,
        maxHeight,
        sea: seaContext,
      }));
      i += 1;
    }

  }

}

/* harmony default export */ __webpack_exports__["a"] = (Sea);


/***/ })
/******/ ]);