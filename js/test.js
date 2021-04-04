!(function (e) {
  function t(t) {
    for (
      var i, o, s = t[0], c = t[1], l = t[2], h = 0, m = [];
      h < s.length;
      h++
    )
      (o = s[h]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && m.push(a[o][0]),
        (a[o] = 0);
    for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
    for (u && u(t); m.length; ) m.shift()();
    return r.push.apply(r, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], i = !0, s = 1; s < n.length; s++) {
        var c = n[s];
        0 !== a[c] && (i = !1);
      }
      i && (r.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var i = {},
    a = { 52: 0 },
    r = [];
  function o(t) {
    if (i[t]) return i[t].exports;
    var n = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.e = function (e) {
    var t = [],
      n = a[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var i = new Promise(function (t, i) {
          n = a[e] = [t, i];
        });
        t.push((n[2] = i));
        var r,
          s = document.createElement("script");
        (s.charset = "utf-8"),
          (s.timeout = 120),
          o.nc && s.setAttribute("nonce", o.nc),
          (s.src = (function (e) {
            return (
              o.p +
              "" +
              ({
                1: "locale-ar-EG",
                2: "locale-az-Latn-AZ",
                3: "locale-bg-BG",
                4: "locale-bn-IN",
                5: "locale-ca-ES",
                6: "locale-cs-CZ",
                7: "locale-cy-GB",
                8: "locale-da-DK",
                9: "locale-de-DE",
                10: "locale-el-GR",
                11: "locale-en-PI",
                12: "locale-en-US",
                13: "locale-es-ES",
                14: "locale-et-EE",
                15: "locale-fa-IR",
                16: "locale-fi-FI",
                17: "locale-fil-PH",
                18: "locale-fr-FR",
                19: "locale-gl-ES",
                20: "locale-gu-IN",
                21: "locale-he-IL",
                22: "locale-hi-IN",
                23: "locale-hr-HR",
                24: "locale-hu-HU",
                25: "locale-id-ID",
                26: "locale-it-IT",
                27: "locale-ja-JP",
                28: "locale-ka-GE",
                29: "locale-ko-KR",
                30: "locale-lt-LT",
                31: "locale-lv-LV",
                32: "locale-mn-MN",
                33: "locale-ms-MY",
                34: "locale-nb-NO",
                35: "locale-nl-NL",
                36: "locale-pl-PL",
                37: "locale-pt-PT",
                38: "locale-ro-RO",
                39: "locale-ru-RU",
                40: "locale-sl-SI",
                41: "locale-sq-AL",
                42: "locale-sr-Latn-RS",
                43: "locale-sv-SE",
                44: "locale-th-TH",
                45: "locale-tr-TR",
                46: "locale-uk-UA",
                47: "locale-vi-VN",
                48: "locale-zh-CN",
                49: "locale-zh-HK",
                56: "vendors~firebase",
                57: "vendors~vibrant",
              }[e] || e) +
              "-" +
              {
                1: "8faa4b0078406b4a689c",
                2: "352d1dcef82ce1152ed5",
                3: "5c9e46220c2b45aea373",
                4: "0b7fc5b99ca576fa3383",
                5: "25bf939d0546a6ccd322",
                6: "d68fe61f66ae754730ce",
                7: "427a219b3edd478207be",
                8: "f0cac6ac0a312b9694d8",
                9: "db967484ee898311d3f8",
                10: "8dd044da4f63f0b939eb",
                11: "d04eb671a07d8c0a7383",
                12: "7d5517e32f8e5943550a",
                13: "830f640fd64b53d1c398",
                14: "ca18e78bf130bebd85f3",
                15: "65f1ec231701f4e8eb5e",
                16: "19036256daaf328620ea",
                17: "94322cb8a4fcd6202fb1",
                18: "e6713afd8fe9c1320e15",
                19: "28a539fd1efcc1f5f0f5",
                20: "5f0ccb8003ab2d9cb94c",
                21: "64377c033d95237ef2f5",
                22: "e75e46784db3c2ce06a9",
                23: "b640b1c96860d22594b6",
                24: "a90f8a070c1aa0f2b029",
                25: "2de9389a06c1c8f37f53",
                26: "a56dff7139cc6a914827",
                27: "b7c202d222fab20ecb2c",
                28: "6515878dad597ea8172f",
                29: "f5f6f34aebbefb32d71e",
                30: "a0be27e68e5a74622345",
                31: "6107032ed2da0c082dd0",
                32: "1e3851fd9646b94b9a99",
                33: "00003c86b73ae64ab9e1",
                34: "fe87809fc77b20d853b7",
                35: "88c40b00bb853f14ede6",
                36: "dbffcac74f3a1edcd5cc",
                37: "9115f0abed133cb1c688",
                38: "b92f897dbbecfacbfac7",
                39: "213a016aceca617afd96",
                40: "dbfdcc0a47796c9f8f74",
                41: "e8fa03eca530c343d3f6",
                42: "6bf5aaa49b06df016691",
                43: "e760d57f5ee12efeca04",
                44: "25c967a8ceb3fb6243df",
                45: "d57764dfb9996f5acb2a",
                46: "b05198d1da911e53d175",
                47: "1e9c884b6141c17dda37",
                48: "05eda8ddfc188d51bb94",
                49: "a998b0686df321e5ec94",
                56: "def562a043ddc632b7bf",
                57: "69e3ee48acba18473724",
              }[e] +
              ".js"
            );
          })(e));
        var c = new Error();
        r = function (t) {
          (s.onerror = s.onload = null), clearTimeout(l);
          var n = a[e];
          if (0 !== n) {
            if (n) {
              var i = t && ("load" === t.type ? "missing" : t.type),
                r = t && t.target && t.target.src;
              (c.message =
                "Loading chunk " + e + " failed.\n(" + i + ": " + r + ")"),
                (c.name = "ChunkLoadError"),
                (c.type = i),
                (c.request = r),
                n[1](c);
            }
            a[e] = void 0;
          }
        };
        var l = setTimeout(function () {
          r({ type: "timeout", target: s });
        }, 12e4);
        (s.onerror = s.onload = r), document.head.appendChild(s);
      }
    return Promise.all(t);
  }),
    (o.m = e),
    (o.c = i),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          o.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "/"),
    (o.oe = function (e) {
      throw (console.error(e), e);
    });
  var s = (window.webpackJsonp = window.webpackJsonp || []),
    c = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var l = 0; l < s.length; l++) t(s[l]);
  var u = c;
  r.push([426, 0]), n();
})({
  0: function (e, t, n) {
    "use strict";
    n.d(t, "k", function () {
      return l;
    }),
      n.d(t, "c", function () {
        return u;
      }),
      n.d(t, "a", function () {
        return h;
      }),
      n.d(t, "b", function () {
        return m;
      }),
      n.d(t, "h", function () {
        return f;
      }),
      n.d(t, "i", function () {
        return d;
      }),
      n.d(t, "r", function () {
        return p;
      }),
      n.d(t, "l", function () {
        return g;
      }),
      n.d(t, "d", function () {
        return v;
      }),
      n.d(t, "e", function () {
        return w;
      }),
      n.d(t, "s", function () {
        return b;
      }),
      n.d(t, "o", function () {
        return y;
      }),
      n.d(t, "q", function () {
        return _;
      }),
      n.d(t, "j", function () {
        return k;
      }),
      n.d(t, "n", function () {
        return C;
      }),
      n.d(t, "p", function () {
        return S;
      }),
      n.d(t, "t", function () {
        return F;
      }),
      n.d(t, "u", function () {
        return x;
      }),
      n.d(t, "m", function () {
        return $;
      }),
      n.d(t, "g", function () {
        return N;
      }),
      n.d(t, "f", function () {
        return E;
      }),
      n.d(t, "v", function () {
        return D;
      });
    n(51);
    var i = n(11),
      a = n.n(i);
    function r(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return s(e);
        })(e) ||
        (function (e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        })(e) ||
        o(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function o(e, t) {
      if (e) {
        if ("string" == typeof e) return s(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? s(e, t)
            : void 0
        );
      }
    }
    function s(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    var c = {};
    function l(e) {
      if (!(e in c)) {
        var t;
        try {
          var n = new DOMParser().parseFromString(e, "text/html");
          t = n.documentElement.textContent;
        } catch (n) {
          (t = e),
            [
              ["&amp;", "&"],
              ["&nbsp;", " "],
              ["&lt;", "<"],
              ["&gt;", ">"],
            ].forEach(function (e) {
              var n = new RegExp(e[0], "g");
              t = t.replace(n, e[1]);
            });
        }
        c[e] = t;
      }
      return c[e];
    }
    function u(e) {
      return -1 == e.indexOf("OS 12_2 like Mac OS X");
    }
    function h(e, t) {
      if (e === t) return !0;
      if (null == e || null == t) return !1;
      if (e.length != t.length) return !1;
      for (var n = 0; n < e.length; ++n) if (e[n] !== t[n]) return !1;
      return !0;
    }
    function m(e, t, n, i, a) {
      return (
        Math.sqrt(Math.pow(t, 2) - Math.pow(a / 2, 2)) -
          Math.max((a * Math.cos(e)) / (2 * Math.sin(e)), n) >=
        i
      );
    }
    function f(e, t) {
      if (e) {
        var n = e.match(/<img.*?src="(.*?)".*?>/);
        n && (e = e.replace(n[0], ""));
      }
      var i = "";
      if (e) {
        if (((i = l(e)), t)) {
          i.length > 18 && (i = i.substring(0, 17) + "…");
        }
        i = " " + i + " ";
      }
      return i;
    }
    function d(e) {
      var t = "";
      if (e) {
        var n = e.match(/<img.*?src="(.*?)".*?>/);
        n && (t = n[1]);
      }
      return t;
    }
    function p(e) {
      for (var t = e.slice(0), n = t.length - 1; n > 0; n--) {
        var i = Math.floor(Math.random() * (n + 1)),
          a = t[n];
        (t[n] = t[i]), (t[i] = a);
      }
      return t;
    }
    function g(e, t) {
      return e.reduce(function (e, n) {
        return e + (n == t ? 1 : 0);
      }, 0);
    }
    function v() {
      return !!window.document.documentMode;
    }
    function w(e) {
      if (!e) return !1;
      var t = new RegExp(" MSIE \\d|Trident/|Edge/");
      return !!e.match(t);
    }
    function b(e) {
      return e.slice(0).sort(function (e, t) {
        return e.localeCompare(t, "en", { numeric: !0, sensitivity: "base" });
      });
    }
    function y() {
      return (
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch) ||
        navigator.maxTouchPoints > 0 ||
        window.navigator.msMaxTouchPoints > 0
      );
    }
    function _(e) {
      var t = e;
      return (
        ".." == (t = t.replace(/\//g, "\\")) && (t = ".. "),
        "." == t && (t = ". "),
        "" == t && (t = "?"),
        t.length > 100 && (t = t.substring(0, 97) + "..."),
        t
      );
    }
    function k(e, t) {
      return (
        e || (e = []),
        t || (t = []),
        t.filter(function (t) {
          return !e.includes(t);
        })
      );
    }
    function C() {
      window.onerror = function (e, t, n, i, r) {
        try {
          a.a.captureException(r || e || ""),
            r && (e = r.toString()),
            F("window.onerror", e, navigator.userAgent);
        } catch (e) {
          console.error(e);
        }
      };
    }
    function S(e) {
      a.a.init("vxpk5d/production"), a.a.identify(e);
    }
    function F(e, t, n) {
      if (!location.host.startsWith("localhost")) {
        "undefined" != typeof ga && ga("send", "event", e, t, n);
        var i = e;
        t && (i += " - " + t), n && (i += " - " + n), a.a.track(i);
      }
    }
    function x(e, t) {
      a.a.captureException(e, t), console.error(e);
    }
    function $() {
      try {
        Cookiebot.hasResponse || Cookiebot.submitCustomConsent(!0, !0, !0),
          Cookiebot.hide();
      } catch (e) {}
    }
    function N(e) {
      return e
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }
    function E(e) {
      return !e || "#ffffff" == e.toLowerCase();
    }
    function D(e, t, n) {
      var i = r(document.styleSheets).find(function (e) {
          return (
            e.href &&
            (e.href.includes("index.css") || e.href.includes("admin.css"))
          );
        }),
        a = r(i.rules).find(function (e) {
          return ".can-go-dark" == e.selectorText;
        });
      e
        ? ((a.style.color = "#fff"),
          (a.style.backgroundColor = t),
          (document.documentElement.style.backgroundColor = "#000"),
          (document.body.style.backgroundColor = "#000"))
        : ((a.style.color = ""),
          (a.style.backgroundColor = ""),
          (document.documentElement.style.backgroundColor = n),
          (document.body.style.backgroundColor = n));
    }
  },
  10: function (e, t, n) {
    "use strict";
    function i(e, t, n, i, a, r, o) {
      try {
        var s = e[r](o),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(i, a);
    }
    function a(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (a, r) {
          var o = e.apply(t, n);
          function s(e) {
            i(o, a, r, s, c, "next", e);
          }
          function c(e) {
            i(o, a, r, s, c, "throw", e);
          }
          s(void 0);
        });
      };
    }
    function r(e) {
      return o.apply(this, arguments);
    }
    function o() {
      return (o = a(
        regeneratorRuntime.mark(function e(t) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    new Promise(function (e, n) {
                      var i = new Image();
                      (i.onload = function () {
                        var n = d(i.width, i.height, 200);
                        w(n, i), e(y(n, t));
                      }),
                        (i.src = t);
                    })
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function s(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (c = a(
        regeneratorRuntime.mark(function e(t) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    new Promise(function (e, n) {
                      var i = new Image();
                      (i.onload = function () {
                        var t = p(370);
                        g(i) || w(t, i, "blur(4px)"), b(t, i), e(y(t));
                      }),
                        (i.src = t);
                    })
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function l(e, t) {
      var n = document.createElement("canvas");
      return (n.width = e), (n.height = t), n;
    }
    function u(e) {
      var t = document.createElement("canvas").getContext("2d");
      t.drawImage(e, 0, 0);
      var n,
        i,
        a,
        r = t.getImageData(0, 0, 1, 1).data;
      return (
        (n = r[0]),
        (i = r[1]),
        (a = r[2]),
        n == i && n == a && n > 230
          ? "#FFFFFFFF"
          : (function (e, t, n, i) {
              return "#".concat(v(e)).concat(v(t)).concat(v(n)).concat(v(i));
            })(r[0], r[1], r[2], r[3])
      );
    }
    function h(e) {
      var t = !1,
        n = e.match(/#\w\w\w\w\w\w(\w\w)/);
      return n && (t = "00" == n[1]), t;
    }
    function m(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (f = a(
        regeneratorRuntime.mark(function e(t) {
          var i, r;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), n.e(57).then(n.t.bind(null, 192, 7));
                case 2:
                  return (
                    (i = e.sent.default),
                    ((r = new Image()).src = t),
                    e.abrupt(
                      "return",
                      new Promise(function (e, t) {
                        r.onload = a(
                          regeneratorRuntime.mark(function t() {
                            var n, a;
                            return regeneratorRuntime.wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (n = new i(r)),
                                      (t.next = 3),
                                      n.getPalette()
                                    );
                                  case 3:
                                    (a = t.sent),
                                      e([
                                        a.Vibrant.hex,
                                        a.LightVibrant.hex,
                                        a.DarkVibrant.hex,
                                        a.Muted.hex,
                                        a.LightMuted.hex,
                                        a.DarkMuted.hex,
                                      ]);
                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        );
                      })
                    )
                  );
                case 6:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function d(e, t, n) {
      var i = n / e,
        a = n / t,
        r = Math.max(i, a),
        o = document.createElement("canvas");
      return (o.width = e * r), (o.height = t * r), o;
    }
    function p(e) {
      var t = document.createElement("canvas");
      return (t.width = e), (t.height = e), t;
    }
    function g(e) {
      var t = u(e);
      return "#FFFFFFFF" == t || "FF" == t.slice(7);
    }
    n.d(t, "f", function () {
      return r;
    }),
      n.d(t, "e", function () {
        return s;
      }),
      n.d(t, "a", function () {
        return l;
      }),
      n.d(t, "c", function () {
        return u;
      }),
      n.d(t, "d", function () {
        return h;
      }),
      n.d(t, "b", function () {
        return m;
      });
    var v = function (e) {
      return Number(e).toString(16).padStart(2, "0");
    };
    function w(e, t, n) {
      var i = e.getContext("2d");
      i.save(),
        n && (i.filter = n),
        i.drawImage(t, -2, -2, e.width + 4, e.height + 4),
        i.restore();
    }
    function b(e, t) {
      var n = e.width,
        i = n / Math.max(t.width, t.height),
        a = t.width * i,
        r = (n - a) / 2,
        o = t.height * i,
        s = (n - o) / 2;
      e.getContext("2d").drawImage(t, r, s, a, o);
    }
    function y(e, t) {
      var n;
      return (
        (n =
          e.getContext("2d").getImageData(0, 0, 1, 1).data[3] < 5
            ? e.toDataURL("image/png")
            : e.toDataURL("image/jpeg", 0.5)),
        t && t.length < n.length ? t : n
      );
    }
  },
  12: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return c;
    }),
      n.d(t, "a", function () {
        return l;
      }),
      n.d(t, "e", function () {
        return u;
      }),
      n.d(t, "d", function () {
        return h;
      }),
      n.d(t, "c", function () {
        return m;
      }),
      n.d(t, "g", function () {
        return f;
      }),
      n.d(t, "h", function () {
        return d;
      }),
      n.d(t, "f", function () {
        return g;
      });
    n(226);
    var i,
      a = n(0),
      r =
        (n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        {}),
      o = [
        { name: "sounds.No sound", value: "no-sound" },
        { name: "sounds.Ticking sound", value: "ticking-sound" },
        {
          name: "sounds.Arabic celebration",
          value: "arabic-celebration",
          musicFile: "/408_short2_arabic-celebration_0030.mp3",
        },
        {
          name: "sounds.BehBuBah",
          value: "behbubah-music",
          musicFile: "/258_short2_behbubah_0030.mp3",
        },
        {
          name: "sounds.Bollywood music",
          value: "bollywood-music",
          musicFile: "/271_short2_diwali_0033.mp3",
        },
        {
          name: "sounds.Cheerful music",
          value: "cheerful-music",
          musicFile: "/life-of-riley-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Christmas music",
          value: "christmas-music",
          musicFile:
            "/oh-christmas-tree-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Circus music",
          value: "circus-music",
          musicFile: "/super-circus-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Crazy Clown",
          value: "crazy-clown",
          musicFile: "/223_short3_crazy-clown_0064.mp3",
        },
        {
          name: "sounds.Disco music",
          value: "disco-music",
          musicFile: "/stringed-disco-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Dramatic music",
          value: "dramatic-music",
          musicFile:
            "/strength-of-the-titans-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Drum & Bass",
          value: "drum-n-bass-music",
          musicFile: "/382_short3_overclock_0064.mp3",
        },
        {
          name: "sounds.Dubstep music",
          value: "dubstep-music",
          musicFile: "/deep-and-dirty-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Duduk Oud and Dumbek",
          value: "duduk-oud-and-dumbek",
          musicFile: "/241_short2_dance-of-the-harpy_0030.mp3",
        },
        {
          name: "sounds.Electronic dance music",
          value: "edm-music",
          musicFile:
            "/raving-energy-faster-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Elevator hip hop",
          value: "elevator-hip-hop",
          musicFile: "/phat-sketch-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Fast piano music",
          value: "fast-piano-music",
          musicFile: "/le-grand-chase-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Funk music",
          value: "funk-music",
          musicFile: "/celebration-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Funk the Buzz",
          value: "funk-the-buzz",
          musicFile: "/239_short2_funk-the-buzz_0030.mp3",
        },
        {
          name: "sounds.Game show music",
          value: "game-show-music",
          musicFile:
            "/happy-happy-game-show-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Give it a try",
          value: "give-it-a-try",
          musicFile: "/279_short2_give-it-a-try_0030.mp3",
        },
        {
          name: "sounds.Great Wall of China",
          value: "great-wall-of-china",
          musicFile: "/12_short2_great-wall-of-china_0040.mp3",
        },
        {
          name: "sounds.Greek music",
          value: "greek-music",
          musicFile: "/402_short2_serviko_0029.mp3",
        },
        {
          name: "sounds.Grooving",
          value: "grooving",
          musicFile: "/son-of-a-rocket-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Groundwork",
          value: "groundwork",
          musicFile: "/groundwork-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Grunge",
          value: "grunge",
          musicFile:
            "/irrepressible-fight-again-by-winniethemoog-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Hanukkah music",
          value: "hanukkah-music",
          musicFile: "/251_short2_dreidel-song_0031.mp3",
        },
        {
          name: "sounds.Happy Bee",
          value: "happy-bee",
          musicFile: "/happy-bee-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.In love with the good life",
          value: "in-love-with-the-good-life",
          musicFile: "/339_short2_in-love-with-the-good-life_0030.mp3",
        },
        {
          name: "sounds.Inspiration",
          value: "inspiration",
          musicFile: "/inspiration--by-rafael-krux-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Irish folk music",
          value: "irish-folk-music",
          musicFile: "/galway-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Like we do it",
          value: "like-we-do-it",
          musicFile: "/339_short2_like-we-do-it_0032.mp3",
        },
        {
          name: "sounds.Lobby music",
          value: "lobby-music",
          musicFile: "/lobby-time-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Merry-go-round",
          value: "merry-go-round",
          musicFile: "/merry-go-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Mexican music",
          value: "mexican-music",
          musicFile: "/345_short2_banda-macho_0034.mp3",
        },
        {
          name: "sounds.Modern India",
          value: "modern-india",
          musicFile: "/438_short2_modern-india_0033.mp3",
        },
        {
          name: "sounds.Piano music",
          value: "piano-music",
          musicFile: "/amazing-plan-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Polka",
          value: "polka",
          musicFile: "/tada-polka-by-philip-rice-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Reggae music",
          value: "reggae-music",
          musicFile: "/easy-jam-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Reggaeton music",
          value: "reggaeton-music",
          musicFile: "/406_short2_sun-island-waves_0033.mp3",
        },
        {
          name: "sounds.Relaxing music",
          value: "relaxing-music",
          musicFile: "/glitter-blast-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Rock music",
          value: "rock-music",
          musicFile:
            "/welcome-to-the-show-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Romantic music",
          value: "romantic-music",
          musicFile: "/514_short2_ripples-in-time_0031.mp3",
        },
        {
          name: "sounds.Ska music",
          value: "ska-music",
          musicFile: "/upbeat-forever-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.South American music",
          value: "south-american-music",
          musicFile: "/verano-sensual-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Spaceship",
          value: "spaceship",
          musicFile: "/258_short2_spaceship_0035.mp3",
        },
        {
          name: "sounds.Spooky music",
          value: "spooky-music",
          musicFile:
            "/wretched-destroyer-by-kevin-macleod-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Surf pop",
          value: "surf-pop-music",
          musicFile: "/136_short2_surf-wax_0033.mp3",
        },
        {
          name: "sounds.Video game music",
          value: "video-game-music",
          musicFile: "/47_short2_8-bits-racing-car-game-theme_0029.mp3",
        },
        {
          name: "sounds.We cant slow down",
          value: "we-can-t-slow-down",
          musicFile: "/329_short2_we-can-t-slow-down_0029.mp3",
        },
        {
          name: "sounds.Whistling",
          value: "whistling",
          musicFile:
            "/happy-whistling-ukulele--by-rafael-krux-from-filmmusic-io.mp3",
        },
        {
          name: "sounds.Winter holiday music",
          value: "winter-holiday-music",
          musicFile: "/157_short2_deck-the-hall_0032.mp3",
        },
      ],
      s = [
        { name: "sounds.No sound", value: "no-sound" },
        {
          name: "sounds.Subdued applause",
          value: "applause-sound-soft",
          file: "/SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408-soft.mp3",
        },
        {
          name: "sounds.Applause",
          value: "applause-sound",
          file: "/SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3",
        },
        {
          name: "sounds.Fanfare",
          value: "fanfare-sound",
          file: "/350428__benjaminharveydesign__trumpet-fanfare.mp3",
        },
        {
          name: "sounds.Bell ringing",
          value: "bell-sound",
          file: "/370743__podsburgh__winner-metal-bell-ringing-remix.mp3",
        },
        {
          name: "sounds.Cymbals",
          value: "cymbal-sound",
          file: "/425432__trivialaccapella__18-crash-hit-soft.mp3",
        },
        {
          name: "sounds.Old phone ringing",
          value: "old-phone-sound",
          file: "/274436__hockinfinger__stromberg-carlson-1543.mp3",
        },
        {
          name: "sounds.Alarm clock",
          value: "alarm-clock-sound",
          file: "/468081__kinoton__egg-timer-ticking-ringing.mp3",
        },
        {
          name: "sounds.Military trumpet",
          value: "military-trumpet-sound",
          file: "/008723787-bugle-military.mp3",
        },
        {
          name: "sounds.Fireworks",
          value: "fireworks-sound",
          file: "/008747751-fireworks.mp3",
        },
        {
          name: "sounds.Basketball buzzer",
          value: "basketball-buzzer-sound",
          file: "/012744931-basketball-court-buzzer.mp3",
        },
        {
          name: "sounds.Hooray",
          value: "hooray-sound",
          file: "/079197409-voice-clip-crowd-hooray.mp3",
        },
        {
          name: "sounds.Childrens hooray",
          value: "childrens-hooray-sound",
          file: "/010799171-children-loud-hooray.mp3",
        },
        {
          name: "sounds.Read out the winning name",
          value: "read-winner-sound",
        },
      ];
    function c() {
      return o;
    }
    function l() {
      return s;
    }
    function u() {
      p("/ding.mp3");
    }
    function h() {
      p("/Tick-DeepFrozenApps-397275646.mp3");
    }
    function m(e, t) {
      if ("read-winner-sound" == e) {
        if (window.speechSynthesis) {
          var n = new SpeechSynthesisUtterance(t);
          window.speechSynthesis.speak(n);
        }
      } else {
        var i = s.find(function (t) {
          return t.value == e;
        }).file;
        i && p(i);
      }
    }
    function f(e) {
      var t = o.find(function (t) {
        return t.value == e;
      }).musicFile;
      t && (i = new Howl({ src: [t], autoplay: !0 }));
    }
    function d() {
      i && i.fade(1, 0, 1e3), (i = null);
    }
    function p(e) {
      try {
        r[e] ? r[e].play() : (r[e] = new Howl({ src: [e], autoplay: !0 }));
      } catch (e) {
        a.u(e);
      }
    }
    function g(e, t) {
      try {
        v(
          o.find(function (t) {
            return t.value == e;
          }).musicFile
        ),
          "ticking-sound" == e && v("/ding.mp3"),
          v(
            s.find(function (e) {
              return e.value == t;
            }).file
          );
      } catch (e) {
        a.u(e);
      }
    }
    function v(e) {
      e && !r[e] && (r[e] = new Howl({ src: [e] }));
    }
  },
  127: function (e, t, n) {
    "use strict";
    var i = n(21);
    n.n(i).a;
  },
  128: function (e, t, n) {
    "use strict";
    var i = n(5),
      a = n(48),
      r = n(11),
      o = n.n(r),
      s = n(154),
      c = n.n(s),
      l = n(18),
      u = n(39),
      h = n(0);
    i.a.use(a.a),
      (t.a = new a.a.Store({
        plugins: [c()(o.a)],
        state: {
          wheelConfig: new l.a(),
          preferences: new u.a(),
          appStatus: {
            fullScreen: !1,
            online: !0,
            wheelSpinning: !1,
            sheetLinked: !1,
            userIsLoggedIn: !1,
            userPhotoUrl: "",
            userDisplayName: "",
            userUid: "",
            darkMode: !1,
            winners: [],
          },
          version: "118",
        },
        getters: {
          entryCount: function (e) {
            return e.wheelConfig.names.length;
          },
          winnerCount: function (e) {
            return e.appStatus.winners.length;
          },
          darkMode: function (e) {
            return e.preferences.darkMode;
          },
        },
        mutations: {
          setWheelConfig: function (e, t) {
            e.wheelConfig = t;
          },
          setWheelTitle: function (e, t) {
            var n = e.wheelConfig.clone();
            (n.title = t), (e.wheelConfig = n);
          },
          setNames: function (e, t) {
            e.wheelConfig.names = t;
          },
          shuffleNames: function (e) {
            e.wheelConfig.names = h.r(e.wheelConfig.names);
          },
          sortNames: function (e) {
            e.wheelConfig.names = h.s(e.wheelConfig.names);
          },
          appendNames: function (e, t) {
            var n = e.wheelConfig.names.concat(t);
            e.wheelConfig.names = n;
          },
          removeName: function (e, t) {
            var n = e.wheelConfig.names.slice(0);
            n.splice(n.indexOf(t), 1),
              (e.wheelConfig.names = n),
              (e.appStatus.sheetLinked = !1);
          },
          removeNameAll: function (e, t) {
            (e.wheelConfig.names = e.wheelConfig.names.filter(function (e) {
              return e != t;
            })),
              (e.appStatus.sheetLinked = !1);
          },
          enterFullScreen: function (e) {
            e.appStatus.fullScreen = !0;
          },
          exitFullScreen: function (e) {
            e.appStatus.fullScreen = !1;
          },
          setOnline: function (e, t) {
            e.appStatus.online = t;
          },
          startWheelSpin: function (e) {
            e.appStatus.wheelSpinning = !0;
          },
          stopWheelSpin: function (e) {
            e.appStatus.wheelSpinning = !1;
          },
          linkSheet: function (e) {
            e.appStatus.sheetLinked = !0;
          },
          unlinkSheet: function (e) {
            e.appStatus.sheetLinked = !1;
          },
          logInUser: function (e, t) {
            (e.appStatus.userIsLoggedIn = !0),
              (e.appStatus.userPhotoUrl = t.photoUrl),
              e.appStatus.userPhotoUrl ||
                (e.appStatus.userPhotoUrl = "/images/user_profile.png"),
              (e.appStatus.userDisplayName = t.displayName),
              (e.appStatus.userUid = t.uid);
          },
          logOutUser: function (e) {
            (e.appStatus.userIsLoggedIn = !1),
              (e.appStatus.userPhotoUrl = ""),
              (e.appStatus.userDisplayName = ""),
              (e.appStatus.userUid = "");
          },
          setPreferences: function (e, t) {
            e.preferences = t;
          },
          toggleAppInfoVisibility: function (e) {
            var t = e.preferences.clone();
            (t.appInfoVisible = !t.appInfoVisible), (e.preferences = t);
          },
          toggleDarkMode: function (e) {
            var t = e.preferences.clone();
            (t.darkMode = !t.darkMode), (e.preferences = t);
          },
          addWinner: function (e, t) {
            var n = e.appStatus.winners.slice(0);
            n.push(t), (e.appStatus.winners = n);
          },
          clearWinners: function (e) {
            e.appStatus.winners = [];
          },
        },
      }));
  },
  129: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var i,
      a,
      r = n(155);
    function o(e) {
      var t;
      (a = e),
        (i = Date.now() + 5e3),
        (t = setInterval(function () {
          if (Date.now() > i) return clearInterval(t);
          Object(r.a)({
            startVelocity: 30,
            particleCount: 100,
            spread: 360,
            ticks: 60,
            origin: { x: Math.random(), y: Math.random() - 0.2 },
            colors: a,
          });
        }, 200));
    }
  },
  130: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    });
    var i = n(47),
      a = n(19);
    function r(e, t, n, i, a, r, o) {
      try {
        var s = e[r](o),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(i, a);
    }
    function o(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, a) {
          var o = e.apply(t, n);
          function s(e) {
            r(o, i, a, s, c, "next", e);
          }
          function c(e) {
            r(o, i, a, s, c, "throw", e);
          }
          s(void 0);
        });
      };
    }
    function s(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (c = o(
        regeneratorRuntime.mark(function e(t) {
          var n, r, o, s;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!(o = new i.a(t)).sharedWheel) {
                    e.next = 9;
                    break;
                  }
                  return (e.next = 4), a.getSharedWheel(o.sharedWheel);
                case 4:
                  if (
                    (0 == (s = e.sent).editable &&
                      (o.setPathPrefix("view"), (r = o.getAbsoluteUrl())),
                    s.wheelConfig)
                  ) {
                    e.next = 8;
                    break;
                  }
                  throw 'Wheel "'.concat(o.sharedWheel, '" not found!');
                case 8:
                  n = s.wheelConfig;
                case 9:
                  return e.abrupt("return", {
                    redirectUrl: r,
                    wheelConfig: n,
                    sharedWheelPath: o.sharedWheel,
                  });
                case 10:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
  },
  131: function (e, t, n) {
    "use strict";
    var i = function () {
      var e = this.$createElement,
        t = this._self._c || e;
      return t(
        "div",
        [
          "setup" == this.adVendor ? t("mobileSetupAd") : this._e(),
          this._v(" "),
          "oko" == this.adVendor ? t("mobileOkoAd") : this._e(),
        ],
        1
      );
    };
    i._withStripped = !0;
    var a = function () {
      var e = this.$createElement,
        t = this._self._c || e;
      return t(
        "div",
        [
          t("iframe", {
            attrs: {
              id: "wheelofnames.com_320x100_anchor_mobile_DFP",
              frameborder: "0",
              scrolling: "no",
              marginheight: "0",
              marginwidth: "0",
              topmargin: "0",
              leftmargin: "0",
              width: "320",
              height: "100",
            },
          }),
          this._v(" "),
          t("script", { tag: "component" }, [
            this._v(
              "\n    (function () {\n      var size='320x100',\n        adunit = 'wheelofnames.com_320x100_anchor_mobile_DFP',\n        xmlhttp = new XMLHttpRequest();xmlhttp.onreadystatechange = function(){if (xmlhttp.readyState == 4 && xmlhttp.status == 200){var iframe = document.getElementById(adunit).contentWindow.document;iframe.open();iframe.write(xmlhttp.responseText);iframe.close();}};xmlhttp.open(\"GET\", 'https://pubads.g.doubleclick.net/gampad/adx?iu=/147246189/'+adunit+'&sz='+encodeURI(size)+'&t=Placement_type%3Dserving&'+Date.now(), true);xmlhttp.send();})();\n    console.log('Setupad mobile');\n  "
            ),
          ]),
        ],
        1
      );
    };
    a._withStripped = !0;
    var r = n(1),
      o = Object(r.a)({}, a, [], !1, null, null, null);
    o.options.__file = "static/mobileSetupAd.vue";
    var s = o.exports,
      c = function () {
        var e = this.$createElement,
          t = this._self._c || e;
        return t("div", { staticClass: "oko-adhesion" }, [
          t(
            "div",
            {
              staticClass: "adhesion-close-button",
              attrs: { onclick: "this.parentElement.style.display = 'none';" },
            },
            [this._v("X")]
          ),
          this._v(" "),
          t(
            "div",
            { attrs: { id: "div-gpt-ad-oko-adhesion" } },
            [
              t("script", { tag: "component" }, [
                this._v(
                  "\n      googletag.cmd.push(function() {\n          var mappingadhesion = googletag.sizeMapping().addSize([1025, 0], []).addSize([768, 0], [728, 90]).addSize([0, 0], [320, 50]).build();\n          googletag.defineSlot('/2507246/WON//misc//adhesion', [320, 50], 'div-gpt-ad-oko-adhesion').defineSizeMapping(mappingadhesion).addService(googletag.pubads());\n          googletag.enableServices();\n          googletag.display('div-gpt-ad-oko-adhesion');\n      });\n      console.log('OKO mobile');\n    "
                ),
              ]),
            ],
            1
          ),
        ]);
      };
    c._withStripped = !0;
    n(185);
    var l = Object(r.a)({}, c, [], !1, null, null, null);
    l.options.__file = "static/mobileOkoAd.vue";
    var u = {
        components: { mobileSetupAd: s, mobileOkoAd: l.exports },
        computed: {
          adVendor: function () {
            return location.pathname.includes("oko")
              ? "oko"
              : location.pathname.includes("setup")
              ? "setup"
              : Math.random() < 0.25
              ? "oko"
              : "setup";
          },
        },
      },
      h = Object(r.a)(u, i, [], !1, null, null, null);
    h.options.__file = "static/mobileAd.vue";
    t.a = h.exports;
  },
  132: function (e, t, n) {
    "use strict";
    var i = function () {
      var e = this,
        t = e.$createElement,
        n = e._self._c || t;
      return n(
        "b-modal",
        {
          attrs: { active: e.winnerDialogVisible, width: 640, scroll: "keep" },
          on: {
            "update:active": function (t) {
              e.winnerDialogVisible = t;
            },
          },
        },
        [
          n(
            "div",
            { staticClass: "modal-card", staticStyle: { width: "auto" } },
            [
              n("header", { staticClass: "modal-card-head" }, [
                n(
                  "div",
                  {
                    staticClass: "modal-card-title",
                    staticStyle: { width: "100%" },
                  },
                  [
                    n("h5", { staticClass: "modal-title" }, [
                      e._v(
                        "\n          " + e._s(e.winnerMessage) + "\n        "
                      ),
                    ]),
                  ]
                ),
              ]),
              e._v(" "),
              n("section", { staticClass: "modal-card-body can-go-dark" }, [
                n("h1", { staticClass: "title" }, [
                  e.winnerImage
                    ? n("img", {
                        staticStyle: {
                          height: "200px",
                          "vertical-align": "middle",
                        },
                        attrs: { src: e.winnerImage },
                      })
                    : e._e(),
                  e._v(" "),
                  e.winnerTextIsLink
                    ? n("span", [
                        n(
                          "a",
                          { attrs: { target: "_new", href: e.winnerText } },
                          [
                            e._v(
                              "\n            " +
                                e._s(e.winnerText) +
                                "\n          "
                            ),
                          ]
                        ),
                      ])
                    : e._e(),
                  e._v(" "),
                  e.winnerTextIsLink
                    ? e._e()
                    : n("span", [
                        e._v(
                          "\n          " + e._s(e.winnerText) + "\n        "
                        ),
                      ]),
                ]),
              ]),
              e._v(" "),
              n(
                "footer",
                {
                  staticClass: "modal-card-foot",
                  staticStyle: { "justify-content": "flex-end" },
                },
                [
                  n(
                    "b-button",
                    {
                      attrs: { size: "is-medium" },
                      on: {
                        click: function (t) {
                          e.winnerDialogVisible = !1;
                        },
                      },
                    },
                    [
                      e._v(
                        "\n        " + e._s(e.$t("common.Close")) + "\n      "
                      ),
                    ]
                  ),
                  e._v(" "),
                  n(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e.showRemoveButton,
                          expression: "showRemoveButton",
                        },
                      ],
                      ref: "removeButton",
                      attrs: { size: "is-medium", type: "is-info" },
                      on: { click: e.removeWinner },
                    },
                    [
                      e._v(
                        "\n        " +
                          e._s(e.$t("winnerdialog.Remove")) +
                          "\n      "
                      ),
                    ]
                  ),
                  e._v(" "),
                  n(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e.showRemoveAllButton,
                          expression: "showRemoveAllButton",
                        },
                      ],
                      attrs: { size: "is-medium", type: "is-primary" },
                      on: { click: e.removeWinnerAll },
                    },
                    [
                      e._v(
                        "\n        " +
                          e._s(e.$t("winnerdialog.Remove all instances")) +
                          "\n      "
                      ),
                    ]
                  ),
                ],
                1
              ),
            ]
          ),
        ]
      );
    };
    i._withStripped = !0;
    var a = n(0),
      r = {
        data: function () {
          return {
            winnerDialogVisible: !1,
            winnerText: "",
            winnerImage: "",
            winnerEntry: "",
          };
        },
        computed: {
          winnerMessage: function () {
            return this.$store.state.wheelConfig.winnerMessage;
          },
          winnerTextIsLink: function () {
            return /https?:\/\//.test(this.winnerText);
          },
          showRemoveButton: function () {
            return (
              this.$store.state.wheelConfig.displayRemoveButton &&
              !this.$store.state.wheelConfig.autoRemoveWinner
            );
          },
          showRemoveAllButton: function () {
            var e = this.$store.state.wheelConfig,
              t = a.l(e.names, this.winnerEntry),
              n = e.displayRemoveButton,
              i = e.autoRemoveWinner;
            return n && !i && t > 1;
          },
        },
        methods: {
          show: function (e) {
            (this.winnerEntry = e),
              (this.winnerText = a.h(e, !1)),
              (this.winnerImage = a.i(e)),
              (this.winnerDialogVisible = !0),
              this.setFocusOnRemoveButton();
          },
          setFocusOnRemoveButton: function () {
            var e = this;
            this.$nextTick(function () {
              setTimeout(function () {
                e.$refs.removeButton && e.$refs.removeButton.$el.focus();
              }, 100);
            });
          },
          close: function () {
            this.winnerDialogVisible = !1;
          },
          removeWinner: function () {
            this.$emit("remove-name", this.winnerEntry),
              (this.winnerDialogVisible = !1);
          },
          removeWinnerAll: function () {
            this.$emit("remove-name-all", this.winnerEntry),
              (this.winnerDialogVisible = !1);
          },
        },
      },
      o = n(1),
      s = Object(o.a)(r, i, [], !1, null, null, null);
    s.options.__file = "static/winnerdialog.vue";
    t.a = s.exports;
  },
  133: function (e, t, n) {
    "use strict";
    var i = function () {
      var e = this.$createElement,
        t = this._self._c || e;
      return t("div", { ref: "overlay", staticClass: "animated-background" }, [
        t("div", { staticClass: "content" }, [
          t(
            "p",
            { staticClass: "animated-text", staticStyle: { color: "#FFFFFF" } },
            [this._v("\n      " + this._s(this.winnerText) + "\n    ")]
          ),
        ]),
      ]);
    };
    i._withStripped = !0;
    var a = n(0),
      r = {
        data: function () {
          return { winnerText: "" };
        },
        methods: {
          show: function (e) {
            var t = this,
              n = a.h(e, !1);
            n &&
              ((this.winnerText = n),
              (this.$refs.overlay.style.display = "block"),
              setTimeout(function () {
                t.$refs.overlay.style.display = "none";
              }, 6e3));
          },
        },
      },
      o = (n(187), n(1)),
      s = Object(o.a)(r, i, [], !1, null, "ad0ed4dc", null);
    s.options.__file = "static/winneranimation.vue";
    t.a = s.exports;
  },
  134: function (e, t, n) {
    "use strict";
    var i = function () {
      var e = this.$createElement;
      return (this._self._c || e)("div", { staticClass: "overlay" }, [
        this._v("\n  ⏳\n"),
      ]);
    };
    i._withStripped = !0;
    n(184);
    var a = n(1),
      r = Object(a.a)({}, i, [], !1, null, "de8bc816", null);
    r.options.__file = "static/loadingScreen.vue";
    t.a = r.exports;
  },
  148: function (e, t, n) {},
  149: function (e, t, n) {},
  150: function (e, t, n) {},
  151: function (e, t, n) {},
  18: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    var i = n(0);
    function a(e) {
      (this.title = ""),
        (this.names = [
          "Ali",
          "Beatriz",
          "Charles",
          "Diya",
          "Eric",
          "Fatima",
          "Gabriel",
        ]),
        (this.colorSettings = [
          { color: "#3369E8", enabled: !0 },
          { color: "#D50F25", enabled: !0 },
          { color: "#EEB211", enabled: !0 },
          { color: "#009925", enabled: !0 },
          { color: "#000000", enabled: !1 },
          { color: "#000000", enabled: !1 },
        ]),
        (this.pageBackgroundColor = "#FFFFFF"),
        (this.pictureType = "none"),
        (this.galleryPicture = "images/none.png"),
        (this.customPictureName = ""),
        (this.customPictureDataUri = ""),
        (this.allowDuplicates = !0),
        (this.duringSpinSound = "ticking-sound"),
        (this.afterSpinSound = "applause-sound-soft"),
        (this.maxNames = 500),
        (this.spinTime = 10),
        (this.playCheers = !0),
        (this.launchConfetti = !0),
        (this.animateWinner = !1),
        (this.autoRemoveWinner = !1),
        (this.displayWinnerDialog = !0),
        (this.displayRemoveButton = !0),
        (this.winnerMessage = e || "We have a winner!"),
        (this.playClickWhenWinnerRemoved = !1),
        (this.hubSize = "S"),
        (this.slowSpin = !1),
        (this.displayHat = !0),
        (this.loadJson = function (e) {
          var t = JSON.parse(e);
          this.copyPropertiesFrom(t);
        }),
        (this.getJson = function () {
          var e = this,
            t = Object.keys(this),
            n = {};
          return (
            t.forEach(function (t) {
              n[t] = e[t];
            }),
            JSON.stringify(n)
          );
        }),
        (this.getValues = function () {
          return JSON.parse(this.getJson());
        }),
        (this.loadValues = function (e) {
          this.copyPropertiesFrom(e);
        }),
        (this.clone = function () {
          var e = new a();
          return e.loadValues(this.getValues()), e;
        }),
        (this.getDefaultColorSettings = function () {
          return new a().colorSettings;
        }),
        (this.getDefaultNames = function () {
          return new a().names;
        }),
        (this.setCustomPicture = function (e, t) {
          (this.customPictureName = e),
            (this.customPictureDataUri = t),
            (this.pictureType = "uploaded");
        }),
        (this.getWheelImage = function () {
          return "none" == this.pictureType
            ? null
            : "gallery" == this.pictureType && this.galleryPicture
            ? this.galleryPicture
            : "uploaded" == this.pictureType && this.customPictureDataUri
            ? this.customPictureDataUri
            : null;
        }),
        (this.shouldPlayTicks = function () {
          return "ticking-sound" == this.duringSpinSound;
        }),
        (this.setColors = function (e, t) {
          for (var n = 0; n < 6; n++)
            this.colorSettings[n] = { color: e[n], enabled: t[n] };
        }),
        (this.getCoalescedColors = function () {
          for (var e = [], t = 0; t < 6; t++)
            this.colorSettings[t].enabled &&
              e.push(this.colorSettings[t].color);
          return 0 == e.length && e.push("#CCCCCC"), e;
        }),
        (this.isTooBigForDatabase = function () {
          return this.getJson().length > 99e4;
        }),
        (this.copyPropertiesFrom = function (e) {
          Object.assign(this, JSON.parse(JSON.stringify(e))),
            this.convertOldData();
        }),
        (this.convertOldData = function () {
          Array.isArray(this.names) &&
            ((this.names = this.names.map(function (e) {
              return e.replace(/height="25"/, 'style="height:25px"');
            })),
            (this.names = this.names.filter(function (e) {
              return e.trim();
            }))),
            Array.isArray(this.entries) &&
              ((this.names = this.entries.map(function (e) {
                var t = "";
                return (
                  e.image &&
                    (t += '<img src="'.concat(
                      e.image,
                      '" style="height:25px;font-size:1rem;">'
                    )),
                  e.text && (t += i.g(e.text)),
                  t
                );
              })),
              delete this.entries),
            (this.maxNames = parseInt(this.maxNames)),
            (this.spinTime = parseInt(this.spinTime)),
            !1 === this.playTicks && (this.duringSpinSound = "no-sound"),
            delete this.playTicks,
            !1 === this.playCheers && (this.afterSpinSound = "no-sound"),
            delete this.playCheers;
        });
    }
  },
  184: function (e, t, n) {
    "use strict";
    var i = n(44);
    n.n(i).a;
  },
  185: function (e, t, n) {
    "use strict";
    var i = n(45);
    n.n(i).a;
  },
  187: function (e, t, n) {
    "use strict";
    var i = n(46);
    n.n(i).a;
  },
  188: function (e, t, n) {
    "use strict";
    n.p;
  },
  189: function (e, t, n) {
    "use strict";
    n.p;
  },
  19: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "createSharedWheel", function () {
        return o;
      }),
      n.d(t, "logSharedWheelRead", function () {
        return c;
      }),
      n.d(t, "getSharedWheel", function () {
        return u;
      }),
      n.d(t, "fetchSocialMediaUsers", function () {
        return m;
      }),
      n.d(t, "convertAccount", function () {
        return d;
      });
    n(51), n(186);
    var i = n(0);
    function a(e, t, n, i, a, r, o) {
      try {
        var s = e[r](o),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(i, a);
    }
    function r(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, r) {
          var o = e.apply(t, n);
          function s(e) {
            a(o, i, r, s, c, "next", e);
          }
          function c(e) {
            a(o, i, r, s, c, "throw", e);
          }
          s(void 0);
        });
      };
    }
    function o(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (s = r(
        regeneratorRuntime.mark(function e(t, n) {
          var i, a, r;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (i = { editable: t, wheelConfig: n.getValues() }),
                    "https://us-central1-wheel-of-names-firebase.cloudfunctions.net/createSharedWheel2",
                    (e.next = 4),
                    fetch(
                      "https://us-central1-wheel-of-names-firebase.cloudfunctions.net/createSharedWheel2",
                      {
                        method: "POST",
                        mode: "cors",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(i),
                      }
                    )
                  );
                case 4:
                  return (a = e.sent), (e.next = 7), a.json();
                case 7:
                  if (!(r = e.sent).hasOwnProperty("error")) {
                    e.next = 10;
                    break;
                  }
                  throw r.error;
                case 10:
                  return e.abrupt("return", r.path);
                case 11:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function c(e) {
      return l.apply(this, arguments);
    }
    function l() {
      return (l = r(
        regeneratorRuntime.mark(function e(t) {
          var n;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (n = { path: t }),
                    "https://us-central1-wheel-of-names-firebase.cloudfunctions.net/logSharedWheelRead",
                    (e.next = 4),
                    fetch(
                      "https://us-central1-wheel-of-names-firebase.cloudfunctions.net/logSharedWheelRead",
                      {
                        method: "POST",
                        mode: "cors",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(n),
                      }
                    )
                  );
                case 4:
                  e.sent;
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function u(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (h = r(
        regeneratorRuntime.mark(function e(t) {
          var n, i, a;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (n =
                      "https://us-central1-wheel-of-names-firebase.cloudfunctions.net" +
                      "/getSharedWheel2/".concat(t)),
                    (e.next = 3),
                    fetch(n, { method: "GET", mode: "cors" })
                  );
                case 3:
                  return (i = e.sent), (e.next = 6), i.json();
                case 6:
                  return (a = e.sent), e.abrupt("return", a.wheelConfig);
                case 8:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function m(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (f = r(
        regeneratorRuntime.mark(function e(t) {
          var n, i, a;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (n =
                      "https://us-central1-wheel-of-names-firebase.cloudfunctions.net" +
                      "/getTwitterUserNames2/".concat(encodeURIComponent(t))),
                    (e.next = 3),
                    fetch(n, { method: "GET", mode: "cors" })
                  );
                case 3:
                  return (i = e.sent), (e.next = 6), i.json();
                case 6:
                  return (a = e.sent), e.abrupt("return", a);
                case 8:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function d(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (p = r(
        regeneratorRuntime.mark(function e(t) {
          var n;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      "https://us-central1-wheel-of-names-firebase.cloudfunctions.net/convertAccount",
                      (e.prev = 1),
                      (e.next = 4),
                      fetch(
                        "https://us-central1-wheel-of-names-firebase.cloudfunctions.net/convertAccount",
                        {
                          method: "POST",
                          mode: "cors",
                          headers: { authorization: t },
                        }
                      )
                    );
                  case 4:
                    return (n = e.sent), (e.next = 7), n.json();
                  case 7:
                    e.next = 12;
                    break;
                  case 9:
                    (e.prev = 9), (e.t0 = e.catch(1)), i.u(e.t0);
                  case 12:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[1, 9]]
          );
        })
      )).apply(this, arguments);
    }
  },
  190: function (e, t, n) {
    "use strict";
    n.p;
  },
  191: function (e, t, n) {
    "use strict";
    n.p;
  },
  21: function (e, t, n) {},
  229: function (e, t) {
    t.list = [
      { fileName: "/images/alarm_clock.png", title: "Alarm clock" },
      { fileName: "/images/atom.png", title: "Atom" },
      { fileName: "/images/award.png", title: "Award" },
      { fileName: "/images/bicycle.png", title: "Bicycle" },
      { fileName: "/images/book.png", title: "Book" },
      { fileName: "/images/brush_palette.png", title: "Brush and palette" },
      { fileName: "/images/calculator.png", title: "Calculator" },
      { fileName: "/images/cash.png", title: "Cash" },
      { fileName: "/images/composition_book.png", title: "Composition book" },
      { fileName: "/images/dna.png", title: "DNA" },
      { fileName: "/images/dollars.png", title: "Dollars" },
      { fileName: "/images/floppy_disk.png", title: "Floppy disk" },
      {
        fileName: "/images/fortnite-llama.png",
        title: "Fortnite Llama (credit: Marco Verch, Flickr)",
      },
      { fileName: "/images/game_controller.png", title: "Game controller" },
      { fileName: "/images/gear_head.png", title: "Gear head" },
      { fileName: "/images/globe.png", title: "Globe" },
      { fileName: "/images/google_cloud_logo.png", title: "Google Cloud logo" },
      {
        fileName: "/images/gdg_logo1.png",
        title: "Google Developer Group logo 1",
      },
      {
        fileName: "/images/gdg_logo2.png",
        title: "Google Developer Group logo 2",
      },
      { fileName: "/images/google_logo.png", title: "Google logo" },
      { fileName: "/images/graduation_cap.png", title: "Graduation cap" },
      { fileName: "/images/heart.png", title: "Heart" },
      { fileName: "/images/html.png", title: "HTML" },
      { fileName: "/images/lightbulb_head.png", title: "Lightbulb head" },
      { fileName: "/images/microscope.png", title: "Microscope" },
      { fileName: "/images/molecules.png", title: "Molecule" },
      { fileName: "/images/pencils.png", title: "Pencils" },
      { fileName: "/images/present.png", title: "Present" },
      { fileName: "/images/rocket.png", title: "Rocket" },
      { fileName: "/images/rulers.png", title: "Rulers" },
      { fileName: "/images/spy.png", title: "Spy" },
      { fileName: "/images/trophy.png", title: "Trophy" },
    ];
  },
  230: function (e, t) {
    t.list = {
      Abstract: {
        "Anonymous citation": [
          "#9DC3CA",
          "#B7D4C6",
          "#B7D4C6",
          "#EFECE1",
          "#EDD5C8",
          "#F2C0C5",
        ],
        "Black to blue": [
          "#010101",
          "#011926",
          "#003E5C",
          "#016293",
          "#007BB8",
        ],
        "Centered truth": [
          "#775E56",
          "#E4E1AF",
          "#FF9263",
          "#FF6455",
          "#7C687D",
        ],
        "Cool blues & oranges": [
          "#3C8BEC",
          "#7EBEF6",
          "#FED8B1",
          "#F88102",
          "#F95701",
        ],
        "Dead ennui": ["#85A18C", "#F6FDDF", "#FFECCD", "#F2B783"],
        "Information blues": ["#90B0AB", "#CBCAC0", "#DEDAD6", "#5F729A"],
        "Lavender to dark blue": [
          "#FFBAFF",
          "#DE87FF",
          "#A455FF",
          "#681DFF",
          "#1000CA",
          "#000098",
        ],
        "Offbeat recognition": [
          "#F1647A",
          "#F3F1DB",
          "#74CBCC",
          "#27ABB2",
          "#C1D765",
          "#80C544",
        ],
        "Office hours": ["#DE7373", "#F0DC9F", "#DEBB89", "#7787AE", "#43487B"],
        "Party fun": [
          "#891180",
          "#EA27A2",
          "#FB9390",
          "#F6C892",
          "#FFF5BD",
          "#FDFFDE",
        ],
        "Pastel tones": ["#E0BBE4", "#957DAD", "#D291BC", "#FEC8D8", "#FFDFD3"],
        "Perfect feminine": [
          "#C09BE3",
          "#F6E0C7",
          "#F0C589",
          "#EA9A5D",
          "#EA6D63",
          "#E33F64",
        ],
        "Slumber party": ["#278DF0", "#FFEF93", "#FF96E1", "#9B78FC"],
        "Teasing questions": [
          "#C75589",
          "#E369A4",
          "#F5CC22",
          "#F6EF2D",
          "#B2E792",
          "#82D07B",
        ],
        "Turquoise to blue": [
          "#00FEEF",
          "#09EBEE",
          "#19CEEB",
          "#28ACEA",
          "#388EE9",
          "#3D76E0",
        ],
      },
      Brands: {
        Asana: ["#3be8b0", "#1aafd0", "#6a67ce", "#ffb900", "#fc636b"],
        Baidu: ["#de0f17", "#2529d8"],
        Barclays: ["#00aeef", "#00395d"],
        "Booking.com": ["#003580", "#009fe3", "#feba02", "#666666", "#f2f6fa"],
        "British Airways": [
          "#075aaa",
          "#eb2226",
          "#01295c",
          "#efe9e5",
          "#aca095",
          "#b9cfed",
        ],
        "Burger King": ["#ec1c24", "#fdbd10", "#0066b2", "#ed7902"],
        CNN: ["#cc0000", "#000000", "#282828", "#464646"],
        "Delta Airlines": ["#c8102e", "#862633", "#003a70"],
        Discord: ["#7289da", "#99aab5", "#2c2f33", "#23272a"],
        Dropbox: ["#007ee5", "#7b8994", "#47525d", "#3d464d"],
        Drupal: ["#0077c0", "#81ceff", "#00598e"],
        "E*TRADE": ["#6633cc", "#99cc00"],
        Fedex: ["#4d148c", "#ff6600"],
        Firefox: [
          "#e66000",
          "#ff9500",
          "#ffcb00",
          "#00539f",
          "#0095dd",
          "#331e54",
        ],
        Google: ["#3369E8", "#D50F25", "#EEB211", "#009925"],
        "Google Earth logo": [
          "#F5F5F5",
          "#C4E1FF",
          "#91BFFF",
          "#4285F4",
          "#255FDB",
        ],
        "Google Maps": [
          "#D5D8DB",
          "#E8E8E8",
          "#C3ECB2",
          "#AADAFF",
          "#FFF2AF",
          "#F6CF65",
        ],
        "Google Sheets UI": [
          "#00A568",
          "#85D1B2",
          "#F8F9FA",
          "#C2C3C5",
          "#5F6368",
        ],
        Heineken: ["#008200", "#205527", "#ff2b00", "#c3c3c3"],
        Heroku: ["#c9c3e6", "#6762a6"],
        IKEA: ["#ffcc00", "#003399"],
        LEGO: ["#f6ec35", "#d11013", "#000000"],
        LinkedIn: [
          "#0077b5",
          "#000000",
          "#313335",
          "#86888a",
          "#caccce",
          "#00a0dc",
        ],
        "London Underground": ["#000099", "#cc3333"],
        "Lowe's": ["#004990", "#15b6e5"],
        Lyft: ["#ff00bf", "#352384", "#333447", "#f3f3f5"],
        "McDonald's": [
          "#bf0c0c",
          "#e76a05",
          "#ffc600",
          "#47bc00",
          "#05007b",
          "#9748a8",
        ],
        Microsoft: ["#f65314", "#7cbb00", "#00a1f1", "#ffbb00"],
        MIT: ["#a31f34", "#8a8b8c", "#c2c0bf"],
        Mozilla: ["#c13832", "#d7d3c8", "#4d4e53", "#", "#", "#"],
        NASA: ["#fc3d21", "#0b3d91"],
        NASCAR: ["#ffd659", "#e4002b", "#007ac2"],
        "National Geographic": ["#ffcc00", "#000000"],
        NBC: ["#e1ac26", "#dc380f", "#9f0812", "#6347b2", "#368dd5", "#70af1e"],
        Nest: ["#00afd8", "#7b858e"],
        Netflix: ["#e50914", "#221f1f"],
        Oracle: ["#ff0000", "#000000", "#7f7f7f"],
        "Pizza Hut": ["#ee3124", "#00a160", "#ffc425"],
        Polaroid: ["#00a3e2", "#1ba548", "#fdc800", "#f1860e", "#e41b13"],
        Python: ["#ffde57", "#4584b6", "#646464"],
        Reddit: ["#ff4500", "#5f99cf", "#cee3f8"],
        "Residence Inn": [
          "#b32317",
          "#f58025",
          "#3a6e8f",
          "#87b2d8",
          "#8d8b00",
          "#c1d72f",
        ],
        "Ritz-Carlton": ["#006b95", "#4f5b65", "#b3812a", "#a01a1f"],
        "Rolls-Royce": ["#680021", "#fffaec", "#939598", "#000000"],
        Ryanair: ["#073590", "#f1c933", "#2091eb"],
        Salesforce: ["#1798c1", "#ff1100"],
        Slack: ["#6ecadc", "#e9a820", "#e01563", "#3eb991"],
        Spotify: ["#1db954", "#ffffff", "#000000"],
        "Stack Exchange": ["#1e5397", "#376db6", "#4ca2da", "#91d8f4"],
        Staples: ["#cc0000", "#2c8aec", "#ffcc00"],
        Subway: ["#489e3b", "#fabd42", "#cd0a20"],
        Twitch: ["#6441a5", "#b9a3e3", "#262626", "#f1f1f1"],
        Twitter: [
          "#1da1f2",
          "#14171a",
          "#657786",
          "#aab8c2",
          "#e1e8ed",
          "#f5f8fa",
        ],
        Uber: ["#09091a", "#c0c0c8", "#1fbad6"],
        Ubuntu: [
          "#dd4814",
          "#77216f",
          "#5e2750",
          "#2c001e",
          "#aea79f",
          "#333333",
        ],
        Volvo: [
          "#003057",
          "#115740",
          "#65665c",
          "#425563",
          "#517891",
          "#212721",
        ],
        Walgreens: ["#e31837", "#f37520", "#489cd4", "#2774a6", "#35393d"],
        Wikimedia: ["#339966", "#0063bf", "#990000"],
        Zapier: [
          "#ff4a00",
          "#fd7622",
          "#ffc43e",
          "#5f6c72",
          "#499df3",
          "#13d0ab",
        ],
      },
      Default: { Default: ["#3369E8", "#D50F25", "#EEB211", "#009925"] },
      Flags: {
        Australia: ["#00008B", "#FFFFFF", "#FF0000"],
        Belgium: ["#000000", "#FDDA24", "#EF3340"],
        Canada: ["#FF0000", "#FFFFFF"],
        Denmark: ["#C60C30", "#FFFFFF"],
        Finland: ["#002F6C", "#FFFFFF"],
        France: ["#0055A4", "#FFFFFF", "#EF4135"],
        Germany: ["#000000", "#DD0000", "#FFCE00"],
        "Hong Kong": ["#DE2408", "#FFFFFF"],
        India: ["#FF9933", "#FFFFFF", "#138808", "#000080"],
        Indonesia: ["#FF0000", "#FFFFFF"],
        Ireland: ["#169B62", "#FFFFFF", "#FF883E"],
        Malaysia: ["#010066", "#CC0001", "#FFFFFF", "#FFCC00"],
        Mexico: ["#006341", "#FFFFFF", "#CE1126"],
        Netherlands: ["#AE1C28", "#FFFFFF", "#21468B"],
        "New Zealand": ["#00247D", "#FFFFFF", "#CC142B"],
        Norway: ["#C8102E", "#FFFFFF", "#003087"],
        Philippines: ["#FCD116", "#0038A8", "#CE1126", "#FFFFFF"],
        Singapore: ["#EF3340", "#FFFFFF"],
        Spain: ["#AA151B", "#F1BF00"],
        Sweden: ["#004B87", "#FFCD00"],
        Thailand: ["#A51931", "#F4F5F8", "#2D2A4A"],
        "United Arab Emirates": ["#FF0000", "#00732F", "#FFFFFF", "#000000"],
        "United Kingdom": ["#00247D", "#FFFFFF", "#CF142B"],
        "United States": ["#3C3B6E", "#FFFFFF", "#B22234"],
        Vietnam: ["#DA251D", "#FFCD00"],
      },
      Games: {
        "Candy Crush": [
          "#D98121",
          "#EDB23F",
          "#F5D346",
          "#F7E1B4",
          "#FAF4DC",
          "#D3151C",
        ],
        Candyland: ["#fbd7e7", "#eeddec", "#e1e3f1", "#d4e9f6", "#c7effb"],
        Fortnite: ["#E98F5C", "#B448F0", "#2AC9FA", "#F9E36E", "#C7C9D6"],
        "Mario & Luigi": [
          "#5a98e1",
          "#139334",
          "#cea900",
          "#fe130f",
          "#095cd4",
          "#16b65c",
        ],
        Minecraft: [
          "#477A1E",
          "#70B237",
          "#8FCA5C",
          "#61371F",
          "#854F2B",
          "#C28340",
        ],
        Monopoly: ["#C70000", "#BFDBAE", "#8FBC72", "#FFFFFF", "#D7BAAA"],
        Overwatch: ["#f99e1a", "#43484c", "#405275", "#218ffe", "#000000"],
        Pikachu: ["#FAD61D", "#E19720", "#F62D14", "#811E09", "#000000"],
        "Rocket League": ["#008BFF", "#FF8B00"],
        "The Crew 2": ["#FFDB15", "#FB8018", "#FB1257", "#01CDF9"],
      },
      Holidays: {
        Christmas: [
          "#348228",
          "#469A47",
          "#DAF7FF",
          "#FFFAFA",
          "#EB2029",
          "#D70816",
        ],
        "Earth Day": [
          "#11205B",
          "#E9E9E9",
          "#8F705E",
          "#BF9269",
          "#F0C951",
          "#3C6F36",
        ],
        Easter: ["#367D83", "#BADBD2", "#F47A97", "#F3EB9A", "#E9C05F"],
        Halloween: ["#F36A1F", "#F3861F", "#000000"],
        "New Year": ["#FFDF00", "#FFCC00", "#ECBD00", "#CC9900", "#B8860B"],
        "Saint Patrick's Day": ["#008001", "#228B22", "#00AD43"],
        Thanksgiving: [
          "#FDC149",
          "#E7A755",
          "#873826",
          "#61782A",
          "#D64F06",
          "#BBB300",
        ],
      },
      Nature: {
        "Antarctica evening": [
          "#F4D3C4",
          "#F2AEBB",
          "#D895DA",
          "#A091D6",
          "#696FC7",
          "#A7AAE1",
        ],
        "Beach sunset": [
          "#3C47C6",
          "#656CDE",
          "#DE6CC8",
          "#F8A091",
          "#F7E392",
          "#F7A55D",
        ],
        "Desert scene": ["#FAD381", "#D79F62", "#2E4647", "#518D6A", "#9BC692"],
        "Evening sky": [
          "#001F38",
          "#526079",
          "#9A7E8E",
          "#E3757F",
          "#FD997F",
          "#FFD0AA",
        ],
        "Fresh meadow": [
          "#84A013",
          "#A8BB2E",
          "#D4DA5E",
          "#EBEF90",
          "#FBFDBC",
          "#FAC703",
        ],
        "Fruit tones": [
          "#E9692C",
          "#ED9121",
          "#FFC324",
          "#FFF000",
          "#66B447",
          "#8EE53F",
        ],
        Giraffe: ["#F0ECE1", "#EDCF8F", "#C97F4E", "#6F4A38", "#977359"],
        Jellyfish: [
          "#3EA1B6",
          "#0E6B8C",
          "#133855",
          "#6B669E",
          "#BB90C8",
          "#EFD8EC",
        ],
        Jungle: [
          "#135E46",
          "#478966",
          "#73A788",
          "#E3C6AD",
          "#D09D7B",
          "#B67B65",
        ],
        "Koi fish": ["#F16323", "#F2F3F4", "#FFD021", "#E34427"],
        Monsoon: ["#01A8CA", "#32D1EC", "#F1F1F1", "#AFDFF3"],
        Moon: ["#31302E", "#94908D", "#DAD9D7", "#F0F0F0", "#C3C2BE"],
        "Purple horizon": [
          "#b7b8f9",
          "#3a1f8a",
          "#2c1357",
          "#462867",
          "#593b6a",
        ],
        Rainbow: [
          "#5E02E9",
          "#3C70EF",
          "#30D800",
          "#E7E200",
          "#FD8B00",
          "#F20800",
        ],
        "Red desert": [
          "#99857A",
          "#C67B5C",
          "#E27B58",
          "#FF9D6F",
          "#663926",
          "#8E6A5A",
        ],
        "Red sunset": [
          "#761000",
          "#C10900",
          "#E92100",
          "#FFDB53",
          "#FFA93D",
          "#FF7A29",
        ],
        "Sandy beach": ["#9FE2BF", "#FFE5C6", "#EFCDB4", "#4BC7CF", "#5CF5FF"],
        Sun: ["#FFFFFF", "#FFE484", "#FFCC33", "#FC9601", "#D14009"],
        Underwater: ["#4F42B5", "#82E1E3", "#D4F1F9", "#E3FFFA", "#4CC395"],
        "Water lilies": [
          "#448036",
          "#5C9550",
          "#FBBA37",
          "#EE6BA4",
          "#F192B5",
          "#F4B0C7",
        ],
      },
      Seasons: {
        "Fall green": [
          "#529106",
          "#61A307",
          "#86B71B",
          "#B9BD00",
          "#8EA202",
          "#799203",
        ],
        "Fall leaves": [
          "#BA4634",
          "#D85C4E",
          "#EAA250",
          "#F5DD8B",
          "#CEC218",
          "#5F7818",
        ],
        "Fall road": [
          "#A05A48",
          "#563633",
          "#6D463C",
          "#D6BD9D",
          "#D19E6D",
          "#C57D56",
        ],
        "Fall yellow": ["#DC7C00", "#FF9705", "#FEB20A", "#FFCB00", "#FEDF05"],
        "Spring gentle": [
          "#C3D4C1",
          "#FFFFE5",
          "#B4D2A4",
          "#95BC83",
          "#F6EAD3",
        ],
        "Spring green beauty": [
          "#F99825",
          "#F5C527",
          "#CFFA6B",
          "#9EEC1C",
          "#89DF42",
          "#75CB00",
        ],
        "Spring pastels": [
          "#94DE8B",
          "#B19CD9",
          "#F4A8CF",
          "#F4C3D7",
          "#FDFD96",
          "#B6E7B9",
        ],
        "Spring pink": [
          "#E25157",
          "#F5808F",
          "#FFACCC",
          "#FFCBDF",
          "#EBF0EA",
          "#93C64E",
        ],
        "Summer buzz": ["#3BAED5", "#5CC8E2", "#FDE683", "#E66C1E", "#D52210"],
        "Summer carnival": [
          "#01A7EC",
          "#FFFF46",
          "#FFC94B",
          "#FE8F5D",
          "#FE47B3",
          "#80DA65",
        ],
        "Summer is hot": [
          "#BF221C",
          "#E8681F",
          "#FBC44F",
          "#FFE67F",
          "#FDFFD2",
          "#F9F500",
        ],
        "Summer pool party": [
          "#0198F1",
          "#49C2FF",
          "#A9EEFF",
          "#0067D4",
          "#E999DE",
          "#7C62C4",
        ],
        "Winter blues": [
          "#2377A4",
          "#50A3C6",
          "#79C0D7",
          "#F8F8F8",
          "#DDDFDF",
          "#C2C2C2",
        ],
        "Winter camouflage": [
          "#7C7C7C",
          "#0E1317",
          "#ACDEF8",
          "#344A78",
          "#FDFAFC",
          "#D6D6D6",
        ],
        "Winter growth": ["#383159", "#656DA6", "#C5E1F2", "#52734F"],
        "Winter wonderland": [
          "#23644D",
          "#D3F1F3",
          "#FFFFFF",
          "#E22A45",
          "#C7102E",
        ],
      },
    };
  },
  29: function (e, t, n) {
    "use strict";
    n.p;
  },
  3: function (e, t, n) {
    "use strict";
    n.d(t, "n", function () {
      return re;
    }),
      n.d(t, "x", function () {
        return se;
      }),
      n.d(t, "i", function () {
        return le;
      }),
      n.d(t, "m", function () {
        return he;
      }),
      n.d(t, "o", function () {
        return me;
      }),
      n.d(t, "p", function () {
        return de;
      }),
      n.d(t, "q", function () {
        return ge;
      }),
      n.d(t, "r", function () {
        return ve;
      }),
      n.d(t, "l", function () {
        return we;
      }),
      n.d(t, "v", function () {
        return ye;
      }),
      n.d(t, "s", function () {
        return ke;
      }),
      n.d(t, "f", function () {
        return Se;
      }),
      n.d(t, "u", function () {
        return xe;
      }),
      n.d(t, "c", function () {
        return Ne;
      }),
      n.d(t, "h", function () {
        return De;
      }),
      n.d(t, "w", function () {
        return Ae;
      }),
      n.d(t, "d", function () {
        return Te;
      }),
      n.d(t, "a", function () {
        return We;
      }),
      n.d(t, "g", function () {
        return Le;
      }),
      n.d(t, "b", function () {
        return Oe;
      }),
      n.d(t, "e", function () {
        return Me;
      }),
      n.d(t, "t", function () {
        return ze;
      }),
      n.d(t, "k", function () {
        return He;
      }),
      n.d(t, "j", function () {
        return qe;
      });
    var i = n(0);
    function a(e, t, n, i, a, r, o) {
      try {
        var s = e[r](o),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(i, a);
    }
    function r(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, r) {
          var o = e.apply(t, n);
          function s(e) {
            a(o, i, r, s, c, "next", e);
          }
          function c(e) {
            a(o, i, r, s, c, "throw", e);
          }
          s(void 0);
        });
      };
    }
    function o(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (s = r(
        regeneratorRuntime.mark(function e(t) {
          var n;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), c(t);
                case 2:
                  return (n = e.sent), e.abrupt("return", !!n);
                case 4:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function c(e) {
      return l.apply(this, arguments);
    }
    function l() {
      return (l = r(
        regeneratorRuntime.mark(function e(t) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!t.currentUser) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt("return", t.currentUser);
                case 4:
                  return e.abrupt(
                    "return",
                    new Promise(function (e) {
                      t.onAuthStateChanged(function (t) {
                        e(t);
                      });
                    })
                  );
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function u(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (h = r(
        regeneratorRuntime.mark(function e(t, n) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    n.setCustomParameters({ prompt: "select_account" }),
                    (e.next = 3),
                    t.signInWithPopup(n)
                  );
                case 3:
                  return e.abrupt("return", t.currentUser);
                case 4:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function m(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (f = r(
        regeneratorRuntime.mark(function e(t, n) {
          var i;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    n.addScope(
                      "https://www.googleapis.com/auth/drive.readonly"
                    ),
                    n.addScope(
                      "https://www.googleapis.com/auth/spreadsheets.readonly"
                    ),
                    n.setCustomParameters({ prompt: "select_account" }),
                    (e.next = 5),
                    t.signInWithPopup(n)
                  );
                case 5:
                  return (
                    (i = e.sent), e.abrupt("return", i.credential.accessToken)
                  );
                case 7:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function d(e, t, n, i, a, r, o) {
      try {
        var s = e[r](o),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(i, a);
    }
    function p(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, a) {
          var r = e.apply(t, n);
          function o(e) {
            d(r, i, a, o, s, "next", e);
          }
          function s(e) {
            d(r, i, a, o, s, "throw", e);
          }
          o(void 0);
        });
      };
    }
    function g(e, t, n) {
      return e.doc("accounts/".concat(n)).set({ uid: n, lastActive: t });
    }
    function v(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (w = p(
        regeneratorRuntime.mark(function e(t, n) {
          var i, a;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    t.collection("accounts/".concat(n, "/wheels")).get()
                  );
                case 2:
                  return (
                    (i = e.sent),
                    (a = []),
                    i.forEach(function (e) {
                      a.push(e.data().config);
                    }),
                    e.abrupt(
                      "return",
                      a.sort(function (e, t) {
                        return e.title.localeCompare(t.title, "en", {
                          numeric: !0,
                          sensitivity: "base",
                        });
                      })
                    )
                  );
                case 6:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function b(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (y = p(
        regeneratorRuntime.mark(function e(t, n) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    t
                      .doc("admins/".concat(n))
                      .update({ totalReviews: 0, sessionReviews: 0 })
                  );
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function _(e, t, n, i) {
      return k.apply(this, arguments);
    }
    function k() {
      return (k = p(
        regeneratorRuntime.mark(function e(t, n, a, r) {
          var o, s, c, l, u;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (o = i.q(r)),
                    (s = t.doc("accounts/".concat(a, "/wheels/").concat(o))),
                    (e.next = 4),
                    s.get()
                  );
                case 4:
                  if (!(c = e.sent).exists) {
                    e.next = 10;
                    break;
                  }
                  return (
                    (l = c.data()),
                    (u = { lastRead: n, readCount: l.readCount + 1 }),
                    (e.next = 10),
                    s.update(u)
                  );
                case 10:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function C(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (S = p(
        regeneratorRuntime.mark(function e(t, n, a) {
          var r;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (r = i.q(a)),
                    (e.next = 3),
                    t.doc("accounts/".concat(n, "/wheels/").concat(r)).delete()
                  );
                case 3:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function F(e, t, n, i) {
      return x.apply(this, arguments);
    }
    function x() {
      return (x = p(
        regeneratorRuntime.mark(function e(t, n, a, r) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), g(t, n, a);
                case 2:
                  return (
                    (r.title = i.q(r.title)), (e.next = 5), q(t, a, r.title)
                  );
                case 5:
                  if (!e.sent) {
                    e.next = 9;
                    break;
                  }
                  K(t, n, a, r), (e.next = 10);
                  break;
                case 9:
                  Z(t, n, a, r);
                case 10:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function $(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (N = p(
        regeneratorRuntime.mark(function e(t, n) {
          var i, a;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (i = t.batch()),
                    (e.next = 3),
                    t.collection("accounts/".concat(n, "/wheels")).get()
                  );
                case 3:
                  return (
                    e.sent.forEach(function (e) {
                      i.delete(e.ref);
                    }),
                    (e.next = 7),
                    t.doc("accounts/".concat(n)).get()
                  );
                case 7:
                  return (
                    (a = e.sent), i.delete(a.ref), (e.next = 11), i.commit()
                  );
                case 11:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function E(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (D = p(
        regeneratorRuntime.mark(function e(t) {
          var n;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), t.doc("settings/DIRTY_WORDS").get();
                case 2:
                  return (
                    (n = e.sent), e.abrupt("return", n.data().value.sort())
                  );
                case 4:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function R(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (A = p(
        regeneratorRuntime.mark(function e(t, n) {
          var i;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (i = n
                      .map(function (e) {
                        return e.toLowerCase();
                      })
                      .sort()),
                    (e.next = 3),
                    t.doc("settings/DIRTY_WORDS").set({ value: i })
                  );
                case 3:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (T = p(
        regeneratorRuntime.mark(function e(t, n) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), t.doc("admins/".concat(n)).delete();
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function P(e, t, n) {
      return W.apply(this, arguments);
    }
    function W() {
      return (W = p(
        regeneratorRuntime.mark(function e(t, n, i) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    t.doc("admins/".concat(n)).set({ uid: n, name: i })
                  );
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function B(e, t, n, i) {
      return L.apply(this, arguments);
    }
    function L() {
      return (L = p(
        regeneratorRuntime.mark(function e(t, n, i, a) {
          var r;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (r = t.batch()).update(t.doc("shared-wheels/".concat(i)), {
                      reviewStatus: "Approved",
                    }),
                    r.delete(t.doc("shared-wheels-review-queue/".concat(i))),
                    r.update(t.doc("admins/".concat(a)), {
                      totalReviews: n,
                      sessionReviews: n,
                      lastReview: new Date(),
                    }),
                    (e.next = 6),
                    r.commit()
                  );
                case 6:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function O(e, t, n, i) {
      return j.apply(this, arguments);
    }
    function j() {
      return (j = p(
        regeneratorRuntime.mark(function e(t, n, i, a) {
          var r, o;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), t.doc("shared-wheels/".concat(i)).get();
                case 2:
                  return (
                    (r = e.sent).exists && (o = r.data()),
                    (e.next = 6),
                    Promise.all([
                      t.doc("shared-wheels/".concat(i)).delete(),
                      t.doc("shared-wheels-review-queue/".concat(i)).delete(),
                      t.doc("shared-wheels-rejected/".concat(i)).set(o),
                      t.doc("admins/".concat(a)).update({ totalReviews: n }),
                      t.doc("admins/".concat(a)).update({ sessionReviews: n }),
                      t
                        .doc("admins/".concat(a))
                        .update({ lastReview: new Date() }),
                    ])
                  );
                case 6:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function M(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (V = p(
        regeneratorRuntime.mark(function e(t, n) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    t.doc("admins/".concat(n)).update({ sessionReviews: 0 })
                  );
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function z(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (U = p(
        regeneratorRuntime.mark(function e(t, n) {
          var i;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), t.doc("shared-wheels/".concat(n)).get();
                case 2:
                  if (!(i = e.sent).exists) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt("return", i.data());
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (G = p(
        regeneratorRuntime.mark(function e(t) {
          var n, i, a, r, o;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!(Math.random() < 0.1)) {
                    e.next = 5;
                    break;
                  }
                  return (
                    (e.next = 3),
                    t
                      .collection("shared-wheels-review-queue")
                      .where("reviewStatus", "==", "Suspicious")
                      .limit(1)
                      .get()
                  );
                case 3:
                  (i = e.sent).size > 0 && (n = i.docs[0].data());
                case 5:
                  if (n || !(Math.random() < 0.3)) {
                    e.next = 10;
                    break;
                  }
                  return (
                    (e.next = 8),
                    t
                      .collection("shared-wheels-review-queue")
                      .where("predictedApproval", "<", 0.7)
                      .orderBy("predictedApproval", "asc")
                      .limit(1)
                      .get()
                  );
                case 8:
                  (a = e.sent).size > 0 && (n = a.docs[0].data());
                case 10:
                  if (n || !(Math.random() < 0.4)) {
                    e.next = 15;
                    break;
                  }
                  return (
                    (e.next = 13),
                    t
                      .collection("shared-wheels-review-queue")
                      .orderBy("lastRead", "desc")
                      .limit(1)
                      .get()
                  );
                case 13:
                  (r = e.sent).size > 0 && (n = r.docs[0].data());
                case 15:
                  if (n) {
                    e.next = 20;
                    break;
                  }
                  return (
                    (e.next = 18),
                    t
                      .collection("shared-wheels-review-queue")
                      .orderBy("readCount", "desc")
                      .limit(1)
                      .get()
                  );
                case 18:
                  (o = e.sent).size > 0 && (n = o.docs[0].data());
                case 20:
                  return e.abrupt("return", n);
                case 21:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function q(e, t, n) {
      return J.apply(this, arguments);
    }
    function J() {
      return (J = p(
        regeneratorRuntime.mark(function e(t, n, i) {
          var a;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    t.doc("accounts/".concat(n, "/wheels/").concat(i)).get()
                  );
                case 2:
                  return (a = e.sent), e.abrupt("return", a.exists);
                case 4:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function K(e, t, n, i) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (Y = p(
        regeneratorRuntime.mark(function e(t, n, i, a) {
          var r, o;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    t.doc("accounts/".concat(i, "/wheels/").concat(a.title))
                  );
                case 2:
                  return (
                    (r = e.sent),
                    (o = { config: a, lastWrite: n }),
                    (e.next = 6),
                    r.update(o)
                  );
                case 6:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Z(e, t, n, i) {
      return X.apply(this, arguments);
    }
    function X() {
      return (X = p(
        regeneratorRuntime.mark(function e(t, n, i, a) {
          var r, o;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (r = {
                      config: a,
                      created: n,
                      lastRead: null,
                      lastWrite: n,
                      readCount: 0,
                    }),
                    (e.next = 3),
                    t.doc("accounts/".concat(i, "/wheels/").concat(a.title))
                  );
                case 3:
                  return (o = e.sent), (e.next = 6), o.set(r);
                case 6:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    var Q,
      ee,
      te,
      ne = n(4);
    function ie(e, t, n, i, a, r, o) {
      try {
        var s = e[r](o),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(i, a);
    }
    function ae(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, a) {
          var r = e.apply(t, n);
          function o(e) {
            ie(r, i, a, o, s, "next", e);
          }
          function s(e) {
            ie(r, i, a, o, s, "throw", e);
          }
          o(void 0);
        });
      };
    }
    function re() {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (oe = ae(
        regeneratorRuntime.mark(function e() {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (Q) {
                    e.next = 5;
                    break;
                  }
                  return (e.next = 3), Ke();
                case 3:
                  Ze(Q), Xe(Q);
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function se() {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (ce = ae(
        regeneratorRuntime.mark(function e() {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), o(Q.auth());
                case 2:
                  return e.abrupt("return", e.sent);
                case 3:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function le() {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (ue = ae(
        regeneratorRuntime.mark(function e() {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), c(Q.auth());
                case 2:
                  return e.abrupt("return", e.sent);
                case 3:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function he(e) {
      return new Promise(function (t, n) {
        te || (te = new ee.auth.AuthUI(Q.auth())),
          te.start("#".concat(e), {
            signInFlow: "popup",
            credentialHelper: ee.auth.CredentialHelper.NONE,
            signInOptions: [
              {
                provider: Q.auth.GoogleAuthProvider.PROVIDER_ID,
                customParameters: { prompt: "select_account" },
              },
              Q.auth.TwitterAuthProvider.PROVIDER_ID,
              Q.auth.EmailAuthProvider.PROVIDER_ID,
            ],
            callbacks: {
              signInSuccessWithAuthResult: function (e, n) {
                t(e.user);
              },
            },
            tosUrl: "/faq/terms",
            privacyPolicyUrl: "/privacy-policy.html",
          });
      });
    }
    function me(e, t) {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (fe = ae(
        regeneratorRuntime.mark(function e(t, n) {
          var i, a;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    ((i = Q.auth()).languageCode = ne.e(t, n)),
                    (a = Qe(t)),
                    (e.next = 5),
                    u(i, a)
                  );
                case 5:
                  return e.abrupt("return", e.sent);
                case 6:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function de(e) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (pe = ae(
        regeneratorRuntime.mark(function e(t) {
          var n, i;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    ((n = Q.auth()).languageCode = ne.e("Google", t)),
                    (i = Qe("Google")),
                    (e.next = 5),
                    m(n, i)
                  );
                case 5:
                  return e.abrupt("return", e.sent);
                case 6:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function ge() {
      try {
        Q.auth().signOut();
      } catch (e) {}
    }
    function ve(e) {
      var t = Q.firestore.FieldValue.serverTimestamp();
      return g(Q.firestore(), t, e);
    }
    function we(e) {
      return be.apply(this, arguments);
    }
    function be() {
      return (be = ae(
        regeneratorRuntime.mark(function e(t) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt("return", v(Q.firestore(), t));
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function ye(e) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (_e = ae(
        regeneratorRuntime.mark(function e(t) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt("return", b(Q.firestore(), t));
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function ke(e, t) {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (Ce = ae(
        regeneratorRuntime.mark(function e(t, n) {
          var i;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (i = Q.firestore.FieldValue.serverTimestamp()),
                    (e.next = 3),
                    _(Q.firestore(), i, t, n)
                  );
                case 3:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Se(e, t) {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (Fe = ae(
        regeneratorRuntime.mark(function e(t, n) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), C(Q.firestore(), t, n);
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function xe(e, t) {
      return $e.apply(this, arguments);
    }
    function $e() {
      return ($e = ae(
        regeneratorRuntime.mark(function e(t, n) {
          var i;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (i = Q.firestore.FieldValue.serverTimestamp()),
                    (e.next = 3),
                    F(Q.firestore(), i, t, n)
                  );
                case 3:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Ne(e) {
      return Ee.apply(this, arguments);
    }
    function Ee() {
      return (Ee = ae(
        regeneratorRuntime.mark(function e(t) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), $(Q.firestore(), t);
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function De() {
      return Re.apply(this, arguments);
    }
    function Re() {
      return (Re = ae(
        regeneratorRuntime.mark(function e() {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), E(Q.firestore());
                case 2:
                  return e.abrupt("return", e.sent);
                case 3:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Ae(e) {
      return Ie.apply(this, arguments);
    }
    function Ie() {
      return (Ie = ae(
        regeneratorRuntime.mark(function e(t) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), R(Q.firestore(), t);
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Te(e) {
      return Pe.apply(this, arguments);
    }
    function Pe() {
      return (Pe = ae(
        regeneratorRuntime.mark(function e(t) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), I(Q.firestore(), t);
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function We(e, t) {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (Be = ae(
        regeneratorRuntime.mark(function e(t, n) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), P(Q.firestore(), t, n);
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Le() {
      return Q.firestore();
    }
    function Oe(e, t) {
      return je.apply(this, arguments);
    }
    function je() {
      return (je = ae(
        regeneratorRuntime.mark(function e(t, n) {
          var i;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (i = Q.firestore.FieldValue.increment(1)),
                    (e.next = 3),
                    B(Q.firestore(), i, t, n)
                  );
                case 3:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Me(e, t) {
      return Ve.apply(this, arguments);
    }
    function Ve() {
      return (Ve = ae(
        regeneratorRuntime.mark(function e(t, n) {
          var i, a;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), le();
                case 2:
                  return (
                    (i = e.sent),
                    (a = n
                      ? Q.firestore.FieldValue.increment(1)
                      : Q.firestore.FieldValue.increment(0)),
                    (e.next = 6),
                    O(Q.firestore(), a, t, i.uid)
                  );
                case 6:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function ze(e) {
      return Ue.apply(this, arguments);
    }
    function Ue() {
      return (Ue = ae(
        regeneratorRuntime.mark(function e(t) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), M(Q.firestore(), t);
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function He(e) {
      return Ge.apply(this, arguments);
    }
    function Ge() {
      return (Ge = ae(
        regeneratorRuntime.mark(function e(t) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), z(Q.firestore(), t);
                case 2:
                  return e.abrupt("return", e.sent);
                case 3:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function qe() {
      return Je.apply(this, arguments);
    }
    function Je() {
      return (Je = ae(
        regeneratorRuntime.mark(function e() {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), H(Q.firestore());
                case 2:
                  return e.abrupt("return", e.sent);
                case 3:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Ke() {
      return Ye.apply(this, arguments);
    }
    function Ye() {
      return (Ye = ae(
        regeneratorRuntime.mark(function e() {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), n.e(56).then(n.t.bind(null, 620, 7));
                case 2:
                  return (
                    (Q = e.sent), (e.next = 5), n.e(56).then(n.bind(null, 621))
                  );
                case 5:
                  return (e.next = 7), n.e(56).then(n.bind(null, 632));
                case 7:
                  return (e.next = 9), n.e(56).then(n.bind(null, 633));
                case 9:
                  ee = e.sent;
                case 10:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Ze(e) {
      e.initializeApp({
        apiKey: "AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g",
        authDomain: "wheel-of-names-firebase.firebaseapp.com",
        databaseURL: "https://wheel-of-names-firebase.firebaseio.com",
        projectId: "wheel-of-names-firebase",
        timestampsInSnapshots: !0,
      });
    }
    function Xe(e) {
      var t = e.firestore();
      if (i.c(navigator.userAgent))
        try {
          t.enablePersistence({ synchronizeTabs: !0 });
        } catch (e) {}
    }
    function Qe(e) {
      var t = {
        google: new Q.auth.GoogleAuthProvider(),
        facebook: new Q.auth.FacebookAuthProvider(),
        twitter: new Q.auth.TwitterAuthProvider(),
      };
      return t[e.toLowerCase()] || t.google;
    }
  },
  30: function (e, t, n) {
    "use strict";
    n.p;
  },
  31: function (e, t, n) {
    "use strict";
    n.p;
  },
  39: function (e, t, n) {
    "use strict";
    function i() {
      (this.appInfoVisible = !0),
        (this.darkMode = !1),
        (this.loadJson = function (e) {
          var t = JSON.parse(e);
          this.copyPropertiesFrom(t);
        }),
        (this.getJson = function () {
          var e = this,
            t = Object.keys(this),
            n = {};
          return (
            t.forEach(function (t) {
              n[t] = e[t];
            }),
            JSON.stringify(n)
          );
        }),
        (this.getValues = function () {
          return JSON.parse(this.getJson());
        }),
        (this.loadValues = function (e) {
          this.copyPropertiesFrom(e);
        }),
        (this.clone = function () {
          var e = new i();
          return e.loadValues(this.getValues()), e;
        }),
        (this.copyPropertiesFrom = function (e) {
          Object.assign(this, JSON.parse(JSON.stringify(e)));
        });
    }
    n.d(t, "a", function () {
      return i;
    });
  },
  4: function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return r;
    }),
      n.d(t, "h", function () {
        return o;
      }),
      n.d(t, "a", function () {
        return s;
      }),
      n.d(t, "e", function () {
        return c;
      }),
      n.d(t, "f", function () {
        return l;
      }),
      n.d(t, "c", function () {
        return u;
      }),
      n.d(t, "g", function () {
        return h;
      }),
      n.d(t, "b", function () {
        return m;
      });
    var i = [{ partialName: "noms", locale: "fr" }],
      a = [
        {
          name: "ar",
          humanName: "العربية",
          googleName: "ar_AR",
          twitterName: "ar",
          file: "ar-EG.json",
        },
        {
          name: "az",
          humanName: "Azərbaycanca",
          googleName: "az_AZ",
          twitterName: "az",
          file: "az-Latn-AZ.json",
        },
        {
          name: "bg",
          humanName: "български",
          googleName: "bg_BG",
          twitterName: "bg",
          file: "bg-BG.json",
        },
        {
          name: "bn",
          humanName: "বাংলা",
          googleName: "bn_IN",
          twitterName: "bn",
          file: "bn-IN.json",
        },
        {
          name: "ca",
          humanName: "Català",
          googleName: "ca_ES",
          twitterName: "ca",
          file: "ca-ES.json",
        },
        {
          name: "cs",
          humanName: "Čeština",
          googleName: "cs_CZ",
          twitterName: "cs",
          file: "cs-CZ.json",
        },
        {
          name: "cy",
          humanName: "Cymraeg",
          googleName: "cy_GB",
          twitterName: "cy",
          file: "cy-GB.json",
        },
        {
          name: "da",
          humanName: "Dansk",
          googleName: "da_DK",
          twitterName: "da",
          file: "da-DK.json",
        },
        {
          name: "de",
          humanName: "Deutsch",
          googleName: "de_DE",
          twitterName: "de",
          file: "de-DE.json",
        },
        {
          name: "el",
          humanName: "Eλληνικά",
          googleName: "el_GR",
          twitterName: "el",
          file: "el-GR.json",
        },
        {
          name: "en-PI",
          humanName: "English (Pirate)",
          googleName: "en_US",
          twitterName: "en",
          file: "en-PI.json",
        },
        {
          name: "en",
          humanName: "English",
          googleName: "en_US",
          twitterName: "en",
          file: "en-US.json",
        },
        {
          name: "es",
          humanName: "Español",
          googleName: "es_ES",
          twitterName: "es",
          file: "es-ES.json",
        },
        {
          name: "et",
          humanName: "Estonian",
          googleName: "et_EE",
          twitterName: "et",
          file: "et-EE.json",
        },
        {
          name: "fa",
          humanName: "فارسی",
          googleName: "fa_IR",
          twitterName: "fa",
          file: "fa-IR.json",
        },
        {
          name: "fi",
          humanName: "Suomi",
          googleName: "fi_FI",
          twitterName: "fi",
          file: "fi-FI.json",
        },
        {
          name: "fil",
          humanName: "Filipino",
          googleName: "fil_PH",
          twitterName: "fil",
          file: "fil-PH.json",
        },
        {
          name: "fr",
          humanName: "Français",
          googleName: "fr_FR",
          twitterName: "fr",
          file: "fr-FR.json",
        },
        {
          name: "gl",
          humanName: "Galego",
          googleName: "gl_ES",
          twitterName: "gl",
          file: "gl-ES.json",
        },
        {
          name: "gu",
          humanName: "ગુજરાતી",
          googleName: "gu_IN",
          twitterName: "gu",
          file: "gu-IN.json",
        },
        {
          name: "he",
          humanName: "עברית",
          googleName: "he_IL",
          twitterName: "he",
          file: "he-IL.json",
        },
        {
          name: "hi",
          humanName: "हिंदी",
          googleName: "hi_IN",
          twitterName: "hi",
          file: "hi-IN.json",
        },
        {
          name: "hr",
          humanName: "Hrvatski",
          googleName: "hr_HR",
          twitterName: "hr",
          file: "hr-HR.json",
        },
        {
          name: "hu",
          humanName: "Magyar",
          googleName: "hu_HU",
          twitterName: "hu",
          file: "hu-HU.json",
        },
        {
          name: "id",
          humanName: "Bahasa Indonesia",
          googleName: "id_ID",
          twitterName: "id",
          file: "id-ID.json",
        },
        {
          name: "it",
          humanName: "Italiano",
          googleName: "it_IT",
          twitterName: "it",
          file: "it-IT.json",
        },
        {
          name: "ja",
          humanName: "日本語",
          googleName: "ja_JP",
          twitterName: "ja",
          file: "ja-JP.json",
        },
        {
          name: "ka",
          humanName: "ქართული",
          googleName: "ka_GE",
          twitterName: "ka",
          file: "ka-GE.json",
        },
        {
          name: "ko",
          humanName: "한국어",
          googleName: "ko_KR",
          twitterName: "ko",
          file: "ko-KR.json",
        },
        {
          name: "lt",
          humanName: "Lietuvių",
          googleName: "lt_LT",
          twitterName: "lt",
          file: "lt-LT.json",
        },
        {
          name: "lv",
          humanName: "Latviešu",
          googleName: "lv_LV",
          twitterName: "lv",
          file: "lv-LV.json",
        },
        {
          name: "mn",
          humanName: "Mонгол",
          googleName: "mn_MN",
          twitterName: "mn",
          file: "mn-MN.json",
        },
        {
          name: "ms",
          humanName: "Bahasa Melayu",
          googleName: "ms_MY",
          twitterName: "ms",
          file: "ms-MY.json",
        },
        {
          name: "nl",
          humanName: "Nederlands",
          googleName: "nl_NL",
          twitterName: "nl",
          file: "nl-NL.json",
        },
        {
          name: "no",
          humanName: "Norsk",
          googleName: "nb_NO",
          twitterName: "no",
          file: "nb-NO.json",
        },
        {
          name: "pl",
          humanName: "Polski",
          googleName: "pl_PL",
          twitterName: "pl",
          file: "pl-PL.json",
        },
        {
          name: "pt",
          humanName: "Português",
          googleName: "pt_BR",
          twitterName: "pt",
          file: "pt-PT.json",
        },
        {
          name: "ro",
          humanName: "Română",
          googleName: "ro_RO",
          twitterName: "ro",
          file: "ro-RO.json",
        },
        {
          name: "ru",
          humanName: "Pусский",
          googleName: "ru_RU",
          twitterName: "ru",
          file: "ru-RU.json",
        },
        {
          name: "sl",
          humanName: "Slovenščina",
          googleName: "sl_SL",
          twitterName: "sl",
          file: "sl-SI.json",
        },
        {
          name: "sq",
          humanName: "Shqip",
          googleName: "sq_AL",
          twitterName: "sq",
          file: "sq-AL.json",
        },
        {
          name: "sr",
          humanName: "Srpski",
          googleName: "sr_SP",
          twitterName: "sr",
          file: "sr-Latn-RS.json",
        },
        {
          name: "sv",
          humanName: "Svenska",
          googleName: "sv_SE",
          twitterName: "sv",
          file: "sv-SE.json",
        },
        {
          name: "th",
          humanName: "ไทย",
          googleName: "th_TH",
          twitterName: "th",
          file: "th-TH.json",
        },
        {
          name: "tr",
          humanName: "Türkçe",
          googleName: "tr_TR",
          twitterName: "tr",
          file: "tr-TR.json",
        },
        {
          name: "uk",
          humanName: "Українська",
          googleName: "uk_UA",
          twitterName: "uk",
          file: "uk-UA.json",
        },
        {
          name: "vi",
          humanName: "Tiếng Việt",
          googleName: "vi_VN",
          twitterName: "vi",
          file: "vi-VN.json",
        },
        {
          name: "zh-CN",
          humanName: "简体中文",
          googleName: "zh_CN",
          twitterName: "zh-cn",
          file: "zh-CN.json",
        },
        {
          name: "zh-HK",
          humanName: "繁體中文(香港)",
          googleName: "zh_TW",
          twitterName: "zh-tw",
          file: "zh-HK.json",
        },
      ];
    function r(e, t) {
      return (
        (function (e) {
          return a
            .map(function (e) {
              return e.name;
            })
            .find(function (t) {
              var n = new RegExp("\\/".concat(t, "\\/?$")),
                i = new RegExp("\\/".concat(t, "\\/"));
              return e.match(n) || e.match(i);
            });
        })(t) || m(e)
      );
    }
    function o(e, t) {
      return m(e) == t ? "/" : "/".concat(t, "/");
    }
    function s(e, t, n) {
      return (e + o(e, t) + "/" + n).replace("//", "/");
    }
    function c(e, t) {
      var n = a.filter(function (e) {
        return e.name == t;
      });
      return "twitter" == e.toLowerCase()
        ? n.reduce(function (e, t) {
            return t.twitterName;
          }, "en_US")
        : n.reduce(function (e, t) {
            return t.googleName;
          }, "en_US");
    }
    function l(e) {
      return a
        .filter(function (t) {
          return t.name == e;
        })
        .reduce(function (e, t) {
          return t.file;
        }, "en-US.json");
    }
    function u(e, t) {
      if (!t || !t.length) return "";
      var n,
        i = t[0];
      return !f(i, e) &&
        ((n = i),
        !!a.find(function (e) {
          return f(n, e.name);
        }))
        ? (function (e) {
            return a.find(function (t) {
              return f(e, t.name);
            }).name;
          })(i)
        : "";
    }
    function h() {
      return a
        .map(function (e) {
          return { name: e.name, humanName: e.humanName };
        })
        .sort(function (e, t) {
          return e.humanName.localeCompare(t.humanName);
        });
    }
    function m(e) {
      return i
        .filter(function (t) {
          return e.includes(t.partialName);
        })
        .reduce(function (e, t) {
          return t.locale;
        }, "en");
    }
    function f(e, t) {
      return e.length == t.length ? e == t : d(e) == d(t);
    }
    function d(e) {
      return e.split("-")[0];
    }
  },
  40: function (e, t) {
    t.hubSizes = { XS: 0.01, S: 0.2, M: 0.3, L: 0.4, XL: 0.5, XXL: 0.6 };
  },
  420: function (e, t, n) {
    "use strict";
    var i = n(148);
    n.n(i).a;
  },
  421: function (e, t, n) {
    "use strict";
    var i = n(149);
    n.n(i).a;
  },
  422: function (e, t, n) {
    "use strict";
    var i = n(150);
    n.n(i).a;
  },
  423: function (e, t, n) {
    "use strict";
    var i = n(151);
    n.n(i).a;
  },
  426: function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(5),
      a = n(22),
      r = n(50),
      o = n(153),
      s = n(228),
      c = n.n(s),
      l = n(128),
      u = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "span",
          [
            n("loading-screen", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: e.loading,
                  expression: "loading",
                },
              ],
            }),
            e._v(" "),
            n("toolbar", {
              on: {
                "show-snackbar-message": e.showSnackbarMessage,
                "reset-wheel": function (t) {
                  return e.resetWheel();
                },
                "open-open-dialog": function (t) {
                  return e.openOpenDialog();
                },
                "open-save-dialog": function (t) {
                  return e.openSaveDialog();
                },
                "open-share-dialog": function (t) {
                  return e.openShareDialog();
                },
                "open-customize-dialog": function (t) {
                  return e.openCustomizeDialog();
                },
                "open-twitter-dialog": function (t) {
                  return e.openTwitterDialog();
                },
                "open-sheet-dialog": function (t) {
                  return e.openSheetDialog();
                },
                "set-locale": e.setLocale,
              },
            }),
            e._v(" "),
            n(
              "section",
              {
                staticClass: "section",
                staticStyle: { "padding-top": "1rem", "padding-bottom": "0" },
              },
              [
                n(
                  "div",
                  {
                    staticClass: "columns",
                    class: {
                      "is-centered": e.$store.state.appStatus.fullScreen,
                    },
                  },
                  [
                    n(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !e.$store.state.appStatus.fullScreen,
                            expression: "!$store.state.appStatus.fullScreen",
                          },
                        ],
                        staticClass: "column is-3",
                      },
                      ["desktop" == e.$mq ? n("desktopAd") : e._e()],
                      1
                    ),
                    e._v(" "),
                    n(
                      "div",
                      {
                        staticClass: "column is-6",
                        class: { "is-7": e.$store.state.appStatus.fullScreen },
                      },
                      [
                        n("spinningwheel", {
                          ref: "spinningwheel",
                          on: {
                            "wheel-started": e.wheelStarted,
                            "name-changed": e.nameChanged,
                            "wheel-stopped": e.wheelStopped,
                          },
                        }),
                      ],
                      1
                    ),
                    e._v(" "),
                    n(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !e.$store.state.appStatus.fullScreen,
                            expression: "!$store.state.appStatus.fullScreen",
                          },
                        ],
                        staticClass: "column is-3",
                      },
                      [n("name-tabs")],
                      1
                    ),
                  ]
                ),
              ]
            ),
            e._v(" "),
            "mobile" == e.$mq ? n("mobileAd") : e._e(),
            e._v(" "),
            n("opendialog", {
              ref: "opendialog",
              on: {
                "show-snackbar-message": e.showSnackbarMessage,
                "start-wait-animation": e.startWaitAnimation,
                "stop-wait-animation": e.stopWaitAnimation,
                "auth-error": e.authError,
                "reset-wheel-rotation": e.resetWheelRotation,
              },
            }),
            e._v(" "),
            n("savedialog", {
              ref: "savedialog",
              on: {
                "show-snackbar-message": e.showSnackbarMessage,
                "start-wait-animation": e.startWaitAnimation,
                "stop-wait-animation": e.stopWaitAnimation,
                "auth-error": e.authError,
              },
            }),
            e._v(" "),
            n("optionsdialog", {
              ref: "optionsdialog",
              on: { "show-snackbar-message": e.showSnackbarMessage },
            }),
            e._v(" "),
            n("sharedialog", {
              ref: "sharedialog",
              on: {
                "show-snackbar-message": e.showSnackbarMessage,
                "start-wait-animation": e.startWaitAnimation,
                "stop-wait-animation": e.stopWaitAnimation,
              },
            }),
            e._v(" "),
            n("twitterdialog", {
              ref: "twitterdialog",
              on: {
                "show-snackbar-message": e.showSnackbarMessage,
                "start-wait-animation": e.startWaitAnimation,
                "stop-wait-animation": e.stopWaitAnimation,
              },
            }),
            e._v(" "),
            n("sheetdialog", {
              ref: "sheetdialog",
              on: {
                "show-snackbar-message": e.showSnackbarMessage,
                "auth-error": e.authError,
              },
            }),
            e._v(" "),
            n("winnerdialog", {
              ref: "winnerdialog",
              on: {
                "remove-name": e.removeName,
                "remove-name-all": e.removeNameAll,
              },
            }),
            e._v(" "),
            n("winneranimation", { ref: "winneranimation" }),
          ],
          1
        );
      };
    u._withStripped = !0;
    var h = n(134),
      m = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-navbar",
          {
            staticStyle: { "box-shadow": "0 3px 3px 0 lightgrey" },
            attrs: { type: "is-info" },
          },
          [
            n(
              "template",
              { slot: "brand" },
              [
                n(
                  "b-navbar-item",
                  {
                    staticStyle: { "font-size": "24px" },
                    attrs: { href: "/" },
                  },
                  [e._v("\n      " + e._s(e.toolbarBrand) + "\n    ")]
                ),
              ],
              1
            ),
            e._v(" "),
            n(
              "template",
              { slot: "start" },
              [
                n(
                  "b-tag",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !e.$store.state.appStatus.online,
                        expression: "!$store.state.appStatus.online",
                      },
                    ],
                    staticStyle: { "margin-top": "1.2em" },
                    attrs: { type: "is-warning" },
                  },
                  [
                    e._v(
                      "\n      " + e._s(e.$t("toolbar.Offline mode")) + "\n    "
                    ),
                  ]
                ),
              ],
              1
            ),
            e._v(" "),
            n(
              "template",
              { slot: "end" },
              [
                n(
                  "b-navbar-item",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.newButtonVisible,
                        expression: "newButtonVisible",
                      },
                    ],
                    attrs: { href: "#" },
                    on: {
                      click: function (t) {
                        return e.$emit("reset-wheel");
                      },
                    },
                  },
                  [
                    n("i", { staticClass: "fas fa-file fa-fw" }),
                    e._v(" " + e._s(e.$t("toolbar.New")) + "\n    "),
                  ]
                ),
                e._v(" "),
                n(
                  "b-navbar-item",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.openButtonVisible,
                        expression: "openButtonVisible",
                      },
                    ],
                    attrs: { href: "#" },
                    on: {
                      click: function (t) {
                        return e.$emit("open-open-dialog");
                      },
                    },
                  },
                  [
                    n("i", { staticClass: "fa fa-folder-open fa-fw" }),
                    e._v(" " + e._s(e.$t("common.Open")) + "\n    "),
                  ]
                ),
                e._v(" "),
                n(
                  "b-navbar-item",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.saveButtonVisible,
                        expression: "saveButtonVisible",
                      },
                    ],
                    attrs: { href: "#" },
                    on: {
                      click: function (t) {
                        return e.$emit("open-save-dialog");
                      },
                    },
                  },
                  [
                    n("i", { staticClass: "fa fa-save fa-fw" }),
                    e._v(" " + e._s(e.$t("common.Save")) + "\n    "),
                  ]
                ),
                e._v(" "),
                n(
                  "b-navbar-item",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.shareButtonVisible,
                        expression: "shareButtonVisible",
                      },
                    ],
                    attrs: { href: "#" },
                    on: {
                      click: function (t) {
                        return e.$emit("open-share-dialog");
                      },
                    },
                  },
                  [
                    n("i", { staticClass: "fa fa-share-alt fa-fw" }),
                    e._v(" " + e._s(e.$t("toolbar.Share")) + "\n    "),
                  ]
                ),
                e._v(" "),
                n(
                  "b-navbar-item",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.optionsButtonVisible,
                        expression: "optionsButtonVisible",
                      },
                    ],
                    attrs: { href: "#" },
                    on: {
                      click: function (t) {
                        return e.$emit("open-customize-dialog");
                      },
                    },
                  },
                  [
                    n("i", { staticClass: "fas fa-palette fa-fw" }),
                    e._v(" " + e._s(e.$t("common.Customize")) + "\n    "),
                  ]
                ),
                e._v(" "),
                e.browserIsIEOrOldEdge
                  ? e._e()
                  : n(
                      "b-navbar-item",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e.optionsButtonVisible,
                            expression: "optionsButtonVisible",
                          },
                        ],
                        attrs: { href: "#" },
                        on: {
                          click: function (t) {
                            return e.toggleDarkMode();
                          },
                        },
                      },
                      [
                        n("i", { staticClass: "fas fa-moon" }),
                        e._v(" " + e._s(e.$t("toolbar.Dark mode")) + "\n    "),
                      ]
                    ),
                e._v(" "),
                n(
                  "b-navbar-item",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.fullscreenButtonVisible,
                        expression: "fullscreenButtonVisible",
                      },
                    ],
                    attrs: { href: "#" },
                    on: {
                      click: function (t) {
                        return e.$store.commit("enterFullScreen");
                      },
                    },
                  },
                  [
                    n("i", { staticClass: "fa fa-expand fa-fw" }),
                    e._v(" " + e._s(e.$t("toolbar.Fullscreen")) + "\n    "),
                  ]
                ),
                e._v(" "),
                n(
                  "b-navbar-item",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.exitFullscreenButtonVisible,
                        expression: "exitFullscreenButtonVisible",
                      },
                    ],
                    attrs: { href: "#" },
                    on: {
                      click: function (t) {
                        return e.$store.commit("exitFullScreen");
                      },
                    },
                  },
                  [
                    n("i", { staticClass: "fa fa-compress fa-fw" }),
                    e._v(
                      " " + e._s(e.$t("toolbar.Exit fullscreen")) + "\n    "
                    ),
                  ]
                ),
                e._v(" "),
                n(
                  "b-navbar-item",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.unlinkSheetButtonVisible,
                        expression: "unlinkSheetButtonVisible",
                      },
                    ],
                    attrs: { href: "#" },
                    on: {
                      click: function (t) {
                        return e.$store.commit("unlinkSheet");
                      },
                    },
                  },
                  [
                    n("i", { staticClass: "fa fa-unlink fa-fw" }),
                    e._v(
                      " " +
                        e._s(e.$t("toolbar.Unlink Google Spreadsheet")) +
                        "\n    "
                    ),
                  ]
                ),
                e._v(" "),
                e.browserIsIEOrOldEdge
                  ? [
                      n(
                        "b-navbar-item",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.feedbackbuttonVisible,
                              expression: "feedbackbuttonVisible",
                            },
                          ],
                          attrs: { target: "_new", href: e.feedbackFormUrl },
                        },
                        [
                          n("i", { staticClass: "fa fa-comment fa-fw" }),
                          e._v(
                            " " + e._s(e.$t("toolbar.Feedback")) + "\n      "
                          ),
                        ]
                      ),
                    ]
                  : [
                      n(
                        "b-navbar-dropdown",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.moreVisible,
                              expression: "moreVisible",
                            },
                          ],
                          attrs: { label: e.$t("toolbar.More"), right: !0 },
                        },
                        [
                          n(
                            "b-navbar-item",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.feedbackbuttonVisible,
                                  expression: "feedbackbuttonVisible",
                                },
                              ],
                              attrs: {
                                target: "_new",
                                href: e.feedbackFormUrl,
                              },
                            },
                            [
                              n("i", { staticClass: "fa fa-comment fa-fw" }),
                              e._v(
                                " " +
                                  e._s(e.$t("toolbar.Feedback")) +
                                  "\n        "
                              ),
                            ]
                          ),
                          e._v(" "),
                          n(
                            "b-navbar-item",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.faqbuttonVisible,
                                  expression: "faqbuttonVisible",
                                },
                              ],
                              attrs: { href: "/faq.html" },
                            },
                            [
                              n("i", {
                                staticClass: "fa fa-question-circle fa-fw",
                              }),
                              e._v(
                                " " + e._s(e.$t("toolbar.FAQ")) + "\n        "
                              ),
                            ]
                          ),
                          e._v(" "),
                          n(
                            "b-navbar-item",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.feedbackbuttonVisible,
                                  expression: "feedbackbuttonVisible",
                                },
                              ],
                              attrs: { href: "/privacy-policy.html" },
                            },
                            [
                              n("i", {
                                staticClass: "fas fa-user-secret fa-fw",
                              }),
                              e._v(
                                " " +
                                  e._s(e.$t("common.Privacy policy")) +
                                  "\n        "
                              ),
                            ]
                          ),
                          e._v(" "),
                          n(
                            "b-navbar-item",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.feedbackbuttonVisible,
                                  expression: "feedbackbuttonVisible",
                                },
                              ],
                              attrs: { href: "/faq/terms" },
                            },
                            [
                              n("i", {
                                staticClass: "fas fa-balance-scale fa-fw",
                              }),
                              e._v(
                                " " +
                                  e._s(e.$t("appInfo.Terms of service")) +
                                  "\n        "
                              ),
                            ]
                          ),
                          e._v(" "),
                          n(
                            "b-navbar-item",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.feedbackbuttonVisible,
                                  expression: "feedbackbuttonVisible",
                                },
                              ],
                              attrs: {
                                target: "_new",
                                href:
                                  "https://docs.google.com/forms/d/e/1FAIpQLSdLAmpGSSVJo0-4tsTy0wvdQpwWk-oixWovXHOxaQB5j3O3qg/viewform",
                              },
                            },
                            [
                              n("i", { staticClass: "fas fa-flag fa-fw" }),
                              e._v(
                                " " +
                                  e._s(
                                    e.$t("common.Report offensive content")
                                  ) +
                                  "\n        "
                              ),
                            ]
                          ),
                          e._v(" "),
                          n(
                            "b-navbar-item",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.feedbackbuttonVisible,
                                  expression: "feedbackbuttonVisible",
                                },
                              ],
                              on: { click: e.recordDebugData },
                            },
                            [
                              n("i", {
                                staticClass: "fas fa-wave-square fa-fw",
                              }),
                              e._v(
                                "  " +
                                  e._s(e.$t("toolbar.Send debug data")) +
                                  "\n        "
                              ),
                            ]
                          ),
                          e._v(" "),
                          n("b-navbar-item"),
                          e._v(" "),
                          n(
                            "b-navbar-item",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.importVisible,
                                  expression: "importVisible",
                                },
                              ],
                              attrs: { href: "#" },
                              on: {
                                click: function (t) {
                                  return e.$emit("open-twitter-dialog");
                                },
                              },
                            },
                            [
                              n("i", { staticClass: "fab fa-twitter fa-fw" }),
                              e._v(
                                " " +
                                  e._s(e.$t("common.Import Twitter users")) +
                                  "\n        "
                              ),
                            ]
                          ),
                          e._v(" "),
                          n(
                            "b-navbar-item",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.importVisible,
                                  expression: "importVisible",
                                },
                              ],
                              attrs: { href: "#" },
                              on: {
                                click: function (t) {
                                  return e.$emit("open-sheet-dialog");
                                },
                              },
                            },
                            [
                              n("i", { staticClass: "fa fa-link fa-fw" }),
                              e._v(
                                " " +
                                  e._s(e.$t("common.Link Google Spreadsheet")) +
                                  "\n        "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      e._v(" "),
                      "mobile" == e.$mq
                        ? n(
                            "b-navbar-dropdown",
                            { attrs: { label: e.$t("toolbar.Language") } },
                            e._l(e.locales, function (t) {
                              return n(
                                "b-navbar-item",
                                {
                                  key: t.name,
                                  attrs: { href: "#" },
                                  on: {
                                    click: function (n) {
                                      return e.$emit("set-locale", t.name);
                                    },
                                  },
                                },
                                [
                                  e._v(
                                    "\n          " +
                                      e._s(t.humanName) +
                                      "\n      "
                                  ),
                                ]
                              );
                            }),
                            1
                          )
                        : e._e(),
                      e._v(" "),
                      "mobile" != e.$mq
                        ? n(
                            "b-navbar-item",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.languageVisible,
                                  expression: "languageVisible",
                                },
                              ],
                              attrs: { tag: "div", href: "#" },
                            },
                            [
                              n(
                                "b-select",
                                {
                                  model: {
                                    value: e.locale,
                                    callback: function (t) {
                                      e.locale = t;
                                    },
                                    expression: "locale",
                                  },
                                },
                                [
                                  e._l(e.locales, function (t) {
                                    return n(
                                      "option",
                                      {
                                        key: t.name,
                                        domProps: { value: t.name },
                                      },
                                      [
                                        e._v(
                                          "\n          " +
                                            e._s(t.humanName) +
                                            "\n        "
                                        ),
                                      ]
                                    );
                                  }),
                                  e._v(" "),
                                  n("option", {
                                    attrs: { value: "add-your-language" },
                                  }),
                                  e._v(" "),
                                  n(
                                    "option",
                                    { attrs: { value: "add-your-language" } },
                                    [
                                      e._v(
                                        "\n          " +
                                          e._s(
                                            e.$t("toolbar.Add your language")
                                          ) +
                                          "\n        "
                                      ),
                                    ]
                                  ),
                                ],
                                2
                              ),
                            ],
                            1
                          )
                        : e._e(),
                    ],
              ],
              2
            ),
          ],
          2
        );
      };
    m._withStripped = !0;
    var f = n(0),
      d = n(4),
      p = {
        data: function () {
          return {
            toolbarBrand: window.location.host,
            browserIsIEOrOldEdge: f.e(navigator.userAgent),
            locale: this.$i18n.locale,
            locales: d.g(),
            feedbackFormUrl:
              "https://docs.google.com/forms/d/e/1FAIpQLSf4uHdyUJVctmMgrmgKFjTzcl9n13r1MfVJpo9IZ_NEVAc6Aw/viewform?entry.1064273724=" +
              navigator.userAgent,
          };
        },
        computed: {
          newButtonVisible: function () {
            var e = this.$store.state.appStatus;
            return !e.fullScreen && !e.sheetLinked && !e.wheelSpinning;
          },
          openButtonVisible: function () {
            var e = this.$store.state.appStatus;
            return !e.fullScreen && !e.sheetLinked && !e.wheelSpinning;
          },
          saveButtonVisible: function () {
            var e = this.$store.state.appStatus;
            return e.online && !e.fullScreen && !e.wheelSpinning;
          },
          shareButtonVisible: function () {
            var e = this.$store.state.appStatus;
            return e.online && !e.fullScreen && !e.wheelSpinning;
          },
          optionsButtonVisible: function () {
            var e = this.$store.state.appStatus;
            return !this.$store.state.appStatus.fullScreen && !e.wheelSpinning;
          },
          fullscreenButtonVisible: function () {
            var e = this.$store.state.appStatus;
            return !e.fullScreen && !e.wheelSpinning;
          },
          exitFullscreenButtonVisible: function () {
            return this.$store.state.appStatus.fullScreen;
          },
          moreVisible: function () {
            var e = this.$store.state.appStatus;
            return e.online && !e.fullScreen && !e.wheelSpinning;
          },
          importVisible: function () {
            var e = this.$store.state.appStatus;
            return (
              e.online && !e.fullScreen && !e.sheetLinked && !e.wheelSpinning
            );
          },
          unlinkSheetButtonVisible: function () {
            var e = this.$store.state.appStatus;
            return e.sheetLinked && !e.fullScreen && !e.wheelSpinning;
          },
          languageVisible: function () {
            var e = this.$store.state.appStatus;
            return e.online && !e.fullScreen && !e.wheelSpinning;
          },
          faqbuttonVisible: function () {
            var e = this.$store.state.appStatus;
            return !e.fullScreen && !e.wheelSpinning;
          },
          feedbackbuttonVisible: function () {
            var e = this.$store.state.appStatus;
            return e.online && !e.fullScreen && !e.wheelSpinning;
          },
        },
        watch: {
          locale: function (e) {
            "add-your-language" == e
              ? (location.href = "/translate.html")
              : this.$emit("set-locale", e);
          },
        },
        methods: {
          recordDebugData: function () {
            var e = prompt(this.$t("toolbar.Please enter your email address"));
            e &&
              (f.p(e),
              this.$emit(
                "show-snackbar-message",
                this.$t("toolbar.Your session is now being recorded")
              ));
          },
          toggleDarkMode: function () {
            f.t("Wheel", "ToggleDarkMode", ""),
              this.$store.commit("toggleDarkMode");
          },
        },
      },
      g = n(1),
      v = Object(g.a)(p, m, [], !1, null, null, null);
    v.options.__file = "static/toolbar.vue";
    var w = v.exports,
      b = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.showAd
          ? n(
              "div",
              [
                n("div", { staticClass: "ad-declaration" }, [
                  e._v("\n    " + e._s(e.$t("app.Ads")) + "\n    "),
                  n(
                    "span",
                    { staticStyle: { float: "right" } },
                    [
                      e._v(
                        "\n      " + e._s(e.$t("app.Close ad")) + "\n      "
                      ),
                      n("b-button", {
                        staticStyle: { "margin-left": "10px" },
                        attrs: {
                          type: "is-light",
                          pack: "far",
                          "icon-left": "times-circle",
                          size: "is-small",
                        },
                        on: {
                          click: function (t) {
                            return e.hideAd();
                          },
                        },
                      }),
                    ],
                    1
                  ),
                ]),
                e._v(" "),
                n("br"),
                e._v(" "),
                "setup" == e.adVendor ? n("desktopSetupAd") : e._e(),
                e._v(" "),
                "oko" == e.adVendor ? n("desktopOkoAd") : e._e(),
                e._v(" "),
                n("br"),
                e._v(" "),
                n("div", { staticClass: "ad-declaration" }, [
                  e.showReporting
                    ? e._e()
                    : n("div", [
                        e._v(
                          "\n      " +
                            e._s(
                              e.$t(
                                "app.We try to display only legitimate and honest ads"
                              )
                            ) +
                            "\n      "
                        ),
                        n(
                          "a",
                          {
                            on: {
                              click: function (t) {
                                return e.showReportingBox();
                              },
                            },
                          },
                          [
                            e._v(
                              e._s(
                                e.$t(
                                  "app.Click here to report an inappropriate ad"
                                )
                              )
                            ),
                          ]
                        ),
                      ]),
                  e._v(" "),
                  e.showReporting
                    ? n("div", { staticClass: "card" }, [
                        e._m(0),
                        e._v(" "),
                        n("div", { staticClass: "card-content" }, [
                          n("ol", [
                            e._m(1),
                            e._v(" "),
                            n("li", [
                              e._v(
                                "\n            Create an email with the subject line "
                              ),
                              n("b", [
                                e._v('Bad "' + e._s(e.adVendor) + '" ad'),
                              ]),
                            ]),
                            e._v(" "),
                            n("li", [
                              e._v(
                                "\n            Attach the screenshot to the email and send it to admin@wheelofnames.com.\n          "
                              ),
                            ]),
                          ]),
                        ]),
                      ])
                    : e._e(),
                ]),
              ],
              1
            )
          : e._e();
      };
    b._withStripped = !0;
    var y = function () {
      var e = this.$createElement,
        t = this._self._c || e;
      return t(
        "div",
        [
          t("iframe", {
            attrs: {
              id: "wheelofnames.com_300x250_desktop_DFP",
              frameborder: "0",
              scrolling: "no",
              marginheight: "0",
              marginwidth: "0",
              topmargin: "0",
              leftmargin: "0",
              width: "300",
              height: "250",
            },
          }),
          this._v(" "),
          t("script", { tag: "component" }, [
            this._v(
              "\n      (function () {\n        var size='300x250',\n          adunit = 'wheelofnames.com_300x250_desktop_DFP',\n          xmlhttp = new XMLHttpRequest();xmlhttp.onreadystatechange = function(){if (xmlhttp.readyState == 4 && xmlhttp.status == 200){var iframe = document.getElementById(adunit).contentWindow.document;iframe.open();iframe.write(xmlhttp.responseText);iframe.close();}};xmlhttp.open(\"GET\", 'https://pubads.g.doubleclick.net/gampad/adx?iu=/147246189/'+adunit+'&sz='+encodeURI(size)+'&t=Placement_type%3Dserving&'+Date.now(), true);xmlhttp.send();})();\n      console.log('Setupad desktop');\n  "
            ),
          ]),
        ],
        1
      );
    };
    y._withStripped = !0;
    var _ = Object(g.a)({}, y, [], !1, null, null, null);
    _.options.__file = "static/desktopSetupAd.vue";
    var k = _.exports,
      C = function () {
        var e = this.$createElement,
          t = this._self._c || e;
        return t("div", [
          t(
            "div",
            { attrs: { id: "div-gpt-ad-homepage-1" } },
            [
              t("script", { tag: "component" }, [
                this._v(
                  "\n      googletag.cmd.push(function() {\n          googletag.defineSlot('/2507246/WON//homepage//1', [300, 250], 'div-gpt-ad-homepage-1').addService(googletag.pubads());\n          googletag.enableServices();\n          googletag.display('div-gpt-ad-homepage-1');\n      });\n      console.log('OKO desktop');\n    "
                ),
              ]),
            ],
            1
          ),
        ]);
      };
    C._withStripped = !0;
    n(420);
    var S = Object(g.a)({}, C, [], !1, null, null, null);
    S.options.__file = "static/desktopOkoAd.vue";
    var F = {
        components: { desktopSetupAd: k, desktopOkoAd: S.exports },
        data: function () {
          return { showAd: !0, showReporting: !1 };
        },
        computed: {
          adVendor: function () {
            return location.pathname.includes("oko")
              ? "oko"
              : location.pathname.includes("setup")
              ? "setup"
              : Math.random() < 0.25
              ? "oko"
              : "setup";
          },
        },
        methods: {
          hideAd: function () {
            f.t("Wheel", "HideAd", ""), (this.showAd = !1);
          },
          showReportingBox: function () {
            f.t("Wheel", "ShowBadAdInstructions", ""),
              (this.showReporting = !0);
          },
        },
      },
      x =
        (n(421),
        Object(g.a)(
          F,
          b,
          [
            function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("div", { staticClass: "card-header" }, [
                t("div", { staticClass: "card-header-title" }, [
                  this._v(
                    "\n          How to report an inappropriate ad\n        "
                  ),
                ]),
              ]);
            },
            function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("li", [
                this._v(
                  "\n            Take a screenshot of this page.\n            (Unsure how to take a screenshot?\n            "
                ),
                t(
                  "a",
                  {
                    attrs: {
                      target: "_new",
                      href: "https://www.take-a-screenshot.org/",
                    },
                  },
                  [this._v("See instructions here")]
                ),
                this._v(".)\n          "),
              ]);
            },
          ],
          !1,
          null,
          "c5de48e8",
          null
        ));
    x.options.__file = "static/desktopAd.vue";
    var $ = x.exports,
      N = n(131),
      E = n(54),
      D = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-tabs",
          {
            attrs: { type: "is-boxed", size: "is-small" },
            model: {
              value: e.activeTab,
              callback: function (t) {
                e.activeTab = t;
              },
              expression: "activeTab",
            },
          },
          [
            n(
              "b-tab-item",
              {
                scopedSlots: e._u([
                  {
                    key: "header",
                    fn: function () {
                      return [
                        n(
                          "span",
                          [
                            e._v(
                              "\n        " +
                                e._s(e.$t("nameTabs.Entries")) +
                                "\n        "
                            ),
                            n("counter-tag", {
                              attrs: { number: e.$store.getters.entryCount },
                            }),
                          ],
                          1
                        ),
                      ];
                    },
                    proxy: !0,
                  },
                ]),
              },
              [
                e._v(" "),
                n("textboxbuttons"),
                e._v(" "),
                n("textbox"),
                e._v(" "),
                n("app-info"),
              ],
              1
            ),
            e._v(" "),
            n(
              "b-tab-item",
              {
                scopedSlots: e._u([
                  {
                    key: "header",
                    fn: function () {
                      return [
                        n(
                          "span",
                          [
                            e._v(
                              "\n        " +
                                e._s(e.$t("nameTabs.Results")) +
                                "\n        "
                            ),
                            n("counter-tag", {
                              attrs: { number: e.$store.getters.winnerCount },
                            }),
                          ],
                          1
                        ),
                      ];
                    },
                    proxy: !0,
                  },
                ]),
              },
              [
                e._v(" "),
                n(
                  "b-button",
                  {
                    attrs: { size: "is-small", type: "is-light" },
                    on: { click: e.clearWinners },
                  },
                  [
                    n("i", { staticClass: "fas fa-times" }),
                    e._v(
                      " " + e._s(e.$t("nameTabs.Clear the list")) + "\n    "
                    ),
                  ]
                ),
                e._v(" "),
                n("winnertextbox"),
              ],
              1
            ),
          ],
          1
        );
      };
    D._withStripped = !0;
    var R = function () {
      var e = this.$createElement;
      return (this._self._c || e)(
        "b-tag",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: this.number > 0,
              expression: "number>0",
            },
          ],
          attrs: { rounded: "" },
        },
        [this._v(this._s(this.number.toLocaleString()))]
      );
    };
    R._withStripped = !0;
    var A = { props: ["number"] },
      I = Object(g.a)(A, R, [], !1, null, null, null);
    I.options.__file = "static/counterTag.vue";
    var T = I.exports,
      P = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "span",
          [
            n(
              "b-button",
              {
                attrs: {
                  size: "is-small",
                  type: "is-light",
                  disabled: e.buttonsDisabled,
                },
                on: { click: e.shuffle },
              },
              [
                n("i", { staticClass: "fas fa-random" }),
                e._v(" " + e._s(e.$t("textboxbuttons.Shuffle")) + "\n  "),
              ]
            ),
            e._v(" "),
            n(
              "b-button",
              {
                attrs: {
                  size: "is-small",
                  type: "is-light",
                  disabled: e.buttonsDisabled,
                },
                on: { click: e.sort },
              },
              [
                n("i", { staticClass: "fas fa-sort-alpha-up" }),
                e._v(" " + e._s(e.$t("textboxbuttons.Sort")) + "\n  "),
              ]
            ),
            e._v(" "),
            n(
              "b-upload",
              {
                attrs: {
                  accept: "image/*",
                  multiple: "",
                  disabled: e.buttonsDisabled,
                },
                model: {
                  value: e.uploadedImage,
                  callback: function (t) {
                    e.uploadedImage = t;
                  },
                  expression: "uploadedImage",
                },
              },
              [
                n(
                  "a",
                  {
                    staticClass: "button is-small is-light",
                    attrs: { disabled: e.buttonsDisabled },
                  },
                  [
                    n("i", { staticClass: "far fa-image" }),
                    e._v(
                      " " + e._s(e.$t("textboxbuttons.Add image")) + "\n    "
                    ),
                  ]
                ),
              ]
            ),
          ],
          1
        );
      };
    P._withStripped = !0;
    var W = n(10);
    function B(e, t, n, i, a, r, o) {
      try {
        var s = e[r](o),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(i, a);
    }
    function L(e, t) {
      var n;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return O(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return O(e, t);
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var i = 0,
            a = function () {};
          return {
            s: a,
            n: function () {
              return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
            },
            e: function (e) {
              throw e;
            },
            f: a,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var r,
        o = !0,
        s = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return (o = e.done), e;
        },
        e: function (e) {
          (s = !0), (r = e);
        },
        f: function () {
          try {
            o || null == n.return || n.return();
          } finally {
            if (s) throw r;
          }
        },
      };
    }
    function O(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    var j = {
        data: function () {
          return { uploadedImage: [] };
        },
        watch: {
          uploadedImage: function (e) {
            var t = this;
            if ((f.m(), 0 != e.length)) {
              f.t("Wheel", "UploadPieSliceImage", e.length);
              var n,
                i = L(e);
              try {
                var a = function () {
                  var e = n.value,
                    i = new FileReader(),
                    a = t;
                  (i.onload = (function () {
                    var e,
                      t =
                        ((e = regeneratorRuntime.mark(function e(t) {
                          var n, i;
                          return regeneratorRuntime.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), W.f(t.target.result);
                                case 2:
                                  (n = e.sent),
                                    (i = '<img src="'.concat(
                                      n,
                                      '" style="height:25px" style="font-size: 1rem;">'
                                    )),
                                    a.$store.commit("appendNames", [i]);
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })),
                        function () {
                          var t = this,
                            n = arguments;
                          return new Promise(function (i, a) {
                            var r = e.apply(t, n);
                            function o(e) {
                              B(r, i, a, o, s, "next", e);
                            }
                            function s(e) {
                              B(r, i, a, o, s, "throw", e);
                            }
                            o(void 0);
                          });
                        });
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })()),
                    i.readAsDataURL(e);
                };
                for (i.s(); !(n = i.n()).done; ) a();
              } catch (e) {
                i.e(e);
              } finally {
                i.f();
              }
              this.uploadedImage = [];
            }
          },
        },
        computed: {
          buttonsDisabled: function () {
            var e = this.$store.state.appStatus;
            return e.sheetLinked || e.wheelSpinning;
          },
        },
        methods: {
          shuffle: function () {
            event.shiftKey
              ? this.$store.commit("toggleDarkMode")
              : (f.m(),
                f.t("Wheel", "ShuffleNames", ""),
                this.$store.commit("shuffleNames"));
          },
          sort: function () {
            f.m(),
              f.t("Wheel", "SortNames", ""),
              this.$store.commit("sortNames");
          },
        },
      },
      M = Object(g.a)(j, P, [], !1, null, null, null);
    M.options.__file = "static/textboxbuttons.vue";
    var V = M.exports,
      z = function () {
        var e = this,
          t = e.$createElement;
        return (e._self._c || t)("div", {
          staticClass: "textarea can-go-dark",
          staticStyle: {
            overflow: "auto",
            "font-family":
              "BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          },
          style:
            "height:" +
            (e.$store.state.preferences.appInfoVisible ? "380px" : "520px"),
          attrs: { id: "names", spellcheck: "false", contentEditable: "true" },
          on: {
            paste: e.onPaste,
            input: function (t) {
              return e.setNames();
            },
            keyup: e.IE_setNames,
          },
        });
      };
    z._withStripped = !0;
    var U = {
        data: function () {
          return { updateTriggeredByMe: !1 };
        },
        computed: {
          names: function () {
            return this.$store.state.wheelConfig.names;
          },
          wheelConfig: function () {
            return this.$store.state.wheelConfig;
          },
          wheelSpinning: function () {
            return this.$store.state.appStatus.wheelSpinning;
          },
          sheetLinked: function () {
            return this.$store.state.appStatus.sheetLinked;
          },
        },
        watch: {
          names: function (e, t) {
            this.updateTriggeredByMe
              ? (this.updateTriggeredByMe = !1)
              : (document.getElementById("names").innerHTML = e
                  .map(function (e) {
                    return "<div>".concat(e, "</div>");
                  })
                  .join(""));
          },
          wheelConfig: function (e, t) {
            document.getElementById("names").innerHTML = e.names
              .map(function (e) {
                return "<div>".concat(e, "</div>");
              })
              .join("");
          },
          wheelSpinning: function (e) {
            var t = !e;
            document.getElementById("names").setAttribute("contenteditable", t);
          },
          sheetLinked: function (e) {
            var t = !e,
              n = document.getElementById("names");
            n.setAttribute("contenteditable", t),
              e
                ? ((n.style.backgroundImage = "url('/images/link.png')"),
                  (n.style.backgroundSize = "100%"),
                  (n.style.backgroundAttachment = "local"))
                : (n.style.backgroundImage = "");
          },
        },
        methods: {
          setNames: function () {
            f.m(), (this.updateTriggeredByMe = !0);
            var e = this.getEntries();
            this.$store.commit("setNames", e);
          },
          IE_setNames: function () {
            f.d() && this.setNames();
          },
          getEntries: function () {
            var e = document.getElementById("names").innerHTML;
            return this.getEntriesFromHtml(e);
          },
          getEntriesFromHtml: function (e) {
            if (!e) return [];
            var t = e.split(/<div>|<br>|<p>/),
              n = ["</div>", "<br>", "</p>", /<span.*?>/, "</span>"];
            return t
              .map(function (e) {
                var t = e;
                return (
                  n.forEach(function (e) {
                    t = t.replace(e, "");
                  }),
                  t
                );
              })
              .filter(function (e) {
                return "" != e;
              });
          },
          onPaste: function (e) {
            if (
              (e.preventDefault(),
              f.t("Wheel", "PasteIntoTextbox", ""),
              e.clipboardData)
            ) {
              var t = (e.originalEvent || e).clipboardData
                .getData("text/html")
                .match(/(<.*?src="data:image.*?>)/);
              if (t) document.execCommand("insertHtml", !1, t[1]);
              else {
                var n = (e.originalEvent || e).clipboardData.getData(
                  "text/plain"
                );
                document.execCommand("insertText", !1, n);
              }
            } else {
              var i = window.clipboardData.getData("text");
              i && this.$store.commit("appendNames", i.split(/\n/));
            }
          },
        },
      },
      H = Object(g.a)(U, z, [], !1, null, null, null);
    H.options.__file = "static/textbox.vue";
    var G = H.exports,
      q = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            staticClass: "card can-go-dark",
            staticStyle: { "margin-top": "10px" },
          },
          [
            n(
              "div",
              { staticClass: "card-content", staticStyle: { padding: "10px" } },
              [
                n("div", { staticClass: "content" }, [
                  e.appInfoVisible
                    ? n(
                        "div",
                        [
                          n("b-button", {
                            staticStyle: {
                              float: "right",
                              "margin-left": "10px",
                            },
                            attrs: {
                              type: "is-light",
                              pack: "fas",
                              "icon-left": "chevron-circle-down",
                              size: "is-small",
                            },
                            on: { click: e.toggleVisibility },
                          }),
                          e._v(" "),
                          e._m(0),
                          e._v(" "),
                          n("span", { staticStyle: { color: "#999" } }, [
                            e._v(
                              e._s(e.$t("appInfo.Version")) +
                                " " +
                                e._s(e.version)
                            ),
                          ]),
                        ],
                        1
                      )
                    : n(
                        "div",
                        [
                          n("b-button", {
                            staticStyle: {
                              float: "right",
                              "margin-top": "-5px",
                            },
                            attrs: {
                              type: "is-light",
                              pack: "fas",
                              "icon-left": "chevron-circle-up",
                              size: "is-small",
                            },
                            on: { click: e.toggleVisibility },
                          }),
                          e._v(" "),
                          n("span", { staticStyle: { color: "#999" } }, [
                            e._v(
                              e._s(e.$t("appInfo.Version")) +
                                " " +
                                e._s(e.version)
                            ),
                          ]),
                        ],
                        1
                      ),
                ]),
              ]
            ),
          ]
        );
      };
    q._withStripped = !0;
    var J = {
        computed: {
          appInfoVisible: function () {
            return this.$store.state.preferences.appInfoVisible;
          },
          version: function () {
            return this.$store.state.version;
          },
        },
        methods: {
          toggleVisibility: function () {
            f.t("Wheel", "ToggleAppInfoVisibility", ""),
              this.$store.commit("toggleAppInfoVisibility");
          },
        },
      },
      K = Object(g.a)(
        J,
        q,
        [
          function () {
            var e = this.$createElement,
              t = this._self._c || e;
            return t("div", [
              t("i", { staticClass: "fas fa-clock" }),
              this._v(
                "\n          Find the best meeting times for people across multiple timezones with my\n          new tool "
              ),
              t(
                "a",
                {
                  attrs: { target: "_new", href: "https://timezonewizard.com" },
                },
                [this._v("TimezoneWizard.com")]
              ),
              this._v(
                ".\n          Used by business people, gamers and others who schedule online meetings.\n          "
              ),
              t("hr", { staticStyle: { margin: "0.3em" } }),
            ]);
          },
        ],
        !1,
        null,
        null,
        null
      );
    K.options.__file = "static/appInfo.vue";
    var Y = K.exports,
      Z = function () {
        var e = this.$createElement;
        return (this._self._c || e)("div", {
          staticClass: "textarea can-go-dark",
          staticStyle: {
            "background-color": "#EEE",
            height: "520px",
            overflow: "auto",
            "font-family":
              "BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          },
          attrs: { id: "winners", spellcheck: "false" },
        });
      };
    Z._withStripped = !0;
    var X = {
        computed: {
          winners: function () {
            return this.$store.state.appStatus.winners;
          },
        },
        watch: {
          winners: function (e) {
            document.getElementById("winners").innerHTML = e
              .map(function (e) {
                return "<div>".concat(e, "</div>");
              })
              .join("");
          },
        },
      },
      Q = Object(g.a)(X, Z, [], !1, null, null, null);
    Q.options.__file = "static/winnertextbox.vue";
    var ee = {
        components: {
          counterTag: T,
          textboxbuttons: V,
          textbox: G,
          appInfo: Y,
          winnertextbox: Q.exports,
        },
        data: function () {
          return { activeTab: 0 };
        },
        methods: {
          clearWinners: function () {
            this.$store.commit("clearWinners");
          },
        },
      },
      te = Object(g.a)(ee, D, [], !1, null, null, null);
    te.options.__file = "static/nameTabs.vue";
    var ne = te.exports,
      ie = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          [
            n(
              "b-modal",
              {
                attrs: {
                  active: e.displayLoginDialog,
                  width: 640,
                  scroll: "keep",
                },
                on: {
                  "update:active": function (t) {
                    e.displayLoginDialog = t;
                  },
                },
              },
              [
                n(
                  "div",
                  { staticClass: "modal-card", staticStyle: { width: "auto" } },
                  [
                    n("header", { staticClass: "modal-card-head" }, [
                      n("p", { staticClass: "modal-card-title" }, [
                        n("i", { staticClass: "fa fa-folder-open" }),
                        e._v(
                          " " +
                            e._s(e.$t("opendialog.Open wheel")) +
                            "\n        "
                        ),
                      ]),
                    ]),
                    e._v(" "),
                    n(
                      "section",
                      { staticClass: "modal-card-body can-go-dark" },
                      [
                        n("p", [
                          e._v(
                            "\n          " +
                              e._s(e.$t("opendialog.To open wheels")) +
                              "\n        "
                          ),
                        ]),
                        e._v(" "),
                        n("div", {
                          attrs: { id: "firebaseui-auth-container" },
                        }),
                      ]
                    ),
                    e._v(" "),
                    n(
                      "footer",
                      {
                        staticClass: "modal-card-foot",
                        staticStyle: { "justify-content": "flex-end" },
                      },
                      [
                        n(
                          "b-button",
                          {
                            on: {
                              click: function (t) {
                                return e.enter_inactive();
                              },
                            },
                          },
                          [
                            e._v(
                              "\n          " +
                                e._s(e.$t("common.Cancel")) +
                                "\n        "
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
            e._v(" "),
            n(
              "b-modal",
              {
                attrs: {
                  active: e.displayWheelDialog,
                  width: 640,
                  scroll: "keep",
                },
                on: {
                  "update:active": function (t) {
                    e.displayWheelDialog = t;
                  },
                },
              },
              [
                n(
                  "div",
                  { staticClass: "modal-card", staticStyle: { width: "auto" } },
                  [
                    n(
                      "header",
                      { staticClass: "modal-card-head" },
                      [
                        n("p", { staticClass: "modal-card-title" }, [
                          n("i", { staticClass: "fa fa-folder-open" }),
                          e._v(
                            " " +
                              e._s(e.$t("opendialog.Open wheel")) +
                              "\n        "
                          ),
                        ]),
                        e._v(" "),
                        n("profiledropdown", {
                          on: {
                            "log-out": function (t) {
                              return e.enter_inactive();
                            },
                            "start-wait-animation": function (t) {
                              return e.$emit("start-wait-animation");
                            },
                            "stop-wait-animation": function (t) {
                              return e.$emit("stop-wait-animation");
                            },
                            "show-snackbar-message": function (t) {
                              return e.$emit("show-snackbar-message", t);
                            },
                          },
                        }),
                      ],
                      1
                    ),
                    e._v(" "),
                    n(
                      "section",
                      { staticClass: "modal-card-body can-go-dark" },
                      [
                        n(
                          "table",
                          { staticClass: "table can-go-dark" },
                          [
                            e._l(e.wheels, function (t) {
                              return n("tr", { key: t.title }, [
                                n("td", [e._v(e._s(t.title))]),
                                e._v(" "),
                                n(
                                  "td",
                                  [
                                    n(
                                      "b-button",
                                      {
                                        attrs: { type: "is-light" },
                                        on: {
                                          click: function (n) {
                                            return e.enter_openingWheel(
                                              t.title
                                            );
                                          },
                                        },
                                      },
                                      [
                                        n("i", {
                                          staticClass: "far fa-folder-open",
                                        }),
                                        e._v(
                                          " " +
                                            e._s(e.$t("common.Open")) +
                                            "\n              "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                e._v(" "),
                                e.$store.state.appStatus.online
                                  ? n(
                                      "td",
                                      [
                                        n(
                                          "b-button",
                                          {
                                            attrs: { type: "is-light" },
                                            on: {
                                              click: function (n) {
                                                return e.enter_confirmingDelete(
                                                  t.title
                                                );
                                              },
                                            },
                                          },
                                          [
                                            n("i", {
                                              staticClass: "far fa-trash-alt",
                                            }),
                                            e._v(
                                              " " +
                                                e._s(e.$t("common.Delete")) +
                                                "\n              "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    )
                                  : e._e(),
                              ]);
                            }),
                            e._v(" "),
                            e.noSavedWheels
                              ? n("tr", [
                                  n("td", [
                                    e._v(
                                      "\n              " +
                                        e._s(
                                          e.$t("opendialog.No wheels found")
                                        ) +
                                        "\n            "
                                    ),
                                  ]),
                                ])
                              : e._e(),
                          ],
                          2
                        ),
                      ]
                    ),
                    e._v(" "),
                    n(
                      "footer",
                      {
                        staticClass: "modal-card-foot",
                        staticStyle: { "justify-content": "flex-end" },
                      },
                      [
                        n(
                          "b-button",
                          {
                            attrs: { size: "is-medium" },
                            on: {
                              click: function (t) {
                                return e.enter_inactive();
                              },
                            },
                          },
                          [
                            e._v(
                              "\n          " +
                                e._s(e.$t("common.Close")) +
                                "\n        "
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
          ],
          1
        );
      };
    ie._withStripped = !0;
    var ae = n(3),
      re = n(18),
      oe = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-dropdown",
          { attrs: { position: "is-bottom-left", "aria-role": "list" } },
          [
            n(
              "span",
              {
                staticClass: "button",
                staticStyle: { cursor: "pointer" },
                attrs: { slot: "trigger", role: "button" },
                slot: "trigger",
              },
              [
                n("img", {
                  staticStyle: { height: "30px", "border-radius": "50%" },
                  attrs: { src: e.$store.state.appStatus.userPhotoUrl },
                }),
                e._v("\n     \n    "),
                n("i", { staticClass: "fas fa-caret-down" }),
              ]
            ),
            e._v(" "),
            n(
              "b-dropdown-item",
              { attrs: { disabled: "", "aria-role": "listitem" } },
              [
                e._v(
                  "\n    " +
                    e._s(
                      e.$t("profiledropdown.Signed in as", {
                        name: e.$store.state.appStatus.userDisplayName,
                      })
                    ) +
                    "\n  "
                ),
              ]
            ),
            e._v(" "),
            n(
              "b-dropdown-item",
              {
                attrs: { "aria-role": "listitem" },
                on: {
                  click: function (t) {
                    return e.logOut();
                  },
                },
              },
              [e._v("\n    " + e._s(e.$t("profiledropdown.Sign out")) + "\n  ")]
            ),
            e._v(" "),
            n(
              "b-dropdown-item",
              { attrs: { "has-link": "", "aria-role": "listitem" } },
              [
                n("a", { attrs: { href: "/view-account.html" } }, [
                  e._v(
                    "\n      " +
                      e._s(e.$t("profiledropdown.Export my data")) +
                      "\n    "
                  ),
                ]),
              ]
            ),
            e._v(" "),
            n(
              "b-dropdown-item",
              {
                attrs: { "aria-role": "listitem" },
                on: {
                  click: function (t) {
                    return e.confirmAndDelete();
                  },
                },
              },
              [
                e._v(
                  "\n    " +
                    e._s(e.$t("profiledropdown.Delete my account")) +
                    "\n  "
                ),
              ]
            ),
          ],
          1
        );
      };
    function se(e, t, n, i, a, r, o) {
      try {
        var s = e[r](o),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(i, a);
    }
    oe._withStripped = !0;
    var ce = {
        methods: {
          logOut: function () {
            ae.q(), this.$emit("log-out");
          },
          confirmAndDelete: function () {
            var e = this;
            this.$buefy.dialog.confirm({
              title: this.$t("profiledropdown.Delete account"),
              message: this.$t(
                "profiledropdown.Are you sure you want to delete your account"
              ),
              cancelText: this.$t("common.Cancel"),
              confirmText: this.$t("common.Delete"),
              type: "is-danger",
              hasIcon: !0,
              onConfirm: function () {
                return e.deleteAccount();
              },
            });
          },
          deleteAccount: function () {
            var e,
              t = this;
            return ((e = regeneratorRuntime.mark(function e() {
              var n;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        t.$emit("start-wait-animation"),
                        (e.next = 3),
                        ae.c(t.$store.state.appStatus.userUid)
                      );
                    case 3:
                      ae.q(),
                        (n = t.$t(
                          "profiledropdown.Your account and your saved wheels have been deleted"
                        )),
                        t.$emit("show-snackbar-message", n),
                        t.$emit("stop-wait-animation"),
                        t.$emit("log-out");
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (i, a) {
                var r = e.apply(t, n);
                function o(e) {
                  se(r, i, a, o, s, "next", e);
                }
                function s(e) {
                  se(r, i, a, o, s, "throw", e);
                }
                o(void 0);
              });
            })();
          },
        },
      },
      le = Object(g.a)(ce, oe, [], !1, null, null, null);
    le.options.__file = "static/profiledropdown.vue";
    var ue = le.exports,
      he = n(19);
    n.p, n.p;
    function me(e, t, n, i, a, r, o) {
      try {
        var s = e[r](o),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(i, a);
    }
    function fe(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, a) {
          var r = e.apply(t, n);
          function o(e) {
            me(r, i, a, o, s, "next", e);
          }
          function s(e) {
            me(r, i, a, o, s, "throw", e);
          }
          o(void 0);
        });
      };
    }
    var de = {
        components: { profiledropdown: ue },
        data: function () {
          return { wheels: [], fsm: "inactive" };
        },
        computed: {
          noSavedWheels: function () {
            return 0 == this.wheels.length;
          },
          uid: function () {
            return this.$store.state.appStatus.userUid;
          },
          displayLoginDialog: {
            get: function () {
              return "userIsPickingLoginMethod" == this.fsm;
            },
            set: function (e) {
              0 == e && (this.fsm = "inactive");
            },
          },
          displayWheelDialog: {
            get: function () {
              return [
                "userIsPickingWheel",
                "confirmingDelete",
                "deletingWheel",
              ].includes(this.fsm);
            },
            set: function (e) {
              0 == e && (this.fsm = "inactive");
            },
          },
        },
        methods: {
          show: function () {
            var e = this;
            return fe(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        e.enter_loadingLibraries();
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          enter_loadingLibraries: function () {
            var e = this;
            return fe(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e.fsm = "loadingLibraries"),
                          e.$emit("start-wait-animation"),
                          (t.next = 4),
                          ae.n()
                        );
                      case 4:
                        return (t.next = 6), ae.x();
                      case 6:
                        if (!t.sent) {
                          t.next = 15;
                          break;
                        }
                        return (t.next = 9), ae.i();
                      case 9:
                        (n = t.sent),
                          e.$store.commit("logInUser", {
                            photoUrl: n.photoURL,
                            displayName: n.displayName,
                            uid: n.uid,
                          }),
                          e.$emit("stop-wait-animation"),
                          e.enter_loadingWheels(),
                          (t.next = 17);
                        break;
                      case 15:
                        e.$emit("stop-wait-animation"),
                          e.enter_userIsPickingLoginMethod();
                      case 17:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          enter_inactive: function () {
            this.fsm = "inactive";
          },
          enter_userIsPickingLoginMethod: function () {
            (this.fsm = "userIsPickingLoginMethod"),
              this.$nextTick(
                fe(
                  regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                f.t("Wheel", "LoginForOpenAttempt", ""),
                                (e.next = 4),
                                ae.m("firebaseui-auth-container")
                              );
                            case 4:
                              return (
                                (t = e.sent),
                                this.$store.commit("logInUser", {
                                  photoUrl: t.photoURL,
                                  displayName: t.displayName,
                                  uid: t.uid,
                                }),
                                (this.userEmail = t.email),
                                this.$emit("start-wait-animation"),
                                (e.t0 = he),
                                (e.next = 11),
                                t.getIdToken()
                              );
                            case 11:
                              return (
                                (e.t1 = e.sent),
                                (e.next = 14),
                                e.t0.convertAccount.call(e.t0, e.t1)
                              );
                            case 14:
                              this.$emit("stop-wait-animation"),
                                f.t("Wheel", "LoginForOpenSuccess", ""),
                                this.enter_loadingWheels(),
                                (e.next = 24);
                              break;
                            case 19:
                              (e.prev = 19),
                                (e.t2 = e.catch(0)),
                                this.$emit("stop-wait-animation"),
                                f.t(
                                  "Wheel",
                                  "LoginForOpenFailure",
                                  e.t2.toString()
                                ),
                                this.enter_authError(e.t2);
                            case 24:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[0, 19]]
                    );
                  })
                )
              );
          },
          enter_userIsLoggingIn: function (e) {
            var t = this;
            return fe(
              regeneratorRuntime.mark(function n() {
                var i;
                return regeneratorRuntime.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (t.fsm = "userIsLoggingIn"),
                            (n.prev = 1),
                            f.t("Wheel", "LoginForOpenAttempt-".concat(e), ""),
                            t.$emit("start-wait-animation"),
                            (n.next = 6),
                            ae.o(e, t.$i18n.locale)
                          );
                        case 6:
                          return (
                            (i = n.sent),
                            t.$store.commit("logInUser", {
                              photoUrl: i.photoURL,
                              displayName: i.displayName,
                              uid: i.uid,
                            }),
                            (n.t0 = he),
                            (n.next = 11),
                            i.getIdToken()
                          );
                        case 11:
                          return (
                            (n.t1 = n.sent),
                            (n.next = 14),
                            n.t0.convertAccount.call(n.t0, n.t1)
                          );
                        case 14:
                          t.$emit("stop-wait-animation"),
                            f.t("Wheel", "LoginForOpenSuccess-".concat(e), ""),
                            t.enter_loadingWheels(),
                            (n.next = 25);
                          break;
                        case 19:
                          (n.prev = 19),
                            (n.t2 = n.catch(1)),
                            t.$emit("stop-wait-animation"),
                            f.u(n.t2, { op: "LoginForOpenFailure-".concat(e) }),
                            f.t(
                              "Wheel",
                              "LoginForOpenFailure-".concat(e),
                              n.t2.toString()
                            ),
                            t.enter_authError(n.t2);
                        case 25:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 19]]
                );
              })
            )();
          },
          enter_userIsPickingWheel: function () {
            this.fsm = "userIsPickingWheel";
          },
          enter_loadingWheels: function () {
            var e = this;
            return fe(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e.fsm = "loadingWheels"),
                          e.$emit("start-wait-animation"),
                          (t.next = 4),
                          ae.l(e.uid)
                        );
                      case 4:
                        (e.wheels = t.sent),
                          e.$emit("stop-wait-animation"),
                          ae.r(e.uid),
                          e.enter_userIsPickingWheel();
                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          enter_openingWheel: function (e) {
            (this.fsm = "openingWheel"), ae.s(this.uid, e);
            var t = this.wheels.find(function (t) {
                return t.title == e;
              }),
              n = new re.a(this.$t("common.We have a winner!"));
            n.loadValues(t),
              this.$store.commit("setWheelConfig", n),
              this.$store.commit("clearWinners"),
              this.$emit("reset-wheel-rotation"),
              this.enter_inactive();
          },
          enter_confirmingDelete: function (e) {
            var t = this;
            (this.fsm = "confirmingDelete"),
              this.$buefy.dialog.confirm({
                title: this.$t("opendialog.Delete wheel"),
                message: this.$t("opendialog.Are you sure", {
                  wheelTitle: f.k(e),
                }),
                cancelText: this.$t("common.Cancel"),
                confirmText: this.$t("common.Delete"),
                type: "is-danger",
                hasIcon: !0,
                onConfirm: function () {
                  return t.enter_deletingWheel(e);
                },
                onCancel: function () {
                  return t.enter_userIsPickingWheel();
                },
              });
          },
          enter_authError: function (e) {
            (this.fsm = "authError"),
              ae.q(),
              this.$store.commit("logOutUser"),
              this.$emit("auth-error", e),
              this.enter_inactive();
          },
          enter_deletingWheel: function (e) {
            var t = this;
            return fe(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (t.fsm = "deletingWheel"),
                            (n.prev = 1),
                            t.$emit("start-wait-animation"),
                            (n.next = 5),
                            ae.f(t.uid, e)
                          );
                        case 5:
                          return (n.next = 7), ae.l(t.uid);
                        case 7:
                          (t.wheels = n.sent),
                            t.$emit("stop-wait-animation"),
                            t.enter_userIsPickingWheel(),
                            (n.next = 17);
                          break;
                        case 12:
                          (n.prev = 12),
                            (n.t0 = n.catch(1)),
                            f.u(n.t0),
                            t.$emit("stop-wait-animation"),
                            t.enter_authError(n.t0);
                        case 17:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 12]]
                );
              })
            )();
          },
        },
      },
      pe = Object(g.a)(de, ie, [], !1, null, null, null);
    pe.options.__file = "static/opendialog.vue";
    var ge = pe.exports,
      ve = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          [
            n(
              "b-modal",
              {
                attrs: {
                  active: e.displayLoginDialog,
                  width: 640,
                  scroll: "keep",
                },
                on: {
                  "update:active": function (t) {
                    e.displayLoginDialog = t;
                  },
                },
              },
              [
                n(
                  "div",
                  { staticClass: "modal-card", staticStyle: { width: "auto" } },
                  [
                    n("header", { staticClass: "modal-card-head" }, [
                      n("p", { staticClass: "modal-card-title" }, [
                        n("i", { staticClass: "fa fa-save" }),
                        e._v(
                          " " +
                            e._s(e.$t("savedialog.Save wheel")) +
                            "\n        "
                        ),
                      ]),
                    ]),
                    e._v(" "),
                    n(
                      "section",
                      { staticClass: "modal-card-body can-go-dark" },
                      [
                        n("p", [
                          e._v(
                            "\n          " +
                              e._s(e.$t("savedialog.To save wheels")) +
                              "\n        "
                          ),
                        ]),
                        e._v(" "),
                        n("div", {
                          attrs: { id: "firebaseui-auth-container" },
                        }),
                      ]
                    ),
                    e._v(" "),
                    n(
                      "footer",
                      {
                        staticClass: "modal-card-foot",
                        staticStyle: { "justify-content": "flex-end" },
                      },
                      [
                        n(
                          "b-button",
                          {
                            on: {
                              click: function (t) {
                                return e.enter_inactive();
                              },
                            },
                          },
                          [
                            e._v(
                              "\n          " +
                                e._s(e.$t("common.Cancel")) +
                                "\n        "
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
            e._v(" "),
            n(
              "b-modal",
              {
                attrs: {
                  active: e.displaySaveDialog,
                  width: 640,
                  scroll: "keep",
                },
                on: {
                  "update:active": function (t) {
                    e.displaySaveDialog = t;
                  },
                },
              },
              [
                n(
                  "div",
                  { staticClass: "modal-card", staticStyle: { width: "auto" } },
                  [
                    n(
                      "header",
                      { staticClass: "modal-card-head" },
                      [
                        n("p", { staticClass: "modal-card-title" }, [
                          n("i", { staticClass: "fa fa-save" }),
                          e._v(
                            " " +
                              e._s(e.$t("savedialog.Save wheel")) +
                              "\n        "
                          ),
                        ]),
                        e._v(" "),
                        n("profiledropdown", {
                          on: {
                            "log-out": function (t) {
                              return e.enter_inactive();
                            },
                            "start-wait-animation": function (t) {
                              return e.$emit("start-wait-animation");
                            },
                            "stop-wait-animation": function (t) {
                              return e.$emit("stop-wait-animation");
                            },
                            "show-snackbar-message": function (t) {
                              return e.$emit("show-snackbar-message", t);
                            },
                          },
                        }),
                      ],
                      1
                    ),
                    e._v(" "),
                    n(
                      "section",
                      { staticClass: "modal-card-body can-go-dark" },
                      [
                        n("div", { staticClass: "columns" }, [
                          n("div", { staticClass: "column is-one-third" }, [
                            e._v(
                              "\n            " +
                                e._s(e.$t("savedialog.Save as")) +
                                "\n          "
                            ),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "column" },
                            [
                              n("b-input", {
                                ref: "saveAsField",
                                attrs: { required: "", maxlength: "100" },
                                nativeOn: {
                                  keyup: function (t) {
                                    return !t.type.indexOf("key") &&
                                      e._k(
                                        t.keyCode,
                                        "enter",
                                        13,
                                        t.key,
                                        "Enter"
                                      )
                                      ? null
                                      : e.enter_savingWheel(t);
                                  },
                                },
                                model: {
                                  value: e.saveAsName,
                                  callback: function (t) {
                                    e.saveAsName = t;
                                  },
                                  expression: "saveAsName",
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                        e._v(" "),
                        n("div", { staticClass: "columns" }, [
                          n("div", { staticClass: "column is-one-third" }, [
                            e._v(
                              "\n            " +
                                e._s(e.$t("savedialog.Your existing wheels")) +
                                "\n          "
                            ),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "column" },
                            [
                              n(
                                "b-select",
                                {
                                  attrs: {
                                    placeholder: e.$t(
                                      "savedialog.Select a wheel"
                                    ),
                                    expanded: "",
                                  },
                                  model: {
                                    value: e.existingWheelTitle,
                                    callback: function (t) {
                                      e.existingWheelTitle = t;
                                    },
                                    expression: "existingWheelTitle",
                                  },
                                },
                                e._l(e.wheels, function (t) {
                                  return n(
                                    "option",
                                    {
                                      key: t.title,
                                      domProps: { value: t.title },
                                    },
                                    [
                                      e._v(
                                        "\n                " +
                                          e._s(t.title) +
                                          "\n              "
                                      ),
                                    ]
                                  );
                                }),
                                0
                              ),
                            ],
                            1
                          ),
                        ]),
                      ]
                    ),
                    e._v(" "),
                    n(
                      "footer",
                      {
                        staticClass: "modal-card-foot",
                        staticStyle: { "justify-content": "flex-end" },
                      },
                      [
                        n(
                          "b-button",
                          {
                            attrs: { size: "is-medium" },
                            on: {
                              click: function (t) {
                                return e.enter_inactive();
                              },
                            },
                          },
                          [
                            e._v(
                              "\n          " +
                                e._s(e.$t("common.Cancel")) +
                                "\n        "
                            ),
                          ]
                        ),
                        e._v(" "),
                        n(
                          "b-button",
                          {
                            attrs: {
                              size: "is-medium",
                              type: "is-primary",
                              disabled: !e.saveAsNameIsValid,
                            },
                            on: {
                              click: function (t) {
                                return e.enter_savingWheel();
                              },
                            },
                          },
                          [
                            e._v(
                              "\n          " +
                                e._s(e.$t("common.Save")) +
                                "\n        "
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
          ],
          1
        );
      };
    function we(e, t, n, i, a, r, o) {
      try {
        var s = e[r](o),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(i, a);
    }
    function be(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, a) {
          var r = e.apply(t, n);
          function o(e) {
            we(r, i, a, o, s, "next", e);
          }
          function s(e) {
            we(r, i, a, o, s, "throw", e);
          }
          o(void 0);
        });
      };
    }
    ve._withStripped = !0;
    var ye = {
        components: { profiledropdown: ue },
        data: function () {
          return {
            wheels: [],
            fsm: "inactive",
            saveAsName: "",
            existingWheelTitle: null,
          };
        },
        computed: {
          saveAsNameIsValid: function () {
            return this.saveAsName.length > 0;
          },
          uid: function () {
            return this.$store.state.appStatus.userUid;
          },
          displayLoginDialog: {
            get: function () {
              return "userIsPickingLoginMethod" == this.fsm;
            },
            set: function (e) {
              0 == e && (this.fsm = "inactive");
            },
          },
          displaySaveDialog: {
            get: function () {
              return "userIsEnteringName" == this.fsm;
            },
            set: function (e) {
              0 == e && (this.fsm = "inactive");
            },
          },
        },
        watch: {
          existingWheelTitle: function (e, t) {
            this.saveAsName = e || "";
          },
        },
        methods: {
          show: function () {
            var e = this;
            return be(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!e.$store.state.wheelConfig.isTooBigForDatabase()) {
                          t.next = 3;
                          break;
                        }
                        return (
                          alert(e.$t("savedialog.Sorry, too many images")),
                          t.abrupt("return")
                        );
                      case 3:
                        e.enter_loadingLibraries();
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          enter_loadingLibraries: function () {
            var e = this;
            return be(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e.fsm = "loadingLibraries"),
                          e.$emit("start-wait-animation"),
                          (t.next = 4),
                          ae.n()
                        );
                      case 4:
                        return (t.next = 6), ae.x();
                      case 6:
                        if (!t.sent) {
                          t.next = 15;
                          break;
                        }
                        return (t.next = 9), ae.i();
                      case 9:
                        (n = t.sent),
                          e.$store.commit("logInUser", {
                            photoUrl: n.photoURL,
                            displayName: n.displayName,
                            uid: n.uid,
                          }),
                          e.$emit("stop-wait-animation"),
                          e.enter_loadingWheels(),
                          (t.next = 17);
                        break;
                      case 15:
                        e.$emit("stop-wait-animation"),
                          e.enter_userIsPickingLoginMethod();
                      case 17:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          enter_inactive: function () {
            this.fsm = "inactive";
          },
          enter_userIsPickingLoginMethod: function () {
            var e = this;
            return be(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (e.fsm = "userIsPickingLoginMethod"),
                          e.$nextTick(
                            be(
                              regeneratorRuntime.mark(function e() {
                                var t;
                                return regeneratorRuntime.wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.prev = 0),
                                            f.t(
                                              "Wheel",
                                              "LoginForSaveAttempt",
                                              ""
                                            ),
                                            (e.next = 4),
                                            ae.m("firebaseui-auth-container")
                                          );
                                        case 4:
                                          return (
                                            (t = e.sent),
                                            this.$store.commit("logInUser", {
                                              photoUrl: t.photoURL,
                                              displayName: t.displayName,
                                              uid: t.uid,
                                            }),
                                            (this.userEmail = t.email),
                                            this.$emit("start-wait-animation"),
                                            (e.t0 = he),
                                            (e.next = 11),
                                            t.getIdToken()
                                          );
                                        case 11:
                                          return (
                                            (e.t1 = e.sent),
                                            (e.next = 14),
                                            e.t0.convertAccount.call(e.t0, e.t1)
                                          );
                                        case 14:
                                          this.$emit("stop-wait-animation"),
                                            f.t(
                                              "Wheel",
                                              "LoginForSaveSuccess",
                                              ""
                                            ),
                                            this.enter_loadingWheels(),
                                            (e.next = 24);
                                          break;
                                        case 19:
                                          (e.prev = 19),
                                            (e.t2 = e.catch(0)),
                                            this.$emit("stop-wait-animation"),
                                            f.t(
                                              "Wheel",
                                              "LoginForSaveFailure",
                                              e.t2.toString()
                                            ),
                                            this.enter_authError(e.t2);
                                        case 24:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this,
                                  [[0, 19]]
                                );
                              })
                            )
                          );
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          enter_loadingWheels: function () {
            var e = this;
            return be(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e.fsm = "loadingWheels"),
                          e.$emit("start-wait-animation"),
                          (t.t0 = [""]),
                          (t.next = 5),
                          ae.l(e.uid)
                        );
                      case 5:
                        (t.t1 = t.sent),
                          (e.wheels = t.t0.concat.call(t.t0, t.t1)),
                          e.$emit("stop-wait-animation"),
                          (e.existingWheelTitle = null),
                          (e.saveAsName =
                            e.$store.state.wheelConfig.title || "My wheel"),
                          ae.r(e.uid),
                          setTimeout(function () {
                            e.$refs.saveAsField.focus();
                          }, 100),
                          e.enter_userIsEnteringName();
                      case 13:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          enter_userIsEnteringName: function () {
            this.fsm = "userIsEnteringName";
          },
          enter_savingWheel: function () {
            var e = this;
            return be(
              regeneratorRuntime.mark(function t() {
                var n, i;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (e.fsm = "savingWheel"),
                            e.$store.commit("setWheelTitle", e.saveAsName),
                            (n = e.$store.state.wheelConfig.getValues()),
                            (t.prev = 3),
                            e.$emit("start-wait-animation"),
                            (t.next = 7),
                            ae.u(e.uid, n)
                          );
                        case 7:
                          e.$emit("stop-wait-animation"),
                            (i = e.$t("savedialog.Wheel saved successfully", {
                              wheelTitle: f.k(e.saveAsName),
                            })),
                            e.$emit("show-snackbar-message", i),
                            e.enter_inactive(),
                            (t.next = 18);
                          break;
                        case 13:
                          (t.prev = 13),
                            (t.t0 = t.catch(3)),
                            e.$emit("stop-wait-animation"),
                            f.u(t.t0),
                            e.enter_authError(t.t0);
                        case 18:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[3, 13]]
                );
              })
            )();
          },
          enter_authError: function (e) {
            (this.fsm = "authError"),
              ae.q(),
              this.$store.commit("logOutUser"),
              this.$emit("auth-error", e),
              this.enter_inactive();
          },
        },
      },
      _e = Object(g.a)(ye, ve, [], !1, null, null, null);
    _e.options.__file = "static/savedialog.vue";
    var ke = _e.exports,
      Ce = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-modal",
          {
            attrs: {
              active: e.optionsDialogVisible,
              width: 640,
              scroll: "keep",
              "full-screen": "mobile" == e.$mq,
            },
            on: {
              "update:active": function (t) {
                e.optionsDialogVisible = t;
              },
            },
          },
          [
            n(
              "div",
              { staticClass: "modal-card", staticStyle: { width: "auto" } },
              [
                n(
                  "section",
                  { staticClass: "modal-card-body can-go-dark" },
                  [
                    n(
                      "b-tabs",
                      {
                        attrs: { type: "is-boxed", size: "is-small" },
                        model: {
                          value: e.activeTab,
                          callback: function (t) {
                            e.activeTab = t;
                          },
                          expression: "activeTab",
                        },
                      },
                      [
                        n(
                          "b-tab-item",
                          {
                            attrs: { label: e.$t("optionsdialog.During spin") },
                          },
                          [
                            n("br"),
                            e._v(" "),
                            n("div", { staticClass: "columns" }, [
                              n("div", { staticClass: "column is-2" }, [
                                e._v(
                                  "\n              " +
                                    e._s(e.$t("optionsdialog.Sound")) +
                                    "\n            "
                                ),
                              ]),
                              e._v(" "),
                              n(
                                "div",
                                { staticClass: "column" },
                                [
                                  n(
                                    "b-select",
                                    {
                                      model: {
                                        value: e.wheelConfig.duringSpinSound,
                                        callback: function (t) {
                                          e.$set(
                                            e.wheelConfig,
                                            "duringSpinSound",
                                            t
                                          );
                                        },
                                        expression:
                                          "wheelConfig.duringSpinSound",
                                      },
                                    },
                                    e._l(e.duringSpinSounds, function (t) {
                                      return n(
                                        "option",
                                        {
                                          key: t.value,
                                          domProps: { value: t.value },
                                        },
                                        [
                                          e._v(
                                            "\n                  " +
                                              e._s(e.$t(t.name)) +
                                              "\n                "
                                          ),
                                        ]
                                      );
                                    }),
                                    0
                                  ),
                                ],
                                1
                              ),
                              e._v(" "),
                              n(
                                "div",
                                { staticClass: "column" },
                                [
                                  n(
                                    "b-button",
                                    { on: { click: e.playDuringSpinSound } },
                                    [n("i", { staticClass: "fas fa-play" })]
                                  ),
                                  e._v(" "),
                                  n(
                                    "b-button",
                                    { on: { click: e.stopDuringSpinSound } },
                                    [n("i", { staticClass: "fas fa-stop" })]
                                  ),
                                ],
                                1
                              ),
                            ]),
                            e._v(" "),
                            n("br"),
                            e._v(" "),
                            n(
                              "b-checkbox",
                              {
                                model: {
                                  value: e.wheelConfig.allowDuplicates,
                                  callback: function (t) {
                                    e.$set(e.wheelConfig, "allowDuplicates", t);
                                  },
                                  expression: "wheelConfig.allowDuplicates",
                                },
                              },
                              [
                                e._v(
                                  "\n            " +
                                    e._s(
                                      e.$t(
                                        "optionsdialog.Allow duplicates on wheel"
                                      )
                                    ) +
                                    "\n          "
                                ),
                              ]
                            ),
                            e._v(" "),
                            n(
                              "b-checkbox",
                              {
                                model: {
                                  value: e.wheelConfig.slowSpin,
                                  callback: function (t) {
                                    e.$set(e.wheelConfig, "slowSpin", t);
                                  },
                                  expression: "wheelConfig.slowSpin",
                                },
                              },
                              [
                                e._v(
                                  "\n            " +
                                    e._s(e.$t("optionsdialog.Spin slowly")) +
                                    "\n          "
                                ),
                              ]
                            ),
                            e._v(" "),
                            n("hr"),
                            e._v(
                              "\n          " +
                                e._s(
                                  e.$t("optionsdialog.Spin time (seconds)")
                                ) +
                                "\n          "
                            ),
                            n(
                              "b-slider",
                              {
                                attrs: { min: 1, max: 60 },
                                model: {
                                  value: e.wheelConfig.spinTime,
                                  callback: function (t) {
                                    e.$set(e.wheelConfig, "spinTime", t);
                                  },
                                  expression: "wheelConfig.spinTime",
                                },
                              },
                              [
                                e._l([10, 20, 30, 40, 50, 60], function (t) {
                                  return [
                                    n(
                                      "b-slider-tick",
                                      { key: t, attrs: { value: t } },
                                      [e._v(e._s(t))]
                                    ),
                                  ];
                                }),
                              ],
                              2
                            ),
                            e._v(" "),
                            n("hr"),
                            e._v(" "),
                            n("b", [
                              e._v(
                                e._s(e.$t("optionsdialog.Max names on wheel"))
                              ),
                            ]),
                            e._v(" "),
                            n("br"),
                            e._v(" "),
                            n("small", [
                              e._v(
                                "\n            " +
                                  e._s(
                                    e.$t(
                                      "optionsdialog.All names in the text-box"
                                    )
                                  ) +
                                  "\n          "
                              ),
                            ]),
                            e._v(" "),
                            n(
                              "b-slider",
                              {
                                attrs: { min: 4, max: 1e3 },
                                model: {
                                  value: e.wheelConfig.maxNames,
                                  callback: function (t) {
                                    e.$set(e.wheelConfig, "maxNames", t);
                                  },
                                  expression: "wheelConfig.maxNames",
                                },
                              },
                              [
                                e._l(
                                  [
                                    100,
                                    200,
                                    300,
                                    400,
                                    500,
                                    600,
                                    700,
                                    800,
                                    900,
                                    1e3,
                                  ],
                                  function (t) {
                                    return [
                                      n(
                                        "b-slider-tick",
                                        { key: t, attrs: { value: t } },
                                        [e._v(e._s(t))]
                                      ),
                                    ];
                                  }
                                ),
                              ],
                              2
                            ),
                            e._v(" "),
                            n("br"),
                            e._v(" "),
                            n(
                              "b-checkbox",
                              {
                                model: {
                                  value: e.wheelConfig.displayHat,
                                  callback: function (t) {
                                    e.$set(e.wheelConfig, "displayHat", t);
                                  },
                                  expression: "wheelConfig.displayHat",
                                },
                              },
                              [
                                e._v(
                                  "\n            " +
                                    e._s(
                                      e.$t("optionsdialog.Display a hat", {
                                        nameCount: e.wheelConfig.maxNames,
                                      })
                                    ) +
                                    "\n          "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        n(
                          "b-tab-item",
                          {
                            attrs: { label: e.$t("optionsdialog.After spin") },
                          },
                          [
                            n("br"),
                            e._v(" "),
                            n("div", { staticClass: "columns" }, [
                              n("div", { staticClass: "column is-2" }, [
                                e._v(
                                  "\n              " +
                                    e._s(e.$t("optionsdialog.Sound")) +
                                    "\n            "
                                ),
                              ]),
                              e._v(" "),
                              n(
                                "div",
                                { staticClass: "column" },
                                [
                                  n(
                                    "b-select",
                                    {
                                      model: {
                                        value: e.wheelConfig.afterSpinSound,
                                        callback: function (t) {
                                          e.$set(
                                            e.wheelConfig,
                                            "afterSpinSound",
                                            t
                                          );
                                        },
                                        expression:
                                          "wheelConfig.afterSpinSound",
                                      },
                                    },
                                    e._l(e.afterSpinSounds, function (t) {
                                      return n(
                                        "option",
                                        {
                                          key: t.value,
                                          domProps: { value: t.value },
                                        },
                                        [
                                          e._v(
                                            "\n                  " +
                                              e._s(e.$t(t.name)) +
                                              "\n                "
                                          ),
                                        ]
                                      );
                                    }),
                                    0
                                  ),
                                ],
                                1
                              ),
                            ]),
                            e._v(" "),
                            n("br"),
                            e._v(" "),
                            n(
                              "b-checkbox",
                              {
                                model: {
                                  value: e.wheelConfig.animateWinner,
                                  callback: function (t) {
                                    e.$set(e.wheelConfig, "animateWinner", t);
                                  },
                                  expression: "wheelConfig.animateWinner",
                                },
                              },
                              [
                                e._v(
                                  "\n            " +
                                    e._s(
                                      e.$t(
                                        "optionsdialog.Animate winning entry"
                                      )
                                    ) +
                                    "\n          "
                                ),
                              ]
                            ),
                            e._v(" "),
                            n("br"),
                            n("br"),
                            e._v(" "),
                            n(
                              "b-checkbox",
                              {
                                model: {
                                  value: e.wheelConfig.launchConfetti,
                                  callback: function (t) {
                                    e.$set(e.wheelConfig, "launchConfetti", t);
                                  },
                                  expression: "wheelConfig.launchConfetti",
                                },
                              },
                              [
                                e._v(
                                  "\n            " +
                                    e._s(
                                      e.$t("optionsdialog.Launch confetti")
                                    ) +
                                    "\n          "
                                ),
                              ]
                            ),
                            e._v(" "),
                            n("br"),
                            n("br"),
                            e._v(" "),
                            n(
                              "b-checkbox",
                              {
                                model: {
                                  value: e.wheelConfig.autoRemoveWinner,
                                  callback: function (t) {
                                    e.$set(
                                      e.wheelConfig,
                                      "autoRemoveWinner",
                                      t
                                    );
                                  },
                                  expression: "wheelConfig.autoRemoveWinner",
                                },
                              },
                              [
                                e._v(
                                  "\n            " +
                                    e._s(
                                      e.$t(
                                        "optionsdialog.Auto-remove winner after 5 seconds"
                                      )
                                    ) +
                                    "\n          "
                                ),
                              ]
                            ),
                            e._v(" "),
                            n("br"),
                            n("br"),
                            e._v(" "),
                            n(
                              "div",
                              {
                                staticClass: "columns",
                                staticStyle: { "margin-bottom": "0" },
                              },
                              [
                                n(
                                  "div",
                                  { staticClass: "column is-narrow-desktop" },
                                  [
                                    n(
                                      "b-checkbox",
                                      {
                                        model: {
                                          value:
                                            e.wheelConfig.displayWinnerDialog,
                                          callback: function (t) {
                                            e.$set(
                                              e.wheelConfig,
                                              "displayWinnerDialog",
                                              t
                                            );
                                          },
                                          expression:
                                            "wheelConfig.displayWinnerDialog",
                                        },
                                      },
                                      [
                                        e._v(
                                          "\n                " +
                                            e._s(
                                              e.$t(
                                                "optionsdialog.Display popup with message:"
                                              )
                                            ) +
                                            "\n              "
                                        ),
                                      ]
                                    ),
                                    e._v(" "),
                                    n("br"),
                                    e._v(" "),
                                    n(
                                      "b-checkbox",
                                      {
                                        staticStyle: { "margin-left": "25px" },
                                        attrs: {
                                          disabled: !e.wheelConfig
                                            .displayWinnerDialog,
                                        },
                                        model: {
                                          value:
                                            e.wheelConfig.displayRemoveButton,
                                          callback: function (t) {
                                            e.$set(
                                              e.wheelConfig,
                                              "displayRemoveButton",
                                              t
                                            );
                                          },
                                          expression:
                                            "wheelConfig.displayRemoveButton",
                                        },
                                      },
                                      [
                                        e._v(
                                          "\n                " +
                                            e._s(
                                              e.$t(
                                                "optionsdialog.Display Remove button"
                                              )
                                            ) +
                                            "\n              "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                e._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "column",
                                    staticStyle: {
                                      padding: "0",
                                      "margin-top": "5px",
                                    },
                                  },
                                  [
                                    n("b-input", {
                                      attrs: {
                                        disabled: !e.wheelConfig
                                          .displayWinnerDialog,
                                        maxlength: "100",
                                      },
                                      model: {
                                        value: e.wheelConfig.winnerMessage,
                                        callback: function (t) {
                                          e.$set(
                                            e.wheelConfig,
                                            "winnerMessage",
                                            t
                                          );
                                        },
                                        expression: "wheelConfig.winnerMessage",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]
                            ),
                            e._v(" "),
                            n(
                              "b-checkbox",
                              {
                                model: {
                                  value:
                                    e.wheelConfig.playClickWhenWinnerRemoved,
                                  callback: function (t) {
                                    e.$set(
                                      e.wheelConfig,
                                      "playClickWhenWinnerRemoved",
                                      t
                                    );
                                  },
                                  expression:
                                    "wheelConfig.playClickWhenWinnerRemoved",
                                },
                              },
                              [
                                e._v(
                                  "\n            " +
                                    e._s(
                                      e.$t(
                                        "optionsdialog.Play click sound when the winner is removed"
                                      )
                                    ) +
                                    "\n          "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        n(
                          "b-tab-item",
                          { attrs: { label: e.$t("optionsdialog.Colors") } },
                          [
                            n("br"),
                            e._v(" "),
                            n(
                              "div",
                              {
                                staticClass: "columns",
                                staticStyle: { "margin-bottom": "10px" },
                              },
                              [
                                n(
                                  "div",
                                  { staticClass: "column is-one-third" },
                                  [
                                    e._v(
                                      "\n              " +
                                        e._s(
                                          e.$t("optionsdialog.Apply a theme")
                                        ) +
                                        "\n            "
                                    ),
                                  ]
                                ),
                                e._v(" "),
                                n(
                                  "div",
                                  { staticClass: "column" },
                                  [
                                    n(
                                      "b-field",
                                      { attrs: { grouped: "" } },
                                      [
                                        n(
                                          "b-select",
                                          {
                                            attrs: {
                                              placeholder: e.$t(
                                                "optionsdialog.Pick category"
                                              ),
                                              expanded: "",
                                            },
                                            model: {
                                              value: e.colorThemeCategory,
                                              callback: function (t) {
                                                e.colorThemeCategory = t;
                                              },
                                              expression: "colorThemeCategory",
                                            },
                                          },
                                          e._l(
                                            Object.keys(e.colorThemeCategories),
                                            function (t) {
                                              return n(
                                                "option",
                                                {
                                                  key: t,
                                                  domProps: { value: t },
                                                },
                                                [
                                                  e._v(
                                                    "\n                    " +
                                                      e._s(t) +
                                                      "\n                  "
                                                  ),
                                                ]
                                              );
                                            }
                                          ),
                                          0
                                        ),
                                        e._v(" "),
                                        n(
                                          "b-select",
                                          {
                                            attrs: {
                                              placeholder: e.$t(
                                                "optionsdialog.Pick theme"
                                              ),
                                              expanded: "",
                                            },
                                            model: {
                                              value: e.colorTheme,
                                              callback: function (t) {
                                                e.colorTheme = t;
                                              },
                                              expression: "colorTheme",
                                            },
                                          },
                                          e._l(
                                            Object.keys(e.colorThemes),
                                            function (t) {
                                              return n(
                                                "option",
                                                {
                                                  key: t,
                                                  domProps: { value: t },
                                                },
                                                [
                                                  e._v(
                                                    "\n                    " +
                                                      e._s(t) +
                                                      "\n                  "
                                                  ),
                                                ]
                                              );
                                            }
                                          ),
                                          0
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            ),
                            e._v(" "),
                            n("hr"),
                            e._v(" "),
                            n(
                              "div",
                              {
                                staticClass: "columns",
                                staticStyle: { "margin-bottom": "10px" },
                              },
                              [
                                n(
                                  "div",
                                  { staticClass: "column is-one-third" },
                                  [
                                    e._v(
                                      "\n              " +
                                        e._s(
                                          e.$t("optionsdialog.Customize colors")
                                        ) +
                                        "\n            "
                                    ),
                                  ]
                                ),
                                e._v(" "),
                                n("div", { staticClass: "column" }, [
                                  n(
                                    "div",
                                    { staticClass: "color-grid" },
                                    e._l(
                                      e.wheelConfig.colorSettings,
                                      function (t, i) {
                                        return n(
                                          "div",
                                          { key: i },
                                          [
                                            n("b-checkbox", {
                                              model: {
                                                value: t.enabled,
                                                callback: function (n) {
                                                  e.$set(t, "enabled", n);
                                                },
                                                expression: "setting.enabled",
                                              },
                                            }),
                                            e._v(" "),
                                            n("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: t.color,
                                                  expression: "setting.color",
                                                },
                                              ],
                                              attrs: { type: "color" },
                                              domProps: { value: t.color },
                                              on: {
                                                input: function (n) {
                                                  n.target.composing ||
                                                    e.$set(
                                                      t,
                                                      "color",
                                                      n.target.value
                                                    );
                                                },
                                              },
                                            }),
                                          ],
                                          1
                                        );
                                      }
                                    ),
                                    0
                                  ),
                                ]),
                              ]
                            ),
                            e._v(" "),
                            n("hr"),
                            e._v(" "),
                            n(
                              "div",
                              {
                                staticClass: "columns",
                                staticStyle: { "margin-bottom": "10px" },
                              },
                              [
                                n(
                                  "div",
                                  { staticClass: "column is-one-third" },
                                  [
                                    e._v(
                                      "\n              " +
                                        e._s(
                                          e.$t("optionsdialog.Background color")
                                        ) +
                                        "\n            "
                                    ),
                                  ]
                                ),
                                e._v(" "),
                                n("div", { staticClass: "column" }, [
                                  n("div", { staticClass: "color-grid" }, [
                                    n("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            e.wheelConfig.pageBackgroundColor,
                                          expression:
                                            "wheelConfig.pageBackgroundColor",
                                        },
                                      ],
                                      attrs: { type: "color" },
                                      domProps: {
                                        value:
                                          e.wheelConfig.pageBackgroundColor,
                                      },
                                      on: {
                                        input: function (t) {
                                          t.target.composing ||
                                            e.$set(
                                              e.wheelConfig,
                                              "pageBackgroundColor",
                                              t.target.value
                                            );
                                        },
                                      },
                                    }),
                                  ]),
                                ]),
                              ]
                            ),
                          ]
                        ),
                        e._v(" "),
                        n(
                          "b-tab-item",
                          { attrs: { label: e.$t("optionsdialog.Image") } },
                          [
                            n("br"),
                            e._v(" "),
                            n("div", { staticClass: "columns" }, [
                              n("div", { staticClass: "column is-half" }, [
                                e._v(
                                  "\n              " +
                                    e._s(
                                      e.$t(
                                        "optionsdialog.Image in the center of the wheel"
                                      )
                                    ) +
                                    "\n            "
                                ),
                              ]),
                              e._v(" "),
                              n(
                                "div",
                                { staticClass: "column" },
                                [
                                  n(
                                    "b-select",
                                    {
                                      attrs: { expanded: "" },
                                      model: {
                                        value: e.wheelConfig.pictureType,
                                        callback: function (t) {
                                          e.$set(
                                            e.wheelConfig,
                                            "pictureType",
                                            t
                                          );
                                        },
                                        expression: "wheelConfig.pictureType",
                                      },
                                    },
                                    [
                                      n(
                                        "option",
                                        { attrs: { value: "none" } },
                                        [e._v(e._s(e.$t("optionsdialog.None")))]
                                      ),
                                      e._v(" "),
                                      n(
                                        "option",
                                        { attrs: { value: "gallery" } },
                                        [
                                          e._v(
                                            e._s(
                                              e.$t("optionsdialog.From Gallery")
                                            )
                                          ),
                                        ]
                                      ),
                                      e._v(" "),
                                      n(
                                        "option",
                                        { attrs: { value: "uploaded" } },
                                        [
                                          e._v(
                                            e._s(e.$t("optionsdialog.Custom"))
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]),
                            e._v(" "),
                            n(
                              "b-select",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value:
                                      "gallery" == e.wheelConfig.pictureType,
                                    expression:
                                      "wheelConfig.pictureType=='gallery'",
                                  },
                                ],
                                attrs: {
                                  placeholder: e.$t(
                                    "optionsdialog.Select a gallery picture"
                                  ),
                                  expanded: "",
                                },
                                model: {
                                  value: e.wheelConfig.galleryPicture,
                                  callback: function (t) {
                                    e.$set(e.wheelConfig, "galleryPicture", t);
                                  },
                                  expression: "wheelConfig.galleryPicture",
                                },
                              },
                              e._l(e.galleryPictures, function (t) {
                                return n(
                                  "option",
                                  {
                                    key: t.fileName,
                                    domProps: { value: t.fileName },
                                  },
                                  [
                                    e._v(
                                      "\n              " +
                                        e._s(t.title) +
                                        "\n            "
                                    ),
                                  ]
                                );
                              }),
                              0
                            ),
                            e._v(" "),
                            n("b-input", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    "uploaded" == e.wheelConfig.pictureType,
                                  expression:
                                    "wheelConfig.pictureType=='uploaded'",
                                },
                              ],
                              attrs: { disabled: "" },
                              model: {
                                value: e.wheelConfig.customPictureName,
                                callback: function (t) {
                                  e.$set(e.wheelConfig, "customPictureName", t);
                                },
                                expression: "wheelConfig.customPictureName",
                              },
                            }),
                            e._v(" "),
                            n("br"),
                            e._v(" "),
                            n(
                              "b-field",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value:
                                      "uploaded" == e.wheelConfig.pictureType,
                                    expression:
                                      "wheelConfig.pictureType=='uploaded'",
                                  },
                                ],
                                staticClass: "file",
                              },
                              [
                                n("br"),
                                n("br"),
                                e._v(" "),
                                n(
                                  "b-upload",
                                  {
                                    attrs: { accept: "image/*" },
                                    model: {
                                      value: e.uploadedImage,
                                      callback: function (t) {
                                        e.uploadedImage = t;
                                      },
                                      expression: "uploadedImage",
                                    },
                                  },
                                  [
                                    n("a", { staticClass: "button" }, [
                                      n("i", { staticClass: "fas fa-upload" }),
                                      e._v(
                                        "\n                 \n                " +
                                          e._s(
                                            e.$t("optionsdialog.Upload image")
                                          ) +
                                          "\n              "
                                      ),
                                    ]),
                                  ]
                                ),
                              ],
                              1
                            ),
                            e._v(" "),
                            n("div", { staticClass: "columns" }, [
                              n("div", { staticClass: "column is-one-third" }, [
                                e._v(
                                  "\n              " +
                                    e._s(e.$t("optionsdialog.Image size")) +
                                    "\n            "
                                ),
                              ]),
                              e._v(" "),
                              n(
                                "div",
                                { staticClass: "column" },
                                [
                                  n(
                                    "b-select",
                                    {
                                      model: {
                                        value: e.wheelConfig.hubSize,
                                        callback: function (t) {
                                          e.$set(e.wheelConfig, "hubSize", t);
                                        },
                                        expression: "wheelConfig.hubSize",
                                      },
                                    },
                                    e._l(e.hubSizes, function (t) {
                                      return n(
                                        "option",
                                        { key: t, domProps: { value: t } },
                                        [
                                          e._v(
                                            "\n                  " +
                                              e._s(t) +
                                              "\n                "
                                          ),
                                        ]
                                      );
                                    }),
                                    0
                                  ),
                                ],
                                1
                              ),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                n(
                  "footer",
                  {
                    staticClass: "modal-card-foot",
                    staticStyle: { "justify-content": "flex-end" },
                  },
                  [
                    n(
                      "b-button",
                      {
                        attrs: { size: "is-medium" },
                        on: {
                          click: function (t) {
                            return e.close();
                          },
                        },
                      },
                      [
                        e._v(
                          "\n        " +
                            e._s(e.$t("common.Cancel")) +
                            "\n      "
                        ),
                      ]
                    ),
                    e._v(" "),
                    n(
                      "b-button",
                      {
                        attrs: { size: "is-medium", type: "is-primary" },
                        on: { click: e.saveOptions },
                      },
                      [
                        e._v(
                          "\n        " + e._s(e.$t("common.OK")) + "\n      "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ]
            ),
          ]
        );
      };
    Ce._withStripped = !0;
    var Se = n(229),
      Fe = n.n(Se),
      xe = n(230),
      $e = n.n(xe),
      Ne = n(40),
      Ee = n(12);
    function De(e, t, n, i, a, r, o) {
      try {
        var s = e[r](o),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(i, a);
    }
    function Re(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, a) {
          var r = e.apply(t, n);
          function o(e) {
            De(r, i, a, o, s, "next", e);
          }
          function s(e) {
            De(r, i, a, o, s, "throw", e);
          }
          o(void 0);
        });
      };
    }
    var Ae = {
        data: function () {
          return {
            optionsDialogVisible: !1,
            wheelConfig: {},
            activeTab: 0,
            galleryPictures: Fe.a.list,
            colorThemeCategories: $e.a.list,
            colorThemeCategory: null,
            colorThemes: [],
            colorTheme: null,
            uploadedImage: {},
            duringSpinSounds: Ee.b(),
            afterSpinSounds: Ee.a(),
            hubSizes: Object.keys(Ne.hubSizes),
          };
        },
        computed: {
          pictureType: function () {
            return this.wheelConfig.pictureType;
          },
          galleryPicture: function () {
            return this.wheelConfig.galleryPicture;
          },
          customPictureName: function () {
            return this.wheelConfig.customPictureName;
          },
        },
        watch: {
          pictureType: function (e) {
            "gallery" != e &&
              (this.wheelConfig.galleryPicture = "images/none.png"),
              "uploaded" != e &&
                ((this.wheelConfig.customPictureName = ""),
                (this.wheelConfig.customPictureDataUri = ""));
          },
          uploadedImage: function (e) {
            var t = new FileReader(),
              n = this;
            (t.onload = (function () {
              var t = Re(
                regeneratorRuntime.mark(function t(i) {
                  var a;
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            f.t("Wheel", "UploadedCustomImage", ""),
                            (t.next = 3),
                            W.e(i.target.result)
                          );
                        case 3:
                          (a = t.sent),
                            n.wheelConfig.setCustomPicture(e.name, a),
                            n.$buefy.dialog.confirm({
                              message: n.$t(
                                "optionsdialog.Your image has been uploaded",
                                { fileName: e.name }
                              ),
                              hasIcon: !0,
                              icon: "palette",
                              iconPack: "fa",
                              confirmText: n.$t("optionsdialog.Yes"),
                              cancelText: n.$t("optionsdialog.No"),
                              onConfirm: function () {
                                return n.setColorsFromCustomPicture();
                              },
                            });
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()),
              t.readAsDataURL(e);
          },
          colorThemeCategory: function (e) {
            e &&
              ((this.colorThemes = this.colorThemeCategories[e]),
              (this.colorTheme = null));
          },
          colorTheme: function (e) {
            if (e) {
              f.t("Wheel", "SetColorTheme", e);
              for (var t = 0; t < this.wheelConfig.colorSettings.length; t++)
                this.wheelConfig.colorSettings[t] = {
                  color: "#000000",
                  enabled: !1,
                };
              for (var n = this.colorThemes[e], i = 0; i < n.length; i++)
                this.wheelConfig.colorSettings[i] = {
                  color: n[i],
                  enabled: !0,
                };
            }
          },
        },
        methods: {
          show: function () {
            (this.wheelConfig = this.$store.state.wheelConfig.clone()),
              (this.colorThemeCategory = null),
              (this.colorTheme = null),
              (this.optionsDialogVisible = !0);
          },
          setColorsFromCustomPicture: function () {
            var e = this;
            return Re(
              regeneratorRuntime.mark(function t() {
                var n, i;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          f.t("Wheel", "SetColorsFromCustomPicture", ""),
                          (t.next = 3),
                          W.b(e.wheelConfig.customPictureDataUri)
                        );
                      case 3:
                        for (n = t.sent, i = 0; i < n.length; i++)
                          e.wheelConfig.colorSettings[i] = {
                            color: n[i],
                            enabled: !0,
                          };
                        e.$forceUpdate();
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          playDuringSpinSound: function () {
            f.t("Wheel", "PlayDuringSpinSoundInOptionsDialog", ""),
              Ee.h(),
              Ee.g(this.wheelConfig.duringSpinSound);
          },
          stopDuringSpinSound: function () {
            f.t("Wheel", "StopDuringSpinSoundInOptionsDialog", ""), Ee.h();
          },
          close: function () {
            Ee.h(), (this.optionsDialogVisible = !1);
          },
          saveOptions: function () {
            Ee.h(),
              this.$store.commit("setWheelConfig", this.wheelConfig),
              (this.optionsDialogVisible = !1);
          },
        },
      },
      Ie = (n(422), Object(g.a)(Ae, Ce, [], !1, null, "5a328193", null));
    Ie.options.__file = "static/optionsdialog.vue";
    var Te = Ie.exports,
      Pe = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          [
            n(
              "b-modal",
              {
                attrs: { active: e.showWarning, width: 640, scroll: "keep" },
                on: {
                  "update:active": function (t) {
                    e.showWarning = t;
                  },
                },
              },
              [
                n(
                  "div",
                  { staticClass: "modal-card", staticStyle: { width: "auto" } },
                  [
                    n("header", { staticClass: "modal-card-head" }, [
                      n("p", { staticClass: "modal-card-title" }, [
                        n("i", { staticClass: "fa fa-share-alt" }),
                        e._v(
                          " " +
                            e._s(e.$t("sharedialog.Shareable link")) +
                            "\n        "
                        ),
                      ]),
                    ]),
                    e._v(" "),
                    n(
                      "section",
                      { staticClass: "modal-card-body can-go-dark" },
                      [
                        n("p", [
                          e._v(
                            "\n          " +
                              e._s(e.$t("sharedialog.If you continue")) +
                              "\n          " +
                              e._s(
                                e.$t(
                                  "sharedialog.This link will work for anyone"
                                )
                              ) +
                              "\n        "
                          ),
                        ]),
                        e._v(" "),
                        n("p", { staticStyle: { "margin-top": "10px" } }, [
                          e._v(
                            "\n          " +
                              e._s(
                                e.$t(
                                  "sharedialog.We want this website to be safe place for everyone"
                                )
                              ) +
                              "\n        "
                          ),
                        ]),
                        e._v(" "),
                        n("p", { staticStyle: { "margin-top": "10px" } }, [
                          n("a", { attrs: { href: "/faq/terms" } }, [
                            e._v(e._s(e.$t("appInfo.Terms of service"))),
                          ]),
                        ]),
                      ]
                    ),
                    e._v(" "),
                    n(
                      "footer",
                      {
                        staticClass: "modal-card-foot",
                        staticStyle: { "justify-content": "flex-end" },
                      },
                      [
                        n(
                          "b-button",
                          {
                            attrs: { size: "is-medium" },
                            on: {
                              click: function (t) {
                                return e.enter_Inactive();
                              },
                            },
                          },
                          [
                            e._v(
                              "\n          " +
                                e._s(e.$t("common.Cancel")) +
                                "\n        "
                            ),
                          ]
                        ),
                        e._v(" "),
                        n(
                          "b-button",
                          {
                            attrs: { size: "is-medium", type: "is-primary" },
                            on: {
                              click: function (t) {
                                return e.enter_UserIsSettingOptions();
                              },
                            },
                          },
                          [
                            e._v(
                              "\n          " +
                                e._s(e.$t("sharedialog.Continue")) +
                                "\n        "
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
            e._v(" "),
            n(
              "b-modal",
              {
                attrs: { active: e.showOptions, width: 640, scroll: "keep" },
                on: {
                  "update:active": function (t) {
                    e.showOptions = t;
                  },
                },
              },
              [
                n(
                  "div",
                  { staticClass: "modal-card", staticStyle: { width: "auto" } },
                  [
                    n("header", { staticClass: "modal-card-head" }, [
                      n("p", { staticClass: "modal-card-title" }, [
                        n("i", { staticClass: "fa fa-share-alt" }),
                        e._v(
                          " " +
                            e._s(e.$t("sharedialog.Shareable link")) +
                            "\n        "
                        ),
                      ]),
                    ]),
                    e._v(" "),
                    n(
                      "section",
                      { staticClass: "modal-card-body can-go-dark" },
                      [
                        n("div", { staticClass: "field" }, [
                          e._v(
                            "\n          " +
                              e._s(
                                e.$t(
                                  "sharedialog.What should a person be able to do"
                                )
                              ) +
                              "\n        "
                          ),
                        ]),
                        e._v(" "),
                        n(
                          "div",
                          { staticClass: "field" },
                          [
                            n(
                              "b-radio",
                              {
                                attrs: { "native-value": !1 },
                                model: {
                                  value: e.editableWheel,
                                  callback: function (t) {
                                    e.editableWheel = t;
                                  },
                                  expression: "editableWheel",
                                },
                              },
                              [
                                e._v(
                                  "\n            " +
                                    e._s(
                                      e.$t(
                                        "sharedialog.They should only be able to spin the wheel"
                                      )
                                    ) +
                                    "\n          "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        n(
                          "div",
                          { staticClass: "field" },
                          [
                            n(
                              "b-radio",
                              {
                                attrs: { "native-value": !0 },
                                model: {
                                  value: e.editableWheel,
                                  callback: function (t) {
                                    e.editableWheel = t;
                                  },
                                  expression: "editableWheel",
                                },
                              },
                              [
                                e._v(
                                  "\n            " +
                                    e._s(
                                      e.$t(
                                        "sharedialog.They should be able to spin the wheel and"
                                      )
                                    ) +
                                    "\n          "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ]
                    ),
                    e._v(" "),
                    n(
                      "footer",
                      {
                        staticClass: "modal-card-foot",
                        staticStyle: { "justify-content": "flex-end" },
                      },
                      [
                        n(
                          "b-button",
                          {
                            attrs: { size: "is-medium" },
                            on: {
                              click: function (t) {
                                return e.enter_Inactive();
                              },
                            },
                          },
                          [
                            e._v(
                              "\n          " +
                                e._s(e.$t("common.Cancel")) +
                                "\n        "
                            ),
                          ]
                        ),
                        e._v(" "),
                        n(
                          "b-button",
                          {
                            attrs: { size: "is-medium", type: "is-primary" },
                            on: {
                              click: function (t) {
                                return e.enter_CreatingLink();
                              },
                            },
                          },
                          [
                            e._v(
                              "\n          " +
                                e._s(e.$t("sharedialog.Continue")) +
                                "\n        "
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
            e._v(" "),
            n(
              "b-modal",
              {
                attrs: { active: e.showLink, width: 640, scroll: "keep" },
                on: {
                  "update:active": function (t) {
                    e.showLink = t;
                  },
                },
              },
              [
                n(
                  "div",
                  { staticClass: "modal-card", staticStyle: { width: "auto" } },
                  [
                    n("header", { staticClass: "modal-card-head" }, [
                      n("p", { staticClass: "modal-card-title" }, [
                        n("i", { staticClass: "fa fa-share-alt" }),
                        e._v(
                          " " +
                            e._s(e.$t("sharedialog.Shareable link")) +
                            "\n        "
                        ),
                      ]),
                    ]),
                    e._v(" "),
                    n(
                      "section",
                      { staticClass: "modal-card-body can-go-dark" },
                      [
                        n("p", [
                          e._v(
                            "\n          " +
                              e._s(e.$t("sharedialog.Link to this wheel")) +
                              "\n        "
                          ),
                        ]),
                        e._v(" "),
                        n("div", { staticClass: "columns" }, [
                          n(
                            "div",
                            { staticClass: "column is-8" },
                            [
                              n("b-input", {
                                attrs: { id: "sharableLinkText" },
                                model: {
                                  value: e.sharableLink,
                                  callback: function (t) {
                                    e.sharableLink = t;
                                  },
                                  expression: "sharableLink",
                                },
                              }),
                            ],
                            1
                          ),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "column" },
                            [
                              n(
                                "b-button",
                                {
                                  attrs: { type: "is-light" },
                                  on: { click: e.copyLink },
                                },
                                [
                                  e._v(
                                    "\n              " +
                                      e._s(e.$t("sharedialog.Copy link")) +
                                      "\n            "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]),
                        e._v(" "),
                        n("p", { staticStyle: { color: "#BBB" } }, [
                          e._v(
                            "\n          " +
                              e._s(
                                e.$t(
                                  "sharedialog.This link will work for anyone"
                                )
                              ) +
                              "\n        "
                          ),
                        ]),
                      ]
                    ),
                    e._v(" "),
                    n(
                      "footer",
                      {
                        staticClass: "modal-card-foot",
                        staticStyle: { "justify-content": "flex-end" },
                      },
                      [
                        n(
                          "b-button",
                          {
                            attrs: { size: "is-medium" },
                            on: {
                              click: function (t) {
                                return e.enter_Inactive();
                              },
                            },
                          },
                          [
                            e._v(
                              "\n          " +
                                e._s(e.$t("common.Close")) +
                                "\n        "
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
          ],
          1
        );
      };
    function We(e, t, n, i, a, r, o) {
      try {
        var s = e[r](o),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(i, a);
    }
    Pe._withStripped = !0;
    var Be = {
        data: function () {
          return { fsm: "Inactive", editableWheel: !1, sharableLink: "" };
        },
        computed: {
          showWarning: function () {
            return "ShowingWarning" == this.fsm;
          },
          showOptions: function () {
            return "UserIsSettingOptions" == this.fsm;
          },
          showLink: function () {
            return "ShowingLink" == this.fsm;
          },
        },
        methods: {
          show: function () {
            this.$store.state.wheelConfig.isTooBigForDatabase()
              ? alert(this.$t("sharedialog.Sorry, too many images"))
              : this.enter_ShowingWarning();
          },
          enter_ShowingWarning: function () {
            this.setState("ShowingWarning");
          },
          enter_UserIsSettingOptions: function () {
            this.setState("UserIsSettingOptions");
          },
          enter_CreatingLink: function () {
            var e,
              t = this;
            return ((e = regeneratorRuntime.mark(function e() {
              var n, i;
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          t.setState("CreatingLink"),
                          (n = t.$store.state.wheelConfig),
                          (e.prev = 2),
                          t.$emit("start-wait-animation"),
                          (e.next = 6),
                          he.createSharedWheel(t.editableWheel, n)
                        );
                      case 6:
                        (i = e.sent),
                          (t.sharableLink =
                            "https://" +
                            d.a(window.location.host, t.$i18n.locale, i)),
                          t.enter_ShowingLink(),
                          (e.next = 15);
                        break;
                      case 11:
                        (e.prev = 11),
                          (e.t0 = e.catch(2)),
                          f.u(e.t0),
                          alert(e.t0);
                      case 15:
                        return (
                          (e.prev = 15),
                          t.$emit("stop-wait-animation"),
                          e.finish(15)
                        );
                      case 18:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 11, 15, 18]]
              );
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (i, a) {
                var r = e.apply(t, n);
                function o(e) {
                  We(r, i, a, o, s, "next", e);
                }
                function s(e) {
                  We(r, i, a, o, s, "throw", e);
                }
                o(void 0);
              });
            })();
          },
          enter_ShowingLink: function () {
            this.setState("ShowingLink");
          },
          enter_Inactive: function () {
            this.setState("Inactive");
          },
          copyLink: function () {
            f.t("Wheel", "CopySharableLink", ""),
              document.querySelector("#sharableLinkText").select(),
              document.execCommand("copy");
            var e = this.$t("sharedialog.Link copied to the clipboard");
            this.$emit("show-snackbar-message", e);
          },
          setState: function (e) {
            this.fsm = e;
          },
        },
      },
      Le = Object(g.a)(Be, Pe, [], !1, null, null, null);
    Le.options.__file = "static/sharedialog.vue";
    var Oe = Le.exports,
      je = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-modal",
          {
            attrs: {
              active: e.twitterDialogVisible,
              width: 640,
              scroll: "keep",
            },
            on: {
              "update:active": function (t) {
                e.twitterDialogVisible = t;
              },
            },
          },
          [
            n(
              "div",
              { staticClass: "modal-card", staticStyle: { width: "auto" } },
              [
                n("header", { staticClass: "modal-card-head" }, [
                  n("p", { staticClass: "modal-card-title" }, [
                    n("i", { staticClass: "fab fa-twitter" }),
                    e._v(
                      " " +
                        e._s(e.$t("common.Import Twitter users")) +
                        "\n      "
                    ),
                  ]),
                ]),
                e._v(" "),
                n(
                  "section",
                  { staticClass: "modal-card-body can-go-dark" },
                  [
                    n(
                      "b-field",
                      [
                        n("b-input", {
                          ref: "searchTermField",
                          attrs: {
                            placeholder: e.$t(
                              "twitterdialog.Hashtag, like #gdg"
                            ),
                          },
                          nativeOn: {
                            keyup: function (t) {
                              return !t.type.indexOf("key") &&
                                e._k(t.keyCode, "enter", 13, t.key, "Enter")
                                ? null
                                : e.getTwitterUsers(t);
                            },
                          },
                          model: {
                            value: e.searchTerm,
                            callback: function (t) {
                              e.searchTerm = t;
                            },
                            expression: "searchTerm",
                          },
                        }),
                      ],
                      1
                    ),
                    e._v(" "),
                    n("p", {
                      staticStyle: { color: "#999" },
                      domProps: {
                        innerHTML: e._s(
                          e.$t("twitterdialog.This search will fetch")
                        ),
                      },
                    }),
                  ],
                  1
                ),
                e._v(" "),
                n(
                  "footer",
                  {
                    staticClass: "modal-card-foot",
                    staticStyle: { "justify-content": "flex-end" },
                  },
                  [
                    n(
                      "b-button",
                      {
                        attrs: { size: "is-medium" },
                        on: {
                          click: function (t) {
                            e.twitterDialogVisible = !1;
                          },
                        },
                      },
                      [
                        e._v(
                          "\n        " +
                            e._s(e.$t("common.Cancel")) +
                            "\n      "
                        ),
                      ]
                    ),
                    e._v(" "),
                    n(
                      "b-button",
                      {
                        attrs: {
                          size: "is-medium",
                          type: "is-primary",
                          disabled: "" == e.searchTerm,
                        },
                        on: { click: e.getTwitterUsers },
                      },
                      [
                        e._v(
                          "\n        " + e._s(e.$t("common.OK")) + "\n      "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ]
            ),
          ]
        );
      };
    function Me(e, t, n, i, a, r, o) {
      try {
        var s = e[r](o),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(i, a);
    }
    je._withStripped = !0;
    var Ve = {
        data: function () {
          return { twitterDialogVisible: !1, searchTerm: "" };
        },
        methods: {
          show: function () {
            var e = this;
            (this.twitterDialogVisible = !0),
              setTimeout(function () {
                e.$refs.searchTermField.focus();
              }, 100);
          },
          getTwitterUsers: function () {
            var e,
              t = this;
            return ((e = regeneratorRuntime.mark(function e() {
              var n, i;
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t.twitterDialogVisible = !1),
                          f.t("Wheel", "GetSocialMediaUsers", t.searchTerm),
                          (e.prev = 2),
                          t.$emit("start-wait-animation"),
                          (e.next = 6),
                          he.fetchSocialMediaUsers(t.searchTerm)
                        );
                      case 6:
                        (n = e.sent) &&
                          (t.$store.commit("setNames", n),
                          t.$store.commit("setWheelTitle", ""),
                          (i = t.$t("twitterdialog.Found Twitter users", {
                            userCount: n.length,
                            term: t.searchTerm,
                          })),
                          t.$emit("show-snackbar-message", i)),
                          (e.next = 14);
                        break;
                      case 10:
                        (e.prev = 10),
                          (e.t0 = e.catch(2)),
                          f.u(e.t0),
                          alert(e.t0);
                      case 14:
                        return (
                          (e.prev = 14),
                          t.$emit("stop-wait-animation"),
                          e.finish(14)
                        );
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 10, 14, 17]]
              );
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (i, a) {
                var r = e.apply(t, n);
                function o(e) {
                  Me(r, i, a, o, s, "next", e);
                }
                function s(e) {
                  Me(r, i, a, o, s, "throw", e);
                }
                o(void 0);
              });
            })();
          },
        },
      },
      ze = Object(g.a)(Ve, je, [], !1, null, null, null);
    ze.options.__file = "static/twitterdialog.vue";
    var Ue = ze.exports,
      He = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          [
            n(
              "b-modal",
              {
                attrs: {
                  active: e.displayLoginDialog,
                  width: 640,
                  scroll: "keep",
                },
                on: {
                  "update:active": function (t) {
                    e.displayLoginDialog = t;
                  },
                },
              },
              [
                n(
                  "div",
                  { staticClass: "modal-card", staticStyle: { width: "auto" } },
                  [
                    n("header", { staticClass: "modal-card-head" }, [
                      n("p", { staticClass: "modal-card-title" }, [
                        n("i", { staticClass: "fa fa-link" }),
                        e._v(
                          " " +
                            e._s(e.$t("common.Link Google Spreadsheet")) +
                            "\n        "
                        ),
                      ]),
                    ]),
                    e._v(" "),
                    n(
                      "section",
                      { staticClass: "modal-card-body can-go-dark" },
                      [
                        n("p", [
                          e._v(
                            "\n          " +
                              e._s(
                                e.$t("sheetdialog.When you link a spreadsheet")
                              ) +
                              "\n        "
                          ),
                        ]),
                        e._v(" "),
                        n("p", { staticStyle: { "margin-top": "10px" } }, [
                          e._v(
                            "\n          " +
                              e._s(e.$t("sheetdialog.To import sheets")) +
                              "\n        "
                          ),
                        ]),
                        e._v(" "),
                        n(
                          "p",
                          {
                            staticStyle: {
                              "margin-top": "10px",
                              color: "#999",
                            },
                          },
                          [
                            e._v(
                              "\n          " +
                                e._s(
                                  e.$t(
                                    "common.If you dont see a Google login button below"
                                  )
                                ) +
                                "\n        "
                            ),
                          ]
                        ),
                      ]
                    ),
                    e._v(" "),
                    n(
                      "footer",
                      {
                        staticClass: "modal-card-foot",
                        staticStyle: { "justify-content": "flex-end" },
                      },
                      [
                        n(
                          "b-button",
                          {
                            on: {
                              click: function (t) {
                                return e.enter_inactive();
                              },
                            },
                          },
                          [
                            e._v(
                              "\n          " +
                                e._s(e.$t("common.Cancel")) +
                                "\n        "
                            ),
                          ]
                        ),
                        e._v(" "),
                        n("input", {
                          staticStyle: { height: "40px" },
                          attrs: {
                            type: "image",
                            alt: "Sign in with Google",
                            src:
                              "/images/btn_google_signin_dark_normal_web@2x.png",
                          },
                          on: {
                            click: function (t) {
                              return e.enter_userIsLoggingIn();
                            },
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
            e._v(" "),
            n(
              "b-modal",
              {
                attrs: {
                  active: e.displaySheetConfigDialog,
                  width: 640,
                  scroll: "keep",
                },
                on: {
                  "update:active": function (t) {
                    e.displaySheetConfigDialog = t;
                  },
                },
              },
              [
                n(
                  "div",
                  { staticClass: "modal-card", staticStyle: { width: "auto" } },
                  [
                    n(
                      "header",
                      { staticClass: "modal-card-head" },
                      [
                        n("p", { staticClass: "modal-card-title" }, [
                          n("i", { staticClass: "fa fa-link" }),
                          e._v(
                            " " +
                              e._s(e.$t("common.Link Google Spreadsheet")) +
                              "\n        "
                          ),
                        ]),
                        e._v(" "),
                        n("profiledropdown", {
                          on: {
                            "log-out": function (t) {
                              return e.enter_inactive();
                            },
                          },
                        }),
                      ],
                      1
                    ),
                    e._v(" "),
                    n(
                      "section",
                      { staticClass: "modal-card-body can-go-dark" },
                      [
                        n("div", { staticClass: "columns" }, [
                          n("div", { staticClass: "column is-one-third" }, [
                            e._v(
                              "\n            " +
                                e._s(e.$t("sheetdialog.Selected spreadsheet")) +
                                "\n          "
                            ),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "column" },
                            [
                              n("b-input", {
                                attrs: { disabled: "" },
                                model: {
                                  value: e.sheetTitle,
                                  callback: function (t) {
                                    e.sheetTitle = t;
                                  },
                                  expression: "sheetTitle",
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                        e._v(" "),
                        n("div", { staticClass: "columns" }, [
                          n("div", { staticClass: "column is-one-fifth" }, [
                            e._v(
                              "\n            " +
                                e._s(e.$t("sheetdialog.Tab")) +
                                "\n          "
                            ),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "column" },
                            [
                              n(
                                "b-select",
                                {
                                  attrs: {
                                    placeholder: e.$t(
                                      "sheetdialog.Select a tab"
                                    ),
                                    expanded: "",
                                  },
                                  model: {
                                    value: e.selectedTab,
                                    callback: function (t) {
                                      e.selectedTab = t;
                                    },
                                    expression: "selectedTab",
                                  },
                                },
                                e._l(e.tabs, function (t) {
                                  return n(
                                    "option",
                                    { key: t, domProps: { value: t } },
                                    [
                                      e._v(
                                        "\n                " +
                                          e._s(t) +
                                          "\n              "
                                      ),
                                    ]
                                  );
                                }),
                                0
                              ),
                            ],
                            1
                          ),
                        ]),
                        e._v(" "),
                        n("div", { staticClass: "columns" }, [
                          n("div", { staticClass: "column is-one-fifth" }, [
                            e._v(
                              "\n            " +
                                e._s(e.$t("sheetdialog.Column")) +
                                "\n          "
                            ),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "column" },
                            [
                              n(
                                "b-select",
                                {
                                  attrs: {
                                    loading: e.loadingColumns,
                                    placeholder: e.$t(
                                      "sheetdialog.Select a column"
                                    ),
                                    expanded: "",
                                  },
                                  model: {
                                    value: e.selectedColumn,
                                    callback: function (t) {
                                      e.selectedColumn = t;
                                    },
                                    expression: "selectedColumn",
                                  },
                                },
                                e._l(e.columns, function (t) {
                                  return n(
                                    "option",
                                    { key: t.id, domProps: { value: t.id } },
                                    [
                                      e._v(
                                        "\n                " +
                                          e._s(t.name) +
                                          "\n              "
                                      ),
                                    ]
                                  );
                                }),
                                0
                              ),
                            ],
                            1
                          ),
                        ]),
                        e._v(" "),
                        n("div", { staticClass: "columns" }, [
                          n("div", { staticClass: "column is-one-fifth" }, [
                            e._v(
                              "\n            " +
                                e._s(e.$t("sheetdialog.First row")) +
                                "\n          "
                            ),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "column" },
                            [
                              n(
                                "b-checkbox",
                                {
                                  model: {
                                    value: e.firstRowIsHeader,
                                    callback: function (t) {
                                      e.firstRowIsHeader = t;
                                    },
                                    expression: "firstRowIsHeader",
                                  },
                                },
                                [
                                  e._v(
                                    "\n              " +
                                      e._s(
                                        e.$t(
                                          "sheetdialog.Is a header and should not be imported"
                                        )
                                      ) +
                                      "\n            "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]),
                      ]
                    ),
                    e._v(" "),
                    n(
                      "footer",
                      {
                        staticClass: "modal-card-foot",
                        staticStyle: { "justify-content": "flex-end" },
                      },
                      [
                        n(
                          "b-button",
                          {
                            attrs: { size: "is-medium" },
                            on: {
                              click: function (t) {
                                return e.enter_inactive();
                              },
                            },
                          },
                          [
                            e._v(
                              "\n          " +
                                e._s(e.$t("common.Cancel")) +
                                "\n        "
                            ),
                          ]
                        ),
                        e._v(" "),
                        n(
                          "b-button",
                          {
                            attrs: {
                              size: "is-medium",
                              disabled: !e.linkSheetButtonEnabled,
                              type: "is-primary",
                            },
                            on: {
                              click: function (t) {
                                return e.enter_linkingSheet();
                              },
                            },
                          },
                          [
                            e._v(
                              "\n          " +
                                e._s(e.$t("sheetdialog.Link sheet")) +
                                "\n        "
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
          ],
          1
        );
      };
    function Ge(e, t, n, i, a, r, o) {
      try {
        var s = e[r](o),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(i, a);
    }
    function qe(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, a) {
          var r = e.apply(t, n);
          function o(e) {
            Ge(r, i, a, o, s, "next", e);
          }
          function s(e) {
            Ge(r, i, a, o, s, "throw", e);
          }
          o(void 0);
        });
      };
    }
    function Je(e) {
      return Ke.apply(this, arguments);
    }
    function Ke() {
      return (Ke = qe(
        regeneratorRuntime.mark(function e(t) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    gapi.client.sheets.spreadsheets
                      .get({ spreadsheetId: t })
                      .then(function (e) {
                        return e.result.properties.title;
                      })
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Ye(e) {
      return Ze.apply(this, arguments);
    }
    function Ze() {
      return (Ze = qe(
        regeneratorRuntime.mark(function e(t) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    gapi.client.sheets.spreadsheets
                      .get({ spreadsheetId: t })
                      .then(function (e) {
                        return e.result.sheets.map(function (e) {
                          return e.properties.title;
                        });
                      })
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Xe(e, t) {
      return Qe.apply(this, arguments);
    }
    function Qe() {
      return (Qe = qe(
        regeneratorRuntime.mark(function e(t, n) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    gapi.client.sheets.spreadsheets.values
                      .get({ spreadsheetId: t, range: n })
                      .then(function (e) {
                        var t = [],
                          n = e.result;
                        if (n.values && n.values.length > 0)
                          for (
                            var i = n.values[0], a = 65, r = 0;
                            r < i.length && a < 91;
                            r++
                          )
                            t.push({ id: String.fromCharCode(a), name: i[r] }),
                              (a += 1);
                        return t;
                      })
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function et(e, t, n, i) {
      return tt.apply(this, arguments);
    }
    function tt() {
      return (tt = qe(
        regeneratorRuntime.mark(function e(t, n, i, a) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    gapi.client.sheets.spreadsheets.values
                      .get({ spreadsheetId: t, range: n + "!" + i + ":" + i })
                      .then(function (e) {
                        var t = e.result,
                          n = [];
                        if (t.values && t.values.length > 0)
                          for (var i = 0; i < t.values.length; i++)
                            if (0 == i && a);
                            else {
                              var r = t.values[i];
                              void 0 !== r[0] && n.push(r[0]);
                            }
                        return n;
                      })
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    He._withStripped = !0;
    n(51);
    var nt,
      it = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
    function at(e) {
      return (
        (nt = e),
        new Promise(function (e, t) {
          gapi.load("auth2:client:picker", function () {
            gapi.client
              .init({
                apiKey: "AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g",
                discoveryDocs: it,
                clientId:
                  "1096958520212-sbdisrtnfpeuk96lbi0cfspj7pspgk38.apps.googleusercontent.com",
                scope:
                  "https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/spreadsheets.readonly",
              })
              .then(function () {
                gapi.client.setToken({ access_token: nt }), e();
              });
          });
        })
      );
    }
    function rt(e, t, n, i, a, r, o) {
      try {
        var s = e[r](o),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(i, a);
    }
    function ot(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, a) {
          var r = e.apply(t, n);
          function o(e) {
            rt(r, i, a, o, s, "next", e);
          }
          function s(e) {
            rt(r, i, a, o, s, "throw", e);
          }
          o(void 0);
        });
      };
    }
    var st = {
        components: { profiledropdown: ue },
        data: function () {
          return {
            fsm: "inactive",
            sheetTitle: "",
            sheetId: "",
            tabs: [],
            selectedTab: null,
            columns: [],
            selectedColumn: null,
            loadingColumns: !1,
            firstRowIsHeader: !0,
            sheetLinkedAtMs: 0,
            timeoutId: 0,
          };
        },
        computed: {
          sheetLinked: function () {
            return this.$store.state.appStatus.sheetLinked;
          },
          displayLoginDialog: {
            get: function () {
              return "userIsPickingLoginMethod" == this.fsm;
            },
            set: function (e) {
              0 == e && (this.fsm = "inactive");
            },
          },
          displaySheetConfigDialog: {
            get: function () {
              return "userIsPickingTabCol" == this.fsm;
            },
            set: function (e) {
              0 == e && (this.fsm = "inactive");
            },
          },
          linkSheetButtonEnabled: function () {
            return this.selectedTab && this.selectedColumn;
          },
        },
        watch: {
          selectedTab: function (e) {
            var t = this;
            return ot(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (!e) {
                          n.next = 6;
                          break;
                        }
                        return (
                          (t.loadingColumns = !0),
                          (n.next = 4),
                          Xe(t.sheetId, t.selectedTab)
                        );
                      case 4:
                        (t.columns = n.sent), (t.loadingColumns = !1);
                      case 6:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          sheetLinked: function (e) {
            e || (clearTimeout(this.timeoutId), this.enter_inactive());
          },
        },
        methods: {
          show: function () {
            this.enter_loadingLibraries();
          },
          enter_inactive: function () {
            this.setState("inactive"), this.$store.commit("unlinkSheet");
          },
          enter_loadingLibraries: function () {
            var e = this;
            return ot(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          e.setState("loadingLibraries"),
                          e.$emit("start-wait-animation"),
                          (t.next = 4),
                          ae.n()
                        );
                      case 4:
                        e.$emit("stop-wait-animation"),
                          e.enter_userIsPickingLoginMethod();
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          enter_userIsPickingLoginMethod: function () {
            this.setState("userIsPickingLoginMethod");
          },
          enter_userIsLoggingIn: function () {
            var e = this;
            return ot(
              regeneratorRuntime.mark(function t() {
                var n, i;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            e.setState("userIsLoggingIn"),
                            (t.prev = 1),
                            f.t("Wheel", "LoginForSheetAttempt", ""),
                            (t.next = 5),
                            ae.p(e.$i18n.locale)
                          );
                        case 5:
                          return (n = t.sent), (t.next = 8), at(n);
                        case 8:
                          return (t.next = 10), ae.i();
                        case 10:
                          (i = t.sent),
                            e.$store.commit("logInUser", {
                              photoUrl: i.photoURL,
                              displayName: i.displayName,
                              uid: i.uid,
                            }),
                            f.t("Wheel", "LoginForSheetSuccess", ""),
                            e.enter_userIsPickingSheet(),
                            (t.next = 21);
                          break;
                        case 16:
                          (t.prev = 16),
                            (t.t0 = t.catch(1)),
                            f.u(t.t0),
                            f.t(
                              "Wheel",
                              "LoginForSheetFailure",
                              t.t0.toString()
                            ),
                            e.enter_authError(t.t0);
                        case 21:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 16]]
                );
              })
            )();
          },
          enter_userIsPickingSheet: function () {
            var e = this;
            return ot(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            e.setState("userIsPickingSheet"),
                            (t.prev = 1),
                            (t.next = 4),
                            new Promise(function (e, t) {
                              var n = new google.picker.DocsView(
                                google.picker.ViewId.SPREADSHEETS
                              );
                              new google.picker.PickerBuilder()
                                .enableFeature(google.picker.Feature.NAV_HIDDEN)
                                .setAppId("1096958520212")
                                .setOAuthToken(nt)
                                .addView(n)
                                .setDeveloperKey(
                                  "AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g"
                                )
                                .setCallback(function (n) {
                                  if (
                                    ("cancel" == n.action &&
                                      t("No spreadsheet picked"),
                                    "picked" == n.action && n.docs.length > 0)
                                  ) {
                                    var i = n.docs[0].id;
                                    e(i);
                                  }
                                })
                                .setTitle("Select a spreadsheet")
                                .build()
                                .setVisible(!0);
                            })
                          );
                        case 4:
                          return (
                            (e.sheetId = t.sent), (t.next = 7), Je(e.sheetId)
                          );
                        case 7:
                          (e.sheetTitle = t.sent),
                            e.enter_userIsPickingTabCol(),
                            (t.next = 15);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(1)),
                            f.u(t.t0),
                            e.enter_authError(t.t0);
                        case 15:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 11]]
                );
              })
            )();
          },
          enter_userIsPickingTabCol: function () {
            var e = this;
            return ot(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          e.setState("userIsPickingTabCol"),
                          (e.selectedTab = null),
                          (e.selectedColumn = null),
                          (t.next = 5),
                          Ye(e.sheetId)
                        );
                      case 5:
                        e.tabs = t.sent;
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          enter_linkingSheet: function () {
            this.setState("linkingSheet"),
              f.t("Wheel", "LinkSpreadsheet", ""),
              this.$store.commit("linkSheet"),
              (this.sheetLinkedAtMs = new Date().getTime()),
              this.enter_readingSheet();
          },
          enter_readingSheet: function () {
            var e = this;
            return ot(
              regeneratorRuntime.mark(function t() {
                var n, i, a;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            e.setState("readingSheet"),
                            (t.prev = 1),
                            (t.next = 4),
                            et(
                              e.sheetId,
                              e.selectedTab,
                              e.selectedColumn,
                              e.firstRowIsHeader
                            )
                          );
                        case 4:
                          (n = t.sent),
                            (i = n.map(function (e) {
                              return f.k(e);
                            })),
                            (a = f.j(e.$store.state.wheelConfig.names, i)),
                            e.notifyUserOfNewEntries(a),
                            e.$store.commit("setNames", i),
                            e.enter_waitingToReadSheet(),
                            (t.next = 17);
                          break;
                        case 12:
                          (t.prev = 12),
                            (t.t0 = t.catch(1)),
                            f.u(t.t0),
                            f.t(
                              t.t0,
                              "enter_readingSheet()",
                              navigator.userAgent
                            ),
                            e.enter_authError(t.t0);
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 12]]
                );
              })
            )();
          },
          enter_waitingToReadSheet: function () {
            var e = this;
            this.setState("waitingToReadSheet");
            var t = this;
            this.timeoutId = setTimeout(function () {
              e.linkHasTimedOut() ? t.enter_inactive() : t.enter_readingSheet();
            }, 5e3);
          },
          enter_authError: function (e) {
            this.setState("authError"),
              ae.q(),
              this.$emit("auth-error", e),
              this.enter_inactive();
          },
          setState: function (e) {
            this.fsm = e;
          },
          linkHasTimedOut: function () {
            return new Date().getTime() - this.sheetLinkedAtMs > 36e5;
          },
          notifyUserOfNewEntries: function (e) {
            var t = this;
            if (e.length > 2) {
              var n = this.$t("sheetdialog.entries added", { count: e.length });
              this.$emit("show-snackbar-message", n);
            } else
              e.forEach(function (e) {
                var n = t.$t("sheetdialog.added", { entry: f.k(e) });
                t.$emit("show-snackbar-message", n);
              });
          },
        },
      },
      ct = Object(g.a)(st, He, [], !1, null, null, null);
    ct.options.__file = "static/sheetdialog.vue";
    var lt = ct.exports,
      ut = n(132),
      ht = n(133),
      mt = n(129);
    var ft = n(39);
    function dt(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var pt = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.pageLoadedTs = this.getNowTimestamp());
        }
        var t, n, i;
        return (
          (t = e),
          (n = [
            {
              key: "reloadOutdatedPage",
              value: function (e) {
                e &&
                  this.getNowTimestamp() - this.pageLoadedTs > 1728e5 &&
                  location.reload(!0);
              },
            },
            {
              key: "getNowTimestamp",
              value: function () {
                return new Date().getTime();
              },
            },
          ]) && dt(t.prototype, n),
          i && dt(t, i),
          e
        );
      })(),
      gt = n(130);
    function vt(e, t, n, i, a, r, o) {
      try {
        var s = e[r](o),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(i, a);
    }
    function wt(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, a) {
          var r = e.apply(t, n);
          function o(e) {
            vt(r, i, a, o, s, "next", e);
          }
          function s(e) {
            vt(r, i, a, o, s, "throw", e);
          }
          o(void 0);
        });
      };
    }
    var bt = {
        components: {
          loadingScreen: h.a,
          toolbar: w,
          spinningwheel: E.a,
          nameTabs: ne,
          opendialog: ge,
          winnerdialog: ut.a,
          savedialog: ke,
          optionsdialog: Te,
          sharedialog: Oe,
          twitterdialog: Ue,
          sheetdialog: lt,
          winneranimation: ht.a,
          desktopAd: $,
          mobileAd: N.a,
        },
        mounted: function () {
          var e = this;
          return wt(
            regeneratorRuntime.mark(function t() {
              var n, i;
              return regeneratorRuntime.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = ""),
                          (t.prev = 1),
                          (t.next = 4),
                          gt.a(window.location)
                        );
                      case 4:
                        (n = t.sent), (t.next = 11);
                        break;
                      case 7:
                        (t.prev = 7),
                          (t.t0 = t.catch(1)),
                          f.u(t.t0),
                          alert(t.t0);
                      case 11:
                        n.redirectUrl
                          ? window.location.replace(n.redirectUrl)
                          : ((i = new re.a(
                              e.$t("common.We have a winner!")
                            )).loadJson(
                              localStorage.getItem("LastWheelConfig")
                            ),
                            n.wheelConfig &&
                              (i.loadValues(n.wheelConfig),
                              he.logSharedWheelRead(n.sharedWheelPath)),
                            e.$store.commit("setWheelConfig", i),
                            e.setDocLangProperties(),
                            e.loadPreferences(),
                            e.startFullscreenDetection(),
                            e.startOnlineDetection(),
                            e.startVisibilityDetection(),
                            e.displayLanguageTip(),
                            e.refreshWheelOnFontLoad(),
                            (e.loading = !1));
                      case 12:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[1, 7]]
              );
            })
          )();
        },
        data: function () {
          return { waitAnimation: {}, loading: !0 };
        },
        computed: {
          names: function () {
            return this.$store.state.wheelConfig.names;
          },
          wheelConfig: function () {
            return this.$store.state.wheelConfig;
          },
          preferences: function () {
            return this.$store.state.preferences;
          },
          fullScreen: function () {
            return this.$store.state.appStatus.fullScreen;
          },
          wheelSpinning: function () {
            return this.$store.state.appStatus.wheelSpinning;
          },
          darkMode: function () {
            return this.$store.getters.darkMode;
          },
          pageColor: function () {
            return this.$store.state.wheelConfig.pageBackgroundColor;
          },
        },
        watch: {
          wheelConfig: function (e, t) {
            f.v(this.darkMode, "#777", this.pageColor),
              localStorage.setItem(
                "LastWheelConfig",
                this.$store.state.wheelConfig.getJson()
              ),
              Ee.f(e.duringSpinSound, e.afterSpinSound);
          },
          names: function (e, t) {
            localStorage.setItem(
              "LastWheelConfig",
              this.$store.state.wheelConfig.getJson()
            );
          },
          preferences: function (e) {
            f.v(this.darkMode, "#777", this.pageColor),
              localStorage.setItem("Preferences", e.getJson());
          },
          fullScreen: function (e, t) {
            var n;
            e &&
              (f.t("Wheel", "EnterFullscreen", ""),
              (n = document.body).requestFullscreen
                ? n.requestFullscreen()
                : n.webkitRequestFullscreen
                ? n.webkitRequestFullscreen()
                : n.mozRequestFullScreen
                ? n.mozRequestFullScreen()
                : n.msRequestFullscreen && n.msRequestFullscreen()),
              e ||
                (f.t("Wheel", "ExitFullscreen", ""),
                document.exitFullscreen
                  ? document.exitFullscreen()
                  : document.mozCancelFullScreen
                  ? document.mozCancelFullScreen()
                  : document.webkitExitFullscreen &&
                    document.webkitExitFullscreen());
          },
        },
        methods: {
          startFullscreenDetection: function () {
            var e = this;
            document.addEventListener("fullscreenchange", function (t) {
              null !=
              (document.fullscreenElement ||
                document.mozFullScreenElement ||
                document.webkitFullscreenElement ||
                document.msFullscreenElement)
                ? e.$store.commit("enterFullScreen")
                : e.$store.commit("exitFullScreen");
            });
          },
          startOnlineDetection: function () {
            this.$store.commit("setOnline", navigator.onLine);
            var e = this;
            window.addEventListener("online", function (t) {
              e.$store.commit("setOnline", navigator.onLine);
            }),
              window.addEventListener("offline", function (t) {
                e.$store.commit("setOnline", navigator.onLine);
              });
          },
          startVisibilityDetection: function () {
            var e = new pt();
            document.addEventListener("visibilitychange", function () {
              e.reloadOutdatedPage(document.hidden);
            });
          },
          displayLanguageTip: function () {
            var e = this,
              t = d.c(this.$i18n.locale, navigator.languages);
            t &&
              setTimeout(
                wt(
                  regeneratorRuntime.mark(function i() {
                    var a, r, o;
                    return regeneratorRuntime.wrap(function (i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            return (
                              (a = d.f(t)), (i.next = 3), n(72)("./".concat(a))
                            );
                          case 3:
                            (r = i.sent.default),
                              (o = r.app["Click the Language menu"]),
                              e.showSnackbarMessage(o);
                          case 6:
                          case "end":
                            return i.stop();
                        }
                    }, i);
                  })
                ),
                3e3
              );
          },
          loadPreferences: function () {
            var e = new ft.a();
            e.loadJson(localStorage.getItem("Preferences")),
              this.$store.commit("setPreferences", e);
          },
          setDocLangProperties: function () {
            document.documentElement.setAttribute("lang", this.$i18n.locale),
              (document.title =
                "Wheel of Names | " + this.$t("app.Random name picker"));
            var e = this.$t("app.Free and easy to use");
            document
              .querySelector('meta[name="description"]')
              .setAttribute("content", e);
          },
          refreshWheelOnFontLoad: function () {
            if (document.fonts) {
              var e = this;
              document.fonts.ready.then(function () {
                e.$refs.spinningwheel.refresh();
              });
            }
          },
          resetWheel: function () {
            f.m();
            var e = new re.a(this.$t("common.We have a winner!"));
            this.$store.commit("setWheelConfig", e),
              this.$store.commit("clearWinners"),
              this.showSnackbarMessage(
                this.$t("app.Loaded default names and options")
              );
          },
          openOpenDialog: function () {
            f.m(),
              f.t("Wheel", "ShowOpenDialog", ""),
              this.$refs.opendialog.show();
          },
          openSaveDialog: function () {
            f.m(),
              f.t("Wheel", "ShowSaveDialog", ""),
              this.$refs.savedialog.show();
          },
          openShareDialog: function () {
            f.m(),
              f.t("Wheel", "GetSharableLink", ""),
              this.$refs.sharedialog.show();
          },
          openCustomizeDialog: function () {
            f.m(),
              f.t("Wheel", "ShowCustomizeDialog", ""),
              this.$refs.optionsdialog.show();
          },
          openTwitterDialog: function () {
            f.m(),
              f.t("Wheel", "ShowSocialMediaDialog", ""),
              this.$refs.twitterdialog.show();
          },
          openSheetDialog: function () {
            f.m(),
              f.t("Wheel", "ShowSpreadsheetDialog", ""),
              this.$refs.sheetdialog.show();
          },
          setLocale: function (e) {
            f.m(), window.location.replace(d.h(window.location.hostname, e));
          },
          nameChanged: function () {
            var e = this.$store.state;
            e.appStatus.wheelSpinning &&
              e.wheelConfig.shouldPlayTicks() &&
              Ee.e();
          },
          wheelStarted: function () {
            Ee.g(this.wheelConfig.duringSpinSound);
          },
          wheelStopped: function (e) {
            var t = this;
            Ee.h(),
              this.$store.commit("addWinner", e),
              this.wheelConfig.animateWinner &&
                this.$refs.winneranimation.show(e),
              this.wheelConfig.launchConfetti &&
                mt.a(this.wheelConfig.getCoalescedColors()),
              this.wheelConfig.displayWinnerDialog &&
                this.$refs.winnerdialog.show(e),
              this.wheelConfig.autoRemoveWinner &&
                setTimeout(function (n) {
                  return t.removeName(e);
                }, 5e3),
              Ee.c(this.wheelConfig.afterSpinSound, f.h(e));
          },
          showSnackbarMessage: function (e) {
            this.$buefy.toast.open({ message: e, duration: 6e3 });
          },
          startWaitAnimation: function () {
            this.waitAnimation = this.$buefy.loading.open({ container: null });
          },
          stopWaitAnimation: function () {
            this.waitAnimation.close();
          },
          removeName: function (e) {
            this.$store.state.wheelConfig.playClickWhenWinnerRemoved && Ee.d(),
              this.$store.commit("removeName", e);
            var t = this.$t("app.Removed", { name: f.h(e, !0) });
            this.showSnackbarMessage(t);
          },
          removeNameAll: function (e) {
            this.$store.state.wheelConfig.playClickWhenWinnerRemoved && Ee.d(),
              this.$store.commit("removeNameAll", e);
            var t = this.$t("app.Removed", { name: f.h(e, !0) });
            this.showSnackbarMessage(t);
          },
          authError: function (e) {
            var t = this.$t("app.authError", { error: e.toString() });
            f.t("AuthError", e.toString(), navigator.userAgent),
              this.$buefy.dialog.alert({
                title: this.$t("app.Error"),
                message: t,
                type: "is-danger",
                hasIcon: !0,
                ariaRole: "alertdialog",
                ariaModal: !0,
                onConfirm: function () {
                  return location.reload(!0);
                },
              });
          },
          resetWheelRotation: function () {
            this.$refs.spinningwheel.resetRotation();
          },
        },
      },
      yt = (n(423), Object(g.a)(bt, u, [], !1, null, null, null));
    yt.options.__file = "static/app.vue";
    var _t = yt.exports,
      kt = n(47);
    n(65),
      n(29),
      n(30),
      n(31),
      n(188),
      n.p,
      n.p,
      n.p,
      n(189),
      n(190),
      n(191),
      n.p;
    function Ct(e, t, n, i, a, r, o) {
      try {
        var s = e[r](o),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(i, a);
    }
    f.n(),
      (function () {
        localStorage.removeItem("colors"),
          localStorage.removeItem("email"),
          localStorage.removeItem("galleryPicture"),
          localStorage.removeItem("idToken"),
          localStorage.removeItem("lastUsedNames"),
          localStorage.removeItem("namelists"),
          localStorage.removeItem("oauthToken"),
          localStorage.removeItem("pictureType"),
          localStorage.removeItem("playCheers"),
          localStorage.removeItem("playTicks"),
          localStorage.removeItem("profilePic"),
          localStorage.removeItem("spinTime"),
          localStorage.removeItem("spreadsheetId"),
          localStorage.removeItem("spreadsheetTitle"),
          localStorage.removeItem("winnerMessage");
        try {
          !(function () {
            if (!localStorage.getItem("LastWheelConfig")) return;
            var e = JSON.parse(localStorage.getItem("LastWheelConfig"));
            e.colors &&
              ((e.colorSettings = [
                { color: e.colors[0], enabled: !0 },
                { color: e.colors[1], enabled: !0 },
                { color: e.colors[2], enabled: !0 },
                { color: e.colors[3], enabled: !0 },
                { color: "#000000", enabled: !1 },
                { color: "#000000", enabled: !1 },
              ]),
              delete e.colors,
              localStorage.setItem("LastWheelConfig", JSON.stringify(e)));
          })();
        } catch (e) {
          console.error(e);
        }
      })(),
      "serviceWorker" in navigator &&
        window.addEventListener("load", function () {
          navigator.serviceWorker.register("/service-worker.js");
        }),
      i.a.use(a.a, { defaultIconPack: "fas" }),
      i.a.use(o.a, { breakpoints: { mobile: 900, desktop: 1 / 0 } }),
      i.a.use(r.a),
      i.a.use(c.a);
    var St,
      Ft = new r.a({ locale: new kt.a(location).locale });
    ((St = Ft.locale),
    new Promise(
      (function () {
        var e,
          t =
            ((e = regeneratorRuntime.mark(function e(t) {
              var i, a;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (i = d.f(St)), (e.next = 3), n(72)("./".concat(i));
                    case 3:
                      (a = e.sent.default), Ft.setLocaleMessage(St, a), t();
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (i, a) {
                var r = e.apply(t, n);
                function o(e) {
                  Ct(r, i, a, o, s, "next", e);
                }
                function s(e) {
                  Ct(r, i, a, o, s, "throw", e);
                }
                o(void 0);
              });
            });
        return function (e) {
          return t.apply(this, arguments);
        };
      })()
    )).then(function () {
      new i.a({
        i18n: Ft,
        el: "#app",
        template: "<app/>",
        store: l.a,
        components: { app: _t },
      });
    });
  },
  44: function (e, t, n) {},
  45: function (e, t, n) {},
  46: function (e, t, n) {},
  47: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    var i = n(4);
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var r = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.protocol = t.protocol),
          (this.host = t.host),
          (this.locale = i.d(t.host, t.pathname));
        var n = t.pathname.match(/\w\w\w-\w\w\w/);
        this.sharedWheel = n ? n[0].toLowerCase() : "";
      }
      var t, n, r;
      return (
        (t = e),
        (n = [
          {
            key: "setPathPrefix",
            value: function (e) {
              this.prefix = e;
            },
          },
          {
            key: "getAbsoluteUrl",
            value: function () {
              return (
                [
                  this.protocol,
                  "/",
                  this.host,
                  this.prefix,
                  i.b(this.host) == this.locale ? "" : this.locale,
                  this.sharedWheel,
                ]
                  .filter(function (e) {
                    return e;
                  })
                  .join("/")
                  .replace("///", "//") + "/"
              );
            },
          },
          {
            key: "getAbsoluteLocalizedRootUrl",
            value: function () {
              return (
                [
                  this.protocol,
                  "/",
                  this.host,
                  i.b(this.host) == this.locale ? "" : this.locale,
                ]
                  .filter(function (e) {
                    return e;
                  })
                  .join("/")
                  .replace("///", "//") + "/"
              );
            },
          },
        ]) && a(t.prototype, n),
        r && a(t, r),
        e
      );
    })();
  },
  54: function (e, t, n) {
    "use strict";
    var i = function () {
      var e = this,
        t = e.$createElement,
        n = e._self._c || t;
      return n(
        "div",
        { staticClass: "container", staticStyle: { "text-align": "center" } },
        [
          n("canvas", {
            staticStyle: { width: "100%" },
            attrs: { id: "wheelCanvas", width: "700", height: "700" },
            on: {
              click: function (t) {
                return e.spin();
              },
            },
          }),
          e._v(" "),
          e.isTouchScreen
            ? e._e()
            : n(
                "div",
                {
                  ref: "instructionsLayer",
                  attrs: { id: "instructionsLayer" },
                  on: {
                    click: function (t) {
                      return e.spin();
                    },
                  },
                },
                [
                  n(
                    "div",
                    {
                      staticClass: "instructionsText",
                      staticStyle: { "padding-top": "20%" },
                      attrs: { id: "topInstruction" },
                    },
                    [
                      e._v(
                        "\n      " +
                          e._s(e.$t("spinningwheel.Click to spin")) +
                          "\n    "
                      ),
                    ]
                  ),
                  e._v(" "),
                  n(
                    "div",
                    {
                      staticClass: "instructionsText",
                      staticStyle: { "padding-top": "60%" },
                      attrs: { id: "bottomInstruction" },
                    },
                    [
                      e._v(
                        "\n      " +
                          e._s(e.$t("spinningwheel.or press ctrl+enter")) +
                          "\n    "
                      ),
                    ]
                  ),
                ]
              ),
          e._v(" "),
          e.isTouchScreen
            ? n(
                "div",
                {
                  ref: "instructionsLayer",
                  attrs: { id: "instructionsLayer" },
                  on: {
                    click: function (t) {
                      return e.spin();
                    },
                  },
                },
                [
                  n(
                    "div",
                    {
                      staticClass: "instructionsText",
                      staticStyle: { "padding-top": "20%" },
                      attrs: { id: "topInstruction" },
                    },
                    [
                      e._v(
                        "\n      " +
                          e._s(e.$t("spinningwheel.Tap to spin")) +
                          "\n    "
                      ),
                    ]
                  ),
                ]
              )
            : e._e(),
        ]
      );
    };
    i._withStripped = !0;
    n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p,
      n.p;
    function a() {
      (this.images = new Object()),
        (this.emptyImage = new Image()),
        (this.emptyImage.src =
          "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
        (this.addImage = function (e) {
          (this.images[e] = new Image()), (this.images[e].src = e);
        }),
        (this.getImage = function (e) {
          return (
            e in this.images || (e && this.addImage(e)),
            this.images[e] && this.images[e].naturalHeight > 0
              ? this.images[e]
              : this.emptyImage
          );
        });
    }
    var r = n(0),
      o = n(10);
    function s(e, t, n, i, a, s) {
      function c(e, t, n, i) {
        e.beginPath(),
          e.moveTo(0, 0),
          e.arc(0, 0, t, -n / 2, n / 2),
          e.lineTo(0, 0),
          (e.fillStyle = i),
          e.fill();
      }
      (this.radians = e),
        (this.wheelRadius = t),
        (this.hubRadius = n),
        (this.color = i),
        (this.displayText = a),
        (this.image = s),
        (this.draw = function (e) {
          if (this.displayText || this.image) {
            e.save();
            var t = this.color;
            if ((c(e, this.wheelRadius, this.radians, t), this.image)) {
              var n = o.c(this.image);
              c(e, this.wheelRadius, this.radians, n),
                o.d(n) || (t = n),
                (function (e, t, n, i, a) {
                  var o = (function (e, t, n, i) {
                    var a, o;
                    for (
                      a = t;
                      a > 0 && ((o = a * i), !r.b(e, t, n, a, o));
                      a--
                    );
                    return {
                      x: Math.max((o * Math.cos(e)) / (2 * Math.sin(e)), n),
                      y: -o / 2,
                      w: a,
                      h: o,
                    };
                  })(t, n, i, a.height / a.width);
                  e.drawImage(a, o.x, o.y, o.w, o.h);
                })(
                  e,
                  this.radians / 2,
                  this.wheelRadius,
                  this.hubRadius,
                  this.image
                );
            }
            this.displayText &&
              (function (e, t, n, i, a) {
                (e.lineJoin = "round"),
                  (e.textBaseline = "middle"),
                  (e.textAlign = "end");
                var r = (function (e) {
                  if (!e) return { fill: "#000000", outline: "#FFFFFF" };
                  var t = "#" === e.charAt(0) ? e.substring(1, 7) : e,
                    n = parseInt(t.substring(0, 2), 16),
                    i = parseInt(t.substring(2, 4), 16),
                    a = parseInt(t.substring(4, 6), 16),
                    r = [n / 255, i / 255, a / 255].map(function (e) {
                      return e <= 0.03928
                        ? e / 12.92
                        : Math.pow((e + 0.055) / 1.055, 2.4);
                    });
                  return 0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2] > 0.179
                    ? { fill: "#000000", outline: "#FFFFFF" }
                    : { fill: "#FFFFFF", outline: "#000000" };
                })(i);
                a &&
                  ((e.lineWidth = 4),
                  (e.strokeStyle = r.outline),
                  e.strokeText(n, t, 0));
                (e.fillStyle = r.fill), e.fillText(n, t, 0);
              })(e, this.wheelRadius, this.displayText, t, this.image),
              (function (e, t, n) {
                e.beginPath(),
                  e.moveTo(0, 0),
                  e.arc(0, 0, t, -n / 2, n / 2),
                  e.lineTo(0, 0),
                  (e.lineWidth = 1),
                  (e.strokeStyle = "#333333"),
                  e.stroke();
              })(e, this.wheelRadius, this.radians),
              e.restore();
          }
        });
    }
    function c(e, t, n, i, a, r) {
      return (function (e, t, n, i, a, r, o, s) {
        var c;
        for (;;) {
          var u = (c = Math.round((o + s) / 2)) + "px " + i;
          if (
            (l(e, t, n, Math.PI / a, r, u, c) ? (o = c) : (s = c),
            Math.abs(s - o) < 2)
          )
            break;
        }
        return c;
      })(e, a, r, i, n, t, 10, 200);
    }
    function l(e, t, n, i, a, o, s) {
      if (!a) return !0;
      e.font = o;
      var c = e.measureText(a).width;
      return r.b(i, t, n, c, s);
    }
    var u = n(40);
    function h(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var m = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.imageCache = new a()),
          (this.names = []),
          (this.wheelImages = {});
      }
      var t, n, i;
      return (
        (t = e),
        (n = [
          {
            key: "draw",
            value: function (e, t, n, i, a, o, s, c) {
              var l = 0.44 * e.canvas.width,
                u = this.getHubRadius(l, o),
                h = r.f(s);
              this.drawBackgroundColor(e, s),
                this.drawWheelShadow(e, l, h),
                n.includes("") && c && this.drawHat(e, l, u),
                this.drawWheel(e, l, t, n, i, u),
                this.drawPointer(e, l, h),
                this.drawHub(e, t, a, u);
            },
          },
          {
            key: "getHubRadius",
            value: function (e, t) {
              var n = u.hubSizes[t] || 0.2;
              return Math.round(n * e);
            },
          },
          {
            key: "refresh",
            value: function () {
              (this.wheelImage = null), (this.pointerImage = null);
            },
          },
          {
            key: "drawBackgroundColor",
            value: function (e, t) {
              "#FFFFFF" != t &&
                (e.save(),
                (e.fillStyle = t),
                e.fillRect(0, 0, e.canvas.width, e.canvas.height),
                e.restore());
            },
          },
          {
            key: "drawWheelShadow",
            value: function (e, t, n) {
              n &&
                (this.wheelShadowImage ||
                  ((this.wheelShadowImage = o.a(
                    e.canvas.width,
                    e.canvas.height
                  )),
                  this.drawWheelShadowNoCache(
                    this.wheelShadowImage.getContext("2d"),
                    t
                  )),
                e.drawImage(this.wheelShadowImage, 0, 0));
            },
          },
          {
            key: "drawWheel",
            value: function (e, t, n, i, a, r) {
              this.wheelImage ||
                ((this.wheelImage = o.a(e.canvas.width, e.canvas.height)),
                this.drawWheelNoCache(
                  this.wheelImage.getContext("2d"),
                  t,
                  i,
                  a,
                  r
                ),
                (this.names = i.slice(0)));
              var s = e.canvas.width,
                c = e.canvas.height;
              e.save(),
                e.translate(s / 2, c / 2),
                e.rotate(n),
                e.translate(-s / 2, -c / 2),
                e.drawImage(this.wheelImage, 0, 0),
                e.restore();
            },
          },
          {
            key: "drawHat",
            value: function (e, t, n) {
              var i = this.imageCache.getImage("images/hat-with-names.png"),
                a = (t - n) / i.width,
                r = e.canvas.width / 2 - t,
                o = i.height * a,
                s = (e.canvas.height - o) / 2,
                c = t - n;
              e.drawImage(i, r, s, c, o);
            },
          },
          {
            key: "drawPointer",
            value: function (e, t, n) {
              this.pointerImage ||
                ((this.pointerImage = o.a(e.canvas.width, e.canvas.height)),
                this.drawPointerNoCache(
                  this.pointerImage.getContext("2d"),
                  t,
                  n
                )),
                e.drawImage(this.pointerImage, 0, 0);
            },
          },
          {
            key: "drawWheelShadowNoCache",
            value: function (e, t) {
              var n = e.canvas.width / 2,
                i = e.canvas.height / 2,
                a = e.createRadialGradient(n, i, t, n, i + 4, t + 8);
              a.addColorStop(0, "#bbb"),
                a.addColorStop(1, "#fff"),
                (e.fillStyle = a),
                e.fillRect(0, 0, e.canvas.width, e.canvas.height);
            },
          },
          {
            key: "drawWheelNoCache",
            value: function (e, t, n, i, a) {
              e.save(), e.translate(e.canvas.width / 2, e.canvas.height / 2);
              var o = (2 * Math.PI) / n.length,
                c = this,
                l = n.map(function (e, n) {
                  var l = i[n % i.length],
                    u = r.h(e, !0),
                    h = r.i(e),
                    m = c.getWheelImage(h);
                  return new s(o, t, a, l, u, m);
                });
              l.length > 0 &&
                ((e.font = this.getSmallestFont(e, l, t, a)),
                l.forEach(function (t) {
                  t.draw(e), e.rotate(-o);
                })),
                e.restore(),
                e.save(),
                e.translate(e.canvas.width / 2, e.canvas.height / 2),
                this.drawCenterCircle(e, a),
                e.restore();
            },
          },
          {
            key: "getSmallestFont",
            value: function (e, t, n, i) {
              var a = 200;
              return (
                t.forEach(function (r) {
                  var o = c(
                    e,
                    r.displayText,
                    t.length,
                    "Quicksand, sans-serif",
                    n,
                    i
                  );
                  o < a && (a = o);
                }),
                a + "px Quicksand, sans-serif"
              );
            },
          },
          {
            key: "drawCenterCircle",
            value: function (e, t) {
              (e.fillStyle = "white"),
                e.beginPath(),
                e.arc(0, 0, t, 0, 2 * Math.PI),
                e.fill(),
                (e.lineWidth = 2),
                (e.strokeStyle = "#333333"),
                e.stroke();
            },
          },
          {
            key: "drawPointerNoCache",
            value: function (e, t, n) {
              e.save(),
                e.translate(e.canvas.width / 2, e.canvas.height / 2),
                n &&
                  ((e.shadowColor = "#444"),
                  (e.shadowOffsetY = 4),
                  (e.shadowBlur = 10)),
                e.beginPath(),
                e.moveTo(t - 15, 0),
                e.lineTo(t + 25, -20),
                e.lineTo(t + 25, 20),
                e.lineTo(t - 15, 0),
                (e.lineWidth = 2),
                (e.strokeStyle = "#333333"),
                e.stroke(),
                (e.fillStyle = "lightgray"),
                e.fill(),
                e.restore();
            },
          },
          {
            key: "drawHub",
            value: function (e, t, n, i) {
              var a = this.imageCache.getImage(n);
              a &&
                (e.save(),
                e.translate(e.canvas.width / 2, e.canvas.height / 2),
                e.rotate(t),
                e.beginPath(),
                e.arc(0, 0, i - 1, 0, 2 * Math.PI, !0),
                e.clip(),
                e.drawImage(a, -i, -i, 2 * i, 2 * i),
                e.restore());
            },
          },
          {
            key: "getWheelImage",
            value: function (e) {
              if (e) {
                if (!this.wheelImages[e]) {
                  var t = new Image(),
                    n = this;
                  (t.onload = function () {
                    n.wheelImage = null;
                  }),
                    t.setAttribute("crossOrigin", "anonymous"),
                    (t.src = e),
                    (this.wheelImages[e] = t);
                }
                return this.wheelImages[e];
              }
            },
          },
        ]) && h(t.prototype, n),
        i && h(t, i),
        e
      );
    })();
    function f(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var d = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.array = t.slice(0));
      }
      var t, n, i;
      return (
        (t = e),
        (n = [
          {
            key: "getElement",
            value: function (e) {
              for (; e < 0; ) e += this.array.length;
              for (; e >= this.array.length; ) e -= this.array.length;
              return this.array[e];
            },
          },
          {
            key: "setElement",
            value: function (e, t) {
              for (; e < 0; ) e += this.array.length;
              for (; e >= this.array.length; ) e -= this.array.length;
              this.array[e] = t;
            },
          },
          {
            key: "getArray",
            value: function () {
              return this.array;
            },
          },
        ]) && f(t.prototype, n),
        i && f(t, i),
        e
      );
    })();
    function p(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var g = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.names = []);
      }
      var t, n, i;
      return (
        (t = e),
        (n = [
          {
            key: "setNames",
            value: function (e) {
              this.names = e;
            },
          },
          {
            key: "getNames",
            value: function () {
              return this.names;
            },
          },
          {
            key: "empty",
            value: function () {
              this.names = [];
            },
          },
          {
            key: "numberOfNames",
            value: function () {
              return this.names.length;
            },
          },
          {
            key: "pullRandomName",
            value: function () {
              var e = this.getRandomName(),
                t = this.names.indexOf(e);
              return t > -1 && this.names.splice(t, 1), e;
            },
          },
          {
            key: "addName",
            value: function (e) {
              this.names.push(e);
            },
          },
          {
            key: "getRandomName",
            value: function () {
              return this.names[Math.floor(Math.random() * this.names.length)];
            },
          },
        ]) && p(t.prototype, n),
        i && p(t, i),
        e
      );
    })();
    function v(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return w(e);
        })(e) ||
        (function (e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return w(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return w(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function w(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    function b(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var y = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.hat = new g()),
          (this.namesOnWheel = []),
          (this.allNamesFitOnWheel = !0),
          (this.filledSlices = 0);
      }
      var t, n, i;
      return (
        (t = e),
        (n = [
          {
            key: "setNames",
            value: function (e, t, n) {
              var i = this;
              n || (e = v(new Set(e))),
                e.length <= t
                  ? ((this.allNamesFitOnWheel = !0), (this.namesOnWheel = e))
                  : ((this.allNamesFitOnWheel = !1),
                    (this.filledSlices = Math.round(0.66 * t)),
                    this.hat.empty(),
                    e.forEach(function (e) {
                      i.namesOnWheel.includes(e) || i.hat.addName(e);
                    }),
                    (this.namesOnWheel = this.namesOnWheel.filter(function (t) {
                      return "" == t || e.includes(t);
                    })),
                    (this.namesOnWheel = this.adjustLength(
                      this.namesOnWheel,
                      t
                    )));
            },
          },
          {
            key: "getDisplayNames",
            value: function () {
              return this.namesOnWheel;
            },
          },
          {
            key: "getNumberOfDisplayNames",
            value: function () {
              return this.namesOnWheel.length;
            },
          },
          {
            key: "tick",
            value: function (e) {
              var t = !1;
              if (!this.allNamesFitOnWheel) {
                for (
                  var n = e + Math.ceil(this.filledSlices / 2),
                    i =
                      e +
                      this.namesOnWheel.length -
                      Math.floor(this.filledSlices / 2),
                    a = new d(this.namesOnWheel),
                    o = e;
                  o < e + this.namesOnWheel.length;
                  o++
                )
                  o < n &&
                    !a.getElement(o) &&
                    a.setElement(o, this.hat.pullRandomName()),
                    o >= n &&
                      o < i &&
                      a.getElement(o) &&
                      (this.hat.addName(a.getElement(o)), a.setElement(o, "")),
                    o > i &&
                      !a.getElement(o) &&
                      a.setElement(o, this.hat.pullRandomName());
                var s = a.getArray();
                (t = !r.a(this.namesOnWheel, s)), (this.namesOnWheel = s);
              }
              return t;
            },
          },
          {
            key: "adjustLength",
            value: function (e, t) {
              for (; e.length < t; ) e.push("");
              for (; e.length > t; ) {
                var n = e[e.length - 1];
                n && this.hat.addName(n), (e = e.slice(0, e.length - 1));
              }
              return e;
            },
          },
        ]) && b(t.prototype, n),
        i && b(t, i),
        e
      );
    })();
    function _() {
      (this.colors = []),
        (this.angle = 0),
        (this.speed = 0.005),
        (this.stopSpeed = 1e-4),
        (this.acceleration = 0.01),
        (this.deceleration = 0),
        (this.nameLastTick = ""),
        (this.state = new k()),
        (this.wheelPainter = new m()),
        (this.namePicker = new y()),
        (this.doneSpinningCallback = function () {}),
        (this.nameChangedCallback = function () {}),
        (this.setNames = function (e, t, n) {
          this.state.editAllowed() &&
            (this.namePicker.setNames(e, t, n), this.wheelPainter.refresh());
        }),
        (this.refresh = function () {
          this.wheelPainter.refresh();
        }),
        (this.configure = function (e, t, n, i, a, r, o) {
          this.state.editAllowed() &&
            ((this.colors = e),
            (this.centerImage = t),
            (this.spinTime = n),
            (this.acceleration = i ? 0.001 : 0.01),
            (this.hubSize = a),
            (this.pageBackgroundColor = r),
            (this.displayHat = o),
            this.wheelPainter.refresh());
        }),
        (this.tick = function () {
          this.state.tick(this),
            this.namePicker.tick(this.getIndexAtPointer()) &&
              this.wheelPainter.refresh();
        }),
        (this.click = function (e, t) {
          (this.nameChangedCallback = e),
            (this.doneSpinningCallback = t),
            this.state.click(this);
        }),
        (this.spinIsDone = function () {
          this.doneSpinningCallback(this.getNameAtPointer());
        }),
        (this.isSpinning = function () {
          return this.state.isSpinning();
        }),
        (this.setRandomAngle = function () {
          this.angle = 2 * Math.random() * Math.PI;
        }),
        (this.advance = function () {
          (this.indexFromLastTick = this.indexFromThisTick),
            (this.indexFromThisTick = this.getIndexAtPointer()),
            this.indexFromThisTick != this.indexFromLastTick &&
              this.nameChangedCallback(),
            (this.angle += this.speed),
            this.angle > 2 * Math.PI && (this.angle -= 2 * Math.PI);
        }),
        (this.getIndexAtPointer = function () {
          var e = this.namePicker.getNumberOfDisplayNames(),
            t = (2 * Math.PI) / e,
            n = this.angle / t;
          return (n = Math.round(n)) >= e && (n = 0), n;
        }),
        (this.getNameAtPointer = function () {
          return this.namePicker.getDisplayNames()[this.getIndexAtPointer()];
        }),
        (this.resetRotation = function () {
          this.angle = 0;
        }),
        (this.calculateDeceleration = function () {
          var e = 60 * (this.spinTime - 1),
            t = 60 * this.acceleration;
          this.deceleration = Math.exp(Math.log(this.stopSpeed / t) / e);
        }),
        (this.accelerate = function () {
          this.speed += this.acceleration;
        }),
        (this.decelerate = function () {
          this.speed = this.speed * this.deceleration;
        }),
        (this.isBelowStopSpeed = function () {
          return this.speed < this.stopSpeed;
        }),
        (this.draw = function (e) {
          this.wheelPainter.draw(
            e,
            this.angle,
            this.namePicker.getDisplayNames(),
            this.colors,
            this.centerImage,
            this.hubSize,
            this.pageBackgroundColor,
            this.displayHat
          );
        });
    }
    function k() {
      (this.tick = function (e) {
        e.advance();
      }),
        (this.click = function (e) {
          e.calculateDeceleration(), (e.state = new C());
        }),
        (this.editAllowed = function () {
          return !0;
        }),
        (this.isSpinning = function () {
          return !1;
        });
    }
    function C() {
      (this.ticks = 0),
        (this.MAX_AGE = 60),
        (this.tick = function (e) {
          e.accelerate(),
            e.advance(),
            (this.ticks += 1),
            this.ticks > this.MAX_AGE &&
              (e.setRandomAngle(), (e.state = new S()));
        }),
        (this.click = function (e) {}),
        (this.editAllowed = function () {
          return !1;
        }),
        (this.isSpinning = function () {
          return !0;
        });
    }
    function S() {
      (this.tick = function (e) {
        e.decelerate(),
          e.advance(),
          e.isBelowStopSpeed() &&
            ((e.speed = 0), (e.state = new F()), e.spinIsDone());
      }),
        (this.click = function (e) {}),
        (this.editAllowed = function () {
          return !1;
        }),
        (this.isSpinning = function () {
          return !0;
        });
    }
    function F() {
      (this.tick = function (e) {}),
        (this.click = function (e) {
          e.calculateDeceleration(), (e.state = new C());
        }),
        (this.editAllowed = function () {
          return !0;
        }),
        (this.isSpinning = function () {
          return !1;
        });
    }
    function x() {
      (this.lastFrameTimeMs = 0),
        (this.delta = 0),
        (this.timestep = 1e3 / 60),
        (this.setTimestamp = function (e) {
          0 == this.lastFrameTimeMs
            ? (this.delta = this.timestep)
            : (this.delta += e - this.lastFrameTimeMs),
            (this.lastFrameTimeMs = e);
        }),
        (this.shouldTick = function () {
          var e = this.delta >= this.timestep;
          return e && (this.delta -= this.timestep), e;
        });
    }
    var $ = n(49),
      N = n.n($),
      E =
        (n(4),
        {
          data: function () {
            return {
              myWheel: new _(),
              myTicker: new x(),
              isTouchScreen: r.o(),
            };
          },
          mounted: function () {
            (this.myWheel = new _()),
              this.tick(0),
              this.setupOverlay(),
              this.startKeyListener();
          },
          computed: {
            wheelConfig: function () {
              return this.$store.state.wheelConfig;
            },
            names: function () {
              return this.$store.state.wheelConfig.names;
            },
            preferences: function () {
              return this.$store.state.preferences;
            },
            hasEntries: function () {
              return this.$store.state.wheelConfig.names.length > 0;
            },
          },
          watch: {
            wheelConfig: function (e, t) {
              this.configureWheel();
            },
            preferences: function (e) {
              this.configureWheel();
            },
            names: function (e, t) {
              this.myWheel.setNames(
                e,
                this.wheelConfig.maxNames,
                this.wheelConfig.allowDuplicates
              );
            },
          },
          methods: {
            setupOverlay: function () {
              var e = document.getElementById("wheelCanvas").offsetWidth,
                t = "".concat(Math.round(e / 20), "px");
              if (
                ((document.getElementById(
                  "instructionsLayer"
                ).style.fontSize = t),
                !this.cantBeDisplayedInCircleType(this.$i18n.locale))
              ) {
                var n = e / 3;
                new N.a(document.getElementById("topInstruction")).radius(n),
                  document.getElementById("bottomInstruction") &&
                    new N.a(document.getElementById("bottomInstruction"))
                      .radius(n)
                      .dir(-1);
              }
            },
            cantBeDisplayedInCircleType: function (e) {
              return ["ar", "bn", "fa", "gu", "he", "hi"].includes(e);
            },
            startKeyListener: function () {
              if (!r.o()) {
                var e = this;
                document.addEventListener("keyup", function (t) {
                  "Enter" == t.key && t.ctrlKey && e.spin();
                });
              }
            },
            spin: function () {
              r.m(),
                this.myWheel.isSpinning() ||
                  (this.hasEntries &&
                    (this.trackInGoogleAnalytics(),
                    (this.$refs.instructionsLayer.style.display = "none"),
                    this.$store.commit("startWheelSpin"),
                    this.$emit("wheel-started"),
                    this.myWheel.click(
                      this.onNameChanged,
                      this.onStopWheelSpin
                    )));
            },
            onNameChanged: function () {
              this.$emit("name-changed");
            },
            onStopWheelSpin: function (e) {
              this.$store.commit("stopWheelSpin"),
                this.$emit("wheel-stopped", e);
            },
            trackInGoogleAnalytics: function () {
              var e = this.wheelConfig.getDefaultNames();
              if (r.a(this.names, e)) r.t("Wheel", "SpinWithDefaultNames", "");
              else {
                var t = this.$store.state.version;
                r.t("Wheel", "SpinWithCustomNames", t);
              }
            },
            tick: function (e) {
              for (this.myTicker.setTimestamp(e); this.myTicker.shouldTick(); )
                this.myWheel.tick();
              var t = document.getElementById("wheelCanvas").getContext("2d");
              this.myWheel.draw(t), requestAnimationFrame(this.tick);
            },
            resetRotation: function () {
              this.myWheel.resetRotation();
            },
            refresh: function () {
              this.myWheel.refresh();
            },
            configureWheel: function () {
              this.myWheel.configure(
                this.$store.state.wheelConfig.getCoalescedColors(),
                this.$store.state.wheelConfig.getWheelImage(),
                this.$store.state.wheelConfig.spinTime,
                this.$store.state.wheelConfig.slowSpin,
                this.$store.state.wheelConfig.hubSize,
                this.$store.getters.darkMode
                  ? "#000"
                  : this.$store.state.wheelConfig.pageBackgroundColor,
                this.$store.state.wheelConfig.displayHat
              );
            },
          },
        }),
      D = (n(127), n(1)),
      R = Object(D.a)(E, i, [], !1, null, "78fb99d2", null);
    R.options.__file = "static/spinningwheel.vue";
    t.a = R.exports;
  },
  72: function (e, t, n) {
    var i = {
      "./ar-EG": [74, 1],
      "./ar-EG.json": [74, 1],
      "./az-Latn-AZ": [75, 2],
      "./az-Latn-AZ.json": [75, 2],
      "./bg-BG": [76, 3],
      "./bg-BG.json": [76, 3],
      "./bn-IN": [77, 4],
      "./bn-IN.json": [77, 4],
      "./ca-ES": [78, 5],
      "./ca-ES.json": [78, 5],
      "./cs-CZ": [79, 6],
      "./cs-CZ.json": [79, 6],
      "./cy-GB": [80, 7],
      "./cy-GB.json": [80, 7],
      "./da-DK": [81, 8],
      "./da-DK.json": [81, 8],
      "./de-DE": [82, 9],
      "./de-DE.json": [82, 9],
      "./el-GR": [83, 10],
      "./el-GR.json": [83, 10],
      "./en-PI": [84, 11],
      "./en-PI.json": [84, 11],
      "./en-US": [85, 12],
      "./en-US.json": [85, 12],
      "./es-ES": [86, 13],
      "./es-ES.json": [86, 13],
      "./et-EE": [87, 14],
      "./et-EE.json": [87, 14],
      "./fa-IR": [88, 15],
      "./fa-IR.json": [88, 15],
      "./fi-FI": [89, 16],
      "./fi-FI.json": [89, 16],
      "./fil-PH": [90, 17],
      "./fil-PH.json": [90, 17],
      "./fr-FR": [91, 18],
      "./fr-FR.json": [91, 18],
      "./gl-ES": [92, 19],
      "./gl-ES.json": [92, 19],
      "./gu-IN": [93, 20],
      "./gu-IN.json": [93, 20],
      "./he-IL": [94, 21],
      "./he-IL.json": [94, 21],
      "./hi-IN": [95, 22],
      "./hi-IN.json": [95, 22],
      "./hr-HR": [96, 23],
      "./hr-HR.json": [96, 23],
      "./hu-HU": [97, 24],
      "./hu-HU.json": [97, 24],
      "./id-ID": [98, 25],
      "./id-ID.json": [98, 25],
      "./it-IT": [99, 26],
      "./it-IT.json": [99, 26],
      "./ja-JP": [100, 27],
      "./ja-JP.json": [100, 27],
      "./ka-GE": [101, 28],
      "./ka-GE.json": [101, 28],
      "./ko-KR": [102, 29],
      "./ko-KR.json": [102, 29],
      "./lt-LT": [103, 30],
      "./lt-LT.json": [103, 30],
      "./lv-LV": [104, 31],
      "./lv-LV.json": [104, 31],
      "./mn-MN": [105, 32],
      "./mn-MN.json": [105, 32],
      "./ms-MY": [106, 33],
      "./ms-MY.json": [106, 33],
      "./nb-NO": [107, 34],
      "./nb-NO.json": [107, 34],
      "./nl-NL": [108, 35],
      "./nl-NL.json": [108, 35],
      "./pl-PL": [109, 36],
      "./pl-PL.json": [109, 36],
      "./pt-PT": [110, 37],
      "./pt-PT.json": [110, 37],
      "./ro-RO": [111, 38],
      "./ro-RO.json": [111, 38],
      "./ru-RU": [112, 39],
      "./ru-RU.json": [112, 39],
      "./sl-SI": [113, 40],
      "./sl-SI.json": [113, 40],
      "./sq-AL": [114, 41],
      "./sq-AL.json": [114, 41],
      "./sr-Latn-RS": [115, 42],
      "./sr-Latn-RS.json": [115, 42],
      "./sv-SE": [116, 43],
      "./sv-SE.json": [116, 43],
      "./th-TH": [117, 44],
      "./th-TH.json": [117, 44],
      "./tr-TR": [118, 45],
      "./tr-TR.json": [118, 45],
      "./uk-UA": [119, 46],
      "./uk-UA.json": [119, 46],
      "./vi-VN": [120, 47],
      "./vi-VN.json": [120, 47],
      "./zh-CN": [121, 48],
      "./zh-CN.json": [121, 48],
      "./zh-HK": [122, 49],
      "./zh-HK.json": [122, 49],
    };
    function a(e) {
      if (!n.o(i, e))
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      var t = i[e],
        a = t[0];
      return n.e(t[1]).then(function () {
        return n.t(a, 3);
      });
    }
    (a.keys = function () {
      return Object.keys(i);
    }),
      (a.id = 72),
      (e.exports = a);
  },
});
//# sourceMappingURL=index-d713bd275417681aca0b.js.map
