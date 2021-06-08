/*! For license information please see square.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      844: (e, t, n) => {
        n.d(t, {
          Rf: () => o,
          DM: () => s,
          en: () => a,
          jH: () => c,
          Cf: () => l,
          Db: () => u,
          EG: () => d,
          l4: () => h,
          JY: () => p
        });
        var r = n(422),
          i = {};

        function o() {
          return (0, r.KV)() ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : i
        }

        function s() {
          var e = o(),
            t = e.crypto || e.msCrypto;
          if (void 0 !== t && t.getRandomValues) {
            var n = new Uint16Array(8);
            t.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
            var r = function(e) {
              for (var t = e.toString(16); t.length < 4;) t = "0" + t;
              return t
            };
            return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
          }
          return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
          }))
        }

        function a(e) {
          if (!e) return {};
          var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
          if (!t) return {};
          var n = t[6] || "",
            r = t[8] || "";
          return {
            host: t[4],
            path: t[5],
            protocol: t[2],
            relative: t[5] + n + r
          }
        }

        function c(e) {
          if (e.message) return e.message;
          if (e.exception && e.exception.values && e.exception.values[0]) {
            var t = e.exception.values[0];
            return t.type && t.value ? t.type + ": " + t.value : t.type || t.value || e.event_id || "<unknown>"
          }
          return e.event_id || "<unknown>"
        }

        function l(e) {
          var t = o();
          if (!("console" in t)) return e();
          var n = t.console,
            r = {};
          ["debug", "info", "warn", "error", "log", "assert"].forEach((function(e) {
            e in t.console && n[e].__sentry_original__ && (r[e] = n[e], n[e] = n[e].__sentry_original__)
          }));
          var i = e();
          return Object.keys(r).forEach((function(e) {
            n[e] = r[e]
          })), i
        }

        function u(e, t, n) {
          e.exception = e.exception || {}, e.exception.values = e.exception.values || [], e.exception.values[0] = e.exception.values[0] || {}, e.exception.values[0].value = e.exception.values[0].value || t || "", e.exception.values[0].type = e.exception.values[0].type || n || "Error"
        }

        function d(e, t) {
          void 0 === t && (t = {});
          try {
            e.exception.values[0].mechanism = e.exception.values[0].mechanism || {}, Object.keys(t).forEach((function(n) {
              e.exception.values[0].mechanism[n] = t[n]
            }))
          } catch (e) {}
        }

        function h() {
          try {
            return document.location.href
          } catch (e) {
            return ""
          }
        }

        function p(e, t) {
          if (!t) return 6e4;
          var n = parseInt("" + t, 10);
          if (!isNaN(n)) return 1e3 * n;
          var r = Date.parse("" + t);
          return isNaN(r) ? 6e4 : r - e
        }
      },
      422: (e, t, n) => {
        function r() {
          return "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
        }

        function i(e, t) {
          return e.require(t)
        }
        n.d(t, {
          KV: () => r,
          l$: () => i
        }), e = n.hmd(e)
      },
      170: (e, t, n) => {
        n.d(t, {
          yW: () => l
        });
        var r = n(844),
          i = n(422);
        e = n.hmd(e);
        var o, s = {
            nowSeconds: function() {
              return Date.now() / 1e3
            }
          },
          a = (0, i.KV)() ? function() {
            try {
              return (0, i.l$)(e, "perf_hooks").performance
            } catch (e) {
              return
            }
          }() : function() {
            var e = (0, r.Rf)().performance;
            if (e && e.now) return {
              now: function() {
                return e.now()
              },
              timeOrigin: Date.now() - e.now()
            }
          }(),
          c = void 0 === a ? s : {
            nowSeconds: function() {
              return (a.timeOrigin + a.now()) / 1e3
            }
          },
          l = s.nowSeconds.bind(s);
        c.nowSeconds.bind(c), (o = (0, r.Rf)().performance) && (o.timeOrigin ? o.timeOrigin : o.timing && o.timing.navigationStart || Date.now())
      }
    },
    t = {};

  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = t[r] = {
      id: r,
      loaded: !1,
      exports: {}
    };
    return e[r](o, o.exports, n), o.loaded = !0, o.exports
  }
  n.d = (e, t) => {
    for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
      enumerable: !0,
      get: t[r]
    })
  }, n.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), n.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
    enumerable: !0,
    set: () => {
      throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
    }
  }), e), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, (() => {
    var e = {};
    n.r(e), n.d(e, {
      FunctionToString: () => b,
      InboundFilters: () => ke
    });
    var t = {};
    n.r(t), n.d(t, {
      Breadcrumbs: () => xt,
      GlobalHandlers: () => Lt,
      LinkedErrors: () => Mt,
      TryCatch: () => Dt,
      UserAgent: () => kt
    });
    class r extends Error {
      constructor() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Unknown SqError",
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = e;
        t.length > 0 && (n = function(e, t) {
          return "".concat(e, "\n  ").concat([...Object.values(t).map((e => {
            switch (!0) {
              case "message" in e:
                return e.message;
              case "detail" in e:
                return e.detail;
              default:
                return "[Unspecified Error]"
            }
          }))].join("\n  "))
        }(e, t)), super(n), this.errors = t, this.name = "SqError", Object.setPrototypeOf(this, r.prototype)
      }
      fromSerializedError(e) {
        this.name = e.name, this.message = e.message, e.errors && (this.errors = e.errors)
      }
    }
    class i extends r {
      constructor() {
        super("Web Payments SDK does not support this browser"), this.name = "BrowserNotSupportedError", Object.setPrototypeOf(this, i.prototype)
      }
    }
    class o extends r {
      constructor() {
        super("Web Payments SDK can only be embedded on sites that use HTTPS"), this.name = "WebSdkEmbedError", Object.setPrototypeOf(this, o.prototype)
      }
    }
    var s = new Set(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"]),
      a = /android/i;

    function c() {
      var e = null === navigator || void 0 === navigator ? void 0 : navigator.userAgent;
      return !!e && Boolean((e.match(/Safari/) && (e.match(/iPhone/) || e.match(/iPad/)) && !e.match(/Trident/) || e.match(/AppleWebKit/) && !(e.match(/Android/) || e.match(/Linux/) || e.match(/Trident/)) && (e.match(/Mobile/) || e.match(/iPhone/) || e.match(/iPad/)) && !e.match(/Macintosh/) && !e.match(/Windows/)) && !(e.match(/Chrome/) || e.match(/CriOS/) || e.match(/Edg/)))
    }

    function l() {
      var e = null === navigator || void 0 === navigator ? void 0 : navigator.userAgent;
      return !!e && Boolean((e.match(/Safari/) || e.match(/AppleWebKit/)) && (e.match(/Macintosh/) || e.match(/Windows/)) && !e.match(/iPhone/) && !e.match(/iPad/) && !e.match(/Chrome/) && !e.match(/Edg/) && !e.match(/Firefox/))
    }
    var u, d, h, p, f, g, m, v, E, _, y = {
      get documentBody() {
        return window.document.body
      },
      get documentReferrer() {
        return window.document.referrer
      },
      isAndroid: function() {
        return a.test(window.navigator.userAgent)
      },
      isDesktopSafari: l,
      isIOS: function() {
        return s.has(window.navigator.platform) || window.navigator.userAgent.includes("Mac") && "ontouchend" in document
      },
      isMobileSafari: c,
      isSafari: function() {
        return c() || l()
      },
      isSupported: function() {
        return void 0 !== window.postMessage && void 0 !== window.fetch && void 0 !== document.createElement("a").classList
      },
      redirectTo: function(e) {
        window.location.href = e
      },
      replaceWindowState: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.title;
        window.history.replaceState(null, t, e)
      },
      submitForm: function(e) {
        e.submit()
      },
      get windowHash() {
        return window.location.hash
      },
      get windowInnerHeight() {
        return window.innerHeight
      },
      get windowInnerWidth() {
        return window.innerWidth
      },
      get windowLocation() {
        return window.location
      },
      get windowNavigationLanguage() {
        var e = window.navigator.language;
        return !e && window.navigator.languages.length > 0 && (e = window.navigator.languages[0]), e
      },
      get windowParentLocation() {
        return window.parent.location
      },
      get windowPerformance() {
        return window.performance
      }
    };

    function C(e) {
      return t = e, n = _.JAVASCRIPT, r = new Blob([t], {
        type: n
      }), URL.createObjectURL(r);
      var t, n, r
    }! function(e) {
      e.Final = "FINAL", e.Estimated = "ESTIMATED", e.Unknown = "NOT_CURRENTLY_KNOWN"
    }(u || (u = {})),
    function(e) {
      e.INITIALIZE = "INITIALIZE", e.PAYMENT_AUTHORIZATION = "PAYMENT_AUTHORIZATION", e.SHIPPING_ADDRESS = "SHIPPING_ADDRESS", e.SHIPPING_OPTION = "SHIPPING_OPTION"
    }(d || (d = {})),
    function(e) {
      e.FULL = "FULL", e.MIN = "MIN"
    }(h || (h = {})),
    function(e) {
      e.CARD = "CARD"
    }(p || (p = {})),
    function(e) {
      e.PAYMENT_GATEWAY = "PAYMENT_GATEWAY"
    }(f || (f = {})),
    function(e) {
      e.SUCCESS = "SUCCESS"
    }(g || (g = {})),
    function(e) {
      e.TEST = "TEST", e.PRODUCTION = "PRODUCTION"
    }(m || (m = {})),
    function(e) {
      e.API_ERROR = "API_ERROR", e.AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR", e.INVALID_REQUEST_ERROR = "INVALID_REQUEST_ERROR", e.RATE_LIMIT_ERROR = "RATE_LIMIT_ERROR", e.PAYMENT_METHOD_ERROR = "PAYMENT_METHOD_ERROR", e.REFUND_ERROR = "REFUND_ERROR"
    }(v || (v = {})),
    function(e) {
      e.development = "development", e.sandbox = "sandbox", e.production = "production", e.staging = "staging", e.test = "test"
    }(E || (E = {})),
    function(e) {
      e.JAVASCRIPT = "text/javascript", e.HTML = "text/html"
    }(_ || (_ = {}));
    var I = null !== "sandbox" ? "sandbox" : "development",
      A = "".length > 0 ? "-".concat("") : "",
      S = {
        get ALIPAY_PAY_ENDPOINT() {
          return "".concat(this.API_URL, "/digital-wallets/alipay/pay")
        },
        get ANALYTICS_PUBLIC_ENDPOINT() {
          switch (I) {
            case E.test:
              return C("window.Square = { Analytics: {} };");
            default:
              return "".concat(this.API_PROTOCOL, "js.").concat(this.API_PUBLIC_HOST, "/payments/data.js")
          }
        },
        get API_HOST() {
          switch (I) {
            case E.production:
              return "pci-connect.squareup.com";
            case E.sandbox:
              return "pci-connect.squareupsandbox.com";
            default:
              return "pci-connect.squareupstaging.com"
          }
        },
        get API_PROTOCOL() {
          return "https://"
        },
        get API_PUBLIC_HOST() {
          switch (I) {
            case E.production:
              return "squareup.com";
            case E.sandbox:
              return "squareupsandbox.com";
            default:
              return "squareupstaging.com"
          }
        },
        get API_URL() {
          return "".concat(this.API_PROTOCOL).concat(this.API_HOST)
        },
        get APPENDED_FILE_NAME() {
          return A
        },
        get APPLEPAY_VALIDATE_MERCHANT_ENDPOINT() {
          return "".concat(this.API_URL, "/v2/apple-pay/validate-merchant")
        },
        get ASSET_BASE_URL() {
          return function(e) {
            switch (e) {
              case E.production:
                return "https://web.squarecdn.com";
              case E.sandbox:
                return "https://sandbox.web.squarecdn.com";
              case E.development:
                return "https://localhost:1779";
              default:
                return "https://staging.web.squarecdn.com"
            }
          }(E[I])
        },
        get ASSET_URL() {
          return "local" === this.VERSION ? this.ASSET_BASE_URL : "".concat(this.ASSET_BASE_URL, "/").concat(this.VERSION)
        },
        get BANK_NONCE_ENDPOINT() {
          return "".concat(this.API_URL, "/v2/bank-nonce")
        },
        get CARD_NONCE_ENDPOINT() {
          return "".concat(this.API_URL, "/v2/card-nonce")
        },
        get CASH_APP_API() {
          switch (I) {
            case E.production:
              return "https://api.cash.app";
            default:
              return "https://api.cashstaging.app"
          }
        },
        get CASH_APP_API_CUSTOMER() {
          return "".concat(this.CASH_APP_API, "/customer")
        },
        get CASH_APP_AUTH_ENDPOINT() {
          return "".concat(this.API_URL, "/digital-wallets/cash-app/auth")
        },
        get CASH_APP_STYLES() {
          return "".concat(this.ASSET_URL, "/cash.css")
        },
        get CREATE_PLAID_LINK_SESSION_ENDPOINT() {
          return "".concat(this.API_URL, "/digital-wallets/plaid/link-session")
        },
        get ENABLE_ERROR_LOGGING() {
          return I !== E.development
        },
        get GET_PRODUCT_INFORMATION_ENDPOINT() {
          return "".concat(this.API_URL, "/v2/tokenization/product-information")
        },
        get GIFT_CARD_IFRAME() {
          return "".concat(this.ASSET_URL, "/gift-card-element-iframe").concat(A, ".html")
        },
        get GOOGLE_PAY_ENV() {
          switch (I) {
            case E.production:
              return m.PRODUCTION;
            default:
              return m.TEST
          }
        },
        get GOOGLE_PAY_GENERATE_TOKEN_ENDPOINT() {
          return "".concat(this.API_URL, "/digital-wallets/google-pay/token")
        },
        get GOOGLE_PAY_MERCHANT_ID() {
          return "05498866192997955200"
        },
        get GOOGLE_PAY_SCRIPT_URL() {
          switch (I) {
            case E.test:
              return C("window.google = {};");
            default:
              return "https://pay.google.com/gp/p/js/pay.js"
          }
        },
        get HYDRATION_ENDPOINT() {
          return "".concat(this.API_URL, "/payments/hydrate")
        },
        get IFRAME_SRC() {
          return "".concat(this.ASSET_URL, "/main-iframe").concat(A, ".html")
        },
        get MASTERPASS_CALLBACK_ENDPOINT() {
          return "".concat(this.API_URL, "/v2/masterpass/callback")
        },
        get MASTERPASS_LIBRARY_URL() {
          return "".concat(this.API_URL, "/v2/masterpass/frame")
        },
        get METRICS_URL() {
          return "".concat(this.API_URL, "/payments/mtx")
        },
        get PLAID_LINK_ENV() {
          switch (I) {
            case E.production:
              return "production";
            default:
              return "sandbox"
          }
        },
        get PLAID_LINK_SCRIPT_URL() {
          switch (I) {
            case E.test:
              return C("window.Plaid = {};");
            default:
              return "https://cdn.plaid.com/link/v2/stable/link-initialize.js"
          }
        },
        get SENTRY_DSN() {
          switch (I) {
            case E.test:
            case E.development:
              return "https://acacaeaccacacacabcaacdacdacadaca@sentry.io/000001";
            default:
              return "".concat(this.API_PROTOCOL).concat(this.SENTRY_PUBLIC_KEY, "@").concat(this.API_HOST, "/payments/error/").concat(this.SENTRY_PROJECT_ID)
          }
        },
        get SENTRY_PROJECT_ID() {
          return "3478832"
        },
        get SENTRY_PUBLIC_KEY() {
          return "565ee38bb5ff45dabc25ab6d7b8bebe3"
        },
        get SINGLE_CARD_IFRAME() {
          return "".concat(this.ASSET_URL, "/single-card-element-iframe").concat(A, ".html")
        },
        get SINGLE_CARD_WRAPPER_STYLES() {
          return "".concat(this.ASSET_URL, "/card-wrapper.css")
        },
        get VERSION() {
          return "1.1.1"
        },
        get WALLET_NONCE_ENDPOINT() {
          return "".concat(this.API_URL, "/v2/wallet-nonce")
        },
        env: I
      },
      O = function(e, t) {
        return (O = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          })(e, t)
      };

    function T(e, t) {
      function n() {
        this.constructor = e
      }
      O(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    var P, R = function() {
      return (R = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
      }).apply(this, arguments)
    };

    function w(e) {
      var t = "function" == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
      if (n) return n.call(e);
      if (e && "number" == typeof e.length) return {
        next: function() {
          return e && r >= e.length && (e = void 0), {
            value: e && e[r++],
            done: !e
          }
        }
      };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function N(e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r, i, o = n.call(e),
        s = [];
      try {
        for (;
          (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
      } catch (e) {
        i = {
          error: e
        }
      } finally {
        try {
          r && !r.done && (n = o.return) && n.call(o)
        } finally {
          if (i) throw i.error
        }
      }
      return s
    }

    function L() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(N(arguments[t]));
      return e
    }
    var b = function() {
        function e() {
          this.name = e.id
        }
        return e.prototype.setupOnce = function() {
          P = Function.prototype.toString, Function.prototype.toString = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = this.__sentry_original__ || this;
            return P.apply(n, e)
          }
        }, e.id = "FunctionToString", e
      }(),
      D = function() {
        return (D = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
        }).apply(this, arguments)
      };

    function x(e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r, i, o = n.call(e),
        s = [];
      try {
        for (;
          (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
      } catch (e) {
        i = {
          error: e
        }
      } finally {
        try {
          r && !r.done && (n = o.return) && n.call(o)
        } finally {
          if (i) throw i.error
        }
      }
      return s
    }

    function M() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(x(arguments[t]));
      return e
    }
    var U = function() {
      return (U = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
      }).apply(this, arguments)
    };

    function k(e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r, i, o = n.call(e),
        s = [];
      try {
        for (;
          (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
      } catch (e) {
        i = {
          error: e
        }
      } finally {
        try {
          r && !r.done && (n = o.return) && n.call(o)
        } finally {
          if (i) throw i.error
        }
      }
      return s
    }

    function H() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(k(arguments[t]));
      return e
    }

    function G(e) {
      switch (Object.prototype.toString.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
          return !0;
        default:
          return z(e, Error)
      }
    }

    function F(e) {
      return "[object ErrorEvent]" === Object.prototype.toString.call(e)
    }

    function B(e) {
      return "[object DOMError]" === Object.prototype.toString.call(e)
    }

    function V(e) {
      return "[object String]" === Object.prototype.toString.call(e)
    }

    function j(e) {
      return null === e || "object" != typeof e && "function" != typeof e
    }

    function q(e) {
      return "[object Object]" === Object.prototype.toString.call(e)
    }

    function Y(e) {
      return "undefined" != typeof Event && z(e, Event)
    }

    function K(e) {
      return "undefined" != typeof Element && z(e, Element)
    }

    function W(e) {
      return Boolean(e && e.then && "function" == typeof e.then)
    }

    function z(e, t) {
      try {
        return e instanceof t
      } catch (e) {
        return !1
      }
    }
    var Z, Q = n(170);
    ! function(e) {
      e.PENDING = "PENDING", e.RESOLVED = "RESOLVED", e.REJECTED = "REJECTED"
    }(Z || (Z = {}));
    var J = function() {
        function e(e) {
          var t = this;
          this._state = Z.PENDING, this._handlers = [], this._resolve = function(e) {
            t._setResult(Z.RESOLVED, e)
          }, this._reject = function(e) {
            t._setResult(Z.REJECTED, e)
          }, this._setResult = function(e, n) {
            t._state === Z.PENDING && (W(n) ? n.then(t._resolve, t._reject) : (t._state = e, t._value = n, t._executeHandlers()))
          }, this._attachHandler = function(e) {
            t._handlers = t._handlers.concat(e), t._executeHandlers()
          }, this._executeHandlers = function() {
            if (t._state !== Z.PENDING) {
              var e = t._handlers.slice();
              t._handlers = [], e.forEach((function(e) {
                e.done || (t._state === Z.RESOLVED && e.onfulfilled && e.onfulfilled(t._value), t._state === Z.REJECTED && e.onrejected && e.onrejected(t._value), e.done = !0)
              }))
            }
          };
          try {
            e(this._resolve, this._reject)
          } catch (e) {
            this._reject(e)
          }
        }
        return e.resolve = function(t) {
          return new e((function(e) {
            e(t)
          }))
        }, e.reject = function(t) {
          return new e((function(e, n) {
            n(t)
          }))
        }, e.all = function(t) {
          return new e((function(n, r) {
            if (Array.isArray(t))
              if (0 !== t.length) {
                var i = t.length,
                  o = [];
                t.forEach((function(t, s) {
                  e.resolve(t).then((function(e) {
                    o[s] = e, 0 == (i -= 1) && n(o)
                  })).then(null, r)
                }))
              } else n([]);
            else r(new TypeError("Promise.all requires an array as input."))
          }))
        }, e.prototype.then = function(t, n) {
          var r = this;
          return new e((function(e, i) {
            r._attachHandler({
              done: !1,
              onfulfilled: function(n) {
                if (t) try {
                  return void e(t(n))
                } catch (e) {
                  return void i(e)
                } else e(n)
              },
              onrejected: function(t) {
                if (n) try {
                  return void e(n(t))
                } catch (e) {
                  return void i(e)
                } else i(t)
              }
            })
          }))
        }, e.prototype.catch = function(e) {
          return this.then((function(e) {
            return e
          }), e)
        }, e.prototype.finally = function(t) {
          var n = this;
          return new e((function(e, r) {
            var i, o;
            return n.then((function(e) {
              o = !1, i = e, t && t()
            }), (function(e) {
              o = !0, i = e, t && t()
            })).then((function() {
              o ? r(i) : e(i)
            }))
          }))
        }, e.prototype.toString = function() {
          return "[object SyncPromise]"
        }, e
      }(),
      X = n(844),
      $ = function() {
        function e() {
          this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}
        }
        return e.clone = function(t) {
          var n = new e;
          return t && (n._breadcrumbs = H(t._breadcrumbs), n._tags = U({}, t._tags), n._extra = U({}, t._extra), n._contexts = U({}, t._contexts), n._user = t._user, n._level = t._level, n._span = t._span, n._session = t._session, n._transactionName = t._transactionName, n._fingerprint = t._fingerprint, n._eventProcessors = H(t._eventProcessors)), n
        }, e.prototype.addScopeListener = function(e) {
          this._scopeListeners.push(e)
        }, e.prototype.addEventProcessor = function(e) {
          return this._eventProcessors.push(e), this
        }, e.prototype.setUser = function(e) {
          return this._user = e || {}, this._session && this._session.update({
            user: e
          }), this._notifyScopeListeners(), this
        }, e.prototype.getUser = function() {
          return this._user
        }, e.prototype.setTags = function(e) {
          return this._tags = U(U({}, this._tags), e), this._notifyScopeListeners(), this
        }, e.prototype.setTag = function(e, t) {
          var n;
          return this._tags = U(U({}, this._tags), ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
        }, e.prototype.setExtras = function(e) {
          return this._extra = U(U({}, this._extra), e), this._notifyScopeListeners(), this
        }, e.prototype.setExtra = function(e, t) {
          var n;
          return this._extra = U(U({}, this._extra), ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
        }, e.prototype.setFingerprint = function(e) {
          return this._fingerprint = e, this._notifyScopeListeners(), this
        }, e.prototype.setLevel = function(e) {
          return this._level = e, this._notifyScopeListeners(), this
        }, e.prototype.setTransactionName = function(e) {
          return this._transactionName = e, this._notifyScopeListeners(), this
        }, e.prototype.setTransaction = function(e) {
          return this.setTransactionName(e)
        }, e.prototype.setContext = function(e, t) {
          var n;
          return null === t ? delete this._contexts[e] : this._contexts = U(U({}, this._contexts), ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
        }, e.prototype.setSpan = function(e) {
          return this._span = e, this._notifyScopeListeners(), this
        }, e.prototype.getSpan = function() {
          return this._span
        }, e.prototype.getTransaction = function() {
          var e, t, n, r, i = this.getSpan();
          return (null === (e = i) || void 0 === e ? void 0 : e.transaction) ? null === (t = i) || void 0 === t ? void 0 : t.transaction : (null === (r = null === (n = i) || void 0 === n ? void 0 : n.spanRecorder) || void 0 === r ? void 0 : r.spans[0]) ? i.spanRecorder.spans[0] : void 0
        }, e.prototype.setSession = function(e) {
          return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
        }, e.prototype.getSession = function() {
          return this._session
        }, e.prototype.update = function(t) {
          if (!t) return this;
          if ("function" == typeof t) {
            var n = t(this);
            return n instanceof e ? n : this
          }
          return t instanceof e ? (this._tags = U(U({}, this._tags), t._tags), this._extra = U(U({}, this._extra), t._extra), this._contexts = U(U({}, this._contexts), t._contexts), t._user && Object.keys(t._user).length && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint)) : q(t) && (t = t, this._tags = U(U({}, this._tags), t.tags), this._extra = U(U({}, this._extra), t.extra), this._contexts = U(U({}, this._contexts), t.contexts), t.user && (this._user = t.user), t.level && (this._level = t.level), t.fingerprint && (this._fingerprint = t.fingerprint)), this
        }, e.prototype.clear = function() {
          return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this
        }, e.prototype.addBreadcrumb = function(e, t) {
          var n = U({
            timestamp: (0, Q.yW)()
          }, e);
          return this._breadcrumbs = void 0 !== t && t >= 0 ? H(this._breadcrumbs, [n]).slice(-t) : H(this._breadcrumbs, [n]), this._notifyScopeListeners(), this
        }, e.prototype.clearBreadcrumbs = function() {
          return this._breadcrumbs = [], this._notifyScopeListeners(), this
        }, e.prototype.applyToEvent = function(e, t) {
          var n;
          if (this._extra && Object.keys(this._extra).length && (e.extra = U(U({}, this._extra), e.extra)), this._tags && Object.keys(this._tags).length && (e.tags = U(U({}, this._tags), e.tags)), this._user && Object.keys(this._user).length && (e.user = U(U({}, this._user), e.user)), this._contexts && Object.keys(this._contexts).length && (e.contexts = U(U({}, this._contexts), e.contexts)), this._level && (e.level = this._level), this._transactionName && (e.transaction = this._transactionName), this._span) {
            e.contexts = U({
              trace: this._span.getTraceContext()
            }, e.contexts);
            var r = null === (n = this._span.transaction) || void 0 === n ? void 0 : n.name;
            r && (e.tags = U({
              transaction: r
            }, e.tags))
          }
          return this._applyFingerprint(e), e.breadcrumbs = H(e.breadcrumbs || [], this._breadcrumbs), e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0, this._notifyEventProcessors(H(ee(), this._eventProcessors), e, t)
        }, e.prototype._notifyEventProcessors = function(e, t, n, r) {
          var i = this;
          return void 0 === r && (r = 0), new J((function(o, s) {
            var a = e[r];
            if (null === t || "function" != typeof a) o(t);
            else {
              var c = a(U({}, t), n);
              W(c) ? c.then((function(t) {
                return i._notifyEventProcessors(e, t, n, r + 1).then(o)
              })).then(null, s) : i._notifyEventProcessors(e, c, n, r + 1).then(o).then(null, s)
            }
          }))
        }, e.prototype._notifyScopeListeners = function() {
          var e = this;
          this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((function(t) {
            t(e)
          })), this._notifyingListeners = !1)
        }, e.prototype._applyFingerprint = function(e) {
          e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
        }, e
      }();

    function ee() {
      var e = (0, X.Rf)();
      return e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || [], e.__SENTRY__.globalEventProcessors
    }

    function te(e) {
      ee().push(e)
    }
    var ne = (0, X.Rf)(),
      re = "Sentry Logger ",
      ie = function() {
        function e() {
          this._enabled = !1
        }
        return e.prototype.disable = function() {
          this._enabled = !1
        }, e.prototype.enable = function() {
          this._enabled = !0
        }, e.prototype.log = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          this._enabled && (0, X.Cf)((function() {
            ne.console.log(re + "[Log]: " + e.join(" "))
          }))
        }, e.prototype.warn = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          this._enabled && (0, X.Cf)((function() {
            ne.console.warn(re + "[Warn]: " + e.join(" "))
          }))
        }, e.prototype.error = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          this._enabled && (0, X.Cf)((function() {
            ne.console.error(re + "[Error]: " + e.join(" "))
          }))
        }, e
      }();
    ne.__SENTRY__ = ne.__SENTRY__ || {};
    var oe, se = ne.__SENTRY__.logger || (ne.__SENTRY__.logger = new ie),
      ae = n(422);
    ! function(e) {
      e.Ok = "ok", e.Exited = "exited", e.Crashed = "crashed", e.Abnormal = "abnormal"
    }(oe || (oe = {}));
    var ce = function(e, t) {
        return (ce = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          })(e, t)
      },
      le = function() {
        return (le = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
        }).apply(this, arguments)
      };

    function ue(e) {
      var t = "function" == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
      if (n) return n.call(e);
      if (e && "number" == typeof e.length) return {
        next: function() {
          return e && r >= e.length && (e = void 0), {
            value: e && e[r++],
            done: !e
          }
        }
      };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function de(e) {
      try {
        for (var t = e, n = [], r = 0, i = 0, o = " > ".length, s = void 0; t && r++ < 5 && !("html" === (s = he(t)) || r > 1 && i + n.length * o + s.length >= 80);) n.push(s), i += s.length, t = t.parentNode;
        return n.reverse().join(" > ")
      } catch (e) {
        return "<unknown>"
      }
    }

    function he(e) {
      var t, n, r, i, o, s = e,
        a = [];
      if (!s || !s.tagName) return "";
      if (a.push(s.tagName.toLowerCase()), s.id && a.push("#" + s.id), (t = s.className) && V(t))
        for (n = t.split(/\s+/), o = 0; o < n.length; o++) a.push("." + n[o]);
      var c = ["type", "name", "title", "alt"];
      for (o = 0; o < c.length; o++) r = c[o], (i = s.getAttribute(r)) && a.push("[" + r + '="' + i + '"]');
      return a.join("")
    }
    var pe = function() {
        function e() {
          this._hasWeakSet = "function" == typeof WeakSet, this._inner = this._hasWeakSet ? new WeakSet : []
        }
        return e.prototype.memoize = function(e) {
          if (this._hasWeakSet) return !!this._inner.has(e) || (this._inner.add(e), !1);
          for (var t = 0; t < this._inner.length; t++)
            if (this._inner[t] === e) return !0;
          return this._inner.push(e), !1
        }, e.prototype.unmemoize = function(e) {
          if (this._hasWeakSet) this._inner.delete(e);
          else
            for (var t = 0; t < this._inner.length; t++)
              if (this._inner[t] === e) {
                this._inner.splice(t, 1);
                break
              }
        }, e
      }(),
      fe = "<anonymous>";

    function ge(e) {
      try {
        return e && "function" == typeof e && e.name || fe
      } catch (e) {
        return fe
      }
    }

    function me(e, t) {
      return void 0 === t && (t = 0), "string" != typeof e || 0 === t || e.length <= t ? e : e.substr(0, t) + "..."
    }

    function ve(e, t) {
      if (!Array.isArray(e)) return "";
      for (var n = [], r = 0; r < e.length; r++) {
        var i = e[r];
        try {
          n.push(String(i))
        } catch (e) {
          n.push("[value cannot be serialized]")
        }
      }
      return n.join(t)
    }

    function Ee(e, t) {
      return !!V(e) && (n = t, "[object RegExp]" === Object.prototype.toString.call(n) ? t.test(e) : "string" == typeof t && -1 !== e.indexOf(t));
      var n
    }

    function _e(e, t, n) {
      if (t in e) {
        var r = e[t],
          i = n(r);
        if ("function" == typeof i) try {
          i.prototype = i.prototype || {}, Object.defineProperties(i, {
            __sentry_original__: {
              enumerable: !1,
              value: r
            }
          })
        } catch (e) {}
        e[t] = i
      }
    }

    function ye(e) {
      if (G(e)) {
        var t = e,
          n = {
            message: t.message,
            name: t.name,
            stack: t.stack
          };
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n
      }
      if (Y(e)) {
        var i = e,
          o = {};
        o.type = i.type;
        try {
          o.target = K(i.target) ? de(i.target) : Object.prototype.toString.call(i.target)
        } catch (e) {
          o.target = "<unknown>"
        }
        try {
          o.currentTarget = K(i.currentTarget) ? de(i.currentTarget) : Object.prototype.toString.call(i.currentTarget)
        } catch (e) {
          o.currentTarget = "<unknown>"
        }
        for (var r in "undefined" != typeof CustomEvent && z(e, CustomEvent) && (o.detail = i.detail), i) Object.prototype.hasOwnProperty.call(i, r) && (o[r] = i);
        return o
      }
      return e
    }

    function Ce(e, t, n) {
      void 0 === t && (t = 3), void 0 === n && (n = 102400);
      var r, i = Se(e, t);
      return r = i,
        function(e) {
          return ~-encodeURI(e).split(/%..|./).length
        }(JSON.stringify(r)) > n ? Ce(e, t - 1, n) : i
    }

    function Ie(e, t) {
      return "domain" === t && e && "object" == typeof e && e._events ? "[Domain]" : "domainEmitter" === t ? "[DomainEmitter]" : void 0 !== n.g && e === n.g ? "[Global]" : "undefined" != typeof window && e === window ? "[Window]" : "undefined" != typeof document && e === document ? "[Document]" : q(r = e) && "nativeEvent" in r && "preventDefault" in r && "stopPropagation" in r ? "[SyntheticEvent]" : "number" == typeof e && e != e ? "[NaN]" : void 0 === e ? "[undefined]" : "function" == typeof e ? "[Function: " + ge(e) + "]" : "symbol" == typeof e ? "[" + String(e) + "]" : "bigint" == typeof e ? "[BigInt: " + String(e) + "]" : e;
      var r
    }

    function Ae(e, t, n, r) {
      if (void 0 === n && (n = 1 / 0), void 0 === r && (r = new pe), 0 === n) return function(e) {
        var t = Object.prototype.toString.call(e);
        if ("string" == typeof e) return e;
        if ("[object Object]" === t) return "[Object]";
        if ("[object Array]" === t) return "[Array]";
        var n = Ie(e);
        return j(n) ? n : t
      }(t);
      if (null != t && "function" == typeof t.toJSON) return t.toJSON();
      var i = Ie(t, e);
      if (j(i)) return i;
      var o = ye(t),
        s = Array.isArray(t) ? [] : {};
      if (r.memoize(t)) return "[Circular ~]";
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (s[a] = Ae(a, o[a], n - 1, r));
      return r.unmemoize(t), s
    }

    function Se(e, t) {
      try {
        return JSON.parse(JSON.stringify(e, (function(e, n) {
          return Ae(e, n, t)
        })))
      } catch (e) {
        return "**non-serializable**"
      }
    }

    function Oe(e, t) {
      void 0 === t && (t = 40);
      var n = Object.keys(ye(e));
      if (n.sort(), !n.length) return "[object has no keys]";
      if (n[0].length >= t) return me(n[0], t);
      for (var r = n.length; r > 0; r--) {
        var i = n.slice(0, r).join(", ");
        if (!(i.length > t)) return r === n.length ? i : me(i, t)
      }
      return ""
    }

    function Te(e) {
      var t, n;
      if (q(e)) {
        var r = e,
          i = {};
        try {
          for (var o = ue(Object.keys(r)), s = o.next(); !s.done; s = o.next()) {
            var a = s.value;
            void 0 !== r[a] && (i[a] = Te(r[a]))
          }
        } catch (e) {
          t = {
            error: e
          }
        } finally {
          try {
            s && !s.done && (n = o.return) && n.call(o)
          } finally {
            if (t) throw t.error
          }
        }
        return i
      }
      return Array.isArray(e) ? e.map(Te) : e
    }
    var Pe = function() {
        function e(e) {
          this.errors = 0, this.sid = (0, X.DM)(), this.timestamp = Date.now(), this.started = Date.now(), this.duration = 0, this.status = oe.Ok, e && this.update(e)
        }
        return e.prototype.update = function(e) {
          void 0 === e && (e = {}), e.user && (e.user.ip_address && (this.ipAddress = e.user.ip_address), e.did || (this.did = e.user.id || e.user.email || e.user.username)), this.timestamp = e.timestamp || Date.now(), e.sid && (this.sid = 32 === e.sid.length ? e.sid : (0, X.DM)()), e.did && (this.did = "" + e.did), "number" == typeof e.started && (this.started = e.started), "number" == typeof e.duration ? this.duration = e.duration : this.duration = this.timestamp - this.started, e.release && (this.release = e.release), e.environment && (this.environment = e.environment), e.ipAddress && (this.ipAddress = e.ipAddress), e.userAgent && (this.userAgent = e.userAgent), "number" == typeof e.errors && (this.errors = e.errors), e.status && (this.status = e.status)
        }, e.prototype.close = function(e) {
          e ? this.update({
            status: e
          }) : this.status === oe.Ok ? this.update({
            status: oe.Exited
          }) : this.update()
        }, e.prototype.toJSON = function() {
          return Te({
            sid: "" + this.sid,
            init: !0,
            started: new Date(this.started).toISOString(),
            timestamp: new Date(this.timestamp).toISOString(),
            status: this.status,
            errors: this.errors,
            did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
            duration: this.duration,
            attrs: Te({
              release: this.release,
              environment: this.environment,
              ip_address: this.ipAddress,
              user_agent: this.userAgent
            })
          })
        }, e
      }(),
      Re = function() {
        function e(e, t, n) {
          void 0 === t && (t = new $), void 0 === n && (n = 3), this._version = n, this._stack = [{}], this.getStackTop().scope = t, this.bindClient(e)
        }
        return e.prototype.isOlderThan = function(e) {
          return this._version < e
        }, e.prototype.bindClient = function(e) {
          this.getStackTop().client = e, e && e.setupIntegrations && e.setupIntegrations()
        }, e.prototype.pushScope = function() {
          var e = $.clone(this.getScope());
          return this.getStack().push({
            client: this.getClient(),
            scope: e
          }), e
        }, e.prototype.popScope = function() {
          return !(this.getStack().length <= 1 || !this.getStack().pop())
        }, e.prototype.withScope = function(e) {
          var t = this.pushScope();
          try {
            e(t)
          } finally {
            this.popScope()
          }
        }, e.prototype.getClient = function() {
          return this.getStackTop().client
        }, e.prototype.getScope = function() {
          return this.getStackTop().scope
        }, e.prototype.getStack = function() {
          return this._stack
        }, e.prototype.getStackTop = function() {
          return this._stack[this._stack.length - 1]
        }, e.prototype.captureException = function(e, t) {
          var n = this._lastEventId = (0, X.DM)(),
            r = t;
          if (!t) {
            var i = void 0;
            try {
              throw new Error("Sentry syntheticException")
            } catch (e) {
              i = e
            }
            r = {
              originalException: e,
              syntheticException: i
            }
          }
          return this._invokeClient("captureException", e, U(U({}, r), {
            event_id: n
          })), n
        }, e.prototype.captureMessage = function(e, t, n) {
          var r = this._lastEventId = (0, X.DM)(),
            i = n;
          if (!n) {
            var o = void 0;
            try {
              throw new Error(e)
            } catch (e) {
              o = e
            }
            i = {
              originalException: e,
              syntheticException: o
            }
          }
          return this._invokeClient("captureMessage", e, t, U(U({}, i), {
            event_id: r
          })), r
        }, e.prototype.captureEvent = function(e, t) {
          var n = this._lastEventId = (0, X.DM)();
          return this._invokeClient("captureEvent", e, U(U({}, t), {
            event_id: n
          })), n
        }, e.prototype.lastEventId = function() {
          return this._lastEventId
        }, e.prototype.addBreadcrumb = function(e, t) {
          var n = this.getStackTop(),
            r = n.scope,
            i = n.client;
          if (r && i) {
            var o = i.getOptions && i.getOptions() || {},
              s = o.beforeBreadcrumb,
              a = void 0 === s ? null : s,
              c = o.maxBreadcrumbs,
              l = void 0 === c ? 100 : c;
            if (!(l <= 0)) {
              var u = (0, Q.yW)(),
                d = U({
                  timestamp: u
                }, e),
                h = a ? (0, X.Cf)((function() {
                  return a(d, t)
                })) : d;
              null !== h && r.addBreadcrumb(h, Math.min(l, 100))
            }
          }
        }, e.prototype.setUser = function(e) {
          var t = this.getScope();
          t && t.setUser(e)
        }, e.prototype.setTags = function(e) {
          var t = this.getScope();
          t && t.setTags(e)
        }, e.prototype.setExtras = function(e) {
          var t = this.getScope();
          t && t.setExtras(e)
        }, e.prototype.setTag = function(e, t) {
          var n = this.getScope();
          n && n.setTag(e, t)
        }, e.prototype.setExtra = function(e, t) {
          var n = this.getScope();
          n && n.setExtra(e, t)
        }, e.prototype.setContext = function(e, t) {
          var n = this.getScope();
          n && n.setContext(e, t)
        }, e.prototype.configureScope = function(e) {
          var t = this.getStackTop(),
            n = t.scope,
            r = t.client;
          n && r && e(n)
        }, e.prototype.run = function(e) {
          var t = Ne(this);
          try {
            e(this)
          } finally {
            Ne(t)
          }
        }, e.prototype.getIntegration = function(e) {
          var t = this.getClient();
          if (!t) return null;
          try {
            return t.getIntegration(e)
          } catch (t) {
            return se.warn("Cannot retrieve integration " + e.id + " from the current Hub"), null
          }
        }, e.prototype.startSpan = function(e) {
          return this._callExtensionMethod("startSpan", e)
        }, e.prototype.startTransaction = function(e, t) {
          return this._callExtensionMethod("startTransaction", e, t)
        }, e.prototype.traceHeaders = function() {
          return this._callExtensionMethod("traceHeaders")
        }, e.prototype.startSession = function(e) {
          this.endSession();
          var t = this.getStackTop(),
            n = t.scope,
            r = t.client,
            i = r && r.getOptions() || {},
            o = i.release,
            s = i.environment,
            a = new Pe(U(U({
              release: o,
              environment: s
            }, n && {
              user: n.getUser()
            }), e));
          return n && n.setSession(a), a
        }, e.prototype.endSession = function() {
          var e = this.getStackTop(),
            t = e.scope,
            n = e.client;
          if (t) {
            var r = t.getSession && t.getSession();
            r && (r.close(), n && n.captureSession && n.captureSession(r), t.setSession())
          }
        }, e.prototype._invokeClient = function(e) {
          for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
          var i = this.getStackTop(),
            o = i.scope,
            s = i.client;
          s && s[e] && (t = s)[e].apply(t, H(n, [o]))
        }, e.prototype._callExtensionMethod = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          var r = we(),
            i = r.__SENTRY__;
          if (i && i.extensions && "function" == typeof i.extensions[e]) return i.extensions[e].apply(this, t);
          se.warn("Extension method " + e + " couldn't be found, doing nothing.")
        }, e
      }();

    function we() {
      var e = (0, X.Rf)();
      return e.__SENTRY__ = e.__SENTRY__ || {
        extensions: {},
        hub: void 0
      }, e
    }

    function Ne(e) {
      var t = we(),
        n = De(t);
      return xe(t, e), n
    }

    function Le() {
      var e = we();
      return be(e) && !De(e).isOlderThan(3) || xe(e, new Re), (0, ae.KV)() ? function(e) {
        try {
          var t = (r = we().__SENTRY__) && r.extensions && r.extensions.domain && r.extensions.domain.active;
          if (!t) return De(e);
          if (!be(t) || De(t).isOlderThan(3)) {
            var n = De(e).getStackTop();
            xe(t, new Re(n.client, $.clone(n.scope)))
          }
          return De(t)
        } catch (t) {
          return De(e)
        }
        var r
      }(e) : De(e)
    }

    function be(e) {
      return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }

    function De(e) {
      return e && e.__SENTRY__ && e.__SENTRY__.hub || (e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.hub = new Re), e.__SENTRY__.hub
    }

    function xe(e, t) {
      return !!e && (e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.hub = t, !0)
    }
    var Me, Ue = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
      ke = function() {
        function e(t) {
          void 0 === t && (t = {}), this._options = t, this.name = e.id
        }
        return e.prototype.setupOnce = function() {
          te((function(t) {
            var n = Le();
            if (!n) return t;
            var r = n.getIntegration(e);
            if (r) {
              var i = n.getClient(),
                o = i ? i.getOptions() : {},
                s = r._mergeOptions(o);
              if (r._shouldDropEvent(t, s)) return null
            }
            return t
          }))
        }, e.prototype._shouldDropEvent = function(e, t) {
          return this._isSentryError(e, t) ? (se.warn("Event dropped due to being internal Sentry Error.\nEvent: " + (0, X.jH)(e)), !0) : this._isIgnoredError(e, t) ? (se.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + (0, X.jH)(e)), !0) : this._isDeniedUrl(e, t) ? (se.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + (0, X.jH)(e) + ".\nUrl: " + this._getEventFilterUrl(e)), !0) : !this._isAllowedUrl(e, t) && (se.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + (0, X.jH)(e) + ".\nUrl: " + this._getEventFilterUrl(e)), !0)
        }, e.prototype._isSentryError = function(e, t) {
          if (!t.ignoreInternal) return !1;
          try {
            return e && e.exception && e.exception.values && e.exception.values[0] && "SentryError" === e.exception.values[0].type || !1
          } catch (e) {
            return !1
          }
        }, e.prototype._isIgnoredError = function(e, t) {
          return !(!t.ignoreErrors || !t.ignoreErrors.length) && this._getPossibleEventMessages(e).some((function(e) {
            return t.ignoreErrors.some((function(t) {
              return Ee(e, t)
            }))
          }))
        }, e.prototype._isDeniedUrl = function(e, t) {
          if (!t.denyUrls || !t.denyUrls.length) return !1;
          var n = this._getEventFilterUrl(e);
          return !!n && t.denyUrls.some((function(e) {
            return Ee(n, e)
          }))
        }, e.prototype._isAllowedUrl = function(e, t) {
          if (!t.allowUrls || !t.allowUrls.length) return !0;
          var n = this._getEventFilterUrl(e);
          return !n || t.allowUrls.some((function(e) {
            return Ee(n, e)
          }))
        }, e.prototype._mergeOptions = function(e) {
          return void 0 === e && (e = {}), {
            allowUrls: M(this._options.whitelistUrls || [], this._options.allowUrls || [], e.whitelistUrls || [], e.allowUrls || []),
            denyUrls: M(this._options.blacklistUrls || [], this._options.denyUrls || [], e.blacklistUrls || [], e.denyUrls || []),
            ignoreErrors: M(this._options.ignoreErrors || [], e.ignoreErrors || [], Ue),
            ignoreInternal: void 0 === this._options.ignoreInternal || this._options.ignoreInternal
          }
        }, e.prototype._getPossibleEventMessages = function(e) {
          if (e.message) return [e.message];
          if (e.exception) try {
            var t = e.exception.values && e.exception.values[0] || {},
              n = t.type,
              r = void 0 === n ? "" : n,
              i = t.value,
              o = void 0 === i ? "" : i;
            return ["" + o, r + ": " + o]
          } catch (t) {
            return se.error("Cannot extract message for event " + (0, X.jH)(e)), []
          }
          return []
        }, e.prototype._getEventFilterUrl = function(e) {
          try {
            if (e.stacktrace) {
              var t = e.stacktrace.frames;
              return t && t[t.length - 1].filename || null
            }
            if (e.exception) {
              var n = e.exception.values && e.exception.values[0].stacktrace && e.exception.values[0].stacktrace.frames;
              return n && n[n.length - 1].filename || null
            }
            return null
          } catch (t) {
            return se.error("Cannot extract url for event " + (0, X.jH)(e)), null
          }
        }, e.id = "InboundFilters", e
      }();

    function He() {
      if (!("fetch" in (0, X.Rf)())) return !1;
      try {
        return new Headers, new Request(""), new Response, !0
      } catch (e) {
        return !1
      }
    }

    function Ge(e) {
      return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function Fe() {
      if (!He()) return !1;
      try {
        return new Request("_", {
          referrerPolicy: "origin"
        }), !0
      } catch (e) {
        return !1
      }
    }! function(e) {
      e.Fatal = "fatal", e.Error = "error", e.Warning = "warning", e.Log = "log", e.Info = "info", e.Debug = "debug", e.Critical = "critical"
    }(Me || (Me = {})),
    function(e) {
      e.fromString = function(t) {
        switch (t) {
          case "debug":
            return e.Debug;
          case "info":
            return e.Info;
          case "warn":
          case "warning":
            return e.Warning;
          case "error":
            return e.Error;
          case "fatal":
            return e.Fatal;
          case "critical":
            return e.Critical;
          case "log":
          default:
            return e.Log
        }
      }
    }(Me || (Me = {}));
    var Be, Ve = (0, X.Rf)(),
      je = {},
      qe = {};

    function Ye(e) {
      e && "string" == typeof e.type && "function" == typeof e.callback && (je[e.type] = je[e.type] || [], je[e.type].push(e.callback), function(e) {
        if (!qe[e]) switch (qe[e] = !0, e) {
          case "console":
            "console" in Ve && ["debug", "info", "warn", "error", "log", "assert"].forEach((function(e) {
              e in Ve.console && _e(Ve.console, e, (function(t) {
                return function() {
                  for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                  Ke("console", {
                    args: n,
                    level: e
                  }), t && Function.prototype.apply.call(t, Ve.console, n)
                }
              }))
            }));
            break;
          case "dom":
            "document" in Ve && (Ve.document.addEventListener("click", Xe("click", Ke.bind(null, "dom")), !1), Ve.document.addEventListener("keypress", $e(Ke.bind(null, "dom")), !1), ["EventTarget", "Node"].forEach((function(e) {
              var t = Ve[e] && Ve[e].prototype;
              t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (_e(t, "addEventListener", (function(e) {
                return function(t, n, r) {
                  return n && n.handleEvent ? ("click" === t && _e(n, "handleEvent", (function(e) {
                    return function(t) {
                      return Xe("click", Ke.bind(null, "dom"))(t), e.call(this, t)
                    }
                  })), "keypress" === t && _e(n, "handleEvent", (function(e) {
                    return function(t) {
                      return $e(Ke.bind(null, "dom"))(t), e.call(this, t)
                    }
                  }))) : ("click" === t && Xe("click", Ke.bind(null, "dom"), !0)(this), "keypress" === t && $e(Ke.bind(null, "dom"))(this)), e.call(this, t, n, r)
                }
              })), _e(t, "removeEventListener", (function(e) {
                return function(t, n, r) {
                  try {
                    e.call(this, t, n.__sentry_wrapped__, r)
                  } catch (e) {}
                  return e.call(this, t, n, r)
                }
              })))
            })));
            break;
          case "xhr":
            ! function() {
              if ("XMLHttpRequest" in Ve) {
                var e = [],
                  t = [],
                  n = XMLHttpRequest.prototype;
                _e(n, "open", (function(n) {
                  return function() {
                    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                    var o = this,
                      s = r[1];
                    o.__sentry_xhr__ = {
                      method: V(r[0]) ? r[0].toUpperCase() : r[0],
                      url: r[1]
                    }, V(s) && "POST" === o.__sentry_xhr__.method && s.match(/sentry_key/) && (o.__sentry_own_request__ = !0);
                    var a = function() {
                      if (4 === o.readyState) {
                        try {
                          o.__sentry_xhr__ && (o.__sentry_xhr__.status_code = o.status)
                        } catch (e) {}
                        try {
                          var n = e.indexOf(o);
                          if (-1 !== n) {
                            e.splice(n);
                            var i = t.splice(n)[0];
                            o.__sentry_xhr__ && void 0 !== i[0] && (o.__sentry_xhr__.body = i[0])
                          }
                        } catch (e) {}
                        Ke("xhr", {
                          args: r,
                          endTimestamp: Date.now(),
                          startTimestamp: Date.now(),
                          xhr: o
                        })
                      }
                    };
                    return "onreadystatechange" in o && "function" == typeof o.onreadystatechange ? _e(o, "onreadystatechange", (function(e) {
                      return function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        return a(), e.apply(o, t)
                      }
                    })) : o.addEventListener("readystatechange", a), n.apply(o, r)
                  }
                })), _e(n, "send", (function(n) {
                  return function() {
                    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                    return e.push(this), t.push(r), Ke("xhr", {
                      args: r,
                      startTimestamp: Date.now(),
                      xhr: this
                    }), n.apply(this, r)
                  }
                }))
              }
            }();
            break;
          case "fetch":
            (function() {
              if (!He()) return !1;
              var e = (0, X.Rf)();
              if (Ge(e.fetch)) return !0;
              var t = !1,
                n = e.document;
              if (n && "function" == typeof n.createElement) try {
                var r = n.createElement("iframe");
                r.hidden = !0, n.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (t = Ge(r.contentWindow.fetch)), n.head.removeChild(r)
              } catch (e) {
                se.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
              }
              return t
            })() && _e(Ve, "fetch", (function(e) {
              return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var r = {
                  args: t,
                  fetchData: {
                    method: We(t),
                    url: ze(t)
                  },
                  startTimestamp: Date.now()
                };
                return Ke("fetch", le({}, r)), e.apply(Ve, t).then((function(e) {
                  return Ke("fetch", le(le({}, r), {
                    endTimestamp: Date.now(),
                    response: e
                  })), e
                }), (function(e) {
                  throw Ke("fetch", le(le({}, r), {
                    endTimestamp: Date.now(),
                    error: e
                  })), e
                }))
              }
            }));
            break;
          case "history":
            ! function() {
              if (function() {
                  var e = (0, X.Rf)(),
                    t = e.chrome,
                    n = t && t.app && t.app.runtime,
                    r = "history" in e && !!e.history.pushState && !!e.history.replaceState;
                  return !n && r
                }()) {
                var e = Ve.onpopstate;
                Ve.onpopstate = function() {
                  for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                  var r = Ve.location.href,
                    i = Be;
                  if (Be = r, Ke("history", {
                      from: i,
                      to: r
                    }), e) return e.apply(this, t)
                }, _e(Ve.history, "pushState", t), _e(Ve.history, "replaceState", t)
              }

              function t(e) {
                return function() {
                  for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                  var r = t.length > 2 ? t[2] : void 0;
                  if (r) {
                    var i = Be,
                      o = String(r);
                    Be = o, Ke("history", {
                      from: i,
                      to: o
                    })
                  }
                  return e.apply(this, t)
                }
              }
            }();
            break;
          case "error":
            et = Ve.onerror, Ve.onerror = function(e, t, n, r, i) {
              return Ke("error", {
                column: r,
                error: i,
                line: n,
                msg: e,
                url: t
              }), !!et && et.apply(this, arguments)
            };
            break;
          case "unhandledrejection":
            tt = Ve.onunhandledrejection, Ve.onunhandledrejection = function(e) {
              return Ke("unhandledrejection", e), !tt || tt.apply(this, arguments)
            };
            break;
          default:
            se.warn("unknown instrumentation type:", e)
        }
      }(e.type))
    }

    function Ke(e, t) {
      var n, r;
      if (e && je[e]) try {
        for (var i = ue(je[e] || []), o = i.next(); !o.done; o = i.next()) {
          var s = o.value;
          try {
            s(t)
          } catch (t) {
            se.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + ge(s) + "\nError: " + t)
          }
        }
      } catch (e) {
        n = {
          error: e
        }
      } finally {
        try {
          o && !o.done && (r = i.return) && r.call(i)
        } finally {
          if (n) throw n.error
        }
      }
    }

    function We(e) {
      return void 0 === e && (e = []), "Request" in Ve && z(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function ze(e) {
      return void 0 === e && (e = []), "string" == typeof e[0] ? e[0] : "Request" in Ve && z(e[0], Request) ? e[0].url : String(e[0])
    }
    var Ze, Qe, Je = 0;

    function Xe(e, t, n) {
      return void 0 === n && (n = !1),
        function(r) {
          Ze = void 0, r && Qe !== r && (Qe = r, Je && clearTimeout(Je), n ? Je = setTimeout((function() {
            t({
              event: r,
              name: e
            })
          })) : t({
            event: r,
            name: e
          }))
        }
    }

    function $e(e) {
      return function(t) {
        var n;
        try {
          n = t.target
        } catch (e) {
          return
        }
        var r = n && n.tagName;
        r && ("INPUT" === r || "TEXTAREA" === r || n.isContentEditable) && (Ze || Xe("input", e)(t), clearTimeout(Ze), Ze = setTimeout((function() {
          Ze = void 0
        }), 1e3))
      }
    }
    var et = null,
      tt = null,
      nt = "?",
      rt = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      it = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      ot = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
      st = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      at = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      ct = /Minified React error #\d+;/i;

    function lt(e) {
      var t = null,
        n = 0;
      e && ("number" == typeof e.framesToPop ? n = e.framesToPop : ct.test(e.message) && (n = 1));
      try {
        if (t = function(e) {
            if (!e || !e.stacktrace) return null;
            for (var t, n = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, r = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, i = e.stacktrace.split("\n"), o = [], s = 0; s < i.length; s += 2) {
              var a = null;
              (t = n.exec(i[s])) ? a = {
                url: t[2],
                func: t[3],
                args: [],
                line: +t[1],
                column: null
              }: (t = r.exec(i[s])) && (a = {
                url: t[6],
                func: t[3] || t[4],
                args: t[5] ? t[5].split(",") : [],
                line: +t[1],
                column: +t[2]
              }), a && (!a.func && a.line && (a.func = nt), o.push(a))
            }
            return o.length ? {
              message: dt(e),
              name: e.name,
              stack: o
            } : null
          }(e)) return ut(t, n)
      } catch (e) {}
      try {
        if (t = function(e) {
            if (!e || !e.stack) return null;
            for (var t, n, r, i = [], o = e.stack.split("\n"), s = 0; s < o.length; ++s) {
              if (n = rt.exec(o[s])) {
                var a = n[2] && 0 === n[2].indexOf("native");
                n[2] && 0 === n[2].indexOf("eval") && (t = at.exec(n[2])) && (n[2] = t[1], n[3] = t[2], n[4] = t[3]), r = {
                  url: n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2],
                  func: n[1] || nt,
                  args: a ? [n[2]] : [],
                  line: n[3] ? +n[3] : null,
                  column: n[4] ? +n[4] : null
                }
              } else if (n = ot.exec(o[s])) r = {
                url: n[2],
                func: n[1] || nt,
                args: [],
                line: +n[3],
                column: n[4] ? +n[4] : null
              };
              else {
                if (!(n = it.exec(o[s]))) continue;
                n[3] && n[3].indexOf(" > eval") > -1 && (t = st.exec(n[3])) ? (n[1] = n[1] || "eval", n[3] = t[1], n[4] = t[2], n[5] = "") : 0 !== s || n[5] || void 0 === e.columnNumber || (i[0].column = e.columnNumber + 1), r = {
                  url: n[3],
                  func: n[1] || nt,
                  args: n[2] ? n[2].split(",") : [],
                  line: n[4] ? +n[4] : null,
                  column: n[5] ? +n[5] : null
                }
              }!r.func && r.line && (r.func = nt), i.push(r)
            }
            return i.length ? {
              message: dt(e),
              name: e.name,
              stack: i
            } : null
          }(e)) return ut(t, n)
      } catch (e) {}
      return {
        message: dt(e),
        name: e && e.name,
        stack: [],
        failed: !0
      }
    }

    function ut(e, t) {
      try {
        return R(R({}, e), {
          stack: e.stack.slice(t)
        })
      } catch (t) {
        return e
      }
    }

    function dt(e) {
      var t = e && e.message;
      return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
    }

    function ht(e) {
      var t = ft(e.stack),
        n = {
          type: e.name,
          value: e.message
        };
      return t && t.length && (n.stacktrace = {
        frames: t
      }), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n
    }

    function pt(e) {
      return {
        exception: {
          values: [ht(e)]
        }
      }
    }

    function ft(e) {
      if (!e || !e.length) return [];
      var t = e,
        n = t[0].func || "",
        r = t[t.length - 1].func || "";
      return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (t = t.slice(1)), -1 !== r.indexOf("sentryWrapped") && (t = t.slice(0, -1)), t.slice(0, 50).map((function(e) {
        return {
          colno: null === e.column ? void 0 : e.column,
          filename: e.url || t[0].url,
          function: e.func || "?",
          in_app: !0,
          lineno: null === e.line ? void 0 : e.line
        }
      })).reverse()
    }

    function gt(e, t, n) {
      var r, i;
      if (void 0 === n && (n = {}), F(e) && e.error) return pt(lt(e = e.error));
      if (B(e) || (i = e, "[object DOMException]" === Object.prototype.toString.call(i))) {
        var o = e,
          s = o.name || (B(o) ? "DOMError" : "DOMException"),
          a = o.message ? s + ": " + o.message : s;
        return r = mt(a, t, n), (0, X.Db)(r, a), "code" in o && (r.tags = R(R({}, r.tags), {
          "DOMException.code": "" + o.code
        })), r
      }
      return G(e) ? r = pt(lt(e)) : q(e) || Y(e) ? (r = function(e, t, n) {
        var r = {
          exception: {
            values: [{
              type: Y(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
              value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + Oe(e)
            }]
          },
          extra: {
            __serialized__: Ce(e)
          }
        };
        if (t) {
          var i = ft(lt(t).stack);
          r.stacktrace = {
            frames: i
          }
        }
        return r
      }(e, t, n.rejection), (0, X.EG)(r, {
        synthetic: !0
      }), r) : (r = mt(e, t, n), (0, X.Db)(r, "" + e, void 0), (0, X.EG)(r, {
        synthetic: !0
      }), r)
    }

    function mt(e, t, n) {
      void 0 === n && (n = {});
      var r = {
        message: e
      };
      if (n.attachStacktrace && t) {
        var i = ft(lt(t).stack);
        r.stacktrace = {
          frames: i
        }
      }
      return r
    }

    function vt(e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r, i, o = n.call(e),
        s = [];
      try {
        for (;
          (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
      } catch (e) {
        i = {
          error: e
        }
      } finally {
        try {
          r && !r.done && (n = o.return) && n.call(o)
        } finally {
          if (i) throw i.error
        }
      }
      return s
    }

    function Et() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(vt(arguments[t]));
      return e
    }

    function _t(e) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      var r = Le();
      if (r && r[e]) return r[e].apply(r, Et(t));
      throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.")
    }

    function yt(e, t) {
      var n;
      try {
        throw new Error("Sentry syntheticException")
      } catch (e) {
        n = e
      }
      return _t("captureException", e, {
        captureContext: t,
        originalException: e,
        syntheticException: n
      })
    }

    function Ct(e) {
      _t("withScope", e)
    }
    var It = Object.setPrototypeOf || ({
          __proto__: []
        }
        instanceof Array ? function(e, t) {
          return e.__proto__ = t, e
        } : function(e, t) {
          for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
          return e
        }),
      At = function(e) {
        function t(t) {
          var n = this.constructor,
            r = e.call(this, t) || this;
          return r.message = t, r.name = n.prototype.constructor.name, It(r, n.prototype), r
        }
        return function(e, t) {
          function n() {
            this.constructor = e
          }
          ce(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }(t, e), t
      }(Error),
      St = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
      Ot = function() {
        function e(e) {
          "string" == typeof e ? this._fromString(e) : this._fromComponents(e), this._validate()
        }
        return e.prototype.toString = function(e) {
          void 0 === e && (e = !1);
          var t = this,
            n = t.host,
            r = t.path,
            i = t.pass,
            o = t.port,
            s = t.projectId;
          return t.protocol + "://" + t.user + (e && i ? ":" + i : "") + "@" + n + (o ? ":" + o : "") + "/" + (r ? r + "/" : r) + s
        }, e.prototype._fromString = function(e) {
          var t = St.exec(e);
          if (!t) throw new At("Invalid Dsn");
          var n = function(e, t) {
              var n = "function" == typeof Symbol && e[Symbol.iterator];
              if (!n) return e;
              var r, i, o = n.call(e),
                s = [];
              try {
                for (;
                  (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
              } catch (e) {
                i = {
                  error: e
                }
              } finally {
                try {
                  r && !r.done && (n = o.return) && n.call(o)
                } finally {
                  if (i) throw i.error
                }
              }
              return s
            }(t.slice(1), 6),
            r = n[0],
            i = n[1],
            o = n[2],
            s = void 0 === o ? "" : o,
            a = n[3],
            c = n[4],
            l = void 0 === c ? "" : c,
            u = "",
            d = n[5],
            h = d.split("/");
          if (h.length > 1 && (u = h.slice(0, -1).join("/"), d = h.pop()), d) {
            var p = d.match(/^\d+/);
            p && (d = p[0])
          }
          this._fromComponents({
            host: a,
            pass: s,
            path: u,
            projectId: d,
            port: l,
            protocol: r,
            user: i
          })
        }, e.prototype._fromComponents = function(e) {
          this.protocol = e.protocol, this.user = e.user, this.pass = e.pass || "", this.host = e.host, this.port = e.port || "", this.path = e.path || "", this.projectId = e.projectId
        }, e.prototype._validate = function() {
          var e = this;
          if (["protocol", "user", "host", "projectId"].forEach((function(t) {
              if (!e[t]) throw new At("Invalid Dsn: " + t + " missing")
            })), !this.projectId.match(/^\d+$/)) throw new At("Invalid Dsn: Invalid projectId " + this.projectId);
          if ("http" !== this.protocol && "https" !== this.protocol) throw new At("Invalid Dsn: Invalid protocol " + this.protocol);
          if (this.port && isNaN(parseInt(this.port, 10))) throw new At("Invalid Dsn: Invalid port " + this.port)
        }, e
      }(),
      Tt = function() {
        function e(e) {
          this.dsn = e, this._dsnObject = new Ot(e)
        }
        return e.prototype.getDsn = function() {
          return this._dsnObject
        }, e.prototype.getBaseApiEndpoint = function() {
          var e = this._dsnObject,
            t = e.protocol ? e.protocol + ":" : "",
            n = e.port ? ":" + e.port : "";
          return t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/"
        }, e.prototype.getStoreEndpoint = function() {
          return this._getIngestEndpoint("store")
        }, e.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
          return this.getStoreEndpoint() + "?" + this._encodedAuth()
        }, e.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
          return this._getEnvelopeEndpoint() + "?" + this._encodedAuth()
        }, e.prototype.getStoreEndpointPath = function() {
          var e = this._dsnObject;
          return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/"
        }, e.prototype.getRequestHeaders = function(e, t) {
          var n = this._dsnObject,
            r = ["Sentry sentry_version=7"];
          return r.push("sentry_client=" + e + "/" + t), r.push("sentry_key=" + n.user), n.pass && r.push("sentry_secret=" + n.pass), {
            "Content-Type": "application/json",
            "X-Sentry-Auth": r.join(", ")
          }
        }, e.prototype.getReportDialogEndpoint = function(e) {
          void 0 === e && (e = {});
          var t = this._dsnObject,
            n = this.getBaseApiEndpoint() + "embed/error-page/",
            r = [];
          for (var i in r.push("dsn=" + t.toString()), e)
            if ("dsn" !== i)
              if ("user" === i) {
                if (!e.user) continue;
                e.user.name && r.push("name=" + encodeURIComponent(e.user.name)), e.user.email && r.push("email=" + encodeURIComponent(e.user.email))
              } else r.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
          return r.length ? n + "?" + r.join("&") : n
        }, e.prototype._getEnvelopeEndpoint = function() {
          return this._getIngestEndpoint("envelope")
        }, e.prototype._getIngestEndpoint = function(e) {
          return "" + this.getBaseApiEndpoint() + this._dsnObject.projectId + "/" + e + "/"
        }, e.prototype._encodedAuth = function() {
          var e, t = {
            sentry_key: this._dsnObject.user,
            sentry_version: "7"
          };
          return e = t, Object.keys(e).map((function(t) {
            return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
          })).join("&")
        }, e
      }(),
      Pt = 0;

    function Rt() {
      return Pt > 0
    }

    function wt() {
      Pt += 1, setTimeout((function() {
        Pt -= 1
      }))
    }

    function Nt(e, t, n) {
      if (void 0 === t && (t = {}), "function" != typeof e) return e;
      try {
        if (e.__sentry__) return e;
        if (e.__sentry_wrapped__) return e.__sentry_wrapped__
      } catch (t) {
        return e
      }
      var r = function() {
        var r = Array.prototype.slice.call(arguments);
        try {
          n && "function" == typeof n && n.apply(this, arguments);
          var i = r.map((function(e) {
            return Nt(e, t)
          }));
          return e.handleEvent ? e.handleEvent.apply(this, i) : e.apply(this, i)
        } catch (e) {
          throw wt(), Ct((function(n) {
            n.addEventProcessor((function(e) {
              var n = R({}, e);
              return t.mechanism && ((0, X.Db)(n, void 0, void 0), (0, X.EG)(n, t.mechanism)), n.extra = R(R({}, n.extra), {
                arguments: r
              }), n
            })), yt(e)
          })), e
        }
      };
      try {
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i])
      } catch (e) {}
      e.prototype = e.prototype || {}, r.prototype = e.prototype, Object.defineProperty(e, "__sentry_wrapped__", {
        enumerable: !1,
        value: r
      }), Object.defineProperties(r, {
        __sentry__: {
          enumerable: !1,
          value: !0
        },
        __sentry_original__: {
          enumerable: !1,
          value: e
        }
      });
      try {
        Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
          get: function() {
            return e.name
          }
        })
      } catch (e) {}
      return r
    }
    var Lt = function() {
        function e(t) {
          this.name = e.id, this._onErrorHandlerInstalled = !1, this._onUnhandledRejectionHandlerInstalled = !1, this._options = R({
            onerror: !0,
            onunhandledrejection: !0
          }, t)
        }
        return e.prototype.setupOnce = function() {
          Error.stackTraceLimit = 50, this._options.onerror && (se.log("Global Handler attached: onerror"), this._installGlobalOnErrorHandler()), this._options.onunhandledrejection && (se.log("Global Handler attached: onunhandledrejection"), this._installGlobalOnUnhandledRejectionHandler())
        }, e.prototype._installGlobalOnErrorHandler = function() {
          var t = this;
          this._onErrorHandlerInstalled || (Ye({
            callback: function(n) {
              var r = n.error,
                i = Le(),
                o = i.getIntegration(e),
                s = r && !0 === r.__sentry_own_request__;
              if (o && !Rt() && !s) {
                var a = i.getClient(),
                  c = j(r) ? t._eventFromIncompleteOnError(n.msg, n.url, n.line, n.column) : t._enhanceEventWithInitialFrame(gt(r, void 0, {
                    attachStacktrace: a && a.getOptions().attachStacktrace,
                    rejection: !1
                  }), n.url, n.line, n.column);
                (0, X.EG)(c, {
                  handled: !1,
                  type: "onerror"
                }), i.captureEvent(c, {
                  originalException: r
                })
              }
            },
            type: "error"
          }), this._onErrorHandlerInstalled = !0)
        }, e.prototype._installGlobalOnUnhandledRejectionHandler = function() {
          var t = this;
          this._onUnhandledRejectionHandlerInstalled || (Ye({
            callback: function(n) {
              var r = n;
              try {
                "reason" in n ? r = n.reason : "detail" in n && "reason" in n.detail && (r = n.detail.reason)
              } catch (e) {}
              var i = Le(),
                o = i.getIntegration(e),
                s = r && !0 === r.__sentry_own_request__;
              if (!o || Rt() || s) return !0;
              var a = i.getClient(),
                c = j(r) ? t._eventFromRejectionWithPrimitive(r) : gt(r, void 0, {
                  attachStacktrace: a && a.getOptions().attachStacktrace,
                  rejection: !0
                });
              c.level = Me.Error, (0, X.EG)(c, {
                handled: !1,
                type: "onunhandledrejection"
              }), i.captureEvent(c, {
                originalException: r
              })
            },
            type: "unhandledrejection"
          }), this._onUnhandledRejectionHandlerInstalled = !0)
        }, e.prototype._eventFromIncompleteOnError = function(e, t, n, r) {
          var i, o = F(e) ? e.message : e;
          if (V(o)) {
            var s = o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
            s && (i = s[1], o = s[2])
          }
          var a = {
            exception: {
              values: [{
                type: i || "Error",
                value: o
              }]
            }
          };
          return this._enhanceEventWithInitialFrame(a, t, n, r)
        }, e.prototype._eventFromRejectionWithPrimitive = function(e) {
          return {
            exception: {
              values: [{
                type: "UnhandledRejection",
                value: "Non-Error promise rejection captured with value: " + String(e)
              }]
            }
          }
        }, e.prototype._enhanceEventWithInitialFrame = function(e, t, n, r) {
          e.exception = e.exception || {}, e.exception.values = e.exception.values || [], e.exception.values[0] = e.exception.values[0] || {}, e.exception.values[0].stacktrace = e.exception.values[0].stacktrace || {}, e.exception.values[0].stacktrace.frames = e.exception.values[0].stacktrace.frames || [];
          var i = isNaN(parseInt(r, 10)) ? void 0 : r,
            o = isNaN(parseInt(n, 10)) ? void 0 : n,
            s = V(t) && t.length > 0 ? t : (0, X.l4)();
          return 0 === e.exception.values[0].stacktrace.frames.length && e.exception.values[0].stacktrace.frames.push({
            colno: i,
            filename: s,
            function: "?",
            in_app: !0,
            lineno: o
          }), e
        }, e.id = "GlobalHandlers", e
      }(),
      bt = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
      Dt = function() {
        function e(t) {
          this.name = e.id, this._options = R({
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0
          }, t)
        }
        return e.prototype.setupOnce = function() {
          var e = (0, X.Rf)();
          this._options.setTimeout && _e(e, "setTimeout", this._wrapTimeFunction.bind(this)), this._options.setInterval && _e(e, "setInterval", this._wrapTimeFunction.bind(this)), this._options.requestAnimationFrame && _e(e, "requestAnimationFrame", this._wrapRAF.bind(this)), this._options.XMLHttpRequest && "XMLHttpRequest" in e && _e(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)), this._options.eventTarget && (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : bt).forEach(this._wrapEventTarget.bind(this))
        }, e.prototype._wrapTimeFunction = function(e) {
          return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            var r = t[0];
            return t[0] = Nt(r, {
              mechanism: {
                data: {
                  function: ge(e)
                },
                handled: !0,
                type: "instrument"
              }
            }), e.apply(this, t)
          }
        }, e.prototype._wrapRAF = function(e) {
          return function(t) {
            return e.call(this, Nt(t, {
              mechanism: {
                data: {
                  function: "requestAnimationFrame",
                  handler: ge(e)
                },
                handled: !0,
                type: "instrument"
              }
            }))
          }
        }, e.prototype._wrapEventTarget = function(e) {
          var t = (0, X.Rf)(),
            n = t[e] && t[e].prototype;
          n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (_e(n, "addEventListener", (function(t) {
            return function(n, r, i) {
              try {
                "function" == typeof r.handleEvent && (r.handleEvent = Nt(r.handleEvent.bind(r), {
                  mechanism: {
                    data: {
                      function: "handleEvent",
                      handler: ge(r),
                      target: e
                    },
                    handled: !0,
                    type: "instrument"
                  }
                }))
              } catch (e) {}
              return t.call(this, n, Nt(r, {
                mechanism: {
                  data: {
                    function: "addEventListener",
                    handler: ge(r),
                    target: e
                  },
                  handled: !0,
                  type: "instrument"
                }
              }), i)
            }
          })), _e(n, "removeEventListener", (function(e) {
            return function(t, n, r) {
              var i, o = n;
              try {
                var s = null === (i = o) || void 0 === i ? void 0 : i.__sentry_wrapped__;
                s && e.call(this, t, s, r)
              } catch (e) {}
              return e.call(this, t, o, r)
            }
          })))
        }, e.prototype._wrapXHR = function(e) {
          return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            var r = this,
              i = ["onload", "onerror", "onprogress", "onreadystatechange"];
            return i.forEach((function(e) {
              e in r && "function" == typeof r[e] && _e(r, e, (function(t) {
                var n = {
                  mechanism: {
                    data: {
                      function: e,
                      handler: ge(t)
                    },
                    handled: !0,
                    type: "instrument"
                  }
                };
                return t.__sentry_original__ && (n.mechanism.data.handler = ge(t.__sentry_original__)), Nt(t, n)
              }))
            })), e.apply(this, t)
          }
        }, e.id = "TryCatch", e
      }(),
      xt = function() {
        function e(t) {
          this.name = e.id, this._options = R({
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0
          }, t)
        }
        return e.prototype.addSentryBreadcrumb = function(e) {
          this._options.sentry && Le().addBreadcrumb({
            category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
            event_id: e.event_id,
            level: e.level,
            message: (0, X.jH)(e)
          }, {
            event: e
          })
        }, e.prototype.setupOnce = function() {
          var e = this;
          this._options.console && Ye({
            callback: function() {
              for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              e._consoleBreadcrumb.apply(e, L(t))
            },
            type: "console"
          }), this._options.dom && Ye({
            callback: function() {
              for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              e._domBreadcrumb.apply(e, L(t))
            },
            type: "dom"
          }), this._options.xhr && Ye({
            callback: function() {
              for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              e._xhrBreadcrumb.apply(e, L(t))
            },
            type: "xhr"
          }), this._options.fetch && Ye({
            callback: function() {
              for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              e._fetchBreadcrumb.apply(e, L(t))
            },
            type: "fetch"
          }), this._options.history && Ye({
            callback: function() {
              for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              e._historyBreadcrumb.apply(e, L(t))
            },
            type: "history"
          })
        }, e.prototype._consoleBreadcrumb = function(e) {
          var t = {
            category: "console",
            data: {
              arguments: e.args,
              logger: "console"
            },
            level: Me.fromString(e.level),
            message: ve(e.args, " ")
          };
          if ("assert" === e.level) {
            if (!1 !== e.args[0]) return;
            t.message = "Assertion failed: " + (ve(e.args.slice(1), " ") || "console.assert"), t.data.arguments = e.args.slice(1)
          }
          Le().addBreadcrumb(t, {
            input: e.args,
            level: e.level
          })
        }, e.prototype._domBreadcrumb = function(e) {
          var t;
          try {
            t = e.event.target ? de(e.event.target) : de(e.event)
          } catch (e) {
            t = "<unknown>"
          }
          0 !== t.length && Le().addBreadcrumb({
            category: "ui." + e.name,
            message: t
          }, {
            event: e.event,
            name: e.name
          })
        }, e.prototype._xhrBreadcrumb = function(e) {
          if (e.endTimestamp) {
            if (e.xhr.__sentry_own_request__) return;
            var t = e.xhr.__sentry_xhr__ || {},
              n = t.method,
              r = t.url,
              i = t.status_code,
              o = t.body;
            Le().addBreadcrumb({
              category: "xhr",
              data: {
                method: n,
                url: r,
                status_code: i
              },
              type: "http"
            }, {
              xhr: e.xhr,
              input: o
            })
          }
        }, e.prototype._fetchBreadcrumb = function(e) {
          e.endTimestamp && (e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method || (e.error ? Le().addBreadcrumb({
            category: "fetch",
            data: e.fetchData,
            level: Me.Error,
            type: "http"
          }, {
            data: e.error,
            input: e.args
          }) : Le().addBreadcrumb({
            category: "fetch",
            data: R(R({}, e.fetchData), {
              status_code: e.response.status
            }),
            type: "http"
          }, {
            input: e.args,
            response: e.response
          })))
        }, e.prototype._historyBreadcrumb = function(e) {
          var t = (0, X.Rf)(),
            n = e.from,
            r = e.to,
            i = (0, X.en)(t.location.href),
            o = (0, X.en)(n),
            s = (0, X.en)(r);
          o.path || (o = i), i.protocol === s.protocol && i.host === s.host && (r = s.relative), i.protocol === o.protocol && i.host === o.host && (n = o.relative), Le().addBreadcrumb({
            category: "navigation",
            data: {
              from: n,
              to: r
            }
          })
        }, e.id = "Breadcrumbs", e
      }(),
      Mt = function() {
        function e(t) {
          void 0 === t && (t = {}), this.name = e.id, this._key = t.key || "cause", this._limit = t.limit || 5
        }
        return e.prototype.setupOnce = function() {
          te((function(t, n) {
            var r = Le().getIntegration(e);
            return r ? r._handler(t, n) : t
          }))
        }, e.prototype._handler = function(e, t) {
          if (!(e.exception && e.exception.values && t && z(t.originalException, Error))) return e;
          var n = this._walkErrorTree(t.originalException, this._key);
          return e.exception.values = L(n, e.exception.values), e
        }, e.prototype._walkErrorTree = function(e, t, n) {
          if (void 0 === n && (n = []), !z(e[t], Error) || n.length + 1 >= this._limit) return n;
          var r = ht(lt(e[t]));
          return this._walkErrorTree(e[t], t, L([r], n))
        }, e.id = "LinkedErrors", e
      }(),
      Ut = (0, X.Rf)(),
      kt = function() {
        function e() {
          this.name = e.id
        }
        return e.prototype.setupOnce = function() {
          te((function(t) {
            var n, r, i;
            if (Le().getIntegration(e)) {
              if (!Ut.navigator && !Ut.location && !Ut.document) return t;
              var o = (null === (n = t.request) || void 0 === n ? void 0 : n.url) || (null === (r = Ut.location) || void 0 === r ? void 0 : r.href),
                s = (Ut.document || {}).referrer,
                a = (Ut.navigator || {}).userAgent,
                c = R(R(R({}, null === (i = t.request) || void 0 === i ? void 0 : i.headers), s && {
                  Referer: s
                }), a && {
                  "User-Agent": a
                }),
                l = R(R({}, o && {
                  url: o
                }), {
                  headers: c
                });
              return R(R({}, t), {
                request: l
              })
            }
            return t
          }))
        }, e.id = "UserAgent", e
      }(),
      Ht = {},
      Gt = (0, X.Rf)();
    Gt.Sentry && Gt.Sentry.Integrations && (Ht = Gt.Sentry.Integrations);
    var Ft = R(R(R({}, Ht), e), t),
      Bt = [];
    var Vt, jt = function() {
      function e(e, t) {
        this._integrations = {}, this._processing = 0, this._backend = new e(t), this._options = t, t.dsn && (this._dsn = new Ot(t.dsn))
      }
      return e.prototype.captureException = function(e, t, n) {
        var r = this,
          i = t && t.event_id;
        return this._process(this._getBackend().eventFromException(e, t).then((function(e) {
          return r._captureEvent(e, t, n)
        })).then((function(e) {
          i = e
        }))), i
      }, e.prototype.captureMessage = function(e, t, n, r) {
        var i = this,
          o = n && n.event_id,
          s = j(e) ? this._getBackend().eventFromMessage(String(e), t, n) : this._getBackend().eventFromException(e, n);
        return this._process(s.then((function(e) {
          return i._captureEvent(e, n, r)
        })).then((function(e) {
          o = e
        }))), o
      }, e.prototype.captureEvent = function(e, t, n) {
        var r = t && t.event_id;
        return this._process(this._captureEvent(e, t, n).then((function(e) {
          r = e
        }))), r
      }, e.prototype.captureSession = function(e) {
        e.release ? this._sendSession(e) : se.warn("Discarded session because of missing release")
      }, e.prototype.getDsn = function() {
        return this._dsn
      }, e.prototype.getOptions = function() {
        return this._options
      }, e.prototype.flush = function(e) {
        var t = this;
        return this._isClientProcessing(e).then((function(n) {
          return t._getBackend().getTransport().close(e).then((function(e) {
            return n && e
          }))
        }))
      }, e.prototype.close = function(e) {
        var t = this;
        return this.flush(e).then((function(e) {
          return t.getOptions().enabled = !1, e
        }))
      }, e.prototype.setupIntegrations = function() {
        var e, t;
        this._isEnabled() && (this._integrations = (e = this._options, t = {}, function(e) {
          var t = e.defaultIntegrations && M(e.defaultIntegrations) || [],
            n = e.integrations,
            r = [];
          if (Array.isArray(n)) {
            var i = n.map((function(e) {
                return e.name
              })),
              o = [];
            t.forEach((function(e) {
              -1 === i.indexOf(e.name) && -1 === o.indexOf(e.name) && (r.push(e), o.push(e.name))
            })), n.forEach((function(e) {
              -1 === o.indexOf(e.name) && (r.push(e), o.push(e.name))
            }))
          } else "function" == typeof n ? (r = n(t), r = Array.isArray(r) ? r : [r]) : r = M(t);
          var s = r.map((function(e) {
              return e.name
            })),
            a = "Debug";
          return -1 !== s.indexOf(a) && r.push.apply(r, M(r.splice(s.indexOf(a), 1))), r
        }(e).forEach((function(e) {
          t[e.name] = e,
            function(e) {
              -1 === Bt.indexOf(e.name) && (e.setupOnce(te, Le), Bt.push(e.name), se.log("Integration installed: " + e.name))
            }(e)
        })), t))
      }, e.prototype.getIntegration = function(e) {
        try {
          return this._integrations[e.id] || null
        } catch (t) {
          return se.warn("Cannot retrieve integration " + e.id + " from the current Client"), null
        }
      }, e.prototype._updateSessionFromEvent = function(e, t) {
        var n, r, i, o = !1,
          s = !1,
          a = t.exception && t.exception.values;
        if (a) {
          s = !0;
          try {
            for (var c = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                  n = t && e[t],
                  r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                  next: function() {
                    return e && r >= e.length && (e = void 0), {
                      value: e && e[r++],
                      done: !e
                    }
                  }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(a), l = c.next(); !l.done; l = c.next()) {
              var u = l.value.mechanism;
              if (u && !1 === u.handled) {
                o = !0;
                break
              }
            }
          } catch (e) {
            n = {
              error: e
            }
          } finally {
            try {
              l && !l.done && (r = c.return) && r.call(c)
            } finally {
              if (n) throw n.error
            }
          }
        }
        var d = t.user;
        if (!e.userAgent) {
          var h = t.request ? t.request.headers : {};
          for (var p in h)
            if ("user-agent" === p.toLowerCase()) {
              i = h[p];
              break
            }
        }
        e.update(D(D({}, o && {
          status: oe.Crashed
        }), {
          user: d,
          userAgent: i,
          errors: e.errors + Number(s || o)
        }))
      }, e.prototype._sendSession = function(e) {
        this._getBackend().sendSession(e)
      }, e.prototype._isClientProcessing = function(e) {
        var t = this;
        return new J((function(n) {
          var r = 0,
            i = setInterval((function() {
              0 == t._processing ? (clearInterval(i), n(!0)) : (r += 1, e && r >= e && (clearInterval(i), n(!1)))
            }), 1)
        }))
      }, e.prototype._getBackend = function() {
        return this._backend
      }, e.prototype._isEnabled = function() {
        return !1 !== this.getOptions().enabled && void 0 !== this._dsn
      }, e.prototype._prepareEvent = function(e, t, n) {
        var r = this,
          i = this.getOptions().normalizeDepth,
          o = void 0 === i ? 3 : i,
          s = D(D({}, e), {
            event_id: e.event_id || (n && n.event_id ? n.event_id : (0, X.DM)()),
            timestamp: e.timestamp || (0, Q.yW)()
          });
        this._applyClientOptions(s), this._applyIntegrationsMetadata(s);
        var a = t;
        n && n.captureContext && (a = $.clone(a).update(n.captureContext));
        var c = J.resolve(s);
        return a && (c = a.applyToEvent(s, n)), c.then((function(e) {
          return "number" == typeof o && o > 0 ? r._normalizeEvent(e, o) : e
        }))
      }, e.prototype._normalizeEvent = function(e, t) {
        if (!e) return null;
        var n = D(D(D(D(D({}, e), e.breadcrumbs && {
          breadcrumbs: e.breadcrumbs.map((function(e) {
            return D(D({}, e), e.data && {
              data: Se(e.data, t)
            })
          }))
        }), e.user && {
          user: Se(e.user, t)
        }), e.contexts && {
          contexts: Se(e.contexts, t)
        }), e.extra && {
          extra: Se(e.extra, t)
        });
        return e.contexts && e.contexts.trace && (n.contexts.trace = e.contexts.trace), n
      }, e.prototype._applyClientOptions = function(e) {
        var t = this.getOptions(),
          n = t.environment,
          r = t.release,
          i = t.dist,
          o = t.maxValueLength,
          s = void 0 === o ? 250 : o;
        "environment" in e || (e.environment = "environment" in t ? n : "production"), void 0 === e.release && void 0 !== r && (e.release = r), void 0 === e.dist && void 0 !== i && (e.dist = i), e.message && (e.message = me(e.message, s));
        var a = e.exception && e.exception.values && e.exception.values[0];
        a && a.value && (a.value = me(a.value, s));
        var c = e.request;
        c && c.url && (c.url = me(c.url, s))
      }, e.prototype._applyIntegrationsMetadata = function(e) {
        var t = e.sdk,
          n = Object.keys(this._integrations);
        t && n.length > 0 && (t.integrations = n)
      }, e.prototype._sendEvent = function(e) {
        this._getBackend().sendEvent(e)
      }, e.prototype._captureEvent = function(e, t, n) {
        return this._processEvent(e, t, n).then((function(e) {
          return e.event_id
        }), (function(e) {
          se.error(e)
        }))
      }, e.prototype._processEvent = function(e, t, n) {
        var r = this,
          i = this.getOptions(),
          o = i.beforeSend,
          s = i.sampleRate;
        if (!this._isEnabled()) return J.reject(new At("SDK not enabled, will not send event."));
        var a = "transaction" === e.type;
        return !a && "number" == typeof s && Math.random() > s ? J.reject(new At("Discarding event because it's not included in the random sample (sampling rate = " + s + ")")) : this._prepareEvent(e, n, t).then((function(e) {
          if (null === e) throw new At("An event processor returned null, will not send event.");
          if (t && t.data && !0 === t.data.__sentry__ || a || !o) return e;
          var n = o(e, t);
          if (void 0 === n) throw new At("`beforeSend` method has to return `null` or a valid event.");
          return W(n) ? n.then((function(e) {
            return e
          }), (function(e) {
            throw new At("beforeSend rejected with " + e)
          })) : n
        })).then((function(e) {
          if (null === e) throw new At("`beforeSend` returned `null`, will not send event.");
          var t = n && n.getSession && n.getSession();
          return !a && t && r._updateSessionFromEvent(t, e), r._sendEvent(e), e
        })).then(null, (function(e) {
          if (e instanceof At) throw e;
          throw r.captureException(e, {
            data: {
              __sentry__: !0
            },
            originalException: e
          }), new At("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + e)
        }))
      }, e.prototype._process = function(e) {
        var t = this;
        this._processing += 1, e.then((function(e) {
          return t._processing -= 1, e
        }), (function(e) {
          return t._processing -= 1, e
        }))
      }, e
    }();
    ! function(e) {
      e.Unknown = "unknown", e.Skipped = "skipped", e.Success = "success", e.RateLimit = "rate_limit", e.Invalid = "invalid", e.Failed = "failed"
    }(Vt || (Vt = {})),
    function(e) {
      e.fromHttpCode = function(t) {
        return t >= 200 && t < 300 ? e.Success : 429 === t ? e.RateLimit : t >= 400 && t < 500 ? e.Invalid : t >= 500 ? e.Failed : e.Unknown
      }
    }(Vt || (Vt = {}));
    var qt = function() {
        function e() {}
        return e.prototype.sendEvent = function(e) {
          return J.resolve({
            reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
            status: Vt.Skipped
          })
        }, e.prototype.close = function(e) {
          return J.resolve(!0)
        }, e
      }(),
      Yt = function() {
        function e(e) {
          this._options = e, this._options.dsn || se.warn("No DSN provided, backend will not do anything."), this._transport = this._setupTransport()
        }
        return e.prototype.eventFromException = function(e, t) {
          throw new At("Backend has to implement `eventFromException` method")
        }, e.prototype.eventFromMessage = function(e, t, n) {
          throw new At("Backend has to implement `eventFromMessage` method")
        }, e.prototype.sendEvent = function(e) {
          this._transport.sendEvent(e).then(null, (function(e) {
            se.error("Error while sending event: " + e)
          }))
        }, e.prototype.sendSession = function(e) {
          this._transport.sendSession ? this._transport.sendSession(e).then(null, (function(e) {
            se.error("Error while sending session: " + e)
          })) : se.warn("Dropping session because custom transport doesn't implement sendSession")
        }, e.prototype.getTransport = function() {
          return this._transport
        }, e.prototype._setupTransport = function() {
          return new qt
        }, e
      }();

    function Kt(e, t) {
      return {
        body: JSON.stringify({
          sent_at: (new Date).toISOString()
        }) + "\n" + JSON.stringify({
          type: "session"
        }) + "\n" + JSON.stringify(e),
        type: "session",
        url: t.getEnvelopeEndpointWithUrlEncodedAuth()
      }
    }

    function Wt(e, t) {
      var n = e.tags || {},
        r = n.__sentry_samplingMethod,
        i = n.__sentry_sampleRate,
        o = function(e, t) {
          var n = {};
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
          }
          return n
        }(n, ["__sentry_samplingMethod", "__sentry_sampleRate"]);
      e.tags = o;
      var s = "transaction" === e.type,
        a = {
          body: JSON.stringify(e),
          type: e.type || "event",
          url: s ? t.getEnvelopeEndpointWithUrlEncodedAuth() : t.getStoreEndpointWithUrlEncodedAuth()
        };
      if (s) {
        var c = JSON.stringify({
          event_id: e.event_id,
          sent_at: (new Date).toISOString()
        }) + "\n" + JSON.stringify({
          type: e.type,
          sample_rates: [{
            id: r,
            rate: i
          }]
        }) + "\n" + a.body;
        a.body = c
      }
      return a
    }
    var zt = function() {
        function e(e) {
          this._limit = e, this._buffer = []
        }
        return e.prototype.isReady = function() {
          return void 0 === this._limit || this.length() < this._limit
        }, e.prototype.add = function(e) {
          var t = this;
          return this.isReady() ? (-1 === this._buffer.indexOf(e) && this._buffer.push(e), e.then((function() {
            return t.remove(e)
          })).then(null, (function() {
            return t.remove(e).then(null, (function() {}))
          })), e) : J.reject(new At("Not adding Promise due to buffer limit reached."))
        }, e.prototype.remove = function(e) {
          return this._buffer.splice(this._buffer.indexOf(e), 1)[0]
        }, e.prototype.length = function() {
          return this._buffer.length
        }, e.prototype.drain = function(e) {
          var t = this;
          return new J((function(n) {
            var r = setTimeout((function() {
              e && e > 0 && n(!1)
            }), e);
            J.all(t._buffer).then((function() {
              clearTimeout(r), n(!0)
            })).then(null, (function() {
              n(!0)
            }))
          }))
        }, e
      }(),
      Zt = function() {
        function e(e) {
          this.options = e, this._buffer = new zt(30), this._rateLimits = {}, this._api = new Tt(this.options.dsn), this.url = this._api.getStoreEndpointWithUrlEncodedAuth()
        }
        return e.prototype.sendEvent = function(e) {
          throw new At("Transport Class has to implement `sendEvent` method")
        }, e.prototype.close = function(e) {
          return this._buffer.drain(e)
        }, e.prototype._handleResponse = function(e) {
          var t = e.requestType,
            n = e.response,
            r = e.headers,
            i = e.resolve,
            o = e.reject,
            s = Vt.fromHttpCode(n.status);
          this._handleRateLimit(r) && se.warn("Too many requests, backing off until: " + this._disabledUntil(t)), s !== Vt.Success ? o(n) : i({
            status: s
          })
        }, e.prototype._disabledUntil = function(e) {
          return this._rateLimits[e] || this._rateLimits.all
        }, e.prototype._isRateLimited = function(e) {
          return this._disabledUntil(e) > new Date(Date.now())
        }, e.prototype._handleRateLimit = function(e) {
          var t, n, r, i, o = Date.now(),
            s = e["x-sentry-rate-limits"],
            a = e["retry-after"];
          if (s) {
            try {
              for (var c = w(s.trim().split(",")), l = c.next(); !l.done; l = c.next()) {
                var u = l.value.split(":", 2),
                  d = parseInt(u[0], 10),
                  h = 1e3 * (isNaN(d) ? 60 : d);
                try {
                  for (var p = (r = void 0, w(u[1].split(";"))), f = p.next(); !f.done; f = p.next()) {
                    var g = f.value;
                    this._rateLimits[g || "all"] = new Date(o + h)
                  }
                } catch (e) {
                  r = {
                    error: e
                  }
                } finally {
                  try {
                    f && !f.done && (i = p.return) && i.call(p)
                  } finally {
                    if (r) throw r.error
                  }
                }
              }
            } catch (e) {
              t = {
                error: e
              }
            } finally {
              try {
                l && !l.done && (n = c.return) && n.call(c)
              } finally {
                if (t) throw t.error
              }
            }
            return !0
          }
          return !!a && (this._rateLimits.all = new Date(o + (0, X.JY)(o, a)), !0)
        }, e
      }(),
      Qt = (0, X.Rf)(),
      Jt = function(e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return T(t, e), t.prototype.sendEvent = function(e) {
          return this._sendRequest(Wt(e, this._api), e)
        }, t.prototype.sendSession = function(e) {
          return this._sendRequest(Kt(e, this._api), e)
        }, t.prototype._sendRequest = function(e, t) {
          var n = this;
          if (this._isRateLimited(e.type)) return Promise.reject({
            event: t,
            type: e.type,
            reason: "Transport locked till " + this._disabledUntil(e.type) + " due to too many requests.",
            status: 429
          });
          var r = {
            body: e.body,
            method: "POST",
            referrerPolicy: Fe() ? "origin" : ""
          };
          return void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters), void 0 !== this.options.headers && (r.headers = this.options.headers), this._buffer.add(new J((function(t, i) {
            Qt.fetch(e.url, r).then((function(r) {
              var o = {
                "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
                "retry-after": r.headers.get("Retry-After")
              };
              n._handleResponse({
                requestType: e.type,
                response: r,
                headers: o,
                resolve: t,
                reject: i
              })
            })).catch(i)
          })))
        }, t
      }(Zt),
      Xt = function(e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return T(t, e), t.prototype.sendEvent = function(e) {
          return this._sendRequest(Wt(e, this._api), e)
        }, t.prototype.sendSession = function(e) {
          return this._sendRequest(Kt(e, this._api), e)
        }, t.prototype._sendRequest = function(e, t) {
          var n = this;
          return this._isRateLimited(e.type) ? Promise.reject({
            event: t,
            type: e.type,
            reason: "Transport locked till " + this._disabledUntil(e.type) + " due to too many requests.",
            status: 429
          }) : this._buffer.add(new J((function(t, r) {
            var i = new XMLHttpRequest;
            for (var o in i.onreadystatechange = function() {
                if (4 === i.readyState) {
                  var o = {
                    "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                    "retry-after": i.getResponseHeader("Retry-After")
                  };
                  n._handleResponse({
                    requestType: e.type,
                    response: i,
                    headers: o,
                    resolve: t,
                    reject: r
                  })
                }
              }, i.open("POST", e.url), n.options.headers) n.options.headers.hasOwnProperty(o) && i.setRequestHeader(o, n.options.headers[o]);
            i.send(e.body)
          })))
        }, t
      }(Zt),
      $t = function(e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return T(t, e), t.prototype.eventFromException = function(e, t) {
          return function(e, t, n) {
            var r = gt(t, n && n.syntheticException || void 0, {
              attachStacktrace: e.attachStacktrace
            });
            return (0, X.EG)(r, {
              handled: !0,
              type: "generic"
            }), r.level = Me.Error, n && n.event_id && (r.event_id = n.event_id), J.resolve(r)
          }(this._options, e, t)
        }, t.prototype.eventFromMessage = function(e, t, n) {
          return void 0 === t && (t = Me.Info),
            function(e, t, n, r) {
              void 0 === n && (n = Me.Info);
              var i = mt(t, r && r.syntheticException || void 0, {
                attachStacktrace: e.attachStacktrace
              });
              return i.level = n, r && r.event_id && (i.event_id = r.event_id), J.resolve(i)
            }(this._options, e, t, n)
        }, t.prototype._setupTransport = function() {
          if (!this._options.dsn) return e.prototype._setupTransport.call(this);
          var t = R(R({}, this._options.transportOptions), {
            dsn: this._options.dsn
          });
          return this._options.transport ? new this._options.transport(t) : He() ? new Jt(t) : new Xt(t)
        }, t
      }(Yt),
      en = "5.30.0",
      tn = function(e) {
        function t(t) {
          return void 0 === t && (t = {}), e.call(this, $t, t) || this
        }
        return T(t, e), t.prototype.showReportDialog = function(e) {
          void 0 === e && (e = {}), (0, X.Rf)().document && (this._isEnabled() ? function(e) {
            if (void 0 === e && (e = {}), e.eventId)
              if (e.dsn) {
                var t = document.createElement("script");
                t.async = !0, t.src = new Tt(e.dsn).getReportDialogEndpoint(e), e.onLoad && (t.onload = e.onLoad), (document.head || document.body).appendChild(t)
              } else se.error("Missing dsn option in showReportDialog call");
            else se.error("Missing eventId option in showReportDialog call")
          }(R(R({}, e), {
            dsn: e.dsn || this.getDsn()
          })) : se.error("Trying to call showReportDialog with Sentry Client disabled"))
        }, t.prototype._prepareEvent = function(t, n, r) {
          return t.platform = t.platform || "javascript", t.sdk = R(R({}, t.sdk), {
            name: "sentry.javascript.browser",
            packages: L(t.sdk && t.sdk.packages || [], [{
              name: "npm:@sentry/browser",
              version: en
            }]),
            version: en
          }), e.prototype._prepareEvent.call(this, t, n, r)
        }, t.prototype._sendEvent = function(t) {
          var n = this.getIntegration(xt);
          n && n.addSentryBreadcrumb(t), e.prototype._sendEvent.call(this, t)
        }, t
      }(jt),
      nn = S.SENTRY_DSN;
    class rn {
      constructor(e) {
        var t, n = {
          beforeSend: (t, n) => {
            if (!e.enableErrorLogging) return console.error(t.exception), null;
            if (!n) return t;
            var i = n.originalException;
            return i instanceof r ? Object.assign(Object.assign({}, t), {
              fingerprint: [i.name]
            }) : t
          },
          dsn: nn,
          environment: e.environment,
          release: "web-payments-sdk@".concat(S.VERSION),
          transport: e.transport
        };
        t = e.useGlobalHandlers ? new Ft.GlobalHandlers : new Ft.GlobalHandlers({
          onerror: !1,
          onunhandledrejection: !1
        });
        var i = [new ke, new b, new Ft.TryCatch, new Ft.Breadcrumbs, t, new Ft.LinkedErrors, new Ft.UserAgent];
        n.integrations = i;
        var o = new tn(n);
        this.hub = new Re(o), this.hub.configureScope((t => {
          t.setTag("applicationId", e.applicationId), t.setTag("applicationUrl", e.applicationUrl), t.setTag("source", e.sourceName), t.setTag("version", e.version), e.sessionId && t.setTag("sessionId", e.sessionId)
        })), e.useGlobalHandlers && Ne(this.hub)
      }
      setAvt(e) {
        this.hub.setUser({
          id: e
        }), this.hub.configureScope((t => {
          t.setTag("avt", e)
        }))
      }
      setSessionId(e) {
        this.hub.configureScope((t => {
          t.setTag("sessionId", e)
        }))
      }
      setInstanceId(e) {
        this.hub.configureScope((t => {
          t.setTag("instanceId", e)
        }))
      }
      captureException(e, t, n, r) {
        this.hub.withScope((i => {
          n && i.setTag("sessionId", n), t && i.setTag("instanceId", t), r && Object.entries(r).forEach((e => {
            var [t, n] = e;
            i.setTag(t, n)
          })), this.hub.captureException(e)
        }))
      }
      wrap(e) {
        if (Object.prototype.hasOwnProperty.call(e, "__inner__")) return e;
        var t = this.captureException.bind(this);

        function n(n) {
          try {
            for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
            return e.apply(n, i)
          } catch (e) {
            throw t(e), e
          }
        }
        return n.__inner__ = e, n
      }
    }
    class on extends r {
      constructor() {
        super("Tokenization has failed. `accountHolderName` is a required option when calling ach.tokenize()"), this.name = "PlaidMissingNameError", Object.setPrototypeOf(this, on.prototype)
      }
    }
    class sn extends r {
      constructor() {
        super("Something went wrong and Plaid was not properly initialized"), this.name = "PlaidUninitializedError", Object.setPrototypeOf(this, sn.prototype)
      }
    }
    class an extends r {
      constructor(e) {
        super("An issue occurred while verifying the buyer", [e]), this.name = "VerifyBuyerError", Object.setPrototypeOf(this, an.prototype)
      }
    }
    class cn extends r {
      constructor(e) {
        var t = e instanceof HTMLElement ? e.nodeName : e;
        super("The element ".concat(t, " was not found")), this.name = "ElementNotFoundError", Object.setPrototypeOf(this, cn.prototype)
      }
    }
    class ln extends r {
      constructor() {
        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map((e => {
          var [t, n] = e;
          return 'expected property: "'.concat(t, '" of type "').concat(n, '"')
        })).join("\n");
        super("\n".concat(e)), this.name = "InvalidPaymentRequestError", Object.setPrototypeOf(this, ln.prototype)
      }
    }
    class un extends r {
      constructor() {
        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map((e => {
          var [t, n] = e;
          return 'expected property: "'.concat(t, '" of type "').concat(n, '"')
        })).join("\n");
        super("\n".concat(e)), this.name = "InvalidPaymentRequestUpdateError", Object.setPrototypeOf(this, un.prototype)
      }
    }
    class dn extends r {
      constructor(e, t) {
        super("The callback provided to the event listener ".concat(e, " threw an error with message: ").concat(t)), this.name = "InvalidEventListenerCallbackError", Object.setPrototypeOf(this, dn.prototype)
      }
    }
    class hn extends r {
      constructor(e) {
        super("option: '".concat(e, "'")), this.name = "InvalidOptionError", Object.setPrototypeOf(this, hn.prototype)
      }
    }
    class pn extends r {
      constructor(e) {
        super("This instance of ".concat(e, " has already been attached to the page.")), this.name = "PaymentMethodAlreadyAttachedError", Object.setPrototypeOf(this, pn.prototype)
      }
    }
    class fn extends r {
      constructor(e) {
        super("".concat(e, " has not been attached to the page. It must be attached before a payment method can be tokenized")), this.name = "PaymentMethodNotAttachedError", Object.setPrototypeOf(this, fn.prototype)
      }
    }
    class gn extends r {
      constructor(e) {
        super("This instance of ".concat(e, " has already been destroyed.")), this.name = "PaymentMethodAlreadyDestroyedError", Object.setPrototypeOf(this, gn.prototype)
      }
    }
    class mn extends r {
      constructor(e, t) {
        var n = e instanceof HTMLElement ? e.nodeName : e;
        super("The value ".concat(n, " is not a valid element type or selector. Only valid elements or selectors referring to ").concat([...t].join(", "), " elements are allowed.")), this.name = "InvalidElementTypeError", Object.setPrototypeOf(this, mn.prototype)
      }
    }
    class vn extends r {
      constructor(e, t) {
        super("An element with one of the following conflicting IDs was found on the page: ".concat(t, ". You must change those elements' ID before you can use ").concat(e)), this.name = "InvalidElementPresentError", Object.setPrototypeOf(this, vn.prototype)
      }
    }
    class En extends r {
      constructor(e, t) {
        var n = t || (null == e ? void 0 : e.field);
        super("Method unsupported: ".concat(null == e ? void 0 : e.message).concat(n ? " (field=".concat(n, ")") : "")), this.name = "PaymentMethodUnsupportedError", Object.setPrototypeOf(this, En.prototype)
      }
    }
    class _n extends r {
      constructor(e, t) {
        super("".concat(e, " is undefined after loading script ").concat(t, ")")), this.name = "ScriptLoaderError", Object.setPrototypeOf(this, _n.prototype)
      }
    }
    class yn extends r {
      constructor(e) {
        super("Invalid style property '".concat(e, "'.")), this.name = "InvalidInputStylePropertyError", Object.setPrototypeOf(this, yn.prototype)
      }
    }
    class Cn extends r {
      constructor(e, t) {
        super("Invalid style value '".concat(t, "' for property '").concat(e, "'.")), this.name = "InvalidInputStyleValueError", Object.setPrototypeOf(this, Cn.prototype)
      }
    }
    class In extends r {
      constructor(e) {
        super("Invalid style selector '".concat(e, "'.")), this.name = "InvalidInputStyleSelectorError", Object.setPrototypeOf(this, In.prototype)
      }
    }
    class An extends r {
      constructor(e) {
        super("One or more style selectors and/or CSS properties are invalid", e), this.errors = e, this.name = "InvalidStylesError", Object.setPrototypeOf(this, An.prototype)
      }
    }
    class Sn extends r {
      constructor() {
        super("Web Payments SDK is not enabled for this application"), this.name = "WebSdkDisabledError", Object.setPrototypeOf(this, Sn.prototype)
      }
    }
    class On extends r {
      constructor() {
        super("The Payment 'applicationId' option is not in the correct format."), this.name = "InvalidApplicationIdError", Object.setPrototypeOf(this, On.prototype)
      }
    }
    class Tn extends r {
      constructor(e, t) {
        super("Web Payments SDK was initialized with an application ID created in ".concat(e, " however you are currently using ").concat(t, ".")), this.name = "ApplicationIdEnvironmentMismatchError ", Object.setPrototypeOf(this, Tn.prototype)
      }
    }
    var Pn = new RegExp(/^[\w.-]+$/i),
      Rn = new RegExp(/sq0at/i);

    function wn(e) {
      return S.env === e
    }
    var Nn = bn(60),
      Ln = Dn(60);

    function bn(e) {
      return 1e3 * e
    }

    function Dn(e) {
      return e * Nn
    }
    var xn, Mn, Un = {
        hoursToMs: function(e) {
          return e * Ln
        },
        minutesToMs: Dn,
        msToSeconds: function(e) {
          return e / 1e3
        },
        secondsToMs: bn
      },
      kn = /^_/g,
      Hn = /(?!^)([A-Z])/g,
      Gn = /[\s_]+(?=[A-Za-z])/g,
      Fn = function(e) {
        return e.replace(kn, "-").replace(Hn, " $1").replace(Gn, "-").toLowerCase()
      },
      Bn = function(e, t) {
        return "".concat(e, ": ").concat(t, ";")
      },
      Vn = function(e, t) {
        return t.some((function(t) {
          return e instanceof t
        }))
      },
      jn = function(e) {
        try {
          return new URL(e), !0
        } catch (e) {
          return !1
        }
      };
    ! function(e) {
      e.INVALID_APPLICATION_ID = "INVALID_APPLICATION_ID", e.INVALID_CARD_NUMBER = "INVALID_CARD_NUMBER", e.INVALID_CVV = "INVALID_CVV", e.INVALID_EXPIRATION_DATE = "INVALID_EXPIRATION_DATE", e.INVALID_POSTAL_CODE = "INVALID_POSTAL_CODE", e.INVALID_SANDBOX_CARD_NUMBER = "INVALID_SANDBOX_CARD_NUMBER", e.INVALID_STAGING_CARD_NUMBER = "INVALID_STAGING_CARD_NUMBER", e.MISSING_APPLICATION_ID = "MISSING_APPLICATION_ID", e.MISSING_CARD_DATA = "MISSING_CARD_DATA", e.UNKNOWN = "UNKNOWN", e.UNSUPPORTED_CARD_BRAND = "UNSUPPORTED_CARD_BRAND"
    }(xn || (xn = {})),
    function(e) {
      e.EXPIRED_PLAID_SESSION = "EXPIRED_PLAID_SESSION", e.INVALID_SELECTED_PLAID_BANK_ACCOUNT_ID = "INVALID_SELECTED_PLAID_BANK_ACCOUNT_ID", e.UNKNOWN = "UNKNOWN"
    }(Mn || (Mn = {}));
    var qn, Yn, Kn = {
        EXPIRED_PLAID_SESSION: {
          message: "The plaid session was expired. Please try again.",
          type: "EXPIRED_PLAID_SESSION"
        },
        INVALID_SELECTED_PLAID_BANK_ACCOUNT_ID: {
          message: "Invalid plaid bank account id selected",
          type: "INVALID_SELECTED_PLAID_BANK_ACCOUNT_ID"
        },
        UNKNOWN: {
          message: "An unknown error has occurred",
          type: "UNKNOWN"
        }
      },
      Wn = {
        INVALID_APPLICATION_ID: {
          message: "Invalid applicationId",
          type: "INVALID_APPLICATION_ID"
        },
        INVALID_CARD_NUMBER: {
          field: "cardNumber",
          message: "Credit card number is not valid",
          type: "VALIDATION_ERROR"
        },
        INVALID_CVV: {
          field: "cvv",
          message: "CVV is not valid",
          type: "VALIDATION_ERROR"
        },
        INVALID_EXPIRATION_DATE: {
          field: "expirationDate",
          message: "Expiration date is not valid",
          type: "VALIDATION_ERROR"
        },
        INVALID_POSTAL_CODE: {
          field: "postalCode",
          message: "Postal code is not valid",
          type: "VALIDATION_ERROR"
        },
        INVALID_SANDBOX_CARD_NUMBER: {
          field: "cardNumber",
          message: "Credit card number is not valid for sandbox use. Please use one of the test numbers documented at https://developer.squareup.com/docs/testing/test-values.",
          type: "VALIDATION_ERROR"
        },
        INVALID_STAGING_CARD_NUMBER: {
          field: "cardNumber",
          message: "Card number is not allowed in Staging. See: https://go/panfake-ui",
          type: "VALIDATION_ERROR"
        },
        MISSING_APPLICATION_ID: {
          message: "Missing applicationId",
          type: "MISSING_APPLICATION_ID"
        },
        MISSING_CARD_DATA: {
          message: "Missing card data",
          type: "MISSING_CARD_DATA"
        },
        UNKNOWN: {
          message: "An unknown error has occurred",
          type: "UNKNOWN"
        },
        UNSUPPORTED_CARD_BRAND: {
          field: "cardNumber",
          message: "Card not supported",
          type: "UNSUPPORTED_CARD_BRAND"
        }
      };
    ! function(e) {
      e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_LOCATION_ID_OR_NAME = "MISSING_LOCATION_ID_OR_NAME", e.NOT_FOUND = "NOT_FOUND", e.UNKNOWN = "UNKNOWN"
    }(qn || (qn = {}));
    class zn extends r {
      constructor() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        super("Tokenization has failed", e), this.errors = e, this.name = "TokenizationError", Object.setPrototypeOf(this, zn.prototype)
      }
    }

    function Zn() {
      return new zn([Wn.UNKNOWN])
    }
    class Qn extends r {
      constructor() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        super("Internal Validation Error", e), this.errors = e, this.name = "InternalValidationError", Object.setPrototypeOf(this, Qn.prototype)
      }
    }
    class Jn extends r {
      constructor(e) {
        var t = "An unexpected error occurred";
        e && (t += " while ".concat(e)), super("".concat(t, ".")), this.name = "UnexpectedError", Object.setPrototypeOf(this, Jn.prototype)
      }
    }! function(e) {
      e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.OK = 200] = "OK", e[e.NO_CONTENT = 204] = "NO_CONTENT", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", e[e.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", e[e.UNAUTHORIZED = 401] = "UNAUTHORIZED"
    }(Yn || (Yn = {}));
    var Xn, $n = {
      get BACKOFF_FACTOR() {
        return 1.66
      },
      get REQUEST_DURATION_MAX_MS() {
        return 6e4
      },
      get REQUEST_TIMEOUT_MS() {
        return [1e4, 2e4, 3e4]
      },
      get RETRY_DELAY_MS() {
        return 200
      },
      STATUS_CODE: Yn
    };
    ! function(e) {
      e.INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR", e.NOT_FOUND = "NOT_FOUND", e.SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE", e.TOO_MANY_REQUESTS = "TOO_MANY_REQUESTS", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN = "UNKNOWN"
    }(Xn || (Xn = {}));
    var er = {
        message: "An internal error has occurred. Unable to complete the request.",
        type: "INTERNAL_SERVER_ERROR"
      },
      tr = {
        message: "The requested resource was not found.",
        type: "NOT_FOUND"
      },
      nr = {
        message: "The endpoint is currently unavailable.",
        type: "SERVICE_UNAVAILABLE"
      },
      rr = {
        message: "Too many requests in progress.",
        type: "TOO_MANY_REQUESTS"
      },
      ir = {
        message: "Request not authorized.",
        type: "UNAUTHORIZED"
      },
      or = {
        message: "An unknown error has occurred",
        type: "UNKNOWN"
      };
    class sr extends r {
      constructor(e, t) {
        var n = e;
        void 0 !== t && (n += " (payment_method=".concat(t, ")")), super(n), this.name = "InternalError", Object.setPrototypeOf(this, sr.prototype)
      }
    }
    class ar extends r {
      constructor(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          i = function(e) {
            var {
              STATUS_CODE: t
            } = $n;
            switch (e) {
              case t.UNAUTHORIZED:
                return ir;
              case t.NOT_FOUND:
                return tr;
              case t.TOO_MANY_REQUESTS:
                return rr;
              case t.INTERNAL_SERVER_ERROR:
                return er;
              case t.SERVICE_UNAVAILABLE:
                return nr;
              default:
                return or
            }
          }(t);
        super("".concat(i.message, " (message=").concat(n, "; url=").concat(e, ")"), r), this.name = "InternalHttpError", Object.setPrototypeOf(this, ar.prototype)
      }
    }
    class cr extends r {
      constructor(e, t) {
        super("Messenger has not received an acknowledgement of message ".concat(e, " with id ").concat(t)), this.name = "InternalMessengerTimeoutError", Object.setPrototypeOf(this, cr.prototype)
      }
    }
    class lr extends r {
      constructor(e, t, n) {
        super("Request timeout exceeded (attempts=".concat(e, "; duration=").concat(t, "ms; url=").concat(n, ")")), this.name = "InternalTimeoutError", Object.setPrototypeOf(this, lr.prototype)
      }
    }
    class ur extends r {
      constructor(e, t) {
        super("Invalid JSON received (status=".concat(t, "; url=").concat(e, ")")), this.name = "InternalInvalidJsonError", Object.setPrototypeOf(this, ur.prototype)
      }
    }
    class dr extends r {
      constructor(e, t, n) {
        super("Network error during request (attempts=".concat(e, "; duration=").concat(t, "ms; url=").concat(n, ")")), this.name = "InternalNetworkError", Object.setPrototypeOf(this, dr.prototype)
      }
    }
    var hr, pr, fr, gr, mr, vr, Er, _r, yr = {
        InternalError: sr,
        InternalHttpError: ar,
        InternalInvalidJsonError: ur,
        InternalMessengerTimeoutError: cr,
        InternalNetworkError: dr,
        InternalTimeoutError: lr,
        InternalValidationError: Qn
      },
      Cr = Object.assign({
        BrowserNotSupportedError: i,
        ElementNotFoundError: cn,
        InvalidApplicationIdError: On,
        InvalidInputStylePropertyError: yn,
        InvalidInputStyleValueError: Cn,
        InvalidPaymentRequestError: ln,
        InvalidStylesError: An,
        PaymentMethodAlreadyAttachedError: pn,
        PaymentMethodNotAttachedError: fn,
        PaymentMethodUnsupportedError: En,
        PlaidMissingNameError: on,
        PlaidUninitializedError: sn,
        ScriptLoaderError: _n,
        SqError: r,
        TokenizationError: zn,
        UnexpectedError: Jn,
        VerifyBuyerError: an,
        WebSdkDisabledError: Sn,
        WebSdkEmbedError: o
      }, yr),
      Ir = {
        BrowserNotSupportedError: i,
        ElementNotFoundError: cn,
        InvalidElementTypeError: mn,
        InvalidPaymentRequestError: ln,
        PaymentMethodAlreadyDestroyedError: gn,
        PaymentMethodUnsupportedError: En,
        PlaidMissingNameError: on,
        PlaidUninitializedError: sn,
        ScriptLoaderError: _n,
        TokenizationError: zn,
        UnexpectedError: Jn,
        VerifyBuyerError: an,
        WebSdkEmbedError: o
      };
    (_r = hr || (hr = {})).AlipayPayStart = "ALIPAY_PAY:START", _r.AlipayPayOK = "ALIPAY_PAY:OK", _r.AlipayPayError = "ALIPAY_PAY:ERROR", _r.AttachStart = "ATTACH:START", _r.AttachOK = "ATTACH:OK", _r.AttachError = "ATTACH:ERROR", _r.BuildStart = "BUILD:START", _r.BuildOK = "BUILD:OK", _r.BuildError = "BUILD:ERROR", _r.CashAppAPICustomerStart = "CASH_APP_API_CUSTOMER:START", _r.CashAppAPICustomerOK = "CASH_APP_API_CUSTOMER:OK", _r.CashAppAPICustomerError = "CASH_APP_API_CUSTOMER:ERROR", _r.CashAppAuthStart = "CASH_APP_AUTH:START", _r.CashAppAuthOK = "CASH_APP_AUTH:OK", _r.CashAppAuthError = "CASH_APP_AUTH:ERROR", _r.FirstInteraction = "FIRST_INTERACTION:OK", _r.GetProductInformationStart = "GET_PRODUCT_INFORMATION:START", _r.GetProductInformationOK = "GET_PRODUCT_INFORMATION:OK", _r.GetProductInformationError = "GET_PRODUCT_INFORMATION:ERROR", _r.InitializeStart = "INITIALIZATION:START", _r.InitializeOK = "INITIALIZATION:OK", _r.InitializeError = "INITIALIZATION:ERROR", _r.LoadOK = "LOAD:OK", _r.MainIframeOK = "MAIN_IFRAME:OK", _r.NonceStart = "NONCE:START", _r.NonceOK = "NONCE:OK", _r.NonceError = "NONCE:ERROR", _r.VerificationStart = "VERIFICATION:START", _r.VerificationOK = "VERIFICATION:OK", _r.VerificationError = "VERIFICATION:ERROR",
      function(e) {
        e.ExternalSessionStart = "EXTERNAL_SESSION:START", e.ExternalSessionOK = "EXTERNAL_SESSION:OK", e.ExternalSessionError = "EXTERNAL_SESSION:ERROR", e.ExternalSessionCancel = "EXTERNAL_SESSION:CANCEL", e.ShippingAddressChangeOK = "SHIPPING_ADDRESS_CHANGE:OK", e.ShippingOptionChangeOK = "SHIPPING_OPTION_CHANGE:OK"
      }(pr || (pr = {})),
      function(e) {
        e.CASH_APP_API_CUSTOMER = "CASH_APP_API_CUSTOMER", e.CASH_APP_AUTH = "CASH_APP_AUTH", e.GET_PRODUCT_INFORMATION = "GET_PRODUCT_INFORMATION", e.LOAD = "LOAD", e.MAIN_IFRAME = "MAIN_IFRAME", e.NONCE = "NONCE"
      }(fr || (fr = {})),
      function(e) {
        e.ATTACH = "ATTACH", e.BUILD = "BUILD", e.INITIALIZATION = "INITIALIZATION"
      }(gr || (gr = {})),
      function(e) {
        e.START = "START", e.OK = "OK", e.ERROR = "ERROR"
      }(mr || (mr = {})), (Er = vr || (vr = {})).Ach = "ACH", Er.Alipay = "Alipay", Er.App = "WebSDK", Er.ApplePay = "Apple Pay", Er.Card = "Card", Er.CashApp = "Cash App", Er.GooglePay = "Google Pay", Er.Masterpass = "Masterpass", Er.GiftCard = "Gift Card", Er.Fields = "Fields";
    var Ar, Sr = {
      CARD_NONCE_ENDPOINT: new RegExp(S.CARD_NONCE_ENDPOINT),
      CASH_APP_API_CUSTOMER: new RegExp(S.CASH_APP_API_CUSTOMER),
      CASH_APP_AUTH_ENDPOINT: new RegExp(S.CASH_APP_AUTH_ENDPOINT),
      GET_PRODUCT_INFORMATION_ENDPOINT: new RegExp(S.GET_PRODUCT_INFORMATION_ENDPOINT),
      LIBRARY_RESOURCE: new RegExp("".concat(S.ASSET_BASE_URL, "/([\\w\\d.-]*/)?square").concat(S.APPENDED_FILE_NAME, "\\.js")),
      MAIN_IFRAME_RESOURCE: new RegExp("".concat(S.ASSET_URL, "/main-iframe").concat(S.APPENDED_FILE_NAME))
    };
    ! function(e) {
      e.navigation = "navigation", e.fetch = "fetch", e.iframe = "iframe", e.script = "script"
    }(Ar || (Ar = {}));
    var Or, Tr = function(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
          function s(e) {
            try {
              c(r.next(e))
            } catch (e) {
              o(e)
            }
          }

          function a(e) {
            try {
              c(r.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
              e(t)
            }))).then(s, a)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      },
      Pr = {
        timeout: function(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new sr("Promise timeout exceeded");
          return Tr(this, void 0, void 0, (function*() {
            var r = -1,
              i = new Promise(((e, i) => {
                r = window.setTimeout((() => {
                  i(n)
                }), t)
              })),
              o = yield Promise.race([i, e()]);
            return window.clearTimeout(r), o
          }))
        }
      },
      Rr = function(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
          function s(e) {
            try {
              c(r.next(e))
            } catch (e) {
              o(e)
            }
          }

          function a(e) {
            try {
              c(r.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
              e(t)
            }))).then(s, a)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      };
    ! function(e) {
      e.POST = "POST", e.GET = "GET"
    }(Or || (Or = {}));
    var wr = "include",
      Nr = "cors";

    function Lr(e, t) {
      var n = function(e, t) {
          return Math.floor(e * Math.pow($n.BACKOFF_FACTOR, t))
        }($n.RETRY_DELAY_MS, e - 1),
        r = Date.now() - t,
        i = $n.REQUEST_DURATION_MAX_MS - r,
        o = $n.REQUEST_TIMEOUT_MS[e - 1];
      return i <= n ? i - o : n
    }

    function br(e, t) {
      return {
        body: e,
        status: t.status,
        statusText: t.statusText
      }
    }

    function Dr(e) {
      var t = new Headers([
        ["Accept", "application/json"],
        ["Content-Type", "application/json; charset=utf-8"]
      ]);
      if (e)
        for (var n in e) e[n] && t.append(n, e[n]);
      return t
    }

    function xr(e, t, n, r) {
      return Rr(this, void 0, void 0, (function*() {
        if (!(e.status < $n.STATUS_CODE.INTERNAL_SERVER_ERROR)) return br({}, e);
        try {
          var t = {};
          return e.status !== $n.STATUS_CODE.NO_CONTENT && (t = yield e.json()), br(t, e)
        } catch (t) {
          throw new ur(r, e.status)
        }
      }))
    }

    function Mr(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Date.now();
      return Rr(this, void 0, void 0, (function*() {
        var i = Date.now() - r,
          o = $n.REQUEST_DURATION_MAX_MS - i,
          s = Math.min($n.REQUEST_TIMEOUT_MS[n - 1], o),
          a = null;
        void 0 !== window.AbortController && null !== window.AbortController && (a = new window.AbortController);
        var c = Object.assign(Object.assign({
          credentials: wr
        }, t), {
          mode: Nr,
          signal: a ? a.signal : null
        });
        try {
          var l = yield Pr.timeout(window.fetch.bind(null, e, c), s, new lr(n, i, e));
          return yield xr(l, 0, 0, e)
        } catch (o) {
          var u = 0;
          if (o instanceof lr) a && a.abort();
          else {
            if (o instanceof ur) throw o;
            if ((u = Lr(n, r)) <= 0) throw new dr(n, i, e)
          }
          if (n === $n.REQUEST_TIMEOUT_MS.length) throw o;
          return new Promise((i => {
            setTimeout((() => {
              i(Mr(e, t, n + 1, r))
            }), u)
          }))
        }
      }))
    }
    var Ur, kr = function(e, t) {
        var n = Dr(t && t.headers);
        return Mr(e, {
          body: JSON.stringify(t.body),
          headers: n,
          method: Or.POST
        })
      },
      Hr = {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        port: "",
        protocol: "",
        search: "",
        toString: () => ""
      };

    function Gr() {
      if (y.windowLocation === y.windowParentLocation) return y.windowLocation;
      var e = y.documentReferrer;
      return e && 0 !== e.length ? (Ur || (Ur = document.createElement("a")), Ur.href = "".concat(e), {
        hash: Ur.hash,
        host: Ur.host,
        hostname: Ur.hostname,
        href: Ur.href,
        origin: Ur.origin,
        pathname: Ur.pathname,
        port: Ur.port,
        protocol: Ur.protocol,
        search: Ur.search,
        toString() {
          return this.href
        }
      }) : Hr
    }

    function Fr(e, t) {
      var n = y.windowPerformance;
      if (!n || "function" != typeof n.getEntriesByType) return null;
      var r = n.getEntriesByType("resource"),
        i = n.getEntriesByType("navigation"),
        o = function(e, t, n) {
          var r = e.filter((e => e.initiatorType === t && n.test(e.name)));
          return r[r.length - 1]
        }(r.concat(i), e, t);
      return o ? Math.round(function(e) {
        return e.duration > 0 ? e.duration : Math.max(Math.trunc(e.responseEnd - e.startTime), 0)
      }(o)) : null
    }
    var Br, Vr = function(e) {
        switch (e) {
          case fr.CASH_APP_AUTH:
            return Fr(Ar.fetch, Sr.CASH_APP_AUTH_ENDPOINT);
          case fr.CASH_APP_API_CUSTOMER:
            return Fr(Ar.fetch, Sr.CASH_APP_API_CUSTOMER);
          case fr.GET_PRODUCT_INFORMATION:
            return Fr(Ar.fetch, Sr.GET_PRODUCT_INFORMATION_ENDPOINT);
          case fr.MAIN_IFRAME:
            return Fr(Ar.navigation, Sr.MAIN_IFRAME_RESOURCE);
          case fr.LOAD:
            return Fr(Ar.script, Sr.LIBRARY_RESOURCE);
          case fr.NONCE:
            return Fr(Ar.fetch, Sr.CARD_NONCE_ENDPOINT);
          default:
            return null
        }
      },
      jr = S.METRICS_URL;
    class qr {
      constructor(e) {
        this.jsFramework = "None", this.sdkVersion = S.VERSION, this.applicationData = e, this.manualTelemetryStarts = {}
      }
      logEvent(e, t, n, r) {
        var i = {
            origin: Gr().origin
          },
          o = {
            innerHeight: y.windowInnerHeight,
            innerWidth: y.windowInnerWidth,
            language: y.windowNavigationLanguage
          },
          s = this.eventDuration(e, r),
          {
            event: a,
            eventSource: c
          } = e,
          l = {
            appLocation: i,
            browserData: o,
            event: a,
            eventSource: c,
            paymentMethodTrackingId: r,
            sdkVersion: this.sdkVersion,
            session: this.metricsSession(t, n)
          };
        s && (l.duration = s), a === hr.LoadOK && (l.jsFramework = this.jsFramework), kr(jr, {
          body: l
        }).catch((e => {
          console.debug("logEvent error", e)
        }))
      }
      eventDuration(e, t) {
        var [n, r] = e.event.split(":");
        if (n in gr) {
          var i;
          if (n === gr.INITIALIZATION ? i = n : t && (i = "".concat(n, ":").concat(t)), !i) return null;
          if (r === mr.START) {
            var o = Date.now();
            return this.manualTelemetryStarts[i] = o, null
          }
          if (r === mr.OK || r === mr.ERROR) {
            var s = this.manualTelemetryStarts[i];
            return void 0 === s ? null : (delete this.manualTelemetryStarts[i], Date.now() - s)
          }
        }
        return r !== mr.START && n in fr ? Vr(n) : null
      }
      metricsSession(e, t) {
        return Object.assign(Object.assign({}, this.applicationData), {
          instanceId: e,
          sessionId: t
        })
      }
    }! function(e) {
      e.ACH = "ACH", e.ALIPAY = "ALIPAY", e.APPLE_PAY = "APPLE_PAY", e.CASH_APP = "CASH_APP", e.GOOGLE_PAY = "GOOGLE_PAY"
    }(Br || (Br = {})), S.HYDRATION_ENDPOINT;
    var Yr, Kr = "UPDATE_SESSION",
      Wr = "LOCALE_CHANGED_EVENT";
    class zr extends class {
      constructor(e, t) {
        this.errorLogger = e, this.messenger = t
      }
    } {
      constructor(e, t, n, r, i, o, s, a) {
        super(e, t), this.session = r, this.localeStrings = s, this.paymentMethodSupportDetail = i, this.featureFlags = o, this.metricsHandler = n, this.eventTarget = a
      }
      addLocaleChangedListener(e) {
        this.eventTarget.addEventListener(Wr, e)
      }
      removeLocaleChangedListener(e) {
        this.eventTarget.removeEventListener(Wr, e)
      }
      getSession() {
        return this.session.serialize()
      }
      getLocaleString() {
        return this.localeStrings.getLocaleString()
      }
      setLocale(e) {
        if (!this.messenger) throw new sr("Expected messenger to exist for the client context");
        var t = this.localeStrings.setLocale(e);
        if (t.previousLocale === t.newLocale) return t;
        var n = this.localeStrings.getCurrentLocale();
        return this.session.setLocale(n), this.eventTarget.dispatchEvent(Wr, n), this.messenger.sendOneWayMessage(Kr, {
          options: {
            session: this.session.serialize()
          }
        }), t
      }
      setSessionId(e) {
        if (!this.messenger) throw new sr("Expected messenger to exist for the client context");
        this.session.setSessionId(e), this.messenger.sendOneWayMessage(Kr, {
          options: {
            session: this.session.serialize()
          }
        })
      }
      setPaymentMethodTrackingId(e) {
        this.metricsHandler.setPaymentMethodTrackingId(e)
      }
      getPaymentMethodTrackingId() {
        return this.metricsHandler.getPaymentMethodTrackingId()
      }
    }

    function Zr() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return "https://developer.squareup.com/docs/api/paymentform".concat(e)
    }! function(e) {
      e.APPLE_PAY_BROWSER_NOT_SUPPORTED = "APPLE_PAY_BROWSER_NOT_SUPPORTED", e.APPLE_PAY_DEVICE_NOT_SUPPORTED = "APPLE_PAY_DEVICE_NOT_SUPPORTED", e.APPLE_PAY_NOT_REGISTERED = "APPLE_PAY_NOT_REGISTERED", e.GOOGLE_PAY_BROWSER_NOT_SUPPORTED = "GOOGLE_PAY_BROWSER_NOT_SUPPORTED", e.INVALID_CONFIG = "INVALID_CONFIG", e.UNKNOWN = "UNKNOWN", e.WALLET_NOT_REQUESTED = "WALLET_NOT_REQUESTED"
    }(Yr || (Yr = {}));
    var Qr, Jr = {
      APPLE_PAY_BROWSER_NOT_SUPPORTED: {
        message: "Apple Pay is only available on Safari.",
        type: "BROWSER_NOT_SUPPORTED"
      },
      APPLE_PAY_DEVICE_NOT_SUPPORTED: {
        message: "Device does not support Apple Pay.\nSee:".concat(function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return "https://developer.squareup.com/docs/payment-form/add-digital-wallets/apple-pay".concat(e)
        }("#prerequisites-and-assumptions"), "."),
        type: "DEVICE_NOT_SUPPORTED"
      },
      APPLE_PAY_NOT_REGISTERED: {
        message: "No active card available in the Apple Wallet or domain not registered.",
        type: "NOT_REGISTERED"
      },
      GOOGLE_PAY_BROWSER_NOT_SUPPORTED: {
        message: "Browser does not support Google Pay. \nSee: ".concat(function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return "https://developer.squareup.com/docs/payment-form/add-digital-wallets/google-pay".concat(e)
        }("#prerequsites-and-assumptions")),
        type: "BROWSER_NOT_SUPPORTED"
      },
      INVALID_CONFIG: {
        message: "Configuration is invalid.",
        type: "INVALID_CONFIG"
      },
      UNKNOWN: {
        message: "An unknown error has occurred.",
        type: "UNKNOWN"
      },
      WALLET_NOT_REQUESTED: {
        message: "Wallet is not specified in the payment request config.\nSee:".concat(Zr("#paymentform-configurationfields")),
        type: "WALLET_NOT_REQUESTED"
      }
    };
    ! function(e) {
      e.COUNTRY_NOT_SUPPORTED = "COUNTRY_NOT_SUPPORTED", e.APPLICATION_DISABLED = "APPLICATION_DISABLED", e.INACTIVE_PLATFORM_ACCOUNT = "INACTIVE_PLATFORM_ACCOUNT", e.MISSING_LOCATION_ID = "MISSING_LOCATION_ID", e.UNVERIFIED_DOMAIN = "UNVERIFIED_DOMAIN", e.US_AND_UK_MERCHANT_ONLY = "US_AND_UK_MERCHANT_ONLY", e.US_MERCHANT_ONLY = "US_MERCHANT_ONLY"
    }(Qr || (Qr = {}));
    var Xr = {
      APPLICATION_DISABLED: {
        message: "Wallet is disabled for your application.",
        type: "APPLICATION_DISABLED"
      },
      COUNTRY_NOT_SUPPORTED: {
        message: "Wallet is not available in this merchant country.",
        type: "COUNTRY_NOT_SUPPORTED"
      },
      INACTIVE_PLATFORM_ACCOUNT: {
        field: "accountId",
        message: "The platform account associated with provided accountId is inactive.",
        type: "INACTIVE_PLATFORM_ACCOUNT"
      },
      MISSING_LOCATION_ID: {
        field: "locationId",
        message: "Missing locationId in the payment request configuration.\nSee: ".concat(Zr("#paymentform-configurationfields")),
        type: "MISSING_LOCATION_ID"
      },
      UNVERIFIED_DOMAIN: {
        message: "Your website's domain is not verified for use with Apple Pay. Please visit the Square Developer Dashboard at https://developer.squareup.com/ to register your domain for use with Apple Pay",
        type: "UNVERIFIED_DOMAIN"
      },
      US_AND_UK_MERCHANT_ONLY: {
        message: "Wallet is available for US and UK merchants only.",
        type: "US_AND_UK_MERCHANT_ONLY"
      },
      US_MERCHANT_ONLY: {
        message: "Wallet is available for US merchants only.",
        type: "US_MERCHANT_ONLY"
      }
    };
    class $r extends r {
      constructor(e, t, n) {
        var r = "".concat(e, " was called with a missing or invalid parameter. '").concat(t, "' is required");
        n && (r += " and must be a(n) ".concat(n)), super("".concat(r, ".")), this.name = "InvalidFunctionArgumentError", Object.setPrototypeOf(this, $r.prototype)
      }
    }
    class ei extends r {
      constructor(e) {
        super("One or more of the arguments needed are missing or invalid."), this.argumentErrors = e, this.name = "InvalidArgumentsError", Object.setPrototypeOf(this, ei.prototype)
      }
    }
    class ti {
      constructor(e, t) {
        this.type = e, this.detail = t, this.type = e, this.detail = t
      }
    }
    class ni {
      constructor() {
        this.listeners = {}
      }
      addEventListener(e, t) {
        e in this.listeners || (this.listeners[e] = []), this.listeners[e].push(t)
      }
      removeEventListener(e, t) {
        if (e in this.listeners)
          for (var n = this.listeners[e], r = 0; r < n.length; r++) n[r] === t && (n.splice(r, 1), r--)
      }
      dispatchEvent(e, t) {
        if (e in this.listeners)
          for (var n = new ti(e, t), r = this.listeners[e].slice(), i = 0, o = r.length; i < o; i++) r[i](n)
      }
      hasEventListener(e) {
        return e in this.listeners && this.listeners[e].length > 0
      }
    }
    var ri, ii = function() {
      function e() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).slice(1)
      }
      return "".concat(e() + e(), "-").concat(e(), "-").concat(e(), "-").concat(e(), "-").concat(e()).concat(e()).concat(e())
    };
    ! function(e) {
      e.REQUEST_GOOGLE_PAY_CARD_NONCE = "REQUEST_GOOGLE_PAY_CARD_NONCE", e.GENERATE_GOOGLE_PAY_AUTH_TOKEN = "GENERATE_GOOGLE_PAY_AUTH_TOKEN"
    }(ri || (ri = {}));
    var oi, si;
    ! function(e) {
      e.PLAID = "window.Plaid", e.ANALYTICS = "window.Square.Analytics", e.GOOGLE = "window.google"
    }(oi || (oi = {})),
    function(e) {
      e.ANALYTICS = "square-payments-analytics-link-script", e.GOOGLE = "square-payments-google-link-script", e.PLAID = "square-payments-plaid-link-script"
    }(si || (si = {}));
    var ai = {};

    function ci(e, t, n, r) {
      var i = r();
      if (i) return Promise.resolve(i);
      if (ai[t]) return ai[t];
      var o = document.createElement("script");
      return o.id = e, o.src = n, ai[t] = new Promise(((e, i) => {
        o.onload = () => {
          var o = r();
          o ? e(o) : i(new _n(t, n))
        }, o.onerror = () => {
          i(new _n(t, n))
        }
      })), document.body.appendChild(o), ai[t]
    }
    var li, ui = function() {
        return ci(si.ANALYTICS, oi.ANALYTICS, S.ANALYTICS_PUBLIC_ENDPOINT, (() => {
          var e;
          return null === (e = null === window || void 0 === window ? void 0 : window.Square) || void 0 === e ? void 0 : e.Analytics
        }))
      },
      di = function() {
        return ci(si.GOOGLE, oi.GOOGLE, S.GOOGLE_PAY_SCRIPT_URL, (() => null === window || void 0 === window ? void 0 : window.google))
      },
      hi = function() {
        return ci(si.PLAID, oi.PLAID, S.PLAID_LINK_SCRIPT_URL, (() => null === window || void 0 === window ? void 0 : window.Plaid))
      },
      pi = function(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
          function s(e) {
            try {
              c(r.next(e))
            } catch (e) {
              o(e)
            }
          }

          function a(e) {
            try {
              c(r.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
              e(t)
            }))).then(s, a)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      },
      fi = Un.hoursToMs(2);

    function gi(e) {
      var {
        applicationId: t,
        locationId: n
      } = e;
      return li || (li = ui().then((e => new e(t, {
        locationId: n
      }))))
    }
    var mi, vi = {
      getToken: function(e) {
        return pi(this, void 0, void 0, (function*() {
          var t = yield gi(e);
          return new Promise((e => {
            t.getToken(e)
          }))
        }))
      },
      resetLibraryCache: function() {
        li = void 0
      },
      verifyBuyer: function(e, t, n) {
        return pi(this, void 0, void 0, (function*() {
          var r = yield gi(e);
          return new Promise(((e, i) => {
            r.verifyBuyer(t, n, ((t, n) => {
              t ? i(t) : e(n)
            }))
          }))
        }))
      }
    };
    ! function(e) {
      e.UNKNOWN = "Unknown", e.OK = "OK", e.ERROR = "Error", e.INVALID = "Invalid", e.ABORT = "Abort", e.CANCEL = "Cancel"
    }(mi || (mi = {}));
    class Ei {
      constructor(e) {
        this.eventTarget = new ni, this.context = e
      }
      get session() {
        return this.context.getSession()
      }
      get messenger() {
        return this.context.messenger
      }
      get metricsHandler() {
        return this.context.metricsHandler
      }
      get errorLogger() {
        return this.context.errorLogger
      }
      addEventListener(e, t) {
        this.eventTarget.addEventListener(e, t)
      }
      removeEventListener(e, t) {
        this.eventTarget.removeEventListener(e, t)
      }
      dispatchEvent(e, t) {
        this.eventTarget.dispatchEvent(e, t)
      }
      destroy() {
        return Promise.resolve()
      }
      detach() {
        return Promise.resolve()
      }
      tokenize(e) {
        return this.errorLogger.captureException(new sr("Missing tokenize implementation")), Promise.reject(new Jn("tokenizing payment data"))
      }
    }
    var _i, yi, Ci, Ii, Ai, Si = {
      message: "the tokenization request is already in process",
      type: "TOKENIZATION_IN_PROCESS"
    };
    ! function(e) {
      e.CREATE_PLAID_LINK_SESSION = "CREATE_PLAID_LINK_SESSION", e.REQUEST_ACH_BANK_NONCE = "REQUEST_ACH_BANK_NONCE"
    }(_i || (_i = {})),
    function(e) {
      e.SUCCESS = "SUCCESS", e.CANCEL = "CANCEL"
    }(yi || (yi = {})), (Ai = Ci || (Ci = {})).APPLE_PAY = "Apple Pay", Ai.CARD = "Card", Ai.CASH_APP = "Cash App", Ai.GOOGLE_PAY = "Google Pay", Ai.GIFT_CARD = "Gift Card", Ai.ACH = "ACH",
      function(e) {
        e.SHIPPING_CONTACT_CHANGED = "shippingcontactchanged", e.SHIPPING_OPTION_CHANGED = "shippingoptionchanged"
      }(Ii || (Ii = {}));
    var Oi, Ti = function(e, t, n, r) {
      return new(n || (n = Promise))((function(i, o) {
        function s(e) {
          try {
            c(r.next(e))
          } catch (e) {
            o(e)
          }
        }

        function a(e) {
          try {
            c(r.throw(e))
          } catch (e) {
            o(e)
          }
        }

        function c(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
            e(t)
          }))).then(s, a)
        }
        c((r = r.apply(e, t || [])).next())
      }))
    };
    ! function(e) {
      e.CLOSE_OAUTH = "CLOSE_OAUTH", e.ERROR = "ERROR", e.EXIT = "EXIT", e.FAIL_OAUTH = "FAIL_OAUTH", e.HANDOFF = "HANDOFF", e.MATCHED_SELECT_INSTITUTION = "MATCHED_SELECT_INSTITUTION", e.MATCHED_SELECT_VERIFY_METHOD = "MATCHED_SELECT_VERIFY_METHOD", e.OPEN = "OPEN", e.OPEN_MY_PLAID = "OPEN_MY_PLAID", e.OPEN_OAUTH = "OPEN_OAUTH", e.SEARCH_INSTITUTION = "SEARCH_INSTITUTION", e.SELECT_BRAND = "SELECT_BRAND", e.SELECT_INSTITUTION = "SELECT_INSTITUTION", e.SUBMIT_CREDENTIALS = "SUBMIT_CREDENTIALS", e.SUBMIT_MFA = "SUBMIT_MFA", e.TRANSITION_VIEW = "TRANSITION_VIEW"
    }(Oi || (Oi = {}));
    var Pi, Ri = ["US"],
      wi = ["auth"],
      Ni = new Set(["en", "es"]),
      Li = new Set(["ITEM_ERROR"]);
    class bi extends Ei {
      constructor(e, t) {
        if (super(t), this.tokenizeInProgress = !1, this.wasFirstInteractionCalled = !1, this.isDestroyed = !1, this.Plaid = e, !this.session.locationId) throw new En(Jr.INVALID_CONFIG, "locationId")
      }
      openPlaidLink(e) {
        var t = this.errorLogger,
          n = this.session,
          r = this.metricsHandler;
        this.handleFirstInteraction();
        var i = new Promise(((i, o) => {
          var s = y.windowNavigationLanguage.split("-")[0];
          Ni.has(s) || (s = "en"), this.plaidHandler = this.Plaid.create({
            clientName: "Square, Inc.",
            countryCodes: Ri,
            env: S.PLAID_LINK_ENV,
            language: s,
            onEvent: (e, r) => {
              e !== Oi.ERROR || Li.has(r.error_type) || t.captureException(new sr("PlaidErrorEvent: ".concat(JSON.stringify(r)), Ci.ACH), n.instanceId, n.sessionId), super.dispatchEvent(e, r)
            },
            onExit: (e, o) => {
              e && (r.logEvent(pr.ExternalSessionError), Li.has(e.error_type) || t.captureException(new sr("PlaidErrorOnExit: ".concat(JSON.stringify(e), ", Metadata: ").concat(o)), n.instanceId, n.sessionId)), this.tokenizeInProgress = !1, this.deleteHandler(), i({
                status: yi.CANCEL
              })
            },
            onSuccess(e, s) {
              if (!s || !s.accounts || !s.accounts[0]) {
                r.logEvent(pr.ExternalSessionError);
                var a = new Error("No account selected but expected account, metadata: ".concat(JSON.stringify(s)));
                return t.captureException(a, n.instanceId, n.sessionId), void o(a)
              }
              r.logEvent(pr.ExternalSessionOK), i({
                publicToken: e,
                selectedBankAccountId: s.accounts[0].id,
                status: yi.SUCCESS
              })
            },
            product: wi,
            token: e
          })
        }));
        return r.logEvent(pr.ExternalSessionStart), this.plaidHandler.open(), i
      }
      tokenize(e) {
        return Ti(this, void 0, void 0, (function*() {
          if (this.isDestroyed) throw new gn(Ci.ACH);
          if (this.tokenizeInProgress) throw new zn([Si]);
          if (!e || !e.accountHolderName) throw new on;
          this.tokenizeInProgress = !0;
          var t = yield this.createPlaidLinkSession(), n = yield this.openPlaidLink(t.plaidLinkToken);
          return n.status === yi.SUCCESS && n.publicToken && n.selectedBankAccountId ? this.requestAchBankNonce(e.accountHolderName, n.publicToken, n.selectedBankAccountId, t.gringottsSessionToken) : {
            status: mi.CANCEL
          }
        }))
      }
      destroy() {
        return this.isDestroyed = !0, this.handler && (this.handler.exit({
          force: !0
        }), this.handler.destroy(), this.deleteHandler()), Promise.resolve()
      }
      addEventListener(e, t) {
        super.addEventListener(e, t)
      }
      removeEventListener(e, t) {
        super.removeEventListener(e, t)
      }
      createPlaidLinkSession() {
        return Ti(this, void 0, void 0, (function*() {
          var e = this.session,
            t = {
              createPlaidLinkSessionRequest: {
                clientId: e.applicationId
              }
            };
          try {
            return yield this.messenger.request(_i.CREATE_PLAID_LINK_SESSION, {
              options: {
                paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
                session: e
              },
              payload: t
            })
          } catch (e) {
            throw this.tokenizeInProgress = !1, e
          }
        }))
      }
      requestAchBankNonce(e, t, n, r) {
        return Ti(this, void 0, void 0, (function*() {
          var i = {
              accountHolderName: e,
              gringottsSessionToken: r,
              plaidPublicToken: t,
              selectedPlaidBankAccountId: n
            },
            o = this.session,
            s = {
              bankNonceRequest: {
                clientId: o.applicationId,
                paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
                plaidLinkData: i,
                sessionId: o.sessionId,
                websdkVersion: S.VERSION,
                websiteUrl: o.sourceUrl
              }
            };
          try {
            var a = yield this.messenger.request(_i.REQUEST_ACH_BANK_NONCE, {
              options: {
                paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
                session: o
              },
              payload: s
            });
            return this.deleteHandler(), this.tokenizeInProgress = !1, this.context.setSessionId(a.sessionId), this.context.setPaymentMethodTrackingId(a.paymentMethodTrackingId), this.wasFirstInteractionCalled = !1, {
              details: {
                bankAccount: a.accountDetails,
                method: Ci.ACH
              },
              status: mi.OK,
              token: a.bankNonce
            }
          } catch (e) {
            throw this.deleteHandler(), this.tokenizeInProgress = !1, e instanceof zn ? e : new zn([Kn.UNKNOWN])
          }
        }))
      }
      get plaidHandler() {
        if (!this.handler) {
          var e = new sr("The plaid handler was not properly created.", Ci.ACH);
          throw this.errorLogger.captureException(e, this.session.instanceId, this.session.sessionId), new sn
        }
        return this.handler
      }
      set plaidHandler(e) {
        this.handler = e
      }
      deleteHandler() {
        delete this.handler
      }
      handleFirstInteraction() {
        this.wasFirstInteractionCalled || (this.wasFirstInteractionCalled = !0, this.metricsHandler.logEvent(hr.FirstInteraction))
      }
    }

    function Di(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (!e.redirectURI) throw new hn("redirectURI missing");
      if (!e.transactionId) throw new hn("transactionId missing");
      if (t) {
        if (!e.totalTransactionAmount) throw new hn("totalTransactionAmount required");
        if (!Number.isInteger(e.totalTransactionAmount.amount) || e.totalTransactionAmount.amount <= 0) throw new hn("totalTransactionAmount.amount must be a positive integer")
      }
    }

    function xi(e, t) {
      var n = e;
      return e instanceof r || (n = new r, t.captureException(e)), {
        errors: [n],
        status: mi.ERROR
      }
    }! function(e) {
      e.REQUEST_ALIPAY_PAY = "REQUEST_ALIPAY_PAY"
    }(Pi || (Pi = {}));
    var Mi;
    class Ui extends Ei {
      constructor(e, t) {
        if (super(e), !this.session.locationId) throw new hn("locationId must be provided for Alipay");
        if (this.locationId = this.session.locationId, Di(t, !0), this.redirectUri = t.redirectURI, this.totalTransactionAmount = t.totalTransactionAmount, t.transactionId.length > 64) throw new hn("transactionId too long. Should be less than ".concat(64, " characters."));
        this.transactionId = t.transactionId
      }
      tokenize() {
        return e = this, t = void 0, r = function*() {
          try {
            var e = yield this.fetchRedirectActionForm();
            return this.redirect(e), new Promise((() => {}))
          } catch (e) {
            return xi(e, this.context.errorLogger)
          }
        }, new((n = void 0) || (n = Promise))((function(i, o) {
          function s(e) {
            try {
              c(r.next(e))
            } catch (e) {
              o(e)
            }
          }

          function a(e) {
            try {
              c(r.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
              e(t)
            }))).then(s, a)
          }
          c((r = r.apply(e, t || [])).next())
        }));
        var e, t, n, r
      }
      fetchRedirectActionForm() {
        return this.messenger.request(Pi.REQUEST_ALIPAY_PAY, {
          options: {
            session: this.session
          },
          payload: {
            client_id: this.session.applicationId,
            location_id: this.locationId,
            redirect_uri: this.redirectUri,
            total_transaction_amount: {
              amount: this.totalTransactionAmount.amount,
              currency_code: this.totalTransactionAmount.currencyCode
            },
            transaction_id: this.transactionId
          }
        })
      }
      redirect(e) {
        var t = "alipay_".concat(this.transactionId),
          n = document.createElement("form");
        if (n.setAttribute("id", t), n.setAttribute("action", e.redirect_url), n.setAttribute("method", e.method), n.setAttribute("style", "display:none"), e.parameters.length > 0) {
          var r = JSON.parse(e.parameters);
          Object.keys(r).forEach((e => {
            var t = document.createElement("input");
            t.setAttribute("type", "hidden"), t.setAttribute("name", e), t.setAttribute("value", r[e]), n.appendChild(t)
          }))
        }
        y.documentBody.appendChild(n), y.submitForm(n)
      }
    }! function(e) {
      e.REQUEST_APPLE_PAY_CARD_NONCE = "REQUEST_APPLE_PAY_CARD_NONCE", e.REQUEST_APPLE_PAY_MERCHANT_VALIDITY = "REQUEST_APPLE_PAY_MERCHANT_VALIDITY"
    }(Mi || (Mi = {}));
    var ki, Hi = {
      AD: "Andorra",
      AE: "United Arab Emirates",
      AF: "Afghanistan",
      AG: "Antigua And Barbuda",
      AI: "Anguilla",
      AL: "Albania",
      AM: "Armenia",
      AO: "Angola",
      AQ: "Antarctica",
      AR: "Argentina",
      AS: "American Samoa",
      AT: "Austria",
      AU: "Australia",
      AW: "Aruba",
      AX: "Finland",
      AZ: "Azerbaijan",
      BA: "Bosnia And Herzegovina",
      BB: "Barbados",
      BD: "Bangladesh",
      BE: "Belgium",
      BF: "Burkina Faso",
      BG: "Bulgaria (rep.)",
      BH: "Bahrain",
      BI: "Burundi",
      BJ: "Benin",
      BL: "Saint Barthelemy",
      BM: "Bermuda",
      BN: "Brunei Darussalam",
      BO: "Bolivia",
      BQ: "Bonaire, Sint Eustatius, And Saba",
      BR: "Brazil",
      BS: "Bahamas",
      BT: "Bhutan",
      BV: "Bouvet Island",
      BW: "Botswana",
      BY: "Belarus",
      BZ: "Belize",
      CA: "Canada",
      CC: "Cocos (keeling) Islands",
      CD: "Congo (dem. Rep.)",
      CF: "Central African Republic",
      CG: "Congo (rep.)",
      CH: "Switzerland",
      CI: "Cote D'ivoire",
      CK: "Cook Islands",
      CL: "Chile",
      CM: "Cameroon",
      CN: "China",
      CO: "Colombia",
      CR: "Costa Rica",
      CV: "Cape Verde",
      CW: "Curacao",
      CX: "Christmas Island",
      CY: "Cyprus",
      CZ: "Czech Rep.",
      DE: "Germany",
      DJ: "Djibouti",
      DK: "Denmark",
      DM: "Dominica",
      DO: "Dominican Rep.",
      DZ: "Algeria",
      EC: "Ecuador",
      EE: "Estonia",
      EG: "Egypt",
      EH: "Western Sahara",
      ER: "Eritrea",
      ES: "Spain",
      ET: "Ethiopia",
      FI: "Finland",
      FJ: "Fiji",
      FK: "Falkland Islands (malvinas)",
      FM: "Micronesia (federated State Of)",
      FO: "Faroe Islands",
      FR: "France",
      GA: "Gabon",
      GB: "United Kingdom",
      GD: "Grenada (west Indies)",
      GE: "Georgia",
      GF: "French Guiana",
      GG: "Channel Islands",
      GH: "Ghana",
      GI: "Gibraltar",
      GL: "Greenland",
      GM: "Gambia",
      GN: "Guinea",
      GP: "Guadeloupe",
      GQ: "Equatorial Guinea",
      GR: "Greece",
      GS: "South Georgia",
      GT: "Guatemala",
      GU: "Guam",
      GW: "Guinea-bissau",
      GY: "Guyana",
      HK: "Hong Kong",
      HM: "Heard And Mcdonald Islands",
      HN: "Honduras",
      HR: "Croatia",
      HT: "Haiti",
      HU: "Hungary (rep.)",
      ID: "Indonesia",
      IE: "Ireland",
      IL: "Israel",
      IM: "Isle Of Man",
      IN: "India",
      IO: "British Indian Ocean Territory",
      IQ: "Iraq",
      IR: "Iran",
      IS: "Iceland",
      IT: "Italy",
      JE: "Channel Islands",
      JM: "Jamaica",
      JO: "Jordan",
      JP: "Japan",
      KE: "Kenya",
      KG: "Kyrgyzstan",
      KH: "Cambodia",
      KI: "Kiribati",
      KM: "Comoros",
      KN: "Saint Kitts And Nevis",
      KR: "South Korea",
      KW: "Kuwait",
      KY: "Cayman Islands",
      KZ: "Kazakhstan",
      LA: "Lao (people's Dem. Rep.)",
      LB: "Lebanon",
      LC: "Saint Lucia",
      LI: "Liechtenstein",
      LK: "Sri Lanka",
      LR: "Liberia",
      LS: "Lesotho",
      LT: "Lithuania",
      LU: "Luxembourg",
      LV: "Latvia",
      LY: "Libya",
      MA: "Morocco",
      MC: "Monaco",
      MD: "Rep. Moldova",
      ME: "Montenegro",
      MF: "Saint Martin",
      MG: "Madagascar",
      MH: "Marshall Islands",
      MK: "Macedonia",
      ML: "Mali",
      MM: "Myanmar",
      MN: "Mongolia",
      MO: "Macao",
      MP: "Northern Mariana Islands",
      MQ: "Martinique",
      MR: "Mauritania",
      MS: "Montserrat",
      MT: "Malta",
      MU: "Mauritius",
      MV: "Maldives",
      MW: "Malawi",
      MX: "Mexico",
      MY: "Malaysia",
      MZ: "Mozambique",
      NA: "Namibia",
      NC: "New Caledonia",
      NE: "Niger",
      NF: "Norfolk Island",
      NG: "Nigeria",
      NI: "Nicaragua",
      NL: "Netherlands",
      NO: "Norway",
      NP: "Nepal",
      NR: "Nauru Central Pacific",
      NU: "Niue",
      NZ: "New Zealand",
      OM: "Oman",
      PA: "Panama (rep.)",
      PE: "Peru",
      PF: "French Polynesia",
      PG: "Papua New Guinea",
      PH: "Philippines",
      PK: "Pakistan",
      PL: "Poland",
      PM: "St. Pierre And Miquelon",
      PN: "Pitcairn",
      PR: "Puerto Rico",
      PS: "Palestinian Territory",
      PT: "Portugal",
      PW: "Palau",
      PY: "Paraguay",
      QA: "Qatar",
      RE: "Reunion",
      RO: "Romania",
      RS: "Republic Of Serbia",
      RU: "Russian Federation",
      RW: "Rwanda",
      SA: "Saudi Arabia",
      SB: "Solomon Islands",
      SC: "Seychelles",
      SE: "Sweden",
      SG: "Rep. Of Singapore",
      SH: "Saint Helena",
      SI: "Slovenia",
      SJ: "Svalbard And Jan Mayen Islands",
      SK: "Slovakia",
      SL: "Sierra Leone",
      SM: "San Marino",
      SN: "Senegal",
      SO: "Somalia",
      SR: "Suriname",
      SS: "South Sudan",
      ST: "Sao Tome And Principe",
      SV: "El Salvador",
      SX: "Sint Maarten",
      SZ: "Swaziland",
      TC: "Turks And Caicos Islands",
      TD: "Chad",
      TF: "French Southern Territories",
      TG: "Togo",
      TH: "Thailand",
      TJ: "Tajikistan",
      TK: "Tokelau",
      TL: "Timor-leste",
      TM: "Turkmenistan",
      TN: "Tunisia",
      TO: "Tonga",
      TR: "Turkey",
      TT: "Trinidad And Tobago",
      TV: "Tuvalu",
      TW: "Taiwan",
      TZ: "Tanzania (united Rep.)",
      UA: "Ukraine",
      UG: "Uganda",
      UM: "United States Minor Outlying Islands",
      US: "United States",
      UY: "Uruguay",
      UZ: "Uzbekistan",
      VA: "Vatican",
      VC: "Saint Vincent And The Grenadines (antilles)",
      VE: "Venezuela",
      VG: "Virgin Islands (british)",
      VI: "Virgin Islands (u.s.)",
      VN: "Viet Nam",
      VU: "Vanuatu",
      WF: "Wallis And Futuna Islands",
      WS: "Samoa",
      YE: "Yemen",
      YT: "Mayotte",
      ZA: "South Africa",
      ZM: "Zambia",
      ZW: "Zimbabwe"
    };
    ! function(e) {
      e.PENDING = "pending", e.FINAL = "final"
    }(ki || (ki = {}));
    var Gi = {
        addressLines: "addressLines",
        city: "locality",
        country: "countryCode",
        postalCode: "postalCode",
        state: "administrativeArea"
      },
      Fi = ["visa", "masterCard", "jcb", "discover", "amex"];

    function Bi(e) {
      return {
        amount: e.amount,
        label: e.label,
        type: e.pending ? ki.PENDING : ki.FINAL
      }
    }

    function Vi(e) {
      return {
        amount: e.amount,
        detail: "",
        identifier: e.id,
        label: e.label
      }
    }

    function ji(e, t) {
      return t ? Bi(t) : e
    }

    function qi(e, t) {
      return t ? t.map(Bi) : e
    }

    function Yi(e, t) {
      return t ? t.map(Vi) : e
    }

    function Ki() {
      for (var e = 3; e > 0 && !window.ApplePaySession.supportsVersion(e);) e--;
      return e
    }

    function Wi(e) {
      var {
        addressLines: t,
        locality: n,
        administrativeArea: r,
        postalCode: i,
        countryCode: o,
        givenName: s,
        familyName: a,
        emailAddress: c,
        phoneNumber: l
      } = e;
      return {
        addressLines: t,
        city: n,
        countryCode: o && o.toUpperCase(),
        email: c,
        familyName: a,
        givenName: s,
        phone: l,
        postalCode: i,
        state: r
      }
    }

    function zi(e) {
      var t = Wi(e),
        {
          email: n,
          phone: r
        } = t;
      return function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
        }
        return n
      }(t, ["email", "phone"])
    }

    function Zi(e) {
      var {
        amount: t,
        identifier: n,
        label: r
      } = e;
      return {
        amount: t,
        id: n,
        label: r
      }
    }

    function Qi(e, t) {
      return {
        errors: (n = e, r = [], n.error && r.push(new window.ApplePayError("addressUnserviceable", "postalAddress", n.error)), n.shippingErrors && Object.entries(n.shippingErrors).forEach((e => {
          var [t, n] = e, i = Gi[t] || "postalAddress";
          r.push(new window.ApplePayError("shippingContactInvalid", i, n))
        })), r),
        newLineItems: qi(t.lineItems, e.lineItems),
        newShippingMethods: Yi(t.shippingMethods, e.shippingOptions),
        newTotal: ji(t.total, e.total)
      };
      var n, r
    }

    function Ji(e, t) {
      var n = Qi(e, t);
      return Object.assign({
        status: window.ApplePaySession.STATUS_SUCCESS
      }, n)
    }

    function Xi(e, t) {
      return {
        newLineItems: qi(t.lineItems, e.lineItems),
        newTotal: ji(t.total, e.total)
      }
    }

    function $i(e, t) {
      var n = Qi(e, t);
      return Object.assign({
        status: window.ApplePaySession.STATUS_SUCCESS
      }, n)
    }
    var eo, to, no, ro, io, oo, so, ao, co, lo, uo, ho, po, fo, go, mo, vo, Eo = function(e, t, n, r) {
      return new(n || (n = Promise))((function(i, o) {
        function s(e) {
          try {
            c(r.next(e))
          } catch (e) {
            o(e)
          }
        }

        function a(e) {
          try {
            c(r.throw(e))
          } catch (e) {
            o(e)
          }
        }

        function c(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
            e(t)
          }))).then(s, a)
        }
        c((r = r.apply(e, t || [])).next())
      }))
    };
    class _o extends Ei {
      constructor(e, t) {
        if (super(t), this.sessionInProgress = !1, this.wasFirstInteractionCalled = !1, this.isDestroyed = !1, this.req = e, void 0 === window.ApplePaySession) throw new En(Jr.APPLE_PAY_BROWSER_NOT_SUPPORTED);
        if (!window.ApplePaySession.canMakePayments()) throw new En(Jr.APPLE_PAY_DEVICE_NOT_SUPPORTED);
        this.validateConfiguration()
      }
      validateConfiguration() {
        var e = this.session;
        if (!e.applePayMerchantIdentifier) throw new En(Jr.INVALID_CONFIG, "applePayMerchantIdentifier");
        if (!e.locationId) throw new En(Jr.INVALID_CONFIG, "locationId")
      }
      tokenize() {
        return Eo(this, void 0, void 0, (function*() {
          if (this.handleFirstInteraction(), this.isDestroyed) throw new gn(Ci.APPLE_PAY);
          if (this.sessionInProgress) throw new zn([Si]);
          var e, t, n;
          this.applePayPaymentRequest = (e = this.req, n = {
            countryCode: e.countryCode,
            currencyCode: e.currencyCode,
            lineItems: qi([], e.lineItems),
            merchantCapabilities: ["supports3DS"],
            requiredBillingContactFields: ["postalAddress"],
            shippingMethods: Yi([], e.shippingOptions),
            supportedNetworks: Fi,
            total: Bi(e.total)
          }, e.shippingContact && (n.shippingContact = {
            addressLines: (t = e.shippingContact).addressLines,
            administrativeArea: t.state,
            country: Hi[t.countryCode],
            countryCode: t.countryCode,
            emailAddress: t.email,
            familyName: t.familyName,
            givenName: t.givenName,
            locality: t.city,
            phoneNumber: t.phone,
            postalCode: t.postalCode
          }), e.requestBillingContact && (n.requiredShippingContactFields = ["email", "name", "phone"]), e.requestShippingContact && (n.requiredShippingContactFields = ["postalAddress", "name", "email", "phone"]), n), this.applePaySession = new window.ApplePaySession(Ki(), this.applePayPaymentRequest), this.applePaySession.onshippingcontactselected = e => {
            this.shippingContactChanged(e.shippingContact, this.applePayPaymentRequest)
          }, this.applePaySession.onshippingmethodselected = e => {
            this.shippingOptionChanged(e.shippingMethod, this.applePayPaymentRequest)
          };
          var r = new Promise((e => {
              this.applePaySession.oncancel = () => {
                this.metricsHandler.logEvent(pr.ExternalSessionCancel), this.deleteApplePaySession(), e({
                  status: yi.CANCEL
                })
              }
            })),
            i = new Promise(((e, t) => {
              this.applePaySession.onvalidatemerchant = n => Eo(this, void 0, void 0, (function*() {
                try {
                  var r = yield this.requestApplePayMerchantValidity(n.validationURL, this.applePayPaymentRequest);
                  e(r)
                } catch (e) {
                  t(e)
                }
              }))
            })),
            o = new Promise(((e, t) => {
              this.applePaySession.onpaymentauthorized = n => Eo(this, void 0, void 0, (function*() {
                try {
                  var r = yield this.requestApplePayCardNonce(n);
                  this.deleteApplePaySession(), e(r)
                } catch (e) {
                  this.deleteApplePaySession(), t(e)
                }
              }))
            }));
          this.sessionInProgress = !0, this.metricsHandler.logEvent(pr.ExternalSessionStart), this.applePaySession.begin();
          try {
            var s = yield i;
            this.applePaySession.completeMerchantValidation(s);
            var {
              status: a,
              token: c,
              details: l
            } = yield Promise.race([o, r]);
            return this.metricsHandler.logEvent(pr.ExternalSessionOK), a === yi.SUCCESS ? {
              details: l,
              status: mi.OK,
              token: c
            } : {
              status: mi.CANCEL
            }
          } catch (e) {
            throw this.metricsHandler.logEvent(pr.ExternalSessionError), e
          }
        }))
      }
      destroy() {
        return this.isDestroyed = !0, this.sessionHandler && (this.sessionHandler.abort(), this.deleteApplePaySession()), Promise.resolve()
      }
      requestApplePayCardNonce(e) {
        return Eo(this, void 0, void 0, (function*() {
          var t = {
              applepayData: e.payment
            },
            n = this.session,
            r = this.selectedShippingMethod || this.getDefaultShippingMethod();
          try {
            var i = yield this.messenger.request(Mi.REQUEST_APPLE_PAY_CARD_NONCE, {
              options: {
                paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
                session: n
              },
              payload: t
            });
            return this.applePaySession.completePayment(window.ApplePaySession.STATUS_SUCCESS), this.context.setPaymentMethodTrackingId(i.paymentMethodTrackingId), this.wasFirstInteractionCalled = !1, this.context.setSessionId(i.sessionId),
              function(e, t) {
                var {
                  card: n,
                  cardNonce: r,
                  shippingContact: i
                } = e, o = n;
                o.billing && (o = Object.assign({}, o, {
                  billing: zi(o.billing)
                }));
                var s = {
                  details: {
                    card: o,
                    method: Ci.APPLE_PAY
                  },
                  status: yi.SUCCESS,
                  token: r
                };
                if (i) {
                  var a = {
                    contact: Wi(i)
                  };
                  t && (a.option = Zi(t)), s.details.shipping = a
                }
                return s
              }(i, r)
          } catch (e) {
            throw this.applePaySession.completePayment(window.ApplePaySession.STATUS_FAILURE), e instanceof zn || this.errorLogger.captureException(e, n.instanceId, n.sessionId), e
          }
        }))
      }
      requestApplePayMerchantValidity(e, t) {
        return Eo(this, void 0, void 0, (function*() {
          var n, r = t && t.total ? t.total.label : null,
            i = this.session,
            o = {
              clientId: i.applicationId,
              locationId: i.locationId,
              merchantName: r,
              sourceUrl: i.sourceUrl,
              validationUrl: e
            };
          try {
            n = yield this.messenger.request(Mi.REQUEST_APPLE_PAY_MERCHANT_VALIDITY, {
              options: {
                paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
                session: i
              },
              payload: o
            })
          } catch (e) {
            throw this.applePaySession.abort(), this.deleteApplePaySession(), e
          }
          try {
            return JSON.parse(n.session)
          } catch (e) {
            throw this.applePaySession.abort(), this.deleteApplePaySession(), this.errorLogger.captureException(new sr(e.message, Ci.APPLE_PAY), this.session.instanceId, this.session.sessionId), new Jn("parsing Apple Pay merchant validity")
          }
        }))
      }
      shippingContactChanged(e, t) {
        var n = Ki() >= 3 ? this.updateApplePayShippingContactV3(t) : this.updateApplePayShippingContactLegacy(t);
        this.req.hasEventListener(Ii.SHIPPING_CONTACT_CHANGED) ? this.req.dispatchEvent(Ii.SHIPPING_CONTACT_CHANGED, {
          contactOrOption: Wi(e)
        }, (e => {
          this.handleShippingContactUpdate(n, e)
        })) : this.handleShippingContactUpdate(n)
      }
      handleShippingContactUpdate(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = null === (t = n.shippingOptions) || void 0 === t ? void 0 : t[0],
          i = this.getDefaultShippingMethod();
        void 0 === r && null !== i && (r = Zi(i)), void 0 !== r && this.req.hasEventListener(Ii.SHIPPING_OPTION_CHANGED) ? (this.selectedShippingMethod = Vi(r), this.req.dispatchEvent(Ii.SHIPPING_OPTION_CHANGED, {
          contactOrOption: r
        }, (t => {
          e(Object.assign({}, n, t))
        }))) : e(n)
      }
      shippingOptionChanged(e, t) {
        this.selectedShippingMethod = e;
        var n = Ki() >= 3 ? this.updateApplePayShippingMethodV3(t) : this.updateApplePayShippingMethodLegacy(t);
        this.req.hasEventListener(Ii.SHIPPING_OPTION_CHANGED) ? this.req.dispatchEvent(Ii.SHIPPING_OPTION_CHANGED, {
          contactOrOption: Zi(e)
        }, n) : n()
      }
      updateApplePayPaymentRequest(e) {
        e.newTotal && (this.applePayPaymentRequest.total = e.newTotal), e.newLineItems && (this.applePayPaymentRequest.lineItems = e.newLineItems), e.newShippingMethods && (this.applePayPaymentRequest.shippingMethods = e.newShippingMethods)
      }
      updateApplePayShippingContactV3(e) {
        var t = this;
        return function() {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = Qi(n, e);
          t.updateApplePayPaymentRequest(r), t.metricsHandler.logEvent(pr.ShippingAddressChangeOK), t.applePaySession.completeShippingContactSelection(r)
        }
      }
      updateApplePayShippingContactLegacy(e) {
        var t = this;
        return function() {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = Ji(n, e);
          t.updateApplePayPaymentRequest(r), t.metricsHandler.logEvent(pr.ShippingAddressChangeOK), t.applePaySession.completeShippingContactSelection(r.status, r.newShippingMethods, r.newTotal, r.newLineItems)
        }
      }
      updateApplePayShippingMethodV3(e) {
        var t = this;
        return function() {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = Xi(n, e);
          t.updateApplePayPaymentRequest(r), t.metricsHandler.logEvent(pr.ShippingOptionChangeOK), t.applePaySession.completeShippingMethodSelection(r)
        }
      }
      updateApplePayShippingMethodLegacy(e) {
        var t = this;
        return function() {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = $i(n, e);
          t.updateApplePayPaymentRequest(r), t.metricsHandler.logEvent(pr.ShippingOptionChangeOK), t.applePaySession.completeShippingMethodSelection(r.status, r.newTotal, r.newLineItems)
        }
      }
      getDefaultShippingMethod() {
        var e = this.applePayPaymentRequest.shippingMethods;
        return e && e.length > 0 ? this.applePayPaymentRequest.shippingMethods[0] : null
      }
      get applePaySession() {
        if (!this.sessionHandler) {
          var e = "Apple Pay Session is expected to exist when it does not.";
          throw this.errorLogger.captureException(new sr(e, "Apple Pay"), this.session.instanceId, this.session.sessionId), new Jn(e)
        }
        return this.sessionHandler
      }
      set applePaySession(e) {
        this.sessionHandler = e
      }
      deleteApplePaySession() {
        delete this.sessionHandler, this.sessionInProgress = !1
      }
      handleFirstInteraction() {
        this.wasFirstInteractionCalled || (this.metricsHandler.logEvent(hr.FirstInteraction), this.wasFirstInteractionCalled = !0)
      }
    }(co = eo || (eo = {})).FOCUS_CLASS_ADDED = "focusClassAdded", co.FOCUS_CLASS_REMOVED = "focusClassRemoved", co.ERROR_CLASS_ADDED = "errorClassAdded", co.ERROR_CLASS_REMOVED = "errorClassRemoved", co.CARD_BRAND_CHANGED = "cardBrandChanged", co.POSTAL_CODE_CHANGED = "postalCodeChanged", co.ESCAPE = "escape", co.SUBMIT = "submit", (ao = to || (to = {})).CARD_NUMBER = "cardNumber", ao.CVV = "cvv", ao.EXPIRATION_DATE = "expirationDate", ao.POSTAL_CODE = "postalCode", (so = no || (no = {})).CARD_INPUT = "input", so.CARD_INPUT_FOCUS = "input.is-focus", so.CARD_INPUT_PLACEHOLDER = "input::placeholder", so.CARD_INPUT_FOCUS_PLACEHOLDER = "input.is-focus::placeholder", so.CARD_INPUT_ERROR = "input.is-error", so.CARD_INPUT_ERROR_PLACEHOLDER = "input.is-error::placeholder", so.CARD_COMPONENT = ".input-container", so.CARD_COMPONENT_FOCUS = ".input-container.is-focus", so.CARD_COMPONENT_ERROR = ".input-container.is-error", so.CARD_INPUT_HELPER_TEXT = ".message-text", so.CARD_INPUT_HELPER_ICON = ".message-icon", so.CARD_INPUT_ERROR_TEXT = ".message-text.is-error", so.CARD_INPUT_ERROR_ICON = ".message-icon.is-error", (ro || (ro = {})).GIFT_CARD_NUMBER = "giftCardNumber",
      function(e) {
        e.UNKNOWN = "Unknown"
      }(io || (io = {})),
      function(e) {
        e.GIFT = "Gift"
      }(oo || (oo = {}));
    class yo extends r {
      constructor(e) {
        super("".concat(e, " is not a valid field name. Valid field names are ").concat([...Object.values(to), ...Object.values(ro)].join(", "))), this.name = "InvalidFieldNameError", Object.setPrototypeOf(this, yo.prototype)
      }
    }
    class Co extends r {
      constructor(e) {
        super("Configuration property '".concat(e, "' does not exist")), this.name = "InvalidConfigurationPropertyError", Object.setPrototypeOf(this, Co.prototype)
      }
    }
    class Io extends r {
      constructor(e, t) {
        super("Configuration property '".concat(e, "' has an invalid value '").concat(t, "'")), this.name = "InvalidConfigurationValueError", Object.setPrototypeOf(this, Io.prototype)
      }
    }(po = lo || (lo = {})).CA = "CA", po.GB = "GB", po.US = "US", (ho = uo || (uo = {})).UNKNOWN = "unknown", ho.AMERICAN_EXPRESS = "americanExpress", ho.DISCOVER = "discover", ho.DISCOVER_DINERS = "discoverDiners", ho.JCB = "JCB", ho.MASTER_CARD = "masterCard", ho.UNION_PAY = "unionPay", ho.VISA = "visa", ho.SQUARE_GIFT_CARD_V2 = "squareGiftCardV2", ho.INTERAC = "interac", ho.SQUARE_CAPITAL_CARD = "squareCapitalCard", ho.EFTPOS = "eftpos", to.CARD_NUMBER, to.CVV, to.EXPIRATION_DATE, to.POSTAL_CODE, (vo = fo || (fo = {})).CARD_BRAND_CHANGED = "cardBrandChanged", vo.ERROR_CLASS_ADDED = "errorClassAdded", vo.ERROR_CLASS_REMOVED = "errorClassRemoved", vo.FOCUS_CLASS_ADDED = "focusClassAdded", vo.FOCUS_CLASS_REMOVED = "focusClassRemoved", vo.POSTAL_CODE_CHANGED = "postalCodeChanged", vo.SET_POSTAL_COUNTRY = "setPostalCountry", vo.ESCAPE = "escape", vo.SUBMIT = "submit", (mo = go || (go = {})).ERROR = "error", mo.FOCUS = "focus", mo.UNKNOWN = "unknown", mo.INITIAL = "initial";
    class Ao {
      constructor(e) {
        this.options = e
      }
      format(e) {
        for (var t = e.split(""), n = "", r = 0; t.length > 0;) n += this.options.delimiterPositions.includes(r) ? this.options.delimiter : t.shift(), r += 1;
        return n
      }
    }
    class So {
      constructor(e) {
        this.options = e
      }
      format(e) {
        var t = e;
        return void 0 !== this.options.regexp && void 0 !== this.options.replacement && (this.options.replacement, t = e.replace(this.options.regexp, this.options.replacement)), t.slice(0, this.options.maxLength)
      }
    }
    class Oo {
      getName() {
        return "LuhnValdator"
      }
      isValid(e) {
        var t = String(e).replace(/\D/g, "");
        if (!t) return !1;
        for (var n = 0, r = !1, i = t.length - 1; i >= 0; i--) {
          var o = Number.parseInt(t.charAt(i), 10);
          n += r ? Oo.luhnDigits[o] : o, r = !r
        }
        return n % 10 == 0
      }
    }
    Oo.luhnDigits = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
    var To, Po, Ro = new RegExp(/\D/g);
    new So({
        maxLength: 15,
        regexp: Ro,
        replacement: ""
      }), new So({
        maxLength: 19,
        regexp: Ro,
        replacement: ""
      }), new So({
        maxLength: 14,
        regexp: Ro,
        replacement: ""
      }), new So({
        maxLength: 16,
        regexp: Ro,
        replacement: ""
      }), new So({
        maxLength: 16,
        regexp: Ro,
        replacement: ""
      }), new So({
        maxLength: 16,
        regexp: Ro,
        replacement: ""
      }), new So({
        maxLength: 16,
        regexp: Ro,
        replacement: ""
      }), new So({
        maxLength: 19,
        regexp: Ro,
        replacement: ""
      }), new So({
        maxLength: 16,
        regexp: Ro,
        replacement: ""
      }), new So({
        maxLength: 255,
        regexp: new RegExp(/[^\dA-Za-z]/g),
        replacement: ""
      }), new So({
        maxLength: 19,
        regexp: Ro,
        replacement: ""
      }), new Ao({
        delimiter: " ",
        delimiterPositions: [4, 11]
      }), new Ao({
        delimiter: " ",
        delimiterPositions: [4, 9, 14]
      }), new Ao({
        delimiter: " ",
        delimiterPositions: [4, 11]
      }), new Ao({
        delimiter: " ",
        delimiterPositions: [4, 9, 14]
      }), new Ao({
        delimiter: " ",
        delimiterPositions: [4, 9, 14]
      }), new Ao({
        delimiter: " ",
        delimiterPositions: [4, 9, 14]
      }), new Ao({
        delimiter: " ",
        delimiterPositions: [4, 9, 14]
      }), new Ao({
        delimiter: " ",
        delimiterPositions: [4, 9, 14]
      }), new Ao({
        delimiter: " ",
        delimiterPositions: [4, 9, 14]
      }), new Ao({
        delimiter: " ",
        delimiterPositions: [4, 9, 14]
      }), S.GET_PRODUCT_INFORMATION_ENDPOINT,
      function(e) {
        e.en = "en", e.ja = "ja"
      }(To || (To = {})),
      function(e) {
        e.enUS = "en-US", e.jaJP = "ja-JP"
      }(Po || (Po = {}));
    var wo = {
        [To.en]: Po.enUS,
        [To.ja]: Po.jaJP
      },
      No = {
        en: {
          paymentMethods: {
            cards: {
              errors: {
                cardNumberError: "Enter a valid card number.",
                cvvError: "Enter a valid security code.",
                expirationDateError: "Enter a valid expiration date.",
                multipleErrors: "Fix the highlighted errors.",
                postalCodeErrors: {
                  CA: "Enter a valid postal code.",
                  GB: "Enter a valid postcode.",
                  US: "Enter a valid zip code."
                }
              },
              helperText: {
                cardNumber: "Enter your card number",
                cvv: "Enter the security code",
                expirationDate: "Enter the expiration date",
                postalCodes: {
                  CA: "Enter the postal code",
                  GB: "Enter the postcode",
                  US: "Enter the zip code"
                }
              },
              placeholderText: {
                cardNumber: "Card number",
                cvv: "CVV",
                expirationDate: "MM/YY",
                postalCodes: {
                  CA: "Postal Code",
                  GB: "Postcode",
                  US: "ZIP"
                }
              }
            },
            giftCards: {
              errors: {
                giftCardNumberError: "Enter a valid gift card number."
              },
              helperText: {
                giftCardNumber: "Enter your gift card number"
              },
              placeholderText: {
                giftCardNumber: "Gift card"
              }
            }
          }
        },
        ja: {
          paymentMethods: {
            cards: {
              errors: {
                cardNumberError: "æ­£ã—ã„ã‚«ãƒ¼ãƒ‰ç•ªå·ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚",
                cvvError: "æœ‰åŠ¹ãªã‚»ã‚­ãƒ¥ãƒªãƒ†ã‚£ã‚³ãƒ¼ãƒ‰ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚",
                expirationDateError: "æ­£ã—ã„æœ‰åŠ¹æœŸé™ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚",
                multipleErrors: "å¼·èª¿è¡¨ç¤ºã•ã‚ŒãŸã‚¨ãƒ©ãƒ¼ã‚’ä¿®æ­£ã—ã¦ãã ã•ã„ã€‚",
                postalCodeErrors: {
                  CA: "æ­£ã—ã„éƒµä¾¿ç•ªå·ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚",
                  GB: "æœ‰åŠ¹ãªéƒµä¾¿ç•ªå·ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚",
                  US: "æ­£ã—ã„ZIPã‚³ãƒ¼ãƒ‰ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚"
                }
              },
              helperText: {
                cardNumber: "ã‚«ãƒ¼ãƒ‰ç•ªå·ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„",
                cvv: "ã‚»ã‚­ãƒ¥ãƒªãƒ†ã‚£ã‚³ãƒ¼ãƒ‰ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„",
                expirationDate: "æœ‰åŠ¹æœŸé™ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„",
                postalCodes: {
                  CA: "éƒµä¾¿ç•ªå·ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„",
                  GB: "éƒµä¾¿ç•ªå·ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„",
                  US: "ZIPã‚³ãƒ¼ãƒ‰ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„"
                }
              },
              placeholderText: {
                cardNumber: "ã‚«ãƒ¼ãƒ‰ç•ªå·",
                cvv: "CVV",
                expirationDate: "MM/YY",
                postalCodes: {
                  CA: "éƒµä¾¿ç•ªå·",
                  GB: "éƒµä¾¿ç•ªå·",
                  US: "ZIP"
                }
              }
            },
            giftCards: {
              errors: {
                giftCardNumberError: "æœ‰åŠ¹ãªã‚®ãƒ•ãƒˆã‚«ãƒ¼ãƒ‰ç•ªå·ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚"
              },
              helperText: {
                giftCardNumber: "ã‚®ãƒ•ãƒˆã‚«ãƒ¼ãƒ‰ç•ªå·ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„"
              },
              placeholderText: {
                giftCardNumber: "ã‚®ãƒ•ãƒˆã‚«ãƒ¼ãƒ‰"
              }
            }
          }
        }
      },
      Lo = "en-US";
    class bo {
      constructor(e) {
        this.currentLocale = Lo;
        var t = this.getLanguageFromLocale(Lo);
        this.currentTranslations = No[t], this.setLocale(e)
      }
      setLocale(e) {
        var t = this.getLanguageFromLocale(e),
          n = this.getRegionFromLocale(e),
          r = this.currentLocale;
        if (!To[t]) return {
          message: "Locale ".concat(e, " is not supported. Language ").concat(t, " and region ").concat(n, " are both unsupported."),
          newLocale: this.currentLocale,
          previousLocale: r
        };
        var i = wo[t];
        this.currentLocale = i, this.currentTranslations = No[t];
        var o = this.getRegionFromLocale(this.currentLocale);
        return o && n && o.toLowerCase() !== n.toLowerCase() ? {
          message: "Locale ".concat(e, " is not supported. Language ").concat(t, " is supported, but region ").concat(n, " is not. Falling back to ").concat(this.currentLocale, "."),
          newLocale: this.currentLocale,
          previousLocale: r
        } : {
          newLocale: this.currentLocale,
          previousLocale: r
        }
      }
      getCurrentLocale() {
        return this.currentLocale
      }
      getLocaleString() {
        return this.currentTranslations
      }
      getLanguageFromLocale(e) {
        return e.split("-")[0]
      }
      getRegionFromLocale(e) {
        return e.split("-")[1]
      }
    }
    var Do = "sq-focus",
      xo = "sq-error",
      Mo = ".".concat(Do),
      Uo = ".".concat(xo),
      ko = "::placeholder";
    new sr("IFrame does not exist");
    var Ho, Go, Fo, Bo = ["borderColor", "borderRadius"],
      Vo = ["borderColor"],
      jo = ["color"],
      qo = ["color"];
    ! function(e) {
      e.UNKNOWN = "Unknown", e.AMERICAN_EXPRESS = "American Express", e.DINERS_CLUB = "Diners Club", e.DISCOVER = "Discover", e.JCB = "JCB", e.MASTERCARD = "Mastercard", e.UNION_PAY = "UnionPay", e.VISA = "Visa"
    }(Ho || (Ho = {})),
    function(e) {
      e.UNKNOWN_CARD_TYPE = "UNKNOWN_CARD_TYPE", e.CREDIT = "CREDIT", e.DEBIT = "DEBIT"
    }(Go || (Go = {})),
    function(e) {
      e.UNKNOWN_PAYMENT_TYPE = "UNKNOWN_PREPAID_TYPE", e.NOT_PREPAID = "NOT_PREPAID", e.PREPAID = "PREPAID"
    }(Fo || (Fo = {}));
    var Yo = /^\d+\/\d+$/,
      Ko = /^#([\dA-Fa-f]{3}|[\dA-Fa-f]{6})$/,
      Wo = /^-\d*\.?\d+em$/,
      zo = /^-\d*\.?\d+pt$/,
      Zo = /^-\d*\.?\d+px$/,
      Qo = /^\d*\.?\d+em$/,
      Jo = /^\d*\.?\d+%$/,
      Xo = /^\d*\.?\d+pt$/,
      $o = /^\d*\.?\d+px$/,
      es = /^\d*\.?\d+(?:dpi|dpcm|dppx|x)$/,
      ts = /^rgb\((\s*\d{1,3},){2}\s*\d{1,3}\)$/,
      ns = /^rgba\((\s*\d{1,3},){3}\s*(1|0*.\d*)\)$/,
      rs = /\s(?![^(]*\))/,
      is = new Set(["screen", "all", "print", "speech"]),
      os = new Set(["and"]),
      ss = new Set(["not", "only"]),
      as = new Set(["portrait", "landscape"]),
      cs = new Set(["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"]),
      ls = new Set(["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgrey", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgrey", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "transparent", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"]),
      us = new Set([100, 200, 300, 400, 500, 600, 700, 800, 900]),
      ds = new Set(["100", "200", "300", "400", "500", "600", "700", "800", "900", "normal", "bold", "bolder", "lighter"]),
      hs = new Set(["normal"]),
      ps = new Set(["smaller", "larger"]),
      fs = new Set(["andale mono", "arial", "arial black", "arial narrow", "arial rounded mt bold", "avant garde", "baskerville", "big caslon", "bodoni mt", "book antiqua", "brush script mt", "calibri", "calisto mt", "cambria", "candara", "century gothic", "charcoal", "comic sans ms", "consolas", "copperplate", "copperplate gothic light", "courier", "courier new", "cursive", "didot", "fantasy", "franklin gothic medium", "futura", "garamond", "geneva", "georgia", "gill sans", "goudy old style", "helvetica", "helvetica neue", "hoefler text", "impact", "lucida bright", "lucida console", "lucida grande", "lucida sans unicode", "lucida sans typewriter", "monaco", "monospace", "optima", "palatino", "palatino linotype", "papyrus", "perpetua", "rockwell", "rockwell extra bold", "sans-serif", "segoe ui", "serif", "square market", "tahoma", "times", "times new roman", "trebuchet ms", "verdana"]),
      gs = new Set(["none", "antialiased", "subpixel-antialiased"]),
      ms = new Set(["grayscale", "auto"]),
      vs = new Set(["none"]);

    function Es(e) {
      return null != e && e.split(/, ?(?![^(]*\))/).every((e => function(e) {
        if (null == e) return !1;
        if ("none" === e) return !0;
        var t = e.split(/ (?![^(]*\))/),
          n = 0;
        if ("inset" === t[0] && (t.shift(), n++), "inset" === t[t.length - 1]) {
          if (n > 0) return !1;
          t.pop()
        }
        for (var r = 0; r < 2; r++) {
          var i = t.shift();
          if (void 0 === i || !Cs(i)) return !1
        }
        switch (t.length) {
          case 0:
            return !0;
          case 1:
            return Ss(t[0]) || As(t[0]);
          case 2:
            return As(t[0]) && (Ss(t[1]) || Is(t[1]));
          case 3:
            return As(t[0]) && Is(t[1]) && Ss(t[2]);
          default:
            return !1
        }
      }(e)))
    }

    function _s(e) {
      return ["border-box", "content-box"].includes(e)
    }

    function ys(e) {
      return e.split(" ").every((e => function(e) {
        return 0 === Number(e) || Us(e) || Hs(e)
      }(e)))
    }

    function Cs(e) {
      return 0 === Number(e) || Ms(e) || ks(e)
    }

    function Is(e) {
      return 0 === Number(e) || Ms(e) || ks(e)
    }

    function As(e) {
      return 0 === Number(e) || Us(e) || Hs(e)
    }

    function Ss(e) {
      return null != e && (function(e) {
        return ls.has(e.toLowerCase())
      }(e) || function(e) {
        return Ko.test(e)
      }(e) || function(e) {
        return ts.test(e)
      }(e) || function(e) {
        return ns.test(e)
      }(e))
    }

    function Os(e) {
      return null != e && (function(e) {
        return cs.has(e.toLowerCase())
      }(e) || function(e) {
        return ps.has(e.toLowerCase())
      }(e) || Us(e) || Gs(e) || Hs(e) || Fs(e))
    }

    function Ts(e) {
      return null !== e && e.split(", ").every((e => {
        return t = e.toLowerCase().trim().replace(/["']+/g, ""), fs.has(t);
        var t
      }))
    }

    function Ps(e) {
      var t = Number(e);
      return Number.isNaN(t) ? ds.has(e.toLowerCase()) : us.has(t)
    }

    function Rs(e) {
      return "normal" === e || ks(e) || function(e) {
        return Gs(e) || function(e) {
          return zo.test(e)
        }(e)
      }(e) || Ms(e)
    }

    function ws(e) {
      var t = Number(e);
      return !Number.isNaN(t) && t >= 0 || hs.has(e) || Hs(e) || Us(e) || Gs(e) || Fs(e)
    }

    function Ns(e) {
      return gs.has(e)
    }

    function Ls(e) {
      return ms.has(e)
    }

    function bs(e) {
      return vs.has(e)
    }

    function Ds(e) {
      if (null === e) return !1;
      var t = e.toString().split(" ");
      return !(t.length > 4) && t.every((e => function(e) {
        return Us(e) || Hs(e) || Fs(e) || 0 === Number(e)
      }(e)))
    }

    function xs(e) {
      if (!e.startsWith("(") || !e.endsWith(")")) return !1;
      var t = e.slice(1, -1),
        [n, r] = t.split(/: */);
      switch (n) {
        case "width":
        case "min-width":
        case "max-width":
        case "height":
        case "min-height":
        case "max-height":
        case "device-width":
        case "min-device-width":
        case "max-device-width":
        case "device-height":
        case "min-device-height":
        case "max-device-height":
          return Us(r) || Hs(r) || Fs(r);
        case "resolution":
        case "min-resolution":
        case "max-resolution":
          return function(e) {
            return es.test(e)
          }(r);
        case "aspect-ratio":
        case "min-aspect-ratio":
        case "max-aspect-ratio":
        case "device-aspect-ratio":
        case "min-device-aspect-ratio":
        case "max-device-aspect-ratio":
          return function(e) {
            return Yo.test(e)
          }(r);
        case "color":
        case "color-index":
        case "monochrome":
          return void 0 === r;
        case "min-color":
        case "max-color":
        case "min-color-index":
        case "max-color-index":
        case "min-monochrome":
        case "max-monochrome":
          return function(e) {
            return Number(e) >= 0
          }(r);
        case "orientation":
          return function(e) {
            return as.has(e)
          }(r);
        default:
          return !1
      }
    }

    function Ms(e) {
      return Us(e) || function(e) {
        return Zo.test(e)
      }(e)
    }

    function Us(e) {
      return $o.test(e)
    }

    function ks(e) {
      return Hs(e) || function(e) {
        return Wo.test(e)
      }(e)
    }

    function Hs(e) {
      return Qo.test(e)
    }

    function Gs(e) {
      return Xo.test(e)
    }

    function Fs(e) {
      return Jo.test(e)
    }
    var Bs = function(e, t) {
        var n = (e => {
          switch (e) {
            case "border-color":
            case "background-color":
            case "color":
            case "-webkit-text-fill-color":
              return Ss;
            case "-webkit-box-shadow":
            case "box-shadow":
              return Es;
            case "box-sizing":
              return _s;
            case "font-family":
              return Ts;
            case "font-size":
              return Os;
            case "font-weight":
              return Ps;
            case "letter-spacing":
              return Rs;
            case "line-height":
              return ws;
            case "padding":
              return Ds;
            case "-webkit-font-smoothing":
              return Ns;
            case "-moz-osx-font-smoothing":
              return Ls;
            case "display":
              return bs;
            case "border-radius":
              return ys;
            default:
              return
          }
        })(e);
        return n && n(t) || function(e) {
          return ["unset", "inherit", "revert", "initial"].includes(e)
        }(t) ? t : ""
      },
      Vs = function(e) {
        return !!(t = e).startsWith("@media") && t.slice("@media".length + 1, t.length).split(/, */).every((e => {
          var t = e.split(rs);
          if (0 === t.length) return !1;
          var n = 0;
          if (!t[0].startsWith("(")) {
            var r = 0;
            if (ss.has(t[0]) && (r = 1), t.length === r + 1) return is.has(t[r]);
            if (!is.has(t[r]) || !os.has(t[r + 1])) return !1;
            n = 2 + r
          }
          if ((t.length - n) % 2 == 0) return !1;
          for (var [i, o] of Object.entries(t.slice(n)))
            if (!(Number(i) % 2 == 0 ? xs(o) : os.has(o))) return !1;
          return !0
        }));
        var t
      };

    function js(e, t, n) {
      var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (n.length > 0) {
        var i = n.includes(e);
        if (!i) throw new yn(e)
      }
      var o = Fn(e),
        s = Bs(o, t);
      if (0 === s.length) throw new Cn(e, t);
      return r && (s += " !important"), Bn(o, s)
    }

    function qs(e, t, n) {
      var r = [],
        i = [];
      for (var [o, s] of Object.entries(t)) {
        var a = s || "";
        try {
          r.push(js(o, a, n))
        } catch (e) {
          i.push(e)
        }
      }
      if (i.length > 0) throw new An(i);
      return e.reduce((function(e, t) {
        return Object.assign({}, e, {
          [t]: r
        })
      }), {})
    }

    function Ys(e, t, n) {
      var r = {},
        i = [];
      if (e.forEach((function(e) {
          var {
            property: o,
            setAsImportant: s,
            toProperty: a,
            toSelectors: c,
            transformPropertyValue: l
          } = e, u = t[o];
          if (u) {
            var d = l ? l(u) : u;
            try {
              var h = js(a || o, d, a ? n.concat(a) : n, s);
              c.forEach((e => {
                r[e] || (r[e] = []), r[e].push(h)
              }))
            } catch (e) {
              i.push(e)
            }
          }
        })), i.length > 0) throw new An(i);
      return r
    }

    function Ks(e) {
      var t = [];
      for (var [n, r] of Object.entries(e)) r && r.length > 0 && t.push("\n      ".concat(n, " { ").concat(r.join(" "), " }\n      "));
      return t.join("")
    }

    function Ws(e, t) {
      return !t && Vs(e)
    }
    var zs = function e(t, n, r) {
        var i, o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          s = [],
          a = [...Object.keys(n.selectorMappings), ...Object.keys(n.selectorPropertyMappings || {})],
          c = new Set(a),
          l = new Set(Object.values(r));
        Object.keys(t).forEach((e => {
          l.has(e) || Ws(e, o) || s.push(new In(e))
        }));
        var u = {};

        function d(e) {
          for (var [t, n] of Object.entries(e)) u[t] || (u[t] = []), u[t].push(...n)
        }
        for (var h of [...c]) {
          var p = t[h],
            f = n.allowedAttributes[h] || [],
            g = n.selectorMappings[h] || [],
            m = (null === (i = null == n ? void 0 : n.selectorPropertyMappings) || void 0 === i ? void 0 : i[h]) || [];
          if (p) {
            try {
              var v = qs(g, p, f);
              d(v)
            } catch (e) {
              e instanceof An && s.push(...e.errors)
            }
            try {
              var E = Ys(m, p, f);
              d(E)
            } catch (e) {
              e instanceof An && s.push(...e.errors)
            }
          }
        }
        var _ = Object.keys(t).filter((e => !c.has(e) && Vs(e)));
        if (_.forEach((i => {
            try {
              var o = e(t[i], n, r, !0);
              u[i] = [o]
            } catch (e) {
              s.push(...e.errors)
            }
          })), s.length > 0) throw new An(s);
        return Ks(u)
      },
      Zs = "sq-card-iframe-container",
      Qs = "sq-card-wrapper",
      Js = "sq-card-component",
      Xs = "sq-card-message",
      $s = "sq-card-message-error",
      ea = "sq-card-message-no-error",
      ta = "sq-visible",
      na = ".".concat(Qs),
      ra = ".".concat(Js),
      ia = ".".concat(Zs),
      oa = "".concat(na).concat(Mo),
      sa = "".concat(na).concat(Uo),
      aa = "".concat(na, " ").concat(ra),
      ca = "".concat(oa, " ").concat(ra),
      la = "".concat(sa, " ").concat(ra),
      ua = "input",
      da = "form",
      ha = "label",
      pa = ".sq-background-text",
      fa = ".sq-visible-background-text",
      ga = ".sq-card-message-error::before",
      ma = ".sq-card-message-no-error::before",
      va = "".concat(ia).concat("::before"),
      Ea = "".concat(da).concat(Mo),
      _a = "".concat(da).concat(Uo),
      ya = ("".concat(Ea, " ").concat(ua), "".concat(ua).concat(Uo), "".concat(Ea, " ").concat(ua).concat(ko), "".concat(_a, " ").concat(ua).concat(Uo).concat(ko), "".concat(da, " ").concat(ua).concat(ko), "".concat(da, " ").concat(pa));
    "".concat(ya, " ").concat(fa), "".concat(Ea, " ").concat(ha), "".concat(_a, " ").concat(ua).concat(Uo, " ~ ").concat(ha), "".concat(Ea, " ").concat(pa, " ").concat(fa), "".concat(_a, " ").concat(ua).concat(Uo, " ~ ").concat(pa, " ").concat(fa), "".concat(da, " ").concat("#card-number-wrapper");

    function Ca(e, t) {
      return zs(e, function(e) {
        var t = "#".concat(e);
        return {
          allowedAttributes: {
            [no.CARD_COMPONENT]: Bo,
            [no.CARD_COMPONENT_FOCUS]: Vo,
            [no.CARD_COMPONENT_ERROR]: Vo,
            [no.CARD_INPUT_HELPER_TEXT]: jo,
            [no.CARD_INPUT_HELPER_ICON]: qo,
            [no.CARD_INPUT_ERROR_TEXT]: jo,
            [no.CARD_INPUT_ERROR_ICON]: qo
          },
          selectorMappings: {
            [no.CARD_COMPONENT]: ["".concat(t).concat(aa)],
            [no.CARD_COMPONENT_FOCUS]: ["".concat(t).concat(ca)],
            [no.CARD_COMPONENT_ERROR]: ["".concat(t).concat(la)],
            [no.CARD_INPUT_HELPER_TEXT]: ["".concat(t, " ").concat(".sq-card-message-no-error")],
            [no.CARD_INPUT_HELPER_ICON]: ["".concat(t, " ").concat(ma)],
            [no.CARD_INPUT_ERROR_TEXT]: ["".concat(t, " ").concat(".sq-card-message-error")],
            [no.CARD_INPUT_ERROR_ICON]: ["".concat(t, " ").concat(ga)]
          },
          selectorPropertyMappings: {
            [no.CARD_COMPONENT]: [{
              property: "borderRadius",
              toSelectors: ["".concat(t, " ").concat(va)]
            }],
            [no.CARD_COMPONENT_ERROR]: [{
              property: "borderColor",
              toSelectors: ["".concat(t).concat(Uo, " ").concat(va)]
            }],
            [no.CARD_COMPONENT_FOCUS]: [{
              property: "borderColor",
              toSelectors: ["".concat(t).concat(Mo, " ").concat(va)]
            }],
            [no.CARD_INPUT_ERROR_ICON]: [{
              property: "color",
              toProperty: "backgroundColor",
              toSelectors: ["".concat(t, " ").concat(ga)]
            }],
            [no.CARD_INPUT_HELPER_ICON]: [{
              property: "color",
              toProperty: "backgroundColor",
              toSelectors: ["".concat(t, " ").concat(ma)]
            }]
          }
        }
      }(t), no)
    }
    no.CARD_INPUT, no.CARD_INPUT_FOCUS, no.CARD_INPUT_ERROR, no.CARD_INPUT_PLACEHOLDER, no.CARD_INPUT_FOCUS_PLACEHOLDER, no.CARD_INPUT_ERROR_PLACEHOLDER, no.CARD_INPUT, no.CARD_INPUT_FOCUS, no.CARD_INPUT_ERROR, no.CARD_INPUT_FOCUS_PLACEHOLDER, no.CARD_INPUT_ERROR_PLACEHOLDER, no.CARD_INPUT_PLACEHOLDER, no.CARD_COMPONENT, no.CARD_INPUT, no.CARD_INPUT_PLACEHOLDER, no.CARD_INPUT_FOCUS_PLACEHOLDER, no.CARD_INPUT_ERROR_PLACEHOLDER;
    var Ia = "background-text";
    "sq-".concat(Ia), "sq-hidden-".concat(Ia), "sq-visible-".concat(Ia), to.CARD_NUMBER, "0".repeat(24), to.EXPIRATION_DATE, "0".repeat(4), to.CVV, "0".repeat(4), to.POSTAL_CODE;
    var Aa, Sa = [yn, Cn, In, An, pn, Jn],
      Oa = [fn, In, yn, Cn, An];
    ! function(e) {
      e.ANALYTICS_TOKEN = "_analyticsToken", e.LOCALE = "_locale", e.SESSION_ID = "_sessionId"
    }(Aa || (Aa = {}));
    class Ta {
      constructor(e) {
        var {
          applePayMerchantIdentifier: t,
          applicationId: n,
          avt: r,
          hostname: i,
          locationId: o,
          instanceId: s,
          sessionId: a,
          sourceUrl: c,
          locale: l
        } = e;
        this.applicationId = n, this.locationId = o, this._sessionId = a, this.instanceId = s, this.applePayMerchantIdentifier = t, this.hostname = i, this.sourceUrl = c, this._locale = l, this.avt = r
      }
      setSessionId(e) {
        this.setAttribute(Aa.SESSION_ID, e)
      }
      setLocale(e) {
        this.setAttribute(Aa.LOCALE, e)
      }
      get sessionId() {
        return this._sessionId
      }
      setAnalyticsToken(e) {
        this.setAttribute(Aa.ANALYTICS_TOKEN, e)
      }
      get analyticsToken() {
        return this._analyticsToken
      }
      serialize() {
        return this.serialized || (this.serialized = {
          applePayMerchantIdentifier: this.applePayMerchantIdentifier || "",
          applicationId: this.applicationId,
          avt: this.avt,
          hostname: this.hostname,
          instanceId: this.instanceId,
          locale: this._locale,
          locationId: this.locationId,
          sessionId: this._sessionId,
          sourceUrl: this.sourceUrl
        }, this._analyticsToken && (this.serialized.analyticsToken = this._analyticsToken)), this.serialized
      }
      setAttribute(e, t) {
        this[e] = t, this.serialized = void 0
      }
    }
    S.CARD_NONCE_ENDPOINT;
    var Pa, Ra = [zn, fn],
      wa = function(e, t) {
        var n = document.createElement("iframe");
        return new Promise(((r, i) => {
          n.onerror = e => {
            i(e)
          }, n.onload = () => {
            r(n)
          }, Object.entries(e).forEach((e => {
            var [t, r] = e;
            n.setAttribute(t, r)
          })), t ? t.appendChild(n) : document.body.appendChild(n)
        }))
      },
      Na = function(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
      };
    ! function(e) {
      e.CONFIGURE = "configure", e.DESTROY = "destroy", e.LOAD_CARDS_FORM = "loadCardsForm", e.REQUEST_CARD_NONCE_IF_VALID_FORM = "requestCardNonceIfValidForm", e.SET_FOCUS = "setFocus"
    }(Pa || (Pa = {}));
    var La = new Set(["DIV", "SPAN"]);

    function ba(e, t) {
      var n;
      if ("string" == typeof e) {
        if (!(n = document.querySelector(e))) throw t.logEvent(hr.AttachError), new cn(e)
      } else {
        if (!(e instanceof HTMLElement)) throw new mn(e, La);
        if (n = e, !document.contains(n)) throw t.logEvent(hr.AttachError), new cn(n)
      }
      if (!La.has(n.nodeName)) throw new mn(n, La);
      return n
    }
    class Da {
      constructor(e) {
        this.id = ii(), this.context = e
      }
      request(e, t) {
        var n = {
          paymentMethodInstanceId: this.id,
          paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
          session: this.context.getSession()
        };
        return this.context.messenger.request(e, {
          options: n,
          payload: t
        })
      }
      initializeMessageBus(e) {
        var t = this,
          n = function(e, n) {
            t.context.messenger.onMessage({
              listener(e) {
                n(e)
              },
              messageType: "".concat(e, ":").concat(t.id)
            })
          };
        for (var [r, i] of Object.entries(e)) n(r, i)
      }
    }
    var xa = {
        addStyleElement: function(e, t, n, r) {
          if (xa.hasExistingStyleElement(t)) n && n();
          else {
            var i = document.createElement("link");
            n && (i.onload = n), r && (i.onerror = t => {
              r(new Error("Failed to load stylesheet at ".concat(e, ". The onerror callback was invoked.")))
            }), i.href = e, i.rel = "stylesheet", i.type = "text/css", i.id = t, document.head.appendChild(i)
          }
        },
        hasExistingStyleElement: function(e) {
          return Boolean(document.getElementById(e))
        }
      },
      Ma = xa,
      Ua = function(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
          function s(e) {
            try {
              c(r.next(e))
            } catch (e) {
              o(e)
            }
          }

          function a(e) {
            try {
              c(r.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
              e(t)
            }))).then(s, a)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      },
      ka = "emptyMessage",
      Ha = [to.CARD_NUMBER, to.EXPIRATION_DATE, to.CVV, to.POSTAL_CODE];

    function Ga(e) {
      return "".concat("single-card-wrapper", "-").concat(e)
    }

    function Fa(e, t) {
      var n = function(e) {
          return "".concat("sq-single-card-custom-styles", "-").concat(e)
        }(t),
        r = document.getElementById(n);
      null === r && ((r = document.createElement("style")).id = n, document.head.appendChild(r)), r.innerHTML = Ca(e, Ga(t))
    }
    var Ba = class extends Ei {
      constructor(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(e), this.postalCountry = lo.US, this.attached = !1, this.id = ii(), this.iframeName = "".concat("single-card", "-").concat(this.id), this.paymentMessenger = new Da(this.context), this.tokenizeInProcess = !1, this.inputLabelsIncluded = Boolean(t.includeInputLabels), this.initializeMessageBus(), this.errorList = new Set, this.updateCardDetailText = this.updateCardDetailText.bind(this), this.context.addLocaleChangedListener(this.updateCardDetailText), this.validateOptions(t), this.initialOptions = t, this.stylesLoadedPromise = new Promise(((e, t) => {
          this.resolveStylePromise = e, this.rejectStylePromise = t
        }))
      }
      configure() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Ua(this, void 0, void 0, (function*() {
          this.validateOptions(e), void 0 !== e.includeInputLabels && (this.inputLabelsIncluded = Boolean(e.includeInputLabels), this.onResize()), void 0 !== e.style && Fa(e.style, this.id);
          try {
            return yield this.paymentMessenger.request(Pa.CONFIGURE, {
              includeInputLabels: this.inputLabelsIncluded,
              postalCode: e.postalCode,
              style: e.style,
              type: Ci.CARD
            }), Promise.resolve()
          } catch (e) {
            if (Vn(e, Oa)) throw e;
            throw this.errorLogger.captureException(e, this.session.instanceId, this.session.sessionId), new Jn("configuring the Card Element")
          }
        }))
      }
      validateOptions(e) {
        var t = {
          includeInputLabels: e => "boolean" == typeof e,
          postalCode: e => "string" == typeof e,
          style: e => "object" == typeof e
        };
        Object.entries(e).forEach((e => {
          var [n, r] = e;
          if (void 0 === t[n]) throw new Co(n);
          if (t[n] && !t[n](r)) throw new Io(n, r)
        }))
      }
      destroy() {
        return Ua(this, void 0, void 0, (function*() {
          this.context.removeLocaleChangedListener(this.updateCardDetailText);
          var e = yield this.paymentMessenger.request(Pa.DESTROY);
          return this.element && (Na(this.element), window.removeEventListener("resize", this.onResize.bind(this))), this.attached = !1, e
        }))
      }
      attach(e) {
        return Ua(this, void 0, void 0, (function*() {
          if (this.attached) throw new pn(Ci.CARD);
          this.attached = !0, this.metricsHandler.logEvent(hr.AttachStart);
          var t = ba(e, this.metricsHandler);
          try {
            return yield this.buildCardElement(t), yield this.paymentMessenger.request(Pa.LOAD_CARDS_FORM, {
              configuration: Object.assign(Object.assign({}, this.initialOptions), {
                type: Ci.CARD
              }),
              iframeName: this.iframeName
            }), yield this.stylesLoadedPromise, this.element = t, window.addEventListener("resize", this.onResize.bind(this)), this.showCardElement(), this.onResize(), this.metricsHandler.logEvent(hr.AttachOK), Promise.resolve()
          } catch (e) {
            if (this.attached = !1, this.metricsHandler.logEvent(hr.AttachError), Vn(e, Sa)) throw e;
            throw this.errorLogger.captureException(e, this.session.instanceId, this.session.sessionId), new Jn("attaching the Card Element")
          }
        }))
      }
      recalculateSize() {
        if (!this.attached) throw new fn(Ci.CARD);
        this.onResize()
      }
      buildErrorMessage(e) {
        switch (e) {
          case to.CARD_NUMBER:
            return this.context.getLocaleString().paymentMethods.cards.errors.cardNumberError;
          case to.CVV:
            return this.context.getLocaleString().paymentMethods.cards.errors.cvvError;
          case to.EXPIRATION_DATE:
            return this.context.getLocaleString().paymentMethods.cards.errors.expirationDateError;
          case to.POSTAL_CODE:
            return this.context.getLocaleString().paymentMethods.cards.errors.postalCodeErrors[this.postalCountry];
          case ka:
          default:
            return ""
        }
      }
      buildHelperMessage(e) {
        switch (e) {
          case to.CARD_NUMBER:
            return this.context.getLocaleString().paymentMethods.cards.helperText.cardNumber;
          case to.CVV:
            return this.context.getLocaleString().paymentMethods.cards.helperText.cvv;
          case to.EXPIRATION_DATE:
            return this.context.getLocaleString().paymentMethods.cards.helperText.expirationDate;
          case to.POSTAL_CODE:
            return this.context.getLocaleString().paymentMethods.cards.helperText.postalCodes[this.postalCountry];
          case ka:
          default:
            return ""
        }
      }
      focus(e) {
        return Ua(this, void 0, void 0, (function*() {
          if (!Object.values(to).includes(e)) throw new yo(e);
          try {
            return yield this.paymentMessenger.request(Pa.SET_FOCUS, {
              field: e
            })
          } catch (e) {
            this.errorLogger.captureException(e, this.session.instanceId, this.session.sessionId)
          }
          return !1
        }))
      }
      addEventListener(e, t) {
        super.addEventListener(e, t)
      }
      removeEventListener(e, t) {
        super.removeEventListener(e, t)
      }
      tokenize() {
        return Ua(this, void 0, void 0, (function*() {
          if (this.tokenizeInProcess) throw new zn([Si]);
          this.tokenizeInProcess = !0;
          try {
            var e = yield this.paymentMessenger.request(Pa.REQUEST_CARD_NONCE_IF_VALID_FORM, {
              type: Ci.CARD
            });
            return this.tokenizeInProcess = !1, this.context.setPaymentMethodTrackingId(e.paymentMethodTrackingId), this.context.setSessionId(e.sessionId),
              function(e) {
                var {
                  card: t,
                  cardNonce: n
                } = e;
                return {
                  details: {
                    card: t,
                    method: Ci.CARD
                  },
                  status: mi.OK,
                  token: n
                }
              }(e)
          } catch (e) {
            if (this.tokenizeInProcess = !1, e instanceof Qn) return {
              errors: e.errors,
              status: mi.INVALID
            };
            throw Vn(e, Ra) ? e : (this.errorLogger.captureException(e, this.session.instanceId, this.session.sessionId), Zn())
          }
        }))
      }
      updateCardDetailText() {
        var e, t, n;
        this.cardDetail && (0 === this.errorList.size ? (t = null !== (e = this.focusedInput) && void 0 !== e ? e : ka, n = this.buildHelperMessage(t), this.cardDetail.classList.remove($s), this.cardDetail.classList.add(ea)) : (t = Ha.find((e => this.errorList.has(e))) || ka, n = this.buildErrorMessage(t), this.cardDetail.classList.add($s), this.cardDetail.classList.remove(ea)), this.cardDetail.textContent !== n && (this.cardDetail.textContent = n), n.length > 0 ? this.cardDetail.classList.add(ta) : this.cardDetail.classList.remove(ta))
      }
      addErrorMessage(e) {
        this.errorList.add(e), this.updateCardDetailText()
      }
      removeErrorMessage(e) {
        this.errorList.has(e) && (this.errorList.delete(e), this.updateCardDetailText())
      }
      addFocusMessage(e) {
        this.focusedInput = e, this.updateCardDetailText()
      }
      removeFocusMessage(e) {
        this.focusedInput === e && (this.focusedInput = null), setTimeout((() => {
          null === this.focusedInput && this.updateCardDetailText()
        }), 50)
      }
      removeFocusClass() {
        setTimeout((() => {
          var e;
          this.focusedInput || null === (e = this.wrapperElement) || void 0 === e || e.classList.remove(Do)
        }), 50)
      }
      removeErrorClass() {
        var e;
        0 === this.errorList.size && (null === (e = this.wrapperElement) || void 0 === e || e.classList.remove(xo))
      }
      handleInputEvent(e) {
        var t, n, {
            data: r
          } = e,
          i = r.payload;
        switch (i.eventType) {
          case eo.ERROR_CLASS_ADDED:
            this.addErrorMessage(i.field), null === (t = this.wrapperElement) || void 0 === t || t.classList.add(xo);
            break;
          case eo.ERROR_CLASS_REMOVED:
            this.removeErrorMessage(i.field), this.removeErrorClass();
            break;
          case eo.FOCUS_CLASS_ADDED:
            this.addFocusMessage(i.field), null === (n = this.wrapperElement) || void 0 === n || n.classList.add(Do);
            break;
          case eo.FOCUS_CLASS_REMOVED:
            this.removeFocusMessage(i.field), this.removeFocusClass()
        }
        super.dispatchEvent(i.eventType, i)
      }
      handleSetPostalCountry(e) {
        var {
          data: t
        } = e;
        this.postalCountry = t.payload.postalCountry
      }
      initializeMessageBus() {
        var e = this.handleInputEvent.bind(this),
          t = this.handleSetPostalCountry.bind(this),
          n = {
            [fo.SET_POSTAL_COUNTRY]: t,
            [fo.FOCUS_CLASS_ADDED]: e,
            [fo.FOCUS_CLASS_REMOVED]: e,
            [fo.ERROR_CLASS_ADDED]: e,
            [fo.ERROR_CLASS_REMOVED]: e,
            [fo.CARD_BRAND_CHANGED]: e,
            [fo.POSTAL_CODE_CHANGED]: e,
            [fo.SUBMIT]: e,
            [fo.ESCAPE]: e
          };
        this.paymentMessenger.initializeMessageBus(n)
      }
      buildCardIframe(e) {
        return wa({
          frameborder: "0",
          height: "0px",
          name: this.iframeName,
          scrolling: "no",
          src: S.SINGLE_CARD_IFRAME,
          width: "100%"
        }, e)
      }
      hideCardElement() {
        this.wrapperElement && this.wrapperElement.setAttribute("style", "display: none;")
      }
      showCardElement() {
        this.wrapperElement && this.wrapperElement.removeAttribute("style")
      }
      buildCardElement(e) {
        var t;
        return Ua(this, void 0, void 0, (function*() {
          this.wrapperElement = document.createElement("div"), this.wrapperElement.id = Ga(this.id), this.wrapperElement.classList.add(Qs), this.hideCardElement(), this.cardDetail = document.createElement("span"), this.cardDetail.classList.add(Xs), e.appendChild(this.wrapperElement), this.iframeContainer = document.createElement("div"), this.iframeContainer.classList.add(Zs), this.wrapperElement.appendChild(this.iframeContainer), this.iframe = yield this.buildCardIframe(this.iframeContainer), this.iframe.classList.add(Js), this.wrapperElement.appendChild(this.cardDetail), Ma.addStyleElement(S.SINGLE_CARD_WRAPPER_STYLES, "sq-single-card-styles", this.resolveStylePromise, this.rejectStylePromise), (null === (t = this.initialOptions) || void 0 === t ? void 0 : t.style) && Fa(this.initialOptions.style, this.id)
        }))
      }
      onResize(e) {
        if (this.iframe && this.wrapperElement && this.iframeContainer && (this.lastResizeWidth = this.iframe.clientWidth, !this.currentResizeTimeout)) {
          var t = e => {
            if (this.wrapperElement && this.iframe && this.iframeContainer) {
              var t = this.inputLabelsIncluded ? 62 : 48;
              e <= 482 && (t = 2 * t + 1), t += 2, this.iframeContainer.style.height = "".concat(Math.round(t), "px"), this.iframe.height = "".concat(Math.round(t), "px")
            }
          };
          t(this.lastResizeWidth || 0), this.currentResizeTimeout = window.setTimeout((() => {
            t(this.lastResizeWidth || 0), this.currentResizeTimeout = void 0
          }), 100)
        }
      }
    };

    function Va(e) {
      return {
        detail: "Received an error in redirectURI coming back from Cash App",
        message: "Received an error in redirect from Cash App: ".concat(e),
        type: "UNKNOWN"
      }
    }
    var ja, qa = function(e) {
        window.localStorage && window.localStorage.removeItem(e)
      },
      Ya = function(e) {
        if (window.localStorage) {
          var t, n = window.localStorage.getItem(e);
          if (!n) return null;
          try {
            t = JSON.parse(n)
          } catch (e) {
            return null
          }
          return {
            key: e,
            value: t
          }
        }
        return null
      },
      Ka = function(e) {
        window.localStorage && window.localStorage.setItem(e.key, JSON.stringify(e.value))
      };
    ! function(e) {
      e.REQUEST_CASH_APP_AUTH = "REQUEST_CASH_APP_AUTH", e.REQUEST_CASH_APP_CUSTOMER = "REQUEST_CASH_APP_CUSTOMER", e.REQUEST_CASH_APP_CREATE_WALLET_TOKEN = "REQUEST_CASH_APP_CREATE_WALLET_TOKEN"
    }(ja || (ja = {}));
    var Wa = ["state", "code", "access_token"],
      za = {
        CASH_APP_OAUTH_PARAMS: Wa,
        extractCashAppParamsFromURI: function(e, t) {
          var n = new URL(e),
            r = 0,
            i = [];
          Wa.forEach((e => {
            n.searchParams.get(e) && (r++, i.push(e), n.searchParams.delete(e))
          }));
          var o = n.searchParams.get("error");
          return o && n.searchParams.delete("error"), !o && r > 0 && r !== Wa.length && t.captureException(new sr("redirectURI: removed [".concat(i.toString(), "] but not all of Cash App OAuth params [").concat(Wa.toString(), "]"))), n.toString()
        },
        findAndRemoveQueryParams: function(e, t) {
          var n = {};
          if (!window.URLSearchParams) return n;
          var r = new URLSearchParams(e),
            i = t.length,
            o = 0;
          if (t.forEach((e => {
              n[e] = r.get(e), n[e] && o++
            })), i === o) {
            var s = new URLSearchParams(e);
            t.forEach((e => {
              s.delete(e)
            }));
            var a = "?".concat(s.toString()),
              c = y.windowHash;
            c && (a += "".concat(c)), y.replaceWindowState(a)
          }
          return n
        }
      };
    class Za extends r {
      constructor() {
        super("Cash Client: QR Code Image URL is not valid"), this.name = "InvalidQrCodeUrlError", Object.setPrototypeOf(this, Za.prototype)
      }
    }
    var Qa, Ja, Xa = function(e, t, n, r) {
      return new(n || (n = Promise))((function(i, o) {
        function s(e) {
          try {
            c(r.next(e))
          } catch (e) {
            o(e)
          }
        }

        function a(e) {
          try {
            c(r.throw(e))
          } catch (e) {
            o(e)
          }
        }

        function c(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
            e(t)
          }))).then(s, a)
        }
        c((r = r.apply(e, t || [])).next())
      }))
    };
    ! function(e) {
      e.LIGHT = "light", e.DARK = "dark"
    }(Qa || (Qa = {})),
    function(e) {
      e.SQUARED = "Squared", e.SEMIROUNDED = "Semirounded", e.ROUNDED = "Rounded"
    }(Ja || (Ja = {}));
    class $a {
      constructor() {
        this.stylesLoadedPromise = new Promise(((e, t) => {
          this.resolveStylePromise = e, this.rejectStylePromise = t
        })), Ma.addStyleElement(S.CASH_APP_STYLES, "sq-cash-app-styles", this.resolveStylePromise, this.rejectStylePromise)
      }
      createCashAppButton(e) {
        return Xa(this, void 0, void 0, (function*() {
          yield this.stylesLoadedPromise;
          var t = document.createElement("button"),
            n = document.createElement("img");
          return n.setAttribute("src", function(e) {
            switch (e) {
              case Qa.DARK:
                return "data:image/svg+xml,%3Csvg width='88' height='23' viewBox='0 0 88 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.4218 4C12.028 4 12.8309 4 13.6956 4.27333C14.6396 4.61689 15.3831 5.36044 15.7267 6.30444C16 7.16889 16 7.97222 16 9.57844V14.4216C16 16.028 16 16.8309 15.7267 17.6956C15.3831 18.6396 14.6396 19.3831 13.6956 19.7267C12.8309 20 12.028 20 10.4218 20H5.57844C3.972 20 3.16889 20 2.30444 19.7267C1.36044 19.3831 0.616889 18.6396 0.273333 17.6956C0 16.8309 0 16.028 0 14.4216L0 9.57844C0 7.97222 0 7.16889 0.273333 6.30444C0.616889 5.36044 1.36044 4.61689 2.30444 4.27333C3.16889 4 3.972 4 5.57844 4H10.4218Z' fill='%2300D64F'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.32819 9.40498C9.10173 9.40498 9.84315 9.71821 10.3276 10.1482C10.4501 10.2569 10.6335 10.2563 10.7485 10.1398L11.3249 9.55517C11.4465 9.43178 11.4421 9.22976 11.3107 9.11701C10.9239 8.78451 10.4047 8.45755 9.76562 8.24821L9.94638 7.38739C9.98559 7.19977 9.84271 7.02344 9.65087 7.02344H8.53708C8.39464 7.02344 8.27148 7.12312 8.2418 7.26246L8.07898 8.02802C6.59835 8.10201 5.34345 8.84077 5.34345 10.3566C5.34345 11.6689 6.38171 12.2313 7.47756 12.6205C8.51582 13.0097 9.06363 13.1542 9.06363 13.702C9.06363 14.2644 8.51582 14.596 7.70816 14.596C6.97183 14.596 6.20051 14.353 5.60197 13.7629C5.48456 13.6471 5.29671 13.6462 5.17931 13.762L4.55994 14.373C4.43877 14.4924 4.43988 14.6886 4.56194 14.8069C5.04485 15.2757 5.65624 15.615 6.35402 15.8051L6.18411 16.6026C6.14446 16.7895 6.28601 16.9658 6.47741 16.9674L7.59297 16.9758C7.73651 16.9769 7.86123 16.8766 7.89047 16.7359L8.05151 15.9692C9.82432 15.8598 10.9093 14.8962 10.9093 13.4858C10.9093 12.1881 9.82809 11.6401 8.51582 11.1931C7.76598 10.9188 7.11693 10.7317 7.11693 10.1694C7.11693 9.62162 7.72278 9.40498 8.32819 9.40498Z' fill='white'/%3E%3Cpath d='M30.288 9.762L31.044 9.286C31.282 9.132 31.338 8.936 31.17 8.712C30.232 7.438 28.874 6.822 27.334 6.822C24.464 6.822 22.49 8.936 22.49 11.988C22.49 15.068 24.464 17.182 27.376 17.182C29.056 17.182 30.33 16.468 31.226 15.208C31.38 14.97 31.324 14.774 31.086 14.634L30.316 14.186C30.092 14.06 29.896 14.102 29.742 14.312C29.21 15.054 28.454 15.516 27.39 15.516C25.556 15.516 24.422 14.074 24.422 11.988C24.422 9.93 25.542 8.488 27.362 8.488C28.328 8.488 29.126 8.866 29.7 9.636C29.868 9.846 30.064 9.902 30.288 9.762ZM37.4454 17H38.2854C38.5514 17 38.7054 16.846 38.7054 16.58V11.876C38.7054 10.154 37.4874 9.44 35.7514 9.44C34.7434 9.44 33.7634 9.706 33.0074 10.112C32.7694 10.238 32.7274 10.448 32.8394 10.686L33.1054 11.232C33.2314 11.484 33.4274 11.526 33.6794 11.4C34.2954 11.092 35.0234 10.924 35.6114 10.924C36.2134 10.924 36.9274 11.092 36.9274 11.708C36.9274 12.408 36.0174 12.478 34.9534 12.632C33.9594 12.772 32.3494 13.08 32.3494 14.886C32.3494 16.342 33.3994 17.168 34.9114 17.168C35.9334 17.168 36.5774 16.804 37.0254 16.216V16.608C37.0254 16.86 37.1794 17 37.4454 17ZM36.9274 13.346V14.186C36.9274 15.292 36.1294 15.768 35.2754 15.768C34.5894 15.768 34.1134 15.46 34.1134 14.802C34.1134 14.088 34.6734 13.92 35.3174 13.794C35.9754 13.682 36.5914 13.598 36.9274 13.346ZM40.6643 15.152L40.2583 15.628C40.0903 15.838 40.0903 16.048 40.3003 16.23C41.0423 16.832 42.0503 17.168 43.2263 17.168C45.1723 17.168 46.4043 16.216 46.4043 14.676C46.4043 13.22 45.2843 12.716 43.5203 12.408C42.6943 12.268 41.8683 12.156 41.8683 11.568C41.8683 11.036 42.4563 10.84 43.1283 10.84C43.8563 10.84 44.5283 11.078 45.0043 11.414C45.2143 11.582 45.4243 11.582 45.5923 11.372L45.9843 10.91C46.1663 10.7 46.1663 10.49 45.9423 10.322C45.3123 9.846 44.3883 9.44 43.1983 9.44C41.6023 9.44 40.2023 10.126 40.2023 11.75C40.2023 13.304 41.5183 13.752 42.8763 13.99C44.1643 14.214 44.6963 14.326 44.6963 14.886C44.6963 15.502 44.1083 15.754 43.3243 15.754C42.6243 15.754 41.8683 15.572 41.2663 15.11C41.0423 14.942 40.8323 14.942 40.6643 15.152ZM48.318 17H49.256C49.522 17 49.676 16.846 49.676 16.58V12.828C49.676 11.708 50.404 11.036 51.356 11.036C52.364 11.036 52.616 11.75 52.616 12.534V16.58C52.616 16.846 52.77 17 53.036 17H53.974C54.24 17 54.394 16.846 54.394 16.58V12.128C54.394 10.546 53.484 9.44 51.93 9.44C50.95 9.44 50.152 9.874 49.676 10.532V7.424C49.676 7.158 49.522 7.004 49.256 7.004H48.318C48.052 7.004 47.898 7.158 47.898 7.424V16.58C47.898 16.846 48.052 17 48.318 17ZM67.2239 17H68.4279C68.7359 17 68.8759 16.804 68.7639 16.51L65.3759 7.34C65.2919 7.102 65.1379 7.004 64.8999 7.004H63.4019C63.1639 7.004 63.0099 7.102 62.9259 7.34L59.5239 16.51C59.4119 16.804 59.5519 17 59.8599 17H60.9939C61.2319 17 61.3999 16.888 61.4699 16.664L62.1979 14.522H66.0199L66.7479 16.664C66.8179 16.888 66.9859 17 67.2239 17ZM64.1299 8.628L65.5439 12.968H62.6599L64.1299 8.628ZM71.4006 9.608H70.4626C70.1966 9.608 70.0426 9.762 70.0426 10.028V19.016C70.0426 19.282 70.1966 19.436 70.4626 19.436H71.4006C71.6666 19.436 71.8206 19.282 71.8206 19.016V16.048C72.3386 16.804 73.1786 17.168 74.1026 17.168C76.1186 17.168 77.4206 15.488 77.4206 13.29C77.4206 11.106 76.1186 9.44 74.1026 9.44C73.1926 9.44 72.3386 9.79 71.8206 10.546V10.028C71.8206 9.762 71.6666 9.608 71.4006 9.608ZM71.8206 13.29C71.8206 12.016 72.4646 10.994 73.7246 10.994C74.9566 10.994 75.5586 12.03 75.5586 13.29C75.5586 14.564 74.9566 15.614 73.7246 15.614C72.4786 15.614 71.8206 14.578 71.8206 13.29ZM80.2906 9.608H79.3526C79.0866 9.608 78.9326 9.762 78.9326 10.028V19.016C78.9326 19.282 79.0866 19.436 79.3526 19.436H80.2906C80.5566 19.436 80.7106 19.282 80.7106 19.016V16.048C81.2286 16.804 82.0686 17.168 82.9926 17.168C85.0086 17.168 86.3106 15.488 86.3106 13.29C86.3106 11.106 85.0086 9.44 82.9926 9.44C82.0826 9.44 81.2286 9.79 80.7106 10.546V10.028C80.7106 9.762 80.5566 9.608 80.2906 9.608ZM80.7106 13.29C80.7106 12.016 81.3546 10.994 82.6146 10.994C83.8466 10.994 84.4486 12.03 84.4486 13.29C84.4486 14.564 83.8466 15.614 82.6146 15.614C81.3686 15.614 80.7106 14.578 80.7106 13.29Z' fill='white'/%3E%3C/svg%3E%0A";
              default:
                return "data:image/svg+xml,%3Csvg width='88' height='23' viewBox='0 0 108 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.0272 2C15.035 2 16.0386 2 17.1194 2.34167C18.2994 2.77111 19.2289 3.70056 19.6583 4.88056C20 5.96111 20 6.96528 20 8.97305V15.0269C20 17.035 20 18.0386 19.6583 19.1194C19.2289 20.2994 18.2994 21.2289 17.1194 21.6583C16.0386 22 15.035 22 13.0272 22H6.97305C4.965 22 3.96111 22 2.88056 21.6583C1.70056 21.2289 0.771111 20.2994 0.341667 19.1194C0 18.0386 0 17.035 0 15.0269L0 8.97305C0 6.96528 0 5.96111 0.341667 4.88056C0.771111 3.70056 1.70056 2.77111 2.88056 2.34167C3.96111 2 4.965 2 6.97305 2L13.0272 2Z' fill='%2300D64F'/%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.411 8.75671C11.3779 8.75671 12.3047 9.14825 12.9102 9.68571C13.0634 9.82166 13.2926 9.82083 13.4364 9.67518L14.1568 8.94445C14.3089 8.79022 14.3033 8.53769 14.1391 8.39675C13.6557 7.98112 13.0066 7.57242 12.2078 7.31075L12.4337 6.23473C12.4827 6.0002 12.3041 5.77979 12.0643 5.77979H10.6721C10.494 5.77979 10.3401 5.90439 10.303 6.07856L10.0995 7.03552C8.24868 7.128 6.68005 8.05145 6.68005 9.94627C6.68005 11.5866 7.97787 12.2897 9.34768 12.7762C10.6455 13.2627 11.3303 13.4432 11.3303 14.128C11.3303 14.831 10.6455 15.2455 9.63593 15.2455C8.71552 15.2455 7.75137 14.9418 7.00319 14.2041C6.85643 14.0593 6.62162 14.0582 6.47487 14.203L5.70066 14.9667C5.5492 15.1159 5.55058 15.3613 5.70315 15.5091C6.30679 16.0951 7.07103 16.5193 7.94326 16.7568L7.73088 17.7537C7.68131 17.9874 7.85825 18.2078 8.09749 18.2097L9.49195 18.2202C9.67138 18.2216 9.82727 18.0962 9.86382 17.9204L10.0651 16.962C12.2811 16.8252 13.6374 15.6207 13.6374 13.8577C13.6374 12.2357 12.2858 11.5506 10.6455 10.9918C9.7082 10.649 8.89689 10.4151 8.89689 9.71229C8.89689 9.02752 9.65421 8.75671 10.411 8.75671Z' fill='white'/%3E%3C/g%3E%3Cpath d='M37.2804 8.99046L38.2214 8.39795C38.5177 8.20626 38.5874 7.96229 38.3783 7.68346C37.2107 6.09765 35.5203 5.33088 33.6034 5.33088C30.0309 5.33088 27.5738 7.96229 27.5738 11.7613C27.5738 15.5951 30.0309 18.2265 33.6557 18.2265C35.7469 18.2265 37.3327 17.3378 38.448 15.7694C38.6397 15.4731 38.57 15.2292 38.2737 15.0549L37.3153 14.4973C37.0364 14.3404 36.7925 14.3927 36.6008 14.6541C35.9386 15.5777 34.9975 16.1528 33.6731 16.1528C31.3902 16.1528 29.9787 14.3578 29.9787 11.7613C29.9787 9.19958 31.3728 7.40464 33.6382 7.40464C34.8407 7.40464 35.834 7.87516 36.5485 8.83362C36.7576 9.09502 37.0016 9.16472 37.2804 8.99046ZM46.1896 18H47.2352C47.5663 18 47.758 17.8083 47.758 17.4772V11.6219C47.758 9.4784 46.2419 8.58965 44.081 8.58965C42.8263 8.58965 41.6064 8.92075 40.6654 9.42612C40.3691 9.58296 40.3168 9.84436 40.4563 10.1406L40.7874 10.8202C40.9442 11.1339 41.1882 11.1862 41.5019 11.0294C42.2686 10.646 43.1748 10.4369 43.9067 10.4369C44.6561 10.4369 45.5448 10.646 45.5448 11.4128C45.5448 12.2841 44.4121 12.3712 43.0877 12.5629C41.8504 12.7372 39.8463 13.1206 39.8463 15.3686C39.8463 17.181 41.1533 18.2091 43.0354 18.2091C44.3075 18.2091 45.1092 17.756 45.6668 17.0241V17.5121C45.6668 17.8257 45.8585 18 46.1896 18ZM45.5448 13.4517V14.4973C45.5448 15.874 44.5515 16.4665 43.4885 16.4665C42.6346 16.4665 42.0421 16.0831 42.0421 15.264C42.0421 14.3753 42.7391 14.1662 43.5408 14.0093C44.3598 13.8699 45.1266 13.7653 45.5448 13.4517ZM50.1964 15.6997L49.691 16.2922C49.4819 16.5536 49.4819 16.815 49.7433 17.0415C50.6669 17.7909 51.9216 18.2091 53.3854 18.2091C55.8077 18.2091 57.3413 17.0241 57.3413 15.1072C57.3413 13.2948 55.9471 12.6675 53.7514 12.2841C52.7232 12.1098 51.695 11.9704 51.695 11.2385C51.695 10.5763 52.427 10.3323 53.2634 10.3323C54.1696 10.3323 55.0061 10.6286 55.5986 11.0468C55.86 11.2559 56.1214 11.2559 56.3305 10.9945L56.8185 10.4194C57.045 10.158 57.045 9.89664 56.7662 9.68752C55.982 9.09502 54.8318 8.58965 53.3506 8.58965C51.3639 8.58965 49.6213 9.44355 49.6213 11.465C49.6213 13.3994 51.2594 13.957 52.9498 14.2533C54.553 14.5321 55.2152 14.6715 55.2152 15.3686C55.2152 16.1354 54.4833 16.449 53.5074 16.449C52.6361 16.449 51.695 16.2225 50.9457 15.6474C50.6669 15.4383 50.4055 15.4383 50.1964 15.6997ZM59.7234 18H60.891C61.2221 18 61.4138 17.8083 61.4138 17.4772V12.8069C61.4138 11.4128 62.3199 10.5763 63.505 10.5763C64.7597 10.5763 65.0733 11.465 65.0733 12.4409V17.4772C65.0733 17.8083 65.265 18 65.5961 18H66.7637C67.0948 18 67.2865 17.8083 67.2865 17.4772V11.9355C67.2865 9.96635 66.1538 8.58965 64.2194 8.58965C62.9996 8.58965 62.0063 9.12987 61.4138 9.94892V6.08022C61.4138 5.74911 61.2221 5.55742 60.891 5.55742H59.7234C59.3923 5.55742 59.2006 5.74911 59.2006 6.08022V17.4772C59.2006 17.8083 59.3923 18 59.7234 18ZM83.2566 18H84.7553C85.1387 18 85.313 17.756 85.1735 17.3901L80.9563 5.97566C80.8518 5.67941 80.6601 5.55742 80.3638 5.55742H78.4992C78.2029 5.55742 78.0112 5.67941 77.9067 5.97566L73.672 17.3901C73.5326 17.756 73.7069 18 74.0902 18H75.5018C75.798 18 76.0072 17.8606 76.0943 17.5818L77.0005 14.9155H81.7579L82.6641 17.5818C82.7513 17.8606 82.9604 18 83.2566 18ZM79.4053 7.5789L81.1654 12.9811H77.5756L79.4053 7.5789ZM88.4556 8.79877H87.288C86.9569 8.79877 86.7652 8.99046 86.7652 9.32156V20.5094C86.7652 20.8405 86.9569 21.0322 87.288 21.0322H88.4556C88.7867 21.0322 88.9784 20.8405 88.9784 20.5094V16.815C89.6232 17.756 90.6688 18.2091 91.8189 18.2091C94.3284 18.2091 95.949 16.1179 95.949 13.382C95.949 10.6634 94.3284 8.58965 91.8189 8.58965C90.6862 8.58965 89.6232 9.02531 88.9784 9.96635V9.32156C88.9784 8.99046 88.7867 8.79877 88.4556 8.79877ZM88.9784 13.382C88.9784 11.7961 89.78 10.524 91.3484 10.524C92.882 10.524 93.6313 11.8136 93.6313 13.382C93.6313 14.9678 92.882 16.2748 91.3484 16.2748C89.7974 16.2748 88.9784 14.9852 88.9784 13.382ZM99.5215 8.79877H98.3539C98.0228 8.79877 97.8311 8.99046 97.8311 9.32156V20.5094C97.8311 20.8405 98.0228 21.0322 98.3539 21.0322H99.5215C99.8526 21.0322 100.044 20.8405 100.044 20.5094V16.815C100.689 17.756 101.735 18.2091 102.885 18.2091C105.394 18.2091 107.015 16.1179 107.015 13.382C107.015 10.6634 105.394 8.58965 102.885 8.58965C101.752 8.58965 100.689 9.02531 100.044 9.96635V9.32156C100.044 8.99046 99.8526 8.79877 99.5215 8.79877ZM100.044 13.382C100.044 11.7961 100.846 10.524 102.414 10.524C103.948 10.524 104.697 11.8136 104.697 13.382C104.697 14.9678 103.948 16.2748 102.414 16.2748C100.863 16.2748 100.044 14.9852 100.044 13.382Z' fill='black'/%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='13.5714' height='13.5714' fill='white' transform='translate(3.21484 5.21436)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"
            }
          }(e.theme)), n.classList.add("sq-cash-button-logo"), t.classList.add("sq-cash-button", function(e) {
            switch (e) {
              case Ja.ROUNDED:
                return "sq-cash-button-rounded";
              case Ja.SEMIROUNDED:
                return "sq-cash-button-semi-rounded";
              default:
                return "sq-cash-button-squared"
            }
          }(e.shape), function(e) {
            switch (e) {
              case Qa.DARK:
                return "sq-cash-button-dark";
              default:
                return "sq-cash-button-light"
            }
          }(e.theme)), t.appendChild(n), t
        }))
      }
      createQrCodeContainer(e) {
        return Xa(this, void 0, void 0, (function*() {
          if (yield this.stylesLoadedPromise, !jn(e)) throw new Za;
          var t = document.createElement("div");
          t.classList.add("sq-cash-qr-container");
          var n = document.createElement("div");
          n.classList.add("col-left");
          var r = document.createElement("div");
          r.classList.add("col-right");
          var i = document.createElement("div");
          i.classList.add("sq-cash-qr-instruction"), i.innerHTML = "<div><h3>Pay with Cash App</h3><span>Scan the QR Code to link your account</span></div>";
          var o = document.createElement("div"),
            s = document.createElement("img");
          o.classList.add("sq-cash-qr-guide"), s.setAttribute("src", "data:image/svg+xml,%3Csvg width='133' height='109' viewBox='0 0 133 109' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Crect x='6.51207' y='2.51207' width='122.976' height='125.976' rx='14.9276' fill='%2300B843' stroke='black' stroke-width='4.97585'/%3E%3Cg clip-path='url(%23clip1)'%3E%3Cpath d='M59.7669 79.5683C60.3043 79.5683 60.6028 79.2399 60.6028 78.6727V78.1054C64.7527 77.8069 67.1112 75.0602 67.1112 71.7164C67.1112 67.5964 63.5883 66.1037 60.6028 65.3275V59.5953C61.7373 59.8341 62.633 60.3118 63.4391 61.1179C63.8272 61.506 64.2451 61.5956 64.693 61.297L65.8872 60.5506C66.3947 60.2521 66.5141 59.7744 66.126 59.3266C64.693 57.595 62.6927 56.6695 60.6028 56.4306V55.6843C60.6028 55.2066 60.3043 54.9677 59.7669 54.9677C59.2295 54.9677 58.9011 55.2961 58.9011 55.8634V56.3709C55.1692 56.5202 52.4524 58.7892 52.4524 62.4315C52.4524 66.7008 56.244 68.104 58.9011 68.7309V75.0005C57.5277 74.8512 56.1544 74.284 55.1095 72.8509C54.7512 72.3434 54.393 72.224 53.8854 72.5524L52.4822 73.4182C51.9747 73.7466 51.8553 74.1646 52.1837 74.6423C53.6764 76.6724 56.0051 77.9263 58.9011 78.1353V78.8518C58.9011 79.2996 59.2295 79.5683 59.7669 79.5683ZM56.035 62.133C56.035 60.4312 57.3486 59.5953 58.9011 59.4759V64.9095C57.2889 64.4617 56.035 63.775 56.035 62.133ZM63.6182 72.0449C63.6182 73.7167 62.5434 74.8811 60.6028 75.0602V69.1489C62.4837 69.6863 63.6182 70.3431 63.6182 72.0449Z' fill='white'/%3E%3Cpath d='M84.4025 67.1785C84.4025 61.4761 82.4619 56.1022 76.8491 56.1022C71.2065 56.1022 69.2958 61.4761 69.2958 67.1785C69.2958 72.8509 71.2065 78.195 76.8491 78.195C82.4619 78.195 84.4025 72.8509 84.4025 67.1785ZM80.372 67.1486C80.372 71.5672 79.5361 74.9408 76.8491 74.9408C74.1025 74.9408 73.2964 71.5672 73.2964 67.1486C73.2964 62.7301 74.1025 59.3863 76.8491 59.3863C79.5361 59.3863 80.372 62.7301 80.372 67.1486Z' fill='white'/%3E%3C/g%3E%3Cg filter='url(%23filter0_d)'%3E%3Ccircle cx='21.7048' cy='28.7714' r='21.7048' fill='%2300D64F'/%3E%3C/g%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.6143 24.2473C15.5832 24.6287 15.5824 25.1239 15.5824 25.8616V26.8927H13.6492V25.8616V25.8224C13.6492 25.134 13.6492 24.5594 13.6875 24.0899C13.7275 23.6003 13.814 23.1407 14.0355 22.706C14.3753 22.0391 14.9175 21.4969 15.5844 21.1571C16.0191 20.9356 16.4787 20.8491 16.9683 20.8091C17.4378 20.7708 18.0123 20.7708 18.7007 20.7708L18.7008 20.7708L18.74 20.7708H19.7711V22.704H18.74C18.0023 22.704 17.5071 22.7048 17.1258 22.7359C16.7557 22.7662 16.5788 22.8201 16.4621 22.8796C16.1589 23.0341 15.9125 23.2805 15.758 23.5836C15.6985 23.7004 15.6446 23.8773 15.6143 24.2473ZM24.239 22.704C24.9768 22.704 25.472 22.7048 25.8533 22.7359C26.2233 22.7662 26.4003 22.8201 26.517 22.8796C26.8201 23.0341 27.0666 23.2805 27.221 23.5836C27.2805 23.7004 27.3345 23.8773 27.3647 24.2473C27.3959 24.6287 27.3966 25.1239 27.3966 25.8616V26.8927H29.3299V25.8616L29.3299 25.8224V25.8223V25.8223V25.8223C29.3299 25.1339 29.3299 24.5593 29.2915 24.0899C29.2515 23.6003 29.165 23.1407 28.9436 22.706C28.6038 22.0391 28.0616 21.4969 27.3947 21.1571C26.96 20.9356 26.5003 20.8491 26.0107 20.8091C25.5413 20.7708 24.9667 20.7708 24.2782 20.7708H24.239H23.208V22.704H24.239ZM27.3966 31.3606C27.3966 32.0984 27.3959 32.5935 27.3647 32.9749C27.3345 33.3449 27.2805 33.5219 27.221 33.6386C27.0666 33.9417 26.8201 34.1882 26.517 34.3426C26.4003 34.4021 26.2233 34.4561 25.8533 34.4863C25.472 34.5175 24.9768 34.5182 24.239 34.5182H23.208V36.4514H24.239L24.2782 36.4514H24.2784H24.2784H24.2784C24.9667 36.4515 25.5413 36.4515 26.0107 36.4131C26.5003 36.3731 26.96 36.2866 27.3947 36.0651C28.0616 35.7253 28.6038 35.1831 28.9436 34.5162C29.165 34.0816 29.2515 33.6219 29.2915 33.1323C29.3299 32.6629 29.3299 32.0883 29.3299 31.3999V31.3999V31.3998V31.3998L29.3299 31.3606V30.3295H27.3966V31.3606ZM18.74 34.5182C18.0023 34.5182 17.5071 34.5175 17.1258 34.4863C16.7557 34.4561 16.5788 34.4021 16.4621 34.3426C16.1589 34.1882 15.9125 33.9417 15.758 33.6386C15.6986 33.5219 15.6446 33.3449 15.6143 32.9749C15.5832 32.5935 15.5824 32.0984 15.5824 31.3606L15.5824 30.3295H13.6492V31.3606V31.3998V31.3999C13.6492 32.0883 13.6492 32.6629 13.6875 33.1323C13.7275 33.6219 13.814 34.0816 14.0355 34.5162C14.3753 35.1831 14.9175 35.7253 15.5844 36.0651C16.0191 36.2866 16.4787 36.3731 16.9683 36.4131C17.4378 36.4515 18.0124 36.4515 18.7008 36.4514H18.7008L18.74 36.4514H19.7711V34.5182L18.74 34.5182Z' fill='white'/%3E%3Cpath d='M35.4841 2.48792C56.4982 2.48792 83.1989 2.48792 104.213 2.48792V4.97658C103.975 4.97854 103.824 4.98566 103.693 5.0117C102.953 5.15894 102.375 5.73757 102.227 6.47776C102.192 6.65801 102.192 6.87476 102.192 7.30828C102.192 7.36349 102.192 7.41522 102.192 7.46377C102.191 7.84292 102.188 8.06738 102.173 8.26281C101.932 11.4847 99.3708 14.0459 96.1488 14.2873C95.9051 14.3056 95.6164 14.3056 95.0388 14.3056H44.6583C44.0807 14.3056 43.7919 14.3056 43.5483 14.2873C40.3263 14.0459 37.7652 11.4847 37.5238 8.26281C37.5091 8.06738 37.5062 7.84292 37.5054 7.46377L37.5055 7.30828C37.5055 6.87476 37.5055 6.65801 37.4697 6.47776C37.3224 5.73757 36.7438 5.15894 36.0036 5.0117C35.8727 4.98566 35.7225 4.97854 35.4841 4.97658V2.48792Z' fill='black'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d' x='-2.01905' y='6.05713' width='47.4476' height='47.4476' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='1.00952'/%3E%3CfeGaussianBlur stdDeviation='1.00952'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3CclipPath id='clip0'%3E%3Crect width='133' height='109' fill='white'/%3E%3C/clipPath%3E%3CclipPath id='clip1'%3E%3Crect x='11.5378' y='4.97597' width='116.622' height='252.524' rx='12.4396' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"), o.appendChild(s), n.appendChild(i), n.appendChild(o);
          var a = document.createElement("div");
          a.classList.add("sq-cash-qr-code");
          var c = document.createElement("img");
          return c.setAttribute("src", e), a.appendChild(c), r.appendChild(a), t.appendChild(n), t.appendChild(r), t
        }))
      }
    }

    function ec(e, t, n) {
      return {
        details: {
          cashApp: {
            cashtag: e,
            transactionId: t
          },
          method: Ci.CASH_APP
        },
        status: mi.OK,
        token: n
      }
    }
    var tc = function(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
          function s(e) {
            try {
              c(r.next(e))
            } catch (e) {
              o(e)
            }
          }

          function a(e) {
            try {
              c(r.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
              e(t)
            }))).then(s, a)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      },
      nc = "sq-cash-app-redirect-payment-method-tracking-id";
    class rc extends Ei {
      constructor(e, t) {
        if (super(e), this.preloadedQRImage = new Image, this.authTimeoutId = -1, this.elements = {
            button: null,
            qrCode: null
          }, this.isCashAppNativePlatform = y.isAndroid() || y.isIOS(), this.wasFirstInteractionCalled = !1, this.cashAppClient = new $a, !this.session.locationId) throw new hn("locationId must be provided for Cash App");
        if (this.locationId = this.session.locationId, Di(t), t.transactionId.length > 190) throw new hn("transactionId too long. Should be less than 100 characters.");
        var n = za.extractCashAppParamsFromURI(t.redirectURI, e.errorLogger);
        this.fetchAuthURLs(this.locationId, n, t.transactionId, t.totalTransactionAmount)
      }
      get willRedirect() {
        return this.isCashAppNativePlatform
      }
      fetchAuthURLs(e, t, n, r) {
        this.fetchAuthURLsPromise = (() => tc(this, void 0, void 0, (function*() {
          var i, o = {
              expiresIn: -1,
              qrURL: "",
              redirectURL: ""
            },
            s = 1e3,
            a = this.willRedirect ? t : void 0,
            c = r ? {
              amount: r.amount,
              currency_code: r.currencyCode
            } : void 0,
            l = {
              client_id: this.session.applicationId,
              location_id: e,
              redirect_uri: a,
              total_transaction_amount: c,
              transaction_id: n
            };
          try {
            var {
              expires_in: u,
              qr_url: d,
              redirect_url: h,
              transaction_id: p
            } = yield this.messenger.request(ja.REQUEST_CASH_APP_AUTH, {
              options: {
                paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
                session: this.session
              },
              payload: l
            });
            this.transactionId = p, o.expiresIn = u, o.qrURL = d, o.redirectURL = h, i = u, s = Math.max(Un.secondsToMs(i) - Un.minutesToMs(1), Un.minutesToMs(1)), this.willRedirect || (this.preloadedQRImage.src = d), o.expiresIn < 2147483647 ? this.authTimeoutId = window.setTimeout((() => {
              this.errorLogger.captureException(new sr("Cash App Auth URLS expired unexpectedly with expiry of ".concat(s, "ms")), this.session.instanceId, this.session.sessionId)
            }), s) : this.errorLogger.captureException(new sr("Cash App Auth URLS expires_in larger than 32 bit integer ".concat(o.expiresIn, "ms")), this.session.instanceId, this.session.sessionId)
          } catch (e) {
            o.error = e
          }
          return o
        })))()
      }
      destroy() {
        return window.clearTimeout(this.authTimeoutId), Promise.resolve()
      }
      validateAndQuerySelector(e) {
        if ("string" != typeof e) throw new TypeError("selector should be a string: ".concat(e));
        var t = document.querySelector(e);
        if (null === t) throw new cn(e);
        return t
      }
      attachAll(e, t) {
        return tc(this, void 0, void 0, (function*() {
          this.metricsHandler.logEvent(hr.AttachStart);
          try {
            if (e.button) {
              var n = yield this.cashAppClient.createCashAppButton(Object.assign({
                shape: Ja.SEMIROUNDED,
                theme: Qa.LIGHT
              }, null == t ? void 0 : t.button));
              this.elements.button = this.validateAndQuerySelector(e.button), this.elements.button.appendChild(n)
            }
            return this.elements.qrCode = this.validateAndQuerySelector(e.qrCode), this.metricsHandler.logEvent(hr.AttachOK), Promise.resolve()
          } catch (e) {
            throw this.metricsHandler.logEvent(hr.AttachError), e
          }
        }))
      }
      tokenize() {
        var e;
        return tc(this, void 0, void 0, (function*() {
          this.handleFirstInteraction();
          var {
            qrCode: t
          } = this.elements;
          if (!t) throw new fn(Ci.CASH_APP);
          try {
            var n = yield Pr.timeout((() => this.fetchAuthURLsPromise), Un.minutesToMs(1), new sr("Precondition failed", Ci.CASH_APP));
            if (n.error) throw n.error;
            if (!this.transactionId) throw new sr("expected transactionId to exist at tokenization", Ci.CASH_APP);
            if (this.willRedirect) {
              var r = {
                key: nc,
                value: {
                  paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
                  transactionId: this.transactionId
                }
              };
              return Ka(r), y.redirectTo(n.redirectURL), new Promise((() => {}))
            }
            var i = yield this.cashAppClient.createQrCodeContainer(n.qrURL);
            t.appendChild(i);
            var {
              token: o,
              cashtag: s,
              paymentMethodTrackingId: a,
              sessionId: c
            } = yield this.messenger.request(ja.REQUEST_CASH_APP_CREATE_WALLET_TOKEN, {
              options: {
                paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
                session: this.session
              },
              payload: {
                expiresAt: Date.now() + Un.secondsToMs(n.expiresIn),
                requestBody: {
                  analytics_token: null !== (e = this.session.analyticsToken) && void 0 !== e ? e : "",
                  client_id: this.session.applicationId,
                  location_id: this.locationId,
                  payment_method_tracking_id: this.context.getPaymentMethodTrackingId(),
                  session_id: this.session.sessionId,
                  transaction_id: this.transactionId,
                  websdk_version: S.VERSION,
                  website_url: this.session.sourceUrl
                }
              }
            });
            return this.context.setSessionId(c), this.context.setPaymentMethodTrackingId(a), ec(s, this.transactionId, o)
          } catch (e) {
            return e instanceof Za && this.errorLogger.captureException(e), xi(e, this.errorLogger)
          }
        }))
      }
      generateWalletToken(e, t, n) {
        return "wnon:".concat(window.btoa(JSON.stringify({
          analytics_token: this.session.analyticsToken,
          client_id: this.session.applicationId,
          entry_method: "REDIRECT",
          location_id: this.locationId,
          session_id: e,
          tender: {
            brand: "CASH_APP",
            preauth_idempotency_key: t,
            transaction_id: n
          },
          websdk_version: S.VERSION,
          website_url: this.session.sourceUrl
        })))
      }
      getRedirectResult() {
        var e;
        return tc(this, void 0, void 0, (function*() {
          var {
            error: t
          } = za.findAndRemoveQueryParams(window.location.search, ["error"]);
          if (t) {
            var n = new zn([Va(t)]);
            return this.errorLogger.captureException(n), xi(n, this.errorLogger)
          }
          var r, i, o, s, {
            state: a,
            code: c,
            access_token: l
          } = za.findAndRemoveQueryParams(window.location.search, za.CASH_APP_OAUTH_PARAMS);
          if (!a || !c || !l) return null;
          try {
            var u = function(e) {
              var t = e.split(":");
              if (3 !== t.length) throw new sr("Invalid transaction ID: could not separate");
              return t
            }(i = function(e) {
              var {
                transaction_id: t
              } = JSON.parse(e);
              if (void 0 === t) throw new sr("Malformed state in redirect query params: ".concat(e));
              return t
            }(a));
            r = u[0], o = u[1]
          } catch (e) {
            return xi(e, this.errorLogger)
          }
          var d = Ya(nc);
          null !== d && i === (null === (e = d.value) || void 0 === e ? void 0 : e.transactionId) && (s = d.value.paymentMethodTrackingId), qa(nc);
          var h = e => {
            this.context.metricsHandler.metricsLogger.logEvent({
              event: e,
              eventSource: this.context.metricsHandler.eventSource
            }, this.session.instanceId, r, s)
          };
          h(hr.NonceStart);
          try {
            var p = yield this.messenger.request(ja.REQUEST_CASH_APP_CUSTOMER, {
              options: {
                session: Object.assign({}, this.session, {
                  paymentMethodTrackingId: s,
                  sessionId: r
                })
              },
              payload: l
            }), f = this.generateWalletToken(r, c, i);
            return h(hr.NonceOK), ec(p, o, f)
          } catch (e) {
            return h(hr.NonceError), xi(e, this.errorLogger)
          }
        }))
      }
      handleFirstInteraction() {
        this.wasFirstInteractionCalled || (this.wasFirstInteractionCalled = !0, this.metricsHandler.logEvent(hr.FirstInteraction))
      }
    }
    ro.GIFT_CARD_NUMBER, ro.GIFT_CARD_NUMBER, "0".repeat(24);
    var ic, oc = [yn, Cn, In, An, pn, Jn];
    ! function(e) {
      e.CONFIGURE = "giftCardConfigure", e.DESTROY = "giftCardDestroy", e.LOAD_GIFT_CARDS_FORM = "loadGiftCardsForm", e.REQUEST_CARD_NONCE_IF_VALID_FORM = "giftCardRequestCardNonceIfValidForm", e.SET_FOCUS = "giftCardSetFocus"
    }(ic || (ic = {}));
    var sc = function(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
          function s(e) {
            try {
              c(r.next(e))
            } catch (e) {
              o(e)
            }
          }

          function a(e) {
            try {
              c(r.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
              e(t)
            }))).then(s, a)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      },
      ac = "emptyMessage",
      cc = [ro.GIFT_CARD_NUMBER];
    class lc extends Ei {
      constructor(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(e), this.attached = !1, this.id = ii(), this.iframeName = "".concat("gift-card", "-").concat(this.id), this.paymentMessenger = new Da(this.context), this.tokenizeInProcess = !1, this.inputLabelsIncluded = Boolean(null == t ? void 0 : t.includeInputLabels), this.initializeMessageBus(), this.validateOptions(t), this.initialOptions = t || {}, this.errorList = new Set, this.stylesLoadedPromise = new Promise(((e, t) => {
          this.resolveStylePromise = e, this.rejectStylePromise = t
        }))
      }
      attach(e) {
        return sc(this, void 0, void 0, (function*() {
          if (this.attached) throw new pn(Ci.GIFT_CARD);
          this.attached = !0, this.metricsHandler.logEvent(hr.AttachStart);
          var t = ba(e, this.metricsHandler);
          try {
            return yield this.buildCardElement(t), yield this.paymentMessenger.request(ic.LOAD_GIFT_CARDS_FORM, {
              configuration: Object.assign(Object.assign({}, this.initialOptions), {
                type: Ci.GIFT_CARD
              }),
              iframeName: this.iframeName
            }), yield this.stylesLoadedPromise, this.element = t, window.addEventListener("resize", this.onResize.bind(this)), this.showCardElement(), this.onResize(), this.metricsHandler.logEvent(hr.AttachOK), Promise.resolve()
          } catch (e) {
            if (this.attached = !1, this.metricsHandler.logEvent(hr.AttachError), Vn(e, oc)) throw e;
            throw this.errorLogger.captureException(e, this.session.instanceId, this.session.sessionId), new Jn("attaching the Gift Card Element")
          }
        }))
      }
      configure(e) {
        return sc(this, void 0, void 0, (function*() {
          this.validateOptions(e), void 0 !== (null == e ? void 0 : e.includeInputLabels) && (this.inputLabelsIncluded = Boolean(null == e ? void 0 : e.includeInputLabels), this.onResize()), void 0 !== e.style && dc(e.style, this.id);
          try {
            return void(yield this.paymentMessenger.request(ic.CONFIGURE, {
              includeInputLabels: this.inputLabelsIncluded,
              style: e.style,
              type: Ci.GIFT_CARD
            }))
          } catch (e) {
            if (Vn(e, Oa)) throw e;
            throw this.errorLogger.captureException(e, this.session.instanceId, this.session.sessionId), new Jn("configuring the Gift Card Element")
          }
        }))
      }
      validateOptions(e) {
        var t = {
          includeInputLabels: e => "boolean" == typeof e,
          style: e => "object" == typeof e
        };
        Object.entries(e).forEach((e => {
          var [n, r] = e;
          if (void 0 === t[n]) throw new Co(n);
          if (t[n] && !t[n](r)) throw new Io(n, r)
        }))
      }
      destroy() {
        return sc(this, void 0, void 0, (function*() {
          var e = yield this.paymentMessenger.request(ic.DESTROY);
          return this.element && (Na(this.element), window.removeEventListener("resize", this.onResize.bind(this))), this.attached = !1, e
        }))
      }
      focus(e) {
        return sc(this, void 0, void 0, (function*() {
          if (!Object.values(ro).includes(e)) throw new yo(e);
          try {
            return yield this.paymentMessenger.request(ic.SET_FOCUS, {
              field: e
            })
          } catch (e) {
            this.errorLogger.captureException(e, this.session.instanceId, this.session.sessionId)
          }
          return !1
        }))
      }
      addEventListener(e, t) {
        super.addEventListener(e, t)
      }
      removeEventListener(e, t) {
        super.removeEventListener(e, t)
      }
      tokenize() {
        return sc(this, void 0, void 0, (function*() {
          if (this.tokenizeInProcess) throw new zn([Si]);
          this.tokenizeInProcess = !0;
          try {
            var e = yield this.paymentMessenger.request(ic.REQUEST_CARD_NONCE_IF_VALID_FORM, {
              type: Ci.GIFT_CARD
            });
            return this.tokenizeInProcess = !1, this.context.setPaymentMethodTrackingId(e.paymentMethodTrackingId), this.context.setSessionId(e.sessionId),
              function(e) {
                var {
                  card: t,
                  cardNonce: n
                } = e;
                return {
                  details: {
                    giftCard: t,
                    method: Ci.GIFT_CARD
                  },
                  status: mi.OK,
                  token: n
                }
              }(e)
          } catch (e) {
            if (this.tokenizeInProcess = !1, e instanceof Qn) return {
              errors: e.errors,
              status: mi.INVALID
            };
            throw Vn(e, Ra) ? e : (this.errorLogger.captureException(e, this.session.instanceId, this.session.sessionId), Zn())
          }
        }))
      }
      buildCardElement(e) {
        var t;
        return sc(this, void 0, void 0, (function*() {
          this.wrapperElement = document.createElement("div"), this.wrapperElement.id = uc(this.id), this.wrapperElement.classList.add(Qs), this.hideCardElement(), this.cardDetail = document.createElement("span"), this.cardDetail.classList.add(Xs), e.appendChild(this.wrapperElement), this.iframeContainer = document.createElement("div"), this.iframeContainer.classList.add(Zs), this.wrapperElement.appendChild(this.iframeContainer), this.iframe = yield this.buildCardIframe(this.iframeContainer), this.iframe.classList.add(Js), this.wrapperElement.appendChild(this.cardDetail), Ma.addStyleElement(S.SINGLE_CARD_WRAPPER_STYLES, "sq-single-card-styles", this.resolveStylePromise, this.rejectStylePromise), (null === (t = this.initialOptions) || void 0 === t ? void 0 : t.style) && dc(this.initialOptions.style, this.id)
        }))
      }
      buildCardIframe(e) {
        return wa({
          frameborder: "0",
          height: "0px",
          name: this.iframeName,
          scrolling: "no",
          src: S.GIFT_CARD_IFRAME,
          width: "100%"
        }, e)
      }
      hideCardElement() {
        this.wrapperElement && this.wrapperElement.setAttribute("style", "display: none;")
      }
      showCardElement() {
        this.wrapperElement && this.wrapperElement.removeAttribute("style")
      }
      onResize(e) {
        if (this.iframe && this.wrapperElement && this.iframeContainer && !this.currentResizeTimeout) {
          var t = () => {
            if (this.wrapperElement && this.iframe && this.iframeContainer) {
              var e = this.inputLabelsIncluded ? 62 : 48;
              e += 2, this.iframe.style.height = "".concat(e, "px"), this.iframeContainer.style.height = "".concat(Math.round(e), "px")
            }
          };
          t(), this.currentResizeTimeout = window.setTimeout((() => {
            t(), this.currentResizeTimeout = void 0
          }), 100)
        }
      }
      updateCardDetailText() {
        var e, t, n;
        this.cardDetail && (0 === this.errorList.size ? (t = null !== (e = this.focusedInput) && void 0 !== e ? e : ac, n = this.buildHelperMessage(t), this.cardDetail.classList.remove($s), this.cardDetail.classList.add(ea)) : (t = cc.find((e => this.errorList.has(e))) || cc[0], n = this.buildErrorMessage(t), this.cardDetail.classList.add($s), this.cardDetail.classList.remove(ea)), this.cardDetail.textContent !== n && (this.cardDetail.textContent = n), n.length > 0 ? this.cardDetail.classList.add(ta) : this.cardDetail.classList.remove(ta))
      }
      addErrorMessage(e) {
        this.errorList.add(e), this.updateCardDetailText()
      }
      removeErrorMessage(e) {
        this.errorList.has(e) && (this.errorList.delete(e), this.updateCardDetailText())
      }
      addFocusMessage(e) {
        this.focusedInput = e, this.updateCardDetailText()
      }
      removeFocusMessage(e) {
        this.focusedInput === e && (this.focusedInput = null), setTimeout((() => {
          null === this.focusedInput && this.updateCardDetailText()
        }), 50)
      }
      handleInputEvent(e) {
        var t, n, {
            data: r
          } = e,
          i = r.payload;
        switch (i.eventType) {
          case eo.ERROR_CLASS_ADDED:
            this.addErrorMessage(i.field), null === (t = this.wrapperElement) || void 0 === t || t.classList.add(xo);
            break;
          case eo.ERROR_CLASS_REMOVED:
            this.removeErrorMessage(i.field), this.removeErrorClass();
            break;
          case eo.FOCUS_CLASS_ADDED:
            this.addFocusMessage(i.field), null === (n = this.wrapperElement) || void 0 === n || n.classList.add(Do);
            break;
          case eo.FOCUS_CLASS_REMOVED:
            this.removeFocusMessage(i.field), this.removeFocusClass()
        }
        super.dispatchEvent(i.eventType, i)
      }
      removeFocusClass() {
        setTimeout((() => {
          var e;
          this.focusedInput || null === (e = this.wrapperElement) || void 0 === e || e.classList.remove(Do)
        }), 50)
      }
      removeErrorClass() {
        var e;
        0 === this.errorList.size && (null === (e = this.wrapperElement) || void 0 === e || e.classList.remove(xo))
      }
      initializeMessageBus() {
        var e = this.handleInputEvent.bind(this),
          t = {
            [fo.FOCUS_CLASS_ADDED]: e,
            [fo.FOCUS_CLASS_REMOVED]: e,
            [fo.ERROR_CLASS_ADDED]: e,
            [fo.ERROR_CLASS_REMOVED]: e,
            [fo.CARD_BRAND_CHANGED]: e,
            [fo.SUBMIT]: e,
            [fo.ESCAPE]: e
          };
        this.paymentMessenger.initializeMessageBus(t)
      }
      buildErrorMessage(e) {
        switch (e) {
          case ro.GIFT_CARD_NUMBER:
            return this.context.getLocaleString().paymentMethods.giftCards.errors.giftCardNumberError;
          case ac:
          default:
            return ""
        }
      }
      buildHelperMessage(e) {
        switch (e) {
          case ro.GIFT_CARD_NUMBER:
            return this.context.getLocaleString().paymentMethods.giftCards.helperText.giftCardNumber;
          case ac:
          default:
            return ""
        }
      }
    }

    function uc(e) {
      return "".concat("gift-card-wrapper", "-").concat(e)
    }

    function dc(e, t) {
      var n = function(e) {
          return "".concat("sq-gift-card-custom-styles", "-").concat(e)
        }(t),
        r = document.getElementById(n);
      null === r && ((r = document.createElement("style")).id = n, document.head.appendChild(r)), r.innerHTML = Ca(e, uc(t))
    }
    class hc extends r {
      constructor(e) {
        super("The event listener for ".concat(e, " timed out (30 seconds). If you've returned a promise, ensure it is resolving")), this.name = "EventListenerTimeoutError", Object.setPrototypeOf(this, hc.prototype)
      }
    }
    class pc extends ni {
      constructor() {
        super(), this.listeners = {}, this.listeners = {}
      }
      dispatchEvent(e, t, n) {
        return r = this, i = void 0, s = function*() {
          if (e in this.listeners)
            for (var r = new ti(e, t), i = this.listeners[e].slice(), o = function*(t, o) {
                var s = void 0;
                try {
                  s = i[t](r)
                } catch (t) {
                  throw new dn(e, t.message)
                }
                var a = void 0;
                if (s instanceof Promise) try {
                  a = yield Pr.timeout((() => s), 3e4, new hc(e))
                } catch (t) {
                  if (t instanceof hc) throw t;
                  throw new dn(e, t.message)
                } else a = s;
                n && n(a)
              }, s = 0, a = i.length; s < a; s++) yield* o(s)
        }, new((o = void 0) || (o = Promise))((function(e, t) {
          function n(e) {
            try {
              c(s.next(e))
            } catch (e) {
              t(e)
            }
          }

          function a(e) {
            try {
              c(s.throw(e))
            } catch (e) {
              t(e)
            }
          }

          function c(t) {
            var r;
            t.done ? e(t.value) : (r = t.value, r instanceof o ? r : new o((function(e) {
              e(r)
            }))).then(n, a)
          }
          c((s = s.apply(r, i || [])).next())
        }));
        var r, i, o, s
      }
    }

    function fc(e, t) {
      if ("object" != typeof e) return {
        isValid: !1,
        missingFields: []
      };
      var n = [];
      return {
        isValid: Object.entries(t).map((r => {
          var [i, o] = r;
          if ("object" == typeof o) {
            var {
              isValid: s,
              missingFields: a
            } = fc(e[i] || {}, t[i]);
            return a.forEach((e => {
              var [t, r] = e;
              n.push(["".concat(i, ".").concat(t), r])
            })), s
          }
          return i in e && typeof e[i] === o || (n.push([i, o]), !1)
        })).every((e => e)),
        missingFields: n
      }
    }

    function gc(e, t, n) {
      if (!Array.isArray(e)) return {
        isValid: !1,
        missingFields: [
          [t, "Array"]
        ]
      };
      var r = e.reduce(((e, r) => {
        var i = fc({
            [t]: r
          }, {
            [t]: n
          }),
          o = i.missingFields.reduce(((e, t) => {
            var [n, r] = t;
            return Object.assign({}, e, {
              [n]: r
            })
          }), {});
        return {
          isValid: e.isValid && i.isValid,
          missingFieldsMap: Object.assign({}, e.missingFieldsMap, o)
        }
      }), {
        isValid: !0,
        missingFieldsMap: {}
      });
      return {
        isValid: r.isValid,
        missingFields: Object.entries(r.missingFieldsMap)
      }
    }
    var mc, vc, Ec, _c, yc = {
        amount: "string",
        label: "string"
      },
      Cc = {
        amount: "string",
        id: "string",
        label: "string"
      },
      Ic = {
        amount: "string",
        label: "string"
      },
      Ac = {};
    class Sc {
      constructor(e) {
        this.eventTarget = new pc, this.requestBillingContact = Boolean(e.requestBillingContact), this.requestShippingContact = Boolean(e.requestShippingContact), this.countryCode = e.countryCode, this.currencyCode = e.currencyCode, this.lineItems = e.lineItems, this.total = e.total, this.shippingOptions = e.shippingOptions, this.shippingContact = e.shippingContact
      }
      addEventListener(e, t) {
        switch (e) {
          case Ii.SHIPPING_CONTACT_CHANGED:
            this.shippingContactEventListener(t);
            break;
          case Ii.SHIPPING_OPTION_CHANGED:
            this.shippingOptionEventListener(t);
            break;
          default:
            throw new $r("PaymentRequest.addEventListener", "event", "PaymentRequestEvent")
        }
      }
      dispatchEvent(e, t, n) {
        return this.eventTarget.dispatchEvent(e, t, (e => {
          var t = function(e) {
            var {
              lineItems: t,
              shippingErrors: n,
              shippingOptions: r,
              error: i,
              total: o
            } = e;
            if (t) {
              var s = gc(t, "lineItem", yc);
              if (!s.isValid) return s
            }
            if (r) {
              var a = gc(r, "shippingOption", Cc);
              if (!a.isValid) return a
            }
            if (o) {
              var c = fc({
                total: o
              }, {
                total: Ic
              });
              if (!c.isValid) return c
            }
            if (i && "string" != typeof i) return {
              isValid: !1,
              missingFields: [
                ["error", "string"]
              ]
            };
            if (n) {
              var l = fc(n, Ac);
              if (!l.isValid) return l
            }
            return {
              isValid: !0,
              missingFields: []
            }
          }(e);
          if (!t.isValid) throw new un(t.missingFields);
          n(e)
        }))
      }
      hasEventListener(e) {
        return this.eventTarget.hasEventListener(e)
      }
      shippingContactEventListener(e) {
        this.eventTarget.addEventListener(Ii.SHIPPING_CONTACT_CHANGED, (t => {
          var {
            contactOrOption: n
          } = t.detail;
          return e(n)
        }))
      }
      shippingOptionEventListener(e) {
        this.eventTarget.addEventListener(Ii.SHIPPING_OPTION_CHANGED, (t => {
          var {
            contactOrOption: n
          } = t.detail;
          return e(n)
        }))
      }
    }

    function Oc(e) {
      return Boolean(e.shippingOptions && e.shippingOptions.length > 0)
    }

    function Tc(e, t) {
      return Intl.NumberFormat(y.windowNavigationLanguage, {
        currency: t,
        style: "currency"
      }).format(Number.parseFloat(e))
    }! function(e) {
      e.DEFAULT = "default", e.BLACK = "black", e.WHITE = "white"
    }(mc || (mc = {})),
    function(e) {
      e.STATIC = "static", e.FILL = "fill"
    }(vc || (vc = {})),
    function(e) {
      e.LONG = "long", e.SHORT = "short"
    }(Ec || (Ec = {})),
    function(e) {
      e.PAYMENT_METHOD_DESTROYED = "PAYMENT_METHOD_DESTROYED", e.SHIPPING_ADDRESS_UNSERVICEABLE = "SHIPPING_ADDRESS_UNSERVICEABLE", e.SHIPPING_ADDRESS_INVALID = "SHIPPING_ADDRESS_INVALID"
    }(_c || (_c = {}));
    var Pc = ["PAN_ONLY", "CRYPTOGRAM_3DS"],
      Rc = ["AMEX", "DISCOVER", "JCB", "MASTERCARD", "VISA"];

    function wc(e) {
      return {
        label: e.label,
        price: e.amount,
        status: e.pending ? u.Estimated : u.Final,
        type: "LINE_ITEM"
      }
    }

    function Nc(e, t) {
      return t.map((t => function(e, t) {
        return {
          description: Tc(t.amount, e),
          id: t.id,
          label: t.label
        }
      }(e, t)))
    }

    function Lc(e, t, n, r) {
      var i = null != r ? r : n;
      if (i && i.length > 0) {
        var o = {
          shippingOptions: Nc(e, i)
        };
        return i.some((e => (null == e ? void 0 : e.id) === t)) && (o.defaultSelectedOptionId = t), o
      }
    }

    function bc(e, t) {
      return null == t ? void 0 : t.find((t => t.id === e))
    }

    function Dc(e, t, n, r, i, o) {
      var {
        countryCode: s,
        currencyCode: a,
        total: c
      } = t, l = Oc(t), u = Boolean(t.requestShippingContact || l), d = Object.assign({}, e, {
        callbackIntents: n,
        emailRequired: Boolean(t.requestBillingContact),
        merchantInfo: i,
        shippingAddressRequired: u,
        shippingOptionRequired: l,
        transactionInfo: {
          countryCode: s,
          currencyCode: a,
          totalPrice: c.amount,
          totalPriceStatus: r
        }
      });
      if (u && (d.shippingAddressParameters = {
          phoneNumberRequired: !0
        }), l) {
        var h = Lc(a, o, [], t.shippingOptions);
        h && (d.shippingOptionParameters = h)
      }
      return d
    }

    function xc(e, t) {
      var n = [];
      return e.error && n.push({
        intent: t,
        message: e.error,
        reason: _c.SHIPPING_ADDRESS_UNSERVICEABLE
      }), e.shippingErrors && Object.entries(e.shippingErrors).forEach((e => {
        var [r, i] = e;
        n.push({
          intent: t,
          message: "".concat(r, ": ").concat(i),
          reason: _c.SHIPPING_ADDRESS_INVALID
        })
      })), n
    }
    var Mc, Uc, kc = function(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
          function s(e) {
            try {
              c(r.next(e))
            } catch (e) {
              o(e)
            }
          }

          function a(e) {
            try {
              c(r.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
              e(t)
            }))).then(s, a)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      },
      Hc = ["#google"];
    class Gc extends Ei {
      constructor(e, t, n, r) {
        var i;
        super(n), this.shippingOptions = void 0, this.wasFirstInteractionCalled = !1, this.isDestroyed = !1, this.validateConfiguration(), this.req = t, this.merchantInfo = r, this.element = null, Oc(this.req) && (this.shippingOptions = this.req.shippingOptions, this.selectedShippingOptionId = null === (i = this.req.shippingOptions) || void 0 === i ? void 0 : i[0].id), this.callbackIntents = function(e, t) {
          var n = [d.PAYMENT_AUTHORIZATION],
            r = Oc(e) && t.includes(Ii.SHIPPING_OPTION_CHANGED),
            i = e.requestShippingContact && t.includes(Ii.SHIPPING_CONTACT_CHANGED);
          return r ? (n.push(d.SHIPPING_ADDRESS), n.push(d.SHIPPING_OPTION)) : i && n.push(d.SHIPPING_ADDRESS), n
        }(this.req, this.handlers);
        var o, s, a = function(e, t, n) {
          var r = {
            environment: S.GOOGLE_PAY_ENV,
            merchantInfo: n,
            paymentDataCallbacks: {
              onPaymentAuthorized: () => ({
                transactionState: g.SUCCESS
              })
            }
          };
          return (e.includes(d.SHIPPING_OPTION) || e.includes(d.SHIPPING_ADDRESS)) && (r.paymentDataCallbacks.onPaymentDataChanged = t), r
        }(this.callbackIntents, this.onPaymentDataChanged.bind(this), this.merchantInfo);
        this.googlePayClient = new e.payments.api.PaymentsClient(a), this.isReadyToPayRequest = (o = this.session.applicationId, s = this.req.requestBillingContact, {
          allowedPaymentMethods: [{
            parameters: {
              allowedAuthMethods: Pc,
              allowedCardNetworks: Rc,
              billingAddressParameters: {
                format: s ? h.FULL : h.MIN,
                phoneNumberRequired: Boolean(s)
              },
              billingAddressRequired: !0
            },
            tokenizationSpecification: {
              parameters: {
                gateway: "square",
                gatewayMerchantId: o
              },
              type: f.PAYMENT_GATEWAY
            },
            type: p.CARD
          }],
          apiVersion: 2,
          apiVersionMinor: 0
        })
      }
      validateConfiguration() {
        var e = Hc.join(", ");
        if (document.querySelectorAll(e).length > 0) throw new vn(Ci.GOOGLE_PAY, e)
      }
      attach(e, t) {
        var n, r, i;
        return kc(this, void 0, void 0, (function*() {
          if (this.isDestroyed) throw new gn(Ci.GOOGLE_PAY);
          var o = null !== (n = null == t ? void 0 : t.buttonColor) && void 0 !== n ? n : mc.DEFAULT,
            s = null !== (r = null == t ? void 0 : t.buttonSizeMode) && void 0 !== r ? r : vc.STATIC,
            a = null !== (i = null == t ? void 0 : t.buttonType) && void 0 !== i ? i : Ec.LONG;
          this.metricsHandler.logEvent(hr.AttachStart), this.element = ba(e, this.metricsHandler), this.isReadyToPay = yield this.checkIfReadyToPay(hr.AttachError);
          try {
            var c = this.googlePayClient.createButton({
              buttonColor: o,
              buttonSizeMode: s,
              buttonType: a,
              onClick: () => {}
            });
            return this.element.appendChild(c), this.metricsHandler.logEvent(hr.AttachOK), Promise.resolve()
          } catch (e) {
            throw this.errorLogger.captureException(e), this.metricsHandler.logEvent(hr.AttachError), new En(Jr.UNKNOWN, e)
          }
        }))
      }
      destroy() {
        return this.isDestroyed = !0, this.element && (this.element.innerHTML = ""), Promise.resolve()
      }
      tokenize() {
        return kc(this, void 0, void 0, (function*() {
          if (this.handleFirstInteraction(), this.isDestroyed) throw new gn(Ci.GOOGLE_PAY);
          var e;
          this.metricsHandler.logEvent(pr.ExternalSessionStart), this.isReadyToPay = this.isReadyToPay || (yield this.checkIfReadyToPay(pr.ExternalSessionError));
          try {
            e = yield this.loadPaymentData(), delete this.googlePayTokenDeferred, this.metricsHandler.logEvent(pr.ExternalSessionOK)
          } catch (e) {
            if (delete this.googlePayTokenDeferred, "CANCELED" === e.statusCode) return this.metricsHandler.logEvent(pr.ExternalSessionCancel), {
              status: mi.CANCEL
            };
            if (this.metricsHandler.logEvent(pr.ExternalSessionError), e instanceof Error) throw this.errorLogger.captureException(e), e;
            throw this.errorLogger.captureException(new sr(JSON.stringify(e), Ci.GOOGLE_PAY)), new Jn("tokenizing Google Pay.")
          }
          var {
            token: t,
            details: n
          } = yield this.requestGooglePayCardNonce(e);
          return {
            details: n,
            status: mi.OK,
            token: t
          }
        }))
      }
      checkIfReadyToPay(e) {
        return kc(this, void 0, void 0, (function*() {
          var t;
          try {
            t = yield this.googlePayClient.isReadyToPay(this.isReadyToPayRequest)
          } catch (e) {
            this.errorLogger.captureException(new sr('Calling googlePayClient.isReadyToPay threw "'.concat(e, '"'))), t = {
              result: !1
            }
          }
          var n = Boolean(t.result);
          if (!n) throw e && this.metricsHandler.logEvent(e), new En(Jr.GOOGLE_PAY_BROWSER_NOT_SUPPORTED);
          return this.googlePayClient.prefetchPaymentData(Dc(this.isReadyToPayRequest, this.req, this.callbackIntents, u.Unknown, this.merchantInfo, this.selectedShippingOptionId)), n
        }))
      }
      get handlers() {
        var e = [];
        return this.req.hasEventListener(Ii.SHIPPING_OPTION_CHANGED) && e.push(Ii.SHIPPING_OPTION_CHANGED), this.req.hasEventListener(Ii.SHIPPING_CONTACT_CHANGED) && e.push(Ii.SHIPPING_CONTACT_CHANGED), e
      }
      loadPaymentData() {
        return this.googlePayTokenDeferred || (this.googlePayTokenDeferred = this.googlePayClient.loadPaymentData(Dc(this.isReadyToPayRequest, this.req, this.callbackIntents, u.Final, this.merchantInfo, this.selectedShippingOptionId))), this.googlePayTokenDeferred
      }
      onPaymentDataChanged(e) {
        switch (e.callbackTrigger) {
          case d.INITIALIZE:
          case d.SHIPPING_ADDRESS:
            return this.onPaymentDataChangedShippingAddress(e);
          case d.SHIPPING_OPTION:
            return this.onPaymentDataChangedShippingOption(e);
          default:
            return this.errorLogger.captureException(new sr("Unknown callbackTrigger: ".concat(e.callbackTrigger))), Promise.resolve({})
        }
      }
      onPaymentDataChangedShippingOption(e) {
        var t;
        return kc(this, void 0, void 0, (function*() {
          this.selectedShippingOptionId = null === (t = e.shippingOptionData) || void 0 === t ? void 0 : t.id;
          var {
            updatedOptionRequest: n,
            optionErrors: r
          } = yield this.dispatchShippingOptionChanged(this.selectedShippingOptionId, this.shippingOptions);
          return this.paymentDataChangedComplete(n, r)
        }))
      }
      dispatchShippingOptionChanged(e, t) {
        var n = {
          optionErrors: [],
          updatedOptionRequest: {}
        };
        if (!this.handlers.includes(Ii.SHIPPING_OPTION_CHANGED)) return Promise.resolve(n);
        var r = bc(e, t);
        return r ? this.isDestroyed ? Promise.resolve({
          optionErrors: [{
            intent: d.SHIPPING_OPTION,
            message: "An error occurred when attempting to submit payment, please close this window and try again.",
            reason: _c.PAYMENT_METHOD_DESTROYED
          }],
          updatedOptionRequest: {}
        }) : new Promise((e => {
          this.req.dispatchEvent(Ii.SHIPPING_OPTION_CHANGED, {
            contactOrOption: r
          }, (function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            e({
              optionErrors: xc(t, d.SHIPPING_OPTION),
              updatedOptionRequest: t
            })
          }))
        })) : Promise.resolve(n)
      }
      onPaymentDataChangedShippingAddress(e) {
        var t;
        return kc(this, void 0, void 0, (function*() {
          var {
            updatedContactRequest: n,
            contactErrors: r
          } = yield this.dispatchShippingContactChanged(e);
          if (void 0 === this.req.shippingOptions || 0 === this.req.shippingOptions.length) return this.paymentDataChangedComplete(n, r);
          var i = this.shippingOptions;
          void 0 !== n.shippingOptions ? (i = n.shippingOptions, this.selectedShippingOptionId = n.shippingOptions[0].id) : this.selectedShippingOptionId = null === (t = this.shippingOptions) || void 0 === t ? void 0 : t[0].id;
          var {
            updatedOptionRequest: o,
            optionErrors: s
          } = yield this.dispatchShippingOptionChanged(this.selectedShippingOptionId, i), a = Object.assign({}, n, o), c = r.concat(s);
          return this.paymentDataChangedComplete(a, c)
        }))
      }
      dispatchShippingContactChanged(e) {
        var t = {
          contactErrors: [],
          updatedContactRequest: {}
        };
        return new Promise((n => {
          var r;
          void 0 !== e.shippingAddress && this.handlers.includes(Ii.SHIPPING_CONTACT_CHANGED) ? this.isDestroyed ? n({
            contactErrors: [{
              intent: d.SHIPPING_ADDRESS,
              message: "An error occurred when attempting to submit payment, please close this window and try again.",
              reason: _c.PAYMENT_METHOD_DESTROYED
            }],
            updatedContactRequest: {}
          }) : this.req.dispatchEvent(Ii.SHIPPING_CONTACT_CHANGED, {
            contactOrOption: (r = e.shippingAddress, {
              city: r.locality,
              countryCode: r.countryCode,
              postalCode: r.postalCode,
              state: r.administrativeArea
            })
          }, (function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            n({
              contactErrors: xc(e, d.SHIPPING_ADDRESS),
              updatedContactRequest: e
            })
          })) : n(t)
        }))
      }
      paymentDataChangedComplete(e, t) {
        e.shippingOptions && e.shippingOptions.length > 0 && (this.shippingOptions = e.shippingOptions);
        var n = function(e, t, n, r) {
          var i, o, s, a, {
              total: c,
              countryCode: l,
              currencyCode: u,
              lineItems: d
            } = t,
            h = n,
            p = wc(null !== (i = e.total) && void 0 !== i ? i : c),
            f = {
              totalPrice: p.price,
              totalPriceLabel: p.label,
              totalPriceStatus: p.status
            },
            g = Object.assign({}, {
              countryCode: l,
              currencyCode: u
            }, f),
            m = (o = d, (a = null != (s = e.lineItems) ? s : o) ? a.map((e => wc(e))) : []);
          m.length > 0 && (g.displayItems = m);
          var v = {
              newTransactionInfo: g
            },
            E = Lc(u, r, h, e.shippingOptions);
          return E && (v.newShippingOptionParameters = E), v
        }(e, this.req, this.shippingOptions, this.selectedShippingOptionId);
        return t.length > 0 && (n.error = t[0]), n
      }
      requestGooglePayCardNonce(e) {
        return kc(this, void 0, void 0, (function*() {
          var t = this.session,
            n = bc(this.selectedShippingOptionId, this.shippingOptions);
          try {
            var r = yield this.messenger.request(ri.REQUEST_GOOGLE_PAY_CARD_NONCE, {
              options: {
                paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
                session: t
              },
              payload: e
            });
            return this.context.setPaymentMethodTrackingId(r.paymentMethodTrackingId), this.context.setSessionId(r.sessionId), this.wasFirstInteractionCalled = !1,
              function(e, t) {
                var {
                  card: n,
                  cardNonce: r,
                  contact: i
                } = e, o = {
                  details: {
                    card: n,
                    method: Ci.GOOGLE_PAY
                  },
                  token: r
                };
                return void 0 !== i && (o.details.shipping = {
                  contact: i
                }, t && (o.details.shipping.option = t)), o
              }(r, n)
          } catch (e) {
            throw e instanceof zn || this.errorLogger.captureException(e, t.instanceId, t.sessionId), e
          }
        }))
      }
      handleFirstInteraction() {
        this.wasFirstInteractionCalled || (this.wasFirstInteractionCalled = !0, this.metricsHandler.logEvent(hr.FirstInteraction))
      }
    }! function(e) {
      e.CanUseWebSDK = "can_use_websdk"
    }(Mc || (Mc = {})),
    function(e) {
      e.REQUEST_HYDRATION = "REQUEST_HYDRATION"
    }(Uc || (Uc = {}));
    var Fc = function(e) {
        return wa({
          frameborder: "0",
          height: "0",
          scrolling: "no",
          src: S.IFRAME_SRC,
          style: "border: none !important; display: block !important; visibility: hidden !important",
          width: "0"
        })
      },
      Bc = function(e) {
        var t = new(Cr[e.name] || r);
        return t.fromSerializedError(e), t
      },
      Vc = function(e) {
        var t = e;
        return !0 === t._isSerializedError && void 0 !== t.name && void 0 !== t.message
      },
      jc = function(e) {
        return {
          _isSerializedError: !0,
          errors: e.errors,
          message: e.message,
          name: e.name
        }
      },
      qc = "channel:connected",
      Yc = "channel:connecting",
      Kc = "channel:close",
      Wc = "channel:error";
    class zc {
      constructor(e) {
        this.receiveMessage = e => {
          switch (e.data) {
            case this.messageWithName(Yc):
              this.handleConnecting(e);
              break;
            case this.messageWithName(qc):
              this.handleConnected();
              break;
            case this.messageWithName(Kc):
              this.close();
              break;
            case this.messageWithName(Wc):
              break;
            default:
              this.handleMessage(e)
          }
        }, this.connected = !1, this.listeners = [], this.messageBuffer = [], this.name = e ? ":".concat(e) : ""
      }
      close() {
        this.port && (this.postMessage(this.messageWithName(Kc)), this.port.close(), this.port = void 0, this.connected || window.removeEventListener("message", this.receiveMessage)), this.connected = !1
      }
      connect(e) {
        if (this.connected) throw new sr("message channel is already connected");
        if (e) {
          if (void 0 === e.origin) throw new sr("message channel remote.origin must be defined");
          if (null === e.window) throw new sr("message channel remote.window cannot be null");
          var t = new MessageChannel;
          this.setupPort(t.port1), e.window.postMessage(this.messageWithName(Yc), e.origin, [t.port2])
        } else window.addEventListener("message", this.receiveMessage)
      }
      setErrorLogger(e) {
        this.errorLogger = e
      }
      handleConnecting(e) {
        if (this.connected) throw new sr("message channel should not be connecting because already connected");
        window.removeEventListener("message", this.receiveMessage), this.setupPort(e.ports[0]), this.postMessage(this.messageWithName(qc)), this.connectionEstablished()
      }
      handleConnected() {
        if (this.connected) throw new sr("message channel already connected");
        this.connectionEstablished()
      }
      connectionEstablished() {
        for (this.connected = !0; this.messageBuffer.length > 0;) this.postMessage(this.messageBuffer.shift())
      }
      handleMessage(e) {
        this.listeners.forEach((t => {
          t(e)
        }))
      }
      setupPort(e) {
        this.port = e, this.port.onmessage = this.receiveMessage, this.port.onmessageerror = e => {
          this.postMessage(this.messageWithName(Wc)), this.errorLogger && this.errorLogger.captureException(new sr("message channel failed to deserialize message: ".concat(JSON.stringify(e))))
        }
      }
      set onmessage(e) {
        this.listeners.push(e)
      }
      postMessage(e) {
        this.port && this.connected ? this.port.postMessage(e) : this.messageBuffer.push(e)
      }
      messageWithName(e) {
        return e + this.name
      }
    }
    var Zc, Qc = Un.secondsToMs(128),
      Jc = Un.secondsToMs(2);
    ! function(e) {
      e.ACK = "ack", e.OK = "ok", e.ERROR = "error"
    }(Zc || (Zc = {}));
    class Xc {
      constructor(e) {
        this.messageListeners = {}, this.channel = new zc(e), this.channel.onmessage = this.handleMessage.bind(this)
      }
      setErrorLogger(e) {
        this.errorLogger = e, this.channel.setErrorLogger(e)
      }
      sendOneWayMessage(e, t) {
        var {
          payload: n,
          options: r
        } = t || {}, {
          session: i,
          paymentMethodInstanceId: o,
          paymentMethodTrackingId: s
        } = r || {};
        return this.message({
          id: this.uniqueId(),
          mustAcknowledge: !1,
          mustRespond: !1,
          payload: n,
          paymentMethodInstanceId: o,
          paymentMethodTrackingId: s,
          session: i,
          type: e
        })
      }
      sendMessage(e, t) {
        var {
          payload: n,
          options: r
        } = t || {}, {
          session: i,
          paymentMethodInstanceId: o,
          paymentMethodTrackingId: s
        } = r || {};
        return this.message({
          id: this.uniqueId(),
          mustAcknowledge: !0,
          mustRespond: !1,
          payload: n,
          paymentMethodInstanceId: o,
          paymentMethodTrackingId: s,
          session: i,
          type: e
        })
      }
      request(e, t) {
        var {
          payload: n,
          options: r
        } = t || {}, {
          session: i,
          paymentMethodInstanceId: o,
          paymentMethodTrackingId: s
        } = r || {};
        return this.message({
          id: this.uniqueId(),
          mustAcknowledge: !0,
          mustRespond: !0,
          payload: n,
          paymentMethodInstanceId: o,
          paymentMethodTrackingId: s,
          session: i,
          type: e
        })
      }
      respond(e, t) {
        var n = "".concat(e.type, ":").concat(Zc.OK);
        return this.postResponse(n, e, t)
      }
      reject(e, t) {
        var n = "".concat(e.type, ":").concat(Zc.ERROR);
        if (t instanceof r) {
          var i = jc(t);
          return this.postResponse(n, e, i)
        }
        return this.postResponse(n, e, t)
      }
      onMessage(e, t) {
        var n = t || this.uniqueId();
        return this.addMessageEventListener(e, n), n
      }
      connect(e) {
        this.channel.connect(e)
      }
      close() {
        this.channel.close()
      }
      handleMessage(e) {
        var t, n = this.messageListeners[e.data.type];
        e.data.type && "undefined" !== e.data.type ? n ? (e.data.mustAcknowledge && this.acknowledge(e.data), Object.values(n).forEach((t => {
          t.forEach((t => {
            t(e)
          }))
        }))) : this.reject(e.data, new sr("Listener does not exist for ".concat(e.data.type, ", it must be added to message-bus"))) : null === (t = this.errorLogger) || void 0 === t || t.captureException(new sr("Received a messenger message with an undefined type"))
      }
      logMessengerTimeout(e, t) {
        var n, r, i = new cr(e.type, e.id),
          o = {
            messageId: String(e.id),
            timeoutSeconds: String(Un.msToSeconds(t))
          };
        this.errorLogger && this.errorLogger.captureException(i, null === (n = e.session) || void 0 === n ? void 0 : n.instanceId, null === (r = e.session) || void 0 === r ? void 0 : r.sessionId, o)
      }
      handleMessageContract(e) {
        if (!e.mustAcknowledge) return new Promise((e => {
          e({})
        }));
        var t, n, r = () => {
            [Zc.ACK, Zc.OK, Zc.ERROR].forEach((n => {
              delete this.messageListeners["".concat(e.type, ":").concat(n)][t]
            }))
          },
          i = Jc,
          o = 0,
          s = () => {
            if (o < Qc) {
              var t = i - o;
              n = window.setTimeout((() => {
                o += t, this.logMessengerTimeout(e, o), s()
              }), t), i *= 2
            }
          };
        return s(), new Promise(((i, o) => {
          t = this.onMessage({
            listener() {
              clearTimeout(n), e.mustRespond || (r(), i({}))
            },
            messageType: "".concat(e.type, ":").concat(Zc.ACK)
          }), this.onMessage({
            listener(e) {
              r(), i(e.data.payload)
            },
            messageType: "".concat(e.type, ":").concat(Zc.OK)
          }, t), this.onMessage({
            listener(e) {
              r();
              var {
                payload: t
              } = e.data;
              if (Vc(t)) {
                var n = Bc(t);
                o(n)
              } else o(t)
            },
            messageType: "".concat(e.type, ":").concat(Zc.ERROR)
          }, t)
        }))
      }
      acknowledge(e) {
        var t = "".concat(e.type, ":").concat(Zc.ACK);
        return this.message({
          id: e.id,
          mustAcknowledge: !1,
          mustRespond: !1,
          type: t
        })
      }
      postResponse(e, t, n) {
        return this.message({
          id: t.id,
          mustAcknowledge: !0,
          mustRespond: !1,
          payload: n,
          type: e
        })
      }
      message(e) {
        var t, n = this.handleMessageContract(e);
        return e.type && "undefined" !== e.type || null === (t = this.errorLogger) || void 0 === t || t.captureException(new sr("Attempting to send a messenger message with an undefined type")), this.channel.postMessage(e), n
      }
      addMessageEventListener(e, t) {
        var {
          messageType: n,
          listener: r
        } = e;
        this.messageListeners[n] = this.messageListeners[n] || {}, this.messageListeners[n][t] = this.messageListeners[n][t] || [], this.messageListeners[n][t].push(r)
      }
      uniqueId() {
        return Date.now().toString() + Math.floor(8e3 * Math.random())
      }
    }
    var $c = {
        build: function(e, t, n) {
          return r = this, i = void 0, s = function*() {
            var r = new Xc(n);
            return r.connect({
              origin: S.ASSET_URL,
              window: e.contentWindow
            }), yield r.sendMessage("INITIALIZE", {
              payload: t
            }), r
          }, new((o = void 0) || (o = Promise))((function(e, t) {
            function n(e) {
              try {
                c(s.next(e))
              } catch (e) {
                t(e)
              }
            }

            function a(e) {
              try {
                c(s.throw(e))
              } catch (e) {
                t(e)
              }
            }

            function c(t) {
              var r;
              t.done ? e(t.value) : (r = t.value, r instanceof o ? r : new o((function(e) {
                e(r)
              }))).then(n, a)
            }
            c((s = s.apply(r, i || [])).next())
          }));
          var r, i, o, s
        }
      },
      el = function(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
          function s(e) {
            try {
              c(r.next(e))
            } catch (e) {
              o(e)
            }
          }

          function a(e) {
            try {
              c(r.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
              e(t)
            }))).then(s, a)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      },
      tl = {
        initializeAnalytics: function(e, t, n) {
          return el(this, void 0, void 0, (function*() {
            var {
              applicationId: r,
              locationId: i,
              sourceUrl: o
            } = e.serialize();
            try {
              var s = yield vi.getToken({
                applicationId: r,
                locationId: i,
                websiteUrl: o
              });
              e.setAnalyticsToken(s)
            } catch (r) {
              r instanceof _n && t.captureException(r, e.instanceId, e.sessionId), n && window.clearInterval(n)
            }
          }))
        },
        initializePayment: function(e, t, n) {
          var {
            applicationId: r,
            locationId: i,
            hostname: o,
            sourceUrl: s
          } = e;
          return el(this, void 0, void 0, (function*() {
            t.logEvent({
              event: hr.InitializeStart,
              eventSource: vr.App
            });
            var e, a, c = new bo(navigator.language),
              l = c.getCurrentLocale();
            try {
              e = yield Fc()
            } catch (e) {
              if (t.logEvent({
                  event: hr.InitializeError,
                  eventSource: vr.App
                }), n.captureException(e), e instanceof sr) throw new Jn("initializing the payment method");
              throw e
            }
            try {
              (a = yield $c.build(e, {
                applicationId: r,
                hostname: o,
                locale: l,
                locationId: i
              })).setErrorLogger(n);
              var {
                avt: u,
                sessionId: d,
                applePartnerInternalMerchantIdentifier: h,
                instanceId: p,
                paymentMethodSupportDetail: f,
                featureFlags: g
              } = yield a.request(Uc.REQUEST_HYDRATION, {
                payload: {
                  applicationId: r,
                  hostname: o,
                  locationId: i
                }
              }), m = new Ta({
                applePayMerchantIdentifier: h,
                applicationId: r,
                avt: u,
                hostname: o,
                instanceId: p,
                locale: l,
                locationId: i,
                sessionId: d,
                sourceUrl: s
              });
              return t.logEvent({
                event: hr.InitializeOK,
                eventSource: vr.App
              }, p, d), {
                featureFlags: g,
                localeStrings: c,
                messenger: a,
                paymentMethodSupportDetail: f,
                session: m
              }
            } catch (e) {
              if (t.logEvent({
                  event: hr.InitializeError,
                  eventSource: vr.App
                }), n.captureException(e), e instanceof sr) throw new Jn("initializing the payment method");
              throw e
            }
          }))
        },
        validateVerificationDetails: function(e, t) {
          var n = [];
          return e.billingContact && "object" == typeof e.billingContact || n.push(new $r(t, "details.billingContact", "object")), e.intent && "string" == typeof e.intent && ["CHARGE", "STORE"].includes(e.intent) || n.push(new $r(t, "details.intent", "string")), "CHARGE" === e.intent && (e.amount && "string" == typeof e.amount || n.push(new $r(t, "details.amount", "string")), e.currencyCode && "string" == typeof e.currencyCode || n.push(new $r(t, "details.currencyCode", "string"))), n
        }
      },
      nl = function(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
          function s(e) {
            try {
              c(r.next(e))
            } catch (e) {
              o(e)
            }
          }

          function a(e) {
            try {
              c(r.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
              e(t)
            }))).then(s, a)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      };

    function rl(e, t) {
      var {
        paymentMethodSupportDetail: n
      } = t;
      if (!t.getSession().locationId) throw new En(Jr.INVALID_CONFIG, "locationId");
      if (n && n[e] && !n[e].IsSupported) {
        var {
          UnsupportedReasonType: r
        } = n[e], i = Jr.UNKNOWN;
        throw r && r in Qr && (i = Xr[r]), t.metricsHandler.logEvent(hr.BuildError), new En(i)
      }
    }

    function il(e, t) {
      var {
        isValid: n,
        missingFields: r
      } = function(e) {
        return fc(e, {
          countryCode: "string",
          currencyCode: "string",
          total: {
            amount: "string",
            label: "string"
          }
        })
      }(e);
      if (!n) throw t.metricsHandler.logEvent(hr.BuildError), new ln(r)
    }
    class ol {
      constructor(e, t, n) {
        this.paymentOptions = e, this.metrics = t, this.errorLogger = n
      }
      setLocale(e) {
        return nl(this, void 0, void 0, (function*() {
          try {
            return (yield this.getPaymentContext(vr.App)).setLocale(e)
          } catch (e) {
            if (e instanceof sr) throw this.errorLogger.captureException(e), new Jn("setting the locale");
            throw e
          }
        }))
      }
      initializePaymentMethod() {
        return this.initializePaymentParamPromise || (this.initializePaymentParamPromise = tl.initializePayment(this.paymentOptions, this.metrics, this.errorLogger)), this.initializePaymentParamPromise
      }
      setAnalytics(e) {
        if (!this.analyticsInterval) {
          var t = this.analyticsInterval = window.setInterval((() => {
            tl.initializeAnalytics(e, this.errorLogger, t)
          }), fi);
          tl.initializeAnalytics(e, this.errorLogger, t)
        }
      }
      getPaymentContext(e) {
        return nl(this, void 0, void 0, (function*() {
          var {
            featureFlags: t,
            localeStrings: n,
            messenger: r,
            session: i,
            paymentMethodSupportDetail: o
          } = yield this.initializePaymentMethod();
          i.avt && this.errorLogger.setAvt(i.avt);
          var s = ii(),
            a = new class {
              constructor(e, t, n, r) {
                this.metricsLogger = e, this.eventSource = n, this.session = t, this.paymentMethodTrackingId = r
              }
              logEvent(e) {
                var t = {
                    event: e,
                    eventSource: this.eventSource
                  },
                  {
                    instanceId: n,
                    sessionId: r
                  } = this.session.serialize();
                return this.metricsLogger.logEvent(t, n, r, this.paymentMethodTrackingId)
              }
              setPaymentMethodTrackingId(e) {
                this.paymentMethodTrackingId = e
              }
              getPaymentMethodTrackingId() {
                return this.paymentMethodTrackingId
              }
            }(this.metrics, i, e, s);
          if (this.setAnalytics(i), this.contextEventTarget || (this.contextEventTarget = new ni), !t.includes(Mc.CanUseWebSDK)) throw new Sn;
          return new zr(this.errorLogger, r, a, i, o, t, n, this.contextEventTarget)
        }))
      }
      verifyBuyer(e, t) {
        return nl(this, void 0, void 0, (function*() {
          var n = [];
          if (this.paymentOptions.locationId && 0 !== this.paymentOptions.locationId.length || n.push(new $r("verifyBuyer", "locationId", "string")), e && "string" == typeof e && 0 !== e.length || n.push(new $r("verifyBuyer", "source", "string")), t && "object" == typeof t ? n.push(...tl.validateVerificationDetails(t, "verifyBuyer")) : n.push(new $r("verifyBuyer", "details", "object")), n.length > 0) throw new ei(n);
          var r = yield this.getPaymentContext(vr.App);
          try {
            r.metricsHandler.logEvent(hr.VerificationStart);
            var i = yield vi.verifyBuyer({
              applicationId: this.paymentOptions.applicationId,
              locationId: this.paymentOptions.locationId,
              websiteUrl: this.paymentOptions.sourceUrl
            }, e, t);
            return r.metricsHandler.logEvent(hr.VerificationOK), i
          } catch (e) {
            if (r.metricsHandler.logEvent(hr.VerificationError), e instanceof _n) throw this.errorLogger.captureException(e), e;
            throw new an(e)
          }
        }))
      }
      card(e) {
        return nl(this, void 0, void 0, (function*() {
          var t = yield this.getPaymentContext(vr.Card);
          t.metricsHandler.logEvent(hr.BuildStart);
          try {
            var n = new Ba(t, e);
            return t.metricsHandler.logEvent(hr.BuildOK), n
          } catch (e) {
            throw t.metricsHandler.logEvent(hr.BuildError), e
          }
        }))
      }
      paymentRequest(e) {
        return new Sc(e)
      }
      googlePay(e) {
        return nl(this, void 0, void 0, (function*() {
          var t, n, r = yield this.getPaymentContext(vr.GooglePay);
          r.metricsHandler.logEvent(hr.BuildStart), rl(Br.GOOGLE_PAY, r),
            function(e) {
              if ("undefined" == typeof ShadowRoot) throw e.metricsHandler.logEvent(hr.BuildError), new En(Jr.GOOGLE_PAY_BROWSER_NOT_SUPPORTED)
            }(r), il(e, r);
          try {
            var i = function(e, t) {
                return nl(this, void 0, void 0, (function*() {
                  return {
                    authJwt: (yield e.request(ri.GENERATE_GOOGLE_PAY_AUTH_TOKEN, {
                      options: {
                        session: t
                      }
                    })).token,
                    merchantId: S.GOOGLE_PAY_MERCHANT_ID
                  }
                }))
              }(r.messenger, r.getSession()),
              o = di();
            [t, n] = yield Promise.all([o, i])
          } catch (e) {
            throw r.metricsHandler.logEvent(hr.BuildError), e
          }
          try {
            var s = new Gc(t, e, r, n);
            return r.metricsHandler.logEvent(hr.BuildOK), s
          } catch (e) {
            throw r.metricsHandler.logEvent(hr.BuildError), e
          }
        }))
      }
      applePay(e) {
        return nl(this, void 0, void 0, (function*() {
          var t = yield this.getPaymentContext(vr.ApplePay);
          t.metricsHandler.logEvent(hr.BuildStart), rl(Br.APPLE_PAY, t), il(e, t);
          try {
            var n = new _o(e, t);
            return t.metricsHandler.logEvent(hr.BuildOK), n
          } catch (e) {
            throw t.metricsHandler.logEvent(hr.BuildError), e
          }
        }))
      }
      ach() {
        return nl(this, void 0, void 0, (function*() {
          var e = yield this.getPaymentContext(vr.Ach);
          e.metricsHandler.logEvent(hr.BuildStart), rl(Br.ACH, e);
          try {
            var t = yield hi();
            return e.metricsHandler.logEvent(hr.BuildOK), new bi(t, e)
          } catch (t) {
            throw e.metricsHandler.logEvent(hr.BuildError), t
          }
        }))
      }
      cashApp(e) {
        return nl(this, void 0, void 0, (function*() {
          var t = yield this.getPaymentContext(vr.CashApp);
          t.metricsHandler.logEvent(hr.BuildStart), rl(Br.CASH_APP, t);
          try {
            var n = new rc(t, e);
            return t.metricsHandler.logEvent(hr.BuildOK), n
          } catch (e) {
            throw t.metricsHandler.logEvent(hr.BuildError), e
          }
        }))
      }
      alipay(e) {
        return nl(this, void 0, void 0, (function*() {
          var t = yield this.getPaymentContext(vr.Alipay);
          t.metricsHandler.logEvent(hr.BuildStart), rl(Br.ALIPAY, t);
          try {
            var n = new Ui(t, e);
            return t.metricsHandler.logEvent(hr.BuildOK), n
          } catch (e) {
            throw t.metricsHandler.logEvent(hr.BuildError), e
          }
        }))
      }
      giftCard(e) {
        return nl(this, void 0, void 0, (function*() {
          var t = yield this.getPaymentContext(vr.GiftCard);
          t.metricsHandler.logEvent(hr.BuildStart);
          try {
            var n = new lc(t, e);
            return t.metricsHandler.logEvent(hr.BuildOK), n
          } catch (e) {
            throw t.metricsHandler.logEvent(hr.BuildError), e
          }
        }))
      }
      destroy() {
        return this.analyticsInterval && window.clearInterval(this.analyticsInterval), Promise.resolve()
      }
    }
    var sl = S.ENABLE_ERROR_LOGGING,
      al = S.env;
    window.Square = {
      errors: Ir,
      payments(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if (!(t = y.windowLocation).hostname.endsWith("localhost") && "https:" !== t.protocol) throw new o;
        if (!y.isSupported()) throw new i;
        ! function(e) {
          if (! function(e) {
              return !(e.length < 22 || e.length > 37) && Pn.test(e) && !Rn.test(e)
            }(e)) throw new On;
          var t = e.match(/^[\w-]{22}$/),
            n = e.startsWith("sq0idp-"),
            r = e.startsWith("sandbox-sq0idb"),
            i = e.startsWith("sq0ids-");
          if (!(t || n || r || i)) throw new On;
          if (n && !wn(E.production)) throw new Tn(E.production, S.env);
          if (r && !wn(E.sandbox)) throw new Tn(E.sandbox, S.env)
        }(e);
        var r = new rn({
            applicationId: e,
            applicationUrl: window.location.origin,
            enableErrorLogging: sl,
            environment: al,
            sourceName: "web-payments-sdk-public",
            useGlobalHandlers: !1,
            version: S.VERSION
          }),
          s = y.windowLocation.hostname,
          a = {
            applicationId: e,
            hostname: s,
            locationId: n,
            sourceUrl: y.windowLocation.origin
          },
          c = new qr({
            applicationId: e,
            hostname: s,
            locationId: n
          });
        return c.logEvent({
          event: hr.LoadOK,
          eventSource: vr.App
        }), new ol(a, c, r)
      }
    }
  })()
})();
