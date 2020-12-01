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

function calc() {
    "use strict";

    let peoples = document.querySelectorAll('.counter-block-input')[0],
        days = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        sumDay = 0,
        sumPeople =0,
        total = 0;

    let selIndex = document.getElementById("select").options.selectedIndex;
    let n =  document.getElementById("select").options[selIndex].value;

    totalValue.innerHTML = 0;
    peoples.value = '';
    days.value = '';

    peoples.addEventListener('input', function(){
        sumPeople = +this.value;
        total = sumPeople * sumDay * 4000;

        console.log(sumPeople);
        console.log(sumDay);
        if (peoples.value != 0 && days.value != 0) {
            totalValue.innerHTML = total * n;
            console.log(`${total}`) ;
        }else{
            totalValue.innerHTML = 0;
        }
    });

    days.addEventListener('input', function(){
        sumDay = +this.value;
        total = sumPeople * sumDay * 1000;

        console.log(sumPeople);
        console.log(sumDay);
        if (days.value != 0 && peoples.value != 0) {
            totalValue.innerHTML = total * n;
            console.log(`${total}`) ;
        } else{
            totalValue.innerHTML = 0;
        }
    });


    place.addEventListener('input', function () {
        if (days.value != 0 && peoples.value != 0) {
            let a = total;
            totalValue.innerHTML = total * this.options[this.selectedIndex].value;
        } else{
            totalValue.innerHTML = 0;
        }
    })
}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
    "use strict";


    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами связемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        formBottom = document.getElementById('form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    function sendForm(elem){
        elem.addEventListener('submit', function(e){
            e.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(form);

            function postData(data){
                return new Promise(function(resolve, reject){
                    let request = new XMLHttpRequest();

                    request.open('POST', 'server.php');

                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                    request.onreadystatechange = function () {
                        if(request.readyState < 4) {
                            statusMessage.innerHTML = message.loading;
                        } else if(request.readyState === 4) {
                            if(request.status === 200){
                                resolve();
                            } else {
                                reject()
                            }
                        }
                    };
                    request.send(data)
                })
            } // End postData

            function clearInput(){
                for(let i = 0; i < input.length; i++){
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    thanksModal.style.display = 'block'; //присвоить значения
                    mainModal.style.display = 'none'; //присвоить значения
                    statusMessage.innerHTML = '';
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)
        })
    }
    sendForm(form);
    sendForm(formBottom);
}

module.exports = modal;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
    "use strict";


    let sliderIndex = 1,
        sliders = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dots = document.querySelectorAll('.dot'),
        sliderDots = document.querySelector('.slider-dots');
    getSliders(sliderIndex);

    function getSliders(n){
        if(n > sliders.length){
            sliderIndex = 1;
        }
        if(n < 1) {
            sliderIndex = sliderIndex.length;
        }

        sliders.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        sliders[sliderIndex - 1].style.display = 'block';
        dots[sliderIndex - 1].classList.add('dot-active');
    }

    function plusSliders(n){
        getSliders(sliderIndex += n)
    }
    setTimeout(function run() {
        plusSliders(1);
        setTimeout(run, 4000);
    }, 4000);

    function currentSlider(n){
        getSliders(sliderIndex = n)
    }

    prev.addEventListener('click', function () {
        plusSliders(-1)
    });
    next.addEventListener('click', function () {
        plusSliders(1)
    });

    sliderDots.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++){
            if(event.target.classList.contains('dot') && event.target == dots[i-1]){
                currentSlider(i);
            }
        }
    });
}

module.exports = slider;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a){
        for(let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i = 0 ; i < tab.length; i++){
                if(target === tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
    let today = new Date;
    today.setHours(23,59,59,59);
    let deadline = today;


    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t / (1000*60*60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function setClock(id, endtime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            if(t.hours < 10) { hours.textContent = '0' + t.hours; }
            else {  hours.textContent = t.hours; }
            if(t.minutes < 10) { minutes.textContent = '0' + t.minutes; }
            else {  minutes.textContent = t.minutes; }
            if(t.seconds < 10) { seconds.textContent = '0' + t.seconds; }
            else {  seconds.textContent = t.seconds; }



            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);
}

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

let tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
    timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
    modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js"),
    slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"),
    calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js");

tabs();
timer();
modal();
slider();
calc();


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map