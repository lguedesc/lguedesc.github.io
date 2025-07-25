"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [1039],
  {
    71471: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.VERSION = void 0;
      e.VERSION = "3.2.2";
    },
    29796: function (t, e, r) {
      var n =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            n = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && n >= t.length) t = void 0;
                return { value: t && t[n++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.HandlerList = void 0;
      var i = r(82776);
      var a = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.register = function (t) {
          return this.add(t, t.priority);
        };
        e.prototype.unregister = function (t) {
          this.remove(t);
        };
        e.prototype.handlesDocument = function (t) {
          var e, r;
          try {
            for (var n = o(this), i = n.next(); !i.done; i = n.next()) {
              var a = i.value;
              var u = a.item;
              if (u.handlesDocument(t)) {
                return u;
              }
            }
          } catch (s) {
            e = { error: s };
          } finally {
            try {
              if (i && !i.done && (r = n.return)) r.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
          throw new Error("Can't find handler for document");
        };
        e.prototype.document = function (t, e) {
          if (e === void 0) {
            e = null;
          }
          return this.handlesDocument(t).create(t, e);
        };
        return e;
      })(i.PrioritizedList);
      e.HandlerList = a;
    },
    81039: (t, e, r) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.mathjax = void 0;
      var n = r(71471);
      var o = r(29796);
      var i = r(9841);
      e.mathjax = {
        version: n.VERSION,
        handlers: new o.HandlerList(),
        document: function (t, r) {
          return e.mathjax.handlers.document(t, r);
        },
        handleRetriesFor: i.handleRetriesFor,
        retryAfter: i.retryAfter,
        asyncLoad: null,
      };
    },
    82776: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.PrioritizedList = void 0;
      var r = (function () {
        function t() {
          this.items = [];
          this.items = [];
        }
        t.prototype[Symbol.iterator] = function () {
          var t = 0;
          var e = this.items;
          return {
            next: function () {
              return { value: e[t++], done: t > e.length };
            },
          };
        };
        t.prototype.add = function (e, r) {
          if (r === void 0) {
            r = t.DEFAULTPRIORITY;
          }
          var n = this.items.length;
          do {
            n--;
          } while (n >= 0 && r < this.items[n].priority);
          this.items.splice(n + 1, 0, { item: e, priority: r });
          return e;
        };
        t.prototype.remove = function (t) {
          var e = this.items.length;
          do {
            e--;
          } while (e >= 0 && this.items[e].item !== t);
          if (e >= 0) {
            this.items.splice(e, 1);
          }
        };
        t.DEFAULTPRIORITY = 5;
        return t;
      })();
      e.PrioritizedList = r;
    },
    9841: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.retryAfter = e.handleRetriesFor = void 0;
      function r(t) {
        return new Promise(function e(r, n) {
          try {
            r(t());
          } catch (o) {
            if (o.retry && o.retry instanceof Promise) {
              o.retry
                .then(function () {
                  return e(r, n);
                })
                .catch(function (t) {
                  return n(t);
                });
            } else if (o.restart && o.restart.isCallback) {
              MathJax.Callback.After(function () {
                return e(r, n);
              }, o.restart);
            } else {
              n(o);
            }
          }
        });
      }
      e.handleRetriesFor = r;
      function n(t) {
        var e = new Error("MathJax retry");
        e.retry = t;
        throw e;
      }
      e.retryAfter = n;
    },
  },
]);
