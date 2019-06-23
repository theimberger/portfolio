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
    layer = 0,
    index,
  }) {
    const coordinates = {
      top: [],
      left: [],
      right: [],
    };

    const colors = ['#5a6d8c', '#63799c', '#7386a5',];
    const maxWidth = sea.canvas.width;
    const maxHeight = sea.canvas.height;

    coordinates.top.push(Math.floor(
      (Math.random() * maxWidth) - (Math.random() * 100)
    ));

    this.life = 100 + Math.floor(Math.random() * 100)
    this.age = 0

    coordinates.top.push(
      Math.floor(Math.random() * (maxHeight - 100))
    );

    let waveWidth = Math.floor((maxWidth - (Math.random() * this.life * 2)) / 1.2);
    this.width = waveWidth;

    waveWidth = Math.floor(
      waveWidth * (coordinates.top[1] / (maxHeight + 100))
    );


    coordinates.right.push(coordinates.top[0] + waveWidth);
    coordinates.right.push(coordinates.top[1]);

    coordinates.left.push(coordinates.top[0] - waveWidth);
    coordinates.left.push(coordinates.top[1]);

    this.color = colors[Math.floor(Math.random() * 4)];
    
    sea.beginPath();
    sea.moveTo(...coordinates.top);
    sea.lineTo(...coordinates.left);
    sea.lineTo(...coordinates.right);
    sea.closePath();
    sea.fillStyle = this.color
    sea.fill();
    this.coordinates = coordinates;
    this.index = index;
    this.sea = sea;

    // const period = Math.floor(2.5 + Math.floor(Math.random() * 2.5)) * 200;
    // const deterioration = Math.floor(5 + Math.floor(Math.random() * 5)) * 200;
  }

  move() {
    const {
      coordinates,
      sea,
      width,
      age,
      life,
      color,
    } = this;

    const factor = coordinates.top[1] / (sea.canvas.height + 100)

    coordinates.top[1] += factor;
    coordinates.left[1] += factor;
    coordinates.right[1] += factor;

    let waveWidth = Math.floor(
      width * factor
    );

    let waveHeight = (-(((age / 4 - life) ** 2) / life) + life) * factor;

    this.age = age + 1

    coordinates.right[0] = coordinates.top[0] + waveWidth;
    coordinates.right[1] = coordinates.top[1] + waveHeight;

    coordinates.left[0] = coordinates.top[0] - waveWidth;
    coordinates.left[1] = coordinates.top[1] + waveHeight;


    sea.beginPath();
    sea.moveTo(...coordinates.top);
    sea.lineTo(...coordinates.left);
    sea.lineTo(...coordinates.right);
    sea.closePath();
    sea.fillStyle = color;
    sea.fill();

    return coordinates.top[1] > sea.canvas.height || waveHeight < 0;
  }

  drop() {

  }

  delete() {

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
    this.context = seaContext;
    this.waves = [];

    while (this.waves.length < 30) {
      this.waves.push(new __WEBPACK_IMPORTED_MODULE_0__wave__["a" /* default */]({
        sea: seaContext,
        initial: true,
      }));
    }
    setInterval(() => this.moveWaves(), 25);
  }
  moveWaves() {
    const {
      context,
      waves,
    } = this;

    context.clearRect(0, 0, 2000, 2000);
    waves.forEach((wave, idx) => {
      const deleteWave = wave.move();
      if (deleteWave) waves[idx] = false;
    });

    
    const newWaves = waves.filter(wave => wave);

    while (newWaves.length < 100) {
      newWaves.push(new __WEBPACK_IMPORTED_MODULE_0__wave__["a" /* default */]({ sea: context, initial: true }));
    }

    this.waves = newWaves;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Sea);


/***/ })
/******/ ]);