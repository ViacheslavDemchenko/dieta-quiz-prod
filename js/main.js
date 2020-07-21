"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/
!function (e, n, A) {
  function o(e, n) {
    return _typeof(e) === n;
  }

  function t() {
    var e, n, A, t, a, i, l;

    for (var f in r) {
      if (r.hasOwnProperty(f)) {
        if (e = [], n = r[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (A = 0; A < n.options.aliases.length; A++) {
          e.push(n.options.aliases[A].toLowerCase());
        }

        for (t = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) {
          i = e[a], l = i.split("."), 1 === l.length ? Modernizr[l[0]] = t : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = t), s.push((t ? "" : "no-") + l.join("-"));
        }
      }
    }
  }

  function a(e) {
    var n = u.className,
        A = Modernizr._config.classPrefix || "";

    if (c && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + A + "no-js(\\s|$)");
      n = n.replace(o, "$1" + A + "js$2");
    }

    Modernizr._config.enableClasses && (n += " " + A + e.join(" " + A), c ? u.className.baseVal = n : u.className = n);
  }

  function i(e, n) {
    if ("object" == _typeof(e)) for (var A in e) {
      f(e, A) && i(A, e[A]);
    } else {
      e = e.toLowerCase();
      var o = e.split("."),
          t = Modernizr[o[0]];
      if (2 == o.length && (t = t[o[1]]), "undefined" != typeof t) return Modernizr;
      n = "function" == typeof n ? n() : n, 1 == o.length ? Modernizr[o[0]] = n : (!Modernizr[o[0]] || Modernizr[o[0]] instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])), Modernizr[o[0]][o[1]] = n), a([(n && 0 != n ? "" : "no-") + o.join("-")]), Modernizr._trigger(e, n);
    }
    return Modernizr;
  }

  var s = [],
      r = [],
      l = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, n) {
      var A = this;
      setTimeout(function () {
        n(A[e]);
      }, 0);
    },
    addTest: function addTest(e, n, A) {
      r.push({
        name: e,
        fn: n,
        options: A
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      r.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = l, Modernizr = new Modernizr();
  var f,
      u = n.documentElement,
      c = "svg" === u.nodeName.toLowerCase();
  !function () {
    var e = {}.hasOwnProperty;
    f = o(e, "undefined") || o(e.call, "undefined") ? function (e, n) {
      return n in e && o(e.constructor.prototype[n], "undefined");
    } : function (n, A) {
      return e.call(n, A);
    };
  }(), l._l = {}, l.on = function (e, n) {
    this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function () {
      Modernizr._trigger(e, Modernizr[e]);
    }, 0);
  }, l._trigger = function (e, n) {
    if (this._l[e]) {
      var A = this._l[e];
      setTimeout(function () {
        var e, o;

        for (e = 0; e < A.length; e++) {
          (o = A[e])(n);
        }
      }, 0), delete this._l[e];
    }
  }, Modernizr._q.push(function () {
    l.addTest = i;
  }), Modernizr.addAsyncTest(function () {
    function e(e, n, A) {
      function o(n) {
        var o = n && "load" === n.type ? 1 == t.width : !1,
            a = "webp" === e;
        i(e, a && o ? new Boolean(o) : o), A && A(n);
      }

      var t = new Image();
      t.onerror = o, t.onload = o, t.src = n;
    }

    var n = [{
      uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
      name: "webp"
    }, {
      uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
      name: "webp.alpha"
    }, {
      uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
      name: "webp.animation"
    }, {
      uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
      name: "webp.lossless"
    }],
        A = n.shift();
    e(A.name, A.uri, function (A) {
      if (A && "load" === A.type) for (var o = 0; o < n.length; o++) {
        e(n[o].name, n[o].uri);
      }
    });
  }), t(), a(s), delete l.addTest, delete l.addAsyncTest;

  for (var p = 0; p < Modernizr._q.length; p++) {
    Modernizr._q[p]();
  }

  e.Modernizr = Modernizr;
}(window, document);
"use strict";

;

(function () {
  if ($('.about-list').length) {
    var accordItems = document.querySelectorAll('.about-item__title'),
        active = document.getElementsByClassName('about-item__title--active');
    Array.from(accordItems).forEach(function (item) {
      item.addEventListener('click', function () {
        if (active.length > 0 && active[0] !== this) active[0].classList.remove('about-item__title--active');
        this.classList.toggle('about-item__title--active');
      });
    });
  }

  if ($('.faq-list').length) {
    var _accordItems = document.querySelectorAll('.faq-item__title'),
        _active = document.getElementsByClassName('faq-item__title--active');

    Array.from(_accordItems).forEach(function (item) {
      item.addEventListener('click', function () {
        if (_active.length > 0 && _active[0] !== this) _active[0].classList.remove('faq-item__title--active');
        this.classList.toggle('faq-item__title--active');
      });
    });
  }
})();
"use strict";

$(document).ready(function () {
  /* ПЕРЕМЕННЫЕ  */
  if ($('.quiz').length) {
    /* ОПРЕДЕЛЯЕМ ПОДДЕРЖКУ БРАУЗЕРОМ WEBP ФОРМАТА */
    var webpSupportCheck = function webpSupportCheck() {
      var webp = true;
      Modernizr.on('webp', function (result) {
        if (result) {
          webp = true;
        } else {
          webp = false;
        }
      });
      return webp;
    };
    /* ФУНКЦИИ ДЛЯ РАСЧЕТОВ */


    var userParams = function userParams(webp) {
      var screenWidth = window.screen.width;
      var bgImage = document.querySelector('.quiz-slide-first');
      var src = './img/first-slide-bg-';
      var imgType;

      if (webpSupportCheck() && window.devicePixelRatio == 1) {
        // console.log('WEBP');
        // console.log('< 481');
        // console.log('window.devicePixelRatio 1');
        // src = './img/first-slide-bg-';
        imgType = '-480@1x.webp';
      }

      if (webpSupportCheck() && window.devicePixelRatio > 1) {
        // console.log('WEBP');
        // console.log('< 481');
        // console.log('window.devicePixelRatio > 1');
        /////
        imgType = '-480@2x.webp';
      }

      if (!webpSupportCheck() && window.devicePixelRatio == 1) {
        // console.log('jpg');
        // console.log('< 481');
        // console.log('window.devicePixelRatio 1');
        // src = './img/first-slide-bg-';
        imgType = '-480@1x.jpg';
      }

      if (!webpSupportCheck() && window.devicePixelRatio > 1) {
        // console.log('jpg');
        // console.log('< 481');
        // console.log('window.devicePixelRatio > 1');
        // src = './img/first-slide-bg-';
        imgType = '-480@2x.jpg';
      }

      femaleBtns.forEach(function (btn, i) {
        btn.addEventListener('click', function () {
          femaleBtns.forEach(function (btn) {
            btn.classList.remove('sex--active');
          });
          sexCheckIcons.forEach(function (icon) {
            icon.classList.remove('check-icon--active');
          });
          quizSlideTitle.forEach(function (title) {
            title.classList.remove('quiz-slide__title--active');
          });
          btn.classList.add('sex--active');
          sexCheckIcons[i].classList.add('check-icon--active');
          quizSlideTitle[i].classList.add('quiz-slide__title--active'); // console.log(`url(${src}${i}${imgType})`);

          bgImage.style.backgroundImage = "url(".concat(src).concat(i).concat(imgType, ")");
          userSex = btn.value;
          console.log("\u041F\u043E\u043B: ".concat(userSex));
        });
        return userSex;
      });
      targetBtns.forEach(function (radio) {
        radio.addEventListener('click', function () {
          target = radio.value;
          console.log("\u0426\u0435\u043B\u044C: ".concat(target));

          if (target == 1) {
            localStorage.setItem('target', 'Похудеть');
            localStorage.setItem('target-weight', target);
          }

          if (target == 2) {
            localStorage.setItem('target', 'Набрать вес');
            localStorage.setItem('target-weight', target);
          }

          if (target == 3) {
            localStorage.setItem('target', 'Удержать вес');
            localStorage.setItem('target-weight', target);
          }
        });
        return target;
      });
      age.addEventListener('keyup', function () {
        age.value = age.value.replace(/[^0-9]/g, '');
        userAge = Number(age.value);

        if (userAge >= 18 && userAge <= 70) {
          formField[0].classList.remove('form__field--warning');
          inputWrap[0].classList.add('input-wrap--active');
          formLabel[0].textContent = 'Ваш возраст*';
          formLabel[0].style.color = '#3a4148';
        } else {
          formField[0].classList.add('form__field--warning');
          inputWrap[0].classList.remove('input-wrap--active');
          formLabel[0].textContent = 'от 18 до 70 лет';
          formLabel[0].style.color = 'red';
        }

        console.log("Возраст: ");
        console.log(userAge);
        return userAge;
      });
      weight.addEventListener('keyup', function () {
        weight.value = weight.value.replace(/[^0-9]/g, '');
        userWeight = Number(weight.value);

        if (userWeight >= 40 && userWeight <= 150) {
          formField[1].classList.remove('form__field--warning');
          inputWrap[1].classList.add('input-wrap--active');
          formLabel[1].textContent = 'Ваш вес*';
          formLabel[1].style.color = '#3a4148';
        } else {
          formField[1].classList.add('form__field--warning');
          inputWrap[1].classList.remove('input-wrap--active');
          formLabel[1].textContent = 'от 40 до 150 кг';
          formLabel[1].style.color = 'red';
        }

        console.log("Вес: ");
        console.log(userWeight);
        localStorage.setItem('weight', userWeight);
        return userWeight;
      });
      height.addEventListener('keyup', function () {
        height.value = height.value.replace(/[^0-9]/g, '');
        userHeight = Number(height.value);

        if (userHeight >= 150 && userHeight <= 200) {
          formField[2].classList.remove('form__field--warning');
          inputWrap[2].classList.add('input-wrap--active');
          formLabel[2].textContent = 'Ваш рост*';
          formLabel[2].style.color = '#3a4148';
        } else {
          formField[2].classList.add('form__field--warning');
          inputWrap[2].classList.remove('input-wrap--active');
          formLabel[2].textContent = 'от 150 до 200 см';
          formLabel[2].style.color = 'red';
        }

        console.log("Рост: ");
        console.log(userHeight);
        return userHeight;
      }); // formField.forEach((input, i) => {
      //     input.addEventListener('change', () => {
      //         if (input.value != '') {
      //             inputWrap[i].classList.add('input-wrap--active');
      //         } else {
      //             inputWrap[i].classList.remove('input-wrap--active');
      //         }
      //     });
      // });
    };

    var activity = function activity() {
      activityBtns.forEach(function (btn, i) {
        btn.addEventListener('click', function () {
          activityBtns.forEach(function (btn) {
            btn.classList.remove('quantaty--active');
          });
          exerciceNum.forEach(function (num) {
            num.classList.remove('exercice-num--active');
          });
          exerciceText.forEach(function (text) {
            text.classList.remove('exercice-text--active');
          });
          quantatyCheckIcon.forEach(function (icon) {
            icon.classList.remove('quantaty-check-icon--active');
          });
          intensity.forEach(function (text) {
            text.classList.remove('intensity--active');
          });
          btn.classList.add('quantaty--active');
          exerciceNum[i].classList.add('exercice-num--active');
          exerciceText[i].classList.add('exercice-text--active');
          quantatyCheckIcon[i].classList.add('quantaty-check-icon--active');
          intensity[i].classList.add('intensity--active');

          if (i == 0) {
            userActivity = 1.2;
            console.log("Коэф. активности: ");
            console.log(userActivity);
          } else if (i == 1) {
            userActivity = 1.3;
            console.log("Коэф. активности: ");
            console.log(userActivity);
          } else if (i == 2) {
            userActivity = 1.4;
            console.log("Коэф. активности: ");
            console.log(userActivity);
          } else if (i == 3) {
            userActivity = 1.5;
            console.log("Коэф. активности: ");
            console.log(userActivity);
          } else if (i == 4) {
            userActivity = 1.6;
            console.log("Коэф. активности: ");
            console.log(userActivity);
          } else if (i == 5) {
            userActivity = 1.9;
            console.log("Коэф. активности: ");
            console.log(userActivity);
          }
        });
      });
      return userActivity;
    };

    var weightIndexCalc = function weightIndexCalc() {
      userHeightMeters = userHeight / 100;
      console.log("Вес в метрах: ");
      console.log(userHeightMeters);
      weightIndex = Number(Math.round(userWeight / (userHeightMeters * userHeightMeters)));
      console.log("ИМТ: ");
      console.log(weightIndex);
      localStorage.setItem('BMI', weightIndex);

      if (weightIndex >= 0 && weightIndex < 16) {
        console.log("ИМТ: Выраженный дефицит массы тела");
        weightIndexMessage = "Выраженный дефицит массы тела";
      }

      if (weightIndex >= 16 && weightIndex < 19) {
        console.log("ИМТ: Недостаточная масса тела");
        weightIndexMessage = "Недостаточная масса тела";
      }

      if (weightIndex >= 20 && weightIndex < 25) {
        console.log("ИМТ: Нормальная масса тела");
        weightIndexMessage = "Нормальная масса тела";
      }

      if (weightIndex >= 25 && weightIndex < 30) {
        console.log("ИМТ: Избыточная масса тела (предожирение)");
        weightIndexMessage = "Избыточная масса тела (предожирение)";
      }

      if (weightIndex >= 30 && weightIndex < 35) {
        console.log("ИМТ: Ожирение 1-ой степени");
        weightIndexMessage = "Ожирение 1-ой степени";
      }

      if (weightIndex >= 35 && weightIndex <= 40) {
        console.log("ИМТ: Ожирение 2-ой степени");
        weightIndexMessage = "Ожирение 2-ой степени";
      }

      if (weightIndex > 40) {
        console.log("ИМТ: Ожирение 3-ой степени");
        weightIndexMessage = "Ожирение 3-ой степени";
      }

      localStorage.setItem('weightIndexMessage', weightIndexMessage);
      return weightIndex;
    };

    var minCalories = function minCalories() {
      if (weightIndex > 29 || weightIndex >= 0 && weightIndex <= 19) {
        normalWeight = userHeight - 100;
        console.log("Нормальный вес: ");
        console.log(normalWeight);

        if (userSex == "male") {
          metabolism = Math.round(9.9 * normalWeight + 6.25 * userHeight - 4.92 * userAge + 5);
        } else if (userSex == "female") {
          metabolism = Math.round(9.9 * normalWeight + 6.25 * userHeight - 4.92 * userAge - 161);
        }
      } else {
        if (userSex == "male") {
          metabolism = Math.round(9.9 * userWeight + 6.25 * userHeight - 4.92 * userAge + 5);
        } else if (userSex == "female") {
          metabolism = Math.round(9.9 * userWeight + 6.25 * userHeight - 4.92 * userAge - 161);
        }
      }

      localStorage.setItem('metabolism', metabolism);
      console.log("Минимальная калорийность (основной обмен): ");
      console.log(metabolism);
      return metabolism;
    };

    var dailyCaloriesCalc = function dailyCaloriesCalc() {
      dailyCalories = Math.round(metabolism * userActivity);
      console.log("Дневная калорийность: ");
      console.log(dailyCalories);

      if (weightIndex >= 0 && weightIndex < 19) {
        dailyCalories = Math.round(metabolism * userActivity);
        localStorage.setItem('dailyCalories', dailyCalories);
      }

      if (target == 1) {
        if (weightIndex >= 19 && weightIndex < 25) {
          caloriesDeficiteStart = Math.round(dailyCalories - dailyCalories / 100 * 10);
          caloriesDeficiteEnd = Math.round(dailyCalories - dailyCalories / 100 * 15);
          console.log("Кал. для похудения: ");
          console.log(caloriesDeficiteStart + " - " + caloriesDeficiteEnd); // userCaloriesResult = `${caloriesDeficiteStart} - ${caloriesDeficiteEnd}`;

          localStorage.setItem('caloriesDeficiteStart', caloriesDeficiteStart);
          localStorage.setItem('caloriesDeficiteEnd', caloriesDeficiteEnd);
        } else if (weightIndex >= 25 && weightIndex < 30) {
          caloriesDeficiteStart = Math.round(dailyCalories - dailyCalories / 100 * 15);
          caloriesDeficiteEnd = Math.round(dailyCalories - dailyCalories / 100 * 20);
          console.log("Кал. для похудения: ");
          console.log(caloriesDeficiteStart + " - " + caloriesDeficiteEnd); // userCaloriesResult = `${caloriesDeficiteStart} - ${caloriesDeficiteEnd}`;

          localStorage.setItem('caloriesDeficiteStart', caloriesDeficiteStart);
          localStorage.setItem('caloriesDeficiteEnd', caloriesDeficiteEnd);
        } else if (weightIndex >= 30) {
          caloriesDeficiteStart = Math.round(dailyCalories - dailyCalories / 100 * 10);
          caloriesDeficiteEnd = Math.round(dailyCalories - dailyCalories / 100 * 15);
          console.log("Кал. для похудения: ");
          console.log(caloriesDeficiteStart + " - " + caloriesDeficiteEnd); // userCaloriesResult = `${caloriesDeficiteStart} - ${caloriesDeficiteEnd}`;

          localStorage.setItem('caloriesDeficiteStart', caloriesDeficiteStart);
          localStorage.setItem('caloriesDeficiteEnd', caloriesDeficiteEnd);
        }
      } else if (target == 2) {
        caloriesDeficiteStart = dailyCalories + 100;
        caloriesDeficiteEnd = dailyCalories + 200;
        console.log("Кал. для набора веса: ");
        console.log(caloriesDeficiteStart + " - " + caloriesDeficiteEnd); // userCaloriesResult = `${caloriesDeficiteStart} - ${caloriesDeficiteEnd}`;

        localStorage.setItem('caloriesDeficiteStart', caloriesDeficiteStart);
        localStorage.setItem('caloriesDeficiteEnd', caloriesDeficiteEnd);
      }
    };

    var femaleBtns = document.querySelectorAll('.sex'),
        sexCheckIcons = document.querySelectorAll('.check-icon'),
        quizSlideTitle = document.querySelectorAll('.quiz-slide__title'),
        targetBtns = document.getElementsByName('target'),
        activityBtns = document.querySelectorAll('.quantaty'),
        exerciceNum = document.querySelectorAll('.exercice-num'),
        exerciceText = document.querySelectorAll('.exercice-text'),
        quantatyCheckIcon = document.querySelectorAll('.quantaty-check-icon'),
        intensity = document.querySelectorAll('.intensity'),
        age = document.getElementById('age'),
        weight = document.getElementById('weight'),
        height = document.getElementById('height'),
        formField = document.querySelectorAll('.form__field'),
        inputWrap = document.querySelectorAll('.input-wrap'),
        calcBtn = document.querySelector('.arrow__right--last'),
        formLabel = document.querySelectorAll('.form__label');
    calcBtn.disabled = true; // Данные

    var userSex, userWeight, userHeightMeters, userHeight, userAge, weightIndex, userActivity, dailyCalories, metabolism, target, caloriesDeficiteStart, caloriesDeficiteEnd, weightIndexMessage, normalWeight;
    userParams(webpSupportCheck());
    activity();
    calcBtn.addEventListener("click", function () {
      if (userSex == undefined || userWeight == undefined || target == undefined || userActivity == undefined || userWeight == undefined || userHeight == undefined || userAge == undefined) {
        calcBtn.disabled = true;
        alert('Пожалуйста, введите все необходимые данные!');
      } else {
        calcBtn.disabled = false;
        weightIndexCalc();
        minCalories();
        dailyCaloriesCalc();
        window.location.href = 'program-calc.html';
      }
    });
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.arrow__right--to-top');
  goTopBtn.addEventListener('click', backToTop);
});
"use strict";

(function () {
  if ($('#circle').length) {
    var el = document.querySelector('#circle');
    var myAnimation = new LazyLinePainter(el, {
      "ease": "easeLinear",
      "strokeWidth": 6,
      "strokeOpacity": 1,
      "strokeColor": "linear-gradient(90deg, #ebb845 0%, #f7c754 100%)",
      "strokeCap": "square"
    });
    myAnimation.paint();
  }
})();
"use strict";

;

(function () {
  if ($('.dieta-choice').length) {
    var dietaTypeChoice = function dietaTypeChoice() {
      dietaItem.forEach(function (el, i) {
        el.addEventListener('click', function (e) {
          console.log(e.target);
          dietaBlockTop.forEach(function (el) {
            el.classList.remove('dieta__item-top--active');
          });
          caloriesQuantity.forEach(function (el) {
            el.classList.remove('calories-quantity--active');
          });
          caloriesText.forEach(function (el) {
            el.classList.remove('calories-text--active');
          });
          dietaBlockBottom.forEach(function (el) {
            el.classList.remove('dieta__item-bottom--active');
          });
          dietaBlockTop[i].classList.add('dieta__item-top--active');
          caloriesQuantity[i].classList.add('calories-quantity--active');
          caloriesText[i].classList.add('calories-text--active');
          dietaBlockBottom[i].classList.add('dieta__item-bottom--active');
        });
      });
    };

    var dietaModalOpen = function dietaModalOpen() {
      modalOpen.forEach(function (el, i) {
        el.addEventListener('click', function () {
          overlay.classList.add('overlay--active');
          body.classList.add('no-scroll');
          modals[i].classList.add('modal--active');
        });
      });
    };

    var dietaModalClose = function dietaModalClose() {
      modalClose.forEach(function (el, i) {
        el.addEventListener('click', function () {
          overlay.classList.remove('overlay--active');
          body.classList.remove('no-scroll');
          modals[i].classList.remove('modal--active');
        });
      });
    };

    var dietaBlockTop = document.querySelectorAll('.dieta__item-top');
    var caloriesQuantity = document.querySelectorAll('.calories-quantity');
    var caloriesText = document.querySelectorAll('.calories-text');
    var dietaBlockBottom = document.querySelectorAll('.dieta__item-bottom');
    var dietaItem = document.querySelectorAll('.dieta__item');
    var modalOpen = document.querySelectorAll('.question-mark--payment');
    var modalClose = document.querySelectorAll('.modal .close');
    var modals = document.querySelectorAll('.modal');
    var overlay = document.querySelector('.overlay');
    var body = document.getElementsByTagName('body')[0];
    dietaTypeChoice();
    dietaModalOpen();
    dietaModalClose();
    overlay.addEventListener('click', function () {
      modals.forEach(function (el) {
        overlay.classList.remove('overlay--active');
        body.classList.remove('no-scroll');
        el.classList.remove('modal--active');
      });
    });
  }
})();
"use strict";

;

(function () {
  function getYear() {
    var date = new Date(),
        currentYear = date.getFullYear(),
        yearWrite = document.querySelector('.copyright');

    if (currentYear > 2020) {
      yearWrite.innerHTML = "\xA9 2020 \u2014 ".concat(currentYear);
    } else {
      yearWrite.innerHTML = "\xA9 ".concat(currentYear);
    }
  }

  ;
  getYear();
})();
"use strict";

;

(function () {
  function getInternetExplorerVersion() {
    var rv = -1;

    if (navigator.appName == 'Microsoft Internet Explorer') {
      var ua = navigator.userAgent;
      var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
    } else if (navigator.appName == 'Netscape') {
      var _ua = navigator.userAgent;

      var _re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");

      if (_re.exec(_ua) != null) rv = parseFloat(RegExp.$1);
    }

    return rv;
  }

  function hideSite() {
    var site = document.querySelector('.container-fluid');
    var body = document.getElementsByTagName('body')[0];
    var overlay = document.querySelector('.overlay-ie');
    var message = document.createElement('div');
    message.classList.add('ie-text-warning');
    message.innerHTML = 'К сожалению мы не поддерживаем Internet Explorer!';

    if (getInternetExplorerVersion() !== -1) {
      overlay.classList.add('overlay-ie--active');
      overlay.appendChild(message);
      overlay.appendChild(siteOverlay);
      body.classList.add('no-scroll');
    }
  }

  hideSite();
})();
"use strict";

(function () {
  if ($('.arrow-icon-right').length) {
    var iOS = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) >= 0;
    var arrowIconRight = document.querySelector('.arrow-icon-right');

    if (iOS) {
      arrowIconRight.style.transform = 'translateY(-50%)';
      arrowIconRight.style.top = '1.5625rem';
      arrowIconRight.style.right = '1.5rem';
      console.log('iOS');
    } else {
      console.log('no iOS');
    }
  }
})();
"use strict";

$(document).ready(function () {
  if ($('.quiz-slide-third').length) {
    var openQuizSlideThirdModal = function openQuizSlideThirdModal() {
      overlay.classList.add('overlay--active');
      quizSlideThirdModal.classList.add('quiz-slide-third-modal--active');
      body.classList.add('no-scroll');
    };

    var closeQuizSlideThirdModal = function closeQuizSlideThirdModal() {
      overlay.classList.remove('overlay--active');
      quizSlideThirdModal.classList.remove('quiz-slide-third-modal--active');
      body.classList.remove('no-scroll');
    };

    var quizSlideThirdModal = document.querySelector('.quiz-slide-third-modal');
    var overlay = document.querySelector('.overlay');
    var body = document.getElementsByTagName('body')[0];
    var quizSlideThirdModalOpen = document.querySelector('.question-mark');
    var quizSlideThirdModalClose = document.querySelector('.third-slide-modal');
    quizSlideThirdModalOpen.addEventListener('click', openQuizSlideThirdModal);
    quizSlideThirdModalClose.addEventListener('click', closeQuizSlideThirdModal);
  }

  if ($('.personal-profile').length) {
    var openResultBlockModalB_M_I = function openResultBlockModalB_M_I() {
      _overlay.classList.add('overlay--active');

      resultBlockModalBMI.classList.add('result-block-modal--bmi--active');

      _body.classList.add('no-scroll');
    };

    var closeResultBlockModalB_M_I = function closeResultBlockModalB_M_I() {
      _overlay.classList.remove('overlay--active');

      resultBlockModalBMI.classList.remove('result-block-modal--bmi--active');

      _body.classList.remove('no-scroll');
    };

    var openResultBlockModal_Energy = function openResultBlockModal_Energy() {
      _overlay.classList.add('overlay--active');

      resultBlockModalEnergy.classList.add('result-block-modal--energy--active');

      _body.classList.add('no-scroll');
    };

    var closeResultBlockModal_Energy = function closeResultBlockModal_Energy() {
      _overlay.classList.remove('overlay--active');

      resultBlockModalEnergy.classList.remove('result-block-modal--energy--active');

      _body.classList.remove('no-scroll');
    };

    var openResultBlockModal_Weight = function openResultBlockModal_Weight() {
      _overlay.classList.add('overlay--active');

      resultBlockModalWeight.classList.add('result-block-modal--loose-weight--active');

      _body.classList.add('no-scroll');
    };

    var closeResultBlockModal_Weight = function closeResultBlockModal_Weight() {
      _overlay.classList.remove('overlay--active');

      resultBlockModalWeight.classList.remove('result-block-modal--loose-weight--active');

      _body.classList.remove('no-scroll');
    };

    var openResultBlockModal_Result = function openResultBlockModal_Result() {
      _overlay.classList.add('overlay--active');

      resultBlockModalResult.classList.add('result-block-modal--result--active');

      _body.classList.add('no-scroll');
    };

    var closeResultBlockModal_Result = function closeResultBlockModal_Result() {
      _overlay.classList.remove('overlay--active');

      resultBlockModalResult.classList.remove('result-block-modal--result--active');

      _body.classList.remove('no-scroll');
    };

    var _body = document.getElementsByTagName('body')[0];

    var _overlay = document.querySelector('.overlay');

    var resultBlockModalBMI = document.querySelector('.result-block-modal--bmi');
    var openResultBlockModalBMI = document.querySelector('.question-mark--bmi');
    var closeResultBlockModalBMI = document.querySelector('.close-modal--bmi'); // console.log(overlay);

    openResultBlockModalBMI.addEventListener('click', openResultBlockModalB_M_I);
    closeResultBlockModalBMI.addEventListener('click', closeResultBlockModalB_M_I);
    var resultBlockModalEnergy = document.querySelector('.result-block-modal--energy');
    var openResultBlockModalEnergy = document.querySelector('.question-mark--energy');
    var closeResultBlockModalEnergy = document.querySelector('.close-modal--energy');
    openResultBlockModalEnergy.addEventListener('click', openResultBlockModal_Energy);
    closeResultBlockModalEnergy.addEventListener('click', closeResultBlockModal_Energy);
    var resultBlockModalWeight = document.querySelector('.result-block-modal--loose-weight');
    var openResultBlockModalWeight = document.querySelector('.question-mark--weight');
    var closeResultBlockModalWeight = document.querySelector('.close-modal--weight');
    openResultBlockModalWeight.addEventListener('click', openResultBlockModal_Weight);
    closeResultBlockModalWeight.addEventListener('click', closeResultBlockModal_Weight);
    var resultBlockModalResult = document.querySelector('.result-block-modal--result');
    var openResultBlockModalResult = document.querySelector('.question-mark--result');
    var closeResultBlockModalResult = document.querySelector('.close-modal--result');
    openResultBlockModalResult.addEventListener('click', openResultBlockModal_Result);
    closeResultBlockModalResult.addEventListener('click', closeResultBlockModal_Result);
  }
});
"use strict";

;

(function () {
  function webpSupportCheck() {
    var webp = true;
    Modernizr.on('webp', function (result) {
      if (result) {
        webp = true;
      } else {
        webp = false;
      }
    });
    return webp;
  }

  if ($('.program-calc__dish').length) {
    var bgImageChange = function bgImageChange() {
      var screenWidth = window.screen.width;

      if (webpSupportCheck() && screenWidth < 481 && window.devicePixelRatio == 1) {
        // console.log('WEBP');
        // console.log('< 481');
        // console.log('window.devicePixelRatio 1');
        // src = './img/dish-';
        imgType = '-480@1x.webp';
      }

      if (webpSupportCheck() && screenWidth < 481 && window.devicePixelRatio > 1) {
        // console.log('WEBP');
        // console.log('< 481');
        // console.log('window.devicePixelRatio > 1');
        // src = './img/dish-';
        imgType = '-480@2x.webp';
      }

      if (!webpSupportCheck() && screenWidth < 481 && window.devicePixelRatio == 1) {
        // console.log('jpg');
        // console.log('< 481');
        // console.log('window.devicePixelRatio 1');
        // src = './img/dish-';
        imgType = '-480@1x.jpg';
      }

      if (!webpSupportCheck() && screenWidth < 481 && window.devicePixelRatio > 1) {
        // console.log('jpg');
        // console.log('< 481');
        // console.log('window.devicePixelRatio > 1');
        // src = './img/dish-';
        imgType = '-480@2x.jpg';
      }
    };

    var bgImgChange = function bgImgChange() {
      var i = 1;
      timer = setInterval(function () {
        if (i >= 3) {
          i = 0;
        } // console.log(`url(${src}${i}${imgType})`);


        dish.style.backgroundImage = "url(".concat(src).concat(i + 1).concat(imgType);
        i++;
      }, 1500);
    };

    var dish = document.querySelector('.program-calc__dish');
    var src = './img/dish-';
    var imgType;
    var timer;
    bgImageChange();
    bgImgChange();

    if ($('.progress').length) {
      var percentage = document.querySelector('.progress');
      $('.progress').animate({
        num: 100 - 0
      }, {
        duration: 5000,
        step: function step(num) {
          this.innerHTML = (num + 0).toFixed(0) + '%';

          if (this.innerHTML == '100%') {
            clearInterval(timer);
            window.location.href = 'personal-profile.html';
          }
        }
      });
    }
  }
})();
"use strict";

$(document).ready(function () {
  if ($('.personal-profile').length) {
    var resultShow = function resultShow() {
      var body_Mass_Index = localStorage.getItem('BMI');
      var recommendedCaloriesStart = localStorage.getItem('caloriesDeficiteStart');
      var recommendedCaloriesEnd = localStorage.getItem('caloriesDeficiteEnd');
      var userMetabolism = localStorage.getItem('metabolism');
      var BMI_Message = localStorage.getItem('weightIndexMessage');
      var targetType = localStorage.getItem('target');
      var targetWeight = localStorage.getItem('target-weight');
      var weight = localStorage.getItem('weight');
      console.log(body_Mass_Index);
      console.log(recommendedCaloriesStart);
      console.log(recommendedCaloriesEnd);
      console.log(userMetabolism);
      console.log(BMI_Message);
      console.log(targetType);
      console.log(targetWeight);
      console.log(weight);
      userB_M_IResult.innerHTML = body_Mass_Index;
      caloriesResult.innerHTML = userMetabolism;
      recommendedCal.innerHTML = "".concat(Math.min(recommendedCaloriesStart, recommendedCaloriesEnd), " - ").concat(Math.max(recommendedCaloriesStart, recommendedCaloriesEnd));
      userB_M_IMes.innerHTML = BMI_Message;
      targetMessage.innerHTML = targetType;

      if (targetWeight == 1) {
        targetWeightResult.innerHTML = '-4кг';
      } else if (targetWeight == 2) {
        targetWeightResult.innerHTML = '+2кг';
      } else if (targetWeight == 3) {
        targetWeightResult.innerHTML = "".concat(weight, "\u043A\u0433");
      }
    };

    var userB_M_IResult = document.querySelector('.result-block__number--bmi'),
        caloriesResult = document.querySelector('.result-block__number--energy'),
        recommendedCal = document.querySelector('.result-block__number--loose-weight'),
        userB_M_IMes = document.querySelector('.result-block__text--bmi'),
        targetMessage = document.querySelector('.result-block__text--target'),
        targetWeightResult = document.querySelector('.result-block__number--weight');
    resultShow();
  }
});
"use strict";

$(document).ready(function () {
  if ($('.round-text-first').length) {
    var wrapLettersInSpanFirst = function wrapLettersInSpanFirst(text) {
      var arr = text.split('');

      for (var i = 0; i < textLength_1; i++) {
        arr[i] = "<span class='letter letter-first'>" + arr[i] + "</span>";
      }

      $('.round-text-first').html(arr.join(''));
    };

    var addTransformCssFirst = function addTransformCssFirst() {
      var transformStart = -90;
      var transformStep = 180 / (textLength_1 - 1);
      $('.letter-first').each(function (i, elem) {
        $(elem).css({
          transform: 'rotate(' + transformStart + 'deg)'
        });
        transformStart += transformStep;
      });
    };

    var wrapLettersInSpanSecond = function wrapLettersInSpanSecond(text) {
      var arr = text.split('');

      for (var i = 0; i < textLength_2; i++) {
        arr[i] = "<span class='letter letter-second'>" + arr[i] + "</span>";
      }

      $('.round-text-second').html(arr.join(''));
    };

    var addTransformCssSecond = function addTransformCssSecond() {
      var transformStart = -90;
      var transformStep = 180 / (textLength_2 - 1);
      $('.letter-second').each(function (i, elem) {
        $(elem).css({
          transform: 'rotate(' + transformStart + 'deg)'
        });
        transformStart += transformStep;
      });
    };

    var wrapLettersInSpanThird = function wrapLettersInSpanThird(text) {
      var arr = text.split('');

      for (var i = 0; i < textLength_3; i++) {
        arr[i] = "<span class='letter letter-third'>" + arr[i] + "</span>";
      }

      $('.round-text-third').html(arr.join(''));
    };

    var addTransformCssThird = function addTransformCssThird() {
      var transformStart = -90;
      var transformStep = 180 / (textLength_3 - 1);
      $('.letter-third').each(function (i, elem) {
        $(elem).css({
          transform: 'rotate(' + transformStart + 'deg)'
        });
        transformStart += transformStep;
      });
    };

    var text_1 = $('.round-text-first').html();
    var textLength_1 = text_1.length;
    wrapLettersInSpanFirst(text_1);
    addTransformCssFirst();
    var text_2 = $('.round-text-second').html();
    var textLength_2 = text_2.length;
    wrapLettersInSpanSecond(text_2);
    addTransformCssSecond();
    var text_3 = $('.round-text-third').html();
    var textLength_3 = text_3.length;
    wrapLettersInSpanThird(text_3);
    addTransformCssThird();
  }
});
"use strict";

$(document).ready(function () {
  var owl = $('.reviews-slider.owl-carousel');

  if (owl.length) {
    owl.owlCarousel({
      items: 1,
      autoWidth: true,
      margin: 5,
      nav: false,
      center: true
    });
  }
});
"use strict";

$(document).ready(function () {
  var owl = $('.owl-carousel');

  if (owl.length) {
    owl.owlCarousel({
      items: 1,
      autoHeight: true,
      touchDrag: false,
      mouseDrag: false,
      pullDrag: false,
      lazyLoad: true
    });
    $(".arrow__right").click(function () {
      owl.trigger("next.owl.carousel");
    });
    $(".arrow__left").click(function () {
      owl.trigger("prev.owl.carousel");
    });
    owl.on('changed.owl.carousel', function (e) {
      if ($('.owl-next').length) {
        var btnNext = document.querySelector('.owl-next');
        $('.counter').text(++e.page.index + ' из ' + e.item.count);

        if (+e.page.index == e.item.count && +e.page.index != 0) {
          btnNext.classList.add('owl-next--last');
        } else {
          btnNext.classList.remove('owl-next--last');
        }
      }
    });
  }
});
"use strict";

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
        l,
        d = function d() {
      clearTimeout(l);
      l = setTimeout(n, 100);
    },
        m = function m() {},
        t = function t() {
      window.addEventListener("resize", d, !1);
      window.addEventListener("orientationchange", d, !1);

      if (window.MutationObserver) {
        var k = new MutationObserver(d);
        k.observe(document.documentElement, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });

        m = function m() {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1);
          } catch (v) {}
        };
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function m() {
        document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);
        window.removeEventListener("resize", d, !1);
        window.removeEventListener("orientationchange", d, !1);
      };
    },
        u = function u(k) {
      function e(a) {
        if (void 0 !== a.protocol) var c = a;else c = document.createElement("a"), c.href = a;
        return c.protocol.replace(/:/g, "") + c.host;
      }

      if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest();
        var m = e(location);
        k = e(k);
        d = void 0 === d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest;
      }

      return d;
    };

    var n = function n() {
      function d() {
        --q;
        0 === q && (m(), t());
      }

      function l(a) {
        return function () {
          !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash));
        };
      }

      function p(a) {
        return function () {
          var c = document.body,
              b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);
          d();
        };
      }

      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }

      var a,
          c,
          q = 0;
      m();
      var f = document.getElementsByTagName("use");

      for (c = 0; c < f.length; c += 1) {
        try {
          var g = f[c].getBoundingClientRect();
        } catch (w) {
          g = !1;
        }

        var h = (a = f[c].getAttribute("href") || f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[c].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""];
        var b = h[0];
        h = h[1];
        var r = g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom;
        g && 0 === g.width && 0 === g.height && !r ? (f[c].hasAttribute("href") && f[c].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), b.length && (a = e[b], !0 !== a && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0), void 0 === a && (h = u(b), void 0 !== h && (a = new h(), e[b] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", b), a.send(), q += 1)))) : r ? b.length && e[b] && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0) : void 0 === e[b] ? e[b] = !0 : e[b].onload && (e[b].abort(), delete e[b].onload, e[b] = !0);
      }

      f = "";
      q += 1;
      d();
    };

    var p = function p() {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };

    "complete" !== document.readyState ? window.addEventListener("load", p, !1) : p();
  }
})();