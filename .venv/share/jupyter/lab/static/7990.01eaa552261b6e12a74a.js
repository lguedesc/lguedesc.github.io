/*! For license information please see 7990.01eaa552261b6e12a74a.js.LICENSE.txt */
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7990, 5606, 6372, 3991],
  {
    75086: (e) => {
      "use strict";
      var t = /("(?:[^\\"]|\\.)*")|[:,]/g;
      e.exports = function e(r, n) {
        var i, a, o;
        n = n || {};
        i = JSON.stringify([1], undefined, n.indent === undefined ? 2 : n.indent).slice(2, -3);
        a = i === "" ? Infinity : n.maxLength === undefined ? 80 : n.maxLength;
        o = n.replacer;
        return (function e(r, n, s) {
          var l, c, u, f, h, p, d, v, g, m, y, b;
          if (r && typeof r.toJSON === "function") {
            r = r.toJSON();
          }
          y = JSON.stringify(r, o);
          if (y === undefined) {
            return y;
          }
          d = a - n.length - s;
          if (y.length <= d) {
            g = y.replace(t, function (e, t) {
              return t || e + " ";
            });
            if (g.length <= d) {
              return g;
            }
          }
          if (o != null) {
            r = JSON.parse(y);
            o = undefined;
          }
          if (typeof r === "object" && r !== null) {
            v = n + i;
            u = [];
            c = 0;
            if (Array.isArray(r)) {
              m = "[";
              l = "]";
              d = r.length;
              for (; c < d; c++) {
                u.push(e(r[c], v, c === d - 1 ? 0 : 1) || "null");
              }
            } else {
              m = "{";
              l = "}";
              p = Object.keys(r);
              d = p.length;
              for (; c < d; c++) {
                f = p[c];
                h = JSON.stringify(f) + ": ";
                b = e(r[f], v, h.length + (c === d - 1 ? 0 : 1));
                if (b !== undefined) {
                  u.push(h + b);
                }
              }
            }
            if (u.length > 0) {
              return [m, i + u.join(",\n" + v), l].join("\n" + n);
            }
          }
          return y;
        })(r, "", 0);
      };
    },
    65606: (e) => {
      var t = (e.exports = {});
      var r;
      var n;
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function a() {
        throw new Error("clearTimeout has not been defined");
      }
      (function () {
        try {
          if (typeof setTimeout === "function") {
            r = setTimeout;
          } else {
            r = i;
          }
        } catch (e) {
          r = i;
        }
        try {
          if (typeof clearTimeout === "function") {
            n = clearTimeout;
          } else {
            n = a;
          }
        } catch (e) {
          n = a;
        }
      })();
      function o(e) {
        if (r === setTimeout) {
          return setTimeout(e, 0);
        }
        if ((r === i || !r) && setTimeout) {
          r = setTimeout;
          return setTimeout(e, 0);
        }
        try {
          return r(e, 0);
        } catch (t) {
          try {
            return r.call(null, e, 0);
          } catch (t) {
            return r.call(this, e, 0);
          }
        }
      }
      function s(e) {
        if (n === clearTimeout) {
          return clearTimeout(e);
        }
        if ((n === a || !n) && clearTimeout) {
          n = clearTimeout;
          return clearTimeout(e);
        }
        try {
          return n(e);
        } catch (t) {
          try {
            return n.call(null, e);
          } catch (t) {
            return n.call(this, e);
          }
        }
      }
      var l = [];
      var c = false;
      var u;
      var f = -1;
      function h() {
        if (!c || !u) {
          return;
        }
        c = false;
        if (u.length) {
          l = u.concat(l);
        } else {
          f = -1;
        }
        if (l.length) {
          p();
        }
      }
      function p() {
        if (c) {
          return;
        }
        var e = o(h);
        c = true;
        var t = l.length;
        while (t) {
          u = l;
          l = [];
          while (++f < t) {
            if (u) {
              u[f].run();
            }
          }
          f = -1;
          t = l.length;
        }
        u = null;
        c = false;
        s(e);
      }
      t.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var r = 1; r < arguments.length; r++) {
            t[r - 1] = arguments[r];
          }
        }
        l.push(new d(e, t));
        if (l.length === 1 && !c) {
          o(p);
        }
      };
      function d(e, t) {
        this.fun = e;
        this.array = t;
      }
      d.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      t.title = "browser";
      t.browser = true;
      t.env = {};
      t.argv = [];
      t.version = "";
      t.versions = {};
      function v() {}
      t.on = v;
      t.addListener = v;
      t.once = v;
      t.off = v;
      t.removeListener = v;
      t.removeAllListeners = v;
      t.emit = v;
      t.prependListener = v;
      t.prependOnceListener = v;
      t.listeners = function (e) {
        return [];
      };
      t.binding = function (e) {
        throw new Error("process.binding is not supported");
      };
      t.cwd = function () {
        return "/";
      };
      t.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      };
      t.umask = function () {
        return 0;
      };
    },
    7990: (e, t, r) => {
      "use strict";
      r.r(t);
      r.d(t, { DEFAULT_ACTIONS: () => Ca, default: () => Wa, guessMode: () => Ua, vega: () => Ra, vegaLite: () => Da, version: () => Ta });
      var n = {};
      r.r(n);
      r.d(n, {
        JsonPatchError: () => b,
        _areEquals: () => T,
        applyOperation: () => A,
        applyPatch: () => I,
        applyReducer: () => N,
        deepClone: () => E,
        getValueByPointer: () => O,
        validate: () => L,
        validator: () => S,
      });
      var i = {};
      r.r(i);
      r.d(i, { compare: () => B, generate: () => M, observe: () => _, unobserve: () => P });
      var a = {};
      r.r(a);
      r.d(a, {
        dark: () => Le,
        excel: () => Re,
        fivethirtyeight: () => _e,
        ggplot2: () => ze,
        googlecharts: () => vt,
        latimes: () => qe,
        powerbi: () => Mt,
        quartz: () => Ke,
        urbaninstitute: () => ft,
        version: () => zt,
        vox: () => tt,
      });
      var o =
        (undefined && undefined.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) if (t.hasOwnProperty(r)) e[r] = t[r];
              };
            return e(t, r);
          };
          return function (t, r) {
            e(t, r);
            function n() {
              this.constructor = t;
            }
            t.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var s = Object.prototype.hasOwnProperty;
      function l(e, t) {
        return s.call(e, t);
      }
      function c(e) {
        if (Array.isArray(e)) {
          var t = new Array(e.length);
          for (var r = 0; r < t.length; r++) {
            t[r] = "" + r;
          }
          return t;
        }
        if (Object.keys) {
          return Object.keys(e);
        }
        var n = [];
        for (var i in e) {
          if (l(e, i)) {
            n.push(i);
          }
        }
        return n;
      }
      function u(e) {
        switch (typeof e) {
          case "object":
            return JSON.parse(JSON.stringify(e));
          case "undefined":
            return null;
          default:
            return e;
        }
      }
      function f(e) {
        var t = 0;
        var r = e.length;
        var n;
        while (t < r) {
          n = e.charCodeAt(t);
          if (n >= 48 && n <= 57) {
            t++;
            continue;
          }
          return false;
        }
        return true;
      }
      function h(e) {
        if (e.indexOf("/") === -1 && e.indexOf("~") === -1) return e;
        return e.replace(/~/g, "~0").replace(/\//g, "~1");
      }
      function p(e) {
        return e.replace(/~1/g, "/").replace(/~0/g, "~");
      }
      function d(e, t) {
        var r;
        for (var n in e) {
          if (l(e, n)) {
            if (e[n] === t) {
              return h(n) + "/";
            } else if (typeof e[n] === "object") {
              r = d(e[n], t);
              if (r != "") {
                return h(n) + "/" + r;
              }
            }
          }
        }
        return "";
      }
      function v(e, t) {
        if (e === t) {
          return "/";
        }
        var r = d(e, t);
        if (r === "") {
          throw new Error("Object not found in root");
        }
        return "/" + r;
      }
      function g(e) {
        if (e === undefined) {
          return true;
        }
        if (e) {
          if (Array.isArray(e)) {
            for (var t = 0, r = e.length; t < r; t++) {
              if (g(e[t])) {
                return true;
              }
            }
          } else if (typeof e === "object") {
            var n = c(e);
            var i = n.length;
            for (var a = 0; a < i; a++) {
              if (g(e[n[a]])) {
                return true;
              }
            }
          }
        }
        return false;
      }
      function m(e, t) {
        var r = [e];
        for (var n in t) {
          var i = typeof t[n] === "object" ? JSON.stringify(t[n], null, 2) : t[n];
          if (typeof i !== "undefined") {
            r.push(n + ": " + i);
          }
        }
        return r.join("\n");
      }
      var y = (function (e) {
        o(t, e);
        function t(t, r, n, i, a) {
          var o = this.constructor;
          var s = e.call(this, m(t, { name: r, index: n, operation: i, tree: a })) || this;
          s.name = r;
          s.index = n;
          s.operation = i;
          s.tree = a;
          Object.setPrototypeOf(s, o.prototype);
          s.message = m(t, { name: r, index: n, operation: i, tree: a });
          return s;
        }
        return t;
      })(Error);
      var b = y;
      var E = u;
      var w = {
        add: function (e, t, r) {
          e[t] = this.value;
          return { newDocument: r };
        },
        remove: function (e, t, r) {
          var n = e[t];
          delete e[t];
          return { newDocument: r, removed: n };
        },
        replace: function (e, t, r) {
          var n = e[t];
          e[t] = this.value;
          return { newDocument: r, removed: n };
        },
        move: function (e, t, r) {
          var n = O(r, this.path);
          if (n) {
            n = u(n);
          }
          var i = A(r, { op: "remove", path: this.from }).removed;
          A(r, { op: "add", path: this.path, value: i });
          return { newDocument: r, removed: n };
        },
        copy: function (e, t, r) {
          var n = O(r, this.from);
          A(r, { op: "add", path: this.path, value: u(n) });
          return { newDocument: r };
        },
        test: function (e, t, r) {
          return { newDocument: r, test: T(e[t], this.value) };
        },
        _get: function (e, t, r) {
          this.value = e[t];
          return { newDocument: r };
        },
      };
      var x = {
        add: function (e, t, r) {
          if (f(t)) {
            e.splice(t, 0, this.value);
          } else {
            e[t] = this.value;
          }
          return { newDocument: r, index: t };
        },
        remove: function (e, t, r) {
          var n = e.splice(t, 1);
          return { newDocument: r, removed: n[0] };
        },
        replace: function (e, t, r) {
          var n = e[t];
          e[t] = this.value;
          return { newDocument: r, removed: n };
        },
        move: w.move,
        copy: w.copy,
        test: w.test,
        _get: w._get,
      };
      function O(e, t) {
        if (t == "") {
          return e;
        }
        var r = { op: "_get", path: t };
        A(e, r);
        return r.value;
      }
      function A(e, t, r, n, i, a) {
        if (r === void 0) {
          r = false;
        }
        if (n === void 0) {
          n = true;
        }
        if (i === void 0) {
          i = true;
        }
        if (a === void 0) {
          a = 0;
        }
        if (r) {
          if (typeof r == "function") {
            r(t, 0, e, t.path);
          } else {
            S(t, 0);
          }
        }
        if (t.path === "") {
          var o = { newDocument: e };
          if (t.op === "add") {
            o.newDocument = t.value;
            return o;
          } else if (t.op === "replace") {
            o.newDocument = t.value;
            o.removed = e;
            return o;
          } else if (t.op === "move" || t.op === "copy") {
            o.newDocument = O(e, t.from);
            if (t.op === "move") {
              o.removed = e;
            }
            return o;
          } else if (t.op === "test") {
            o.test = T(e, t.value);
            if (o.test === false) {
              throw new b("Test operation failed", "TEST_OPERATION_FAILED", a, t, e);
            }
            o.newDocument = e;
            return o;
          } else if (t.op === "remove") {
            o.removed = e;
            o.newDocument = null;
            return o;
          } else if (t.op === "_get") {
            t.value = e;
            return o;
          } else {
            if (r) {
              throw new b("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", a, t, e);
            } else {
              return o;
            }
          }
        } else {
          if (!n) {
            e = u(e);
          }
          var s = t.path || "";
          var l = s.split("/");
          var c = e;
          var h = 1;
          var d = l.length;
          var v = undefined;
          var g = void 0;
          var m = void 0;
          if (typeof r == "function") {
            m = r;
          } else {
            m = S;
          }
          while (true) {
            g = l[h];
            if (g && g.indexOf("~") != -1) {
              g = p(g);
            }
            if (i && (g == "__proto__" || (g == "prototype" && h > 0 && l[h - 1] == "constructor"))) {
              throw new TypeError(
                "JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README"
              );
            }
            if (r) {
              if (v === undefined) {
                if (c[g] === undefined) {
                  v = l.slice(0, h).join("/");
                } else if (h == d - 1) {
                  v = t.path;
                }
                if (v !== undefined) {
                  m(t, 0, e, v);
                }
              }
            }
            h++;
            if (Array.isArray(c)) {
              if (g === "-") {
                g = c.length;
              } else {
                if (r && !f(g)) {
                  throw new b(
                    "Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index",
                    "OPERATION_PATH_ILLEGAL_ARRAY_INDEX",
                    a,
                    t,
                    e
                  );
                } else if (f(g)) {
                  g = ~~g;
                }
              }
              if (h >= d) {
                if (r && t.op === "add" && g > c.length) {
                  throw new b(
                    "The specified index MUST NOT be greater than the number of elements in the array",
                    "OPERATION_VALUE_OUT_OF_BOUNDS",
                    a,
                    t,
                    e
                  );
                }
                var o = x[t.op].call(t, c, g, e);
                if (o.test === false) {
                  throw new b("Test operation failed", "TEST_OPERATION_FAILED", a, t, e);
                }
                return o;
              }
            } else {
              if (h >= d) {
                var o = w[t.op].call(t, c, g, e);
                if (o.test === false) {
                  throw new b("Test operation failed", "TEST_OPERATION_FAILED", a, t, e);
                }
                return o;
              }
            }
            c = c[g];
            if (r && h < d && (!c || typeof c !== "object")) {
              throw new b("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", a, t, e);
            }
          }
        }
      }
      function I(e, t, r, n, i) {
        if (n === void 0) {
          n = true;
        }
        if (i === void 0) {
          i = true;
        }
        if (r) {
          if (!Array.isArray(t)) {
            throw new b("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
          }
        }
        if (!n) {
          e = u(e);
        }
        var a = new Array(t.length);
        for (var o = 0, s = t.length; o < s; o++) {
          a[o] = A(e, t[o], r, true, i, o);
          e = a[o].newDocument;
        }
        a.newDocument = e;
        return a;
      }
      function N(e, t, r) {
        var n = A(e, t);
        if (n.test === false) {
          throw new b("Test operation failed", "TEST_OPERATION_FAILED", r, t, e);
        }
        return n.newDocument;
      }
      function S(e, t, r, n) {
        if (typeof e !== "object" || e === null || Array.isArray(e)) {
          throw new b("Operation is not an object", "OPERATION_NOT_AN_OBJECT", t, e, r);
        } else if (!w[e.op]) {
          throw new b("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", t, e, r);
        } else if (typeof e.path !== "string") {
          throw new b("Operation `path` property is not a string", "OPERATION_PATH_INVALID", t, e, r);
        } else if (e.path.indexOf("/") !== 0 && e.path.length > 0) {
          throw new b('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", t, e, r);
        } else if ((e.op === "move" || e.op === "copy") && typeof e.from !== "string") {
          throw new b("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", t, e, r);
        } else if ((e.op === "add" || e.op === "replace" || e.op === "test") && e.value === undefined) {
          throw new b(
            "Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)",
            "OPERATION_VALUE_REQUIRED",
            t,
            e,
            r
          );
        } else if ((e.op === "add" || e.op === "replace" || e.op === "test") && g(e.value)) {
          throw new b(
            "Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)",
            "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",
            t,
            e,
            r
          );
        } else if (r) {
          if (e.op == "add") {
            var i = e.path.split("/").length;
            var a = n.split("/").length;
            if (i !== a + 1 && i !== a) {
              throw new b("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", t, e, r);
            }
          } else if (e.op === "replace" || e.op === "remove" || e.op === "_get") {
            if (e.path !== n) {
              throw new b("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", t, e, r);
            }
          } else if (e.op === "move" || e.op === "copy") {
            var o = { op: "_get", path: e.from, value: undefined };
            var s = L([o], r);
            if (s && s.name === "OPERATION_PATH_UNRESOLVABLE") {
              throw new b("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", t, e, r);
            }
          }
        }
      }
      function L(e, t, r) {
        try {
          if (!Array.isArray(e)) {
            throw new b("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
          }
          if (t) {
            I(u(t), u(e), r || true);
          } else {
            r = r || S;
            for (var n = 0; n < e.length; n++) {
              r(e[n], n, t, undefined);
            }
          }
        } catch (ae) {
          if (ae instanceof b) {
            return ae;
          } else {
            throw ae;
          }
        }
      }
      function T(e, t) {
        if (e === t) return true;
        if (e && t && typeof e == "object" && typeof t == "object") {
          var r = Array.isArray(e),
            n = Array.isArray(t),
            i,
            a,
            o;
          if (r && n) {
            a = e.length;
            if (a != t.length) return false;
            for (i = a; i-- !== 0; ) if (!T(e[i], t[i])) return false;
            return true;
          }
          if (r != n) return false;
          var s = Object.keys(e);
          a = s.length;
          if (a !== Object.keys(t).length) return false;
          for (i = a; i-- !== 0; ) if (!t.hasOwnProperty(s[i])) return false;
          for (i = a; i-- !== 0; ) {
            o = s[i];
            if (!T(e[o], t[o])) return false;
          }
          return true;
        }
        return e !== e && t !== t;
      }
      var R = new WeakMap();
      var D = (function () {
        function e(e) {
          this.observers = new Map();
          this.obj = e;
        }
        return e;
      })();
      var k = (function () {
        function e(e, t) {
          this.callback = e;
          this.observer = t;
        }
        return e;
      })();
      function C(e) {
        return R.get(e);
      }
      function F(e, t) {
        return e.observers.get(t);
      }
      function j(e, t) {
        e.observers.delete(t.callback);
      }
      function P(e, t) {
        t.unobserve();
      }
      function _(e, t) {
        var r = [];
        var n;
        var i = C(e);
        if (!i) {
          i = new D(e);
          R.set(e, i);
        } else {
          var a = F(i, t);
          n = a && a.observer;
        }
        if (n) {
          return n;
        }
        n = {};
        i.value = u(e);
        if (t) {
          n.callback = t;
          n.next = null;
          var o = function () {
            M(n);
          };
          var s = function () {
            clearTimeout(n.next);
            n.next = setTimeout(o);
          };
          if (typeof window !== "undefined") {
            window.addEventListener("mouseup", s);
            window.addEventListener("keyup", s);
            window.addEventListener("mousedown", s);
            window.addEventListener("keydown", s);
            window.addEventListener("change", s);
          }
        }
        n.patches = r;
        n.object = e;
        n.unobserve = function () {
          M(n);
          clearTimeout(n.next);
          j(i, n);
          if (typeof window !== "undefined") {
            window.removeEventListener("mouseup", s);
            window.removeEventListener("keyup", s);
            window.removeEventListener("mousedown", s);
            window.removeEventListener("keydown", s);
            window.removeEventListener("change", s);
          }
        };
        i.observers.set(t, new k(t, n));
        return n;
      }
      function M(e, t) {
        if (t === void 0) {
          t = false;
        }
        var r = R.get(e.object);
        z(r.value, e.object, e.patches, "", t);
        if (e.patches.length) {
          I(r.value, e.patches);
        }
        var n = e.patches;
        if (n.length > 0) {
          e.patches = [];
          if (e.callback) {
            e.callback(n);
          }
        }
        return n;
      }
      function z(e, t, r, n, i) {
        if (t === e) {
          return;
        }
        if (typeof t.toJSON === "function") {
          t = t.toJSON();
        }
        var a = c(t);
        var o = c(e);
        var s = false;
        var f = false;
        for (var p = o.length - 1; p >= 0; p--) {
          var d = o[p];
          var v = e[d];
          if (l(t, d) && !(t[d] === undefined && v !== undefined && Array.isArray(t) === false)) {
            var g = t[d];
            if (typeof v == "object" && v != null && typeof g == "object" && g != null && Array.isArray(v) === Array.isArray(g)) {
              z(v, g, r, n + "/" + h(d), i);
            } else {
              if (v !== g) {
                s = true;
                if (i) {
                  r.push({ op: "test", path: n + "/" + h(d), value: u(v) });
                }
                r.push({ op: "replace", path: n + "/" + h(d), value: u(g) });
              }
            }
          } else if (Array.isArray(e) === Array.isArray(t)) {
            if (i) {
              r.push({ op: "test", path: n + "/" + h(d), value: u(v) });
            }
            r.push({ op: "remove", path: n + "/" + h(d) });
            f = true;
          } else {
            if (i) {
              r.push({ op: "test", path: n, value: e });
            }
            r.push({ op: "replace", path: n, value: t });
            s = true;
          }
        }
        if (!f && a.length == o.length) {
          return;
        }
        for (var p = 0; p < a.length; p++) {
          var d = a[p];
          if (!l(e, d) && t[d] !== undefined) {
            r.push({ op: "add", path: n + "/" + h(d), value: u(t[d]) });
          }
        }
      }
      function B(e, t, r) {
        if (r === void 0) {
          r = false;
        }
        var n = [];
        z(e, t, n, "", r);
        return n;
      }
      const G = Object.assign({}, n, i, { JsonPatchError: y, deepClone: u, escapePathComponent: h, unescapePathComponent: p });
      var U = r(75086);
      var V = r.n(U);
      var X = r(78352);
      function $(e, t, r) {
        let n;
        if (t.x2) {
          if (t.x) {
            if (r && e.x > e.x2) {
              n = e.x;
              e.x = e.x2;
              e.x2 = n;
            }
            e.width = e.x2 - e.x;
          } else {
            e.x = e.x2 - (e.width || 0);
          }
        }
        if (t.xc) {
          e.x = e.xc - (e.width || 0) / 2;
        }
        if (t.y2) {
          if (t.y) {
            if (r && e.y > e.y2) {
              n = e.y;
              e.y = e.y2;
              e.y2 = n;
            }
            e.height = e.y2 - e.y;
          } else {
            e.y = e.y2 - (e.height || 0);
          }
        }
        if (t.yc) {
          e.y = e.yc - (e.height || 0) / 2;
        }
      }
      var W = {
        NaN,
        E: Math.E,
        LN2: Math.LN2,
        LN10: Math.LN10,
        LOG2E: Math.LOG2E,
        LOG10E: Math.LOG10E,
        PI: Math.PI,
        SQRT1_2: Math.SQRT1_2,
        SQRT2: Math.SQRT2,
        MIN_VALUE: Number.MIN_VALUE,
        MAX_VALUE: Number.MAX_VALUE,
      };
      var H = {
        "*": (e, t) => e * t,
        "+": (e, t) => e + t,
        "-": (e, t) => e - t,
        "/": (e, t) => e / t,
        "%": (e, t) => e % t,
        ">": (e, t) => e > t,
        "<": (e, t) => e < t,
        "<=": (e, t) => e <= t,
        ">=": (e, t) => e >= t,
        "==": (e, t) => e == t,
        "!=": (e, t) => e != t,
        "===": (e, t) => e === t,
        "!==": (e, t) => e !== t,
        "&": (e, t) => e & t,
        "|": (e, t) => e | t,
        "^": (e, t) => e ^ t,
        "<<": (e, t) => e << t,
        ">>": (e, t) => e >> t,
        ">>>": (e, t) => e >>> t,
      };
      var Y = { "+": (e) => +e, "-": (e) => -e, "~": (e) => ~e, "!": (e) => !e };
      const J = Array.prototype.slice;
      const q = (e, t, r) => {
        const n = r ? r(t[0]) : t[0];
        return n[e].apply(n, J.call(t, 1));
      };
      const Q = (e, t, r, n, i, a, o) => new Date(e, t || 0, r != null ? r : 1, n || 0, i || 0, a || 0, o || 0);
      var Z = {
        isNaN: Number.isNaN,
        isFinite: Number.isFinite,
        abs: Math.abs,
        acos: Math.acos,
        asin: Math.asin,
        atan: Math.atan,
        atan2: Math.atan2,
        ceil: Math.ceil,
        cos: Math.cos,
        exp: Math.exp,
        floor: Math.floor,
        log: Math.log,
        max: Math.max,
        min: Math.min,
        pow: Math.pow,
        random: Math.random,
        round: Math.round,
        sin: Math.sin,
        sqrt: Math.sqrt,
        tan: Math.tan,
        clamp: (e, t, r) => Math.max(t, Math.min(r, e)),
        now: Date.now,
        utc: Date.UTC,
        datetime: Q,
        date: (e) => new Date(e).getDate(),
        day: (e) => new Date(e).getDay(),
        year: (e) => new Date(e).getFullYear(),
        month: (e) => new Date(e).getMonth(),
        hours: (e) => new Date(e).getHours(),
        minutes: (e) => new Date(e).getMinutes(),
        seconds: (e) => new Date(e).getSeconds(),
        milliseconds: (e) => new Date(e).getMilliseconds(),
        time: (e) => new Date(e).getTime(),
        timezoneoffset: (e) => new Date(e).getTimezoneOffset(),
        utcdate: (e) => new Date(e).getUTCDate(),
        utcday: (e) => new Date(e).getUTCDay(),
        utcyear: (e) => new Date(e).getUTCFullYear(),
        utcmonth: (e) => new Date(e).getUTCMonth(),
        utchours: (e) => new Date(e).getUTCHours(),
        utcminutes: (e) => new Date(e).getUTCMinutes(),
        utcseconds: (e) => new Date(e).getUTCSeconds(),
        utcmilliseconds: (e) => new Date(e).getUTCMilliseconds(),
        length: (e) => e.length,
        join: function () {
          return q("join", arguments);
        },
        indexof: function () {
          return q("indexOf", arguments);
        },
        lastindexof: function () {
          return q("lastIndexOf", arguments);
        },
        slice: function () {
          return q("slice", arguments);
        },
        reverse: (e) => e.slice().reverse(),
        parseFloat,
        parseInt,
        upper: (e) => String(e).toUpperCase(),
        lower: (e) => String(e).toLowerCase(),
        substring: function () {
          return q("substring", arguments, String);
        },
        split: function () {
          return q("split", arguments, String);
        },
        replace: function () {
          return q("replace", arguments, String);
        },
        trim: (e) => String(e).trim(),
        regexp: RegExp,
        test: (e, t) => RegExp(e).test(t),
      };
      const K = ["view", "item", "group", "xy", "x", "y"];
      const ee = new Set([Function, eval, setTimeout, setInterval]);
      if (typeof setImmediate === "function") ee.add(setImmediate);
      const te = {
        Literal: (e, t) => t.value,
        Identifier: (e, t) => {
          const r = t.name;
          return e.memberDepth > 0 ? r : r === "datum" ? e.datum : r === "event" ? e.event : r === "item" ? e.item : W[r] || e.params["$" + r];
        },
        MemberExpression: (e, t) => {
          const r = !t.computed,
            n = e(t.object);
          if (r) e.memberDepth += 1;
          const i = e(t.property);
          if (r) e.memberDepth -= 1;
          if (ee.has(n[i])) {
            console.error(`Prevented interpretation of member "${i}" which could lead to insecure code execution`);
            return;
          }
          return n[i];
        },
        CallExpression: (e, t) => {
          const r = t.arguments;
          let n = t.callee.name;
          if (n.startsWith("_")) {
            n = n.slice(1);
          }
          return n === "if" ? (e(r[0]) ? e(r[1]) : e(r[2])) : (e.fn[n] || Z[n]).apply(e.fn, r.map(e));
        },
        ArrayExpression: (e, t) => t.elements.map(e),
        BinaryExpression: (e, t) => H[t.operator](e(t.left), e(t.right)),
        UnaryExpression: (e, t) => Y[t.operator](e(t.argument)),
        ConditionalExpression: (e, t) => (e(t.test) ? e(t.consequent) : e(t.alternate)),
        LogicalExpression: (e, t) => (t.operator === "&&" ? e(t.left) && e(t.right) : e(t.left) || e(t.right)),
        ObjectExpression: (e, t) =>
          t.properties.reduce((t, r) => {
            e.memberDepth += 1;
            const n = e(r.key);
            e.memberDepth -= 1;
            if (ee.has(e(r.value))) {
              console.error(`Prevented interpretation of property "${n}" which could lead to insecure code execution`);
            } else {
              t[n] = e(r.value);
            }
            return t;
          }, {}),
      };
      function re(e, t, r, n, i, a) {
        const o = (e) => te[e.type](o, e);
        o.memberDepth = 0;
        o.fn = Object.create(t);
        o.params = r;
        o.datum = n;
        o.event = i;
        o.item = a;
        K.forEach(
          (e) =>
            (o.fn[e] = function () {
              return i.vega[e](...arguments);
            })
        );
        return o(e);
      }
      var ne = {
        operator(e, t) {
          const r = t.ast,
            n = e.functions;
          return (e) => re(r, n, e);
        },
        parameter(e, t) {
          const r = t.ast,
            n = e.functions;
          return (e, t) => re(r, n, t, e);
        },
        event(e, t) {
          const r = t.ast,
            n = e.functions;
          return (e) => re(r, n, undefined, undefined, e);
        },
        handler(e, t) {
          const r = t.ast,
            n = e.functions;
          return (e, t) => {
            const i = t.item && t.item.datum;
            return re(r, n, e, i, t);
          };
        },
        encode(e, t) {
          const { marktype: r, channels: n } = t,
            i = e.functions,
            a = r === "group" || r === "image" || r === "rect";
          return (e, t) => {
            const o = e.datum;
            let s = 0,
              l;
            for (const r in n) {
              l = re(n[r].ast, i, t, o, undefined, e);
              if (e[r] !== l) {
                e[r] = l;
                s = 1;
              }
            }
            if (r !== "rule") {
              $(e, n, a);
            }
            return s;
          };
        },
      };
      var ie = r(17438);
      function ae(e) {
        const [t, r] = /schema\/([\w-]+)\/([\w\.\-]+)\.json$/g.exec(e).slice(1, 3);
        return { library: t, version: r };
      }
      const oe = ae;
      var se = "vega-themes";
      var le = "2.12.1";
      var ce = "Themes for stylized Vega and Vega-Lite visualizations.";
      var ue = ["vega", "vega-lite", "themes", "style"];
      var fe = "BSD-3-Clause";
      var he = { name: "UW Interactive Data Lab", url: "https://idl.cs.washington.edu" };
      var pe = [
        { name: "Emily Gu", url: "https://github.com/emilygu" },
        { name: "Arvind Satyanarayan", url: "http://arvindsatya.com" },
        { name: "Jeffrey Heer", url: "https://idl.cs.washington.edu" },
        { name: "Dominik Moritz", url: "https://www.domoritz.de" },
      ];
      var de = "build/vega-themes.js";
      var ve = "build/vega-themes.module.js";
      var ge = "build/vega-themes.min.js";
      var me = "build/vega-themes.min.js";
      var ye = "build/vega-themes.module.d.ts";
      var be = { type: "git", url: "https://github.com/vega/vega-themes.git" };
      var Ee = ["src", "build"];
      var we = {
        prebuild: "yarn clean",
        build: "rollup -c",
        clean: "rimraf build && rimraf examples/build",
        "copy:data": "rsync -r node_modules/vega-datasets/data/* examples/data",
        "copy:build": "rsync -r build/* examples/build",
        "deploy:gh": "yarn build && mkdir -p examples/build && rsync -r build/* examples/build && gh-pages -d examples",
        preversion: "yarn lint",
        serve: "browser-sync start -s -f build examples --serveStatic examples",
        start: "yarn build && concurrently --kill-others -n Server,Rollup 'yarn serve' 'rollup -c -w'",
        prepare: "beemo create-config",
        eslintbase: "beemo eslint .",
        format: "yarn eslintbase --fix",
        lint: "yarn eslintbase",
        release: "release-it",
      };
      var xe = {
        "@release-it/conventional-changelog": "^5.1.1",
        "@rollup/plugin-json": "^6.0.0",
        "@rollup/plugin-node-resolve": "^15.0.1",
        "@rollup/plugin-terser": "^0.4.0",
        "browser-sync": "^2.27.10",
        concurrently: "^7.3.0",
        "gh-pages": "^5.0.0",
        "release-it": "^15.6.0",
        "rollup-plugin-bundle-size": "^1.0.3",
        "rollup-plugin-ts": "^3.0.2",
        rollup: "^3.15.0",
        typescript: "^4.7.4",
        "vega-lite-dev-config": "^0.21.0",
        "vega-lite": "^5.0.0",
        vega: "^5.19.1",
      };
      var Oe = { vega: "*", "vega-lite": "*" };
      var Ae = {};
      var Ie = {
        name: se,
        version: le,
        description: ce,
        keywords: ue,
        license: fe,
        author: he,
        contributors: pe,
        main: de,
        module: ve,
        unpkg: ge,
        jsdelivr: me,
        types: ye,
        repository: be,
        files: Ee,
        scripts: we,
        devDependencies: xe,
        peerDependencies: Oe,
        dependencies: Ae,
      };
      const Ne = "#fff";
      const Se = "#888";
      const Le = {
        background: "#333",
        view: { stroke: Se },
        title: { color: Ne, subtitleColor: Ne },
        style: { "guide-label": { fill: Ne }, "guide-title": { fill: Ne } },
        axis: { domainColor: Ne, gridColor: Se, tickColor: Ne },
      };
      const Te = "#4572a7";
      const Re = {
        background: "#fff",
        arc: { fill: Te },
        area: { fill: Te },
        line: { stroke: Te, strokeWidth: 2 },
        path: { stroke: Te },
        rect: { fill: Te },
        shape: { stroke: Te },
        symbol: { fill: Te, strokeWidth: 1.5, size: 50 },
        axis: { bandPosition: 0.5, grid: true, gridColor: "#000000", gridOpacity: 1, gridWidth: 0.5, labelPadding: 10, tickSize: 5, tickWidth: 0.5 },
        axisBand: { grid: false, tickExtra: true },
        legend: { labelBaseline: "middle", labelFontSize: 11, symbolSize: 50, symbolType: "square" },
        range: { category: ["#4572a7", "#aa4643", "#8aa453", "#71598e", "#4598ae", "#d98445", "#94aace", "#d09393", "#b9cc98", "#a99cbc"] },
      };
      const De = "#30a2da";
      const ke = "#cbcbcb";
      const Ce = "#999";
      const Fe = "#333";
      const je = "#f0f0f0";
      const Pe = "#333";
      const _e = {
        arc: { fill: De },
        area: { fill: De },
        axis: {
          domainColor: ke,
          grid: true,
          gridColor: ke,
          gridWidth: 1,
          labelColor: Ce,
          labelFontSize: 10,
          titleColor: Fe,
          tickColor: ke,
          tickSize: 10,
          titleFontSize: 14,
          titlePadding: 10,
          labelPadding: 4,
        },
        axisBand: { grid: false },
        background: je,
        group: { fill: je },
        legend: {
          labelColor: Pe,
          labelFontSize: 11,
          padding: 1,
          symbolSize: 30,
          symbolType: "square",
          titleColor: Pe,
          titleFontSize: 14,
          titlePadding: 10,
        },
        line: { stroke: De, strokeWidth: 2 },
        path: { stroke: De, strokeWidth: 0.5 },
        rect: { fill: De },
        range: {
          category: [
            "#30a2da",
            "#fc4f30",
            "#e5ae38",
            "#6d904f",
            "#8b8b8b",
            "#b96db8",
            "#ff9e27",
            "#56cc60",
            "#52d2ca",
            "#52689e",
            "#545454",
            "#9fe4f8",
          ],
          diverging: ["#cc0020", "#e77866", "#f6e7e1", "#d6e8ed", "#91bfd9", "#1d78b5"],
          heatmap: ["#d6e8ed", "#cee0e5", "#91bfd9", "#549cc6", "#1d78b5"],
        },
        point: { filled: true, shape: "circle" },
        shape: { stroke: De },
        bar: { binSpacing: 2, fill: De, stroke: null },
        title: { anchor: "start", fontSize: 24, fontWeight: 600, offset: 20 },
      };
      const Me = "#000";
      const ze = {
        group: { fill: "#e5e5e5" },
        arc: { fill: Me },
        area: { fill: Me },
        line: { stroke: Me },
        path: { stroke: Me },
        rect: { fill: Me },
        shape: { stroke: Me },
        symbol: { fill: Me, size: 40 },
        axis: {
          domain: false,
          grid: true,
          gridColor: "#FFFFFF",
          gridOpacity: 1,
          labelColor: "#7F7F7F",
          labelPadding: 4,
          tickColor: "#7F7F7F",
          tickSize: 5.67,
          titleFontSize: 16,
          titleFontWeight: "normal",
        },
        legend: { labelBaseline: "middle", labelFontSize: 11, symbolSize: 40 },
        range: { category: ["#000000", "#7F7F7F", "#1A1A1A", "#999999", "#333333", "#B0B0B0", "#4D4D4D", "#C9C9C9", "#666666", "#DCDCDC"] },
      };
      const Be = 22;
      const Ge = "normal";
      const Ue = "Benton Gothic, sans-serif";
      const Ve = 11.5;
      const Xe = "normal";
      const $e = "#82c6df";
      const We = "Benton Gothic Bold, sans-serif";
      const He = "normal";
      const Ye = 13;
      const Je = {
        "category-6": ["#ec8431", "#829eb1", "#c89d29", "#3580b1", "#adc839", "#ab7fb4"],
        "fire-7": ["#fbf2c7", "#f9e39c", "#f8d36e", "#f4bb6a", "#e68a4f", "#d15a40", "#ab4232"],
        "fireandice-6": ["#e68a4f", "#f4bb6a", "#f9e39c", "#dadfe2", "#a6b7c6", "#849eae"],
        "ice-7": ["#edefee", "#dadfe2", "#c4ccd2", "#a6b7c6", "#849eae", "#607785", "#47525d"],
      };
      const qe = {
        background: "#ffffff",
        title: { anchor: "start", color: "#000000", font: We, fontSize: Be, fontWeight: Ge },
        arc: { fill: $e },
        area: { fill: $e },
        line: { stroke: $e, strokeWidth: 2 },
        path: { stroke: $e },
        rect: { fill: $e },
        shape: { stroke: $e },
        symbol: { fill: $e, size: 30 },
        axis: { labelFont: Ue, labelFontSize: Ve, labelFontWeight: Xe, titleFont: We, titleFontSize: Ye, titleFontWeight: He },
        axisX: { labelAngle: 0, labelPadding: 4, tickSize: 3 },
        axisY: { labelBaseline: "middle", maxExtent: 45, minExtent: 45, tickSize: 2, titleAlign: "left", titleAngle: 0, titleX: -45, titleY: -11 },
        legend: { labelFont: Ue, labelFontSize: Ve, symbolType: "square", titleFont: We, titleFontSize: Ye, titleFontWeight: He },
        range: { category: Je["category-6"], diverging: Je["fireandice-6"], heatmap: Je["fire-7"], ordinal: Je["fire-7"], ramp: Je["fire-7"] },
      };
      const Qe = "#ab5787";
      const Ze = "#979797";
      const Ke = {
        background: "#f9f9f9",
        arc: { fill: Qe },
        area: { fill: Qe },
        line: { stroke: Qe },
        path: { stroke: Qe },
        rect: { fill: Qe },
        shape: { stroke: Qe },
        symbol: { fill: Qe, size: 30 },
        axis: { domainColor: Ze, domainWidth: 0.5, gridWidth: 0.2, labelColor: Ze, tickColor: Ze, tickWidth: 0.2, titleColor: Ze },
        axisBand: { grid: false },
        axisX: { grid: true, tickSize: 10 },
        axisY: { domain: false, grid: true, tickSize: 0 },
        legend: { labelFontSize: 11, padding: 1, symbolSize: 30, symbolType: "square" },
        range: { category: ["#ab5787", "#51b2e5", "#703c5c", "#168dd9", "#d190b6", "#00609f", "#d365ba", "#154866", "#666666", "#c4c4c4"] },
      };
      const et = "#3e5c69";
      const tt = {
        background: "#fff",
        arc: { fill: et },
        area: { fill: et },
        line: { stroke: et },
        path: { stroke: et },
        rect: { fill: et },
        shape: { stroke: et },
        symbol: { fill: et },
        axis: { domainWidth: 0.5, grid: true, labelPadding: 2, tickSize: 5, tickWidth: 0.5, titleFontWeight: "normal" },
        axisBand: { grid: false },
        axisX: { gridWidth: 0.2 },
        axisY: { gridDash: [3], gridWidth: 0.4 },
        legend: { labelFontSize: 11, padding: 1, symbolType: "square" },
        range: { category: ["#3e5c69", "#6793a6", "#182429", "#0570b0", "#3690c0", "#74a9cf", "#a6bddb", "#e2ddf2"] },
      };
      const rt = "#1696d2";
      const nt = "#000000";
      const it = "#FFFFFF";
      const at = "Lato";
      const ot = "Lato";
      const st = "Lato";
      const lt = "#DEDDDD";
      const ct = 18;
      const ut = {
        "main-colors": ["#1696d2", "#d2d2d2", "#000000", "#fdbf11", "#ec008b", "#55b748", "#5c5859", "#db2b27"],
        "shades-blue": ["#CFE8F3", "#A2D4EC", "#73BFE2", "#46ABDB", "#1696D2", "#12719E", "#0A4C6A", "#062635"],
        "shades-gray": ["#F5F5F5", "#ECECEC", "#E3E3E3", "#DCDBDB", "#D2D2D2", "#9D9D9D", "#696969", "#353535"],
        "shades-yellow": ["#FFF2CF", "#FCE39E", "#FDD870", "#FCCB41", "#FDBF11", "#E88E2D", "#CA5800", "#843215"],
        "shades-magenta": ["#F5CBDF", "#EB99C2", "#E46AA7", "#E54096", "#EC008B", "#AF1F6B", "#761548", "#351123"],
        "shades-green": ["#DCEDD9", "#BCDEB4", "#98CF90", "#78C26D", "#55B748", "#408941", "#2C5C2D", "#1A2E19"],
        "shades-black": ["#D5D5D4", "#ADABAC", "#848081", "#5C5859", "#332D2F", "#262223", "#1A1717", "#0E0C0D"],
        "shades-red": ["#F8D5D4", "#F1AAA9", "#E9807D", "#E25552", "#DB2B27", "#A4201D", "#6E1614", "#370B0A"],
        "one-group": ["#1696d2", "#000000"],
        "two-groups-cat-1": ["#1696d2", "#000000"],
        "two-groups-cat-2": ["#1696d2", "#fdbf11"],
        "two-groups-cat-3": ["#1696d2", "#db2b27"],
        "two-groups-seq": ["#a2d4ec", "#1696d2"],
        "three-groups-cat": ["#1696d2", "#fdbf11", "#000000"],
        "three-groups-seq": ["#a2d4ec", "#1696d2", "#0a4c6a"],
        "four-groups-cat-1": ["#000000", "#d2d2d2", "#fdbf11", "#1696d2"],
        "four-groups-cat-2": ["#1696d2", "#ec0008b", "#fdbf11", "#5c5859"],
        "four-groups-seq": ["#cfe8f3", "#73bf42", "#1696d2", "#0a4c6a"],
        "five-groups-cat-1": ["#1696d2", "#fdbf11", "#d2d2d2", "#ec008b", "#000000"],
        "five-groups-cat-2": ["#1696d2", "#0a4c6a", "#d2d2d2", "#fdbf11", "#332d2f"],
        "five-groups-seq": ["#cfe8f3", "#73bf42", "#1696d2", "#0a4c6a", "#000000"],
        "six-groups-cat-1": ["#1696d2", "#ec008b", "#fdbf11", "#000000", "#d2d2d2", "#55b748"],
        "six-groups-cat-2": ["#1696d2", "#d2d2d2", "#ec008b", "#fdbf11", "#332d2f", "#0a4c6a"],
        "six-groups-seq": ["#cfe8f3", "#a2d4ec", "#73bfe2", "#46abdb", "#1696d2", "#12719e"],
        "diverging-colors": ["#ca5800", "#fdbf11", "#fdd870", "#fff2cf", "#cfe8f3", "#73bfe2", "#1696d2", "#0a4c6a"],
      };
      const ft = {
        background: it,
        title: { anchor: "start", fontSize: ct, font: at },
        axisX: {
          domain: true,
          domainColor: nt,
          domainWidth: 1,
          grid: false,
          labelFontSize: 12,
          labelFont: ot,
          labelAngle: 0,
          tickColor: nt,
          tickSize: 5,
          titleFontSize: 12,
          titlePadding: 10,
          titleFont: at,
        },
        axisY: {
          domain: false,
          domainWidth: 1,
          grid: true,
          gridColor: lt,
          gridWidth: 1,
          labelFontSize: 12,
          labelFont: ot,
          labelPadding: 8,
          ticks: false,
          titleFontSize: 12,
          titlePadding: 10,
          titleFont: at,
          titleAngle: 0,
          titleY: -10,
          titleX: 18,
        },
        legend: {
          labelFontSize: 12,
          labelFont: ot,
          symbolSize: 100,
          titleFontSize: 12,
          titlePadding: 10,
          titleFont: at,
          orient: "right",
          offset: 10,
        },
        view: { stroke: "transparent" },
        range: {
          category: ut["six-groups-cat-1"],
          diverging: ut["diverging-colors"],
          heatmap: ut["diverging-colors"],
          ordinal: ut["six-groups-seq"],
          ramp: ut["shades-blue"],
        },
        area: { fill: rt },
        rect: { fill: rt },
        line: { color: rt, stroke: rt, strokeWidth: 5 },
        trail: { color: rt, stroke: rt, strokeWidth: 0, size: 1 },
        path: { stroke: rt, strokeWidth: 0.5 },
        point: { filled: true },
        text: { font: st, color: rt, fontSize: 11, align: "center", fontWeight: 400, size: 11 },
        style: { bar: { fill: rt, stroke: null } },
        arc: { fill: rt },
        shape: { stroke: rt },
        symbol: { fill: rt, size: 30 },
      };
      const ht = "#3366CC";
      const pt = "#ccc";
      const dt = "Arial, sans-serif";
      const vt = {
        arc: { fill: ht },
        area: { fill: ht },
        path: { stroke: ht },
        rect: { fill: ht },
        shape: { stroke: ht },
        symbol: { stroke: ht },
        circle: { fill: ht },
        background: "#fff",
        padding: { top: 10, right: 10, bottom: 10, left: 10 },
        style: { "guide-label": { font: dt, fontSize: 12 }, "guide-title": { font: dt, fontSize: 12 }, "group-title": { font: dt, fontSize: 12 } },
        title: { font: dt, fontSize: 14, fontWeight: "bold", dy: -3, anchor: "start" },
        axis: { gridColor: pt, tickColor: pt, domain: false, grid: true },
        range: {
          category: [
            "#4285F4",
            "#DB4437",
            "#F4B400",
            "#0F9D58",
            "#AB47BC",
            "#00ACC1",
            "#FF7043",
            "#9E9D24",
            "#5C6BC0",
            "#F06292",
            "#00796B",
            "#C2185B",
          ],
          heatmap: ["#c6dafc", "#5e97f6", "#2a56c6"],
        },
      };
      const gt = (e) => e * (1 / 3 + 1);
      const mt = gt(9);
      const yt = gt(10);
      const bt = gt(12);
      const Et = "Segoe UI";
      const wt = "wf_standard-font, helvetica, arial, sans-serif";
      const xt = "#252423";
      const Ot = "#605E5C";
      const At = "transparent";
      const It = "#C8C6C4";
      const Nt = "#118DFF";
      const St = "#12239E";
      const Lt = "#E66C37";
      const Tt = "#6B007B";
      const Rt = "#E044A7";
      const Dt = "#744EC2";
      const kt = "#D9B300";
      const Ct = "#D64550";
      const Ft = Nt;
      const jt = "#DEEFFF";
      const Pt = [jt, Ft];
      const _t = [jt, "#c7e4ff", "#b0d9ff", "#9aceff", "#83c3ff", "#6cb9ff", "#55aeff", "#3fa3ff", "#2898ff", Ft];
      const Mt = {
        view: { stroke: At },
        background: At,
        font: Et,
        header: { titleFont: wt, titleFontSize: bt, titleColor: xt, labelFont: Et, labelFontSize: yt, labelColor: Ot },
        axis: {
          ticks: false,
          grid: false,
          domain: false,
          labelColor: Ot,
          labelFontSize: mt,
          titleFont: wt,
          titleColor: xt,
          titleFontSize: bt,
          titleFontWeight: "normal",
        },
        axisQuantitative: { tickCount: 3, grid: true, gridColor: It, gridDash: [1, 5], labelFlush: false },
        axisBand: { tickExtra: true },
        axisX: { labelPadding: 5 },
        axisY: { labelPadding: 10 },
        bar: { fill: Nt },
        line: { stroke: Nt, strokeWidth: 3, strokeCap: "round", strokeJoin: "round" },
        text: { font: Et, fontSize: mt, fill: Ot },
        arc: { fill: Nt },
        area: { fill: Nt, line: true, opacity: 0.6 },
        path: { stroke: Nt },
        rect: { fill: Nt },
        point: { fill: Nt, filled: true, size: 75 },
        shape: { stroke: Nt },
        symbol: { fill: Nt, strokeWidth: 1.5, size: 50 },
        legend: {
          titleFont: Et,
          titleFontWeight: "bold",
          titleColor: Ot,
          labelFont: Et,
          labelFontSize: yt,
          labelColor: Ot,
          symbolType: "circle",
          symbolSize: 75,
        },
        range: { category: [Nt, St, Lt, Tt, Rt, Dt, kt, Ct], diverging: Pt, heatmap: Pt, ordinal: _t },
      };
      const zt = Ie.version;
      var Bt = r(26372);
      var Gt = "vega-tooltip";
      var Ut = "0.30.1";
      var Vt = "A tooltip plugin for Vega-Lite and Vega visualizations.";
      var Xt = ["vega-lite", "vega", "tooltip"];
      var $t = { type: "git", url: "https://github.com/vega/vega-tooltip.git" };
      var Wt = { name: "UW Interactive Data Lab", url: "https://idl.cs.washington.edu" };
      var Ht = ["Dominik Moritz", "Sira Horradarn", "Zening Qu", "Kanit Wongsuphasawat", "Yuri Astrakhan", "Jeffrey Heer"];
      var Yt = "BSD-3-Clause";
      var Jt = { url: "https://github.com/vega/vega-tooltip/issues" };
      var qt = "https://github.com/vega/vega-tooltip#readme";
      var Qt = "build/vega-tooltip.js";
      var Zt = "build/vega-tooltip.module.js";
      var Kt = "build/vega-tooltip.min.js";
      var er = "build/vega-tooltip.min.js";
      var tr = "build/vega-tooltip.module.d.ts";
      var rr = ["src", "build", "types"];
      var nr = {
        prebuild: "yarn clean && yarn build:style",
        build: "rollup -c",
        "build:style": "./build-style.sh",
        clean: "rimraf build && rimraf src/style.ts",
        "copy:data": "rsync -r node_modules/vega-datasets/data/* examples/data",
        "copy:build": "rsync -r build/* examples/build",
        "deploy:gh": "yarn build && yarn copy:build && gh-pages -d examples && yarn clean",
        prepublishOnly: "yarn clean && yarn build",
        preversion: "yarn lint && yarn test",
        serve: "browser-sync start -s -f build examples --serveStatic examples",
        start: "yarn build && concurrently --kill-others -n Server,Rollup 'yarn serve' 'rollup -c -w'",
        pretest: "yarn build:style",
        test: "beemo jest",
        "test:inspect": "node --inspect-brk ./node_modules/.bin/jest --runInBand",
        prepare: "beemo create-config && yarn copy:data",
        prettierbase: "beemo prettier '*.{css,scss,html}'",
        eslintbase: "beemo eslint .",
        format: "yarn eslintbase --fix && yarn prettierbase --write",
        lint: "yarn eslintbase && yarn prettierbase --check",
        release: "release-it",
      };
      var ir = {
        "@release-it/conventional-changelog": "^5.1.1",
        "@rollup/plugin-json": "^6.0.0",
        "@rollup/plugin-node-resolve": "^15.0.1",
        "release-it": "^15.6.0",
        "browser-sync": "^2.27.11",
        concurrently: "^7.6.0",
        "gh-pages": "^5.0.0",
        "jest-environment-jsdom": "^29.4.2",
        path: "^0.12.7",
        rollup: "^3.15.0",
        "rollup-plugin-bundle-size": "^1.0.3",
        "@rollup/plugin-terser": "^0.4.0",
        "rollup-plugin-ts": "^3.2.0",
        sass: "^1.58.0",
        typescript: "~4.9.5",
        "vega-datasets": "^2.5.4",
        "vega-lite-dev-config": "^0.21.0",
        "vega-typings": "^0.22.3",
      };
      var ar = { "vega-util": "^1.17.0" };
      var or = {
        name: Gt,
        version: Ut,
        description: Vt,
        keywords: Xt,
        repository: $t,
        author: Wt,
        collaborators: Ht,
        license: Yt,
        bugs: Jt,
        homepage: qt,
        main: Qt,
        module: Zt,
        unpkg: Kt,
        jsdelivr: er,
        types: tr,
        files: rr,
        scripts: nr,
        devDependencies: ir,
        dependencies: ar,
      };
      function sr(e, t) {
        var r = {};
        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) r[n] = e[n];
        if (e != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) {
            if (t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i])) r[n[i]] = e[n[i]];
          }
        return r;
      }
      function lr(e, t, r) {
        if ((0, Bt.cy)(e)) {
          return `[${e.map((e) => t((0, Bt.Kg)(e) ? e : ur(e, r))).join(", ")}]`;
        }
        if ((0, Bt.Gv)(e)) {
          let n = "";
          const i = e,
            { title: a, image: o } = i,
            s = sr(i, ["title", "image"]);
          if (a) {
            n += `<h2>${t(a)}</h2>`;
          }
          if (o) {
            n += `<img src="${t(o)}">`;
          }
          const l = Object.keys(s);
          if (l.length > 0) {
            n += "<table>";
            for (const e of l) {
              let i = s[e];
              if (i === undefined) {
                continue;
              }
              if ((0, Bt.Gv)(i)) {
                i = ur(i, r);
              }
              n += `<tr><td class="key">${t(e)}:</td><td class="value">${t(i)}</td></tr>`;
            }
            n += `</table>`;
          }
          return n || "{}";
        }
        return t(e);
      }
      function cr(e) {
        const t = [];
        return function (r, n) {
          if (typeof n !== "object" || n === null) {
            return n;
          }
          const i = t.indexOf(this) + 1;
          t.length = i;
          if (t.length > e) {
            return "[Object]";
          }
          if (t.indexOf(n) >= 0) {
            return "[Circular]";
          }
          t.push(n);
          return n;
        };
      }
      function ur(e, t) {
        return JSON.stringify(e, cr(t));
      }
      var fr = `#vg-tooltip-element {\n  visibility: hidden;\n  padding: 8px;\n  position: fixed;\n  z-index: 1000;\n  font-family: sans-serif;\n  font-size: 11px;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n  /* The default theme is the light theme. */\n  background-color: rgba(255, 255, 255, 0.95);\n  border: 1px solid #d9d9d9;\n  color: black;\n}\n#vg-tooltip-element.visible {\n  visibility: visible;\n}\n#vg-tooltip-element h2 {\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 13px;\n}\n#vg-tooltip-element img {\n  max-width: 200px;\n  max-height: 200px;\n}\n#vg-tooltip-element table {\n  border-spacing: 0;\n}\n#vg-tooltip-element table tr {\n  border: none;\n}\n#vg-tooltip-element table tr td {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n#vg-tooltip-element table tr td.key {\n  color: #808080;\n  max-width: 150px;\n  text-align: right;\n  padding-right: 4px;\n}\n#vg-tooltip-element table tr td.value {\n  display: block;\n  max-width: 300px;\n  max-height: 7em;\n  text-align: left;\n}\n#vg-tooltip-element.dark-theme {\n  background-color: rgba(32, 32, 32, 0.9);\n  border: 1px solid #f5f5f5;\n  color: white;\n}\n#vg-tooltip-element.dark-theme td.key {\n  color: #bfbfbf;\n}\n`;
      const hr = "vg-tooltip-element";
      const pr = {
        offsetX: 10,
        offsetY: 10,
        id: hr,
        styleId: "vega-tooltip-style",
        theme: "light",
        disableDefaultStyle: false,
        sanitize: dr,
        maxDepth: 2,
        formatTooltip: lr,
      };
      function dr(e) {
        return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;");
      }
      function vr(e) {
        if (!/^[A-Za-z]+[-:.\w]*$/.test(e)) {
          throw new Error("Invalid HTML ID");
        }
        return fr.toString().replace(hr, e);
      }
      function gr(e, t, r, n) {
        let i = e.clientX + r;
        if (i + t.width > window.innerWidth) {
          i = +e.clientX - r - t.width;
        }
        let a = e.clientY + n;
        if (a + t.height > window.innerHeight) {
          a = +e.clientY - n - t.height;
        }
        return { x: i, y: a };
      }
      class mr {
        constructor(e) {
          this.options = Object.assign(Object.assign({}, pr), e);
          const t = this.options.id;
          this.el = null;
          this.call = this.tooltipHandler.bind(this);
          if (!this.options.disableDefaultStyle && !document.getElementById(this.options.styleId)) {
            const e = document.createElement("style");
            e.setAttribute("id", this.options.styleId);
            e.innerHTML = vr(t);
            const r = document.head;
            if (r.childNodes.length > 0) {
              r.insertBefore(e, r.childNodes[0]);
            } else {
              r.appendChild(e);
            }
          }
        }
        tooltipHandler(e, t, r, n) {
          var i;
          this.el = document.getElementById(this.options.id);
          if (!this.el) {
            this.el = document.createElement("div");
            this.el.setAttribute("id", this.options.id);
            this.el.classList.add("vg-tooltip");
            const e = (i = document.fullscreenElement) !== null && i !== void 0 ? i : document.body;
            e.appendChild(this.el);
          }
          if (n == null || n === "") {
            this.el.classList.remove("visible", `${this.options.theme}-theme`);
            return;
          }
          this.el.innerHTML = this.options.formatTooltip(n, this.options.sanitize, this.options.maxDepth);
          this.el.classList.add("visible", `${this.options.theme}-theme`);
          const { x: a, y: o } = gr(t, this.el.getBoundingClientRect(), this.options.offsetX, this.options.offsetY);
          this.el.style.top = `${o}px`;
          this.el.style.left = `${a}px`;
        }
      }
      const yr = or.version;
      function br(e, t) {
        const r = new mr(t);
        e.tooltip(r.call).run();
        return r;
      }
      var Er = r(65606);
      function wr(e) {
        "@babel/helpers - typeof";
        return (
          (wr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }),
          wr(e)
        );
      }
      function xr(e, t) {
        if (wr(e) !== "object" || e === null) return e;
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, t || "default");
          if (wr(n) !== "object") return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }
      function Or(e) {
        var t = xr(e, "string");
        return wr(t) === "symbol" ? t : String(t);
      }
      function Ar(e, t, r) {
        t = Or(t);
        if (t in e) {
          Object.defineProperty(e, t, { value: r, enumerable: true, configurable: true, writable: true });
        } else {
          e[t] = r;
        }
        return e;
      }
      function Ir(e, t, r, n, i, a, o) {
        try {
          var s = e[a](o);
          var l = s.value;
        } catch (c) {
          r(c);
          return;
        }
        if (s.done) {
          t(l);
        } else {
          Promise.resolve(l).then(n, i);
        }
      }
      function Nr(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, i) {
            var a = e.apply(t, r);
            function o(e) {
              Ir(a, n, i, o, s, "next", e);
            }
            function s(e) {
              Ir(a, n, i, o, s, "throw", e);
            }
            o(undefined);
          });
        };
      }
      var Sr = Object.prototype;
      var Lr = Sr.hasOwnProperty;
      var Tr;
      var Rr = typeof Symbol === "function" ? Symbol : {};
      var Dr = Rr.iterator || "@@iterator";
      var kr = Rr.asyncIterator || "@@asyncIterator";
      var Cr = Rr.toStringTag || "@@toStringTag";
      function Fr(e, t, r, n) {
        var i = t && t.prototype instanceof Gr ? t : Gr;
        var a = Object.create(i.prototype);
        var o = new an(n || []);
        a._invoke = en(e, r, o);
        return a;
      }
      function jr(e, t, r) {
        try {
          return { type: "normal", arg: e.call(t, r) };
        } catch (n) {
          return { type: "throw", arg: n };
        }
      }
      var Pr = "suspendedStart";
      var _r = "suspendedYield";
      var Mr = "executing";
      var zr = "completed";
      var Br = {};
      function Gr() {}
      function Ur() {}
      function Vr() {}
      var Xr = {};
      Xr[Dr] = function () {
        return this;
      };
      var $r = Object.getPrototypeOf;
      var Wr = $r && $r($r(sn([])));
      if (Wr && Wr !== Sr && Lr.call(Wr, Dr)) {
        Xr = Wr;
      }
      var Hr = (Vr.prototype = Gr.prototype = Object.create(Xr));
      Ur.prototype = Hr.constructor = Vr;
      Vr.constructor = Ur;
      Vr[Cr] = Ur.displayName = "GeneratorFunction";
      function Yr(e) {
        ["next", "throw", "return"].forEach(function (t) {
          e[t] = function (e) {
            return this._invoke(t, e);
          };
        });
      }
      function Jr(e) {
        var t = typeof e === "function" && e.constructor;
        return t ? t === Ur || (t.displayName || t.name) === "GeneratorFunction" : false;
      }
      function qr(e) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, Vr);
        } else {
          e.__proto__ = Vr;
          if (!(Cr in e)) {
            e[Cr] = "GeneratorFunction";
          }
        }
        e.prototype = Object.create(Hr);
        return e;
      }
      function Qr(e) {
        return { __await: e };
      }
      function Zr(e, t) {
        function r(n, i, a, o) {
          var s = jr(e[n], e, i);
          if (s.type === "throw") {
            o(s.arg);
          } else {
            var l = s.arg;
            var c = l.value;
            if (c && typeof c === "object" && Lr.call(c, "__await")) {
              return t.resolve(c.__await).then(
                function (e) {
                  r("next", e, a, o);
                },
                function (e) {
                  r("throw", e, a, o);
                }
              );
            }
            return t.resolve(c).then(
              function (e) {
                l.value = e;
                a(l);
              },
              function (e) {
                return r("throw", e, a, o);
              }
            );
          }
        }
        var n;
        function i(e, i) {
          function a() {
            return new t(function (t, n) {
              r(e, i, t, n);
            });
          }
          return (n = n ? n.then(a, a) : a());
        }
        this._invoke = i;
      }
      Yr(Zr.prototype);
      Zr.prototype[kr] = function () {
        return this;
      };
      function Kr(e, t, r, n, i) {
        if (i === void 0) i = Promise;
        var a = new Zr(Fr(e, t, r, n), i);
        return Jr(t)
          ? a
          : a.next().then(function (e) {
              return e.done ? e.value : a.next();
            });
      }
      function en(e, t, r) {
        var n = Pr;
        return function i(a, o) {
          if (n === Mr) {
            throw new Error("Generator is already running");
          }
          if (n === zr) {
            if (a === "throw") {
              throw o;
            }
            return ln();
          }
          r.method = a;
          r.arg = o;
          while (true) {
            var s = r.delegate;
            if (s) {
              var l = tn(s, r);
              if (l) {
                if (l === Br) continue;
                return l;
              }
            }
            if (r.method === "next") {
              r.sent = r._sent = r.arg;
            } else if (r.method === "throw") {
              if (n === Pr) {
                n = zr;
                throw r.arg;
              }
              r.dispatchException(r.arg);
            } else if (r.method === "return") {
              r.abrupt("return", r.arg);
            }
            n = Mr;
            var c = jr(e, t, r);
            if (c.type === "normal") {
              n = r.done ? zr : _r;
              if (c.arg === Br) {
                continue;
              }
              return { value: c.arg, done: r.done };
            } else if (c.type === "throw") {
              n = zr;
              r.method = "throw";
              r.arg = c.arg;
            }
          }
        };
      }
      function tn(e, t) {
        var r = e.iterator[t.method];
        if (r === Tr) {
          t.delegate = null;
          if (t.method === "throw") {
            if (e.iterator["return"]) {
              t.method = "return";
              t.arg = Tr;
              tn(e, t);
              if (t.method === "throw") {
                return Br;
              }
            }
            t.method = "throw";
            t.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          return Br;
        }
        var n = jr(r, e.iterator, t.arg);
        if (n.type === "throw") {
          t.method = "throw";
          t.arg = n.arg;
          t.delegate = null;
          return Br;
        }
        var i = n.arg;
        if (!i) {
          t.method = "throw";
          t.arg = new TypeError("iterator result is not an object");
          t.delegate = null;
          return Br;
        }
        if (i.done) {
          t[e.resultName] = i.value;
          t.next = e.nextLoc;
          if (t.method !== "return") {
            t.method = "next";
            t.arg = Tr;
          }
        } else {
          return i;
        }
        t.delegate = null;
        return Br;
      }
      Yr(Hr);
      Hr[Cr] = "Generator";
      Hr[Dr] = function () {
        return this;
      };
      Hr.toString = function () {
        return "[object Generator]";
      };
      function rn(e) {
        var t = { tryLoc: e[0] };
        if (1 in e) {
          t.catchLoc = e[1];
        }
        if (2 in e) {
          t.finallyLoc = e[2];
          t.afterLoc = e[3];
        }
        this.tryEntries.push(t);
      }
      function nn(e) {
        var t = e.completion || {};
        t.type = "normal";
        delete t.arg;
        e.completion = t;
      }
      function an(e) {
        this.tryEntries = [{ tryLoc: "root" }];
        e.forEach(rn, this);
        this.reset(true);
      }
      function on(e) {
        var t = [];
        for (var r in e) {
          t.push(r);
        }
        t.reverse();
        return function r() {
          while (t.length) {
            var n = t.pop();
            if (n in e) {
              r.value = n;
              r.done = false;
              return r;
            }
          }
          r.done = true;
          return r;
        };
      }
      function sn(e) {
        if (e) {
          var t = e[Dr];
          if (t) {
            return t.call(e);
          }
          if (typeof e.next === "function") {
            return e;
          }
          if (!isNaN(e.length)) {
            var r = -1,
              n = function t() {
                while (++r < e.length) {
                  if (Lr.call(e, r)) {
                    t.value = e[r];
                    t.done = false;
                    return t;
                  }
                }
                t.value = Tr;
                t.done = true;
                return t;
              };
            return (n.next = n);
          }
        }
        return { next: ln };
      }
      function ln() {
        return { value: Tr, done: true };
      }
      an.prototype = {
        constructor: an,
        reset: function e(t) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = Tr;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = Tr;
          this.tryEntries.forEach(nn);
          if (!t) {
            for (var r in this) {
              if (r.charAt(0) === "t" && Lr.call(this, r) && !isNaN(+r.slice(1))) {
                this[r] = Tr;
              }
            }
          }
        },
        stop: function e() {
          this.done = true;
          var t = this.tryEntries[0];
          var r = t.completion;
          if (r.type === "throw") {
            throw r.arg;
          }
          return this.rval;
        },
        dispatchException: function e(t) {
          if (this.done) {
            throw t;
          }
          var r = this;
          function n(e, n) {
            o.type = "throw";
            o.arg = t;
            r.next = e;
            if (n) {
              r.method = "next";
              r.arg = Tr;
            }
            return !!n;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i];
            var o = a.completion;
            if (a.tryLoc === "root") {
              return n("end");
            }
            if (a.tryLoc <= this.prev) {
              var s = Lr.call(a, "catchLoc");
              var l = Lr.call(a, "finallyLoc");
              if (s && l) {
                if (this.prev < a.catchLoc) {
                  return n(a.catchLoc, true);
                } else if (this.prev < a.finallyLoc) {
                  return n(a.finallyLoc);
                }
              } else if (s) {
                if (this.prev < a.catchLoc) {
                  return n(a.catchLoc, true);
                }
              } else if (l) {
                if (this.prev < a.finallyLoc) {
                  return n(a.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function e(t, r) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var i = this.tryEntries[n];
            if (i.tryLoc <= this.prev && Lr.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
              var a = i;
              break;
            }
          }
          if (a && (t === "break" || t === "continue") && a.tryLoc <= r && r <= a.finallyLoc) {
            a = null;
          }
          var o = a ? a.completion : {};
          o.type = t;
          o.arg = r;
          if (a) {
            this.method = "next";
            this.next = a.finallyLoc;
            return Br;
          }
          return this.complete(o);
        },
        complete: function e(t, r) {
          if (t.type === "throw") {
            throw t.arg;
          }
          if (t.type === "break" || t.type === "continue") {
            this.next = t.arg;
          } else if (t.type === "return") {
            this.rval = this.arg = t.arg;
            this.method = "return";
            this.next = "end";
          } else if (t.type === "normal" && r) {
            this.next = r;
          }
          return Br;
        },
        finish: function e(t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var n = this.tryEntries[r];
            if (n.finallyLoc === t) {
              this.complete(n.completion, n.afterLoc);
              nn(n);
              return Br;
            }
          }
        },
        catch: function e(t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var n = this.tryEntries[r];
            if (n.tryLoc === t) {
              var i = n.completion;
              if (i.type === "throw") {
                var a = i.arg;
                nn(n);
              }
              return a;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function e(t, r, n) {
          this.delegate = { iterator: sn(t), resultName: r, nextLoc: n };
          if (this.method === "next") {
            this.arg = Tr;
          }
          return Br;
        },
      };
      var cn = { wrap: Fr, isGeneratorFunction: Jr, AsyncIterator: Zr, mark: qr, awrap: Qr, async: Kr, keys: on, values: sn };
      var un;
      var fn;
      function hn() {
        if (fn) return un;
        fn = 1;
        un = function e(t) {
          t.prototype[Symbol.iterator] = cn.mark(function e() {
            var t;
            return cn.wrap(
              function e(r) {
                while (1)
                  switch ((r.prev = r.next)) {
                    case 0:
                      t = this.head;
                    case 1:
                      if (!t) {
                        r.next = 7;
                        break;
                      }
                      r.next = 4;
                      return t.value;
                    case 4:
                      t = t.next;
                      r.next = 1;
                      break;
                    case 7:
                    case "end":
                      return r.stop();
                  }
              },
              e,
              this
            );
          });
        };
        return un;
      }
      var pn = dn;
      dn.Node = yn;
      dn.create = dn;
      function dn(e) {
        var t = this;
        if (!(t instanceof dn)) {
          t = new dn();
        }
        t.tail = null;
        t.head = null;
        t.length = 0;
        if (e && typeof e.forEach === "function") {
          e.forEach(function (e) {
            t.push(e);
          });
        } else if (arguments.length > 0) {
          for (var r = 0, n = arguments.length; r < n; r++) {
            t.push(arguments[r]);
          }
        }
        return t;
      }
      dn.prototype.removeNode = function (e) {
        if (e.list !== this) {
          throw new Error("removing node which does not belong to this list");
        }
        var t = e.next;
        var r = e.prev;
        if (t) {
          t.prev = r;
        }
        if (r) {
          r.next = t;
        }
        if (e === this.head) {
          this.head = t;
        }
        if (e === this.tail) {
          this.tail = r;
        }
        e.list.length--;
        e.next = null;
        e.prev = null;
        e.list = null;
        return t;
      };
      dn.prototype.unshiftNode = function (e) {
        if (e === this.head) {
          return;
        }
        if (e.list) {
          e.list.removeNode(e);
        }
        var t = this.head;
        e.list = this;
        e.next = t;
        if (t) {
          t.prev = e;
        }
        this.head = e;
        if (!this.tail) {
          this.tail = e;
        }
        this.length++;
      };
      dn.prototype.pushNode = function (e) {
        if (e === this.tail) {
          return;
        }
        if (e.list) {
          e.list.removeNode(e);
        }
        var t = this.tail;
        e.list = this;
        e.prev = t;
        if (t) {
          t.next = e;
        }
        this.tail = e;
        if (!this.head) {
          this.head = e;
        }
        this.length++;
      };
      dn.prototype.push = function () {
        for (var e = 0, t = arguments.length; e < t; e++) {
          gn(this, arguments[e]);
        }
        return this.length;
      };
      dn.prototype.unshift = function () {
        for (var e = 0, t = arguments.length; e < t; e++) {
          mn(this, arguments[e]);
        }
        return this.length;
      };
      dn.prototype.pop = function () {
        if (!this.tail) {
          return undefined;
        }
        var e = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail) {
          this.tail.next = null;
        } else {
          this.head = null;
        }
        this.length--;
        return e;
      };
      dn.prototype.shift = function () {
        if (!this.head) {
          return undefined;
        }
        var e = this.head.value;
        this.head = this.head.next;
        if (this.head) {
          this.head.prev = null;
        } else {
          this.tail = null;
        }
        this.length--;
        return e;
      };
      dn.prototype.forEach = function (e, t) {
        t = t || this;
        for (var r = this.head, n = 0; r !== null; n++) {
          e.call(t, r.value, n, this);
          r = r.next;
        }
      };
      dn.prototype.forEachReverse = function (e, t) {
        t = t || this;
        for (var r = this.tail, n = this.length - 1; r !== null; n--) {
          e.call(t, r.value, n, this);
          r = r.prev;
        }
      };
      dn.prototype.get = function (e) {
        for (var t = 0, r = this.head; r !== null && t < e; t++) {
          r = r.next;
        }
        if (t === e && r !== null) {
          return r.value;
        }
      };
      dn.prototype.getReverse = function (e) {
        for (var t = 0, r = this.tail; r !== null && t < e; t++) {
          r = r.prev;
        }
        if (t === e && r !== null) {
          return r.value;
        }
      };
      dn.prototype.map = function (e, t) {
        t = t || this;
        var r = new dn();
        for (var n = this.head; n !== null; ) {
          r.push(e.call(t, n.value, this));
          n = n.next;
        }
        return r;
      };
      dn.prototype.mapReverse = function (e, t) {
        t = t || this;
        var r = new dn();
        for (var n = this.tail; n !== null; ) {
          r.push(e.call(t, n.value, this));
          n = n.prev;
        }
        return r;
      };
      dn.prototype.reduce = function (e, t) {
        var r;
        var n = this.head;
        if (arguments.length > 1) {
          r = t;
        } else if (this.head) {
          n = this.head.next;
          r = this.head.value;
        } else {
          throw new TypeError("Reduce of empty list with no initial value");
        }
        for (var i = 0; n !== null; i++) {
          r = e(r, n.value, i);
          n = n.next;
        }
        return r;
      };
      dn.prototype.reduceReverse = function (e, t) {
        var r;
        var n = this.tail;
        if (arguments.length > 1) {
          r = t;
        } else if (this.tail) {
          n = this.tail.prev;
          r = this.tail.value;
        } else {
          throw new TypeError("Reduce of empty list with no initial value");
        }
        for (var i = this.length - 1; n !== null; i--) {
          r = e(r, n.value, i);
          n = n.prev;
        }
        return r;
      };
      dn.prototype.toArray = function () {
        var e = new Array(this.length);
        for (var t = 0, r = this.head; r !== null; t++) {
          e[t] = r.value;
          r = r.next;
        }
        return e;
      };
      dn.prototype.toArrayReverse = function () {
        var e = new Array(this.length);
        for (var t = 0, r = this.tail; r !== null; t++) {
          e[t] = r.value;
          r = r.prev;
        }
        return e;
      };
      dn.prototype.slice = function (e, t) {
        t = t || this.length;
        if (t < 0) {
          t += this.length;
        }
        e = e || 0;
        if (e < 0) {
          e += this.length;
        }
        var r = new dn();
        if (t < e || t < 0) {
          return r;
        }
        if (e < 0) {
          e = 0;
        }
        if (t > this.length) {
          t = this.length;
        }
        for (var n = 0, i = this.head; i !== null && n < e; n++) {
          i = i.next;
        }
        for (; i !== null && n < t; n++, i = i.next) {
          r.push(i.value);
        }
        return r;
      };
      dn.prototype.sliceReverse = function (e, t) {
        t = t || this.length;
        if (t < 0) {
          t += this.length;
        }
        e = e || 0;
        if (e < 0) {
          e += this.length;
        }
        var r = new dn();
        if (t < e || t < 0) {
          return r;
        }
        if (e < 0) {
          e = 0;
        }
        if (t > this.length) {
          t = this.length;
        }
        for (var n = this.length, i = this.tail; i !== null && n > t; n--) {
          i = i.prev;
        }
        for (; i !== null && n > e; n--, i = i.prev) {
          r.push(i.value);
        }
        return r;
      };
      dn.prototype.splice = function (e, t) {
        if (e > this.length) {
          e = this.length - 1;
        }
        if (e < 0) {
          e = this.length + e;
        }
        for (var r = 0, n = this.head; n !== null && r < e; r++) {
          n = n.next;
        }
        var i = [];
        for (var r = 0; n && r < t; r++) {
          i.push(n.value);
          n = this.removeNode(n);
        }
        if (n === null) {
          n = this.tail;
        }
        if (n !== this.head && n !== this.tail) {
          n = n.prev;
        }
        for (var r = 0; r < (arguments.length <= 2 ? 0 : arguments.length - 2); r++) {
          n = vn(this, n, r + 2 < 2 || arguments.length <= r + 2 ? undefined : arguments[r + 2]);
        }
        return i;
      };
      dn.prototype.reverse = function () {
        var e = this.head;
        var t = this.tail;
        for (var r = e; r !== null; r = r.prev) {
          var n = r.prev;
          r.prev = r.next;
          r.next = n;
        }
        this.head = t;
        this.tail = e;
        return this;
      };
      function vn(e, t, r) {
        var n = t === e.head ? new yn(r, null, t, e) : new yn(r, t, t.next, e);
        if (n.next === null) {
          e.tail = n;
        }
        if (n.prev === null) {
          e.head = n;
        }
        e.length++;
        return n;
      }
      function gn(e, t) {
        e.tail = new yn(t, e.tail, null, e);
        if (!e.head) {
          e.head = e.tail;
        }
        e.length++;
      }
      function mn(e, t) {
        e.head = new yn(t, null, e.head, e);
        if (!e.tail) {
          e.tail = e.head;
        }
        e.length++;
      }
      function yn(e, t, r, n) {
        if (!(this instanceof yn)) {
          return new yn(e, t, r, n);
        }
        this.list = n;
        this.value = e;
        if (t) {
          t.next = this;
          this.prev = t;
        } else {
          this.prev = null;
        }
        if (r) {
          r.prev = this;
          this.next = r;
        } else {
          this.next = null;
        }
      }
      try {
        hn()(dn);
      } catch (Ka) {}
      var bn = pn;
      var En = Symbol("max");
      var wn = Symbol("length");
      var xn = Symbol("lengthCalculator");
      var On = Symbol("allowStale");
      var An = Symbol("maxAge");
      var In = Symbol("dispose");
      var Nn = Symbol("noDisposeOnSet");
      var Sn = Symbol("lruList");
      var Ln = Symbol("cache");
      var Tn = Symbol("updateAgeOnGet");
      var Rn = () => 1;
      class Dn {
        constructor(e) {
          if (typeof e === "number") e = { max: e };
          if (!e) e = {};
          if (e.max && (typeof e.max !== "number" || e.max < 0)) throw new TypeError("max must be a non-negative number");
          this[En] = e.max || Infinity;
          var t = e.length || Rn;
          this[xn] = typeof t !== "function" ? Rn : t;
          this[On] = e.stale || false;
          if (e.maxAge && typeof e.maxAge !== "number") throw new TypeError("maxAge must be a number");
          this[An] = e.maxAge || 0;
          this[In] = e.dispose;
          this[Nn] = e.noDisposeOnSet || false;
          this[Tn] = e.updateAgeOnGet || false;
          this.reset();
        }
        set max(e) {
          if (typeof e !== "number" || e < 0) throw new TypeError("max must be a non-negative number");
          this[En] = e || Infinity;
          Fn(this);
        }
        get max() {
          return this[En];
        }
        set allowStale(e) {
          this[On] = !!e;
        }
        get allowStale() {
          return this[On];
        }
        set maxAge(e) {
          if (typeof e !== "number") throw new TypeError("maxAge must be a non-negative number");
          this[An] = e;
          Fn(this);
        }
        get maxAge() {
          return this[An];
        }
        set lengthCalculator(e) {
          if (typeof e !== "function") e = Rn;
          if (e !== this[xn]) {
            this[xn] = e;
            this[wn] = 0;
            this[Sn].forEach((e) => {
              e.length = this[xn](e.value, e.key);
              this[wn] += e.length;
            });
          }
          Fn(this);
        }
        get lengthCalculator() {
          return this[xn];
        }
        get length() {
          return this[wn];
        }
        get itemCount() {
          return this[Sn].length;
        }
        rforEach(e, t) {
          t = t || this;
          for (var r = this[Sn].tail; r !== null; ) {
            var n = r.prev;
            _n(this, e, r, t);
            r = n;
          }
        }
        forEach(e, t) {
          t = t || this;
          for (var r = this[Sn].head; r !== null; ) {
            var n = r.next;
            _n(this, e, r, t);
            r = n;
          }
        }
        keys() {
          return this[Sn].toArray().map((e) => e.key);
        }
        values() {
          return this[Sn].toArray().map((e) => e.value);
        }
        reset() {
          if (this[In] && this[Sn] && this[Sn].length) {
            this[Sn].forEach((e) => this[In](e.key, e.value));
          }
          this[Ln] = new Map();
          this[Sn] = new bn();
          this[wn] = 0;
        }
        dump() {
          return this[Sn].map((e) => (Cn(this, e) ? false : { k: e.key, v: e.value, e: e.now + (e.maxAge || 0) }))
            .toArray()
            .filter((e) => e);
        }
        dumpLru() {
          return this[Sn];
        }
        set(e, t, r) {
          r = r || this[An];
          if (r && typeof r !== "number") throw new TypeError("maxAge must be a number");
          var n = r ? Date.now() : 0;
          var i = this[xn](t, e);
          if (this[Ln].has(e)) {
            if (i > this[En]) {
              jn(this, this[Ln].get(e));
              return false;
            }
            var a = this[Ln].get(e);
            var o = a.value;
            if (this[In]) {
              if (!this[Nn]) this[In](e, o.value);
            }
            o.now = n;
            o.maxAge = r;
            o.value = t;
            this[wn] += i - o.length;
            o.length = i;
            this.get(e);
            Fn(this);
            return true;
          }
          var s = new Pn(e, t, i, n, r);
          if (s.length > this[En]) {
            if (this[In]) this[In](e, t);
            return false;
          }
          this[wn] += s.length;
          this[Sn].unshift(s);
          this[Ln].set(e, this[Sn].head);
          Fn(this);
          return true;
        }
        has(e) {
          if (!this[Ln].has(e)) return false;
          var t = this[Ln].get(e).value;
          return !Cn(this, t);
        }
        get(e) {
          return kn(this, e, true);
        }
        peek(e) {
          return kn(this, e, false);
        }
        pop() {
          var e = this[Sn].tail;
          if (!e) return null;
          jn(this, e);
          return e.value;
        }
        del(e) {
          jn(this, this[Ln].get(e));
        }
        load(e) {
          this.reset();
          var t = Date.now();
          for (var r = e.length - 1; r >= 0; r--) {
            var n = e[r];
            var i = n.e || 0;
            if (i === 0) this.set(n.k, n.v);
            else {
              var a = i - t;
              if (a > 0) {
                this.set(n.k, n.v, a);
              }
            }
          }
        }
        prune() {
          this[Ln].forEach((e, t) => kn(this, t, false));
        }
      }
      var kn = (e, t, r) => {
        var n = e[Ln].get(t);
        if (n) {
          var i = n.value;
          if (Cn(e, i)) {
            jn(e, n);
            if (!e[On]) return undefined;
          } else {
            if (r) {
              if (e[Tn]) n.value.now = Date.now();
              e[Sn].unshiftNode(n);
            }
          }
          return i.value;
        }
      };
      var Cn = (e, t) => {
        if (!t || (!t.maxAge && !e[An])) return false;
        var r = Date.now() - t.now;
        return t.maxAge ? r > t.maxAge : e[An] && r > e[An];
      };
      var Fn = (e) => {
        if (e[wn] > e[En]) {
          for (var t = e[Sn].tail; e[wn] > e[En] && t !== null; ) {
            var r = t.prev;
            jn(e, t);
            t = r;
          }
        }
      };
      var jn = (e, t) => {
        if (t) {
          var r = t.value;
          if (e[In]) e[In](r.key, r.value);
          e[wn] -= r.length;
          e[Ln].delete(r.key);
          e[Sn].removeNode(t);
        }
      };
      class Pn {
        constructor(e, t, r, n, i) {
          this.key = e;
          this.value = t;
          this.length = r;
          this.now = n;
          this.maxAge = i || 0;
        }
      }
      var _n = (e, t, r, n) => {
        var i = r.value;
        if (Cn(e, i)) {
          jn(e, r);
          if (!e[On]) i = undefined;
        }
        if (i) t.call(n, i.value, i.key, e);
      };
      var Mn = Dn;
      var zn = ["includePrerelease", "loose", "rtl"];
      var Bn = (e) =>
        !e
          ? {}
          : typeof e !== "object"
            ? { loose: true }
            : zn
                .filter((t) => e[t])
                .reduce((e, t) => {
                  e[t] = true;
                  return e;
                }, {});
      var Gn = Bn;
      var Un = {};
      var Vn = {
        get exports() {
          return Un;
        },
        set exports(e) {
          Un = e;
        },
      };
      var Xn = "2.0.0";
      var $n = 256;
      var Wn = Number.MAX_SAFE_INTEGER || 9007199254740991;
      var Hn = 16;
      var Yn = { SEMVER_SPEC_VERSION: Xn, MAX_LENGTH: $n, MAX_SAFE_INTEGER: Wn, MAX_SAFE_COMPONENT_LENGTH: Hn };
      var Jn =
        typeof Er === "object" && Er.env && Er.env.NODE_DEBUG && /\bsemver\b/i.test(Er.env.NODE_DEBUG)
          ? function () {
              for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
                t[r] = arguments[r];
              }
              return console.error("SEMVER", ...t);
            }
          : () => {};
      var qn = Jn;
      (function (e, t) {
        var r = Yn.MAX_SAFE_COMPONENT_LENGTH;
        var n = qn;
        t = e.exports = {};
        var i = (t.re = []);
        var a = (t.src = []);
        var o = (t.t = {});
        var s = 0;
        var l = (e, t, r) => {
          var l = s++;
          n(e, l, t);
          o[e] = l;
          a[l] = t;
          i[l] = new RegExp(t, r ? "g" : undefined);
        };
        l("NUMERICIDENTIFIER", "0|[1-9]\\d*");
        l("NUMERICIDENTIFIERLOOSE", "[0-9]+");
        l("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
        l(
          "MAINVERSION",
          "(".concat(a[o.NUMERICIDENTIFIER], ")\\.") + "(".concat(a[o.NUMERICIDENTIFIER], ")\\.") + "(".concat(a[o.NUMERICIDENTIFIER], ")")
        );
        l(
          "MAINVERSIONLOOSE",
          "(".concat(a[o.NUMERICIDENTIFIERLOOSE], ")\\.") +
            "(".concat(a[o.NUMERICIDENTIFIERLOOSE], ")\\.") +
            "(".concat(a[o.NUMERICIDENTIFIERLOOSE], ")")
        );
        l("PRERELEASEIDENTIFIER", "(?:".concat(a[o.NUMERICIDENTIFIER], "|").concat(a[o.NONNUMERICIDENTIFIER], ")"));
        l("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(a[o.NUMERICIDENTIFIERLOOSE], "|").concat(a[o.NONNUMERICIDENTIFIER], ")"));
        l("PRERELEASE", "(?:-(".concat(a[o.PRERELEASEIDENTIFIER], "(?:\\.").concat(a[o.PRERELEASEIDENTIFIER], ")*))"));
        l("PRERELEASELOOSE", "(?:-?(".concat(a[o.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(a[o.PRERELEASEIDENTIFIERLOOSE], ")*))"));
        l("BUILDIDENTIFIER", "[0-9A-Za-z-]+");
        l("BUILD", "(?:\\+(".concat(a[o.BUILDIDENTIFIER], "(?:\\.").concat(a[o.BUILDIDENTIFIER], ")*))"));
        l("FULLPLAIN", "v?".concat(a[o.MAINVERSION]).concat(a[o.PRERELEASE], "?").concat(a[o.BUILD], "?"));
        l("FULL", "^".concat(a[o.FULLPLAIN], "$"));
        l("LOOSEPLAIN", "[v=\\s]*".concat(a[o.MAINVERSIONLOOSE]).concat(a[o.PRERELEASELOOSE], "?").concat(a[o.BUILD], "?"));
        l("LOOSE", "^".concat(a[o.LOOSEPLAIN], "$"));
        l("GTLT", "((?:<|>)?=?)");
        l("XRANGEIDENTIFIERLOOSE", "".concat(a[o.NUMERICIDENTIFIERLOOSE], "|x|X|\\*"));
        l("XRANGEIDENTIFIER", "".concat(a[o.NUMERICIDENTIFIER], "|x|X|\\*"));
        l(
          "XRANGEPLAIN",
          "[v=\\s]*(".concat(a[o.XRANGEIDENTIFIER], ")") +
            "(?:\\.(".concat(a[o.XRANGEIDENTIFIER], ")") +
            "(?:\\.(".concat(a[o.XRANGEIDENTIFIER], ")") +
            "(?:".concat(a[o.PRERELEASE], ")?").concat(a[o.BUILD], "?") +
            ")?)?"
        );
        l(
          "XRANGEPLAINLOOSE",
          "[v=\\s]*(".concat(a[o.XRANGEIDENTIFIERLOOSE], ")") +
            "(?:\\.(".concat(a[o.XRANGEIDENTIFIERLOOSE], ")") +
            "(?:\\.(".concat(a[o.XRANGEIDENTIFIERLOOSE], ")") +
            "(?:".concat(a[o.PRERELEASELOOSE], ")?").concat(a[o.BUILD], "?") +
            ")?)?"
        );
        l("XRANGE", "^".concat(a[o.GTLT], "\\s*").concat(a[o.XRANGEPLAIN], "$"));
        l("XRANGELOOSE", "^".concat(a[o.GTLT], "\\s*").concat(a[o.XRANGEPLAINLOOSE], "$"));
        l(
          "COERCE",
          "".concat("(^|[^\\d])" + "(\\d{1,").concat(r, "})") + "(?:\\.(\\d{1,".concat(r, "}))?") + "(?:\\.(\\d{1,".concat(r, "}))?") + "(?:$|[^\\d])"
        );
        l("COERCERTL", a[o.COERCE], true);
        l("LONETILDE", "(?:~>?)");
        l("TILDETRIM", "(\\s*)".concat(a[o.LONETILDE], "\\s+"), true);
        t.tildeTrimReplace = "$1~";
        l("TILDE", "^".concat(a[o.LONETILDE]).concat(a[o.XRANGEPLAIN], "$"));
        l("TILDELOOSE", "^".concat(a[o.LONETILDE]).concat(a[o.XRANGEPLAINLOOSE], "$"));
        l("LONECARET", "(?:\\^)");
        l("CARETTRIM", "(\\s*)".concat(a[o.LONECARET], "\\s+"), true);
        t.caretTrimReplace = "$1^";
        l("CARET", "^".concat(a[o.LONECARET]).concat(a[o.XRANGEPLAIN], "$"));
        l("CARETLOOSE", "^".concat(a[o.LONECARET]).concat(a[o.XRANGEPLAINLOOSE], "$"));
        l("COMPARATORLOOSE", "^".concat(a[o.GTLT], "\\s*(").concat(a[o.LOOSEPLAIN], ")$|^$"));
        l("COMPARATOR", "^".concat(a[o.GTLT], "\\s*(").concat(a[o.FULLPLAIN], ")$|^$"));
        l("COMPARATORTRIM", "(\\s*)".concat(a[o.GTLT], "\\s*(").concat(a[o.LOOSEPLAIN], "|").concat(a[o.XRANGEPLAIN], ")"), true);
        t.comparatorTrimReplace = "$1$2$3";
        l("HYPHENRANGE", "^\\s*(".concat(a[o.XRANGEPLAIN], ")") + "\\s+-\\s+" + "(".concat(a[o.XRANGEPLAIN], ")") + "\\s*$");
        l("HYPHENRANGELOOSE", "^\\s*(".concat(a[o.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + "(".concat(a[o.XRANGEPLAINLOOSE], ")") + "\\s*$");
        l("STAR", "(<|>)?=?\\s*\\*");
        l("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
        l("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
      })(Vn, Un);
      var Qn = /^[0-9]+$/;
      var Zn = (e, t) => {
        var r = Qn.test(e);
        var n = Qn.test(t);
        if (r && n) {
          e = +e;
          t = +t;
        }
        return e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1;
      };
      var Kn = (e, t) => Zn(t, e);
      var ei = { compareIdentifiers: Zn, rcompareIdentifiers: Kn };
      var ti = qn;
      var ri = Yn.MAX_LENGTH,
        ni = Yn.MAX_SAFE_INTEGER;
      var ii = Un.re,
        ai = Un.t;
      var oi = Gn;
      var si = ei.compareIdentifiers;
      let li = class e {
        constructor(t, r) {
          r = oi(r);
          if (t instanceof e) {
            if (t.loose === !!r.loose && t.includePrerelease === !!r.includePrerelease) {
              return t;
            } else {
              t = t.version;
            }
          } else if (typeof t !== "string") {
            throw new TypeError("Invalid Version: ".concat(t));
          }
          if (t.length > ri) {
            throw new TypeError("version is longer than ".concat(ri, " characters"));
          }
          ti("SemVer", t, r);
          this.options = r;
          this.loose = !!r.loose;
          this.includePrerelease = !!r.includePrerelease;
          var n = t.trim().match(r.loose ? ii[ai.LOOSE] : ii[ai.FULL]);
          if (!n) {
            throw new TypeError("Invalid Version: ".concat(t));
          }
          this.raw = t;
          this.major = +n[1];
          this.minor = +n[2];
          this.patch = +n[3];
          if (this.major > ni || this.major < 0) {
            throw new TypeError("Invalid major version");
          }
          if (this.minor > ni || this.minor < 0) {
            throw new TypeError("Invalid minor version");
          }
          if (this.patch > ni || this.patch < 0) {
            throw new TypeError("Invalid patch version");
          }
          if (!n[4]) {
            this.prerelease = [];
          } else {
            this.prerelease = n[4].split(".").map((e) => {
              if (/^[0-9]+$/.test(e)) {
                var t = +e;
                if (t >= 0 && t < ni) {
                  return t;
                }
              }
              return e;
            });
          }
          this.build = n[5] ? n[5].split(".") : [];
          this.format();
        }
        format() {
          this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch);
          if (this.prerelease.length) {
            this.version += "-".concat(this.prerelease.join("."));
          }
          return this.version;
        }
        toString() {
          return this.version;
        }
        compare(t) {
          ti("SemVer.compare", this.version, this.options, t);
          if (!(t instanceof e)) {
            if (typeof t === "string" && t === this.version) {
              return 0;
            }
            t = new e(t, this.options);
          }
          if (t.version === this.version) {
            return 0;
          }
          return this.compareMain(t) || this.comparePre(t);
        }
        compareMain(t) {
          if (!(t instanceof e)) {
            t = new e(t, this.options);
          }
          return si(this.major, t.major) || si(this.minor, t.minor) || si(this.patch, t.patch);
        }
        comparePre(t) {
          if (!(t instanceof e)) {
            t = new e(t, this.options);
          }
          if (this.prerelease.length && !t.prerelease.length) {
            return -1;
          } else if (!this.prerelease.length && t.prerelease.length) {
            return 1;
          } else if (!this.prerelease.length && !t.prerelease.length) {
            return 0;
          }
          var r = 0;
          do {
            var n = this.prerelease[r];
            var i = t.prerelease[r];
            ti("prerelease compare", r, n, i);
            if (n === undefined && i === undefined) {
              return 0;
            } else if (i === undefined) {
              return 1;
            } else if (n === undefined) {
              return -1;
            } else if (n === i) {
              continue;
            } else {
              return si(n, i);
            }
          } while (++r);
        }
        compareBuild(t) {
          if (!(t instanceof e)) {
            t = new e(t, this.options);
          }
          var r = 0;
          do {
            var n = this.build[r];
            var i = t.build[r];
            ti("prerelease compare", r, n, i);
            if (n === undefined && i === undefined) {
              return 0;
            } else if (i === undefined) {
              return 1;
            } else if (n === undefined) {
              return -1;
            } else if (n === i) {
              continue;
            } else {
              return si(n, i);
            }
          } while (++r);
        }
        inc(e, t) {
          switch (e) {
            case "premajor":
              this.prerelease.length = 0;
              this.patch = 0;
              this.minor = 0;
              this.major++;
              this.inc("pre", t);
              break;
            case "preminor":
              this.prerelease.length = 0;
              this.patch = 0;
              this.minor++;
              this.inc("pre", t);
              break;
            case "prepatch":
              this.prerelease.length = 0;
              this.inc("patch", t);
              this.inc("pre", t);
              break;
            case "prerelease":
              if (this.prerelease.length === 0) {
                this.inc("patch", t);
              }
              this.inc("pre", t);
              break;
            case "major":
              if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                this.major++;
              }
              this.minor = 0;
              this.patch = 0;
              this.prerelease = [];
              break;
            case "minor":
              if (this.patch !== 0 || this.prerelease.length === 0) {
                this.minor++;
              }
              this.patch = 0;
              this.prerelease = [];
              break;
            case "patch":
              if (this.prerelease.length === 0) {
                this.patch++;
              }
              this.prerelease = [];
              break;
            case "pre":
              if (this.prerelease.length === 0) {
                this.prerelease = [0];
              } else {
                var r = this.prerelease.length;
                while (--r >= 0) {
                  if (typeof this.prerelease[r] === "number") {
                    this.prerelease[r]++;
                    r = -2;
                  }
                }
                if (r === -1) {
                  this.prerelease.push(0);
                }
              }
              if (t) {
                if (si(this.prerelease[0], t) === 0) {
                  if (isNaN(this.prerelease[1])) {
                    this.prerelease = [t, 0];
                  }
                } else {
                  this.prerelease = [t, 0];
                }
              }
              break;
            default:
              throw new Error("invalid increment argument: ".concat(e));
          }
          this.format();
          this.raw = this.version;
          return this;
        }
      };
      var ci = li;
      var ui = ci;
      var fi = (e, t, r) => new ui(e, r).compare(new ui(t, r));
      var hi = fi;
      var pi = hi;
      var di = (e, t, r) => pi(e, t, r) === 0;
      var vi = di;
      var gi = hi;
      var mi = (e, t, r) => gi(e, t, r) !== 0;
      var yi = mi;
      var bi = hi;
      var Ei = (e, t, r) => bi(e, t, r) > 0;
      var wi = Ei;
      var xi = hi;
      var Oi = (e, t, r) => xi(e, t, r) >= 0;
      var Ai = Oi;
      var Ii = hi;
      var Ni = (e, t, r) => Ii(e, t, r) < 0;
      var Si = Ni;
      var Li = hi;
      var Ti = (e, t, r) => Li(e, t, r) <= 0;
      var Ri = Ti;
      var Di = vi;
      var ki = yi;
      var Ci = wi;
      var Fi = Ai;
      var ji = Si;
      var Pi = Ri;
      var _i = (e, t, r, n) => {
        switch (t) {
          case "===":
            if (typeof e === "object") {
              e = e.version;
            }
            if (typeof r === "object") {
              r = r.version;
            }
            return e === r;
          case "!==":
            if (typeof e === "object") {
              e = e.version;
            }
            if (typeof r === "object") {
              r = r.version;
            }
            return e !== r;
          case "":
          case "=":
          case "==":
            return Di(e, r, n);
          case "!=":
            return ki(e, r, n);
          case ">":
            return Ci(e, r, n);
          case ">=":
            return Fi(e, r, n);
          case "<":
            return ji(e, r, n);
          case "<=":
            return Pi(e, r, n);
          default:
            throw new TypeError("Invalid operator: ".concat(t));
        }
      };
      var Mi = _i;
      var zi;
      var Bi;
      function Gi() {
        if (Bi) return zi;
        Bi = 1;
        var e = Symbol("SemVer ANY");
        class t {
          static get ANY() {
            return e;
          }
          constructor(n, i) {
            i = r(i);
            if (n instanceof t) {
              if (n.loose === !!i.loose) {
                return n;
              } else {
                n = n.value;
              }
            }
            o("comparator", n, i);
            this.options = i;
            this.loose = !!i.loose;
            this.parse(n);
            if (this.semver === e) {
              this.value = "";
            } else {
              this.value = this.operator + this.semver.version;
            }
            o("comp", this);
          }
          parse(t) {
            var r = this.options.loose ? n[i.COMPARATORLOOSE] : n[i.COMPARATOR];
            var a = t.match(r);
            if (!a) {
              throw new TypeError("Invalid comparator: ".concat(t));
            }
            this.operator = a[1] !== undefined ? a[1] : "";
            if (this.operator === "=") {
              this.operator = "";
            }
            if (!a[2]) {
              this.semver = e;
            } else {
              this.semver = new s(a[2], this.options.loose);
            }
          }
          toString() {
            return this.value;
          }
          test(t) {
            o("Comparator.test", t, this.options.loose);
            if (this.semver === e || t === e) {
              return true;
            }
            if (typeof t === "string") {
              try {
                t = new s(t, this.options);
              } catch (Ka) {
                return false;
              }
            }
            return a(t, this.operator, this.semver, this.options);
          }
          intersects(e, r) {
            if (!(e instanceof t)) {
              throw new TypeError("a Comparator is required");
            }
            if (!r || typeof r !== "object") {
              r = { loose: !!r, includePrerelease: false };
            }
            if (this.operator === "") {
              if (this.value === "") {
                return true;
              }
              return new l(e.value, r).test(this.value);
            } else if (e.operator === "") {
              if (e.value === "") {
                return true;
              }
              return new l(this.value, r).test(e.semver);
            }
            var n = (this.operator === ">=" || this.operator === ">") && (e.operator === ">=" || e.operator === ">");
            var i = (this.operator === "<=" || this.operator === "<") && (e.operator === "<=" || e.operator === "<");
            var o = this.semver.version === e.semver.version;
            var s = (this.operator === ">=" || this.operator === "<=") && (e.operator === ">=" || e.operator === "<=");
            var c =
              a(this.semver, "<", e.semver, r) && (this.operator === ">=" || this.operator === ">") && (e.operator === "<=" || e.operator === "<");
            var u =
              a(this.semver, ">", e.semver, r) && (this.operator === "<=" || this.operator === "<") && (e.operator === ">=" || e.operator === ">");
            return n || i || (o && s) || c || u;
          }
        }
        zi = t;
        var r = Gn;
        var n = Un.re,
          i = Un.t;
        var a = Mi;
        var o = qn;
        var s = ci;
        var l = Hi();
        return zi;
      }
      function Ui(e, t) {
        var r = (typeof Symbol !== "undefined" && e[Symbol.iterator]) || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = Vi(e)) || (t && e && typeof e.length === "number")) {
            if (r) e = r;
            var n = 0;
            var i = function e() {};
            return {
              s: i,
              n: function t() {
                if (n >= e.length) return { done: true };
                return { done: false, value: e[n++] };
              },
              e: function e(t) {
                throw t;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a = true,
          o = false,
          s;
        return {
          s: function t() {
            r = r.call(e);
          },
          n: function e() {
            var t = r.next();
            a = t.done;
            return t;
          },
          e: function e(t) {
            o = true;
            s = t;
          },
          f: function e() {
            try {
              if (!a && r.return != null) r.return();
            } finally {
              if (o) throw s;
            }
          },
        };
      }
      function Vi(e, t) {
        if (!e) return;
        if (typeof e === "string") return Xi(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor) r = e.constructor.name;
        if (r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xi(e, t);
      }
      function Xi(e, t) {
        if (t == null || t > e.length) t = e.length;
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var $i;
      var Wi;
      function Hi() {
        if (Wi) return $i;
        Wi = 1;
        class e {
          constructor(t, r) {
            r = n(r);
            if (t instanceof e) {
              if (t.loose === !!r.loose && t.includePrerelease === !!r.includePrerelease) {
                return t;
              } else {
                return new e(t.raw, r);
              }
            }
            if (t instanceof i) {
              this.raw = t.value;
              this.set = [[t]];
              this.format();
              return this;
            }
            this.options = r;
            this.loose = !!r.loose;
            this.includePrerelease = !!r.includePrerelease;
            this.raw = t;
            this.set = t
              .split("||")
              .map((e) => this.parseRange(e.trim()))
              .filter((e) => e.length);
            if (!this.set.length) {
              throw new TypeError("Invalid SemVer Range: ".concat(t));
            }
            if (this.set.length > 1) {
              var a = this.set[0];
              this.set = this.set.filter((e) => !h(e[0]));
              if (this.set.length === 0) {
                this.set = [a];
              } else if (this.set.length > 1) {
                var o = Ui(this.set),
                  s;
                try {
                  for (o.s(); !(s = o.n()).done; ) {
                    var l = s.value;
                    if (l.length === 1 && p(l[0])) {
                      this.set = [l];
                      break;
                    }
                  }
                } catch (c) {
                  o.e(c);
                } finally {
                  o.f();
                }
              }
            }
            this.format();
          }
          format() {
            this.range = this.set
              .map((e) => e.join(" ").trim())
              .join("||")
              .trim();
            return this.range;
          }
          toString() {
            return this.range;
          }
          parseRange(e) {
            e = e.trim();
            var t = Object.keys(this.options).join(",");
            var n = "parseRange:".concat(t, ":").concat(e);
            var o = r.get(n);
            if (o) {
              return o;
            }
            var p = this.options.loose;
            var d = p ? s[l.HYPHENRANGELOOSE] : s[l.HYPHENRANGE];
            e = e.replace(d, I(this.options.includePrerelease));
            a("hyphen replace", e);
            e = e.replace(s[l.COMPARATORTRIM], c);
            a("comparator trim", e);
            e = e.replace(s[l.TILDETRIM], u);
            e = e.replace(s[l.CARETTRIM], f);
            e = e.split(/\s+/).join(" ");
            var g = e
              .split(" ")
              .map((e) => v(e, this.options))
              .join(" ")
              .split(/\s+/)
              .map((e) => A(e, this.options));
            if (p) {
              g = g.filter((e) => {
                a("loose invalid filter", e, this.options);
                return !!e.match(s[l.COMPARATORLOOSE]);
              });
            }
            a("range list", g);
            var m = new Map();
            var y = g.map((e) => new i(e, this.options));
            var b = Ui(y),
              E;
            try {
              for (b.s(); !(E = b.n()).done; ) {
                var w = E.value;
                if (h(w)) {
                  return [w];
                }
                m.set(w.value, w);
              }
            } catch (O) {
              b.e(O);
            } finally {
              b.f();
            }
            if (m.size > 1 && m.has("")) {
              m.delete("");
            }
            var x = [...m.values()];
            r.set(n, x);
            return x;
          }
          intersects(t, r) {
            if (!(t instanceof e)) {
              throw new TypeError("a Range is required");
            }
            return this.set.some((e) => d(e, r) && t.set.some((t) => d(t, r) && e.every((e) => t.every((t) => e.intersects(t, r)))));
          }
          test(e) {
            if (!e) {
              return false;
            }
            if (typeof e === "string") {
              try {
                e = new o(e, this.options);
              } catch (Ka) {
                return false;
              }
            }
            for (var t = 0; t < this.set.length; t++) {
              if (N(this.set[t], e, this.options)) {
                return true;
              }
            }
            return false;
          }
        }
        $i = e;
        var t = Mn;
        var r = new t({ max: 1e3 });
        var n = Gn;
        var i = Gi();
        var a = qn;
        var o = ci;
        var s = Un.re,
          l = Un.t,
          c = Un.comparatorTrimReplace,
          u = Un.tildeTrimReplace,
          f = Un.caretTrimReplace;
        var h = (e) => e.value === "<0.0.0-0";
        var p = (e) => e.value === "";
        var d = (e, t) => {
          var r = true;
          var n = e.slice();
          var i = n.pop();
          while (r && n.length) {
            r = n.every((e) => i.intersects(e, t));
            i = n.pop();
          }
          return r;
        };
        var v = (e, t) => {
          a("comp", e, t);
          e = b(e, t);
          a("caret", e);
          e = m(e, t);
          a("tildes", e);
          e = w(e, t);
          a("xrange", e);
          e = O(e, t);
          a("stars", e);
          return e;
        };
        var g = (e) => !e || e.toLowerCase() === "x" || e === "*";
        var m = (e, t) =>
          e
            .trim()
            .split(/\s+/)
            .map((e) => y(e, t))
            .join(" ");
        var y = (e, t) => {
          var r = t.loose ? s[l.TILDELOOSE] : s[l.TILDE];
          return e.replace(r, (t, r, n, i, o) => {
            a("tilde", e, t, r, n, i, o);
            var s;
            if (g(r)) {
              s = "";
            } else if (g(n)) {
              s = ">=".concat(r, ".0.0 <").concat(+r + 1, ".0.0-0");
            } else if (g(i)) {
              s = ">="
                .concat(r, ".")
                .concat(n, ".0 <")
                .concat(r, ".")
                .concat(+n + 1, ".0-0");
            } else if (o) {
              a("replaceTilde pr", o);
              s = ">="
                .concat(r, ".")
                .concat(n, ".")
                .concat(i, "-")
                .concat(o, " <")
                .concat(r, ".")
                .concat(+n + 1, ".0-0");
            } else {
              s = ">="
                .concat(r, ".")
                .concat(n, ".")
                .concat(i, " <")
                .concat(r, ".")
                .concat(+n + 1, ".0-0");
            }
            a("tilde return", s);
            return s;
          });
        };
        var b = (e, t) =>
          e
            .trim()
            .split(/\s+/)
            .map((e) => E(e, t))
            .join(" ");
        var E = (e, t) => {
          a("caret", e, t);
          var r = t.loose ? s[l.CARETLOOSE] : s[l.CARET];
          var n = t.includePrerelease ? "-0" : "";
          return e.replace(r, (t, r, i, o, s) => {
            a("caret", e, t, r, i, o, s);
            var l;
            if (g(r)) {
              l = "";
            } else if (g(i)) {
              l = ">="
                .concat(r, ".0.0")
                .concat(n, " <")
                .concat(+r + 1, ".0.0-0");
            } else if (g(o)) {
              if (r === "0") {
                l = ">="
                  .concat(r, ".")
                  .concat(i, ".0")
                  .concat(n, " <")
                  .concat(r, ".")
                  .concat(+i + 1, ".0-0");
              } else {
                l = ">="
                  .concat(r, ".")
                  .concat(i, ".0")
                  .concat(n, " <")
                  .concat(+r + 1, ".0.0-0");
              }
            } else if (s) {
              a("replaceCaret pr", s);
              if (r === "0") {
                if (i === "0") {
                  l = ">="
                    .concat(r, ".")
                    .concat(i, ".")
                    .concat(o, "-")
                    .concat(s, " <")
                    .concat(r, ".")
                    .concat(i, ".")
                    .concat(+o + 1, "-0");
                } else {
                  l = ">="
                    .concat(r, ".")
                    .concat(i, ".")
                    .concat(o, "-")
                    .concat(s, " <")
                    .concat(r, ".")
                    .concat(+i + 1, ".0-0");
                }
              } else {
                l = ">="
                  .concat(r, ".")
                  .concat(i, ".")
                  .concat(o, "-")
                  .concat(s, " <")
                  .concat(+r + 1, ".0.0-0");
              }
            } else {
              a("no pr");
              if (r === "0") {
                if (i === "0") {
                  l = ">="
                    .concat(r, ".")
                    .concat(i, ".")
                    .concat(o)
                    .concat(n, " <")
                    .concat(r, ".")
                    .concat(i, ".")
                    .concat(+o + 1, "-0");
                } else {
                  l = ">="
                    .concat(r, ".")
                    .concat(i, ".")
                    .concat(o)
                    .concat(n, " <")
                    .concat(r, ".")
                    .concat(+i + 1, ".0-0");
                }
              } else {
                l = ">="
                  .concat(r, ".")
                  .concat(i, ".")
                  .concat(o, " <")
                  .concat(+r + 1, ".0.0-0");
              }
            }
            a("caret return", l);
            return l;
          });
        };
        var w = (e, t) => {
          a("replaceXRanges", e, t);
          return e
            .split(/\s+/)
            .map((e) => x(e, t))
            .join(" ");
        };
        var x = (e, t) => {
          e = e.trim();
          var r = t.loose ? s[l.XRANGELOOSE] : s[l.XRANGE];
          return e.replace(r, (r, n, i, o, s, l) => {
            a("xRange", e, r, n, i, o, s, l);
            var c = g(i);
            var u = c || g(o);
            var f = u || g(s);
            var h = f;
            if (n === "=" && h) {
              n = "";
            }
            l = t.includePrerelease ? "-0" : "";
            if (c) {
              if (n === ">" || n === "<") {
                r = "<0.0.0-0";
              } else {
                r = "*";
              }
            } else if (n && h) {
              if (u) {
                o = 0;
              }
              s = 0;
              if (n === ">") {
                n = ">=";
                if (u) {
                  i = +i + 1;
                  o = 0;
                  s = 0;
                } else {
                  o = +o + 1;
                  s = 0;
                }
              } else if (n === "<=") {
                n = "<";
                if (u) {
                  i = +i + 1;
                } else {
                  o = +o + 1;
                }
              }
              if (n === "<") {
                l = "-0";
              }
              r = ""
                .concat(n + i, ".")
                .concat(o, ".")
                .concat(s)
                .concat(l);
            } else if (u) {
              r = ">="
                .concat(i, ".0.0")
                .concat(l, " <")
                .concat(+i + 1, ".0.0-0");
            } else if (f) {
              r = ">="
                .concat(i, ".")
                .concat(o, ".0")
                .concat(l, " <")
                .concat(i, ".")
                .concat(+o + 1, ".0-0");
            }
            a("xRange return", r);
            return r;
          });
        };
        var O = (e, t) => {
          a("replaceStars", e, t);
          return e.trim().replace(s[l.STAR], "");
        };
        var A = (e, t) => {
          a("replaceGTE0", e, t);
          return e.trim().replace(s[t.includePrerelease ? l.GTE0PRE : l.GTE0], "");
        };
        var I = (e) => (t, r, n, i, a, o, s, l, c, u, f, h, p) => {
          if (g(n)) {
            r = "";
          } else if (g(i)) {
            r = ">=".concat(n, ".0.0").concat(e ? "-0" : "");
          } else if (g(a)) {
            r = ">="
              .concat(n, ".")
              .concat(i, ".0")
              .concat(e ? "-0" : "");
          } else if (o) {
            r = ">=".concat(r);
          } else {
            r = ">=".concat(r).concat(e ? "-0" : "");
          }
          if (g(c)) {
            l = "";
          } else if (g(u)) {
            l = "<".concat(+c + 1, ".0.0-0");
          } else if (g(f)) {
            l = "<".concat(c, ".").concat(+u + 1, ".0-0");
          } else if (h) {
            l = "<=".concat(c, ".").concat(u, ".").concat(f, "-").concat(h);
          } else if (e) {
            l = "<"
              .concat(c, ".")
              .concat(u, ".")
              .concat(+f + 1, "-0");
          } else {
            l = "<=".concat(l);
          }
          return "".concat(r, " ").concat(l).trim();
        };
        var N = (e, t, r) => {
          for (var n = 0; n < e.length; n++) {
            if (!e[n].test(t)) {
              return false;
            }
          }
          if (t.prerelease.length && !r.includePrerelease) {
            for (var o = 0; o < e.length; o++) {
              a(e[o].semver);
              if (e[o].semver === i.ANY) {
                continue;
              }
              if (e[o].semver.prerelease.length > 0) {
                var s = e[o].semver;
                if (s.major === t.major && s.minor === t.minor && s.patch === t.patch) {
                  return true;
                }
              }
            }
            return false;
          }
          return true;
        };
        return $i;
      }
      var Yi = Hi();
      var Ji = (e, t, r) => {
        try {
          t = new Yi(t, r);
        } catch (Ka) {
          return false;
        }
        return t.test(e);
      };
      var qi = Ji;
      function Qi(e, t, r) {
        var n = e.open(t);
        var i = 1e4;
        var a = 250;
        var o = new URL(t),
          s = o.origin;
        var l = ~~(i / a);
        function c(t) {
          if (t.source === n) {
            l = 0;
            e.removeEventListener("message", c, false);
          }
        }
        e.addEventListener("message", c, false);
        function u() {
          if (l <= 0) {
            return;
          }
          n.postMessage(r, s);
          setTimeout(u, a);
          l -= 1;
        }
        setTimeout(u, a);
      }
      var Zi =
        '.vega-embed {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n}\n.vega-embed.has-actions {\n  padding-right: 38px;\n}\n.vega-embed details:not([open]) > :not(summary) {\n  display: none !important;\n}\n.vega-embed summary {\n  list-style: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 6px;\n  z-index: 1000;\n  background: white;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n  color: #1b1e23;\n  border: 1px solid #aaa;\n  border-radius: 999px;\n  opacity: 0.2;\n  transition: opacity 0.4s ease-in;\n  cursor: pointer;\n  line-height: 0px;\n}\n.vega-embed summary::-webkit-details-marker {\n  display: none;\n}\n.vega-embed summary:active {\n  box-shadow: #aaa 0px 0px 0px 1px inset;\n}\n.vega-embed summary svg {\n  width: 14px;\n  height: 14px;\n}\n.vega-embed details[open] summary {\n  opacity: 0.7;\n}\n.vega-embed:hover summary, .vega-embed:focus-within summary {\n  opacity: 1 !important;\n  transition: opacity 0.2s ease;\n}\n.vega-embed .vega-actions {\n  position: absolute;\n  z-index: 1001;\n  top: 35px;\n  right: -9px;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 8px;\n  padding-top: 8px;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);\n  border: 1px solid #d9d9d9;\n  background: white;\n  animation-duration: 0.15s;\n  animation-name: scale-in;\n  animation-timing-function: cubic-bezier(0.2, 0, 0.13, 1.5);\n  text-align: left;\n}\n.vega-embed .vega-actions a {\n  padding: 8px 16px;\n  font-family: sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  white-space: nowrap;\n  color: #434a56;\n  text-decoration: none;\n}\n.vega-embed .vega-actions a:hover, .vega-embed .vega-actions a:focus {\n  background-color: #f7f7f9;\n  color: black;\n}\n.vega-embed .vega-actions::before, .vega-embed .vega-actions::after {\n  content: "";\n  display: inline-block;\n  position: absolute;\n}\n.vega-embed .vega-actions::before {\n  left: auto;\n  right: 14px;\n  top: -16px;\n  border: 8px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #d9d9d9;\n}\n.vega-embed .vega-actions::after {\n  left: auto;\n  right: 15px;\n  top: -14px;\n  border: 7px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #fff;\n}\n.vega-embed .chart-wrapper.fit-x {\n  width: 100%;\n}\n.vega-embed .chart-wrapper.fit-y {\n  height: 100%;\n}\n\n.vega-embed-wrapper {\n  max-width: 100%;\n  overflow: auto;\n  padding-right: 14px;\n}\n\n@keyframes scale-in {\n  from {\n    opacity: 0;\n    transform: scale(0.6);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n';
      if (!String.prototype.startsWith) {
        String.prototype.startsWith = function (e, t) {
          return this.substr(!t || t < 0 ? 0 : +t, e.length) === e;
        };
      }
      function Ki(e) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
          r[n - 1] = arguments[n];
        }
        for (var i = 0, a = r; i < a.length; i++) {
          var o = a[i];
          ea(e, o);
        }
        return e;
      }
      function ea(e, t) {
        for (var r = 0, n = Object.keys(t); r < n.length; r++) {
          var i = n[r];
          (0, X.writeConfig)(e, i, t[i], true);
        }
      }
      var ta = "vega-embed";
      var ra = "6.21.3";
      var na = "Publish Vega visualizations as embedded web components.";
      var ia = ["vega", "data", "visualization", "component", "embed"];
      var aa = { type: "git", url: "http://github.com/vega/vega-embed.git" };
      var oa = { name: "UW Interactive Data Lab", url: "http://idl.cs.washington.edu" };
      var sa = [{ name: "Dominik Moritz", url: "https://www.domoritz.de" }];
      var la = { url: "https://github.com/vega/vega-embed/issues" };
      var ca = "https://github.com/vega/vega-embed#readme";
      var ua = "BSD-3-Clause";
      var fa = "build/vega-embed.js";
      var ha = "build/vega-embed.module.js";
      var pa = "build/vega-embed.min.js";
      var da = "build/vega-embed.min.js";
      var va = "build/vega-embed.module.d.ts";
      var ga = ["src", "build", "build-es5", "patches"];
      var ma = {
        "@babel/plugin-transform-runtime": "^7.19.6",
        "@release-it/conventional-changelog": "^5.1.1",
        "@rollup/plugin-commonjs": "24.0.1",
        "@rollup/plugin-json": "^6.0.0",
        "@rollup/plugin-node-resolve": "^15.0.1",
        "@rollup/plugin-terser": "^0.4.0",
        "@types/semver": "^7.3.13",
        "browser-sync": "^2.27.11",
        concurrently: "^7.6.0",
        "del-cli": "^5.0.0",
        "jest-canvas-mock": "^2.4.0",
        "jest-environment-jsdom": "^29.4.3",
        "patch-package": "^6.5.1",
        "postinstall-postinstall": "^2.1.0",
        "release-it": "^15.6.0",
        "rollup-plugin-bundle-size": "^1.0.3",
        "rollup-plugin-ts": "^3.2.0",
        rollup: "3.15.0",
        sass: "^1.58.1",
        typescript: "^4.9.5",
        "vega-lite-dev-config": "^0.21.0",
        "vega-lite": "^5.2.0",
        vega: "^5.22.1",
      };
      var ya = { vega: "^5.21.0", "vega-lite": "*" };
      var ba = {
        "fast-json-patch": "^3.1.1",
        "json-stringify-pretty-compact": "^3.0.0",
        semver: "^7.3.8",
        tslib: "^2.5.0",
        "vega-interpreter": "^1.0.4",
        "vega-schema-url-parser": "^2.2.0",
        "vega-themes": "^2.12.1",
        "vega-tooltip": "^0.30.1",
      };
      var Ea = ["yallist"];
      var wa = {
        prebuild: "yarn clean && yarn build:style",
        build: "rollup -c",
        "build:style": "./build-style.sh",
        clean: "del-cli build build-es5 src/style.ts",
        prepublishOnly: "yarn clean && yarn build",
        preversion: "yarn lint && yarn test",
        serve: "browser-sync start --directory -s -f build *.html",
        start: "yarn build && concurrently --kill-others -n Server,Rollup 'yarn serve' 'rollup -c -w'",
        pretest: "yarn build:style",
        test: "beemo jest --stdio stream",
        "test:inspect": "node --inspect-brk ./node_modules/.bin/jest --runInBand",
        prepare: "beemo create-config && npx patch-package",
        prettierbase: "beemo prettier '*.{css,scss,html}'",
        eslintbase: "beemo eslint .",
        format: "yarn eslintbase --fix && yarn prettierbase --write",
        lint: "yarn eslintbase && yarn prettierbase --check",
        release: "release-it",
      };
      var xa = {
        name: ta,
        version: ra,
        description: na,
        keywords: ia,
        repository: aa,
        author: oa,
        contributors: sa,
        bugs: la,
        homepage: ca,
        license: ua,
        main: fa,
        module: ha,
        unpkg: pa,
        jsdelivr: da,
        types: va,
        files: ga,
        devDependencies: ma,
        peerDependencies: ya,
        dependencies: ba,
        bundledDependencies: Ea,
        scripts: wa,
      };
      var Oa;
      function Aa(e, t) {
        var r = (typeof Symbol !== "undefined" && e[Symbol.iterator]) || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = Ia(e)) || (t && e && typeof e.length === "number")) {
            if (r) e = r;
            var n = 0;
            var i = function e() {};
            return {
              s: i,
              n: function t() {
                if (n >= e.length) return { done: true };
                return { done: false, value: e[n++] };
              },
              e: function e(t) {
                throw t;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a = true,
          o = false,
          s;
        return {
          s: function t() {
            r = r.call(e);
          },
          n: function e() {
            var t = r.next();
            a = t.done;
            return t;
          },
          e: function e(t) {
            o = true;
            s = t;
          },
          f: function e() {
            try {
              if (!a && r.return != null) r.return();
            } finally {
              if (o) throw s;
            }
          },
        };
      }
      function Ia(e, t) {
        if (!e) return;
        if (typeof e === "string") return Na(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor) r = e.constructor.name;
        if (r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Na(e, t);
      }
      function Na(e, t) {
        if (t == null || t > e.length) t = e.length;
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Sa(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function La(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Sa(Object(r), !0).forEach(function (t) {
                Ar(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Sa(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var Ta = xa.version;
      var Ra = X;
      var Da = ie;
      var ka = typeof window !== "undefined" ? window : undefined;
      if (Da === undefined && ka !== null && ka !== void 0 && (Oa = ka.vl) !== null && Oa !== void 0 && Oa.compile) {
        Da = ka.vl;
      }
      var Ca = { export: { svg: true, png: true }, source: true, compiled: true, editor: true };
      var Fa = {
        CLICK_TO_VIEW_ACTIONS: "Click to view actions",
        COMPILED_ACTION: "View Compiled Vega",
        EDITOR_ACTION: "Open in Vega Editor",
        PNG_ACTION: "Save as PNG",
        SOURCE_ACTION: "View Source",
        SVG_ACTION: "Save as SVG",
      };
      var ja = { vega: "Vega", "vega-lite": "Vega-Lite" };
      var Pa = { vega: Ra.version, "vega-lite": Da ? Da.version : "not available" };
      var _a = { vega: (e) => e, "vega-lite": (e, t) => Da.compile(e, { config: t }).spec };
      var Ma =
        '\n<svg viewBox="0 0 16 16" fill="currentColor" stroke="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">\n  <circle r="2" cy="8" cx="2"></circle>\n  <circle r="2" cy="8" cx="8"></circle>\n  <circle r="2" cy="8" cx="14"></circle>\n</svg>';
      var za = "chart-wrapper";
      function Ba(e) {
        return typeof e === "function";
      }
      function Ga(e, t, r, n) {
        var i = "<html><head>".concat(t, '</head><body><pre><code class="json">');
        var a = "</code></pre>".concat(r, "</body></html>");
        var o = window.open("");
        o.document.write(i + e + a);
        o.document.title = "".concat(ja[n], " JSON Source");
      }
      function Ua(e, t) {
        if (e.$schema) {
          var r = oe(e.$schema);
          if (t && t !== r.library) {
            var n;
            console.warn(
              "The given visualization spec is written in "
                .concat(ja[r.library], ", but mode argument sets ")
                .concat((n = ja[t]) !== null && n !== void 0 ? n : t, ".")
            );
          }
          var i = r.library;
          if (!qi(Pa[i], "^".concat(r.version.slice(1)))) {
            console.warn(
              "The input spec uses ".concat(ja[i], " ").concat(r.version, ", but the current version of ").concat(ja[i], " is v").concat(Pa[i], ".")
            );
          }
          return i;
        }
        if ("mark" in e || "encoding" in e || "layer" in e || "hconcat" in e || "vconcat" in e || "facet" in e || "repeat" in e) {
          return "vega-lite";
        }
        if ("marks" in e || "signals" in e || "scales" in e || "axes" in e) {
          return "vega";
        }
        return t !== null && t !== void 0 ? t : "vega";
      }
      function Va(e) {
        return !!(e && "load" in e);
      }
      function Xa(e) {
        return Va(e) ? e : Ra.loader(e);
      }
      function $a(e) {
        var t, r;
        var n = (t = (r = e.usermeta) === null || r === void 0 ? void 0 : r.embedOptions) !== null && t !== void 0 ? t : {};
        if ((0, X.isString)(n.defaultStyle)) {
          n.defaultStyle = false;
        }
        return n;
      }
      function Wa(e, t) {
        return Ha.apply(this, arguments);
      }
      function Ha() {
        Ha = Nr(
          cn.mark(function e(t, r) {
            var n, i;
            var a,
              o,
              s,
              l,
              c,
              u,
              f,
              h,
              p,
              d = arguments;
            return cn.wrap(function e(v) {
              while (1)
                switch ((v.prev = v.next)) {
                  case 0:
                    a = d.length > 2 && d[2] !== undefined ? d[2] : {};
                    if (!(0, X.isString)(r)) {
                      v.next = 10;
                      break;
                    }
                    s = Xa(a.loader);
                    v.t0 = JSON;
                    v.next = 6;
                    return s.load(r);
                  case 6:
                    v.t1 = v.sent;
                    o = v.t0.parse.call(v.t0, v.t1);
                    v.next = 11;
                    break;
                  case 10:
                    o = r;
                  case 11:
                    l = $a(o);
                    c = l.loader;
                    if (!s || c) {
                      s = Xa((u = a.loader) !== null && u !== void 0 ? u : c);
                    }
                    v.next = 16;
                    return Ya(l, s);
                  case 16:
                    f = v.sent;
                    v.next = 19;
                    return Ya(a, s);
                  case 19:
                    h = v.sent;
                    p = La(
                      La({}, Ki(h, f)),
                      {},
                      {
                        config: (0, X.mergeConfig)(
                          (n = h.config) !== null && n !== void 0 ? n : {},
                          (i = f.config) !== null && i !== void 0 ? i : {}
                        ),
                      }
                    );
                    v.next = 23;
                    return Qa(t, o, p, s);
                  case 23:
                    return v.abrupt("return", v.sent);
                  case 24:
                  case "end":
                    return v.stop();
                }
            }, e);
          })
        );
        return Ha.apply(this, arguments);
      }
      function Ya(e, t) {
        return Ja.apply(this, arguments);
      }
      function Ja() {
        Ja = Nr(
          cn.mark(function e(t, r) {
            var n;
            var i, a;
            return cn.wrap(function e(o) {
              while (1)
                switch ((o.prev = o.next)) {
                  case 0:
                    if (!(0, X.isString)(t.config)) {
                      o.next = 8;
                      break;
                    }
                    o.t1 = JSON;
                    o.next = 4;
                    return r.load(t.config);
                  case 4:
                    o.t2 = o.sent;
                    o.t0 = o.t1.parse.call(o.t1, o.t2);
                    o.next = 9;
                    break;
                  case 8:
                    o.t0 = (n = t.config) !== null && n !== void 0 ? n : {};
                  case 9:
                    i = o.t0;
                    if (!(0, X.isString)(t.patch)) {
                      o.next = 18;
                      break;
                    }
                    o.t4 = JSON;
                    o.next = 14;
                    return r.load(t.patch);
                  case 14:
                    o.t5 = o.sent;
                    o.t3 = o.t4.parse.call(o.t4, o.t5);
                    o.next = 19;
                    break;
                  case 18:
                    o.t3 = t.patch;
                  case 19:
                    a = o.t3;
                    return o.abrupt("return", La(La(La({}, t), a ? { patch: a } : {}), i ? { config: i } : {}));
                  case 21:
                  case "end":
                    return o.stop();
                }
            }, e);
          })
        );
        return Ja.apply(this, arguments);
      }
      function qa(e) {
        var t;
        var r = e.getRootNode ? e.getRootNode() : document;
        return r instanceof ShadowRoot
          ? { root: r, rootContainer: r }
          : { root: document, rootContainer: (t = document.head) !== null && t !== void 0 ? t : document.body };
      }
      function Qa(e, t) {
        return Za.apply(this, arguments);
      }
      function Za() {
        Za = Nr(
          cn.mark(function e(t, r) {
            var n, i, o, s, l, c, u;
            var f,
              h,
              p,
              d,
              v,
              g,
              m,
              y,
              b,
              E,
              w,
              x,
              O,
              A,
              N,
              S,
              L,
              T,
              R,
              D,
              k,
              C,
              F,
              j,
              P,
              _,
              M,
              z,
              B,
              G,
              U,
              $,
              W,
              H,
              Y,
              J,
              q,
              Q,
              Z,
              K,
              ee,
              te,
              re,
              ie,
              ae = arguments;
            return cn.wrap(
              function e(se) {
                while (1)
                  switch ((se.prev = se.next)) {
                    case 0:
                      ie = function e() {
                        if (U) {
                          document.removeEventListener("click", U);
                        }
                        P.finalize();
                      };
                      f = ae.length > 2 && ae[2] !== undefined ? ae[2] : {};
                      h = ae.length > 3 ? ae[3] : undefined;
                      p = f.theme ? (0, X.mergeConfig)(a[f.theme], (n = f.config) !== null && n !== void 0 ? n : {}) : f.config;
                      d = (0, X.isBoolean)(f.actions) ? f.actions : Ki({}, Ca, (i = f.actions) !== null && i !== void 0 ? i : {});
                      v = La(La({}, Fa), f.i18n);
                      g = (o = f.renderer) !== null && o !== void 0 ? o : "canvas";
                      m = (s = f.logLevel) !== null && s !== void 0 ? s : Ra.Warn;
                      y = (l = f.downloadFileName) !== null && l !== void 0 ? l : "visualization";
                      b = typeof t === "string" ? document.querySelector(t) : t;
                      if (b) {
                        se.next = 12;
                        break;
                      }
                      throw new Error("".concat(t, " does not exist"));
                    case 12:
                      if (f.defaultStyle !== false) {
                        E = "vega-embed-style";
                        (w = qa(b)), (x = w.root), (O = w.rootContainer);
                        if (!x.getElementById(E)) {
                          A = document.createElement("style");
                          A.id = E;
                          A.innerHTML = f.defaultStyle === undefined || f.defaultStyle === true ? Zi.toString() : f.defaultStyle;
                          O.appendChild(A);
                        }
                      }
                      N = Ua(r, f.mode);
                      S = _a[N](r, p);
                      if (N === "vega-lite") {
                        if (S.$schema) {
                          L = oe(S.$schema);
                          if (!qi(Pa.vega, "^".concat(L.version.slice(1)))) {
                            console.warn("The compiled spec uses Vega ".concat(L.version, ", but current version is v").concat(Pa.vega, "."));
                          }
                        }
                      }
                      b.classList.add("vega-embed");
                      if (d) {
                        b.classList.add("has-actions");
                      }
                      b.innerHTML = "";
                      T = b;
                      if (d) {
                        R = document.createElement("div");
                        R.classList.add(za);
                        b.appendChild(R);
                        T = R;
                      }
                      D = f.patch;
                      if (D) {
                        S = D instanceof Function ? D(S) : I(S, D, true, false).newDocument;
                      }
                      if (f.formatLocale) {
                        Ra.formatLocale(f.formatLocale);
                      }
                      if (f.timeFormatLocale) {
                        Ra.timeFormatLocale(f.timeFormatLocale);
                      }
                      if (f.expressionFunctions) {
                        for (k in f.expressionFunctions) {
                          C = f.expressionFunctions[k];
                          if ("fn" in C) {
                            Ra.expressionFunction(k, C.fn, C["visitor"]);
                          } else if (C instanceof Function) {
                            Ra.expressionFunction(k, C);
                          }
                        }
                      }
                      F = f.ast;
                      j = Ra.parse(S, N === "vega-lite" ? {} : p, { ast: F });
                      P = new (f.viewClass || Ra.View)(
                        j,
                        La(
                          { loader: h, logLevel: m, renderer: g },
                          F
                            ? { expr: (c = (u = Ra.expressionInterpreter) !== null && u !== void 0 ? u : f.expr) !== null && c !== void 0 ? c : ne }
                            : {}
                        )
                      );
                      P.addSignalListener("autosize", (e, t) => {
                        var r = t.type;
                        if (r == "fit-x") {
                          T.classList.add("fit-x");
                          T.classList.remove("fit-y");
                        } else if (r == "fit-y") {
                          T.classList.remove("fit-x");
                          T.classList.add("fit-y");
                        } else if (r == "fit") {
                          T.classList.add("fit-x", "fit-y");
                        } else {
                          T.classList.remove("fit-x", "fit-y");
                        }
                      });
                      if (f.tooltip !== false) {
                        _ = Ba(f.tooltip) ? f.tooltip : new mr(f.tooltip === true ? {} : f.tooltip).call;
                        P.tooltip(_);
                      }
                      M = f.hover;
                      if (M === undefined) {
                        M = N === "vega";
                      }
                      if (M) {
                        (z = typeof M === "boolean" ? {} : M), (B = z.hoverSet), (G = z.updateSet);
                        P.hover(B, G);
                      }
                      if (f) {
                        if (f.width != null) {
                          P.width(f.width);
                        }
                        if (f.height != null) {
                          P.height(f.height);
                        }
                        if (f.padding != null) {
                          P.padding(f.padding);
                        }
                      }
                      se.next = 37;
                      return P.initialize(T, f.bind).runAsync();
                    case 37:
                      if (!(d !== false)) {
                        se.next = 63;
                        break;
                      }
                      $ = b;
                      if (f.defaultStyle !== false) {
                        W = document.createElement("details");
                        W.title = v.CLICK_TO_VIEW_ACTIONS;
                        b.append(W);
                        $ = W;
                        H = document.createElement("summary");
                        H.innerHTML = Ma;
                        W.append(H);
                        U = (e) => {
                          if (!W.contains(e.target)) {
                            W.removeAttribute("open");
                          }
                        };
                        document.addEventListener("click", U);
                      }
                      Y = document.createElement("div");
                      $.append(Y);
                      Y.classList.add("vega-actions");
                      if (!(d === true || d.export !== false)) {
                        se.next = 60;
                        break;
                      }
                      J = Aa(["svg", "png"]);
                      se.prev = 45;
                      Q = cn.mark(function e() {
                        var t, r, n, i;
                        return cn.wrap(function e(a) {
                          while (1)
                            switch ((a.prev = a.next)) {
                              case 0:
                                t = q.value;
                                if (d === true || d.export === true || d.export[t]) {
                                  r = v["".concat(t.toUpperCase(), "_ACTION")];
                                  n = document.createElement("a");
                                  i = (0, X.isObject)(f.scaleFactor) ? f.scaleFactor[t] : f.scaleFactor;
                                  n.text = r;
                                  n.href = "#";
                                  n.target = "_blank";
                                  n.download = "".concat(y, ".").concat(t);
                                  n.addEventListener(
                                    "mousedown",
                                    (function () {
                                      var e = Nr(
                                        cn.mark(function e(r) {
                                          var n;
                                          return cn.wrap(
                                            function e(a) {
                                              while (1)
                                                switch ((a.prev = a.next)) {
                                                  case 0:
                                                    r.preventDefault();
                                                    a.next = 3;
                                                    return P.toImageURL(t, i);
                                                  case 3:
                                                    n = a.sent;
                                                    this.href = n;
                                                  case 5:
                                                  case "end":
                                                    return a.stop();
                                                }
                                            },
                                            e,
                                            this
                                          );
                                        })
                                      );
                                      return function (t) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  );
                                  Y.append(n);
                                }
                              case 2:
                              case "end":
                                return a.stop();
                            }
                        }, e);
                      });
                      J.s();
                    case 48:
                      if ((q = J.n()).done) {
                        se.next = 52;
                        break;
                      }
                      return se.delegateYield(Q(), "t0", 50);
                    case 50:
                      se.next = 48;
                      break;
                    case 52:
                      se.next = 57;
                      break;
                    case 54:
                      se.prev = 54;
                      se.t1 = se["catch"](45);
                      J.e(se.t1);
                    case 57:
                      se.prev = 57;
                      J.f();
                      return se.finish(57);
                    case 60:
                      if (d === true || d.source !== false) {
                        Z = document.createElement("a");
                        Z.text = v.SOURCE_ACTION;
                        Z.href = "#";
                        Z.addEventListener("click", function (e) {
                          var t, n;
                          Ga(
                            V()(r),
                            (t = f.sourceHeader) !== null && t !== void 0 ? t : "",
                            (n = f.sourceFooter) !== null && n !== void 0 ? n : "",
                            N
                          );
                          e.preventDefault();
                        });
                        Y.append(Z);
                      }
                      if (N === "vega-lite" && (d === true || d.compiled !== false)) {
                        K = document.createElement("a");
                        K.text = v.COMPILED_ACTION;
                        K.href = "#";
                        K.addEventListener("click", function (e) {
                          var t, r;
                          Ga(
                            V()(S),
                            (t = f.sourceHeader) !== null && t !== void 0 ? t : "",
                            (r = f.sourceFooter) !== null && r !== void 0 ? r : "",
                            "vega"
                          );
                          e.preventDefault();
                        });
                        Y.append(K);
                      }
                      if (d === true || d.editor !== false) {
                        te = (ee = f.editorUrl) !== null && ee !== void 0 ? ee : "https://vega.github.io/editor/";
                        re = document.createElement("a");
                        re.text = v.EDITOR_ACTION;
                        re.href = "#";
                        re.addEventListener("click", function (e) {
                          Qi(window, te, { config: p, mode: N, renderer: g, spec: V()(r) });
                          e.preventDefault();
                        });
                        Y.append(re);
                      }
                    case 63:
                      return se.abrupt("return", { view: P, spec: r, vgSpec: S, finalize: ie, embedOptions: f });
                    case 64:
                    case "end":
                      return se.stop();
                  }
              },
              e,
              null,
              [[45, 54, 57, 60]]
            );
          })
        );
        return Za.apply(this, arguments);
      }
    },
    26372: (e, t, r) => {
      "use strict";
      r.d(t, {
        $D: () => E,
        $G: () => Y,
        $P: () => me,
        AU: () => T,
        B: () => de,
        B2: () => H,
        BS: () => Q,
        Cc: () => Oe,
        D_: () => p,
        EV: () => Ie,
        Eb: () => xe,
        Et: () => be,
        G4: () => De,
        Gv: () => N,
        KH: () => B,
        Kg: () => we,
        Lm: () => ge,
        Ln: () => Te,
        M1: () => je,
        N6: () => i,
        NV: () => b,
        P$: () => w,
        PK: () => ve,
        R2: () => x,
        Ro: () => k,
        SW: () => W,
        Tn: () => Z,
        UD: () => ee,
        VC: () => z,
        V_: () => te,
        X$: () => se,
        Xx: () => le,
        YO: () => q,
        ZZ: () => f,
        ay: () => Ce,
        bX: () => pe,
        co: () => G,
        cy: () => I,
        dI: () => Fe,
        dY: () => ae,
        eV: () => Le,
        gd: () => Ee,
        h1: () => Ne,
        id: () => h,
        io: () => L,
        iv: () => u,
        lL: () => X,
        mQ: () => ue,
        me: () => m,
        n: () => ce,
        nG: () => he,
        nS: () => a,
        oV: () => $,
        r$: () => Re,
        rt: () => _e,
        sY: () => n,
        se: () => D,
        sg: () => oe,
        ux: () => Se,
        vF: () => A,
        vN: () => g,
        v_: () => d,
        vu: () => J,
        xH: () => v,
        xZ: () => ye,
        xv: () => Pe,
        y: () => O,
        z3: () => c,
        zy: () => U,
      });
      function n(e, t, r) {
        e.fields = t || [];
        e.fname = r;
        return e;
      }
      function i(e) {
        return e == null ? null : e.fname;
      }
      function a(e) {
        return e == null ? null : e.fields;
      }
      function o(e) {
        return e.length === 1 ? s(e[0]) : l(e);
      }
      const s = (e) =>
        function (t) {
          return t[e];
        };
      const l = (e) => {
        const t = e.length;
        return function (r) {
          for (let n = 0; n < t; ++n) {
            r = r[e[n]];
          }
          return r;
        };
      };
      function c(e) {
        throw Error(e);
      }
      function u(e) {
        const t = [],
          r = e.length;
        let n = null,
          i = 0,
          a = "",
          o,
          s,
          l;
        e = e + "";
        function u() {
          t.push(a + e.substring(o, s));
          a = "";
          o = s + 1;
        }
        for (o = s = 0; s < r; ++s) {
          l = e[s];
          if (l === "\\") {
            a += e.substring(o, s++);
            o = s;
          } else if (l === n) {
            u();
            n = null;
            i = -1;
          } else if (n) {
            continue;
          } else if (o === i && l === '"') {
            o = s + 1;
            n = l;
          } else if (o === i && l === "'") {
            o = s + 1;
            n = l;
          } else if (l === "." && !i) {
            if (s > o) {
              u();
            } else {
              o = s + 1;
            }
          } else if (l === "[") {
            if (s > o) u();
            i = o = s + 1;
          } else if (l === "]") {
            if (!i) c("Access path missing open bracket: " + e);
            if (i > 0) u();
            i = 0;
            o = s + 1;
          }
        }
        if (i) c("Access path missing closing bracket: " + e);
        if (n) c("Access path missing closing quote: " + e);
        if (s > o) {
          s++;
          u();
        }
        return t;
      }
      function f(e, t, r) {
        const i = u(e);
        e = i.length === 1 ? i[0] : e;
        return n(((r && r.get) || o)(i), [e], t || e);
      }
      const h = f("id");
      const p = n((e) => e, [], "identity");
      const d = n(() => 0, [], "zero");
      const v = n(() => 1, [], "one");
      const g = n(() => true, [], "true");
      const m = n(() => false, [], "false");
      function y(e, t, r) {
        const n = [t].concat([].slice.call(r));
        console[e].apply(console, n);
      }
      const b = 0;
      const E = 1;
      const w = 2;
      const x = 3;
      const O = 4;
      function A(e, t) {
        let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : y;
        let n = e || b;
        return {
          level(e) {
            if (arguments.length) {
              n = +e;
              return this;
            } else {
              return n;
            }
          },
          error() {
            if (n >= E) r(t || "error", "ERROR", arguments);
            return this;
          },
          warn() {
            if (n >= w) r(t || "warn", "WARN", arguments);
            return this;
          },
          info() {
            if (n >= x) r(t || "log", "INFO", arguments);
            return this;
          },
          debug() {
            if (n >= O) r(t || "log", "DEBUG", arguments);
            return this;
          },
        };
      }
      var I = Array.isArray;
      function N(e) {
        return e === Object(e);
      }
      const S = (e) => e !== "__proto__";
      function L() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }
        return t.reduce((e, t) => {
          for (const r in t) {
            if (r === "signals") {
              e.signals = R(e.signals, t.signals);
            } else {
              const n = r === "legend" ? { layout: 1 } : r === "style" ? true : null;
              T(e, r, t[r], n);
            }
          }
          return e;
        }, {});
      }
      function T(e, t, r, n) {
        if (!S(t)) return;
        let i, a;
        if (N(r) && !I(r)) {
          a = N(e[t]) ? e[t] : (e[t] = {});
          for (i in r) {
            if (n && (n === true || n[i])) {
              T(a, i, r[i]);
            } else if (S(i)) {
              a[i] = r[i];
            }
          }
        } else {
          e[t] = r;
        }
      }
      function R(e, t) {
        if (e == null) return t;
        const r = {},
          n = [];
        function i(e) {
          if (!r[e.name]) {
            r[e.name] = 1;
            n.push(e);
          }
        }
        t.forEach(i);
        e.forEach(i);
        return n;
      }
      function D(e) {
        return e[e.length - 1];
      }
      function k(e) {
        return e == null || e === "" ? null : +e;
      }
      const C = (e) => (t) => e * Math.exp(t);
      const F = (e) => (t) => Math.log(e * t);
      const j = (e) => (t) => Math.sign(t) * Math.log1p(Math.abs(t / e));
      const P = (e) => (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e;
      const _ = (e) => (t) => (t < 0 ? -Math.pow(-t, e) : Math.pow(t, e));
      function M(e, t, r, n) {
        const i = r(e[0]),
          a = r(D(e)),
          o = (a - i) * t;
        return [n(i - o), n(a - o)];
      }
      function z(e, t) {
        return M(e, t, k, p);
      }
      function B(e, t) {
        var r = Math.sign(e[0]);
        return M(e, t, F(r), C(r));
      }
      function G(e, t, r) {
        return M(e, t, _(r), _(1 / r));
      }
      function U(e, t, r) {
        return M(e, t, j(r), P(r));
      }
      function V(e, t, r, n, i) {
        const a = n(e[0]),
          o = n(D(e)),
          s = t != null ? n(t) : (a + o) / 2;
        return [i(s + (a - s) * r), i(s + (o - s) * r)];
      }
      function X(e, t, r) {
        return V(e, t, r, k, p);
      }
      function $(e, t, r) {
        const n = Math.sign(e[0]);
        return V(e, t, r, F(n), C(n));
      }
      function W(e, t, r, n) {
        return V(e, t, r, _(n), _(1 / n));
      }
      function H(e, t, r, n) {
        return V(e, t, r, j(n), P(n));
      }
      function Y(e) {
        return 1 + ~~(new Date(e).getMonth() / 3);
      }
      function J(e) {
        return 1 + ~~(new Date(e).getUTCMonth() / 3);
      }
      function q(e) {
        return e != null ? (I(e) ? e : [e]) : [];
      }
      function Q(e, t, r) {
        let n = e[0],
          i = e[1],
          a;
        if (i < n) {
          a = i;
          i = n;
          n = a;
        }
        a = i - n;
        return a >= r - t ? [t, r] : [(n = Math.min(Math.max(n, t), r - a)), n + a];
      }
      function Z(e) {
        return typeof e === "function";
      }
      const K = "descending";
      function ee(e, t, r) {
        r = r || {};
        t = q(t) || [];
        const i = [],
          o = [],
          s = {},
          l = r.comparator || re;
        q(e).forEach((e, n) => {
          if (e == null) return;
          i.push(t[n] === K ? -1 : 1);
          o.push((e = Z(e) ? e : f(e, null, r)));
          (a(e) || []).forEach((e) => (s[e] = 1));
        });
        return o.length === 0 ? null : n(l(o, i), Object.keys(s));
      }
      const te = (e, t) =>
        (e < t || e == null) && t != null
          ? -1
          : (e > t || t == null) && e != null
            ? 1
            : ((t = t instanceof Date ? +t : t), (e = e instanceof Date ? +e : e)) !== e && t === t
              ? -1
              : t !== t && e === e
                ? 1
                : 0;
      const re = (e, t) => (e.length === 1 ? ne(e[0], t[0]) : ie(e, t, e.length));
      const ne = (e, t) =>
        function (r, n) {
          return te(e(r), e(n)) * t;
        };
      const ie = (e, t, r) => {
        t.push(0);
        return function (n, i) {
          let a,
            o = 0,
            s = -1;
          while (o === 0 && ++s < r) {
            a = e[s];
            o = te(a(n), a(i));
          }
          return o * t[s];
        };
      };
      function ae(e) {
        return Z(e) ? e : () => e;
      }
      function oe(e, t) {
        let r;
        return (n) => {
          if (r) clearTimeout(r);
          r = setTimeout(() => (t(n), (r = null)), e);
        };
      }
      function se(e) {
        for (let t, r, n = 1, i = arguments.length; n < i; ++n) {
          t = arguments[n];
          for (r in t) {
            e[r] = t[r];
          }
        }
        return e;
      }
      function le(e, t) {
        let r = 0,
          n,
          i,
          a,
          o;
        if (e && (n = e.length)) {
          if (t == null) {
            for (i = e[r]; r < n && (i == null || i !== i); i = e[++r]);
            a = o = i;
            for (; r < n; ++r) {
              i = e[r];
              if (i != null) {
                if (i < a) a = i;
                if (i > o) o = i;
              }
            }
          } else {
            for (i = t(e[r]); r < n && (i == null || i !== i); i = t(e[++r]));
            a = o = i;
            for (; r < n; ++r) {
              i = t(e[r]);
              if (i != null) {
                if (i < a) a = i;
                if (i > o) o = i;
              }
            }
          }
        }
        return [a, o];
      }
      function ce(e, t) {
        const r = e.length;
        let n = -1,
          i,
          a,
          o,
          s,
          l;
        if (t == null) {
          while (++n < r) {
            a = e[n];
            if (a != null && a >= a) {
              i = o = a;
              break;
            }
          }
          if (n === r) return [-1, -1];
          s = l = n;
          while (++n < r) {
            a = e[n];
            if (a != null) {
              if (i > a) {
                i = a;
                s = n;
              }
              if (o < a) {
                o = a;
                l = n;
              }
            }
          }
        } else {
          while (++n < r) {
            a = t(e[n], n, e);
            if (a != null && a >= a) {
              i = o = a;
              break;
            }
          }
          if (n === r) return [-1, -1];
          s = l = n;
          while (++n < r) {
            a = t(e[n], n, e);
            if (a != null) {
              if (i > a) {
                i = a;
                s = n;
              }
              if (o < a) {
                o = a;
                l = n;
              }
            }
          }
        }
        return [s, l];
      }
      function ue(e, t) {
        return Object.hasOwn(e, t);
      }
      const fe = {};
      function he(e) {
        let t = {},
          r;
        function n(e) {
          return ue(t, e) && t[e] !== fe;
        }
        const i = {
          size: 0,
          empty: 0,
          object: t,
          has: n,
          get(e) {
            return n(e) ? t[e] : undefined;
          },
          set(e, r) {
            if (!n(e)) {
              ++i.size;
              if (t[e] === fe) --i.empty;
            }
            t[e] = r;
            return this;
          },
          delete(e) {
            if (n(e)) {
              --i.size;
              ++i.empty;
              t[e] = fe;
            }
            return this;
          },
          clear() {
            i.size = i.empty = 0;
            i.object = t = {};
          },
          test(e) {
            if (arguments.length) {
              r = e;
              return i;
            } else {
              return r;
            }
          },
          clean() {
            const e = {};
            let n = 0;
            for (const i in t) {
              const a = t[i];
              if (a !== fe && (!r || !r(a))) {
                e[i] = a;
                ++n;
              }
            }
            i.size = n;
            i.empty = 0;
            i.object = t = e;
          },
        };
        if (e)
          Object.keys(e).forEach((t) => {
            i.set(t, e[t]);
          });
        return i;
      }
      function pe(e, t, r, n, i, a) {
        if (!r && r !== 0) return a;
        const o = +r;
        let s = e[0],
          l = D(e),
          c;
        if (l < s) {
          c = s;
          s = l;
          l = c;
        }
        c = Math.abs(t - s);
        const u = Math.abs(l - t);
        return c < u && c <= o ? n : u <= o ? i : a;
      }
      function de(e, t, r) {
        const n = (e.prototype = Object.create(t.prototype));
        Object.defineProperty(n, "constructor", { value: e, writable: true, enumerable: true, configurable: true });
        return se(n, r);
      }
      function ve(e, t, r, n) {
        let i = t[0],
          a = t[t.length - 1],
          o;
        if (i > a) {
          o = i;
          i = a;
          a = o;
        }
        r = r === undefined || r;
        n = n === undefined || n;
        return (r ? i <= e : i < e) && (n ? e <= a : e < a);
      }
      function ge(e) {
        return typeof e === "boolean";
      }
      function me(e) {
        return Object.prototype.toString.call(e) === "[object Date]";
      }
      function ye(e) {
        return e && Z(e[Symbol.iterator]);
      }
      function be(e) {
        return typeof e === "number";
      }
      function Ee(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]";
      }
      function we(e) {
        return typeof e === "string";
      }
      function xe(e, t, r) {
        if (e) {
          e = t ? q(e).map((e) => e.replace(/\\(.)/g, "$1")) : q(e);
        }
        const i = e && e.length,
          a = (r && r.get) || o,
          s = (e) => a(t ? [e] : u(e));
        let l;
        if (!i) {
          l = function () {
            return "";
          };
        } else if (i === 1) {
          const t = s(e[0]);
          l = function (e) {
            return "" + t(e);
          };
        } else {
          const t = e.map(s);
          l = function (e) {
            let r = "" + t[0](e),
              n = 0;
            while (++n < i) r += "|" + t[n](e);
            return r;
          };
        }
        return n(l, e, "key");
      }
      function Oe(e, t) {
        const r = e[0],
          n = D(e),
          i = +t;
        return !i ? r : i === 1 ? n : r + i * (n - r);
      }
      const Ae = 1e4;
      function Ie(e) {
        e = +e || Ae;
        let t, r, n;
        const i = () => {
          t = {};
          r = {};
          n = 0;
        };
        const a = (i, a) => {
          if (++n > e) {
            r = t;
            t = {};
            n = 1;
          }
          return (t[i] = a);
        };
        i();
        return {
          clear: i,
          has: (e) => ue(t, e) || ue(r, e),
          get: (e) => (ue(t, e) ? t[e] : ue(r, e) ? a(e, r[e]) : undefined),
          set: (e, r) => (ue(t, e) ? (t[e] = r) : a(e, r)),
        };
      }
      function Ne(e, t, r, n) {
        const i = t.length,
          a = r.length;
        if (!a) return t;
        if (!i) return r;
        const o = n || new t.constructor(i + a);
        let s = 0,
          l = 0,
          c = 0;
        for (; s < i && l < a; ++c) {
          o[c] = e(t[s], r[l]) > 0 ? r[l++] : t[s++];
        }
        for (; s < i; ++s, ++c) {
          o[c] = t[s];
        }
        for (; l < a; ++l, ++c) {
          o[c] = r[l];
        }
        return o;
      }
      function Se(e, t) {
        let r = "";
        while (--t >= 0) r += e;
        return r;
      }
      function Le(e, t, r, n) {
        const i = r || " ",
          a = e + "",
          o = t - a.length;
        return o <= 0 ? a : n === "left" ? Se(i, o) + a : n === "center" ? Se(i, ~~(o / 2)) + a + Se(i, Math.ceil(o / 2)) : a + Se(i, o);
      }
      function Te(e) {
        return (e && D(e) - e[0]) || 0;
      }
      function Re(e) {
        return I(e) ? "[" + e.map(Re) + "]" : N(e) || we(e) ? JSON.stringify(e).replace("\u2028", "\\u2028").replace("\u2029", "\\u2029") : e;
      }
      function De(e) {
        return e == null || e === "" ? null : !e || e === "false" || e === "0" ? false : !!e;
      }
      const ke = (e) => (be(e) ? e : me(e) ? e : Date.parse(e));
      function Ce(e, t) {
        t = t || ke;
        return e == null || e === "" ? null : t(e);
      }
      function Fe(e) {
        return e == null || e === "" ? null : e + "";
      }
      function je(e) {
        const t = {},
          r = e.length;
        for (let n = 0; n < r; ++n) t[e[n]] = true;
        return t;
      }
      function Pe(e, t, r, n) {
        const i = n != null ? n : "…",
          a = e + "",
          o = a.length,
          s = Math.max(0, t - i.length);
        return o <= t
          ? a
          : r === "left"
            ? i + a.slice(o - s)
            : r === "center"
              ? a.slice(0, Math.ceil(s / 2)) + i + a.slice(o - ~~(s / 2))
              : a.slice(0, s) + i;
      }
      function _e(e, t, r) {
        if (e) {
          if (t) {
            const n = e.length;
            for (let i = 0; i < n; ++i) {
              const n = t(e[i]);
              if (n) r(n, i, e);
            }
          } else {
            e.forEach(r);
          }
        }
      }
    },
  },
]);
