"use strict";

;

(function () {
  var container = document.querySelector('.container-fluid'),
      desktopMenu = document.querySelector('.desktop-menu'),
      desktopMenuLine = document.querySelector('.desktop-menu-line'),
      overlay = document.querySelector('.overlay-menu');
  container.addEventListener('mousemove', function (e) {
    var share = container.offsetWidth / 4;
    var target = container.getBoundingClientRect();
    var x = e.clientX - target.left;

    if (x >= 0 && x <= share) {
      desktopMenu.classList.remove('desktop-menu--show', 'desktop-menu--active');
      desktopMenuLine.classList.remove('desktop-menu-line--active');
      overlay.classList.remove('overlay-menu--active');
    } else if (x > share && x <= container.offsetWidth - share) {
      desktopMenu.classList.remove('desktop-menu--show', 'desktop-menu--active');
      desktopMenuLine.classList.remove('desktop-menu-line--active');
      overlay.classList.remove('overlay-menu--active');
    } else {
      // desktopMenu.classList.add('desktop-menu--show');
      desktopMenuLine.classList.add('desktop-menu-line--active');
    }
  });
  desktopMenuLine.addEventListener('click', function () {
    desktopMenu.classList.toggle('desktop-menu--active');
    desktopMenuLine.classList.add('desktop-menu-line--active');
    overlay.classList.toggle('overlay-menu--active');
  });
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