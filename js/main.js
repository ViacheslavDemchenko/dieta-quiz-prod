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
      pullDrag: false
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