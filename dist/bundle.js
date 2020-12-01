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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function calc() {\n    \"use strict\";\n\n    let peoples = document.querySelectorAll('.counter-block-input')[0],\n        days = document.querySelectorAll('.counter-block-input')[1],\n        place = document.getElementById('select'),\n        totalValue = document.getElementById('total'),\n        sumDay = 0,\n        sumPeople =0,\n        total = 0;\n\n    let selIndex = document.getElementById(\"select\").options.selectedIndex;\n    let n =  document.getElementById(\"select\").options[selIndex].value;\n\n    totalValue.innerHTML = 0;\n    peoples.value = '';\n    days.value = '';\n\n    peoples.addEventListener('input', function(){\n        sumPeople = +this.value;\n        total = sumPeople * sumDay * 4000;\n\n        console.log(sumPeople);\n        console.log(sumDay);\n        if (peoples.value != 0 && days.value != 0) {\n            totalValue.innerHTML = total * n;\n            console.log(`${total}`) ;\n        }else{\n            totalValue.innerHTML = 0;\n        }\n    });\n\n    days.addEventListener('input', function(){\n        sumDay = +this.value;\n        total = sumPeople * sumDay * 1000;\n\n        console.log(sumPeople);\n        console.log(sumDay);\n        if (days.value != 0 && peoples.value != 0) {\n            totalValue.innerHTML = total * n;\n            console.log(`${total}`) ;\n        } else{\n            totalValue.innerHTML = 0;\n        }\n    });\n\n\n    place.addEventListener('input', function () {\n        if (days.value != 0 && peoples.value != 0) {\n            let a = total;\n            totalValue.innerHTML = total * this.options[this.selectedIndex].value;\n        } else{\n            totalValue.innerHTML = 0;\n        }\n    })\n}\n\nmodule.exports = calc;\n\n//# sourceURL=webpack:///./src/js/parts/calc.js?");

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function modal() {\n    \"use strict\";\n\n\n    let more = document.querySelector('.more'),\n        overlay = document.querySelector('.overlay'),\n        close = document.querySelector('.popup-close');\n\n    more.addEventListener('click', function() {\n        overlay.style.display = 'block';\n        this.classList.add('more-splash');\n        document.body.style.overflow = 'hidden';\n    });\n\n    close.addEventListener('click', function () {\n        overlay.style.display = 'none';\n        more.classList.remove('more-splash');\n        document.body.style.overflow = '';\n    });\n\n    //form\n\n    let message = {\n        loading: 'Загрузка...',\n        success: 'Спасибо! Скоро мы с вами связемся!',\n        failure: 'Что-то пошло не так...'\n    };\n\n    let form = document.querySelector('.main-form'),\n        formBottom = document.getElementById('form'),\n        input = document.getElementsByTagName('input'),\n        statusMessage = document.createElement('div');\n    statusMessage.classList.add('status');\n\n    function sendForm(elem){\n        elem.addEventListener('submit', function(e){\n            e.preventDefault();\n            elem.appendChild(statusMessage);\n            let formData = new FormData(form);\n\n            function postData(data){\n                return new Promise(function(resolve, reject){\n                    let request = new XMLHttpRequest();\n\n                    request.open('POST', 'server.php');\n\n                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');\n\n                    request.onreadystatechange = function () {\n                        if(request.readyState < 4) {\n                            statusMessage.innerHTML = message.loading;\n                        } else if(request.readyState === 4) {\n                            if(request.status === 200){\n                                resolve();\n                            } else {\n                                reject()\n                            }\n                        }\n                    };\n                    request.send(data)\n                })\n            } // End postData\n\n            function clearInput(){\n                for(let i = 0; i < input.length; i++){\n                    input[i].value = '';\n                }\n            }\n\n            postData(formData)\n                .then(() => statusMessage.innerHTML = message.loading)\n                .then(() => {\n                    thanksModal.style.display = 'block'; //присвоить значения\n                    mainModal.style.display = 'none'; //присвоить значения\n                    statusMessage.innerHTML = '';\n                })\n                .catch(() => statusMessage.innerHTML = message.failure)\n                .then(clearInput)\n        })\n    }\n    sendForm(form);\n    sendForm(formBottom);\n}\n\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./src/js/parts/modal.js?");

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function slider() {\n    \"use strict\";\n\n\n    let sliderIndex = 1,\n        sliders = document.querySelectorAll('.slider-item'),\n        prev = document.querySelector('.prev'),\n        next = document.querySelector('.next'),\n        dots = document.querySelectorAll('.dot'),\n        sliderDots = document.querySelector('.slider-dots');\n    getSliders(sliderIndex);\n\n    function getSliders(n){\n        if(n > sliders.length){\n            sliderIndex = 1;\n        }\n        if(n < 1) {\n            sliderIndex = sliderIndex.length;\n        }\n\n        sliders.forEach((item) => item.style.display = 'none');\n        dots.forEach((item) => item.classList.remove('dot-active'));\n\n        sliders[sliderIndex - 1].style.display = 'block';\n        dots[sliderIndex - 1].classList.add('dot-active');\n    }\n\n    function plusSliders(n){\n        getSliders(sliderIndex += n)\n    }\n    setTimeout(function run() {\n        plusSliders(1);\n        setTimeout(run, 4000);\n    }, 4000);\n\n    function currentSlider(n){\n        getSliders(sliderIndex = n)\n    }\n\n    prev.addEventListener('click', function () {\n        plusSliders(-1)\n    });\n    next.addEventListener('click', function () {\n        plusSliders(1)\n    });\n\n    sliderDots.addEventListener('click', function (event) {\n        for (let i = 0; i < dots.length + 1; i++){\n            if(event.target.classList.contains('dot') && event.target == dots[i-1]){\n                currentSlider(i);\n            }\n        }\n    });\n}\n\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./src/js/parts/slider.js?");

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function tabs() {\n    'use strict';\n\n    let tab = document.querySelectorAll('.info-header-tab'),\n        info = document.querySelector('.info-header'),\n        tabContent = document.querySelectorAll('.info-tabcontent');\n\n    function hideTabContent(a){\n        for(let i = a; i < tabContent.length; i++){\n            tabContent[i].classList.remove('show');\n            tabContent[i].classList.add('hide');\n        }\n    }\n\n    hideTabContent(1);\n\n    function showTabContent(b) {\n        if(tabContent[b].classList.contains('hide')){\n            tabContent[b].classList.remove('hide');\n            tabContent[b].classList.add('show');\n        }\n    }\n\n    info.addEventListener('click', function (event) {\n        let target = event.target;\n        if(target && target.classList.contains('info-header-tab')){\n            for(let i = 0 ; i < tab.length; i++){\n                if(target === tab[i]){\n                    hideTabContent(0);\n                    showTabContent(i);\n                    break;\n                }\n            }\n        }\n    });\n}\n\nmodule.exports = tabs;\n\n//# sourceURL=webpack:///./src/js/parts/tabs.js?");

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function timer() {\n    let today = new Date;\n    today.setHours(23,59,59,59);\n    let deadline = today;\n\n\n    function getTimeRemaining(endtime){\n        let t = Date.parse(endtime) - Date.parse(new Date()),\n            seconds = Math.floor((t/1000) % 60),\n            minutes = Math.floor((t/1000/60) % 60),\n            hours = Math.floor((t / (1000*60*60)));\n\n        return {\n            'total': t,\n            'hours': hours,\n            'minutes': minutes,\n            'seconds': seconds\n        }\n    }\n\n    function setClock(id, endtime){\n        let timer = document.getElementById(id),\n            hours = timer.querySelector('.hours'),\n            minutes = timer.querySelector('.minutes'),\n            seconds = timer.querySelector('.seconds'),\n            timeInterval = setInterval(updateClock, 1000);\n\n        function updateClock() {\n            let t = getTimeRemaining(endtime);\n            if(t.hours < 10) { hours.textContent = '0' + t.hours; }\n            else {  hours.textContent = t.hours; }\n            if(t.minutes < 10) { minutes.textContent = '0' + t.minutes; }\n            else {  minutes.textContent = t.minutes; }\n            if(t.seconds < 10) { seconds.textContent = '0' + t.seconds; }\n            else {  seconds.textContent = t.seconds; }\n\n\n\n            if(t.total <= 0){\n                clearInterval(timeInterval);\n            }\n        }\n    }\n\n    setClock('timer', deadline);\n}\n\nmodule.exports = timer;\n\n//# sourceURL=webpack:///./src/js/parts/timer.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let tabs = __webpack_require__(/*! ./parts/tabs.js */ \"./src/js/parts/tabs.js\"),\n    timer = __webpack_require__(/*! ./parts/timer.js */ \"./src/js/parts/timer.js\"),\n    modal = __webpack_require__(/*! ./parts/modal.js */ \"./src/js/parts/modal.js\"),\n    slider = __webpack_require__(/*! ./parts/slider.js */ \"./src/js/parts/slider.js\"),\n    calc = __webpack_require__(/*! ./parts/calc.js */ \"./src/js/parts/calc.js\");\n\ntabs();\ntimer();\nmodal();\nslider();\ncalc();\n\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });